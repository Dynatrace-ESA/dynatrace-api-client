import { checkEnvironment, checkConnection } from "./shared";
import { internalConfig as EnvironmentConfig } from './generated/config';
import { DynatraceConnection } from "../types/dynatrace-connection";

/**
 * @title Dynatrace Configuration API
 * @version 1.0
 * @baseUrl https://kkr05643.sprint.dynatracelabs.com/api/config/v1
 *
 * Documentation of the Dynatrace Configuration API. To read about use-cases and examples, see [Dynatrace Documentation](https://dt-url.net/4u43kxw).
 *
 * Notes about compatibility:
 * * Operations marked as early adopter or preview may be changed in non-compatible ways, although we try to avoid this.
 * * We may add new enum constants without incrementing the API version; thus, clients need to handle unknown enum constants gracefully.
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