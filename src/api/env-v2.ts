import { checkEnvironment, checkConnection } from "./shared";
import { internalEnvV2 as EnvironmentV2 } from "./generated/env-v2";
import { DynatraceConnection } from "../types/dynatrace-connection";

/**
 * @title Dynatrace Environment API
 * @version 2.0
 * @baseUrl https://kkr05643.sprint.dynatracelabs.com/api/v2
 *
 *
 * Documentation of the Dynatrace Environment API v2. Resources here generally supersede those in v1. Migration of resources from v1 is in progress.
 *
 * If you miss a resource, consider using the Dynatrace Environment API v1. To read about use cases and examples, see [Dynatrace Documentation](https://dt-url.net/2u23k1k) .
 *
 * Notes about compatibility:
 * * Operations marked as early adopter or preview may be changed in non-compatible ways, although we try to avoid this.
 * * We may add new enum constants without incrementing the API version; thus, clients need to handle unknown enum constants gracefully.
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
