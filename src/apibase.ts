import { dynatraceTokenRegex } from "@dt-esa/platform-constants";
import { DynatraceConnection } from ".";

export class APIBase {
    constructor(protected environment: DynatraceConnection) { }


    protected request<T = any, E = any>(...args): Promise<T> {
        throw "This method must be overridden.";
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
        if(dynatraceTokenRegex.test(token)){
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