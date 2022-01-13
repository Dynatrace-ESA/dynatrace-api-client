import { dynatraceTokenRegex, dynatraceUrlRegex } from "@dt-esa/platform-constants";

// Environment API
import { Api as EnvironmentV1 } from "./api/env-v1";
import { Api as EnvironmentV2, Entity } from "./api/env-v2";

// Env Config
import { Api as EnvironmentConfig } from "./api/config";

// CMC: (Managed)
import { Api as ClusterManagementV1 } from "./api/cmc-v1";
import { Api as ClusterManagementV2 } from './api/cmc-v2';

// IAM: (SaaS) https://api.dynatrace.com/spec-json
import { Api as AccountManagement } from "./api/iam";
import { APIBase } from './apibase';

export type DynatraceConnection = {
    token: string,
    url?: string,
    baseUrl?: string,
    tenantId?: string
}

/**
 * 
 * @param environment 
 */
const checkEnvironment = async (environment: DynatraceConnection, mode) => {
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
 * 
 * @param handler 
 * @param mode 
 */
// TODO: Also test token permissions
const checkConnection = async (handler, mode?) => {
    const sTime = new Date().getTime();
    console.log("Connecting to your Dynatrace instance...");

    // Check if we can hit the Dynatrace API endpoint provided.
    let time = await handler.request({
        fullPath: '/time',
        method: "get" 
    });

    let permissions = await handler.request({
        
    })

        .then( res => console.log(  'Connected to your Dynatrace instance in', (new Date().getTime() - sTime), 'ms'))
        .catch(err => console.error("Failed to connect to the Dynatrace API endpoint.", err))
}

/**
 * Dynatrace Tenant API
 * 
 * Single instance for interfacing any of the Dynatrace Tenant APIs.
 * - v1: DynatraceEnvironmentAPIV1
 * - v2: DynatraceEnvironmentAPIV2
 * - config: DynatraceConfigurationAPI
 */
export class DynatraceTenantAPI extends APIBase{
    v1: DynatraceEnvironmentAPIV1;
    v2: DynatraceEnvironmentAPIV2;
    config: DynatraceConfigurationAPI;

    constructor(protected environment: DynatraceConnection, testConnection = true, customAxios?){
        super(environment, '', customAxios);

        this.v1     = new DynatraceEnvironmentAPIV1(environment, testConnection, customAxios);
        this.v2     = new DynatraceEnvironmentAPIV2(environment, false, customAxios);
        this.config = new DynatraceConfigurationAPI(environment, false, customAxios);
    }

    public useBase(url: string) { 
        this.v1.useBase(url);
        this.v2.useBase(url);
        this.config.useBase(url);
        
        return this;
    }
    public useTenant(id: string) {
        this.v1.useTenant(id);
        this.v2.useTenant(id);
        this.config.useTenant(id);
        
        return this;
    }
    public useToken(token: string) {
        if(dynatraceTokenRegex.test(token)){

            this.v1.useToken(token);
            this.v2.useToken(token);
            this.config.useToken(token);

            return this;
        }
        
        throw Error("Invalid Token: " + token);
    }
    public useUrl(url: string) {
        this.v1.useUrl(url);
        this.v2.useUrl(url);
        this.config.useUrl(url);

        return this;        
    }
}

/**
 * Dynatrace Tenant Environmnent API v1
 */
export class DynatraceEnvironmentAPIV1 extends EnvironmentV1 {

    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "api/v1", customAxios);
        
        if(testConnection) {
            checkEnvironment(environment, 'env');
            checkConnection(this);
        }
    }
}

/**
 * Dynatrace Tenant Environmnent API v2
 */
export class DynatraceEnvironmentAPIV2 extends EnvironmentV2{

    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "api/v2", customAxios);
        
        if (testConnection) {
            checkEnvironment(environment, 'env');
            checkConnection(this);
        }
    }
}

/**
 * Dynatrace Tenant Config API
 */
export class DynatraceConfigurationAPI extends EnvironmentConfig {
    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "api/config/v1", customAxios);
        
        if(testConnection) {
            checkEnvironment(environment, 'env');
            checkConnection(this, "env");
        }
    }
}

/**
 * Dynatrace Cluster Management API v1 
 */
export class DynatraceClusterManagementAPIV1 extends ClusterManagementV1 {

    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "", customAxios);

        if(testConnection) {
            checkEnvironment(environment, "cmc");
            checkConnection(this, "cmc");
        }
    }

    /**
     * @deprecated Not valid
     */
    useBase(url: string): any {}
    /**
     * @deprecated Not valid
     */
    useTenant(url: string): any {}
}

/**
 * Dynatrace Cluster Management API v2 
 */
export class DynatraceClusterManagementAPIV2 extends ClusterManagementV2 {

    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "", customAxios);

        if(testConnection) {
            checkEnvironment(environment, "cmc");
            checkConnection(this, "cmc");
        }
    }

    /**
     * @deprecated Not valid
     */
    useBase(url: string): any {}
    /**
     * @deprecated Not valid
     */
    useTenant(url: string): any {}
}

/**
 * Dynatrace Account Management API
 * 
 * Always connects to `api.dynatrace.com`.
 */
const endpoint = "https://api.dynatrace.com/iam/v1/";
export class DynatraceAccountManagementAPI extends AccountManagement {
    
    constructor(private token: string, testConnection = true, customAxios?) {
        super({ baseUrl: endpoint, token }, '', customAxios);
        
        if(testConnection) {
            checkConnection(this, "iam");
        }
        console.warn("Untested interface.");
    }

    /**
     * @deprecated Not valid
     */
    useUrl(url: string): any {}
    /**
     * @deprecated Not valid
     */
    useBase(url: string): any {}
    /**
     * @deprecated Not valid
     */
    useTenant(url: string): any {}
}

