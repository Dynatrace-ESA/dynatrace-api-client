import { DynatraceConnection } from "../types/dynatrace-connection";
import { APIOptions, RequestOptions } from "../types/options";
import { internalEnvV1 as EnvironmentV1, UserSession, UserSessionErrors, UserSessionEvents, UserSessionUserAction } from "./generated/env-v1";

type UserAction = UserSessionUserAction & { "usersession.userSessionId": string };
type UserEvent  = UserSessionEvents     & { "usersession.userSessionId": string };
type UserError  = UserSessionErrors     & { "usersession.userSessionId": string };

const $usql = Symbol("USQL");

/**
 * @title Dynatrace Environment API
 * @version 1.0
 * @baseUrl https://kkr05643.sprint.dynatracelabs.com/api/v1
 *
 * Documentation of the Dynatrace Environment API v1. To read about use cases and examples, see [Dynatrace Documentation](https://dt-url.net/xc03k3c).
 *
 * Notes about compatibility:
 * * Operations marked as early adopter or preview may be changed in non-compatible ways, although we try to avoid this.
 * * We may add new enum constants without incrementing the API version; thus, clients need to handle unknown enum constants gracefully.
 */
export class DynatraceEnvironmentAPIV1 extends EnvironmentV1 {

    userSessionQueryLanguage: EnvironmentV1['userSessionQueryLanguage'] & {
        /**
         * A method to return all user sessions from a tenant in the specified timeframe.
         * Caveats:
         * - Your WHERE filter may not use "startTime" filtering. This keyword is reserved for the 
         * result querying mechanism. 
         * - This does NOT work with aggregations, FUNNEL, or other transformative filters.
         * - Due to the way this works, querying can load very large volumes of data (GB range)
         * for large RUM datasets. We do not yet offer a "stream" or otherwise dynamic option of this functionality.
         * @param query.customMetrics additional custom properties to "SELECT". 
         * This is an array of properties that follows the pattern `stringProperties.username as "Username"`. 
         * Can be used in conjunction with dynamic types like so: 
         * ```
         *  api.userSessionQueryLanguage.getAllUserSessions<{"stringProperties.username": string}>(...args)
         * ```
         * @param query.usqlFilter "WHERE" portion of a USQL call. Do not include the "WHERE" text.
         * @param query.startTimestamp Unix start timestamp of window to pull USQL data. Defaults to 2 hours ago.
         * @param query.endTimestamp   Unix end timestamp of window to pull USQL data. Defaults to now.
         * @param requestArgs 
         * 
         */
        getAllUserSessions:  <T = {}>(query: {
            customMetrics?: string[],
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?: RequestOptions) => Promise<(UserSession & T)[]>,

        /**
         * A method to return all user actions from a tenant in the specified timeframe.
         * Caveats:
         * - Your WHERE filter may not use "startTime" filtering. This keyword is reserved for the 
         * result querying mechanism. 
         * - This does NOT work with aggregations, FUNNEL, or other transformative filters.
         * - Due to the way this works, querying can load very large volumes of data (GB range)
         * for large RUM datasets. We do not yet offer a "stream" or otherwise dynamic option of this functionality.
         * @param query.customMetrics additional custom properties to "SELECT". 
         * This is an array of properties that follows the pattern `stringProperties.username as "Username"`. 
         * Can be used in conjunction with dynamic types like so: 
         * ```
         *  api.userSessionQueryLanguage.getAllUserActions<{"stringProperties.username": string}>(...args)
         * ```
         * @param query.usqlFilter "WHERE" portion of a USQL call. Do not include the "WHERE" text.
         * @param query.startTimestamp Unix start timestamp of window to pull USQL data. Defaults to 2 hours ago.
         * @param query.endTimestamp   Unix end timestamp of window to pull USQL data. Defaults to now.
         * @param requestArgs 
         * 
         */
        getAllUserActions: <T = {}>(query: {
            customMetrics?: string[],
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?: RequestOptions) => Promise<(UserAction & T)[]>,


        /**
         * A method to return all user events from a tenant in the specified timeframe.
         * Caveats:
         * - Your WHERE filter may not use "startTime" filtering. This keyword is reserved for the 
         * result querying mechanism. 
         * - This does NOT work with aggregations, FUNNEL, or other transformative filters.
         * - Due to the way this works, querying can load very large volumes of data (GB range)
         * for large RUM datasets. We do not yet offer a "stream" or otherwise dynamic option of this functionality.
         * @param query.customMetrics additional custom properties to "SELECT". 
         * This is an array of properties that follows the pattern `stringProperties.username as "Username"`. 
         * Can be used in conjunction with dynamic types like so: 
         * ```
         *  api.userSessionQueryLanguage.getAllUserEvents<{"stringProperties.username": string}>(...args)
         * ```
         * @param query.usqlFilter "WHERE" portion of a USQL call. Do not include the "WHERE" text.
         * @param query.startTimestamp Unix start timestamp of window to pull USQL data. Defaults to 2 hours ago.
         * @param query.endTimestamp   Unix end timestamp of window to pull USQL data. Defaults to now.
         * @param requestArgs 
         * 
         */
        getAllUserEvents: <T = {}>(query: {
            customMetrics?: string[],
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?: RequestOptions) => Promise<(UserEvent & T)[]>,


        /**
         * A method to return all user errors from a tenant in the specified timeframe.
         * Caveats:
         * - Your WHERE filter may not use "startTime" filtering. This keyword is reserved for the 
         * result querying mechanism. 
         * - This does NOT work with aggregations, FUNNEL, or other transformative filters.
         * - Due to the way this works, querying can load very large volumes of data (GB range)
         * for large RUM datasets. We do not yet offer a "stream" or otherwise dynamic option of this functionality.
         * @param query.customMetrics additional custom properties to "SELECT". 
         * This is an array of properties that follows the pattern `stringProperties.username as "Username"`. 
         * Can be used in conjunction with dynamic types like so: 
         * ```
         *  api.userSessionQueryLanguage.getAllUserErrors<{"stringProperties.username": string}>(...args)
         * ```
         * @param query.usqlFilter "WHERE" portion of a USQL call. Do not include the "WHERE" text.
         * @param query.startTimestamp Unix start timestamp of window to pull USQL data. Defaults to 2 hours ago.
         * @param query.endTimestamp   Unix end timestamp of window to pull USQL data. Defaults to now.
         * @param requestArgs 
         * 
         */
        getAllUserErrors: <T = {}>(query: {
            customMetrics?: string[],
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?: RequestOptions) => Promise<(UserError & T)[]>
    };

    constructor(connection: DynatraceConnection, options: APIOptions = {}) {
        super(connection, "api/v1", options);

        const oldUSQL = this.userSessionQueryLanguage;
        this.userSessionQueryLanguage = this[$usql];
        this.userSessionQueryLanguage.getUsqlResults = oldUSQL.getUsqlResults;
        this.userSessionQueryLanguage.getUsqlResultsAsTree = oldUSQL.getUsqlResultsAsTree;
        
        if (!options.skipConnectionStringCheck) 
            this.createConnectionString(connection, 'env');

        if (!options.skipConnectivityCheck) 
            this.testConnectivity();
    }
    
    /**
     * Hide the real USQL interface so we can actually override the damn thing
     */
    private [$usql] = {
        getUsqlResults: ((...args) => super.userSessionQueryLanguage.getUsqlResults(...args)) as EnvironmentV1['userSessionQueryLanguage']['getUsqlResults'],
        getUsqlResultsAsTree: ((...args) => super.userSessionQueryLanguage.getUsqlResultsAsTree(...args)) as EnvironmentV1['userSessionQueryLanguage']['getUsqlResultsAsTree'],

        getAllUserSessions: (query, requestArgs) => this.fetchChunkedUSQLdata(query, requestArgs, "usersession", "*"),
        getAllUserActions: (query, requestArgs) => this.fetchChunkedUSQLdata(query, requestArgs, "useraction", "usersession.userSessionId, *"),
        getAllUserEvents: (query, requestArgs) => this.fetchChunkedUSQLdata(query, requestArgs, "userevent", "usersession.userSessionId, *"),
        getAllUserErrors: (query, requestArgs) => this.fetchChunkedUSQLdata(query, requestArgs, "usererror", "usersession.userSessionId, *"),
    }

    /**
     * use `usql` instead. 
     * @hidden
     * @deprecated
     * @invalid
     */
    // userSessionQueryLanguage: undefined;

    private async fetchChunkedUSQLdata(query, requestArgs, table, metric) {
        // I do not know why this is 1000.
        const pageSize = 1000; 
        const usqlFilter = query.usqlFilter ? query.usqlFilter + " AND " : "";

        // Create a map of binary-search chunks to resolve.

        const statChunkSize = async (sTime, eTime): Promise<number> => {
            const timeConstraints = ` startTime > ${sTime} AND startTime < ${eTime}`;

            const sizeQuery = `SELECT count(*) from ${table} WHERE ${usqlFilter} ${timeConstraints}`;

            let data = await this.userSessionQueryLanguage.getUsqlResults({
                ...query,
                startTimestamp: query.startTimestamp,
                endTimestamp: query.endTimestamp,
                query: encodeURIComponent(sizeQuery),
                pageSize: 1,
            }, requestArgs);

            // Screwy type-safety override.
            return data.values[0][0] as unknown as number; // Count(*) response from the API.
        }

        const reqMetric = query.customMetrics ? metric + "," + query.customMetrics.join() : metric;

        const createUsqlChunkRequests = async (startTime: number, endTime: number) => {
            const chunkSize = await statChunkSize(startTime, endTime);

            const diff = Math.floor((endTime - startTime) / 2);

            // How many results we should get via the API.
            if (chunkSize > pageSize) {
                return [
                    ...await createUsqlChunkRequests(startTime, startTime + diff),
                    ...await createUsqlChunkRequests(startTime + diff + 1, endTime),
                ];
            }
            else {

                const timeConstraints = ` startTime > ${startTime} AND startTime < ${endTime}`;

                // Re-assemble the query
                const newQuery = `SELECT ${reqMetric} from ${table} where ${usqlFilter} ${timeConstraints}`;

                return [
                    await this.userSessionQueryLanguage.getUsqlResults({
                        ...query,
                        startTimestamp: query.startTimestamp,
                        endTimestamp: query.endTimestamp,
                        query: encodeURIComponent(newQuery),
                        pageSize: pageSize
                    }, requestArgs)
                ];
            }
        };

        query.startTimestamp = query.startTimestamp || Date.now() - 2 * 60 * 60 * 1000;
        query.endTimestamp = query.endTimestamp || Date.now();

        // Resolve all requests into a sorted array
        let requests = await createUsqlChunkRequests(query.startTimestamp, query.endTimestamp);

        let sessionMap = {};
        let allSessions = [];

        let duplicates = {};
        let firstChunk;

        for (let chunk of requests) {
            // Get the first chunk to use with formatting the output.
            if (!firstChunk) firstChunk = chunk;

            const sidx = firstChunk.columnNames.findIndex(c => c.endsWith("userSessionId"));

            chunk.values.forEach(session => {

                const userSessionId = session[sidx];

                if (sessionMap[userSessionId]) {
                    if (!duplicates[userSessionId])
                        duplicates[userSessionId] = [];
                    duplicates[userSessionId].push(session);
                }

                sessionMap[userSessionId] = session;
                allSessions.push(session);
            });
        }

        // Create a map of sessions to clear out duplicates
        let out = [];
        Object.keys(sessionMap).forEach(sessionId => {
            out.push(sessionMap[sessionId]);
        });


        return (table == "usersession" ? out : allSessions).map(session => {
            let obj = {};

            firstChunk.columnNames.forEach((col, i) => {
                obj[col] = session[i];
            });

            return obj as any;
        }) || [];
    }
}

