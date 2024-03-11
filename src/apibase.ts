import { dynatraceSaaSUrlRegex, dynatraceTokenRegex, dynatraceUrlRegex } from '@dt-esa/platform-constants';
import { DynatraceConnection } from "./types/dynatrace-connection";
import { TokenMetadata } from "./api/generated/env-v1";
import { APIOptions, RequestOptions, knownScopes } from './types/options';
import axios, { AxiosStatic } from 'axios';
import { Subject } from 'rxjs';

export class ConnectionCreatedEvent { 
    constructor(public evt: { url: string, method: string }) {}
}
export class ConnectionClosedEvent { 
    constructor(public evt: { url: string, method: string, error?: Error }) {}
}
export class ConnectionProgressEvent { 
    constructor(public evt: { url: string, method: string, state: string, progress: number }) {}
}
// export type ConnectionProgressEvent = Subject<ConnectionCreatedEvent | ConnectionClosedEvent | ConnectionProgressEvent>;

/**
 * Singleton class that you can listen to the "onObservable" event 
 */
export class DynatraceApiClient {
    private static _connections = 0;
    public static get connections() {
        return this._connections;
    }

    private static observables: {[key: string]: {
        url: string,
        method: string, 
        subject: Subject<any>
    }} = {};

    public static createConnection(id: number, url: string, method: string) {
        
        this.observables[id] = {
            url, 
            method,
            subject: new Subject()
        }
        // Bind new observable on the export
        this.callbacks.forEach(cb => {
            cb(this.observables[id]);
        });
        this.observables[id].subject.next(
            new ConnectionCreatedEvent({
                url: this.observables[id].url,
                method: this.observables[id].method,
            })
        );
    }

    public static closeConnection(id: number, error?: any) {
        this.observables[id].subject.next(
            new ConnectionClosedEvent({
                url: this.observables[id].url,
                method: this.observables[id].method,
                error
            })
        );
        this.observables[id].subject.complete(); // ???
    }

    public static onProgress(id: number, mode: "up" | "down", progress: number) {
        this.observables[id].subject.next(
            new ConnectionProgressEvent({
                url: this.observables[id].url,
                method: this.observables[id].method,
                state: mode,
                progress: progress
            })
        )
    }

    private static callbacks = [];
    public static onEvent(callback: (observable: Subject<ConnectionCreatedEvent | ConnectionClosedEvent | ConnectionProgressEvent>) => {}) {
        this.callbacks.push(callback);
    }
    public static offEvent(callback: any) {
        this.callbacks.splice(this.callbacks.findIndex(c => c === callback), 1);
    }
}

const sleep = t => new Promise(r => setTimeout(r, t));

let ctxId = 0;

/**
 * Base API handler class. This is inherited for the generated API clients.
 */
export class APIBase {
    private tokenId: string;
    private environmentId: string;
    private log = {
        info: (text: string) => console.info(text),
        warn: (text: string) => console.warn(text),
        error: (text: string) => console.error(text)
    };

    constructor(
        protected environment: DynatraceConnection, 
        private apiRoute: string,
        protected options: APIOptions = {}
    ) {
        if (typeof environment != "object")
            throw new Error("Cannot create without an environment");
        if (typeof environment?.token != 'string')
            throw new Error("Cannot create an environment without a token");

        // Get a token ID that IS NOT the entire token.
        this.tokenId = this.environment.token.includes('.')
            ? this.environment.token.slice(0, 8)
            : this.environment.token.split('.').slice(0, 2).join('.');

        const envUrl = this.resolveUrl();

        // Get the environment ID for logging purposes.
        this.environmentId = dynatraceUrlRegex.test(envUrl) ?
            envUrl.match(dynatraceUrlRegex).groups['saasTenantId'] ||
            envUrl.match(dynatraceUrlRegex).groups['managedTenantId'] ||
            envUrl.match(dynatraceUrlRegex).groups['activeGateTenantId'] :
            "unknown";
        
        this.options.retryDelay = typeof options.retryDelay == 'number' ? options.retryDelay : 1000;
        this.options.retryCount = typeof options.retryCount == 'number' ? options.retryCount : 10;

        if (options.logger)
            this.log = options.logger;
    }

    private resolveUrl() {
        if (this.environment.baseUrl || this.environment.tenantId) {
            if (!this.environment.baseUrl) throw new Error("Base url does not exist.");
            if (!this.environment.tenantId) throw new Error("Could not identify tenant.");
            return this.environment.baseUrl + '/' + this.environment.tenantId + '/';
        }

        return this.environment.url;
    }

    public request = async <T = any, E = any>({ 
        body = null, 
        method = "GET", 
        path, 
        fullPath = null, 
        query = {}, 
        headers = {}, 
        paging = true,
        onPageReceived = null,
        ...params
    }): Promise<T> => {
        const token: string = this.environment.token;
        const apiPath: string = fullPath || this.apiRoute + path;
        const tenantUrl: string = this.resolveUrl();

        // Validation of assignments.
        if (!apiPath) throw new Error("Missing API Path.");
        if (!method)  throw new Error("Missing HTTP Method.");
        if (!token)   throw new Error("Missing API Token.");
        if (/^(PUT|POST)$/i.test(method) && !body) 
            throw new Error("Missing Payload.");

        headers['Authorization'] = 'Api-Token ' + token;

        // Apply custom headers.
        if (this.options.headers) {
            if (Array.isArray(this.options.headers))
                this.options.headers.forEach(h => headers[h.key] = h.value);
            else {
                Object.keys(this.options.headers).forEach(h => headers[h] = this.options.headers[h])
            }
        }

        let data;
        let tries = 0;
        let isFailed = false;
        do {
            let id = ctxId++;

            if (isFailed) {
                this.log.info(`Request: ${apiPath} got 429 -- waiting ${this.options.retryDelay}ms`);
                await sleep(this.options.retryDelay);
            }
                
            DynatraceApiClient.createConnection(id, tenantUrl + apiPath, method);

            try {
                const res: any = await ((this.options.customAxios || axios) as AxiosStatic)({
                    ...params,
                    url: tenantUrl + apiPath,
                    params: query,
                    method: method as any,
                    data: body,
                    headers,
                    // browser only
                    onUploadProgress: function (evt) {
                        DynatraceApiClient.onProgress(id, "up", 1)
                    },
                    // browser only
                    onDownloadProgress: function (evt) {
                        DynatraceApiClient.onProgress(id, "down", 1)
                    },
                });
                DynatraceApiClient.closeConnection(id);

                data = res.data;

                // If there are more pages to go through, begin running autoPage.
                if (typeof data.nextPageKey == "string" && paging != false) {
                    onPageReceived?.(data);
                    return this.autoPage(apiPath, data, {
                        onPageReceived,
                    }) as any as T;
                }
                // If there is only one page and onPageReceived is specified
                else if (typeof onPageReceived == "function") {
                    onPageReceived(data);
                    return 1 as any;
                }
                else {
                    return data as T;
                }

                isFailed = false;
            }
            catch(err) {
                DynatraceApiClient.closeConnection(id, err);
                if (err.status == 429 || err.status == 502)
                    isFailed = true;
                else 
                    throw err;
            }

            // 10 retries, exit if we get a non-retry signaling code.
        } while (
            isFailed && (
                this.options.retryCount == -1 ||
                tries++ < this.options.retryCount
            )
        )
        
        if (tries >= this.options.retryCount) {
            this.log.error(`Request: ${apiPath} retried too many times ${tries}`);
        }

        return data as T;
    }

    /**
     * Receive the n pages left in the dataset.
     */
    private async autoPage(path: string, firstPage: Object, reqParams: RequestOptions) {
        const key = this.resolveEntries(path);

        const entries: Object[] = key ? firstPage : firstPage[key];

        if (!key || !Array.isArray(entries)) {
            // console.warn("Cannot automatically page data");
            return firstPage;
        }

        let nextPageKey = firstPage['nextPageKey'];
        do {
            const result = await this.request({
                path,
                method: "GET",
                format: "json",
                query: { nextPageKey },
                paging: false,
                ...reqParams
            });
            nextPageKey = result['nextPageKey'];

            const newEntries: Object[] = key ? result : result[key];

            if (typeof reqParams.onPageReceived == "function") {
                reqParams.onPageReceived(result);
            }
            else {
                entries.push(...newEntries);
            }
        }
        while (nextPageKey);

        if (typeof reqParams.onPageReceived == "function") {
            return 1;
        }
        else {
            return firstPage;
        }
    }

    private resolveEntries(path: string) {
        switch(true) {
            case /api\/v1\/userSessionQueryLanguage\/(table|tree)/    .test(path): return 'values';
            case /api\/v2\/entities/                                  .test(path): return 'entities';
            case /api\/v1\/oneagents/                                 .test(path): return 'hosts';
            case /api\/v1\/config\/clusterversion/                    .test(path): return 'version';
            case /api\/config\/v1\/(managementZones|autoTags)/        .test(path): return 'values';
            case /api\/v2\/entityTypes/                               .test(path): return 'types';
            case /api\/v2\/problems/                                  .test(path): return 'problems';
            case /api\/v2\/metrics\/query/                            .test(path): return 'result';
            case /api\/v2\/metrics/                                   .test(path): return 'metrics';
            case /api\/v2\/auditlogs/                                 .test(path): return 'auditLogs';
            case /api\/v2\/settings\/(schemas|objects)/               .test(path): return 'items';
            case /api\/v1\/synthetic\/monitors/                       .test(path): return 'monitors';
            case /api\/v2\/activeGates/                               .test(path): return 'activeGates';
            case /api\/v2\/tags/                                      .test(path): return 'tags';
        }
    }

    public useBase(url: string) {
        this.environment.baseUrl = url;
        return this;
    }
    public useTenant(id: string) {
        this.environment.tenantId = id;
        return this;
    }
    public useToken(token: string) {
        if (dynatraceTokenRegex.test(token)) {
            this.environment.token = token;
            return this;
        }

        throw new Error("Invalid Token: " + token);
    }
    public useUrl(url: string) {
        this.environment.url = url;
        return this;
    }


    public async testConnectivity(permissions: string[] = []) {

        permissions = permissions.map(p => {
            if (knownScopes.includes(p)) return p;

            // Our scope isn't perfectly equal to our known scope list.
            // Try to match a scope via a case-insensitive lookup with an added trim to handle any stray text.
            const guessScope = knownScopes.find(t => t.toLowerCase() == p.toLowerCase().trim());
            if (guessScope)
                return guessScope;
            else 
                throw new Error(`Encountered unknown permission ${p}`);
        });


        const sTime = new Date().getTime();
        this.log.info("Connecting to your Dynatrace instance");

        let tokenMeta: TokenMetadata;

        // Check if we can
        // 1. connect to the endpoint.
        // 2. if we have the permissions listed on the params
        try {
            // if (this.apiRoute.includes("config")) {

            // }
            // else {
                tokenMeta = await this.request<TokenMetadata>({
                    path: "",
                    fullPath: "api/v1/tokens/lookup",
                    method: "POST",
                    body: {
                        token: this.environment.token
                    }
                });
            // }

            // Check for missing permisisons on the token.
            const missingPermissions = permissions.filter(p => !tokenMeta.scopes.includes(p as any));
            if (missingPermissions.length > 0)
                throw new Error(`API token [${this.tokenId}] on environment [${this.environmentId}] is missing permission(s) [${missingPermissions.join()}].`);

        }
        catch (ex) {
            console.log(ex)
            throw new Error(`Failed to connect to the Dynatrace API with token [${this.tokenId}] on environment [${this.environmentId}].`);
        }

        if (tokenMeta.revoked)
            throw new Error(`API token [${this.tokenId}] on environment [${this.environmentId}] is revoked.`);

        if (tokenMeta.expires && (tokenMeta.expires < new Date().getTime()))
            throw new Error(`API token [${this.tokenId}] on environment [${this.environmentId}] is expired.`);


        const d = new Date().getTime() - sTime;
        this.log.info(`Connected to your Dynatrace instance in ${d} ms`);
        return d;
    }

    protected createConnectionString(environment: DynatraceConnection, mode) {
        if (!environment.token)
            throw new Error("Connection Token is not present.");

        if (mode != 'env') {
            if (environment.baseUrl || environment.tenantId)
                throw new Error("Tenant ID and Base URL may not be specified on this API interface.");
            if (!environment.url)
                throw new Error("Connection URL is not present.");

            return;
        }

        if (!environment.url)
            throw new Error("Connection URL is not present.");

        if (environment.url)
            environment.url = environment.url.trim();
        if (environment.baseUrl)
            environment.baseUrl = environment.baseUrl.trim();

        // Make sure the Environment URL is valid and correct.
        if (environment.url && !environment.url.startsWith("https://"))
            environment.url = "https://" + environment.url;

        if (environment.baseUrl && !environment.baseUrl.startsWith("https://"))
            environment.baseUrl = "https://" + environment.baseUrl;

        if (!environment.url.endsWith("/"))
            environment.url += "/";

        // TODO: Load balancers will break here
        if (!dynatraceUrlRegex.test(environment.url))
            console.warn('You must provide a valid SaaS URL or Managed URL in the format "https://abc12345.live.dynatrace.com/" or "https://my.managed-dynatrace.local/e/12345678-1234-1234-1234-123456789abc/"');
        if (!dynatraceTokenRegex.test(environment.token))
            console.warn("Connection Token is not valid.");
    }
}
