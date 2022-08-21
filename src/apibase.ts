import { dynatraceSaaSUrlRegex, dynatraceTokenRegex, dynatraceUrlRegex } from '@dt-esa/platform-constants';
import { DirectAPIRequest } from "@dt-esa/dynatrace-api-balancer";
import { DynatraceConnection } from "./types/dynatrace-connection";
import { TokenMetadata } from "./api/generated/env-v1";
import { knownScopes } from './types/options';

/**
 * Base API handler class. This is inherited for the generated API clients.
 */
export class APIBase {

    private requester: DirectAPIRequest;
    private tokenId: string;
    private environmentId: string;

    constructor(protected environment: DynatraceConnection, private apiRoute: string, private customAxios?: DirectAPIRequest) {
        this.requester = new DirectAPIRequest();

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

        const data: T = await this.requester.fetch<T>({
            ...params,
            url: tenantUrl + apiPath,
            params: query,
            method: method as any,
            data: body,
            headers,
        });

        return data;
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
        console.log("Connecting to your Dynatrace instance...");

        let tokenMeta: TokenMetadata;

        // Check if we can
        // 1. connect to the endpoint.
        // 2. if we have the permissions listed on the params
        try {
            if (this.apiRoute.includes("config")) {

            }
            else {
                tokenMeta = await this.request<TokenMetadata>({
                    path: "",
                    fullPath: "api/v1/tokens/lookup",
                    method: "POST",
                    body: {
                        token: this.environment.token
                    }
                });
            }
        }
        catch (ex) {
            throw `Failed to connect to the Dynatrace API with token [${this.tokenId}] on environment [${this.environmentId}].`;
        }

        if (tokenMeta.revoked)
            throw `API token [${this.tokenId}] on environment [${this.environmentId}] is revoked.`;

        if (tokenMeta.expires && (tokenMeta.expires < new Date().getTime()))
            throw `API token [${this.tokenId}] on environment [${this.environmentId}] is expired.`;


        console.log('Connected to your Dynatrace instance in', (new Date().getTime() - sTime), 'ms');
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
