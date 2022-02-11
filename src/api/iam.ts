import { checkConnection } from "./shared";
import { internalIam as AccountManagement } from "./generated/iam";

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

    constructor(private token: string, testConnection = true, customAxios?) {
        super({ baseUrl: endpoint, token }, '', customAxios);

        if (testConnection) {
            checkConnection(this, "iam");
        }
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