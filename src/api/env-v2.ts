import { checkEnvironment, checkConnection } from "./shared";
import { Api as EnvironmentV2 } from "./generated/env-v2";
import { DynatraceConnection } from "../types/dynatrace-connection";

/**
 * Dynatrace Tenant Environmnent API v2
 */
export class DynatraceEnvironmentAPIV2 extends EnvironmentV2 {

    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "api/v2", customAxios);

        if (testConnection) {
            checkEnvironment(environment, 'env');
            checkConnection(this);
        }
    }
}
