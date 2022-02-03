import { DynatraceConnection } from "../types/dynatrace-connection";
import { Api as EnvironmentV1, UsqlResults } from "./generated/env-v1";
import { checkEnvironment, checkConnection } from "./shared";

/**
 * Dynatrace Tenant Environmnent API v1
 */
export class DynatraceEnvironmentAPIV1 extends EnvironmentV1 {

    constructor(environment: DynatraceConnection, testConnection = true, customAxios?) {
        super(environment, "api/v1", customAxios);

        if (testConnection) {
            checkEnvironment(environment, 'env');
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
        getAllUserSessions: async (query: {
            usqlFilter?: string,
            startTimestamp?: number;
            endTimestamp?: number;
        }, requestArgs?) => {
            // I do not know why this is 1000. 
            // I hate our developers.
            const pageSize = 1000; // THIS WAS 5000
            const usqlFilter = query.usqlFilter ? query.usqlFilter + " AND " : "";

            // Create a map of binary-search chunks to resolve.

            const statChunkSize = async (sTime, eTime): Promise<number> => {
                // console.log("Stat chunk size", sTime, eTime);

                const timeConstraints = ` startTime > ${sTime} AND startTime < ${eTime}`;

                const sizeQuery = `SELECT count(*) from usersession WHERE ${usqlFilter} ${timeConstraints}`;

                let data = await this.userSessionQueryLanguage.getUsqlResults({
                    ...query,
                    startTimestamp: query.startTimestamp,
                    endTimestamp: query.endTimestamp,
                    query: encodeURIComponent(sizeQuery),
                    pageSize: 1,
                    timeout: 50000
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
                    const newQuery = `SELECT * from usersession ${usqlFilter} ${timeConstraints}`;

                    return [
                        await this.userSessionQueryLanguage.getUsqlResults({
                            ...query,
                            startTimestamp: query.startTimestamp,
                            endTimestamp: query.endTimestamp,
                            query: encodeURIComponent(newQuery),
                            pageSize: pageSize
                        }, requestArgs)
                        // this.userSessionQueryLanguage.getUsqlResults()
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

            console.log("Originally found " + allSessions.length + " sessions.");
            console.log("Deduplicated to " + out.length + " sessions.");

            // Type the response as well as we can.
            return out.map(session => {
                return {
                    appVersion: session[0] as string,
                    applicationType: session[1] as "CUSTOM_APPLICATION" | "AMP_APPLICATION" | "MOBILE_APPLICATION" | "WEB_APPLICATION",
                    bounce: session[2] as boolean,
                    browserFamily: session[3] as string,
                    browserMajorVersion: session[4] as string,
                    browserMonitorId: session[5] as string,
                    browserMonitorName: session[6] as string,
                    browserType: session[7] as string,
                    carrier: session[8] as string,
                    city: session[9] as string,
                    clientTimeOffset: session[10] as string,
                    connectionType: session[11] as string,
                    continent: session[12] as string,
                    country: session[13] as string,
                    crashGroupId: session[14] as string,
                    dateProperties: session[15] as Array<unknown>,
                    device: session[16] as string,
                    displayResolution: session[17] as string,
                    doubleProperties: session[18] as Array<{
                        key: string,
                        applicationId: string,
                        internalApplicationId: string,
                        value: number
                    }>,
                    duration: session[19] as number, //ms
                    endReason: session[20] as "END_EVENT" | "TIMEOUT" | "USER_ACTION_LIMIT",
                    endTime: session[21] as number, // unix timestamp
                    hasCrash: session[22] as boolean,
                    hasError: session[23] as boolean,
                    hasSessionReplay: session[24] as boolean,
                    internalUserId: session[25] as string,
                    ip: session[26] as string,
                    isp: session[27] as string,
                    longProperties: session[28] as Array<{
                        key: string,
                        applicationId: string,
                        internalApplicationId: string,
                        value: number
                    }>,
                    manufacturer: session[29] as string,
                    matchingConversionGoals: session[30] as Array<string>,
                    matchingConversionGoalsCount: session[31] as number,
                    networkTechnology: session[32] as string,
                    newUser: session[33] as boolean,
                    numberOfRageClicks: session[34] as number,
                    numberOfRageTaps: session[35] as number,
                    osFamily: session[36] as "macOS" | "iOS" | "OS X" | "tvOS" | "BSD" | "Windows" | "Android" | "Linux" | "Other",
                    osVersion: session[37] as string,
                    reasonForNoSessionReplay: session[38] as string,
                    reasonForNoSessionReplayMobile: session[39] as string,
                    region: session[40] as string,
                    replayEnd: session[41] as number,
                    replayStart: session[42] as number,
                    rootedOrJailbroken: session[43] as boolean,
                    screenHeight: session[44] as number,
                    screenOrientation: session[45] as "LANDSCAPE" | "PORTRAIT",
                    screenWidth: session[46] as number,
                    startTime: session[47] as number,
                    stringProperties: session[48] as Array<{
                        key: string,
                        applicationId: string,
                        internalApplicationId: string,
                        value: string
                    }>,
                    totalErrorCount: session[49] as number,
                    totalLicenseCreditcount: session[50] as number,
                    userActionCount: session[51] as number,
                    userExperienceScore: session[52] as "SATISFIED" | "TOLERATED" | "FRUSTRATED" | "UNKNOWN",
                    userId: session[53] as string,
                    userSessionId: session[54] as string,
                    userType: session[55] as "REAL_USER" | "ROBOT" | "SYNTHETIC"
                };
            });
        }
    }
}