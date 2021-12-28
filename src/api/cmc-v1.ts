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

export interface StorageTestImpl {
  storagePath?: string;
  storageError?: string;
  inProgress?: boolean;
}

/**
 * Configuration of the cluster backup.
 * @example {"datacenter":"dc1","enabled":true,"storagePath":"/efs/backup","includeRumData":true,"includeTsMetricData":true,"bandwidthLimitMbits":240,"maxEsSnapshotsToClean":30,"cassandraScheduledTime":22,"pauseBackups":false}
 */
export interface BackupConfigDto {
  /** Backups are enabled (`true`) or disabled (`false`). */
  enabled?: boolean;

  /** Datacenter which will create backups */
  datacenter?: string;

  /** A full path to the backup archive */
  storagePath?: string;

  /** Include user sessions (`true`) or GDPR compliance (`false`) */
  includeRumData?: boolean;

  /** Include time series metric-data (`true`) or retain configuration data only (`false`)) */
  includeTsMetricData?: boolean;

  /**
   * Cassandra backup bandwidth limit in Mbps
   * @format int32
   */
  bandwidthLimitMbits?: number;

  /**
   * Max number of Elasticsearch snapshots to clean. Elasticsearch snapshots won't be created anymore if there will be more backups to clean than this value.
   * @format int32
   */
  maxEsSnapshotsToClean?: number;

  /**
   * Hour to start Cassandra backups each day.
   * @format int32
   */
  cassandraScheduledTime?: number;

  /** Pauses Elasticsearch and Cassandra backups. In comparison to enable/disable backup, this option does not modify any configuration like Elasticsearch properties. */
  pauseBackups?: boolean;
}

/**
 * Metadata used by installer
 */
export interface InstallerMetadata {
  /** Network attached storage path for the backup */
  clusterBackupPath?: string;

  /** Elasticsearch repository used for the backup */
  elasticsearchBackupPath?: string;

  /** Datacenter for backup, used only in multidc setups */
  datacenterWithBackupEnabled?: string;
}

export interface FileDto {
  content?: string[];
}

export interface AddressWrapper {
  /** Address */
  address: string;

  /** New address */
  newAddress?: string;

  /** If true, public IP will be used for domain generation. */
  usePublicIpForDomainGeneration?: boolean;

  /** If true, public IP address will be used for OneAgents. */
  usePublicIpForAgents?: boolean;
}

export interface ClusterNodesConfigDto {
  clusterNodes?: NodeConfigDto[];
}

export interface NodeConfigDto {
  /** @format int32 */
  id?: number;
  webUI?: boolean;
  agent?: boolean;
  datacenter?: string;
  kubernetesRole?: string;
}

export interface Cluster {
  /**
   * Node ID
   * @format int32
   */
  id?: number;

  /** Cluster member address */
  clusterMemberAddress?: string;

  /** Operation state */
  operationState?: string;

  /** Server version */
  buildVersion?: string;

  /** OS info */
  osInfo?: string;

  /** JVM info */
  jvmInfo?: string;

  /** DNS entry point URIs */
  dnsEntryPointUris?: string[];

  /** REST service root URIs */
  restServiceRootUris?: string[];

  /** Communication URIs */
  communicationUris?: string[];
}

export interface ClusterPreparationForReplicationDto {
  done?: boolean;
  success?: boolean;

  /** @format double */
  percentDone?: number;
  errorMessage?: string;
}

export interface DatacenterMigrationDto {
  newDatacenterName?: string;
  nodesIp?: string[];
}

/**
 * Map of multidatacenter topology
 */
export interface DatacenterDesc {
  datacenterMembersList?: DatacenterMember[];
  newDatacenter?: boolean;
}

export interface DatacenterMember {
  /** @format int32 */
  nodeId?: number;
  nodeIp?: string;
}

/**
 * Multi datacenter topology
 */
export interface MultiDatacenterTopology {
  /** Map of multidatacenter topology */
  datacenterTopology?: Record<string, DatacenterDesc>;
  newDatacenterName?: string;
  oldDatacenterName?: string;
}

/**
 * State of in-server config migration for single component
 */
export interface MigrationState {
  /** Current status of migration */
  status?: "FAILED" | "IN_PROGRESS" | "NOT_STARTED" | "SUCCEEDED";

  /**
   * Timestamp (milliseconds format) of migration start
   * @format int64
   */
  startedAt?: number;

  /**
   * Timestamp (milliseconds format) of migration finish
   * @format int64
   */
  finishedAt?: number;

  /** Additional information about migration state */
  details?: string;
}

/**
 * State of the cluster during migration of single datacenter to multi datacenter and its substeps
 */
export interface SingleToMultiDcMigrationClusterState {
  /** State of in-server config migration for single component */
  singleToMultiDcMigration?: MigrationState;

  /** Status of the various sub steps of the migration */
  migrationSteps?: Record<string, MigrationState>;
}

/**
 * State of in-server config migration for all components
 */
export interface InServerConfigDatacenterMigrationState {
  /** Map of (component, migration state) pairs */
  componentMigrationStates?: Record<string, MigrationState>;
}

export interface ElasticsearchUpgradeDTO {
  upgradePossible?: boolean;
  reason?: string;
}

export interface ElasticsearchOperationDto {
  success?: boolean;
  reason?: string;
}

export interface FirewallNodeIp {
  /** Node IP address to remove from firewall */
  ipAddress?: string;
}

/**
 * Information which node is going to be removed.
 */
export interface RemoveNode {
  /** @format int32 */
  nodeId?: number;
  ipAddress?: string;
}

export interface InstallerStatusDto {
  status?: string;
  details?: string;
  lastFinishedStep?: string;
}

export interface FinalizeNodeJoiningRequestDto {
  ip?: string;
  result?: "ABORTED" | "FAILURE" | "IN_PROGRESS" | "STOPPED" | "SUCCESS" | "UNKNOWN";
  details?: string;
}

export interface NodeJoiningInitializePreCheckResponseDto {
  requestId?: string;
}

export interface NodeJoiningPreCheckStatusDto {
  nodeJoiningPreCheckFinished?: boolean;
  canRunNodeInstallation?: boolean;
  details?: string;
}

export interface ProductVersion {
  productVersion?: string;
}

export interface ResponsibilityOverrideDto {
  responsibilityNodeIds?: number[];
}

export interface Preferences {
  certificateManagementEnabled?: boolean;
  certificateManagementPossible?: boolean;

  /** If true, usage and billing information will be reported. */
  supportSendBilling: boolean;

  /** If true, usage and billing information will NOT be reported. */
  suppressNonBillingRelevantData: boolean;

  /** If true, Dynatrace cluster health will be reported. */
  supportSendClusterHealth: boolean;

  /** If true, Dynatrace cluster health and OneAgent events will be reported. */
  supportSendEvents?: boolean;

  /** If true, audited remote-access to your Dynatrace configuration is allowed settings. */
  supportAllowRemoteAccess?: boolean;

  /** If true, audited access to your Dynatrace cluster is allowed by approved Dynatrace employees otherwise by privileged Dynatrace employees. */
  remoteAccessOnDemandOnly?: boolean;

  /** If true, each new user will be set up as a Dynatrace Community user upon first login. */
  communityCreateUser?: boolean;

  /** If true, you can search Dynatrace Community and Dynatrace Help when using the product search. */
  communityExternalSearch?: boolean;

  /** Deprecated. Use the backup configuration endpoint. If true, backups are enabled. */
  backupEnabled?: boolean;

  /** If true, Dynatrace OneAgent monitors Dynatrace. */
  ruxitMonitorsRuxit?: boolean;
  telemetrySharing?: boolean;

  /** If true, Dynatrace ONE live chat is enabled. */
  helpChatEnabled?: boolean;

  /** If true, audited, read-only remote access to your Dynatrace configuration settings is allowed. */
  readOnlyRemoteAccessAllowed?: boolean;
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
 * Certificate configuration.
 * @example {"privateKeyEncoded":"-----BEGIN RSA PRIVATE KEY-----\nMIIEow...aHzMvp\n-----END RSA PRIVATE KEY-----","publicKeyCertificateEncoded":"-----BEGIN CERTIFICATE-----\nMIIDKT...XbTK+M\n-----END CERTIFICATE-----"}
 */
export interface CertDto {
  /** Private key PKCS #8 standard, PEM base64-encoded format */
  privateKeyEncoded: string;

  /** Certificate X.509 standard, PEM base64-encoded format */
  publicKeyCertificateEncoded: string;
}

/**
 * X.509 certificate for signing/encryption
 */
export interface CertificateDetails {
  /** Issuer */
  issuer?: string;

  /** Subject */
  subject?: string;

  /**
   * Expiration timestamp
   * @format int64
   */
  expirationTimestamp?: number;

  /** Expiration date */
  expirationDate?: string;
}

export interface SmtpConfiguration {
  /** Host name */
  hostName?: string;

  /**
   * Integer value of port
   * @format int32
   */
  port?: number;

  /** User name */
  userName?: string;

  /** Password */
  password?: string;

  /** If true, a password has been configured. */
  isPasswordConfigured?: boolean;

  /** Connection security */
  connectionSecurity?: "NO_ENCRYPTION" | "OPTIONAL_STARTTLS" | "REQUIRE_STARTTLS" | "TLS";

  /** Sender email address */
  senderEmailAddress?: string;

  /** If true, we will send e-mails via Mission Control in case of problems with SMTP server. */
  allowFallbackViaMissionControl?: boolean;

  /** If true, we will send e-mails via SMTP server. */
  useSmtpServer?: boolean;
}

export interface CertificateStoreStatus {
  certificateStoreStatus?:
    | "BAD_REQUEST"
    | "CERTIFICATE_CHAIN_IS_INVALID"
    | "CERTIFICATE_IS_EXPIRED"
    | "CERTIFICATE_STORED_BUT_NOT_REFRESHED"
    | "ERROR"
    | "GENERAL_ERROR_WHILE_STORING_CERTIFICATE"
    | "IN_PROGRESS"
    | "NOT_FOUND"
    | "OK"
    | "PRIVATE_KEY_DOES_NOT_MATCH_PUBLIC_KEY_CERTIFICATE"
    | "PRIVATE_KEY_IS_INVALID"
    | "PUBLIC_KEY_CERTIFICATE_IS_INVALID";
  detailedError?: string;
}

/**
 * SSL certificate configuration.
 * @example {"privateKeyEncoded":"-----BEGIN RSA PRIVATE KEY-----\nMIIEow...aHzMvp\n-----END RSA PRIVATE KEY-----","publicKeyCertificateEncoded":"-----BEGIN CERTIFICATE-----\nMIIDKT...XbTK+M\n-----END CERTIFICATE-----","certificateChainEncoded":"-----BEGIN CERTIFICATE-----\nMIIDKT...XbTK+M\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\nMIIDKT...bXTK+M\n-----END CERTIFICATE-----"}
 */
export interface SslCertDto {
  /** Private key PKCS #8 standard, PEM base64-encoded format */
  privateKeyEncoded: string;

  /** Certificate X.509 standard, PEM base64-encoded format, server certificate */
  publicKeyCertificateEncoded: string;

  /** Certificate(s) X.509 standard, PEM base64-encoded format, intermediate and root certificates */
  certificateChainEncoded?: string;
}

export interface SSLDetails {
  customKeyStore?: boolean;
  inProgress?: boolean;
  restartRequired?: boolean;

  /** @format date-time */
  expirationDate?: string;
  customKeyStoreWritable?: boolean;
  issuer?: string;
  subject?: string;
  default?: boolean;
}

export interface SupportArchiveDownload {
  downloadState?: "FINISHED" | "PROCESSING" | "STARTING" | "TRANSFERING";
  report?: SupportArchiveReport;
}

export interface SupportArchiveReport {
  parts?: SupportArchiveReportPart[];
}

export interface SupportArchiveReportPart {
  /** @format int32 */
  numberOfFiles?: number;

  /** @format int64 */
  uncompressedTotalBytes?: number;

  /** @format int64 */
  compressedTotalBytes?: number;
  source?: string;
  errors?: string[];
}

export interface OnPremClusterSupportArchiveRequestImpl {
  /** @format int32 */
  numberOfDays?: number;
  includeServerData?: boolean;
  includeActiveGateData?: boolean;
  includeLogs?: boolean;
  includeDebugLogs?: boolean;
  includeAgentRegistryLogs?: boolean;
  includeLauncherLogs?: boolean;
  includeMonitoringConfigAuditLogs?: boolean;
  includeOtherAuditLogs?: boolean;
}

export interface UpgradeStartupState {
  /** System precondition check state */
  state?: "ERROR" | "FINISHED" | "LAUNCHING" | "NODEKEEPER_UPGRADE" | "SYSTEM_CHECK" | "UNDEFINED";

  /** Error */
  error?: string;
}

export interface InstallationPackage {
  /** If true, update package is excluded from download to save storage */
  excludedFromDownload?: boolean;

  /** If true, update package is removed from Dynatrace repository. Once you remove it from your cluster it will be gone permanently. */
  deletedFromMCStorage?: boolean;

  /** If true, it's possible to remove this package via the REST API or the WebUi */
  deleteEnabled?: boolean;

  /** IDs of nodes that have finished package processing (i.e, downloaded or removed depending on status) */
  readyNodeIds?: number[];

  /**
   * Total file size of a package in bytes
   * @format int64
   */
  fileSizeInBytes?: number;

  /**
   * Count of tenants where this agent is configured as standard agent version. Applies to OneAgent type only.
   * @format int32
   */
  countOfTenantsUsingThisAgentAsStandardVersion?: number;

  /** Version */
  version?: string;

  /** Type */
  type?:
    | "AGENT"
    | "DEPLOYMENT_ORCHESTRATION"
    | "DOCKER_AGENT"
    | "JS_AGENT"
    | "NGINX"
    | "ODIN"
    | "SERVER"
    | "SG"
    | "SYNTHETIC";

  /** Cluster-wide status */
  status?: "EXCLUDED" | "MISSING" | "PROBLEM" | "PROGRESS" | "READY" | "REMOVED" | "REMOVING" | "UPLOADING";
}

export interface UpdateEntryChangeRequestDto {
  /** If true, update package will be excluded from download and removed from storage. If false, already excluded package will be re-downloaded. */
  excludedFromDownload?: boolean;
}

/**
 * The configuration of the group.
 */
export interface GroupConfig {
  /** If true, then the group has the cluster administrator rights. */
  isClusterAdminGroup: boolean;

  /** If true, then the group has the access account rights. */
  hasAccessAccountRole?: boolean;

  /** If true, then the group has the manage account rights. */
  hasManageAccountAndViewProductUsageRole?: boolean;
  isAccessAccount?: boolean;
  isManageAccount?: boolean;

  /** Group ID. Leave empty if creating group. Set if updating group. */
  id: string;

  /** Group name */
  name: string;

  /** LDAP group names */
  ldapGroupNames?: string[];

  /** SSO group names. If defined it's used to map SSO group name to Dynatrace group name, otherwise mapping is done by group name */
  ssoGroupNames?: string[];

  /** Access rights */
  accessRight?: Record<string, { empty?: boolean }>;
}

export interface MzListForEnvironment {
  /** Environment UUID */
  environmentUuid?: string;

  /** List of management zone models with permissions */
  mzPermissions?: MzPermissionsList[];
}

export interface MzPermissionsForGroup {
  /** Group ID */
  groupId?: string;

  /** List of management zone permissions per environment */
  mzPermissionsPerEnvironment?: MzListForEnvironment[];
}

export interface MzPermissionsList {
  /** The ID of the required management zone */
  mzId?: string;

  /** The list of permissions for the required management zone */
  permissions?: (
    | "DEMO_USER"
    | "LOG_VIEWER"
    | "MANAGE_SECURITY_PROBLEMS"
    | "MANAGE_SETTINGS"
    | "REPLAY_SESSION_DATA"
    | "REPLAY_SESSION_DATA_WITHOUT_MASKING"
    | "VIEWER"
    | "VIEW_SENSITIVE_REQUEST_DATA"
  )[];
}

/**
 * The configuration of the user.
 */
export interface UserConfig {
  /** User ID */
  id: string;

  /** User's email address */
  email: string;

  /** User's first name */
  firstName: string;

  /** User's last name */
  lastName: string;

  /** User's password in a clear text; used only to set initial password */
  passwordClearText?: string;

  /** List of user's user group IDs. */
  groups?: string[];
}

export interface AuthenticationMode {
  authenticationProvider?: "INTERNAL" | "LDAP";
  authorizationProvider?: "INTERNAL" | "LDAP";
  ssoOnly?: boolean;
}

export interface AuthenticationModel {
  /** Defines the authentication provider */
  authenticationProvider: "INTERNAL" | "LDAP";

  /** Defines the authorization provider */
  authorizationProvider?: "INTERNAL" | "LDAP";

  /** Defines login page type as SSO */
  ssoOnly?: boolean;
}

export interface LdapConnectionDescImpl {
  shouldUseSecureConnection?: boolean;
  hostName?: string;

  /** @format int32 */
  port?: number;
  bindDn?: string;
  bindPassword?: string;
  bindPasswordSet?: boolean;

  /** @format int32 */
  referralHopLimit?: number;
}

export interface LdapGroupsQueryDtoImpl {
  groupsDn?: string;
  groupsFilter?: string;
  groupsIdAttribute?: string;
  groupsDisplayNameAttribute?: string;
  groupsMemberAttribute?: string;
}

export interface LdapUsersQueryDescImpl {
  usersBaseDn?: string;
  usersAccountNameAttribute?: string;
  usersFirstNameAttribute?: string;
  usersLastNameAttribute?: string;
  usersEmailAttribute?: string;
  usersMembershipAttribute?: string;
  usersFilter?: string;
}

/**
 * Internet connection test result
 */
export interface ConnectionStatus {
  /** Connection test result */
  connectionOk?: boolean;

  /** Indicates whether test was executed at all */
  testExecuted?: boolean;

  /** Additional comments usually indicates why test was not executed */
  testExecutionMessage?: string;
}

/**
 * Configuration of proxy server for Internet connection
 */
export interface InternetProxyChangeRequest {
  /**
   * Protocol which proxy server uses
   * @pattern http[s]?
   */
  scheme: "http" | "https";

  /**
   * Address (either IP or Hostname) of proxy server
   * @pattern ^[a-zA-Z0-9:/.-]*$
   */
  server: string;

  /**
   * Port of proxy server
   * @format int32
   * @min 0
   * @max 65535
   */
  port: number;

  /** User of proxy server, null means do not change previous value */
  user?: string;

  /** Password of proxy server, null means do not change previous value */
  password?: string;

  /** Definition of hosts for which proxy won't be used. You can define multiple hosts. Each host can start or end with wildcard '*' for instance to match whole domain. */
  nonProxyHosts?: string[];
}

/**
 * Configuration of proxy server for Internet connection
 */
export interface InternetProxy {
  /** Protocol which proxy server uses */
  scheme?: string;

  /** Address (either IP or Hostname) of proxy server */
  server?: string;

  /**
   * Port of proxy server
   * @format int32
   */
  port?: number;

  /** Definition of hosts for which proxy won't be used. */
  nonProxyHosts?: string[];

  /** Indicates if user/password for proxy is configured */
  userOrPasswordDefined?: boolean;
}

/**
 * Configurations of proxy servers for all existing Data Centers
 */
export interface ProxyConfigurations {
  /** Map of (Data Center name, Proxy) pairs */
  configurations?: Record<string, InternetProxy>;
}

/**
 * Password policy configuration.
 */
export interface PasswordPolicy {
  realmId?: string;

  /**
   * Minimum password length
   * @format int64
   * @min 8
   * @max 128
   */
  minPasswordLength: number;

  /**
   * Minimum number of uppercase characters
   * @format int64
   * @min 0
   * @max 128
   */
  minNumberOfUppercaseChars: number;

  /**
   * Minimum number of lowercase characters
   * @format int64
   * @min 0
   * @max 128
   */
  minNumberOfLowercaseChars: number;

  /**
   * Minimum number of digits
   * @format int64
   * @min 0
   * @max 128
   */
  minNumberOfDigits: number;

  /**
   * Minimum number of non-alphanumeric characters
   * @format int64
   * @min 0
   * @max 128
   */
  minNumberOfNonAlphanumericChars: number;
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
export class Api extends APIBase {
  backup = {
    /**
     * No description
     *
     * @tags Backup configuration
     * @name CheckBackupDirForCluster
     * @summary Check if given directory is valid for backup in the cluster
     * @request GET:/backup/clusterCheckDir
     * @secure
     */
    checkBackupDirForCluster: (query?: { dir?: string; datacenter?: string }, params: RequestParams = {}) =>
      this.request<StorageTestImpl, void>({
        path: `/backup/clusterCheckDir`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Backup configuration
     * @name GetBackupConfig
     * @summary Return backup configuration overview
     * @request GET:/backup/config
     * @secure
     */
    getBackupConfig: (params: RequestParams = {}) =>
      this.request<BackupConfigDto, any>({
        path: `/backup/config`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Backup configuration
     * @name ChangeBackupConfig
     * @summary Change backup configuration
     * @request PUT:/backup/config
     * @secure
     */
    changeBackupConfig: (data: BackupConfigDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/backup/config`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Backup configuration
     * @name GetStatusOfChangeBackupConfig
     * @summary Check status of change backup configuration
     * @request GET:/backup/config/status
     * @secure
     */
    getStatusOfChangeBackupConfig: (query?: { requestId?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/backup/config/status`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  bootstrapManagement = {
    /**
     * No description
     *
     * @tags Startup configuration
     * @name GetInstallerMetadata
     * @summary Get installer metadata
     * @request GET:/bootstrapManagement/files/installerMetadata
     * @secure
     */
    getInstallerMetadata: (params: RequestParams = {}) =>
      this.request<InstallerMetadata, any>({
        path: `/bootstrapManagement/files/installerMetadata`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Startup configuration
     * @name GetActiveGateConfigProperties
     * @summary Get ActiveGate config properties
     * @request GET:/bootstrapManagement/files/ag/configProperties
     * @secure
     */
    getActiveGateConfigProperties: (params: RequestParams = {}) =>
      this.request<FileDto, void>({
        path: `/bootstrapManagement/files/ag/configProperties`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Startup configuration
     * @name GetActiveGateSecureConfigProperties
     * @summary Get ActiveGate secure config properties
     * @request GET:/bootstrapManagement/files/ag/secureConfigProperties
     * @secure
     */
    getActiveGateSecureConfigProperties: (params: RequestParams = {}) =>
      this.request<FileDto, void>({
        path: `/bootstrapManagement/files/ag/secureConfigProperties`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Startup configuration
     * @name GenerateNewNodeId
     * @summary Get new node id
     * @request POST:/bootstrapManagement/newNodeId
     * @secure
     */
    generateNewNodeId: (params: RequestParams = {}) =>
      this.request<FileDto, void>({
        path: `/bootstrapManagement/newNodeId`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Startup configuration
     * @name GetSecureConfigProperties
     * @summary Get secure config properties
     * @request GET:/bootstrapManagement/files/secureConfigProperties
     * @secure
     */
    getSecureConfigProperties: (params: RequestParams = {}) =>
      this.request<FileDto, void>({
        path: `/bootstrapManagement/files/secureConfigProperties`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Startup configuration
     * @name GetRuntimeProperties
     * @summary Get runtime properties
     * @request GET:/bootstrapManagement/files/runtimeProperties
     * @secure
     */
    getRuntimeProperties: (params: RequestParams = {}) =>
      this.request<FileDto, void>({
        path: `/bootstrapManagement/files/runtimeProperties`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Startup configuration
     * @name GetKeyStore
     * @summary Get key store
     * @request GET:/bootstrapManagement/files/keyStore
     * @secure
     */
    getKeyStore: (params: RequestParams = {}) =>
      this.request<FileDto, void>({
        path: `/bootstrapManagement/files/keyStore`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Startup configuration
     * @name GetConfigProperties
     * @summary Get config properties
     * @request GET:/bootstrapManagement/files/configProperties
     * @secure
     */
    getConfigProperties: (params: RequestParams = {}) =>
      this.request<FileDto, void>({
        path: `/bootstrapManagement/files/configProperties`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  endpoint = {
    /**
     * No description
     *
     * @tags Public endpoints
     * @name GetWebUiAddress
     * @summary Get WebUi address
     * @request GET:/endpoint/webUiAddress
     * @secure
     */
    getWebUiAddress: (params: RequestParams = {}) =>
      this.request<AddressWrapper, any>({
        path: `/endpoint/webUiAddress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name UpdateWebUiAddress
     * @summary Update WebUi address
     * @request POST:/endpoint/webUiAddress
     * @secure
     */
    updateWebUiAddress: (data: AddressWrapper, params: RequestParams = {}) =>
      this.request<AddressWrapper, void>({
        path: `/endpoint/webUiAddress`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name GetBeaconForwarderAddress
     * @summary Get beacon forwarder address
     * @request GET:/endpoint/beaconForwarderAddress
     * @secure
     */
    getBeaconForwarderAddress: (params: RequestParams = {}) =>
      this.request<AddressWrapper, any>({
        path: `/endpoint/beaconForwarderAddress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name UpdateBeaconForwarderAddress
     * @summary Update beacon forwarder address
     * @request POST:/endpoint/beaconForwarderAddress
     * @secure
     */
    updateBeaconForwarderAddress: (data: AddressWrapper, params: RequestParams = {}) =>
      this.request<AddressWrapper, void>({
        path: `/endpoint/beaconForwarderAddress`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name GetNodeIpForDomain
     * @summary Get node IP for domain
     * @request GET:/endpoint/publicIp/domain/{nodeId}
     * @secure
     */
    getNodeIpForDomain: (nodeId: number, params: RequestParams = {}) =>
      this.request<AddressWrapper, void>({
        path: `/endpoint/publicIp/domain/${nodeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name StoreNodeIpForDomain
     * @summary Store node IP for domain
     * @request PUT:/endpoint/publicIp/domain/{nodeId}
     * @secure
     */
    storeNodeIpForDomain: (nodeId: number, data: string, params: RequestParams = {}) =>
      this.request<AddressWrapper, void>({
        path: `/endpoint/publicIp/domain/${nodeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name GetNodeIpForAgents
     * @summary Get node IP for OneAgents
     * @request GET:/endpoint/publicIp/agents/{nodeId}
     * @secure
     */
    getNodeIpForAgents: (nodeId: number, params: RequestParams = {}) =>
      this.request<AddressWrapper, void>({
        path: `/endpoint/publicIp/agents/${nodeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name StoreNodeIpForAgents
     * @summary Store node IP for OneAgents
     * @request PUT:/endpoint/publicIp/agents/{nodeId}
     * @secure
     */
    storeNodeIpForAgents: (nodeId: number, data: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/endpoint/publicIp/agents/${nodeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name GetRootCdnAddress
     * @summary Get root CDN address
     * @request GET:/endpoint/cdnAddress
     * @secure
     */
    getRootCdnAddress: (params: RequestParams = {}) =>
      this.request<AddressWrapper, any>({
        path: `/endpoint/cdnAddress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Public endpoints
     * @name UpdateRootCdnAddress
     * @summary Update root CDN address
     * @request POST:/endpoint/cdnAddress
     * @secure
     */
    updateRootCdnAddress: (data: AddressWrapper, params: RequestParams = {}) =>
      this.request<AddressWrapper, void>({
        path: `/endpoint/cdnAddress`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cluster = {
    /**
     * No description
     *
     * @tags Cluster
     * @name NodesConfiguration
     * @summary Cluster nodes configuration
     * @request GET:/cluster/configuration
     * @secure
     */
    nodesConfiguration: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cluster/configuration`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster
     * @name ConfigureNodes
     * @summary Configure cluster nodes responsibilities
     * @request POST:/cluster/configuration
     * @secure
     */
    configureNodes: (data: ClusterNodesConfigDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cluster/configuration`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster
     * @name GetClustersInfo
     * @summary Get information about known servers
     * @request GET:/cluster
     * @secure
     */
    getClustersInfo: (params: RequestParams = {}) =>
      this.request<Cluster[], any>({
        path: `/cluster`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster
     * @name ConfigureNodesStatus
     * @summary Get cluster nodes configuration current status
     * @request GET:/cluster/configuration/status
     * @secure
     */
    configureNodesStatus: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cluster/configuration/status`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster
     * @name ConfigureNodesRequestStatus
     * @summary Get cluster nodes configuration request status
     * @request GET:/cluster/configuration/status/{requestedAt}
     * @secure
     */
    configureNodesRequestStatus: (requestedAt: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cluster/configuration/status/${requestedAt}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  multiDc = {
    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetPrepareClusterForReplicationProgress
     * @summary Get progress status of cluster preparation for a replication | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/clusterReplicationPreparation
     * @secure
     */
    getPrepareClusterForReplicationProgress: (params: RequestParams = {}) =>
      this.request<ClusterPreparationForReplicationDto, void | ClusterPreparationForReplicationDto>({
        path: `/multiDc/migration/clusterReplicationPreparation`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name InitPrepareClusterForReplication
     * @summary Start procedure of cluster preparation for a replication | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/clusterReplicationPreparation
     * @secure
     */
    initPrepareClusterForReplication: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/clusterReplicationPreparation`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetMultiDcTopologyDraft
     * @summary Get cluster topology draft | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/datacenterTopology
     * @secure
     */
    getMultiDcTopologyDraft: (params: RequestParams = {}) =>
      this.request<MultiDatacenterTopology, any>({
        path: `/multiDc/migration/datacenterTopology`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name CreateMultiDcTopologyDraft
     * @summary Create cluster topology draft | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/datacenterTopology
     * @secure
     */
    createMultiDcTopologyDraft: (data: DatacenterMigrationDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/datacenterTopology`,
        method: "POST",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name DeleteMultiDcTopologyDraft
     * @summary Delete cluster topology draft | maturity=EARLY_ADOPTER
     * @request DELETE:/multiDc/migration/datacenterTopology
     * @secure
     */
    deleteMultiDcTopologyDraft: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/multiDc/migration/datacenterTopology`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name InitTopologyConfiguration
     * @summary Start cluster topology configuration - open firewall ports | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/clusterNodes/currentDc
     * @secure
     */
    initTopologyConfiguration: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/clusterNodes/currentDc`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetTopologyConfiguration
     * @summary Get topology configuration status | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/clusterNodes/currentDc/{requestId}
     * @secure
     */
    getTopologyConfiguration: (requestId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/clusterNodes/currentDc/${requestId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetMultiDcNodekeeperHealthcheck
     * @summary Get nodekeeper helathcheck | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/nodekeeper/healthCheck
     * @secure
     */
    getMultiDcNodekeeperHealthcheck: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/nodekeeper/healthCheck`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name InitMigrateCassandraOldDatacenter
     * @summary Start cassandra migration in current datacenter | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/cassandra/currentDc
     * @secure
     */
    initMigrateCassandraOldDatacenter: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/cassandra/currentDc`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetMigrateCassandraOldDatacenter
     * @summary Get cassandra migration status in current datacenter | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/cassandra/currentDc/{requestId}
     * @secure
     */
    getMigrateCassandraOldDatacenter: (requestId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/cassandra/currentDc/${requestId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name InitMigrateCassandraNewDatacenter
     * @summary Start cassandra migration in new datacenter | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/cassandra/newDc
     * @secure
     */
    initMigrateCassandraNewDatacenter: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/cassandra/newDc`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetMigrateCassandraNewDatacenter
     * @summary Get cassandra migration status in new datacenter | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/cassandra/newDc/{requestId}
     * @secure
     */
    getMigrateCassandraNewDatacenter: (requestId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/cassandra/newDc/${requestId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name MigrateElasticsearch
     * @summary Start elasticsearch migration | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/elasticsearch
     * @secure
     */
    migrateElasticsearch: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/elasticsearch`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetMigrateElasticsearchStatus
     * @summary Get elasticsearch migration status | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/elasticsearch/{requestId}
     * @secure
     */
    getMigrateElasticsearchStatus: (requestId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/elasticsearch/${requestId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetVerifyElasticsearchMigration
     * @summary Verify elasticsearch migration status | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/elasticsearch/indexMigrationStatus
     * @secure
     */
    getVerifyElasticsearchMigration: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/elasticsearch/indexMigrationStatus`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetVerifyCassandraStatus
     * @summary Verify cassandra rebuild status | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/cassandra/rebuildStatus
     * @secure
     */
    getVerifyCassandraStatus: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/cassandra/rebuildStatus`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name MigrateServer
     * @summary Start server migration in current datacenter | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/server
     * @secure
     */
    migrateServer: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/server`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetMigrateServerStatus
     * @summary Get server migration status | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/server/{requestId}
     * @secure
     */
    getMigrateServerStatus: (requestId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/server/${requestId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name InitDatacenterCleanUp
     * @summary Clean up lost datacenter settings | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/lostDatacenterCleanUp
     * @secure
     */
    initDatacenterCleanUp: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/lostDatacenterCleanUp`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name FinishMigration
     * @summary Finish migration | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/migration/finish
     * @secure
     */
    finishMigration: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/migration/finish`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetClusterState
     * @summary Get cluster state of migration from single to multi datacenter cluster and its sub steps | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/clusterState
     * @secure
     */
    getClusterState: (params: RequestParams = {}) =>
      this.request<SingleToMultiDcMigrationClusterState, any>({
        path: `/multiDc/migration/clusterState`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name ModifyClusterState
     * @summary Modify the overall cluster state of migration from single to multi datacenter cluster | maturity=EARLY_ADOPTER
     * @request PUT:/multiDc/migration/clusterState
     * @secure
     */
    modifyClusterState: (
      query?: { status?: "FAILED" | "IN_PROGRESS" | "NOT_STARTED" | "SUCCEEDED"; details?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/multiDc/migration/clusterState`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetSubStepState
     * @summary Get sub step of migration from single to multi datacenter cluster | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/clusterState/{subStep}
     * @secure
     */
    getSubStepState: (subStep: "SERVER_RECONFIGURATION", params: RequestParams = {}) =>
      this.request<MigrationState, any>({
        path: `/multiDc/migration/clusterState/${subStep}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name ModifySubStepState
     * @summary Modify sub step of migration from single to multi datacenter cluster | maturity=EARLY_ADOPTER
     * @request PUT:/multiDc/migration/clusterState/{subStep}
     * @secure
     */
    modifySubStepState: (
      subStep: "SERVER_RECONFIGURATION",
      query?: { status?: "FAILED" | "IN_PROGRESS" | "NOT_STARTED" | "SUCCEEDED"; details?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/multiDc/migration/clusterState/${subStep}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Migration to multi-datacenter deployment
     * @name GetMigrationStateForAllComponents
     * @summary Get state of in-server config migration (from single to multi datacenter cluster) | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/migration/inServerconfigState
     * @secure
     */
    getMigrationStateForAllComponents: (params: RequestParams = {}) =>
      this.request<InServerConfigDatacenterMigrationState, any>({
        path: `/multiDc/migration/inServerconfigState`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Elasticsearch disaster recovery in multi-datacenter deployment
     * @name GetRecoverStatus
     * @summary Get status of disaster recovery. | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/restore/elasticsearch/recover
     * @secure
     */
    getRecoverStatus: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/restore/elasticsearch/recover`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Elasticsearch disaster recovery in multi-datacenter deployment
     * @name StartRecover
     * @summary Recover elasticsearch from a snapshot on one datacenter. | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/restore/elasticsearch/recover
     * @secure
     */
    startRecover: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/restore/elasticsearch/recover`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Elasticsearch disaster recovery in multi-datacenter deployment
     * @name StartComponentsAfterMigration
     * @summary Get status after server migration and start components in disaster recovery | maturity=EARLY_ADOPTER
     * @request GET:/multiDc/restore/server/recovery/{requestId}
     * @secure
     */
    startComponentsAfterMigration: (requestId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/restore/server/recovery/${requestId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Elasticsearch disaster recovery in multi-datacenter deployment
     * @name StartComponentsAfterMigration1
     * @summary Migrate servers and start components after disaster recovery | maturity=EARLY_ADOPTER
     * @request POST:/multiDc/restore/server/recovery
     * @secure
     */
    startComponentsAfterMigration1: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/multiDc/restore/server/recovery`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  elastic = {
    /**
     * No description
     *
     * @tags Elasticsearch Management API
     * @name CheckElasticsearchUpgradePossibility
     * @summary Checks if it is safe to upgrade elasticsearch
     * @request GET:/elastic/upgradeStatus
     * @secure
     */
    checkElasticsearchUpgradePossibility: (
      query?: { expectedElasticsearchNodes?: number },
      params: RequestParams = {},
    ) =>
      this.request<ElasticsearchUpgradeDTO, any>({
        path: `/elastic/upgradeStatus`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Elasticsearch Management API
     * @name CreateAutoFollowPattern
     * @summary Creates auto follow pattern for MultiDC environment
     * @request POST:/elastic/ccr/autoFollowPattern
     * @secure
     */
    createAutoFollowPattern: (params: RequestParams = {}) =>
      this.request<ElasticsearchOperationDto, any>({
        path: `/elastic/ccr/autoFollowPattern`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Elasticsearch Management API
     * @name DeleteAutoFollowPattern
     * @summary Deletes auto follow pattern for MultiDC environment
     * @request DELETE:/elastic/ccr/autoFollowPattern
     * @secure
     */
    deleteAutoFollowPattern: (params: RequestParams = {}) =>
      this.request<ElasticsearchOperationDto, any>({
        path: `/elastic/ccr/autoFollowPattern`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  firewallManagement = {
    /**
     * No description
     *
     * @tags Firewall configuration
     * @name AddClusterNodes
     * @summary Add cluster node
     * @request POST:/firewallManagement/addClusterNode
     * @secure
     */
    addClusterNodes: (data: NodeConfigDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/firewallManagement/addClusterNode`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Firewall configuration
     * @name GetClusterNodes
     * @summary Get cluster nodes
     * @request GET:/firewallManagement/clusterNodes
     * @secure
     */
    getClusterNodes: (params: RequestParams = {}) =>
      this.request<ClusterNodesConfigDto, void>({
        path: `/firewallManagement/clusterNodes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Firewall configuration
     * @name GetAsyncNodeRemovalStatus
     * @request GET:/firewallManagement/removeClusterNode
     * @secure
     */
    getAsyncNodeRemovalStatus: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/firewallManagement/removeClusterNode`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Firewall configuration
     * @name RemoveClusterNodes
     * @summary Remove cluster node
     * @request POST:/firewallManagement/removeClusterNode
     * @secure
     */
    removeClusterNodes: (data: FirewallNodeIp, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/firewallManagement/removeClusterNode`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Firewall configuration
     * @name RemoveClusterNodesDeleteMethod
     * @request DELETE:/firewallManagement/removeClusterNode/{ip}
     * @secure
     */
    removeClusterNodesDeleteMethod: (
      ip: string,
      query?: { scope?: string; asyncCrossNodeCommunication?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/firewallManagement/removeClusterNode/${ip}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),
  };
  nodeManagement = {
    /**
     * @description This API allows you to override cassandra read quorum of this particular server instance. Other server instances are not affected. Note that this will not be persisted, after server restart this override will be lost! Typically you only need it in multi-datacenter fail-over scenarios. To reset the overrides call the API with the UNSET value.
     *
     * @tags Cluster node
     * @name ForceCassandraQuorumOverride
     * @summary Override cassandra read quorum at runtime only for this particular server instance
     * @request PUT:/nodeManagement/cassandraQuorumOverride/{quorum}
     * @secure
     */
    forceCassandraQuorumOverride: (
      quorum:
        | "CL_ALL"
        | "CL_ANY"
        | "CL_EACH_QUORUM"
        | "CL_LOCAL_ONE"
        | "CL_LOCAL_QUORUM"
        | "CL_ONE"
        | "CL_QUORUM"
        | "CL_THREE"
        | "CL_TWO"
        | "UNSET",
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/nodeManagement/cassandraQuorumOverride/${quorum}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description Does not return actual used read quorum if no override is set, in this case UNSET is returned.
     *
     * @tags Cluster node
     * @name GetCassandraQuorumOverride
     * @summary Get the cassandra read quorum override.
     * @request GET:/nodeManagement/cassandraQuorumOverride
     * @secure
     */
    getCassandraQuorumOverride: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/nodeManagement/cassandraQuorumOverride`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name TryLockRemoval
     * @request PUT:/nodeManagement/tryLockRemoval
     * @secure
     */
    tryLockRemoval: (
      query?: { id?: number; ip?: string; requestedOnNode?: number; requestedByUser?: string },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/nodeManagement/tryLockRemoval`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name UnlockRemoval
     * @request PUT:/nodeManagement/unlockRemoval
     * @secure
     */
    unlockRemoval: (query?: { id?: number; ip?: string; removalStopReason?: string }, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/nodeManagement/unlockRemoval`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Responses with status of current node removal (if it's already running) and statuses of historical removals.
     *
     * @tags Cluster node
     * @name GetNodeRemovalStatus
     * @summary Get node removal status
     * @request GET:/nodeManagement/nodeRemovalStatus
     * @secure
     */
    getNodeRemovalStatus: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/nodeManagement/nodeRemovalStatus`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name DeadNodeCleaning
     * @request DELETE:/nodeManagement/deadNodeCleaning
     * @secure
     */
    deadNodeCleaning: (
      query?: { ip?: string; requestedOnNode?: number; requestedByUser?: string },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/nodeManagement/deadNodeCleaning`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name TriggerRemoveNode
     * @summary Remove node
     * @request POST:/nodeManagement/triggerRemoveNode
     * @secure
     */
    triggerRemoveNode: (data: RemoveNode, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/nodeManagement/triggerRemoveNode`,
        method: "POST",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name SetInstallerStatus
     * @request POST:/nodeManagement/installerStatus
     * @secure
     */
    setInstallerStatus: (data: InstallerStatusDto, query?: { ip?: string }, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/nodeManagement/installerStatus`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name TryLockJoining
     * @request PUT:/nodeManagement/tryLockJoining
     * @secure
     */
    tryLockJoining: (query?: { ip?: string }, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/nodeManagement/tryLockJoining`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name FinalizeJoining
     * @request PUT:/nodeManagement/finalizeJoining
     * @secure
     */
    finalizeJoining: (
      data: FinalizeNodeJoiningRequestDto,
      query?: {
        ip?: string;
        status?: "ABORTED" | "FAILURE" | "IN_PROGRESS" | "STOPPED" | "SUCCESS" | "UNKNOWN";
        forceUnlock?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/nodeManagement/finalizeJoining`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name InitializeNodeJoining
     * @request POST:/nodeManagement/joining
     * @secure
     */
    initializeNodeJoining: (
      query?: { ip?: string; timestamp?: number; datacenter?: string },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/nodeManagement/joining`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name GetNodeJoining
     * @request GET:/nodeManagement/joining/{requestId}
     * @secure
     */
    getNodeJoining: (requestId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/nodeManagement/joining/${requestId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name InitializeNodeJoinCheck
     * @summary Initialize verification if a node can be added to the cluster
     * @request POST:/nodeManagement/join/check
     * @secure
     */
    initializeNodeJoinCheck: (
      query?: { ip?: string; timestamp?: number; datacenter?: string },
      params: RequestParams = {},
    ) =>
      this.request<NodeJoiningInitializePreCheckResponseDto, any>({
        path: `/nodeManagement/join/check`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name GetNodeJoin
     * @summary Verification if a node can be added to the cluster status
     * @request GET:/nodeManagement/join/check/{requestId}
     * @secure
     */
    getNodeJoin: (requestId: string, params: RequestParams = {}) =>
      this.request<NodeJoiningPreCheckStatusDto, any>({
        path: `/nodeManagement/join/check/${requestId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name NodeRestart
     * @summary Restart node
     * @request POST:/nodeManagement/nodeRestart
     * @secure
     */
    nodeRestart: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/nodeManagement/nodeRestart`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name GetNodeServerStatus
     * @summary Get node's server status
     * @request GET:/nodeManagement/nodeServerStatus
     * @secure
     */
    getNodeServerStatus: (params: RequestParams = {}) =>
      this.request<
        | "DATABASE_DISCONNECTED"
        | "EMERGENCY"
        | "OFFLINE"
        | "RUNNING"
        | "RUNNING_FORSAKEN"
        | "SHUTDOWN"
        | "SHUTDOWN_IMMINENT"
        | "SHUTDOWN_PHASED_OUT"
        | "STARTUP"
        | "STARTUP_CANCELED"
        | "STARTUP_SUSPENDED"
        | "UNDEFINED",
        any
      >({
        path: `/nodeManagement/nodeServerStatus`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name GetNodeProductVersion
     * @summary Get product version
     * @request GET:/nodeManagement/productVersion
     * @secure
     */
    getNodeProductVersion: (params: RequestParams = {}) =>
      this.request<ProductVersion, any>({
        path: `/nodeManagement/productVersion`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cluster node
     * @name GetNodekeeperProductVersion
     * @request GET:/nodeManagement/nodekeeperProductVersion
     * @secure
     */
    getNodekeeperProductVersion: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/nodeManagement/nodekeeperProductVersion`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description This API allows you to define which nodes can perform cluster-wide responsibilities, for example metric aging or problem detection, by specifying nodes IDs. Typically you only need it in multi-datacenter fail-over scenarios. To reset the overrides call the API with an empty list of node IDs.
     *
     * @tags Cluster node
     * @name ResponsibilityOverride
     * @summary Override which nodes can perform internal responsibilities
     * @request PUT:/nodeManagement/responsibilityOverride
     * @secure
     */
    responsibilityOverride: (data: ResponsibilityOverrideDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/nodeManagement/responsibilityOverride`,
        method: "PUT",
        body: data,
        secure: true,
        ...params,
      }),
  };
  preferences = {
    /**
     * No description
     *
     * @tags Preferences
     * @name GetProperties
     * @summary Get Dynatrace Managed specific properties
     * @request GET:/preferences
     * @secure
     */
    getProperties: (params: RequestParams = {}) =>
      this.request<Preferences, any>({
        path: `/preferences`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Preferences
     * @name UpdateProperties
     * @summary Update properties
     * @request POST:/preferences
     * @secure
     */
    updateProperties: (data: Preferences, params: RequestParams = {}) =>
      this.request<Preferences, void>({
        path: `/preferences`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  smtp = {
    /**
     * No description
     *
     * @tags SMTP settings
     * @name GetSmtpConfiguration
     * @summary Get SMTP configuration
     * @request GET:/smtp
     * @secure
     */
    getSmtpConfiguration: (params: RequestParams = {}) =>
      this.request<SmtpConfiguration, any>({
        path: `/smtp`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMTP settings
     * @name UpdateSmtpConfiguration
     * @summary Update SMTP configuration
     * @request POST:/smtp
     * @secure
     */
    updateSmtpConfiguration: (data: SmtpConfiguration, params: RequestParams = {}) =>
      this.request<SmtpConfiguration, void>({
        path: `/smtp`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description You can send only one test email per minute
     *
     * @tags SMTP settings
     * @name SendTestEmail
     * @summary Send test email
     * @request POST:/smtp/sendTestMessage/{emailAddress}
     * @secure
     */
    sendTestEmail: (emailAddress: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/smtp/sendTestMessage/${emailAddress}`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  sslCertificate = {
    /**
     * No description
     *
     * @tags SSL certificates
     * @name GetStoringSslCertificateStatus
     * @summary Get certificate-storage status
     * @request GET:/sslCertificate/store/{entityType}/{entityId}
     * @secure
     */
    getStoringSslCertificateStatus: (
      entityType: "COLLECTOR" | "SERVER",
      entityId: number,
      params: RequestParams = {},
    ) =>
      this.request<CertificateStoreStatus, CertificateStoreStatus | void>({
        path: `/sslCertificate/store/${entityType}/${entityId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SSL certificates
     * @name StoreSslCertificateStatus
     * @summary Store SSL certificate status
     * @request POST:/sslCertificate/store/{entityType}/{entityId}
     * @secure
     */
    storeSslCertificateStatus: (
      entityType: "COLLECTOR" | "SERVER",
      entityId: number,
      data: SslCertDto,
      params: RequestParams = {},
    ) =>
      this.request<CertificateStoreStatus, CertificateStoreStatus | void>({
        path: `/sslCertificate/store/${entityType}/${entityId}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SSL certificates
     * @name GetSslCertificateDetails
     * @summary SSL certificate details.
     * @request GET:/sslCertificate/{entityType}/{entityId}
     * @secure
     */
    getSslCertificateDetails: (entityType: "COLLECTOR" | "SERVER", entityId: number, params: RequestParams = {}) =>
      this.request<SSLDetails, void>({
        path: `/sslCertificate/${entityType}/${entityId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  sso = {
    /**
     * No description
     *
     * @tags SSO configuration
     * @name GetSamlSpCert
     * @summary Get SAML SP X.509 certificate details
     * @request GET:/sso/saml/sp/cert
     * @secure
     */
    getSamlSpCert: (params: RequestParams = {}) =>
      this.request<CertificateDetails, void>({
        path: `/sso/saml/sp/cert`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SSO configuration
     * @name UpdateSamlSpCert
     * @summary Update SAML SP X.509 certificate
     * @request PUT:/sso/saml/sp/cert
     * @secure
     */
    updateSamlSpCert: (data: CertDto, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope | void>({
        path: `/sso/saml/sp/cert`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  supportArchive = {
    /**
     * No description
     *
     * @tags Support Archives
     * @name GetSupportArchive
     * @summary Get support upgrade file
     * @request GET:/supportArchive/{id}
     * @secure
     */
    getSupportArchive: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/supportArchive/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Support Archives
     * @name CancelSupportArchiveCreation
     * @summary Cancel support upgrade generation
     * @request PUT:/supportArchive/{id}
     * @secure
     */
    cancelSupportArchiveCreation: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/supportArchive/${id}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Support Archives
     * @name DeleteSupportArchive
     * @summary Delete existing support archive
     * @request DELETE:/supportArchive/{id}
     * @secure
     */
    deleteSupportArchive: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/supportArchive/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Support Archives
     * @name GetSupportArchiveStatus
     * @summary Get support upgrade generation status
     * @request GET:/supportArchive/{id}/status
     * @secure
     */
    getSupportArchiveStatus: (id: number, params: RequestParams = {}) =>
      this.request<SupportArchiveDownload, void>({
        path: `/supportArchive/${id}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Support Archives
     * @name GetSupportArchiveReport
     * @summary Get support upgrade generation report
     * @request GET:/supportArchive/{id}/report
     * @secure
     */
    getSupportArchiveReport: (id: number, params: RequestParams = {}) =>
      this.request<SupportArchiveDownload, void>({
        path: `/supportArchive/${id}/report`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Support Archives
     * @name StartCreatingSupportArchive
     * @summary Trigger support upgrade generation
     * @request POST:/supportArchive
     * @secure
     */
    startCreatingSupportArchive: (data: OnPremClusterSupportArchiveRequestImpl, params: RequestParams = {}) =>
      this.request<number, void>({
        path: `/supportArchive`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  upgradeManagement = {
    /**
     * No description
     *
     * @tags Updates
     * @name GetClusterUpgradeStartupState
     * @summary Get system precondition check state for the cluster
     * @request GET:/upgradeManagement/clusterUpgradeStartupState
     * @secure
     */
    getClusterUpgradeStartupState: (params: RequestParams = {}) =>
      this.request<UpgradeStartupState, any>({
        path: `/upgradeManagement/clusterUpgradeStartupState`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Updates
     * @name GetInstallationFileList
     * @summary Get list of installation files and their cluster-wide availability information
     * @request GET:/upgradeManagement/installationFiles
     * @secure
     */
    getInstallationFileList: (params: RequestParams = {}) =>
      this.request<InstallationPackage[], any>({
        path: `/upgradeManagement/installationFiles`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Updates
     * @name EditInstallationBatch
     * @summary Modify update package state. Particular package might be excluded from download or re-downloaded.
     * @request PUT:/upgradeManagement/installationFiles/{type}/{version}
     * @secure
     */
    editInstallationBatch: (
      type:
        | "AGENT"
        | "DEPLOYMENT_ORCHESTRATION"
        | "DOCKER_AGENT"
        | "JS_AGENT"
        | "NGINX"
        | "ODIN"
        | "SERVER"
        | "SG"
        | "SYNTHETIC",
      version: string,
      data: UpdateEntryChangeRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/upgradeManagement/installationFiles/${type}/${version}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Updates
     * @name RemoveInstallationBatch
     * @summary Trigger removal of installation package
     * @request DELETE:/upgradeManagement/installationFiles/{type}/{version}
     * @secure
     */
    removeInstallationBatch: (
      type:
        | "AGENT"
        | "DEPLOYMENT_ORCHESTRATION"
        | "DOCKER_AGENT"
        | "JS_AGENT"
        | "NGINX"
        | "ODIN"
        | "SERVER"
        | "SG"
        | "SYNTHETIC",
      version: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/upgradeManagement/installationFiles/${type}/${version}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Updates
     * @name TriggerManualUpgrade
     * @summary Trigger manual cluster upgrade
     * @request POST:/upgradeManagement/triggerUpgrade
     * @secure
     */
    triggerManualUpgrade: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/upgradeManagement/triggerUpgrade`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  groups = {
    /**
     * No description
     *
     * @tags User groups
     * @name CreateGroups
     * @summary Create groups
     * @request POST:/groups/bulk
     * @secure
     */
    createGroups: (data: GroupConfig[], params: RequestParams = {}) =>
      this.request<GroupConfig[], void | GroupConfig[]>({
        path: `/groups/bulk`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User groups
     * @name GetGroups
     * @summary Get groups
     * @request GET:/groups
     * @secure
     */
    getGroups: (params: RequestParams = {}) =>
      this.request<GroupConfig[], any>({
        path: `/groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User groups
     * @name UpdateGroup
     * @summary Update group
     * @request PUT:/groups
     * @secure
     */
    updateGroup: (data: GroupConfig, params: RequestParams = {}) =>
      this.request<GroupConfig, void>({
        path: `/groups`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User groups
     * @name CreateGroup
     * @summary Create group
     * @request POST:/groups
     * @secure
     */
    createGroup: (data: GroupConfig, params: RequestParams = {}) =>
      this.request<GroupConfig, void>({
        path: `/groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User groups
     * @name GetGroup
     * @summary Get group
     * @request GET:/groups/{groupId}
     * @secure
     */
    getGroup: (groupId: string, params: RequestParams = {}) =>
      this.request<GroupConfig, void>({
        path: `/groups/${groupId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User groups
     * @name RemoveGroup
     * @summary Delete group
     * @request DELETE:/groups/{groupId}
     * @secure
     */
    removeGroup: (groupId: string, params: RequestParams = {}) =>
      this.request<GroupConfig, void>({
        path: `/groups/${groupId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This is a list of management zone specific permissions only. Environment permissions are not taken into account here. Groups with permissions for whole environments can also see all management zones defined in these environments, even if they have no management zone specific permissions and the list returned by this request is empty.
     *
     * @tags User groups
     * @name GetManagementZonesPermissions
     * @summary Get management zone permissions for all groups
     * @request GET:/groups/managementZones
     * @secure
     */
    getManagementZonesPermissions: (params: RequestParams = {}) =>
      this.request<MzPermissionsForGroup[], any>({
        path: `/groups/managementZones`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User groups
     * @name UpdateManagementZonesPermissionsForGroup
     * @summary Update management zone permissions for a single group
     * @request PUT:/groups/managementZones
     * @secure
     */
    updateManagementZonesPermissionsForGroup: (data: MzPermissionsForGroup, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/groups/managementZones`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This is a list of management zone specific permissions only. Environment permissions are not taken into account here. Groups with permissions for whole environments can also see all management zones defined in these environments, even if they have no management zone specific permissions and the list returned by this request is empty.
     *
     * @tags User groups
     * @name GetManagementZonesPermissionsForGroup
     * @summary Get management zone permissions for a given group
     * @request GET:/groups/managementZones/{groupId}
     * @secure
     */
    getManagementZonesPermissionsForGroup: (groupId: string, params: RequestParams = {}) =>
      this.request<MzPermissionsForGroup, void>({
        path: `/groups/managementZones/${groupId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name GetUsers
     * @summary Get users
     * @request GET:/users
     * @secure
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<UserConfig[], any>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateUser
     * @summary Update user
     * @request PUT:/users
     * @secure
     */
    updateUser: (data: UserConfig, params: RequestParams = {}) =>
      this.request<UserConfig, void>({
        path: `/users`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CreateUser
     * @summary Create user
     * @request POST:/users
     * @secure
     */
    createUser: (data: UserConfig, params: RequestParams = {}) =>
      this.request<UserConfig, void>({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CreateUsers
     * @summary Create users
     * @request POST:/users/bulk
     * @secure
     */
    createUsers: (data: UserConfig[], params: RequestParams = {}) =>
      this.request<UserConfig[], void | UserConfig[]>({
        path: `/users/bulk`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUser
     * @summary Get user
     * @request GET:/users/{id}
     * @secure
     */
    getUser: (id: string, params: RequestParams = {}) =>
      this.request<UserConfig, void>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name RemoveUser
     * @summary Delete user
     * @request DELETE:/users/{id}
     * @secure
     */
    removeUser: (id: string, params: RequestParams = {}) =>
      this.request<UserConfig, void>({
        path: `/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  userRepository = {
    /**
     * No description
     *
     * @tags User repository configuration
     * @name GetAuthenticationMode
     * @summary Get authentication mode
     * @request GET:/userRepository/authenticationMode
     * @secure
     */
    getAuthenticationMode: (params: RequestParams = {}) =>
      this.request<AuthenticationMode, any>({
        path: `/userRepository/authenticationMode`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User repository configuration
     * @name UpdateAuthenticationMode
     * @summary Update authentication mode
     * @request POST:/userRepository/authenticationMode
     * @secure
     */
    updateAuthenticationMode: (data: AuthenticationModel, params: RequestParams = {}) =>
      this.request<AuthenticationMode, void>({
        path: `/userRepository/authenticationMode`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User repository configuration
     * @name GetLdapConnectionConfiguration
     * @summary Get LDAP configuration
     * @request GET:/userRepository/ldap/connectionConfiguration
     * @secure
     */
    getLdapConnectionConfiguration: (params: RequestParams = {}) =>
      this.request<LdapConnectionDescImpl, any>({
        path: `/userRepository/ldap/connectionConfiguration`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User repository configuration
     * @name UpdateLdapConnection
     * @summary Update LDAP connection
     * @request POST:/userRepository/ldap/connectionConfiguration
     * @secure
     */
    updateLdapConnection: (data: LdapConnectionDescImpl, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/userRepository/ldap/connectionConfiguration`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User repository configuration
     * @name GetLdapGroupsQuery
     * @summary Get LDAP group configuration
     * @request GET:/userRepository/ldap/queryGroups
     * @secure
     */
    getLdapGroupsQuery: (params: RequestParams = {}) =>
      this.request<LdapGroupsQueryDtoImpl, any>({
        path: `/userRepository/ldap/queryGroups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User repository configuration
     * @name UpdateLdapGroupsQuery
     * @summary Update LDAP groups query configuration
     * @request POST:/userRepository/ldap/queryGroups
     * @secure
     */
    updateLdapGroupsQuery: (data: LdapGroupsQueryDtoImpl, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/userRepository/ldap/queryGroups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User repository configuration
     * @name GetLdapLdapUsersQuery
     * @summary Get LDAP users query configuration
     * @request GET:/userRepository/ldap/queryUsers
     * @secure
     */
    getLdapLdapUsersQuery: (params: RequestParams = {}) =>
      this.request<LdapUsersQueryDescImpl, any>({
        path: `/userRepository/ldap/queryUsers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User repository configuration
     * @name UpdateLdapUsersQueryDescImpl
     * @summary Update LDAP users query configuration
     * @request POST:/userRepository/ldap/queryUsers
     * @secure
     */
    updateLdapUsersQueryDescImpl: (data: LdapUsersQueryDescImpl, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/userRepository/ldap/queryUsers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  proxy = {
    /**
     * No description
     *
     * @tags Internet proxy
     * @name TestConnectionInSingleDcMode
     * @summary Test Internet connection using given proxy configuration
     * @request PUT:/proxy/test
     * @secure
     */
    testConnectionInSingleDcMode: (data: InternetProxyChangeRequest, params: RequestParams = {}) =>
      this.request<ConnectionStatus, any>({
        path: `/proxy/test`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Internet proxy
     * @name TestConnectionInMultiDcMode
     * @summary Test Internet connection from specific Data Center using given proxy configuration (Multi Data Center deployment)
     * @request PUT:/proxy/test/{dc}
     * @secure
     */
    testConnectionInMultiDcMode: (dc: string, data: InternetProxyChangeRequest, params: RequestParams = {}) =>
      this.request<ConnectionStatus, any>({
        path: `/proxy/test/${dc}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Internet proxy
     * @name GetSingleDcConfiguration
     * @summary Get cluster proxy configuration
     * @request GET:/proxy/configuration
     * @secure
     */
    getSingleDcConfiguration: (params: RequestParams = {}) =>
      this.request<InternetProxy, void>({
        path: `/proxy/configuration`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Internet proxy
     * @name ModifySingleDcConfiguration
     * @summary Set/update cluster proxy configuration
     * @request PUT:/proxy/configuration
     * @secure
     */
    modifySingleDcConfiguration: (data: InternetProxyChangeRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/proxy/configuration`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Internet proxy
     * @name DeleteSingleDcConfiguration
     * @summary Remove cluster proxy configuration
     * @request DELETE:/proxy/configuration
     * @secure
     */
    deleteSingleDcConfiguration: (params: RequestParams = {}) =>
      this.request<InternetProxy, void>({
        path: `/proxy/configuration`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Internet proxy
     * @name GetAllMultiDcConfigurations
     * @summary Get proxy configurations for all Data Centers (Multi Data Center deployment)
     * @request GET:/proxy/configurations
     * @secure
     */
    getAllMultiDcConfigurations: (params: RequestParams = {}) =>
      this.request<ProxyConfigurations, any>({
        path: `/proxy/configurations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Internet proxy
     * @name GetOneOfMultiDcConfiguration
     * @summary Get Data Center proxy configuration (Multi Data Center deployment)
     * @request GET:/proxy/configurations/{dc}
     * @secure
     */
    getOneOfMultiDcConfiguration: (dc: string, params: RequestParams = {}) =>
      this.request<InternetProxy, void>({
        path: `/proxy/configurations/${dc}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Internet proxy
     * @name ModifyOneOfMultiDcConfiguration
     * @summary Set/update Data Center proxy configuration (Multi Data Center deployment)
     * @request PUT:/proxy/configurations/{dc}
     * @secure
     */
    modifyOneOfMultiDcConfiguration: (dc: string, data: InternetProxyChangeRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/proxy/configurations/${dc}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Internet proxy
     * @name DeleteOneOfMultiDcConfiguration
     * @summary Remove Data Center proxy configuration (Multi Data Center deployment)
     * @request DELETE:/proxy/configurations/{dc}
     * @secure
     */
    deleteOneOfMultiDcConfiguration: (dc: string, params: RequestParams = {}) =>
      this.request<InternetProxy, void>({
        path: `/proxy/configurations/${dc}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  passwordPolicy = {
    /**
     * No description
     *
     * @tags Password policy
     * @name GetDefaultPasswordPolicy
     * @summary Get default's realm password policy configuration
     * @request GET:/passwordPolicy
     * @secure
     */
    getDefaultPasswordPolicy: (params: RequestParams = {}) =>
      this.request<PasswordPolicy, void>({
        path: `/passwordPolicy`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Password policy
     * @name UpdatePasswordPolicy
     * @summary Update password policy configuration
     * @request PUT:/passwordPolicy
     * @secure
     */
    updatePasswordPolicy: (data: PasswordPolicy, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope | void>({
        path: `/passwordPolicy`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
