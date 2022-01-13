import { dynatraceTokenRegex } from "@dt-esa/platform-constants";
import axios, { AxiosStatic } from "axios";
import { DynatraceConnection } from ".";

const sleep = (sleepTimeMs) => {
    return new Promise(r => setTimeout(r, sleepTimeMs));
};

export class APIBase {

    constructor(
        protected environment: DynatraceConnection, 
        private apiRoute: string,
        private customAxios?: AxiosStatic
        ) { }

    private resolveUrl() {
        if(this.environment.baseUrl || this.environment.tenantId){
            if(!this.environment.baseUrl) throw "Base url does not exist.";
            if(!this.environment.tenantId) throw "";
            return this.environment.baseUrl + '/' + this.environment.tenantId + '/';
        }

        return this.environment.url;
    }
    
    /**
     * Convert options map into query string.
     * @param opts 
     * @returns Query string
     */
    private optsToQueryString = (opts = {}): string => {
        let queryString = '';
        Object.keys(opts).forEach((optId, i) => {
            if (opts[optId] != undefined && ((typeof opts[optId] == 'object' && opts[optId].length > 0) || typeof opts[optId] != 'object')) {
                let params = '';
                if (typeof opts[optId] == 'object')
                    // tag=tag1&tag=tag2
                    params = `${optId}=${opts[optId].join(`&${optId}=`)}`;
                else
                    params = `${optId}=${opts[optId]}`;

                queryString += `${i == 0 ? '?' : '&'}${params}`;
            }
        });
        return queryString;
    }


    protected request = async <T = any, E = any>({ body = null, method = "GET", path, fullPath, query = {}, headers = {}, maxTries = 10, throttleDelay = 1000, ...params }): Promise<T> => {

        const token:       string      = this.environment.token;
        const apiPath:     string      = fullPath || this.apiRoute + path;
        const tenantUrl:   string      = this.resolveUrl();
        const axiosClient: AxiosStatic = this.customAxios || axios;

        // Validation of assignments.
        if (!axiosClient) throw "Missing Axios client.";
        if (!apiPath)     throw "Missing API Path.";
        if (!method)      throw "Missing HTTP Method.";
        if (!token)       throw "Missing API Token.";
        if (/^(PUT|POST)$/i.test(method) && !body) throw "Missing Payload.";

        let result: T | Array<any> = [];

        try {
            let tries = 0;

            let res;
            do {
                headers['Authorization'] = 'Api-Token ' + token;
                
                const targetUrl = tenantUrl + apiPath + this.optsToQueryString(query);

                console.debug("Running API Query", method, targetUrl);
                try {
                    res = (await axiosClient(targetUrl, { 
                        method: method as any,
                        data: body,
                        headers
                    }));
                }
                catch(ex){
                    const failure = {
                        url: `[${method}] ${targetUrl}`,
                        error: ex.response.statusText,
                        message: ex.response.data.message 
                            || ex.response.data.error?.error?.message 
                            || ex.response.data.error 
                    };
                    console.error(failure);
                    throw failure;
                }

                const errorMessage = res.data?.error?.message;
                if (res.status == 404 && errorMessage){
                    if (/userSessionQueryLanguage/i.test(apiPath))
                        throw { title: 'USQL Error', message: errorMessage };
                    else
                        throw { title: 'Error', message: errorMessage };
                }


                let violations = res.data?.error?.constraintViolations;
                if (res.status == 400 && violations) {
                    let payload = violations.map(v => `Path: ${v.path}\n Message: ${v.message}`).join('\n');

                    throw { title: 'Error', message: payload };
                }


                else if (res.status >= 500){
                    console.error("REST API Failure", res);
                    throw {
                        status: res.status,
                        error: res.statusText,
                        message: res.data.error?.error?.message 
                              || res.data.error 
                    };
                }
                else if (res.status >= 400 && res.status != 429){
                    // If we're getting some other 4xx, throw it.
                    throw res;
                }

                let response = res.data || {};
                result = Array.isArray(response) ? (result as Array<any>).concat(response) : response;

                // If no API threads are available, wait 1 second and try again
                if (res.status == 429) { sleep(throttleDelay); tries++; }


                // Loop if we have a next page key OR if we had to wait.
            } while (res.status == 429 && tries < maxTries)

            if (tries >= maxTries) {
                console.error('API Threads Locked', `Failed to acquire an available API thread after ${maxTries} tries.`);
                throw Error("Failed to acquire API Thread");
            }
        }
        catch (ex) {

            /**
             * status code '0' occurs in the following scenarios:
             * - Request Timeout (sometimes an exception)
             * - Request blocked by an AdBlocker
             * - Invalid HTTP URL.
            */
            if (ex.status == 0) {
                console.error('Developer Note: If you are seeing this and your AdBlocker is disabled and check the selected environment URL.');
                console.error('CORS/CSP Error', 'Please try disabling your AdBlocker or contact the developer.');
            }

            // Token is missing or doesn't have permissions for the selected API.
            const errorMessage = ex.error?.error?.message || ex.message;
            if(errorMessage){
                console.error('Error', errorMessage);
            }

            throw ex;
        }

        return result as T;
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