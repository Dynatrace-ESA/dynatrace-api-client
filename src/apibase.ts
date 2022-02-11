import { dynatraceTokenRegex } from "@dt-esa/platform-constants";
import { DirectAPIRequest } from "@dt-esa/dynatrace-api-balancer";
import { DynatraceConnection } from "./types/dynatrace-connection";

/**
 * Base API handler class. This is inherited for the generated API clients.
 */
export class APIBase {

    private requester: DirectAPIRequest;

    constructor(protected environment: DynatraceConnection, private apiRoute: string, private customAxios?: DirectAPIRequest) {
        this.requester = new DirectAPIRequest();
    }

    private resolveUrl() {
        if (this.environment.baseUrl || this.environment.tenantId) {
            if (!this.environment.baseUrl) throw "Base url does not exist.";
            if (!this.environment.tenantId) throw "";
            return this.environment.baseUrl + '/' + this.environment.tenantId + '/';
        }

        return this.environment.url;
    }

    protected request = async <T = any, E = any>({ 
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
}
