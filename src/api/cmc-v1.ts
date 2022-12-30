import { internalCmcV1 as ClusterManagementV1 } from "./generated/cmc-v1";
import { DynatraceConnection } from "../types/dynatrace-connection";
import { APIOptions } from "../types/options";

/**
 * @title Dynatrace Cluster API
 * @version 1.0
 *
 * Dynatrace Managed exposes cluster management functionality via REST endpoints. This interactive documentation also acts as a REST client you can use to interact with Dynatrace Managed clusters.
 *
 * To authorize, use the API Token generated in [Settings - API Tokens page](/cmc#cm/apiToken). The HTTP status code of the response shows the result of your request. The expected response code for a successful request is documented individually per REST endpoint. Additionally the following error response codes can occur in our REST interface:
 *
 * * 400 - Bad Request: Some request parameters are not correct. See response body for details.
 * * 401 - Unauthorized: A valid authorization header is required but is missing.
 * * 403 - Forbidden: Execution of request is not allowed, e.g. api-token is invalid.
 * * 404 - Not Found: Endpoint does not exist or some entities could not be found, e.g. User account.
 * * 500 - Internal Server Error: See response body for details.
 * * 556 - Upgrade in progress: Operation couldn't be performed during the upgrade.
 */
export class DynatraceClusterManagementAPIV1 extends ClusterManagementV1 {

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