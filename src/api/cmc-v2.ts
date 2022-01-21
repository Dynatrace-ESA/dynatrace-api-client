// @ts-nocheck
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

export interface AgentUsageDto {
  /** @format int64 */
  networkTraffic?: number;

  /** @format int32 */
  agentId?: number;

  /** @format int32 */
  agentTypeId?: number;
  agentUsageRecords?: AgentUsageRecordDto[];
}

export interface AgentUsageRecordDto {
  /** @format date-time */
  startTime?: string;

  /** @format date-time */
  endTime?: string;
}

export interface BillingRequestDto {
  clusterUuid?: string;

  /** @format date-time */
  timeFrameStart?: string;

  /** @format date-time */
  timeFrameEnd?: string;
  environmentBillingEntries?: EnvironmentUsageDto[];
}

export interface CustomMetricDto {
  source?: string;

  /** @format int64 */
  total?: number;
}

export interface DavisDataUnitsUsageDto {
  pool?: string;
  total?: number;
}

export interface DownloadsDto {
  type?: string;

  /** @format int32 */
  downloadCount?: number;
  version?: string;

  /** @format date-time */
  firstDownloadTime?: string;
}

export interface EnvironmentUsageDto {
  environmentUuid?: string;

  /** @format int64 */
  visits?: number;

  /** @format int64 */
  mobileSessions?: number;

  /** @format int64 */
  totalRUMUserPropertiesUsed?: number;

  /** @format int64 */
  newProblems?: number;
  hostUsages?: HostUsageDto[];
  downloads?: DownloadsDto[];
  syntheticUsages?: SyntheticUsageDto[];
  syntheticBillingUsage?: SyntheticBillingUsageDto[];
  customMetrics?: CustomMetricDto[];
  davisDataUnits?: DavisDataUnitsUsageDto[];
  trial?: boolean;
  internalUse?: boolean;
  highAvailabilityCluster?: boolean;

  /** @format int64 */
  logStorageUsageBytes?: number;

  /** @format int64 */
  logUploadVolumeBytes?: number;

  /** @format int64 */
  sessionReplays?: number;

  /** @format int64 */
  mobileSessionReplays?: number;
}

export interface HostUsageDto {
  /** @format int64 */
  osiId?: number;
  hostName?: string;
  hostCategory?: string;
  agentUsages?: AgentUsageDto[];
  infrastructureOnly?: boolean;
  paas?: boolean;

  /** @format int64 */
  passMemoryLimit?: number;

  /** @format int32 */
  vendorTypeId?: number;

  /** @format int64 */
  hostMemoryBytes?: number;
  premiumLogAnalytics?: boolean;
  hasContainers?: boolean;
}

export interface SyntheticBillingUsageDto {
  /** @format int32 */
  monitorTypeId?: number;

  /** @format int64 */
  testId?: number;

  /** @format int64 */
  publicExecutions?: number;

  /** @format int64 */
  privateExecutions?: number;
}

export interface SyntheticUsageDto {
  monitorDefinitionId?: string;
  monitorDescription?: string;

  /** @format int32 */
  monitorTypeId?: number;

  /** @format int32 */
  successCount?: number;

  /** @format int32 */
  failureCount?: number;

  /** @format int32 */
  syntheticActionCount?: number;

  /** @format int32 */
  performedSyntheticActions?: number;
}

/**
 * Custom metrics consumption and quota information on environment level. Not set (and not editable) if Custom metrics is not enabled. Not set (and not editable) if Davis data units is enabled. If skipped when editing via PUT method then already set quota will remain.
 */
export interface CustomMetricsQuota {
  /**
   * Concurrent environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  maxLimit?: number;

  /**
   * Current environment usage.
   * @format double
   */
  currentUsage?: number;
}

/**
 * Davis data units consumption and quota information on environment level. Not set (and not editable) if Davis data units is not enabled. If skipped when editing via PUT method then already set quotas will remain.
 */
export interface DavisDataUnitsQuota {
  /**
   * Monthly environment consumption. Resets each calendar month.
   * @format double
   */
  consumedThisMonth?: number;

  /**
   * Yearly environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  consumedThisYear?: number;

  /**
   * Monthly environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  monthlyLimit?: number;

  /**
   * Annual environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  annualLimit?: number;
}

/**
 * DEM units consumption and quota information on environment level. Not set (and not editable) if DEM units is not enabled. If skipped when editing via PUT method then already set quotas will remain.
 */
export interface DemUnitsQuota {
  /**
   * Monthly environment consumption. Resets each calendar month.
   * @format double
   */
  consumedThisMonth?: number;

  /**
   * Yearly environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  consumedThisYear?: number;

  /**
   * Monthly environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  monthlyLimit?: number;

  /**
   * Annual environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  annualLimit?: number;
}

/**
 * Basic configuration for an environment.
 * @example {"name":"example environment","state":"ENABLED","tags":["tag1","tag2"],"trial":false}
 */
export interface Environment {
  /** The display name of the environment. */
  name: string;

  /** The ID of the environment. Has to match [a-zA-Z0-9_-]{1,70} */
  id?: string;

  /** Specifies whether the environment is a trial environment or a non-trial environment. Creating a trial environment is only possible if your license allows that. The default value is false (non-trial). */
  trial?: boolean;

  /** Indicates whether the environment is enabled or disabled. The default value is ENABLED. */
  state?: "DISABLED" | "ENABLED";

  /** A set of tags that are assigned to this environment. Every tag can have a maximum length of 100 characters. */
  tags?: string[];

  /** The creation date of the environment in ISO 8601 format (yyyy-MM-dd'T'HH:mm:ss.SSS'Z') */
  creationDate?: string;

  /** Environment level consumption and quotas information. Only returned if includeConsumptionInfo or includeUncachedConsumptionInfo param is true. If skipped when editing via PUT method then already set quotas will remain. */
  quotas?: EnvironmentQuotas;

  /** Environment level storage usage and limit information. Not returned if includeStorageInfo param is not true. If skipped when editing via PUT method then already set limits will remain. */
  storage?: EnvironmentStorage;
}

/**
 * Environment level consumption and quotas information. Only returned if includeConsumptionInfo or includeUncachedConsumptionInfo param is true. If skipped when editing via PUT method then already set quotas will remain.
 */
export interface EnvironmentQuotas {
  /** Host units consumption and quota information on environment level. If skipped when editing via PUT method then already set quota will remain. */
  hostUnits?: HostUnitQuota;

  /** DEM units consumption and quota information on environment level. Not set (and not editable) if DEM units is not enabled. If skipped when editing via PUT method then already set quotas will remain. */
  demUnits?: DemUnitsQuota;

  /** User sessions consumption and quota information on environment level. If skipped when editing via PUT method then already set quotas will remain. */
  userSessions?: UserSessionsQuota;

  /** User session properties consumption information on environment level. */
  sessionProperties?: SessionPropertiesQuota;

  /** Synthetic monitors consumption and quota information on environment level. Not set (and not editable) if neither Synthetic nor DEM units is enabled. If skipped when editing via PUT method then already set quotas will remain. */
  syntheticMonitors?: SyntheticQuota;

  /** Custom metrics consumption and quota information on environment level. Not set (and not editable) if Custom metrics is not enabled. Not set (and not editable) if Davis data units is enabled. If skipped when editing via PUT method then already set quota will remain. */
  customMetrics?: CustomMetricsQuota;

  /** Davis data units consumption and quota information on environment level. Not set (and not editable) if Davis data units is not enabled. If skipped when editing via PUT method then already set quotas will remain. */
  davisDataUnits?: DavisDataUnitsQuota;

  /** Log monitoring consumption and quota information on environment level. Not set (and not editable) if Log monitoring is not enabled. Not set (and not editable) if Log monitoring is migrated to Davis data on license level. If skipped when editing via PUT method then already set quotas will remain. */
  logMonitoring?: LogMonitoringQuota;
}

/**
 * Environment level storage usage and limit information. Not returned if includeStorageInfo param is not true. If skipped when editing via PUT method then already set limits will remain.
 */
export interface EnvironmentStorage {
  /** Transaction storage usage and limit information on environment level. If skipped when editing via PUT method then already set limit will remain. */
  transactionStorage?: TransactionStorage;

  /** Session replay storage usage and limit information on environment level. If skipped when editing via PUT method then already set limit will remain. */
  sessionReplayStorage?: SessionReplayStorage;

  /** Symbol files from mobile apps storage usage and limit information on environment level. If skipped when editing via PUT method then already set limit will remain. */
  symbolFilesFromMobileApps?: SymbolFilesFromMobileApps;

  /** Log monitoring storage usage and limit information on environment level. Not editable when Log monitoring is not allowed by license or not configured on cluster level. If skipped when editing via PUT method then already set limit will remain. */
  logMonitoringStorage?: LogMonitoringStorage;

  /** Service request level retention settings on environment level. Service code level retention time can't be greater than service request level retention time and both can't exceed one year.If skipped when editing via PUT method then already set limit will remain. */
  serviceRequestLevelRetention?: ServiceRequestLevelRetention;

  /** Service code level retention settings on environment level. Service code level retention time can't be greater than service request level retention time and both can't exceed one year.If skipped when editing via PUT method then already set limit will remain. */
  serviceCodeLevelRetention?: ServiceCodeLevelRetention;

  /** Real user monitoring retention settings on environment level. Can be set to any value from 1 to 35 days. If skipped when editing via PUT method then already set limit will remain. */
  realUserMonitoringRetention?: RealUserMonitoringRetention;

  /** Synthetic monitoring retention settings on environment level. Can be set to any value from 1 to 35 days. If skipped when editing via PUT method then already set limit will remain. */
  syntheticMonitoringRetention?: SyntheticMonitoringRetention;

  /** Session replay retention settings on environment level. Can be set to any value from 1 to 35 days. If skipped when editing via PUT method then already set limit will remain. */
  sessionReplayRetention?: SessionReplayRetention;

  /** Log monitoring retention settings on environment level. Not editable when Log monitoring is not allowed by license or not configured on cluster level. Can be set to any value from 5 to 90 days. If skipped when editing via PUT method then already set limit will remain. */
  logMonitoringRetention?: LogMonitoringRetention;

  /** Maximum number of user actions generated per minute on environment level. Can be set to any value from 1 to 2147483646 or left unlimited. If skipped when editing via PUT method then already set limit will remain. */
  userActionsPerMinute?: UserActionsPerMinute;

  /** Maximum number of newly monitored entry point PurePaths captured per process/minute on environment level. Can be set to any value from 100 to 100000. If skipped when editing via PUT method then already set limit will remain. */
  transactionTrafficQuota?: TransactionTrafficQuota;
}

/**
 * Host units consumption and quota information on environment level. If skipped when editing via PUT method then already set quota will remain.
 */
export interface HostUnitQuota {
  /**
   * Concurrent environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  maxLimit?: number;

  /**
   * Current environment usage.
   * @format double
   */
  currentUsage?: number;
}

/**
 * Log monitoring consumption and quota information on environment level. Not set (and not editable) if Log monitoring is not enabled. Not set (and not editable) if Log monitoring is migrated to Davis data on license level. If skipped when editing via PUT method then already set quotas will remain.
 */
export interface LogMonitoringQuota {
  /**
   * Monthly environment consumption. Resets each calendar month.
   * @format double
   */
  consumedThisMonth?: number;

  /**
   * Yearly environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  consumedThisYear?: number;

  /**
   * Monthly environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  monthlyLimit?: number;

  /**
   * Annual environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  annualLimit?: number;
}

/**
 * Log monitoring retention settings on environment level. Not editable when Log monitoring is not allowed by license or not configured on cluster level. Can be set to any value from 5 to 90 days. If skipped when editing via PUT method then already set limit will remain.
 */
export interface LogMonitoringRetention {
  /**
   * Maximum retention limit [days]
   * @format int64
   */
  maxLimitInDays?: number;

  /**
   * Current data age [milliseconds]
   * @format int64
   */
  currentlyUsedInMillis?: number;

  /**
   * Current data age [days]
   * @format int64
   */
  currentlyUsedInDays?: number;
}

/**
 * Log monitoring storage usage and limit information on environment level. Not editable when Log monitoring is not allowed by license or not configured on cluster level. If skipped when editing via PUT method then already set limit will remain.
 */
export interface LogMonitoringStorage {
  /**
   * Maximum storage limit [bytes]
   * @format int64
   */
  maxLimit?: number;

  /**
   * Currently used storage [bytes]
   * @format int64
   */
  currentlyUsed?: number;
}

/**
 * Real user monitoring retention settings on environment level. Can be set to any value from 1 to 35 days. If skipped when editing via PUT method then already set limit will remain.
 */
export interface RealUserMonitoringRetention {
  /**
   * Maximum retention limit [days]
   * @format int64
   */
  maxLimitInDays?: number;

  /**
   * Current data age [milliseconds]
   * @format int64
   */
  currentlyUsedInMillis?: number;

  /**
   * Current data age [days]
   * @format int64
   */
  currentlyUsedInDays?: number;
}

/**
 * Service code level retention settings on environment level. Service code level retention time can't be greater than service request level retention time and both can't exceed one year.If skipped when editing via PUT method then already set limit will remain.
 */
export interface ServiceCodeLevelRetention {
  /**
   * Maximum retention limit [days]
   * @format int64
   */
  maxLimitInDays?: number;

  /**
   * Current data age [milliseconds]
   * @format int64
   */
  currentlyUsedInMillis?: number;

  /**
   * Current data age [days]
   * @format int64
   */
  currentlyUsedInDays?: number;
}

/**
 * Service request level retention settings on environment level. Service code level retention time can't be greater than service request level retention time and both can't exceed one year.If skipped when editing via PUT method then already set limit will remain.
 */
export interface ServiceRequestLevelRetention {
  /**
   * Maximum retention limit [days]
   * @format int64
   */
  maxLimitInDays?: number;

  /**
   * Current data age [milliseconds]
   * @format int64
   */
  currentlyUsedInMillis?: number;

  /**
   * Current data age [days]
   * @format int64
   */
  currentlyUsedInDays?: number;
}

/**
 * User session properties consumption information on environment level.
 */
export interface SessionPropertiesQuota {
  /**
   * Monthly environment consumption. Resets each calendar month.
   * @format double
   */
  consumedThisMonth?: number;

  /**
   * Yearly environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  consumedThisYear?: number;
}

/**
 * Session replay retention settings on environment level. Can be set to any value from 1 to 35 days. If skipped when editing via PUT method then already set limit will remain.
 */
export interface SessionReplayRetention {
  /**
   * Maximum retention limit [days]
   * @format int64
   */
  maxLimitInDays?: number;

  /**
   * Current data age [milliseconds]
   * @format int64
   */
  currentlyUsedInMillis?: number;

  /**
   * Current data age [days]
   * @format int64
   */
  currentlyUsedInDays?: number;
}

/**
 * Session replay storage usage and limit information on environment level. If skipped when editing via PUT method then already set limit will remain.
 */
export interface SessionReplayStorage {
  /**
   * Percentage of truncation for new data.
   * @format byte
   */
  retentionReductionPercentage?: string;

  /** Reason of truncation. */
  retentionReductionReason?: string;

  /**
   * Maximum storage limit [bytes]
   * @format int64
   */
  maxLimit?: number;

  /**
   * Currently used storage [bytes]
   * @format int64
   */
  currentlyUsed?: number;
}

/**
 * Symbol files from mobile apps storage usage and limit information on environment level. If skipped when editing via PUT method then already set limit will remain.
 */
export interface SymbolFilesFromMobileApps {
  /**
   * Maximum storage limit [bytes]
   * @format int64
   */
  maxLimit?: number;

  /**
   * Currently used storage [bytes]
   * @format int64
   */
  currentlyUsed?: number;
}

/**
 * Synthetic monitoring retention settings on environment level. Can be set to any value from 1 to 35 days. If skipped when editing via PUT method then already set limit will remain.
 */
export interface SyntheticMonitoringRetention {
  /**
   * Maximum retention limit [days]
   * @format int64
   */
  maxLimitInDays?: number;

  /**
   * Current data age [milliseconds]
   * @format int64
   */
  currentlyUsedInMillis?: number;

  /**
   * Current data age [days]
   * @format int64
   */
  currentlyUsedInDays?: number;
}

/**
 * Synthetic monitors consumption and quota information on environment level. Not set (and not editable) if neither Synthetic nor DEM units is enabled. If skipped when editing via PUT method then already set quotas will remain.
 */
export interface SyntheticQuota {
  /**
   * Monthly environment consumption. Resets each calendar month.
   * @format double
   */
  consumedThisMonth?: number;

  /**
   * Yearly environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  consumedThisYear?: number;

  /**
   * Monthly environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  monthlyLimit?: number;

  /**
   * Annual environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  annualLimit?: number;
}

/**
 * Transaction storage usage and limit information on environment level. If skipped when editing via PUT method then already set limit will remain.
 */
export interface TransactionStorage {
  /**
   * Percentage of truncation for new data.
   * @format byte
   */
  retentionReductionPercentage?: string;

  /** Reason of truncation. */
  retentionReductionReason?: string;

  /**
   * Maximum storage limit [bytes]
   * @format int64
   */
  maxLimit?: number;

  /**
   * Currently used storage [bytes]
   * @format int64
   */
  currentlyUsed?: number;
}

/**
 * Maximum number of newly monitored entry point PurePaths captured per process/minute on environment level. Can be set to any value from 100 to 100000. If skipped when editing via PUT method then already set limit will remain.
 */
export interface TransactionTrafficQuota {
  /**
   * Maximum traffic [units per minute]
   * @format int32
   */
  maxLimit?: number;
}

/**
 * Maximum number of user actions generated per minute on environment level. Can be set to any value from 1 to 2147483646 or left unlimited. If skipped when editing via PUT method then already set limit will remain.
 */
export interface UserActionsPerMinute {
  /**
   * Maximum traffic [units per minute]
   * @format int32
   */
  maxLimit?: number;
}

/**
 * User sessions consumption and quota information on environment level. If skipped when editing via PUT method then already set quotas will remain.
 */
export interface UserSessionsQuota {
  /**
   * Yearly Mobile user sessions environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  consumedMobileSessionsThisYear?: number;

  /**
   * Monthly Mobile user sessions environment consumption. Resets each calendar month.
   * @format double
   */
  consumedMobileSessionsThisMonth?: number;

  /**
   * Monthly Web user sessions with replay environment consumption. Resets each calendar month.
   * @format double
   */
  consumedUserSessionsWithWebSessionReplayThisMonth?: number;

  /**
   * Annual total User sessions environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  totalAnnualLimit?: number;

  /**
   * Monthly total User sessions environment quota. Not set if unlimited. When updating via PUT method, skipping this field will set quota unlimited.
   * @format int64
   */
  totalMonthlyLimit?: number;

  /**
   * Monthly total User sessions environment consumption. Resets each calendar month.
   * @format double
   */
  totalConsumedThisMonth?: number;

  /**
   * Yearly total User sessions environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  totalConsumedThisYear?: number;

  /**
   * Yearly Web user sessions with replay environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  consumedUserSessionsWithWebSessionReplayThisYear?: number;

  /**
   * Monthly Mobile user sessions with replay environment consumption. Resets each calendar month.
   * @format double
   */
  consumedUserSessionsWithMobileSessionReplayThisMonth?: number;

  /**
   * Yearly Mobile user sessions with replay environment consumption. Resets each year on license creation date anniversary.
   * @format double
   */
  consumedUserSessionsWithMobileSessionReplayThisYear?: number;
}

/**
 * The short representation of an environment.
 */
export interface EnvironmentShortRepresentation {
  /** The ID of the Dynatrace entity. */
  id: string;

  /** The name of the Dynatrace entity. */
  name?: string;

  /** A short description of the Dynatrace entity. */
  description?: string;

  /** A token with the 'Token management' permission. Can be used to within the newly created environment to create other tokens for configuring this environment. This value is only set if an environment was created with the query parameter 'createToken=true'. */
  tokenManagementToken?: string;
}

/**
 * @example {"token":"abcdefjhij1234567890"}
 */
export interface Token {
  /** Dynatrace API authentication token. */
  token: string;
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
 * @example {"name":"Token Management","expiresIn":{"value":3600,"unit":"SECONDS"}}
 */
export interface CreateEnvironmentTokenManagementToken {
  /** The name of the token. */
  name: string;

  /** Defines a period of time. */
  expiresIn?: Duration;
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
 * A list of environments.
 */
export interface EnvironmentList {
  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

  /**
   * The number of entries per page.
   * @format int32
   */
  pageSize?: number;

  /**
   * The cursor for the next page of results. Has the value of `null` on the last page.
   *
   * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
   * @example AQAAABQBAAAABQ==
   */
  nextPageKey?: string;

  /** The list of environments. */
  environments: Environment[];
}

/**
 * Access request data - format used to change a state of a request
 */
export interface AccessRequestStateData {
  /** Access request state */
  state?: "ACCEPTED" | "EXPIRED" | "PENDING" | "REJECTED";
}

/**
 * Access Request data
 */
export interface AccessRequestData {
  /** Request id */
  requestId?: string;

  /** User id */
  userId?: string;

  /** Request reason description */
  reason?: string;

  /**
   * For how many days access is requested
   * @format int32
   */
  requestedDays?: number;

  /** Requested role */
  role?: "devops-admin" | "devops-user" | "devops-viewer";

  /**
   * Access request created at (timestamp)
   * @format int64
   */
  createdTimestamp?: number;

  /**
   * Access expires at (timestamp)
   * @format int64
   */
  expirationTimestamp?: number;

  /** Access request state */
  state?: "ACCEPTED" | "EXPIRED" | "PENDING" | "REJECTED";

  /** Access request state was modified by user */
  stateModifiedByUser?: string;
}

/**
 * Access request data - format used to create a request
 */
export interface CreateAccessRequestDto {
  /** User id */
  userId?: string;

  /** Request reason description */
  reason?: string;

  /**
   * For how many days access is requested
   * @format int32
   */
  requestedDays?: number;

  /** Requested role */
  role?: "devops-admin" | "devops-user" | "devops-viewer";
}

/**
 * Configuration of automatic logout.
 * @example {"logoutInactiveUsersEnabled":true,"userInactivityTimeout":900}
 */
export interface AutomaticLogoutConfiguration {
  /** True if automatic logout is enabled */
  logoutInactiveUsersEnabled: boolean;

  /**
   * User inactivity timeout
   * @format int32
   * @min 1
   */
  userInactivityTimeout: number;
}

/**
 * The configuration of the concurrent sessions policy. Set '0' to disable session limitation.
 */
export interface ConcurrentSessionPolicy {
  /**
   * Session limit for regular users (0 = no limit)
   * @format int32
   */
  userLimit: number;

  /**
   * Session limit for admin users (0 = no limit)
   * @format int32
   */
  adminLimit: number;
}

/**
 * The configuration of user sessions - concurrent sessions policy and automatic logout.
 */
export interface UserSessionsConfig {
  /** The configuration of the concurrent sessions policy. Set '0' to disable session limitation. */
  concurrentSessionPolicyDto: ConcurrentSessionPolicy;

  /** Configuration of automatic logout. */
  automaticLogoutDto: AutomaticLogoutConfiguration;
}

/**
 * Managed user session instance
 */
export interface UserSession {
  /** User id */
  userId: string;

  /**
   * Node on which user session exists
   * @format int32
   */
  nodeId: number;

  /** User session id */
  sessionId: string;

  /**
   * User session creation timestamp
   * @format int64
   */
  creationTime: number;

  /**
   * Timestamp when session was recently accessed
   * @format int64
   */
  lastAccessedTimestamp?: number;

  /** UUID of tenant to which user has logged in (or cluster UUID if user has logged in to CMC) */
  tenantUuid: string;

  /** The way user has logged in */
  loginType: "LOCAL" | "LDAP" | "SSO_MANAGED" | "DEVOPSTOKEN";

  /** Device on which user has logged in */
  device?: string;

  /** IP from which has logged in */
  ip?: string;
}

/**
 * Configuration of the ActiveGate auto-updates.
 */
export interface ActiveGateAutoUpdateConfig {
  /**
   * The state of the ActiveGate auto-update: enabled, disabled, or inherited.
   *
   * If set to `INHERITED`, the setting is inherited from the global configuration set on the environment or Managed cluster level.
   * @example INHERITED
   */
  setting: "DISABLED" | "ENABLED" | "INHERITED";

  /**
   * The actual state of the ActiveGate auto-update.
   *
   * Applicable only if the **setting** parameter is set to `INHERITED`. In that case, the value is taken from the parent setting. Otherwise, it's just a duplicate of the **setting** value.
   * @example ENABLED
   */
  effectiveSetting?: "ENABLED" | "DISABLED";
}

/**
 * Global configuration of ActiveGates auto-update.
 */
export interface ActiveGateGlobalAutoUpdateConfig {
  /**
   * The state of auto-updates for all ActiveGates connected to the environment or Managed cluster.
   *
   * This setting is inherited by all ActiveGates that have the `INHERITED` setting.
   */
  globalSetting: "ENABLED" | "DISABLED";

  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;
}

/**
 * Metadata useful for debugging
 */
export interface ConfigurationMetadata {
  /**
   * A sorted list of the version numbers of the configuration.
   * @example [4,2]
   */
  configurationVersions?: number[];

  /**
   * A sorted list of version numbers of the configuration.
   * @example ["1.0.4","1.23"]
   */
  currentConfigurationVersions?: string[];

  /**
   * Dynatrace version.
   * @example 1.192.1
   */
  clusterVersion?: string;
}

/**
 * Configuration of the ActiveGate update job.
 */
export interface UpdateJob {
  /** A list of environments (specified by IDs) the ActiveGate can connect to. */
  environments?: string[];

  /**
   * The status of the update job.
   * @example SUCCEED
   */
  jobState?: "FAILED" | "IN_PROGRESS" | "PENDING" | "ROLLBACK" | "SCHEDULED" | "SKIPPED" | "SUCCEED";

  /**
   * The method of updating the ActiveGate or its component.
   * @example AUTOMATIC
   */
  updateMethod?: "AUTOMATIC" | "MANUAL_INSTALLATION" | "ON_DEMAND";

  /**
   * The component to be updated.
   * @example ACTIVE_GATE
   */
  updateType?: "ACTIVE_GATE" | "REMOTE_PLUGIN_AGENT" | "SYNTHETIC" | "Z_REMOTE";

  /**
   * The type of the ActiveGate.
   * @example ENVIRONMENT
   */
  agType?: "CLUSTER" | "ENVIRONMENT" | "ENVIRONMENT_MULTI";

  /**
   * The initial version of the ActiveGate.
   * @example 1.185.0.20200201-120000
   */
  startVersion?: string;

  /**
   * The job can (`true`) or can't (`false`) be cancelled at the moment.
   * @example false
   */
  cancelable?: boolean;

  /**
   * The ID of the update job.
   * @example -3524498778810258605
   */
  jobId?: string;

  /**
   * The timestamp of the update job completion.
   *
   *  The `null` value means the job is still running.
   * @format int64
   * @example 1582031917814
   */
  timestamp?: number;

  /**
   * The duration of the update, in milliseconds.
   * @format int64
   * @example 3608000
   */
  duration?: number;

  /**
   * The target version of the update.
   *
   * Specify the version in the `<major>.<minor>.<revision>.<timestamp>` format.
   * To update to the latest available version, use the `latest` value.
   * @example 1.190.0.20200301-130000
   */
  targetVersion: string;

  /** The information about update error. */
  error?: string;
}

/**
 * A list of update jobs of the ActiveGate.
 */
export interface UpdateJobList {
  /**
   * The ID of the ActiveGate.
   * @example 0x3efdd092
   */
  agId?: string;

  /** A list of update jobs of the ActiveGate. */
  updateJobs?: UpdateJob[];
}

/**
 * A list of ActiveGates with update jobs.
 */
export interface UpdateJobsAll {
  /** A list of ActiveGates with update jobs. */
  allUpdateJobs?: UpdateJobList[];
}

/**
 * Parameters of the ActiveGate.
 */
export interface ActiveGate {
  /**
   * The ID of the ActiveGate.
   * @example 0x3efdd091
   */
  id?: string;

  /** A list of network addresses of the ActiveGate. */
  networkAddresses?: string[];

  /** A list of Load Balancer addresses of the ActiveGate. */
  loadBalancerAddresses?: string[];

  /**
   * The OS type that the ActiveGate is running on.
   * @example WINDOWS
   */
  osType?: "LINUX" | "WINDOWS";

  /**
   * The current status of auto-updates of the ActiveGate.
   * @example OUTDATED
   */
  autoUpdateStatus?:
    | "INCOMPATIBLE"
    | "OUTDATED"
    | "SCHEDULED"
    | "SUPPRESSED"
    | "UNKNOWN"
    | "UP2DATE"
    | "UPDATE_IN_PROGRESS"
    | "UPDATE_PENDING"
    | "UPDATE_PROBLEM";

  /**
   * The timestamp since when the ActiveGate is offline.
   *
   *  The `null` value means the ActiveGate is online.
   * @format int64
   * @example 1582031917814
   */
  offlineSince?: number;

  /**
   * The current version of the ActiveGate in the `<major>.<minor>.<revision>.<timestamp>` format.
   * @example 1.185.0.20200201-120000
   */
  version?: string;

  /**
   * The type of the ActiveGate.
   * @example ENVIRONMENT
   */
  type?: "CLUSTER" | "ENVIRONMENT" | "ENVIRONMENT_MULTI";

  /**
   * The name of the host the ActiveGate is running on.
   * @example exampleHostname
   */
  hostname?: string;

  /**
   * The ID of the main environment for a multi-environment ActiveGate.
   * @example d1bf4a7e-666b-43af-9f45-718g98372e2f
   */
  mainEnvironment?: string;

  /** A list of environments (specified by IDs) the ActiveGate can connect to. */
  environments?: string[];

  /** Configuration of the ActiveGate auto-updates. */
  autoUpdateSettings?: ActiveGateAutoUpdateConfig;

  /**
   * The network zone of the ActiveGate.
   * @example exampleNetworkZone
   */
  networkZone?: string;

  /**
   * The group of the ActiveGate.
   * @example default
   */
  group?: string;

  /** A list of modules of the ActiveGate. */
  modules?: ActiveGateModule[];

  /** ActiveGate is deployed in container (`true`) or not (`false`). */
  containerized?: boolean;
}

/**
 * A list of ActiveGates.
 */
export interface ActiveGateList {
  /** A list of ActiveGates. */
  activeGates?: ActiveGate[];
}

/**
 * Information about ActiveGate module
 */
export interface ActiveGateModule {
  /** The module is misconfigured (`true`) or not (`false`). */
  misconfigured?: boolean;

  /** The module is enabled (`true`) or disabled (`false`). */
  enabled?: boolean;

  /** The version of the ActiveGate module. */
  version?: string;

  /**
   * The type of ActiveGate module.
   * @example KUBERNETES
   */
  type?:
    | "AWS"
    | "AZURE"
    | "BEACON_FORWARDER"
    | "CLOUD_FOUNDRY"
    | "DB_INSIGHT"
    | "EXTENSIONS_V1"
    | "EXTENSIONS_V2"
    | "KUBERNETES"
    | "LOGS"
    | "MEMORY_DUMPS"
    | "METRIC_API"
    | "ONE_AGENT_ROUTING"
    | "OTLP_INGEST"
    | "REST_API"
    | "SYNTHETIC"
    | "VMWARE"
    | "Z_OS";

  /** The attributes of the ActiveGate module. */
  attributes?: Record<string, string>;
}

/**
 * A list of available versions of ActiveGate installer.
 */
export interface ActiveGateInstallerVersions {
  /** Available versions. */
  availableVersions?: string[];
}

/**
 * Configuration of a network zone.
 */
export interface NetworkZone {
  /** A list of alternative network zones. */
  alternativeZones?: string[];

  /**
   * The number of OneAgents that are using ActiveGates in the network zone.
   * @format int32
   */
  numOfOneAgentsUsing?: number;

  /**
   * The number of OneAgents that are configured to use the network zone as primary.
   * @format int32
   */
  numOfConfiguredOneAgents?: number;

  /**
   * The number of OneAgents from other network zones that are using ActiveGates in the network zone.
   *
   *  This is a fraction of **numOfOneAgentsUsing**.
   * One possible reason for switching to another zone is that a firewall is preventing a OneAgent from connecting to any ActiveGate in the preferred network zone.
   * @format int32
   */
  numOfOneAgentsFromOtherZones?: number;

  /**
   * The number of ActiveGates in the network zone.
   * @format int32
   */
  numOfConfiguredActiveGates?: number;

  /** The ID of the network zone */
  id?: string;

  /** A short description of the network zone */
  description?: string;
}

/**
 * A list of network zones.
 */
export interface NetworkZoneList {
  /** A list of network zones. */
  networkZones: NetworkZone[];
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

export interface UpdateToken {
  /** The token is revoked (`true`) or active (`false`). */
  revoked?: boolean;

  /** The name of the token. */
  name?: string;

  /**
   * The list of permissions assigned to the token.
   *
   * Apart from the new permissions, you need to submit the existing permissions you want to keep, too. Any existing permission, missing in the payload, is revoked.
   * * `DiagnosticExport`: DiagnosticExport.
   * * `ControlManagement`: ControlManagement.
   * * `UnattendedInstall`: UnattendedInstall.
   * * `ServiceProviderAPI`: Service Provider API.
   * * `ExternalSyntheticIntegration`: Create and read synthetic monitors, locations, and nodes.
   * * `ClusterTokenManagement`: Cluster token management.
   * * `ReadSyntheticData`: Read synthetic monitors, locations, and nodes.
   * * `Nodekeeper`: Nodekeeper access for node management.
   * * `EnvironmentTokenManagement`: "Token Management" Token creation for existing environments.
   * * `settings.read`: Read settings.
   * * `settings.write`: Write settings.
   * * `apiTokens.read`: Read API tokens.
   * * `apiTokens.write`: Write API tokens.
   */
  scopes?: (
    | "DiagnosticExport"
    | "ControlManagement"
    | "UnattendedInstall"
    | "ServiceProviderAPI"
    | "ExternalSyntheticIntegration"
    | "ClusterTokenManagement"
    | "ReadSyntheticData"
    | "Nodekeeper"
    | "EnvironmentTokenManagement"
    | "settings.read"
    | "settings.write"
    | "apiTokens.read"
    | "apiTokens.write"
  )[];
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
    | "ClusterTokenManagement"
    | "ControlManagement"
    | "DiagnosticExport"
    | "EnvironmentTokenManagement"
    | "ExternalSyntheticIntegration"
    | "Nodekeeper"
    | "ReadSyntheticData"
    | "ServiceProviderAPI"
    | "UnattendedInstall"
    | "apiTokens.read"
    | "apiTokens.write"
    | "settings.read"
    | "settings.write"
  )[];

  /** The token is a [personal access token](https://dt-url.net/wm03sop) (`true`) or an API token (`false`). */
  personalAccessToken?: boolean;
}

/**
 * An ordered list of short representations of Dynatrace entities.
 * @example {"values":[{"id":"6a98d7bc-abb9-44f8-ae6a-73e68e71812a","name":"Dynatrace entity 1","description":"Dynatrace entity 1 for the REST API example"},{"id":"ee70f7d3-9a4e-4f5f-94d2-c9d6156f1618","name":"Dynatrace entity 2"},{"id":"8cdabe77-9e1a-4be8-b3df-269dd6fa9d7f"}]}
 */
export interface StubList {
  /** An ordered list of short representations of Dynatrace entities. */
  values: EntityShortRepresentation[];
}

export interface CreateToken {
  /** The name of the token. */
  name: string;

  /** Defines a period of time. */
  expiresIn?: Duration;

  /**
   * The list of scopes to be assigned to the token.
   *
   * * `DiagnosticExport`: DiagnosticExport.
   * * `ControlManagement`: ControlManagement.
   * * `UnattendedInstall`: UnattendedInstall.
   * * `ServiceProviderAPI`: Service Provider API.
   * * `ExternalSyntheticIntegration`: Create and read synthetic monitors, locations, and nodes.
   * * `ClusterTokenManagement`: Cluster token management.
   * * `ReadSyntheticData`: Read synthetic monitors, locations, and nodes.
   * * `Nodekeeper`: Nodekeeper access for node management.
   * * `EnvironmentTokenManagement`: "Token Management" Token creation for existing environments.
   * * `settings.read`: Read settings.
   * * `settings.write`: Write settings.
   * * `apiTokens.read`: Read API tokens.
   * * `apiTokens.write`: Write API tokens.
   */
  scopes: (
    | "DiagnosticExport"
    | "ControlManagement"
    | "UnattendedInstall"
    | "ServiceProviderAPI"
    | "ExternalSyntheticIntegration"
    | "ClusterTokenManagement"
    | "ReadSyntheticData"
    | "Nodekeeper"
    | "EnvironmentTokenManagement"
    | "settings.read"
    | "settings.write"
    | "apiTokens.read"
    | "apiTokens.write"
  )[];
}

export interface ConditionConfiguration {
  name?: string;
  description?: string;
  operators?: string[];
}

export interface DynamicConditionConfiguration {
  prefix?: string;
  description?: string;
  operators?: string[];
}

export interface PermissionConfiguration {
  name?: string;
  description?: string;
  conditions?: ConditionConfiguration[];
  dynamicConditionPrefixes?: DynamicConditionConfiguration[];
}

export interface ServiceConfiguration {
  name?: string;
  description?: string;
  permissions?: PermissionConfiguration[];
  status?: "GENERAL_AVAILABILITY" | "IN_DEVELOPMENT";
}

export interface StatementConfiguration {
  services?: ServiceConfiguration[];
}

export interface PolicyUuids {
  policyUuids?: string[];
}

export interface ErrorMessage {
  error?: Error;
}

export interface LevelPolicyBinding {
  /** @format uuid */
  policyUuid: string;
  groups: string[];
}

export interface LevelPolicyBindingsList {
  levelType?: string;
  levelId?: string;
  policyBindings: LevelPolicyBinding[];
}

export interface AppendLevelPolicyBindingsRequest {
  groups: string[];
}

export interface CreateOrUpdateGroupBindings {
  policyUuids: string[];
}

export interface CreateLevelPolicyBindingsRequest {
  policyBindings: LevelPolicyBinding[];
}

export interface PolicyOverview {
  /** @format uuid */
  uuid?: string;
  name?: string;
  description?: string;
  levelType?: string;
  levelId?: string;
}

export interface PolicyOverviewList {
  policyOverviewList?: PolicyOverview[];
}

export interface LevelPoliciesBasicDataList {
  policies?: PolicyBasicData[];
}

export interface PolicyBasicData {
  /** @format uuid */
  uuid?: string;
  name?: string;
  description?: string;
}

export interface Condition {
  name: string;
  operator: "EQ" | "IN" | "NEQ" | "NOT_IN" | "NOT_STARTS_WITH" | "STARTS_WITH";
  values: string[];
}

export interface Policy {
  /** @format uuid */
  uuid?: string;
  name: string;
  description?: string;
  tags?: string[];
  statementQuery: string;
  statements: Statement[];
}

export interface Statement {
  effect: "ALLOW" | "DENY";
  permissions: string[];
  conditions?: Condition[];
}

export interface CreateOrUpdateLevelPolicyRequest {
  name?: string;
  description?: string;
  tags?: string[];
  statementQuery?: string;
}

export interface ValidationWarnings {
  warnings?: string[];
}

export interface Level {
  type?: string;
  id?: string;
  parentType: string;
  parentId: string;
  modifiedAt?: string;
}

export interface LevelList {
  levels?: Level[];
}

/**
 * A list of settings objects.
 */
export interface ObjectsList {
  /** A list of settings objects. */
  items?: SettingsObject[];

  /**
   * The cursor for the next page of results. Has the value of `null` on the last page.
   *
   * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
   * @example AQAAABQBAAAABQ==
   */
  nextPageKey?: string;

  /**
   * The number of entries per page.
   * @format int32
   */
  pageSize?: number;

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;
}

/**
 * A settings object.
 */
export interface SettingsObject {
  /**
   * The timestamp of the last modification.
   * @format int64
   */
  modified?: number;

  /**
   * The version of the schema on which the object is based.
   * @example 1.0.0
   */
  schemaVersion?: string;

  /**
   * The update token of the object. You can use it to detect simultaneous modifications by different users.
   *
   * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
   * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
   * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
   */
  updateToken?: string;

  /**
   * The user (identified by a user ID or a public token ID) who performed that most recent modification.
   * @example john.doe@example.com
   */
  author?: string;

  /**
   * The schema on which the object is based.
   * @example builtin:anomaly.infrastructure
   */
  schemaId?: string;

  /**
   * The value of the setting.
   *
   *  It defines the actual values of settings' parameters.
   * The actual content depends on the object's schema.
   */
  value?: SettingsValue;

  /**
   * The scope that the object targets.
   * @example HOST-D3A3C5A146830A79
   */
  scope?: string;

  /**
   * The ID of the settings object.
   * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
   */
  objectId?: string;

  /** A short summary of settings. */
  summary?: string;

  /**
   * The timestamp of the creation.
   * @format int64
   */
  created?: number;
}

/**
* The value of the setting. 

 It defines the actual values of settings' parameters. 

The actual content depends on the object's schema.
* @example {"autoMonitoring":true}
*/
export type SettingsValue = object;

/**
 * The response to a creation- or update-request.
 */
export interface SettingsObjectResponse {
  /**
   * The value of the setting.
   *
   *  It defines the actual values of settings' parameters.
   * The actual content depends on the object's schema.
   */
  invalidValue?: SettingsValue;

  /**
   * For a successful request, the ID of the created or modified settings object.
   * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
   */
  objectId?: string;

  /**
   * The HTTP status code for the object.
   * @format int32
   */
  code?: number;
  error?: Error;
}

/**
 * Configuration of a new settings object.
 */
export interface SettingsObjectCreate {
  /**
   * The version of the schema on which the object is based.
   * @example 1.0.0
   */
  schemaVersion?: string;

  /**
   * The position of the new object. The new object will be added after the specified one.
   *
   * If `null`, the new object will be placed in the last position.
   * If set to empty string, the new object will be placed in the first position.
   * Only applicable for objects based on schemas with ordered objects (schema's **ordered** parameter is set to `true`).
   * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
   */
  insertAfter?: string;

  /**
   * The schema on which the object is based.
   * @example builtin:anomaly.infrastructure
   */
  schemaId: string;

  /**
   * The value of the setting.
   *
   *  It defines the actual values of settings' parameters.
   * The actual content depends on the object's schema.
   */
  value: SettingsValue;

  /**
   * The scope that the object targets.
   * @example HOST-D3A3C5A146830A79
   */
  scope: string;
}

/**
 * An update of a settings object.
 */
export interface SettingsObjectUpdate {
  /**
   * The version of the schema on which the object is based.
   * @example 1.0.0
   */
  schemaVersion?: string;

  /**
   * The update token of the object. You can use it to detect simultaneous modifications by different users.
   *
   * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
   * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
   * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
   */
  updateToken?: string;

  /**
   * The value of the setting.
   *
   *  It defines the actual values of settings' parameters.
   * The actual content depends on the object's schema.
   */
  value: SettingsValue;
}

/**
 * The list of available settings schemas.
 */
export interface SchemaList {
  /** A list of settings schemas. */
  items?: SchemaStub[];

  /**
   * The number of schemas in the list.
   * @format int64
   * @example 1
   */
  totalCount?: number;
}

/**
 * The short representation of the settings schema.
 */
export interface SchemaStub {
  /**
   * The most recent version of the schema.
   * @example 1.4.2
   */
  latestSchemaVersion?: string;

  /**
   * The ID of the schema.
   * @example builtin:anomaly.infrastructure
   */
  schemaId?: string;

  /**
   * The name of the schema.
   * @example Anomaly Detection for Infrastructure
   */
  displayName?: string;
}

/**
 * A constraint on the values accepted for a complex settings property.
 */
export interface ComplexConstraint {
  /** A custom message for invalid values. */
  customMessage?: string;

  /**
   * The maximum number of properties that can be set.
   * @format int32
   * @example 2
   */
  maximumPropertyCount?: number;

  /**
   * The ID of a custom validator.
   * @example my-min-max
   */
  customValidatorId?: string;

  /**
   * The minimum number of properties that must be set.
   * @format int32
   * @example 1
   */
  minimumPropertyCount?: number;

  /** A list of properties (defined by IDs) that are used to check the constraint. */
  properties?: string[];

  /** The type of the constraint. */
  type?:
    | "CUSTOM_VALIDATOR_REF"
    | "GREATER_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | "LESS_THAN"
    | "LESS_THAN_OR_EQUAL"
    | "PROPERTY_COUNT_RANGE"
    | "UNKNOWN";
}

/**
 * A constraint on the values accepted for a settings property.
 */
export interface Constraint {
  /**
   * A custom message for invalid values.
   * @example customConstraintMessage
   */
  customMessage?: string;

  /**
   * The maximum allowed length of string values.
   * @format int32
   * @example 20
   */
  maxLength?: number;

  /**
   * The minimum required length of string values.
   * @format int32
   * @example 7
   */
  minLength?: number;

  /**
   * A list of properties for which the combination of values must be unique.
   * @example ["my-prop-1","my-prop-2"]
   */
  uniqueProperties?: string[];

  /**
   * The ID of a custom validator.
   * @example my-min-max
   */
  customValidatorId?: string;

  /**
   * The maximum allowed value.
   * @example 200
   */
  maximum?: number;

  /**
   * The minimum allowed value.
   * @example 3
   */
  minimum?: number;

  /**
   * The type of the constraint.
   * @example UNKNOWN
   */
  type?:
    | "CUSTOM_VALIDATOR_REF"
    | "LENGTH"
    | "NOT_BLANK"
    | "NOT_EMPTY"
    | "NO_WHITESPACE"
    | "PATTERN"
    | "RANGE"
    | "REGEX"
    | "TRIMMED"
    | "UNIQUE"
    | "UNKNOWN";

  /**
   * The regular expression pattern for valid string values.
   * @example ^([a-z]|[0-9]|\-|\_|\+|\.)+\@([a-z]|[0-9]|-){2,}\.([a-z]|[0-9]|-){2,}(\.[a-z]{2,})?$
   */
  pattern?: string;
}

/**
 * Configuration of a datasource for a property.
 */
export interface DatasourceDefinition {
  /** Whether to validate input to only allow values returned by the datasource. */
  validate?: boolean;

  /** The properties to filter the datasource options on. */
  filterProperties?: string[];

  /** Whether this datasource expects full setting payload as the context. */
  fullContext?: boolean;

  /** If true, the datasource should use the api to filter the results instead of client-side filtering. */
  useApiSearch?: boolean;

  /** The identifier of a custom data source of the property's value. */
  identifier?: string;
}

/**
 * Definition of an enum property.
 */
export interface EnumType {
  /**
   * An existing Java enum class that holds the allowed values of the enum.
   * @example enumClass
   */
  enumClass?: string;

  /** A list of allowed values of the enum. */
  items?: EnumValue[];

  /**
   * The type of the property.
   * @example enum
   */
  type?: "enum";

  /**
   * An extended description and/or links to documentation.
   * @example typeDocumentation
   */
  documentation?: string;

  /**
   * The display name of the property.
   * @example typeDisplayName
   */
  displayName?: string;

  /**
   * A short description of the property.
   * @example typeDescription
   */
  description?: string;
}

/**
 * An allowed value for an enum property.
 */
export interface EnumValue {
  /**
   * The name of the value in an existing Java enum class.
   * @example exampleJavaEnumValue
   */
  enumInstance?: string;

  /**
   * The icon of the value.
   * @example checkmark
   */
  icon?: string;

  /**
   * The allowed value of the enum.
   * @example exampleValue
   */
  value?: object;

  /**
   * The display name of the value.
   * @example exampleDisplayName
   */
  displayName?: string;

  /**
   * A short description of the value.
   * @example exampleDescription
   */
  description?: string;
}

/**
 * An item of a collection property.
 */
export interface Item {
  /**
   * The type referenced by the item's value.
   * @example itemReferencedType
   */
  referencedType?: string;

  /**
   * An extended description and/or links to documentation.
   * @example propertyDocumentation
   */
  documentation?: string;

  /** Configuration of a datasource for a property. */
  datasource?: DatasourceDefinition;

  /** A list of constraints limiting the values to be accepted. */
  constraints?: Constraint[];

  /** The type of the item's value. */
  type?: object;

  /**
   * The display name of the item.
   * @example itemDisplayName
   */
  displayName?: string;

  /**
   * A short description of the item.
   * @example itemDescription
   */
  description?: string;

  /**
   * The subtype of the item's value.
   * @example itemSubType
   */
  subType?: string;
}

/**
 * A precondition for visibility of a property.
 */
export interface Precondition {
  /**
   * A list of valid values of the property.
   *
   * Only applicable to properties of the `IN` type.
   * @example expectedValues
   */
  expectedValues?: object[];

  /**
   * A list of child preconditions to be evaluated.
   *
   * Only applicable to properties of the `AND` and `OR` types.
   */
  preconditions?: Precondition[];

  /**
   * The expected value of the property.
   *
   * Only applicable to properties of the `EQUALS` type.
   * @example expectedValue
   */
  expectedValue?: object;

  /** A precondition for visibility of a property. */
  precondition?: Precondition;

  /**
   * The property to be evaluated.
   * @example propertyToEvaluate
   */
  property?: string;

  /**
   * The type of the precondition.
   * @example NULL
   */
  type?: "AND" | "EQUALS" | "IN" | "NOT" | "NULL" | "OR";
}

/**
 * Configuration of a property in a settings schema.
 */
export interface PropertyDefinition {
  /**
   * The type referenced by the property value
   * @example propertyReferencedType
   */
  referencedType?: string;

  /** An item of a collection property. */
  items?: Item;

  /**
   * An extended description and/or links to documentation.
   * @example propertyDocumentation
   */
  documentation?: string;

  /**
   * The maximum number of **objects** in a collection property.
   *
   *  Has the value of `1` for singletons.
   * @format int32
   */
  maxObjects?: number;

  /** A precondition for visibility of a property. */
  precondition?: Precondition;

  /**
   * The minimum number of **objects** in a collection property.
   * @format int32
   * @example 1
   */
  minObjects?: number;

  /** Configuration of a datasource for a property. */
  datasource?: DatasourceDefinition;

  /** A list of constraints limiting the values to be accepted. */
  constraints?: Constraint[];

  /**
   * The default value to be used when no value is provided.
   *
   * If a non-singleton has the value of `null`, it means an empty collection.
   * @example propertyDefaultValue
   */
  default?: object;

  /** The type of the property's value. */
  type?: object;

  /**
   * The display name of the property.
   * @example propertyDisplayName
   */
  displayName?: string;

  /**
   * A short description of the property.
   * @example propertyDescription
   */
  description?: string;

  /** Metadata of the property. */
  metadata?: Record<string, string>;

  /**
   * The subtype of the property's value.
   * @example propertySubType
   */
  subType?: string;

  /**
   * The value can (`true`) or can't (`false`) be `null`.
   * @example true
   */
  nullable?: boolean;
}

export interface SchemaDefinitionRestDto {
  /**
   * The version of the data format.
   * @example 1
   */
  dynatrace?: string;

  /**
   * The ID of the schema.
   * @example builtin:anomaly.infrastructure
   */
  schemaId?: string;

  /**
   * The display name of the schema.
   * @example Anomaly detection for infrastructure
   */
  displayName?: string;

  /**
   * A short description of the schema.
   * @example Dynatrace automatically detects infrastructure-related performance anomalies such as high CPU saturation, memory outages, and low disk-space conditions
   */
  description?: string;

  /** An extended description of the schema and/or links to documentation. */
  documentation?: string;

  /**
   * Names of the groups, which the schema belongs to.
   * @example ["group:some.1","group:some.2"]
   */
  schemaGroups?: string[];

  /**
   * The version of the schema.
   * @example 1.4.2
   */
  version?: string;

  /** Multiple (`true`) objects per scope are permitted or a single (`false`) object per scope is permitted. */
  multiObject?: boolean;

  /**
   * If `true` the order of objects has semantic significance.
   *
   * Only applicable when **multiObject** is set to `true`.
   */
  ordered?: boolean;

  /**
   * The maximum amount of objects per scope.
   *
   * Only applicable when **multiObject** is set to `true`.
   * @format int32
   * @example 10
   */
  maxObjects?: number;

  /**
   * A list of scopes where the schema can be used.
   * @example ["host","application"]
   */
  allowedScopes?: string[];

  /** A list of definitions of enum properties. */
  enums?: Record<string, EnumType>;

  /**
   * A list of definitions of types.
   *
   *  A type is a complex property that contains its own set of subproperties.
   */
  types?: Record<string, SchemaType>;

  /** A list of schema's properties. */
  properties?: Record<string, PropertyDefinition>;

  /** A list of constrains limiting the values to be accepted by the schema. */
  constraints?: ComplexConstraint[];

  /** Metadata of the setting. */
  metadata?: Record<string, string>;
}

/**
* A list of definitions of types. 

 A type is a complex property that contains its own set of subproperties.
*/
export interface SchemaType {
  /**
   * The pattern for the summary (for example, "Alert after *X* minutes.") of the configuration in the UI.
   * @example summaryPatternOfType
   */
  summaryPattern?: string;

  /** A list of constraints limiting the values to be accepted. */
  constraints?: ComplexConstraint[];

  /**
   * The version of the type.
   * @example 0
   */
  version?: string;

  /**
   * A short description of the version.
   * @example Added new property
   */
  versionInfo?: string;

  /** Definition of properties that can be persisted. */
  properties?: Record<string, PropertyDefinition>;

  /**
   * An extended description and/or links to documentation.
   * @example typeDocumentation
   */
  documentation?: string;

  /**
   * The display name of the property.
   * @example typeDisplayName
   */
  displayName?: string;

  /**
   * A short description of the property.
   * @example typeDescription
   */
  description?: string;
}

/**
 * A DTO for synthetic Location IDs.
 */
export interface SyntheticLocationIdsDto {
  /** Entity ID to be transferred */
  entityId: string;

  /** GeoLocation ID to be transferred */
  geoLocationId: string;
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

  /** The Dynatrace GeoLocation ID of the location. */
  geoLocationId: string;
}

/**
 * A list of synthetic locations.
 * @example {"locations":[{"name":"Gdansk","entityId":"SYNTHETIC_LOCATION-53F47ECB33907667","geoLocationId":"GEOLOCATION-95196F3C9A4F4215","type":"PUBLIC","cloudPlatform":"AMAZON_EC2","ips":["134.189.153.97","134.189.153.98"],"stage":"GA","status":"ENABLED","capabilities":["BROWSER","HTTP"]},{"name":"My private location","entityId":"SYNTHETIC_LOCATION-53F47ECB33907667","geoLocationId":"GEOLOCATION-95196F3C9A4F4215","type":"PRIVATE","status":"ENABLED"}]}
 */
export interface SyntheticLocations {
  /** A list of synthetic locations. */
  locations: LocationCollectionElement[];
}

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

 The actual set of fields depends on the **type** of the location.
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
export class Api extends APIBase {
  license = {
    /**
     * No description
     *
     * @tags License
     * @name GetBillingHour
     * @summary Retrieve license consumption
     * @request GET:/license/consumption/hour
     */
    getBillingHour: (query?: { startTs?: number }, params: RequestParams = {}) =>
      this.request<BillingRequestDto, void>({
        path: `/license/consumption/hour`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Export license consumption data as a ZIP archive.
     *
     * @tags License
     * @name GetBillingArchive
     * @summary Export license consumption data
     * @request GET:/license/consumption
     */
    getBillingArchive: (query?: { startTs?: number; endTs?: number }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/license/consumption`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  environments = {
    /**
     * No description
     *
     * @tags Environments
     * @name GetSingleEnvironment
     * @summary Gets the properties of the specified environment.
     * @request GET:/environments/{id}
     */
    getSingleEnvironment: (
      id: string,
      query?: {
        includeConsumptionInfo?: boolean;
        includeStorageInfo?: boolean;
        includeUncachedConsumptionInfo?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Environment, any>({
        path: `/environments/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description If the environment with the specified ID does not exist, a new environment will be created.
     *
     * @tags Environments
     * @name CreateOrUpdateEnvironment
     * @summary Updates an existing environment or creates a new one.
     * @request PUT:/environments/{id}
     */
    createOrUpdateEnvironment: (
      id: string,
      data: Environment,
      query?: { createToken?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<EnvironmentShortRepresentation, void>({
        path: `/environments/${id}`,
        method: "PUT",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Environments
     * @name DeleteEnvironment
     * @summary Deletes the specified environment. An environment must be disabled before it can be deleted.
     * @request DELETE:/environments/{id}
     */
    deleteEnvironment: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/environments/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description The newly created token is owned by the same user who owns the token used for authentication of creation call. It has the scopes 'apiTokens.read' and 'apiTokens.write' (for usage with token API v2) and 'TenantTokenManagement' (for usage with token API v1).
     *
     * @tags Environments
     * @name CreateTokenManagementToken
     * @summary Creates a new tenant management token for an environment.
     * @request POST:/environments/{id}/tokenManagementToken
     */
    createTokenManagementToken: (id: string, data: CreateEnvironmentTokenManagementToken, params: RequestParams = {}) =>
      this.request<Token, ErrorEnvelope>({
        path: `/environments/${id}/tokenManagementToken`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Environments
     * @name GetAllEnvironments
     * @summary Lists all existing environments.
     * @request GET:/environments
     */
    getAllEnvironments: (
      query?: {
        nextPageKey?: string;
        pageSize?: number;
        sort?: string;
        filter?: string;
        includeConsumptionInfo?: boolean;
        includeStorageInfo?: boolean;
        includeUncachedConsumptionInfo?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<EnvironmentList, any>({
        path: `/environments`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Environments
     * @name CreateEnvironment
     * @summary Creates a new environment.
     * @request POST:/environments
     */
    createEnvironment: (data: Environment, query?: { createToken?: boolean }, params: RequestParams = {}) =>
      this.request<EnvironmentShortRepresentation, void>({
        path: `/environments`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),
  };
  remoteaccess = {
    /**
     * No description
     *
     * @tags Remote access
     * @name AccessRequestChangeState
     * @summary Change state of access request
     * @request PUT:/remoteaccess/requests/{requestId}/state
     */
    accessRequestChangeState: (requestId: string, data: AccessRequestStateData, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/remoteaccess/requests/${requestId}/state`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remote access
     * @name GetAllAccessRequests
     * @summary Get all access requests
     * @request GET:/remoteaccess/requests
     */
    getAllAccessRequests: (params: RequestParams = {}) =>
      this.request<AccessRequestData[], void>({
        path: `/remoteaccess/requests`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remote access
     * @name AddAccessRequest
     * @summary Grant remote access permission
     * @request POST:/remoteaccess/requests
     */
    addAccessRequest: (data: CreateAccessRequestDto, params: RequestParams = {}) =>
      this.request<AccessRequestData, void>({
        path: `/remoteaccess/requests`,
        method: "POST",
        body: data,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remote access
     * @name GetAccessRequest
     * @summary Get access request
     * @request GET:/remoteaccess/requests/{requestId}
     */
    getAccessRequest: (requestId: string, params: RequestParams = {}) =>
      this.request<AccessRequestData, void>({
        path: `/remoteaccess/requests/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  clusterConfig = {
    /**
     * No description
     *
     * @tags User management
     * @name GetConcurrentSessionPolicyConfig
     * @summary Get user sessions configuration
     * @request GET:/clusterConfig/userSessions
     */
    getConcurrentSessionPolicyConfig: (params: RequestParams = {}) =>
      this.request<UserSessionsConfig, any>({
        path: `/clusterConfig/userSessions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User management
     * @name UpdateConcurrentSessionPolicyConfig
     * @summary Update user sessions configuration
     * @request PUT:/clusterConfig/userSessions
     */
    updateConcurrentSessionPolicyConfig: (data: UserSessionsConfig, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/clusterConfig/userSessions`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  userSessions = {
    /**
     * No description
     *
     * @tags User management
     * @name GetUserSessions
     * @summary Get user sessions
     * @request GET:/userSessions
     */
    getUserSessions: (query?: { userId?: string }, params: RequestParams = {}) =>
      this.request<UserSession[], void>({
        path: `/userSessions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User management
     * @name RemoveUserSession
     * @summary Remove user sessions for a given user
     * @request DELETE:/userSessions
     */
    removeUserSession: (query?: { userId?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/userSessions`,
        method: "DELETE",
        query: query,
        ...params,
      }),
  };
  activeGates = {
    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name GetAutoUpdateConfigById
     * @summary Gets the configuration of auto-update for the specified ActiveGate
     * @request GET:/activeGates/{agId}/autoUpdate
     */
    getAutoUpdateConfigById: (agId: string, params: RequestParams = {}) =>
      this.request<ActiveGateAutoUpdateConfig, ErrorEnvelope>({
        path: `/activeGates/${agId}/autoUpdate`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name PutAutoUpdateConfigById
     * @summary Updates the configuration of auto-update for the specified ActiveGate
     * @request PUT:/activeGates/{agId}/autoUpdate
     */
    putAutoUpdateConfigById: (agId: string, data: ActiveGateAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/${agId}/autoUpdate`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name ValidateAutoUpdateConfigById
     * @summary Validates the payload for the `POST /activeGates/{agId}/autoUpdate` request.
     * @request POST:/activeGates/{agId}/autoUpdate/validator
     */
    validateAutoUpdateConfigById: (agId: string, data: ActiveGateAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/${agId}/autoUpdate/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name GetClusterGlobalAutoUpdateConfig
     * @summary Gets the global auto-update configuration of cluster ActiveGates.
     * @request GET:/activeGates/autoUpdate
     */
    getClusterGlobalAutoUpdateConfig: (params: RequestParams = {}) =>
      this.request<ActiveGateGlobalAutoUpdateConfig, any>({
        path: `/activeGates/autoUpdate`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name PutClusterGlobalAutoUpdateConfig
     * @summary Puts the global auto-update configuration of cluster ActiveGates.
     * @request PUT:/activeGates/autoUpdate
     */
    putClusterGlobalAutoUpdateConfig: (data: ActiveGateGlobalAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/autoUpdate`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name ValidateClusterGlobalAutoUpdateConfig
     * @summary Validates the payload for the `POST /activeGates/autoUpdate` request.
     * @request POST:/activeGates/autoUpdate/validator
     */
    validateClusterGlobalAutoUpdateConfig: (data: ActiveGateGlobalAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/autoUpdate/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name GetGlobalAutoUpdateConfigForTenant
     * @summary Gets the global auto-update configuration of environment ActiveGates.
     * @request GET:/activeGates/autoUpdate/{envId}
     */
    getGlobalAutoUpdateConfigForTenant: (envId: string, params: RequestParams = {}) =>
      this.request<ActiveGateGlobalAutoUpdateConfig, ErrorEnvelope>({
        path: `/activeGates/autoUpdate/${envId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name PutGlobalAutoUpdateConfigForTenant
     * @summary Puts the global auto-update configuration of environment ActiveGates.
     * @request PUT:/activeGates/autoUpdate/{envId}
     */
    putGlobalAutoUpdateConfigForTenant: (
      envId: string,
      data: ActiveGateGlobalAutoUpdateConfig,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/autoUpdate/${envId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name ValidateGlobalAutoUpdateConfigForTenant
     * @summary Validates the payload for the `POST /activeGates/autoUpdate/{envId}` request.
     * @request POST:/activeGates/autoUpdate/{envId}/validator
     */
    validateGlobalAutoUpdateConfigForTenant: (
      envId: string,
      data: ActiveGateGlobalAutoUpdateConfig,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/autoUpdate/${envId}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The response includes ActiveGates that have both completed (successful and failed) jobs and jobs in progress.
     *
     * @tags ActiveGates - Auto-update jobs
     * @name GetAllUpdateJobList
     * @summary List ActiveGates with update jobs
     * @request GET:/activeGates/updateJobs
     */
    getAllUpdateJobList: (
      query?: {
        from?: string;
        to?: string;
        startVersionCompareType?: "EQUAL" | "GREATER" | "GREATER_EQUAL" | "LOWER" | "LOWER_EQUAL";
        startVersion?: string;
        updateType?: "ACTIVE_GATE" | "REMOTE_PLUGIN_AGENT" | "SYNTHETIC" | "Z_REMOTE";
        targetVersionCompareType?: "EQUAL" | "GREATER" | "GREATER_EQUAL" | "LOWER" | "LOWER_EQUAL";
        targetVersion?: string;
        lastUpdates?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UpdateJobsAll, ErrorEnvelope>({
        path: `/activeGates/updateJobs`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The job can update the ActiveGate to the specified version or the latest available one.
     *
     * @tags ActiveGates - Auto-update jobs
     * @name GetUpdateJobListByAgId
     * @summary Lists update jobs for the specified ActiveGate
     * @request GET:/activeGates/{agId}/updateJobs
     */
    getUpdateJobListByAgId: (
      agId: string,
      query?: {
        from?: string;
        to?: string;
        startVersionCompareType?: "EQUAL" | "GREATER" | "GREATER_EQUAL" | "LOWER" | "LOWER_EQUAL";
        startVersion?: string;
        updateType?: "ACTIVE_GATE" | "REMOTE_PLUGIN_AGENT" | "SYNTHETIC" | "Z_REMOTE";
        targetVersionCompareType?: "EQUAL" | "GREATER" | "GREATER_EQUAL" | "LOWER" | "LOWER_EQUAL";
        targetVersion?: string;
        lastUpdates?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<UpdateJobList, ErrorEnvelope>({
        path: `/activeGates/${agId}/updateJobs`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update jobs
     * @name CreateUpdateJobForAg
     * @summary Creates a new update job for the specified ActiveGate
     * @request POST:/activeGates/{agId}/updateJobs
     */
    createUpdateJobForAg: (agId: string, data: UpdateJob, params: RequestParams = {}) =>
      this.request<UpdateJob, ErrorEnvelope>({
        path: `/activeGates/${agId}/updateJobs`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update jobs
     * @name GetUpdateJobByJobIdForAg
     * @summary Gets the parameters of the specified update job
     * @request GET:/activeGates/{agId}/updateJobs/{jobId}
     */
    getUpdateJobByJobIdForAg: (agId: string, jobId: string, params: RequestParams = {}) =>
      this.request<UpdateJob, ErrorEnvelope>({
        path: `/activeGates/${agId}/updateJobs/${jobId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update jobs
     * @name DeleteUpdateJobByJobIdForAg
     * @summary Deletes the specified update job
     * @request DELETE:/activeGates/{agId}/updateJobs/{jobId}
     */
    deleteUpdateJobByJobIdForAg: (agId: string, jobId: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/${agId}/updateJobs/${jobId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update jobs
     * @name ValidateUpdateJobForAg
     * @summary Validates the payload for the `POST /activeGates/{agId}/updateJobs` request.
     * @request POST:/activeGates/{agId}/updateJobs/validator
     */
    validateUpdateJobForAg: (agId: string, data: UpdateJob, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/${agId}/updateJobs/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The response includes all ActiveGates that are currently connected to the environment or have been connected during last 2 hours.
     *
     * @tags ActiveGates
     * @name GetAllActiveGates
     * @summary Lists all available ActiveGates
     * @request GET:/activeGates
     */
    getAllActiveGates: (
      query?: {
        hostname?: string;
        osType?: "LINUX" | "WINDOWS";
        networkAddress?: string;
        loadBalancerAddress?: string;
        type?: "ENVIRONMENT" | "ENVIRONMENT_MULTI" | "CLUSTER";
        networkZone?: string;
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
        versionCompareType?: "EQUAL" | "GREATER" | "GREATER_EQUAL" | "LOWER" | "LOWER_EQUAL";
        version?: string;
        autoUpdate?: "DISABLED" | "ENABLED";
        group?: string;
        online?: boolean;
        enabledModule?: (
          | "AWS"
          | "AZURE"
          | "BEACON_FORWARDER"
          | "CLOUD_FOUNDRY"
          | "DB_INSIGHT"
          | "EXTENSIONS_V1"
          | "EXTENSIONS_V2"
          | "KUBERNETES"
          | "LOGS"
          | "MEMORY_DUMPS"
          | "METRIC_API"
          | "ONE_AGENT_ROUTING"
          | "OTLP_INGEST"
          | "REST_API"
          | "SYNTHETIC"
          | "VMWARE"
          | "Z_OS"
        )[];
        disabledModule?: (
          | "AWS"
          | "AZURE"
          | "BEACON_FORWARDER"
          | "CLOUD_FOUNDRY"
          | "DB_INSIGHT"
          | "EXTENSIONS_V1"
          | "EXTENSIONS_V2"
          | "KUBERNETES"
          | "LOGS"
          | "MEMORY_DUMPS"
          | "METRIC_API"
          | "ONE_AGENT_ROUTING"
          | "OTLP_INGEST"
          | "REST_API"
          | "SYNTHETIC"
          | "VMWARE"
          | "Z_OS"
        )[];
        containerized?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ActiveGateList, ErrorEnvelope>({
        path: `/activeGates`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates
     * @name GetOneActiveGateById
     * @summary Gets the details of the specified ActiveGate
     * @request GET:/activeGates/{agId}
     */
    getOneActiveGateById: (agId: string, params: RequestParams = {}) =>
      this.request<ActiveGate, ErrorEnvelope>({
        path: `/activeGates/${agId}`,
        method: "GET",
        ...params,
      }),
  };
  deployment = {
    /**
     * No description
     *
     * @tags Deployment
     * @name GetActiveGateInstallerAvailableVersions
     * @summary Lists all available versions of ActiveGate installer
     * @request GET:/deployment/installer/gateway/versions/{osType}
     */
    getActiveGateInstallerAvailableVersions: (osType: "windows" | "unix", params: RequestParams = {}) =>
      this.request<ActiveGateInstallerVersions, ErrorEnvelope>({
        path: `/deployment/installer/gateway/versions/${osType}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  networkZones = {
    /**
     * No description
     *
     * @tags Network zones
     * @name GetAllNetworkZones
     * @summary Lists all existing network zones | maturity=EARLY_ADOPTER
     * @request GET:/networkZones
     */
    getAllNetworkZones: (params: RequestParams = {}) =>
      this.request<NetworkZoneList, any>({
        path: `/networkZones`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Network zones
     * @name GetSingleNetworkZone
     * @summary Gets parameters of the specified network zone | maturity=EARLY_ADOPTER
     * @request GET:/networkZones/{id}
     */
    getSingleNetworkZone: (id: string, params: RequestParams = {}) =>
      this.request<NetworkZone, any>({
        path: `/networkZones/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the network zone with the specified ID does not exist, a new network zone is created. The ID is not case sensitive. Dynatrace stores the ID in lowercase.
     *
     * @tags Network zones
     * @name CreateOrUpdateNetworkZone
     * @summary Updates an existing network zone or creates a new one | maturity=EARLY_ADOPTER
     * @request PUT:/networkZones/{id}
     */
    createOrUpdateNetworkZone: (id: string, data: NetworkZone, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/networkZones/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description You can only delete an empty network zone (a zone that no ActiveGate or OneAgent is using). If the network zone is used as an alternative zone for any OneAgent, it will be automatically removed from the list of possible alternatives.
     *
     * @tags Network zones
     * @name DeleteNetworkZone
     * @summary Deletes the specified network zone | maturity=EARLY_ADOPTER
     * @request DELETE:/networkZones/{id}
     */
    deleteNetworkZone: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/networkZones/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  tokens = {
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
          | "ClusterTokenManagement"
          | "ControlManagement"
          | "DiagnosticExport"
          | "EnvironmentTokenManagement"
          | "ExternalSyntheticIntegration"
          | "Nodekeeper"
          | "ReadSyntheticData"
          | "ServiceProviderAPI"
          | "UnattendedInstall"
          | "apiTokens.read"
          | "apiTokens.write"
          | "settings.read"
          | "settings.write"
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
  };
  iam = {
    /**
     * No description
     *
     * @tags IAM - configuration resource
     * @name GetPolicyStatementConfiguration
     * @summary Gets configuration for policy statements. Available values for services, permissions, conditions and operators
     * @request GET:/iam/configuration/policystatements
     */
    getPolicyStatementConfiguration: (
      query?: { statuses?: ("GENERAL_AVAILABILITY" | "IN_DEVELOPMENT")[] },
      params: RequestParams = {},
    ) =>
      this.request<StatementConfiguration, any>({
        path: `/iam/configuration/policystatements`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies bindings
     * @name GetPolicyUuids
     * @summary Get policy UUIDs for a given level by level ID and group
     * @request GET:/iam/repo/{level-type}/{level-id}/bindings/groups/{group-uuid}
     */
    getPolicyUuids: (levelType: string, levelId: string, groupUuid: string, params: RequestParams = {}) =>
      this.request<PolicyUuids, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/bindings/groups/${groupUuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies bindings
     * @name Replace
     * @summary Create or update policy bindings within a level for a group
     * @request PUT:/iam/repo/{level-type}/{level-id}/bindings/groups/{group-uuid}
     */
    replace: (
      levelType: string,
      levelId: string,
      groupUuid: string,
      data: CreateOrUpdateGroupBindings,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/bindings/groups/${groupUuid}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies bindings
     * @name GetAll
     * @summary Get policy bindings for a level
     * @request GET:/iam/repo/{level-type}/{level-id}/bindings
     */
    getAll: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<LevelPolicyBindingsList, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/bindings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies bindings
     * @name Replace1
     * @summary Update policy bindings within a level
     * @request PUT:/iam/repo/{level-type}/{level-id}/bindings
     */
    replace1: (
      levelType: string,
      levelId: string,
      data: CreateLevelPolicyBindingsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/bindings`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies bindings
     * @name Delete2
     * @summary Delete all policy bindings from a level
     * @request DELETE:/iam/repo/{level-type}/{level-id}/bindings
     */
    delete2: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/bindings`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies bindings
     * @name Append
     * @summary Append policy bindings within a level
     * @request POST:/iam/repo/{level-type}/{level-id}/bindings/{policy-uuid}
     */
    append: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      data: AppendLevelPolicyBindingsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/bindings/${policyUuid}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies bindings
     * @name Delete1
     * @summary Delete all policy bindings within a level
     * @request DELETE:/iam/repo/{level-type}/{level-id}/bindings/{policy-uuid}
     */
    delete1: (levelType: string, levelId: string, policyUuid: string, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/bindings/${policyUuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies bindings
     * @name Delete
     * @summary Delete a policy binding from a group within a level
     * @request DELETE:/iam/repo/{level-type}/{level-id}/bindings/{policy-uuid}/{group-uuid}
     */
    delete: (levelType: string, levelId: string, policyUuid: string, groupUuid: string, params: RequestParams = {}) =>
      this.request<void, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/bindings/${policyUuid}/${groupUuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies management
     * @name GetPolicyOverviewList
     * @summary Get overview of all policies for a given level, descendant and ancestor levels
     * @request GET:/iam/repo/{level-type}/{level-id}/policies/aggregate
     */
    getPolicyOverviewList: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<PolicyOverviewList, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/policies/aggregate`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies management
     * @name GetAll1
     * @summary Get all policies for a level
     * @request GET:/iam/repo/{level-type}/{level-id}/policies
     */
    getAll1: (levelType: string, levelId: string, query?: { name?: string }, params: RequestParams = {}) =>
      this.request<LevelPoliciesBasicDataList, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/policies`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies management
     * @name Create
     * @summary Create a policy within a level
     * @request POST:/iam/repo/{level-type}/{level-id}/policies
     */
    create: (levelType: string, levelId: string, data: CreateOrUpdateLevelPolicyRequest, params: RequestParams = {}) =>
      this.request<Policy, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/policies`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies management
     * @name Get
     * @summary Get a policy within a level
     * @request GET:/iam/repo/{level-type}/{level-id}/policies/{uuid}
     */
    get: (levelType: string, levelId: string, uuid: string, params: RequestParams = {}) =>
      this.request<Policy, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/policies/${uuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies management
     * @name Put
     * @summary Update or create a new policy within a level
     * @request PUT:/iam/repo/{level-type}/{level-id}/policies/{uuid}
     */
    put: (
      levelType: string,
      levelId: string,
      uuid: string,
      data: CreateOrUpdateLevelPolicyRequest,
      params: RequestParams = {},
    ) =>
      this.request<Policy, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/policies/${uuid}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies management
     * @name Delete3
     * @summary Delete a policy from a level
     * @request DELETE:/iam/repo/{level-type}/{level-id}/policies/{uuid}
     */
    delete3: (
      levelType: string,
      levelId: string,
      uuid: string,
      query?: { force?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/policies/${uuid}`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies management
     * @name Validate
     * @summary Validates policy before creation or update
     * @request POST:/iam/repo/{level-type}/{level-id}/policies/validation
     */
    validate: (
      levelType: string,
      levelId: string,
      data: CreateOrUpdateLevelPolicyRequest,
      params: RequestParams = {},
    ) =>
      this.request<ValidationWarnings, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/policies/validation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - policies management
     * @name Validate1
     * @summary Validates policy before creation or update
     * @request POST:/iam/repo/{level-type}/{level-id}/policies/validation/{policy-uuid}
     */
    validate1: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      data: CreateOrUpdateLevelPolicyRequest,
      params: RequestParams = {},
    ) =>
      this.request<ValidationWarnings, ErrorMessage>({
        path: `/iam/repo/${levelType}/${levelId}/policies/validation/${policyUuid}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - organizational levels
     * @name GetDescendants
     * @summary Get descendant organizational levels for a given level by level ID
     * @request GET:/iam/organizational-levels/{level-type}/{level-id}/descendants
     */
    getDescendants: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<LevelList, ErrorMessage>({
        path: `/iam/organizational-levels/${levelType}/${levelId}/descendants`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IAM - organizational levels
     * @name Get1
     * @summary Get an organizational level by level ID
     * @request GET:/iam/organizational-levels/{level-type}/{level-id}
     */
    get1: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<Level, ErrorMessage>({
        path: `/iam/organizational-levels/${levelType}/${levelId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  settings = {
    /**
     * No description
     *
     * @tags Settings - Objects
     * @name GetSettingsObjects
     * @summary Lists available settings objects | maturity=EARLY_ADOPTER
     * @request GET:/settings/objects
     */
    getSettingsObjects: (
      query?: { schemaIds?: string; scopes?: string; fields?: string; nextPageKey?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<ObjectsList, ErrorEnvelope>({
        path: `/settings/objects`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description You can upload several objects at once. In that case each object returns its own response code. Check the response body for details.
     *
     * @tags Settings - Objects
     * @name PostSettingsObjects
     * @summary Creates a new settings object | maturity=EARLY_ADOPTER
     * @request POST:/settings/objects
     */
    postSettingsObjects: (
      data: SettingsObjectCreate[],
      query?: { validateOnly?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<SettingsObjectResponse[], SettingsObjectResponse[]>({
        path: `/settings/objects`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings - Objects
     * @name GetSettingsObjectByObjectId
     * @summary Gets the specified settings object | maturity=EARLY_ADOPTER
     * @request GET:/settings/objects/{objectId}
     */
    getSettingsObjectByObjectId: (objectId: string, params: RequestParams = {}) =>
      this.request<SettingsObject, SettingsObjectResponse>({
        path: `/settings/objects/${objectId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings - Objects
     * @name PutSettingsObjectByObjectId
     * @summary Updates an existing settings object | maturity=EARLY_ADOPTER
     * @request PUT:/settings/objects/{objectId}
     */
    putSettingsObjectByObjectId: (objectId: string, data: SettingsObjectUpdate, params: RequestParams = {}) =>
      this.request<SettingsObjectResponse, SettingsObjectResponse>({
        path: `/settings/objects/${objectId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings - Objects
     * @name DeleteSettingsObjectByObjectId
     * @summary Deletes the specified settings object | maturity=EARLY_ADOPTER
     * @request DELETE:/settings/objects/{objectId}
     */
    deleteSettingsObjectByObjectId: (objectId: string, query?: { updateToken?: string }, params: RequestParams = {}) =>
      this.request<void, SettingsObjectResponse>({
        path: `/settings/objects/${objectId}`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings - Schemas
     * @name GetAvailableSchemaDefinitions
     * @summary Lists available settings schemas | maturity=EARLY_ADOPTER
     * @request GET:/settings/schemas
     */
    getAvailableSchemaDefinitions: (params: RequestParams = {}) =>
      this.request<SchemaList, any>({
        path: `/settings/schemas`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings - Schemas
     * @name GetSchemaDefinition
     * @summary Gets parameters of the specified settings schema | maturity=EARLY_ADOPTER
     * @request GET:/settings/schemas/{schemaId}
     */
    getSchemaDefinition: (schemaId: string, query?: { schemaVersion?: string }, params: RequestParams = {}) =>
      this.request<SchemaDefinitionRestDto, ErrorEnvelope>({
        path: `/settings/schemas/${schemaId}`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  synthetic = {
    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name GetLocations
     * @summary Lists all cluster private synthetic locations
     * @request GET:/synthetic/locations
     */
    getLocations: (params: RequestParams = {}) =>
      this.request<SyntheticLocations, any>({
        path: `/synthetic/locations`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name AddLocation
     * @summary Creates a new private synthetic cluster location
     * @request POST:/synthetic/locations
     */
    addLocation: (data: PrivateSyntheticLocation, params: RequestParams = {}) =>
      this.request<SyntheticLocationIdsDto, any>({
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
     * @summary Gets properties of the specified cluster location
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
     * @summary Updates the specified private synthetic cluster location
     * @request PUT:/synthetic/locations/{locationId}
     */
    updateLocation: (locationId: string, data: PrivateSyntheticLocation, params: RequestParams = {}) =>
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
     * @summary Deletes the specified private synthetic cluster location
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
     * @summary Lists properties of the specified synthetic cluster node | maturity=EARLY_ADOPTER
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
     * @summary Lists all synthetic cluster nodes | maturity=EARLY_ADOPTER
     * @request GET:/synthetic/nodes
     */
    getNodes: (params: RequestParams = {}) =>
      this.request<Nodes, any>({
        path: `/synthetic/nodes`,
        method: "GET",
        ...params,
      }),
  };
}
