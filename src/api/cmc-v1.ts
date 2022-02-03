import { checkEnvironment, checkConnection } from "./shared";
import { Api as ClusterManagementV1 } from "./generated/cmc-v1";
import { DynatraceConnection } from "../types/dynatrace-connection";

/**
 * Dynatrace Cluster Management API v1 
 */
export class DynatraceClusterManagementAPIV1 extends ClusterManagementV1 {

    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "", customAxios);

        if (testConnection) {
            checkEnvironment(environment, "cmc");
            checkConnection(this, "cmc");
        }
    }

    /**
     * @deprecated Not valid
     */
    useBase(url: string): any { }
    /**
     * @deprecated Not valid
     */
    useTenant(url: string): any { }
}