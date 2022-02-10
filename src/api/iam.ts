import { checkConnection } from "./shared";
import { Api as AccountManagement } from "./generated/iam";

/**
 * Dynatrace Account Management API
 * 
 * Always connects to `api.dynatrace.com`.
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