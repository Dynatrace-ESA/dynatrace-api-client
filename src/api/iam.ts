import { internalIam as AccountManagement } from "./generated/iam";
import { APIOptions } from "../types/options";

/**
 * @title Dynatrace Account Management API
 * @version 1.0
 * @externalDocs /spec-json
 * @contact
 *
 * The enterprise management API for Dynatrace SaaS enables automation of operational tasks related to user access and environment lifecycle management.
 */
const endpoint = "https://api.dynatrace.com/iam/v1/";
export class DynatraceAccountManagementAPI extends AccountManagement {

    constructor(private token: string, options: APIOptions = {}) {
        super({ baseUrl: endpoint, token }, '', options.customAxios);

        // if (testConnection) {
        //     checkConnection(this, "iam");
        // }

        // if (!options.skipConnectionStringCheck)
        //     this.createConnectionString(token, 'env');

        // if (!options.skipConnectivityCheck)
        //     this.testConnectivity();
        console.warn("Untested interface.");
    }

    /**
     * @deprecated Not valid
     */
    useUrl(url: string): any { }
    /**
     * @deprecated Not valid
     */
    useBase(url: string): any { }
    /**
     * @deprecated Not valid
     */
    useTenant(url: string): any { }
}