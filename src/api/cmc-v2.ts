import { checkEnvironment, checkConnection } from "./shared";
import { Api as ClusterManagementV2 } from './generated/cmc-v2';
import { DynatraceConnection } from "../types/dynatrace-connection";

/**
 * Dynatrace Cluster Management API v2 
 */
export class DynatraceClusterManagementAPIV2 extends ClusterManagementV2 {

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