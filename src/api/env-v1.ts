import { DynatraceConnection } from "../types/dynatrace-connection";
import { Api as EnvironmentV1 } from "./generated/env-v1";
import { checkEnvironment, checkConnection } from "./shared";
import { UserSession } from '../types/usersession';

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
        getUsqlResults: super.userSessionQueryLanguage.getUsqlResults,
        getUsqlResultsAsTree: super.userSessionQueryLanguage.getUsqlResultsAsTree,

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

            return out.map(session => {
                return parseSession(session);
            });
        }
    }
}


const parseSession = (session: Array<any>): UserSession => {
    return {
        applicationType:                session[1],
        appVersion:                     session[0],
        bounce:                         session[2],
        browserFamily:                  session[3],
        browserMajorVersion:            session[4],
        browserMonitorId:               session[5],
        browserMonitorName:             session[6],
        browserType:                    session[7],
        carrier:                        session[8],
        city:                           session[9],
        clientTimeOffset:               session[10],
        connectionType:                 session[11],
        continent:                      session[12],
        country:                        session[13],
        crashGroupId:                   session[14],
        dateProperties:                 session[15],
        device:                         session[16],
        displayResolution:              session[17],
        doubleProperties:               session[18],
        duration:                       session[19], //ms
        endReason:                      session[20],
        endTime:                        session[21], // unix timestamp
        hasCrash:                       session[22],
        hasError:                       session[23],
        hasSessionReplay:               session[24],
        internalUserId:                 session[25],
        ip:                             session[26],
        isp:                            session[27],
        longProperties:                 session[28],
        manufacturer:                   session[29],
        matchingConversionGoals:        session[30],
        matchingConversionGoalsCount:   session[31],
        networkTechnology:              session[32],
        newUser:                        session[33],
        numberOfRageClicks:             session[34],
        numberOfRageTaps:               session[35],
        osFamily:                       session[36],
        osVersion:                      session[37],
        reasonForNoSessionReplay:       session[38],
        reasonForNoSessionReplayMobile: session[39],
        region:                         session[40],
        replayEnd:                      session[41],
        replayStart:                    session[42],
        rootedOrJailbroken:             session[43],
        screenHeight:                   session[44],
        screenOrientation:              session[45],
        screenWidth:                    session[46],
        startTime:                      session[47],
        stringProperties:               session[48],
        totalErrorCount:                session[49],
        totalLicenseCreditcount:        session[50],
        userActionCount:                session[51],
        userExperienceScore:            session[52],
        userId:                         session[53],
        userSessionId:                  session[54],
        userType:                       session[55]
    };
}