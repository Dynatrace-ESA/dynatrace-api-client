import { APIBase } from "../apibase";
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ClusterVersion {
  /** The version of the Dynatrace server. */
  version?: string;
}

/**
 * Latest OneAgent lambda version names available
 * @example {"java":"string","python":"string","nodejs":"string"}
 */
export interface LatestLambdaLayerNames {
  java?: string;
  python?: string;
  nodejs?: string;
}

/**
 * The checksum of the BOSH release tarball.
 */
export interface BoshReleaseChecksum {
  /**
   * The checksum of the  BOSH release tarball.
   *
   *  This is the sha256 hash of the installer file.
   */
  sha256?: string;
}

/**
 * A list of available OneAgent versions for BOSH release tarballs.
 */
export interface BoshReleaseAvailableVersions {
  /** A list of available OneAgent versions for BOSH release tarballs. */
  availableVersions?: string[];
}

/**
 * A list of available versions of OneAgent installer.
 */
export interface AgentInstallerVersions {
  /** A list of available versions of OneAgent installer. */
  availableVersions?: string[];
}

/**
 * OneAgent connectivity information.
 */
export interface ConnectionInfo {
  /** The ID of your Dynatrace environment. */
  tenantUUID?: string;

  /** The internal token that is used for authentication when OneAgent connects to the Dynatrace cluster to send data. */
  tenantToken?: string;

  /** The list of endpoints to connect to the Dynatrace environment. The list is sorted by endpoint priority, descending. */
  communicationEndpoints?: string[];

  /** The formatted list of endpoints to connect to the Dynatrace environment. */
  formattedCommunicationEndpoints?: string[];
}

/**
 * Connectivity information for an Environment ActiveGate (except ActiveGate tokens)
 */
export interface ActiveGateConnectionInfo {
  tenantUUID?: string;
  tenantToken?: string;
  communicationEndpoints?: string;
}

export interface InstallerMetaInfoDto {
  latestAgentVersion?: string;
}

/**
 * The response to a process module config request.
 */
export interface AgentProcessModuleConfigResponse {
  /**
   * The new revision associated with the config.
   * @format int64
   * @example 64459404400310540
   */
  revision?: number;

  /** The properties and their sections in this response. */
  properties?: SectionProperty[];
}

/**
 * A single agent property with it's associated section.
 */
export interface SectionProperty {
  /**
   * The section this property belongs to.
   * @example general
   */
  section?: string;

  /**
   * The property key.
   * @example dockerInjection
   */
  key?: string;

  /**
   * The property value.
   * @example on
   */
  value?: string;
}

/**
 * A list of available versions of ActiveGate installer.
 */
export interface ActiveGateInstallerVersions {
  /** Available versions. */
  availableVersions?: string[];
}

/**
 * A list of tuples of request ID and cluster name
 */
export interface AnonymizationClusterRequestID {
  /** @format int64 */
  id?: number;
  dcName?: string;
}

export interface AnonymizationIdResult {
  /** A list of tuples of request ID and cluster name */
  clusterRequestIds?: AnonymizationClusterRequestID[];

  /**
   * The ID of the newly created anonymization job. If multiple datacenters are involved a list separated by "|" will be returned
   * @example -4013759873546847071|7354684707140137598
   */
  requestId?: string;
}

export interface AnonymizationProgressResult {
  /**
   * The progress of the anonymization job, percent.
   *
   * -1 if the job is waiting for execution.
   * @format int32
   * @example 50
   */
  progress?: number;
}

/**
 * The user session query result as a tree.
 * @example {"extrapolationLevel":1,"branchNames":["country","city"],"leafNames":["avg(duration)","max(duration)"],"values":{"Austria":{"Klagenfurt":["65996.75","129940"],"Linz":["57360.86","222912"]},"Poland":{"Gdansk":["22482.2","351263"]}}}
 */
export interface DtaqlResultAsTree {
  /**
   * The extrapolation level of the result.
   *
   * To improve performance, some results may be calculated from a subset of actual data. The extrapolation level indicates the share of actual data in the result.
   * The number is the denominator of a fraction and indicates the amount of actual data. The value `1` means that the result contains only the actual data. The value `4` means that result is calculated using 1/4 of the actual data.
   * If you need the analysis to be based on the actual data, reduce the timeframe of your query. For example, in case of extrapolation level of `4`, try to use 1/4 of the original timeframe.
   * @format int32
   * @example 1
   */
  extrapolationLevel?: number;

  /**
   * A list of columns in the additionalValues table.
   *
   *  Only present if the endpoint was called with `deepLinkFields=true` parameter.
   */
  additionalColumnNames?: string[];

  /**
   * A list of data rows.
   *
   *  Each array element represents a row in the table of additionally linked fields.
   * The size of each data row and the order of the elements correspond to the **additionalColumnNames** content.
   *  Only present if the endpoint was called with `deepLinkFields=true` parameter.
   */
  additionalValues?: object[][];

  /**
   * Additional information about the query and the result, that helps to understand the query and how the result was calculated.
   *
   * Only appears when the **explain** parameter is set to `true`.
   * Example: The number of results was limited to the default of 50. Use the `LIMIT` clause to increase or decrease this limit.
   */
  explanations?: string[];

  /**
   * A list of branches of the tree.
   *
   *  Typically, these are fields from the `SELECT` clause, that have been used in the `GROUP BY` clause.
   */
  branchNames?: string[];

  /**
   * A list of leaves on each tree branch.
   *
   *  Typically, these are fields from the `SELECT` clause, that have not been used in the `GROUP BY` clause.
   */
  leafNames?: string[];

  /** The user session query result as a tree. */
  values?: object;
}

/**
 * A custom property of the user-action with a date value.
 */
export interface DateProperty {
  /** The custom key of the property. */
  key?: string;

  /**
   * The date value of the property.
   * @format date-time
   */
  value?: string;
}

/**
 * A custom property of the user action with a Double value.
 */
export interface DoubleProperty {
  /** The custom key of the property. */
  key?: string;

  /**
   * The floating-point numeric value of the property.
   * @format double
   */
  value?: number;
}

/**
 * A custom property of the user action with a Long value.
 */
export interface LongProperty {
  /** The custom key of the property. */
  key?: string;

  /**
   * The Long value of the property.
   * @format int64
   */
  value?: number;
}

/**
 * A custom property of the user action with a string value.
 */
export interface StringProperty {
  /** The custom key of the property. */
  key?: string;

  /** The string value of the property. */
  value?: string;
}

/**
 * A [user session](https://dt-url.net/xv183rb8), encompassing multiple user actions and additional information about a user's visit.
 */
export interface UserSession {
  /**
   * The ID of the Dynatrace environment that captured the user session.
   *
   * This field can not be queried via the User Session Query Language.
   * @example azy123456
   */
  tenantId?: string;

  /** The unique ID of the user session. */
  userSessionId?: string;

  /**
   * The timestamp of the first user action in the user session, in UTC milliseconds.
   * @format int64
   * @example 1511363122754
   */
  startTime?: number;

  /**
   * The timestamp of the last user action in the user session, in UTC milliseconds.
   * @format int64
   * @example 1511363122754
   */
  endTime?: number;

  /**
   * The duration of the user session, in milliseconds.
   *
   *  This is calculated as the amount of time between the start of the first user action and the end of the last user action.
   * @format int64
   * @example 122300
   */
  duration?: number;

  /** The unique ID of the user that triggered the user session. */
  internalUserId?: string;

  /** The type of the user. Indicates either a real human user (`REAL_USER`) or a robot (`ROBOT` or `SYNTHETIC`). */
  userType?: "REAL_USER" | "ROBOT" | "SYNTHETIC";

  /** The reason for absence of Session Replay. */
  reasonForNoSessionReplay?:
    | "KILLED_EMERGENCY"
    | "KILLED_ERROR"
    | "KILLED_MIN_JS_AGENT_VERSION"
    | "KILLED_NO_LICENSE"
    | "KILLED_WRONG_CONTENT_TYPE"
    | "MISCONFIGURED_CLUSTER"
    | "MODULE_DISABLED"
    | "NO_ACTIVITY"
    | "OPTED_OUT_SESSION"
    | "OPT_IN_MODE"
    | "ROBOT_DETECTED"
    | "SAMPLED_OUT"
    | "UNABLE_TO_LOAD_WORKER"
    | "UNHANDLED_EXCEPTION"
    | "UNKNOWN"
    | "UNSUPPORTED_BROWSER"
    | "VIEW_EXCLUDED";

  /** The reason for absence of Session Replay on mobile. */
  reasonForNoSessionReplayMobile?: "DISABLED" | "NO_AGENT" | "OPTED_OUT" | "UNKNOWN";

  /** The type of the application used in the user session. */
  applicationType?: "AMP_APPLICATION" | "CUSTOM_APPLICATION" | "MOBILE_APPLICATION" | "WEB_APPLICATION";

  /**
   * The user session has (`true`) or doesn't have (`false`) a bounce.
   *
   *  A bounce means there is only one user action in the user session.
   */
  bounce?: boolean;

  /** The user is a first-time (`true`) or a returning user (`false`). */
  newUser?: boolean;

  /**
   * The number of user actions in the user session.
   * @format int32
   */
  userActionCount?: number;

  /**
   * The number of errors detected in the user session.
   * @format int32
   */
  totalErrorCount?: number;

  /**
   * The amount of [DEM units](https://dt-url.net/ch03s4d) consumed by the session.
   * @format int32
   */
  totalLicenseCreditCount?: number;

  /**
   * The number of conversion goals achieved by the user session.
   * @format int32
   */
  matchingConversionGoalsCount?: number;

  /**
   * A list of conversion goals achieved by the user session.
   *
   *  Additionally, you can define conversion goals for a single user action.
   */
  matchingConversionGoals?: string[];

  /** The IP address (IPv4 or IPv6) from which the user session originates. */
  ip?: string;

  /** The continent from which the user session originates (based on the IP address). */
  continent?: string;

  /** The country from which the user session originates (based on the IP address). */
  country?: string;

  /** The region from which the user session originates (based on the IP address). */
  region?: string;

  /** The city from which the user session originates (based on the IP address). */
  city?: string;

  /**
   * The type of browser used for the user session.
   * @example Mobile Browser, Desktop Browser
   */
  browserType?: string;

  /**
   * The family of the browser used for the user session.
   * @example Firefox, Chrome, IE
   */
  browserFamily?: string;

  /**
   * The version of the browser used for the user session.
   * @example Firefox 57, Chrome 60
   */
  browserMajorVersion?: string;

  /**
   * The type of operating system used for the user session.
   * @example Windows, Linux
   */
  osFamily?: string;

  /**
   * The version of the operating system used for the user session.
   * @example iOS 9, Windows 10
   */
  osVersion?: string;

  /**
   * The detected manufacturer of the device used for the user session.
   * @example Samsung, Apple
   */
  manufacturer?: string;

  /**
   * The detected device used for the user session.
   * @example Samsung S5, Apple iPhone X
   */
  device?: string;

  /**
   * The user ID provided for the user session by session tagging.
   * @example user@example.org
   */
  userId?: string;

  /**
   * The detected screen height of the device used for the user session.
   * @format int32
   * @example 768
   */
  screenHeight?: number;

  /**
   * The detected screen width of the device used for the user session.
   * @format int32
   * @example 1024
   */
  screenWidth?: number;

  /**
   * The detected screen orientation of the device used on the device for the user session.
   * @example LANDSCAPE
   */
  screenOrientation?: "LANDSCAPE" | "PORTRAIT" | "UNDEFINED";

  /**
   * The detected screen resolution of the device used for the user session.
   * @example VGA, UHD4K, HUXGA
   */
  displayResolution?:
    | "CGA"
    | "DCI2K"
    | "DCI4K"
    | "DVGA"
    | "FHD"
    | "FWVGA"
    | "FWXGA"
    | "GHDPlus"
    | "HD"
    | "HQVGA"
    | "HQVGA2"
    | "HSXGA"
    | "HUXGA"
    | "HVGA"
    | "HXGA"
    | "NTSC"
    | "PAL"
    | "QHD"
    | "QQVGA"
    | "QSXGA"
    | "QUXGA"
    | "QVGA"
    | "QWXGA"
    | "QXGA"
    | "SVGA"
    | "SXGA"
    | "SXGAMinus"
    | "SXGAPlus"
    | "UGA"
    | "UHD16K"
    | "UHD4K"
    | "UHD8K"
    | "UHDPlus"
    | "UNKNOWN"
    | "UWQHD"
    | "UXGA"
    | "VGA"
    | "WHSXGA"
    | "WHUXGA"
    | "WHXGA"
    | "WQSXGA"
    | "WQUXGA"
    | "WQVGA"
    | "WQVGA2"
    | "WQVGA3"
    | "WQXGA"
    | "WQXGA2"
    | "WSVGA"
    | "WSVGA2"
    | "WSXGA"
    | "WSXGAPlus"
    | "WUXGA"
    | "WVGA"
    | "WVGA2"
    | "WXGA"
    | "WXGA2"
    | "WXGA3"
    | "WXGAPlus"
    | "XGA"
    | "XGAPLUS"
    | "_1280x854"
    | "nHD"
    | "qHD";

  /** The user session includes (`true`) or doesn't include (`false`) a crash. */
  hasCrash?: boolean;

  /**
   * If a mobile session crashed, this is the ID of the group to which the crashed session belongs.
   *
   *  If the session did not crash or the session is not a mobile session, it has the `null` value.
   */
  crashGroupId?: string;

  /** Session Replay is (`true`) or is not (`false`) available for the session. */
  hasSessionReplay?: boolean;

  /** The internet service provider from which the user session originates (based on the IP address). */
  isp?: string;

  /**
   * Additional information about the client.
   *
   * This field can not be queried via the user session query language. Use the **browserType** field instead.
   * @example  Desktop Browser, Mobile App, Mobile Browser, Robot, Synthetic Agent, Tablet Browser
   */
  clientType?: string;

  /** The ID of the Synthetic browser monitor that created the session. */
  browserMonitorId?: string;

  /** The name of the Synthetic browser monitor that created the session. */
  browserMonitorName?: string;

  /** A list of custom properties of the user session with string values. */
  stringProperties?: StringProperty[];

  /** A list of custom properties of the user session with integer (short or long) values. */
  longProperties?: LongProperty[];

  /** A list of custom properties of the user session with floating-point numerical values. */
  doubleProperties?: DoubleProperty[];

  /** A list of custom properties of the user session with date values. */
  dateProperties?: DateProperty[];

  /** A list of user actions recorded in the user session. */
  userActions?: UserSessionUserAction[];

  /** A list of additional events recorded in the user session. */
  events?: UserSessionEvents[];

  /** A list of errors recorded in the user session. */
  errors?: UserSessionErrors[];

  /** A list of synthetic events recorded in the user session. */
  syntheticEvents?: UserSessionSyntheticEvent[];

  /**
   * The version of the application where the user session has been recorded.
   *
   *  This information is provided by another integration, such as OpenKit.
   */
  appVersion?: string;

  /** The reason for the end of the user session. */
  endReason?: "DURATION_LIMIT" | "END_EVENT" | "EXTENDED_TIMEOUT" | "TEST_FAILED" | "TIMEOUT" | "USER_ACTION_LIMIT";

  /**
   * The number of rage clicks detected in the user session.
   * @format int32
   */
  numberOfRageClicks?: number;

  /**
   * The number of rage taps detected in the user session.
   * @format int32
   */
  numberOfRageTaps?: number;

  /** The user experience score of the user session. */
  userExperienceScore?: "FRUSTRATED" | "SATISFIED" | "TOLERATED" | "UNDEFINED";

  /** The carrier information of the mobile user session. */
  carrier?: string;

  /** The network technology information of the mobile user session. */
  networkTechnology?: string;

  /** The serialized connection type of the mobile user session. */
  connectionType?: "LAN" | "MOBILE" | "OFFLINE" | "UNKNOWN" | "WIFI";

  /**
   * The timestamp of the Session Replay start, in UTC milliseconds.
   * @format int64
   */
  replayStart?: number;

  /**
   * The timestamp of the Session Replay end, in UTC milliseconds.
   * @format int64
   */
  replayEnd?: number;

  /**
   * The time offset of the client, in milliseconds
   * @format int32
   */
  clientTimeOffset?: number;

  /**
   * The mobile device is rooted/jailbroken (`true`) or genuine (`false`).
   *
   * Has the value of `null` if the status is unknown or undefined. Custom applications always report unknown/undefined.
   */
  rootedOrJailbroken?: boolean;

  /** The user session includes (`true`) or doesn't include (`false`) an error. */
  hasError?: boolean;
}

/**
 * The error of a user session.
 */
export interface UserSessionErrors {
  /** The type of error. */
  type?:
    | "Behavioral"
    | "Crash"
    | "Error"
    | "PageChange"
    | "RageClick"
    | "RageTap"
    | "UserTag"
    | "UserTagFromMetaData"
    | "VisitTag";

  /** The name of the error. */
  name?: string;

  /** The DNS domain where the error has been recorded. */
  domain?: string;

  /**
   * The timestamp of the error, in UTC milliseconds.
   * @format int64
   * @example 1511363122754
   */
  startTime?: number;

  /** The name of the application, based on the configured detection rules. */
  application?: string;

  /**
   * The Dynatrace entity ID of the application.
   *
   *  This information is useful when calling various REST APIs, for example, as a key for time series queries.
   */
  internalApplicationId?: string;
}

/**
 * The external event of a user session.
 */
export interface UserSessionEvents {
  /** The type of event. */
  type?:
    | "Behavioral"
    | "Crash"
    | "Error"
    | "PageChange"
    | "RageClick"
    | "RageTap"
    | "UserTag"
    | "UserTagFromMetaData"
    | "VisitTag";

  /** The name of the event. */
  name?: string;

  /** The DNS domain where the event has been recorded. */
  domain?: string;

  /**
   * The timestamp of the event, in UTC milliseconds.
   * @format int64
   * @example 1511363122754
   */
  startTime?: number;

  /** The name of the application, based on the configured detection rules. */
  application?: string;

  /**
   * The Dynatrace entity ID of the application.
   *
   *  This information is useful when calling various REST APIs, for example, as a key for time series queries.
   */
  internalApplicationId?: string;

  /**
   * The metadata attached to the event.
   * @example key1:value1;key2:value2
   */
  metadata?: string;

  /** The name of the page the user navigated to during a page change event. */
  page?: string;

  /** The page group is automatically derived from the page. */
  pageGroup?: string;

  /** The name of the previous page from which the user navigated from during a page change event. */
  pageReferrer?: string;

  /** The page referrer group is automatically derived from the page referrer. */
  pageReferrerGroup?: string;
}

/**
 * A synthetic event of a user session.
 */
export interface UserSessionSyntheticEvent {
  /** The name of the synthetic event. */
  name?: string;

  /** The Dynatrace entity ID for the synthetic event. */
  syntheticEventId?: string;

  /**
   * The sequence number of the synthetic event in scope of the complete browser monitor.
   * @format int32
   */
  sequenceNumber?: number;

  /**
   * The timestamp when the synthetic event was simulated, in UTC milliseconds.
   * @format int64
   */
  timestamp?: number;

  /** The type of the synthetic event. For example click or keystroke. */
  type?: string;

  /**
   * The error code of the error that occurred during this event.
   * @format int32
   */
  errorCode?: number;

  /** Description of the error that occurred during this event. */
  errorName?: string;
}

/**
* A user action. 

 A user action is a single action performed by the user as part of a user session, for example a mouse click.
*/
export interface UserSessionUserAction {
  /**
   * The name of the user action.
   *
   *  Typically, this is the name of the page that is loaded as part of a user action or a textual description of the action, such as a mouse click.
   * @example Loading of page /index.html
   */
  name?: string;

  /** The DNS domain where the user action has been recorded. */
  domain?: string;

  /** The target URL of the user action. */
  targetUrl?: string;

  /**
   * The type of the user action.
   * @example Load
   */
  type?:
    | "Custom"
    | "EndVisit"
    | "Error"
    | "Load"
    | "RageClick"
    | "SyntheticHiddenAction"
    | "UserSessionProperties"
    | "VisitTag"
    | "Xhr";

  /**
   * The start timestamp of the user action, in UTC milliseconds.
   * @format int64
   * @example 1511363122754
   */
  startTime?: number;

  /**
   * The end timestamp of the user action, in UTC milliseconds.
   * @format int64
   * @example 1511363122754
   */
  endTime?: number;

  /**
   * The duration of the user action, in milliseconds.
   *
   *  This is calculated as the of time between the start and the end timestamps of the user action.
   * @format int64
   * @example 122300
   */
  duration?: number;

  /** The name of the application where the user action has been recorded. */
  application?: string;

  /**
   * The Dynatrace entity ID of the application where the user action has been recorded.
   *
   *  This information is useful when calling various REST APIs, for example as a key for time series queries.
   */
  internalApplicationId?: string;

  /** The Dynatrace entity ID of the key user action. */
  internalKeyUserActionId?: string;

  /**
   * The [speed index](https://dt-url.net/qk1a3r19) of the user action, in milliseconds.
   *
   *  This is calculated as average time it takes for all visible parts of a page to display.
   * @format int32
   * @example 122300
   */
  speedIndex?: number;

  /**
   * The [user experience index](https://dt-url.net/apdexdoc) of the user action.
   * @example SATISFIED
   */
  apdexCategory?: "FRUSTRATED" | "SATISFIED" | "TOLERATING" | "UNKNOWN";

  /**
   * A list of conversion goals achieved by the user action.
   *
   *  Additionally, you can define conversion goals for a user session as a whole.
   */
  matchingConversionGoals?: string[];

  /**
   * The amount of time spent on the data transfer for the user action, in milliseconds.
   * @format int32
   * @example 122300
   */
  networkTime?: number;

  /**
   * The amount of time spent on the server-side processing for the user action, in milliseconds.
   * @format int32
   * @example 122300
   */
  serverTime?: number;

  /**
   * The amount of time spent on the frontend rendering for the user action, in milliseconds.
   * @format int32
   * @example 122300
   */
  frontendTime?: number;

  /**
   * The amount of time spent until the document for the user action became interactive, in milliseconds.
   * @format int32
   * @example 122300
   */
  documentInteractiveTime?: number;

  /**
   * The number of third party resources loaded for the user action.
   * @format int32
   */
  thirdPartyResources?: number;

  /**
   * The time spent waiting for third party resources for the user action, in milliseconds.
   * @format int32
   * @example 122300
   */
  thirdPartyBusyTime?: number;

  /**
   * The number of resources fetched from a CDN for the user action.
   * @format int32
   */
  cdnResources?: number;

  /**
   * The time spent waiting for CDN resources for the user action, in milliseconds.
   * @format int32
   * @example 122300
   */
  cdnBusyTime?: number;

  /**
   * The number of resources fetched from the originating server for the user action.
   * @format int32
   */
  firstPartyResources?: number;

  /**
   * The time spent waiting for resources from the originating server for the user action, in milliseconds.
   * @format int32
   * @example 122300
   */
  firstPartyBusyTime?: number;

  /** The user action has (`true`) or doesn't have (`false`) a crash. */
  hasCrash?: boolean;

  /**
   * The amount of time until the DOM tree is completed, in milliseconds.
   * @format int32
   * @example 122300
   */
  domCompleteTime?: number;

  /**
   * The amount of time until the DOM tree is loaded, in milliseconds.
   * @format int32
   * @example 122300
   */
  domContentLoadedTime?: number;

  /**
   * The amount of time until the load event started, in milliseconds.
   * @format int32
   * @example 122300
   */
  loadEventStart?: number;

  /**
   * The amount of time until the load event ended, in milliseconds.
   * @format int32
   * @example 122300
   */
  loadEventEnd?: number;

  /**
   * The timestamp of the navigation start, in UTC milliseconds.
   * @format int64
   * @example 122300
   */
  navigationStart?: number;

  /**
   * The amount of time until the request started, in milliseconds.
   * @format int32
   * @example 122300
   */
  requestStart?: number;

  /**
   * The amount of time until the response started, in milliseconds.
   * @format int32
   * @example 122300
   */
  responseStart?: number;

  /**
   * The amount of time until the response ended, in milliseconds.
   * @format int32
   * @example 122300
   */
  responseEnd?: number;

  /**
   * The amount of time until the page is [visually complete](https://dt-url.net/qk1a3r19), in milliseconds.
   * @format int32
   * @example 122300
   */
  visuallyCompleteTime?: number;

  /** The name of the [Synthetic event](https://dt-url.net/dq1e3rmm) that triggered the user action. */
  syntheticEvent?: string;

  /** The ID of the [Synthetic event](https://dt-url.net/dq1e3rmm) that triggered the user action. */
  syntheticEventId?: string;

  /** The action is (`true`) or is not (`false`) a key action. */
  keyUserAction?: boolean;

  /** A list of custom properties of the user session with string values. */
  stringProperties?: StringProperty[];

  /** A list of custom properties of the user session with integer (short or long) values. */
  longProperties?: LongProperty[];

  /** A list of custom properties of the user session with floating-point numerical values. */
  doubleProperties?: DoubleProperty[];

  /** A list of custom properties of the user session with date values. */
  dateProperties?: DateProperty[];

  /**
   * The total number of properties in the user action.
   * @format int32
   */
  userActionPropertyCount?: number;

  /**
   * The total number of custom errors during the user action.
   * @format int32
   */
  customErrorCount?: number;

  /**
   * The total number of Javascript errors during the user action.
   * @format int32
   */
  javascriptErrorCount?: number;

  /**
   * The total number of request errors during the user action.
   * @format int32
   */
  requestErrorCount?: number;

  /**
   * The largest contentful paint (LCP) is the time (in milliseconds) that the largest element on the page took to render.
   *
   * The LCP is an important user-centric metric for measuring load speed. It marks the point when the page's main content is likely loaded. A low LCP indicates that the page loads quickly.
   * @format int32
   */
  largestContentfulPaint?: number;

  /**
   * The first input delay (FID) is the time (in milliseconds) that the browser took to respond to the first user input.
   *
   * The FID is an important user-centric metric for measuring load responsiveness. It quantifies the user experience when trying to interact with unresponsive pages. A low FID indicates that the page is usable.
   * @format int32
   */
  firstInputDelay?: number;

  /**
   * The total blocking time is the total time (in milliseconds) between the first contentful paint and the time to interactive, during which the browser has been blocked long enough to prevent input responsiveness.
   * @format int32
   */
  totalBlockingTime?: number;

  /**
   * The cumulative layout shift (CLS) is the total amount of all individual scores for every unexpected layout shift that occurs during the entire lifespan of the page.
   *
   * The CLS is an important user-centric metric for measuring visual stability. It quantifies how often users experience unexpected layout shifts. A low CLS indicates that the page is delightful.
   * @format double
   */
  cumulativeLayoutShift?: number;
}

/**
 * The user session query result as a table.
 * @example {"extrapolationLevel":1,"columnNames":["city","avg(duration)","max(duration)"],"values":[["Klagenfurt","65996.75","129940"],["Linz","57360.86","222912"],["Gdansk","22482.2","351263"]]}
 */
export interface DtaqlResultAsTable {
  /**
   * The extrapolation level of the result.
   *
   * To improve performance, some results may be calculated from a subset of actual data. The extrapolation level indicates the share of actual data in the result.
   * The number is the denominator of a fraction and indicates the amount of actual data. The value `1` means that the result contains only the actual data. The value `4` means that result is calculated using 1/4 of the actual data.
   * If you need the analysis to be based on the actual data, reduce the timeframe of your query. For example, in case of extrapolation level of `4`, try to use 1/4 of the original timeframe.
   * @format int32
   * @example 1
   */
  extrapolationLevel?: number;

  /**
   * A list of columns in the additionalValues table.
   *
   *  Only present if the endpoint was called with `deepLinkFields=true` parameter.
   */
  additionalColumnNames?: string[];

  /**
   * A list of data rows.
   *
   *  Each array element represents a row in the table of additionally linked fields.
   * The size of each data row and the order of the elements correspond to the **additionalColumnNames** content.
   *  Only present if the endpoint was called with `deepLinkFields=true` parameter.
   */
  additionalValues?: object[][];

  /**
   * Additional information about the query and the result, that helps to understand the query and how the result was calculated.
   *
   * Only appears when the **explain** parameter is set to `true`.
   * Example: The number of results was limited to the default of 50. Use the `LIMIT` clause to increase or decrease this limit.
   */
  explanations?: string[];

  /** A list of columns in the result table. */
  columnNames?: string[];

  /**
   * A list of data rows.
   *
   *  Each array element represents a row in the result table.
   * The size of each data row and the order of the elements correspond to the **columnNames** content.
   */
  values?: object[][];
}

/**
* Set of parameters of the event. 

 Apart from the general properties mentioned here, which each event has, an actual event has a set of metadata that varies depending on the event type.
* @example {"startTime":1521042929000,"endTime":1521542929000,"entityId":"HOST-0000000000000007","entityName":"Example Host","severityLevel":"PERFORMANCE","impactLevel":"INFRASTRUCTURE","eventType":"SLOW_DISK","eventStatus":"OPEN","tags":[{"context":"CONTEXTLESS","key":"exampleTag"}],"id":"5915682011263205071_1521042929000","source":"builtin"}
*/
export interface EventRestEntry {
  /**
   * The timestamp of the event detection, in UTC milliseconds.
   * @format int64
   */
  startTime?: number;

  /**
   * The timestamp of the event closure, in UTC milliseconds
   * @format int64
   */
  endTime?: number;

  /** The ID of the affected Dynatrace entity. */
  entityId?: string;

  /** The name of the affected Dynatrace entity. */
  entityName?: string;

  /** The severity of the event. */
  severityLevel?:
    | "AVAILABILITY"
    | "CUSTOM_ALERT"
    | "ERROR"
    | "MONITORING_UNAVAILABLE"
    | "PERFORMANCE"
    | "RESOURCE_CONTENTION";

  /** The impact level of the event. It shows what is affected by the problem: infrastructure, service, or application. */
  impactLevel?: "APPLICATION" | "ENVIRONMENT" | "INFRASTRUCTURE" | "SERVICE";

  /** The type of the event. */
  eventType?:
    | "APPLICATION_JS_FRAMEWORK_DETECTED"
    | "APPLICATION_OVERLOAD_PREVENTION"
    | "AVAILABILITY_EVENT"
    | "CONNECTION_LOST"
    | "CPU_SATURATED"
    | "CUSTOM_ALERT"
    | "CUSTOM_ANNOTATION"
    | "CUSTOM_APPLICATION_OVERLOAD_PREVENTION"
    | "CUSTOM_APP_CRASH_RATE_INCREASED"
    | "CUSTOM_CONFIGURATION"
    | "CUSTOM_DEPLOYMENT"
    | "CUSTOM_INFO"
    | "DATABASE_CONNECTION_FAILURE"
    | "DEPLOYMENT_CHANGED_CHANGE"
    | "DEPLOYMENT_CHANGED_NEW"
    | "DEPLOYMENT_CHANGED_REMOVED"
    | "DYNATRACE_INTERNAL"
    | "EBS_VOLUME_HIGH_LATENCY"
    | "ELASTIC_LOAD_BALANCER_HIGH_BACKEND_FAILURE_RATE"
    | "ELASTIC_LOAD_BALANCER_HIGH_FAILURE_RATE"
    | "ELASTIC_LOAD_BALANCER_HIGH_UNHEALTHY_HOST_RATE"
    | "ERROR_EVENT"
    | "ESXI_HOST_VM_MOTION_ARRIVED"
    | "ESXI_HOST_VM_MOTION_LEFT"
    | "ESXI_HOST_VM_STARTED"
    | "ESXI_START"
    | "ESXI_VM_DISCONNECTED"
    | "ESXI_VM_MOTION"
    | "ESXI_VM_POWER_OFF"
    | "ESXI_VM_START"
    | "FAILURE_RATE_INCREASED"
    | "HIGH_CONNECTIVITY_FAILURES"
    | "HIGH_DROPPED_PACKETS_RATE"
    | "HIGH_GC_ACTIVITY"
    | "HIGH_LATENCY"
    | "HIGH_NETWORK_ERROR_RATE"
    | "HIGH_NETWORK_LOSS_RATE"
    | "HIGH_NETWORK_UTILIZATION"
    | "HOST_CONNECTION_FAILED"
    | "HOST_CONNECTION_LOST"
    | "HOST_DATASTORE_LOW_DISK_SPACE"
    | "HOST_DISK_LOW_INODES"
    | "HOST_GRACEFULLY_SHUTDOWN"
    | "HOST_LOG_AVAILABILITY"
    | "HOST_LOG_ERROR"
    | "HOST_LOG_MATCHED"
    | "HOST_LOG_PERFORMANCE"
    | "HOST_MAINTENANCE"
    | "HOST_NO_CONNECTION"
    | "HOST_OF_SERVICE_UNAVAILABLE"
    | "HOST_SHUTDOWN"
    | "HOST_TIMEOUT"
    | "HTTP_CHECK_GLOBAL_OUTAGE"
    | "HTTP_CHECK_LOCAL_OUTAGE"
    | "HTTP_CHECK_TEST_LOCATION_SLOWDOWN"
    | "INSUFFICIENT_DISK_QUEUE_DEPTH"
    | "JAVASCRIPT_ERROR_RATE_INCREASED"
    | "LAMBDA_FUNCTION_HIGH_ERROR_RATE"
    | "LOG_AVAILABILITY"
    | "LOG_ERROR"
    | "LOG_MATCHED"
    | "LOG_PERFORMANCE"
    | "LOW_DISK_SPACE"
    | "LOW_STORAGE_SPACE"
    | "MARKED_FOR_TERMINATION"
    | "MEMORY_RESOURCES_EXHAUSTED"
    | "MEMORY_SATURATED"
    | "MOBILE_APPLICATION_OVERLOAD_PREVENTION"
    | "MOBILE_APP_CRASH_RATE_INCREASED"
    | "MONITORING_UNAVAILABLE"
    | "OPENSTACK_HOST_VM_SHUTDOWN"
    | "OPENSTACK_HOST_VM_STARTED"
    | "OPENSTACK_KEYSTONE_SLOW"
    | "OPENSTACK_KEYSTONE_UNHEALTHY"
    | "OPENSTACK_VM_LAUNCH_FAILED"
    | "OPENSTACK_VM_MOTION"
    | "OSI_DOCKER_DEVICEMAPPER_LOW_DATA_SPACE"
    | "OSI_DOCKER_DEVICEMAPPER_LOW_METADATA_SPACE"
    | "OVERLOADED_STORAGE"
    | "PERFORMANCE_EVENT"
    | "PGI_CRASHED_INFO"
    | "PGI_HAPROXY_QUEUED_REQUESTS_HIGH"
    | "PGI_HAPROXY_SESSION_USAGE_HIGH"
    | "PGI_LOG_MATCHED"
    | "PGI_MEMDUMP"
    | "PGI_MYSQL_SLOW_QUERIES_RATE_HIGH"
    | "PGI_OF_SERVICE_UNAVAILABLE"
    | "PGI_RMQ_HIGH_FILE_DESC_USAGE"
    | "PGI_RMQ_HIGH_MEM_USAGE"
    | "PGI_RMQ_HIGH_PROCESS_USAGE"
    | "PGI_RMQ_HIGH_SOCKETS_USAGE"
    | "PGI_RMQ_LOW_DISK_SPACE"
    | "PROCESS_CRASHED"
    | "PROCESS_CUSTOM_AVAILABILITY"
    | "PROCESS_CUSTOM_ERROR"
    | "PROCESS_CUSTOM_PERFORMANCE"
    | "PROCESS_GROUP_LOW_INSTANCE_COUNT"
    | "PROCESS_LOG_AVAILABILITY"
    | "PROCESS_LOG_ERROR"
    | "PROCESS_LOG_PERFORMANCE"
    | "PROCESS_RESTART"
    | "PROCESS_UNAVAILABLE"
    | "RDS_AZ_FAILOVER_COMPLETED"
    | "RDS_AZ_FAILOVER_STARTED"
    | "RDS_BACKUP_COMPLETED"
    | "RDS_BACKUP_STARTED"
    | "RDS_OF_SERVICE_UNAVAILABLE"
    | "RDS_RESTART"
    | "RDS_RESTART_SEQUENCE"
    | "RESOURCE_CONTENTION"
    | "SERVICE_RESPONSE_TIME_DEGRADED"
    | "SLOW_DISK"
    | "SYNTHETIC_AVAILABILITY"
    | "SYNTHETIC_NODE_OUTAGE"
    | "SYNTHETIC_PRIVATE_LOCATION_OUTAGE"
    | "SYNTHETIC_SLOWDOWN"
    | "THREADS_RESOURCES_EXHAUSTED"
    | "UNEXPECTED_HIGH_LOAD"
    | "UNEXPECTED_LOW_LOAD"
    | "USER_ACTION_DURATION_DEGRADATION"
    | "VIRTUAL_MACHINE_SHUTDOWN"
    | "WEB_CHECK_GLOBAL_OUTAGE"
    | "WEB_CHECK_LOCAL_OUTAGE";

  /** The id of the resource the event occurred on. */
  resourceId?: string;

  /** The name of the resource the event occurred on. */
  resourceName?: string;

  /** The state of the event: open or closed. */
  eventStatus?: "CLOSED" | "OPEN";

  /** Tags of the Dynatrace entity that raised the event. */
  tags?: TagInfo[];

  /**
   * The encoded ID of the event. The format is *eventID_startTime*.
   *
   *  You should use the value from this field when you need an event ID.
   */
  id?: string;
}

/**
 * The information about the event's impact.
 */
export interface EventRestImpact {
  /** The ID of the affected Dynatrace entity. */
  entityId?: string;

  /** The name of the affected Dynatrace entity. */
  entityName?: string;

  /** The severity of the event. */
  severityLevel?:
    | "AVAILABILITY"
    | "CUSTOM_ALERT"
    | "ERROR"
    | "MONITORING_UNAVAILABLE"
    | "PERFORMANCE"
    | "RESOURCE_CONTENTION";

  /** The impact level of the event. It shows what is affected by the problem: infrastructure, service, or application. */
  impactLevel?: "APPLICATION" | "ENVIRONMENT" | "INFRASTRUCTURE" | "SERVICE";

  /** The type of the event. */
  eventType?:
    | "APPLICATION_JS_FRAMEWORK_DETECTED"
    | "APPLICATION_OVERLOAD_PREVENTION"
    | "AVAILABILITY_EVENT"
    | "CONNECTION_LOST"
    | "CPU_SATURATED"
    | "CUSTOM_ALERT"
    | "CUSTOM_ANNOTATION"
    | "CUSTOM_APPLICATION_OVERLOAD_PREVENTION"
    | "CUSTOM_APP_CRASH_RATE_INCREASED"
    | "CUSTOM_CONFIGURATION"
    | "CUSTOM_DEPLOYMENT"
    | "CUSTOM_INFO"
    | "DATABASE_CONNECTION_FAILURE"
    | "DEPLOYMENT_CHANGED_CHANGE"
    | "DEPLOYMENT_CHANGED_NEW"
    | "DEPLOYMENT_CHANGED_REMOVED"
    | "DYNATRACE_INTERNAL"
    | "EBS_VOLUME_HIGH_LATENCY"
    | "ELASTIC_LOAD_BALANCER_HIGH_BACKEND_FAILURE_RATE"
    | "ELASTIC_LOAD_BALANCER_HIGH_FAILURE_RATE"
    | "ELASTIC_LOAD_BALANCER_HIGH_UNHEALTHY_HOST_RATE"
    | "ERROR_EVENT"
    | "ESXI_HOST_VM_MOTION_ARRIVED"
    | "ESXI_HOST_VM_MOTION_LEFT"
    | "ESXI_HOST_VM_STARTED"
    | "ESXI_START"
    | "ESXI_VM_DISCONNECTED"
    | "ESXI_VM_MOTION"
    | "ESXI_VM_POWER_OFF"
    | "ESXI_VM_START"
    | "FAILURE_RATE_INCREASED"
    | "HIGH_CONNECTIVITY_FAILURES"
    | "HIGH_DROPPED_PACKETS_RATE"
    | "HIGH_GC_ACTIVITY"
    | "HIGH_LATENCY"
    | "HIGH_NETWORK_ERROR_RATE"
    | "HIGH_NETWORK_LOSS_RATE"
    | "HIGH_NETWORK_UTILIZATION"
    | "HOST_CONNECTION_FAILED"
    | "HOST_CONNECTION_LOST"
    | "HOST_DATASTORE_LOW_DISK_SPACE"
    | "HOST_DISK_LOW_INODES"
    | "HOST_GRACEFULLY_SHUTDOWN"
    | "HOST_LOG_AVAILABILITY"
    | "HOST_LOG_ERROR"
    | "HOST_LOG_MATCHED"
    | "HOST_LOG_PERFORMANCE"
    | "HOST_MAINTENANCE"
    | "HOST_NO_CONNECTION"
    | "HOST_OF_SERVICE_UNAVAILABLE"
    | "HOST_SHUTDOWN"
    | "HOST_TIMEOUT"
    | "HTTP_CHECK_GLOBAL_OUTAGE"
    | "HTTP_CHECK_LOCAL_OUTAGE"
    | "HTTP_CHECK_TEST_LOCATION_SLOWDOWN"
    | "INSUFFICIENT_DISK_QUEUE_DEPTH"
    | "JAVASCRIPT_ERROR_RATE_INCREASED"
    | "LAMBDA_FUNCTION_HIGH_ERROR_RATE"
    | "LOG_AVAILABILITY"
    | "LOG_ERROR"
    | "LOG_MATCHED"
    | "LOG_PERFORMANCE"
    | "LOW_DISK_SPACE"
    | "LOW_STORAGE_SPACE"
    | "MARKED_FOR_TERMINATION"
    | "MEMORY_RESOURCES_EXHAUSTED"
    | "MEMORY_SATURATED"
    | "MOBILE_APPLICATION_OVERLOAD_PREVENTION"
    | "MOBILE_APP_CRASH_RATE_INCREASED"
    | "MONITORING_UNAVAILABLE"
    | "OPENSTACK_HOST_VM_SHUTDOWN"
    | "OPENSTACK_HOST_VM_STARTED"
    | "OPENSTACK_KEYSTONE_SLOW"
    | "OPENSTACK_KEYSTONE_UNHEALTHY"
    | "OPENSTACK_VM_LAUNCH_FAILED"
    | "OPENSTACK_VM_MOTION"
    | "OSI_DOCKER_DEVICEMAPPER_LOW_DATA_SPACE"
    | "OSI_DOCKER_DEVICEMAPPER_LOW_METADATA_SPACE"
    | "OVERLOADED_STORAGE"
    | "PERFORMANCE_EVENT"
    | "PGI_CRASHED_INFO"
    | "PGI_HAPROXY_QUEUED_REQUESTS_HIGH"
    | "PGI_HAPROXY_SESSION_USAGE_HIGH"
    | "PGI_LOG_MATCHED"
    | "PGI_MEMDUMP"
    | "PGI_MYSQL_SLOW_QUERIES_RATE_HIGH"
    | "PGI_OF_SERVICE_UNAVAILABLE"
    | "PGI_RMQ_HIGH_FILE_DESC_USAGE"
    | "PGI_RMQ_HIGH_MEM_USAGE"
    | "PGI_RMQ_HIGH_PROCESS_USAGE"
    | "PGI_RMQ_HIGH_SOCKETS_USAGE"
    | "PGI_RMQ_LOW_DISK_SPACE"
    | "PROCESS_CRASHED"
    | "PROCESS_CUSTOM_AVAILABILITY"
    | "PROCESS_CUSTOM_ERROR"
    | "PROCESS_CUSTOM_PERFORMANCE"
    | "PROCESS_GROUP_LOW_INSTANCE_COUNT"
    | "PROCESS_LOG_AVAILABILITY"
    | "PROCESS_LOG_ERROR"
    | "PROCESS_LOG_PERFORMANCE"
    | "PROCESS_RESTART"
    | "PROCESS_UNAVAILABLE"
    | "RDS_AZ_FAILOVER_COMPLETED"
    | "RDS_AZ_FAILOVER_STARTED"
    | "RDS_BACKUP_COMPLETED"
    | "RDS_BACKUP_STARTED"
    | "RDS_OF_SERVICE_UNAVAILABLE"
    | "RDS_RESTART"
    | "RDS_RESTART_SEQUENCE"
    | "RESOURCE_CONTENTION"
    | "SERVICE_RESPONSE_TIME_DEGRADED"
    | "SLOW_DISK"
    | "SYNTHETIC_AVAILABILITY"
    | "SYNTHETIC_NODE_OUTAGE"
    | "SYNTHETIC_PRIVATE_LOCATION_OUTAGE"
    | "SYNTHETIC_SLOWDOWN"
    | "THREADS_RESOURCES_EXHAUSTED"
    | "UNEXPECTED_HIGH_LOAD"
    | "UNEXPECTED_LOW_LOAD"
    | "USER_ACTION_DURATION_DEGRADATION"
    | "VIRTUAL_MACHINE_SHUTDOWN"
    | "WEB_CHECK_GLOBAL_OUTAGE"
    | "WEB_CHECK_LOCAL_OUTAGE";

  /** The id of the resource the event occurred on. */
  resourceId?: string;

  /** The name of the resource the event occurred on. */
  resourceName?: string;
}

/**
 * Tag of a Dynatrace entity.
 */
export interface TagInfo {
  /**
   * The origin of the tag, such as AWS or Cloud Foundry.
   *
   *  Custom tags use the `CONTEXTLESS` value.
   */
  context:
    | "AWS"
    | "AWS_GENERIC"
    | "AZURE"
    | "CLOUD_FOUNDRY"
    | "CONTEXTLESS"
    | "ENVIRONMENT"
    | "GOOGLE_CLOUD"
    | "KUBERNETES";

  /**
   * The key of the tag.
   *
   *  Custom tags have the tag value here.
   */
  key: string;

  /**
   * The value of the tag.
   *
   *  Not applicable to custom tags.
   */
  value?: string;
}

/**
 * Events of the environment.
 * @example {"nextCursor":"AgEBAAFn5IIFrgEAAAFofwDTrgAAAQAcMTY4N2RhYzViZTAtZmUxODEwOWQ5YTA1MTIyNQ%3D%3D","from":1521042929000,"to":1521542929000,"totalEventCount":2,"events":[{"startTime":1521042929000,"endTime":1521542929000,"entityId":"HOST-0000000000000007","entityName":"Example Host","severityLevel":"PERFORMANCE","impactLevel":"INFRASTRUCTURE","eventType":"SLOW_DISK","eventStatus":"OPEN","tags":[{"context":"CONTEXTLESS","key":"exampleTag"}],"id":"5915682011263205071_1521042929000","source":"builtin"},{"startTime":1521042929000,"endTime":1521542929000,"entityId":"HOST-0000000000000007","entityName":"Example Host","severityLevel":"PERFORMANCE","impactLevel":"INFRASTRUCTURE","eventType":"SLOW_DISK","eventStatus":"OPEN","tags":[{"context":"CONTEXTLESS","key":"exampleTag"}],"id":"5915682011263205071_1521042929000","source":"builtin"}]}
 */
export interface EventQueryResult {
  /**
   * The cursor for the next 150 events, fitting the specified criteria.
   *
   *  Set this value for the **cursor** query parameter. Without it you'll get the first 150 events again.
   * You don't have to specify any additional parameters, because the cursor already contains all of them.
   */
  nextCursor?: string;

  /**
   * Start of the query timeframe.
   * @format int64
   */
  from?: number;

  /**
   * End of the query timeframe.
   * @format int64
   */
  to?: number;

  /**
   * The total amount of events, fitting the specified criteria.
   * @format int64
   */
  totalEventCount?: number;

  /** The list of events. */
  events?: EventRestEntry[];
}

/**
 * Contains IDs of all custom events, created by an event push call.
 */
export interface EventStoreResult {
  /**
   * List of event IDs for information-only-events.
   *
   *  This field is provided for compatibility reasons. You should use the values from the **storedIds** field instead.
   */
  storedEventIds?: number[];

  /** List of **encoded** event IDs for information-only-events. */
  storedIds?: string[];

  /** List of correlation IDs for problem-opening-events. */
  storedCorrelationIds?: string[];
}

/**
 * Configuration of the custom event.
 * @example {"eventType":"CUSTOM_ANNOTATION","start":1521042929000,"end":1521542929000,"attachRules":{"entityIds":["CUSTOM_DEVICE-0000000000000007"],"tagRule":[{"meTypes":["HOST"],"tags":[{"context":"CONTEXTLESS","key":"customTag"}]}]},"source":"OpsControl","annotationType":"defect","annotationDescription":"The coffee machine is broken"}
 */
export interface EventCreation {
  /** The type of the event. */
  eventType:
    | "AVAILABILITY_EVENT"
    | "CUSTOM_ALERT"
    | "CUSTOM_ANNOTATION"
    | "CUSTOM_CONFIGURATION"
    | "CUSTOM_DEPLOYMENT"
    | "CUSTOM_INFO"
    | "ERROR_EVENT"
    | "MARKED_FOR_TERMINATION"
    | "PERFORMANCE_EVENT"
    | "RESOURCE_CONTENTION";

  /**
   * The start timestamp of the event, in UTC milliseconds.
   *
   * If not set, the current timestamp is used.
   * You can report information-only events up to **30 days** into the past.
   * You can report problem-opening events up to **60 minutes** into the past.
   * @format int64
   */
  start?: number;

  /**
   * The end timestamp of the event, in UTC milliseconds.
   *
   * If not set, the current time is used for information-only events.
   * Not applicable to problem-opening events. Such an event stays open until it times out depending on the **timeoutMinutes** parameter.
   * @format int64
   */
  end?: number;

  /**
   * The timeout for problem-opening events in minutes. Not applicable to information-only events.
   *
   * If not set, 15 minutes is used. The maximum allowed value is 120 minutes.
   * You can refresh the event by sending the same payload again.
   * @format int32
   */
  timeoutMinutes?: number;

  /**
   * The set of rules defining Dynatrace entities to be associated with the event.
   *
   * You can specify tags to dynamically match Dynatrace entities or IDs of specific entities.
   * At least one entity ID or tag is required.
   */
  attachRules: PushEventAttachRules;

  /** The set of any properties related to the event, in the *"key" : "value"* format. */
  customProperties?: Record<string, object>;

  /** The name or ID of the external source of the event. */
  source: string;

  /** The type of the custom annotation, for example `DNS route has been changed`. */
  annotationType?: string;

  /** A detailed description of the custom annotation, for example `DNS route has been changed to x.mydomain.com`. */
  annotationDescription?: string;

  /** The textual description of the configuration change. */
  description?: string;

  /** The ID of the triggered deployment. */
  deploymentName?: string;

  /** The version of the triggered deployment. */
  deploymentVersion?: string;

  /** A list of timeseries IDs, related to the event. */
  timeseriesIds?: string[];

  /** The project name of the deployed package. */
  deploymentProject?: string;

  /** The link to the deployed artifact within the 3rd party system. */
  ciBackLink?: string;

  /** The link to the deployment related remediation action within the external tool. */
  remediationAction?: string;

  /** The previous value of the configuration. */
  original?: string;

  /** The new value of the configuration that has been set by the event. */
  changed?: string;

  /** The ID or the name of the configuration that has been changed by the event. */
  configuration?: string;

  /** The title of the configuration that has been set by the event. */
  title?: string;

  /**
   * Allow Davis AI to merge this event into existing problems (true) or force creating a new problem (false).
   *
   * This only applies to problem-opening event types.
   */
  allowDavisMerge?: boolean;
}

/**
* The set of rules defining Dynatrace entities to be associated with the event.

You can specify tags to dynamically match Dynatrace entities or IDs of specific entities.

At least one entity ID or tag is required.
*/
export interface PushEventAttachRules {
  /** A list of entity IDs to which the event should be attached. */
  entityIds?: string[];

  /**
   * A set of matching rules to dynamically pick up entities based on tags.
   *
   * Only entities seen within the last **24 hours** are taken into account for tag-based matching rules.
   */
  tagRule?: TagMatchRule[];
}

/**
 * The list of tags to be used for matching Dynatrace entities.
 */
export interface TagMatchRule {
  /** The list of types of the Dynatrace entities (for example hosts or services) you want to pick up by matching. */
  meTypes: (
    | "APM_SECURITY_GATEWAY"
    | "APPLICATION"
    | "APPLICATION_METHOD"
    | "APPLICATION_METHOD_GROUP"
    | "APPMON_SERVER"
    | "APPMON_SYSTEM_PROFILE"
    | "AUTO_SCALING_GROUP"
    | "AUXILIARY_SYNTHETIC_TEST"
    | "AWS_APPLICATION_LOAD_BALANCER"
    | "AWS_AVAILABILITY_ZONE"
    | "AWS_CREDENTIALS"
    | "AWS_LAMBDA_FUNCTION"
    | "AWS_NETWORK_LOAD_BALANCER"
    | "AZURE_API_MANAGEMENT_SERVICE"
    | "AZURE_APPLICATION_GATEWAY"
    | "AZURE_COSMOS_DB"
    | "AZURE_CREDENTIALS"
    | "AZURE_EVENT_HUB"
    | "AZURE_EVENT_HUB_NAMESPACE"
    | "AZURE_FUNCTION_APP"
    | "AZURE_IOT_HUB"
    | "AZURE_LOAD_BALANCER"
    | "AZURE_MGMT_GROUP"
    | "AZURE_REDIS_CACHE"
    | "AZURE_REGION"
    | "AZURE_SERVICE_BUS_NAMESPACE"
    | "AZURE_SERVICE_BUS_QUEUE"
    | "AZURE_SERVICE_BUS_TOPIC"
    | "AZURE_SQL_DATABASE"
    | "AZURE_SQL_ELASTIC_POOL"
    | "AZURE_SQL_SERVER"
    | "AZURE_STORAGE_ACCOUNT"
    | "AZURE_SUBSCRIPTION"
    | "AZURE_TENANT"
    | "AZURE_VM"
    | "AZURE_VM_SCALE_SET"
    | "AZURE_WEB_APP"
    | "CF_APPLICATION"
    | "CF_FOUNDATION"
    | "CINDER_VOLUME"
    | "CLOUD_APPLICATION"
    | "CLOUD_APPLICATION_INSTANCE"
    | "CLOUD_APPLICATION_NAMESPACE"
    | "CLOUD_NETWORK_INGRESS"
    | "CLOUD_NETWORK_POLICY"
    | "CONTAINER_GROUP"
    | "CONTAINER_GROUP_INSTANCE"
    | "CUSTOM_APPLICATION"
    | "CUSTOM_DEVICE"
    | "CUSTOM_DEVICE_GROUP"
    | "DCRUM_APPLICATION"
    | "DCRUM_SERVICE"
    | "DCRUM_SERVICE_INSTANCE"
    | "DEVICE_APPLICATION_METHOD"
    | "DISK"
    | "DOCKER_CONTAINER_GROUP"
    | "DOCKER_CONTAINER_GROUP_INSTANCE"
    | "DYNAMO_DB_TABLE"
    | "EBS_VOLUME"
    | "EC2_INSTANCE"
    | "ELASTIC_LOAD_BALANCER"
    | "ENVIRONMENT"
    | "EXTERNAL_SYNTHETIC_TEST_STEP"
    | "GCP_ZONE"
    | "GEOLOCATION"
    | "GEOLOC_SITE"
    | "GOOGLE_COMPUTE_ENGINE"
    | "HOST"
    | "HOST_GROUP"
    | "HTTP_CHECK"
    | "HTTP_CHECK_STEP"
    | "HYPERVISOR"
    | "KUBERNETES_CLUSTER"
    | "KUBERNETES_NODE"
    | "KUBERNETES_SERVICE"
    | "MOBILE_APPLICATION"
    | "NETWORK_INTERFACE"
    | "NEUTRON_SUBNET"
    | "OPENSTACK_PROJECT"
    | "OPENSTACK_REGION"
    | "OPENSTACK_VM"
    | "OS"
    | "PROCESS_GROUP"
    | "PROCESS_GROUP_INSTANCE"
    | "QUEUE"
    | "RELATIONAL_DATABASE_SERVICE"
    | "SERVICE"
    | "SERVICE_INSTANCE"
    | "SERVICE_METHOD"
    | "SERVICE_METHOD_GROUP"
    | "SWIFT_CONTAINER"
    | "SYNTHETIC_LOCATION"
    | "SYNTHETIC_TEST"
    | "SYNTHETIC_TEST_STEP"
    | "VIRTUALMACHINE"
    | "VMWARE_DATACENTER"
  )[];

  /**
   * The list of tags you want to use for matching. At least one tag is required.
   *
   *  You can use custom tags from the UI, imported tags, and tags based on environment variables.
   */
  tags: TagInfo[];
}

/**
 * A list of constraint violations
 */
export interface ConstraintViolation {
  parameterLocation?: "PATH" | "PAYLOAD_BODY" | "QUERY";
  location?: string;
  message?: string;
  path?: string;
}

export interface Error {
  /** A list of constraint violations */
  constraintViolations?: ConstraintViolation[];

  /** The error message */
  message?: string;

  /**
   * The HTTP status code
   * @format int32
   */
  code?: number;
}

export interface ErrorEnvelope {
  error?: Error;
}

/**
 * The third-party Synthetic location.
 */
export interface Type3rdPartySyntheticLocation {
  /** The ID of the location. */
  id: string;

  /** The name of the location, displayed in the UI. */
  name: string;

  /** The IP address of the location. */
  ip?: string;
}

/**
 * Results of third-party monitor executions per location.
 */
export interface Type3rdPartySyntheticLocationTestResult {
  /** The ID of the location. */
  id: string;

  /**
   * The timestamp of text execution start, in UTC milliseconds.
   * @format int64
   */
  startTimestamp: number;

  /**
   * The overall availability of the monitor from this location, percent.
   *
   *  If absent, calculated as the number of successful steps compared to the overall number of steps.
   * @format double
   */
  successRate?: number;

  /** If the test was successful (`true`) or failed (`false`) - will influence availability timeseries. */
  success: boolean;

  /**
   * The overall response time of the monitor from this location, in milliseconds.
   *
   *  If absent, it is calculated as the sum of response times of all steps.
   * @format int64
   */
  responseTimeMillis?: number;

  /** Results of individual monitor steps. */
  stepResults?: SyntheticMonitorStepResult[];
}

/**
 * The third-party synthetic monitor.
 */
export interface Type3rdPartySyntheticMonitor {
  /** The ID of the monitor. */
  id: string;

  /** The name of the monitor. */
  title: string;

  /** A description of the monitor. */
  description?: string;

  /** The information on monitor setup, for example `browser`. */
  testSetup?: string;

  /**
   * The timestamp of the monitor expiration, in UTC milliseconds.
   * @format int64
   */
  expirationTimestamp?: number;

  /** The URL to the results of monitor execution. */
  drilldownLink?: string;

  /** The URL to edit the monitor in the original UI. */
  editLink?: string;

  /**
   * The monitor is enabled (`true`) or disabled (`false`). Default is `true`.
   *
   *  If `true`, set the **deleted** parameter to `false`.
   */
  enabled?: boolean;

  /**
   * The flag of the deleted monitor. Default is `false`.
   *
   *  If `true`, set the **enabled** parameter to `false`.
   */
  deleted?: boolean;

  /** Locations from which the synthetic monitor runs. */
  locations: SyntheticTestLocation[];

  /** Steps of the third-party monitor. */
  steps?: SyntheticTestStep[];

  /**
   * The frequency of the monitor, in seconds. The monitor is repeated with the specified interval at the third-party source.
   *
   * Dynatrace expects results of a monitor execution with the specified interval. If you report results to Dynatrace less often, adjust the **noDataTimeout** value accordingly.
   * @format int32
   */
  scheduleIntervalInSeconds: number;

  /**
   * The timeout of the monitor, in seconds. If no result is reported within this time, the availability state switches to unmonitored. Default is doubled frequency of the monitor.
   * @format int32
   */
  noDataTimeout?: number;
}

/**
 * The results of third-party synthetic monitor execution.
 */
export interface Type3rdPartySyntheticTestResult {
  /** The ID of the third-party synthetic monitor. */
  id: string;

  /** @format int32 */
  scheduleIntervalInSeconds?: number;

  /**
   * Number of steps in the monitor. Defaults to number of SyntheticTestSteps.
   * @format int32
   */
  totalStepCount?: number;

  /** Results of third-party monitor executions per location. */
  locationResults: Type3rdPartySyntheticLocationTestResult[];
}

export interface Type3rdPartySyntheticTests {
  /** The type of the third-party synthetic monitor. */
  syntheticEngineName: string;

  /** The URL of the third-party synthetic monitor icon. */
  syntheticEngineIconUrl?: string;

  /**
   * The timestamp of the message creation, in UTC milliseconds.
   * @format int64
   */
  messageTimestamp: number;

  /** The list of third-party synthetic locations. */
  locations: Type3rdPartySyntheticLocation[];

  /** The list of third-party synthetic monitors. */
  tests: Type3rdPartySyntheticMonitor[];

  /** The list of results of third-party synthetic monitor execution. */
  testResults?: Type3rdPartySyntheticTestResult[];
}

/**
 * The error message of a synthetic monitor step.
 */
export interface SyntheticMonitorError {
  /**
   * The error code.
   * @format int32
   */
  code: number;

  /** The error message. */
  message: string;
}

/**
 * The result of the individual step of a synthetic monitor.
 */
export interface SyntheticMonitorStepResult {
  /**
   * ID of the step. It is unique within the test definition.
   * @format int64
   */
  id: number;

  /**
   * The timestamp of test step execution, UTC milliseconds.
   * @format int64
   */
  startTimestamp: number;

  /**
   * The response time of the step, in milliseconds.
   *
   *  Absent when no meaningful response time is available (as may be the case for certain error conditions such as a misconfigured step script).
   * @format int64
   */
  responseTimeMillis?: number;

  /** The error message of a synthetic monitor step. */
  error?: SyntheticMonitorError;
}

/**
 * Synthetic test location.
 */
export interface SyntheticTestLocation {
  /** The ID of the location. */
  id: string;

  /** The location is enabled/disabled. Default is `true`, enabling the location. */
  enabled?: boolean;
}

/**
 * The step of a synthetic monitor.
 */
export interface SyntheticTestStep {
  /**
   * The ID of the step.
   * @format int64
   */
  id: number;

  /** The name of the step, displayed in the UI. */
  title: string;
}

/**
 * The open third-party synthetic event.
 */
export interface Type3rdPartyEventOpenNotification {
  /** The ID of the third-party synthetic monitor. */
  testId: string;

  /** The unique ID of the event. */
  eventId: string;

  /** The name of the event. */
  name: string;

  /** The type of the event. */
  eventType: "testOutage" | "testSlowdown";

  /** The cause of the event. */
  reason: string;

  /**
   * The start timestamp of the event, in UTC milliseconds.
   * @format int64
   */
  startTimestamp: number;

  /** The list of IDs of third-party synthetic locations where the event happens. */
  locationIds: string[];
}

/**
 * The closed third-party synthetic event.
 */
export interface Type3rdPartyEventResolvedNotification {
  /** The ID of the third-party synthetic monitor. */
  testId: string;

  /** The unique ID of the event. */
  eventId: string;

  /**
   * The end timestamp of the event, in UTC milliseconds.
   * @format int64
   */
  endTimestamp: number;
}

/**
 * The list of third-party synthetic events.
 */
export interface Type3rdPartySyntheticEvents {
  /** The type of the third-party synthetic monitor. */
  syntheticEngineName: string;

  /** The list of open third-party synthetic events. */
  open?: Type3rdPartyEventOpenNotification[];

  /** The list of closed third-party synthetic events. */
  resolved?: Type3rdPartyEventResolvedNotification[];
}

/**
 * Operation state to be set for all third-party Synthetic monitors
 */
export interface StateModification {
  /** The new operation state for all third-party Synthetic monitors. */
  state: "ACTIVE" | "HIDDEN" | "INACTIVE";
}

/**
 * Parameters of a manually injected application.
 */
export interface ManualApplication {
  /** The Dynatrace entity ID of the application. */
  applicationId?: string;

  /** The name of the application. */
  displayName?: string;

  /** Monitoring is enabled (`true`) or disabled (`false`). */
  monitoringEnabled?: boolean;

  /** The application settings revision. */
  revision?: string;
}

/**
 * Parameters of the maintenance window.
 */
export interface MaintenanceWindow {
  /** The ID of the maintenance window. */
  id?: string;

  /** The type of the maintenance: planned or unplanned. */
  type: "Planned" | "Unplanned";

  /** A short description of the maintenance purpose. */
  description?: string;

  /** Alerting during maintenance is enabled (`false`) or disabled (`true`). */
  suppressAlerts?: boolean;

  /** Problem detection during maintenance is enabled (`false`) or disabled (`true`). */
  suppressProblems?: boolean;

  /**
   * An object defining the scope of your maintenance window.
   *
   * You can specify particular Dynatrace entities or matching rules for dynamic formation of the scope.
   *  If no scope is specified, the maintenance applies to the entire environment.
   *  To specify the scope at least one entity or matching rule must be specified.
   */
  scope?: MaintenanceWindowScope;

  /** An object defining date, time, and recurrence of the maintenance window. */
  schedule: MaintenanceWindowSchedule;
}

/**
 * The recurrence of the maintenance window.
 */
export interface MaintenanceWindowRecurrence {
  /**
   * The day of the week for weekly maintenance.
   *
   *  The format is the full name of the day in upper case, for example `WEDNESDAY`.
   */
  day?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY";

  /**
   * The day of the month for monthly maintenance.
   * @format int32
   */
  dayOfMonth?: number;

  /** The start time of the maintenance window. The format is `HH:mm`. */
  start: string;

  /**
   * The duration of the maintenance window in minutes.
   * @format int32
   */
  duration: number;
}

/**
 * An object defining date, time, and recurrence of the maintenance window.
 */
export interface MaintenanceWindowSchedule {
  /** Recurrence of the schedule. */
  type: "Day" | "Month" | "Once" | "Week";

  /**
   * The time zone of the start and end time. Default time zone is UTC.
   *
   *  You can user either UTC offset `UTC+01:00` format or the IANA Time Zone Database format.
   */
  timezoneId?: string;

  /** The start date and time of the maintenance window in the `yyyy-MM-dd HH:mm` format. */
  maintenanceStart: string;

  /** The end date and time of the maintenance window in the `yyyy-MM-dd HH:mm` format. */
  maintenanceEnd: string;

  /** The recurrence of the maintenance window. */
  recurrence?: MaintenanceWindowRecurrence;
}

/**
* An object defining the scope of your maintenance window. 

You can specify particular Dynatrace entities or matching rules for dynamic formation of the scope. 

 If no scope is specified, the maintenance applies to the entire environment. 

 To specify the scope at least one entity or matching rule must be specified.
*/
export interface MaintenanceWindowScope {
  /**
   * Defines Dynatrace entities to be included in scope, for example hosts, services, process groups.
   *
   * Allowed values are Dynatrace entity IDs.
   */
  entities?: string[];

  /** An object defining a matching rule for dynamic scope formation. An empty rule matches for all entities. */
  matches?: MonitoredEntityFilter[];
}

/**
 * Filters monitored entities by their type/tags.
 */
export interface MonitoredEntityFilter {
  /** The type of the Dynatrace entities (for example, hosts or services) you want to pick up by matching. */
  type?:
    | "APM_SECURITY_GATEWAY"
    | "APPLICATION"
    | "APPLICATION_METHOD"
    | "APPLICATION_METHOD_GROUP"
    | "APPMON_SERVER"
    | "APPMON_SYSTEM_PROFILE"
    | "AUTO_SCALING_GROUP"
    | "AUXILIARY_SYNTHETIC_TEST"
    | "AWS_APPLICATION_LOAD_BALANCER"
    | "AWS_AVAILABILITY_ZONE"
    | "AWS_CREDENTIALS"
    | "AWS_LAMBDA_FUNCTION"
    | "AWS_NETWORK_LOAD_BALANCER"
    | "AZURE_API_MANAGEMENT_SERVICE"
    | "AZURE_APPLICATION_GATEWAY"
    | "AZURE_COSMOS_DB"
    | "AZURE_CREDENTIALS"
    | "AZURE_EVENT_HUB"
    | "AZURE_EVENT_HUB_NAMESPACE"
    | "AZURE_FUNCTION_APP"
    | "AZURE_IOT_HUB"
    | "AZURE_LOAD_BALANCER"
    | "AZURE_MGMT_GROUP"
    | "AZURE_REDIS_CACHE"
    | "AZURE_REGION"
    | "AZURE_SERVICE_BUS_NAMESPACE"
    | "AZURE_SERVICE_BUS_QUEUE"
    | "AZURE_SERVICE_BUS_TOPIC"
    | "AZURE_SQL_DATABASE"
    | "AZURE_SQL_ELASTIC_POOL"
    | "AZURE_SQL_SERVER"
    | "AZURE_STORAGE_ACCOUNT"
    | "AZURE_SUBSCRIPTION"
    | "AZURE_TENANT"
    | "AZURE_VM"
    | "AZURE_VM_SCALE_SET"
    | "AZURE_WEB_APP"
    | "CF_APPLICATION"
    | "CF_FOUNDATION"
    | "CINDER_VOLUME"
    | "CLOUD_APPLICATION"
    | "CLOUD_APPLICATION_INSTANCE"
    | "CLOUD_APPLICATION_NAMESPACE"
    | "CLOUD_NETWORK_INGRESS"
    | "CLOUD_NETWORK_POLICY"
    | "CONTAINER_GROUP"
    | "CONTAINER_GROUP_INSTANCE"
    | "CUSTOM_APPLICATION"
    | "CUSTOM_DEVICE"
    | "CUSTOM_DEVICE_GROUP"
    | "DCRUM_APPLICATION"
    | "DCRUM_SERVICE"
    | "DCRUM_SERVICE_INSTANCE"
    | "DEVICE_APPLICATION_METHOD"
    | "DISK"
    | "DOCKER_CONTAINER_GROUP"
    | "DOCKER_CONTAINER_GROUP_INSTANCE"
    | "DYNAMO_DB_TABLE"
    | "EBS_VOLUME"
    | "EC2_INSTANCE"
    | "ELASTIC_LOAD_BALANCER"
    | "ENVIRONMENT"
    | "EXTERNAL_SYNTHETIC_TEST_STEP"
    | "GCP_ZONE"
    | "GEOLOCATION"
    | "GEOLOC_SITE"
    | "GOOGLE_COMPUTE_ENGINE"
    | "HOST"
    | "HOST_GROUP"
    | "HTTP_CHECK"
    | "HTTP_CHECK_STEP"
    | "HYPERVISOR"
    | "KUBERNETES_CLUSTER"
    | "KUBERNETES_NODE"
    | "KUBERNETES_SERVICE"
    | "MOBILE_APPLICATION"
    | "NETWORK_INTERFACE"
    | "NEUTRON_SUBNET"
    | "OPENSTACK_PROJECT"
    | "OPENSTACK_REGION"
    | "OPENSTACK_VM"
    | "OS"
    | "PROCESS_GROUP"
    | "PROCESS_GROUP_INSTANCE"
    | "QUEUE"
    | "RELATIONAL_DATABASE_SERVICE"
    | "SERVICE"
    | "SERVICE_INSTANCE"
    | "SERVICE_METHOD"
    | "SERVICE_METHOD_GROUP"
    | "SWIFT_CONTAINER"
    | "SYNTHETIC_LOCATION"
    | "SYNTHETIC_TEST"
    | "SYNTHETIC_TEST_STEP"
    | "VIRTUALMACHINE"
    | "VMWARE_DATACENTER";

  /**
   * The tag you want to use for matching.
   *
   * You can use custom tags from the UI, AWS tags, Cloud Foundry tags, OpenShift/Kubernetes, and tags based on environment variables.
   */
  tags?: UniversalTag[];
}

export interface UniversalTag {
  tagKey?: UniversalTagKey;

  /**
   * The value of the tag. Not applicable to custom tags.
   *
   * If a tag does have a separate key and value (in the textual representation they are split by the colon ‘:’), this field is set with the actual value. Key-value pairs can occur for automatically imported tags and tags set by rules if extractors are used.
   */
  value?: string;

  /**
   * The key of the tag. For custom tags, put the tag value here.
   *
   * The key allows categorization of multiple tags. It is possible that there are multiple values for a single key which will all be represented as standalone tags. Therefore, the key does not have the semantic of a map key but is more like a key of a key-value tuple. In some cases, for example custom tags, the key represents the actual tag value and the value field is not set – those are called valueless tags.
   */
  key: string;

  /**
   * The origin of the tag, such as AWS or Cloud Foundry. For custom tags use the `CONTEXTLESS` value.
   *
   * The context is set for tags that are automatically imported by OneAgent (for example, from the AWS console or environment variables). It’s useful for determining the origin of tags when not manually defined, and it also helps to prevent clashes with other existing tags. If the tag is not automatically imported, `CONTEXTLESS` set.
   */
  context?:
    | "AWS"
    | "AWS_GENERIC"
    | "AZURE"
    | "CLOUD_FOUNDRY"
    | "CONTEXTLESS"
    | "ENVIRONMENT"
    | "GOOGLE_COMPUTE_ENGINE"
    | "KUBERNETES";
}

export interface UniversalTagKey {
  context?:
    | "AWS"
    | "AWS_GENERIC"
    | "AZURE"
    | "CLOUD_FOUNDRY"
    | "CONTEXTLESS"
    | "ENVIRONMENT"
    | "GOOGLE_COMPUTE_ENGINE"
    | "KUBERNETES";
  key?: string;
}

/**
 * The result of a custom device push request. The entity ID is calculated automatically.
 */
export interface CustomDevicePushResult {
  /** The Dynatrace entity ID of the custom device. */
  entityId?: string;

  /** The Dynatrace entity ID of the custom device group. */
  groupId?: string;
}

/**
 * Configuration of a custom device.
 * @example {"displayName":"coffeeMachine","group":"myCustomDeviceGroup","ipAddresses":["10.0.0.1"],"listenPorts":[80],"favicon":"https://www.freefavicon.com/freefavicons/food/cup-of-coffee-152-78475.png","configUrl":"http://coffee-machine.dynatrace.internal.com/coffeemachine/manage","type":"coffee machine","properties":{},"tags":["office-linz"],"series":[{"timeseriesId":"custom:created.coffee.metric","dimensions":{"office":"Linz"},"dataPoints":[[1521542929000,13]]}],"hostNames":["coffee-machine.dynatrace.internal.com"]}
 */
export interface CustomDevicePushMessage {
  /** The name of the custom device that will appear in the user interface. */
  displayName?: string;

  /**
   * User defined group ID of entity.
   *
   * The group ID helps to keep a consistent picture of device-group relations. One of many cases where a proper group is important is service detection: you can define which custom devices should lead to the same service by defining the same group ID for them.
   * If you set a group ID, it will be hashed into the Dynatrace entity ID of the custom device. In that case the custom device can only be part of one custom device group.
   * If you don't set the group ID, Dynatrace will create it based on the ID or type of the custom device. Also, the group will not be hashed into the device ID which means the device may switch groups.
   */
  group?: string;

  /**
   * The list of IP addresses that belong to the custom device.
   *
   * These addresses are used to automatically discover the horizontal communication relationship between this component and all other observed components within Smartscape. Once a connection is discovered, it is automatically mapped and shown within Smartscape.
   * If you send a value (including an empty value), the existing values will be overwritten.
   * If you send `null` or omit this field, the existing values will be kept.
   */
  ipAddresses?: string[];

  /**
   * The list of ports the custom devices listens to.
   *
   * These ports are used to discover the horizontal communication relationship between this component and all other observed components within Smartscape.
   * Once a connection is discovered, it is automatically mapped and shown within Smartscape.
   * If ports are specified, you should also add at least one IP address or a host name for the custom device.
   * If you send a value, the existing values will be overwritten.
   * If you send `null`, or an empty value, or omit this field, the existing values will be kept.
   */
  listenPorts?: number[];

  /**
   * The technology type definition of the custom device.
   *
   * It must be the same technology type of the metric you're reporting.
   * If you send a value, the existing value will be overwritten.
   * If you send `null`, empty or omit this field, the existing value will be kept.
   */
  type?: string;

  /** The icon to be displayed for your custom component within Smartscape. Provide the full URL of the icon file. */
  favicon?: string;

  /** The URL of a configuration web page for the custom device, such as a login page for a firewall or router. */
  configUrl?: string;

  /** The list of key-value pair properties that will be shown beneath the infographics of your custom device. */
  properties?: Record<string, string>;

  /** List of custom tags that you want to attach to your custom device. */
  tags?: string[];

  /**
   * The list of metric values that are reported for the custom device.
   *
   * The metric you're reporting must already exist in Dynatrace. To learn how to create a custom metric, see [Timeseries API v1 - PUT a custom metric](https://dt-url.net/5k143rzb).
   * Dynatrace aggregates all the values you report for a custom device.
   * If you send a value (including an empty value), it will be added to the set of existing values.
   * If you send `null` or omit this field, the set of existing values won't change.
   */
  series?: EntityTimeseriesData[];

  /**
   * The list of host names related to the custom device.
   *
   * These names are used to automatically discover the horizontal communication relationship between this component and all other observed components within Smartscape. Once a connection is discovered, it is automatically mapped and shown within Smartscape.
   * If you send a value, the existing values will be overwritten.
   * If you send `null` or an empty value; or omit this field, the existing values will be kept.
   */
  hostNames?: string[];
}

/**
 * Information about a metric and its data points.
 */
export interface EntityTimeseriesData {
  /** The ID of the metric, where you want to post data points. */
  timeseriesId: string;

  /**
   * Dimensions of the data points you're posting.
   *
   * The key of the metric dimension must be defined earlier in the metric definition.
   */
  dimensions?: Record<string, string>;

  /**
   * List of data points.
   *
   * Each data point is an array, containing the timestamp and the value.
   * Timestamp is UTC milliseconds reported as a number, for example: `1520523365557`.
   * You have the guaranteed timeframe of **30 minutes** into the past.
   * A custom metric must be registered **before** you can report a metric value. Therefore, the timestamp for reporting a value must be after the registration time of the metric.
   */
  dataPoints: number[][];
}

/**
 * A list of tags to be assigned to a Dynatrace entity.
 * @example {"tags":["office-linz","office-klagenfurt"]}
 */
export interface UpdateEntity {
  /** A list of tags to be assigned to a Dynatrace entity. */
  tags: string[];
}

/**
 * Defines the version of the agent currently running on the entity.
 */
export interface AgentVersion {
  /**
   * The major version number.
   * @format int32
   */
  major?: number;

  /**
   * The minor version number.
   * @format int32
   */
  minor?: number;

  /**
   * The revision number.
   * @format int32
   */
  revision?: number;

  /** A timestamp string: format "yyyymmdd-hhmmss */
  timestamp?: string;

  /** A string representation of the SVN revision number. */
  sourceRevision?: string;
}

/**
 * The short representation of a Dynatrace entity.
 * @example {"id":"6a98d7bc-abb9-44f8-ae6a-73e68e71812a","name":"Dynatrace entity","description":"Dynatrace entity for the REST API example"}
 */
export interface EntityShortRepresentation {
  /** The ID of the Dynatrace entity. */
  id: string;

  /** The name of the Dynatrace entity. */
  name?: string;

  /** A short description of the Dynatrace entity. */
  description?: string;
}

/**
 * Information about the host.
 */
export interface Host {
  /** The Dynatrace entity ID of the required entity. */
  entityId?: string;

  /** The name of the Dynatrace entity as displayed in the UI. */
  displayName?: string;

  /** The customized name of the entity */
  customizedName?: string;

  /** The discovered name of the entity */
  discoveredName?: string;

  /**
   * The timestamp of when the entity was first detected, in UTC milliseconds
   * @format int64
   */
  firstSeenTimestamp?: number;

  /**
   * The timestamp of when the entity was last detected, in UTC milliseconds
   * @format int64
   */
  lastSeenTimestamp?: number;

  /** The list of entity tags. */
  tags?: TagInfo[];
  toRelationships?: {
    isProcessOf?: string[];
    isSiteOf?: string[];
    isNetworkClientOfHost?: string[];
    runsOn?: string[];
  };
  amiId?: string;

  /**
   * Memory assigned to the host (Terabyte).
   * @format int32
   */
  zosTotalPhysicalMemory?: number;
  hypervisorType?:
    | "AHV"
    | "HYPERV"
    | "KVM"
    | "LPAR"
    | "QEMU"
    | "UNRECOGNIZED"
    | "VIRTUALBOX"
    | "VMWARE"
    | "WPAR"
    | "XEN";

  /** The Cloud Foundry BOSH deployment ID. */
  boshDeploymentId?: string;
  userLevel?: "NON_SUPERUSER" | "NON_SUPERUSER_STRICT" | "SUPERUSER";

  /** The Google Compute Engine machine type. */
  gceMachineType?: string;
  cloudType?: "AZURE" | "EC2" | "GOOGLE_CLOUD_PLATFORM" | "OPENSTACK" | "ORACLE" | "UNRECOGNIZED";

  /** The public IP addresses of the Google Compute Engine. */
  gcePublicIpAddresses?: string[];

  /**
   * Number of assigned processors for this LPAR.
   * @format int32
   */
  zosTotalGeneralPurposeProcessors?: number;

  /** The Google Cloud Platform Zone. */
  gcpZone?: string;

  /** The ID of network zone the entity is in. */
  networkZoneId?: string;
  azureVmName?: string;

  /** The kubernetes labels defined on the entity. */
  kubernetesLabels?: Record<string, object>;
  azureZone?: string;
  awsSecurityGroup?: string[];

  /** @format int64 */
  paasMemoryLimit?: number;
  azureEnvironment?: string;
  paasType?:
    | "AWS_ECS_EC2"
    | "AWS_ECS_FARGATE"
    | "AWS_LAMBDA"
    | "AZURE_FUNCTIONS"
    | "AZURE_WEBSITES"
    | "CLOUD_FOUNDRY"
    | "GOOGLE_APP_ENGINE"
    | "HEROKU"
    | "KUBERNETES"
    | "OPENSHIFT";
  vmwareName?: string;
  azureSku?: "BASIC" | "DYNAMIC" | "FREE" | "PREMIUM" | "SHARED" | "STANDARD";
  azureComputeModeName?: "DEDICATED" | "SHARED";
  azureResourceGroupName?: string;

  /** The Google Compute Engine project. */
  gceProject?: string;

  /** The CPU model number. */
  zosCPUModelNumber?: string;
  openstackComputeNodeName?: string;
  osArchitecture?: "ARM" | "IA64" | "PARISC" | "PPC" | "PPCLE" | "S390" | "SPARC" | "X86" | "ZOS";

  /** The name inherited from AWS. */
  awsNameTag?: string;
  azureHostNames?: string[];

  /** The Google Compute Engine numeric project ID. */
  gceProjectId?: string;

  /** The versions of the PaaS agents currently running on the entity. */
  paasAgentVersions?: AgentVersion[];
  openstackProjectName?: string;

  /**
   * The AIX instance virtual CPU count.
   * @format int32
   */
  virtualCpus?: number;
  azureSiteNames?: string[];

  /**
   * The AIX instance logical CPU count.
   * @format int32
   */
  logicalCpus?: number;
  esxiHostName?: string;

  /**
   * The AIX instance simultaneous threads count.
   * @format int32
   */
  simultaneousMultithreading?: number;
  openstackAvZone?: string;
  azureVmScaleSetName?: string;
  azureVmSizeLabel?: string;

  /** The Cloud Foundry BOSH instance name. */
  boshInstanceName?: string;

  /** @format int32 */
  logicalCpuCores?: number;

  /** Defines the version of the agent currently running on the entity. */
  agentVersion?: AgentVersion;

  /** The kubernetes node the entity is in. */
  kubernetesNode?: string;
  openstackVmName?: string;

  /** The custom name defined in OneAgent config. */
  oneAgentCustomHostName?: string;
  openStackInstaceType?: string;
  beanstalkEnvironmentName?: string;
  ipAddresses?: string[];

  /** The Cloud Foundry BOSH name. */
  boshName?: string;

  /** The Cloud Foundry BOSH availability zone. */
  boshAvailabilityZone?: string;

  /** The Google Compute Engine instance name. */
  gceInstanceName?: string;

  /** The management zones that the entity is part of. */
  managementZones?: EntityShortRepresentation[];

  /** The kubernetes cluster the entity is in. */
  kubernetesCluster?: string;
  consumedHostUnits?: string;

  /** Name of the LPAR. */
  zosLpaName?: string;
  publicHostName?: string;

  /** Type of virtualization on the mainframe. */
  zosVirtualization?: string;
  scaleSetName?: string;

  /** The Google Compute Engine instance ID. */
  gceInstanceId?: string;
  azureResourceId?: string;
  osType?: "AIX" | "DARWIN" | "HPUX" | "LINUX" | "SOLARIS" | "WINDOWS" | "ZOS";

  /** Name of the system. */
  zosSystemName?: string;
  osVersion?: string;
  awsInstanceType?: string;
  localHostName?: string;
  monitoringMode?: "FULL_STACK" | "INFRASTRUCTURE" | "OFF";
  publicIp?: string;
  localIp?: string;
  hostGroup?: HostGroup;
  openstackSecurityGroups?: string[];

  /** The Cloud Foundry BOSH stemcell version. */
  boshStemcellVersion?: string;

  /** The CPU serial number. */
  zosCPUSerialNumber?: string;
  bitness?: "32bit" | "64bit";
  softwareTechnologies?: TechnologyInfo[];

  /**
   * Number of assigned support processors for this LPAR.
   * @format int32
   */
  zosTotalZiipProcessors?: number;

  /** Defines the cloud platform vendor version. */
  cloudPlatformVendorVersion?: string;
  awsInstanceId?: string;
  isMonitoringCandidate?: boolean;
  autoScalingGroup?: string;

  /** @format int32 */
  cpuCores?: number;

  /** The Cloud Foundry BOSH instance ID. */
  boshInstanceId?: string;
  fromRelationships?: { isNetworkClientOfHost?: string[] };
}

export interface HostGroup {
  /** The Dynatrace entity ID of the host group. */
  meId?: string;

  /** The name of the Dynatrace entity, displayed in the UI. */
  name?: string;
}

export interface TechnologyInfo {
  type?: string;
  edition?: string;
  version?: string;
}

/**
 * Parameters of a process group.
 */
export interface ProcessGroup {
  /** The Dynatrace entity ID of the required entity. */
  entityId?: string;

  /** The name of the Dynatrace entity as displayed in the UI. */
  displayName?: string;

  /** The customized name of the entity */
  customizedName?: string;

  /** The discovered name of the entity */
  discoveredName?: string;

  /**
   * The timestamp of when the entity was first detected, in UTC milliseconds
   * @format int64
   */
  firstSeenTimestamp?: number;

  /**
   * The timestamp of when the entity was last detected, in UTC milliseconds
   * @format int64
   */
  lastSeenTimestamp?: number;

  /** The list of entity tags. */
  tags?: TagInfo[];
  toRelationships?: { isNetworkClientOfProcessGroup?: string[]; isInstanceOf?: string[]; runsOn?: string[] };
  metadata?: {
    hostGroups?: string[];
    cloudFoundryAppIds?: string[];
    dynatraceNodeIds?: string[];
    executables?: string[];
    googleComputeEngineMetadata?: Record<string, string>;
    phpScripts?: string[];
    awsEcsCluster?: string[];
    declarativeId?: string[];
    glassfishInstanceNames?: string[];
    tibcoBusinessWorksEnginePropertyFiles?: string[];
    jbossServerNames?: string[];
    catalinaBaseValues?: string[];
    mssqlInstanceName?: string[];
    ibmIntegrationServerName?: string[];
    varnishInstanceNames?: string[];
    phpWorkingDirectories?: string[];
    websphereLibertyServerName?: string[];
    googleCloudProjects?: string[];
    dockerContainerImageVersions?: string[];
    hybrisConfigDirectories?: string[];
    executablePaths?: string[];
    awsEcrImageRegions?: string[];
    tibcoBusinessWorksAppSpaceName?: string[];
    springBootStartupClass?: string[];
    weblogicDomainNames?: string[];
    elasticSearchNodeNames?: string[];
    tibcoBWEnginePropertyFilePaths?: string[];
    kubernetesContainerNames?: string[];
    rubyAppRootPaths?: string[];
    ibmImsMessageProcessingRegions?: string[];
    linkage?: string[];
    cloudfoundryMetadata?: Record<string, string>;
    oracleSid?: string[];
    awsEcsFamily?: string[];
    commandLineArgs?: string[];
    aspDotNetCoreApplicationPaths?: string[];
    awsEcrImageAccountIds?: string[];
    springBootAppName?: string[];
    websphereClusterNames?: string[];
    springBootProfileName?: string[];
    kubernetesAnnotations?: Record<string, string>;
    websphereServerNames?: string[];
    catalinaHomeValues?: string[];
    glassfishDomainNames?: string[];
    kubernetesBasePodNames?: string[];
    weblogicClusterNames?: string[];
    javaMainModules?: string[];
    kubernetesPodUids?: string[];
    awsEcsContainerName?: string[];
    coldfusionJvmConfigFiles?: string[];
    dotnetCommandPath?: string[];
    tibcoBusinessWorksDomainName?: string[];
    elasticSearchClusterNames?: string[];
    nodejsScriptNames?: string[];
    iisRoleNames?: string[];
    apacheSparkMasterIpAddresses?: string[];
    weblogicNames?: string[];
    rubyScriptPaths?: string[];
    ibmImsSoapGwName?: string[];
    nodejsAppBaseDirectories?: string[];
    softwareAgProductPropertyName?: string[];
    awsEcsRevision?: string[];
    ibmImsControlRegions?: string[];
    javaMainClasses?: string[];
    cassandraClusterNames?: string[];
    softwareAgInstallRoot?: string[];
    cloudFoundryAppNames?: string[];
    cloudFoundrySpaceNames?: string[];
    pluginMetadata?: Record<string, string>;
    ibmIntegrationNodeName?: string[];
    dockerContainerNames?: string[];
    ibmCtgName?: string[];
    tibcoBusinessWorksCeAppName?: string[];
    kubernetesFullPodNames?: string[];
    apacheConfigPaths?: string[];
    tibcoBusinessWorksAppNodeName?: string[];
    tibcoBusinessWorksCeVersion?: string[];
    dotNetCommands?: string[];
    googleAppEngineServices?: string[];
    kubernetesNamespaces?: string[];
    hybrisDataDirectories?: string[];
    envVariables?: Record<string, string>;
    javaJarFiles?: string[];
    javaJarPaths?: string[];
    dockerContainerIds?: string[];
    cloudFoundrySpaceIds?: string[];
    ruleResult?: string[];
    jbossModes?: string[];
    awsLambdaFunctionNames?: string[];
    cloudFoundryInstanceIndexes?: string[];
    hybrisBinDirectories?: string[];
    weblogicHomeValues?: string[];
    jbossHomes?: string[];
    dynatraceClusterIds?: string[];
    googleAppEngineInstances?: string[];
    websphereNodeNames?: string[];
    agentValueMetadata?: Record<string, string>;
    iisAppPools?: string[];
    ibmImsConnectRegions?: string[];
    dockerContainerImageNames?: string[];
    tibcoBusinessWorksHome?: string[];
    ibmCicsRegion?: string[];
    serviceNames?: string[];
    websphereCellNames?: string[];
    nodejsAppNames?: string[];
    equinoxConfigPath?: string[];
    awsRegions?: string[];
  };
  softwareTechnologies?: TechnologyInfo[];
  listenPorts?: number[];

  /** The management zones that the entity is part of. */
  managementZones?: EntityShortRepresentation[];
  azureHostName?: string;
  azureSiteName?: string;
  fromRelationships?: { isNetworkClientOfProcessGroup?: string[]; runsOn?: string[] };
}

/**
 * Defines the current monitoring state of an entity.
 */
export interface MonitoringState {
  /** The current actual monitoring state on the entity. */
  actualMonitoringState?: "OFF" | "ON";

  /** The monitoring state that is expected from the configuration */
  expectedMonitoringState?: "OFF" | "ON";

  /** Defines whether or not the process has to restarted to enable monitoring */
  restartRequired?: boolean;
}

/**
 * Parameters of a process.
 */
export interface ProcessGroupInstance {
  /** The Dynatrace entity ID of the required entity. */
  entityId?: string;

  /** The name of the Dynatrace entity as displayed in the UI. */
  displayName?: string;

  /** The customized name of the entity */
  customizedName?: string;

  /** The discovered name of the entity */
  discoveredName?: string;

  /**
   * The timestamp of when the entity was first detected, in UTC milliseconds
   * @format int64
   */
  firstSeenTimestamp?: number;

  /**
   * The timestamp of when the entity was last detected, in UTC milliseconds
   * @format int64
   */
  lastSeenTimestamp?: number;

  /** The list of entity tags. */
  tags?: TagInfo[];
  toRelationships?: { runsOnProcessGroupInstance?: string[]; isNetworkClientOf?: string[] };
  metadata?: {
    hostGroups?: string[];
    cloudFoundryAppIds?: string[];
    dynatraceNodeIds?: string[];
    executables?: string[];
    googleComputeEngineMetadata?: Record<string, string>;
    phpScripts?: string[];
    awsEcsCluster?: string[];
    declarativeId?: string[];
    glassfishInstanceNames?: string[];
    tibcoBusinessWorksEnginePropertyFiles?: string[];
    jbossServerNames?: string[];
    catalinaBaseValues?: string[];
    mssqlInstanceName?: string[];
    ibmIntegrationServerName?: string[];
    varnishInstanceNames?: string[];
    phpWorkingDirectories?: string[];
    websphereLibertyServerName?: string[];
    googleCloudProjects?: string[];
    dockerContainerImageVersions?: string[];
    hybrisConfigDirectories?: string[];
    executablePaths?: string[];
    awsEcrImageRegions?: string[];
    tibcoBusinessWorksAppSpaceName?: string[];
    springBootStartupClass?: string[];
    weblogicDomainNames?: string[];
    elasticSearchNodeNames?: string[];
    tibcoBWEnginePropertyFilePaths?: string[];
    kubernetesContainerNames?: string[];
    rubyAppRootPaths?: string[];
    ibmImsMessageProcessingRegions?: string[];
    linkage?: string[];
    cloudfoundryMetadata?: Record<string, string>;
    oracleSid?: string[];
    awsEcsFamily?: string[];
    commandLineArgs?: string[];
    aspDotNetCoreApplicationPaths?: string[];
    awsEcrImageAccountIds?: string[];
    springBootAppName?: string[];
    websphereClusterNames?: string[];
    springBootProfileName?: string[];
    kubernetesAnnotations?: Record<string, string>;
    websphereServerNames?: string[];
    catalinaHomeValues?: string[];
    glassfishDomainNames?: string[];
    kubernetesBasePodNames?: string[];
    weblogicClusterNames?: string[];
    javaMainModules?: string[];
    kubernetesPodUids?: string[];
    awsEcsContainerName?: string[];
    coldfusionJvmConfigFiles?: string[];
    dotnetCommandPath?: string[];
    tibcoBusinessWorksDomainName?: string[];
    elasticSearchClusterNames?: string[];
    nodejsScriptNames?: string[];
    iisRoleNames?: string[];
    apacheSparkMasterIpAddresses?: string[];
    weblogicNames?: string[];
    rubyScriptPaths?: string[];
    ibmImsSoapGwName?: string[];
    nodejsAppBaseDirectories?: string[];
    softwareAgProductPropertyName?: string[];
    awsEcsRevision?: string[];
    ibmImsControlRegions?: string[];
    javaMainClasses?: string[];
    cassandraClusterNames?: string[];
    softwareAgInstallRoot?: string[];
    cloudFoundryAppNames?: string[];
    cloudFoundrySpaceNames?: string[];
    pluginMetadata?: Record<string, string>;
    ibmIntegrationNodeName?: string[];
    dockerContainerNames?: string[];
    ibmCtgName?: string[];
    tibcoBusinessWorksCeAppName?: string[];
    kubernetesFullPodNames?: string[];
    apacheConfigPaths?: string[];
    tibcoBusinessWorksAppNodeName?: string[];
    tibcoBusinessWorksCeVersion?: string[];
    dotNetCommands?: string[];
    googleAppEngineServices?: string[];
    kubernetesNamespaces?: string[];
    hybrisDataDirectories?: string[];
    envVariables?: Record<string, string>;
    javaJarFiles?: string[];
    javaJarPaths?: string[];
    dockerContainerIds?: string[];
    cloudFoundrySpaceIds?: string[];
    ruleResult?: string[];
    jbossModes?: string[];
    awsLambdaFunctionNames?: string[];
    cloudFoundryInstanceIndexes?: string[];
    hybrisBinDirectories?: string[];
    weblogicHomeValues?: string[];
    jbossHomes?: string[];
    dynatraceClusterIds?: string[];
    googleAppEngineInstances?: string[];
    websphereNodeNames?: string[];
    agentValueMetadata?: Record<string, string>;
    iisAppPools?: string[];
    ibmImsConnectRegions?: string[];
    dockerContainerImageNames?: string[];
    tibcoBusinessWorksHome?: string[];
    ibmCicsRegion?: string[];
    serviceNames?: string[];
    websphereCellNames?: string[];
    nodejsAppNames?: string[];
    equinoxConfigPath?: string[];
    awsRegions?: string[];
  };
  bitness?: "32bit" | "64bit";
  modules?: string[];
  softwareTechnologies?: TechnologyInfo[];
  listenPorts?: number[];

  /** The management zones that the entity is part of. */
  managementZones?: EntityShortRepresentation[];
  versionedModules?: ProcessGroupInstanceModule[];

  /** Defines the current monitoring state of an entity. */
  monitoringState?: MonitoringState;
  azureHostName?: string;
  azureSiteName?: string;

  /** Versions of OneAgents currently running on the entity. */
  agentVersions?: AgentVersion[];
  fromRelationships?: { isProcessOf?: string[]; isInstanceOf?: string[]; isNetworkClientOf?: string[] };
}

export interface ProcessGroupInstanceModule {
  name?: string;
  version?: string;
}

/**
* The baseline data for an application and its children for each available duration metric. 

A duration metric is one of the following: 
* **DOM interactive** 
* **HTML downloaded** 
* **Load event end** 
* **Load event start** 
* **Response time** 
* **Speed index** 
* **Time to first byte** 
* **Visually complete**
*/
export interface ApplicationBaselineValues {
  /** The Dynatrace entity ID of the application. */
  entityId: string;

  /** The name of the application as displayed in the UI. */
  displayName?: string;

  /** The baseline data for the **DOM interactive** duration metric. */
  applicationDomInteractiveBaselines?: EntityBaselineData[];

  /** The baseline data for the **HTML downloaded** duration metric. */
  applicationHtmlDownloadedBaselines?: EntityBaselineData[];

  /** The baseline data for the **Load event end** duration metric. */
  applicationLoadEventEndBaselines?: EntityBaselineData[];

  /** The baseline data for the **Load event start** duration metric. */
  applicationLoadEventStartBaselines?: EntityBaselineData[];

  /** The baseline data for the **Response time** duration metric. */
  applicationResponseTimeBaselines?: EntityBaselineData[];

  /** The baseline data for the **Speed index** duration metric. */
  applicationSpeedIndexBaselines?: EntityBaselineData[];

  /** The baseline data for the **Time to first byte** duration metric. */
  applicationTimeToFirstByteBaselines?: EntityBaselineData[];

  /** The baseline data for the **Visually complete** duration metric. */
  applicationVisualCompleteBaselines?: EntityBaselineData[];
}

/**
 * The baseline data for a Dynatrace entity for a specific duration metric.
 */
export interface EntityBaselineData {
  /** The ID of the Dynatrace entity. */
  entityId: string;

  /** The display name of the entity. */
  displayName?: string;

  /**
   * The error rate baseline.
   * @format float
   */
  errorRate?: number;

  /** The entity has a load baseline (`true`) or doesn't (`false`). */
  hasLoadBaseline?: boolean;

  /**
   * The median baseline, in microseconds.
   * @format float
   */
  microsMedian?: number;

  /**
   * The 90th percentile baseline, in microseconds.
   * @format float
   */
  micros90thPercentile?: number;

  /** The baseline data for child entities of this entity, for example a `SERVICE_METHOD` of a `SERVICE_METHOD_GROUP`. */
  childBaselines?: EntityBaselineData[];
}

export interface Application {
  /** The Dynatrace entity ID of the required entity. */
  entityId?: string;

  /** The name of the Dynatrace entity as displayed in the UI. */
  displayName?: string;

  /** The customized name of the entity */
  customizedName?: string;

  /** The discovered name of the entity */
  discoveredName?: string;

  /**
   * The timestamp of when the entity was first detected, in UTC milliseconds
   * @format int64
   */
  firstSeenTimestamp?: number;

  /**
   * The timestamp of when the entity was last detected, in UTC milliseconds
   * @format int64
   */
  lastSeenTimestamp?: number;

  /** The list of entity tags. */
  tags?: TagInfo[];

  /** The list of outgoing calls from the application. */
  fromRelationships?: { calls?: string[] };

  /** The list of incoming calls to the application. */
  toRelationships?: { monitors?: string[] };
  ruleAppliedPattern?: string;
  ruleAppliedMatchType?: "ALL_URLS_AND_DOMAINS" | "CONTAINS" | "ENDS" | "EQUALS" | "MATCHES" | "STARTS";

  /** The management zones that the entity is part of. */
  managementZones?: EntityShortRepresentation[];
  applicationType?: "AGENTLESS_MONITORING" | "AMP" | "AUTO_INJECTED" | "DEFAULT" | "SAAS_VENDOR";
  applicationMatchTarget?: "DOMAIN" | "URL";
}

/**
 * The baseline data for a service and its children for the **Response time** duration metric.
 */
export interface ServiceBaselineValues {
  /** The ID of the service. */
  entityId: string;

  /** The display name of the service. */
  displayName?: string;

  /** The baseline data for the **Response time** duration metric. */
  serviceResponseTimeBaselines?: EntityBaselineData[];
}

export interface Service {
  /** The Dynatrace entity ID of the required entity. */
  entityId?: string;

  /** The name of the Dynatrace entity as displayed in the UI. */
  displayName?: string;

  /** The customized name of the entity */
  customizedName?: string;

  /** The discovered name of the entity */
  discoveredName?: string;

  /**
   * The timestamp of when the entity was first detected, in UTC milliseconds
   * @format int64
   */
  firstSeenTimestamp?: number;

  /**
   * The timestamp of when the entity was last detected, in UTC milliseconds
   * @format int64
   */
  lastSeenTimestamp?: number;

  /** The list of entity tags. */
  tags?: TagInfo[];
  toRelationships?: { calls?: string[] };
  contextRoot?: string;
  serviceTechnologyTypes?: string[];

  /** @format int32 */
  port?: number;

  /** The IIB application name. */
  iibApplicationName?: string;
  serviceType?:
    | "AMP"
    | "Cics"
    | "CicsInteraction"
    | "CustomApplication"
    | "Database"
    | "EnterpriseServiceBus"
    | "External"
    | "Ims"
    | "ImsInteraction"
    | "Messaging"
    | "Method"
    | "Mobile"
    | "Process"
    | "QueueInteraction"
    | "QueueListener"
    | "RemoteCall"
    | "Rmi"
    | "SaasVendor"
    | "Span"
    | "Unknown"
    | "WebRequest"
    | "WebService"
    | "WebSite"
    | "ZosConnect";
  webServerName?: string;
  webServiceName?: string;
  webApplicationId?: string;
  databaseVendor?: string;

  /** The name of the remote service. */
  remoteServiceName?: string;

  /** The endpoint of the remote service. */
  remoteEndpoint?: string;
  ipAddresses?: string[];

  /** The ESB application name. */
  esbApplicationName?: string;
  agentTechnologyType?:
    | "APACHE"
    | "DOTNET"
    | "DUMPPROC"
    | "GO"
    | "IIS"
    | "JAVA"
    | "LOG_ANALYTICS"
    | "N/A"
    | "NET"
    | "NETTRACER"
    | "NGINX"
    | "NODEJS"
    | "OPENTRACINGNATIVE"
    | "OS"
    | "PHP"
    | "PLUGIN"
    | "PROCESS"
    | "PYTHON"
    | "REMOTE_PLUGIN"
    | "RUBY"
    | "SDK"
    | "UPDATER"
    | "VARNISH"
    | "WSMB"
    | "Z";
  softwareTechnologies?: TechnologyInfo[];
  path?: string;

  /** The management zones that the entity is part of. */
  managementZones?: EntityShortRepresentation[];
  databaseHostNames?: string[];
  webServiceNamespace?: string;
  databaseName?: string;

  /** The IBM CTG gateway URL. */
  ibmCtgGatewayUrl?: string;
  className?: string;

  /** The services of the akka actor system. */
  akkaActorSystem?: string;

  /** The IBM CICS Transaction Gateway name. */
  ibmCtgServerName?: string;
  fromRelationships?: { runsOnProcessGroupInstance?: string[]; calls?: string[]; runsOn?: string[] };
}

/**
 * The results of the log analysis job.
 */
export interface LogJobRecordsResult {
  /**
   * The list of log analysis results.
   *
   *  The last page contains empty list.
   */
  records?: LogRecord[];

  /**
   * The *scroll token* for the next page of results.
   *
   *  Without it you'll get the first page again.
   */
  scrollToken?: string;
}

/**
 * The analysis result for a single log entry.
 */
export interface LogRecord {
  /**
   * The timestamp of the log entry, in UTC milliseconds.
   * @format int64
   */
  timestamp?: number;

  /** The severity level of the log entry. */
  logLevel?: string;

  /**
   * The entity ID of the host that produced the log.
   *
   *  Not applicable to OS logs.
   */
  hostId?: string;

  /** The text of the log entry. */
  text?: string;

  /** The map of the log entry custom fields. */
  customFields?: Record<string, object>;
}

/**
 * A query to filter log content.
 * @example {"filterQuery":"`testCustomField` = 4624","sortingAttributes":{"sortAscending":"true","sortFieldName":"testCustomField"}}
 */
export interface FilterLogContent {
  /**
   * The query for filtering.
   *
   * See [Search patterns in log data and parse results](https://dt-url.net/f403kja) in Dynatrace Documentation for the syntax definition and examples.
   */
  filterQuery?: string;

  /** How to sort the results. */
  sortingAttributes?: SortingAttributes;
}

/**
 * How to sort the results.
 * @example {"sortAscending":"true","sortFieldName":"testCustomField"}
 */
export interface SortingAttributes {
  /** Sort ascending (`true`) or descending (`false`). */
  sortAscending?: boolean;

  /** The field to sort by. */
  sortFieldName?: string;
}

/**
 * The list of available OS logs.
 */
export interface Log4Host {
  /** The full path to the log. */
  path?: string;

  /**
   * The size of the log, bytes.
   * @format int64
   */
  size?: number;

  /** The log is available (`true`) or not available (`false`) for analysis. */
  availableForAnalysis?: boolean;
}

/**
 * OS logs available on the host.
 */
export interface LogList4HostResult {
  /** The access to the log content is granted (`true`) or denied (`false`). */
  contentAccess?: boolean;

  /** The list of available OS logs. */
  logs?: Log4Host[];
}

export interface LogJobDeleteResult {
  message?: string;
}

/**
 * The top values results of the log analysis job.
 */
export interface LogJobRecordsTopValuesRestResult {
  /** Log analysis parsing result top values */
  parsingFieldTopValues?: ParsingFieldTopValue[];

  /**
   * Log analysis parsing result top values count
   * @format int32
   */
  valuesCount?: number;
}

/**
 * @example {"value":"INFO","count":"100"}
 */
export interface Occurrence {
  /** Value of top parsing field occurrence */
  value?: string;

  /**
   * Count of top parsing field occurrences
   * @format int64
   */
  count?: number;
}

/**
 * @example {"fieldName":".Level","occurrences":[{"value":"INFO","count":"100"}]}
 */
export interface ParsingFieldTopValue {
  /** Top value parsing field name */
  fieldName?: string;

  /** Top value parsing field occurrences */
  occurrences?: Occurrence[];
}

/**
 * A query to filter top log records.
 * @example {"filterQuery":"`testCustomField` = 4624"}
 */
export interface FilterTopLogRecords {
  /**
   * The query for filtering.
   *
   * See [Search patterns in log data and parse results](https://dt-url.net/hf23k34) in Dynatrace Documentation page for syntax description.
   */
  filterQuery?: string;
}

/**
 * A query to extract log content to a custom column.
 * @example {"parsingMode":"json","customParsingPatterns":"\"user %{STRING:User} logged\", \"job took %{INTEGER:Time} ms\""}
 */
export interface ExtractFields {
  /** The parsing mode for log analysis entries presentation. Possible values are: `json`, `disabled`, and `all`. */
  parsingMode?: string;

  /**
   * The query for content extraction.
   *
   * See [Search patterns in log data and parse results](https://dt-url.net/vv83rhp) in Dynatrace Documentation for the syntax definition and examples.
   */
  customParsingPatterns?: string;
}

/**
 * The status the log analysis job.
 */
export interface LogJobStatusResult {
  /** The status of the log analysis job. */
  logAnalysisStatus?:
    | "AGENT_PROCESSING"
    | "CANCELLED"
    | "CANCEL_PENDING"
    | "DOWNLOAD"
    | "FAILED"
    | "PROCESSING"
    | "READY"
    | "TRANSFERRING"
    | "WAITING";

  /**
   * The timestamp of the last status change, in UTC milliseconds.
   * @format int64
   */
  statusChangeTimestamp?: number;

  /**
   * The cause of the job failure.
   *
   *  A successful job has the `NONE` value.
   */
  logHandlingError?:
    | "AGENT_VERSION_NOT_SUPPORTING_DOCKER"
    | "CANCELLED"
    | "FILE_ACCESS_DISABLED"
    | "FILE_NOT_FOUND"
    | "INCORRECT_DATE_FORMAT"
    | "INCORRECT_LOG_FILE"
    | "INTERNAL_PROCESSING_ERROR"
    | "INVALID_FILTER_QUERY"
    | "INVALID_SEARCH_QUERY"
    | "NONE"
    | "NO_LOG_AGENT"
    | "PROCESSOR_FILE_PROCESSING_ERROR"
    | "PROCESSOR_INTERNAL_ERROR"
    | "PROCESSOR_INVALID_PARAMETER_ERROR"
    | "PROCESSOR_NO_LOGS_FILE_FOUND_ERROR"
    | "PROCESSOR_STOPPING_INTERRUPTED"
    | "PROCESSOR_TIMED_OUT"
    | "PROCESSOR_UNHANDLED_EXCEPTION"
    | "PROCESSOR_UNZIPPING_ERROR"
    | "REPACK_FAILED_TO_SAVE_LOG_ANALYSIS_IN_STORAGE"
    | "REPACK_FAILED_TO_STORE_ALL_LOG_ANALYSIS"
    | "REPACK_FAILED_TO_STORE_LOG_ANALYSIS"
    | "SOME_LOG_INCORRECT_DATE_FORMAT"
    | "TIMEOUT";

  /**
   * The number of analyzed log entries.
   * @format int32
   */
  recordsTotal?: number;

  /** The map of the log entry sortable fields. */
  sortableFields?: string[];

  /** The map of the log entry filterable fields. */
  filterableFields?: string[];
}

/**
 * The process group log on the host.
 */
export interface Host4Pg {
  /** The entity ID of the host. */
  hostId?: string;

  /**
   * The size of the PG log for the host, bytes.
   * @format int64
   */
  logSize?: number;

  /** The access to the log content is granted (true) or denied (false). */
  contentAccess?: boolean;

  /** The log is available (true) or not available (false) for analysis. */
  availableForAnalysis?: boolean;
}

export interface LogFile4Pg {
  /** The full path to the log. */
  path?: string;

  /**
   * The size of the log, bytes
   * @format int64
   */
  size?: number;

  /** The distribution of the process group log across hosts. */
  hosts?: Host4Pg[];
}

/**
 * The list of available process group logs.
 */
export interface LogList4PgResult {
  /** The list of available process group logs. */
  logs?: LogFile4Pg[];
}

/**
 * The list of available logs.
 */
export interface LogForCustomDevice {
  /** The full path to the log. */
  path?: string;

  /** The log is available (`true`) or not available (`false`) for analysis. */
  availableForAnalysis?: boolean;
}

/**
 * Logs available on the Custom Device.
 */
export interface LogListForCustomDeviceResult {
  /** The list of available logs. */
  logs?: LogForCustomDevice[];
}

/**
 * OneAgent deployment on a host.
 */
export interface HostAgentInfo {
  /** Information about the host. */
  hostInfo?: Host;

  /** OneAgent version is faulty (`true`) or not (`false`). */
  faultyVersion?: boolean;

  /** OneAgent is active (`true`) or inactive (`false`). */
  active?: boolean;

  /** Configured monitoring mode of OneAgent. */
  configuredMonitoringMode?: "CLOUD_INFRASTRUCTURE" | "FULL_STACK";

  /** The monitoring mode of OneAgent. */
  monitoringType?: "CLOUD_INFRASTRUCTURE" | "FULL_STACK" | "STANDALONE";

  /** The effective auto-update setting of OneAgent. For host with inherited configuration it is calculated from its parent's configuration */
  autoUpdateSetting?: "ENABLED" | "DISABLED";

  /** The current update status of OneAgent. */
  updateStatus?:
    | "INCOMPATIBLE"
    | "OUTDATED"
    | "SCHEDULED"
    | "SUPPRESSED"
    | "UNKNOWN"
    | "UP2DATE"
    | "UPDATE_IN_PROGRESS"
    | "UPDATE_PENDING"
    | "UPDATE_PROBLEM";

  /** A list of versions OneAgent can be updated to. */
  availableVersions?: string[];

  /** Monitoring is enabled (`true`) or disabled (`false`) in the OneAgent configuration. */
  configuredMonitoringEnabled?: boolean;

  /** The availability state of OneAgent. */
  availabilityState?:
    | "CRASHED"
    | "LOST"
    | "MONITORED"
    | "PRE_MONITORED"
    | "SHUTDOWN"
    | "UNEXPECTED_SHUTDOWN"
    | "UNKNOWN"
    | "UNMONITORED";

  /** The detailed availability state of OneAgent. */
  detailedAvailabilityState?:
    | "CRASHED_FAILURE"
    | "CRASHED_UNKNOWN"
    | "LOST_CONNECTION"
    | "LOST_UNKNOWN"
    | "MONITORED"
    | "MONITORED_AGENT_ENABLED"
    | "MONITORED_AGENT_REGISTERED"
    | "MONITORED_AGENT_UPGRADE_STARTED"
    | "MONITORED_AGENT_VERSION_ACCEPTED"
    | "MONITORED_ENABLED"
    | "PRE_MONITORED"
    | "SHUTDOWN_AGENT_LOST"
    | "SHUTDOWN_GRACEFUL"
    | "SHUTDOWN_SPOT_INSTANCE"
    | "SHUTDOWN_STOPPED"
    | "SHUTDOWN_UNKNOWN"
    | "SHUTDOWN_UNKNOWN_UNEXPECTED"
    | "UNKNOWN"
    | "UNMONITORED_AGENT_DISABLED"
    | "UNMONITORED_AGENT_LOST"
    | "UNMONITORED_AGENT_RESTART_TRIGGERED"
    | "UNMONITORED_AGENT_STOPPED"
    | "UNMONITORED_AGENT_UNINSTALLED"
    | "UNMONITORED_AGENT_UNREGISTERED"
    | "UNMONITORED_AGENT_UPGRADE_FAILED"
    | "UNMONITORED_AGENT_VERSION_REJECTED"
    | "UNMONITORED_DISABLED"
    | "UNMONITORED_ID_CHANGED"
    | "UNMONITORED_TERMINATED"
    | "UNMONITORED_UNKNOWN";

  /**
   * This field is deprecated and provided for backward compatibility.
   *
   * Use the **currentActiveGateIds** field instead.
   * @format int32
   */
  currentActiveGateId?: number;

  /** The list of ActiveGate IDs of ActiveGates to which OneAgent is currently connected. */
  currentActiveGateIds?: string[];

  /** The ID of the network zone that OneAgent is using. */
  currentNetworkZoneId?: string;

  /** A list of code modules deployed on the host. */
  modules?: ModuleInfo[];

  /** A list of plugins deployed on the host. */
  plugins?: PluginInfo[];
}

/**
 * A list of hosts with OneAgent deployment information for each host.
 */
export interface HostsListPage {
  /**
   * The progress of the environment search, in percent.
   * @format double
   */
  percentageOfEnvironmentSearched?: number;

  /**
   * The cursor for the next page of results.
   *
   *  Has the value of `null` on the last page.
   * There might be another page of results even if the current page is empty.
   */
  nextPageKey?: string;

  /** A list of hosts with OneAgent deployment information for each host. */
  hosts?: HostAgentInfo[];
}

/**
 * OneAgent code module.
 */
export interface ModuleInfo {
  /** The type of the code module. */
  moduleType?:
    | "APACHE"
    | "DOT_NET"
    | "DUMPPROC"
    | "GO"
    | "IBM_INTEGRATION_BUS"
    | "IIS"
    | "JAVA"
    | "LOG_ANALYTICS"
    | "NETTRACER"
    | "NETWORK"
    | "NGINX"
    | "NODE_JS"
    | "OPENTRACINGNATIVE"
    | "PHP"
    | "PROCESS"
    | "PYTHON"
    | "RUBY"
    | "SDK"
    | "UPDATER"
    | "VARNISH"
    | "Z_OS";

  /** A list of instances of the code module. */
  instances?: ModuleInstance[];
}

/**
 * An instance of the OneAgent code module.
 */
export interface ModuleInstance {
  /** The name of the instance. */
  instanceName?: string;

  /** The version of the code module. */
  moduleVersion?: string;

  /** The code module version is faulty (`true`) or not (`false`). */
  faultyVersion?: boolean;

  /** The code module instance is active (`true`) or inactive (`false`). */
  active?: boolean;
}

/**
 * OneAgent plugin.
 */
export interface PluginInfo {
  /** The name of the plugin. */
  pluginName?: string;

  /** A list of instances of the plugin. */
  instances?: PluginInstance[];
}

/**
 * An instance of the OneAgent plugin.
 */
export interface PluginInstance {
  /** The version of the plugin. */
  pluginVersion?: string;

  /** The state of the plugin instance. */
  state?: string;
}

/**
 * The comment to the problem.
 */
export interface ProblemComment {
  /** The ID of the comment. */
  id?: string;

  /**
   * The timestamp of the comment creation, in UTC milliseconds.
   * @format int64
   */
  createdAtTimestamp?: number;

  /** The text of the comment. */
  content?: string;

  /** The author of the comment. */
  userName?: string;

  /**
   * The context of the comment.
   *
   * Could be any textual comment. You can only set it via REST API.
   */
  context?: string;
}

/**
 * A comment of a problem
 * @example {"comment":"This is a comment!","user":"user1","context":"Slack"}
 */
export interface PushProblemComment {
  /** A comment on the problem. */
  comment: string;

  /** The author of the comment. */
  user: string;

  /** The context of the comment. It can contain any additional information. */
  context?: string;
}

/**
 * The count of open problems in your environment.
 */
export interface GlobalProblemStatus {
  /**
   * The total number of open problems in your environment.
   * @format int32
   */
  totalOpenProblemsCount?: number;

  /** Numbers of open problems per impact level. */
  openProblemCounts?: { APPLICATION?: number; ENVIRONMENT?: number; INFRASTRUCTURE?: number; SERVICE?: number };
}

export interface ProblemStatusResultWrapper {
  /** The count of open problems in your environment. */
  result?: GlobalProblemStatus;
}

/**
 * The properties of an event.
 */
export interface Event {
  /**
   * The timestamp of the event detection, in UTC milliseconds.
   * @format int64
   */
  startTime?: number;

  /**
   * The timestamp of the event closure, in UTC milliseconds.
   *
   *  Has the `-1` value if the event is still open.
   * @format int64
   */
  endTime?: number;

  /** The ID of the affected Dynatrace entity. */
  entityId?: string;

  /** The name of the affected Dynatrace entity. */
  entityName?: string;

  /** The severity of the event. */
  severityLevel?:
    | "AVAILABILITY"
    | "CUSTOM_ALERT"
    | "ERROR"
    | "MONITORING_UNAVAILABLE"
    | "PERFORMANCE"
    | "RESOURCE_CONTENTION";

  /** The impact level of the event. It shows what is affected by the problem: infrastructure, service, or application. */
  impactLevel?: "APPLICATION" | "ENVIRONMENT" | "INFRASTRUCTURE" | "SERVICE";

  /** The type of the event. */
  eventType?:
    | "APPLICATION_JS_FRAMEWORK_DETECTED"
    | "APPLICATION_OVERLOAD_PREVENTION"
    | "AVAILABILITY_EVENT"
    | "CONNECTION_LOST"
    | "CPU_SATURATED"
    | "CUSTOM_ALERT"
    | "CUSTOM_ANNOTATION"
    | "CUSTOM_APPLICATION_OVERLOAD_PREVENTION"
    | "CUSTOM_APP_CRASH_RATE_INCREASED"
    | "CUSTOM_CONFIGURATION"
    | "CUSTOM_DEPLOYMENT"
    | "CUSTOM_INFO"
    | "DATABASE_CONNECTION_FAILURE"
    | "DEPLOYMENT_CHANGED_CHANGE"
    | "DEPLOYMENT_CHANGED_NEW"
    | "DEPLOYMENT_CHANGED_REMOVED"
    | "DYNATRACE_INTERNAL"
    | "EBS_VOLUME_HIGH_LATENCY"
    | "ELASTIC_LOAD_BALANCER_HIGH_BACKEND_FAILURE_RATE"
    | "ELASTIC_LOAD_BALANCER_HIGH_FAILURE_RATE"
    | "ELASTIC_LOAD_BALANCER_HIGH_UNHEALTHY_HOST_RATE"
    | "ERROR_EVENT"
    | "ESXI_HOST_VM_MOTION_ARRIVED"
    | "ESXI_HOST_VM_MOTION_LEFT"
    | "ESXI_HOST_VM_STARTED"
    | "ESXI_START"
    | "ESXI_VM_DISCONNECTED"
    | "ESXI_VM_MOTION"
    | "ESXI_VM_POWER_OFF"
    | "ESXI_VM_START"
    | "FAILURE_RATE_INCREASED"
    | "HIGH_CONNECTIVITY_FAILURES"
    | "HIGH_DROPPED_PACKETS_RATE"
    | "HIGH_GC_ACTIVITY"
    | "HIGH_LATENCY"
    | "HIGH_NETWORK_ERROR_RATE"
    | "HIGH_NETWORK_LOSS_RATE"
    | "HIGH_NETWORK_UTILIZATION"
    | "HOST_CONNECTION_FAILED"
    | "HOST_CONNECTION_LOST"
    | "HOST_DATASTORE_LOW_DISK_SPACE"
    | "HOST_DISK_LOW_INODES"
    | "HOST_GRACEFULLY_SHUTDOWN"
    | "HOST_LOG_AVAILABILITY"
    | "HOST_LOG_ERROR"
    | "HOST_LOG_MATCHED"
    | "HOST_LOG_PERFORMANCE"
    | "HOST_MAINTENANCE"
    | "HOST_NO_CONNECTION"
    | "HOST_OF_SERVICE_UNAVAILABLE"
    | "HOST_SHUTDOWN"
    | "HOST_TIMEOUT"
    | "HTTP_CHECK_GLOBAL_OUTAGE"
    | "HTTP_CHECK_LOCAL_OUTAGE"
    | "HTTP_CHECK_TEST_LOCATION_SLOWDOWN"
    | "INSUFFICIENT_DISK_QUEUE_DEPTH"
    | "JAVASCRIPT_ERROR_RATE_INCREASED"
    | "LAMBDA_FUNCTION_HIGH_ERROR_RATE"
    | "LOG_AVAILABILITY"
    | "LOG_ERROR"
    | "LOG_MATCHED"
    | "LOG_PERFORMANCE"
    | "LOW_DISK_SPACE"
    | "LOW_STORAGE_SPACE"
    | "MARKED_FOR_TERMINATION"
    | "MEMORY_RESOURCES_EXHAUSTED"
    | "MEMORY_SATURATED"
    | "MOBILE_APPLICATION_OVERLOAD_PREVENTION"
    | "MOBILE_APP_CRASH_RATE_INCREASED"
    | "MONITORING_UNAVAILABLE"
    | "OPENSTACK_HOST_VM_SHUTDOWN"
    | "OPENSTACK_HOST_VM_STARTED"
    | "OPENSTACK_KEYSTONE_SLOW"
    | "OPENSTACK_KEYSTONE_UNHEALTHY"
    | "OPENSTACK_VM_LAUNCH_FAILED"
    | "OPENSTACK_VM_MOTION"
    | "OSI_DOCKER_DEVICEMAPPER_LOW_DATA_SPACE"
    | "OSI_DOCKER_DEVICEMAPPER_LOW_METADATA_SPACE"
    | "OVERLOADED_STORAGE"
    | "PERFORMANCE_EVENT"
    | "PGI_CRASHED_INFO"
    | "PGI_HAPROXY_QUEUED_REQUESTS_HIGH"
    | "PGI_HAPROXY_SESSION_USAGE_HIGH"
    | "PGI_LOG_MATCHED"
    | "PGI_MEMDUMP"
    | "PGI_MYSQL_SLOW_QUERIES_RATE_HIGH"
    | "PGI_OF_SERVICE_UNAVAILABLE"
    | "PGI_RMQ_HIGH_FILE_DESC_USAGE"
    | "PGI_RMQ_HIGH_MEM_USAGE"
    | "PGI_RMQ_HIGH_PROCESS_USAGE"
    | "PGI_RMQ_HIGH_SOCKETS_USAGE"
    | "PGI_RMQ_LOW_DISK_SPACE"
    | "PROCESS_CRASHED"
    | "PROCESS_CUSTOM_AVAILABILITY"
    | "PROCESS_CUSTOM_ERROR"
    | "PROCESS_CUSTOM_PERFORMANCE"
    | "PROCESS_GROUP_LOW_INSTANCE_COUNT"
    | "PROCESS_LOG_AVAILABILITY"
    | "PROCESS_LOG_ERROR"
    | "PROCESS_LOG_PERFORMANCE"
    | "PROCESS_RESTART"
    | "PROCESS_UNAVAILABLE"
    | "RDS_AZ_FAILOVER_COMPLETED"
    | "RDS_AZ_FAILOVER_STARTED"
    | "RDS_BACKUP_COMPLETED"
    | "RDS_BACKUP_STARTED"
    | "RDS_OF_SERVICE_UNAVAILABLE"
    | "RDS_RESTART"
    | "RDS_RESTART_SEQUENCE"
    | "RESOURCE_CONTENTION"
    | "SERVICE_RESPONSE_TIME_DEGRADED"
    | "SLOW_DISK"
    | "SYNTHETIC_AVAILABILITY"
    | "SYNTHETIC_NODE_OUTAGE"
    | "SYNTHETIC_PRIVATE_LOCATION_OUTAGE"
    | "SYNTHETIC_SLOWDOWN"
    | "THREADS_RESOURCES_EXHAUSTED"
    | "UNEXPECTED_HIGH_LOAD"
    | "UNEXPECTED_LOW_LOAD"
    | "USER_ACTION_DURATION_DEGRADATION"
    | "VIRTUAL_MACHINE_SHUTDOWN"
    | "WEB_CHECK_GLOBAL_OUTAGE"
    | "WEB_CHECK_LOCAL_OUTAGE";

  /** The id of the resource the event occurred on. */
  resourceId?: string;

  /** The name of the resource the event occurred on. */
  resourceName?: string;

  /** The status of the event. */
  status?: "CLOSED" | "OPEN";

  /** Additional data on the event severity. */
  severities?: EventSeverity[];

  /** Indicates if the event is the root cause of a problem. */
  isRootCause?: boolean;
  deploymentProject?: string;

  /** @format int32 */
  cpuLimitInMHz?: number;
  deploymentParamAdded?: string;
  affectedPrivateSyntheticLocations?: string[];

  /** For events with event type `MONITORING_UNAVAILABLE`, it may be that the event is occurring on the entire Dynatrace cluster. If this is true, it could be that there are problems on the Dynatrace side. */
  isClusterWide?: boolean;
  source?: string;
  effectiveEntity?: string;
  operatingSystem?: string;
  artifact?: string;

  /** @format float */
  cpuLoad?: number;

  /** @format float */
  affectedRequestsPerMinute?: number;
  annotationDescription?: string;
  browser?: "APPLICATION" | "ENVIRONMENT" | "INFRASTRUCTURE" | "SERVICES";
  affectedSyntheticLocations?: string[];
  deploymentName?: string;
  deploymentParamRemoved?: string;
  correlationId?: string;

  /** @format float */
  userDefined50thPercentileThreshold?: number;

  /** If the event type is one of the synthetic event types then we may have information about the error type. The names of those are returned in this field. */
  syntheticErrorType?: string[];
  serviceMethodGroup?: string;

  /** @format float */
  referenceResponseTime90thPercentile?: number;
  userAction?: string;

  /** @format int32 */
  minimumProcessGroupInstanceCountThreshold?: number;

  /** @format float */
  referenceResponseTime50thPercentile?: number;
  original?: string;

  /** @format float */
  userDefined90thPercentileThreshold?: number;
  deploymentVersion?: string;
  annotationType?: string;

  /** If the event type is one of the synthetic event types then we may have information on which synthetic actions are affected by the event. The names of those are returned in this field. */
  affectedSyntheticActions?: string[];

  /** @format float */
  affectedUserActionsPerMinute?: number;
  activeMaintenanceWindows?: EntityShortRepresentation[];
  mobileAppVersion?: string;

  /** @format float */
  userDefinedFailureRateThreshold?: number;
  percentile?: "50th" | "90th";
  customProperties?: Record<string, string>;
  remediationAction?: string;
  service?: string;
  ciBackLink?: string;
  geolocation?: string;
  serviceMethod?: string;
  changed?: string;
}

/**
 * Additional data on the event severity.
 */
export interface EventSeverity {
  /** The metric used in the event severity calculation. */
  context?:
    | "COMMAND_ABORT"
    | "CPU_READY_TIME"
    | "CPU_USAGE"
    | "CRASH_RATE"
    | "FAILURE_RATE"
    | "HYPERVISOR_PACKETS_RECEIVED_DROPPED"
    | "HYPERVISOR_PACKETS_TRANSMITTED_DROPPED"
    | "MEMORY_COMPRESSION_RATE"
    | "MEMORY_DECOMPRESSION_RATE"
    | "MEMORY_SWAP_IN_RATE"
    | "MEMORY_SWAP_OUT_RATE"
    | "MEMORY_USAGE"
    | "NETWORK_HIGH_RECEIVED_UTILIZATION_RATE"
    | "NETWORK_HIGH_TRANSMITTED_UTILIZATION_RATE"
    | "NETWORK_PACKETS_RECEIVED_DROPPED"
    | "NETWORK_PACKETS_TRANSMITTED_DROPPED"
    | "NETWORK_RECEIVED_ERROR_RATE"
    | "NETWORK_TRANSMITTED_ERROR_RATE"
    | "PAGE_FAULTS"
    | "PG_AVAILABLE"
    | "RESPONSE_TIME_50TH_PERCENTILE"
    | "RESPONSE_TIME_90TH_PERCENTILE";

  /**
   * The value of the severity.
   * @format float
   */
  value?: number;

  /** The unit of the severity value. */
  unit?:
    | "Bit (bit)"
    | "BitPerHour (bit/h)"
    | "BitPerMinute (bit/min)"
    | "BitPerSecond (bit/s)"
    | "Byte (B)"
    | "BytePerHour (B/h)"
    | "BytePerMinute (B/min)"
    | "BytePerSecond (B/s)"
    | "Cores"
    | "Count (count)"
    | "Day (ds)"
    | "DecibelMilliWatt (dBm)"
    | "G"
    | "GibiByte (GiB)"
    | "GigaByte (GB)"
    | "Hour (hs)"
    | "KibiByte (KiB)"
    | "KibiBytePerHour (KiB/h)"
    | "KibiBytePerMinute (KiB/min)"
    | "KibiBytePerSecond (KiB/s)"
    | "KiloByte (kB)"
    | "KiloBytePerHour (kB/h)"
    | "KiloBytePerMinute (kB/min)"
    | "KiloBytePerSecond (kB/s)"
    | "M"
    | "MSU"
    | "MebiByte (MiB)"
    | "MebiBytePerHour (MiB/h)"
    | "MebiBytePerMinute (MiB/min)"
    | "MebiBytePerSecond (MiB/s)"
    | "MegaByte (MB)"
    | "MegaBytePerHour (MB/h)"
    | "MegaBytePerMinute (MB/min)"
    | "MegaBytePerSecond (MB/s)"
    | "MicroSecond (µs)"
    | "MilliSecond (ms)"
    | "MilliSecondPerMinute (ms/min)"
    | "Minute (mins)"
    | "Month (mos)"
    | "N/A"
    | "NanoSecond (ns)"
    | "NanoSecondPerMinute (ns/min)"
    | "PerHour (count/h)"
    | "PerMinute (count/min)"
    | "PerSecond (count/s)"
    | "Percent (%)"
    | "Pixel (px)"
    | "Promille (‰)"
    | "Ratio"
    | "Second (s)"
    | "State"
    | "Unspecified"
    | "Week (ws)"
    | "Year (ys)"
    | "k"
    | "mCores";
}

/**
 * The properties of a problem.
 */
export interface Problem {
  /** The ID of the problem. */
  id?: string;

  /**
   * The start timestamp of the problem, in UTC milliseconds.
   * @format int64
   */
  startTime?: number;

  /**
   * The end timestamp of the problem, in UTC milliseconds.
   *
   *  Has the value `-1` if the problem is still open.
   * @format int64
   */
  endTime?: number;

  /** The name of the problem, displayed in the UI. */
  displayName?: string;

  /** The impact level of the problem. It shows what is affected by the problem: infrastructure, service, or application. */
  impactLevel?: "APPLICATION" | "ENVIRONMENT" | "INFRASTRUCTURE" | "SERVICE";

  /** The status of the problem. */
  status?: "CLOSED" | "OPEN";

  /** The severity of the problem. */
  severityLevel?:
    | "AVAILABILITY"
    | "CUSTOM_ALERT"
    | "ERROR"
    | "MONITORING_UNAVAILABLE"
    | "PERFORMANCE"
    | "RESOURCE_CONTENTION";

  /**
   * The number of comments to the problem.
   * @format int32
   */
  commentCount?: number;

  /** Tags of entities affected by the problem. */
  tagsOfAffectedEntities?: TagInfo[];

  /** The list of events related to the problem. */
  rankedEvents?: Event[];

  /** Provides impact information of the events in an aggregated form. For a more detailed impact analysis, see `rankedEvents`. */
  rankedImpacts?: EventRestImpact[];

  /** The number of affected entities per impact level. */
  affectedCounts?: { APPLICATION?: number; ENVIRONMENT?: number; INFRASTRUCTURE?: number; SERVICE?: number };

  /** The number of entities that were affected, but recovered, per impact level. */
  recoveredCounts?: { APPLICATION?: number; ENVIRONMENT?: number; INFRASTRUCTURE?: number; SERVICE?: number };

  /** Indicates whether Dynatrace has found at least one possible root cause for the problem. */
  hasRootCause?: boolean;
}

/**
 * Details on open problems in your environment.
 */
export interface ProblemFeedQueryResult {
  /**
   * The list of problems and their details.
   *
   * Contains all problems within specified timeframe, open and closed.
   */
  problems?: Problem[];

  /** The number of monitored entities per impact level. */
  monitored?: { APPLICATION?: number; ENVIRONMENT?: number; INFRASTRUCTURE?: number; SERVICE?: number };
}

export interface ProblemFeedResultWrapper {
  /** Details on open problems in your environment. */
  result?: ProblemFeedQueryResult;
}

/**
 * The result of closing a problem.
 */
export interface ProblemCloseResult {
  /** The ID of the problem. */
  problemId?: string;

  /** The comment to the problem. */
  comment?: ProblemComment;

  /**
   * The timestamp when the closure was triggered.
   * @format int64
   */
  closeTimestamp?: number;

  /** The problem is in process of closing (`true`) or closed (`false`). */
  closing?: boolean;
}

/**
 * The list of comments to the problem.
 */
export interface ProblemCommentList {
  /** The list of comments to the problem. */
  comments?: ProblemComment[];
}

export interface ProblemDetailsResultWrapper {
  /** The properties of a problem. */
  result?: Problem;
}

/**
 * The short representation of a synthetic monitor.
 */
export interface MonitorCollectionElement {
  /** The name of a synthetic object. */
  name: string;

  /** The ID of a synthetic object. */
  entityId: string;

  /** The type of a synthetic monitor. */
  type: "BROWSER" | "HTTP";

  /** The state of a synthetic monitor. */
  enabled: boolean;
}

/**
 * A list of synthetic monitors
 */
export interface Monitors {
  /** The list of synthetic monitors. */
  monitors: MonitorCollectionElement[];
}

/**
 * A DTO for entity ID.
 */
export interface EntityIdDto {
  /** Entity ID to be transferred */
  entityId: string;
}

/**
 * The anomaly detection configuration.
 */
export interface AnomalyDetection {
  /** Outage handling configuration. */
  outageHandling?: OutageHandlingPolicy;

  /** Performance thresholds configuration. */
  loadingTimeThresholds?: LoadingTimeThresholdsPolicyDto;
}

/**
 * Browser synthetic monitor update. Some fields are inherited from base `SyntheticMonitorUpdate` model.
 */
export type BrowserSyntheticMonitorUpdate = SyntheticMonitorUpdate & { keyPerformanceMetrics?: KeyPerformanceMetrics };

/**
 * Global outage handling configuration.
 */
export interface GlobalOutagePolicy {
  /**
   * Alert if all locations are unable to access the web application *X* times consecutively.
   * @format int32
   * @min 1
   * @max 5
   */
  consecutiveRuns: number;
}

/**
 * HTTP synthetic monitor update. Some fields are inherited from base `SyntheticMonitorUpdate` model.
 */
export type HttpSyntheticMonitorUpdate = SyntheticMonitorUpdate;

/**
 * The key performance metrics configuration.
 */
export interface KeyPerformanceMetrics {
  /** Defines the key performance metric for load actions. */
  loadActionKpm:
    | "VISUALLY_COMPLETE"
    | "SPEED_INDEX"
    | "USER_ACTION_DURATION"
    | "TIME_TO_FIRST_BYTE"
    | "HTML_DOWNLOADED"
    | "DOM_INTERACTIVE"
    | "LOAD_EVENT_START"
    | "LOAD_EVENT_END";

  /** Defines the key performance metric for XHR actions. */
  xhrActionKpm: "VISUALLY_COMPLETE" | "USER_ACTION_DURATION" | "TIME_TO_FIRST_BYTE" | "RESPONSE_END";
}

/**
 * The performance threshold rule.
 */
export interface LoadingTimeThreshold {
  /** The type of the threshold: total loading time or action loading time. */
  type: "ACTION" | "TOTAL";

  /**
   * Notify if monitor takes longer than *X* milliseconds to load.
   * @format int32
   * @min 0
   */
  valueMs: number;

  /**
   * Specify the request to which an ACTION threshold applies.
   * @format int32
   * @min 1
   */
  requestIndex?: number;

  /**
   * Specify the event to which an ACTION threshold applies.
   * @format int32
   * @min 1
   */
  eventIndex?: number;
}

/**
 * Performance thresholds configuration.
 */
export interface LoadingTimeThresholdsPolicyDto {
  /** Performance threshold is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The list of performance threshold rules. */
  thresholds?: LoadingTimeThreshold[];
}

/**
* Local outage handling configuration. 

 Alert if **affectedLocations** of locations are unable to access the web application **consecutiveRuns** times consecutively.
*/
export interface LocalOutagePolicy {
  /**
   * The number of affected locations to trigger an alert.
   * @format int32
   * @min 1
   */
  affectedLocations: number;

  /**
   * The number of consecutive fails to trigger an alert.
   * @format int32
   * @min 1
   * @max 5
   */
  consecutiveRuns: number;
}

/**
 * Outage handling configuration.
 */
export interface OutageHandlingPolicy {
  /** When enabled (`true`), generate a problem and send an alert when the monitor is unavailable at all configured locations. */
  globalOutage: boolean;

  /** Global outage handling configuration. */
  globalOutagePolicy?: GlobalOutagePolicy;

  /** When enabled (`true`), generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location. */
  localOutage: boolean;

  /**
   * Local outage handling configuration.
   *
   *  Alert if **affectedLocations** of locations are unable to access the web application **consecutiveRuns** times consecutively.
   */
  localOutagePolicy: LocalOutagePolicy;

  /** Schedule retry if browser monitor execution results in a fail. For HTTP monitors this property is ignored. */
  retryOnError?: boolean;
}

/**
* The synthetic monitor update. 

 The actual set of fields depends the type of the monitor. Find the list of actual objects in the description of the **type** field or see [Synthetic monitors API - JSON models](https://dt-url.net/2523se9).
* @example {"frequencyMin":5,"anomalyDetection":{"outageHandling":{"globalOutage":true,"localOutage":true,"localOutagePolicy":{"affectedLocations":1,"consecutiveRuns":3}},"loadingTimeThresholds":{"enabled":true,"thresholds":[{"type":"TOTAL","valueMs":100,"requestIndex":1}]}},"type":"BROWSER","name":"Browser Monitor Example","locations":["GEOLOCATION-9999453BE4BDB3CD"],"enabled":true,"script":{"type":"availability","version":"1.0","configuration":{"device":{"deviceName":"Desktop","orientation":"landscape"}},"events":[{"type":"navigate","description":"Loading of \"example.com\"","url":"http://example.com","wait":{"waitFor":"page_complete"}}]},"keyPerformanceMetrics":{"loadActionKpm":"VISUALLY_COMPLETE","xhrActionKpm":"VISUALLY_COMPLETE"},"tags":["example"],"manuallyAssignedApps":["APPLICATION-4ADF0EF407C7C545"],"events":[]}
*/
export interface SyntheticMonitorUpdate {
  /**
   * The frequency of the monitor, in minutes.
   *
   *  You can use one of the following values: `5`, `10`, `15`, `30`, and `60`.
   * @format int32
   */
  frequencyMin: number;

  /** The anomaly detection configuration. */
  anomalyDetection?: AnomalyDetection;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `BROWSER` -> BrowserSyntheticMonitorUpdate
   * * `HTTP` -> HttpSyntheticMonitorUpdate
   */
  type: "BROWSER" | "HTTP";

  /** The name of the monitor. */
  name: string;

  /**
   * A list of locations from which the monitor is executed.
   *
   *  To specify a location, use its entity ID.
   */
  locations: string[];

  /** The monitor is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The script of a [browser](https://dt-url.net/9c103rda) or HTTP monitor. */
  script: object;

  /**
   * A set of tags assigned to the monitor.
   *
   *  You can specify only the value of the tag here and the `CONTEXTLESS` context and source 'USER' will be added automatically. But preferred option is usage of TagWithSourceDto model.
   */
  tags: TagWithSourceInfo[];

  /** A set of manually assigned applications. */
  manuallyAssignedApps: string[];
}

/**
 * Tag with source of a Dynatrace entity.
 */
export interface TagWithSourceInfo {
  /** The source of the tag, such as USER, RULE_BASED or AUTO */
  source?: "AUTO" | "RULE_BASED" | "USER";

  /**
   * The origin of the tag, such as AWS or Cloud Foundry.
   *
   *  Custom tags use the `CONTEXTLESS` value.
   */
  context:
    | "AWS"
    | "AWS_GENERIC"
    | "AZURE"
    | "CLOUD_FOUNDRY"
    | "CONTEXTLESS"
    | "ENVIRONMENT"
    | "GOOGLE_CLOUD"
    | "KUBERNETES";

  /**
   * The key of the tag.
   *
   *  Custom tags have the tag value here.
   */
  key: string;

  /**
   * The value of the tag.
   *
   *  Not applicable to custom tags.
   */
  value?: string;
}

/**
 * Browser synthetic monitor. Some fields are inherited from the base `SyntheticMonitor` model.
 */
export type BrowserSyntheticMonitor = SyntheticMonitor & {
  keyPerformanceMetrics?: KeyPerformanceMetrics;
  events?: EventDto[];
};

export interface EventDto {
  /** Event identifier */
  entityId: string;

  /** Event name */
  name: string;

  /**
   * Event sequence number
   * @format int32
   */
  sequenceNumber: number;
}

/**
 * HTTP synthetic monitor. Some fields are inherited from base `SyntheticMonitor` model.
 */
export type HttpSyntheticMonitor = SyntheticMonitor & { requests?: RequestDto[] };

/**
 * The configuration of a management zone.
 */
export interface ManagementZone {
  /** The ID of the management zone. */
  id: string;

  /** The name of the management zone. */
  name: string;
}

export interface RequestDto {
  /** Request identifier */
  entityId: string;

  /** Request name */
  name: string;

  /**
   * Request sequence number
   * @format int32
   */
  sequenceNumber: number;
}

/**
* The synthetic monitor. 

 The actual set of fields depends the type of the monitor. Find the list of actual objects in the description of the **type** field or see [Synthetic monitors API - JSON models](https://dt-url.net/2523se9).
*/
export interface SyntheticMonitor {
  /** The entity ID of the monitor. */
  entityId: string;

  /** The name of the monitor. */
  name: string;

  /**
   * The frequency of the monitor, in minutes.
   *
   *  You can use one of the following values: `5`, `10`, `15`, `30`, and `60`.
   * @format int32
   */
  frequencyMin: number;

  /** The monitor is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `BROWSER` -> BrowserSyntheticMonitor
   * * `HTTP` -> HttpSyntheticMonitor
   */
  type: "BROWSER" | "HTTP";

  /** The origin of a monitor */
  createdFrom: "API" | "GUI";

  /** The script of a [browser](https://dt-url.net/9c103rda) or HTTP monitor. */
  script: object;

  /**
   * A list of locations from which the monitor is executed.
   *
   *  To specify a location, use its entity ID.
   */
  locations: string[];

  /** The anomaly detection configuration. */
  anomalyDetection?: AnomalyDetection;

  /** A set of tags assigned to the monitor. */
  tags: TagWithSourceInfo[];

  /** A set of management zones to which the monitor belongs to. */
  managementZones: ManagementZone[];

  /** A set of automatically assigned applications. */
  automaticallyAssignedApps: string[];

  /** A set of manually assigned applications. */
  manuallyAssignedApps: string[];
}

/**
 * Parameters of a single plugin or custom event threshold.
 */
export interface Threshold {
  /** The ID of the threshold. */
  thresholdId?: string;

  /**
   * The case-sensitive ID of the metric evaluated by threshold.
   *
   * You can use it to find the metric via the `timeseries` endpoint of the API.
   */
  timeseriesId?: string;

  /**
   * The value of the threshold.
   * @format double
   */
  threshold?: number;

  /** The condition for the threshold value check: above or below. */
  alertCondition?: "ABOVE" | "BELOW";

  /**
   * The number of one-minute samples that form sliding evaluation window.
   * @format int32
   */
  samples?: number;

  /**
   * How many one-minute samples within the evaluation window should violate the threshold to trigger an event.
   * @format int32
   */
  violatingSamples?: number;

  /** The type of the event to trigger on the threshold violation. */
  eventType?:
    | "APPLICATION_JS_FRAMEWORK_DETECTED"
    | "APPLICATION_OVERLOAD_PREVENTION"
    | "AVAILABILITY_EVENT"
    | "CONNECTION_LOST"
    | "CPU_SATURATED"
    | "CUSTOM_ALERT"
    | "CUSTOM_ANNOTATION"
    | "CUSTOM_APPLICATION_OVERLOAD_PREVENTION"
    | "CUSTOM_APP_CRASH_RATE_INCREASED"
    | "CUSTOM_CONFIGURATION"
    | "CUSTOM_DEPLOYMENT"
    | "CUSTOM_INFO"
    | "DATABASE_CONNECTION_FAILURE"
    | "DEPLOYMENT_CHANGED_CHANGE"
    | "DEPLOYMENT_CHANGED_NEW"
    | "DEPLOYMENT_CHANGED_REMOVED"
    | "DYNATRACE_INTERNAL"
    | "EBS_VOLUME_HIGH_LATENCY"
    | "ELASTIC_LOAD_BALANCER_HIGH_BACKEND_FAILURE_RATE"
    | "ELASTIC_LOAD_BALANCER_HIGH_FAILURE_RATE"
    | "ELASTIC_LOAD_BALANCER_HIGH_UNHEALTHY_HOST_RATE"
    | "ERROR_EVENT"
    | "ESXI_HOST_VM_MOTION_ARRIVED"
    | "ESXI_HOST_VM_MOTION_LEFT"
    | "ESXI_HOST_VM_STARTED"
    | "ESXI_START"
    | "ESXI_VM_DISCONNECTED"
    | "ESXI_VM_MOTION"
    | "ESXI_VM_POWER_OFF"
    | "ESXI_VM_START"
    | "FAILURE_RATE_INCREASED"
    | "HIGH_CONNECTIVITY_FAILURES"
    | "HIGH_DROPPED_PACKETS_RATE"
    | "HIGH_GC_ACTIVITY"
    | "HIGH_LATENCY"
    | "HIGH_NETWORK_ERROR_RATE"
    | "HIGH_NETWORK_LOSS_RATE"
    | "HIGH_NETWORK_UTILIZATION"
    | "HOST_CONNECTION_FAILED"
    | "HOST_CONNECTION_LOST"
    | "HOST_DATASTORE_LOW_DISK_SPACE"
    | "HOST_DISK_LOW_INODES"
    | "HOST_GRACEFULLY_SHUTDOWN"
    | "HOST_LOG_AVAILABILITY"
    | "HOST_LOG_ERROR"
    | "HOST_LOG_MATCHED"
    | "HOST_LOG_PERFORMANCE"
    | "HOST_MAINTENANCE"
    | "HOST_NO_CONNECTION"
    | "HOST_OF_SERVICE_UNAVAILABLE"
    | "HOST_SHUTDOWN"
    | "HOST_TIMEOUT"
    | "HTTP_CHECK_GLOBAL_OUTAGE"
    | "HTTP_CHECK_LOCAL_OUTAGE"
    | "HTTP_CHECK_TEST_LOCATION_SLOWDOWN"
    | "INSUFFICIENT_DISK_QUEUE_DEPTH"
    | "JAVASCRIPT_ERROR_RATE_INCREASED"
    | "LAMBDA_FUNCTION_HIGH_ERROR_RATE"
    | "LOG_AVAILABILITY"
    | "LOG_ERROR"
    | "LOG_MATCHED"
    | "LOG_PERFORMANCE"
    | "LOW_DISK_SPACE"
    | "LOW_STORAGE_SPACE"
    | "MARKED_FOR_TERMINATION"
    | "MEMORY_RESOURCES_EXHAUSTED"
    | "MEMORY_SATURATED"
    | "MOBILE_APPLICATION_OVERLOAD_PREVENTION"
    | "MOBILE_APP_CRASH_RATE_INCREASED"
    | "MONITORING_UNAVAILABLE"
    | "OPENSTACK_HOST_VM_SHUTDOWN"
    | "OPENSTACK_HOST_VM_STARTED"
    | "OPENSTACK_KEYSTONE_SLOW"
    | "OPENSTACK_KEYSTONE_UNHEALTHY"
    | "OPENSTACK_VM_LAUNCH_FAILED"
    | "OPENSTACK_VM_MOTION"
    | "OSI_DOCKER_DEVICEMAPPER_LOW_DATA_SPACE"
    | "OSI_DOCKER_DEVICEMAPPER_LOW_METADATA_SPACE"
    | "OVERLOADED_STORAGE"
    | "PERFORMANCE_EVENT"
    | "PGI_CRASHED_INFO"
    | "PGI_HAPROXY_QUEUED_REQUESTS_HIGH"
    | "PGI_HAPROXY_SESSION_USAGE_HIGH"
    | "PGI_LOG_MATCHED"
    | "PGI_MEMDUMP"
    | "PGI_MYSQL_SLOW_QUERIES_RATE_HIGH"
    | "PGI_OF_SERVICE_UNAVAILABLE"
    | "PGI_RMQ_HIGH_FILE_DESC_USAGE"
    | "PGI_RMQ_HIGH_MEM_USAGE"
    | "PGI_RMQ_HIGH_PROCESS_USAGE"
    | "PGI_RMQ_HIGH_SOCKETS_USAGE"
    | "PGI_RMQ_LOW_DISK_SPACE"
    | "PROCESS_CRASHED"
    | "PROCESS_CUSTOM_AVAILABILITY"
    | "PROCESS_CUSTOM_ERROR"
    | "PROCESS_CUSTOM_PERFORMANCE"
    | "PROCESS_GROUP_LOW_INSTANCE_COUNT"
    | "PROCESS_LOG_AVAILABILITY"
    | "PROCESS_LOG_ERROR"
    | "PROCESS_LOG_PERFORMANCE"
    | "PROCESS_RESTART"
    | "PROCESS_UNAVAILABLE"
    | "RDS_AZ_FAILOVER_COMPLETED"
    | "RDS_AZ_FAILOVER_STARTED"
    | "RDS_BACKUP_COMPLETED"
    | "RDS_BACKUP_STARTED"
    | "RDS_OF_SERVICE_UNAVAILABLE"
    | "RDS_RESTART"
    | "RDS_RESTART_SEQUENCE"
    | "RESOURCE_CONTENTION"
    | "SERVICE_RESPONSE_TIME_DEGRADED"
    | "SLOW_DISK"
    | "SYNTHETIC_AVAILABILITY"
    | "SYNTHETIC_NODE_OUTAGE"
    | "SYNTHETIC_PRIVATE_LOCATION_OUTAGE"
    | "SYNTHETIC_SLOWDOWN"
    | "THREADS_RESOURCES_EXHAUSTED"
    | "UNEXPECTED_HIGH_LOAD"
    | "UNEXPECTED_LOW_LOAD"
    | "USER_ACTION_DURATION_DEGRADATION"
    | "VIRTUAL_MACHINE_SHUTDOWN"
    | "WEB_CHECK_GLOBAL_OUTAGE"
    | "WEB_CHECK_LOCAL_OUTAGE";

  /** The name of the event to trigger on the threshold violation. */
  eventName?: string;

  /** The source of the threshold. */
  filter?: "ALL" | "PLUGIN" | "REMOTE_PLUGIN" | "USER_INTERACTION";

  /** The threshold is enabled/disabled. */
  enabled?: boolean;

  /**
   * How many one-minute samples within the evaluation window should go back to normal to close the event.
   * @format int32
   */
  dealertingSamples?: number;

  /**
   * A description of the event, triggered by a threshold violation.
   *
   *  You can use the following placeholders:
   * {severity}: the actual metric value,
   *  {alert_condition}: above or below threshold condition,
   * {threshold}: the threshold value,{violating_samples}: the number of samples, violating the threshold,
   * {dimensions}: metric's dimension that violated the threshold.
   */
  description?: string;
}

/**
 * Parameters of a single plugin or custom event threshold.
 * @example {"thresholdId":"tooManyCoffeesMade","timeseriesId":"received.coffees","threshold":10000,"alertCondition":"ABOVE","samples":1,"violatingSamples":1,"dealertingSamples":1,"eventType":"AVAILABILITY_EVENT","eventName":"Too many coffees made","description":"The coffee machine must not produce a number of coffees {alert_condition} {threshold}.","enabled":true}
 */
export interface ThresholdRegistrationMessage {
  /** The ID of the threshold. */
  thresholdId?: string;

  /**
   * The case-sensitive ID of the metric evaluated by threshold.
   *
   *  You can find metric IDs, by performing the GET request to the `timeseries` endpoint of the API.
   */
  timeseriesId?: string;

  /**
   * The value of the threshold.
   * @format double
   */
  threshold?: number;

  /** The condition for the threshold value check: above or below. */
  alertCondition?: "ABOVE" | "BELOW";

  /**
   * The number of one-minute samples to form the sliding evaluation window.
   * @format int32
   */
  samples?: number;

  /**
   * How many one-minute samples within the evaluation window should violate the threshold to trigger an event.
   * @format int32
   */
  violatingSamples?: number;

  /**
   * How many one-minute samples within the evaluation window should go back to normal to close the event.
   * @format int32
   */
  dealertingSamples?: number;

  /** The type of the event to trigger on the threshold violation. */
  eventType?: "AVAILABILITY_EVENT" | "ERROR_EVENT" | "PERFORMANCE_EVENT";

  /** The name of the event, displayed in the UI. */
  eventName?: string;

  /**
   * A description of the event, triggered by a threshold violation.
   *
   *  You can use the following placeholders:
   * {severity}: the actual metric value,
   *  {alert_condition}: above or below threshold condition,
   * {threshold}: the threshold value,{violating_samples}: the number of samples, violating the threshold,
   * {dimensions}: metric's dimension that violated the threshold.
   */
  description?: string;

  /** The threshold is enabled/disabled. */
  enabled?: boolean;
}

/**
 * The configuration of a metric with all its parameters.
 * @example {"timeseriesId":"com.dynatrace.builting:host.cpu.idle","displayName":"CPU idle","dimensions":["HOST"],"aggregationTypes":["AVG","SUM","MIN","MAX"],"unit":"Percent","filter":"BUILTIN","detailedSource":"Infrastructure","types":["Test"],"warnings":[]}
 */
export interface TimeseriesDefinition {
  /** The ID of the metric. */
  timeseriesId?: string;

  /** The name of the metric in the user interface. */
  displayName?: string;

  /** The fine metric division, for example process group and process ID for some process-related metric. */
  dimensions?: string[];

  /** The list of allowed aggregations for this metric. */
  aggregationTypes?: ("AVG" | "COUNT" | "MAX" | "MEDIAN" | "MIN" | "PERCENTILE" | "SUM")[];

  /** The unit of the metric. */
  unit?:
    | "Bit (bit)"
    | "BitPerHour (bit/h)"
    | "BitPerMinute (bit/min)"
    | "BitPerSecond (bit/s)"
    | "Byte (B)"
    | "BytePerHour (B/h)"
    | "BytePerMinute (B/min)"
    | "BytePerSecond (B/s)"
    | "Cores"
    | "Count (count)"
    | "Day (ds)"
    | "DecibelMilliWatt (dBm)"
    | "G"
    | "GibiByte (GiB)"
    | "GigaByte (GB)"
    | "Hour (hs)"
    | "KibiByte (KiB)"
    | "KibiBytePerHour (KiB/h)"
    | "KibiBytePerMinute (KiB/min)"
    | "KibiBytePerSecond (KiB/s)"
    | "KiloByte (kB)"
    | "KiloBytePerHour (kB/h)"
    | "KiloBytePerMinute (kB/min)"
    | "KiloBytePerSecond (kB/s)"
    | "M"
    | "MSU"
    | "MebiByte (MiB)"
    | "MebiBytePerHour (MiB/h)"
    | "MebiBytePerMinute (MiB/min)"
    | "MebiBytePerSecond (MiB/s)"
    | "MegaByte (MB)"
    | "MegaBytePerHour (MB/h)"
    | "MegaBytePerMinute (MB/min)"
    | "MegaBytePerSecond (MB/s)"
    | "MicroSecond (µs)"
    | "MilliSecond (ms)"
    | "MilliSecondPerMinute (ms/min)"
    | "Minute (mins)"
    | "Month (mos)"
    | "N/A"
    | "NanoSecond (ns)"
    | "NanoSecondPerMinute (ns/min)"
    | "PerHour (count/h)"
    | "PerMinute (count/min)"
    | "PerSecond (count/s)"
    | "Percent (%)"
    | "Pixel (px)"
    | "Promille (‰)"
    | "Ratio"
    | "Second (s)"
    | "State"
    | "Unspecified"
    | "Week (ws)"
    | "Year (ys)"
    | "k"
    | "mCores";

  /** The feature, where the metric originates. */
  filter?: "ALL" | "BUILTIN" | "CUSTOM" | "PLUGIN" | "REMOTE_PLUGIN";

  /** The feature, where the metric originates. */
  detailedSource?: string;

  /** The ID of the plugin, where the metric originates. */
  pluginId?: string;

  /** Technology type definition. Used to group metrics under a logical technology name. */
  types?: string[];

  /** The warnings that occurred while creating the metric. */
  warnings?: string[];
}

/**
 * List of metric's datapoints, as well as their parameters.
 * @example {"dataPoints":{"HOST-0000000000000007":[[1522220334000,89]]},"timeseriesId":"com.dynatrace.builtin:host.cpu.idle","unit":"Percent","entities":{"HOST-0000000000000007":"Laptop-8"},"resolutionInMillisUTC":300000,"aggregationType":"AVG"}
 */
export interface TimeseriesDataPointQueryResult {
  /**
   * Data points of a metric.
   *
   * A JSON object that maps the ID of the entity that delivered the data points and an array, which consists of arrays of the data point float values.
   *  May contain more than one entity ID per record (for example, a host and its network interface). In such cases, entity IDs are separated by commas.
   *  A datapoint contains a value and a timestamp, at which the value was recorded.
   *  Dynatrace stores data in time slots. The **dataPoints** object shows the *starting* timestamp of the slot. If the **startTimestamp** or **endTimestamp** of your query lies inside of the data time slot, this time slot is included into response. Due to the fact that the timestamp of the first data point lies outside of the specified timeframe, you will see *earlier* timestamp than the specified **startTimestamp** in the first data point of the response.
   *  There are three versions of data points:
   *  * Numeric datapoint: Contains a numeric value.
   *  * Enum datapoint: Contains an enum value, currently only for availability timeseries.
   *  * Prediction datapoint: Similar to the numeric datapoint, but it contains a confidence interval, within which the future values are expected to be.
   */
  dataPoints?: Record<string, number[][]>;

  /** The ID of the metric. */
  timeseriesId?: string;

  /** The unit of data points. */
  unit?:
    | "Bit (bit)"
    | "BitPerHour (bit/h)"
    | "BitPerMinute (bit/min)"
    | "BitPerSecond (bit/s)"
    | "Byte (B)"
    | "BytePerHour (B/h)"
    | "BytePerMinute (B/min)"
    | "BytePerSecond (B/s)"
    | "Cores"
    | "Count (count)"
    | "Day (ds)"
    | "DecibelMilliWatt (dBm)"
    | "G"
    | "GibiByte (GiB)"
    | "GigaByte (GB)"
    | "Hour (hs)"
    | "KibiByte (KiB)"
    | "KibiBytePerHour (KiB/h)"
    | "KibiBytePerMinute (KiB/min)"
    | "KibiBytePerSecond (KiB/s)"
    | "KiloByte (kB)"
    | "KiloBytePerHour (kB/h)"
    | "KiloBytePerMinute (kB/min)"
    | "KiloBytePerSecond (kB/s)"
    | "M"
    | "MSU"
    | "MebiByte (MiB)"
    | "MebiBytePerHour (MiB/h)"
    | "MebiBytePerMinute (MiB/min)"
    | "MebiBytePerSecond (MiB/s)"
    | "MegaByte (MB)"
    | "MegaBytePerHour (MB/h)"
    | "MegaBytePerMinute (MB/min)"
    | "MegaBytePerSecond (MB/s)"
    | "MicroSecond (µs)"
    | "MilliSecond (ms)"
    | "MilliSecondPerMinute (ms/min)"
    | "Minute (mins)"
    | "Month (mos)"
    | "N/A"
    | "NanoSecond (ns)"
    | "NanoSecondPerMinute (ns/min)"
    | "PerHour (count/h)"
    | "PerMinute (count/min)"
    | "PerSecond (count/s)"
    | "Percent (%)"
    | "Pixel (px)"
    | "Promille (‰)"
    | "Ratio"
    | "Second (s)"
    | "State"
    | "Unspecified"
    | "Week (ws)"
    | "Year (ys)"
    | "k"
    | "mCores";

  /**
   * The resolution of data points.
   * @format int64
   */
  resolutionInMillisUTC?: number;

  /** The type of data points aggregation. */
  aggregationType?: "AVG" | "COUNT" | "MAX" | "MEDIAN" | "MIN" | "PERCENTILE" | "SUM";

  /**
   * The list of entities where the data points originate.
   *
   * A JSON object that maps the entity ID in Dynatrace and the actual name of the entity.
   */
  entities?: Record<string, string>;
}

/**
 * The configuration of a metric with all its parameters and, optionally, data points.
 * @example {"timeseriesId":"com.dynatrace.builtin:host.cpu.idle","displayName":"CPU idle","dimensions":["HOST"],"aggregationTypes":["AVG","SUM","MIN","MAX"],"unit":"Percent","filter":"BUILTIN","detailedSource":"Infrastructure","types":[],"dataResult":{"dataPoints":{"HOST-0000000000000007":[[1522220334000,89]]},"timeseriesId":"com.dynatrace.builtin:host.cpu.idle","unit":"Percent","entities":{"HOST-0000000000000007":"Laptop-8"},"resolutionInMillisUTC":300000,"aggregationType":"AVG"}}
 */
export interface TimeseriesQueryResult {
  /** The ID of the metric. */
  timeseriesId?: string;

  /** The name of the metric in the user interface. */
  displayName?: string;

  /** The fine metric division, for example process group and process ID for some process-related metric. */
  dimensions?: string[];

  /** The list of allowed aggregations for this metric. */
  aggregationTypes?: ("AVG" | "COUNT" | "MAX" | "MEDIAN" | "MIN" | "PERCENTILE" | "SUM")[];

  /** The unit of the metric. */
  unit?:
    | "Bit (bit)"
    | "BitPerHour (bit/h)"
    | "BitPerMinute (bit/min)"
    | "BitPerSecond (bit/s)"
    | "Byte (B)"
    | "BytePerHour (B/h)"
    | "BytePerMinute (B/min)"
    | "BytePerSecond (B/s)"
    | "Cores"
    | "Count (count)"
    | "Day (ds)"
    | "DecibelMilliWatt (dBm)"
    | "G"
    | "GibiByte (GiB)"
    | "GigaByte (GB)"
    | "Hour (hs)"
    | "KibiByte (KiB)"
    | "KibiBytePerHour (KiB/h)"
    | "KibiBytePerMinute (KiB/min)"
    | "KibiBytePerSecond (KiB/s)"
    | "KiloByte (kB)"
    | "KiloBytePerHour (kB/h)"
    | "KiloBytePerMinute (kB/min)"
    | "KiloBytePerSecond (kB/s)"
    | "M"
    | "MSU"
    | "MebiByte (MiB)"
    | "MebiBytePerHour (MiB/h)"
    | "MebiBytePerMinute (MiB/min)"
    | "MebiBytePerSecond (MiB/s)"
    | "MegaByte (MB)"
    | "MegaBytePerHour (MB/h)"
    | "MegaBytePerMinute (MB/min)"
    | "MegaBytePerSecond (MB/s)"
    | "MicroSecond (µs)"
    | "MilliSecond (ms)"
    | "MilliSecondPerMinute (ms/min)"
    | "Minute (mins)"
    | "Month (mos)"
    | "N/A"
    | "NanoSecond (ns)"
    | "NanoSecondPerMinute (ns/min)"
    | "PerHour (count/h)"
    | "PerMinute (count/min)"
    | "PerSecond (count/s)"
    | "Percent (%)"
    | "Pixel (px)"
    | "Promille (‰)"
    | "Ratio"
    | "Second (s)"
    | "State"
    | "Unspecified"
    | "Week (ws)"
    | "Year (ys)"
    | "k"
    | "mCores";

  /** The feature, where the metric originates. */
  filter?: "ALL" | "BUILTIN" | "CUSTOM" | "PLUGIN" | "REMOTE_PLUGIN";

  /** The feature, where the metric originates. */
  detailedSource?: string;

  /** The ID of the plugin, where the metric originates. */
  pluginId?: string;

  /** Technology type definition. Used to group metrics under a logical technology name. */
  types?: string[];

  /** List of metric's datapoints, as well as their parameters. */
  dataResult?: TimeseriesDataPointQueryResult;

  /** The warnings that occurred while creating the metric. */
  warnings?: string[];
}

export interface TimeseriesQueryResultWrapper {
  /** List of metric's datapoints, as well as their parameters. */
  result?: TimeseriesDataPointQueryResult;
}

/**
 * Filtering parameters for a timeseries query.
 * @example {"timeseriesId":"com.dynatrace.builtin:host.cpu.idle","aggregationType":"AVG","startTimestamp":1521042929000,"endTimestamp":1521542929000,"predict":true,"relativeTime":"HOUR","queryMode":"SERIES","includeParentIds":"false","considerMaintenanceWindowsForAvailability":"false","entities":["HOST-0000000000000007"],"tags":["office-linz"]}
 */
export interface TimeseriesQueryMessage {
  /**
   * The case-sensitive ID of the metric, where you want to read data points.
   *
   * You can execute a GET timeseries request, to obtain the list of available metrics.
   */
  timeseriesId?: string;

  /**
   * The aggregation type for the resulting data points.
   *
   * If the requested metric doesn't support the specified aggregation, the request will result in an error.
   */
  aggregationType?: "AVG" | "COUNT" | "MAX" | "MEDIAN" | "MIN" | "PERCENTILE" | "SUM";

  /**
   * The start timestamp of the timeframe, in UTC milliseconds.
   * @format int64
   */
  startTimestamp?: number;

  /**
   * The start timestamp of the timeframe, in UTC milliseconds.
   *
   * If later than the current time, Dynatrace automatically uses current time instead.
   * The timeframe must not exceed 6 months.
   * @format int64
   */
  endTimestamp?: number;

  /** The flag to predict future data points. */
  predict?: boolean;

  /** The relative timeframe, back from the current time. */
  relativeTime?:
    | "10mins"
    | "15mins"
    | "2hours"
    | "30mins"
    | "3days"
    | "5mins"
    | "6hours"
    | "day"
    | "hour"
    | "min"
    | "month"
    | "week";

  /**
   * Defines the type of result that the call should return. Valid result modes are:
   *
   * `series`: returns all the data points of the metric in the specified timeframe.
   *  `total`: returns one scalar value for the specified timeframe.
   * By default, the `series` mode is used.
   */
  queryMode?: "SERIES" | "TOTAL";

  /**
   * Filters requested data points by entities which should deliver them. You can specify several entities at once.
   *
   * Allowed values are Dynatrace entity IDs.
   * If the selected entity doesn't support the requested metric, the request will result in an error.
   */
  entities?: string[];

  /**
   * Filters requiested data points by entity which should deliver them. Only data from entities with the specified tag is delivered.
   *
   * You can specify several tags in the following format: `tags=tag1&tags=tag2`. The entity has to match *all* the specified tags.
   * In case of key-value tags, such as imported AWS or CloudFoundry tags use following format: `[context]key:value`.
   */
  tags?: string[];

  /**
   * A filter is an object, containing map of filter keys and its values. Valid filter keys are:
   *
   *  `processType`: Filters by process type. See Process types for allowed values.
   * `osType`: Filters by operating system. See OS types for allowed values.
   * `serviceType`: Filters by service type. See Service types for allowed values.
   * `technology`: Filters by technology type. See Technology types for allowed values.
   * `webServiceName`: Filters by web service name.
   * `webServiceNamespace`: Filters by the web service namespace.
   * `host`: Filters by entity ID of the host, for example HOST-007.
   */
  filters?: Record<string, string>;

  /**
   * Specifies which percentile of the selected response time metric should be delivered.
   *
   * Only applicable to the `PERCENTILE` aggregation type.
   * Valid values for percentile are between 1 and 99.
   * Please keep in mind that percentile export is only possible for response-time based metrics such as application and service response times.
   * @format int32
   */
  percentile?: number;

  /**
   * Specifies whether the results should exposes dimension mappings between parent entities and their children.
   *
   * For instance: SERVICE-0000000000000001, SERVICE_METHOD-0000000000000001
   */
  includeParentIds?: boolean;

  /** Exclude (`true`) or include (`false`) data points from any [maintenance window](https://dt-url.net/b2123rg0), defined in your environment. */
  considerMaintenanceWindowsForAvailability?: boolean;
}

/**
 * The definition of a custom metric.
 * @example {"displayName":"received.coffees","unit":"Count","dimensions":["coffee"],"types":["coffee machine"]}
 */
export interface TimeseriesRegistrationMessage {
  /**
   * The name of the metric that will appear in the user interface. It is limited to 256 characters.
   *
   *  To edit the value of that field, you need the **Write configuration** (`WriteConfig`) or the **Write settings** (`settings.write`) permission assigned to your API token.
   */
  displayName?: string;

  /**
   * The unit the metric will use.
   *
   *  To edit the value of that field, you need the **Write configuration** (`WriteConfig`) or the **Write settings** (`settings.write`) permission assigned to your API token.
   */
  unit?:
    | "Bit (bit)"
    | "BitPerHour (bit/h)"
    | "BitPerMinute (bit/min)"
    | "BitPerSecond (bit/s)"
    | "Byte (B)"
    | "BytePerHour (B/h)"
    | "BytePerMinute (B/min)"
    | "BytePerSecond (B/s)"
    | "Cores"
    | "Count (count)"
    | "Day (ds)"
    | "DecibelMilliWatt (dBm)"
    | "G"
    | "GibiByte (GiB)"
    | "GigaByte (GB)"
    | "Hour (hs)"
    | "KibiByte (KiB)"
    | "KibiBytePerHour (KiB/h)"
    | "KibiBytePerMinute (KiB/min)"
    | "KibiBytePerSecond (KiB/s)"
    | "KiloByte (kB)"
    | "KiloBytePerHour (kB/h)"
    | "KiloBytePerMinute (kB/min)"
    | "KiloBytePerSecond (kB/s)"
    | "M"
    | "MSU"
    | "MebiByte (MiB)"
    | "MebiBytePerHour (MiB/h)"
    | "MebiBytePerMinute (MiB/min)"
    | "MebiBytePerSecond (MiB/s)"
    | "MegaByte (MB)"
    | "MegaBytePerHour (MB/h)"
    | "MegaBytePerMinute (MB/min)"
    | "MegaBytePerSecond (MB/s)"
    | "MicroSecond (µs)"
    | "MilliSecond (ms)"
    | "MilliSecondPerMinute (ms/min)"
    | "Minute (mins)"
    | "Month (mos)"
    | "N/A"
    | "NanoSecond (ns)"
    | "NanoSecondPerMinute (ns/min)"
    | "PerHour (count/h)"
    | "PerMinute (count/min)"
    | "PerSecond (count/s)"
    | "Percent (%)"
    | "Pixel (px)"
    | "Promille (‰)"
    | "Ratio"
    | "Second (s)"
    | "State"
    | "Unspecified"
    | "Week (ws)"
    | "Year (ys)"
    | "k"
    | "mCores";

  /**
   * The metric dimension key that will be used to report multiple dimensions. For example, a dimension key to report the metric for different network cards for the same firewall.
   *
   * You can use alphanumeric characters and the following punctuation marks: periods (`.`), hyphens (`-`), and underscores (`_`).
   * The CUSTOM_DEVICE dimension is added to each new custom metric automatically.
   * The length of dimension keys and values is limited to **128 characters** each.
   */
  dimensions?: string[];

  /**
   * The definition of the technology type. It is used to group metrics under a logical technology name in the UI.
   *
   * Metrics must be assigned a software technology type that is identical to the technology type of the custom device you are sending the metric to.
   * For example, if you define your custom device using type `F5-Firewall` you must also register all related custom metrics as type `F5-Firewall`.
   */
  types?: string[];
}

/**
 * An ordered list of short representations of Dynatrace entities.
 * @example {"values":[{"id":"6a98d7bc-abb9-44f8-ae6a-73e68e71812a","name":"Dynatrace entity 1","description":"Dynatrace entity 1 for the REST API example"},{"id":"ee70f7d3-9a4e-4f5f-94d2-c9d6156f1618","name":"Dynatrace entity 2"},{"id":"8cdabe77-9e1a-4be8-b3df-269dd6fa9d7f"}]}
 */
export interface StubList {
  /** An ordered list of short representations of Dynatrace entities. */
  values: EntityShortRepresentation[];
}

/**
 * Metadata of a token.
 * @example {"id":"acbed0c4-4ef1-4303-991f-102510a69322","name":"myToken","userId":"john.smith","revoked":true,"created":1554076800000,"expires":1585976400000,"lastUse":1554354000000,"personalAccessToken":true,"scopes":["DataExport","ReadConfig","WriteConfig"]}
 */
export interface TokenMetadata {
  /** The ID of the token. */
  id?: string;

  /** The name of the token. */
  name?: string;

  /** The owner of the token. */
  userId?: string;

  /** Revocation status of the token. Revoked tokens are disabled. */
  revoked?: boolean;

  /**
   * The creation time as a unix timestamp in milliseconds.
   * @format int64
   */
  created?: number;

  /**
   * The expiration time as a unix timestamp in milliseconds.
   * @format int64
   */
  expires?: number;

  /**
   * The unix timestamp in milliseconds when the token was last used.
   * @format int64
   */
  lastUse?: number;

  /** A list of scopes assigned to the token. */
  scopes?: (
    | "ActiveGateCertManagement"
    | "AdvancedSyntheticIntegration"
    | "AppMonIntegration"
    | "CaptureRequestData"
    | "DTAQLAccess"
    | "DataExport"
    | "DataImport"
    | "DataPrivacy"
    | "Davis"
    | "DcrumIntegration"
    | "DiagnosticExport"
    | "DssFileManagement"
    | "ExternalSyntheticIntegration"
    | "InstallerDownload"
    | "LogExport"
    | "MemoryDump"
    | "Mobile"
    | "PluginUpload"
    | "ReadConfig"
    | "ReadSyntheticData"
    | "RestRequestForwarding"
    | "RumBrowserExtension"
    | "RumJavaScriptTagManagement"
    | "SupportAlert"
    | "TenantTokenManagement"
    | "UserSessionAnonymization"
    | "ViewDashboard"
    | "ViewReport"
    | "WriteConfig"
    | "WriteSyntheticData"
    | "activeGateTokenManagement.create"
    | "activeGateTokenManagement.read"
    | "activeGateTokenManagement.write"
    | "activeGates.read"
    | "activeGates.write"
    | "apiTokens.read"
    | "apiTokens.write"
    | "auditLogs.read"
    | "credentialVault.read"
    | "credentialVault.write"
    | "entities.read"
    | "entities.write"
    | "events.ingest"
    | "events.read"
    | "extensionConfigurations.read"
    | "extensionConfigurations.write"
    | "extensionEnvironment.read"
    | "extensionEnvironment.write"
    | "extensions.read"
    | "extensions.write"
    | "logs.ingest"
    | "logs.read"
    | "metrics.ingest"
    | "metrics.read"
    | "metrics.write"
    | "networkZones.read"
    | "networkZones.write"
    | "openTelemetryTrace.ingest"
    | "problems.read"
    | "problems.write"
    | "releases.read"
    | "securityProblems.read"
    | "securityProblems.write"
    | "settings.read"
    | "settings.write"
    | "slo.read"
    | "slo.write"
    | "syntheticLocations.read"
    | "syntheticLocations.write"
    | "tenantTokenRotation.write"
  )[];

  /** The token is a [personal access token](https://dt-url.net/wm03sop) (`true`) or an API token (`false`). */
  personalAccessToken?: boolean;
}

/**
 * @example {"token":"abcdefjhij1234567890"}
 */
export interface Token {
  /** Dynatrace API authentication token. */
  token: string;
}

export interface UpdateToken {
  /** The token is revoked (`true`) or active (`false`). */
  revoked?: boolean;

  /** The name of the token. */
  name?: string;

  /**
   * The list of permissions assigned to the token.
   *
   * Apart from the new permissions, you need to submit the existing permissions you want to keep, too. Any existing permission, missing in the payload, is revoked.
   * * `InstallerDownload`: PaaS integration - Installer download.
   * * `DataExport`: Access problem and event feed, metrics, and topology.
   * * `PluginUpload`: Upload Extension.
   * * `SupportAlert`: PaaS integration - Support alert.
   * * `DcrumIntegration`: Dynatrace module integration - NAM.
   * * `AdvancedSyntheticIntegration`: Dynatrace module integration - Synthetic Classic.
   * * `ExternalSyntheticIntegration`: Create and read synthetic monitors, locations, and nodes.
   * * `AppMonIntegration`: Dynatrace module integration - AppMon.
   * * `RumBrowserExtension`: RUM Browser Extension.
   * * `LogExport`: Read logs.
   * * `ReadConfig`: Read configuration.
   * * `WriteConfig`: Write configuration.
   * * `DTAQLAccess`: User sessions.
   * * `UserSessionAnonymization`: Anonymize user session data for data privacy reasons.
   * * `DataPrivacy`: Change data privacy settings.
   * * `CaptureRequestData`: Capture request data.
   * * `Davis`: Dynatrace module integration - Davis.
   * * `DssFileManagement`: Mobile symbolication file management.
   * * `RumJavaScriptTagManagement`: Real user monitoring JavaScript tag management.
   * * `TenantTokenManagement`: Token management.
   * * `ActiveGateCertManagement`: ActiveGate certificate management.
   * * `RestRequestForwarding`: Fetch data from a remote environment.
   * * `ReadSyntheticData`: Read synthetic monitors, locations, and nodes.
   * * `DataImport`: Data ingest, e.g.: metrics and events.
   * * `auditLogs.read`: Read audit logs.
   * * `metrics.read`: Read metrics.
   * * `metrics.write`: Write metrics.
   * * `entities.read`: Read entities.
   * * `entities.write`: Write entities.
   * * `problems.read`: Read problems.
   * * `problems.write`: Write problems.
   * * `events.read`: Read events.
   * * `events.ingest`: Ingest events.
   * * `networkZones.read`: Read network zones.
   * * `networkZones.write`: Write network zones.
   * * `activeGates.read`: Read ActiveGates.
   * * `activeGates.write`: Write ActiveGates.
   * * `activeGateTokenManagement.read`: Read ActiveGate tokens.
   * * `activeGateTokenManagement.create`: Create ActiveGate tokens.
   * * `activeGateTokenManagement.write`: Write ActiveGate tokens.
   * * `credentialVault.read`: Read credential vault entries.
   * * `credentialVault.write`: Write credential vault entries.
   * * `extensions.read`: Read extensions.
   * * `extensions.write`: Write extensions.
   * * `extensionConfigurations.read`: Read extension monitoring configurations.
   * * `extensionConfigurations.write`: Write extension monitoring configurations.
   * * `extensionEnvironment.read`: Read extension environment configurations.
   * * `extensionEnvironment.write`: Write extension environment configurations.
   * * `metrics.ingest`: Ingest metrics.
   * * `securityProblems.read`: Read security problems.
   * * `securityProblems.write`: Write security problems.
   * * `syntheticLocations.read`: Read synthetic locations.
   * * `syntheticLocations.write`: Write synthetic locations.
   * * `settings.read`: Read settings.
   * * `settings.write`: Write settings.
   * * `tenantTokenRotation.write`: Tenant token rotation.
   * * `slo.read`: Read SLO.
   * * `slo.write`: Write SLO.
   * * `releases.read`: Read releases.
   * * `apiTokens.read`: Read API tokens.
   * * `apiTokens.write`: Write API tokens.
   * * `openTelemetryTrace.ingest`: Ingest OpenTelemetry traces.
   * * `logs.read`: Read logs.
   * * `logs.ingest`: Ingest logs.
   */
  scopes?: (
    | "InstallerDownload"
    | "DataExport"
    | "PluginUpload"
    | "SupportAlert"
    | "DcrumIntegration"
    | "AdvancedSyntheticIntegration"
    | "ExternalSyntheticIntegration"
    | "AppMonIntegration"
    | "RumBrowserExtension"
    | "LogExport"
    | "ReadConfig"
    | "WriteConfig"
    | "DTAQLAccess"
    | "UserSessionAnonymization"
    | "DataPrivacy"
    | "CaptureRequestData"
    | "Davis"
    | "DssFileManagement"
    | "RumJavaScriptTagManagement"
    | "TenantTokenManagement"
    | "ActiveGateCertManagement"
    | "RestRequestForwarding"
    | "ReadSyntheticData"
    | "DataImport"
    | "auditLogs.read"
    | "metrics.read"
    | "metrics.write"
    | "entities.read"
    | "entities.write"
    | "problems.read"
    | "problems.write"
    | "events.read"
    | "events.ingest"
    | "networkZones.read"
    | "networkZones.write"
    | "activeGates.read"
    | "activeGates.write"
    | "activeGateTokenManagement.read"
    | "activeGateTokenManagement.create"
    | "activeGateTokenManagement.write"
    | "credentialVault.read"
    | "credentialVault.write"
    | "extensions.read"
    | "extensions.write"
    | "extensionConfigurations.read"
    | "extensionConfigurations.write"
    | "extensionEnvironment.read"
    | "extensionEnvironment.write"
    | "metrics.ingest"
    | "securityProblems.read"
    | "securityProblems.write"
    | "syntheticLocations.read"
    | "syntheticLocations.write"
    | "settings.read"
    | "settings.write"
    | "tenantTokenRotation.write"
    | "slo.read"
    | "slo.write"
    | "releases.read"
    | "apiTokens.read"
    | "apiTokens.write"
    | "openTelemetryTrace.ingest"
    | "logs.read"
    | "logs.ingest"
  )[];
}

export interface CreateToken {
  /** The name of the token. */
  name: string;

  /** Defines a period of time. */
  expiresIn?: Duration;

  /**
   * The list of scopes to be assigned to the token.
   *
   * * `InstallerDownload`: PaaS integration - Installer download.
   * * `DataExport`: Access problem and event feed, metrics, and topology.
   * * `PluginUpload`: Upload Extension.
   * * `SupportAlert`: PaaS integration - Support alert.
   * * `DcrumIntegration`: Dynatrace module integration - NAM.
   * * `AdvancedSyntheticIntegration`: Dynatrace module integration - Synthetic Classic.
   * * `ExternalSyntheticIntegration`: Create and read synthetic monitors, locations, and nodes.
   * * `AppMonIntegration`: Dynatrace module integration - AppMon.
   * * `RumBrowserExtension`: RUM Browser Extension.
   * * `LogExport`: Read logs.
   * * `ReadConfig`: Read configuration.
   * * `WriteConfig`: Write configuration.
   * * `DTAQLAccess`: User sessions.
   * * `UserSessionAnonymization`: Anonymize user session data for data privacy reasons.
   * * `DataPrivacy`: Change data privacy settings.
   * * `CaptureRequestData`: Capture request data.
   * * `Davis`: Dynatrace module integration - Davis.
   * * `DssFileManagement`: Mobile symbolication file management.
   * * `RumJavaScriptTagManagement`: Real user monitoring JavaScript tag management.
   * * `TenantTokenManagement`: Token management.
   * * `ActiveGateCertManagement`: ActiveGate certificate management.
   * * `RestRequestForwarding`: Fetch data from a remote environment.
   * * `ReadSyntheticData`: Read synthetic monitors, locations, and nodes.
   * * `DataImport`: Data ingest, e.g.: metrics and events.
   * * `auditLogs.read`: Read audit logs.
   * * `metrics.read`: Read metrics.
   * * `metrics.write`: Write metrics.
   * * `entities.read`: Read entities.
   * * `entities.write`: Write entities.
   * * `problems.read`: Read problems.
   * * `problems.write`: Write problems.
   * * `events.read`: Read events.
   * * `events.ingest`: Ingest events.
   * * `networkZones.read`: Read network zones.
   * * `networkZones.write`: Write network zones.
   * * `activeGates.read`: Read ActiveGates.
   * * `activeGates.write`: Write ActiveGates.
   * * `activeGateTokenManagement.read`: Read ActiveGate tokens.
   * * `activeGateTokenManagement.create`: Create ActiveGate tokens.
   * * `activeGateTokenManagement.write`: Write ActiveGate tokens.
   * * `credentialVault.read`: Read credential vault entries.
   * * `credentialVault.write`: Write credential vault entries.
   * * `extensions.read`: Read extensions.
   * * `extensions.write`: Write extensions.
   * * `extensionConfigurations.read`: Read extension monitoring configurations.
   * * `extensionConfigurations.write`: Write extension monitoring configurations.
   * * `extensionEnvironment.read`: Read extension environment configurations.
   * * `extensionEnvironment.write`: Write extension environment configurations.
   * * `metrics.ingest`: Ingest metrics.
   * * `securityProblems.read`: Read security problems.
   * * `securityProblems.write`: Write security problems.
   * * `syntheticLocations.read`: Read synthetic locations.
   * * `syntheticLocations.write`: Write synthetic locations.
   * * `settings.read`: Read settings.
   * * `settings.write`: Write settings.
   * * `tenantTokenRotation.write`: Tenant token rotation.
   * * `slo.read`: Read SLO.
   * * `slo.write`: Write SLO.
   * * `releases.read`: Read releases.
   * * `apiTokens.read`: Read API tokens.
   * * `apiTokens.write`: Write API tokens.
   * * `openTelemetryTrace.ingest`: Ingest OpenTelemetry traces.
   * * `logs.read`: Read logs.
   * * `logs.ingest`: Ingest logs.
   */
  scopes: (
    | "InstallerDownload"
    | "DataExport"
    | "PluginUpload"
    | "SupportAlert"
    | "DcrumIntegration"
    | "AdvancedSyntheticIntegration"
    | "ExternalSyntheticIntegration"
    | "AppMonIntegration"
    | "RumBrowserExtension"
    | "LogExport"
    | "ReadConfig"
    | "WriteConfig"
    | "DTAQLAccess"
    | "UserSessionAnonymization"
    | "DataPrivacy"
    | "CaptureRequestData"
    | "Davis"
    | "DssFileManagement"
    | "RumJavaScriptTagManagement"
    | "TenantTokenManagement"
    | "ActiveGateCertManagement"
    | "RestRequestForwarding"
    | "ReadSyntheticData"
    | "DataImport"
    | "auditLogs.read"
    | "metrics.read"
    | "metrics.write"
    | "entities.read"
    | "entities.write"
    | "problems.read"
    | "problems.write"
    | "events.read"
    | "events.ingest"
    | "networkZones.read"
    | "networkZones.write"
    | "activeGates.read"
    | "activeGates.write"
    | "activeGateTokenManagement.read"
    | "activeGateTokenManagement.create"
    | "activeGateTokenManagement.write"
    | "credentialVault.read"
    | "credentialVault.write"
    | "extensions.read"
    | "extensions.write"
    | "extensionConfigurations.read"
    | "extensionConfigurations.write"
    | "extensionEnvironment.read"
    | "extensionEnvironment.write"
    | "metrics.ingest"
    | "securityProblems.read"
    | "securityProblems.write"
    | "syntheticLocations.read"
    | "syntheticLocations.write"
    | "settings.read"
    | "settings.write"
    | "tenantTokenRotation.write"
    | "slo.read"
    | "slo.write"
    | "releases.read"
    | "apiTokens.read"
    | "apiTokens.write"
    | "openTelemetryTrace.ingest"
    | "logs.read"
    | "logs.ingest"
  )[];
}

/**
 * Defines a period of time.
 */
export interface Duration {
  /**
   * The amount of time.
   * @format int64
   */
  value: number;

  /**
   * The unit of time.
   *
   *  If not set, millisecond is used.
   */
  unit?: "DAYS" | "HOURS" | "MILLIS" | "MINUTES" | "SECONDS";
}

/**
 * The status of public synthetic locations.
 */
export interface SyntheticPublicLocationsStatus {
  /** Synthetic monitors can (`true`) or can't (`false`) run on public synthetic locations. */
  publicLocationsEnabled: boolean;
}

/**
* Configuration of a private synthetic location.

 **countryCode**, **regionCode**, **city** parameters are optional as they can be retrieved based on **latitude** and **longitude** of location.
* @example {"type":"PRIVATE","name":"Linz Location","latitude":48.306351,"longitude":14.287399,"nodes":["93302281"],"status":"ENABLED","availabilityLocationOutage":false,"availabilityNodeOutage":false,"availabilityLocationNodeOutageDelayInMinutes":5,"availabilityNotificationsEnabled":true,"autoUpdateChromium":true}
*/
export type PrivateSyntheticLocation = SyntheticLocation & {
  nodes?: string[];
  availabilityLocationOutage?: boolean;
  availabilityNodeOutage?: boolean;
  locationNodeOutageDelayInMinutes?: number;
  availabilityNotificationsEnabled?: boolean;
  autoUpdateChromium?: boolean;
};

/**
 * A synthetic location.
 */
export interface LocationCollectionElement {
  /** The name of the location. */
  name: string;

  /** The Dynatrace entity ID of the location. */
  entityId: string;

  /** The type of the location. */
  type: "CLUSTER" | "PRIVATE" | "PUBLIC";

  /**
   * The cloud provider where the location is hosted.
   *
   *  Only applicable to `PUBLIC` locations.
   */
  cloudPlatform?:
    | "ALIBABA"
    | "AMAZON_EC2"
    | "AZURE"
    | "DYNATRACE_CLOUD"
    | "GOOGLE_CLOUD"
    | "INTEROUTE"
    | "OTHER"
    | "UNDEFINED";

  /**
   * The list of IP addresses assigned to the location.
   *
   *  Only applicable to `PUBLIC` locations.
   */
  ips?: string[];

  /** The release stage of the location. */
  stage?: "BETA" | "COMING_SOON" | "GA";

  /** The status of the location. */
  status?: "DISABLED" | "ENABLED" | "HIDDEN";
}

/**
 * A list of synthetic locations.
 * @example {"locations":[{"name":"Gdansk","entityId":"GEOLOCATION-B8D793BCA914E0AF","type":"PUBLIC","cloudPlatform":"AMAZON_EC2","ips":["134.189.153.97","134.189.153.98"],"stage":"GA","status":"ENABLED","capabilities":["BROWSER","HTTP"]},{"name":"My private location","entityId":"SYNTHETIC_LOCATION-53F47ECB33907667","type":"PRIVATE","status":"ENABLED"}]}
 */
export interface SyntheticLocations {
  /** A list of synthetic locations. */
  locations: LocationCollectionElement[];
}

/**
 * The update of a private Synthetic location.
 * @example {"type":"PRIVATE","name":"Linz Location","latitude":48.306351,"longitude":14.287399,"nodes":["93302281"],"status":"ENABLED","availabilityNodeOutage":false,"isAvailabilityNodeOutage":false,"locationNodeOutageDelayInMinutes":5,"availabilityNotificationsEnabled":true,"autoUpdateChromium":true}
 */
export type PrivateSyntheticLocationUpdate = SyntheticLocationUpdate & {
  nodes?: string[];
  name?: string;
  countryCode?: string;
  regionCode?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  status?: "DISABLED" | "ENABLED" | "HIDDEN";
  availabilityLocationOutage?: boolean;
  availabilityNodeOutage?: boolean;
  locationNodeOutageDelayInMinutes?: number;
  availabilityNotificationsEnabled?: boolean;
  autoUpdateChromium?: boolean;
};

/**
 * The update of a synthetic location. The actual object depends on the **type** of the location.
 * @example {"type":"PRIVATE","name":"Linz Location","latitude":48.306351,"longitude":14.287399,"nodes":["93302281"],"status":"ENABLED"}
 */
export interface SyntheticLocationUpdate {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `PUBLIC` -> SyntheticPublicLocationUpdate
   * * `PRIVATE` -> PrivateSyntheticLocationUpdate
   */
  type: "PRIVATE" | "PUBLIC";
}

/**
 * The update of a public Synthetic location.
 * @example {"type":"PUBLIC","status":"ENABLED"}
 */
export type SyntheticPublicLocationUpdate = SyntheticLocationUpdate & { status?: "DISABLED" | "ENABLED" | "HIDDEN" };

/**
 * Configuration of a public synthetic location.
 * @example {"entityId":"GEOLOCATION-95196F3C9A4F4215","type":"PUBLIC","name":"Amazon US East","countryCode":"US","regionCode":"VA","city":"Amazon US East (N. Virginia)","latitude":39.0436,"longitude":-77.4875,"cloudPlatform":"AMAZON_EC2","ips":["134.189.153.97","134.189.153.98"],"stage":"GA","browserType":"Chrome","browserVersion":"69.0.3497.81","status":"ENABLED","capabilities":["BROWSER","HTTP"]}
 */
export type PublicSyntheticLocation = SyntheticLocation & {
  cloudPlatform?:
    | "ALIBABA"
    | "AMAZON_EC2"
    | "AZURE"
    | "DYNATRACE_CLOUD"
    | "GOOGLE_CLOUD"
    | "INTEROUTE"
    | "OTHER"
    | "UNDEFINED";
  ips?: string[];
  stage?: "BETA" | "COMING_SOON" | "GA";
  browserType?: string;
  browserVersion?: string;
  capabilities?: string[];
};

/**
* Configuration of a synthetic location. 

 **countryCode**, **regionCode**, **city** parameters are optional as they can be retrieved based on **latitude** and **longitude** of location.

 The actual set of fields depends on the type of the location. Find the list of actual objects in the description of the **type** field or see [Synthetic locations API v2 - JSON models](https://dt-url.net/3n43szj).
*/
export interface SyntheticLocation {
  /** The Dynatrace entity ID of the location. */
  entityId: string;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `PUBLIC` -> PublicSyntheticLocation
   * * `PRIVATE` -> PrivateSyntheticLocation
   * * `CLUSTER` -> PrivateSyntheticLocation
   */
  type: "CLUSTER" | "PRIVATE" | "PUBLIC";

  /** The name of the location. */
  name: string;

  /**
   * The country code of the location.
   *
   *  Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for example, `AT` for Austria or `PL` for Poland).
   */
  countryCode?: string;

  /**
   * The region code of the location.
   *
   *  For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca) use ISO 3166-2 state codes (without `US-` or `CA-` prefix), for example, `VA` for Virginia or `OR` for Oregon.
   *  For the rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes).
   */
  regionCode?: string;

  /** The city of the location. */
  city?: string;

  /**
   * The latitude of the location in `DDD.dddd` format.
   * @format double
   */
  latitude: number;

  /**
   * The longitude of the location in `DDD.dddd` format.
   * @format double
   */
  longitude: number;

  /**
   * The status of the location:
   *
   * * `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
   * * `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
   * * `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.
   */
  status?: "DISABLED" | "ENABLED" | "HIDDEN";
}

/**
* Configuration of a synthetic node. 

 A *synthetic node* is an ActiveGate that is able to execute synthetic monitors.
* @example {"entityId":"3086117876","hostname":"gdn.dyna.trace","ips":["238.245.160.14"],"version":"1.161.0.20181210-173639","browserMonitorsEnabled":true,"activeGateVersion":"1.172.2.20190607-040913","oneAgentRoutingEnabled":true,"operatingSystem":"Linux","autoUpdateEnabled":true,"status":"Running","playerVersion":"1.179.0.20190920-145430","healthCheckStatus":"Ok","browserType":"Chrome","browserVersion":"69.0.3497.81"}
*/
export interface Node {
  /** The ID of the synthetic node. */
  entityId: string;

  /** The hostname of the synthetic node. */
  hostname: string;

  /** The IP of the synthetic node. */
  ips: string[];

  /** The version of the synthetic node. */
  version: string;

  /** The synthetic node is able to execute browser monitors (`true`) or not (`false`). */
  browserMonitorsEnabled: boolean;

  /** The version of the Active Gate. */
  activeGateVersion: string;

  /** The Active Gate has the One Agent routing enabled ('true') or not ('false'). */
  "oneAgentRoutingEnabled ": boolean;

  /** The Active Gate's host operating system. */
  operatingSystem: string;

  /** The Active Gate has the Auto update option enabled ('true') or not ('false') */
  autoUpdateEnabled: boolean;

  /** The status of the synthetic node. */
  status: string;

  /** The version of the synthetic player. */
  playerVersion: string;

  /** The health check status of the synthetic node. */
  healthCheckStatus: string;

  /** The browser type. */
  browserType: string;

  /** The browser version. */
  browserVersion: string;
}

/**
 * The short representation of a synthetic object. Only contains the ID and the display name.
 */
export interface NodeCollectionElement {
  /** The ID of a node. */
  entityId: string;

  /** The hostname of a node. */
  hostname: string;

  /** The IP of a node. */
  ips: string[];

  /** The version of a node */
  version: string;

  /** Browser check capabilities enabled flag. */
  browserMonitorsEnabled: boolean;

  /** The version of the Active Gate. */
  activeGateVersion: string;

  /** The Active Gate has the One Agent routing enabled ('true') or not ('false'). */
  "oneAgentRoutingEnabled ": boolean;

  /** The Active Gate's host operating system. */
  operatingSystem: string;

  /** The Active Gate has the Auto update option enabled ('true') or not ('false') */
  autoUpdateEnabled: boolean;

  /** The status of the synthetic node. */
  status: string;

  /** The version of the synthetic player. */
  playerVersion: string;

  /** The health check status of the synthetic node. */
  healthCheckStatus: string;
}

/**
 * A list of synthetic nodes
 * @example {"nodes":[{"entityId":"3086117876","hostname":"gdn.dyna.trace","ips":["238.245.160.14"],"version":"1.161.0.20181210-173639","browserMonitorsEnabled":true,"activeGateVersion":"1.172.2.20190607-040913","oneAgentRoutingEnabled":true,"operatingSystem":"Linux","autoUpdateEnabled":true,"status":"Running","playerVersion":"1.179.0.20190920-145430","healthCheckStatus":"Ok"}]}
 */
export interface Nodes {
  /** A list of synthetic nodes */
  nodes: NodeCollectionElement[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;





type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}



/**
 * @title Dynatrace Environment API
 * @version 1.0
 *
 * Documentation of the Dynatrace Environment API v1. To read about use cases and examples, see [Dynatrace Documentation](https://dt-url.net/xc03k3c).
 *
 * Notes about compatibility:
 * * Operations marked as early adopter or preview may be changed in non-compatible ways, although we try to avoid this.
 * * We may add new enum constants without incrementing the API version; thus, clients need to handle unknown enum constants gracefully.
 */
export class Api extends APIBase {
  config = {
    /**
     * No description
     *
     * @tags Cluster version
     * @name GetVersion
     * @summary Gets the current version of the Dynatrace server
     * @request GET:/config/clusterversion
     */
    getVersion: (params: RequestParams = {}) =>
      this.request<ClusterVersion, any>({
        path: `/config/clusterversion`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  deployment = {
    /**
     * @description For the `paas` or `paas-sh` installer types you can get a configuring installer, by passing additional parameters.
     *
     * @tags Deployment
     * @name DownloadLatestAgentInstaller
     * @summary Downloads the latest OneAgent installer
     * @request GET:/deployment/installer/agent/{osType}/{installerType}/latest
     */
    downloadLatestAgentInstaller: (
      osType: "windows" | "unix" | "aix" | "solaris" | "zos",
      installerType: "default" | "default-unattended" | "paas" | "paas-sh",
      query?: {
        flavor?: "default" | "multidistro" | "musl";
        arch?: "all" | "arm" | "ppc" | "ppcle" | "s390" | "sparc" | "x86";
        bitness?: "32" | "64" | "all";
        include?: ("all" | "java" | "apache" | "nginx" | "nodejs" | "dotnet" | "php" | "go" | "sdk")[];
        skipMetadata?: boolean;
        networkZone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/deployment/installer/agent/${osType}/${installerType}/latest`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Get the latest version names of the OneAgent for the Java, Node.js, and Python AWS Lambda runtime.
     *
     * @tags Deployment
     * @name GetLatestLambdaBuildUnits
     * @summary Get the latest version names of the OneAgent for AWS Lambda
     * @request GET:/deployment/lambda/agent/latest
     */
    getLatestLambdaBuildUnits: (params: RequestParams = {}) =>
      this.request<LatestLambdaLayerNames, any>({
        path: `/deployment/lambda/agent/latest`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description For SaaS, the call is executed on an Environment ActiveGate. Be sure to use the base of an ActiveGate, **not** the environment.
     *
     * @tags Deployment
     * @name DownloadBoshReleaseWithVersion
     * @summary Downloads BOSH release tarballs of the specified version, OneAgent included
     * @request GET:/deployment/boshrelease/agent/{osType}/version/{version}
     */
    downloadBoshReleaseWithVersion: (
      osType: "windows" | "unix",
      version: string,
      query?: { skipMetadata?: boolean; networkZone?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/deployment/boshrelease/agent/${osType}/version/${version}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The checksum is the sha256 hash of the installer file. Result is not stable if **skipMetadata** is set to `false`. For SaaS only works on environment ActiveGates version 1.176 or higher
     *
     * @tags Deployment
     * @name GetBoshReleaseChecksum
     * @summary Gets the checksum of the specified BOSH release tarbell
     * @request GET:/deployment/boshrelease/agent/{osType}/version/{version}/checksum
     */
    getBoshReleaseChecksum: (
      osType: "windows" | "unix",
      version: string,
      query?: { skipMetadata?: boolean; networkZone?: string },
      params: RequestParams = {},
    ) =>
      this.request<BoshReleaseChecksum, any>({
        path: `/deployment/boshrelease/agent/${osType}/version/${version}/checksum`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name GetBoshReleaseAvailableVersions
     * @summary Gets the list of available OneAgent versions for BOSH release tarballs
     * @request GET:/deployment/boshrelease/versions/{osType}
     */
    getBoshReleaseAvailableVersions: (osType: "windows" | "unix", params: RequestParams = {}) =>
      this.request<BoshReleaseAvailableVersions, any>({
        path: `/deployment/boshrelease/versions/${osType}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name GetAgentInstallerAvailableVersions
     * @summary Lists all available versions of OneAgent installer
     * @request GET:/deployment/installer/agent/versions/{osType}/{installerType}
     */
    getAgentInstallerAvailableVersions: (
      osType: "windows" | "unix" | "aix" | "solaris" | "zos",
      installerType: "default" | "default-unattended" | "paas" | "paas-sh",
      query?: {
        flavor?: "default" | "multidistro" | "musl";
        arch?: "all" | "arm" | "ppc" | "ppcle" | "s390" | "sparc" | "x86";
      },
      params: RequestParams = {},
    ) =>
      this.request<AgentInstallerVersions, any>({
        path: `/deployment/installer/agent/versions/${osType}/${installerType}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description For the `paas` or `paas-sh` installer types you can get a configuring installer, by passing additional parameters.
     *
     * @tags Deployment
     * @name DownloadAgentInstallerWithVersion
     * @summary Downloads OneAgent installer of the specified version
     * @request GET:/deployment/installer/agent/{osType}/{installerType}/version/{version}
     */
    downloadAgentInstallerWithVersion: (
      osType: "windows" | "unix" | "aix" | "solaris" | "zos",
      installerType: "default" | "default-unattended" | "paas" | "paas-sh",
      version: string,
      query?: {
        flavor?: "default" | "multidistro" | "musl";
        arch?: "all" | "arm" | "ppc" | "ppcle" | "s390" | "sparc" | "x86";
        bitness?: "32" | "64" | "all";
        include?: ("all" | "java" | "apache" | "nginx" | "nodejs" | "dotnet" | "php" | "go" | "sdk")[];
        skipMetadata?: boolean;
        networkZone?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/deployment/installer/agent/${osType}/${installerType}/version/${version}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name DownloadLatestGatewayInstaller
     * @summary Downloads the configured standard ActiveGate installer of the latest version for the specified OS
     * @request GET:/deployment/installer/gateway/{osType}/latest
     */
    downloadLatestGatewayInstaller: (osType: "windows" | "unix", params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/deployment/installer/gateway/${osType}/latest`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name DownloadGatewayInstallerWithVersion
     * @summary Downloads the ActiveGate installer of the specified version
     * @request GET:/deployment/installer/gateway/{osType}/version/{version}
     */
    downloadGatewayInstallerWithVersion: (osType: "windows" | "unix", version: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/deployment/installer/gateway/${osType}/version/${version}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name GetAgentInstallerConnectionInfo
     * @summary Gets the connectivity information for OneAgent
     * @request GET:/deployment/installer/agent/connectioninfo
     */
    getAgentInstallerConnectionInfo: (query?: { networkZone?: string; version?: string }, params: RequestParams = {}) =>
      this.request<ConnectionInfo, any>({
        path: `/deployment/installer/agent/connectioninfo`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name GetActiveGateInstallerConnectionInfo
     * @summary Gets the connectivity information for Environment ActiveGate
     * @request GET:/deployment/installer/gateway/connectioninfo
     */
    getActiveGateInstallerConnectionInfo: (query?: { networkZone?: string }, params: RequestParams = {}) =>
      this.request<ActiveGateConnectionInfo, any>({
        path: `/deployment/installer/gateway/connectioninfo`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Highest priority first, separated by a semicolon.If no network zone provided the default zone is used. Responds with 404 if network zone is not known.
     *
     * @tags Deployment
     * @name GetAgentInstallerConnectionInfoEndpoints
     * @summary Gets the list of the ActiveGate-Endpoints to be used for Agents ordered by networkzone-priorities. | maturity=EARLY_ADOPTER
     * @request GET:/deployment/installer/agent/connectioninfo/endpoints
     */
    getAgentInstallerConnectionInfoEndpoints: (query?: { networkZone?: string }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/deployment/installer/agent/connectioninfo/endpoints`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Returns the OneAgent version of the installer of the specified type. Non-required parameters are only applicable to the `paas` and `paas-sh` installer types.
     *
     * @tags Deployment
     * @name GetAgentInstallerMetaInfo
     * @summary Gets the latest available version of the OneAgent installer of the specified type
     * @request GET:/deployment/installer/agent/{osType}/{installerType}/latest/metainfo
     */
    getAgentInstallerMetaInfo: (
      osType: "windows" | "unix" | "aix" | "solaris" | "zos",
      installerType: "default" | "default-unattended" | "paas" | "paas-sh",
      query?: {
        flavor?: "default" | "multidistro" | "musl";
        arch?: "all" | "arm" | "ppc" | "ppcle" | "s390" | "sparc" | "x86";
        bitness?: "32" | "64" | "all";
      },
      params: RequestParams = {},
    ) =>
      this.request<InstallerMetaInfoDto, any>({
        path: `/deployment/installer/agent/${osType}/${installerType}/latest/metainfo`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Downloading the latest available deployment orchestration script tarball matching the requested Orchestration Type (ansible, puppet).
     *
     * @tags Deployment
     * @name DownloadLatestAgentOrchestration
     * @summary Downloads the latest OneAgent deployment orchestration tarball
     * @request GET:/deployment/orchestration/agent/{orchestrationType}/latest
     */
    downloadLatestAgentOrchestration: (orchestrationType: "ansible" | "puppet", params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/deployment/orchestration/agent/${orchestrationType}/latest`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Downloading the latest available deployment orchestration tarball's sigature matching the requested Orchestration Type (ansible, puppet).
     *
     * @tags Deployment
     * @name DownloadLatestAgentOrchestrationSignature
     * @summary Downloads the latest OneAgent deployment orchestration tarball's signature
     * @request GET:/deployment/orchestration/agent/{orchestrationType}/latest/signature
     */
    downloadLatestAgentOrchestrationSignature: (orchestrationType: "ansible" | "puppet", params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/deployment/orchestration/agent/${orchestrationType}/latest/signature`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Downloading the requested version matching deployment orchestration tarball matching the requested Orchestration Type (ansible, puppet).
     *
     * @tags Deployment
     * @name DownloadAgentOrchestrationWithVersion
     * @summary Downloads the requested version matching OneAgent deployment orchestration tarball
     * @request GET:/deployment/orchestration/agent/{orchestrationType}/version/{version}
     */
    downloadAgentOrchestrationWithVersion: (
      orchestrationType: "ansible" | "puppet",
      version: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/deployment/orchestration/agent/${orchestrationType}/version/${version}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Downloading the requested version matching deployment orchestration tarball's signature matching the requested Orchestration Type (ansible, puppet).
     *
     * @tags Deployment
     * @name DownloadAgentOrchestrationSignatureWithVersion
     * @summary Downloads the requested version matching OneAgent deployment orchestration tarball's signature
     * @request GET:/deployment/orchestration/agent/{orchestrationType}/version/{version}/signature
     */
    downloadAgentOrchestrationSignatureWithVersion: (
      orchestrationType: "ansible" | "puppet",
      version: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/deployment/orchestration/agent/${orchestrationType}/version/${version}/signature`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns the latest process module config. Passing a previously gotten revision will first do a revision check, and return a 304 response if no changes were detected.
     *
     * @tags Deployment
     * @name GetAgentProcessModuleConfig
     * @summary Gets the latest process module config | maturity=EARLY_ADOPTER
     * @request GET:/deployment/installer/agent/processmoduleconfig
     */
    getAgentProcessModuleConfig: (query?: { revision?: number }, params: RequestParams = {}) =>
      this.request<AgentProcessModuleConfigResponse, void>({
        path: `/deployment/installer/agent/processmoduleconfig`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployment
     * @name GetActiveGateInstallerAvailableVersions
     * @summary Lists all available versions of ActiveGate installer
     * @request GET:/deployment/installer/gateway/versions/{osType}
     */
    getActiveGateInstallerAvailableVersions: (osType: "windows" | "unix", params: RequestParams = {}) =>
      this.request<ActiveGateInstallerVersions, void>({
        path: `/deployment/installer/gateway/versions/${osType}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  anonymize = {
    /**
     * @description The job anonymizes all user sessions in the specified timeframe by masking the specified fields. To identify user sessions to be anonymized you can specify either userID, or IP address, or both. If you specify both the **OR** logic applies. You can't undo the anonymization.
     *
     * @tags Anonymization
     * @name Anonymize
     * @summary Creates user session anonymization job
     * @request PUT:/anonymize/anonymizationJobs
     */
    anonymize: (
      query?: {
        startTimestamp?: number;
        endTimestamp?: number;
        userIds?: string[];
        ips?: string[];
        additionalField?:
          | "ip"
          | "content"
          | "country"
          | "region"
          | "city"
          | "userId"
          | "isp"
          | "stringProperties"
          | "longProperties"
          | "doubleProperties"
          | "dateProperties"
          | "carrier"
          | "userActions.name"
          | "userActions.domain"
          | "userActions.targetUrl"
          | "userActions.syntheticEvent"
          | "userActions.stringProperties"
          | "userActions.longProperties"
          | "userActions.doubleProperties"
          | "userActions.dateProperties"
          | "events.name"
          | "events.domain"
          | "events.page"
          | "events.pageGroup"
          | "events.pageReferrer"
          | "events.pageReferrerGroup";
      },
      params: RequestParams = {},
    ) =>
      this.request<AnonymizationIdResult, void>({
        path: `/anonymize/anonymizationJobs`,
        method: "PUT",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anonymization
     * @name GetStatus
     * @summary Shows the progress of the specified anonymization job
     * @request GET:/anonymize/anonymizationJobs/{requestId}
     */
    getStatus: (requestId: string, params: RequestParams = {}) =>
      this.request<AnonymizationProgressResult, void>({
        path: `/anonymize/anonymizationJobs/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  userSessionQueryLanguage = {
    /**
     * @description To get a proper tree structure, you need to specify grouping in the query.
     *
     * @tags RUM - User sessions
     * @name GetDtaqlResultAsTree
     * @summary Returns the result of the query as a tree structure
     * @request GET:/userSessionQueryLanguage/tree
     */
    getDtaqlResultAsTree: (
      query: {
        query: string;
        startTimestamp?: number;
        endTimestamp?: number;
        offsetUTC?: number;
        addDeepLinkFields?: boolean;
        explain?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DtaqlResultAsTree, UserSession | void>({
        path: `/userSessionQueryLanguage/tree`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description The result is a flat list of rows containing the requested columns.
     *
     * @tags RUM - User sessions
     * @name GetDtaqlResultAsTable
     * @summary Returns the result of the query as a table structure
     * @request GET:/userSessionQueryLanguage/table
     */
    getDtaqlResultAsTable: (
      query: {
        query: string;
        startTimestamp?: number;
        endTimestamp?: number;
        offsetUTC?: number;
        pageSize?: number;
        pageOffset?: number;
        addDeepLinkFields?: boolean;
        explain?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<DtaqlResultAsTable, UserSession | void>({
        path: `/userSessionQueryLanguage/table`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  events = {
    /**
     * No description
     *
     * @tags Events
     * @name GetEventById
     * @summary Gets the parameters of the specified event
     * @request GET:/events/{eventId}
     */
    getEventById: (eventId: string, params: RequestParams = {}) =>
      this.request<EventRestEntry, any>({
        path: `/events/${eventId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Because the possible number of events can be huge, the response is limited to 150 events. You can focus the output by specifying filtering parameters for the request. An event is included in the response, if either start or end timestamp of the event is within the defined timeframe.
     *
     * @tags Events
     * @name QueryEvents
     * @summary Lists all the events of your environment, along with their parameters
     * @request GET:/events
     */
    queryEvents: (
      query?: {
        from?: number;
        to?: number;
        relativeTime?:
          | "10mins"
          | "15mins"
          | "2hours"
          | "30mins"
          | "3days"
          | "5mins"
          | "6hours"
          | "day"
          | "hour"
          | "min"
          | "month"
          | "week";
        eventType?:
          | "APPLICATION_JS_FRAMEWORK_DETECTED"
          | "APPLICATION_OVERLOAD_PREVENTION"
          | "AVAILABILITY_EVENT"
          | "CONNECTION_LOST"
          | "CPU_SATURATED"
          | "CUSTOM_ALERT"
          | "CUSTOM_ANNOTATION"
          | "CUSTOM_APPLICATION_OVERLOAD_PREVENTION"
          | "CUSTOM_APP_CRASH_RATE_INCREASED"
          | "CUSTOM_CONFIGURATION"
          | "CUSTOM_DEPLOYMENT"
          | "CUSTOM_INFO"
          | "DATABASE_CONNECTION_FAILURE"
          | "DEPLOYMENT_CHANGED_CHANGE"
          | "DEPLOYMENT_CHANGED_NEW"
          | "DEPLOYMENT_CHANGED_REMOVED"
          | "DYNATRACE_INTERNAL"
          | "EBS_VOLUME_HIGH_LATENCY"
          | "ELASTIC_LOAD_BALANCER_HIGH_BACKEND_FAILURE_RATE"
          | "ELASTIC_LOAD_BALANCER_HIGH_FAILURE_RATE"
          | "ELASTIC_LOAD_BALANCER_HIGH_UNHEALTHY_HOST_RATE"
          | "ERROR_EVENT"
          | "ESXI_HOST_VM_MOTION_ARRIVED"
          | "ESXI_HOST_VM_MOTION_LEFT"
          | "ESXI_HOST_VM_STARTED"
          | "ESXI_START"
          | "ESXI_VM_DISCONNECTED"
          | "ESXI_VM_MOTION"
          | "ESXI_VM_POWER_OFF"
          | "ESXI_VM_START"
          | "FAILURE_RATE_INCREASED"
          | "HIGH_CONNECTIVITY_FAILURES"
          | "HIGH_DROPPED_PACKETS_RATE"
          | "HIGH_GC_ACTIVITY"
          | "HIGH_LATENCY"
          | "HIGH_NETWORK_ERROR_RATE"
          | "HIGH_NETWORK_LOSS_RATE"
          | "HIGH_NETWORK_UTILIZATION"
          | "HOST_CONNECTION_FAILED"
          | "HOST_CONNECTION_LOST"
          | "HOST_DATASTORE_LOW_DISK_SPACE"
          | "HOST_DISK_LOW_INODES"
          | "HOST_GRACEFULLY_SHUTDOWN"
          | "HOST_LOG_AVAILABILITY"
          | "HOST_LOG_ERROR"
          | "HOST_LOG_MATCHED"
          | "HOST_LOG_PERFORMANCE"
          | "HOST_MAINTENANCE"
          | "HOST_NO_CONNECTION"
          | "HOST_OF_SERVICE_UNAVAILABLE"
          | "HOST_SHUTDOWN"
          | "HOST_TIMEOUT"
          | "HTTP_CHECK_GLOBAL_OUTAGE"
          | "HTTP_CHECK_LOCAL_OUTAGE"
          | "HTTP_CHECK_TEST_LOCATION_SLOWDOWN"
          | "INSUFFICIENT_DISK_QUEUE_DEPTH"
          | "JAVASCRIPT_ERROR_RATE_INCREASED"
          | "LAMBDA_FUNCTION_HIGH_ERROR_RATE"
          | "LOG_AVAILABILITY"
          | "LOG_ERROR"
          | "LOG_MATCHED"
          | "LOG_PERFORMANCE"
          | "LOW_DISK_SPACE"
          | "LOW_STORAGE_SPACE"
          | "MARKED_FOR_TERMINATION"
          | "MEMORY_RESOURCES_EXHAUSTED"
          | "MEMORY_SATURATED"
          | "MOBILE_APPLICATION_OVERLOAD_PREVENTION"
          | "MOBILE_APP_CRASH_RATE_INCREASED"
          | "MONITORING_UNAVAILABLE"
          | "OPENSTACK_HOST_VM_SHUTDOWN"
          | "OPENSTACK_HOST_VM_STARTED"
          | "OPENSTACK_KEYSTONE_SLOW"
          | "OPENSTACK_KEYSTONE_UNHEALTHY"
          | "OPENSTACK_VM_LAUNCH_FAILED"
          | "OPENSTACK_VM_MOTION"
          | "OSI_DOCKER_DEVICEMAPPER_LOW_DATA_SPACE"
          | "OSI_DOCKER_DEVICEMAPPER_LOW_METADATA_SPACE"
          | "OVERLOADED_STORAGE"
          | "PERFORMANCE_EVENT"
          | "PGI_CRASHED_INFO"
          | "PGI_HAPROXY_QUEUED_REQUESTS_HIGH"
          | "PGI_HAPROXY_SESSION_USAGE_HIGH"
          | "PGI_LOG_MATCHED"
          | "PGI_MEMDUMP"
          | "PGI_MYSQL_SLOW_QUERIES_RATE_HIGH"
          | "PGI_OF_SERVICE_UNAVAILABLE"
          | "PGI_RMQ_HIGH_FILE_DESC_USAGE"
          | "PGI_RMQ_HIGH_MEM_USAGE"
          | "PGI_RMQ_HIGH_PROCESS_USAGE"
          | "PGI_RMQ_HIGH_SOCKETS_USAGE"
          | "PGI_RMQ_LOW_DISK_SPACE"
          | "PROCESS_CRASHED"
          | "PROCESS_CUSTOM_AVAILABILITY"
          | "PROCESS_CUSTOM_ERROR"
          | "PROCESS_CUSTOM_PERFORMANCE"
          | "PROCESS_GROUP_LOW_INSTANCE_COUNT"
          | "PROCESS_LOG_AVAILABILITY"
          | "PROCESS_LOG_ERROR"
          | "PROCESS_LOG_PERFORMANCE"
          | "PROCESS_RESTART"
          | "PROCESS_UNAVAILABLE"
          | "RDS_AZ_FAILOVER_COMPLETED"
          | "RDS_AZ_FAILOVER_STARTED"
          | "RDS_BACKUP_COMPLETED"
          | "RDS_BACKUP_STARTED"
          | "RDS_OF_SERVICE_UNAVAILABLE"
          | "RDS_RESTART"
          | "RDS_RESTART_SEQUENCE"
          | "RESOURCE_CONTENTION"
          | "SERVICE_RESPONSE_TIME_DEGRADED"
          | "SLOW_DISK"
          | "SYNTHETIC_AVAILABILITY"
          | "SYNTHETIC_NODE_OUTAGE"
          | "SYNTHETIC_PRIVATE_LOCATION_OUTAGE"
          | "SYNTHETIC_SLOWDOWN"
          | "THREADS_RESOURCES_EXHAUSTED"
          | "UNEXPECTED_HIGH_LOAD"
          | "UNEXPECTED_LOW_LOAD"
          | "USER_ACTION_DURATION_DEGRADATION"
          | "VIRTUAL_MACHINE_SHUTDOWN"
          | "WEB_CHECK_GLOBAL_OUTAGE"
          | "WEB_CHECK_LOCAL_OUTAGE";
        entityId?: string;
        cursor?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventQueryResult, any>({
        path: `/events`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description You can use this endpoint to: * Push information-only events from third-party systems such as CI platforms (Jenkins, Bamboo, Electric Cloud, etc.) to provide additional information for Dynatrace automated root cause analysis. The time of event closure is already known and the event IDs are returned instantly. You can report these events for up to **30 days** into the past. The information-only event types are: `CUSTOM_ANNOTATION` `CUSTOM_CONFIGURATION` `CUSTOM_DEPLOYMENT` `CUSTOM_INFO` `MARKED_FOR_TERMINATION` * Push problem-opening events (for example, an error rate increase) to trigger the Dynatrace automated root cause analysis engine.  Correlation IDs are returned instead of event IDs. These events stay open until the specified timeout expires. To prevent expiration, you can refresh these events by sending the same payload again. You can report these events for up to **60 minutes** into the past. The problem-opening event types are (sorted by severity level, descending): `AVAILABILITY_EVENT` `ERROR_EVENT` `PERFORMANCE_EVENT` `RESOURCE_CONTENTION` The actual set of event parameters depends on the type of your event. To find the parameters mapping, see [POST an event](https://dt-url.net/1v63r77) in Dynatrace Documentation.
     *
     * @tags Events
     * @name PostEvent
     * @summary Pushes custom events to one or more monitored entities
     * @request POST:/events
     */
    postEvent: (data: EventCreation, params: RequestParams = {}) =>
      this.request<EventStoreResult, any>({
        path: `/events`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  synthetic = {
    /**
     * No description
     *
     * @tags Synthetic - Third party
     * @name TestResults
     * @summary Pushes third-party synthetic monitors, locations, and results to Dynatrace
     * @request POST:/synthetic/ext/tests
     */
    testResults: (data: Type3rdPartySyntheticTests, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/synthetic/ext/tests`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Third party
     * @name PushEvents
     * @summary Pushes third-party synthetic events to Dynatrace
     * @request POST:/synthetic/ext/events
     */
    pushEvents: (data: Type3rdPartySyntheticEvents, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/synthetic/ext/events`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Third party
     * @name PushStateModification
     * @summary Modifies the operation state of all third-party monitors
     * @request POST:/synthetic/ext/stateModifications
     */
    pushStateModification: (data: StateModification, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/synthetic/ext/stateModifications`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The full list can be lengthy, but you can narrow it down by specifying filter query parameters.
     *
     * @tags Synthetic - Monitors
     * @name GetMonitorsCollection
     * @summary Lists all synthetic monitors in your Dynatrace environment
     * @request GET:/synthetic/monitors
     */
    getMonitorsCollection: (
      query?: {
        managementZone?: number;
        tag?: string[];
        location?: string;
        assignedApps?: string[];
        type?: string;
        enabled?: boolean;
        credentialId?: string;
        credentialOwner?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Monitors, any>({
        path: `/synthetic/monitors`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Monitors
     * @name AddMonitor
     * @summary Creates a new synthetic monitor
     * @request POST:/synthetic/monitors
     */
    addMonitor: (data: SyntheticMonitorUpdate, params: RequestParams = {}) =>
      this.request<EntityIdDto, any>({
        path: `/synthetic/monitors`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Monitors
     * @name GetMonitor
     * @summary Gets parameters of the specified synthetic monitor
     * @request GET:/synthetic/monitors/{monitorId}
     */
    getMonitor: (monitorId: string, params: RequestParams = {}) =>
      this.request<SyntheticMonitor, any>({
        path: `/synthetic/monitors/${monitorId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Monitors
     * @name ReplaceMonitor
     * @summary Updates parameters of the specified synthetic monitor
     * @request PUT:/synthetic/monitors/{monitorId}
     */
    replaceMonitor: (monitorId: string, data: SyntheticMonitorUpdate, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/synthetic/monitors/${monitorId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Monitors
     * @name DeleteMonitor
     * @summary Deletes the specified synthetic monitor
     * @request DELETE:/synthetic/monitors/{monitorId}
     */
    deleteMonitor: (monitorId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/synthetic/monitors/${monitorId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name GetLocationsStatus
     * @summary Returns whether public locations are enabled or not | maturity=EARLY_ADOPTER
     * @request GET:/synthetic/locations/status
     */
    getLocationsStatus: (params: RequestParams = {}) =>
      this.request<SyntheticPublicLocationsStatus, any>({
        path: `/synthetic/locations/status`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name UpdateLocationsStatus
     * @summary Enable/disable public synthetic locations | maturity=EARLY_ADOPTER
     * @request PUT:/synthetic/locations/status
     */
    updateLocationsStatus: (data: SyntheticPublicLocationsStatus, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/synthetic/locations/status`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name GetLocations
     * @summary Lists all synthetic locations (both public and private) available for your environment
     * @request GET:/synthetic/locations
     */
    getLocations: (
      query?: { cloudPlatform?: "AWS" | "AZURE" | "ALIBABA" | "GOOGLE_CLOUD" | "OTHER"; type?: "PUBLIC" | "PRIVATE" },
      params: RequestParams = {},
    ) =>
      this.request<SyntheticLocations, any>({
        path: `/synthetic/locations`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name AddLocation
     * @summary Creates a new private synthetic location
     * @request POST:/synthetic/locations
     */
    addLocation: (data: PrivateSyntheticLocation, params: RequestParams = {}) =>
      this.request<EntityIdDto, any>({
        path: `/synthetic/locations`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name GetLocation
     * @summary Gets properties of the specified location
     * @request GET:/synthetic/locations/{locationId}
     */
    getLocation: (locationId: string, params: RequestParams = {}) =>
      this.request<SyntheticLocation, any>({
        path: `/synthetic/locations/${locationId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name UpdateLocation
     * @summary Updates the specified synthetic location
     * @request PUT:/synthetic/locations/{locationId}
     */
    updateLocation: (locationId: string, data: SyntheticLocationUpdate, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/synthetic/locations/${locationId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name RemoveLocation
     * @summary Deletes the specified private synthetic location
     * @request DELETE:/synthetic/locations/{locationId}
     */
    removeLocation: (locationId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/synthetic/locations/${locationId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name GetNode
     * @summary Lists properties of the specified synthetic node
     * @request GET:/synthetic/nodes/{nodeId}
     */
    getNode: (nodeId: string, params: RequestParams = {}) =>
      this.request<Node, any>({
        path: `/synthetic/nodes/${nodeId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name GetNodes
     * @summary Lists all synthetic nodes available in your environment
     * @request GET:/synthetic/nodes
     */
    getNodes: (params: RequestParams = {}) =>
      this.request<Nodes, any>({
        path: `/synthetic/nodes`,
        method: "GET",
        ...params,
      }),
  };
  rum = {
    /**
     * @description This code provides configuration and basic code to be manually inserted into your web application code. The full functionality of the monitoring code is loaded asynchronously.
     *
     * @tags RUM - JavaScript tag management
     * @name GetAsyncCodeSnippet
     * @summary Downloads the asynchronous code snippet
     * @request GET:/rum/asyncCS/{entity}
     */
    getAsyncCodeSnippet: (entity: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/rum/asyncCS/${entity}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description This code provides configuration and basic code to be manually inserted into your web application code. The full functionality of the monitoring code is loaded synchronously.
     *
     * @tags RUM - JavaScript tag management
     * @name GetSyncCodeSnippet
     * @summary Downloads the synchronous code snippet
     * @request GET:/rum/syncCS/{entity}
     */
    getSyncCodeSnippet: (entity: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/rum/syncCS/${entity}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns a JavaScript tag to be manually inserted into your web application code. The tag references a JavaScript file with full configuration and monitoring code, which causes a lower possible caching duration.
     *
     * @tags RUM - JavaScript tag management
     * @name GetJsTagComplete
     * @summary Downloads JavaScript tag
     * @request GET:/rum/jsTagComplete/{entity}
     */
    getJsTagComplete: (entity: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/rum/jsTagComplete/${entity}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns the OneAgent JavaScript tag. This is a complete configuration and monitoring code to be manually inserted into your web application code. The monitoring code is loaded as a separate file from a CDN.
     *
     * @tags RUM - JavaScript tag management
     * @name GetJsScript
     * @summary Downloads OneAgent JavaScript tag
     * @request GET:/rum/jsTag/{entity}
     */
    getJsScript: (entity: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/rum/jsTag/${entity}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Returns the inline code of the most recent OneAgent JavaScript. This is a complete configuration and monitoring code to be manually inserted into your web application code.
     *
     * @tags RUM - JavaScript tag management
     * @name GetJsInlineScript
     * @summary Downloads inline code
     * @request GET:/rum/jsInlineScript/{entity}
     */
    getJsInlineScript: (entity: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/rum/jsInlineScript/${entity}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - JavaScript tag management
     * @name GetJsLatestVersion
     * @summary Gets the latest version of OneAgent JavaScript library
     * @request GET:/rum/jsLatestVersion
     */
    getJsLatestVersion: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/rum/jsLatestVersion`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - JavaScript tag management
     * @name GetManualApps
     * @summary Lists all manually injected applications
     * @request GET:/rum/manualApps
     */
    getManualApps: (params: RequestParams = {}) =>
      this.request<ManualApplication[], any>({
        path: `/rum/manualApps`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - JavaScript tag management
     * @name GetAppRevision
     * @summary Gets the version of the RUM JavaScript code injected into specified application
     * @request GET:/rum/appRevision/{entity}
     */
    getAppRevision: (entity: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/rum/appRevision/${entity}`,
        method: "GET",
        ...params,
      }),
  };
  maintenance = {
    /**
     * No description
     *
     * @tags Maintenance window
     * @name GetAllMaintenanceWindowConfigs
     * @summary Lists all parameters of all maintenance windows available in your Dynatrace environment.
     * @request GET:/maintenance
     * @deprecated
     */
    getAllMaintenanceWindowConfigs: (
      query?: { from?: number; to?: number; type?: "Planned" | "Unknown" | "Unplanned" },
      params: RequestParams = {},
    ) =>
      this.request<MaintenanceWindow[], any>({
        path: `/maintenance`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maintenance window
     * @name StoreMaintenanceWindowConfig
     * @summary Creates a new or updates an existing maintenance window
     * @request POST:/maintenance
     * @deprecated
     */
    storeMaintenanceWindowConfig: (data: MaintenanceWindow, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/maintenance`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maintenance window
     * @name GetMaintenanceWindowConfig
     * @summary Lists all parameters of the specified maintenance window.
     * @request GET:/maintenance/{uid}
     * @deprecated
     */
    getMaintenanceWindowConfig: (uid: string, params: RequestParams = {}) =>
      this.request<MaintenanceWindow, any>({
        path: `/maintenance/${uid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Deletion cannot be undone.
     *
     * @tags Maintenance window
     * @name RemoveMaintenanceWindowConfig
     * @summary Deletes the specified maintenance window
     * @request DELETE:/maintenance/{uid}
     * @deprecated
     */
    removeMaintenanceWindowConfig: (uid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/maintenance/${uid}`,
        method: "DELETE",
        ...params,
      }),
  };
  entity = {
    /**
     * No description
     *
     * @tags Topology & Smartscape - Custom device
     * @name CreateCustomDataPoints
     * @summary Creates or updates a custom device, or reports metric data points to the custom device.
     * @request POST:/entity/infrastructure/custom/{customDeviceId}
     */
    createCustomDataPoints: (customDeviceId: string, data: CustomDevicePushMessage, params: RequestParams = {}) =>
      this.request<CustomDevicePushResult, ErrorEnvelope>({
        path: `/entity/infrastructure/custom/${customDeviceId}`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Host
     * @name GetSingleHost
     * @summary Gets parameters of the specified host
     * @request GET:/entity/infrastructure/hosts/{meIdentifier}
     */
    getSingleHost: (meIdentifier: string, params: RequestParams = {}) =>
      this.request<Host, any>({
        path: `/entity/infrastructure/hosts/${meIdentifier}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Host
     * @name UpdateHost
     * @summary Updates properties of the specified host
     * @request POST:/entity/infrastructure/hosts/{meIdentifier}
     */
    updateHost: (meIdentifier: string, data: UpdateEntity, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/entity/infrastructure/hosts/${meIdentifier}`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Host
     * @name RemoveTags
     * @summary Remove tag of the specified host
     * @request DELETE:/entity/infrastructure/hosts/{meIdentifier}/tags/{tag}
     */
    removeTags: (meIdentifier: string, tag: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope | void>({
        path: `/entity/infrastructure/hosts/${meIdentifier}/tags/${tag}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description You can narrow down the output by specifying filtering parameters for the request. You can additionally limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Then use the URL-encoded cursor from the **Next-Page-Key** response header in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Topology & Smartscape - Host
     * @name GetHosts
     * @summary Lists all available hosts in your environment
     * @request GET:/entity/infrastructure/hosts
     */
    getHosts: (
      query?: {
        startTimestamp?: number;
        endTimestamp?: number;
        relativeTime?:
          | "min"
          | "5mins"
          | "10mins"
          | "15mins"
          | "30mins"
          | "hour"
          | "2hours"
          | "6hours"
          | "day"
          | "3days";
        tag?: string[];
        showMonitoringCandidates?: boolean;
        entity?: string[];
        managementZone?: number;
        hostGroupId?: string;
        hostGroupName?: string;
        includeDetails?: boolean;
        pageSize?: number;
        nextPageKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Host[], ErrorEnvelope>({
        path: `/entity/infrastructure/hosts`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Process group
     * @name GetSingleProcessGroup
     * @summary List properties of the specified process group
     * @request GET:/entity/infrastructure/process-groups/{meIdentifier}
     */
    getSingleProcessGroup: (meIdentifier: string, params: RequestParams = {}) =>
      this.request<ProcessGroup, any>({
        path: `/entity/infrastructure/process-groups/${meIdentifier}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Process group
     * @name UpdateProcessGroup
     * @summary Updates properties of the specified process group
     * @request POST:/entity/infrastructure/process-groups/{meIdentifier}
     */
    updateProcessGroup: (meIdentifier: string, data: UpdateEntity, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups/${meIdentifier}`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description You can narrow down the output by specifying filtering parameters for the request. You can additionally limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Then use the URL-encoded cursor from the **Next-Page-Key** response header in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Topology & Smartscape - Process group
     * @name GetProcessGroups
     * @summary Lists all process groups of your environment, along with their parameters
     * @request GET:/entity/infrastructure/process-groups
     */
    getProcessGroups: (
      query?: {
        startTimestamp?: number;
        endTimestamp?: number;
        relativeTime?:
          | "min"
          | "5mins"
          | "10mins"
          | "15mins"
          | "30mins"
          | "hour"
          | "2hours"
          | "6hours"
          | "day"
          | "3days";
        tag?: string[];
        entity?: string[];
        host?: string[];
        managementZone?: number;
        includeDetails?: boolean;
        pageSize?: number;
        nextPageKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProcessGroup[], ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Process
     * @name GetSingleProcess
     * @summary List properties of the specified process
     * @request GET:/entity/infrastructure/processes/{meIdentifier}
     */
    getSingleProcess: (meIdentifier: string, params: RequestParams = {}) =>
      this.request<ProcessGroupInstance, any>({
        path: `/entity/infrastructure/processes/${meIdentifier}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description You can narrow down the output by specifying filtering parameters for the request. You can additionally limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Then use the URL-encoded cursor from the **Next-Page-Key** response header in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Topology & Smartscape - Process
     * @name GetProcesses
     * @summary Lists all monitored processes along with their parameters
     * @request GET:/entity/infrastructure/processes
     */
    getProcesses: (
      query?: {
        startTimestamp?: number;
        endTimestamp?: number;
        relativeTime?:
          | "min"
          | "5mins"
          | "10mins"
          | "15mins"
          | "30mins"
          | "hour"
          | "2hours"
          | "6hours"
          | "day"
          | "3days";
        tag?: string[];
        entity?: string[];
        hostTag?: string[];
        host?: string[];
        actualMonitoringState?: "OFF" | "ON";
        expectedMonitoringState?: "OFF" | "ON";
        managementZone?: number;
        includeDetails?: boolean;
        pageSize?: number;
        nextPageKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProcessGroupInstance[], ErrorEnvelope>({
        path: `/entity/infrastructure/processes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Application
     * @name GetBaselineValuesForSingleApplication
     * @summary Gets baseline data for the specified application | maturity=EARLY_ADOPTER
     * @request GET:/entity/applications/{meIdentifier}/baseline
     */
    getBaselineValuesForSingleApplication: (meIdentifier: string, params: RequestParams = {}) =>
      this.request<ApplicationBaselineValues, any>({
        path: `/entity/applications/${meIdentifier}/baseline`,
        method: "GET",
        ...params,
      }),

    /**
     * @description You can narrow down the output by specifying filtering parameters for the request. You can additionally limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Then use the URL-encoded cursor from the **Next-Page-Key** response header in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Topology & Smartscape - Application
     * @name GetApplications
     * @summary Gets the list of all applications in your environment along with their parameters
     * @request GET:/entity/applications
     */
    getApplications: (
      query?: {
        startTimestamp?: number;
        endTimestamp?: number;
        relativeTime?:
          | "min"
          | "5mins"
          | "10mins"
          | "15mins"
          | "30mins"
          | "hour"
          | "2hours"
          | "6hours"
          | "day"
          | "3days";
        tag?: string[];
        entity?: string[];
        managementZone?: number;
        includeDetails?: boolean;
        pageSize?: number;
        nextPageKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Application[], ErrorEnvelope>({
        path: `/entity/applications`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Application
     * @name GetSingleApplication
     * @summary Gets parameters of the specified application
     * @request GET:/entity/applications/{meIdentifier}
     */
    getSingleApplication: (meIdentifier: string, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/entity/applications/${meIdentifier}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Application
     * @name UpdateApplication
     * @summary Updates parameters of the specified application
     * @request POST:/entity/applications/{meIdentifier}
     */
    updateApplication: (meIdentifier: string, data: UpdateEntity, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/entity/applications/${meIdentifier}`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Service
     * @name GetSingleService
     * @summary Gets parameters of the specified service
     * @request GET:/entity/services/{meIdentifier}
     */
    getSingleService: (meIdentifier: string, params: RequestParams = {}) =>
      this.request<Service, any>({
        path: `/entity/services/${meIdentifier}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Service
     * @name UpdateService
     * @summary Updates parameters of the specified service
     * @request POST:/entity/services/{meIdentifier}
     */
    updateService: (meIdentifier: string, data: UpdateEntity, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/entity/services/${meIdentifier}`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Topology & Smartscape - Service
     * @name GetBaselineValuesForSingleService
     * @summary Gets baseline data for the specified service | maturity=EARLY_ADOPTER
     * @request GET:/entity/services/{meIdentifier}/baseline
     */
    getBaselineValuesForSingleService: (meIdentifier: string, params: RequestParams = {}) =>
      this.request<ServiceBaselineValues, any>({
        path: `/entity/services/${meIdentifier}/baseline`,
        method: "GET",
        ...params,
      }),

    /**
     * @description You can narrow down the output by specifying filtering parameters for the request. You can additionally limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Then use the URL-encoded cursor from the **Next-Page-Key** response header in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Topology & Smartscape - Service
     * @name GetServices
     * @summary Lists all available services in your environment
     * @request GET:/entity/services
     */
    getServices: (
      query?: {
        startTimestamp?: number;
        endTimestamp?: number;
        relativeTime?:
          | "min"
          | "5mins"
          | "10mins"
          | "15mins"
          | "30mins"
          | "hour"
          | "2hours"
          | "6hours"
          | "day"
          | "3days";
        tag?: string[];
        entity?: string[];
        managementZone?: number;
        includeDetails?: boolean;
        pageSize?: number;
        nextPageKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Service[], ErrorEnvelope>({
        path: `/entity/services`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/mkc3rss) request. Long results split into several pages. By default, a page contains 100 results. You can change this value with the **pageSize** query parameter, up to 10,000.
     *
     * @tags Log monitoring - Hosts
     * @name HostLogJobRecords
     * @summary Gets the full content of the analyzed log
     * @request GET:/entity/infrastructure/hosts/{hostId}/logs/jobs/{jobId}/records
     */
    hostLogJobRecords: (
      hostId: string,
      jobId: string,
      query?: { scrollToken?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<LogJobRecordsResult, ErrorEnvelope>({
        path: `/entity/infrastructure/hosts/${hostId}/logs/jobs/${jobId}/records`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/mkc3rss) request. Long results split into several pages. By default, a page contains 100 results. You can change this value with the **pageSize** query parameter, up to 10,000.
     *
     * @tags Log monitoring - Hosts
     * @name HostLogJobRecordsFiltered
     * @summary Gets the filtered content of the analyzed log
     * @request POST:/entity/infrastructure/hosts/{hostId}/logs/jobs/{jobId}/records
     */
    hostLogJobRecordsFiltered: (
      hostId: string,
      jobId: string,
      data: FilterLogContent,
      query?: { scrollToken?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<LogJobRecordsResult, ErrorEnvelope>({
        path: `/entity/infrastructure/hosts/${hostId}/logs/jobs/${jobId}/records`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Hosts
     * @name HostLogList
     * @summary Lists all the available OS logs on the specified host
     * @request GET:/entity/infrastructure/hosts/{hostId}/logs
     */
    hostLogList: (hostId: string, params: RequestParams = {}) =>
      this.request<LogList4HostResult, ErrorEnvelope>({
        path: `/entity/infrastructure/hosts/${hostId}/logs`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Hosts
     * @name HostLogJobStatus
     * @summary Gets status of the specified log analysis job
     * @request GET:/entity/infrastructure/hosts/{hostId}/logs/jobs/{jobId}
     */
    hostLogJobStatus: (hostId: string, jobId: string, params: RequestParams = {}) =>
      this.request<LogJobStatusResult, ErrorEnvelope>({
        path: `/entity/infrastructure/hosts/${hostId}/logs/jobs/${jobId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Hosts
     * @name HostLogJobDelete
     * @summary Deletes or cancels the specified log analysis job
     * @request DELETE:/entity/infrastructure/hosts/{hostId}/logs/jobs/{jobId}
     */
    hostLogJobDelete: (hostId: string, jobId: string, params: RequestParams = {}) =>
      this.request<LogJobDeleteResult, ErrorEnvelope>({
        path: `/entity/infrastructure/hosts/${hostId}/logs/jobs/${jobId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/mkc3rss) request.
     *
     * @tags Log monitoring - Hosts
     * @name HostLogJobRecordsTop
     * @summary Gets the top values of fields present in the content of the analyzed log
     * @request POST:/entity/infrastructure/hosts/{hostId}/logs/jobs/{jobId}/records/top
     */
    hostLogJobRecordsTop: (hostId: string, jobId: string, data: FilterTopLogRecords, params: RequestParams = {}) =>
      this.request<LogJobRecordsTopValuesRestResult, ErrorEnvelope>({
        path: `/entity/infrastructure/hosts/${hostId}/logs/jobs/${jobId}/records/top`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The response returns the ID of the job.
     *
     * @tags Log monitoring - Hosts
     * @name HostLogJobStart
     * @summary Starts the analysis job for the specified OS log
     * @request POST:/entity/infrastructure/hosts/{hostId}/logs/{logPath}
     */
    hostLogJobStart: (
      hostId: string,
      logPath: string,
      data: ExtractFields,
      query?: { query?: string; startTimestamp?: number; endTimestamp?: number },
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorEnvelope>({
        path: `/entity/infrastructure/hosts/${hostId}/logs/${logPath}`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/wve3r83) request. Long results split into several pages. By default, a page contains 100 results. You can change this value with the **pageSize** query parameter, up to 10,000.
     *
     * @tags Log monitoring - Process groups
     * @name ProcessGroupLogJobRecords
     * @summary Gets the content of the analyzed log
     * @request GET:/entity/infrastructure/process-groups/{pgId}/logs/jobs/{jobId}/records
     */
    processGroupLogJobRecords: (
      pgId: string,
      jobId: string,
      query?: { scrollToken?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<LogJobRecordsResult, ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups/${pgId}/logs/jobs/${jobId}/records`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/wve3r83) request. Long results split into several pages. By default, a page contains 100 results. You can change this value with the **pageSize** query parameter, up to 10,000.
     *
     * @tags Log monitoring - Process groups
     * @name ProcessGroupLogJobRecordsFiltered
     * @summary Gets the content of the analyzed log
     * @request POST:/entity/infrastructure/process-groups/{pgId}/logs/jobs/{jobId}/records
     */
    processGroupLogJobRecordsFiltered: (
      pgId: string,
      jobId: string,
      data: FilterLogContent,
      query?: { scrollToken?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<LogJobRecordsResult, ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups/${pgId}/logs/jobs/${jobId}/records`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Process groups
     * @name ProcessGroupLogList
     * @summary Lists all the available logs of the specified process group
     * @request GET:/entity/infrastructure/process-groups/{pgId}/logs
     */
    processGroupLogList: (pgId: string, params: RequestParams = {}) =>
      this.request<LogList4PgResult, ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups/${pgId}/logs`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Process groups
     * @name ProcessGroupLogJobStatus
     * @summary Gets status of the specified log analysis job
     * @request GET:/entity/infrastructure/process-groups/{pgId}/logs/jobs/{jobId}
     */
    processGroupLogJobStatus: (pgId: string, jobId: string, params: RequestParams = {}) =>
      this.request<LogJobStatusResult, ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups/${pgId}/logs/jobs/${jobId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Process groups
     * @name ProcessGroupLogJobDelete
     * @summary Deletes or cancels the specified log analysis job
     * @request DELETE:/entity/infrastructure/process-groups/{pgId}/logs/jobs/{jobId}
     */
    processGroupLogJobDelete: (pgId: string, jobId: string, params: RequestParams = {}) =>
      this.request<LogJobDeleteResult, ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups/${pgId}/logs/jobs/${jobId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/usg3rbv) request.
     *
     * @tags Log monitoring - Process groups
     * @name ProcessGroupLogJobRecordsTop
     * @summary Gets the top values of fields present in the content of the analyzed log
     * @request POST:/entity/infrastructure/process-groups/{pgId}/logs/jobs/{jobId}/records/top
     */
    processGroupLogJobRecordsTop: (
      pgId: string,
      jobId: string,
      data: FilterTopLogRecords,
      params: RequestParams = {},
    ) =>
      this.request<LogJobRecordsTopValuesRestResult, ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups/${pgId}/logs/jobs/${jobId}/records/top`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Process groups
     * @name ProcessGroupLogJobStart
     * @summary Starts analysis job for the specified process group log
     * @request POST:/entity/infrastructure/process-groups/{pgId}/logs/{logPath}
     */
    processGroupLogJobStart: (
      pgId: string,
      logPath: string,
      data: ExtractFields,
      query?: { hostFilter?: string; query?: string; startTimestamp?: number; endTimestamp?: number },
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorEnvelope>({
        path: `/entity/infrastructure/process-groups/${pgId}/logs/${logPath}`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/usg3rbv) request. Long results split into several pages. By default, a page contains 100 results. You can change this value with the **pageSize** query parameter, up to 10,000.
     *
     * @tags Log monitoring - Custom devices
     * @name CustomDeviceLogJobRecords
     * @summary Gets the content of the analyzed log
     * @request GET:/entity/infrastructure/custom-devices/{customDeviceId}/logs/jobs/{jobId}/records
     */
    customDeviceLogJobRecords: (
      customDeviceId: string,
      jobId: string,
      query?: { scrollToken?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<LogJobRecordsResult, ErrorEnvelope>({
        path: `/entity/infrastructure/custom-devices/${customDeviceId}/logs/jobs/${jobId}/records`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/usg3rbv) request. Long results split into several pages. By default, a page contains 100 results. You can change this value with the **pageSize** query parameter, up to 10,000.
     *
     * @tags Log monitoring - Custom devices
     * @name CustomDeviceLogJobRecordsFiltered
     * @summary Gets the filtered content of the analyzed log
     * @request POST:/entity/infrastructure/custom-devices/{customDeviceId}/logs/jobs/{jobId}/records
     */
    customDeviceLogJobRecordsFiltered: (
      customDeviceId: string,
      jobId: string,
      data: FilterLogContent,
      query?: { scrollToken?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<LogJobRecordsResult, ErrorEnvelope>({
        path: `/entity/infrastructure/custom-devices/${customDeviceId}/logs/jobs/${jobId}/records`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Custom devices
     * @name CustomDeviceLogList
     * @summary Lists all the available logs on the specified custom device
     * @request GET:/entity/infrastructure/custom-devices/{customDeviceId}/logs
     */
    customDeviceLogList: (customDeviceId: string, params: RequestParams = {}) =>
      this.request<LogListForCustomDeviceResult, ErrorEnvelope>({
        path: `/entity/infrastructure/custom-devices/${customDeviceId}/logs`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Custom devices
     * @name CustomDeviceLogJobStatus
     * @summary Gets status of the specified log analysis job
     * @request GET:/entity/infrastructure/custom-devices/{customDeviceId}/logs/jobs/{jobId}
     */
    customDeviceLogJobStatus: (customDeviceId: string, jobId: string, params: RequestParams = {}) =>
      this.request<LogJobStatusResult, ErrorEnvelope>({
        path: `/entity/infrastructure/custom-devices/${customDeviceId}/logs/jobs/${jobId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log monitoring - Custom devices
     * @name CustomDeviceLogJobDelete
     * @summary Deletes or cancels the specified log analysis job
     * @request DELETE:/entity/infrastructure/custom-devices/{customDeviceId}/logs/jobs/{jobId}
     */
    customDeviceLogJobDelete: (customDeviceId: string, jobId: string, params: RequestParams = {}) =>
      this.request<LogJobDeleteResult, ErrorEnvelope>({
        path: `/entity/infrastructure/custom-devices/${customDeviceId}/logs/jobs/${jobId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Results are available only when the status of the analysis job for this log is `READY`. To check the job status, use the [GET analysis job status](https://dt-url.net/usg3rbv) request.
     *
     * @tags Log monitoring - Custom devices
     * @name CustomDeviceLogJobRecordsTop
     * @summary Gets the top values of fields present in the content of the analyzed log
     * @request POST:/entity/infrastructure/custom-devices/{customDeviceId}/logs/jobs/{jobId}/records/top
     */
    customDeviceLogJobRecordsTop: (
      customDeviceId: string,
      jobId: string,
      data: FilterTopLogRecords,
      params: RequestParams = {},
    ) =>
      this.request<LogJobRecordsTopValuesRestResult, ErrorEnvelope>({
        path: `/entity/infrastructure/custom-devices/${customDeviceId}/logs/jobs/${jobId}/records/top`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The response returns the ID of the job.
     *
     * @tags Log monitoring - Custom devices
     * @name CustomDeviceLogJobStart
     * @summary Starts the analysis job for the specified custom device log
     * @request POST:/entity/infrastructure/custom-devices/{customDeviceId}/logs/{logPath}
     */
    customDeviceLogJobStart: (
      customDeviceId: string,
      logPath: string,
      data: ExtractFields,
      query?: { query?: string; startTimestamp?: number; endTimestamp?: number },
      params: RequestParams = {},
    ) =>
      this.request<string, ErrorEnvelope>({
        path: `/entity/infrastructure/custom-devices/${customDeviceId}/logs/${logPath}`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),
  };
  oneagents = {
    /**
     * @description You can narrow down the output by specifying filtering parameters for the request. The response is limited to 500 items. Use the **nextPageKey** cursor to obtain subsequent results.
     *
     * @tags OneAgent on a host
     * @name GetHostsWithSpecificAgents
     * @summary Gets the list of hosts with OneAgent deployment information for each host
     * @request GET:/oneagents
     */
    getHostsWithSpecificAgents: (
      query?: {
        includeDetails?: boolean;
        startTimestamp?: number;
        endTimestamp?: number;
        relativeTime?:
          | "10mins"
          | "15mins"
          | "2hours"
          | "30mins"
          | "3days"
          | "5mins"
          | "6hours"
          | "day"
          | "hour"
          | "min"
          | "month"
          | "week";
        tag?: string[];
        entity?: string[];
        managementZoneId?: number;
        managementZone?: string;
        networkZoneId?: string;
        hostGroupId?: string;
        hostGroupName?: string;
        osType?: "AIX" | "DARWIN" | "HPUX" | "LINUX" | "SOLARIS" | "WINDOWS" | "ZOS";
        cloudType?: "AZURE" | "EC2" | "GOOGLE_CLOUD_PLATFORM" | "OPENSTACK" | "ORACLE" | "UNRECOGNIZED";
        availabilityState?:
          | "CRASHED"
          | "LOST"
          | "MONITORED"
          | "PRE_MONITORED"
          | "SHUTDOWN"
          | "UNEXPECTED_SHUTDOWN"
          | "UNKNOWN"
          | "UNMONITORED";
        detailedAvailabilityState?:
          | "CRASHED_FAILURE"
          | "CRASHED_UNKNOWN"
          | "LOST_CONNECTION"
          | "LOST_UNKNOWN"
          | "MONITORED"
          | "MONITORED_AGENT_ENABLED"
          | "MONITORED_AGENT_REGISTERED"
          | "MONITORED_AGENT_UPGRADE_STARTED"
          | "MONITORED_AGENT_VERSION_ACCEPTED"
          | "MONITORED_ENABLED"
          | "PRE_MONITORED"
          | "SHUTDOWN_AGENT_LOST"
          | "SHUTDOWN_GRACEFUL"
          | "SHUTDOWN_SPOT_INSTANCE"
          | "SHUTDOWN_STOPPED"
          | "SHUTDOWN_UNKNOWN"
          | "SHUTDOWN_UNKNOWN_UNEXPECTED"
          | "UNKNOWN"
          | "UNMONITORED_AGENT_DISABLED"
          | "UNMONITORED_AGENT_LOST"
          | "UNMONITORED_AGENT_RESTART_TRIGGERED"
          | "UNMONITORED_AGENT_STOPPED"
          | "UNMONITORED_AGENT_UNINSTALLED"
          | "UNMONITORED_AGENT_UNREGISTERED"
          | "UNMONITORED_AGENT_UPGRADE_FAILED"
          | "UNMONITORED_AGENT_VERSION_REJECTED"
          | "UNMONITORED_DISABLED"
          | "UNMONITORED_ID_CHANGED"
          | "UNMONITORED_TERMINATED"
          | "UNMONITORED_UNKNOWN";
        monitoringType?: "CLOUD_INFRASTRUCTURE" | "FULL_STACK" | "STANDALONE";
        agentVersionIs?: "EQUAL" | "GREATER" | "GREATER_EQUAL" | "LOWER" | "LOWER_EQUAL";
        agentVersionNumber?: string;
        autoUpdateSetting?: "ENABLED" | "DISABLED";
        updateStatus?:
          | "INCOMPATIBLE"
          | "OUTDATED"
          | "SCHEDULED"
          | "SUPPRESSED"
          | "UNKNOWN"
          | "UP2DATE"
          | "UPDATE_IN_PROGRESS"
          | "UPDATE_PENDING"
          | "UPDATE_PROBLEM";
        faultyVersion?: boolean;
        activeGateId?: string;
        technologyModuleType?:
          | "APACHE"
          | "DOT_NET"
          | "DUMPPROC"
          | "GO"
          | "IBM_INTEGRATION_BUS"
          | "IIS"
          | "JAVA"
          | "LOG_ANALYTICS"
          | "NETTRACER"
          | "NETWORK"
          | "NGINX"
          | "NODE_JS"
          | "OPENTRACINGNATIVE"
          | "PHP"
          | "PROCESS"
          | "PYTHON"
          | "RUBY"
          | "SDK"
          | "UPDATER"
          | "VARNISH"
          | "Z_OS";
        technologyModuleVersionIs?: "EQUAL" | "GREATER" | "GREATER_EQUAL" | "LOWER" | "LOWER_EQUAL";
        technologyModuleVersionNumber?: string;
        technologyModuleFaultyVersion?: boolean;
        pluginName?: string;
        pluginVersionIs?: "EQUAL" | "GREATER" | "GREATER_EQUAL" | "LOWER" | "LOWER_EQUAL";
        pluginVersionNumber?: string;
        pluginState?:
          | "DISABLED"
          | "ERROR_AUTH"
          | "ERROR_COMMUNICATION_FAILURE"
          | "ERROR_CONFIG"
          | "ERROR_TIMEOUT"
          | "ERROR_UNKNOWN"
          | "INCOMPATIBLE"
          | "LIMIT_REACHED"
          | "NOTHING_TO_REPORT"
          | "OK"
          | "STATE_TYPE_UNKNOWN"
          | "UNINITIALIZED"
          | "UNSUPPORTED"
          | "WAITING_FOR_STATE";
        nextPageKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<HostsListPage, any>({
        path: `/oneagents`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  problem = {
    /**
     * No description
     *
     * @tags Problem
     * @name GetComment
     * @summary Gets all the comments to the specified problem
     * @request GET:/problem/details/{problemId}/comments
     */
    getComment: (problemId: string, params: RequestParams = {}) =>
      this.request<ProblemCommentList, any>({
        path: `/problem/details/${problemId}/comments`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problem
     * @name PushComment
     * @summary Adds a new comment to the specified problem
     * @request POST:/problem/details/{problemId}/comments
     */
    pushComment: (problemId: string, data: PushProblemComment, params: RequestParams = {}) =>
      this.request<ProblemComment, any>({
        path: `/problem/details/${problemId}/comments`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problem
     * @name UpdateComment
     * @summary Updates an existing comment to the specified problem
     * @request PUT:/problem/details/{problemId}/comments/{commentId}
     */
    updateComment: (problemId: string, commentId: string, data: PushProblemComment, params: RequestParams = {}) =>
      this.request<ProblemComment, any>({
        path: `/problem/details/${problemId}/comments/${commentId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problem
     * @name DeleteComment
     * @summary Deletes an existing comment to the specified problem.
     * @request DELETE:/problem/details/{problemId}/comments/{commentId}
     */
    deleteComment: (problemId: string, commentId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/problem/details/${problemId}/comments/${commentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problem
     * @name GetProblemStatus
     * @summary Lists the number of open problems, split by impact level
     * @request GET:/problem/status
     */
    getProblemStatus: (params: RequestParams = {}) =>
      this.request<ProblemStatusResultWrapper, any>({
        path: `/problem/status`,
        method: "GET",
        ...params,
      }),

    /**
     * @description A problem is included in the response, if either start or end timestamp of the problem is within the defined timeframe. The output is limited to **5,000** problems. You can narrow it down by specifying query parameters.
     *
     * @tags Problem
     * @name GetFeed
     * @summary Gets the information about problems within the specified timeframe
     * @request GET:/problem/feed
     */
    getFeed: (
      query?: {
        relativeTime?:
          | "10mins"
          | "15mins"
          | "2hours"
          | "30mins"
          | "3days"
          | "5mins"
          | "6hours"
          | "day"
          | "hour"
          | "min"
          | "month"
          | "week";
        startTimestamp?: number;
        endTimestamp?: number;
        status?: "CLOSED" | "OPEN";
        impactLevel?: "APPLICATION" | "ENVIRONMENT" | "INFRASTRUCTURE" | "SERVICE";
        severityLevel?:
          | "AVAILABILITY"
          | "CUSTOM_ALERT"
          | "ERROR"
          | "MONITORING_UNAVAILABLE"
          | "PERFORMANCE"
          | "RESOURCE_CONTENTION";
        tag?: string[];
        expandDetails?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProblemFeedResultWrapper, any>({
        path: `/problem/feed`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problem
     * @name CloseProblem
     * @summary Closes the specified problem and adds a closing comment to it
     * @request POST:/problem/details/{problemId}/close
     */
    closeProblem: (problemId: string, query?: { content?: string }, params: RequestParams = {}) =>
      this.request<ProblemCloseResult, any>({
        path: `/problem/details/${problemId}/close`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problem
     * @name GetDetails
     * @summary Gets the properties of the specified problem
     * @request GET:/problem/details/{problemId}
     */
    getDetails: (problemId: string, params: RequestParams = {}) =>
      this.request<ProblemDetailsResultWrapper, any>({
        path: `/problem/details/${problemId}`,
        method: "GET",
        ...params,
      }),
  };
  thresholds = {
    /**
     * No description
     *
     * @tags Threshold
     * @name ReadCustomThresholds
     * @summary Gets all configured thresholds for plugins and custom events in your environment
     * @request GET:/thresholds
     * @deprecated
     */
    readCustomThresholds: (
      query?: { filter?: "ALL" | "PLUGIN" | "REMOTE_PLUGIN" | "USER_INTERACTION" },
      params: RequestParams = {},
    ) =>
      this.request<Threshold[], any>({
        path: `/thresholds`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Threshold
     * @name CreateCustomThreshold
     * @summary Creates or updates an existing threshold for a plugin or a custom event
     * @request PUT:/thresholds/{thresholdId}
     * @deprecated
     */
    createCustomThreshold: (thresholdId: string, data: ThresholdRegistrationMessage, params: RequestParams = {}) =>
      this.request<Threshold, any>({
        path: `/thresholds/${thresholdId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Threshold
     * @name DeleteCustomThreshold
     * @summary Deletes the specified threshold
     * @request DELETE:/thresholds/{thresholdId}
     * @deprecated
     */
    deleteCustomThreshold: (thresholdId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/thresholds/${thresholdId}`,
        method: "DELETE",
        ...params,
      }),
  };
  timeseries = {
    /**
     * @description You can specify filtering parameters to return only matched metrics. If no parameters are specified, the call will list all the defined metrics.
     *
     * @tags Timeseries
     * @name GetAllTimeseriesDefinitions
     * @summary Lists all metric definitions, with the parameters of each metric
     * @request GET:/timeseries
     */
    getAllTimeseriesDefinitions: (
      query?: { source?: "ALL" | "BUILTIN" | "CUSTOM" | "PLUGIN" | "REMOTE_PLUGIN"; detailedSource?: string },
      params: RequestParams = {},
    ) =>
      this.request<TimeseriesDefinition[], any>({
        path: `/timeseries`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description To obtain data points, set **includeData** to `true`. You can obtain either data points or the scalar result of the specified timeseries, depending on the **queryMode**. To obtain data points, you must specify the timeframe, either as **relativeTime** or as a combination of **startTimestamp** and **endTimestamp**. You must also provide the **aggregationType**, supported by the metric.
     *
     * @tags Timeseries
     * @name ReadTimeseriesData
     * @summary Gets the parameters of the specified metric and, optionally, its data points
     * @request GET:/timeseries/{timeseriesIdentifier}
     */
    readTimeseriesData: (
      timeseriesIdentifier: string,
      query?: {
        includeData?: boolean;
        aggregationType?: "AVG" | "COUNT" | "MAX" | "MEDIAN" | "MIN" | "PERCENTILE" | "SUM";
        startTimestamp?: number;
        endTimestamp?: number;
        predict?: boolean;
        relativeTime?:
          | "10mins"
          | "15mins"
          | "2hours"
          | "30mins"
          | "3days"
          | "5mins"
          | "6hours"
          | "day"
          | "hour"
          | "min"
          | "month"
          | "week";
        queryMode?: "SERIES" | "TOTAL";
        entity?: string[];
        tag?: string[];
        percentile?: number;
        includeParentIds?: boolean;
        considerMaintenanceWindowsForAvailability?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimeseriesQueryResult, any>({
        path: `/timeseries/${timeseriesIdentifier}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Timeseries
     * @name CreateCustomTimeseries
     * @summary Creates a new custom metric
     * @request PUT:/timeseries/{timeseriesIdentifier}
     */
    createCustomTimeseries: (
      timeseriesIdentifier: string,
      data: TimeseriesRegistrationMessage,
      params: RequestParams = {},
    ) =>
      this.request<TimeseriesDefinition, any>({
        path: `/timeseries/${timeseriesIdentifier}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Provides advanced filtering possibilities, comparing to the `GET /timeseries/{metricIdentifier}` request.
     *
     * @tags Timeseries
     * @name ReadTimeseriesComplex
     * @summary Lists all available metric data points, matching the specified parameters
     * @request POST:/timeseries/{timeseriesIdentifier}
     */
    readTimeseriesComplex: (timeseriesIdentifier: string, data: TimeseriesQueryMessage, params: RequestParams = {}) =>
      this.request<TimeseriesQueryResultWrapper, any>({
        path: `/timeseries/${timeseriesIdentifier}`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Timeseries
     * @name DeleteCustomTimeseries
     * @summary Deletes the specified custom metric
     * @request DELETE:/timeseries/{timeseriesIdentifier}
     */
    deleteCustomTimeseries: (timeseriesIdentifier: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/timeseries/${timeseriesIdentifier}`,
        method: "DELETE",
        ...params,
      }),
  };
  time = {
    /**
     * No description
     *
     * @tags Cluster time
     * @name GetCurrentClusterTime
     * @summary Gets the current time of the Dynatrace server in UTC milliseconds
     * @request GET:/time
     */
    getCurrentClusterTime: (params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/time`,
        method: "GET",
        ...params,
      }),
  };
  tokens = {
    /**
     * @description You can narrow down the output by adding parameters. The token has to match *all* the specified parameters. You can also specify the limit of returned tokens. **This list may contain tokens which were created automatically** (e.g. InstallerDownload, Mobile, ...) and are not visible on the `Settings` page. Deleting those might have unintended side-effects as they might still be in use.
     *
     * @tags Tokens
     * @name ListTokens
     * @summary Lists available tokens in your environment
     * @request GET:/tokens
     */
    listTokens: (
      query?: {
        limit?: number;
        user?: string;
        permissions?: (
          | "ActiveGateCertManagement"
          | "AdvancedSyntheticIntegration"
          | "AppMonIntegration"
          | "CaptureRequestData"
          | "DTAQLAccess"
          | "DataExport"
          | "DataImport"
          | "DataPrivacy"
          | "Davis"
          | "DcrumIntegration"
          | "DiagnosticExport"
          | "DssFileManagement"
          | "ExternalSyntheticIntegration"
          | "InstallerDownload"
          | "LogExport"
          | "MemoryDump"
          | "Mobile"
          | "PluginUpload"
          | "ReadConfig"
          | "ReadSyntheticData"
          | "RestRequestForwarding"
          | "RumBrowserExtension"
          | "RumJavaScriptTagManagement"
          | "SupportAlert"
          | "TenantTokenManagement"
          | "UserSessionAnonymization"
          | "ViewDashboard"
          | "ViewReport"
          | "WriteConfig"
          | "WriteSyntheticData"
          | "activeGateTokenManagement.create"
          | "activeGateTokenManagement.read"
          | "activeGateTokenManagement.write"
          | "activeGates.read"
          | "activeGates.write"
          | "apiTokens.read"
          | "apiTokens.write"
          | "auditLogs.read"
          | "credentialVault.read"
          | "credentialVault.write"
          | "entities.read"
          | "entities.write"
          | "events.ingest"
          | "events.read"
          | "extensionConfigurations.read"
          | "extensionConfigurations.write"
          | "extensionEnvironment.read"
          | "extensionEnvironment.write"
          | "extensions.read"
          | "extensions.write"
          | "logs.ingest"
          | "logs.read"
          | "metrics.ingest"
          | "metrics.read"
          | "metrics.write"
          | "networkZones.read"
          | "networkZones.write"
          | "openTelemetryTrace.ingest"
          | "problems.read"
          | "problems.write"
          | "releases.read"
          | "securityProblems.read"
          | "securityProblems.write"
          | "settings.read"
          | "settings.write"
          | "slo.read"
          | "slo.write"
          | "syntheticLocations.read"
          | "syntheticLocations.write"
          | "tenantTokenRotation.write"
        )[];
        from?: number;
        to?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<StubList, any>({
        path: `/tokens`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The newly created token will be owned by the same user who owns the token used for authentication of the call.
     *
     * @tags Tokens
     * @name CreateToken
     * @summary Creates a new token
     * @request POST:/tokens
     */
    createToken: (data: CreateToken, params: RequestParams = {}) =>
      this.request<Token, ErrorEnvelope>({
        path: `/tokens`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The token itself is **not** exposed.
     *
     * @tags Tokens
     * @name GetTokenMetadata
     * @summary Lists token metadata by token ID
     * @request GET:/tokens/{id}
     */
    getTokenMetadata: (id: string, params: RequestParams = {}) =>
      this.request<TokenMetadata, ErrorEnvelope>({
        path: `/tokens/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tokens
     * @name UpdateToken
     * @summary Updates the specified token
     * @request PUT:/tokens/{id}
     */
    updateToken: (id: string, data: UpdateToken, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/tokens/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tokens
     * @name DeleteToken
     * @summary Deletes the specified token
     * @request DELETE:/tokens/{id}
     */
    deleteToken: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/tokens/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tokens
     * @name GetTokenMetadataBySecret
     * @summary Lists token metadata by token itself
     * @request POST:/tokens/lookup
     */
    getTokenMetadataBySecret: (data: Token, params: RequestParams = {}) =>
      this.request<TokenMetadata, any>({
        path: `/tokens/lookup`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
}
