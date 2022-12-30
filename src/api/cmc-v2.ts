import { internalCmcV2 as ClusterManagementV2 } from './generated/cmc-v2';
import { DynatraceConnection } from "../types/dynatrace-connection";
import { APIOptions } from "../types/options";

/**
 * @title Dynatrace Cluster API
 * @version 2.0
 *
 * Dynatrace Managed exposes cluster-wide functionality via REST endpoints. This interactive documentation also acts as a REST client you can use to interact with Dynatrace Managed clusters.
 *
 * To authorize, use the API Token generated in [Settings - API Tokens page](/cmc#cm/apiToken). The HTTP status code of the response shows the result of your request. The expected response code for a successful request is documented individually per REST endpoint. Additionally the following error response codes can occur in our REST interface:
 *
 * * 400 - Bad Request: Some request parameters are not correct. See response body for details.
 * * 401 - Unauthorized: A valid authorization header is required but is missing.
 * * 403 - Forbidden: Execution of request is not allowed, e.g. api-token is invalid.
 * * 404 - Not Found: Endpoint does not exist or some entities could not be found.
 * * 500 - Internal Server Error: See response body for details.
 * * 556 - Upgrade in progress: Operation couldn't be performed during the upgrade.
 *
 * Notes about compatibility:
 * * Operations marked as early adopter or preview may be changed in non-compatible ways, although we try to avoid this.
 * * We may add new enum constants without incrementing the API version; thus, clients need to handle unknown enum constants gracefully.
 */
export class DynatraceClusterManagementAPIV2 extends ClusterManagementV2 {

    constructor(connection: DynatraceConnection, options: APIOptions = {}) {
        super(connection, "", options);

        if (!options.skipConnectionStringCheck)
            this.createConnectionString(connection, 'cmc');

        if (!options.skipConnectivityCheck)
            this.testConnectivity();
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