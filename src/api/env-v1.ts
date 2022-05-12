import { DynatraceConnection } from "../types/dynatrace-connection";
import { internalEnvV1 as EnvironmentV1, UserSession, UserSessionErrors, UserSessionEvents, UserSessionUserAction } from "./generated/env-v1";
import { checkEnvironment, checkConnection } from "./shared";
import { UserActionDetails } from "./generated/config";

type UserAction = UserSessionUserAction & { "usersession.userSessionId": string };
type UserEvent  = UserSessionEvents     & { "usersession.userSessionId": string };
type UserError  = UserSessionErrors     & { "usersession.userSessionId": string };


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

    constructor(options: DynatraceConnection, testConnection = true, customAxios?) {
        super(options, "api/v1", customAxios);

        if (testConnection) {
            checkEnvironment(options, 'env');
            checkConnection(this);
        }
    }

    userSessionQueryLanguage = {
        ...this.userSessionQueryLanguage,

        /**
         * A method to return all user sessions from a tenant in the specified timeframe.
         * Caveats:
         * Your USQL WHERE filter may not use "startTime" filtering. This keyword is reserved for the 
         * result querying mechanism.
         * @param query.usqlFilter "WHERE" portion of a USQL call. Do not include the "WHERE" text.
         * @param query.startTimestamp Unix start timestamp of window to pull USQL data. Defaults to 2 hours ago.
         * @param query.endTimestamp   Unix end timestamp of window to pull USQL data. Defaults to now.
         * @param requestArgs 
         * @returns 
         */
        getAllUserSessions: (query: {
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?): Promise<UserSession[]> => this.fetchChunkedUSQLdata(query, requestArgs, "usersession", "*"),

        getAllUserActions: (query: {
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?): Promise<UserAction[]> => this.fetchChunkedUSQLdata(query, requestArgs, "useraction", "usersession.userSessionId, *"),

        getAllUserEvents: (query: {
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?): Promise<UserEvent[]> => this.fetchChunkedUSQLdata(query, requestArgs, "userevent", "usersession.userSessionId, *"),

        getAllUserErrors: (query: {
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?): Promise<UserError[]> => this.fetchChunkedUSQLdata(query, requestArgs, "usererror", "usersession.userSessionId, *"),
    }

    private async fetchChunkedUSQLdata(query, requestArgs, metric, table) {
        // I do not know why this is 1000. 
        // I hate our developers.
        const pageSize = 1000; // THIS WAS 5000
        const usqlFilter = query.usqlFilter ? query.usqlFilter + " AND " : "";

        // Create a map of binary-search chunks to resolve.

        const statChunkSize = async (sTime, eTime): Promise<number> => {
            console.log("Stat chunk size", sTime, eTime);

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

        let counter = 0;
        let hasLogged = false;
        const createUsqlChunkRequests = async (startTime: number, endTime: number) => {
            const chunkSize = await statChunkSize(startTime, endTime);

            if (!hasLogged) {
                hasLogged = true;
                console.log("Fetching data: Estimated at", chunkSize, "rows.");
            }

            const diff = Math.floor((endTime - startTime) / 2);

            // How many results we should get via the API.
            if (chunkSize > pageSize) {
                return [
                    ...await createUsqlChunkRequests(startTime, startTime + diff),
                    ...await createUsqlChunkRequests(startTime + diff + 1000, endTime),
                ];
            }
            else {
                // console.log("Fetching data for", chunkSize, "items.", startTime, endTime, Math.round((endTime - startTime) / (60 * 1000)) + " minutes");
                console.log("Slice:", diff, startTime, endTime);
                counter++;

                const timeConstraints = ` startTime > ${startTime} AND startTime < ${endTime}`;

                // Re-assemble the query
                const newQuery = `SELECT ${metric} from ${table} where ${usqlFilter} ${timeConstraints}`;

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

        let outData = [];

        let sessionMap = {};
        let allSessions = [];

        let duplicates = {};

        // Get the first chunk to return metadata back.
        for (let chunk of requests) {
            chunk.forEach(session => {
                const userSessionId = session[54];

                if (sessionMap[userSessionId]) {
                    if (!duplicates[userSessionId])
                        duplicates[userSessionId] = [];
                    duplicates[userSessionId].push(session);
                }

                sessionMap[userSessionId] = session;
                allSessions.push(session);
            });
        }
        console.log("Fetched a total of", outData.length, "rows.");
        console.log("  ...in", counter, "chunks.");

        // Create a map of sessions to prevent duplicates
        let out = [];
        Object.keys(sessionMap).forEach(sessionId => {
            out.push(sessionMap[sessionId]);
        });

        console.log("Originally found " + Object.keys(sessionMap).length + " sessions.");
        console.log("Deduplicated to " + out.length + " sessions.");


        return out.map(session => {
            let obj = {};

            return {} as any;

        });
    }
}
