import Axios, { AxiosResponse, AxiosStatic, Method } from 'axios';
import { dynatraceTokenRegex, dynatraceUrlRegex } from "@dt-esa/platform-constants";

// Environment API
import { Api as EnvironmentV1 } from "./api/env-v1";
import { Api as EnvironmentV2 } from "./api/env-v2";

// Env Config
import { Api as EnvironmentConfig } from "./api/config";

// CMC: (Managed)
import { Api as ClusterManagementV1 } from "./api/cmc-v1";
import { Api as ClusterManagementV2 } from './api/cmc-v2';

// IAM: (SaaS) https://api.dynatrace.com/spec-json
import { Api as AccountManagement } from "./api/iam";


const sleep = (sleepTimeMs) => {
    return new Promise(r => setTimeout(r, sleepTimeMs));
};

export type DynatraceConnection = {
    token: string,
    url?: string,
    baseUrl?: string,
    tenantId?: string
}

export type DynatraceAPIOptions = {
    automaticallyPage: boolean,
    maxThrottledTries: number,
    throttleDelay: number,
    allowPaging: boolean,
    customAxios: AxiosStatic
}

const defaults: DynatraceAPIOptions = {
    automaticallyPage: true,
    maxThrottledTries: 10,
    throttleDelay: 1000,
    allowPaging: true,
    customAxios: Axios
}

/**
 * Convert options map into query string.
 * @param opts 
 * @returns Query string
 */
const optsToQueryString = (opts = {}): string => {
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

/**
 * 
 * @param environment 
 */
const checkEnvironment = (environment: DynatraceConnection, mode) => {
    if (!environment.token) 
        throw "Connection Token is not present.";

    if(mode != 'env'){
        if (environment.baseUrl || environment.tenantId)   
            throw "Tenant ID and Base URL may not be specified on this API interface.";
        if (!environment.url) 
            throw "Connection URL is not present.";

        return;
    }

    if (!environment.url) 
        throw "Connection URL is not present.";

    if(environment.url)
        environment.url = environment.url.trim();
    if(environment.baseUrl)
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

/**
 * Custom Request handler for Dynatrace.
 * @returns Promise<data>
 */
const dynatraceRequest = async ({customAxios = Axios, apiPath, data, query: queryParams, method, tenantUrl, token, timeframe }: 
    { 
        customAxios?: AxiosStatic,
        apiPath: string, 
        data?: any, 
        query: any,
        method: Method, 
        tenantUrl: string, 
        token: string,
        timeframe?: { start, end }
    }, options?: DynatraceAPIOptions): Promise<any | AxiosResponse<any, any>> => {

    // Validation of assignments.
    if (!customAxios) throw "Missing Axios client.";
    if (!apiPath)     throw "Missing API Path.";
    if (!method)      throw "Missing HTTP Method.";
    if (!token)       throw "Missing API Token.";
    if (/^(PUT|POST)$/i.test(method) && !data) throw "Missing Payload.";


    if(queryParams?.allowPaging == false){
        queryParams.allowPaging = undefined;
    }

    if (/^api\/v2\//i.test(apiPath)) {
        if (timeframe) {
            queryParams.from = timeframe.start;
            queryParams.to   = timeframe.end;
        }
    }
    else {
        if (timeframe) {
            queryParams.startTimestamp = timeframe.start;
            queryParams.endTimestamp   = timeframe.end;
        }
    }

    let result = <any>[];

    let res: AxiosResponse<any, any>;
    try {
        let nextPageKey;
        let tries = 0;
        do {

            // Inject the next page key.
            if (nextPageKey ) {
                if(/\/v1\//.test(apiPath)) // V1 APIs need the query parameters maintained
                    queryParams.nextPageKey = nextPageKey.replace(/\+/g, '%2B');
                else
                    queryParams = { nextPageKey: nextPageKey.replace(/\+/g, '%2B') };
            }

            const headers = {
                'Authorization': 'Api-Token ' + token
            };

            const targetUrl = tenantUrl + apiPath + optsToQueryString(queryParams);

            console.debug("Running API Query", method, targetUrl);
            try {
                res = (await customAxios(targetUrl, { 
                    method,
                    data,
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

            // let response = extractContents(res, apiPath);
            let response = res.data || {};
            result = Array.isArray(response) ? result.concat(response) : response;
            
            // Only go through pages if we decide to.
            if (options.allowPaging) {
                nextPageKey = res.headers['Next-Page-Key'] || res.data.nextPageKey;
            }

            const throttleDelay = typeof options.throttleDelay == "number" ? options.throttleDelay : defaults.throttleDelay;
            // If no API threads are available, wait 1 second and try again
            if (res.status == 429) { sleep(throttleDelay); tries++; }


            // Loop if we have a next page key OR if we had to wait.
        } while (nextPageKey || (res.status == 429 && tries <= 10))

        if (tries >= 10) {
            console.error('API Threads Locked', 'Failed to acquire an available API thread after 10 tries.');
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
            console.error('CORS Error', 'Please try disabling your AdBlocker or contact the developer.');
        }

        // Token is missing or doesn't have permissions for the selected API.
        const errorMessage = ex.error?.error?.message || ex.message;
        if(errorMessage){
            console.error('Authentication Error', errorMessage);
        }

        throw ex;
    }

    // If the result simply returned a text response, 
    if(typeof result == 'string') return result;

    // Bind metadata to the result.
    let out = result;
    // TODO: Review 
    // out._totalCount = (typeof requests[0].data.totalCount) == 'number' ? requests[0].data.totalCount : -1;

    return out;
}

/**
 * 
 * @param handler 
 * @param mode 
 */
const checkConnection = (handler, mode?) => {
    const sTime = new Date().getTime();
    console.log("Connecting to your Dynatrace instance...");

    // Check if we can hit the Dynatrace API endpoint provided.
    handler.request({
        apiPath: 'api/v1/time',
        method: "get" 
    })
        .then( res => console.log(  'Connected to your Dynatrace instance in', (new Date().getTime() - sTime), 'ms'))
        .catch(err => console.error("Failed to connect to the Dynatrace API endpoint.", err))
}

const resolveTarget = (api) => {
    if(api.environment.baseUrl || api.environment.tenantId){
        if(!api.baseUrl) throw "Base url does not exist.";
        if(!api.environment.tenantId) throw "";
        return  api.baseUrl + '/' + api.environment.tenantId + '/';
    }

    return api.environment.url;
}

/**
 * Dynatrace Tenant API
 * 
 * Single instance for interfacing any of the Dynatrace Tenant APIs.
 * - v1: DynatraceEnvironmentAPIV1
 * - v2: DynatraceEnvironmentAPIV2
 * - config: DynatraceConfigurationAPI
 */
export class DynatraceTenantAPI {
    v1: DynatraceEnvironmentAPIV1;
    v2: DynatraceEnvironmentAPIV2;
    config: DynatraceConfigurationAPI;

    constructor(private environment: DynatraceConnection, options?: DynatraceAPIOptions){
        checkEnvironment(environment, 'env');

        this.v1     = new DynatraceEnvironmentAPIV1(environment, options, true);
        this.v2     = new DynatraceEnvironmentAPIV2(environment, options, false);
        this.config = new DynatraceConfigurationAPI(environment, options, false);
    }

    useBase(url: string) { 
        this.environment.baseUrl = url;
        return this;
    }
    useTenant(id: string) {
        this.environment.tenantId = id;
        return this;
    }
    useToken(token: string){
        if(dynatraceTokenRegex.test(token)){
            this.environment.token = token;
            return this;
        }
        
        throw Error("Invalid Token: " + token);
    }
    useUrl(url: string){
        this.environment.url = url;
        return this;        
    }
}

/**
 * Dynatrace Tenant Environmnent API v1
 */
export class DynatraceEnvironmentAPIV1 extends EnvironmentV1 {
    private options: DynatraceAPIOptions;

    constructor(environment: DynatraceConnection, options?: DynatraceAPIOptions, testConnection = true) {
        super(environment);

        checkEnvironment(environment, 'env');
        
        let config: any & DynatraceAPIOptions = {};
        config = { ...defaults, ...options };
        this.options = config;

        if(testConnection)
            checkConnection(this);
    }

    protected request = async <T = any, E = any>({ apiPath, body, path, query, cancelToken, ...params }): Promise<T | E> => {
        return dynatraceRequest({
            apiPath: apiPath || 'api/v1' + path,
            tenantUrl: resolveTarget(this),
            data: body,
            query: query,
            method: params.method,
            token: this.environment.token
        }, this.options);
    }
}

/**
 * Dynatrace Tenant Environmnent API v2
 */
export class DynatraceEnvironmentAPIV2 extends EnvironmentV2{
    private options: DynatraceAPIOptions;

    constructor(environment: DynatraceConnection, options?: DynatraceAPIOptions, testConnection = true) {
        super(environment);

        checkEnvironment(environment, 'env');
        
        let config: any & DynatraceAPIOptions = {};
        config = { ...defaults, ...options };
        this.options = config;

        if(testConnection)
            checkConnection(this);
    }

    protected request = async <T = any, E = any>({ apiPath, body, path, query, cancelToken, ...params }): Promise<T> => {
        return dynatraceRequest({
            apiPath: apiPath || 'api/v2' + path,
            tenantUrl: resolveTarget(this),
            data: body,
            query: query,
            method: params.method,
            token: this.environment.token
        }, this.options);
    }
}

/**
 * Dynatrace Tenant Config API
 */
export class DynatraceConfigurationAPI extends EnvironmentConfig {
    private options: DynatraceAPIOptions;

    constructor(environment: DynatraceConnection, options?: DynatraceAPIOptions, testConnection = true) {
        super(environment);

        checkEnvironment(environment, 'env');
        
        let config: any & DynatraceAPIOptions = {};
        config = { ...defaults, ...options };
        this.options = config;

        if(testConnection)
            checkConnection(this);
    }

    /**
     * Internal HTTP Request interface.
     * 
     * @deprecated The method should not be used. 
     */
    protected request = async <T = any, E = any>({ apiPath, body, path, query, cancelToken, ...params }): Promise<T> => {
        return dynatraceRequest({
            apiPath: apiPath || 'api/config/v1' + path,
            tenantUrl: this.environment.url,
            data: body,
            query: query,
            method: params.method,
            token: this.environment.token
        }, this.options);
    }
}

/**
 * Dynatrace Cluster Management API v1 
 */
export class DynatraceClusterManagementAPIV1 extends ClusterManagementV1 {
    private options: DynatraceAPIOptions;


    constructor(environment: DynatraceConnection, options?: DynatraceAPIOptions) {
        super(environment);

        checkEnvironment(environment, "cmc");
        
        let config: any & DynatraceAPIOptions = {};
        config = { ...defaults, ...options };
        this.options = config;

        checkConnection(this);
    }

    /**
     * Internal HTTP Request interface.
     * 
     * @deprecated The method should not be used. 
     */
    protected request = async <T = any, E = any>({ body, path, query, cancelToken, ...params }): Promise<T> => {
        return dynatraceRequest({
            apiPath: path,
            tenantUrl: this.environment.url,
            data: body,
            query: query,
            method: params.method,
            token: this.environment.token
        }, this.options);
    }

    /**
     * @deprecated
     */
    useBase(url: string): any {}
    /**
     * @deprecated
     */
    useTenant(url: string): any {}
}

/**
 * Dynatrace Cluster Management API v2 
 */
export class DynatraceClusterManagementAPIV2 extends ClusterManagementV2 {
    private options: DynatraceAPIOptions;

    constructor(environment: DynatraceConnection, options?: DynatraceAPIOptions) {
        super(environment);

        checkEnvironment(environment, "cmc");
        
        let config: any & DynatraceAPIOptions = {};
        config = { ...defaults, ...options };
        this.options = config;

        checkConnection(this);
    }

    /**
     * Internal HTTP Request interface.
     * 
     * @deprecated The method should not be used. 
     */
    protected request = async <T = any, E = any>({ body, path, query, cancelToken, ...params }): Promise<T> => {
        return dynatraceRequest({
            apiPath: path,
            tenantUrl: this.environment.url,
            data: body,
            query: query,
            method: params.method,
            token: this.environment.token
        }, this.options);
    }
  
    /**
     * @deprecated
     */
    useBase(url: string): any {}
    /**
     * @deprecated
     */
    useTenant(url: string): any {}
}

/**
 * Dynatrace Account Management API
 * 
 * Always connects to `api.dynatrace.com`.
 */
export class DynatraceAccountManagementAPI extends AccountManagement {

    private readonly endpoint = "https://api.dynatrace.com/iam/v1/";
    private options: DynatraceAPIOptions;

    constructor(private token: string, options?: DynatraceAPIOptions) {
        super({ token });
        
        let config: any & DynatraceAPIOptions = {};
        config = { ...defaults, ...options };
        this.options = config;

        checkConnection(this, "iam");

        console.warn("Untested interface.");
    }

    /**
     * Internal HTTP Request interface.
     * 
     * @deprecated The method should not be used. 
     */    
    protected request = async <T = any, E = any>({ body, path, query, cancelToken, ...params }): Promise<T> => {
        return dynatraceRequest({
            apiPath: path,
            tenantUrl: this.endpoint,
            data: body,
            query: query,
            method: params.method,
            token: this.token
        }, this.options);
    }

    /**
     * @deprecated
     */
    useUrl(url: string): any {}
    /**
     * @deprecated
     */
    useBase(url: string): any {}
    /**
     * @deprecated
     */
    useTenant(url: string): any {}
}

