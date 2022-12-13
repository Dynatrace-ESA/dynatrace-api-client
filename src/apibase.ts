import { dynatraceSaaSUrlRegex, dynatraceTokenRegex, dynatraceUrlRegex } from '@dt-esa/platform-constants';
import { DynatraceConnection } from "./types/dynatrace-connection";
import { TokenMetadata } from "./api/generated/env-v1";
import { knownScopes } from './types/options';
import axios from 'axios';
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

    constructor(protected environment: DynatraceConnection, private apiRoute: string, private customAxios?: any) {

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
            "unknown"
    }

    private resolveUrl() {
        if (this.environment.baseUrl || this.environment.tenantId) {
            if (!this.environment.baseUrl) throw "Base url does not exist.";
            if (!this.environment.tenantId) throw "";
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
        ...params
    }): Promise<T> => {
        const token: string = this.environment.token;
        const apiPath: string = fullPath || this.apiRoute + path;
        const tenantUrl: string = this.resolveUrl();

        // Validation of assignments.
        if (!apiPath) throw "Missing API Path.";
        if (!method)  throw "Missing HTTP Method.";
        if (!token)   throw "Missing API Token.";
        if (/^(PUT|POST)$/i.test(method) && !body) throw "Missing Payload.";

        headers['Authorization'] = 'Api-Token ' + token;

        let data;
        let tries = 0;
        let isFailed = false;
        do {
            let id = ctxId++;

            DynatraceApiClient.createConnection(id, tenantUrl + apiPath, method);

            try {
                const res: any = await axios({
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
                isFailed = false;
            }
            catch(err) {
                DynatraceApiClient.closeConnection(id, err);
                if (err.status == 429 || err.status == 502)
                    isFailed = true;
            }

            // 10 retries, exit if we get a non-retry signaling code.
        } while(tries++ < 10 && isFailed)

        return data as T;
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

        throw Error("Invalid Token: " + token);
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
                throw `Encountered unknown permission ${p}`;
        });


        const sTime = new Date().getTime();
        this.log.info("Connecting to your Dynatrace instance...");

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
                throw `API token [${this.tokenId}] on environment [${this.environmentId}] is missing permission(s) [${missingPermissions.join()}].`;

        }
        catch (ex) {
            console.log(ex)
            throw `Failed to connect to the Dynatrace API with token [${this.tokenId}] on environment [${this.environmentId}].`;
        }

        if (tokenMeta.revoked)
            throw `API token [${this.tokenId}] on environment [${this.environmentId}] is revoked.`;

        if (tokenMeta.expires && (tokenMeta.expires < new Date().getTime()))
            throw `API token [${this.tokenId}] on environment [${this.environmentId}] is expired.`;


        const d = new Date().getTime() - sTime;
        this.log.info(`Connected to your Dynatrace instance in ${d} ms`);
        return d;
    }

    protected createConnectionString(environment: DynatraceConnection, mode) {
        if (!environment.token)
            throw "Connection Token is not present.";

        if (mode != 'env') {
            if (environment.baseUrl || environment.tenantId)
                throw "Tenant ID and Base URL may not be specified on this API interface.";
            if (!environment.url)
                throw "Connection URL is not present.";

            return;
        }

        if (!environment.url)
            throw "Connection URL is not present.";

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
            throw 'You must provide a valid SaaS URL or Managed URL in the format "https://abc12345.live.dynatrace.com/" or "https://my.managed-dynatrace.local/e/12345678-1234-1234-1234-123456789abc/"';
        if (!dynatraceTokenRegex.test(environment.token))
            throw "Connection Token is not valid.";
    }
}
