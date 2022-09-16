import { EntitiesList, internalEnvV2 as EnvironmentV2 } from "./generated/env-v2";
import { DynatraceConnection } from "../types/dynatrace-connection";
import { APIOptions, RequestOptions } from '../types/options';

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

    constructor(connection: DynatraceConnection, options: APIOptions = {}) {
        super(connection, "api/v2", options.customAxios);

        if (!options.skipConnectionStringCheck)
            this.createConnectionString(connection, 'env');

        if (!options.skipConnectivityCheck)
            this.testConnectivity();

    }

    entities = {
        ...this.entities,
        getEntitiesCount: async (query?: {
            nextPageKey?: string;
            pageSize?: number;
            entitySelector?: string;
            from?: string;
            to?: string;
            fields?: string;
            sort?: string;
        }, params?: RequestOptions): Promise<number> => {
            query.pageSize = 1;
            params.paging = false;

            return (await this.entities.getEntities(query, params)).totalCount;
        }
    }
}
