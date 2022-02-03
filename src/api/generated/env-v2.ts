import { APIBase } from "../../apibase";
import { RequestOptions as RequestParams } from "@dt-esa/dynatrace-api-balancer";
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

  /** A list of environments (specified by IDs) the ActiveGate can connect to. */
  environments?: string[];

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
  /** A list of update jobs of the ActiveGate. */
  updateJobs?: UpdateJob[];

  /**
   * The ID of the ActiveGate.
   * @example 0x3efdd092
   */
  agId?: string;
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

  /** Information about hosts currently connected to the ActiveGate */
  connectedHosts?: ActiveGateConnectedHosts;
}

/**
 * Information about hosts currently connected to the ActiveGate
 */
export interface ActiveGateConnectedHosts {
  /**
   * The number of hosts currently connected to the ActiveGate
   * @format int32
   * @example 150
   */
  number?: number;
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

  /** The module is enabled (`true`) or disabled (`false`). */
  enabled?: boolean;
}

/**
 * The short representation of a newly created custom device.
 */
export interface CustomDeviceCreationResult {
  /** The Dynatrace entity ID of the custom device. */
  entityId?: string;

  /** The Dynatrace entity ID of the custom device group. */
  groupId?: string;
}

/**
 * Configuration of a custom device.
 * @example {"customDeviceId":"customDeviceId","displayName":"coffeeMachine","group":"myCustomDeviceGroup","ipAddresses":["10.0.0.1"],"listenPorts":[80],"faviconUrl":"https://www.freefavicon.com/freefavicons/food/cup-of-coffee-152-78475.png","configUrl":"http://coffee-machine.dynatrace.internal.com/coffeemachine/manage","type":"coffee machine","properties":{},"dnsNames":["coffee-machine.dynatrace.internal.com"]}
 */
export interface CustomDeviceCreation {
  /**
   * The internal ID of the custom device.
   *
   *  If you use the ID of an existing device, the respective parameters will be updated.
   */
  customDeviceId: string;

  /** The name of the custom device to be displayed in the user interface. */
  displayName: string;

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
   * If ports are specified, you should also add at least one IP address or a DNS name for the custom device.
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
  faviconUrl?: string;

  /** The URL of a configuration web page for the custom device, such as a login page for a firewall or router. */
  configUrl?: string;

  /** The list of key-value pair properties that will be shown beneath the infographics of your custom device. */
  properties?: Record<string, string>;

  /**
   * The list of DNS names related to the custom device.
   *
   * These names are used to automatically discover the horizontal communication relationship between this component and all other observed components within Smartscape. Once a connection is discovered, it is automatically mapped and shown within Smartscape.
   * If you send a value, the existing values will be overwritten.
   * If you send `null` or an empty value; or omit this field, the existing values will be kept.
   */
  dnsNames?: string[];
  messageType?:
    | "CUSTOM_DEVICE"
    | "DELETE_ENTITY_PER_TYPE"
    | "FILTER_VALUE_SUGGESTIONS"
    | "MULTI"
    | "MULTI_TYPE"
    | "SINGLE"
    | "SINGLE_TYPE";
}

/**
 * A list of properties of the monitored entity type.
 * @example {"type":"HOST","entityLimitExceeded":"false","properties":[{"id":"BITNESS","type":"Enum"},{"id":"CPU_CORES","type":"Number"}],"tags":"placeholder for tags","managementZones":"placeholder for management zones","fromRelationships":[{"id":"RUNS_ON_RESOURCE","toTypes":["CUSTOM_DEVICE"]},{"id":"IS_NETWORK_CLIENT_OF_HOST","toTypes":["HOST","CUSTOM_DEVICE"]}],"toRelationships":[{"id":"IS_DISK_OF","fromTypes":["DISK"]},{"id":"IS_SITE_OF","fromTypes":["VMWARE_DATACENTER","GEOLOC_SITE"]}]}
 */
export interface EntityType {
  /** Whether the entity creation limit for the given type has been exceeded */
  entityLimitExceeded?: boolean;

  /** A list of possible relationships where the monitored entity type occupies the FROM position */
  fromRelationships?: ToPosition[];

  /** A list of possible relationships where the monitored entity type occupies the TO position. */
  toRelationships?: FromPosition[];

  /** The dimension key used within metrics for this monitored entity. */
  dimensionKey?: string;

  /** The placeholder for the list of management zones of an actual entity. */
  managementZones?: string;

  /** A list of additional properties of the monitored entity type. */
  properties?: EntityTypePropertyDto[];

  /** The type of the monitored entity. */
  type?: string;

  /** The display name of the monitored entity. */
  displayName?: string;

  /** The placeholder for the list of tags of an actual entity. */
  tags?: string;
}

/**
 * A list of properties of all available entity types.
 */
export interface EntityTypeList {
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

  /** The list of meta information for all available entity-types */
  types?: EntityType[];
}

/**
 * The property of a monitored entity.
 */
export interface EntityTypePropertyDto {
  /**
   * The ID of the property.
   * @example cpuCores
   */
  id?: string;

  /**
   * The type of the property.
   * @example Number
   */
  type?: string;

  /**
   * The display-name of the property.
   * @example cpu cores
   */
  displayName?: string;
}

/**
 * The FROM position of a relationship.
 */
export interface FromPosition {
  /** A list of monitored entity types that can occupy the FROM position. */
  fromTypes?: string[];

  /** The ID of the relationship. */
  id?: string;
}

/**
 * The TO position of a relationship.
 */
export interface ToPosition {
  /** A list of monitored entity types that can occupy the TO position. */
  toTypes?: string[];

  /** The ID of the relationship. */
  id?: string;
}

/**
 * A list of monitored entities along with their properties.
 */
export interface EntitiesList {
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

  /** A list of monitored entities. */
  entities?: Entity[];
}

/**
 * The properties of a monitored entity.
 * @example {"entityId":"HOST-06F288EE2A930951","displayName":"my host","icon":{"primaryIconType":"linux","secondaryIconType":"microsoft-azure-signet","customIconPath":"host"},"firstSeenTms":1574697667547,"lastSeenTms":1588242361417,"properties":{"bitness":64,"monitoringMode":"FULL_STACK","osType":"LINUX","osArchitecture":"X86","networkZoneId":"aws.us.east01","cpuCores":8},"tags":[{"context":"CONTEXTLESS","key":"architecture","value":"x86","stringRepresentation":"architecture:x86"},{"context":"ENVIRONMENT","key":"Infrastructure","value":"Linux","stringRepresentation":"[ENVIRONMENT]Infrastructure:Linux"}],"managementZones":[{"id":"6239538939987181652","name":"main app"}],"fromRelationships":{"isInstanceOf":[{"id":"HOST_GROUP-0E489369D663A4BF","type":"HOST_GROUP"}]},"toRelationships":{"isDiskOf":[{"id":"DISK-0393340DCA3853B0","type":"DISK"}]}}
 */
export interface Entity {
  /**
   * The timestamp at which the entity was last seen, in UTC milliseconds.
   * @format int64
   */
  lastSeenTms?: number;

  /**
   * The timestamp at which the entity was first seen, in UTC milliseconds.
   * @format int64
   */
  firstSeenTms?: number;

  /** A list of relationships where the entity occupies the FROM position. */
  fromRelationships?: Record<string, EntityId[]>;

  /** A list of relationships where the entity occupies the TO position. */
  toRelationships?: Record<string, EntityId[]>;

  /** A set of management zones to which the entity belongs. */
  managementZones?: ManagementZone[];

  /** The ID of the entity. */
  entityId?: string;

  /** The icon of a monitored entity. */
  icon?: EntityIcon;

  /** A list of additional properties of the entity. */
  properties?: Record<string, object>;

  /** The name of the entity, displayed in the UI. */
  displayName?: string;

  /** A set of tags assigned to the entity. */
  tags?: METag[];
}

/**
 * The icon of a monitored entity.
 */
export interface EntityIcon {
  /**
   * The primary icon of the entity.
   *
   * Specified by the [barista](https://dt-url.net/u403suy) ID of the icon.
   */
  primaryIconType?: string;

  /**
   * The secondary icon of the entity.
   *
   * Specified by the [barista](https://dt-url.net/u403suy) ID of the icon.
   */
  secondaryIconType?: string;

  /**
   * The user-defined icon of the entity.
   *
   * Specify the [barista](https://dt-url.net/u403suy) ID of the icon or a URL of your own icon.
   */
  customIconPath?: string;
}

/**
 * A short representation of a monitored entity.
 */
export interface EntityId {
  /** The ID of the entity. */
  id?: string;

  /** The type of the entity. */
  type?: string;
}

/**
 * The tag of a monitored entity.
 */
export interface METag {
  /** The string representation of the tag. */
  stringRepresentation?: string;

  /** The value of the tag. */
  value?: string;

  /** The key of the tag. */
  key?: string;

  /**
   * The origin of the tag, such as AWS or Cloud Foundry.
   *
   *  Custom tags use the `CONTEXTLESS` value.
   */
  context?: string;
}

/**
 * A short representation of a management zone.
 */
export interface ManagementZone {
  /** The name of the management zone. */
  name?: string;

  /** The ID of the management zone. */
  id?: string;
}

/**
 * Configuration of an event property.
 */
export interface EventPropertyDetail {
  /**
   * The event property key.
   * @example dt.event.description
   */
  key?: string;

  /**
   * The display name of the event property.
   * @example Custom description
   */
  displayName?: string;

  /** A short description of the event property. */
  description?: string;

  /** Indicates whether the property may be set during event ingestion. */
  writable?: boolean;
}

/**
 * A list of event properties.
 */
export interface EventPropertyDetails {
  /** A list of event properties. */
  eventProperties?: EventPropertyDetail[];

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

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
}

/**
 * Configuration of an event type.
 */
export interface EventType {
  /**
   * The severity level associated with the event type.
   * @example PERFORMANCE
   */
  severityLevel?:
    | "AVAILABILITY"
    | "CUSTOM_ALERT"
    | "ERROR"
    | "INFO"
    | "MONITORING_UNAVAILABLE"
    | "PERFORMANCE"
    | "RESOURCE_CONTENTION";

  /**
   * The event type.
   * @example OSI_HIGH_CPU
   */
  type?: string;

  /**
   * The display name of the event type.
   * @example High CPU
   */
  displayName?: string;

  /** A short description of the event type. */
  description?: string;
}

/**
 * A list of event types.
 */
export interface EventTypeList {
  /** A list of event types. */
  eventTypeInfos?: EventType[];

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

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
}

/**
 * The result of a created event report.
 */
export interface EventIngestResult {
  /** The status of the ingestion. */
  status?: "INVALID_ENTITY_TYPE" | "INVALID_METADATA" | "INVALID_TIMESTAMPS" | "OK";

  /** The correlation ID of the created event. */
  correlationId?: string;
}

/**
 * The results of an event ingest.
 */
export interface EventIngestResults {
  /** The result of each created event report. */
  eventIngestResults?: EventIngestResult[];

  /**
   * The number of created event reports.
   * @format int32
   */
  reportCount?: number;
}

/**
 * The configuration of an event to be ingested.
 */
export interface EventIngest {
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
    | "RESOURCE_CONTENTION_EVENT";

  /** The title of the event. */
  title: string;

  /**
   * The start time of the event, in UTC milliseconds.
   *
   * If not set, the current timestamp is used.
   * @format int64
   */
  startTime?: number;

  /**
   * The end time of the event, in UTC milliseconds.
   *
   * If not set, the start time plus timeout is used.
   * @format int64
   */
  endTime?: number;

  /**
   * The timeout of the event, in minutes.
   *
   * If not set, 15 is used.
   * @format int32
   */
  timeout?: number;

  /**
   * The [entity selector](https://dt-url.net/apientityselector), defining a set of Dynatrace entities to be associated with the event.
   *
   * Only entities that have been active within the last 24 hours can be selected.
   *  If not set, the event is associated with the environment (`dt.entity.environment`) entity.
   */
  entitySelector?: string;

  /**
   * A map of event properties.
   *
   * Keys with prefix `dt.*` are reserved and may be used to set event properties with predefined semantics within the Dynatrace product.
   * All other keys are interpreted as user-defined event properties.
   * Values of Dynatrace-reserved properties (identified by a key with prefix `dt.*`) must fulfill the requirements of the respective property.
   */
  properties?: Record<string, string>;
}

/**
 * A short representation of a monitored entity.
 */
export interface EntityStub {
  /** A short representation of a monitored entity. */
  entityId?: EntityId;

  /**
   * The name of the entity.
   *
   *  Not included in the response in case no entity with the relevant ID was found.
   */
  name?: string;
}

/**
 * Configuration of an event.
 */
export interface Event {
  /**
   * If `true`, the event happens [frequently](https://dt-url.net/4da3kdg).
   *
   *  A frequent event doesn't raise a problem.
   */
  frequentEvent?: boolean;

  /**
   * The alerting status during a [maintenance](https://dt-url.net/b2123rg0):
   *
   *  * `false`: Alerting works as usual.
   * * `true`: Alerting is disabled.
   */
  suppressAlert?: boolean;

  /** If `true`, the event happened while the monitored system was under maintenance. */
  underMaintenance?: boolean;

  /**
   * The problem detection status during a [maintenance](https://dt-url.net/b2123rg0):
   *
   *  * `false`: Problem detection works as usual.
   * * `true`: Problem detection is disabled.
   */
  suppressProblem?: boolean;

  /** A list of all management zones that the event belongs to. */
  managementZones?: ManagementZone[];

  /** A short representation of a monitored entity. */
  entityId?: EntityStub;

  /**
   * The ID of the event.
   * @example 4293884258445543163_1564039524182
   */
  eventId?: string;

  /** A list of tags of the related entity. */
  entityTags?: METag[];

  /**
   * The type of the event.
   * @example LOW_DISK_SPACE
   */
  eventType?: string;

  /** A list of event properties. */
  properties?: EventProperty[];

  /**
   * The status of the event.
   * @example OPEN
   */
  status?: "CLOSED" | "OPEN";

  /**
   * The timestamp when the event was raised, in UTC milliseconds.
   * @format int64
   * @example 1564039524182
   */
  startTime?: number;

  /**
   * The timestamp when the event was closed, in UTC milliseconds.
   *
   *  Has the value of `null` if the event is still active.
   * @format int64
   * @example 1564039524182
   */
  endTime?: number;

  /**
   * The correlation ID of the event.
   * @example 933613657e1c8fcf
   */
  correlationId?: string;

  /**
   * The title of the event.
   * @example High CPU load on host X
   */
  title?: string;
}

/**
 * A property of an event.
 */
export interface EventProperty {
  /** The value of the event property. */
  value?: string;

  /** The key of the event property. */
  key?: string;
}

/**
 * A list of events.
 */
export interface EventList {
  /** A list of warnings. */
  warnings?: string[];

  /** A list of events. */
  events?: Event[];

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

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
}

/**
 * The default aggregation of a metric.
 */
export interface MetricDefaultAggregation {
  /** The type of default aggregation. */
  type?: "auto" | "avg" | "count" | "max" | "median" | "min" | "percentile" | "sum" | "value";

  /**
   * The percentile to be delivered. Valid values are between `0` and `100`.
   *
   * Applicable only to the `percentile` aggregation type.
   * @format double
   */
  parameter?: number;
}

/**
 * The descriptor of a metric.
 * @example {"metricId":"builtin:host.cpu.user:splitBy(\"dt.entity.host\"):max:fold","displayName":"CPU user","description":"Percentage of user-space CPU time currently utilized, per host.","unit":"Percent","dduBillable":false,"created":1597400123451,"lastWritten":1597400717783,"entityType":["HOST"],"aggregationTypes":["auto","value"],"transformations":["filter","fold","limit","merge","names","parents","timeshift","rate","sort","last","splitBy"],"defaultAggregation":{"type":"value"},"dimensionDefinitions":[{"key":"dt.entity.host","name":"Host","displayName":"Host","index":0,"type":"ENTITY"}],"tags":[],"metricValueType":{"type":"unknown"},"latency":1,"scalar":false}
 */
export interface MetricDescriptor {
  /**
   * The maximum allowed value of the metric.
   *
   *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
   * @format double
   */
  maximumValue?: number;

  /**
   * The timestamp when the metric was last written.
   *
   * Has the value of `null` for metric expressions or if the data has never been written.
   * @format int64
   */
  lastWritten?: number;

  /**
   * If `true` the usage of metric consumes [Davis data units](https://dt-url.net/ddu).
   *
   *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
   */
  dduBillable?: boolean;

  /**
   * The latency of the metric, in minutes.
   *
   *  The latency is the expected reporting delay (for example, caused by constraints of cloud vendors or other third-party data sources) between the observation of a metric data point and its availability in Dynatrace.
   * The allowed value range is from 1 to 60 minutes.
   *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
   * @format int64
   */
  latency?: number;

  /**
   * The minimum allowed value of the metric.
   *
   *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
   * @format double
   */
  minimumValue?: number;

  /** If 'true', resolution=Inf can be applied to the metric query. */
  resolutionInfSupported?: boolean;

  /** The default aggregation of a metric. */
  defaultAggregation?: MetricDefaultAggregation;

  /**
   * The fine metric division (for example, process group and process ID for some process-related metric).
   *
   * For [ingested metrics](https://dt-url.net/5d63ic1), dimensions that doesn't have have any data within the last 15 days are omitted.
   */
  dimensionDefinitions?: MetricDimensionDefinition[];

  /**
   * The metric is (`true`) or is not (`false`) root cause relevant.
   *
   *  A root-cause relevant metric represents a strong indicator for a faulty component.
   *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
   */
  rootCauseRelevant?: boolean;

  /**
   * The metric is (`true`) or is not (`false`) impact relevant.
   *
   *  An impact-relevant metric is highly dependent on other metrics and changes because an underlying root-cause metric has changed.
   *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
   */
  impactRelevant?: boolean;

  /** List of admissible primary entity types for this metric. Can be used for the `type` predicate in the `entitySelector`. */
  entityType?: string[];

  /**
   * The fully qualified key of the metric.
   *
   * If a transformation has been used it is reflected in the metric key.
   */
  metricId: string;

  /** The metric selector that is used when querying a func: metric. */
  metricSelector?: string;

  /**
   * Indicates whether the metric expression resolves to a scalar (`true`) or to a series (`false`).
   * A scalar result always contains one data point. The amount of data points in a series result depends on the resolution you're using.
   */
  scalar?: boolean;

  /** The list of allowed aggregations for this metric. */
  aggregationTypes?: ("auto" | "avg" | "count" | "max" | "median" | "min" | "percentile" | "sum" | "value")[];

  /** The value type for the metric. */
  metricValueType?: MetricValueType;

  /**
   * The timestamp of metric creation.
   *
   * Built-in metrics and metric expressions have the value of `null`.
   * @format int64
   */
  created?: number;

  /** A list of potential warnings that affect this ID. For example deprecated feature usage etc. */
  warnings?: string[];

  /** The name of the metric in the user interface. */
  displayName?: string;

  /** A short description of the metric. */
  description?: string;

  /** Transform operators that could be appended to the current transformation list. */
  transformations?: (
    | "asGauge"
    | "default"
    | "delta"
    | "filter"
    | "fold"
    | "last"
    | "lastReal"
    | "limit"
    | "merge"
    | "names"
    | "parents"
    | "partition"
    | "rate"
    | "rollup"
    | "smooth"
    | "sort"
    | "splitBy"
    | "timeshift"
    | "toUnit"
  )[];

  /** The unit of the metric. */
  unit?:
    | "Bit"
    | "BitPerHour"
    | "BitPerMinute"
    | "BitPerSecond"
    | "Byte"
    | "BytePerHour"
    | "BytePerMinute"
    | "BytePerSecond"
    | "Cores"
    | "Count"
    | "Day"
    | "DecibelMilliWatt"
    | "GibiByte"
    | "Giga"
    | "GigaByte"
    | "Hour"
    | "KibiByte"
    | "KibiBytePerHour"
    | "KibiBytePerMinute"
    | "KibiBytePerSecond"
    | "Kilo"
    | "KiloByte"
    | "KiloBytePerHour"
    | "KiloBytePerMinute"
    | "KiloBytePerSecond"
    | "MSU"
    | "MebiByte"
    | "MebiBytePerHour"
    | "MebiBytePerMinute"
    | "MebiBytePerSecond"
    | "Mega"
    | "MegaByte"
    | "MegaBytePerHour"
    | "MegaBytePerMinute"
    | "MegaBytePerSecond"
    | "MicroSecond"
    | "MilliCores"
    | "MilliSecond"
    | "MilliSecondPerMinute"
    | "Minute"
    | "Month"
    | "NanoSecond"
    | "NanoSecondPerMinute"
    | "NotApplicable"
    | "PerHour"
    | "PerMinute"
    | "PerSecond"
    | "Percent"
    | "Pixel"
    | "Promille"
    | "Ratio"
    | "Second"
    | "State"
    | "Unspecified"
    | "Week"
    | "Year";

  /**
   * The tags applied to the metric.
   *
   *  [Metric expressions](https://dt-url.net/metricExpression) don't return this field.
   */
  tags?: string[];
}

/**
 * A list of metrics along with their descriptors.
 * @example {"totalCount":3,"nextPageKey":"ABCDEFABCDEFABCDEF_","metrics":[{"metricId":"builtin:host.cpu.user:splitBy(\"dt.entity.host\"):max:fold","displayName":"CPU user","description":"Percentage of user-space CPU time currently utilized, per host.","unit":"Percent","dduBillable":false,"created":1597400123451,"lastWritten":1597400717783,"entityType":["HOST"],"aggregationTypes":["auto","value"],"transformations":["filter","fold","limit","merge","names","parents","timeshift","rate","sort","last","splitBy"],"defaultAggregation":{"type":"value"},"dimensionDefinitions":[{"key":"dt.entity.host","name":"Host","displayName":"Host","index":0,"type":"ENTITY"}],"tags":[],"metricValueType":{"type":"unknown"}},{"metricId":"builtin:host.cpu.user:splitBy()","displayName":"CPU user","description":"Percentage of user-space CPU time currently utilized, per host.","unit":"Percent","dduBillable":false,"created":1597400123451,"lastWritten":1597400717783,"entityType":["HOST"],"aggregationTypes":["auto","value"],"transformations":["filter","fold","limit","merge","names","parents","timeshift","rate","sort","last","splitBy"],"defaultAggregation":{"type":"value"},"dimensionDefinitions":[{"key":"dt.entity.host","name":"Host","displayName":"Host","index":0,"type":"ENTITY"}],"tags":[],"metricValueType":{"type":"unknown"}}]}
 */
export interface MetricDescriptorCollection {
  /**
   * The estimated number of metrics in the result.
   * @format int64
   */
  totalCount: number;

  /**
   * The cursor for the next page of results. Has the value of `null` on the last page.
   *
   * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
   */
  nextPageKey: string;

  /** A list of potential warnings about the query. For example deprecated feature usage etc. */
  warnings?: string[];

  /** A list of metric along with their descriptors */
  metrics?: MetricDescriptor[];
}

/**
 * The dimension of a metric.
 */
export interface MetricDimensionDefinition {
  /** The name of the dimension. */
  name: string;

  /**
   * The key of the dimension.
   *
   *  It must be unique within the metric.
   */
  key: string;

  /** The type of the dimension. */
  type: "ENTITY" | "NUMBER" | "OTHER" | "STRING" | "VOID";

  /** The display name of the dimension. */
  displayName: string;

  /**
   * The unique 0-based index of the dimension.
   *
   *  Appending transformations such as :names or :parents may change the indexes of dimensions. `null` is used for the dimensions of a metric with flexible dimensions, which can be referenced with their dimension key, but do not have an intrinsic order that could be used for the index.
   * @format int32
   */
  index: number;
}

/**
 * The value type for the metric.
 */
export interface MetricValueType {
  /** The metric value type */
  type: "error" | "score" | "unknown";
}

/**
 * A list of metrics and their data points.
 * @example {"totalCount":3,"nextPageKey":"null","resolution":"1h","warnings":["The contains filter transformation is deprecated and will be removed in a future release."],"result":[{"metricId":"builtin:host.disk.avail","data":[{"dimensions":["HOST-F1266E1D0AAC2C3C","DISK-F1266E1D0AAC2C3F"],"timestamps":[3151435100000,3151438700000,3151442300000],"values":[11.1,22.2,33.3]},{"dimensions":["HOST-F1266E1D0AAC2C3C","DISK-F1266E1D0AAC2C3D"],"timestamps":[3151435100000,3151438700000,3151442300000],"values":[111.1,222.2,333.3]}]},{"metricId":"builtin:host.cpu.idle","data":[{"dimensions":["HOST-F1266E1D0AAC2C3C"],"timestamps":[3151435100000,3151438700000,3151442300000],"values":[1.1,2.2,3.3]}]}]}
 */
export interface MetricData {
  /**
   * The total number of primary entities in the result.
   *
   * Has the `0` value if none of the requested metrics is suitable for pagination.
   * @format int64
   */
  totalCount: number;

  /** Deprecated. This field is returned for compatibility reasons. It always has the value of `null`. */
  nextPageKey?: string;

  /** The timeslot resolution in the result. */
  resolution: string;

  /** A list of warnings */
  warnings?: string[];

  /** A list of metrics and their data points. */
  result?: MetricSeriesCollection[];
}

/**
* Data points per dimension of a metric. 

The data is represented by two arrays of the same length: **timestamps** and **values**. Entries of the same index from both arrays form a timestamped data point.
* @example {"dimensions":["HOST-F1266E1D0AAC2C3C"],"timestamps":[3151435100000,3151438700000,3151442300000],"values":[1.1,2.2,3.3]}
*/
export interface MetricSeries {
  /**
   * A list of timestamps of data points.
   *
   * The value of data point for each time from this array is located in **values** array at the same index.
   */
  timestamps?: number[];
  dimensionMap: Record<string, string>;

  /**
   * The ordered list of dimensions to which the data point list belongs.
   *
   *  Each metric can have a certain number of dimensions. Dimensions exceeding this number are aggregated into one, which is shown as `null` here.
   */
  dimensions?: string[];

  /**
   * A list of values of data points.
   *
   * The timestamp of data point for each value from this array is located in **timestamps** array at the same index.
   */
  values?: number[];
}

/**
 * Data points of a metric.
 * @example {"metricId":"builtin:host.disk.avail","data":[{"dimensions":["HOST-F1266E1D0AAC2C3C","DISK-F1266E1D0AAC2C3F"],"timestamps":[3151435100000,3151438700000,3151442300000],"values":[11.1,22.2,33.3]},{"dimensions":["HOST-F1266E1D0AAC2C3C","DISK-F1266E1D0AAC2C3D"],"timestamps":[3151435100000,3151438700000,3151442300000],"values":[111.1,222.2,333.3]}]}
 */
export interface MetricSeriesCollection {
  /**
   * The key of the metric.
   *
   * If any transformation is applied, it is included here.
   */
  metricId: string;

  /** A list of potential warnings that affect this ID. For example deprecated feature usage etc. */
  warnings?: string[];

  /** Data points of the metric. */
  data?: MetricSeries[];
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
   * The number of OneAgents from other network zones that are using ActiveGates in the network zone.
   *
   *  This is a fraction of **numOfOneAgentsUsing**.
   * One possible reason for switching to another zone is that a firewall is preventing a OneAgent from connecting to any ActiveGate in the preferred network zone.
   * @format int32
   */
  numOfOneAgentsFromOtherZones?: number;

  /**
   * The number of ActiveGates in the network zone.
   * @format int32
   */
  numOfConfiguredActiveGates?: number;

  /**
   * The number of OneAgents that are configured to use the network zone as primary.
   * @format int32
   */
  numOfConfiguredOneAgents?: number;

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

/**
 * Global network zone configuration.
 */
export interface NetworkZoneSettings {
  /** Network zones feature is enabled (`true`) or disabled (`false`). */
  networkZonesEnabled?: boolean;
}

/**
 * Deleted custom tag.
 * @example {"matchedEntitiesCount":2}
 */
export interface DeletedEntityTags {
  /**
   * The number of monitored entities where the tag has been deleted.
   * @format int64
   */
  matchedEntitiesCount?: number;
}

/**
 * A list of custom tags added to monitored entities.
 * @example {"appliedTags":[{"context":"CONTEXTLESS","key":"mainApp","stringRepresentation":"mainApp"},{"context":"CONTEXTLESS","key":"booking","stringRepresentation":"booking"}],"matchedEntitiesCount":2}
 */
export interface AddedEntityTags {
  /**
   * The number of monitored entities where the tags have been added.
   * @format int64
   */
  matchedEntitiesCount?: number;

  /** A list of added custom tags. */
  appliedTags?: { empty?: boolean };
}

/**
 * The custom tag to be added to monitored entities.
 */
export interface AddEntityTag {
  /** The value of the custom tag to be added to monitored entities. May be null */
  value?: string;

  /** The key of the custom tag to be added to monitored entities. */
  key: string;
}

/**
 * A list of tags to be added to monitored entities.
 * @example {"tags":[{"key":"mainApp"},{"key":"bookings","value":"42"}]}
 */
export interface AddEntityTags {
  /** A list of tags to be added to monitored entities. */
  tags: AddEntityTag[];
}

/**
 * A list of custom tags.
 * @example {"totalCount":2,"tags":[{"context":"CONTEXTLESS","key":"mainApp","stringRepresentation":"mainApp"},{"context":"CONTEXTLESS","key":"bookings","stringRepresentation":"bookings"}]}
 */
export interface CustomEntityTags {
  /**
   * The total number of tags in the response.
   * @format int64
   */
  totalCount?: number;

  /** A list of custom tags. */
  tags: { empty?: boolean };
}

/**
 * Metadata of an ActiveGate token.
 */
export interface ActiveGateToken {
  /**
   * The ID of the token, consisting of [prefix and public part](https://dt-url.net/2903ss4) of the token.
   * @example dt0g02.4KWZO5EF
   */
  id?: string;

  /**
   * The name of the token.
   * @example myToken
   */
  name?: string;

  /**
   * The owner of the token.
   * @example john.smith
   */
  owner?: string;

  /**
   * The token creation date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
   * @example 2020-11-22T08:15:30.144Z
   */
  creationDate?: string;

  /**
   * The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
   *
   *  If not set, the token never expires.
   * @example 2020-11-24T08:15:30.144Z
   */
  expirationDate?: string;

  /**
   * The token last used date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
   * @example 2020-11-23T08:15:30.144Z
   */
  lastUsedDate?: string;

  /**
   * The token is a seed token (`true`) or an individual token (`false`).
   * @example false
   */
  seedToken?: boolean;

  /** The type of the ActiveGate for which the token is valid. */
  activeGateType?: "ENVIRONMENT" | "CLUSTER";
}

/**
 * A list of ActiveGate tokens.
 * @example {"totalCount":1000,"pageSize":100,"nextPageKey":"AAAAAAAAAAAAAABOAAAAAAAAAAAAAAA6ACQAEAAAABgACgAITFdXQk1BRzYAAAhtZXRhZGF0YQB___-bf___m3iIYxfF7xVQvY72rwblQkcAAwAAAAAAAADHAAAAZA==","activeGateTokens":{"id":"dt0g02.4KWZO5EF","name":"myToken","owner":"john.smith","creationDate":"2020-11-22T08:15:30.144Z","expirationDate":"2020-11-24T08:15:30.144Z","lastUsedDate":"2020-11-23T08:15:30.144Z","seedToken":"false","activeGateType":"ENVIRONMENT"}}
 */
export interface ActiveGateTokenList {
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

  /** A list of ActiveGate tokens. */
  activeGateTokens?: { empty?: boolean };
}

/**
 * The newly created ActiveGate token.
 */
export interface ActiveGateTokenCreated {
  /**
   * The ID of the token, consisting of prefix and public part of the token.
   * @example dt0g02.4KWZO5EF
   */
  id?: string;

  /**
   * The secret of the token.
   * @example dt0g02.4KWZO5EF.XT47R5DRADJIZUFOX4UDNOKTSUSABGLN7XSMJG7UXHRXKNY4WLORH4OF4T75MG7E
   */
  token?: string;

  /**
   * The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
   * @example 2020-11-24T08:15:30.144Z
   */
  expirationDate?: string;
}

/**
 * Parameters of a new ActiveGate token.
 */
export interface ActiveGateTokenCreate {
  /**
   * The name of the token.
   * @example myToken
   */
  name: string;

  /**
   * The expiration date of the token.
   *
   * You can use one of the following formats:
   * * Timestamp in UTC milliseconds.
   * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
   * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
   * You can also specify relative timeframe without an alignment: `now-NU`.
   * Supported time units for the relative timeframe are:
   *    * `m`: minutes
   *    * `h`: hours
   *    * `d`: days
   *    * `w`: weeks
   *    * `M`: months
   *    * `y`: years
   * If not set, the token never expires.
   * @example now+14d
   */
  expirationDate?: string;

  /**
   * The token is a seed token (`true`) or an individual token (`false`).
   *
   *  We recommend the individual token option (false).
   * @example false
   */
  seedToken?: boolean;

  /** The type of the ActiveGate for which the token is valid. */
  activeGateType: "ENVIRONMENT" | "CLUSTER";
}

/**
 * The newly created token.
 */
export interface ApiTokenCreated {
  /**
   * The token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
   * @example 2020-11-12T08:15:30.144Z
   */
  expirationDate?: string;

  /**
   * The ID of the token, consisting of prefix and public part of the token.
   * @example dt0c01.ST2EY72KQINMH574WMNVI7YN
   */
  id?: string;

  /**
   * The secret of the token.
   * @example dt0c01.ST2EY72KQINMH574WMNVI7YN.G3DFPBEJYMODIDAEX454M7YWBUVEFOWKPRVMWFASS64NFH52PX6BNDVFFM572RZM
   */
  token?: string;
}

/**
 * Parameters of a new API token.
 */
export interface ApiTokenCreate {
  /**
   * The token is a personal access token (`true`) or an API token (`false`).
   *
   *  Personal access tokens are tied to the permissions of their owner.
   * @example false
   */
  personalAccessToken?: boolean;

  /**
   * The expiration date of the token.
   *
   * You can use one of the following formats:
   * * Timestamp in UTC milliseconds.
   * * Human-readable format of `2021-01-25T05:57:01.123+01:00`. If no time zone is specified, UTC is used. You can use a space character instead of the `T`. Seconds and fractions of a second are optional.
   * * Relative timeframe, back from now. The format is `now-NU/A`, where `N` is the amount of time, `U` is the unit of time, and `A` is an alignment. The alignment rounds all the smaller values to the nearest zero in the past. For example, `now-1y/w` is one year back, aligned by a week.
   * You can also specify relative timeframe without an alignment: `now-NU`.
   * Supported time units for the relative timeframe are:
   *    * `m`: minutes
   *    * `h`: hours
   *    * `d`: days
   *    * `w`: weeks
   *    * `M`: months
   *    * `y`: years
   * If not set, the token never expires.
   * @example now+14d
   */
  expirationDate?: string;

  /**
   * The name of the token.
   * @example tokenName
   */
  name: string;

  /**
   * A list of the scopes to be assigned to the token.
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
 * Metadata of an API token.
 */
export interface ApiToken {
  /**
   * Token last used IP address.
   * @example 34.197.2.44
   */
  lastUsedIpAddress?: string;

  /**
   * Token expiration date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`).
   *
   *  If not set, the token never expires.
   * @example 2020-11-12T08:15:30.144Z
   */
  expirationDate?: string;

  /**
   * The token is a [personal access token](https://dt-url.net/wm03sop) (`true`) or an API token (`false`).
   * @example true
   */
  personalAccessToken?: boolean;

  /**
   * Token last used date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`)
   * @example 2020-11-12T08:15:30.144Z
   */
  lastUsedDate?: string;

  /**
   * Token creation date in ISO 8601 format (`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`)
   * @example 2020-11-05T08:15:30.144Z
   */
  creationDate?: string;

  /**
   * The name of the token.
   * @example myToken
   */
  name?: string;

  /**
   * The ID of the token, consisting of prefix and public part of the token.
   * @example dt0c01.ST2EY72KQINMH574WMNVI7YN
   */
  id?: string;

  /**
   * The owner of the token.
   * @example john.smith
   */
  owner?: string;

  /**
   * The token is enabled (`true`) or disabled (`false`).
   * @example true
   */
  enabled?: boolean;

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
}

/**
 * The update of the API token.
 */
export interface ApiTokenUpdate {
  /**
   * The name of the token.
   * @example myToken
   */
  name?: string;

  /**
   * The token is enabled (`true`) or disabled (`false`)
   * @example true
   */
  enabled?: boolean;
}

export interface ApiTokenSecret {
  /**
   * The API token.
   * @example dt0c01.ST2EY72KQINMH574WMNVI7YN.G3DFPBEJYMODIDAEX454M7YWBUVEFOWKPRVMWFASS64NFH52PX6BNDVFFM572RZM
   */
  token: string;
}

/**
 * A list of API tokens.
 * @example {"pageSize":"1","totalCount":"1","apiTokens":{"id":"dt0c01.ST2EY72KQINMH574WMNVI7YN","name":"tokenName","revoked":"false","personalAccessToken":"true","owner":"john.smith","creationDate":"2020-11-05T08:15:30.144Z","expirationDate":"2020-11-12T08:15:30.144Z","lastUsedDate":"2020-11-12T08:15:30.144Z","lastUsedIpAddress":"34.197.2.44","scopes":["metrics.read"]}}
 */
export interface ApiTokenList {
  /** A list of API tokens. */
  apiTokens?: ApiToken[];

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

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
}

/**
 * The audit log of your environment.
 * @example {"totalCount":10,"pageSize":5,"nextPageKey":"___a7acX3q0AAAAAACJidWlsdGluOnNlcnZpY2lUVEJCUzBaNVIxVjJOSGt6Y3oyLTcwMUZWRkxlclH__9rtpxferQ","auditLogs":[{"logId":"197425568800060000","eventType":"UPDATE","category":"CONFIG","entityId":"MOBILE_RUM: MOBILE_APPLICATION-752C223D59734CD2","environmentId":"prod-env-13","user":"test.user@company.com","userType":"USER_NAME","userOrigin":"webui (192.168.0.2)","timestamp":1974255688445,"success":true,"patch":[{"op":"replace","path":"/refreshTimeIntervalMillis","value":30000,"oldValue":20000}]}]}
 */
export interface AuditLog {
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

  /** A list of audit log entries ordered by the creation timestamp. */
  auditLogs?: AuditLogEntry[];
}

/**
 * An entry of the audit log.
 * @example {"logId":"197425568800060000","eventType":"UPDATE","category":"CONFIG","entityId":"MOBILE_RUM: MOBILE_APPLICATION-752C223D59734CD2","environmentId":"prod-env-13","user":"test.user@company.com","userType":"USER_NAME","userOrigin":"webui (192.168.0.2)","timestamp":1974255688445,"success":true,"patch":[{"op":"replace","path":"/refreshTimeIntervalMillis","value":30000,"oldValue":20000}]}
 */
export interface AuditLogEntry {
  /** The ID of the log entry. */
  logId: string;

  /** The type of the recorded operation. */
  eventType:
    | "CREATE"
    | "DELETE"
    | "GENERAL"
    | "GET"
    | "LOGIN"
    | "LOGOUT"
    | "PATCH"
    | "POST"
    | "PUT"
    | "READ"
    | "REVOKE"
    | "TAG_ADD"
    | "TAG_REMOVE"
    | "TAG_UPDATE"
    | "UPDATE";

  /** The category of the recorded operation. */
  category: "CONFIG" | "DEBUG_UI" | "MANUAL_TAGGING_SERVICE" | "TOKEN" | "WEB_UI";

  /**
   * The ID of an entity from the **category**.
   *
   * For example, it can be config ID for the `CONFIG` category or token ID for the `TOKEN` category.
   */
  entityId?: string;

  /** The ID of the Dynatrace environment where the recorded operation occurred. */
  environmentId: string;

  /** The ID of the user who performed the recorded operation. */
  user: string;

  /** The type of the authentication of the **user**. */
  userType: "PUBLIC_TOKEN_IDENTIFIER" | "REQUEST_ID" | "SERVICE_NAME" | "TOKEN_HASH" | "USER_NAME";

  /** The origin and the IP address of the **user**. */
  userOrigin?: string;

  /**
   * The timestamp of the record creation, in UTC milliseconds.
   * @format int64
   */
  timestamp: number;

  /** The recorded operation is successful (`true`) or failed (`false`). */
  success: boolean;

  /** The logged message. */
  message?: string;

  /**
   * The patch of the recorded operation as the JSON representation.
   *
   * The format is an enhanced RFC 6902. The patch also carries the previous value in the **oldValue** field.
   */
  patch?: object;
}

/**
 * Parameters of a security problem
 */
export interface SecurityProblem {
  /** The ID of the security problem. */
  securityProblemId?: string;

  /** The displayId of the security problem. */
  displayId?: string;

  /** The status of the security problem. */
  status?: "OPEN" | "RESOLVED";

  /** Indicates if a security problem is muted. */
  muted?: boolean;

  /** The external vulnerability ID of the security problem. */
  externalVulnerabilityId?: string;

  /** The type of the vulnerability. */
  vulnerabilityType?: "RUNTIME" | "THIRD_PARTY";

  /** The title of the security problem. */
  title?: string;

  /** The package name of the security problem. */
  packageName?: string;

  /** The URL to the security problem details page. */
  url?: string;

  /** The technology of the security problem. */
  technology?: "DOTNET" | "JAVA" | "KUBERNETES" | "NODE_JS" | "PHP";

  /**
   * The timestamp of the first occurrence of the security problem.
   * @format int64
   */
  firstSeenTimestamp?: number;

  /**
   * The timestamp of the most recent security problem change.
   * @format int64
   */
  lastUpdatedTimestamp?: number;

  /** Risk assessment of a security problem. */
  riskAssessment?: RiskAssessment;

  /** Management zones to which the affected entities belong. */
  managementZones?: ManagementZone[];

  /** CVE IDs of the security problem. */
  cveIds?: string[];
}

/**
 * Security advice from the Davis security advisor.
 */
export interface DavisSecurityAdvice {
  /** The name of the advice. */
  name?: string;

  /** The vulnerable component to which advice applies. */
  vulnerableComponent?: string;

  /** The technology of the vulnerable component. */
  technology?: "DOTNET" | "JAVA" | "KUBERNETES" | "NODE_JS" | "PHP";

  /** The type of the advice. */
  adviceType?: "UPGRADE";

  /** IDs of `critical` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
  critical?: string[];

  /** IDs of `high` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
  high?: string[];

  /** IDs of `medium` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
  medium?: string[];

  /** IDs of `low` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
  low?: string[];

  /** IDs of `none` level [security problems](https://dt-url.net/p103u1h) caused by vulnerable component. */
  none?: string[];
}

/**
 * A list of advice from the Davis security advisor.
 */
export interface DavisSecurityAdviceList {
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
  advices?: DavisSecurityAdvice[];
}

/**
 * Risk assessment of a security problem.
 */
export interface RiskAssessment {
  /**
   * The Davis risk level.
   *
   *  It is calculated by Dynatrace on the basis of CVSS score.
   */
  riskLevel?: "CRITICAL" | "HIGH" | "LOW" | "MEDIUM" | "NONE";

  /**
   * The Davis risk score (1-10).
   *
   *  It is calculated by Dynatrace on the basis of CVSS score.
   * @format float
   */
  riskScore?: number;

  /** The attack vector calculated by DT based on the CVSS attack vector. */
  riskVector?: string;

  /** The risk level from the CVSS score. */
  baseRiskLevel?: "CRITICAL" | "HIGH" | "LOW" | "MEDIUM" | "NONE";

  /**
   * The risk score (1-10) from the CVSS score.
   * @format float
   */
  baseRiskScore?: number;

  /** The original attack vector of the CVSS assessment. */
  baseRiskVector?: string;

  /** The level of exposure of affected entities. */
  exposure?: "NOT_AVAILABLE" | "NOT_DETECTED" | "PUBLIC_NETWORK";

  /** The reachability of related data assets by affected entities. */
  dataAssets?: "NOT_AVAILABLE" | "NOT_DETECTED" | "REACHABLE";

  /** The availability status of public exploits. */
  publicExploit?: "AVAILABLE" | "NOT_AVAILABLE";
}

/**
 * A list of security problems.
 */
export interface SecurityProblemList {
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

  /** A list of security problems. */
  securityProblems?: SecurityProblem[];
}

/**
 * Assessment of the remediation item.
 */
export interface RemediationAssessment {
  /** The level of exposure of affected entities. */
  exposure?: "NOT_AVAILABLE" | "NOT_DETECTED" | "PUBLIC_NETWORK";

  /** The reachability of related data assets by affected entities. */
  dataAssets?: "NOT_AVAILABLE" | "NOT_DETECTED" | "REACHABLE";

  /** The usage of vulnerable functions */
  vulnerableFunctionUsage?: "IN_USE" | "NOT_AVAILABLE" | "NOT_IN_USE";
}

/**
 * Context of a possible remediation for a security problem.
 */
export interface RemediationItem {
  /** The ID of the remediation item. */
  id?: string;

  /** The IDs that represent the related entity. */
  entityIds?: string[];

  /** The name of the entity. */
  name?: string;

  /**
   * The timestamp when the entity has first been related to the vulnerability.
   * @format int64
   */
  firstAffectedTimestamp?: number;

  /** Assessment of the remediation item. */
  assessment?: RemediationAssessment;

  /**
   * The timestamp when the vulnerability has been resolved for the related entity.
   * @format int64
   */
  resolvedTimestamp?: number;

  /** The current state of the entity regarding the related vulnerability. */
  vulnerabilityState?: "RESOLVED" | "VULNERABLE";

  /** Information about the mute state of a remediation item of a security problem. */
  muteState?: RemediationItemMuteStateDto;

  /**
   * A list of vulnerable components of the remediation item.
   *
   * A vulnerable component is what causes the security problem.
   */
  vulnerableComponents?: VulnerableComponent[];

  /** Remediation progress of this remediation item, containing affected and unaffected entities. */
  remediationProgress?: RemediationProgressDto;
}

/**
 * A list of remediation items.
 */
export interface RemediationItemList {
  /** A list of remediation items. */
  remediationItems?: RemediationItem[];
}

/**
 * Information about the mute state of a remediation item of a security problem.
 */
export interface RemediationItemMuteStateDto {
  /** Whether the remediation item is currently muted. */
  muted?: boolean;

  /** The user who last changed the mute state. */
  user?: string;

  /**
   * The timestamp when the mute state was last updated.
   * @format int64
   */
  lastUpdatedTimestamp?: number;

  /** The reason provided with the most recent mute state change. */
  reason?:
    | "AFFECTED"
    | "CONFIGURATION_NOT_AFFECTED"
    | "FALSE_POSITIVE"
    | "IGNORE"
    | "INITIAL_STATE"
    | "OTHER"
    | "VULNERABLE_CODE_NOT_IN_USE";

  /** The optional comment provided with the most recent mute state change. */
  comment?: string;
}

/**
 * Remediation progress of this remediation item, containing affected and unaffected entities.
 */
export interface RemediationProgressDto {
  /** Entities related to the remediation item, that are affected by the security problem. */
  affectedEntities?: string[];

  /** Entities related to the remediation item, that are not affected by the security problem. */
  unaffectedEntities?: string[];
}

/**
 * Vulnerable component of a security problem.
 */
export interface VulnerableComponent {
  /** The Dynatrace entity ID of the vulnerable component. */
  id?: string;

  /** The display name of the vulnerable component. */
  displayName?: string;

  /** The file name of the vulnerable component. */
  fileName?: string;

  /**
   * The number of affected entities.
   * @format int32
   */
  numberOfAffectedEntities?: number;

  /** The list of affected entities. */
  affectedEntities?: string[];
}

/**
 * information on the muted state of a security problem in relation to an event.
 */
export interface MuteState {
  /** The user who has muted or unmuted the problem. */
  user?: string;

  /** The reason for the mute state change. */
  reason?:
    | "AFFECTED"
    | "CONFIGURATION_NOT_AFFECTED"
    | "FALSE_POSITIVE"
    | "IGNORE"
    | "INITIAL_STATE"
    | "OTHER"
    | "VULNERABLE_CODE_NOT_IN_USE";

  /** A comment by the user. */
  comment?: string;
}

/**
 * Related container image of a security problem.
 */
export interface RelatedContainerImage {
  /** The image ID of the related container image. */
  imageId?: string;

  /** The image name of the related container image. */
  imageName?: string;

  /**
   * The number of affected entities.
   * @format int32
   */
  numberOfAffectedEntities?: number;

  /** A list of affected entities. */
  affectedEntities?: string[];
}

/**
* A list of related entities of the security problem. 

A related entity is a monitored entity that is directly or indirectly related to an *affected entity* (for example, it could be a host where an affected process runs). 

Each related entity contains a list of corresponding affected entities (for example, an affected process running on this host).
*/
export interface RelatedEntitiesList {
  /** A list of related applications. */
  applications?: RelatedEntity[];

  /** A list of related services. */
  services?: RelatedService[];

  /** A list of related hosts. */
  hosts?: RelatedEntity[];

  /** A list of related databases. */
  databases?: string[];

  /** A list of related Kubernetes workloads. */
  kubernetesWorkloads?: RelatedEntity[];

  /** A list of related Kubernetes clusters. */
  kubernetesClusters?: RelatedEntity[];
}

/**
 * An entity related to a security problem.
 */
export interface RelatedEntity {
  /** The Dynatrace entity ID of the entity. */
  id?: string;

  /**
   * The number of affected entities related to the entity.
   * @format int64
   */
  numberOfAffectedEntities?: number;

  /** A list of affected entities related to the entity. */
  affectedEntities?: string[];
}

/**
 * A service related to a security problem.
 */
export interface RelatedService {
  /** The Dynatrace entity ID of the entity. */
  id?: string;

  /**
   * The number of affected entities related to the entity.
   * @format int64
   */
  numberOfAffectedEntities?: number;

  /** A list of affected entities related to the entity. */
  affectedEntities?: string[];

  /** The level of exposure of the service. */
  exposure?: "NOT_AVAILABLE" | "NOT_DETECTED" | "PUBLIC_NETWORK";
}

/**
 * A snapshot of the risk assessment of a security problem.
 */
export interface RiskAssessmentSnapshot {
  /**
   * The number of currently affected entities.
   * @format int32
   */
  numberOfAffectedEntities?: number;

  /**
   * The number of currently reachable data assets by affected entities.
   * @format int32
   */
  numberOfReachableDataAssets?: number;

  /** The availability status of public exploits. */
  publicExploit?: "AVAILABLE" | "NOT_AVAILABLE";

  /** The level of exposure of affected entities. */
  exposure?: "NOT_AVAILABLE" | "NOT_DETECTED" | "PUBLIC_NETWORK";
}

/**
 * Parameters of a security problem
 */
export interface SecurityProblemDetails {
  /** The ID of the security problem. */
  securityProblemId?: string;

  /** The displayId of the security problem. */
  displayId?: string;

  /** The status of the security problem. */
  status?: "OPEN" | "RESOLVED";

  /** Indicates if a security problem is muted. */
  muted?: boolean;

  /** The external vulnerability ID of the security problem. */
  externalVulnerabilityId?: string;

  /** The type of the vulnerability. */
  vulnerabilityType?: "RUNTIME" | "THIRD_PARTY";

  /** The title of the security problem. */
  title?: string;

  /** The package name of the security problem. */
  packageName?: string;

  /** The URL to the security problem details page. */
  url?: string;

  /** The description of the security problem. */
  description?: string;

  /** The technology of the security problem. */
  technology?: "DOTNET" | "JAVA" | "KUBERNETES" | "NODE_JS" | "PHP";

  /**
   * The timestamp of the first occurrence of the security problem.
   * @format int64
   */
  firstSeenTimestamp?: number;

  /**
   * The timestamp of the most recent security problem change.
   * @format int64
   */
  lastUpdatedTimestamp?: number;

  /** Risk assessment of a security problem. */
  riskAssessment?: RiskAssessment;

  /** Management zones to which the affected entities belong. */
  managementZones?: ManagementZone[];

  /** CVE IDs of the security problem. */
  cveIds?: string[];

  /** An ordered (newest first) list of events of the security problem. */
  events?: SecurityProblemEvent[];

  /**
   * A list of vulnerable components of the security problem.
   *
   * A vulnerable component is what causes the security problem.
   */
  vulnerableComponents?: VulnerableComponent[];

  /**
   * A list of affected entities of the security problem.
   *
   * An affected entity is an entity where a vulnerable component runs.
   */
  affectedEntities?: string[];

  /**
   * A list of exposed entities of the security problem.
   *
   * An exposed entity is an affected entity that is exposed to the internet.
   */
  exposedEntities?: string[];

  /**
   * A list of data assets reachable by affected entities of the security problem.
   *
   * A data asset is a service that has database access.
   */
  reachableDataAssets?: string[];

  /**
   * A list of related entities of the security problem.
   *
   * A related entity is a monitored entity that is directly or indirectly related to an *affected entity* (for example, it could be a host where an affected process runs).
   * Each related entity contains a list of corresponding affected entities (for example, an affected process running on this host).
   */
  relatedEntities?: RelatedEntitiesList;

  /**
   * A list of related container images of the security problem.
   *
   * A related container image is a container image that contains at least one *affected entity*.
   */
  relatedContainerImages?: { containerImages?: RelatedContainerImage[] }[];

  /** If `true` a change of the mute state is in progress. */
  muteStateChangeInProgress?: boolean;
}

/**
 * The event of a security problem.
 */
export interface SecurityProblemEvent {
  /**
   * The timestamp when the event occurred.
   * @format int64
   */
  timestamp?: number;

  /** The reason of the event creation. */
  reason?:
    | "SECURITY_PROBLEM_CREATED"
    | "SECURITY_PROBLEM_MUTED"
    | "SECURITY_PROBLEM_REOPENED"
    | "SECURITY_PROBLEM_RESOLVED"
    | "SECURITY_PROBLEM_UNMUTED";

  /** A snapshot of the risk assessment of a security problem. */
  riskAssessmentSnapshot?: RiskAssessmentSnapshot;

  /** information on the muted state of a security problem in relation to an event. */
  muteState?: MuteState;
}

/**
 * Information on un-muting a security problem.
 */
export interface Unmute {
  /** The reason for un-muting a security problem. */
  reason: "AFFECTED" | "INITIAL_STATE";

  /** A comment about the un-muting reason. */
  comment: string;
}

/**
 * Information about how a mute state of a remediation item should be changed.
 */
export interface RemediationItemMuteStateChangeDto {
  /** The desired mute state of the remediation item */
  muted: boolean;

  /** The reason for the mute state change. */
  reason:
    | "AFFECTED"
    | "CONFIGURATION_NOT_AFFECTED"
    | "FALSE_POSITIVE"
    | "IGNORE"
    | "INITIAL_STATE"
    | "OTHER"
    | "VULNERABLE_CODE_NOT_IN_USE";

  /** A comment about the mute state change reason. */
  comment: string;
}

/**
 * Information on muting a security problem.
 */
export interface Mute {
  /** The reason for muting a security problem. */
  reason: "CONFIGURATION_NOT_AFFECTED" | "FALSE_POSITIVE" | "IGNORE" | "OTHER" | "VULNERABLE_CODE_NOT_IN_USE";

  /** A comment about the muting reason. */
  comment: string;
}

export interface MonitoringConfigurationResponse {
  /**
   * The identifier of the new configuration
   * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
   */
  objectId?: string;

  /**
   * The HTTP Status code
   * @format int32
   */
  code?: number;
}

export type JsonNode = object;

export interface MonitoringConfigurationDto {
  /**
   * The scope this monitoring configuration will be defined for
   * @example HOST-D3A3C5A146830A79
   */
  scope: string;
  value?: JsonNode;
}

export interface ExtensionMonitoringConfiguration {
  /** Configuration id */
  objectId?: string;

  /** Configuration scope */
  scope?: string;

  /** Configuration */
  value?: string;
}

export interface ExtensionMonitoringConfigurationsList {
  /** A list of extension monitoring configurations. */
  items?: ExtensionMonitoringConfiguration[];

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
}

export interface MonitoringConfigurationUpdateDto {
  value?: JsonNode;
}

/**
 * A list of extension events.
 */
export interface ExtensionEventDto {
  /** Timestamp of the event */
  timestamp?: string;

  /** Severity of the event */
  severity?: string;

  /** Content of the event */
  content?: string;

  /**
   * Host that uses this monitoring configuration.
   *
   * Example: `HOST-ABCDEF0123456789`
   */
  "dt.entity.host"?: string;

  /**
   * Hexadecimal ID of Active Gate that uses this monitoring configuration.
   *
   * Example: `0x1a2b3c4d`
   */
  "dt.active_gate.id"?: string;

  /**
   * Data source that uses this monitoring configuration.
   *
   * Example: `snmp`
   */
  "dt.extension.ds"?: string;

  /** Status of the event */
  status?: "ERROR" | "INFO" | "NONE" | "WARN";
}

export interface ExtensionEventsList {
  /** A list of extension events. */
  extensionEvents?: ExtensionEventDto[];
}

export interface ExtensionStatusDto {
  /**
   * Timestamp of the latest status of given configuration.
   * @format int64
   */
  timestamp?: number;

  /** Latest status of given configuration. */
  status?: string;
}

export interface SchemaFiles {
  /** A list of schema files. */
  files?: string[];
}

export interface ExtensionList {
  /** A list of extensions. */
  extensions?: MinimalExtension[];

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
}

/**
 * A list of extensions.
 */
export interface MinimalExtension {
  /** Extension name */
  extensionName?: string;

  /**
   * Extension version
   * @pattern ^(0|[1-9]\d*)(\.(0|[1-9]\d*))?(\.(0|[1-9]\d*))?
   * @example 1.2.3
   */
  version?: string;
}

/**
 * Extension author
 */
export interface AuthorDto {
  /** Author name */
  name?: string;
}

export interface Extension {
  /** Extension name */
  extensionName?: string;

  /**
   * Extension version
   * @pattern ^(0|[1-9]\d*)(\.(0|[1-9]\d*))?(\.(0|[1-9]\d*))?
   * @example 1.2.3
   */
  version?: string;

  /** Extension author */
  author?: AuthorDto;

  /** Data sources that extension uses to gather data */
  dataSources?: string[];

  /** Custom variables used in extension configuration */
  variables?: string[];

  /** Available feature sets */
  featureSets?: string[];

  /** Details of feature sets */
  featureSetsDetails?: Record<string, FeatureSetDetails>;

  /** Minimal Dynatrace version that works with the extension */
  minDynatraceVersion?: string;

  /** SHA-256 hash of uploaded Extension file */
  fileHash?: string;
}

/**
 * Additional information about a Feature Set
 */
export interface FeatureSetDetails {
  /** Feature set metrics */
  metrics?: MetricDto[];
}

/**
 * Metric gathered by an extension
 */
export interface MetricDto {
  /** Metric key */
  key?: string;
}

/**
 * A constraint on the values accepted for a complex settings property.
 */
export interface ComplexConstraint {
  /** A custom message for invalid values. */
  customMessage?: string;

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

  /**
   * The maximum number of properties that can be set.
   * @format int32
   * @example 2
   */
  maximumPropertyCount?: number;

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
   * The minimum allowed value.
   * @example 3
   */
  minimum?: number;

  /**
   * The maximum allowed value.
   * @example 200
   */
  maximum?: number;

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
  /** The properties to filter the datasource options on. */
  filterProperties?: string[];

  /** Whether to validate input to only allow values returned by the datasource. */
  validate?: boolean;

  /** Whether this datasource expects full setting payload as the context. */
  fullContext?: boolean;

  /** If true, the datasource should use the api to filter the results instead of client-side filtering. */
  useApiSearch?: boolean;

  /** When to reset datasource value in the UI on filter change. */
  resetValue?: "ALWAYS" | "INVALID_ONLY" | "NEVER";

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

  /** Customization for UI elements */
  uiCustomization?: UiCustomization;

  /** Configuration of a datasource for a property. */
  datasource?: DatasourceDefinition;

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

  /** A list of constraints limiting the values to be accepted. */
  constraints?: Constraint[];

  /** Metadata of the items. */
  metadata?: Record<string, string>;

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
   * A list of child preconditions to be evaluated.
   *
   * Only applicable to properties of the `AND` and `OR` types.
   */
  preconditions?: Precondition[];

  /**
   * A list of valid values of the property.
   *
   * Only applicable to properties of the `IN` type.
   * @example expectedValues
   */
  expectedValues?: object[];

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
  type?: "AND" | "EQUALS" | "IN" | "NOT" | "NULL" | "OR" | "REGEX_MATCH";

  /**
   * The Regular expression which is matched against the property.
   *
   * Only applicable to properties of the `REGEX_MATCH` type.
   * @example example Regex
   */
  pattern?: string;
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

  /** Customization for UI elements */
  uiCustomization?: UiCustomization;

  /**
   * The minimum number of **objects** in a collection property.
   * @format int32
   * @example 1
   */
  minObjects?: number;

  /**
   * Modification policy of the property.
   * @example ALWAYS
   */
  modificationPolicy?: "ALWAYS" | "DEFAULT" | "NEVER";

  /** A precondition for visibility of a property. */
  precondition?: Precondition;

  /** Configuration of a datasource for a property. */
  datasource?: DatasourceDefinition;

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

  /** A list of constraints limiting the values to be accepted. */
  constraints?: Constraint[];

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
   * @example builtin:container.built-in-monitoring-rule
   */
  schemaId?: string;

  /**
   * The display name of the schema.
   * @example Built-in container monitoring rules
   */
  displayName?: string;

  /**
   * A short description of the schema.
   * @example Dynatrace disables monitoring of containers that do not run any applications
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

  /** Customization for UI elements */
  uiCustomization?: UiCustomization;
}

/**
* A list of definitions of types. 

 A type is a complex property that contains its own set of subproperties.
*/
export interface SchemaType {
  /**
   * The pattern for the summary search(for example, "Alert after *X* minutes.") of the configuration in the UI.
   * @example searchPatternOfType
   */
  searchPattern?: string;

  /**
   * The pattern for the summary (for example, "Alert after *X* minutes.") of the configuration in the UI.
   * @example summaryPatternOfType
   */
  summaryPattern?: string;

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

  /** A list of constraints limiting the values to be accepted. */
  constraints?: ComplexConstraint[];

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
 * Customization for UI elements
 */
export interface UiCustomization {
  /** Customization for UI tables */
  table?: UiTableCustomization;
}

/**
 * Customization for UI table columns
 */
export interface UiTableColumnCustomization {
  /**
   * The referenced property for this column.
   * @example apiColor
   */
  propertyRef?: string;

  /**
   * The ui specific type for this column.
   * @example cell-color-picker
   */
  type?: string;

  /**
   * The display name for this column.
   * @example Color
   */
  displayName?: string;
}

/**
 * Customization for UI tables
 */
export interface UiTableCustomization {
  /** A list of columns for the UI table */
  columns?: UiTableColumnCustomization[];
}

export interface ExtensionEnvironmentConfigurationVersion {
  /**
   * Extension version
   * @pattern ^(0|[1-9]\d*)(\.(0|[1-9]\d*))?(\.(0|[1-9]\d*))?
   * @example 1.2.3
   */
  version: string;
}

export interface SchemasList {
  /** A list of schema versions. */
  versions?: string[];
}

export interface CommentRequestDtoImpl {
  /** The text of the comment. */
  message: string;

  /** The context of the comment. */
  context?: string;
}

/**
 * The comment to a problem.
 */
export interface Comment {
  /** The user who wrote the comment. */
  authorName?: string;

  /**
   * The timestamp of comment creation, in UTC milliseconds.
   * @format int64
   */
  createdAtTimestamp: number;

  /** The context of the comment. */
  context?: string;

  /** The ID of the comment. */
  id?: string;

  /** The text of the comment. */
  content?: string;
}

/**
 * The result of closing a problem.
 */
export interface ProblemCloseResult {
  /**
   * The timestamp when the user triggered the closing.
   * @format int64
   */
  closeTimestamp: number;

  /** The ID of the problem. */
  problemId: string;

  /** True, if the problem is being closed. */
  closing: boolean;

  /** The comment to a problem. */
  comment?: Comment;
}

export interface ProblemCloseRequestDtoImpl {
  /** The text of the closing comment. */
  message: string;
}

/**
 * Short representation of the alerting profile.
 */
export interface AlertingProfileStub {
  /** The name of the alerting profile. */
  name?: string;

  /** The ID of the alerting profile. */
  id: string;
}

/**
 * Analysis of problem impact to an application.
 */
export type ApplicationImpact = Impact;

/**
* The availability evidence of the problem. 

Indicates an entity that has been unavailable during the problem lifespan and that might be related to the root cause.
*/
export type AvailabilityEvidence = Evidence & { endTime?: number };

/**
 * A list of comments.
 */
export interface CommentsList {
  /** The result entries. */
  comments?: Comment[];

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

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
}

/**
 * Analysis of problem impact to a custom application.
 */
export type CustomApplicationImpact = Impact;

/**
* The event evidence of the problem. 

An event that occurred during the problem lifespan that might be related to the root cause.
*/
export type EventEvidence = Evidence & { eventId?: string; eventType?: string; data?: Event; endTime?: number };

/**
* An evidence of a root cause. 

 The actual set of fields depends on the type of the evidence. Find the list of actual objects in the description of the **evidenceType** field or see [Problems API v2 - JSON models](https://dt-url.net/we03sp2).
*/
export interface Evidence {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `EVENT` -> EventEvidence
   * * `METRIC` -> MetricEvidence
   * * `TRANSACTIONAL` -> TransactionalEvidence
   * * `MAINTENANCE_WINDOW` -> MaintenanceWindowEvidence
   * * `AVAILABILITY_EVIDENCE` -> AvailabilityEvidence
   */
  evidenceType: "AVAILABILITY_EVIDENCE" | "EVENT" | "MAINTENANCE_WINDOW" | "METRIC" | "TRANSACTIONAL";

  /** The display name of the evidence. */
  displayName: string;

  /** A short representation of a monitored entity. */
  entity: EntityStub;

  /** A short representation of a monitored entity. */
  groupingEntity?: EntityStub;

  /** The evidence is (`true`) or is not (`false`) a part of the root cause. */
  rootCauseRelevant: boolean;

  /**
   * The start time of the evidence, in UTC milliseconds.
   * @format int64
   */
  startTime: number;
}

/**
 * The evidence details of a problem.
 */
export interface EvidenceDetails {
  /**
   * The total number of evidence of a problem.
   * @format int64
   */
  totalCount: number;

  /** A list of all evidence. */
  details?: Evidence[];
}

/**
* The impact analysis of the problem on other entities/users. 

 The actual set of fields depends on the type of the impact. Find the list of actual objects in the description of the **impactType** field or see [Problems API v2 - JSON models](https://dt-url.net/we03sp2).
*/
export interface Impact {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `SERVICE` -> ServiceImpact
   * * `APPLICATION` -> ApplicationImpact
   * * `MOBILE` -> MobileImpact
   * * `CUSTOM_APPLICATION` -> CustomApplicationImpact
   */
  impactType: "APPLICATION" | "CUSTOM_APPLICATION" | "MOBILE" | "SERVICE";

  /** A short representation of a monitored entity. */
  impactedEntity: EntityStub;

  /**
   * The estimated number of affected users.
   * @format int64
   */
  estimatedAffectedUsers: number;
}

/**
 * A list of all impacts of the problem.
 */
export interface ImpactAnalysis {
  /** A list of all impacts of the problem. */
  impacts?: Impact[];
}

/**
 * The properties of the linked problem.
 */
export interface LinkedProblem {
  /** The display ID of the problem. */
  displayId: string;

  /** The ID of the problem. */
  problemId: string;
}

/**
* The  maintenance window evidence of the problem. 

The maintenance window during which the problem occurred.
*/
export type MaintenanceWindowEvidence = Evidence & { maintenanceWindowConfigId?: string; endTime?: number };

/**
* The metric evidence of the problem. 

A change of metric behavior that indicates the problem and/or is its root cause.
*/
export type MetricEvidence = Evidence & {
  valueBeforeChangePoint?: number;
  valueAfterChangePoint?: number;
  metricId?: string;
  endTime?: number;
  unit?:
    | "Bit"
    | "BitPerHour"
    | "BitPerMinute"
    | "BitPerSecond"
    | "Byte"
    | "BytePerHour"
    | "BytePerMinute"
    | "BytePerSecond"
    | "Cores"
    | "Count"
    | "Day"
    | "DecibelMilliWatt"
    | "GibiByte"
    | "Giga"
    | "GigaByte"
    | "Hour"
    | "KibiByte"
    | "KibiBytePerHour"
    | "KibiBytePerMinute"
    | "KibiBytePerSecond"
    | "Kilo"
    | "KiloByte"
    | "KiloBytePerHour"
    | "KiloBytePerMinute"
    | "KiloBytePerSecond"
    | "MSU"
    | "MebiByte"
    | "MebiBytePerHour"
    | "MebiBytePerMinute"
    | "MebiBytePerSecond"
    | "Mega"
    | "MegaByte"
    | "MegaBytePerHour"
    | "MegaBytePerMinute"
    | "MegaBytePerSecond"
    | "MicroSecond"
    | "MilliCores"
    | "MilliSecond"
    | "MilliSecondPerMinute"
    | "Minute"
    | "Month"
    | "NanoSecond"
    | "NanoSecondPerMinute"
    | "NotApplicable"
    | "PerHour"
    | "PerMinute"
    | "PerSecond"
    | "Percent"
    | "Pixel"
    | "Promille"
    | "Ratio"
    | "Second"
    | "State"
    | "Unspecified"
    | "Week"
    | "Year";
};

/**
 * Analysis of problem impact to a mobile application.
 */
export type MobileImpact = Impact;

/**
 * The properties of a problem.
 */
export interface Problem {
  /** A list of all entities that are affected by the problem. */
  affectedEntities?: EntityStub[];

  /** A list of alerting profiles that match the problem. */
  problemFilters?: AlertingProfileStub[];

  /** The evidence details of a problem. */
  evidenceDetails?: EvidenceDetails;

  /** A list of comments. */
  recentComments?: CommentsList;

  /** The properties of the linked problem. */
  linkedProblemInfo?: LinkedProblem;

  /** A list of all entities that are impacted by the problem. */
  impactedEntities?: EntityStub[];

  /** A short representation of a monitored entity. */
  rootCauseEntity?: EntityStub;

  /** A list of all impacts of the problem. */
  impactAnalysis?: ImpactAnalysis;

  /** The severity of the problem. */
  severityLevel:
    | "AVAILABILITY"
    | "CUSTOM_ALERT"
    | "ERROR"
    | "INFO"
    | "MONITORING_UNAVAILABLE"
    | "PERFORMANCE"
    | "RESOURCE_CONTENTION";

  /** The impact level of the problem. It shows what is affected by the problem. */
  impactLevel: "APPLICATION" | "ENVIRONMENT" | "INFRASTRUCTURE" | "SERVICES";

  /** The display ID of the problem. */
  displayId: string;

  /** A list of all management zones that the problem belongs to. */
  managementZones?: ManagementZone[];

  /** A list of all entity tags of the problem. */
  entityTags?: METag[];

  /** The ID of the problem. */
  problemId: string;

  /** The status of the problem. */
  status: "CLOSED" | "OPEN";

  /**
   * The start timestamp of the problem, in UTC milliseconds.
   * @format int64
   */
  startTime: number;

  /**
   * The end timestamp of the problem, in UTC milliseconds.
   *
   *  Has `-1` value, if the problem is still open.
   * @format int64
   */
  endTime: number;

  /** The name of the problem, displayed in the UI. */
  title: string;
}

/**
 * A list of problems.
 */
export interface Problems {
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

  /** The result entries. */
  problems?: Problem[];

  /** A list of warnings */
  warnings?: string[];
}

/**
 * Analysis of problem impact to a service.
 */
export type ServiceImpact = Impact & { numberOfPotentiallyAffectedServiceCalls?: number };

/**
* The transactional evidence of the problem. 

A behavior of a metric in an transaction that indicates the problem and/or is its root cause.
*/
export type TransactionalEvidence = Evidence & {
  valueBeforeChangePoint?: number;
  valueAfterChangePoint?: number;
  endTime?: number;
  unit?: string;
};

export interface Success {
  /** Detailed message */
  message?: string;

  /**
   * The HTTP status code
   * @format int32
   */
  code?: number;
}

export interface SuccessEnvelope {
  details?: Success;
}

/**
* The log message in JSON format. Use one object representing a single event or an array of objects representing multiple events. 

The object might contain the following types of keys (the possible key values are listed below): 

* Timestamp.  The following formats are supported: UTC milliseconds, RFC3339, and RFC3164. If not set, the current timestamp is used. 
* Severity. If not set, `NONE` is used. 
* Content. If the content key is not set, the whole JSON is parsed as the content. 
* Semantic attribute. Only values of the `String` type are supported. Semantic attributes are indexed and can be used in queries. These are also displayed in aggregations (facets). If an unsupported key occurs it is not indexed and cannot be used in indexing and aggregations. 

The length of the value is limited. Any content exceeding the limit is trimmed. Default limits:

* Content: 8,192 characters. 
* Semantic attribute value: 250 characters.

Supported timestamp keys:
 * @timestamp
 * Timestamp
 * _timestamp
 * date
 * eventTime
 * published_date
 * syslog.timestamp
 * timestamp

Supported content keys:
 * body
 * content
 * message
 * payload

Supported severity keys:
 * level
 * loglevel
 * severity
 * status
 * syslog.severity

Supported semantic attribute keys:
 * audit.action
 * audit.identity
 * audit.result
 * aws.account.id
 * aws.arn
 * aws.log_group
 * aws.log_stream
 * aws.region
 * aws.resource.id
 * aws.resource.type
 * aws.service
 * azure.location
 * azure.resource.group
 * azure.resource.id
 * azure.resource.name
 * azure.resource.type
 * azure.subscription
 * cloud.account.id
 * cloud.availability_zone
 * cloud.provider
 * cloud.region
 * container.image.name
 * container.image.tag
 * container.name
 * db.cassandra.keyspace
 * db.connection_string
 * db.hbase.namespace
 * db.jdbc.driver_classname
 * db.mongodb.collection
 * db.mssql.instance_name
 * db.name
 * db.operation
 * db.redis.database_index
 * db.statement
 * db.system
 * db.user
 * dt.active_gate.group.name
 * dt.active_gate.id
 * dt.code.filepath
 * dt.code.func
 * dt.code.lineno
 * dt.code.ns
 * dt.ctg.calltype
 * dt.ctg.extendmode
 * dt.ctg.gatewayurl
 * dt.ctg.program
 * dt.ctg.rc
 * dt.ctg.requesttype
 * dt.ctg.serverid
 * dt.ctg.termid
 * dt.ctg.transid
 * dt.ctg.userid
 * dt.entity.cloud_application
 * dt.entity.cloud_application_instance
 * dt.entity.cloud_application_namespace
 * dt.entity.container_group
 * dt.entity.container_group_instance
 * dt.entity.custom_device
 * dt.entity.host
 * dt.entity.kubernetes_cluster
 * dt.entity.kubernetes_node
 * dt.entity.process_group
 * dt.entity.process_group_instance
 * dt.event.group_label
 * dt.event.key
 * dt.events.root_cause_relevant
 * dt.exception.messages
 * dt.exception.serialized_stacktraces
 * dt.exception.types
 * dt.extension.config.id
 * dt.extension.ds
 * dt.extension.name
 * dt.extension.status
 * dt.host.ip
 * dt.host.smfid
 * dt.host.snaid
 * dt.host_group.id
 * dt.http.application_id
 * dt.http.context_root
 * dt.kubernetes.cluster.name
 * dt.kubernetes.config.id
 * dt.kubernetes.event.involved_object.kind
 * dt.kubernetes.event.involved_object.name
 * dt.kubernetes.event.reason
 * dt.kubernetes.node.name
 * dt.kubernetes.node.system_uuid
 * dt.kubernetes.topmost_controller.kind
 * dt.kubernetes.workload.kind
 * dt.kubernetes.workload.name
 * dt.network_zone.id
 * dt.os.description
 * dt.os.type
 * dt.process.commandline
 * dt.process.executable
 * dt.process.name
 * dt.source_entity
 * dt.source_entity_name
 * dt.source_entity_type
 * faas.id
 * faas.instance
 * faas.name
 * faas.version
 * gcp.instance.id
 * gcp.instance.name
 * gcp.project.id
 * gcp.region
 * gcp.resource.type
 * host.hostname
 * host.id
 * host.image.id
 * host.image.name
 * host.image.version
 * host.name
 * host.type
 * http.client_ip
 * http.flavor
 * http.host
 * http.method
 * http.route
 * http.scheme
 * http.server_name
 * http.status_code
 * http.status_text
 * http.target
 * http.url
 * k8s.cluster.name
 * k8s.container.name
 * k8s.cronjob.name
 * k8s.cronjob.uid
 * k8s.daemonset.name
 * k8s.daemonset.uid
 * k8s.deployment.name
 * k8s.deployment.uid
 * k8s.job.name
 * k8s.job.uid
 * k8s.namespace.name
 * k8s.pod.name
 * k8s.pod.uid
 * k8s.replicaset.name
 * k8s.replicaset.uid
 * k8s.statefulset.name
 * k8s.statefulset.uid
 * log.source
 * net.host.ip
 * net.host.name
 * net.host.port
 * net.peer.ip
 * net.peer.name
 * net.peer.port
 * net.transport
 * service.instance.id
 * service.name
 * service.namespace
 * service.version
 * span_id
 * trace_id
 * winlog.eventid
 * winlog.level
 * winlog.opcode
 * winlog.provider
 * winlog.task
*/
export type LogMessageJson = object;

/**
* The log message in plain text. 

The length of the message is limited to 8,192 characters. Any content exceeding the limit is trimmed.
*/
export type LogMessagePlain = object;

/**
 * A single log record.
 * @example {"timestamp":"1631193089000","status":"ERROR","content":"example log content","log.source":"/var/log/syslog","event.type":"LOG","additionalColumns":{"custom.attribute":["value1","value2"],"loglevel":["SEVERE"]}}
 */
export interface LogRecord {
  /** Additional columns of the log record. */
  additionalColumns?: Record<string, string[]>;

  /** Type of event */
  eventType?: "K8S" | "LOG" | "SFM";

  /** The content of the log record. */
  content?: string;

  /**
   * The timestamp of the log record, in UTC milliseconds.
   * @format int64
   */
  timestamp?: number;

  /** The log status (based on the log level). */
  status?: "ERROR" | "INFO" | "NONE" | "WARN";
}

/**
 * Aggregated log records.
 * @example {"aggregationResult":{"processId":{"1597835271":{"cassandra":"6"},"1597835331":{"apache":"12","cassandra":"60"}},"hostId":{"1597835271":{"localhost":"12"},"1597835331":{"remotehost":"6"}},"logLevel":{"1597835271":{"ERROR":"1","INFO":"2"},"1597835331":{"INFO":"17"}},"logPath":{"1597835271":{"/var/log/messages":"15","/var/log/syslog":"3"},"1597835331":{"/var/log/messages":"15","/var/log/syslog":"3"}}}}
 */
export interface AggregatedLog {
  /** Aggregated log records. */
  aggregationResult?: Record<string, Record<string, Record<string, number>>>;
}

/**
 * A list of retrieved log records.
 * @example {"results":[{"timestamp":"1631193089000","status":"ERROR","content":"example log content","log.source":"/var/log/syslog","event.type":"LOG","additionalColumns":{"custom.attribute":["value1","value2"],"loglevel":["SEVERE"]}}],"sliceSize":100,"nextSliceKey":"___-2hI03q0AAAAAAAAAAAAAA-gAAAAAAAAH0P____8AAABkAAAACXRpbWVzdGFtcAD___7aEjTerQ"}
 */
export interface LogRecordsList {
  /** A list of retrieved log records. */
  results?: LogRecord[];

  /**
   * The total number of records in a slice.
   * @format int64
   */
  sliceSize?: number;

  /** The cursor for the next slice of log records. */
  nextSliceKey?: string;
}

/**
* Contains data related to a single release of a component.
A Release is a combination of a component and a version.
A Component can be any form of deployable that can be associated with a version.
In the first draft, a Component is always a Service.

The tuple <name, product, stage, version> is always unique.
*/
export interface Release {
  /**
   * The entity has one or more security vulnerabilities
   * @example true
   */
  affectedBySecurityVulnerabilities?: boolean;

  /**
   * The count of bytes per second of the entity
   * @format double
   * @min 0
   * @example 923234
   */
  throughput?: number;

  /**
   * The software technologies of the release
   * @example [{"technology":"JAVA","edition":"OpenJDK","version":"1.8.0_242","verbatimType":"Java"}]
   */
  softwareTechs?: SoftwareTechs[];

  /**
   * The entity id of correlating release.
   * @example PROCESS_GROUP-DFDBAC9CBF104253
   */
  releaseEntityId?: string;

  /**
   * The product name
   * @example Sockshop
   */
  product?: string;

  /**
   * The number of security vulnerabilities of the entity
   * @format int32
   * @min 0
   * @example 4
   */
  securityVulnerabilitiesCount?: number;

  /**
   * The entity has one or more problems
   * @example true
   */
  affectedByProblems?: boolean;

  /**
   * Indicates that the security vulnerabilities feature is enabled
   * @example true
   */
  securityVulnerabilitiesEnabled?: boolean;

  /**
   * The instances entityIds included in this release
   * @example ["PROCESS_GROUP_INSTANCE-49D94B90FB71C45B","PROCESS_GROUP_INSTANCE-7EA049157C82D1A5"]
   */
  instances?: ReleaseInstance[];

  /**
   * The identified release version
   * @example 1.195.34.12341232423-012342
   */
  version?: string;

  /**
   * The related PGI is still running/monitored
   * @example true
   */
  running?: boolean;

  /**
   * The entity name
   * @example cluster
   */
  name?: string;

  /**
   * The number of problems of the entity
   * @format int32
   * @min 0
   * @example 4
   */
  problemCount?: number;

  /**
   * The stage name
   * @example staging
   */
  stage?: string;
}

/**
* Contains data related to a single instance of a release.
An instance is a Process Group Instance and has an optional build version.
* @example ["PROCESS_GROUP_INSTANCE-49D94B90FB71C45B","PROCESS_GROUP_INSTANCE-7EA049157C82D1A5"]
*/
export interface ReleaseInstance {
  /**
   * The build version
   * @example 223005
   */
  buildVersion?: string;

  /**
   * List of Security vulnerabilities Ids
   * @example ["SNYK-JAVA-COMFASTERXMLJACKSONCORE-1234567"]
   */
  securityVulnerabilities?: string[];

  /**
   * The entity id of the instance.
   * @example PROCESS_GROUP_INSTANCE-DFDBAC9CBF104253
   */
  entityId?: string;

  /**
   * List of event Ids of open problems
   * @example ["573177299181554914_1616573184015V2"]
   */
  problems?: string[];
}

/**
 * A list of releases.
 */
export interface Releases {
  /** A list of releases. */
  releases?: Release[];

  /**
   * Number of releases with problems.
   * @format int64
   */
  releasesWithProblems?: number;

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

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
}

/**
 * Contains information about the used software technology.
 * @example [{"technology":"JAVA","edition":"OpenJDK","version":"1.8.0_242","verbatimType":"Java"}]
 */
export interface SoftwareTechs {
  /**
   * The edition of the technology.
   * @example OpenJDK
   */
  edition?: string;

  /**
   * The verbatim type of the technology.
   * @example Java
   */
  verbatimType?: string;

  /**
   * The type of the technology.
   * @example JAVA
   */
  technology?: string;

  /**
   * The version of the technology.
   * @example 11.0.10
   */
  version?: string;
}

/**
 * A list of settings objects.
 */
export interface ObjectsList {
  /** A list of settings objects. */
  items?: SettingsObject[];

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

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
}

/**
 * A settings object.
 */
export interface SettingsObject {
  /**
   * The version of the schema on which the object is based.
   * @example 1.0.0
   */
  schemaVersion?: string;

  /**
   * The timestamp of the last modification.
   * @format int64
   */
  modified?: number;

  /**
   * The user (identified by a user ID or a public token ID) who performed that most recent modification.
   * @example john.doe@example.com
   */
  author?: string;

  /**
   * The update token of the object. You can use it to detect simultaneous modifications by different users.
   *
   * It is generated upon retrieval (GET requests). If set on update (PUT request) or deletion, the update/deletion will be allowed only if there wasn't any change between the retrieval and the update.
   * If omitted on update/deletion, the operation overrides the current value or deletes it without any checks.
   * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
   */
  updateToken?: string;

  /**
   * The ID of the settings object.
   * @example Y2ktaGdyb3VwLTEyMythZjhjOThlOS0wN2I0LTMyMGEtOTQzNi02NTEyMmVlNWY4NGQ=
   */
  objectId?: string;

  /**
   * The timestamp of the creation.
   * @format int64
   */
  created?: number;

  /**
   * The schema on which the object is based.
   * @example builtin:container.built-in-monitoring-rule
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

  /** A short summary of settings. */
  summary?: string;
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
   * @example builtin:container.built-in-monitoring-rule
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
   *
   * If omitted on creation of a new object and if the schema supports scope generation, the operation will generate a scope from the provided value.
   * @example HOST-D3A3C5A146830A79
   */
  scope?: string;
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
   * @example builtin:container.built-in-monitoring-rule
   */
  schemaId?: string;

  /**
   * The name of the schema.
   * @example Built-in container monitoring rules
   */
  displayName?: string;
}

/**
 * Parameters of a new SLO.
 */
export interface SloCreate {
  /**
   * The SLO is enabled (`true`) or disabled (`false`).
   * @example true
   */
  enabled?: boolean;

  /**
   * The name of the SLO.
   * @example Payment service availability
   */
  name?: string;

  /**
   * The custom description of the SLO (optional).
   * @example Rate of successful payments per week
   */
  customDescription?: string;

  /**
   * The percentage-based metric expression for the calculation of the SLO.
   * @example (100)*(builtin:service.errors.server.successCount:splitBy())/(builtin:service.requestCount.server:splitBy())
   */
  metricExpression?: string;

  /**
   * The evaluation type of the SLO.
   * @example AGGREGATE
   */
  evaluationType?: "AGGREGATE";

  /**
   * The entity filter for the SLO evaluation. Use the [syntax of entity selector](https://dt-url.net/entityselector).
   * @example type("SERVICE")
   */
  filter?: string;

  /**
   * The target value of the SLO.
   * @format double
   * @example 95
   */
  target?: number;

  /**
   * The warning value of the SLO.
   *
   *  At warning state the SLO is still fulfilled but is getting close to failure.
   * @format double
   * @example 97.5
   */
  warning?: number;

  /**
   * The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector.
   * @example -1d
   */
  timeframe?: string;

  /**
   * The type of the metric to use for SLO calculation:
   *
   * * `true`: An existing percentage-based metric.
   * * `false`: A ratio of two metrics.
   * For a list of available metrics, see [Built-in metric page](https://dt-url.net/be03kow) or try the [GET metrics](https://dt-url.net/8e43kxf) API call.
   * @example true
   */
  useRateMetric?: boolean | null;

  /**
   * The percentage-based metric for the calculation of the SLO.
   *
   * Required when the **useRateMetric** is set to `true`.
   * @example builtin:service.successes.server.rate
   */
  metricRate?: string;

  /**
   * The metric for the count of successes (the numerator in rate calculation).
   *
   * Required when the **useRateMetric** is set to `false`.
   * @example builtin:service.errors.server.successCount
   */
  metricNumerator?: string;

  /**
   * The total count metric (the denominator in rate calculation).
   *
   * Required when the **useRateMetric** is set to `false`.
   * @example builtin:service.requestCount.server
   */
  metricDenominator?: string;
}

/**
 * Parameters of a service-level objective (SLO).
 */
export interface SLO {
  /**
   * The percentage-based metric expression for the calculation of the SLO.
   * @example (100)*(builtin:service.errors.server.successCount:splitBy())/(builtin:service.requestCount.server:splitBy())
   */
  metricExpression?: string;

  /**
   * The type of the metric to use for SLO calculation:
   *
   * * `true`: An existing percentage-based metric.
   * * `false`: A ratio of two metrics.
   * For a list of available metrics, see [Built-in metric page](https://dt-url.net/be03kow) or try the [GET metrics](https://dt-url.net/8e43kxf) API call.
   * @example true
   */
  useRateMetric?: boolean;

  /**
   * The percentage-based metric for the calculation of the SLO.
   *
   * Required when the **useRateMetric** is set to `true`.
   * @example builtin:service.successes.server.rate
   */
  metricRate?: string;

  /**
   * The metric for the count of successes (the numerator in rate calculation).
   *
   * Required when the **useRateMetric** is set to `false`.
   * @example builtin:service.errors.server.successCount
   */
  metricNumerator?: string;

  /**
   * The total count metric (the denominator in rate calculation).
   *
   * Required when the **useRateMetric** is set to `false`.
   * @example builtin:service.requestCount.server
   */
  metricDenominator?: string;

  /**
   * The evaluation type of the SLO.
   * @example AGGREGATE
   */
  evaluationType?: "AGGREGATE";

  /**
   * The calculated value of the SLO.
   *
   * Has the value of `-1` if there's an error with SLO calculation; in that case check the value of the **error** parameter.
   * @format double
   * @example 96.25
   */
  evaluatedPercentage?: number;

  /**
   * Total number of problems related to the SLO.
   *
   * Has the value of `-1` if there's an error with fetching SLO related problems.
   * @format int32
   */
  relatedTotalProblems?: number;

  /**
   * The SLO is accessible through the settings if hasAccess is `true`.
   * @example true
   */
  hasAccess?: boolean;

  /**
   * The error budget of the calculated SLO.
   *
   * The error budget is the difference between the calculated and target values. A positive number means all is good; a negative number means trouble.
   * @format double
   * @example 1.25
   */
  errorBudget?: number;

  /**
   * The numerator value used to evaluate the SLO when **useRateMetric** is set to `false`.
   * @format double
   * @example 80
   */
  numeratorValue?: number;

  /**
   * The denominator value used to evaluate the SLO when **useRateMetric** is set to `false`.
   * @format double
   * @example 90
   */
  denominatorValue?: number;

  /**
   * Number of OPEN problems related to the SLO.
   *
   * Has the value of `-1` if there's an error with fetching SLO related problems.
   * @format int32
   */
  relatedOpenProblems?: number;

  /**
   * The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector.
   * @example -1d
   */
  timeframe?: string;

  /**
   * The name of the SLO.
   * @example Payment service availability
   */
  name?: string;

  /**
   * The ID of the SLO
   * @format uuid
   * @example 123e4567-e89b-42d3-a456-556642440000
   */
  id?: string;

  /**
   * The target value of the SLO.
   * @format double
   * @example 95
   */
  target?: number;

  /**
   * A short description of the SLO.
   * @example Rate of successful payments per week
   */
  description?: string;

  /**
   * The entity filter for the SLO evaluation. Use the [syntax of entity selector](https://dt-url.net/entityselector).
   * @example type("SERVICE")
   */
  filter?: string;

  /**
   * The SLO is enabled (`true`) or disabled (`false`).
   * @example true
   */
  enabled?: boolean;

  /**
   * The status of the calculated SLO.
   * @example WARNING
   */
  status?: "FAILURE" | "SUCCESS" | "WARNING";

  /**
   * The warning value of the SLO.
   *
   *  At warning state the SLO is still fulfilled but is getting close to failure.
   * @format double
   * @example 97.5
   */
  warning?: number;

  /**
   * The error of the SLO calculation.
   *
   * If the value differs from `NONE` there's something wrong with the SLO calculation.
   * @example NONE
   */
  error?:
    | "ARITHMETIC_WITH_ONE_EMPTY_INPUT"
    | "EVALUATION_TIMEFRAME_OUT_OF_BOUNDS"
    | "INTERNAL_ERROR"
    | "INVALID_ENTITY_SELECTOR"
    | "INVALID_METRIC_SELECTOR"
    | "INVALID_TIMEFRAME"
    | "MANAGEMENT_ZONE_INVALID"
    | "METRIC_EXPRESSION_NOT_RESOLVED"
    | "METRIC_EXPRESSION_NO_DATA"
    | "METRIC_EXPRESSION_NO_DATA_POINTS"
    | "METRIC_GENERIC_TSM_FAULT"
    | "METRIC_TOO_MANY_RESULTS"
    | "NONE"
    | "NO_MANAGEMENT_ZONE_SELECTED";
}

/**
 * A list of SLOs.
 */
export interface SLOs {
  /** A list of SLOs. */
  slo?: SLO[];

  /**
   * The total number of entries in the result.
   * @format int64
   */
  totalCount: number;

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
}

/**
 * A DTO for synthetic configuration.
 */
export interface SyntheticConfigDto {
  /** @format int32 */
  hmRequestTimeoutInMs?: number;

  /** @format int32 */
  hmConnectTimeoutInMs?: number;

  /** @format int32 */
  hmMaxHeaderSizeInBytes?: number;

  /** @format int32 */
  hmExecutionTimeoutInMs?: number;

  /** @format int32 */
  hmScriptExecutionTimeoutInMs?: number;

  /** @format int32 */
  hmMaxRequestBodySizeInBytes?: number;

  /** @format int32 */
  hmMaxCustomScriptSizeInBytes?: number;

  /** @format int32 */
  hmMaxResponseBodySizeInBytes?: number;

  /** @format int32 */
  hmMaxResponseBodySizeToCustomScriptInBytes?: number;

  /** @format int32 */
  hmDnsQueryTimeoutInMs?: number;

  /**
   * bmMonitorTimeout - browser monitor execution timeout (ms)
   * @format int64
   * @min 60000
   * @max 3600000
   */
  bmMonitorTimeout: number;

  /**
   * bmStepTimeout - browser monitor single step execution timeout (ms)
   * @format int64
   * @min 10000
   * @max 300000
   */
  bmStepTimeout: number;
}

/**
 * Results of the execution HTTP monitor's requests at a given location
 */
export interface LocationExecutionResults {
  /** Location id. */
  locationId?: string;

  /** Execution id. */
  executionId?: string;

  /** The list of the monitor's request results executed on this location. */
  requestResults?: MonitorRequestExecutionResult[];
}

/**
 * Results of the execution of all HTTP monitor's requests.
 * @example {"monitorId":"HTTP_CHECK-12B428F6D37A9197","locationsExecutionResults":[{"locationId":"7804738439930364165","executionId":"6136172183050046113","requestResults":[{"requestId":"HTTP_CHECK_STEP-53071FC3C4F72E28","requestName":"Request name","sequenceNumber":1,"startTimestamp":1615806570884,"engineId":338502283,"publicLocation":false,"url":"https://www.examplePage.com","method":"GET","requestBody":"","requestHeaders":[{"name":"User-Agent","value":"DynatraceSynthetic/1.215.1"},{"name":"X-Dynatrace-Visit","value":"6136172183050046113"},{"name":"X-Dynatrace-Test","value":"HTTP_CHECK-12B428F6D37A9197"}],"responseStatusCode":200,"responseBody":"<html><head>Title</head><body>Main Page</body></html>","responseSize":1112,"responseBodySizeLimitExceeded":false,"responseHeaders":[{"name":"Date","value":"Mon, 15 Mar 2021 11:09:30 GMT"},{"name":"Content-Language","value":"en"}],"resolvedIps":["80.252.0.145"],"errorCode":0,"responseMessage":"OK","peerCertificateExpiryDate":1647302399000,"peerCertificateDetails":"[Certificate details]","totalTime":238,"hostNameResolutionTime":26,"tcpConnectTime":15,"tlsHandshakeTime":8,"timeToFirstByte":96,"redirectionTime":70,"waitingTime":47,"redirectsCount":1,"failureMessage":""}]}]}
 */
export interface MonitorExecutionResults {
  /** Monitor id. */
  monitorId?: string;

  /** The list with the results of the requests executed on assigned locations. */
  locationsExecutionResults?: LocationExecutionResults[];
}

/**
 * A result of the execution HTTP monitor's request.
 */
export interface MonitorRequestExecutionResult {
  /** Request id. */
  requestId?: string;

  /** Request name. */
  requestName?: string;

  /**
   * Request's sequence number.
   * @format int32
   */
  sequenceNumber?: number;

  /**
   * Request start timestamp.
   * @format int64
   */
  startTimestamp?: number;

  /**
   * VUC's id on which monitor's request was executed.
   * @format int64
   */
  engineId?: number;

  /** Flag informs whether request was executed on public location. */
  publicLocation?: boolean;

  /** Request URL address. */
  url?: string;

  /** Request method type. */
  method?: string;

  /** Request's request body. */
  requestBody?: string;

  /** A list of request's headers */
  requestHeaders?: MonitorRequestHeader[];

  /**
   * Request's response status code.
   * @format int32
   */
  responseStatusCode?: number;

  /** Request's response body. */
  responseBody?: string;

  /**
   * Request's response size in bytes.
   * @format int64
   */
  responseSize?: number;

  /** A flag indicating that the response payload size limit of 10MB has been exceeded. */
  responseBodySizeLimitExceeded?: boolean;

  /** A list of request's response headers */
  responseHeaders?: MonitorRequestHeader[];

  /** Request's resolved ips.' */
  resolvedIps?: string[];

  /**
   * Request's health status code.
   * @format int32
   */
  healthStatusCode?: number;

  /** Request's health status. */
  healthStatus?: string;

  /** Request's response message.' */
  responseMessage?: string;

  /**
   * An expiry date of the first SSL certificate from the certificate chain.
   * @format int64
   */
  peerCertificateExpiryDate?: number;

  /** Request's certificate details. */
  peerCertificateDetails?: string;

  /**
   * A total request time measured in ms.
   * @format int64
   */
  totalTime?: number;

  /**
   * A hostname resolution time measured in ms.
   * @format int64
   */
  hostNameResolutionTime?: number;

  /**
   * A TCP connect time measured in ms.
   * @format int64
   */
  tcpConnectTime?: number;

  /**
   * A TLS handshake time measured in ms.
   * @format int64
   */
  tlsHandshakeTime?: number;

  /**
   * A time to first byte measured in ms.
   * @format int64
   */
  timeToFirstByte?: number;

  /**
   * Total number of milliseconds spent on handling all redirect requests, measured in ms.
   * @format int64
   */
  redirectionTime?: number;

  /**
   * Waiting time (time to first byte - (DNS lookup time + TCP connect time + TLS handshake time), measured in ms.
   * @format int64
   */
  waitingTime?: number;

  /**
   * Number of request's redirects.
   * @format int32
   */
  redirectsCount?: number;

  /** Request's failure message. */
  failureMessage?: string;
}

/**
 * A header of the Http request
 */
export interface MonitorRequestHeader {
  /** Header's name. */
  name?: string;

  /** Header's value. */
  value?: string;
}

/**
 * The status of public synthetic locations.
 */
export interface SyntheticPublicLocationsStatus {
  /** Synthetic monitors can (`true`) or can't (`false`) run on public synthetic locations. */
  publicLocationsEnabled: boolean;
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

 Some fields are inherited from the base *SyntheticLocation* object.
* @example {"type":"PRIVATE","name":"Linz Location","countryCode":"AT","regionCode":"04","city":"Linz","latitude":48.306351,"longitude":14.287399,"nodes":["93302281"],"status":"ENABLED","availabilityLocationOutage":false,"availabilityNodeOutage":false,"availabilityLocationNodeOutageDelayInMinutes":5,"autoUpdateChromium":true}
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
 * The synthetic location update. This is a base object, the exact type depends on the value of the `type` field.
 */
export interface SyntheticLocationUpdate {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `PUBLIC` -> SyntheticPublicLocationUpdate
   * * `PRIVATE` -> SyntheticPrivateLocationUpdate
   */
  type: "PRIVATE" | "PUBLIC";
}

/**
 * Configuration of a private synthetic location
 */
export type SyntheticPrivateLocationUpdate = SyntheticLocationUpdate & {
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
 * The update of a public Synthetic location.
 */
export type SyntheticPublicLocationUpdate = SyntheticLocationUpdate & { status?: "DISABLED" | "ENABLED" | "HIDDEN" };

/**
* Configuration of a public synthetic location. 

 Some fields are inherited from the base *SyntheticLocation* object.
* @example {"entityId":"SYNTHETIC_LOCATION-95196F3C9A4F4215","geoLocationId":"GEOLOCATION-95196F3C9A4F4215","type":"PUBLIC","name":"Amazon US East","countryCode":"US","regionCode":"VA","city":"Amazon US East (N. Virginia)","latitude":39.0436,"longitude":-77.4875,"cloudPlatform":"AMAZON_EC2","ips":["134.189.153.97","134.189.153.98"],"stage":"GA","browserType":"Chrome","browserVersion":"69.0.3497.81","status":"ENABLED","capabilities":["BROWSER","HTTP"]}
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

  /** The Dynatrace GeoLocation ID of the location. */
  geoLocationId?: string;
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

/**
 * Tenant token
 */
export interface TenantToken {
  /** The secret of the tenant token. */
  value?: string;
}

/**
 * Configuration of a [tenant token](https://dt-url.net/b403ss9).
 */
export interface TenantTokenConfig {
  /** Tenant token */
  old?: TenantToken;

  /** Tenant token */
  active?: TenantToken;
}














export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}



/**
 * @title Dynatrace Environment API
 * @version 2.0
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
export class Api extends APIBase {
  activeGates = {
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
     * @name GetGlobalAutoUpdateConfigForTenant
     * @summary Gets the global auto-update configuration of environment ActiveGates.
     * @request GET:/activeGates/autoUpdate
     */
    getGlobalAutoUpdateConfigForTenant: (params: RequestParams = {}) =>
      this.request<ActiveGateGlobalAutoUpdateConfig, any>({
        path: `/activeGates/autoUpdate`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ActiveGates - Auto-update configuration
     * @name PutGlobalAutoUpdateConfigForTenant
     * @summary Puts the global auto-update configuration of environment ActiveGates.
     * @request PUT:/activeGates/autoUpdate
     */
    putGlobalAutoUpdateConfigForTenant: (data: ActiveGateGlobalAutoUpdateConfig, params: RequestParams = {}) =>
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
     * @name ValidateGlobalAutoUpdateConfigForTenant
     * @summary Validates the payload for the `POST /activeGates/autoUpdate` request.
     * @request POST:/activeGates/autoUpdate/validator
     */
    validateGlobalAutoUpdateConfigForTenant: (data: ActiveGateGlobalAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGates/autoUpdate/validator`,
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
        type?: "ENVIRONMENT" | "ENVIRONMENT_MULTI";
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
  entities = {
    /**
     * No description
     *
     * @tags Monitored entities
     * @name PushCustomDevice
     * @summary Creates or updates a custom device
     * @request POST:/entities/custom
     */
    pushCustomDevice: (data: CustomDeviceCreation, params: RequestParams = {}) =>
      this.request<CustomDeviceCreationResult, void>({
        path: `/entities/custom`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Lists entities observed within the specified timeframe along with their properties. When you query entities of the `SERVICE_METHOD` type, only the following requests are returned: * [Key requests](https://dt-url.net/a903u9s) * Top X requests that are used for [baselining](https://dt-url.net/0j23uqb) * Requests that have caused a [problem](https://dt-url.net/pf43uqg) You can limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Monitored entities
     * @name GetEntities
     * @summary Gets the information about monitored entities
     * @request GET:/entities
     */
    getEntities: (
      query?: {
        nextPageKey?: string;
        pageSize?: number;
        entitySelector?: string;
        from?: string;
        to?: string;
        fields?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EntitiesList, any>({
        path: `/entities`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Monitored entities
     * @name GetEntity
     * @summary Gets the properties of the specified monitored entity
     * @request GET:/entities/{entityId}
     */
    getEntity: (
      entityId: string,
      query?: { from?: string; to?: string; fields?: string },
      params: RequestParams = {},
    ) =>
      this.request<Entity, any>({
        path: `/entities/${entityId}`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  entityTypes = {
    /**
     * @description You can limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Monitored entities
     * @name GetEntityTypes
     * @summary Gets a list of properties for all entity types
     * @request GET:/entityTypes
     */
    getEntityTypes: (query?: { nextPageKey?: string; pageSize?: number }, params: RequestParams = {}) =>
      this.request<EntityTypeList, void>({
        path: `/entityTypes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Monitored entities
     * @name GetEntityType
     * @summary Gets a list of properties for the specified entity type
     * @request GET:/entityTypes/{type}
     */
    getEntityType: (type: string, params: RequestParams = {}) =>
      this.request<EntityType, void>({
        path: `/entityTypes/${type}`,
        method: "GET",
        ...params,
      }),
  };
  eventProperties = {
    /**
     * No description
     *
     * @tags Events
     * @name GetEventProperties
     * @summary Lists all event properties | maturity=EARLY_ADOPTER
     * @request GET:/eventProperties
     */
    getEventProperties: (query?: { nextPageKey?: string; pageSize?: number }, params: RequestParams = {}) =>
      this.request<EventPropertyDetails, any>({
        path: `/eventProperties`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name GetEventProperty
     * @summary Gets the details of an event property | maturity=EARLY_ADOPTER
     * @request GET:/eventProperties/{propertyKey}
     */
    getEventProperty: (propertyKey: string, params: RequestParams = {}) =>
      this.request<EventPropertyDetail, any>({
        path: `/eventProperties/${propertyKey}`,
        method: "GET",
        ...params,
      }),
  };
  eventTypes = {
    /**
     * No description
     *
     * @tags Events
     * @name GetEventTypes
     * @summary Lists all event types | maturity=EARLY_ADOPTER
     * @request GET:/eventTypes
     */
    getEventTypes: (query?: { nextPageKey?: string; pageSize?: number }, params: RequestParams = {}) =>
      this.request<EventTypeList, any>({
        path: `/eventTypes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name GetEventType
     * @summary Gets the properties of an event type | maturity=EARLY_ADOPTER
     * @request GET:/eventTypes/{eventType}
     */
    getEventType: (eventType: string, params: RequestParams = {}) =>
      this.request<EventType, any>({
        path: `/eventTypes/${eventType}`,
        method: "GET",
        ...params,
      }),
  };
  events = {
    /**
     * @description The ingestion of custom events consumes [Davis Data Units](https://dt-url.net/ddu) (DDUs) from the events pool.
     *
     * @tags Events
     * @name CreateEvent
     * @summary Ingests a custom event | maturity=EARLY_ADOPTER
     * @request POST:/events/ingest
     */
    createEvent: (data: EventIngest, params: RequestParams = {}) =>
      this.request<EventIngestResults, any>({
        path: `/events/ingest`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name GetEvent
     * @summary Gets the properties of an event | maturity=EARLY_ADOPTER
     * @request GET:/events/{eventId}
     */
    getEvent: (eventId: string, params: RequestParams = {}) =>
      this.request<Event, any>({
        path: `/events/${eventId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name GetEvents
     * @summary Lists events within the specified timeframe | maturity=EARLY_ADOPTER
     * @request GET:/events
     */
    getEvents: (
      query?: {
        nextPageKey?: string;
        pageSize?: number;
        from?: string;
        to?: string;
        eventSelector?: string;
        entitySelector?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<EventList, any>({
        path: `/events`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  metrics = {
    /**
     * No description
     *
     * @tags Metrics
     * @name Metric
     * @summary Gets the descriptor of the specified metric
     * @request GET:/metrics/{metricKey}
     */
    metric: (metricKey: string, params: RequestParams = {}) =>
      this.request<MetricDescriptor, void>({
        path: `/metrics/${metricKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Deletion cannot be undone! You can't delete a metric if it has data points ingested within the last two hours.
     *
     * @tags Metrics
     * @name Delete
     * @summary Deletes the specified metric
     * @request DELETE:/metrics/{metricKey}
     */
    delete: (metricKey: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/metrics/${metricKey}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description You can narrow down the output by selecting metrics in the **metricSelector** field. You can additionally limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Then use the cursor from the **nextPageKey** field of the response in the **nextPageKey** query parameter to obtain subsequent pages. All other query parameters must be omitted.
     *
     * @tags Metrics
     * @name AllMetrics
     * @summary Lists all available metrics
     * @request GET:/metrics
     */
    allMetrics: (
      query?: {
        nextPageKey?: string;
        pageSize?: number;
        metricSelector?: string;
        text?: string;
        fields?: string;
        writtenSince?: string;
        metadataSelector?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MetricDescriptorCollection, void>({
        path: `/metrics`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The following limits apply: * The amount of aggregated data points in the response is limited to 1,000 * The amount of series in the response is limited to 1,000 * The amount of data points per series is limited to 10,080 (minutes of one week) * The overall amount of data points is limited to 100,000
     *
     * @tags Metrics
     * @name Query
     * @summary Gets data points of the specified metrics
     * @request GET:/metrics/query
     */
    query: (
      query?: { metricSelector?: string; resolution?: string; from?: string; to?: string; entitySelector?: string },
      params: RequestParams = {},
    ) =>
      this.request<MetricData, void>({
        path: `/metrics/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metrics
     * @name Ingest
     * @summary Pushes metric data points to Dynatrace
     * @request POST:/metrics/ingest
     */
    ingest: (data: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/metrics/ingest`,
        method: "POST",
        body: data,
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
  networkZoneSettings = {
    /**
     * No description
     *
     * @tags Network zones
     * @name GetNetworkZoneSettings
     * @summary Gets the global configuration of network zones | maturity=EARLY_ADOPTER
     * @request GET:/networkZoneSettings
     */
    getNetworkZoneSettings: (params: RequestParams = {}) =>
      this.request<NetworkZoneSettings, any>({
        path: `/networkZoneSettings`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Network zones
     * @name UpdateNetworkZoneSettings
     * @summary Updates the global configuration of network zones | maturity=EARLY_ADOPTER
     * @request PUT:/networkZoneSettings
     */
    updateNetworkZoneSettings: (data: NetworkZoneSettings, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/networkZoneSettings`,
        method: "PUT",
        body: data,
        ...params,
      }),
  };
  tags = {
    /**
     * @description Automatically applied tags and imported tags are not included.
     *
     * @tags Monitored entities - Custom tags
     * @name GetTags
     * @summary Gets a list of custom tags applied to the specified entities
     * @request GET:/tags
     */
    getTags: (query: { entitySelector: string; from?: string; to?: string }, params: RequestParams = {}) =>
      this.request<CustomEntityTags, any>({
        path: `/tags`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description All existing tags remain unaffected.
     *
     * @tags Monitored entities - Custom tags
     * @name PostTags
     * @summary Adds custom tags to the specified entities
     * @request POST:/tags
     */
    postTags: (
      query: { entitySelector: string; from?: string; to?: string },
      data: AddEntityTags,
      params: RequestParams = {},
    ) =>
      this.request<AddedEntityTags, any>({
        path: `/tags`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Monitored entities - Custom tags
     * @name DeleteTags
     * @summary Deletes the specified tag from the specified entities
     * @request DELETE:/tags
     */
    deleteTags: (
      query: {
        key: string;
        value?: string;
        deleteAllWithKey?: boolean;
        entitySelector: string;
        from?: string;
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DeletedEntityTags, any>({
        path: `/tags`,
        method: "DELETE",
        query: query,
        ...params,
      }),
  };
  activeGateTokens = {
    /**
     * @description You can limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Access Tokens - ActiveGate tokens
     * @name ListTokens
     * @summary Lists all available ActiveGate tokens | maturity=EARLY_ADOPTER
     * @request GET:/activeGateTokens
     */
    listTokens: (query?: { nextPageKey?: string; pageSize?: number }, params: RequestParams = {}) =>
      this.request<ActiveGateTokenList, ErrorEnvelope>({
        path: `/activeGateTokens`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The newly created token will be owned by the same user who owns the token used for authentication of the call.
     *
     * @tags Access Tokens - ActiveGate tokens
     * @name CreateToken
     * @summary Creates a new ActiveGate token | maturity=EARLY_ADOPTER
     * @request POST:/activeGateTokens
     */
    createToken: (data: ActiveGateTokenCreate, params: RequestParams = {}) =>
      this.request<ActiveGateTokenCreated, ErrorEnvelope>({
        path: `/activeGateTokens`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The token secret is **not** exposed.
     *
     * @tags Access Tokens - ActiveGate tokens
     * @name GetToken
     * @summary Gets metadata of an ActiveGate token | maturity=EARLY_ADOPTER
     * @request GET:/activeGateTokens/{tokenIdentifier}
     */
    getToken: (tokenIdentifier: string, params: RequestParams = {}) =>
      this.request<ActiveGateToken, ErrorEnvelope>({
        path: `/activeGateTokens/${tokenIdentifier}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Tokens - ActiveGate tokens
     * @name RevokeToken
     * @summary Deletes an ActiveGate token | maturity=EARLY_ADOPTER
     * @request DELETE:/activeGateTokens/{tokenIdentifier}
     */
    revokeToken: (tokenIdentifier: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/activeGateTokens/${tokenIdentifier}`,
        method: "DELETE",
        ...params,
      }),
  };
  apiTokens = {
    /**
     * @description You can limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Access Tokens - API tokens
     * @name ListApiTokens
     * @summary Lists all available API tokens
     * @request GET:/apiTokens
     */
    listApiTokens: (
      query?: {
        nextPageKey?: string;
        pageSize?: number;
        apiTokenSelector?: string;
        fields?: string;
        from?: string;
        to?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiTokenList, ErrorEnvelope>({
        path: `/apiTokens`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The newly created token will be owned by the same user who owns the token used for authentication of the call.
     *
     * @tags Access Tokens - API tokens
     * @name CreateApiToken
     * @summary Creates a new API token
     * @request POST:/apiTokens
     */
    createApiToken: (data: ApiTokenCreate, params: RequestParams = {}) =>
      this.request<ApiTokenCreated, ErrorEnvelope>({
        path: `/apiTokens`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The token secret is **not** exposed.
     *
     * @tags Access Tokens - API tokens
     * @name GetApiToken
     * @summary Gets API token metadata by token ID
     * @request GET:/apiTokens/{id}
     */
    getApiToken: (id: string, params: RequestParams = {}) =>
      this.request<ApiToken, ErrorEnvelope | void>({
        path: `/apiTokens/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Tokens - API tokens
     * @name UpdateApiToken
     * @summary Updates an API token
     * @request PUT:/apiTokens/{id}
     */
    updateApiToken: (id: string, data: ApiTokenUpdate, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/apiTokens/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Tokens - API tokens
     * @name DeleteApiToken
     * @summary Deletes an API token
     * @request DELETE:/apiTokens/{id}
     */
    deleteApiToken: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope | void>({
        path: `/apiTokens/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Access Tokens - API tokens
     * @name LookupApiToken
     * @summary Gets API token metadata by token secret
     * @request POST:/apiTokens/lookup
     */
    lookupApiToken: (data: ApiTokenSecret, params: RequestParams = {}) =>
      this.request<ApiToken, void>({
        path: `/apiTokens/lookup`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  auditlogs = {
    /**
     * @description You can limit the output by using pagination: 1. Specify the number of results per page in the **pageSize** query parameter. 2. Use the cursor from the **nextPageKey** field of the previous response in the **nextPageKey** query parameter to obtain subsequent pages.
     *
     * @tags Audit Logs
     * @name GetLogs
     * @summary Gets the audit log of your Dynatrace environment | maturity=EARLY_ADOPTER
     * @request GET:/auditlogs
     */
    getLogs: (
      query?: { nextPageKey?: string; pageSize?: number; filter?: string; from?: string; to?: string; sort?: string },
      params: RequestParams = {},
    ) =>
      this.request<AuditLog, any>({
        path: `/auditlogs`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Audit Logs
     * @name GetLog
     * @summary Gets the specified entry of the audit log | maturity=EARLY_ADOPTER
     * @request GET:/auditlogs/{id}
     */
    getLog: (id: string, params: RequestParams = {}) =>
      this.request<AuditLogEntry, ErrorEnvelope>({
        path: `/auditlogs/${id}`,
        method: "GET",
        ...params,
      }),
  };
  davis = {
    /**
     * @description You can narrow down the output by providing the management zone and pagination. If you specify a management zone, only problems originating from that zone are included to the request.
     *
     * @tags Davis security advisor
     * @name GetAdviceForSecurityProblems
     * @summary Provides advice for security problems. | maturity=EARLY_ADOPTER
     * @request GET:/davis/securityAdvices
     */
    getAdviceForSecurityProblems: (
      query?: { managementZoneFilter?: string; nextPageKey?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<DavisSecurityAdviceList, any>({
        path: `/davis/securityAdvices`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  securityProblems = {
    /**
     * No description
     *
     * @tags Security problems
     * @name GetSecurityProblems
     * @summary Lists all security problems | maturity=EARLY_ADOPTER
     * @request GET:/securityProblems
     */
    getSecurityProblems: (
      query?: {
        nextPageKey?: string;
        pageSize?: number;
        securityProblemSelector?: string;
        sort?: string;
        fields?: string;
        from?: string;
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SecurityProblemList, any>({
        path: `/securityProblems`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security problems
     * @name GetRemediationItems
     * @summary Gets the remediation items for a security problem. | maturity=EARLY_ADOPTER
     * @request GET:/securityProblems/{id}/remediationItems
     */
    getRemediationItems: (id: string, query?: { remediationItemSelector?: string }, params: RequestParams = {}) =>
      this.request<RemediationItemList, any>({
        path: `/securityProblems/${id}/remediationItems`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security problems
     * @name GetSecurityProblem
     * @summary Gets the specified security problem | maturity=EARLY_ADOPTER
     * @request GET:/securityProblems/{id}
     */
    getSecurityProblem: (id: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<SecurityProblemDetails, any>({
        path: `/securityProblems/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security problems
     * @name UnmuteSecurityProblem
     * @summary Un-mutes the specified security problem. | maturity=EARLY_ADOPTER
     * @request POST:/securityProblems/{id}/unmute
     */
    unmuteSecurityProblem: (id: string, data: Unmute, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/securityProblems/${id}/unmute`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security problems
     * @name SetRemediationItemMuteState
     * @summary Sets the mute state of a remediation item of a security problem. | maturity=EARLY_ADOPTER
     * @request PUT:/securityProblems/{id}/remediationItems/{itemId}/muteState
     */
    setRemediationItemMuteState: (
      id: string,
      itemId: string,
      data: RemediationItemMuteStateChangeDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/securityProblems/${id}/remediationItems/${itemId}/muteState`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Security problems
     * @name MuteSecurityProblem
     * @summary Mutes the specified security problem. | maturity=EARLY_ADOPTER
     * @request POST:/securityProblems/{id}/mute
     */
    muteSecurityProblem: (id: string, data: Mute, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/securityProblems/${id}/mute`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  extensions = {
    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name ExtensionMonitoringConfigurations
     * @summary Lists all the monitoring configurations of the specified extension 2.0
     * @request GET:/extensions/{extensionName}/monitoringConfigurations
     */
    extensionMonitoringConfigurations: (
      extensionName: string,
      query?: { nextPageKey?: string; pageSize?: number; version?: string; active?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<ExtensionMonitoringConfigurationsList, ErrorEnvelope>({
        path: `/extensions/${extensionName}/monitoringConfigurations`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name CreateMonitoringConfiguration
     * @summary Creates new monitoring configuration for the specified extension 2.0
     * @request POST:/extensions/{extensionName}/monitoringConfigurations
     */
    createMonitoringConfiguration: (
      extensionName: string,
      data: MonitoringConfigurationDto[],
      params: RequestParams = {},
    ) =>
      this.request<MonitoringConfigurationResponse[], ErrorEnvelope>({
        path: `/extensions/${extensionName}/monitoringConfigurations`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name MonitoringConfigurationDetails
     * @summary Gets the details of the specified monitoring configuration
     * @request GET:/extensions/{extensionName}/monitoringConfigurations/{configurationId}
     */
    monitoringConfigurationDetails: (extensionName: string, configurationId: string, params: RequestParams = {}) =>
      this.request<ExtensionMonitoringConfiguration, ErrorEnvelope>({
        path: `/extensions/${extensionName}/monitoringConfigurations/${configurationId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name UpdateMonitoringConfiguration
     * @summary Updates the specified monitoring configuration
     * @request PUT:/extensions/{extensionName}/monitoringConfigurations/{configurationId}
     */
    updateMonitoringConfiguration: (
      extensionName: string,
      configurationId: string,
      data: MonitoringConfigurationUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<MonitoringConfigurationResponse, ErrorEnvelope>({
        path: `/extensions/${extensionName}/monitoringConfigurations/${configurationId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name RemoveMonitoringConfiguration
     * @summary Deletes the specified monitoring configuration
     * @request DELETE:/extensions/{extensionName}/monitoringConfigurations/{configurationId}
     */
    removeMonitoringConfiguration: (extensionName: string, configurationId: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/extensions/${extensionName}/monitoringConfigurations/${configurationId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name GetExtensionMonitoringConfigurationEvents
     * @summary Gets the list of the events linked to specific monitoring configuration
     * @request GET:/extensions/{extensionName}/monitoringConfigurations/{configurationId}/events
     */
    getExtensionMonitoringConfigurationEvents: (
      extensionName: string,
      configurationId: string,
      query?: {
        from?: string;
        to?: string;
        "dt.entity.host"?: string;
        "dt.active_gate.id"?: string;
        "dt.extension.ds"?: string;
        content?: string;
        status?: "ERROR" | "INFO" | "NONE" | "WARN";
      },
      params: RequestParams = {},
    ) =>
      this.request<ExtensionEventsList, ErrorEnvelope>({
        path: `/extensions/${extensionName}/monitoringConfigurations/${configurationId}/events`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name GetExtensionMonitoringConfigurationStatus
     * @summary Gets the most recent status of the execution of given monitoring configuration
     * @request GET:/extensions/{extensionName}/monitoringConfigurations/{configurationId}/status
     */
    getExtensionMonitoringConfigurationStatus: (
      extensionName: string,
      configurationId: string,
      params: RequestParams = {},
    ) =>
      this.request<ExtensionStatusDto, ErrorEnvelope>({
        path: `/extensions/${extensionName}/monitoringConfigurations/${configurationId}/status`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name ListSchemaFiles
     * @summary Lists all the files available for the specified extension 2.0 schema version
     * @request GET:/extensions/schemas/{schemaVersion}
     */
    listSchemaFiles: (schemaVersion: string, params: RequestParams = {}) =>
      this.request<SchemaFiles, ErrorEnvelope>({
        path: `/extensions/schemas/${schemaVersion}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name GetSchemaFile
     * @summary Gets the extension 2.0 schema file in the specified version
     * @request GET:/extensions/schemas/{schemaVersion}/{fileName}
     */
    getSchemaFile: (schemaVersion: string, fileName: string, params: RequestParams = {}) =>
      this.request<JsonNode, ErrorEnvelope>({
        path: `/extensions/schemas/${schemaVersion}/${fileName}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name ListExtensions
     * @summary Lists all the extensions 2.0 available in your environment
     * @request GET:/extensions
     */
    listExtensions: (query?: { nextPageKey?: string; pageSize?: number; name?: string }, params: RequestParams = {}) =>
      this.request<ExtensionList, any>({
        path: `/extensions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name UploadExtension
     * @summary Uploads or verifies a new extension 2.0
     * @request POST:/extensions
     */
    uploadExtension: (data: { file: File }, query?: { validateOnly?: boolean }, params: RequestParams = {}) =>
      this.request<Extension, ErrorEnvelope>({
        path: `/extensions`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name ListExtensionVersions
     * @summary Lists all versions of the extension 2.0
     * @request GET:/extensions/{extensionName}
     */
    listExtensionVersions: (
      extensionName: string,
      query?: { nextPageKey?: string; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<ExtensionList, ErrorEnvelope>({
        path: `/extensions/${extensionName}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name ExtensionDetails
     * @summary Gets details of the specified version of the extension 2.0
     * @request GET:/extensions/{extensionName}/{extensionVersion}
     */
    extensionDetails: (extensionName: string, extensionVersion: string, params: RequestParams = {}) =>
      this.request<Extension, ErrorEnvelope>({
        path: `/extensions/${extensionName}/${extensionVersion}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name RemoveExtension
     * @summary Deletes the specified version of the extension 2.0
     * @request DELETE:/extensions/{extensionName}/{extensionVersion}
     */
    removeExtension: (extensionName: string, extensionVersion: string, params: RequestParams = {}) =>
      this.request<Extension, ErrorEnvelope>({
        path: `/extensions/${extensionName}/${extensionVersion}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name ExtensionConfigurationSchema
     * @summary Gets the configuration schema of the specified version of the extension 2.0
     * @request GET:/extensions/{extensionName}/{extensionVersion}/schema
     */
    extensionConfigurationSchema: (extensionName: string, extensionVersion: string, params: RequestParams = {}) =>
      this.request<SchemaDefinitionRestDto, ErrorEnvelope>({
        path: `/extensions/${extensionName}/${extensionVersion}/schema`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name GetActiveEnvironmentConfiguration
     * @summary Gets the active environment configuration version of the specified extension 2.0
     * @request GET:/extensions/{extensionName}/environmentConfiguration
     */
    getActiveEnvironmentConfiguration: (extensionName: string, params: RequestParams = {}) =>
      this.request<ExtensionEnvironmentConfigurationVersion, ErrorEnvelope>({
        path: `/extensions/${extensionName}/environmentConfiguration`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name UpdateExtensionEnvironmentConfiguration
     * @summary Updates the active environment configuration version of the extension 2.0
     * @request PUT:/extensions/{extensionName}/environmentConfiguration
     */
    updateExtensionEnvironmentConfiguration: (
      extensionName: string,
      data: ExtensionEnvironmentConfigurationVersion,
      params: RequestParams = {},
    ) =>
      this.request<ExtensionEnvironmentConfigurationVersion, ErrorEnvelope>({
        path: `/extensions/${extensionName}/environmentConfiguration`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name ActivateExtensionEnvironmentConfiguration
     * @summary Activates the environment configuration from the specified version of the extension 2.0
     * @request POST:/extensions/{extensionName}/environmentConfiguration
     */
    activateExtensionEnvironmentConfiguration: (
      extensionName: string,
      data: ExtensionEnvironmentConfigurationVersion,
      params: RequestParams = {},
    ) =>
      this.request<ExtensionEnvironmentConfigurationVersion, ErrorEnvelope>({
        path: `/extensions/${extensionName}/environmentConfiguration`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name DeleteEnvironmentConfiguration
     * @summary Deactivates the environment configuration of the specified extension 2.0
     * @request DELETE:/extensions/{extensionName}/environmentConfiguration
     */
    deleteEnvironmentConfiguration: (extensionName: string, params: RequestParams = {}) =>
      this.request<ExtensionEnvironmentConfigurationVersion, ErrorEnvelope>({
        path: `/extensions/${extensionName}/environmentConfiguration`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name GetEnvironmentConfigurationEvents
     * @summary List of the latest extension environment configuration events
     * @request GET:/extensions/{extensionName}/environmentConfiguration/events
     */
    getEnvironmentConfigurationEvents: (
      extensionName: string,
      query?: { from?: string; to?: string; content?: string; status?: "ERROR" | "INFO" | "NONE" | "WARN" },
      params: RequestParams = {},
    ) =>
      this.request<ExtensionEventsList, ErrorEnvelope>({
        path: `/extensions/${extensionName}/environmentConfiguration/events`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions 2.0
     * @name ListSchemas
     * @summary Lists all the extension 2.0 schemas versions available in your environment
     * @request GET:/extensions/schemas
     */
    listSchemas: (params: RequestParams = {}) =>
      this.request<SchemasList, any>({
        path: `/extensions/schemas`,
        method: "GET",
        ...params,
      }),
  };
  problems = {
    /**
     * No description
     *
     * @tags Problems
     * @name GetComment
     * @summary Gets the specified comment on a problem
     * @request GET:/problems/{problemId}/comments/{commentId}
     */
    getComment: (problemId: string, commentId: string, params: RequestParams = {}) =>
      this.request<Comment, any>({
        path: `/problems/${problemId}/comments/${commentId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problems
     * @name UpdateComment
     * @summary Updates the specified comment on a problem
     * @request PUT:/problems/{problemId}/comments/{commentId}
     */
    updateComment: (problemId: string, commentId: string, data: CommentRequestDtoImpl, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/problems/${problemId}/comments/${commentId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problems
     * @name DeleteComment
     * @summary Deletes the specified comment from a problem
     * @request DELETE:/problems/{problemId}/comments/{commentId}
     */
    deleteComment: (problemId: string, commentId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/problems/${problemId}/comments/${commentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problems
     * @name CloseProblem
     * @summary Closes the specified problem and adds a closing comment on it
     * @request POST:/problems/{problemId}/close
     */
    closeProblem: (problemId: string, data: ProblemCloseRequestDtoImpl, params: RequestParams = {}) =>
      this.request<ProblemCloseResult, any>({
        path: `/problems/${problemId}/close`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problems
     * @name GetComments
     * @summary Gets all comments on the specified problem
     * @request GET:/problems/{problemId}/comments
     */
    getComments: (problemId: string, query?: { nextPageKey?: string; pageSize?: number }, params: RequestParams = {}) =>
      this.request<CommentsList, any>({
        path: `/problems/${problemId}/comments`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problems
     * @name CreateComment
     * @summary Adds a new comment on the specified problem
     * @request POST:/problems/{problemId}/comments
     */
    createComment: (problemId: string, data: CommentRequestDtoImpl, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/problems/${problemId}/comments`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problems
     * @name GetProblems
     * @summary Lists problems observed within the specified timeframe
     * @request GET:/problems
     */
    getProblems: (
      query?: {
        fields?: string;
        nextPageKey?: string;
        pageSize?: number;
        from?: string;
        to?: string;
        problemSelector?: string;
        entitySelector?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Problems, any>({
        path: `/problems`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Problems
     * @name GetProblem
     * @summary Gets the properties of the specified problem
     * @request GET:/problems/{problemId}
     */
    getProblem: (problemId: string, query?: { fields?: string }, params: RequestParams = {}) =>
      this.request<Problem, any>({
        path: `/problems/${problemId}`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  logs = {
    /**
     * @description Ingested logs are stored in the indexed log storage. This endpoint requires an ActiveGate with the **Log Analytics Collector** module enabled.
     *
     * @tags Logs
     * @name StoreLog
     * @summary Pushes log records to Dynatrace | maturity=EARLY_ADOPTER
     * @request POST:/logs/ingest
     */
    storeLog: (data: LogMessageJson, params: RequestParams = {}) =>
      this.request<SuccessEnvelope, ErrorEnvelope>({
        path: `/logs/ingest`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Returns the aggregated number of occurrences of log values divided into time slots. It is possible that the timeframe covered by results exceeds the specified timeframe. In that case the request returns fewer time slots than specified in the **timeBuckets** query parameter.
     *
     * @tags Logs
     * @name GetLogHistogramData
     * @summary Gets aggregated log records | maturity=EARLY_ADOPTER
     * @request GET:/logs/aggregate
     */
    getLogHistogramData: (
      query?: {
        from?: string;
        to?: string;
        query?: string;
        timeBuckets?: number;
        maxGroupValues?: number;
        groupBy?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<AggregatedLog, ErrorEnvelope>({
        path: `/logs/aggregate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Returns the first *X* records (specified in the **limit** query parameter). Log records are sorted by the criteria specified in the **sort** query parameter. If the query is too large to be processed in a single request, it is divided into slices. In that case the first response contains the **nextSliceKey** cursor for the second slice. Use it in the **nextSliceKey** query parameter to obtain the second slice, which contains **nextSliceKey** cursor for the third slice, and so on. Results can be distributed unevenly between slices and some slices might be empty.
     *
     * @tags Logs
     * @name GetLogRecords
     * @summary Reads log records | maturity=EARLY_ADOPTER
     * @request GET:/logs/search
     */
    getLogRecords: (
      query?: { from?: string; to?: string; limit?: number; query?: string; sort?: string; nextSliceKey?: string },
      params: RequestParams = {},
    ) =>
      this.request<LogRecordsList, ErrorEnvelope>({
        path: `/logs/search`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  releases = {
    /**
     * No description
     *
     * @tags Releases
     * @name GetReleases
     * @summary Returns all releases | maturity=EARLY_ADOPTER
     * @request GET:/releases
     */
    getReleases: (
      query?: {
        from?: string;
        to?: string;
        nextPageKey?: string;
        pageSize?: number;
        demo?: boolean;
        releasesSelector?: string;
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Releases, any>({
        path: `/releases`,
        method: "GET",
        query: query,
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
  slo = {
    /**
     * @description By default the values are calculated for the SLO's own timeframe. You can use a custom timeframe: 1. Set the **timeFrame** parameter to `GTF`. 2. Provide the timeframe in **from** and **to** parameters.
     *
     * @tags Service-level objectives
     * @name GetSlo
     * @summary Lists all available SLOs along with calculated values
     * @request GET:/slo
     */
    getSlo: (
      query?: {
        nextPageKey?: string;
        pageSize?: number;
        from?: string;
        to?: string;
        sloSelector?: string;
        sort?: string;
        timeFrame?: "CURRENT" | "GTF";
        pageIdx?: number;
        demo?: boolean;
        evaluate?: boolean;
        enabledSlos?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<SLOs, ErrorEnvelope>({
        path: `/slo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service-level objectives
     * @name CreateSlo
     * @summary Creates a new SLO
     * @request POST:/slo
     */
    createSlo: (data: SloCreate, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/slo`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description If **from** and **to** parameters are provided, the SLO is calculated for that timeframe; otherwise the SLO's own timeframe is used.
     *
     * @tags Service-level objectives
     * @name GetSloById
     * @summary Gets parameters and the calculated value of an SLO
     * @request GET:/slo/{id}
     */
    getSloById: (
      id: string,
      query?: { from?: string; to?: string; timeFrame?: "CURRENT" | "GTF" },
      params: RequestParams = {},
    ) =>
      this.request<SLO, ErrorEnvelope>({
        path: `/slo/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service-level objectives
     * @name UpdateSloById
     * @summary Updates an existing SLO
     * @request PUT:/slo/{id}
     */
    updateSloById: (id: string, data: SloCreate, params: RequestParams = {}) =>
      this.request<void, void | ErrorEnvelope>({
        path: `/slo/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service-level objectives
     * @name DeleteSlo
     * @summary Deletes an SLO
     * @request DELETE:/slo/{id}
     */
    deleteSlo: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/slo/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  synthetic = {
    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name GetConfiguration
     * @summary Gets set of synthetic related parameters defined for whole tenant (affects all monitors and all private locations). | maturity=EARLY_ADOPTER
     * @request GET:/synthetic/config
     */
    getConfiguration: (params: RequestParams = {}) =>
      this.request<SyntheticConfigDto, any>({
        path: `/synthetic/config`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name UpdateConfiguration
     * @summary Updates set of synthetic related parameters defined for whole tenant (affects all monitors and all private locations). | maturity=EARLY_ADOPTER
     * @request PUT:/synthetic/config
     */
    updateConfiguration: (data: SyntheticConfigDto, params: RequestParams = {}) =>
      this.request<SyntheticConfigDto, any>({
        path: `/synthetic/config`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - HTTP monitor execution
     * @name GetExecutionResult
     * @summary Returns detailed information about last HTTP monitor execution. | maturity=EARLY_ADOPTER
     * @request GET:/synthetic/execution/{monitorId}/{resultType}
     */
    getExecutionResult: (
      monitorId: string,
      resultType: "SUCCESS" | "FAILED",
      query?: { locationId?: string },
      params: RequestParams = {},
    ) =>
      this.request<MonitorExecutionResults, any>({
        path: `/synthetic/execution/${monitorId}/${resultType}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name GetLocationsStatus
     * @summary Checks the status of public synthetic locations
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
     * @summary Changes the status of public synthetic locations
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
     * @description For public locations you can only change the location status.
     *
     * @tags Synthetic - Locations, nodes and configuration
     * @name UpdateLocation
     * @summary Updates the specified synthetic location
     * @request PUT:/synthetic/locations/{locationId}
     */
    updateLocation: (locationId: string, data: SyntheticLocationUpdate, params: RequestParams = {}) =>
      this.request<void, any>({
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
      this.request<void, any>({
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
  tenantTokenRotation = {
    /**
     * @description To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation.
     *
     * @tags Access tokens - Tenant tokens
     * @name StartRotation
     * @summary Starts tenant token rotation
     * @request POST:/tenantTokenRotation/start
     */
    startRotation: (params: RequestParams = {}) =>
      this.request<TenantTokenConfig, ErrorEnvelope>({
        path: `/tenantTokenRotation/start`,
        method: "POST",
        ...params,
      }),

    /**
     * @description To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation.
     *
     * @tags Access tokens - Tenant tokens
     * @name CancelRotation
     * @summary Cancels tenant token rotation
     * @request POST:/tenantTokenRotation/cancel
     */
    cancelRotation: (params: RequestParams = {}) =>
      this.request<TenantTokenConfig, ErrorEnvelope>({
        path: `/tenantTokenRotation/cancel`,
        method: "POST",
        ...params,
      }),

    /**
     * @description To learn how to rotate tokens, see [Token rotation](https://dt-url.net/1543sf6) in Dynatrace Documentation.
     *
     * @tags Access tokens - Tenant tokens
     * @name FinishRotation
     * @summary Finishes tenant token rotation
     * @request POST:/tenantTokenRotation/finish
     */
    finishRotation: (params: RequestParams = {}) =>
      this.request<TenantTokenConfig, ErrorEnvelope>({
        path: `/tenantTokenRotation/finish`,
        method: "POST",
        ...params,
      }),
  };
}
