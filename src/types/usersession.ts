export type UserSession = {
    appVersion: string,
    applicationType: "CUSTOM_APPLICATION" | "AMP_APPLICATION" | "MOBILE_APPLICATION" | "WEB_APPLICATION",
    bounce: boolean,
    browserFamily: string,
    browserMajorVersion: string,
    browserMonitorId: string,
    browserMonitorName: string,
    browserType: string,
    carrier: string,
    city: string,
    clientTimeOffset: string,
    connectionType: string,
    continent: string,
    country: string,
    crashGroupId: string,
    dateProperties: Array<unknown>,
    device: string,
    displayResolution: string,
    doubleProperties: Array<{
        key: string,
        applicationId: string,
        internalApplicationId: string,
        value: number
    }>,
    duration: number, //ms
    endReason: "END_EVENT" | "TIMEOUT" | "USER_ACTION_LIMIT",
    endTime: number, // unix timestamp
    hasCrash: boolean,
    hasError: boolean,
    hasSessionReplay: boolean,
    internalUserId: string,
    ip: string,
    isp: string,
    longProperties: Array<{
        key: string,
        applicationId: string,
        internalApplicationId: string,
        value: number
    }>,
    manufacturer: string,
    matchingConversionGoals: Array<string>,
    matchingConversionGoalsCount: number,
    networkTechnology: string,
    newUser: boolean,
    numberOfRageClicks: number,
    numberOfRageTaps: number,
    osFamily: "macOS" | "iOS" | "OS X" | "tvOS" | "BSD" | "Windows" | "Android" | "Linux" | "Other",
    osVersion: string,
    reasonForNoSessionReplay: string,
    reasonForNoSessionReplayMobile: string,
    region: string,
    replayEnd: number,
    replayStart: number,
    rootedOrJailbroken: boolean,
    screenHeight: number,
    screenOrientation: "LANDSCAPE" | "PORTRAIT",
    screenWidth: number,
    startTime: number,
    stringProperties: Array<{
        key: string,
        applicationId: string,
        internalApplicationId: string,
        value: string
    }>,
    totalErrorCount: number,
    totalLicenseCreditcount: number,
    userActionCount: number,
    userExperienceScore: "SATISFIED" | "TOLERATED" | "FRUSTRATED" | "UNKNOWN",
    userId: string,
    userSessionId: string,
    userType: "REAL_USER" | "ROBOT" | "SYNTHETIC"
};