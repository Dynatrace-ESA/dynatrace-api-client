import { checkEnvironment, checkConnection } from "./shared";
import { Api as EnvironmentConfig } from './generated/config';
import { DynatraceConnection } from "../types/dynatrace-connection";

/**
 * Dynatrace Tenant Config API
 */
export class DynatraceConfigurationAPI extends EnvironmentConfig {
    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "api/config/v1", customAxios);

        if (testConnection) {
            checkEnvironment(environment, 'env');
            checkConnection(this, "env");
        }
    }
}