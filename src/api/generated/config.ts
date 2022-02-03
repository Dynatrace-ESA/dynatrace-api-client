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
* Configuration of a custom event filter. 

Filters custom events by title or description. If both specified, the AND logic applies.
*/
export interface AlertingCustomEventFilter {
  /** Configuration of a matching filter. */
  customTitleFilter?: AlertingCustomTextFilter;

  /** Configuration of a matching filter. */
  customDescriptionFilter?: AlertingCustomTextFilter;
}

/**
 * Configuration of a matching filter.
 */
export interface AlertingCustomTextFilter {
  /** The filter is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The value to compare to. */
  value: string;

  /**
   * Operator of the comparison.
   *
   *  You can reverse it by setting **negate** to `true`.
   */
  operator: "BEGINS_WITH" | "CONTAINS" | "CONTAINS_REGEX" | "ENDS_WITH" | "EQUALS";

  /** Reverses the comparison **operator**. For example it turns the **begins with** into **does not begin with**. */
  negate: boolean;

  /**
   * The condition is case sensitive (`false`) or case insensitive (`true`).
   *
   *  If not set, then `false` is used, making the condition case sensitive.
   */
  caseInsensitive: boolean;
}

/**
* Configuration of the event filter for the alerting profile. 

You have two mutually exclusive options: 
* Select an event type from the list of the predefined events. Specify it in the **predefinedEventFilter** field. 
* Set a rule for custom events. Specify it in the **customEventFilter** field.
*/
export interface AlertingEventTypeFilter {
  /** Configuration of a predefined event filter. */
  predefinedEventFilter?: AlertingPredefinedEventFilter;

  /**
   * Configuration of a custom event filter.
   *
   * Filters custom events by title or description. If both specified, the AND logic applies.
   */
  customEventFilter?: AlertingCustomEventFilter;
}

/**
 * Configuration of a predefined event filter.
 */
export interface AlertingPredefinedEventFilter {
  /** The type of the predefined event. */
  eventType:
    | "APPLICATION_ERROR_RATE_INCREASED"
    | "APPLICATION_SLOWDOWN"
    | "APPLICATION_UNEXPECTED_HIGH_LOAD"
    | "APPLICATION_UNEXPECTED_LOW_LOAD"
    | "AWS_LAMBDA_HIGH_ERROR_RATE"
    | "CUSTOM_APPLICATION_ERROR_RATE_INCREASED"
    | "CUSTOM_APPLICATION_SLOWDOWN"
    | "CUSTOM_APPLICATION_UNEXPECTED_HIGH_LOAD"
    | "CUSTOM_APPLICATION_UNEXPECTED_LOW_LOAD"
    | "CUSTOM_APP_CRASH_RATE_INCREASED"
    | "DATABASE_CONNECTION_FAILURE"
    | "DATA_CENTER_SERVICE_PERFORMANCE_DEGRADATION"
    | "DATA_CENTER_SERVICE_UNAVAILABLE"
    | "EBS_VOLUME_HIGH_LATENCY"
    | "EC2_HIGH_CPU"
    | "ELB_HIGH_BACKEND_ERROR_RATE"
    | "ENTERPRICE_APPLICATION_PERFORMANCE_DEGRADATION"
    | "ENTERPRISE_APPLICATION_UNAVAILABLE"
    | "ESXI_GUEST_ACTIVE_SWAP_WAIT"
    | "ESXI_GUEST_CPU_LIMIT_REACHED"
    | "ESXI_HOST_CPU_SATURATION"
    | "ESXI_HOST_DATASTORE_LOW_DISK_SPACE"
    | "ESXI_HOST_DISK_QUEUE_SLOW"
    | "ESXI_HOST_DISK_SLOW"
    | "ESXI_HOST_MEMORY_SATURATION"
    | "ESXI_HOST_NETWORK_PROBLEMS"
    | "ESXI_HOST_OVERLOADED_STORAGE"
    | "ESXI_VM_IMPACT_HOST_CPU_SATURATION"
    | "ESXI_VM_IMPACT_HOST_MEMORY_SATURATION"
    | "EXTERNAL_SYNTHETIC_TEST_OUTAGE"
    | "EXTERNAL_SYNTHETIC_TEST_SLOWDOWN"
    | "HOST_OF_SERVICE_UNAVAILABLE"
    | "HTTP_CHECK_GLOBAL_OUTAGE"
    | "HTTP_CHECK_LOCAL_OUTAGE"
    | "HTTP_CHECK_TEST_LOCATION_SLOWDOWN"
    | "MOBILE_APPLICATION_ERROR_RATE_INCREASED"
    | "MOBILE_APPLICATION_SLOWDOWN"
    | "MOBILE_APPLICATION_UNEXPECTED_HIGH_LOAD"
    | "MOBILE_APPLICATION_UNEXPECTED_LOW_LOAD"
    | "MOBILE_APP_CRASH_RATE_INCREASED"
    | "MONITORING_UNAVAILABLE"
    | "OSI_DISK_LOW_INODES"
    | "OSI_GRACEFULLY_SHUTDOWN"
    | "OSI_HIGH_CPU"
    | "OSI_HIGH_MEMORY"
    | "OSI_LOW_DISK_SPACE"
    | "OSI_NIC_DROPPED_PACKETS_HIGH"
    | "OSI_NIC_ERRORS_HIGH"
    | "OSI_NIC_UTILIZATION_HIGH"
    | "OSI_SLOW_DISK"
    | "OSI_UNEXPECTEDLY_UNAVAILABLE"
    | "PGI_OF_SERVICE_UNAVAILABLE"
    | "PGI_UNAVAILABLE"
    | "PG_LOW_INSTANCE_COUNT"
    | "PROCESS_CRASHED"
    | "PROCESS_HIGH_GC_ACTIVITY"
    | "PROCESS_MEMORY_RESOURCE_EXHAUSTED"
    | "PROCESS_NA_HIGH_CONN_FAIL_RATE"
    | "PROCESS_NA_HIGH_LOSS_RATE"
    | "PROCESS_THREADS_RESOURCE_EXHAUSTED"
    | "RDS_HIGH_CPU"
    | "RDS_HIGH_LATENCY"
    | "RDS_LOW_MEMORY"
    | "RDS_LOW_STORAGE_SPACE"
    | "RDS_OF_SERVICE_UNAVAILABLE"
    | "RDS_RESTART_SEQUENCE"
    | "SERVICE_ERROR_RATE_INCREASED"
    | "SERVICE_SLOWDOWN"
    | "SERVICE_UNEXPECTED_HIGH_LOAD"
    | "SERVICE_UNEXPECTED_LOW_LOAD"
    | "SYNTHETIC_GLOBAL_OUTAGE"
    | "SYNTHETIC_LOCAL_OUTAGE"
    | "SYNTHETIC_NODE_OUTAGE"
    | "SYNTHETIC_PRIVATE_LOCATION_OUTAGE"
    | "SYNTHETIC_TEST_LOCATION_SLOWDOWN";

  /**
   * The alert triggers when the problem of specified severity arises while the specified event **is** happening (`false`) or while the specified event is **not** happening (`true`).
   *
   *  For example, if you chose the Slowdown (`PERFORMANCE`) severity and Unexpected high traffic (`APPLICATION_UNEXPECTED_HIGH_LOAD`) event with **negate** set to `true`, the alerting profile will trigger only when the slowdown problem is raised while there is no unexpected high traffic event.
   * Consider the following use case as an example. The Slowdown (`PERFORMANCE`) severity rule is set. Depending on the configuration of the event filter (Unexpected high traffic (`APPLICATION_UNEXPECTED_HIGH_LOAD`) event is used as an example), the behavior of the alerting profile is one of the following:* **negate** is set to `false`: The alert triggers when the slowdown problem is raised while unexpected high traffic event is happening.
   * * **negate** is set to `true`: The alert triggers when the slowdown problem is raised while there is no unexpected high traffic event.
   * * no event rule is set: The alert triggers when the slowdown problem is raised, regardless of any events.
   */
  negate: boolean;
}

/**
 * Configuration of an alerting profile.
 * @example {"id":"12345678-abcd-1234-abcd-1234567890ab","displayName":"sampleAlertingProfile","mzId":"1","rules":[{"severityLevel":"AVAILABILITY","tagFilter":{"includeMode":"INCLUDE_ALL","tagFilters":[{"context":"AWS","key":"tagKey","value":"tagValue"}]},"delayInMinutes":60}],"eventTypeFilters":[{"predefinedEventFilter":{"eventType":"OSI_HIGH_CPU","negate":true}},{"customEventFilter":{"customTitleFilter":{"enabled":true,"value":"filterValue","operator":"EQUALS","negate":false,"caseInsensitive":true},"customDescriptionFilter":{"enabled":false,"value":"filterValue","operator":"CONTAINS","negate":true,"caseInsensitive":false}}}]}
 */
export interface AlertingProfile {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the alerting profile.
   * @format uuid
   * @example 12345678-abcd-1234-abcd-1234567890ab
   */
  id?: string;

  /** The name of the alerting profile, displayed in the UI. */
  displayName: string;

  /**
   * A list of severity rules.
   *
   *  The rules are evaluated from top to bottom. The first matching rule applies and further evaluation stops.
   *  If you specify both severity rule and event filter, the AND logic applies.
   */
  rules?: AlertingProfileSeverityRule[];

  /** The ID of the management zone to which the alerting profile applies. */
  mzId?: string;

  /**
   * The list of event filters.
   *
   * For all filters that are *negated* inside of these event filters, that is all "Predefined" as well as "Custom" (Title and/or Description) ones the AND logic applies.
   * For all *non-negated* ones the OR logic applies.
   * Between these two groups, negated and non-negated, the AND logic applies.
   *  If you specify both severity rule and event filter, the AND logic applies.
   */
  eventTypeFilters?: AlertingEventTypeFilter[];
}

/**
* A severity rule of the alerting profile. 

 A severity rule defines the level of severity that must be met before an alert is sent our for a detected problem. Additionally it restricts the alerting to certain monitored entities.
*/
export interface AlertingProfileSeverityRule {
  /** The severity level to trigger the alert. */
  severityLevel:
    | "AVAILABILITY"
    | "CUSTOM_ALERT"
    | "ERROR"
    | "MONITORING_UNAVAILABLE"
    | "PERFORMANCE"
    | "RESOURCE_CONTENTION";

  /** Configuration of the tag filtering of the alerting profile. */
  tagFilter: AlertingProfileTagFilter;

  /**
   * Send a notification if a problem remains open longer than *X* minutes.
   * @format int32
   * @min 0
   * @max 10000
   */
  delayInMinutes: number;
}

/**
 * Configuration of the tag filtering of the alerting profile.
 */
export interface AlertingProfileTagFilter {
  /**
   * The filtering mode:
   * * `INCLUDE_ANY`: The rule applies to monitored entities that have at least one of the specified tags. You can specify up to 100 tags.
   * * `INCLUDE_ALL`: The rule applies to monitored entities that have **all** of the specified tags. You can specify up to 10 tags.
   * * `NONE`: The rule applies to all monitored entities.
   */
  includeMode: "INCLUDE_ALL" | "INCLUDE_ANY" | "NONE";

  /** A list of required tags. */
  tagFilters?: TagFilter[];
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
 * A tag-based filter of monitored entities.
 */
export interface TagFilter {
  /**
   * The origin of the tag, such as AWS or Cloud Foundry.
   *
   * Custom tags use the `CONTEXTLESS` value.
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
   * Custom tags have the tag value here.
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
 * An ordered list of short representations of Dynatrace entities.
 * @example {"values":[{"id":"6a98d7bc-abb9-44f8-ae6a-73e68e71812a","name":"Dynatrace entity 1","description":"Dynatrace entity 1 for the REST API example"},{"id":"ee70f7d3-9a4e-4f5f-94d2-c9d6156f1618","name":"Dynatrace entity 2"},{"id":"8cdabe77-9e1a-4be8-b3df-269dd6fa9d7f"}]}
 */
export interface StubList {
  /** An ordered list of short representations of Dynatrace entities. */
  values: EntityShortRepresentation[];
}

/**
 * The configuration of anomaly detection for applications.
 * @example {"responseTimeDegradation":{"detectionMode":"DETECT_AUTOMATICALLY","automaticDetection":{"responseTimeDegradationMilliseconds":250,"responseTimeDegradationPercent":90,"slowestResponseTimeDegradationMilliseconds":500,"slowestResponseTimeDegradationPercent":200,"loadThreshold":"ONE_REQUEST_PER_MINUTE"}},"trafficDrop":{"enabled":true,"trafficDropPercent":95},"trafficSpike":{"enabled":false},"failureRateIncrease":{"detectionMode":"DETECT_USING_FIXED_THRESHOLDS","thresholds":{"threshold":10,"sensitivity":"LOW"}}}
 */
export interface ApplicationAnomalyDetectionConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** Configuration of response time degradation detection. */
  responseTimeDegradation: ResponseTimeDegradationDetectionConfig;

  /** The configuration of traffic drops detection. */
  trafficDrop: TrafficDropDetectionConfig;

  /** The configuration of traffic spikes detection. */
  trafficSpike: TrafficSpikeDetectionConfig;

  /** Configuration of failure rate increase detection. */
  failureRateIncrease: FailureRateIncreaseDetectionConfig;
}

/**
* Parameters of failure rate increase auto-detection. Required if **detectionMode** is `DETECT_AUTOMATICALLY`. Not applicable otherwise. 

The absolute and relative thresholds **both** must exceed to trigger an alert. 

Example: If the expected error rate is 1.5%, and you set an absolute increase of 1%, and a relative increase of 50%, the thresholds will be: 
Absolute: 1.5% + **1%** = 2.5% 
Relative: 1.5% + 1.5% * **50%** = 2.25%
*/
export interface FailureRateIncreaseAutodetectionConfig {
  /**
   * Absolute increase of failing service calls to trigger an alert, %.
   * @format int32
   * @min 0
   * @max 1000
   */
  failingServiceCallPercentageIncreaseAbsolute: number;

  /**
   * Relative increase of failing service calls to trigger an alert, %.
   * @format int32
   * @min 0
   * @max 1000
   */
  failingServiceCallPercentageIncreaseRelative: number;
}

/**
 * Configuration of failure rate increase detection.
 */
export interface FailureRateIncreaseDetectionConfig {
  /** How to detect failure rate increase: automatically, or based on fixed thresholds, or do not detect. */
  detectionMode: "DETECT_AUTOMATICALLY" | "DETECT_USING_FIXED_THRESHOLDS" | "DONT_DETECT";

  /**
   * Parameters of failure rate increase auto-detection. Required if **detectionMode** is `DETECT_AUTOMATICALLY`. Not applicable otherwise.
   *
   * The absolute and relative thresholds **both** must exceed to trigger an alert.
   * Example: If the expected error rate is 1.5%, and you set an absolute increase of 1%, and a relative increase of 50%, the thresholds will be:
   * Absolute: 1.5% + **1%** = 2.5%
   * Relative: 1.5% + 1.5% * **50%** = 2.25%
   */
  automaticDetection?: FailureRateIncreaseAutodetectionConfig;

  /**
   * Fixed thresholds for failure rate increase detection.
   *
   *  Required if **detectionMode** is `DETECT_USING_FIXED_THRESHOLDS`. Not applicable otherwise.
   */
  thresholds?: FailureRateIncreaseThresholdConfig;
}

/**
* Fixed thresholds for failure rate increase detection. 

 Required if **detectionMode** is `DETECT_USING_FIXED_THRESHOLDS`. Not applicable otherwise.
*/
export interface FailureRateIncreaseThresholdConfig {
  /**
   * Failure rate during any 5-minute period to trigger an alert, %.
   * @format int32
   * @min 0
   * @max 1000
   */
  threshold: number;

  /**
   * Sensitivity of the threshold.
   *
   * With `low` sensitivity, high statistical confidence is used. Brief violations (for example, due to a surge in load) won't trigger alerts.
   * With `high` sensitivity, no statistical confidence is used. Each violation triggers alert.
   */
  sensitivity: "HIGH" | "LOW" | "MEDIUM";
}

/**
* Parameters of the response time degradation auto-detection. Required if the **detectionMode** is `DETECT_AUTOMATICALLY`. Not applicable otherwise. 

Violation of **any** criterion triggers an alert.
*/
export interface ResponseTimeDegradationAutodetectionConfig {
  /**
   * Alert if the response time degrades beyond *X* milliseconds.
   * @format int32
   * @min 0
   * @max 100000
   */
  responseTimeDegradationMilliseconds: number;

  /**
   * Alert if the response time degrades beyond *X* %.
   * @format int32
   * @min 0
   * @max 1000
   */
  responseTimeDegradationPercent: number;

  /**
   * Alert if the response time of the slowest 10% degrades beyond *X* milliseconds.
   * @format int32
   * @min 0
   * @max 100000
   */
  slowestResponseTimeDegradationMilliseconds: number;

  /**
   * Alert if the response time of the slowest 10% degrades beyond *X* %.
   * @format int32
   * @min 0
   * @max 1000
   */
  slowestResponseTimeDegradationPercent: number;

  /**
   * Minimal service load to detect response time degradation.
   *
   *  Response time degradation of services with smaller load won't trigger alerts.
   */
  loadThreshold:
    | "FIFTEEN_REQUESTS_PER_MINUTE"
    | "FIVE_REQUESTS_PER_MINUTE"
    | "ONE_REQUEST_PER_MINUTE"
    | "TEN_REQUESTS_PER_MINUTE";
}

/**
 * Configuration of response time degradation detection.
 */
export interface ResponseTimeDegradationDetectionConfig {
  /** How to detect response time degradation: automatically, or based on fixed thresholds, or do not detect. */
  detectionMode: "DETECT_AUTOMATICALLY" | "DETECT_USING_FIXED_THRESHOLDS" | "DONT_DETECT";

  /**
   * Parameters of the response time degradation auto-detection. Required if the **detectionMode** is `DETECT_AUTOMATICALLY`. Not applicable otherwise.
   *
   * Violation of **any** criterion triggers an alert.
   */
  automaticDetection?: ResponseTimeDegradationAutodetectionConfig;

  /**
   * Fixed thresholds for response time degradation detection.
   *
   *  Required if **detectionMode** is `DETECT_USING_FIXED_THRESHOLDS`. Not applicable otherwise.
   */
  thresholds?: ResponseTimeDegradationThresholdConfig;
}

/**
* Fixed thresholds for response time degradation detection. 

 Required if **detectionMode** is `DETECT_USING_FIXED_THRESHOLDS`. Not applicable otherwise.
*/
export interface ResponseTimeDegradationThresholdConfig {
  /**
   * Response time during any 5-minute period to trigger an alert, in milliseconds.
   * @format int32
   * @min 0
   * @max 100000
   */
  responseTimeThresholdMilliseconds: number;

  /**
   * Response time of the 10% slowest during any 5-minute period to trigger an alert, in milliseconds.
   * @format int32
   * @min 0
   * @max 100000
   */
  slowestResponseTimeThresholdMilliseconds: number;

  /**
   * Minimal service load to detect response time degradation.
   *
   *  Response time degradation of services with smaller load won't trigger alerts.
   */
  loadThreshold:
    | "FIFTEEN_REQUESTS_PER_MINUTE"
    | "FIVE_REQUESTS_PER_MINUTE"
    | "ONE_REQUEST_PER_MINUTE"
    | "TEN_REQUESTS_PER_MINUTE";

  /**
   * Sensitivity of the threshold.
   *
   * With `low` sensitivity, high statistical confidence is used. Brief violations (for example, due to a surge in load) won't trigger alerts.
   * With `high` sensitivity, no statistical confidence is used. Each violation triggers an alert.
   */
  sensitivity: "HIGH" | "LOW" | "MEDIUM";
}

/**
 * The configuration of traffic drops detection.
 */
export interface TrafficDropDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Alert if the observed traffic is less than *X* % of the expected value.
   * @format int32
   * @min 0
   * @max 100
   */
  trafficDropPercent?: number;
}

/**
 * The configuration of traffic spikes detection.
 */
export interface TrafficSpikeDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Alert if the observed traffic is more than *X* % of the expected value.
   * @format int32
   * @min 100
   * @max 1000
   */
  trafficSpikePercent?: number;
}

/**
 * The configuration of anomaly detection for AWS.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"rdsHighCpuDetection":{"enabled":true,"customThresholds":{"cpuUsagePercentage":99}},"rdsHighWriteReadLatencyDetection":{"enabled":true,"customThresholds":{"writeReadLatency":800}},"rdsLowStorageDetection":{"enabled":true,"customThresholds":{"freeStoragePercentage":7}},"rdsHighMemoryDetection":{"enabled":true,"customThresholds":{"freeMemory":96.99,"swapUsage":5.5}},"elbHighConnectionErrorsDetection":{"enabled":true,"customThresholds":{"connectionErrorsPerMinute":4}},"rdsRestartsSequenceDetection":{"enabled":true,"customThresholds":{"restartsPerMinute":3}},"lambdaHighErrorRateDetection":{"enabled":true,"customThresholds":{"failedInvocationsRate":2}},"ec2CandidateCpuSaturationDetection":{"enabled":true,"customThresholds":{"cpuUsagePercentage":98}}}
 */
export interface AwsAnomalyDetectionConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The configuration of the high CPU utilization on RDS detection. */
  rdsHighCpuDetection: RdsHighCpuDetectionConfig;

  /** The configuration of the high RDS write/read latency detection. */
  rdsHighWriteReadLatencyDetection: RdsHighWriteReadLatencyDetectionConfig;

  /** The configuration of the low free storage space on RDS detection. */
  rdsLowStorageDetection: RdsLowStorageDetectionConfig;

  /** The configuration of RDS running out of memory detection. */
  rdsHighMemoryDetection: RdsHighMemoryDetectionConfig;

  /** The configuration of the high number of backend connection errors on ELB detection. */
  elbHighConnectionErrorsDetection: ElbHighConnectionErrorsDetectionConfig;

  /** The configuration of the restarts sequence on RDS detection. */
  rdsRestartsSequenceDetection: RdsRestartsSequenceDetectionConfig;

  /** The configuration of the AWS Lambda high error rate detection. */
  lambdaHighErrorRateDetection: LambdaHighErrorRateDetectionConfig;

  /** The configuration of the high CPU saturation on EC2 without installed agent (monitoring candidate). If null, then this configuration won't be changed. */
  ec2CandidateCpuSaturationDetection?: Ec2CandidateCpuSaturationDetectionConfig;
}

/**
 * The configuration of the high CPU saturation on EC2 without installed agent (monitoring candidate). If null, then this configuration won't be changed.
 */
export interface Ec2CandidateCpuSaturationDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for high CPU saturation on EC2 monitoring candidate. If not set, automatic mode is used. */
  customThresholds?: Ec2CandidateCpuSaturationThresholds;
}

/**
 * Custom thresholds for high CPU saturation on EC2 monitoring candidate. If not set, automatic mode is used.
 */
export interface Ec2CandidateCpuSaturationThresholds {
  /**
   * Alert if CPU usage is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  cpuUsagePercentage: number;
}

/**
 * The configuration of the high number of backend connection errors on ELB detection.
 */
export interface ElbHighConnectionErrorsDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for high number of backend connection errors on ELB. If not set, automatic mode is used. */
  customThresholds?: ElbHighConnectionErrorsThresholds;
}

/**
 * Custom thresholds for high number of backend connection errors on ELB. If not set, automatic mode is used.
 */
export interface ElbHighConnectionErrorsThresholds {
  /**
   * Alert if number of backend connection errors is higher than *X* per minute in 3 out of 5 samples.
   * @format int32
   * @min 1
   */
  connectionErrorsPerMinute: number;
}

/**
 * The configuration of the AWS Lambda high error rate detection.
 */
export interface LambdaHighErrorRateDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for AWS Lambda high error rate. If not set, automatic mode is used. */
  customThresholds?: LambdaHighErrorRateThresholds;
}

/**
 * Custom thresholds for AWS Lambda high error rate. If not set, automatic mode is used.
 */
export interface LambdaHighErrorRateThresholds {
  /**
   * Alert if failed invocations rate is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 0
   * @max 100
   */
  failedInvocationsRate: number;
}

/**
 * The configuration of the high CPU utilization on RDS detection.
 */
export interface RdsHighCpuDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for high CPU utilization on RDS. If not set, automatic mode is used. */
  customThresholds?: RdsHighCpuThresholds;
}

/**
 * Custom thresholds for high CPU utilization on RDS. If not set, automatic mode is used.
 */
export interface RdsHighCpuThresholds {
  /**
   * Alert if CPU usage is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  cpuUsagePercentage: number;
}

/**
 * Custom thresholds for high RDS write/read latency. If not set, automatic mode is used
 */
export interface RdsHighLatencyThresholds {
  /**
   * Alert if read/write latency is higher than *X* milliseconds in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  writeReadLatency: number;
}

/**
 * The configuration of RDS running out of memory detection.
 */
export interface RdsHighMemoryDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for RDS running out of memory. If not set, automatic mode is used.
   *
   *  **All** conditions must be fulfilled to trigger an alert.
   */
  customThresholds?: RdsHighMemoryThresholds;
}

/**
* Custom thresholds for RDS running out of memory. If not set, automatic mode is used. 

 **All** conditions must be fulfilled to trigger an alert.
*/
export interface RdsHighMemoryThresholds {
  /**
   * Freeable memory is lower than *X* Megabytes in 3 out of 5 samples.
   * @min 0.01
   * @max 1000
   */
  freeMemory: number;

  /**
   * Swap usage is higher than *X* Gigabytes in 3 out of 5 samples.
   * @min 0.01
   * @max 1000
   */
  swapUsage: number;
}

/**
 * The configuration of the high RDS write/read latency detection.
 */
export interface RdsHighWriteReadLatencyDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for high RDS write/read latency. If not set, automatic mode is used */
  customThresholds?: RdsHighLatencyThresholds;
}

/**
 * The configuration of the low free storage space on RDS detection.
 */
export interface RdsLowStorageDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for low free storage space on RDS. If not set, automatic mode is used. */
  customThresholds?: RdsLowStorageThresholds;
}

/**
 * Custom thresholds for low free storage space on RDS. If not set, automatic mode is used.
 */
export interface RdsLowStorageThresholds {
  /**
   * Alert if free storage space divided by allocated storage is lower than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  freeStoragePercentage: number;
}

/**
 * The configuration of the restarts sequence on RDS detection.
 */
export interface RdsRestartsSequenceDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for restarts sequence on RDS. If not set, automatic mode is used. */
  customThresholds?: RdsRestartsThresholds;
}

/**
 * Custom thresholds for restarts sequence on RDS. If not set, automatic mode is used.
 */
export interface RdsRestartsThresholds {
  /**
   * Alert if number of restarts is *X* per minute or higher in 3 out of 20 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  restartsPerMinute: number;
}

/**
 * The configuration of the anomaly detection for database services.
 * @example {"responseTimeDegradation":{"detectionMode":"DETECT_AUTOMATICALLY","automaticDetection":{"responseTimeDegradationMilliseconds":250,"responseTimeDegradationPercent":90,"slowestResponseTimeDegradationMilliseconds":500,"slowestResponseTimeDegradationPercent":200,"loadThreshold":"ONE_REQUEST_PER_MINUTE"}},"loadDrop":{"enabled":true,"loadDropPercent":40,"minAbnormalStateDurationInMinutes":5},"loadSpike":{"enabled":false},"failureRateIncrease":{"detectionMode":"DETECT_USING_FIXED_THRESHOLDS","thresholds":{"threshold":10,"sensitivity":"LOW"}},"databaseConnectionFailureCount":{"enabled":"true","connectionFailsCount":5,"timePeriodMinutes":5}}
 */
export interface DatabaseAnomalyDetectionConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** Configuration of response time degradation detection. */
  responseTimeDegradation: ResponseTimeDegradationDetectionConfig;

  /** The configuration of load drops detection. */
  loadDrop?: LoadDropDetectionConfig;

  /** The configuration of load spikes detection. */
  loadSpike?: LoadSpikeDetectionConfig;

  /** Configuration of failure rate increase detection. */
  failureRateIncrease: FailureRateIncreaseDetectionConfig;

  /**
   * Parameters of the failed database connections detection.
   *
   * The alert is triggered when failed connections number exceeds **connectionFailsCount** during any **timePeriodMinutes** minutes period.
   */
  databaseConnectionFailureCount: DatabaseConnectionFailureDetectionConfig;
}

/**
* Parameters of the failed database connections detection. 

The alert is triggered when failed connections number exceeds **connectionFailsCount** during any **timePeriodMinutes** minutes period.
*/
export interface DatabaseConnectionFailureDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Number of failed database connections during any **timePeriodMinutes** minutes period to trigger an alert.
   * @format int32
   * @min 1
   * @max 9999999
   */
  connectionFailsCount?: number;

  /**
   * The *X* minutes time period during which the **connectionFailsCount** is evaluated.
   * @format int32
   * @min 1
   * @max 15
   */
  timePeriodMinutes?: number;
}

/**
 * The configuration of load drops detection.
 */
export interface LoadDropDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Alert if the observed load is less than *X* % of the expected value.
   * @format int32
   * @min 0
   * @max 100
   */
  loadDropPercent?: number;

  /**
   * Alert if the service stays in abnormal state for at least *X* minutes.
   * @format int32
   * @min 1
   * @max 60
   */
  minAbnormalStateDurationInMinutes?: number;
}

/**
 * The configuration of load spikes detection.
 */
export interface LoadSpikeDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Alert if the observed load is more than *X* % of the expected value.
   * @format int32
   * @min 100
   * @max 1000
   */
  loadSpikePercent?: number;

  /**
   * Alert if the service stays in abnormal state for at least *X* minutes.
   * @format int32
   * @min 1
   * @max 60
   */
  minAbnormalStateDurationInMinutes?: number;
}

export interface DiskEventAnomalyDetectionConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The ID of the disk event rule. */
  id?: string;

  /** The name of the disk event rule. */
  name: string;

  /** Disk event rule enabled/disabled. */
  enabled: boolean;

  /** The metric to monitor. */
  metric: "LOW_DISK_SPACE" | "LOW_INODES" | "READ_TIME_EXCEEDING" | "WRITE_TIME_EXCEEDING";

  /**
   * The threshold to trigger disk event.
   *
   *  * A percentage for `LowDiskSpace` or `LowInodes` metrics.
   *  * In milliseconds for `ReadTimeExceeding` or `WriteTimeExceeding` metrics.
   * @format double
   * @min 0
   * @max 1000
   */
  threshold: number;

  /**
   * The number of samples to evaluate.
   * @format int32
   * @min 3
   * @max 60
   * @example 10
   */
  samples: number;

  /**
   * The number of samples that must violate the threshold to trigger an event. Must not exceed the number of evaluated samples.
   * @format int32
   * @min 1
   * @example 8
   */
  violatingSamples: number;

  /** Narrows the rule usage down to disks, matching the specified criteria. */
  diskNameFilter?: DiskNameFilter;

  /** Narrows the rule usage down to the hosts matching the specified tags. */
  tagFilters?: TagFilter[];

  /** Narrows the rule usage down to disks that run on hosts that themselves run on the specified host group. */
  hostGroupId?: string;
}

/**
 * Narrows the rule usage down to disks, matching the specified criteria.
 */
export interface DiskNameFilter {
  /** Comparison operator. */
  operator: "CONTAINS" | "DOES_NOT_CONTAIN" | "DOES_NOT_EQUAL" | "DOES_NOT_START_WITH" | "EQUALS" | "STARTS_WITH";

  /** Value to compare to. */
  value: string;
}

/**
 * Configuration of lost connection detection.
 */
export interface ConnectionLostDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Alert (`true`) on graceful host shutdowns. */
  enabledOnGracefulShutdowns: boolean;
}

/**
 * Configuration of low disk inodes number detection.
 */
export interface DiskLowInodesDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for low disk inodes number. If not set, automatic mode is used. */
  customThresholds?: DiskLowInodesThresholds;
}

/**
 * Custom thresholds for low disk inodes number. If not set, automatic mode is used.
 */
export interface DiskLowInodesThresholds {
  /**
   * Alert if percentage of available inodes is lower than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  freeInodesPercentage: number;
}

/**
 * Configuration of low disk space detection.
 */
export interface DiskLowSpaceDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for low disk space. If not set, automatic mode is used. */
  customThresholds?: DiskLowSpaceThresholds;
}

/**
 * Custom thresholds for low disk space. If not set, automatic mode is used.
 */
export interface DiskLowSpaceThresholds {
  /**
   * Alert if free disk space is lower than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 0
   * @max 100
   */
  freeSpacePercentage: number;
}

/**
 * Custom thresholds for slow running disks. If not set, the automatic mode is used.
 */
export interface DiskSlowWriteAndReadsThresholds {
  /**
   * Alert if disk read/write time is higher than *X* milliseconds in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  writeAndReadTime: number;
}

/**
 * Configuration of slow running disks detection.
 */
export interface DiskSlowWritesAndReadsDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for slow running disks. If not set, the automatic mode is used. */
  customThresholds?: DiskSlowWriteAndReadsThresholds;
}

/**
 * Configuration of high CPU saturation detection
 */
export interface HighCpuSaturationDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for high CPU saturation. If not set then the automatic mode is used. */
  customThresholds?: HighCpuSaturationThresholds;
}

/**
 * Custom thresholds for high CPU saturation. If not set then the automatic mode is used.
 */
export interface HighCpuSaturationThresholds {
  /**
   * Alert if CPU usage is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  cpuSaturation: number;
}

/**
 * Configuration of high Garbage Collector activity detection.
 */
export interface HighGcActivityDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for high GC activity. If not set, automatic mode is used.
   *
   *  Meeting **any** of these conditions triggers an alert.
   */
  customThresholds?: HighGcActivityThresholds;
}

/**
* Custom thresholds for high GC activity. If not set, automatic mode is used. 

 Meeting **any** of these conditions triggers an alert.
*/
export interface HighGcActivityThresholds {
  /**
   * GC time is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  gcTimePercentage: number;

  /**
   * GC suspension is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  gcSuspensionPercentage: number;
}

/**
 * Configuration of high memory usage detection.
 */
export interface HighMemoryDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for high memory usage. If not set then the automatic mode is used.
   *
   *  **Both** conditions must be met to trigger an alert.
   */
  customThresholds?: HighMemoryThresholds;
}

/**
* Custom thresholds for high memory usage. If not set then the automatic mode is used. 

 **Both** conditions must be met to trigger an alert.
*/
export interface HighMemoryThresholds {
  /**
   * Memory page fault rate is higher than *X* faults per second on Windows.
   * @format int32
   * @min 1
   * @max 10000
   */
  pageFaultsPerSecondWindows: number;

  /**
   * Memory usage is higher than *X*% on Windows.
   * @format int32
   * @min 1
   * @max 100
   */
  usedMemoryPercentageWindows: number;

  /**
   * Memory page fault rate is higher than *X* faults per second on Linux.
   * @format int32
   * @min 1
   * @max 10000
   */
  pageFaultsPerSecondNonWindows: number;

  /**
   * Memory usage is higher than *X*% on Linux.
   * @format int32
   * @min 1
   * @max 100
   */
  usedMemoryPercentageNonWindows: number;
}

/**
 * Configuration of high network utilization detection.
 */
export interface HighNetworkDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for high network utilization. If not set, automatic mode is used. */
  customThresholds?: HighNetworkThresholds;
}

/**
 * Custom thresholds for high network utilization. If not set, automatic mode is used.
 */
export interface HighNetworkThresholds {
  /**
   * Alert if sent/received traffic utilization is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  utilizationPercentage: number;
}

/**
 * Configuration of anomaly detection for hosts.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"connectionLostDetection":{"enabled":true,"enabledOnGracefulShutdowns":true},"highCpuSaturationDetection":{"enabled":true,"customThresholds":{"cpuSaturation":90}},"highMemoryDetection":{"enabled":true,"customThresholds":{"pageFaultsPerSecondWindows":50,"usedMemoryPercentageWindows":85,"pageFaultsPerSecondNonWindows":10,"usedMemoryPercentageNonWindows":85}},"highGcActivityDetection":{"enabled":true,"customThresholds":{"gcTimePercentage":35,"gcSuspensionPercentage":20}},"outOfMemoryDetection":{"enabled":true,"customThresholds":{"outOfMemoryExceptionsNumber":2}},"outOfThreadsDetection":{"enabled":true,"customThresholds":{"outOfThreadsExceptionsNumber":2}},"networkDroppedPacketsDetection":{"enabled":true,"customThresholds":{"droppedPacketsPercentage":8,"totalPacketsRate":8}},"networkErrorsDetection":{"enabled":true,"customThresholds":{"errorsPercentage":9,"totalPacketsRate":9}},"highNetworkDetection":{"enabled":true,"customThresholds":{"utilizationPercentage":88}},"networkTcpProblemsDetection":{"enabled":true,"customThresholds":{"newConnectionFailuresPercentage":5,"failedConnectionsNumberPerMinute":5}},"networkHighRetransmissionDetection":{"enabled":true,"customThresholds":{"retransmissionRatePercentage":15,"retransmittedPacketsNumberPerMinute":15}},"diskLowSpaceDetection":{"enabled":true,"customThresholds":{"freeSpacePercentage":10}},"diskSlowWritesAndReadsDetection":{"enabled":true,"customThresholds":{"writeAndReadTime":300}},"diskLowInodesDetection":{"enabled":true,"customThresholds":{"freeInodesPercentage":10}}}
 */
export interface HostsAnomalyDetectionConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** Configuration of lost connection detection. */
  connectionLostDetection: ConnectionLostDetectionConfig;

  /** Configuration of high CPU saturation detection */
  highCpuSaturationDetection: HighCpuSaturationDetectionConfig;

  /** Configuration of high memory usage detection. */
  highMemoryDetection: HighMemoryDetectionConfig;

  /** Configuration of high Garbage Collector activity detection. */
  highGcActivityDetection: HighGcActivityDetectionConfig;

  /** Configuration of Java out of memory problems detection. */
  outOfMemoryDetection: OutOfMemoryDetectionConfig;

  /** Configuration of Java out of threads problems detection. */
  outOfThreadsDetection: OutOfThreadsDetectionConfig;

  /** Configuration of high number of dropped packets detection. */
  networkDroppedPacketsDetection: NetworkDroppedPacketsDetectionConfig;

  /** Configuration of high number of network errors detection. */
  networkErrorsDetection: NetworkErrorsDetectionConfig;

  /** Configuration of high network utilization detection. */
  highNetworkDetection: HighNetworkDetectionConfig;

  /** Configuration of TCP connectivity problems detection. */
  networkTcpProblemsDetection: NetworkTcpProblemsDetectionConfig;

  /** Configuration of high retransmission rate detection. */
  networkHighRetransmissionDetection: NetworkHighRetransmissionDetectionConfig;

  /** Configuration of low disk space detection. */
  diskLowSpaceDetection: DiskLowSpaceDetectionConfig;

  /** Configuration of slow running disks detection. */
  diskSlowWritesAndReadsDetection: DiskSlowWritesAndReadsDetectionConfig;

  /** Configuration of low disk inodes number detection. */
  diskLowInodesDetection: DiskLowInodesDetectionConfig;
}

/**
 * Configuration of high number of dropped packets detection.
 */
export interface NetworkDroppedPacketsDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for dropped packets. If not set, automatic mode is used.
   *
   *  **All** of these conditions must be met to trigger an alert.
   */
  customThresholds?: NetworkDroppedPacketsThresholds;
}

/**
* Custom thresholds for dropped packets. If not set, automatic mode is used. 

 **All** of these conditions must be met to trigger an alert.
*/
export interface NetworkDroppedPacketsThresholds {
  /**
   * Receive/transmit dropped packet percentage is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  droppedPacketsPercentage: number;

  /**
   * Total receive/transmit packets rate is higher than *X* packets per second in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  totalPacketsRate: number;
}

/**
 * Configuration of high number of network errors detection.
 */
export interface NetworkErrorsDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for network errors. If not set, automatic mode is used.
   *
   *  **All** of these conditions must be met to trigger an alert.
   */
  customThresholds?: NetworkErrorsThresholds;
}

/**
* Custom thresholds for network errors. If not set, automatic mode is used. 

 **All** of these conditions must be met to trigger an alert.
*/
export interface NetworkErrorsThresholds {
  /**
   * Receive/transmit error packet percentage is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  errorsPercentage: number;

  /**
   * Total receive/transmit packets rate is higher than *X* packets per second in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  totalPacketsRate: number;
}

/**
 * Configuration of high retransmission rate detection.
 */
export interface NetworkHighRetransmissionDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for high retransmission rate. If not set, automatic mode is used.
   *
   *  **All** of these conditions must be met to trigger an alert.
   */
  customThresholds?: NetworkHighRetransmissionThresholds;
}

/**
* Custom thresholds for high retransmission rate. If not set, automatic mode is used. 

 **All** of these conditions must be met to trigger an alert.
*/
export interface NetworkHighRetransmissionThresholds {
  /**
   * Retransmission rate is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  retransmissionRatePercentage: number;

  /**
   * Number of retransmitted packets is higher than *X* packets per minute in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  retransmittedPacketsNumberPerMinute: number;
}

/**
 * Configuration of TCP connectivity problems detection.
 */
export interface NetworkTcpProblemsDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for TCP connection problems. If not set, automatic mode is used.
   *
   *  **All** of these conditions must be met to trigger an alert.
   */
  customThresholds?: NetworkTcpProblemsThresholds;
}

/**
* Custom thresholds for TCP connection problems. If not set, automatic mode is used. 

 **All** of these conditions must be met to trigger an alert.
*/
export interface NetworkTcpProblemsThresholds {
  /**
   * Percentage of new connection failures is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  newConnectionFailuresPercentage: number;

  /**
   * Number of failed connections is higher than *X* connections per minute in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  failedConnectionsNumberPerMinute: number;
}

/**
 * Configuration of Java out of memory problems detection.
 */
export interface OutOfMemoryDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for Java out of memory. If not set, automatic mode is used. */
  customThresholds?: OutOfMemoryThresholds;
}

/**
 * Custom thresholds for Java out of memory. If not set, automatic mode is used.
 */
export interface OutOfMemoryThresholds {
  /**
   * Alert if the number of Java out of memory exceptions is *X* per minute or higher.
   * @format int32
   * @min 1
   * @max 100
   */
  outOfMemoryExceptionsNumber: number;
}

/**
 * Configuration of Java out of threads problems detection.
 */
export interface OutOfThreadsDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for Java out of threads detection. If not set, automatic mode is used. */
  customThresholds?: OutOfThreadsThresholds;
}

/**
 * Custom thresholds for Java out of threads detection. If not set, automatic mode is used.
 */
export interface OutOfThreadsThresholds {
  /**
   * Alert if the number of Java out of threads exceptions is *X* per minute or higher.
   * @format int32
   * @min 1
   * @max 100
   */
  outOfThreadsExceptionsNumber: number;
}

/**
 * A scope filter for the related custom device group name.
 */
export type CustomDeviceGroupNameAlertingScope = MetricEventAlertingScope & {
  nameFilter?: MetricEventTextFilterMetricEventTextFilterOperatorDto;
};

/**
 * A scope filter for a monitored entity identifier.
 */
export type EntityIdAlertingScope = MetricEventAlertingScope & { entityId?: string };

/**
 * A scope filter for the related host group name.
 */
export type HostGroupNameAlertingScope = MetricEventAlertingScope & {
  nameFilter?: MetricEventTextFilterMetricEventTextFilterOperatorDto;
};

/**
 * A scope filter for the related host name.
 */
export type HostNameAlertingScope = MetricEventAlertingScope & {
  nameFilter?: MetricEventTextFilterMetricEventTextFilterOperatorDto;
};

/**
 * A scope filter for a management zone identifier.
 */
export type ManagementZoneAlertingScope = MetricEventAlertingScope & { mzId?: string };

/**
 * The configuration of the metric event.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"metricId":"com.dynatrace.builtin:host.disk.bytesread","name":"My metric event","description":"This is the description for my metric event.","aggregationType":"AVG","severity":"CUSTOM_ALERT","alertingScope":[{"filterType":"ENTITY_ID","entityId":"HOST-000000000001E240"},{"filterType":"TAG","tagFilter":{"context":"CONTEXTLESS","key":"someKey","value":"someValue"}}],"metricDimensions":[{"filterType":"ENTITY","key":"dt.entity.disk","nameFilter":{"value":"diskName","operator":"EQUALS"}}],"enabled":true,"disabledReason":"NONE","warningReason":"NONE","monitoringStrategy":{"type":"STATIC_THRESHOLD","alertCondition":"ABOVE","samples":5,"violatingSamples":3,"dealertingSamples":5,"threshold":80,"unit":"KILO_BYTE_PER_SECOND"}}
 */
export interface MetricEvent {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the metric event.
   * @pattern ^[a-zA-Z0-9\.\-_:%]+$
   */
  id?: string;

  /** The ID of the metric evaluated by the metric event. */
  metricId?: string;

  /** The metric selector that should be executed. */
  metricSelector?: string;

  /** The name of the metric event displayed in the UI. */
  name: string;

  /** The description of the metric event. */
  description: string;

  /**
   * How the metric data points are aggregated for the evaluation.
   *
   *  The timeseries must support this aggregation.
   */
  aggregationType?: "AVG" | "COUNT" | "MAX" | "MEDIAN" | "MIN" | "P90" | "SUM" | "VALUE";

  /**
   * The type of the event to trigger on the threshold violation.
   *
   * The `CUSTOM_ALERT` type is not correlated with other alerts.
   * The `INFO` type does not open a problem.
   */
  severity?: "AVAILABILITY" | "CUSTOM_ALERT" | "ERROR" | "INFO" | "PERFORMANCE" | "RESOURCE_CONTENTION";

  /** The metric event is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * The reason of automatic disabling.
   *
   * The `NONE` means config was not disabled automatically.
   */
  disabledReason?: "METRIC_DEFINITION_INCONSISTENCY" | "NONE" | "TOO_MANY_DIMS" | "TOPX_FORCIBLY_DEACTIVATED";

  /**
   * The reason of a warning set on the config.
   *
   * The `NONE` means config has no warnings.
   */
  warningReason?: "NONE" | "TOO_MANY_DIMS";

  /** Defines the scope of the metric event. Only one filter is allowed per filter type, except for tags, where up to 3 are allowed. The filters are combined by conjunction. */
  alertingScope?: MetricEventAlertingScope[];

  /** Defines the dimensions of the metric to alert on. The filters are combined by conjunction. */
  metricDimensions?: MetricEventDimensions[];

  /**
   * A monitoring strategy for a metric event config.
   *
   * This is the base version of the monitoring strategy, depending on the type,
   * the actual JSON may contain additional fields.
   */
  monitoringStrategy: MetricEventMonitoringStrategy;

  /** Defines which dimension key should be used for the **alertingScope**. */
  primaryDimensionKey?: string;

  /**
   * Defines the query offset to adapt the evaluation timeframe for known metric latency.
   * @format int64
   * @min 1
   * @max 60
   */
  queryOffset?: number;
}

/**
* A single filter for the alerting scope.

The actual set of fields depends on type of the filter. Find the list of actual objects in the description of the **filterType** field or see [Metric events anomaly detection API - JSON models](https://dt-url.net/ql63sap).
*/
export interface MetricEventAlertingScope {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `ENTITY_ID` -> EntityIdAlertingScope
   * * `MANAGEMENT_ZONE` -> ManagementZoneAlertingScope
   * * `TAG` -> TagFilterAlertingScope
   * * `NAME` -> NameAlertingScope
   * * `CUSTOM_DEVICE_GROUP_NAME` -> CustomDeviceGroupNameAlertingScope
   * * `HOST_GROUP_NAME` -> HostGroupNameAlertingScope
   * * `HOST_NAME` -> HostNameAlertingScope
   * * `PROCESS_GROUP_ID` -> ProcessGroupIdAlertingScope
   * * `PROCESS_GROUP_NAME` -> ProcessGroupNameAlertingScope
   */
  filterType:
    | "CUSTOM_DEVICE_GROUP_NAME"
    | "ENTITY_ID"
    | "HOST_GROUP_NAME"
    | "HOST_NAME"
    | "MANAGEMENT_ZONE"
    | "NAME"
    | "PROCESS_GROUP_ID"
    | "PROCESS_GROUP_NAME"
    | "TAG";
}

/**
 * An auto-adaptive baseline strategy to detect anomalies within metrics that show a regular change over time, as the baseline is also updated automatically. An example is to detect an anomaly in the number of received network packets or within the number of user actions over time.
 */
export type MetricEventAutoAdaptiveBaselineMonitoringStrategy = MetricEventMonitoringStrategy & {
  samples?: number;
  violatingSamples?: number;
  dealertingSamples?: number;
  alertCondition?: "ABOVE" | "BELOW";
  alertingOnMissingData?: boolean;
  numberOfSignalFluctuations?: number;
};

/**
* A single filter for the metrics dimensions.

The actual set of fields depends on type of the filter. Find the list of actual objects in the description of the **filterType** field or see [Metric events anomaly detection API - JSON models](https://dt-url.net/ql63sap).
*/
export interface MetricEventDimensions {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `ENTITY` -> MetricEventEntityDimensions
   * * `STRING` -> MetricEventStringDimensions
   */
  filterType: "ENTITY" | "STRING";

  /** The dimensions key on the metric. */
  key?: string;
}

/**
 * A filter for the metrics entity dimensions.
 */
export type MetricEventEntityDimensions = MetricEventDimensions & {
  nameFilter?: MetricEventTextFilterMetricEventDimensionsFilterOperatorDto;
};

/**
* A monitoring strategy for a metric event config.

This is the base version of the monitoring strategy, depending on the type, 
the actual JSON may contain additional fields.
*/
export interface MetricEventMonitoringStrategy {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `STATIC_THRESHOLD` -> MetricEventStaticThresholdMonitoringStrategy
   * * `AUTO_ADAPTIVE_BASELINE` -> MetricEventAutoAdaptiveBaselineMonitoringStrategy
   */
  type: "AUTO_ADAPTIVE_BASELINE" | "STATIC_THRESHOLD";
}

/**
 * A static threshold monitoring strategy to alert on hard limits within a given metric. An example is the violation of a critical memory limit.
 */
export type MetricEventStaticThresholdMonitoringStrategy = MetricEventMonitoringStrategy & {
  samples?: number;
  violatingSamples?: number;
  dealertingSamples?: number;
  alertCondition?: "ABOVE" | "BELOW";
  alertingOnMissingData?: boolean;
  threshold?: number;
  unit?:
    | "BIT"
    | "BIT_PER_HOUR"
    | "BIT_PER_MINUTE"
    | "BIT_PER_SECOND"
    | "BYTE"
    | "BYTE_PER_HOUR"
    | "BYTE_PER_MINUTE"
    | "BYTE_PER_SECOND"
    | "CORES"
    | "COUNT"
    | "DAY"
    | "DECIBEL_MILLI_WATT"
    | "GIBI_BYTE"
    | "GIGA"
    | "GIGA_BYTE"
    | "HOUR"
    | "KIBI_BYTE"
    | "KIBI_BYTE_PER_HOUR"
    | "KIBI_BYTE_PER_MINUTE"
    | "KIBI_BYTE_PER_SECOND"
    | "KILO"
    | "KILO_BYTE"
    | "KILO_BYTE_PER_HOUR"
    | "KILO_BYTE_PER_MINUTE"
    | "KILO_BYTE_PER_SECOND"
    | "MEBI_BYTE"
    | "MEBI_BYTE_PER_HOUR"
    | "MEBI_BYTE_PER_MINUTE"
    | "MEBI_BYTE_PER_SECOND"
    | "MEGA"
    | "MEGA_BYTE"
    | "MEGA_BYTE_PER_HOUR"
    | "MEGA_BYTE_PER_MINUTE"
    | "MEGA_BYTE_PER_SECOND"
    | "MICRO_SECOND"
    | "MILLI_CORES"
    | "MILLI_SECOND"
    | "MILLI_SECOND_PER_MINUTE"
    | "MINUTE"
    | "MONTH"
    | "MSU"
    | "NANO_SECOND"
    | "NANO_SECOND_PER_MINUTE"
    | "NOT_APPLICABLE"
    | "PERCENT"
    | "PER_HOUR"
    | "PER_MINUTE"
    | "PER_SECOND"
    | "PIXEL"
    | "PROMILLE"
    | "RATIO"
    | "SECOND"
    | "STATE"
    | "UNSPECIFIED"
    | "WEEK"
    | "YEAR";
};

/**
 * A filter for the metrics string dimensions.
 */
export type MetricEventStringDimensions = MetricEventDimensions & {
  textFilter?: MetricEventTextFilterMetricEventDimensionsFilterOperatorDto;
};

/**
 * A filter for a string value based on the given operator.
 */
export interface MetricEventTextFilterMetricEventDimensionsFilterOperatorDto {
  /** The value to match on. */
  value: string;

  /** The operator to match on. */
  operator: "EQUALS";
}

/**
 * A filter for a string value based on the given operator.
 */
export interface MetricEventTextFilterMetricEventTextFilterOperatorDto {
  /** The value to match on. */
  value: string;

  /** The operator to match on. */
  operator: "CONTAINS_CASE_INSENSITIVE" | "CONTAINS_CASE_SENSITIVE" | "EQUALS";
}

/**
 * A scope filter for a monitored entity name.
 */
export type NameAlertingScope = MetricEventAlertingScope & {
  nameFilter?: MetricEventTextFilterMetricEventTextFilterOperatorDto;
};

/**
 * A scope filter for a process group identifier.
 */
export type ProcessGroupIdAlertingScope = MetricEventAlertingScope & { processGroupId?: string };

/**
 * A scope filter for the related process group name.
 */
export type ProcessGroupNameAlertingScope = MetricEventAlertingScope & {
  nameFilter?: MetricEventTextFilterMetricEventTextFilterOperatorDto;
};

/**
 * A scope filter for tags on entities.
 */
export type TagFilterAlertingScope = MetricEventAlertingScope & { tagFilter?: TagFilter };

/**
 * Configuration of anomaly detection for the process group.
 * @example {"availabilityMonitoring":{"method":"MINIMUM_THRESHOLD","minimumThreshold":5}}
 */
export interface AnomalyDetectionPG {
  /** Configuration of the availability monitoring for the process group. */
  availabilityMonitoring?: AvailabilityMonitoringPG;
}

/**
 * Configuration of the availability monitoring for the process group.
 * @example {"method":"MINIMUM_THRESHOLD","minimumThreshold":5}
 */
export interface AvailabilityMonitoringPG {
  /**
   * How to monitor the availability of the process group:
   *
   * * `PROCESS_IMPACT`: Alert if any process of the group becomes unavailable.
   * * `MINIMUM_THRESHOLD`: Alert if the number of active processes in the group falls below the specified threshold.
   * * `OFF`: Availability monitoring is disabled.
   */
  method: "MINIMUM_THRESHOLD" | "OFF" | "PROCESS_IMPACT";

  /**
   * Alert if the number of active processes in the group is lower than this value.
   * @format int32
   */
  minimumThreshold?: number;
}

/**
 * Dynatrace automatically detects service-related performance anomalies such as response time degradations and failure rate increases. Use these settings to configure detection sensitivity, set alert thresholds, or disable alerting for certain services.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"responseTimeDegradation":{"detectionMode":"DETECT_AUTOMATICALLY","automaticDetection":{"responseTimeDegradationMilliseconds":250,"responseTimeDegradationPercent":90,"slowestResponseTimeDegradationMilliseconds":500,"slowestResponseTimeDegradationPercent":200,"loadThreshold":"ONE_REQUEST_PER_MINUTE"}},"loadDrop":{"enabled":true,"loadDropPercent":40,"minAbnormalStateDurationInMinutes":5},"loadSpike":{"enabled":false},"failureRateIncrease":{"detectionMode":"DETECT_USING_FIXED_THRESHOLDS","thresholds":{"threshold":10,"sensitivity":"LOW"}}}
 */
export interface ServiceAnomalyDetectionConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** Configuration of response time degradation detection. */
  responseTimeDegradation: ResponseTimeDegradationDetectionConfig;

  /** The configuration of load drops detection. */
  loadDrop?: LoadDropDetectionConfig;

  /** The configuration of load spikes detection. */
  loadSpike?: LoadSpikeDetectionConfig;

  /** Configuration of failure rate increase detection. */
  failureRateIncrease: FailureRateIncreaseDetectionConfig;
}

/**
 * The configuration of the high number of dropped packets detection.
 */
export interface DroppedPacketsDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for high number of dropped packets. If not set then the automatic mode is used. */
  customThresholds?: DroppedPacketsThresholds;
}

/**
 * Custom thresholds for high number of dropped packets. If not set then the automatic mode is used.
 */
export interface DroppedPacketsThresholds {
  /**
   * Alert if receive/transmit dropped packets rate on NIC is higher than *X* packets per second in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  droppedPacketsPerSecond: number;
}

/**
 * The configuration of the CPU saturation on ESXi host detection.
 */
export interface EsxiHighCpuSaturationConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for CPU saturation detection on ESXi. If not set then the automatic mode is used.
   *
   *  **All** conditions must be fulfilled to trigger an alert.
   */
  customThresholds?: EsxiHighCpuThresholds;
}

/**
* Custom thresholds for CPU saturation detection on ESXi. If not set then the automatic mode is used. 

 **All** conditions must be fulfilled to trigger an alert.
*/
export interface EsxiHighCpuThresholds {
  /**
   * CPU usage is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  cpuUsagePercentage: number;

  /**
   * VM CPU ready is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  vmCpuReadyPercentage: number;

  /**
   * At least one peak higher than *X*% occurred in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  cpuPeakPercentage: number;
}

/**
 * The configuration of the memory saturation on ESXi host detection.
 */
export interface EsxiHighMemoryDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for memory saturation on ESXi host. If not set then the automatic mode is used. */
  customThresholds?: EsxiHighMemoryThresholds;
}

/**
 * Custom thresholds for memory saturation on ESXi host. If not set then the automatic mode is used.
 */
export interface EsxiHighMemoryThresholds {
  /**
   * Alert if ESXi host swap IN/OUT or compression/decompression rate is higher *X* kilobytes per second in 3 out of 5 samples.
   * @min 0.01
   * @max 1000000
   */
  compressionDecompressionRate: number;
}

/**
 * The configuration of the guest CPU limit reached configuration detection.
 */
export interface GuestCPULimitReachedConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for guest CPU limit detection. If not set then the automatic mode is used.
   *
   *  **All** conditions must be fulfilled to trigger an alert.
   */
  customThresholds?: GuestCPULimitThresholds;
}

/**
* Custom thresholds for guest CPU limit detection. If not set then the automatic mode is used. 

 **All** conditions must be fulfilled to trigger an alert.
*/
export interface GuestCPULimitThresholds {
  /**
   * Hypervisor CPU usage is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  hostCpuUsageMinPercentage: number;

  /**
   * VM CPU usage (VM CPU Usage Mhz / VM CPU limit in Mhz) is higher than *X*% in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  vmCpuUsageMaxPercentage: number;

  /**
   * VM CPU ready is higher than *X*% occurred in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 100
   */
  vmCpuReadyMaxPercentage: number;
}

/**
 * The configuraiton of the low datastore free space detection.
 */
export interface LowDatastoreSpaceDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for low datastore free space. If not set then the automatic mode is used. */
  customThresholds?: LowDatastoreSpaceThresholds;
}

/**
 * Custom thresholds for low datastore free space. If not set then the automatic mode is used.
 */
export interface LowDatastoreSpaceThresholds {
  /**
   * Alert if datastore free space is lower than *X*%.
   * @format int32
   * @min 1
   * @max 100
   */
  freeSpacePercentage: number;
}

/**
 * The cofiguration of the overloaded storage on physical storage device detection.
 */
export interface OverloadedStorageDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Custom thresholds for overloaded storage on physical storage device. If not set then the automatic mode is used. */
  customThresholds?: OverloadedStorageThresholds;
}

/**
 * Custom thresholds for overloaded storage on physical storage device. If not set then the automatic mode is used.
 */
export interface OverloadedStorageThresholds {
  /**
   * Alert if number of command aborts is higher than *X* in 3 out of 5 samples.
   * @format int32
   * @min 0
   * @max 100
   */
  commandAbortsNumber: number;
}

/**
 * The configuraiton of the physical storage device running slow detection.
 */
export interface SlowPhysicalStorageDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for slow running physical storage device. If not set then the automatic mode is used.
   *
   *  Fulfillment of **any** condition triggers an alert.
   */
  customThresholds?: SlowPhysicalStorageThresholds;
}

/**
* Custom thresholds for slow running physical storage device. If not set then the automatic mode is used. 

 Fulfillment of **any** condition triggers an alert.
*/
export interface SlowPhysicalStorageThresholds {
  /**
   * Read/write latency is higher than *X* milliseconds in 4 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  avgReadWriteLatency: number;

  /**
   * Peak value for read/write latency is higher than *X* milliseconds in 4 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  peakReadWriteLatency: number;
}

/**
 * Undersized storage device detection cofing
 */
export interface UndersizedStorageDetectionConfig {
  /** The detection is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * Custom thresholds for undersized storage device. If not set then the automatic mode is used.
   *
   *  Fulfillment of **any** condition triggers an alert.
   */
  customThresholds?: UndersizedStorageThresholds;
}

/**
* Custom thresholds for undersized storage device. If not set then the automatic mode is used. 

 Fulfillment of **any** condition triggers an alert.
*/
export interface UndersizedStorageThresholds {
  /**
   * Average queue command latency is higher than *X* milliseconds in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  averageQueueCommandLatency: number;

  /**
   * Peak queue command latency is higher than *X* milliseconds in 3 out of 5 samples.
   * @format int32
   * @min 1
   * @max 10000
   */
  peakQueueCommandLatency: number;
}

/**
 * The configuration of the anomaly detection for VMware.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"esxiHighCpuSaturation":{"enabled":true,"customThresholds":{"cpuUsagePercentage":80,"vmCpuReadyPercentage":10,"cpuPeakPercentage":90}},"esxiHighMemoryDetection":{"enabled":true,"customThresholds":{"compressionDecompressionRate":120}},"overloadedStorageDetection":{"enabled":true,"customThresholds":{"commandAbortsNumber":1}},"undersizedStorageDetection":{"enabled":true,"customThresholds":{"averageQueueCommandLatency":15,"peakQueueCommandLatency":160}},"slowPhysicalStorageDetection":{"enabled":true,"customThresholds":{"avgReadWriteLatency":150,"peakReadWriteLatency":400}},"droppedPacketsDetection":{"enabled":true,"customThresholds":{"droppedPacketsPerSecond":4}},"lowDatastoreSpaceDetection":{"enabled":true,"customThresholds":{"freeSpacePercentage":5}}}
 */
export interface VMwareAnomalyDetectionConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The configuration of the CPU saturation on ESXi host detection. */
  esxiHighCpuSaturation: EsxiHighCpuSaturationConfig;

  /** The configuration of the guest CPU limit reached configuration detection. */
  guestCpuLimitReached?: GuestCPULimitReachedConfig;

  /** The configuration of the memory saturation on ESXi host detection. */
  esxiHighMemoryDetection: EsxiHighMemoryDetectionConfig;

  /** The cofiguration of the overloaded storage on physical storage device detection. */
  overloadedStorageDetection: OverloadedStorageDetectionConfig;

  /** Undersized storage device detection cofing */
  undersizedStorageDetection: UndersizedStorageDetectionConfig;

  /** The configuraiton of the physical storage device running slow detection. */
  slowPhysicalStorageDetection: SlowPhysicalStorageDetectionConfig;

  /** The configuration of the high number of dropped packets detection. */
  droppedPacketsDetection: DroppedPacketsDetectionConfig;

  /** The configuraiton of the low datastore free space detection. */
  lowDatastoreSpaceDetection: LowDatastoreSpaceDetectionConfig;
}

/**
* Apdex configuration of a mobile or custom application. 

A duration less than the **tolerable** threshold is considered satisfied.
*/
export interface MobileCustomApdex {
  /**
   * Apdex **tolerable** threshold, in milliseconds: a duration greater than or equal to this value is considered tolerable.
   * @format int32
   */
  toleratedThreshold: number;

  /**
   * Apdex **frustrated** threshold, in milliseconds: a duration greater than or equal to this value is considered frustrated.
   * @format int32
   */
  frustratingThreshold: number;

  /** Apdex error condition: if `true` the user session is considered frustrated when an error is reported. */
  frustratedOnError: boolean;
}

/**
 * Configuration of an existing mobile or custom application.
 */
export interface MobileCustomAppConfig {
  /** The Dynatrace entity ID of the application. */
  identifier?: string;

  /** The name of the application. */
  name: string;

  /** The type of the application. */
  applicationType?: "CUSTOM_APPLICATION" | "MOBILE_APPLICATION";

  /**
   * The UUID of the application.
   *
   * It is used only by OneAgent to send data to Dynatrace.
   */
  applicationId?: string;

  /**
   * Custom application icon.
   *
   * Mobile apps always use the mobile device icon, so this icon can only be set for custom apps.
   */
  iconType?: "AMAZON_ECHO" | "DESKTOP" | "EMBEDDED" | "IOT" | "MICROSOFT_HOLOLENS" | "UFO" | "USERS";

  /**
   * The percentage of user sessions to be analyzed.
   * @format int32
   * @min 1
   * @max 100
   */
  costControlUserSessionPercentage: number;

  /**
   * Apdex configuration of a mobile or custom application.
   *
   * A duration less than the **tolerable** threshold is considered satisfied.
   */
  apdexSettings: MobileCustomApdex;

  /**
   * The opt-in mode is enabled (`true`) or disabled (`false`).
   *
   * This value is only applicable to mobile and not to custom apps.
   */
  optInModeEnabled?: boolean;

  /**
   * The session replay is enabled (`true`) or disabled (`false`).
   * This value is only applicable to mobile and not to custom apps.
   */
  sessionReplayEnabled?: boolean;

  /** **Deprecated**. Please use `sessionReplayEnabled` to enable or disable session replay for mobile apps. */
  sessionReplayOnCrashEnabled?: boolean;

  /** The type of the beacon endpoint. */
  beaconEndpointType: "CLUSTER_ACTIVE_GATE" | "ENVIRONMENT_ACTIVE_GATE" | "INSTRUMENTED_WEB_SERVER";

  /**
   * The URL of the beacon endpoint.
   *
   * Only applicable when the **beaconEndpointType** is set to `ENVIRONMENT_ACTIVE_GATE` or `INSTRUMENTED_WEB_SERVER`.
   */
  beaconEndpointUrl?: string;
}

/**
 * Configuration of a mobile or custom application to be created.
 */
export interface NewMobileCustomAppConfig {
  /** The name of the application. */
  name: string;

  /** The type of the application. */
  applicationType: "CUSTOM_APPLICATION" | "MOBILE_APPLICATION";

  /**
   * The UUID of the application.
   *
   * It is used only by OneAgent to send data to Dynatrace.
   */
  applicationId?: string;

  /**
   * Custom application icon.
   *
   * Mobile apps always use the mobile device icon, so this icon can only be set for custom apps.
   */
  iconType?: "AMAZON_ECHO" | "DESKTOP" | "EMBEDDED" | "IOT" | "MICROSOFT_HOLOLENS" | "UFO" | "USERS";

  /**
   * The percentage of user sessions to be analyzed.
   * @format int32
   * @min 1
   * @max 100
   */
  costControlUserSessionPercentage?: number;

  /**
   * Apdex configuration of a mobile or custom application.
   *
   * A duration less than the **tolerable** threshold is considered satisfied.
   */
  apdexSettings?: MobileCustomApdex;

  /**
   * The opt-in mode is enabled (`true`) or disabled (`false`).
   *
   * This value is only applicable to mobile and not to custom apps.
   */
  optInModeEnabled?: boolean;

  /**
   * The session replay is enabled (`true`) or disabled (`false`).
   * This value is only applicable to mobile and not to custom apps.
   */
  sessionReplayEnabled?: boolean;

  /** **Deprecated**. Please use `sessionReplayEnabled` to enable or disable session replay for mobile apps. */
  sessionReplayOnCrashEnabled?: boolean;

  /** The type of the beacon endpoint. */
  beaconEndpointType?: "CLUSTER_ACTIVE_GATE" | "ENVIRONMENT_ACTIVE_GATE" | "INSTRUMENTED_WEB_SERVER";

  /**
   * The URL of the beacon endpoint.
   *
   * Only applicable when the **beaconEndpointType** is set to `ENVIRONMENT_ACTIVE_GATE` or `INSTRUMENTED_WEB_SERVER`.
   */
  beaconEndpointUrl?: string;
}

/**
 * Contains lists of short representations of mobile session properties and mobile user action properties.
 */
export interface MobileSessionUserActionPropertyList {
  /** A list of short representations of mobile session properties. */
  sessionProperties?: MobileSessionUserActionPropertyShort[];

  /** A list of short representations of mobile user action properties. */
  userActionProperties?: MobileSessionUserActionPropertyShort[];
}

/**
 * A short representation of mobile session or user action property.
 */
export interface MobileSessionUserActionPropertyShort {
  /** The key of the session or user action property. */
  key: string;

  /** The display name of the session or user action property. */
  displayName?: string;
}

/**
 * Configuration of the mobile session or user action property.
 */
export interface MobileSessionUserActionProperty {
  /** The unique key of the mobile session or user action property. */
  key: string;

  /** The display name of the property. */
  displayName?: string;

  /** The data type of the property. */
  type: "DOUBLE" | "LONG" | "STRING";

  /** The origin of the property */
  origin: "API" | "SERVER_SIDE_REQUEST_ATTRIBUTE";

  /**
   * The aggregation type of the property.
   *
   *   It defines how multiple values of the property are aggregated.
   */
  aggregation?: "AVERAGE" | "FIRST" | "LAST" | "MAX" | "MIN" | "SUM";

  /** If `true`, the property is stored as a user action property */
  storeAsUserActionProperty?: boolean;

  /** If `true`, the property is stored as a session property */
  storeAsSessionProperty?: boolean;

  /**
   * The cleanup rule of the property.
   *
   * Defines how to extract the data you need from a string value. Specify the [regular expression](https://dt-url.net/k9e0iaq) for the data you need there.
   */
  cleanupRule?: string;

  /**
   * The ID of the request attribute.
   *
   * Only applicable when the **origin** is set to `SERVER_SIDE_REQUEST_ATTRIBUTE`.
   */
  serverSideRequestAttribute?: string;

  /**
   * The name of the reported value.
   *
   * Only applicable when the **origin** is set to `API`.
   */
  name?: string;
}

/**
 * An update of a mobile session or user action property.
 */
export interface MobileSessionUserActionPropertyUpd {
  /** The display name of the property. */
  displayName?: string;

  /** The data type of the property. */
  type: "DOUBLE" | "LONG" | "STRING";

  /** The origin of the property */
  origin: "API" | "SERVER_SIDE_REQUEST_ATTRIBUTE";

  /**
   * The aggregation type of the property.
   *
   *   It defines how multiple values of the property are aggregated.
   */
  aggregation?: "AVERAGE" | "FIRST" | "LAST" | "MAX" | "MIN" | "SUM";

  /** If `true`, the property is stored as a user action property */
  storeAsUserActionProperty?: boolean;

  /** If `true`, the property is stored as a session property */
  storeAsSessionProperty?: boolean;

  /**
   * The cleanup rule of the property.
   *
   * Defines how to extract the data you need from a string value. Specify the [regular expression](https://dt-url.net/k9e0iaq) for the data you need there.
   */
  cleanupRule?: string;

  /**
   * The ID of the request attribute.
   *
   * Only applicable when the **origin** is set to `SERVER_SIDE_REQUEST_ATTRIBUTE`.
   */
  serverSideRequestAttribute?: string;

  /**
   * The name of the reported value.
   *
   * Only applicable when the **origin** is set to `API`.
   */
  name?: string;
}

/**
 * A key user action.
 */
export interface KeyUserActionMobile {
  /** The name of the key user action. */
  name?: string;
}

/**
 * A list of key actions in an application.
 */
export interface KeyUserActionMobileList {
  /** A list of key actions in an application. */
  keyUserActions?: KeyUserActionMobile[];
}

/**
 * Data privacy settings of the application.
 */
export interface ApplicationDataPrivacy {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** Dynatrace entity ID of the web application. */
  identifier?: string;

  /** Set to `true` to disable data capture and cookies until JavaScriptAPI `dtrum.enable()` is called. */
  dataCaptureOptInEnabled: boolean;

  /** Set to `true` to set persistent cookie in order to recognize returning devices. */
  persistentCookieForUserTracking: boolean;

  /**
   * How to handle the "Do Not Track" header:
   *
   * * `IGNORE_DO_NOT_TRACK`: ignore the header and capture the data.
   * * `CAPTURE_ANONYMIZED`: capture the data but do not tie it to the user.
   * * `DO_NOT_CAPTURE`: respect the header and do not capture.
   */
  doNotTrackBehaviour: "CAPTURE_ANONYMIZED" | "DO_NOT_CAPTURE" | "IGNORE_DO_NOT_TRACK";

  /** Data privacy settings for Session Replay. */
  sessionReplayDataPrivacy?: SessionReplayDataPrivacySettings;
}

export interface ApplicationDataPrivacyList {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;
  values?: ApplicationDataPrivacy[];
}

/**
 * The masking rule defining how data is hidden.
 */
export interface MaskingRule {
  /** The type of the masking rule. */
  maskingRuleType: "ATTRIBUTE" | "ELEMENT";

  /**
   * The selector for the element or the attribute to be masked.
   *
   * Specify a CSS expression for an element or a [regular expression](https://dt-url.net/k9e0iaq) for an attribute.
   */
  selector: string;

  /**
   * Interactions with the element are (`true`) or are not (`false) masked.
   * @example false
   */
  userInteractionHidden: boolean;
}

/**
* Content masking settings for Session Replay. 

For more details, see [Configure Session Replay](https://dt-url.net/0m03slq) in Dynatrace Documentation.
*/
export interface SessionReplayContentMaskingSettings {
  /**
   * The version of the content masking.
   *
   * You can use this API only with the version 2.
   * If you're using version 1, set this field to `2` in the PUT request to switch to version 2.
   * @format int32
   * @example 2
   */
  recordingMaskingSettingsVersion: number;

  /** Configuration of the Session Replay masking. */
  recordingMaskingSettings?: SessionReplayMaskingSetting;

  /** Configuration of the Session Replay masking. */
  playbackMaskingSettings?: SessionReplayMaskingSetting;
}

/**
 * Data privacy settings for Session Replay.
 */
export interface SessionReplayDataPrivacySettings {
  /** If `true`, session recording is disabled until JavaScriptAPI `dtrum.enableSessionReplay()` is called. */
  optInModeEnabled?: boolean;

  /** A list of URLs to be excluded from recording. */
  urlExclusionRules?: string[];

  /**
   * Content masking settings for Session Replay.
   *
   * For more details, see [Configure Session Replay](https://dt-url.net/0m03slq) in Dynatrace Documentation.
   */
  contentMaskingSettings?: SessionReplayContentMaskingSettings;
}

/**
 * Configuration of the Session Replay masking.
 */
export interface SessionReplayMaskingSetting {
  /**
   * The type of the masking:
   *
   * * `MASK_ALL`: Mask all texts, user input, and images.
   * * `MASK_USER_INPUT`: Mask all data that is provided through user input
   * * `ALLOW_LIST`: Only elements, specified in **maskingRules** are shown, everything else is masked.
   * * `BLOCK_LIST`: Elements, specified in **maskingRules** are masked, everything else is shown.
   */
  maskingPreset: "ALLOW_LIST" | "BLOCK_LIST" | "MASK_ALL" | "MASK_USER_INPUT";

  /** A list of masking rules. */
  maskingRules?: MaskingRule[];
}

/**
 * Configuration of the key user action.
 * @example {"name":"Loading of page /example","actionType":"Load","domain":"test.com"}
 */
export interface KeyUserAction {
  /** The name of the action. */
  name: string;

  /** The type of the action. */
  actionType: "Custom" | "Load" | "Xhr";

  /** The domain where the action is performed. */
  domain?: string;

  /** The Dynatrace entity ID of the action. */
  meIdentifier?: string;
}

/**
 * The list of key user actions in the web application
 * @example {"keyUserActionList":[{"name":"Loading of page /example","actionType":"Load","domain":"test.com","meIdentifier":"APPLICATION_METHOD-1234"}]}
 */
export interface KeyUserActionList {
  keyUserActionList?: KeyUserAction[];
}

/**
 * Configuration of error rules in the web application.
 */
export interface ApplicationErrorRules {
  /** Exclude (`true`) or include (`false`) JavaScript errors in Apdex calculation. */
  ignoreJavaScriptErrorsInApdexCalculation: boolean;

  /** Exclude (`true`) or include (`false`) HTTP errors listed in **httpErrorRules** in Apdex calculation. */
  ignoreHttpErrorsInApdexCalculation: boolean;

  /** Exclude (`true`) or include (`false`) custom errors listed in **customErrorRules** in Apdex calculation. */
  ignoreCustomErrorsInApdexCalculation: boolean;

  /**
   * An ordered list of HTTP errors.
   *
   *  Rules are evaluated from top to bottom; the first matching rule applies.
   */
  httpErrorRules: HttpErrorRule[];

  /**
   * An ordered list of custom errors.
   *
   *  Rules are evaluated from top to bottom; the first matching rule applies.
   */
  customErrorRules: CustomErrorRule[];
}

/**
 * Configuration of the custom error in the web application.
 */
export interface CustomErrorRule {
  /** The key of the error to look for. */
  keyPattern?: string;

  /** The matching operation for the **keyPattern**. */
  keyMatcher?: "BEGINS_WITH" | "CONTAINS" | "ENDS_WITH" | "EQUALS";

  /** The value of the error to look for. */
  valuePattern?: string;

  /** The matching operation for the **valuePattern**. */
  valueMatcher?: "BEGINS_WITH" | "CONTAINS" | "ENDS_WITH" | "EQUALS";

  /** Capture (`true`) or ignore (`false`) the error. */
  capture: boolean;

  /** Include (`true`) or exclude (`false`) the error in Apdex calculation. */
  impactApdex: boolean;

  /** Include (`true`) or exclude (`false`) the error in Davis AI [problem detection and analysis](https://dt-url.net/a963kd2). */
  customAlerting: boolean;
}

/**
 * Configuration of the HTTP error in the web application.
 */
export interface HttpErrorRule {
  /** If `true`, match by errors that have unknown HTTP status code. */
  considerUnknownErrorCode: boolean;

  /** If `true`, match by errors that have CSP Rule violations. */
  considerBlockedRequests?: boolean;

  /**
   * The HTTP status code or status code range to match by.
   *
   * This field is required if **considerUnknownErrorCode** AND **considerBlockedRequests** are both set to `false`.
   * @example 400
   */
  errorCodes?: string;

  /** If `true`, filter errors by URL. */
  filterByUrl: boolean;

  /** The matching rule for the URL. */
  filter?: "BEGINS_WITH" | "CONTAINS" | "ENDS_WITH" | "EQUALS";

  /** The URL to look for. */
  url?: string;

  /** Capture (`true`) or ignore (`false`) the error. */
  capture: boolean;

  /** Include (`true`) or exclude (`false`) the error in Apdex calculation. */
  impactApdex: boolean;

  /** Include (`true`) or exclude (`false`) the error in Davis AI [problem detection and analysis](https://dt-url.net/a963kd2). */
  considerForAi: boolean;
}

/**
 * Additional event handlers and wrappers.
 */
export interface AdditionalEventHandlers {
  /** Use mouseup event for clicks enabled/disabled. */
  userMouseupEventForClicks: boolean;

  /** Click event handler enabled/disabled. */
  clickEventHandler: boolean;

  /** Mouseup event handler enabled/disabled. */
  mouseupEventHandler: boolean;

  /** Blur event handler enabled/disabled. */
  blurEventHandler: boolean;

  /** Change event handler enabled/disabled. */
  changeEventHandler: boolean;

  /** toString method enabled/disabled. */
  toStringMethod: boolean;

  /**
   * Max. number of DOM nodes to instrument. Valid values range from 0 to 100000.
   * @format int32
   * @min 0
   * @max 100000
   */
  maxDomNodesToInstrument: number;
}

/**
 * Advanced JavaScript tag settings.
 */
export interface AdvancedJavaScriptTagSettings {
  /** Send the beacon signal as a synchronous XMLHttpRequest using Firefox enabled/disabled. */
  syncBeaconFirefox?: boolean;

  /** Send the beacon signal as a synchronous XMLHttpRequest using Internet Explorer enabled/disabled. */
  syncBeaconInternetExplorer?: boolean;

  /** Instrumentation of unsupported Ajax frameworks enabled/disabled. */
  instrumentUnsupportedAjaxFrameworks: boolean;

  /**
   * Additional special characters that are to be escaped using non-alphanumeric characters in HTML escape format.
   * @pattern [^"<>]*
   */
  specialCharactersToEscape: string;

  /**
   * Maximum character length for action names. Valid values range from 5 to 10000.
   * @format int32
   * @min 5
   * @max 10000
   */
  maxActionNameLength: number;

  /**
   * Maximum number of errors to be captured per page. Valid values range from 0 to 50.
   * @format int32
   * @min 0
   * @max 50
   */
  maxErrorsToCapture: number;

  /** Additional event handlers and wrappers. */
  additionalEventHandlers: AdditionalEventHandlers;

  /** In addition to the event handlers, events called using `addEventListener` or `attachEvent` can be captured. Be careful with this option! Event wrappers can conflict with the JavaScript code on a web page. */
  eventWrapperSettings: EventWrapperSettings;

  /** Global event capture settings. */
  globalEventCaptureSettings: GlobalEventCaptureSettings;
}

/**
 * Defines the Apdex settings of an application.
 */
export interface Apdex {
  threshold?: number;

  /**
   * Maximal value of apdex, which is considered as satisfied user experience.
   * @min 0
   * @max 60000
   */
  toleratedThreshold?: number;

  /**
   * Maximal value of apdex, which is considered as tolerable user experience.
   * @min 0
   * @max 240000
   */
  frustratingThreshold?: number;

  /**
   * Fallback threshold of an XHR action, defining a satisfied user experience, when the configured KPM is not available.
   * @min 0
   * @max 60000
   */
  toleratedFallbackThreshold?: number;

  /**
   * Fallback threshold of an XHR action, defining a tolerable user experience, when the configured KPM is not available.
   * @min 0
   * @max 240000
   */
  frustratingFallbackThreshold?: number;
}

/**
 * Settings for content capture.
 */
export interface ContentCapture {
  /** Settings for resource timings capture. */
  resourceTimingSettings: ResourceTimingSettings;

  /** JavaScript errors monitoring enabled/disabled. */
  javaScriptErrors: boolean;

  /** Settings for timed action capture. */
  timeoutSettings: TimeoutSettings;

  /** Visually complete and Speed index support enabled/disabled. */
  visuallyCompleteAndSpeedIndex: boolean;

  /** Settings for VisuallyComplete2 */
  visuallyComplete2Settings?: VisuallyComplete2Settings;
}

/**
 * A conversion goal of the application.
 */
export interface ConversionGoal {
  /** The name of the conversion goal. */
  name: string;

  /**
   * The ID of conversion goal.
   *
   *  Omit it while creating a new conversion goal.
   */
  id?: string;

  /** The type of the conversion goal. */
  type?: "Destination" | "UserAction" | "VisitDuration" | "VisitNumActions";

  /** Configuration of a destination-based conversion goal. */
  destinationDetails?: DestinationDetails;

  /** Configuration of a user action-based conversion goal. */
  userActionDetails?: UserActionDetails;

  /** Configuration of a visit duration-based conversion goal. */
  visitDurationDetails?: VisitDurationDetails;

  /** Configuration of a number of user actions-based conversion goal. */
  visitNumActionDetails?: VisitNumActionDetails;
}

/**
 * Configuration of a destination-based conversion goal.
 */
export interface DestinationDetails {
  /** The path to be reached to hit the conversion goal. */
  urlOrPath: string;

  /** The operator of the match. */
  matchType?: "Begins" | "Contains" | "Ends";

  /** The match is case-sensitive (`true`) or (`false`). */
  caseSensitive?: boolean;
}

/**
 * In addition to the event handlers, events called using `addEventListener` or `attachEvent` can be captured. Be careful with this option! Event wrappers can conflict with the JavaScript code on a web page.
 */
export interface EventWrapperSettings {
  /** Click enabled/disabled. */
  click: boolean;

  /** MouseUp enabled/disabled. */
  mouseUp: boolean;

  /** Change enabled/disabled. */
  change: boolean;

  /** Blur enabled/disabled. */
  blur: boolean;

  /** TouchStart enabled/disabled. */
  touchStart: boolean;

  /** TouchEnd enabled/disabled. */
  touchEnd: boolean;
}

/**
 * Global event capture settings.
 */
export interface GlobalEventCaptureSettings {
  /** MouseUp enabled/disabled. */
  mouseUp: boolean;

  /** MouseDown enabled/disabled. */
  mouseDown: boolean;

  /** Click enabled/disabled. */
  click: boolean;

  /** DoubleClick enabled/disabled. */
  doubleClick: boolean;

  /** KeyUp enabled/disabled. */
  keyUp: boolean;

  /** KeyDown enabled/disabled. */
  keyDown: boolean;

  /** Scroll enabled/disabled. */
  scroll: boolean;

  /**
   * Additional events to be captured globally as user input.
   *
   * For example, DragStart or DragEnd.
   * @pattern [a-z,]*
   */
  additionalEventCapturedAsUserInput: string;
}

/**
 * The IP address or the IP address range to be mapped to the location.
 */
export interface IpAddressRange {
  /**
   * The subnet mask of the IP address range.
   * @format int32
   * @min 0
   * @max 128
   */
  subnetMask?: number;

  /**
   * The IP address to be mapped.
   *
   * For an IP address range, this is the **from** address.
   */
  address: string;

  /** The **to** address of the IP address range. */
  addressTo?: string;
}

/**
 * Support of various JavaScript frameworks.
 */
export interface JavaScriptFrameworkSupport {
  /** AngularJS and Angular support enabled/disabled. */
  angular: boolean;

  /** Dojo support enabled/disabled. */
  dojo: boolean;

  /** ExtJS, Sencha Touch support enabled/disabled. */
  extJS: boolean;

  /** ICEfaces support enabled/disabled. */
  icefaces: boolean;

  /** jQuery, Backbone.js support enabled/disabled. */
  jQuery: boolean;

  /** MooTools support enabled/disabled. */
  mooTools: boolean;

  /** Prototype support enabled/disabled. */
  prototype: boolean;

  /** ActiveXObject detection support enabled/disabled. */
  activeXObject: boolean;
}

/**
 * Rules for javascript injection
 */
export interface JavaScriptInjectionRules {
  /** The enable or disable rule of the java script injection. */
  enabled: boolean;

  /** The url operator of the java script injection. */
  urlOperator: "ALL_PAGES" | "CONTAINS" | "ENDS_WITH" | "EQUALS" | "STARTS_WITH";

  /** The url pattern of the java script injection. */
  urlPattern?: string;

  /** The url rule of the java script injection. */
  rule: "AFTER_SPECIFIC_HTML" | "AUTOMATIC_INJECTION" | "BEFORE_SPECIFIC_HTML" | "DO_NOT_INJECT";

  /** The html pattern of the java script injection. */
  htmlPattern?: string;

  /** The target against which the rule of the java script injection should be matched. */
  target?: "PAGE_QUERY" | "URL";
}

/**
 * Configuration to capture meta data with the JavaScript agent.
 */
export interface MetaDataCapturing {
  /** The type of the meta data to capture. */
  type: "COOKIE" | "CSS_SELECTOR" | "JAVA_SCRIPT_FUNCTION" | "JAVA_SCRIPT_VARIABLE" | "META_TAG" | "QUERY_STRING";

  /** The name of the meta data to capture. */
  capturingName: string;

  /** Name for displaying the captured values in Dynatrace. */
  name: string;

  /**
   * The unique id of the meta data to capture.
   * @format int32
   * @min 0
   */
  uniqueId?: number;

  /** True if this metadata should be captured regardless of the privacy settings */
  publicMetadata?: boolean;

  /** True if the last captured value should be used for this metadata. By default the first value will be used. */
  useLastValue?: boolean;
}

/**
 * Real user monitoring settings.
 */
export interface MonitoringSettings {
  /** `fetch()` request capture enabled/disabled. */
  fetchRequests: boolean;

  /** `XmlHttpRequest` support enabled/disabled. */
  xmlHttpRequest: boolean;

  /** Support of various JavaScript frameworks. */
  javaScriptFrameworkSupport: JavaScriptFrameworkSupport;

  /** Settings for content capture. */
  contentCapture: ContentCapture;

  /**
   * You can exclude some actions from becoming XHR actions.
   *
   * Put a regular expression, matching all the required URLs, here.
   * If noting specified the feature is disabled.
   */
  excludeXhrRegex: string;

  /**
   * To enable RUM for XHR calls to AWS Lambda, define a regular expression matching these calls, Dynatrace can then automatically add a custom header (x-dtc) to each such request to the respective endpoints in AWS.
   *
   * Important: These endpoints must accept the x-dtc header, or the requests will fail.
   */
  correlationHeaderInclusionRegex?: string;

  /** JavaScript injection mode. */
  injectionMode: "CODE_SNIPPET" | "CODE_SNIPPET_ASYNC" | "INLINE_CODE" | "JAVASCRIPT_TAG";

  /** Add the cross origin = anonymous attribute to capture JavaScript error messages and W3C resource timings. */
  addCrossOriginAnonymousAttribute?: boolean;

  /**
   * Time duration for the cache settings.
   * @format int32
   */
  scriptTagCacheDurationInHours?: number;

  /**
   * The location of your application’s custom JavaScript library file.
   *
   *  If nothing specified the root directory of your web server is used.
   *  **Required** for auto-injected applications, not supported by agentless applications.
   */
  libraryFileLocation?: string;

  /**
   * The location to send monitoring data from the JavaScript tag.
   *
   *  Specify either a relative or an absolute URL. If you use an absolute URL, data will be sent using CORS.
   *  **Required** for auto-injected applications, optional for agentless applications.
   */
  monitoringDataPath?: string;

  /** Additional JavaScript tag properties that are specific to your application. To do this, type key=value pairs separated using a (|) symbol. */
  customConfigurationProperties: string;

  /**
   * Path to identify the server’s request ID.
   * @pattern [a-zA-Z-~\\.]*
   */
  serverRequestPathId: string;

  /** Secure attribute usage for Dynatrace cookies enabled/disabled. */
  secureCookieAttribute: boolean;

  /** Domain for cookie placement. */
  cookiePlacementDomain: string;

  /** Optimize the value of cache control headers for use with Dynatrace real user monitoring enabled/disabled. */
  cacheControlHeaderOptimizations: boolean;

  /** Advanced JavaScript tag settings. */
  advancedJavaScriptTagSettings: AdvancedJavaScriptTagSettings;

  /** Settings for restricting certain browser type, version, platform and, comparator. It also restricts the mode. */
  browserRestrictionSettings?: WebApplicationConfigBrowserRestrictionSettings;

  /** Settings for restricting certain ip addresses and for introducing subnet mask. It also restricts the mode. */
  ipAddressRestrictionSettings?: WebApplicationConfigIpAddressRestrictionSettings;

  /** Java script injection rules. */
  javaScriptInjectionRules?: JavaScriptInjectionRules[];

  /** The name of the angular package. */
  angularPackageName?: string;
}

/**
 * Settings for resource timings capture.
 */
export interface ResourceTimingSettings {
  /** W3C resource timings for third party/CDN enabled/disabled. */
  w3cResourceTimings: boolean;

  /** Timing for JavaScript files and images on non-W3C supported browsers enabled/disabled. */
  nonW3cResourceTimings: boolean;

  /**
   * Instrumentation delay for monitoring resource and image resource impact in browsers that don't offer W3C resource timings.
   *
   * Valid values range from 0 to 9999.
   * Only effective if **nonW3cResourceTimings** is enabled.
   * @format int32
   * @min 0
   * @max 9999
   */
  nonW3cResourceTimingsInstrumentationDelay: number;

  /**
   * Defines how detailed resource timings are captured.
   *
   * Only effective if **w3cResourceTimings** or **nonW3cResourceTimings** is enabled.
   */
  resourceTimingCaptureType: "CAPTURE_ALL_SUMMARIES" | "CAPTURE_FULL_DETAILS" | "CAPTURE_LIMITED_SUMMARIES";

  /**
   * Limits the number of domains for which W3C resource timings are captured.
   *
   * Only effective if **resourceTimingCaptureType** is `CAPTURE_LIMITED_SUMMARIES`.
   * @format int32
   * @min 0
   * @max 50
   */
  resourceTimingsDomainLimit: number;
}

/**
 * Session replay settings
 */
export interface SessionReplaySetting {
  /** SessionReplay Enabled. */
  enabled: boolean;

  /**
   * Session replay sampling rating in percentage.
   * @format int32
   * @min 0
   * @max 100
   */
  costControlPercentage: number;

  /** Capture (`true`) or don't capture (`false`) CSS resources from the session. */
  enableCssResourceCapturing?: boolean;

  /** A list of URLs to be excluded from CSS resource capturing. */
  cssResourceCapturingExclusionRules?: string[];
}

/**
 * Settings for timed action capture.
 */
export interface TimeoutSettings {
  /**
   * Timed action support enabled/disabled.
   *
   * Enable to detect actions that trigger sending of XHRs via *setTimout* methods.
   */
  timedActionSupport: boolean;

  /**
   * Defines how deep temporary actions may cascade. 0 disables temporary actions completely. Recommended value if enabled is 3.
   * @format int32
   */
  temporaryActionLimit: number;

  /**
   * The total timeout of all cascaded timeouts that should still be able to create a temporary action
   * @format int32
   */
  temporaryActionTotalTimeout: number;
}

/**
 * Defines userAction and session custom defined properties settings of an application.
 */
export interface UserActionAndSessionProperties {
  /** The display name of the property. */
  displayName?: string;

  /** The data type of the property. */
  type: "DATE" | "DOUBLE" | "LONG" | "LONG_STRING" | "STRING";

  /** The origin of the property */
  origin: "JAVASCRIPT_API" | "META_DATA" | "SERVER_SIDE_REQUEST_ATTRIBUTE";

  /**
   * The aggregation type of the property.
   *
   *   It defines how multiple values of the property are aggregated.
   */
  aggregation?: "AVERAGE" | "FIRST" | "LAST" | "MAXIMUM" | "MINIMUM" | "SUM";

  /** If `true`, the property is stored as a user action property */
  storeAsUserActionProperty?: boolean;

  /** If `true`, the property is stored as a session property */
  storeAsSessionProperty?: boolean;

  /**
   * The cleanup rule of the property.
   *
   * Defines how to extract the data you need from a string value. Specify the [regular expression](https://dt-url.net/k9e0iaq) for the data you need there.
   */
  cleanupRule?: string;

  /**
   * The ID of the request attribute.
   *
   * Only applicable when the **origin** is set to `SERVER_SIDE_REQUEST_ATTRIBUTE`.
   */
  serverSideRequestAttribute?: string;

  /**
   * Unique id among all userTags and properties of this application
   * @format int32
   * @min 1
   */
  uniqueId: number;

  /** Key of the property */
  key: string;

  /**
   * If the origin is META_DATA, metaData id of the property
   * @format int32
   */
  metadataId?: number;

  /** If true, the value of this property will always be stored in lower case. Defaults to false. */
  ignoreCase?: boolean;

  /**
   * If the type is LONG_STRING, the max length for this property. Must be a multiple of 100. Defaults to 200.
   * @format int32
   * @min 200
   * @max 1000
   */
  longStringLength?: number;
}

/**
 * Configuration of a user action-based conversion goal.
 */
export interface UserActionDetails {
  /** The value to be matched to hit the conversion goal. */
  value?: string;

  /** The match is case-sensitive (`true`) or (`false`). */
  caseSensitive?: boolean;

  /** The operator of the match. */
  matchType?: "Begins" | "Contains" | "Ends";

  /** The type of the entity to which the rule applies. */
  matchEntity?:
    | "ActionName"
    | "CssSelector"
    | "JavaScriptVariable"
    | "MetaTag"
    | "PagePath"
    | "PageTitle"
    | "PageUrl"
    | "UrlAnchor"
    | "XhrUrl";

  /** Type of the action to which the rule applies. */
  actionType?: "Custom" | "Load" | "Xhr";
}

/**
 * The placeholder settings.
 */
export interface UserActionNamingPlaceholder {
  /** Placeholder name. */
  name: string;

  /** Input. */
  input:
    | "ELEMENT_IDENTIFIER"
    | "INPUT_TYPE"
    | "METADATA"
    | "PAGE_TITLE"
    | "PAGE_URL"
    | "SOURCE_URL"
    | "TOP_XHR_URL"
    | "XHR_URL";

  /** Part. */
  processingPart: "ALL" | "ANCHOR" | "PATH";

  /** Processing actions. */
  processingSteps?: UserActionNamingPlaceholderProcessingStep[];

  /**
   * Id of the metadata.
   * @format int32
   */
  metadataId?: number;

  /** Use the element identifier that was selected by Dynatrace. */
  useGuessedElementIdentifier: boolean;
}

/**
 * The processing step settings.
 */
export interface UserActionNamingPlaceholderProcessingStep {
  /**
   * An action to be taken by the processing:
   *
   * * `SUBSTRING`: Extracts the string between **patternBefore** and **patternAfter**.
   * * `REPLACEMENT`: Replaces the string between **patternBefore** and **patternAfter** with the specified **replacement**.
   * * `REPLACE_WITH_PATTERN`: Replaces the **patternToReplace** with the specified **replacement**.
   * * `EXTRACT_BY_REGULAR_EXPRESSION`: Extracts the part of the string that matches the **regularExpression**.
   * * `REPLACE_WITH_REGULAR_EXPRESSION`: Replaces all occurrences that match **regularExpression** with the specified **replacement**.
   * * `REPLACE_IDS`: Replaces all IDs and UUIDs with the specified **replacement**.
   */
  type:
    | "EXTRACT_BY_REGULAR_EXPRESSION"
    | "REPLACEMENT"
    | "REPLACE_IDS"
    | "REPLACE_WITH_PATTERN"
    | "REPLACE_WITH_REGULAR_EXPRESSION"
    | "SUBSTRING";

  /** The pattern before the required value. It will be removed. */
  patternBefore?: string;

  /** The required occurrence of **patternBefore**. */
  patternBeforeSearchType?: "FIRST" | "LAST";

  /** The pattern after the required value. It will be removed. */
  patternAfter?: string;

  /** The required occurrence of **patternAfter**. */
  patternAfterSearchType?: "FIRST" | "LAST";

  /** Replacement for the original value. */
  replacement?: string;

  /**
   * The pattern to be replaced.
   *
   *  Only applicable if the **type** is `REPLACE_WITH_PATTERN`.
   */
  patternToReplace?: string;

  /**
   * A regular expression for the string to be extracted or replaced.
   *
   *  Only applicable if the **type** is `EXTRACT_BY_REGULAR_EXPRESSION` or `REPLACE_WITH_REGULAR_EXPRESSION`.
   */
  regularExpression?: string;

  /**
   * If set to true: Returns the input if **patternBefore** or **patternAfter** cannot be found and the **type** is `SUBSTRING`.
   *
   *  Returns the input if **regularExpression** doesn't match and **type** is `EXTRACT_BY_REGULAR_EXPRESSION`.
   *  Otherwise null is returned.
   */
  fallbackToInput?: boolean;
}

/**
 * The settings of naming rule.
 */
export interface UserActionNamingRule {
  /** Naming pattern. Use Curly brackets `{}` to select placeholders. */
  template: string;

  /** Defines the conditions when the naming rule should apply. */
  conditions?: UserActionNamingRuleCondition[];

  /** If set to `true` the conditions will be connected by logical OR instead of logical AND. */
  useOrConditions?: boolean;
}

/**
 * The settings of conditions for user action naming.
 */
export interface UserActionNamingRuleCondition {
  /** Must be a defined placeholder wrapped in curly braces */
  operand1: string;

  /** Must be null if operator is "IS_EMPTY", a regex if operator is "MATCHES_REGULAR_ERPRESSION". In all other cases the value can be a freetext or a placeholder wrapped in curly braces */
  operand2?: string;

  /** The operator of the condition */
  operator:
    | "CONTAINS"
    | "ENDS_WITH"
    | "EQUALS"
    | "IS_EMPTY"
    | "IS_NOT_EMPTY"
    | "MATCHES_REGULAR_EXPRESSION"
    | "NOT_CONTAINS"
    | "NOT_ENDS_WITH"
    | "NOT_EQUALS"
    | "NOT_MATCHES_REGULAR_EXPRESSION"
    | "NOT_STARTS_WITH"
    | "STARTS_WITH";
}

/**
 * The settings of user action naming.
 */
export interface UserActionNamingSettings {
  /** User action placeholders. */
  placeholders?: UserActionNamingPlaceholder[];

  /** User action naming rules for loading actions. */
  loadActionNamingRules?: UserActionNamingRule[];

  /** User action naming rules for xhr actions. */
  xhrActionNamingRules?: UserActionNamingRule[];

  /** User action naming rules for custom actions. */
  customActionNamingRules?: UserActionNamingRule[];

  /** Case insensitive naming. */
  ignoreCase?: boolean;

  /** First load action found under an XHR action should be used when true. Else the deepest one under the xhr action is used */
  useFirstDetectedLoadAction?: boolean;

  /** Deactivate this setting if different domains should not result in separate user actions. */
  splitUserActionsByDomain?: boolean;

  /** List of parameters that should be removed from the query before using the query in the user action name. */
  queryParameterCleanups?: string[];
}

/**
 * Defines UserTags settings of an application.
 */
export interface UserTag {
  /**
   * uniqueId, unique among all userTags and properties of this application
   * @format int32
   * @min 1
   */
  uniqueId: number;

  /**
   * If it's of type metaData, metaData id of the userTag
   * @format int32
   */
  metadataId?: number;

  /** Cleanup rule expression of the userTag */
  cleanupRule?: string;

  /** requestAttribute Id of the userTag */
  serverSideRequestAttribute?: string;

  /** If true, the value of this tag will always be stored in lower case. Defaults to false. */
  ignoreCase?: boolean;
}

/**
 * Configuration of a visit duration-based conversion goal.
 */
export interface VisitDurationDetails {
  /**
   * The duration of session to hit the conversion goal, in milliseconds.
   * @format int64
   */
  durationInMillis: number;
}

/**
 * Configuration of a number of user actions-based conversion goal.
 */
export interface VisitNumActionDetails {
  /**
   * The number of user actions to hit the conversion goal.
   * @format int32
   */
  numUserActions?: number;
}

/**
 * Settings for VisuallyComplete2
 */
export interface VisuallyComplete2Settings {
  /** A RegularExpression used to exclude images and iframes from being detected by the VC module. */
  excludeUrlRegex?: string;

  /** Query selector for mutation nodes to ignore in VC and SI calculation */
  ignoredMutationsList?: string;

  /**
   * Determines the time in ms VC waits after an action closes to start calculation. Defaults to 50.
   * @format int32
   * @min 0
   * @max 5000
   */
  mutationTimeout?: number;

  /**
   * The time in ms the VC module waits for no mutations happening on the page after the load action. Defaults to 1000.
   * @format int32
   * @min 0
   * @max 30000
   */
  inactivityTimeout?: number;

  /**
   * Minimum visible area in pixels of elements to be counted towards VC and SI. Defaults to 50.
   * @format int32
   * @min 0
   * @max 10000
   */
  threshold?: number;
}

/**
 * These settings influence the monitoring data you receive for 3rd party, CDN, and 1st party resources.
 */
export interface WaterfallSettings {
  /**
   * Warn about uncompressed resources larger than *X* bytes.
   * @format int32
   * @min 0
   * @max 99999
   */
  uncompressedResourcesThreshold: number;

  /**
   * Warn about resources larger than *X* bytes.
   * @format int32
   * @min 0
   * @max 99999000
   */
  resourcesThreshold: number;

  /**
   * Warn about resources with a lower browser cache rate above *X*%.
   * @format int32
   * @min 1
   * @max 100
   */
  resourceBrowserCachingThreshold: number;

  /**
   * Warn about slow 1st party resources with a response time above *X* ms.
   * @format int32
   * @min 0
   * @max 99999000
   */
  slowFirstPartyResourcesThreshold: number;

  /**
   * Warn about slow 3rd party resources with a response time above *X* ms.
   * @format int32
   * @min 0
   * @max 99999000
   */
  slowThirdPartyResourcesThreshold: number;

  /**
   * Warn about slow CDN resources with a response time above *X* ms.
   * @format int32
   * @min 0
   * @max 99999000
   */
  slowCdnResourcesThreshold: number;

  /**
   * Warn if Speed index exceeds *X* % of Visually complete.
   * @format int32
   * @min 1
   * @max 99
   */
  speedIndexVisuallyCompleteRatioThreshold: number;
}

/**
 * Configuration of a web application.
 * @example {"name":"application name","type":"AUTO_INJECTED","realUserMonitoringEnabled":true,"sessionReplayConfig":{"costControlPercentage":100,"enabled":true,"enableCssResourceCapturing":true,"cssResourceCapturingExclusionRules":["rule"]},"costControlUserSessionPercentage":100,"loadActionKeyPerformanceMetric":"VISUALLY_COMPLETE","xhrActionKeyPerformanceMetric":"ACTION_DURATION","loadActionApdexSettings":{"toleratedThreshold":3000,"frustratingThreshold":12000,"toleratedFallbackThreshold":3000,"frustratingFallbackThreshold":12000},"xhrActionApdexSettings":{"toleratedThreshold":2500,"frustratingThreshold":10000,"toleratedFallbackThreshold":3000,"frustratingFallbackThreshold":12000},"customActionApdexSettings":{"toleratedThreshold":3000,"frustratingThreshold":12000,"toleratedFallbackThreshold":3000,"frustratingFallbackThreshold":12000},"waterfallSettings":{"uncompressedResourcesThreshold":860,"resourcesThreshold":100000,"resourceBrowserCachingThreshold":50,"slowFirstPartyResourcesThreshold":200000,"slowThirdPartyResourcesThreshold":200000,"slowCdnResourcesThreshold":200000,"speedIndexVisuallyCompleteRatioThreshold":50},"monitoringSettings":{"fetchRequests":false,"xmlHttpRequest":true,"javaScriptFrameworkSupport":{"angular":true,"dojo":false,"extJS":false,"icefaces":false,"jQuery":true,"mooTools":false,"prototype":true,"activeXObject":false},"contentCapture":{"resourceTimingSettings":{"w3cResourceTimings":true,"nonW3cResourceTimings":false,"nonW3cResourceTimingsInstrumentationDelay":50,"resourceTimingCaptureType":"CAPTURE_FULL_DETAILS","resourceTimingsDomainLimit":10},"javaScriptErrors":true,"timeoutSettings":{"timedActionSupport":false,"temporaryActionLimit":0,"temporaryActionTotalTimeout":100},"visuallyCompleteAndSpeedIndex":true},"excludeXhrRegex":"","correlationHeaderInclusionRegex":"","injectionMode":"JAVASCRIPT_TAG","libraryFileLocation":"","monitoringDataPath":"","customConfigurationProperties":"","serverRequestPathId":"","secureCookieAttribute":false,"cookiePlacementDomain":"","cacheControlHeaderOptimizations":true,"advancedJavaScriptTagSettings":{"syncBeaconFirefox":false,"syncBeaconInternetExplorer":false,"instrumentUnsupportedAjaxFrameworks":false,"specialCharactersToEscape":"","maxActionNameLength":100,"maxErrorsToCapture":10,"additionalEventHandlers":{"userMouseupEventForClicks":false,"clickEventHandler":false,"mouseupEventHandler":false,"blurEventHandler":false,"changeEventHandler":false,"toStringMethod":false,"maxDomNodesToInstrument":5000},"eventWrapperSettings":{"click":false,"mouseUp":false,"change":false,"blur":false,"touchStart":false,"touchEnd":false},"globalEventCaptureSettings":{"mouseUp":true,"mouseDown":true,"click":true,"doubleClick":true,"keyUp":true,"keyDown":true,"scroll":true,"additionalEventCapturedAsUserInput":""}},"browserRestrictionSettings":{"browserRestrictions":[{"browserType":"INTERNET_EXPLORER","browserVersion":"0","platform":"ALL","comparator":"EQUALS"}],"mode":"EXCLUDE"},"javaScriptInjectionRules":[{"enabled":true,"urlOperator":"CONTAINS","urlPattern":"/lorem/ipsum.jsp","rule":"AFTER_SPECIFIC_HTML","htmlPattern":"</title>"}],"ipAddressRestrictionSettings":{"ipAddressRestrictions":[{"subnetMask":3,"address":"10.0.0.1"},{"address":"10.0.0.1","addressTo":"10.0.0.2"}],"mode":"EXCLUDE"}},"userActionNamingSettings":{"placeholders":[{"name":"myPlaceholder","input":"PAGE_URL","processingPart":"ALL","processingSteps":[{"type":"SUBSTRING","patternBefore":".*b","patternBeforeSearchType":"FIRST","patternAfter":".*a","patternAfterSearchType":"LAST","replacement":"value"}],"useGuessedElementIdentifier":false}],"loadActionNamingRules":[{"template":"Loading of {myPlaceholder}","conditions":[{"operand1":"{myPlaceholder}","operand2":"foo","operator":"CONTAINS"}]}],"xhrActionNamingRules":[{"template":"Loading of {myPlaceholder}","conditions":[{"operand1":"{myPlaceholder}","operand2":"foo","operator":"CONTAINS"}]}],"ignoreCase":true,"splitUserActionsByDomain":true},"metaDataCaptureSettings":[{"type":"JAVA_SCRIPT_VARIABLE","capturingName":"variableName","name":"display name"}],"conversionGoals":[{"name":"conversionGoalName","type":"UserAction","destinationDetails":{"urlOrPath":"url or path","matchType":"Begins","caseSensitive":false},"userActionDetails":{"value":"value to match","caseSensitive":true,"matchType":"Ends","matchEntity":"ActionName","actionType":"Load"},"visitDurationDetails":{"durationInMillis":1},"visitNumActionDetails":{"numUserActions":2}}]}
 */
export interface WebApplicationConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** Dynatrace entity ID of the web application. */
  identifier?: string;

  /** The name of the web application, displayed in the UI. */
  name: string;

  /** The type of the web application. */
  type?: "AUTO_INJECTED" | "BROWSER_EXTENSION_INJECTED" | "MANUALLY_INJECTED";

  /** Real user monitoring enabled/disabled. */
  realUserMonitoringEnabled: boolean;

  /**
   * Analize *X*% of user sessions.
   * @min 0
   * @max 100
   */
  costControlUserSessionPercentage: number;

  /** The key performance metric of load actions. */
  loadActionKeyPerformanceMetric:
    | "ACTION_DURATION"
    | "CUMULATIVE_LAYOUT_SHIFT"
    | "DOM_INTERACTIVE"
    | "FIRST_INPUT_DELAY"
    | "LARGEST_CONTENTFUL_PAINT"
    | "LOAD_EVENT_END"
    | "LOAD_EVENT_START"
    | "RESPONSE_END"
    | "RESPONSE_START"
    | "SPEED_INDEX"
    | "VISUALLY_COMPLETE";

  /** Session replay settings */
  sessionReplayConfig?: SessionReplaySetting;

  /** The key performance metric of XHR actions. */
  xhrActionKeyPerformanceMetric: "ACTION_DURATION" | "RESPONSE_END" | "RESPONSE_START" | "VISUALLY_COMPLETE";

  /** Defines the Apdex settings of an application. */
  loadActionApdexSettings: Apdex;

  /** Defines the Apdex settings of an application. */
  xhrActionApdexSettings: Apdex;

  /** Defines the Apdex settings of an application. */
  customActionApdexSettings: Apdex;

  /** These settings influence the monitoring data you receive for 3rd party, CDN, and 1st party resources. */
  waterfallSettings: WaterfallSettings;

  /** Real user monitoring settings. */
  monitoringSettings: MonitoringSettings;

  /** User tags settings. */
  userTags?: UserTag[];

  /** User action and session properties settings. Empty List means no change */
  userActionAndSessionProperties?: UserActionAndSessionProperties[];

  /** The settings of user action naming. */
  userActionNamingSettings?: UserActionNamingSettings;

  /** Java script agent meta data capture settings. */
  metaDataCaptureSettings?: MetaDataCapturing[];

  /** A list of conversion goals of the application. */
  conversionGoals?: ConversionGoal[];

  /** Url injection pattern for manual web application. */
  urlInjectionPattern?: string;
}

/**
 * Browser exclusion rules for the browsers that are to be excluded.
 */
export interface WebApplicationConfigBrowserRestriction {
  /** The version of the browser that is used. */
  browserVersion?: string;

  /** The type of the browser that is used. */
  browserType:
    | "ANDROID_WEBKIT"
    | "BOTS_SPIDERS"
    | "CHROME"
    | "EDGE"
    | "FIREFOX"
    | "INTERNET_EXPLORER"
    | "OPERA"
    | "SAFARI";

  /** The platform on which the browser is being used. */
  platform?: "ALL" | "DESKTOP" | "MOBILE";

  /** Compares different browsers together. */
  comparator?: "EQUALS" | "GREATER_THAN_OR_EQUAL" | "LOWER_THAN_OR_EQUAL";
}

/**
 * Settings for restricting certain browser type, version, platform and, comparator. It also restricts the mode.
 */
export interface WebApplicationConfigBrowserRestrictionSettings {
  /** The mode of the list of browser restrictions. */
  mode: "EXCLUDE" | "INCLUDE";

  /** A list of browser restrictions. */
  browserRestrictions?: WebApplicationConfigBrowserRestriction[];
}

/**
 * Settings for restricting certain ip addresses and for introducing subnet mask. It also restricts the mode.
 */
export interface WebApplicationConfigIpAddressRestrictionSettings {
  /** The mode of the list of ip address restrictions. */
  mode: "EXCLUDE" | "INCLUDE";
  ipAddressRestrictions?: IpAddressRange[];
}

/**
 * Application detection rule.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"id":"12345678-abcd-1234-abcd-1234567890ab","applicationIdentifier":"APPLICATION-123456","name":"uniqueName","filterConfig":{"pattern":"myapp.example.com","applicationMatchType":"EQUALS","applicationMatchTarget":"DOMAIN"}}
 */
export interface ApplicationDetectionRuleConfig {
  /** Metadata useful for debugging. */
  metadata?: ConfigurationMetadataDtoImpl;

  /**
   * The ID of the rule.
   * @format uuid
   * @example 12345678-abcd-1234-abcd-1234567890ab
   */
  id?: string;

  /**
   * The order of the rule in the rules list.
   *
   * The rules are evaluated from top to bottom. The first matching rule applies.
   */
  order?: string;

  /**
   * The Dynatrace entity ID of the application, for example `APPLICATION-4A3B43`.
   *
   *  You must use an existing ID. If you need to create a rule for an application that doesn't exist yet, [create an application first](https://dt-url.net/vt03khh) and then configure detection rules for it.
   * @example APPLICATION-123456
   */
  applicationIdentifier: string;

  /** The condition of an application detection rule. */
  filterConfig: ApplicationFilter;

  /** The unique name of the Application detection rule. */
  name?: string;
}

/**
 * The condition of an application detection rule.
 */
export interface ApplicationFilter {
  /**
   * The value to look for.
   * @example myapp.example.com
   */
  pattern: string;

  /**
   * The operator of the matching.
   * @example EQUALS
   */
  applicationMatchType: "BEGINS_WITH" | "CONTAINS" | "ENDS_WITH" | "EQUALS" | "MATCHES";

  /**
   * Where to look for the the **pattern** value.
   * @example DOMAIN
   */
  applicationMatchTarget: "DOMAIN" | "URL";
}

/**
 * Metadata useful for debugging.
 */
export interface ConfigurationMetadataDtoImpl {
  /**
   * A sorted list of version numbers of the configuration.
   * @example ["1.0.4","1.23"]
   */
  currentConfigurationVersions?: string[];

  /**
   * A sorted list of the version numbers of the configuration.
   * @example [4,2]
   */
  configurationVersions?: number[];

  /**
   * Dynatrace version.
   * @example 1.192.1
   */
  clusterVersion?: string;
}

/**
 * Configuration of host detection headers.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"hostDetectionHeaders":["X-Host","X-Forwarded-Host"]}
 */
export interface ApplicationDetectionRulesHostDetectionSettings {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * An ordered list of host detection headers.
   *
   * Headers are evaluated from top to bottom; the first matching header applies.
   */
  hostDetectionHeaders: string[];
}

/**
 * Comparison for `APPLICATION_TYPE` attributes.
 */
export type ApplicationTypeComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "AGENTLESS_MONITORING" | "AMP" | "AUTO_INJECTED" | "DEFAULT" | "SAAS_VENDOR";
};

/**
 * Configuration of an auto-tag. It defines the conditions of tag usage and the tag value.
 * @example {"name":"sampleAutoTag","description":"sampleDescription","rules":[{"type":"SERVICE","enabled":true,"valueFormat":"myTagValue {Service:DetectedName}","propagationTypes":["SERVICE_TO_HOST_LIKE"],"conditions":[{"key":{"attribute":"SERVICE_DATABASE_NAME"},"comparisonInfo":{"type":"STRING","operator":"BEGINS_WITH","value":"sample","negate":false,"caseSensitive":false}},{"key":{"attribute":"SERVICE_WEB_SERVER_NAME"},"comparisonInfo":{"type":"STRING","operator":"EXISTS","negate":false}},{"key":{"attribute":"PROCESS_GROUP_CUSTOM_METADATA","type":"PROCESS_CUSTOM_METADATA_KEY","dynamicKey":{"source":"KUBERNETES","key":"kubernetes.io/limit-ranger"}},"comparisonInfo":{"type":"STRING","operator":"BEGINS_WITH","value":"sample","negate":false,"caseSensitive":false}}]}],"entitySelectorBasedRules":[{"enabled":true,"entitySelector":"type(HOST) AND cpuCores(4)"}]}
 */
export interface AutoTag {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the auto-tag.
   * @format uuid
   * @example 12345678-abcd-1234-abcd-1234567890ab
   */
  id?: string;

  /**
   * The name of the auto-tag, which is applied to entities.
   *
   * Additionally you can specify a **valueFormat** in the tag rule. In that case the tag is used in the `name:valueFormat` format.
   * For example you can extend the `Infrastructure` tag to `Infrastructure:Windows` and `Infrastructure:Linux`.
   */
  name: string;

  /** The description of the auto-tag. */
  description?: string;

  /**
   * The list of rules for tag usage.
   *
   * When there are multiple rules, the OR logic applies.
   */
  rules?: AutoTagRule[];

  /**
   * A list of entity-selector based rules for auto tagging usage.
   *
   * If several rules are specified, the **OR** logic applies.
   */
  entitySelectorBasedRules?: EntitySelectorBasedAutoTagRule[];
}

/**
* A rule for the auto-tag. 

 Defines the conditions of tag usage.
*/
export interface AutoTagRule {
  /** Type of entities to which the rule applies. */
  type:
    | "APPLICATION"
    | "AWS_APPLICATION_LOAD_BALANCER"
    | "AWS_CLASSIC_LOAD_BALANCER"
    | "AWS_NETWORK_LOAD_BALANCER"
    | "AWS_RELATIONAL_DATABASE_SERVICE"
    | "AZURE"
    | "CUSTOM_APPLICATION"
    | "CUSTOM_DEVICE"
    | "DCRUM_APPLICATION"
    | "ESXI_HOST"
    | "EXTERNAL_SYNTHETIC_TEST"
    | "HOST"
    | "HTTP_CHECK"
    | "MOBILE_APPLICATION"
    | "PROCESS_GROUP"
    | "SERVICE"
    | "SYNTHETIC_TEST";

  /** Tag rule is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * The value of the auto-tag. If specified, the tag is used in the `name:valueFormat` format.
   *
   * For example, you can extend the `Infrastructure` tag to `Infrastructure:Windows` and `Infrastructure:Linux`.
   * You can use the following placeholders here:
   * * `{AwsAutoScalingGroup:Name}`
   * * `{AwsAvailabilityZone:Name}`
   * * `{AwsElasticLoadBalancer:Name}`
   * * `{AwsRelationalDatabaseService:DBName}`
   * * `{AwsRelationalDatabaseService:Endpoint}`
   * * `{AwsRelationalDatabaseService:Engine}`
   * * `{AwsRelationalDatabaseService:InstanceClass}`
   * * `{AwsRelationalDatabaseService:Name}`
   * * `{AwsRelationalDatabaseService:Port}`
   * * `{AzureRegion:Name}`
   * * `{AzureScaleSet:Name}`
   * * `{AzureVm:Name}`
   * * `{CloudFoundryOrganization:Name}`
   * * `{CustomDevice:DetectedName}`
   * * `{CustomDevice:DnsName}`
   * * `{CustomDevice:IpAddress}`
   * * `{CustomDevice:Port}`
   * * `{DockerContainerGroupInstance:ContainerName}`
   * * `{DockerContainerGroupInstance:FullImageName}`
   * * `{DockerContainerGroupInstance:ImageVersion}`
   * * `{DockerContainerGroupInstance:StrippedImageName}`
   * * `{ESXIHost:HardwareModel}`
   * * `{ESXIHost:HardwareVendor}`
   * * `{ESXIHost:Name}`
   * * `{ESXIHost:ProductName}`
   * * `{ESXIHost:ProductVersion}`
   * * `{Ec2Instance:AmiId}`
   * * `{Ec2Instance:BeanstalkEnvironmentName}`
   * * `{Ec2Instance:InstanceId}`
   * * `{Ec2Instance:InstanceType}`
   * * `{Ec2Instance:LocalHostName}`
   * * `{Ec2Instance:Name}`
   * * `{Ec2Instance:PublicHostName}`
   * * `{Ec2Instance:SecurityGroup}`
   * * `{GoogleComputeInstance:Id}`
   * * `{GoogleComputeInstance:IpAddresses}`
   * * `{GoogleComputeInstance:MachineType}`
   * * `{GoogleComputeInstance:Name}`
   * * `{GoogleComputeInstance:ProjectId}`
   * * `{GoogleComputeInstance:Project}`
   * * `{Host:AWSNameTag}`
   * * `{Host:AixLogicalCpuCount}`
   * * `{Host:AzureHostName}`
   * * `{Host:AzureSiteName}`
   * * `{Host:BoshDeploymentId}`
   * * `{Host:BoshInstanceId}`
   * * `{Host:BoshInstanceName}`
   * * `{Host:BoshName}`
   * * `{Host:BoshStemcellVersion}`
   * * `{Host:CpuCores}`
   * * `{Host:DetectedName}`
   * * `{Host:Environment:AppName}`
   * * `{Host:Environment:BoshReleaseVersion}`
   * * `{Host:Environment:Environment}`
   * * `{Host:Environment:Link}`
   * * `{Host:Environment:Organization}`
   * * `{Host:Environment:Owner}`
   * * `{Host:Environment:Support}`
   * * `{Host:IpAddress}`
   * * `{Host:LogicalCpuCores}`
   * * `{Host:OneAgentCustomHostName}`
   * * `{Host:OperatingSystemVersion}`
   * * `{Host:PaasMemoryLimit}`
   * * `{HostGroup:Name}`
   * * `{KubernetesCluster:Name}`
   * * `{KubernetesNode:DetectedName}`
   * * `{OpenstackAvailabilityZone:Name}`
   * * `{OpenstackZone:Name}`
   * * `{OpenstackComputeNode:Name}`
   * * `{OpenstackProject:Name}`
   * * `{OpenstackVm:UnstanceType}`
   * * `{OpenstackVm:Name}`
   * * `{OpenstackVm:SecurityGroup}`
   * * `{ProcessGroup:AmazonECRImageAccountId}`
   * * `{ProcessGroup:AmazonECRImageRegion}`
   * * `{ProcessGroup:AmazonECSCluster}`
   * * `{ProcessGroup:AmazonECSContainerName}`
   * * `{ProcessGroup:AmazonECSFamily}`
   * * `{ProcessGroup:AmazonECSRevision}`
   * * `{ProcessGroup:AmazonLambdaFunctionName}`
   * * `{ProcessGroup:AmazonRegion}`
   * * `{ProcessGroup:ApacheConfigPath}`
   * * `{ProcessGroup:ApacheSparkMasterIpAddress}`
   * * `{ProcessGroup:AspDotNetCoreApplicationPath}`
   * * `{ProcessGroup:AzureHostName}`
   * * `{ProcessGroup:AzureSiteName}`
   * * `{ProcessGroup:CassandraClusterName}`
   * * `{ProcessGroup:CatalinaBase}`
   * * `{ProcessGroup:CatalinaHome}`
   * * `{ProcessGroup:CloudFoundryAppId}`
   * * `{ProcessGroup:CloudFoundryAppName}`
   * * `{ProcessGroup:CloudFoundryInstanceIndex}`
   * * `{ProcessGroup:CloudFoundrySpaceId}`
   * * `{ProcessGroup:CloudFoundrySpaceName}`
   * * `{ProcessGroup:ColdFusionJvmConfigFile}`
   * * `{ProcessGroup:ColdFusionServiceName}`
   * * `{ProcessGroup:CommandLineArgs}`
   * * `{ProcessGroup:DetectedName}`
   * * `{ProcessGroup:DotNetCommandPath}`
   * * `{ProcessGroup:DotNetCommand}`
   * * `{ProcessGroup:DotNetClusterId}`
   * * `{ProcessGroup:DotNetNodeId}`
   * * `{ProcessGroup:ElasticsearchClusterName}`
   * * `{ProcessGroup:ElasticsearchNodeName}`
   * * `{ProcessGroup:EquinoxConfigPath}`
   * * `{ProcessGroup:ExeName}`
   * * `{ProcessGroup:ExePath}`
   * * `{ProcessGroup:GlassFishDomainName}`
   * * `{ProcessGroup:GlassFishInstanceName}`
   * * `{ProcessGroup:GoogleAppEngineInstance}`
   * * `{ProcessGroup:GoogleAppEngineService}`
   * * `{ProcessGroup:GoogleCloudProject}`
   * * `{ProcessGroup:HybrisBinDirectory}`
   * * `{ProcessGroup:HybrisConfigDirectory}`
   * * `{ProcessGroup:HybrisDataDirectory}`
   * * `{ProcessGroup:IBMCicsRegion}`
   * * `{ProcessGroup:IBMCtgName}`
   * * `{ProcessGroup:IBMImsConnectRegion}`
   * * `{ProcessGroup:IBMImsControlRegion}`
   * * `{ProcessGroup:IBMImsMessageProcessingRegion}`
   * * `{ProcessGroup:IBMImsSoapGwName}`
   * * `{ProcessGroup:IBMIntegrationNodeName}`
   * * `{ProcessGroup:IBMIntegrationServerName}`
   * * `{ProcessGroup:IISAppPool}`
   * * `{ProcessGroup:IISRoleName}`
   * * `{ProcessGroup:JbossHome}`
   * * `{ProcessGroup:JbossMode}`
   * * `{ProcessGroup:JbossServerName}`
   * * `{ProcessGroup:JavaJarFile}`
   * * `{ProcessGroup:JavaJarPath}`
   * * `{ProcessGroup:JavaMainCLass}`
   * * `{ProcessGroup:KubernetesBasePodName}`
   * * `{ProcessGroup:KubernetesContainerName}`
   * * `{ProcessGroup:KubernetesFullPodName}`
   * * `{ProcessGroup:KubernetesNamespace}`
   * * `{ProcessGroup:KubernetesPodUid}`
   * * `{ProcessGroup:MssqlInstanceName}`
   * * `{ProcessGroup:NodeJsAppBaseDirectory}`
   * * `{ProcessGroup:NodeJsAppName}`
   * * `{ProcessGroup:NodeJsScriptName}`
   * * `{ProcessGroup:OracleSid}`
   * * `{ProcessGroup:PHPScriptPath}`
   * * `{ProcessGroup:PHPWorkingDirectory}`
   * * `{ProcessGroup:Ports}`
   * * `{ProcessGroup:RubyAppRootPath}`
   * * `{ProcessGroup:RubyScriptPath}`
   * * `{ProcessGroup:SoftwareAGInstallRoot}`
   * * `{ProcessGroup:SoftwareAGProductPropertyName}`
   * * `{ProcessGroup:SpringBootAppName}`
   * * `{ProcessGroup:SpringBootProfileName}`
   * * `{ProcessGroup:SpringBootStartupClass}`
   * * `{ProcessGroup:TIBCOBusinessWorksAppNodeName}`
   * * `{ProcessGroup:TIBCOBusinessWorksAppSpaceName}`
   * * `{ProcessGroup:TIBCOBusinessWorksCeAppName}`
   * * `{ProcessGroup:TIBCOBusinessWorksCeVersion}`
   * * `{ProcessGroup:TIBCOBusinessWorksDomainName}`
   * * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFilePath}`
   * * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFile}`
   * * `{ProcessGroup:TIBCOBusinessWorksHome}`
   * * `{ProcessGroup:VarnishInstanceName}`
   * * `{ProcessGroup:WebLogicClusterName}`
   * * `{ProcessGroup:WebLogicDomainName}`
   * * `{ProcessGroup:WebLogicHome}`
   * * `{ProcessGroup:WebLogicName}`
   * * `{ProcessGroup:WebSphereCellName}`
   * * `{ProcessGroup:WebSphereClusterName}`
   * * `{ProcessGroup:WebSphereNodeName}`
   * * `{ProcessGroup:WebSphereServerName}`
   * * `{ProcessGroup:ActorSystem}`
   * * `{Service:STGServerName}`
   * * `{Service:DatabaseHostName}`
   * * `{Service:DatabaseName}`
   * * `{Service:DatabaseVendor}`
   * * `{Service:DetectedName}`
   * * `{Service:EndpointPath}`
   * * `{Service:EndpointPathGatewayUrl}`
   * * `{Service:IIBApplicationName}`
   * * `{Service:MessageListenerClassName}`
   * * `{Service:Port}`
   * * `{Service:PublicDomainName}`
   * * `{Service:RemoteEndpoint}`
   * * `{Service:RemoteName}`
   * * `{Service:WebApplicationId}`
   * * `{Service:WebContextRoot}`
   * * `{Service:WebServerName}`
   * * `{Service:WebServiceNamespace}`
   * * `{Service:WebServiceName}`
   * * `{VmwareDatacenter:Name}`
   * * `{VmwareVm:Name}`
   */
  valueFormat?: string;

  /**
   * How to apply the tag to underlying entities:
   *
   * * `SERVICE_TO_PROCESS_GROUP_LIKE`: Apply to underlying process groups of matching services.
   * * `SERVICE_TO_HOST_LIKE`: Apply to underlying hosts of matching services.
   * * `PROCESS_GROUP_TO_HOST`: Apply to underlying hosts of matching process groups.
   * * `PROCESS_GROUP_TO_SERVICE`: Apply to all services provided by the process groups.
   * * `HOST_TO_PROCESS_GROUP_INSTANCE`: Apply to processes running on matching hosts.
   * *  `AZURE_TO_PG`: Apply to process groups connected to matching Azure entities.
   * * `AZURE_TO_SERVICE`: Apply to services provided by matching Azure entities.
   */
  propagationTypes?: (
    | "AZURE_TO_PG"
    | "AZURE_TO_SERVICE"
    | "HOST_TO_PROCESS_GROUP_INSTANCE"
    | "PROCESS_GROUP_TO_HOST"
    | "PROCESS_GROUP_TO_SERVICE"
    | "SERVICE_TO_HOST_LIKE"
    | "SERVICE_TO_PROCESS_GROUP_LIKE"
  )[];

  /**
   * A list of matching rules for the auto-tag.
   *
   * The tag applies only when **all** conditions are fulfilled.
   */
  conditions: EntityRuleEngineCondition[];
}

/**
 * Comparison for `AZURE_COMPUTE_MODE` attributes.
 */
export type AzureComputeModeComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "DEDICATED" | "SHARED";
};

/**
 * Comparison for `AZURE_SKU` attributes.
 */
export type AzureSkuComparision = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "BASIC" | "DYNAMIC" | "FREE" | "PREMIUM" | "SHARED" | "STANDARD";
};

/**
 * Comparison for `BITNESS` attributes.
 */
export type BitnessComparision = ComparisonBasic & { operator?: "EQUALS" | "EXISTS"; value?: "32" | "64" };

/**
 * Comparison for `CLOUD_TYPE` attributes.
 */
export type CloudTypeComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "AZURE" | "EC2" | "GOOGLE_CLOUD_PLATFORM" | "OPENSTACK" | "ORACLE" | "UNRECOGNIZED";
};

/**
* Defines how the matching is actually performed: what and how are we comparing. 

The actual set of fields and possible values of the **operator** field depend on the type of the comparison. Find the list of actual objects in the description of the **type** field or see [JSON models](https://dt-url.net/0b83s6z).
*/
export interface ComparisonBasic {
  /**
   * Operator of the comparison. You can reverse it by setting **negate** to `true`.
   *
   * Possible values depend on the **type** of the comparison. Find the list of actual models in the description of the **type** field and check the description of the model you need.
   */
  operator: string;

  /** The value to compare to. */
  value?: object;

  /** Reverses the comparison **operator**. For example it turns the **begins with** into **does not begin with**. */
  negate: boolean;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `STRING` -> StringComparison
   * * `INDEXED_NAME` -> IndexedNameComparison
   * * `INDEXED_STRING` -> IndexedStringComparison
   * * `INTEGER` -> IntegerComparison
   * * `SERVICE_TYPE` -> ServiceTypeComparison
   * * `PAAS_TYPE` -> PaasTypeComparison
   * * `CLOUD_TYPE` -> CloudTypeComparison
   * * `AZURE_SKU` -> AzureSkuComparision
   * * `AZURE_COMPUTE_MODE` -> AzureComputeModeComparison
   * * `ENTITY_ID` -> EntityIdComparison
   * * `SIMPLE_TECH` -> SimpleTechComparison
   * * `SIMPLE_HOST_TECH` -> SimpleHostTechComparison
   * * `SERVICE_TOPOLOGY` -> ServiceTopologyComparison
   * * `DATABASE_TOPOLOGY` -> DatabaseTopologyComparison
   * * `OS_TYPE` -> OsTypeComparison
   * * `HYPERVISOR_TYPE` -> HypervisorTypeComparision
   * * `IP_ADDRESS` -> IpAddressComparison
   * * `OS_ARCHITECTURE` -> OsArchitectureComparison
   * * `BITNESS` -> BitnessComparision
   * * `APPLICATION_TYPE` -> ApplicationTypeComparison
   * * `MOBILE_PLATFORM` -> MobilePlatformComparison
   * * `CUSTOM_APPLICATION_TYPE` -> CustomApplicationTypeComparison
   * * `DCRUM_DECODER_TYPE` -> DcrumDecoderComparison
   * * `SYNTHETIC_ENGINE_TYPE` -> SyntheticEngineTypeComparison
   * * `TAG` -> TagComparison
   * * `INDEXED_TAG` -> IndexedTagComparison
   */
  type:
    | "APPLICATION_TYPE"
    | "AZURE_COMPUTE_MODE"
    | "AZURE_SKU"
    | "BITNESS"
    | "CLOUD_TYPE"
    | "CUSTOM_APPLICATION_TYPE"
    | "DATABASE_TOPOLOGY"
    | "DCRUM_DECODER_TYPE"
    | "ENTITY_ID"
    | "HYPERVISOR_TYPE"
    | "INDEXED_NAME"
    | "INDEXED_STRING"
    | "INDEXED_TAG"
    | "INTEGER"
    | "IP_ADDRESS"
    | "MOBILE_PLATFORM"
    | "OS_ARCHITECTURE"
    | "OS_TYPE"
    | "PAAS_TYPE"
    | "SERVICE_TOPOLOGY"
    | "SERVICE_TYPE"
    | "SIMPLE_HOST_TECH"
    | "SIMPLE_TECH"
    | "STRING"
    | "SYNTHETIC_ENGINE_TYPE"
    | "TAG";
}

/**
* The key to identify the data we're matching. 

The actual set of fields and possible values depend on the type of the key. Find the list of actual objects in the description of the **type** field or see [JSON models](https://dt-url.net/0b83s6z).
*/
export interface ConditionKey {
  /** The attribute to be used for comparison. */
  attribute:
    | "APPMON_SERVER_NAME"
    | "APPMON_SYSTEM_PROFILE_NAME"
    | "AWS_ACCOUNT_ID"
    | "AWS_ACCOUNT_NAME"
    | "AWS_APPLICATION_LOAD_BALANCER_NAME"
    | "AWS_APPLICATION_LOAD_BALANCER_TAGS"
    | "AWS_AUTO_SCALING_GROUP_NAME"
    | "AWS_AUTO_SCALING_GROUP_TAGS"
    | "AWS_AVAILABILITY_ZONE_NAME"
    | "AWS_CLASSIC_LOAD_BALANCER_FRONTEND_PORTS"
    | "AWS_CLASSIC_LOAD_BALANCER_NAME"
    | "AWS_CLASSIC_LOAD_BALANCER_TAGS"
    | "AWS_NETWORK_LOAD_BALANCER_NAME"
    | "AWS_NETWORK_LOAD_BALANCER_TAGS"
    | "AWS_RELATIONAL_DATABASE_SERVICE_DB_NAME"
    | "AWS_RELATIONAL_DATABASE_SERVICE_ENDPOINT"
    | "AWS_RELATIONAL_DATABASE_SERVICE_ENGINE"
    | "AWS_RELATIONAL_DATABASE_SERVICE_INSTANCE_CLASS"
    | "AWS_RELATIONAL_DATABASE_SERVICE_NAME"
    | "AWS_RELATIONAL_DATABASE_SERVICE_PORT"
    | "AWS_RELATIONAL_DATABASE_SERVICE_TAGS"
    | "AZURE_ENTITY_NAME"
    | "AZURE_ENTITY_TAGS"
    | "AZURE_MGMT_GROUP_NAME"
    | "AZURE_MGMT_GROUP_UUID"
    | "AZURE_REGION_NAME"
    | "AZURE_SCALE_SET_NAME"
    | "AZURE_SUBSCRIPTION_NAME"
    | "AZURE_SUBSCRIPTION_UUID"
    | "AZURE_TENANT_NAME"
    | "AZURE_TENANT_UUID"
    | "AZURE_VM_NAME"
    | "BROWSER_MONITOR_NAME"
    | "BROWSER_MONITOR_TAGS"
    | "CLOUD_APPLICATION_LABELS"
    | "CLOUD_APPLICATION_NAME"
    | "CLOUD_APPLICATION_NAMESPACE_LABELS"
    | "CLOUD_APPLICATION_NAMESPACE_NAME"
    | "CLOUD_FOUNDRY_FOUNDATION_NAME"
    | "CLOUD_FOUNDRY_ORG_NAME"
    | "CUSTOM_APPLICATION_NAME"
    | "CUSTOM_APPLICATION_PLATFORM"
    | "CUSTOM_APPLICATION_TAGS"
    | "CUSTOM_APPLICATION_TYPE"
    | "CUSTOM_DEVICE_DETECTED_NAME"
    | "CUSTOM_DEVICE_DNS_ADDRESS"
    | "CUSTOM_DEVICE_GROUP_NAME"
    | "CUSTOM_DEVICE_GROUP_TAGS"
    | "CUSTOM_DEVICE_IP_ADDRESS"
    | "CUSTOM_DEVICE_METADATA"
    | "CUSTOM_DEVICE_NAME"
    | "CUSTOM_DEVICE_PORT"
    | "CUSTOM_DEVICE_TAGS"
    | "CUSTOM_DEVICE_TECHNOLOGY"
    | "DATA_CENTER_SERVICE_DECODER_TYPE"
    | "DATA_CENTER_SERVICE_IP_ADDRESS"
    | "DATA_CENTER_SERVICE_METADATA"
    | "DATA_CENTER_SERVICE_NAME"
    | "DATA_CENTER_SERVICE_PORT"
    | "DATA_CENTER_SERVICE_TAGS"
    | "DOCKER_CONTAINER_NAME"
    | "DOCKER_FULL_IMAGE_NAME"
    | "DOCKER_IMAGE_VERSION"
    | "DOCKER_STRIPPED_IMAGE_NAME"
    | "EC2_INSTANCE_AMI_ID"
    | "EC2_INSTANCE_AWS_INSTANCE_TYPE"
    | "EC2_INSTANCE_AWS_SECURITY_GROUP"
    | "EC2_INSTANCE_BEANSTALK_ENV_NAME"
    | "EC2_INSTANCE_ID"
    | "EC2_INSTANCE_NAME"
    | "EC2_INSTANCE_PRIVATE_HOST_NAME"
    | "EC2_INSTANCE_PUBLIC_HOST_NAME"
    | "EC2_INSTANCE_TAGS"
    | "ENTERPRISE_APPLICATION_DECODER_TYPE"
    | "ENTERPRISE_APPLICATION_IP_ADDRESS"
    | "ENTERPRISE_APPLICATION_METADATA"
    | "ENTERPRISE_APPLICATION_NAME"
    | "ENTERPRISE_APPLICATION_PORT"
    | "ENTERPRISE_APPLICATION_TAGS"
    | "ESXI_HOST_CLUSTER_NAME"
    | "ESXI_HOST_HARDWARE_MODEL"
    | "ESXI_HOST_HARDWARE_VENDOR"
    | "ESXI_HOST_NAME"
    | "ESXI_HOST_PRODUCT_NAME"
    | "ESXI_HOST_PRODUCT_VERSION"
    | "ESXI_HOST_TAGS"
    | "EXTERNAL_MONITOR_ENGINE_DESCRIPTION"
    | "EXTERNAL_MONITOR_ENGINE_NAME"
    | "EXTERNAL_MONITOR_ENGINE_TYPE"
    | "EXTERNAL_MONITOR_NAME"
    | "EXTERNAL_MONITOR_TAGS"
    | "GEOLOCATION_SITE_NAME"
    | "GOOGLE_CLOUD_PLATFORM_ZONE_NAME"
    | "GOOGLE_COMPUTE_INSTANCE_ID"
    | "GOOGLE_COMPUTE_INSTANCE_MACHINE_TYPE"
    | "GOOGLE_COMPUTE_INSTANCE_NAME"
    | "GOOGLE_COMPUTE_INSTANCE_PROJECT"
    | "GOOGLE_COMPUTE_INSTANCE_PROJECT_ID"
    | "GOOGLE_COMPUTE_INSTANCE_PUBLIC_IP_ADDRESSES"
    | "HOST_AIX_LOGICAL_CPU_COUNT"
    | "HOST_AIX_SIMULTANEOUS_THREADS"
    | "HOST_AIX_VIRTUAL_CPU_COUNT"
    | "HOST_ARCHITECTURE"
    | "HOST_AWS_NAME_TAG"
    | "HOST_AZURE_COMPUTE_MODE"
    | "HOST_AZURE_SKU"
    | "HOST_AZURE_WEB_APPLICATION_HOST_NAMES"
    | "HOST_AZURE_WEB_APPLICATION_SITE_NAMES"
    | "HOST_BITNESS"
    | "HOST_BOSH_AVAILABILITY_ZONE"
    | "HOST_BOSH_DEPLOYMENT_ID"
    | "HOST_BOSH_INSTANCE_ID"
    | "HOST_BOSH_INSTANCE_NAME"
    | "HOST_BOSH_NAME"
    | "HOST_BOSH_STEMCELL_VERSION"
    | "HOST_CLOUD_TYPE"
    | "HOST_CPU_CORES"
    | "HOST_CUSTOM_METADATA"
    | "HOST_DETECTED_NAME"
    | "HOST_GROUP_ID"
    | "HOST_GROUP_NAME"
    | "HOST_HYPERVISOR_TYPE"
    | "HOST_IP_ADDRESS"
    | "HOST_KUBERNETES_LABELS"
    | "HOST_LOGICAL_CPU_CORES"
    | "HOST_NAME"
    | "HOST_ONEAGENT_CUSTOM_HOST_NAME"
    | "HOST_OS_TYPE"
    | "HOST_OS_VERSION"
    | "HOST_PAAS_MEMORY_LIMIT"
    | "HOST_PAAS_TYPE"
    | "HOST_TAGS"
    | "HOST_TECHNOLOGY"
    | "HTTP_MONITOR_NAME"
    | "HTTP_MONITOR_TAGS"
    | "KUBERNETES_CLUSTER_NAME"
    | "KUBERNETES_NODE_NAME"
    | "MOBILE_APPLICATION_NAME"
    | "MOBILE_APPLICATION_PLATFORM"
    | "MOBILE_APPLICATION_TAGS"
    | "NAME_OF_COMPUTE_NODE"
    | "OPENSTACK_ACCOUNT_NAME"
    | "OPENSTACK_ACCOUNT_PROJECT_NAME"
    | "OPENSTACK_AVAILABILITY_ZONE_NAME"
    | "OPENSTACK_PROJECT_NAME"
    | "OPENSTACK_REGION_NAME"
    | "OPENSTACK_VM_INSTANCE_TYPE"
    | "OPENSTACK_VM_NAME"
    | "OPENSTACK_VM_SECURITY_GROUP"
    | "PROCESS_GROUP_AZURE_HOST_NAME"
    | "PROCESS_GROUP_AZURE_SITE_NAME"
    | "PROCESS_GROUP_CUSTOM_METADATA"
    | "PROCESS_GROUP_DETECTED_NAME"
    | "PROCESS_GROUP_ID"
    | "PROCESS_GROUP_LISTEN_PORT"
    | "PROCESS_GROUP_NAME"
    | "PROCESS_GROUP_PREDEFINED_METADATA"
    | "PROCESS_GROUP_TAGS"
    | "PROCESS_GROUP_TECHNOLOGY"
    | "PROCESS_GROUP_TECHNOLOGY_EDITION"
    | "PROCESS_GROUP_TECHNOLOGY_VERSION"
    | "QUEUE_NAME"
    | "QUEUE_TECHNOLOGY"
    | "QUEUE_VENDOR"
    | "SERVICE_AKKA_ACTOR_SYSTEM"
    | "SERVICE_CTG_SERVICE_NAME"
    | "SERVICE_DATABASE_HOST_NAME"
    | "SERVICE_DATABASE_NAME"
    | "SERVICE_DATABASE_TOPOLOGY"
    | "SERVICE_DATABASE_VENDOR"
    | "SERVICE_DETECTED_NAME"
    | "SERVICE_ESB_APPLICATION_NAME"
    | "SERVICE_IBM_CTG_GATEWAY_URL"
    | "SERVICE_IIB_APPLICATION_NAME"
    | "SERVICE_MESSAGING_LISTENER_CLASS_NAME"
    | "SERVICE_NAME"
    | "SERVICE_PORT"
    | "SERVICE_PUBLIC_DOMAIN_NAME"
    | "SERVICE_REMOTE_ENDPOINT"
    | "SERVICE_REMOTE_SERVICE_NAME"
    | "SERVICE_TAGS"
    | "SERVICE_TECHNOLOGY"
    | "SERVICE_TECHNOLOGY_EDITION"
    | "SERVICE_TECHNOLOGY_VERSION"
    | "SERVICE_TOPOLOGY"
    | "SERVICE_TYPE"
    | "SERVICE_WEB_APPLICATION_ID"
    | "SERVICE_WEB_CONTEXT_ROOT"
    | "SERVICE_WEB_SERVER_ENDPOINT"
    | "SERVICE_WEB_SERVER_NAME"
    | "SERVICE_WEB_SERVICE_NAME"
    | "SERVICE_WEB_SERVICE_NAMESPACE"
    | "VMWARE_DATACENTER_NAME"
    | "VMWARE_VM_NAME"
    | "WEB_APPLICATION_NAME"
    | "WEB_APPLICATION_NAME_PATTERN"
    | "WEB_APPLICATION_TAGS"
    | "WEB_APPLICATION_TYPE";

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `PROCESS_CUSTOM_METADATA_KEY` -> CustomProcessMetadataConditionKey
   * * `HOST_CUSTOM_METADATA_KEY` -> CustomHostMetadataConditionKey
   * * `PROCESS_PREDEFINED_METADATA_KEY` -> ProcessMetadataConditionKey
   * * `STRING` -> StringConditionKey
   * * `STATIC` -> StaticConditionKey
   */
  type?:
    | "HOST_CUSTOM_METADATA_KEY"
    | "PROCESS_CUSTOM_METADATA_KEY"
    | "PROCESS_PREDEFINED_METADATA_KEY"
    | "STATIC"
    | "STRING";
}

/**
 * Comparison for `CUSTOM_APPLICATION_TYPE` attributes.
 */
export type CustomApplicationTypeComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "AMAZON_ECHO" | "DESKTOP" | "EMBEDDED" | "IOT" | "MICROSOFT_HOLOLENS" | "UFO";
};

/**
 * The key for dynamic attributes of the `HOST_CUSTOM_METADATA_KEY` type.
 */
export type CustomHostMetadataConditionKey = ConditionKey & { dynamicKey?: CustomHostMetadataKey };

/**
* The key of the attribute, which need dynamic keys. 

Not applicable otherwise, as the attibute itself acts as a key.
*/
export interface CustomHostMetadataKey {
  /** The source of the custom metadata. */
  source: "ENVIRONMENT" | "GOOGLE_COMPUTE_ENGINE" | "PLUGIN";

  /** The actual key of the custom metadata. */
  key: string;
}

/**
 * The key for dynamic attributes of the `PROCESS_CUSTOM_METADATA_KEY` type.
 */
export type CustomProcessMetadataConditionKey = ConditionKey & { dynamicKey?: CustomProcessMetadataKey };

/**
* The key of the attribute, which need dynamic keys. 

Not applicable otherwise, as the attibute itself acts as a key.
*/
export interface CustomProcessMetadataKey {
  /** The source of the custom metadata. */
  source: "AGENT" | "CLOUD_FOUNDRY" | "ENVIRONMENT" | "GOOGLE_CLOUD" | "KUBERNETES" | "PLUGIN";

  /** The actual key of the custom metadata. */
  key: string;
}

/**
 * Comparison for `DATABASE_TOPOLOGY` attributes.
 */
export type DatabaseTopologyComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "CLUSTER" | "EMBEDDED" | "FAILOVER" | "IPC" | "LOAD_BALANCING" | "SINGLE_SERVER" | "UNSPECIFIED";
};

/**
 * Comparison for `DCRUM_DECODER_TYPE` attributes.
 */
export type DcrumDecoderComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?:
    | "ALL_OTHER"
    | "CITRIX_APPFLOW"
    | "CITRIX_ICA"
    | "CITRIX_ICA_OVER_SSL"
    | "DB2_DRDA"
    | "HTTP"
    | "HTTPS"
    | "HTTP_EXPRESS"
    | "INFORMIX"
    | "MYSQL"
    | "ORACLE"
    | "SAP_GUI"
    | "SAP_GUI_OVER_HTTP"
    | "SAP_GUI_OVER_HTTPS"
    | "SAP_HANA_DB"
    | "SAP_RFC"
    | "SSL"
    | "TDS";
};

/**
 * Comparison for `ENTITY_ID` attributes.
 */
export type EntityIdComparison = ComparisonBasic & { operator?: "EQUALS"; value?: string };

/**
 * A condition defines how to execute matching logic for an entity.
 */
export interface EntityRuleEngineCondition {
  /**
   * The key to identify the data we're matching.
   *
   * The actual set of fields and possible values depend on the type of the key. Find the list of actual objects in the description of the **type** field or see [JSON models](https://dt-url.net/0b83s6z).
   */
  key: ConditionKey;

  /**
   * Defines how the matching is actually performed: what and how are we comparing.
   *
   * The actual set of fields and possible values of the **operator** field depend on the type of the comparison. Find the list of actual objects in the description of the **type** field or see [JSON models](https://dt-url.net/0b83s6z).
   */
  comparisonInfo: ComparisonBasic;
}

/**
 * The entity-selector-based rule for auto tag usage. It allows tagging entities via an entity selector.
 */
export interface EntitySelectorBasedAutoTagRule {
  /** The rule is enabled (`true`) or disabled (`false`). */
  enabled?: boolean;

  /** The entity selector string, by which the entities are selected. */
  entitySelector: string;

  /**
   * The value of the entity-selector-based auto-tag. If specified, the tag is used in the `name:valueFormat` format.
   *
   * For example, you can extend the `Infrastructure` tag to `Infrastructure:Windows` and `Infrastructure:Linux`.
   */
  valueFormat?: string;
}

/**
 * Comparison for `HYPERVISOR_TYPE` attributes.
 */
export type HypervisorTypeComparision = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "AHV" | "HYPER_V" | "KVM" | "LPAR" | "QEMU" | "UNRECOGNIZED" | "VIRTUAL_BOX" | "VMWARE" | "WPAR" | "XEN";
};

/**
 * Comparison for `INDEXED_NAME` attributes.
 */
export type IndexedNameComparison = ComparisonBasic & { operator?: "CONTAINS" | "EQUALS" | "EXISTS"; value?: string };

/**
 * Comparison for `INDEXED_STRING` attributes.
 */
export type IndexedStringComparison = ComparisonBasic & { operator?: "EQUALS" | "EXISTS"; value?: string };

/**
 * Comparison for `INDEXED_TAG` attributes.
 */
export type IndexedTagComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS" | "TAG_KEY_EQUALS";
  value?: TagInfo;
};

/**
 * Comparison for `INTEGER` attributes.
 */
export type IntegerComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL" | "LOWER_THAN" | "LOWER_THAN_OR_EQUAL";
  value?: number;
};

/**
 * Comparison for `IP_ADDRESS` attributes.
 */
export type IpAddressComparison = ComparisonBasic & {
  operator?: "BEGINS_WITH" | "CONTAINS" | "ENDS_WITH" | "EQUALS" | "EXISTS" | "IS_IP_IN_RANGE" | "REGEX_MATCHES";
  value?: string;
  caseSensitive?: boolean;
};

/**
 * Comparison for `MOBILE_PLATFORM` attributes.
 */
export type MobilePlatformComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "ANDROID" | "IOS" | "LINUX" | "MAC_OS" | "OTHER" | "TVOS" | "WINDOWS";
};

/**
 * Comparison for `OS_ARCHITECTURE` attributes.
 */
export type OsArchitectureComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "ARM" | "IA64" | "PARISC" | "PPC" | "PPCLE" | "S390" | "SPARC" | "X86" | "ZOS";
};

/**
 * Comparison for `OS_TYPE` attributes.
 */
export type OsTypeComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "AIX" | "DARWIN" | "HPUX" | "LINUX" | "SOLARIS" | "WINDOWS" | "ZOS";
};

/**
 * Comparison for `PAAS_TYPE` attributes.
 */
export type PaasTypeComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?:
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
};

/**
 * The key for dynamic attributes of the `PROCESS_PREDEFINED_METADATA_KEY` type.
 */
export type ProcessMetadataConditionKey = ConditionKey & {
  dynamicKey?:
    | "AMAZON_ECR_IMAGE_ACCOUNT_ID"
    | "AMAZON_ECR_IMAGE_REGION"
    | "AMAZON_LAMBDA_FUNCTION_NAME"
    | "AMAZON_REGION"
    | "APACHE_CONFIG_PATH"
    | "APACHE_SPARK_MASTER_IP_ADDRESS"
    | "ASP_DOT_NET_CORE_APPLICATION_PATH"
    | "AWS_ECS_CLUSTER"
    | "AWS_ECS_CONTAINERNAME"
    | "AWS_ECS_FAMILY"
    | "AWS_ECS_REVISION"
    | "CASSANDRA_CLUSTER_NAME"
    | "CATALINA_BASE"
    | "CATALINA_HOME"
    | "CLOUD_FOUNDRY_APP_ID"
    | "CLOUD_FOUNDRY_APP_NAME"
    | "CLOUD_FOUNDRY_INSTANCE_INDEX"
    | "CLOUD_FOUNDRY_SPACE_ID"
    | "CLOUD_FOUNDRY_SPACE_NAME"
    | "COLDFUSION_JVM_CONFIG_FILE"
    | "COLDFUSION_SERVICE_NAME"
    | "COMMAND_LINE_ARGS"
    | "CONTAINER_ID"
    | "CONTAINER_IMAGE_NAME"
    | "CONTAINER_IMAGE_VERSION"
    | "DECLARATIVE_ID"
    | "DOTNET_COMMAND"
    | "DOTNET_COMMAND_PATH"
    | "DYNATRACE_CLUSTER_ID"
    | "DYNATRACE_NODE_ID"
    | "ELASTICSEARCH_CLUSTER_NAME"
    | "ELASTICSEARCH_NODE_NAME"
    | "EQUINOX_CONFIG_PATH"
    | "EXE_NAME"
    | "EXE_PATH"
    | "GLASS_FISH_DOMAIN_NAME"
    | "GLASS_FISH_INSTANCE_NAME"
    | "GOOGLE_APP_ENGINE_INSTANCE"
    | "GOOGLE_APP_ENGINE_SERVICE"
    | "GOOGLE_CLOUD_PROJECT"
    | "HYBRIS_BIN_DIRECTORY"
    | "HYBRIS_CONFIG_DIRECTORY"
    | "HYBRIS_DATA_DIRECTORY"
    | "IBM_CICS_REGION"
    | "IBM_CTG_NAME"
    | "IBM_IMS_CONNECT_REGION"
    | "IBM_IMS_CONTROL_REGION"
    | "IBM_IMS_MESSAGE_PROCESSING_REGION"
    | "IBM_IMS_SOAP_GW_NAME"
    | "IBM_INTEGRATION_NODE_NAME"
    | "IBM_INTEGRATION_SERVER_NAME"
    | "IIS_APP_POOL"
    | "IIS_ROLE_NAME"
    | "JAVA_JAR_FILE"
    | "JAVA_JAR_PATH"
    | "JAVA_MAIN_CLASS"
    | "JAVA_MAIN_MODULE"
    | "JBOSS_HOME"
    | "JBOSS_MODE"
    | "JBOSS_SERVER_NAME"
    | "KUBERNETES_BASE_POD_NAME"
    | "KUBERNETES_CONTAINER_NAME"
    | "KUBERNETES_FULL_POD_NAME"
    | "KUBERNETES_NAMESPACE"
    | "KUBERNETES_POD_UID"
    | "MSSQL_INSTANCE_NAME"
    | "NODE_JS_APP_BASE_DIRECTORY"
    | "NODE_JS_APP_NAME"
    | "NODE_JS_SCRIPT_NAME"
    | "ORACLE_SID"
    | "PG_ID_CALC_INPUT_KEY_LINKAGE"
    | "PHP_SCRIPT_PATH"
    | "PHP_WORKING_DIRECTORY"
    | "RUBY_APP_ROOT_PATH"
    | "RUBY_SCRIPT_PATH"
    | "RULE_RESULT"
    | "SOFTWAREAG_INSTALL_ROOT"
    | "SOFTWAREAG_PRODUCTPROPNAME"
    | "SPRINGBOOT_APP_NAME"
    | "SPRINGBOOT_PROFILE_NAME"
    | "SPRINGBOOT_STARTUP_CLASS"
    | "TIBCO_BUSINESSWORKS_CE_APP_NAME"
    | "TIBCO_BUSINESSWORKS_CE_VERSION"
    | "TIBCO_BUSINESS_WORKS_APP_NODE_NAME"
    | "TIBCO_BUSINESS_WORKS_APP_SPACE_NAME"
    | "TIBCO_BUSINESS_WORKS_DOMAIN_NAME"
    | "TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE"
    | "TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH"
    | "TIBCO_BUSINESS_WORKS_HOME"
    | "VARNISH_INSTANCE_NAME"
    | "WEBSPHERE_LIBERTY_SERVER_NAME"
    | "WEB_LOGIC_CLUSTER_NAME"
    | "WEB_LOGIC_DOMAIN_NAME"
    | "WEB_LOGIC_HOME"
    | "WEB_LOGIC_NAME"
    | "WEB_SPHERE_CELL_NAME"
    | "WEB_SPHERE_CLUSTER_NAME"
    | "WEB_SPHERE_NODE_NAME"
    | "WEB_SPHERE_SERVER_NAME";
};

/**
 * Comparison for `SERVICE_TOPOLOGY` attributes.
 */
export type ServiceTopologyComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "EXTERNAL_SERVICE" | "FULLY_MONITORED" | "OPAQUE_SERVICE";
};

/**
 * Comparison for `SERVICE_TYPE` attributes.
 */
export type ServiceTypeComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?:
    | "BACKGROUND_ACTIVITY"
    | "CICS_SERVICE"
    | "CUSTOM_SERVICE"
    | "DATABASE_SERVICE"
    | "ENTERPRISE_SERVICE_BUS_SERVICE"
    | "EXTERNAL"
    | "IBM_INTEGRATION_BUS_SERVICE"
    | "IMS_SERVICE"
    | "MESSAGING_SERVICE"
    | "QUEUE_LISTENER_SERVICE"
    | "RMI_SERVICE"
    | "RPC_SERVICE"
    | "WEB_REQUEST_SERVICE"
    | "WEB_SERVICE"
    | "ZOS_CONNECT";
};

/**
 * The value to compare to.
 */
export interface SimpleHostTech {
  /** Predefined technology, if technology is not predefined, then the verbatim type must be set */
  type?:
    | "APPARMOR"
    | "BOSH"
    | "BOSHBPM"
    | "CLOUDFOUNDRY"
    | "CONTAINERD"
    | "CRIO"
    | "DIEGO_CELL"
    | "DOCKER"
    | "GARDEN"
    | "GRSECURITY"
    | "KUBERNETES"
    | "OPENSHIFT"
    | "OPENSTACK_COMPUTE"
    | "OPENSTACK_CONTROLLER"
    | "SELINUX";

  /** Non-predefined technology, use for custom technologies. */
  verbatimType?: string;
}

/**
 * Comparison for `SIMPLE_HOST_TECH` attributes.
 */
export type SimpleHostTechComparison = ComparisonBasic & { operator?: "EQUALS" | "EXISTS"; value?: SimpleHostTech };

/**
 * The value to compare to.
 */
export interface SimpleTech {
  /** Predefined technology, if technology is not predefined, then the verbatim type must be set */
  type?:
    | "ACTIVE_MQ"
    | "ACTIVE_MQ_ARTEMIS"
    | "ADO_NET"
    | "AIX"
    | "AKKA"
    | "AMAZON_REDSHIFT"
    | "AMQP"
    | "APACHE_CAMEL"
    | "APACHE_CASSANDRA"
    | "APACHE_COUCH_DB"
    | "APACHE_DERBY"
    | "APACHE_HTTP_CLIENT_ASYNC"
    | "APACHE_HTTP_CLIENT_SYNC"
    | "APACHE_HTTP_SERVER"
    | "APACHE_KAFKA"
    | "APACHE_LOG4J"
    | "APACHE_SOLR"
    | "APACHE_STORM"
    | "APACHE_SYNAPSE"
    | "APACHE_TOMCAT"
    | "APPARMOR"
    | "APPLICATION_INSIGHTS_SDK"
    | "ASP_DOTNET"
    | "ASP_DOTNET_CORE"
    | "ASP_DOTNET_CORE_SIGNALR"
    | "ASP_DOTNET_SIGNALR"
    | "ASYNC_HTTP_CLIENT"
    | "AWS_LAMBDA"
    | "AWS_RDS"
    | "AWS_SERVICE"
    | "AXIS"
    | "AZURE_FUNCTIONS"
    | "AZURE_SERVICE_BUS"
    | "AZURE_SERVICE_FABRIC"
    | "AZURE_STORAGE"
    | "BOSHBPM"
    | "CITRIX"
    | "CITRIX_COMMON"
    | "CITRIX_DESKTOP_DELIVERY_CONTROLLERS"
    | "CITRIX_DIRECTOR"
    | "CITRIX_LICENSE_SERVER"
    | "CITRIX_PROVISIONING_SERVICES"
    | "CITRIX_STOREFRONT"
    | "CITRIX_VIRTUAL_DELIVERY_AGENT"
    | "CITRIX_WORKSPACE_ENVIRONMENT_MANAGEMENT"
    | "CITRIX_XEN"
    | "CLOUDFOUNDRY"
    | "CLOUDFOUNDRY_AUCTIONEER"
    | "CLOUDFOUNDRY_BOSH"
    | "CLOUDFOUNDRY_GOROUTER"
    | "COLDFUSION"
    | "CONFLUENT_KAFKA_CLIENT"
    | "CONTAINERD"
    | "CORE_DNS"
    | "COUCHBASE"
    | "CRIO"
    | "CXF"
    | "DATASTAX"
    | "DB2"
    | "DIEGO_CELL"
    | "DOCKER"
    | "DOTNET"
    | "DOTNET_REMOTING"
    | "ELASTIC_SEARCH"
    | "ENVOY"
    | "ERLANG"
    | "ETCD"
    | "F5_LTM"
    | "FSHARP"
    | "GARDEN"
    | "GLASSFISH"
    | "GO"
    | "GRAAL_TRUFFLE"
    | "GRPC"
    | "GRSECURITY"
    | "HADOOP"
    | "HADOOP_HDFS"
    | "HADOOP_YARN"
    | "HAPROXY"
    | "HEAT"
    | "HESSIAN"
    | "HORNET_Q"
    | "IBM_CICS_REGION"
    | "IBM_CICS_TRANSACTION_GATEWAY"
    | "IBM_IMS_CONNECT_REGION"
    | "IBM_IMS_CONTROL_REGION"
    | "IBM_IMS_MESSAGE_PROCESSING_REGION"
    | "IBM_IMS_SOAP_GATEWAY"
    | "IBM_INTEGRATION_BUS"
    | "IBM_MQ"
    | "IBM_MQ_CLIENT"
    | "IBM_WEBSHPRERE_APPLICATION_SERVER"
    | "IBM_WEBSHPRERE_LIBERTY"
    | "IBM_WEBSPHERE_APPLICATION_SERVER"
    | "IBM_WEBSPHERE_LIBERTY"
    | "IIS"
    | "IIS_APP_POOL"
    | "ISTIO"
    | "JAVA"
    | "JAX_WS"
    | "JBOSS"
    | "JBOSS_EAP"
    | "JDK_HTTP_SERVER"
    | "JERSEY"
    | "JETTY"
    | "JRUBY"
    | "JYTHON"
    | "KUBERNETES"
    | "LIBC"
    | "LIBVIRT"
    | "LINKERD"
    | "MARIADB"
    | "MEMCACHED"
    | "MICROSOFT_SQL_SERVER"
    | "MONGODB"
    | "MSSQL_CLIENT"
    | "MULE_ESB"
    | "MYSQL"
    | "MYSQL_CONNECTOR"
    | "NETFLIX_SERVO"
    | "NETTY"
    | "NGINX"
    | "NODE_JS"
    | "OK_HTTP_CLIENT"
    | "ONEAGENT_SDK"
    | "OPENCENSUS"
    | "OPENSHIFT"
    | "OPENSTACK_COMPUTE"
    | "OPENSTACK_CONTROLLER"
    | "OPENTELEMETRY"
    | "OPENTRACING"
    | "OPEN_LIBERTY"
    | "ORACLE_DATABASE"
    | "ORACLE_WEBLOGIC"
    | "OWIN"
    | "PERL"
    | "PHP"
    | "PHP_FPM"
    | "PLAY"
    | "POSTGRE_SQL"
    | "POSTGRE_SQL_DOTNET_DATA_PROVIDER"
    | "POWER_DNS"
    | "PROGRESS"
    | "PYTHON"
    | "QOS_LOGBACK"
    | "RABBIT_MQ"
    | "REACTOR_CORE"
    | "REDIS"
    | "RESTEASY"
    | "RESTLET"
    | "RIAK"
    | "RUBY"
    | "SAG_WEBMETHODS_IS"
    | "SAP"
    | "SAP_HANADB"
    | "SAP_HYBRIS"
    | "SAP_MAXDB"
    | "SAP_SYBASE"
    | "SCALA"
    | "SELINUX"
    | "SHAREPOINT"
    | "SPARK"
    | "SPRING"
    | "SQLITE"
    | "THRIFT"
    | "TIBCO"
    | "TIBCO_BUSINESS_WORKS"
    | "TIBCO_EMS"
    | "UNDERTOW_IO"
    | "VARNISH_CACHE"
    | "VIM2"
    | "VIRTUAL_MACHINE_KVM"
    | "VIRTUAL_MACHINE_QEMU"
    | "WILDFLY"
    | "WINDOWS_CONTAINERS"
    | "WINK"
    | "ZERO_MQ"
    | "ZOS_CONNECT";

  /** Non-predefined technology, use for custom technologies. */
  verbatimType?: string;
}

/**
 * Comparison for `SIMPLE_TECH` attributes.
 */
export type SimpleTechComparison = ComparisonBasic & { operator?: "EQUALS" | "EXISTS"; value?: SimpleTech };

/**
 * Key for attributes without dynamic key. Some fields are inherited from the parent `ConditionKey` model.
 */
export type StaticConditionKey = ConditionKey;

/**
 * Comparison for `STRING` attributes.
 */
export type StringComparison = ComparisonBasic & {
  operator?: "BEGINS_WITH" | "CONTAINS" | "ENDS_WITH" | "EQUALS" | "EXISTS" | "REGEX_MATCHES";
  value?: string;
  caseSensitive?: boolean;
};

/**
 * The key for dynamic attributes of the `STRING` type.
 */
export type StringConditionKey = ConditionKey & { dynamicKey?: string };

/**
 * Comparison for `SYNTHETIC_ENGINE_TYPE` attributes.
 */
export type SyntheticEngineTypeComparison = ComparisonBasic & {
  operator?: "EQUALS" | "EXISTS";
  value?: "CLASSIC" | "CUSTOM";
};

/**
 * Comparison for `TAG` attributes.
 */
export type TagComparison = ComparisonBasic & { operator?: "EQUALS" | "TAG_KEY_EQUALS"; value?: TagInfo };

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
* Environment-wide configuration of OneAgents auto-updates. 

Applies to all OneAgents connecting to the environment if their **setting** parameter is set to `INHERITED`. Otherwise, the host group or host level setting applies.
*/
export interface EnvironmentAutoUpdateConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The auto-update state of OneAgents connecting to the environment:
   *
   * * `ENABLED`: OneAgents automatically update to the most recent version.
   * * `DISABLED`: OneAgents update to the version specified in the **version** field.
   * OneAgents that connect to the environment use this configuration only when their **setting** parameter is set to `INHERITED`.
   * @example DISABLED
   */
  setting: "ENABLED" | "DISABLED";

  /**
   * The version to which the OneAgent must be updated.
   *
   * Specify the version in the `<major>.<minor>.<revision>` format (for example `1.181.0`) or `<major>.<minor>` format (for example `1.181`). You can fetch the list of available versions with the [GET available versions](https://dt-url.net/fo23rb5) call. If no suitable installer is found for the provided version or the value is set to `null`, OneAgent won't be updated.
   * Only applicable when the **setting** parameter is set to `DISABLED`.
   * @example 1.181.0
   */
  version?: string;

  /** Basic information about all configured maintenance windows */
  updateWindows?: UpdateWindowsConfig;
}

/**
 * Basic information about one maintenance window
 */
export interface UpdateWindow {
  /**
   * The name of maintenance window
   * @example Daily maintenance window
   */
  name?: string;

  /**
   * Identifier of maintenance window
   * @example vu9U3hXa3q0AAAABADdkeW5hdHJhY2Uuc2V0dGluZ3MuZGVwbG95bWVudC5tYW5h
   */
  id: string;
}

/**
 * Basic information about all configured maintenance windows
 */
export interface UpdateWindowsConfig {
  /** List of maintenance windows when the OneAgent update can start. If there is no value and update should be performed, the update will start at earliest convenience. */
  windows: UpdateWindow[];
}

/**
 * Configuration of the allowed beacon origins for CORS requests.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"allowedBeaconOrigins":[{"domainNameMatcher":"EQUALS","domainNamePattern":"dynatrace.com"}]}
 */
export interface AllowedBeaconOrigins {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** A list of allowed beacon origins for CORS requests. */
  allowedBeaconOrigins?: BeaconDomainPattern[];

  /**
   * Discard (`true`) or keep (`false`) beacons without the **Origin** HTTP header on the BeaconForwarder.
   *
   * If not set, `false` is used.
   */
  rejectBeaconsWithoutOriginHeader?: boolean;
}

/**
 * Allowed beacon origin for CORS requests.
 */
export interface BeaconDomainPattern {
  /** The matching operation for the **domainNamePattern**. */
  domainNameMatcher: "CONTAINS" | "ENDS_WITH" | "EQUALS" | "STARTS_WITH";

  /** The pattern of the allowed domain name. */
  domainNamePattern: string;
}

/**
 * The rule for the conditional naming.
 * @example {"id":"4e88530c-edec-4e31-9cb4-3f2c63abc2b7","type":"PROCESS_GROUP","nameFormat":"TestNameFormat","displayName":"TestRule","enabled":true,"rules":[{"key":{"attribute":"PROCESS_GROUP_TECHNOLOGY"},"comparisonInfo":{"type":"SIMPLE_TECH","operator":"EQUALS","value":{"type":"JAVA"},"negate":"false"}},{"key":{"attribute":"PROCESS_GROUP_PREDEFINED_METADATA","dynamicKey":"EXE_NAME","type":"PROCESS_PREDEFINED_METADATA_KEY"},"comparisonInfo":{"type":"STRING","operator":"CONTAINS","value":"test","negate":"false","caseSensitive":true}}]}
 */
export interface ConditionalNamingRule {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the naming rule.
   * @format uuid
   * @example 12345678-abcd-1234-abcd-1234567890ab
   */
  id?: string;

  /**
   * The type of Dynatrace entities to which the rule applies.
   * @example PROCESS_GROUP
   */
  type: "HOST" | "PROCESS_GROUP" | "SERVICE";

  /**
   * The name to be assigned to matching entities. You can use the following placeholders here:
   *
   * * `{AwsAutoScalingGroup:Name}`
   * * `{AwsAvailabilityZone:Name}`
   * * `{AwsElasticLoadBalancer:Name}`
   * * `{AwsRelationalDatabaseService:DBName}`
   * * `{AwsRelationalDatabaseService:Endpoint}`
   * * `{AwsRelationalDatabaseService:Engine}`
   * * `{AwsRelationalDatabaseService:InstanceClass}`
   * * `{AwsRelationalDatabaseService:Name}`
   * * `{AwsRelationalDatabaseService:Port}`
   * * `{AzureRegion:Name}`
   * * `{AzureScaleSet:Name}`
   * * `{AzureVm:Name}`
   * * `{CloudFoundryOrganization:Name}`
   * * `{CustomDevice:DetectedName}`
   * * `{CustomDevice:DnsName}`
   * * `{CustomDevice:IpAddress}`
   * * `{CustomDevice:Port}`
   * * `{DockerContainerGroupInstance:ContainerName}`
   * * `{DockerContainerGroupInstance:FullImageName}`
   * * `{DockerContainerGroupInstance:ImageVersion}`
   * * `{DockerContainerGroupInstance:StrippedImageName}`
   * * `{ESXIHost:HardwareModel}`
   * * `{ESXIHost:HardwareVendor}`
   * * `{ESXIHost:Name}`
   * * `{ESXIHost:ProductName}`
   * * `{ESXIHost:ProductVersion}`
   * * `{Ec2Instance:AmiId}`
   * * `{Ec2Instance:BeanstalkEnvironmentName}`
   * * `{Ec2Instance:InstanceId}`
   * * `{Ec2Instance:InstanceType}`
   * * `{Ec2Instance:LocalHostName}`
   * * `{Ec2Instance:Name}`
   * * `{Ec2Instance:PublicHostName}`
   * * `{Ec2Instance:SecurityGroup}`
   * * `{GoogleComputeInstance:Id}`
   * * `{GoogleComputeInstance:IpAddresses}`
   * * `{GoogleComputeInstance:MachineType}`
   * * `{GoogleComputeInstance:Name}`
   * * `{GoogleComputeInstance:ProjectId}`
   * * `{GoogleComputeInstance:Project}`
   * * `{Host:AWSNameTag}`
   * * `{Host:AixLogicalCpuCount}`
   * * `{Host:AzureHostName}`
   * * `{Host:AzureSiteName}`
   * * `{Host:BoshDeploymentId}`
   * * `{Host:BoshInstanceId}`
   * * `{Host:BoshInstanceName}`
   * * `{Host:BoshName}`
   * * `{Host:BoshStemcellVersion}`
   * * `{Host:CpuCores}`
   * * `{Host:DetectedName}`
   * * `{Host:Environment:AppName}`
   * * `{Host:Environment:BoshReleaseVersion}`
   * * `{Host:Environment:Environment}`
   * * `{Host:Environment:Link}`
   * * `{Host:Environment:Organization}`
   * * `{Host:Environment:Owner}`
   * * `{Host:Environment:Support}`
   * * `{Host:IpAddress}`
   * * `{Host:LogicalCpuCores}`
   * * `{Host:OneAgentCustomHostName}`
   * * `{Host:OperatingSystemVersion}`
   * * `{Host:PaasMemoryLimit}`
   * * `{HostGroup:Name}`
   * * `{KubernetesCluster:Name}`
   * * `{KubernetesNode:DetectedName}`
   * * `{OpenstackAvailabilityZone:Name}`
   * * `{OpenstackZone:Name}`
   * * `{OpenstackComputeNode:Name}`
   * * `{OpenstackProject:Name}`
   * * `{OpenstackVm:InstanceType}`
   * * `{OpenstackVm:Name}`
   * * `{OpenstackVm:SecurityGroup}`
   * * `{ProcessGroup:AmazonECRImageAccountId}`
   * * `{ProcessGroup:AmazonECRImageRegion}`
   * * `{ProcessGroup:AmazonECSCluster}`
   * * `{ProcessGroup:AmazonECSContainerName}`
   * * `{ProcessGroup:AmazonECSFamily}`
   * * `{ProcessGroup:AmazonECSRevision}`
   * * `{ProcessGroup:AmazonLambdaFunctionName}`
   * * `{ProcessGroup:AmazonRegion}`
   * * `{ProcessGroup:ApacheConfigPath}`
   * * `{ProcessGroup:ApacheSparkMasterIpAddress}`
   * * `{ProcessGroup:AspDotNetCoreApplicationPath}`
   * * `{ProcessGroup:AzureHostName}`
   * * `{ProcessGroup:AzureSiteName}`
   * * `{ProcessGroup:CassandraClusterName}`
   * * `{ProcessGroup:CatalinaBase}`
   * * `{ProcessGroup:CatalinaHome}`
   * * `{ProcessGroup:CloudFoundryAppId}`
   * * `{ProcessGroup:CloudFoundryAppName}`
   * * `{ProcessGroup:CloudFoundryInstanceIndex}`
   * * `{ProcessGroup:CloudFoundrySpaceId}`
   * * `{ProcessGroup:CloudFoundrySpaceName}`
   * * `{ProcessGroup:ColdFusionJvmConfigFile}`
   * * `{ProcessGroup:ColdFusionServiceName}`
   * * `{ProcessGroup:CommandLineArgs}`
   * * `{ProcessGroup:DetectedName}`
   * * `{ProcessGroup:DotNetCommandPath}`
   * * `{ProcessGroup:DotNetCommand}`
   * * `{ProcessGroup:DotNetClusterId}`
   * * `{ProcessGroup:DotNetNodeId}`
   * * `{ProcessGroup:ElasticsearchClusterName}`
   * * `{ProcessGroup:ElasticsearchNodeName}`
   * * `{ProcessGroup:EquinoxConfigPath}`
   * * `{ProcessGroup:ExeName}`
   * * `{ProcessGroup:ExePath}`
   * * `{ProcessGroup:GlassFishDomainName}`
   * * `{ProcessGroup:GlassFishInstanceName}`
   * * `{ProcessGroup:GoogleAppEngineInstance}`
   * * `{ProcessGroup:GoogleAppEngineService}`
   * * `{ProcessGroup:GoogleCloudProject}`
   * * `{ProcessGroup:HybrisBinDirectory}`
   * * `{ProcessGroup:HybrisConfigDirectory}`
   * * `{ProcessGroup:HybrisDataDirectory}`
   * * `{ProcessGroup:IBMCicsRegion}`
   * * `{ProcessGroup:IBMCtgName}`
   * * `{ProcessGroup:IBMImsConnectRegion}`
   * * `{ProcessGroup:IBMImsControlRegion}`
   * * `{ProcessGroup:IBMImsMessageProcessingRegion}`
   * * `{ProcessGroup:IBMImsSoapGwName}`
   * * `{ProcessGroup:IBMIntegrationNodeName}`
   * * `{ProcessGroup:IBMIntegrationServerName}`
   * * `{ProcessGroup:IISAppPool}`
   * * `{ProcessGroup:IISRoleName}`
   * * `{ProcessGroup:JbossHome}`
   * * `{ProcessGroup:JbossMode}`
   * * `{ProcessGroup:JbossServerName}`
   * * `{ProcessGroup:JavaJarFile}`
   * * `{ProcessGroup:JavaJarPath}`
   * * `{ProcessGroup:JavaMainCLass}`
   * * `{ProcessGroup:KubernetesBasePodName}`
   * * `{ProcessGroup:KubernetesContainerName}`
   * * `{ProcessGroup:KubernetesFullPodName}`
   * * `{ProcessGroup:KubernetesNamespace}`
   * * `{ProcessGroup:KubernetesPodUid}`
   * * `{ProcessGroup:MssqlInstanceName}`
   * * `{ProcessGroup:NodeJsAppBaseDirectory}`
   * * `{ProcessGroup:NodeJsAppName}`
   * * `{ProcessGroup:NodeJsScriptName}`
   * * `{ProcessGroup:OracleSid}`
   * * `{ProcessGroup:PHPScriptPath}`
   * * `{ProcessGroup:PHPWorkingDirectory}`
   * * `{ProcessGroup:Ports}`
   * * `{ProcessGroup:RubyAppRootPath}`
   * * `{ProcessGroup:RubyScriptPath}`
   * * `{ProcessGroup:SoftwareAGInstallRoot}`
   * * `{ProcessGroup:SoftwareAGProductPropertyName}`
   * * `{ProcessGroup:SpringBootAppName}`
   * * `{ProcessGroup:SpringBootProfileName}`
   * * `{ProcessGroup:SpringBootStartupClass}`
   * * `{ProcessGroup:TIBCOBusinessWorksAppNodeName}`
   * * `{ProcessGroup:TIBCOBusinessWorksAppSpaceName}`
   * * `{ProcessGroup:TIBCOBusinessWorksCeAppName}`
   * * `{ProcessGroup:TIBCOBusinessWorksCeVersion}`
   * * `{ProcessGroup:TIBCOBusinessWorksDomainName}`
   * * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFilePath}`
   * * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFile}`
   * * `{ProcessGroup:TIBCOBusinessWorksHome}`
   * * `{ProcessGroup:VarnishInstanceName}`
   * * `{ProcessGroup:WebLogicClusterName}`
   * * `{ProcessGroup:WebLogicDomainName}`
   * * `{ProcessGroup:WebLogicHome}`
   * * `{ProcessGroup:WebLogicName}`
   * * `{ProcessGroup:WebSphereCellName}`
   * * `{ProcessGroup:WebSphereClusterName}`
   * * `{ProcessGroup:WebSphereNodeName}`
   * * `{ProcessGroup:WebSphereServerName}`
   * * `{ProcessGroup:ActorSystem}`
   * * `{Service:STGServerName}`
   * * `{Service:DatabaseHostName}`
   * * `{Service:DatabaseName}`
   * * `{Service:DatabaseVendor}`
   * * `{Service:DetectedName}`
   * * `{Service:EndpointPath}`
   * * `{Service:EndpointPathGatewayUrl}`
   * * `{Service:IIBApplicationName}`
   * * `{Service:MessageListenerClassName}`
   * * `{Service:Port}`
   * * `{Service:PublicDomainName}`
   * * `{Service:RemoteEndpoint}`
   * * `{Service:RemoteName}`
   * * `{Service:WebApplicationId}`
   * * `{Service:WebContextRoot}`
   * * `{Service:WebServerName}`
   * * `{Service:WebServiceNamespace}`
   * * `{Service:WebServiceName}`
   * * `{VmwareDatacenter:Name}`
   * * `{VmwareVm:Name}`
   * @example Host with {Host:CpuCores} cores
   */
  nameFormat: string;

  /**
   * The name of the rule
   * @example Host Naming Rule using Cores
   */
  displayName: string;

  /** The rule is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * A list of matching conditions of the rule.
   *
   * The rule applies only if **all** conditions are fulfilled.
   */
  rules: EntityRuleEngineCondition[];
}

/**
 * The configuration of content resources.
 */
export interface ContentResources {
  /**
   * An ordered list of manually added content providers.
   *
   *  Rules are evaluated from top to bottom; the first matching rules applies.
   */
  resourceProviders?: ResourceProvider[];

  /**
   * An ordered list of resource URL cleanup rules.
   *
   *  Rules are evaluated from top to bottom; the first matching rules applies.
   */
  resourceUrlCleanupRules?: ResourceUrlCleanupRule[];

  /**
   * An ordered list of manually defined resource types.
   *
   *  Rules are evaluated from top to bottom; the first matching rules applies.
   */
  resourceTypes?: ResourceType[];
}

/**
 * A rule for the content provider.
 */
export interface ResourceProvider {
  /** The name of the provider. */
  resourceName: string;

  /** The type of the provider. */
  resourceType: "CDN_RESOURCES" | "FIRST_PARTY_RESOURCES" | "THIRD_PARTY_RESOURCES";

  /** The URL of the provider's icon. */
  brandIconUrl?: string;

  /** A list of domain patterns of the provider. */
  domainNamePatterns: string[];
}

/**
 * A rule for the resource type.
 */
export interface ResourceType {
  /** The regular expression to detect the resource. */
  regularExpression: string;

  /** The primary type of the resource. */
  primaryResourceType: "CSS" | "IMAGE" | "OTHER" | "SCRIPT";

  /** The secondary type of the resource. */
  secondaryResourceType?: string;
}

/**
 * A rule for the URL cleanup rule.
 */
export interface ResourceUrlCleanupRule {
  /** The name of the rule. */
  resourceName: string;

  /** The pattern (regular expression) to look for. */
  regularExpression: string;

  /** The text to replace the found pattern with. */
  replaceWith: string;
}

export type AzureCertificateConfig = ExternalVaultConfig & {
  tenantId?: string;
  clientId?: string;
  certificate?: string;
};

export type AzureClientSecretConfig = ExternalVaultConfig & {
  tenantId?: string;
  clientId?: string;
  clientSecret?: string;
};

/**
 * Keeps information about credential's usage.
 */
export interface CredentialUsageHandler {
  /** Type of usage. */
  type?: string;

  /**
   * The number of uses.
   * @format int32
   */
  count?: number;
}

/**
 * A list of credentials sets for Synthetic monitors.
 * @example {"credentials":[{"name":"Sample username-password credentials","id":"CREDENTIALS_VAULT-E80203F993472E6D","type":"USERNAME_PASSWORD","description":"Sample credentials for demo purposes","owner":"admin","ownerAccessOnly":"true","scope":"SYNTHETIC","credentialUsageSummary":[{"HTTP_MONITOR":4}]},{"name":"Sample certificate credentials","id":"CREDENTIALS_VAULT-842DEF439999E15B","type":"CERTIFICATE","description":"Sample credentials for demo purposes","owner":"John.Doe@domain.com","ownerAccessOnly":"true","scope":"EXTENSION","credentialUsageSummary":[]},{"name":"Sample token credentials","id":"CREDENTIALS_VAULT-854345639999E15B","type":"TOKEN","description":"Sample token for demo purposes","owner":"John.Doe@domain.com","ownerAccessOnly":"true","scope":"SYNTHETIC","credentialUsageSummary":[{"HTTP_MONITOR":4,"BROWSER_MONITOR":11}]}]}
 */
export interface CredentialsList {
  /** A list of credentials sets for Synthetic monitors. */
  credentials: CredentialsResponseElement[];
}

/**
 * Metadata of the credentials set.
 * @example {"name":"Sample username-password credentials","id":"CREDENTIALS_VAULT-C43F2C2E6395AD23","type":"USERNAME_PASSWORD","description":"Sample credentials for demo purposes.","owner":"user@domain.com","ownerAccessOnly":"true","scope":"SYNTHETIC","externalVault":{"sourceAuthMethod":"HASHICORP_VAULT_APPROLE","vaultUrl":"https://vault-cluster.vault.fb17d2fc-be92-4230-afa2-91dbfda3cbad.aws.hashicorp.cloud:8200","usernameSecretName":"username","passwordSecretName":"password","pathToCredentials":"kv/credentials","roleId":"00e4858c-ec33-bc99-4e7e-34de6967de6c","secretId":"CREDENTIALS_VAULT-XXXXXXXXXXXXXXXX","vaultNamespace":"admin"},"credentialUsageSummary":[{"HTTP_MONITOR":3,"BROWSER_MONITOR":2}]}
 */
export interface CredentialsResponseElement {
  /** The name of the credentials set. */
  name: string;

  /** The ID of the credentials set. */
  id?: string;

  /** The type of the credentials set. */
  type: "CERTIFICATE" | "PUBLIC_CERTIFICATE" | "TOKEN" | "UNKNOWN" | "USERNAME_PASSWORD";

  /** A short description of the credentials set. */
  description: string;

  /** The owner of the credential (user for which used API token was created). */
  owner: string;

  /** Flag indicating that this credential is visible only to the owner. */
  ownerAccessOnly: boolean;

  /** The scope of the credentials set. */
  scope?: "ALL" | "EXTENSION" | "SYNTHETIC";

  /** Configuration for external vault synchronization for username and password credentials. */
  externalVault?: ExternalVaultConfig;

  /** The list contains summary data related to the use of credentials. */
  credentialUsageSummary: CredentialUsageHandler[];
}

/**
 * Configuration for external vault synchronization for username and password credentials.
 */
export interface ExternalVaultConfig {
  type?:
    | "AZURE_KEY_VAULT_CERTIFICATE"
    | "AZURE_KEY_VAULT_CLIENT_SECRET"
    | "HASHICORP_VAULT_APPROLE"
    | "HASHICORP_VAULT_CERTIFICATE";
  vaultUrl?: string;
  usernameSecretName?: string;
  passwordSecretName?: string;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `HASHICORP_VAULT_APPROLE` -> HashicorpApproleConfig
   * * `HASHICORP_VAULT_CERTIFICATE` -> HashicorpCertificateConfig
   * * `AZURE_KEY_VAULT_CLIENT_SECRET` -> AzureClientSecretConfig
   * * `AZURE_KEY_VAULT_CERTIFICATE` -> AzureCertificateConfig
   */
  sourceAuthMethod:
    | "AZURE_KEY_VAULT_CERTIFICATE"
    | "AZURE_KEY_VAULT_CLIENT_SECRET"
    | "HASHICORP_VAULT_APPROLE"
    | "HASHICORP_VAULT_CERTIFICATE";
}

export type HashicorpApproleConfig = ExternalVaultConfig & {
  pathToCredentials?: string;
  roleId?: string;
  secretId?: string;
  vaultNamespace?: string;
};

export type HashicorpCertificateConfig = ExternalVaultConfig & { pathToCredentials?: string; certificate?: string };

/**
 * A credentials set of the `CERTIFICATE` type.
 */
export type CertificateCredentials = Credentials & {
  certificate?: string;
  password?: string;
  certificateFormat?: "PEM" | "PKCS12" | "UNKNOWN";
};

/**
* A set of credentials for synthetic monitors. 

The actual set of fields depends on the type of credentials. Find the list of actual objects in the description of the **type** field or see [Credential vault API - JSON models](https://dt-url.net/2sa3sen).
* @example {"name":"Sample credentials","type":"USERNAME_PASSWORD","description":"Sample set of credentials for API documentation","user":"john.smith","password":"1234abcd","ownerAccessOnly":"true","scope":"SYNTHETIC"}
*/
export interface Credentials {
  /** The name of the credentials set. */
  name: string;

  /** The ID of the credentials set. */
  id?: string;

  /** A short description of the credentials set. */
  description?: string;

  /** The credentials set is available to every user (`false`) or to owner only (`true`). */
  ownerAccessOnly?: boolean;

  /** The scope of the credentials set. */
  scope: "ALL" | "EXTENSION" | "SYNTHETIC";

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `CERTIFICATE` -> CertificateCredentials
   * * `PUBLIC_CERTIFICATE` -> PublicCertificateCredentials
   * * `USERNAME_PASSWORD` -> UserPasswordCredentials
   * * `TOKEN` -> TokenCredentials
   */
  type?: "CERTIFICATE" | "PUBLIC_CERTIFICATE" | "TOKEN" | "USERNAME_PASSWORD";
}

/**
 * Information for synchronization credentials with external vault
 * @example {"name":"Sample username-password credentials synchronized with Hashicorp vault","id":"CREDENTIALS_VAULT-C43F2C2E6395AD23","type":"USERNAME_PASSWORD","description":"Sample credentials for demo purposes.","owner":"user@domain.com","ownerAccessOnly":"true","scope":"SYNTHETIC","externalVault":{"sourceAuthMethod":"HASHICORP_VAULT_APPROLE","vaultUrl":"https://vault-cluster.vault.fb17d2fc-be92-4230-afa2-91dbfda3cbad.aws.hashicorp.cloud:8200","usernameSecretName":"username","passwordSecretName":"password","pathToCredentials":"kv/credentials","roleId":"00e4858c-ec33-bc99-4e7e-34de6967de6c","secretId":"CREDENTIALS_VAULT-XXXXXXXXXXXXXXXX","vaultNamespace":"admin"}}
 */
export interface ExternalVault {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `HASHICORP_VAULT_APPROLE` -> HashicorpApprole
   * * `HASHICORP_VAULT_CERTIFICATE` -> HashicorpCertificate
   * * `AZURE_KEY_VAULT_CLIENT_SECRET` -> AzureClientSecret
   * * `AZURE_KEY_VAULT_CERTIFICATE` -> AzureCertificate
   */
  sourceAuthMethod:
    | "AZURE_KEY_VAULT_CERTIFICATE"
    | "AZURE_KEY_VAULT_CLIENT_SECRET"
    | "HASHICORP_VAULT_APPROLE"
    | "HASHICORP_VAULT_CERTIFICATE";

  /** External vault URL. */
  vaultUrl: string;

  /** The name of the secret saved in external vault where username is stored. */
  usernameSecretName: string;

  /** The name of the secret saved in external vault where password is stored. */
  passwordSecretName: string;
}

/**
 * A credentials set of the `PUBLIC_CERTIFICATE` type.
 */
export type PublicCertificateCredentials = Credentials & {
  certificate?: string;
  password?: string;
  certificateFormat?: "PEM" | "PKCS12" | "UNKNOWN";
};

/**
 * A credentials set of the `TOKEN` type.
 */
export type TokenCredentials = Credentials & { token?: string };

/**
 * A credentials set of the `USERNAME_PASSWORD` type.
 */
export type UserPasswordCredentials = Credentials & { user?: string; password?: string; externalVault?: ExternalVault };

/**
 * @example {"name":"CustomService","enabled":true,"rules":[{"enabled":true,"className":"com.your.company.ClassName","methodRules":[{"methodName":"AMethod","argumentTypes":["java.lang.String"],"returnType":"void"}]}],"queueEntryPoint":false}
 */
export interface CustomService {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the custom service.
   * @format uuid
   */
  id?: string;

  /** The name of the custom service, displayed in the UI. */
  name: string;

  /**
   * The order string. Sorting custom services alphabetically by their order string determines their relative ordering.
   *
   * Typically this is managed by Dynatrace internally and will not be present in GET responses.
   */
  order?: string;

  /** Custom service enabled/disabled. */
  enabled: boolean;

  /** The list of rules defining the custom service. */
  rules: DetectionRule[];

  /**
   * The queue entry point flag.
   *
   * Set to `true` for custom messaging services.
   */
  queueEntryPoint: boolean;

  /** The queue entry point type.. */
  queueEntryPointType?: "IBM_MQ" | "JMS" | "KAFKA" | "MSMQ" | "RABBIT_MQ";

  /** The list of process groups the custom service should belong to. */
  processGroups?: string[];
}

export interface DetectionRule {
  /**
   * The ID of the detection rule.
   * @format uuid
   */
  id?: string;

  /** Rule enabled/disabled. */
  enabled: boolean;

  /**
   * The PHP file containing the class or methods to instrument.
   *
   * Required for PHP custom service.
   *  Not applicable to Java and .NET.
   */
  fileName?: string;

  /** Matcher applying to the file name. Default value is `ENDS_WITH` (if applicable). */
  fileNameMatcher?: "ENDS_WITH" | "EQUALS" | "STARTS_WITH";

  /**
   * The fully qualified class or interface to instrument.
   *
   * Required for Java and .NET custom services.
   *  Not applicable to PHP.
   */
  className?: string;

  /** Matcher applying to the class name. `STARTS_WITH` can only be used if there is at least one annotation defined. Default value is `EQUALS`. */
  matcher?: "ENDS_WITH" | "EQUALS" | "STARTS_WITH";

  /** List of methods to instrument. */
  methodRules: MethodRule[];

  /**
   * Additional annotations filter of the rule.
   *
   * Only classes where all listed annotations are available in the class itself or any of its superclasses are instrumented.
   * Not applicable to PHP.
   */
  annotations?: string[];
}

export interface MethodRule {
  /**
   * The ID of the method rule.
   * @format uuid
   */
  id?: string;

  /** The method to instrument. */
  methodName: string;

  /** Fully qualified types of argument the method expects. */
  argumentTypes?: string[];

  /** Fully qualified type the method returns. */
  returnType: string;
}

/**
 * A list of short representations of dashboards.
 * @example {"dashboards":[{"id":"d6740373-ff26-4681-b95f-fd5b858c97f7","name":"Home dashboard","owner":"admin"},{"id":"54b34dbb-2ae7-4c27-9dbc-90a4f4c68b10","name":"Databases","owner":"viewer"},{"id":"8525b0bf-e33c-4a92-a534-9dedc1391e10","name":"Business value","owner":"rocks"}]}
 */
export interface DashboardList {
  /** A list of short representations of dashboards. */
  dashboards: DashboardStub[];
}

/**
 * A short representation of a dashboard.
 */
export interface DashboardStub {
  /** The ID of the dashboard. */
  id: string;

  /** The name of the dashboard. */
  name?: string;

  /** The owner of the dashboard. */
  owner?: string;
}

/**
* Configuration of a tile with an assigned Dynatrace entity. 

An example is the Bounce rate tile, showing the data from an assigned application.
*/
export type AssignedEntitiesTile = Tile & { assignedEntities?: string[] };

/**
* Configuration of a tile with an assigned Dynatrace entity and an assigned metric. 

An example is the Worldmap tile, showing the data from an assigned performance or behavior metric of an assigned application.
*/
export type AssignedEntitiesWithMetricTile = Tile & { assignedEntities?: string[]; metric?: string };

/**
 * Additional metadata for charted metric.
 */
export interface CustomChartingItemMetadataConfig {
  /**
   * The timestamp of the last metadata modification, in UTC milliseconds.
   * @format int64
   */
  lastModified?: number;

  /** The color of the metric in the chart, hex format. */
  customColor: string;
}

/**
 * Configuration of a custom chart tile.
 */
export type CustomChartingTile = Tile & { filterConfig?: CustomFilterConfig };

/**
 * Configuration of a custom chart.
 */
export interface CustomFilterChartConfig {
  /** Defines if a legend should be shown. */
  legendShown?: boolean;

  /** The type of the chart. */
  type: "PIE" | "SINGLE_VALUE" | "TIMESERIES" | "TOP_LIST";

  /** A list of charted metrics. */
  series: CustomFilterChartSeriesConfig[];

  /** Additional information about charted metric. */
  resultMetadata: Record<string, CustomChartingItemMetadataConfig>;

  /** The optional custom y-axis limits. */
  axisLimits?: Record<string, number>;

  /** The custom unit for the left Y-axis. */
  leftAxisCustomUnit?:
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

  /** The custom unit for the right Y-axis. */
  rightAxisCustomUnit?:
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
}

/**
 * Configuration of a charted metric.
 */
export interface CustomFilterChartSeriesConfig {
  /** The name of the charted metric. */
  metric: string;

  /** The charted aggregation of the metric. */
  aggregation:
    | "AVG"
    | "COUNT"
    | "DISTINCT"
    | "FASTEST10PERCENT"
    | "MAX"
    | "MEDIAN"
    | "MIN"
    | "NONE"
    | "OF_INTEREST_RATIO"
    | "OTHER_RATIO"
    | "PERCENTILE"
    | "PER_MIN"
    | "SLOWEST10PERCENT"
    | "SLOWEST5PERCENT"
    | "SUM"
    | "SUM_DIMENSIONS";

  /**
   * The charted percentile.
   *
   *  Only applicable if the **aggregation** is set to `PERCENTILE`.
   * @format int64
   */
  percentile?: number;

  /** The visualization of the timeseries chart. */
  type: "AREA" | "BAR" | "LINE";

  /** The type of the Dynatrace entity that delivered the charted metric. */
  entityType: string;

  /** Configuration of the charted metric splitting. */
  dimensions: CustomFilterChartSeriesDimensionConfig[];

  /** Sort ascending (`true`) or descending (`false`).  */
  sortAscending?: boolean;
  sortColumn?: boolean;
  aggregationRate?: "HOUR" | "MINUTE" | "SECOND" | "TOTAL";
}

/**
 * Configuration of the charted metric splitting.
 */
export interface CustomFilterChartSeriesDimensionConfig {
  /** The ID of the dimension by which the metric is split. */
  id: string;

  /** The name of the dimension by which the metric is split. */
  name?: string;

  /** The splitting value. */
  values: string[];
  entityDimension?: boolean;
}

/**
 * Configuration of the custom filter of a tile.
 */
export interface CustomFilterConfig {
  /**
   * The type of the filter.
   *
   *  It shows to which entity the filter belongs.
   *  Custom charts have the `MIXED` type.
   */
  type:
    | "ALB"
    | "APPLICATION"
    | "APPLICATION_METHOD"
    | "APPMON"
    | "ASG"
    | "AWS_CREDENTIALS"
    | "AWS_CUSTOM_SERVICE"
    | "AWS_LAMBDA_FUNCTION"
    | "CLOUD_APPLICATION"
    | "CLOUD_APPLICATION_INSTANCE"
    | "CLOUD_APPLICATION_NAMESPACE"
    | "CONTAINER_GROUP_INSTANCE"
    | "CUSTOM_APPLICATION"
    | "CUSTOM_DEVICES"
    | "CUSTOM_SERVICES"
    | "DATABASE"
    | "DATABASE_KEY_REQUEST"
    | "DCRUM_APPLICATION"
    | "DCRUM_ENTITY"
    | "DYNAMO_DB"
    | "EBS"
    | "EC2"
    | "ELB"
    | "ENVIRONMENT"
    | "ESXI"
    | "EXTERNAL_SYNTHETIC_TEST"
    | "GLOBAL_BACKGROUND_ACTIVITY"
    | "HOST"
    | "IOT"
    | "KUBERNETES_CLUSTER"
    | "KUBERNETES_NODE"
    | "MDA_SERVICE"
    | "MIXED"
    | "MOBILE_APPLICATION"
    | "MONITORED_ENTITY"
    | "NLB"
    | "PG_BACKGROUND_ACTIVITY"
    | "PROBLEM"
    | "PROCESS_GROUP_INSTANCE"
    | "RDS"
    | "REMOTE_PLUGIN"
    | "SERVICE"
    | "SERVICE_KEY_REQUEST"
    | "SYNTHETIC_BROWSER_MONITOR"
    | "SYNTHETIC_HTTPCHECK"
    | "SYNTHETIC_HTTPCHECK_STEP"
    | "SYNTHETIC_LOCATION"
    | "SYNTHETIC_TEST"
    | "SYNTHETIC_TEST_STEP"
    | "UI_ENTITY"
    | "VIRTUAL_MACHINE"
    | "WEB_CHECK";

  /** The name of the tile, set by user */
  customName: string;

  /** The default name of the tile */
  defaultName: string;

  /** Configuration of a custom chart. */
  chartConfig: CustomFilterChartConfig;

  /** A list of filters, applied to specific entity types. */
  filtersPerEntityType: Record<string, Record<string, string[]>>;
}

/**
 * Configuration of a dashboard.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"dashboardMetadata":{"name":"Example Dashboard","owner":"Example Owner","shared":true,"dashboardFilter":{"timeframe":"l_72_HOURS","managementZone":{"id":"3438779970106539862","name":"Example Management Zone"}},"dynamicFilters":{"filters":["SERVICE_TYPE"],"tagSuggestionTypes":["HOST_LIKE"]}},"tiles":[{"name":"Hosts","tileType":"HEADER","configured":true,"bounds":{"top":0,"left":0,"width":304,"height":38},"tileFilter":{}},{"name":"Applications","tileType":"HEADER","configured":true,"bounds":{"top":0,"left":304,"width":304,"height":38},"tileFilter":{}},{"name":"Host health","tileType":"HOSTS","configured":true,"bounds":{"top":38,"left":0,"width":304,"height":304},"tileFilter":{"managementZone":{"id":"3438779970106539862","name":"Example Management Zone"}},"chartVisible":true},{"name":"Application health","tileType":"APPLICATIONS","configured":true,"bounds":{"top":38,"left":304,"width":304,"height":304},"tileFilter":{"managementZone":{"id":"3438779970106539862","name":"Example Management Zone"}},"chartVisible":true}]}
 */
export interface Dashboard {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The ID of the dashboard. */
  id?: string;

  /** Parameters of a dashboard. */
  dashboardMetadata: DashboardMetadata;

  /** The list of tiles on the dashboard. */
  tiles: Tile[];
}

/**
 * Filters, applied to a dashboard.
 */
export interface DashboardFilter {
  /** The default timeframe of the dashboard. */
  timeframe?: string;

  /** The short representation of a Dynatrace entity. */
  managementZone?: EntityShortRepresentation;
}

/**
 * Parameters of a dashboard.
 */
export interface DashboardMetadata {
  /** The name of the dashboard. */
  name: string;

  /** The dashboard is shared (`true`) or private (`false`). */
  shared?: boolean;

  /** The owner of the dashboard. */
  owner: string;

  /** Filters, applied to a dashboard. */
  dashboardFilter?: DashboardFilter;

  /** A set of tags assigned to the dashboard. */
  tags?: string[];

  /** The dashboard is a preset (`true`) or a custom (`false`) dashboard. */
  preset?: boolean;

  /** Dashboard filter configuration of a dashboard. */
  dynamicFilters?: DynamicFilters;
}

/**
 * Dashboard filter configuration of a dashboard.
 */
export interface DynamicFilters {
  /**
   * A set of all possible global dashboard filters that can be applied to a dashboard
   *
   * Currently supported values are:
   * 	OS_TYPE,
   * 	SERVICE_TYPE,
   * 	DEPLOYMENT_TYPE,
   * 	APPLICATION_INJECTION_TYPE,
   * 	PAAS_VENDOR_TYPE,
   * 	DATABASE_VENDOR,
   * 	HOST_VIRTUALIZATION_TYPE,
   * 	HOST_MONITORING_MODE,
   * 	KUBERNETES_CLUSTER,
   * 	RELATED_CLOUD_APPLICATION,
   * 	RELATED_NAMESPACE,
   * 	SERVICE_TAG_KEY:<tagname>,
   * 	HOST_TAG_KEY:<tagname>,
   * 	APPLICATION_TAG_KEY:<tagname>,
   * 	PROCESS_GROUP_TAG_KEY:<tagname>,
   * 	PROCESS_GROUP_INSTANCE_TAG_KEY:<tagname>
   */
  filters: string[];

  /**
   * A set of entities applied for tag filter suggestions. You can fetch the list of possible values with the [GET all entity types](https://dt-url.net/dw03s7h)request.
   *
   * Only applicable if the **filters** set includes `TAG_KEY:<tagname>`.
   */
  tagSuggestionTypes?: string[];
}

/**
* Configuration of a tile with the built-in custom filter. 

An example is the Service health tile, which may use a custom timeframe.
*/
export type FilterableEntityTile = Tile & { filterConfig?: CustomFilterConfig; chartVisible?: boolean };

/**
 * Configuration of the Markdown tile.
 */
export type MarkdownTile = Tile & { markdown?: string };

/**
 * Configuration of a problem tile.
 */
export type ProblemTile = Tile & { problemSelector?: string; entitySelector?: string };

/**
 * Configuration of a tile with the built-in custom filter id. This is only for internal usage.
 */
export type ScalableListTile = Tile & {
  customFilterId?: string;
  entitySpecificTileType?:
    | "APPLICATION"
    | "APPLICATIONS"
    | "APPLICATIONS_MOST_ACTIVE"
    | "APPLICATION_WORLDMAP"
    | "AWS"
    | "BOUNCE_RATE"
    | "CUSTOM_APPLICATION"
    | "CUSTOM_CHARTING"
    | "DATABASE"
    | "DATABASES_OVERVIEW"
    | "DATA_EXPLORER"
    | "DCRUM_SERVICES"
    | "DEM_KEY_USER_ACTION"
    | "DOCKER"
    | "DTAQL"
    | "HEADER"
    | "HOST"
    | "HOSTS"
    | "LOG_ANALYTICS"
    | "LOG_QUERY"
    | "MARKDOWN"
    | "MOBILE_APPLICATION"
    | "NETWORK"
    | "NETWORK_MEDIUM"
    | "OPEN_PROBLEMS"
    | "PROCESS_GROUPS_ONE"
    | "PURE_MODEL"
    | "RESOURCES"
    | "SCALABLE_LIST"
    | "SERVICES"
    | "SERVICE_VERSATILE"
    | "SESSION_METRICS"
    | "SLO"
    | "SYNTHETIC_HTTP_MONITOR"
    | "SYNTHETIC_SINGLE_EXT_TEST"
    | "SYNTHETIC_SINGLE_WEBCHECK"
    | "SYNTHETIC_TESTS"
    | "THIRD_PARTY_MOST_ACTIVE"
    | "UEM_ACTIVE_SESSIONS"
    | "UEM_CONVERSIONS_OVERALL"
    | "UEM_CONVERSIONS_PER_GOAL"
    | "UEM_JSERRORS_OVERALL"
    | "UEM_KEY_USER_ACTIONS"
    | "USERS"
    | "VIRTUALIZATION";
  chartVisible?: boolean;
};

/**
 * Configuration of the Browser monitor tile.
 */
export type SyntheticSingleWebcheckTile = Tile & { assignedEntities?: string[]; excludeMaintenanceWindows?: boolean };

/**
* Configuration of a tile. 

The actual set of fields depends on the type of the tile. Find the list of actual objects in the description of the **tileType** field or see [Dashboards API - Tile JSON models](https://dt-url.net/2wc3spx).
*/
export interface Tile {
  /** The name of the tile. */
  name: string;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `CUSTOM_CHARTING` -> CustomChartingTile
   * * `DTAQL` -> UserSessionQueryTile
   * * `MARKDOWN` -> MarkdownTile
   * * `HOSTS` -> FilterableEntityTile
   * * `APPLICATIONS` -> FilterableEntityTile
   * * `SERVICES` -> FilterableEntityTile
   * * `DATABASES_OVERVIEW` -> FilterableEntityTile
   * * `SYNTHETIC_TESTS` -> FilterableEntityTile
   * * `APPLICATION_WORLDMAP` -> AssignedEntitiesWithMetricTile
   * * `RESOURCES` -> AssignedEntitiesWithMetricTile
   * * `THIRD_PARTY_MOST_ACTIVE` -> AssignedEntitiesWithMetricTile
   * * `UEM_CONVERSIONS_PER_GOAL` -> AssignedEntitiesWithMetricTile
   * * `HOST` -> AssignedEntitiesWithMetricTile
   * * `PROCESS_GROUPS_ONE` -> AssignedEntitiesWithMetricTile
   * * `SYNTHETIC_SINGLE_WEBCHECK` -> SyntheticSingleWebcheckTile
   * * `APPLICATION` -> AssignedEntitiesTile
   * * `VIRTUALIZATION` -> AssignedEntitiesTile
   * * `AWS` -> AssignedEntitiesTile
   * * `SERVICE_VERSATILE` -> AssignedEntitiesTile
   * * `SESSION_METRICS` -> AssignedEntitiesTile
   * * `USERS` -> AssignedEntitiesTile
   * * `UEM_KEY_USER_ACTIONS` -> AssignedEntitiesTile
   * * `BOUNCE_RATE` -> AssignedEntitiesTile
   * * `UEM_CONVERSIONS_OVERALL` -> AssignedEntitiesTile
   * * `UEM_JSERRORS_OVERALL` -> AssignedEntitiesTile
   * * `MOBILE_APPLICATION` -> AssignedEntitiesTile
   * * `SYNTHETIC_SINGLE_EXT_TEST` -> AssignedEntitiesTile
   * * `SYNTHETIC_HTTP_MONITOR` -> AssignedEntitiesTile
   * * `DATABASE` -> AssignedEntitiesTile
   * * `CUSTOM_APPLICATION` -> AssignedEntitiesTile
   * * `APPLICATION_METHOD` -> AssignedEntitiesTile
   * * `LOG_ANALYTICS` -> AssignedEntitiesTile
   * * `OPENSTACK` -> AssignedEntitiesTile
   * * `OPENSTACK_PROJECT` -> AssignedEntitiesTile
   * * `OPENSTACK_AV_ZONE` -> AssignedEntitiesTile
   * * `DEVICE_APPLICATION_METHOD` -> AssignedEntitiesTile
   * * `DEM_KEY_USER_ACTION` -> AssignedEntitiesTile
   * * `SLO` -> AssignedEntitiesTile
   * * `SCALABLE_LIST` -> ScalableListTile
   * * `HEADER` -> Tile
   * * `OPEN_PROBLEMS` -> ProblemTile
   * * `PURE_MODEL` -> Tile
   * * `DOCKER` -> Tile
   * * `NETWORK_MEDIUM` -> Tile
   * * `APPLICATIONS_MOST_ACTIVE` -> Tile
   * * `NETWORK` -> Tile
   * * `UEM_ACTIVE_SESSIONS` -> Tile
   * * `DCRUM_SERVICES` -> Tile
   */
  tileType:
    | "APPLICATION"
    | "APPLICATIONS"
    | "APPLICATIONS_MOST_ACTIVE"
    | "APPLICATION_METHOD"
    | "APPLICATION_WORLDMAP"
    | "AWS"
    | "BOUNCE_RATE"
    | "CUSTOM_APPLICATION"
    | "CUSTOM_CHARTING"
    | "DATABASE"
    | "DATABASES_OVERVIEW"
    | "DCRUM_SERVICES"
    | "DEM_KEY_USER_ACTION"
    | "DEVICE_APPLICATION_METHOD"
    | "DOCKER"
    | "DTAQL"
    | "HEADER"
    | "HOST"
    | "HOSTS"
    | "LOG_ANALYTICS"
    | "MARKDOWN"
    | "MOBILE_APPLICATION"
    | "NETWORK"
    | "NETWORK_MEDIUM"
    | "OPENSTACK"
    | "OPENSTACK_AV_ZONE"
    | "OPENSTACK_PROJECT"
    | "OPEN_PROBLEMS"
    | "PROCESS_GROUPS_ONE"
    | "PURE_MODEL"
    | "RESOURCES"
    | "SCALABLE_LIST"
    | "SERVICES"
    | "SERVICE_VERSATILE"
    | "SESSION_METRICS"
    | "SLO"
    | "SYNTHETIC_HTTP_MONITOR"
    | "SYNTHETIC_SINGLE_EXT_TEST"
    | "SYNTHETIC_SINGLE_WEBCHECK"
    | "SYNTHETIC_TESTS"
    | "THIRD_PARTY_MOST_ACTIVE"
    | "UEM_ACTIVE_SESSIONS"
    | "UEM_CONVERSIONS_OVERALL"
    | "UEM_CONVERSIONS_PER_GOAL"
    | "UEM_JSERRORS_OVERALL"
    | "UEM_KEY_USER_ACTIONS"
    | "USERS"
    | "VIRTUALIZATION";

  /** The tile is configured and ready to use (`true`) or just placed on the dashboard (`false`). */
  configured?: boolean;

  /** The position and size of a tile. */
  bounds: TileBounds;

  /**
   * A filter applied to a tile.
   *
   *  It overrides dashboard's filter.
   */
  tileFilter?: TileFilter;
}

/**
 * The position and size of a tile.
 */
export interface TileBounds {
  /**
   * The vertical distance from the top left corner of the dashboard to the top left corner of the tile, in pixels.
   * @format int32
   */
  top?: number;

  /**
   * The horizontal distance from the top left corner of the dashboard to the top left corner of the tile, in pixels.
   * @format int32
   */
  left?: number;

  /**
   * The width of the tile, in pixels.
   * @format int32
   */
  width?: number;

  /**
   * The height of the tile, in pixels.
   * @format int32
   */
  height?: number;
}

/**
* A filter applied to a tile. 

 It overrides dashboard's filter.
*/
export interface TileFilter {
  /** The default timeframe of the tile. */
  timeframe?: string;

  /** The short representation of a Dynatrace entity. */
  managementZone?: EntityShortRepresentation;
}

/**
 * Configuration of a User session query tile.
 */
export type UserSessionQueryTile = Tile & {
  customName?: string;
  query?: string;
  type?: "COLUMN_CHART" | "FUNNEL" | "LINE_CHART" | "PIE_CHART" | "SINGLE_VALUE" | "TABLE";
  timeFrameShift?: string;
  visualizationConfig?: UserSessionQueryTileConfiguration;
  limit?: number;
};

/**
 * Configuration of a User session query visualization tile.
 */
export interface UserSessionQueryTileConfiguration {
  /** The axis bucketing when enabled groups similar series in the same virtual axis. */
  hasAxisBucketing?: boolean;
}

/**
 * Configuration of the [anonymous access](https://dt-url.net/ov03sf1) to the dashboard.
 */
export interface DashboardAnonymousAccess {
  /**
   * A list of URLs for anonymous access to the dashboard.
   *
   * Each link grants access to data from the specific management zone, listed in the in the **managementZoneIds** list.
   * These links are automatically generated by Dynatrace, you can't change them.
   */
  urls?: Record<string, string>;

  /**
   * A list of management zones that can display data on the publicly shared dashboard.
   *
   * Specify management zone IDs here. For each management zone you specify Dynatrace generates an access link. You can access them in the **urls** list.
   * To share the dashboard with its default management zone, use the `default` value.
   */
  managementZoneIds: string[];
}

/**
 * Access permissions of the dashboard.
 */
export interface DashboardSharePermissions {
  /**
   * The ID of the user or group to whom the permission is granted.
   *
   * Not applicable if the **type** is set to `ALL`.
   */
  id?: string;

  /**
   * The type of the permission:
   *
   * * `USER`: The dashboard is shared with the specified user.
   * * `GROUP`: The dashboard is shared with all users of the specified group.
   * * `ALL`: The dashboard is shared via link. Any authenticated user with the link can view the dashboard.
   */
  type: "ALL" | "GROUP" | "USER";

  /**
   * The level of the permission:
   *
   * * `VIEW`: The dashboard is shared with read permission.
   * * `EDIT`: The dashboard is shared with edit permission.
   *
   */
  permission: "EDIT" | "VIEW";
}

/**
 * Sharing configuration of the dashboard.
 * @example {"id":"a5fca32f-d3ba-4749-b201-5d3cd70b9d22","enabled":"true","preset":"true","permissions":[{"type":"ALL","permission":"VIEW"},{"id":"userid","type":"USER","permission":"VIEW"},{"id":"userid","type":"USER","permission":"EDIT"},{"id":"groupid","type":"GROUP","permission":"VIEW"},{"id":"groupid","type":"GROUP","permission":"EDIT"}],"publicAccess":{"managementZoneIds":["default","2899273953172250973"],"urls":{"default":"https://mytenantid.live.dynatrace.com/e/1/dashboards/a5fca32f-d3ba-4749-b201-5d3cd70b9d22?auth=9yPpSI-M-3434Irz8yc8U","2899273953172250973":"https://mytenantid.live.dynatrace.com/e/1/dashboards/a5fca32f-d3ba-4749-b201-5d3cd70b9d22?auth=SL5wTvCbaM2lwpew23234"}}}
 */
export interface DashboardSharing {
  /** Configuration of the [anonymous access](https://dt-url.net/ov03sf1) to the dashboard. */
  publicAccess: DashboardAnonymousAccess;

  /** If `true` the dashboard will be marked as preset. */
  preset?: boolean;

  /** A list of permissions to access the dashboard. */
  permissions: DashboardSharePermissions[];

  /** The Dynatrace entity ID of the dashboard. */
  id: string;

  /** The dashboard is shared (`true`) or private (`false`). */
  enabled?: boolean;
}

/**
 * Global configuration for data privacy and security.
 */
export interface DataPrivacyAndSecurity {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** Masking of IP addresses and GPS coordinates is enabled (`true`) or disabled (`false`). */
  maskIpAddressesAndGpsCoordinates: boolean;

  /**
   * Masking of user action names is enabled (`true`) or disabled (`false`).
   *
   * This masking is available only for web applications.
   */
  maskUserActionNames: boolean;

  /** Masking of personal data in URIs is enabled (`true`) or disabled (`false`). */
  maskPersonalDataInUris: boolean;

  /** The audit logging is enabled (`true`) or disabled (`false`). */
  logAuditEvents?: boolean;
}

/**
 * Configuration of OneAgent auto-update.
 */
export interface HostAutoUpdateConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The Dynatrace entity ID of the host where OneAgent is deployed.
   * @example HOST-0123456789ABCDE
   */
  id?: string;

  /**
   * The auto-update state of OneAgents on the host:
   *
   * * `ENABLED`: OneAgent automatically updates to the most recent version.
   * * `DISABLED`: OneAgent updates to the version specified in the **version** field.
   * * `INHERITED`: The setting from the host group (if the host is a member of a host group) or the environment-wide configuration (if the host doesn't belong to a host group) is used.
   * @example DISABLED
   */
  setting: "DISABLED" | "ENABLED" | "INHERITED";

  /**
   * The version to which the OneAgent must be updated.
   *
   * Specify the version in the `<major>.<minor>.<revision>.<timestamp>` format (for example `1.191.0.20200326-161115`). You can fetch the list of available versions with the [GET available versions](https://dt-url.net/fo23rb5) call.
   * If no suitable installer is found for the provided version or the value is set to `null`, OneAgent won't be updated.
   * Only applicable when the **effectiveSetting** value is `DISABLED`.
   * If the **setting** parameter is set to `INHERITED` but the **version** is still set, it will result in a one-time update: OneAgent will be updated to the specified version and the **version** value will be set to `null`. For further updates the parent setting will be used.
   * @example 1.191.0.20200326-161115
   */
  version?: string;

  /** Basic information about all configured maintenance windows */
  updateWindows?: UpdateWindowsConfig;

  /**
   * The actual state of the auto-update on the host.
   *
   * Applicable only if the **setting** parameter is set to `INHERITED`. In that case the value is taken from the host group or the environment-wide configuration.
   * @example DISABLED
   */
  effectiveSetting?: "ENABLED" | "DISABLED";

  /**
   * The actual version to which the OneAgent must be updated.
   *
   * Applicable only if the **setting** parameter is set to `INHERITED` and the **version** parameter is set to `null`. In that case the value is taken from the host group or the environment-wide configuration.
   * @example 1.191.0.20200326-161115
   */
  effectiveVersion?: string;
}

/**
 * OneAgent configuration on a host.
 */
export interface HostConfig {
  /**
   * The Dynatrace entity ID of the host where OneAgent is deployed.
   * @example HOST-0123456789ABCDE
   */
  id?: string;

  /** Monitoring configuration of OneAgent. */
  monitoringConfig?: MonitoringConfig;

  /** Configuration of OneAgent auto-update. */
  autoUpdateConfig?: HostAutoUpdateConfig;

  /** A list of technology monitoring configurations. */
  techMonitoringConfigList?: TechMonitoringList;
}

/**
 * Monitoring configuration of OneAgent.
 */
export interface MonitoringConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The Dynatrace entity ID of the host where OneAgent is deployed.
   * @example HOST-0123456789ABCDE
   */
  id?: string;

  /**
   * The monitoring is enabled (`true`) or disabled (`false`).
   * @example true
   */
  monitoringEnabled: boolean;

  /**
   * The monitoring mode for the host: full stack or infrastructure only.
   * @example FULL_STACK
   */
  monitoringMode: "CLOUD_INFRASTRUCTURE" | "FULL_STACK";
}

/**
 * A list of technology monitoring configurations.
 */
export interface TechMonitoringList {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** A list of technology monitoring configurations. */
  technologies: Technology[];
}

/**
 * Configuration of technology monitoring.
 */
export interface Technology {
  /**
   * The type of the technology.
   * @example JAVA
   */
  type:
    | "AIX_KERNEL_EXT"
    | "APACHE"
    | "CIM_V2"
    | "DOCKER"
    | "DOCKER_WIN"
    | "DOT_NET"
    | "DOT_NET_CORE"
    | "EXTENSIONS"
    | "EXTENSIONS_DS_GENERIC"
    | "EXTENSIONS_STATSD"
    | "GARDEN"
    | "GO"
    | "GO_STATIC"
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
    | "PHP_81"
    | "PHP_CGI"
    | "PHP_CLI"
    | "PHP_WIN"
    | "PROCESS"
    | "RUBY"
    | "SDK"
    | "VARNISH"
    | "Z_OS";

  /**
   * The monitoring of the technology is enabled (`true`) or disabled (`false`).
   * @example true
   */
  monitoringEnabled: boolean;

  /**
   * The validity of the configuration:
   *
   * * `HOST`: The setting is valid for OneAgent on host only. Other OneAgents, connected to the same Dynatrace server may have different setting.
   * * `ENVIRONMENT`: The setting is valid for all OneAgents, connected to the Dynatrace server.
   * @example ENVIRONMENT
   */
  scope?: "ENVIRONMENT" | "HOST";
}

/**
 * Host details. Contains ID, name, host group, and tags.
 * @example {"name":"example host","id":"HOST-0000000000000000","hostGroup":{"meId":"HOST_GROUP-CF1DA380B3A53F17","name":"example host group"},"tags":["tagA","tagB"],"managementZones":[{"id":"000000000000000000","name":"example zone"}]}
 */
export interface Host {
  /** The name of the host */
  name?: string;

  /** The ID of the host */
  id?: string;

  /** Host group to which the host belongs. */
  hostGroup?: HostGroup;

  /** A list of tags of the host. */
  tags?: TagInfo[];

  /** A list of management zones to which the host belongs. */
  managementZones?: EntityShortRepresentation[];
}

/**
 * Host group to which the host belongs.
 */
export interface HostGroup {
  /** The Dynatrace entity ID of the host group. */
  meId?: string;

  /** The name of the Dynatrace entity, displayed in the UI. */
  name?: string;
}

/**
 * The list of hosts supported by extension.
 */
export interface HostList {
  /**
   * Total number of results
   * @format int32
   */
  totalResults?: number;

  /** The list of hosts */
  hosts?: Host[];

  /** Next page key used for paging */
  nextPageKey?: string;
}

/**
 * Global Configuration of OneAgent and JMX extension
 * @example {"id":"custom.remote.python.demo","properties":[{"key":"serverIp","type":"STRING","defaultValue":"127.0.0.1"},{"key":"password","type":"PASSWORD","defaultValue":""},{"key":"username","type":"STRING","defaultValue":"dynatrace"},{"key":"dropdownProperty","type":"DROPDOWN","defaultValue":"one","dropdownValues":["one","two","three"]}]}
 */
export interface GlobalExtensionConfiguration {
  /** The ID of the extension. */
  extensionId?: string;

  /** The extension is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The plugin is enabled (`true`) or disabled (`false`) globally for hosts in infrastructure-only monitoring mode */
  infraOnlyEnabled?: boolean;

  /**
   * The list of configuration parameters.
   *
   *  Each parameter is a key-value pair.
   */
  properties?: Record<string, string>;
}

/**
 * The state of the extension.
 */
export interface ExtensionState {
  /** The ID of the extension. */
  extensionId?: string;

  /** The version of the extension (for example `1.0.0`). */
  version?: string;

  /** The ID of the endpoint where the state is detected - Active Gate only. */
  endpointId?: string;

  /** The state of the extension. */
  state?:
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

  /** A short description of the state. */
  stateDescription?: string;

  /**
   * The timestamp when the state was detected, in UTC milliseconds.
   * @format int64
   */
  timestamp?: number;

  /** The ID of the host on which the extension runs. */
  hostId?: string;

  /** The ID of the entity on which the extension is active. */
  processId?: string;
}

/**
 * A list of extension states.
 * @example {"states":[{"extensionId":"custom.python.connectionpool","version":"1.82","endpointId":"null","state":"OK","stateDescription":"","timestamp":1578578108213,"hostId":"HOST-01A7DEFA5340A86D","processId":"PROCESS_GROUP_INSTANCE-2182DF2E20E3E067"}],"totalResults":9,"nextPageToken":"LlUdYmu5S2MfX/ppfCInR9M="}
 */
export interface ExtensionStateList {
  /** A list of extension states. */
  states?: ExtensionState[];

  /**
   * The total number of entries in the result.
   * @format int32
   */
  totalResults?: number;

  /**
   * The cursor for the next page of results. Has the value of `null` on the last page.
   *
   * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
   */
  nextPageKey?: string;
}

/**
 * A list of configurations.
 * @example {"configurationsList":[{"id":"HOST-E1550E0AED6A572F"}],"totalResults":9,"nextPageToken":"LlUdYmu5S2MfX/ppfCInR9M="}
 */
export interface ExtensionConfigurationList {
  /** List of configurations. */
  configurationsList?: EntityShortRepresentation[];

  /**
   * The total number of entries in the result.
   * @format int32
   */
  totalResults?: number;

  /**
   * The cursor for the next page of results. Has the value of `null` on the last page.
   *
   * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
   */
  nextPageKey?: string;
}

/**
 * @example {"id":"custom.remote.python.demo","enabled":true,"useGlobal":false,"hostId":"HOST-01A7DEFA5340A86D","properties":{"serverIp":"127.0.0.1","username":"dynatrace","password":"","dropdownProperty":"three"},"activeGate":{"id":"7835970235169136995","name":"ActiveGate Host Name"}}
 */
export interface ExtensionConfigurationDto {
  /** The ID of the extension. */
  extensionId?: string;

  /** The extension is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Allows to skip current configuration and use global one. */
  useGlobal: boolean;

  /**
   * The list of extension parameters.
   *
   *  Each parameter is a key-value pair.
   */
  properties?: Record<string, string>;

  /** The ID of the host on which the extension runs. */
  hostId?: string;

  /** The short representation of a Dynatrace entity. */
  activeGate?: EntityShortRepresentation;

  /** The ID of the endpoint. */
  endpointId?: string;

  /** The name of the endpoint, displayed in Dynatrace. */
  endpointName?: string;
}

/**
 * General configuration of an extension.
 * @example {"id":"custom.remote.python.demo","name":"ActiveGate demo extension","version":"1.01","type":"ActiveGate","metricGroup":"custom.demo_metrics","metadata":{"configurationVersions":[7],"clusterVersion":"1.186.0.20200109-094111"},"properties":[{"key":"serverIp","type":"STRING","defaultValue":"127.0.0.1"},{"key":"password","type":"PASSWORD","defaultValue":""},{"key":"username","type":"STRING","defaultValue":"dynatrace"},{"key":"dropdownProperty","type":"DROPDOWN","defaultValue":"one","dropdownValues":["one","two","three"]}]}
 */
export interface Extension {
  /** The ID of the extension, for example `custom.remote.python.demo`. */
  id?: string;

  /** The name of the extension, displayed in Dynatrace. */
  name?: string;

  /** The version of the extension, displayed in Dynatrace. */
  version?: string;

  /** The type of the extension. It indicates the runtime environment of the extension (for example, ACTIVEGATE). */
  type?: "ACTIVEGATE" | "CODEMODULE" | "JMX" | "ONEAGENT" | "PMI" | "UNKNOWN";

  /** The metricGroup of the extension used for grouping custom metrics into a hierarchical namespace. */
  metricGroup?: string;

  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** A list of extension properties. */
  properties?: ExtensionProperty[];
}

/**
 * A property of an extension.
 */
export interface ExtensionProperty {
  /** The key of the property. */
  key?: string;

  /** The type of the property. */
  type?: string;

  /** The default value of the property. */
  defaultValue?: string;

  /**
   * The list of possible values of the property.
   *
   *  If such a list is defined, only values from this list can be assigned to the property.
   */
  dropdownValues?: string[];
}

/**
 * @example {"id":"custom.python.connectionpool","name":"Connection Pool","type":"ONEAGENT"}
 */
export interface ExtensionDto {
  id?: string;
  name?: string;
  type?: "ACTIVEGATE" | "CODEMODULE" | "JMX" | "ONEAGENT" | "PMI" | "UNKNOWN";
}

/**
 * @example {"extensions":[{"id":"custom.python.connectionpool","name":"Connection Pool","type":"ONEAGENT"}],"totalResults":9,"nextPageToken":"LlUdYmu5S2MfX/ppfCInR9M="}
 */
export interface ExtensionListDto {
  /** A list of extensions. */
  extensions?: ExtensionDto[];

  /**
   * The total number of entries in the result.
   * @format int32
   */
  totalResults?: number;

  /**
   * The cursor for the next page of results. Has the value of `null` on the last page.
   *
   * Use it in the **nextPageKey** query parameter to obtain subsequent pages of the result.
   */
  nextPageKey?: string;
}

/**
* A list of faulty exceptions. 

If an exception on *any* node of the service matches *any* of these patterns it is considered a failure.
*/
export interface ExceptionPattern {
  classPattern?: string;
  messagePattern?: string;
}

/**
* A set of failure detection parameters (FDP). 

These parameters define the conditions of failure and success.
* @example {"id":"FDP_9","name":"shipping","description":"for requests from shipping module","clientSideMissingHttpCodeIsFailure":false,"serverSideMissingHttpCodeIsFailure":false,"failingHttpCodesClientSide":"400-599","failingHttpCodesServerSide":"500-599","http404NotFoundFailureEnabled":false,"brokenLinkDomains":["mydomain.com"],"successForcingExceptionPatterns":[{"classPattern":"NullPointerException","messagePattern":""}],"tagConditions":[{"tagKey":"myTag","predicate":{"type":"STRING_EQUALS","value":"NG","ignoreCase":true}}]}
*/
export interface FailureDetectionParameterSet {
  /**
   * The ID of the parameter set.
   *
   * The allowed characters are lowercase and uppercase letters, numbers, hyphens (`-`), and underscores (`_`). The length is limited to 30 characters.
   */
  id?: string;

  /**
   * The display name of the FDP set.
   *
   * The length of the name is limited to 150 characters.
   */
  name?: string;

  /** A short description of the FDP set. */
  description?: string;

  /**
   * The missing HTTP response code on the client side is a failure (`true`) or a success (`false`).
   *
   *  If not set, `false` is used.
   */
  clientSideMissingHttpCodeIsFailure?: boolean;

  /**
   * The missing HTTP response code on the server side is a failure (`true`) or a success (`false`).
   *
   *  If not set, `false` is used.
   */
  serverSideMissingHttpCodeIsFailure?: boolean;

  /**
   * A list of client side HTTP response codes that are considered a failure.
   *
   * The format is a list of ranges and individual values (for example, `500-599, 400-499, 1008`).
   * If not set, the range of `400-599` is used.
   */
  failingHttpCodesClientSide?: string;

  /**
   * A list of server side HTTP response codes that are considered a failure.
   *
   * The format is a list of ranges and individual values (for example, `500-599, 400-499, 1008`).If not set, the range of `500-599` is used.
   */
  failingHttpCodesServerSide?: string;

  /**
   * Special handling of the 404 HTTP response code is enabled (`true`) or disabled (`false`). See **brokenLinkDomains** for special handling details.
   *
   * Only applicable when 404 is NOT in the list of failing HTTP response codes and only for the server side.
   *  If not set, `false` is used.
   */
  http404NotFoundFailureEnabled?: boolean;

  /**
   * A list of domains for the special handling of the 404 HTTP response code.
   *
   * If the top domain of the *Referer* is presented in the list OR equals the top domain of the request's host, the 404 code is considered a failure.
   * Only applicable when **isHttp404NotFoundFailureEnabled** is set to `true`.
   */
  brokenLinkDomains?: string[];

  /**
   * A list of success exceptions.
   *
   * If an exception on the entry node of the service matches *any* of these patterns it is considered a success.
   */
  successForcingExceptionPatterns?: ExceptionPattern[];

  /**
   * A list of ignored exceptions.
   *
   * If an exception on the entry node of the service matches *any* of these patterns it is ignored by failure detection.
   */
  ignoredExceptionPatterns?: ExceptionPattern[];

  /**
   * A list of faulty exceptions.
   *
   * If an exception on *any* node of the service matches *any* of these patterns it is considered a failure.
   */
  exceptionOnAnyNodeExceptionPatterns?: ExceptionPattern[];

  /**
   * A list of tag-based conditions.
   *
   * If *any* condition is fulfilled the request is considered a failure.
   */
  tagConditions?: FdpTagCondition[];
}

/**
 * Configuration of the tag condition in the FDP set.
 */
export interface FdpTagCondition {
  /** The key of the tag to be checked. */
  tagKey: string;

  /**
   * The predicate that tests the value of the tag.
   *
   * The actual set of fields depends on the type of the predicate. Find the list of actual objects in the description of the **type** field or see [Failure detection API - JSON models](https://dt-url.net/9sg3swf).
   */
  predicate: FdpTagPredicate;
}

/**
 * The predicate of the `DOUBLE_EQUALS` type. It checks whether the tag (which is a double) equals the reference value.
 */
export type FdpTagDoubleEquals = FdpTagPredicate & { value?: number };

/**
 * The predicate of the `DOUBLE_GREATER_THAN` type. It checks whether the tag (which is a double) is greater than the reference value.
 */
export type FdpTagDoubleGreaterThan = FdpTagPredicate & { value?: number };

/**
 * The predicate of the `DOUBLE_GREATER_THAN_OR_EQUAL` type. It checks whether the tag (which is a double) is greater than or equals the reference value.
 */
export type FdpTagDoubleGreaterThanOrEqual = FdpTagPredicate & { value?: number };

/**
 * The predicate of the `DOUBLE_LESS_THAN` type. It checks whether the tag (which is a double) is less than the reference value.
 */
export type FdpTagDoubleLessThan = FdpTagPredicate & { value?: number };

/**
 * The predicate of the `DOUBLE_LESS_THAN_OR_EQUAL` type. It checks whether the tag (which is a double) is less than or equals the reference value.
 */
export type FdpTagDoubleLessThanOrEqual = FdpTagPredicate & { value?: number };

/**
 * The predicate of the `INTEGER_EQUALS` type. It checks whether the tag (which is an integer) equals the reference value.
 */
export type FdpTagIntegerEquals = FdpTagPredicate & { value?: string };

/**
 * The predicate of the `INTEGER_GREATER_THAN` type. It checks whether the tag (which is an integer) is greater than the reference value.
 */
export type FdpTagIntegerGreaterThan = FdpTagPredicate & { value?: string };

/**
 * The predicate of the `INTEGER_GREATER_THAN_OR_EQUAL` type. It checks whether the tag (which is an integer) is greater than or equals the reference value.
 */
export type FdpTagIntegerGreaterThanOrEqual = FdpTagPredicate & { value?: string };

/**
 * The predicate of the `INTEGER_LESS_THAN` type. It checks whether the tag (which is an integer) is less than the reference value.
 */
export type FdpTagIntegerLessThan = FdpTagPredicate & { value?: string };

/**
 * The predicate of the `INTEGER_LESS_THAN_OR_EQUAL` type. It checks whether the tag (which is an integer) is less than or equals the reference value.
 */
export type FdpTagIntegerLessThanOrEqual = FdpTagPredicate & { value?: string };

/**
* The predicate that tests the value of the tag. 

The actual set of fields depends on the type of the predicate. Find the list of actual objects in the description of the **type** field or see [Failure detection API - JSON models](https://dt-url.net/9sg3swf).
*/
export interface FdpTagPredicate {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `STRING_EQUALS` -> FdpTagStringEquals
   * * `STRING_STARTS_WITH` -> FdpTagStringStartsWith
   * * `STRING_ENDS_WITH` -> FdpTagStringEndsWith
   * * `STRING_CONTAINS_SUBSTRING` -> FdpTagStringContainsSubstring
   * * `INTEGER_EQUALS` -> FdpTagIntegerEquals
   * * `INTEGER_LESS_THAN` -> FdpTagIntegerLessThan
   * * `INTEGER_LESS_THAN_OR_EQUAL` -> FdpTagIntegerLessThanOrEqual
   * * `INTEGER_GREATER_THAN` -> FdpTagIntegerGreaterThan
   * * `INTEGER_GREATER_THAN_OR_EQUAL` -> FdpTagIntegerGreaterThanOrEqual
   * * `DOUBLE_EQUALS` -> FdpTagDoubleEquals
   * * `DOUBLE_LESS_THAN` -> FdpTagDoubleLessThan
   * * `DOUBLE_LESS_THAN_OR_EQUAL` -> FdpTagDoubleLessThanOrEqual
   * * `DOUBLE_GREATER_THAN` -> FdpTagDoubleGreaterThan
   * * `DOUBLE_GREATER_THAN_OR_EQUAL` -> FdpTagDoubleGreaterThanOrEqual
   */
  type:
    | "DOUBLE_EQUALS"
    | "DOUBLE_GREATER_THAN"
    | "DOUBLE_GREATER_THAN_OR_EQUAL"
    | "DOUBLE_LESS_THAN"
    | "DOUBLE_LESS_THAN_OR_EQUAL"
    | "INTEGER_EQUALS"
    | "INTEGER_GREATER_THAN"
    | "INTEGER_GREATER_THAN_OR_EQUAL"
    | "INTEGER_LESS_THAN"
    | "INTEGER_LESS_THAN_OR_EQUAL"
    | "STRING_CONTAINS_SUBSTRING"
    | "STRING_ENDS_WITH"
    | "STRING_EQUALS"
    | "STRING_STARTS_WITH";
}

/**
 * The predicate of the `STRING_CONTAINS_SUBSTRING` type. It checks whether the tag (which is a string) contains the reference value.
 */
export type FdpTagStringContainsSubstring = FdpTagPredicate & { ignoreCase?: boolean; value?: string };

/**
 * The predicate of the `STRING_ENDS_WITH` type. It checks whether the tag (which is a string) ends with the reference value.
 */
export type FdpTagStringEndsWith = FdpTagPredicate & { ignoreCase?: boolean; value?: string };

/**
 * The predicate of the `STRING_EQUALS` type. It checks whether the tag (which is a string) equals the reference value.
 */
export type FdpTagStringEquals = FdpTagPredicate & { ignoreCase?: boolean; value?: string };

/**
 * The predicate of the `STRING_STARTS_WITH` type. It checks whether the tag (which is a string) starts with the reference value.
 */
export type FdpTagStringStartsWith = FdpTagPredicate & { ignoreCase?: boolean; value?: string };

/**
 * The condition of the failure detection rule.
 */
export interface FailureDetectionCondition {
  /** The attribute to be checked. */
  attribute?:
    | "PG_NAME"
    | "PG_TAG"
    | "SERVICE_MANAGEMENT_ZONES"
    | "SERVICE_NAME"
    | "SERVICE_SERVICE_TYPE"
    | "SERVICE_TAG";

  /**
   * The predicate that tests the value of the attribute.
   *
   * The actual set of fields depends on the type of the predicate. Find the list of actual objects in the description of the **type** field or see [Failure detection API - JSON models](https://dt-url.net/9sg3swf).
   */
  predicate?: FdcPredicate;
}

/**
 * Configuration of the failure detection rule.
 * @example {"id":"R_5","name":"shipping","description":"for requests from shipping module","enabled":true,"fdpId":"FDP_9","conditions":[{"attribute":"SERVICE_NAME","predicate":{"type":"STRING_STARTS_WITH","ignoreCase":false,"values":["shp","stg_shp"]}}]}
 */
export interface FailureDetectionRule {
  /**
   * The ID of the rule.
   *
   * The allowed characters are lowercase and uppercase letters, numbers, hyphens (`-`), and underscores (`_`). The length is limited to30 characters.
   */
  id?: string;

  /**
   * The display name of the rule.
   *
   * The length of the name is limited to 150 characters.
   */
  name?: string;

  /** A short description of the rule. */
  description?: string;

  /** The rule is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * The failure detection parameter (FDP) set of the rule.
   *
   * Specify the ID of the set here. The FDP set must exist at the time of rule creation.
   */
  fdpId: string;

  /**
   * A list of conditions of the rule.
   *
   * The rule applies when **all** conditions are fulfilled.
   */
  conditions: FailureDetectionCondition[];
}

/**
* The predicate that tests the value of the attribute. 

The actual set of fields depends on the type of the predicate. Find the list of actual objects in the description of the **type** field or see [Failure detection API - JSON models](https://dt-url.net/9sg3swf).
*/
export interface FdcPredicate {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `STRING_EQUALS` -> FdcPredicateStringEquals
   * * `STRING_STARTS_WITH` -> FdcPredicateStringStartsWith
   * * `STRING_ENDS_WITH` -> FdcPredicateStringEndsWith
   * * `STRING_CONTAINS_SUBSTRING` -> FdcPredicateStringContains
   * * `INTEGER_EQUALS` -> FdcPredicateIntegerEquals
   * * `INTEGER_LESS_THAN` -> FdcPredicateIntegerLessThan
   * * `INTEGER_LESS_THAN_OR_EQUAL` -> FdcPredicateIntegerLessThanOrEqual
   * * `INTEGER_GREATER_THAN` -> FdcPredicateIntegerGreaterThan
   * * `INTEGER_GREATER_THAN_OR_EQUAL` -> FdcPredicateIntegerGreaterThanOrEqual
   * * `LONG_EQUALS` -> FdcPredicateLongEquals
   * * `LONG_LESS_THAN` -> FdcPredicateLongLessThan
   * * `LONG_LESS_THAN_OR_EQUAL` -> FdcPredicateLongLessThanOrEqual
   * * `LONG_GREATER_THAN` -> FdcPredicateLongGreaterThan
   * * `LONG_GREATER_THAN_OR_EQUAL` -> FdcPredicateLongGreaterThanOrEqual
   * * `TAG_KEY_EQUALS` -> FdcPredicateTagKeyEquals
   * * `TAG_EQUALS` -> FdcPredicateTagEquals
   * * `SERVICE_TYPE_EQUALS` -> FdcPredicateServiceTypeEquals
   * * `MANAGEMENT_ZONES_CONTAINS_ALL` -> FdcPredicateManagementZonesContainsAll
   * * `SET_OF_INTEGERS_CONTAINS_ANY` -> FdcPredicateSetOfIntegersContainsAny
   * * `SET_OF_INTEGERS_CONTAINS_ALL` -> FdcPredicateSetOfIntegersContainsAll
   */
  type:
    | "INTEGER_EQUALS"
    | "INTEGER_GREATER_THAN"
    | "INTEGER_GREATER_THAN_OR_EQUAL"
    | "INTEGER_LESS_THAN"
    | "INTEGER_LESS_THAN_OR_EQUAL"
    | "LONG_EQUALS"
    | "LONG_GREATER_THAN"
    | "LONG_GREATER_THAN_OR_EQUAL"
    | "LONG_LESS_THAN"
    | "LONG_LESS_THAN_OR_EQUAL"
    | "MANAGEMENT_ZONES_CONTAINS_ALL"
    | "SERVICE_TYPE_EQUALS"
    | "SET_OF_INTEGERS_CONTAINS_ALL"
    | "SET_OF_INTEGERS_CONTAINS_ANY"
    | "STRING_CONTAINS_SUBSTRING"
    | "STRING_ENDS_WITH"
    | "STRING_EQUALS"
    | "STRING_STARTS_WITH"
    | "TAG_EQUALS"
    | "TAG_KEY_EQUALS";
}

/**
 * The predicate of the `INTEGER_EQUALS` type. It checks whether the attribute (which is an integer) equals one of the reference values.
 */
export type FdcPredicateIntegerEquals = FdcPredicate & { values?: number[] };

/**
 * The predicate of the `INTEGER_GREATER_THAN` type. It checks whether the attribute (which is an integer) is greater than the reference value.
 */
export type FdcPredicateIntegerGreaterThan = FdcPredicate & { value?: number };

/**
 * The predicate of the `INTEGER_GREATER_THAN_OR_EQUAL` type. It checks whether the attribute (which is an integer) is greater than or equals the reference value.
 */
export type FdcPredicateIntegerGreaterThanOrEqual = FdcPredicate & { value?: number };

/**
 * The predicate of the `INTEGER_LESS_THAN` type. It checks whether the attribute (which is an integer) is less than the reference value.
 */
export type FdcPredicateIntegerLessThan = FdcPredicate & { value?: number };

/**
 * The predicate of the `INTEGER_LESS_THAN_OR_EQUAL` type. It checks whether the attribute (which is an integer) is less than or equals the reference value.
 */
export type FdcPredicateIntegerLessThanOrEqual = FdcPredicate & { value?: number };

/**
 * The predicate of the `LONG_EQUALS` type. It checks whether the attribute (which is a long) equals one of the reference values.
 */
export type FdcPredicateLongEquals = FdcPredicate & { values?: string[] };

/**
 * The predicate of the `LONG_GREATER_THAN` type. It checks whether the attribute (which is a long) is greater than the reference value.
 */
export type FdcPredicateLongGreaterThan = FdcPredicate & { value?: string };

/**
 * The predicate of the `LONG_GREATER_THAN_OR_EQUAL` type. It checks whether the attribute (which is a long) is greater than or equals the reference value.
 */
export type FdcPredicateLongGreaterThanOrEqual = FdcPredicate & { value?: string };

/**
 * The predicate of the `LONG_LESS_THAN` type. It checks whether the attribute (which is a long) is less than the reference value.
 */
export type FdcPredicateLongLessThan = FdcPredicate & { value?: string };

/**
 * The predicate of the `LONG_LESS_THAN_OR_EQUAL` type. It checks whether the attribute (which is a long) is less than or equals the reference value.
 */
export type FdcPredicateLongLessThanOrEqual = FdcPredicate & { value?: string };

/**
 * The predicate of the `MANAGEMENT_ZONES_CONTAINS_ALL` type. It checks whether the attribute (which is a set of management zones) contains **all** the reference values.
 */
export type FdcPredicateManagementZonesContainsAll = FdcPredicate & { values?: string[] };

/**
 * The predicate of the `SERVICE_TYPE_EQUALS` type. It checks whether the attribute (which is the type of the service) equals one of the reference values.
 */
export type FdcPredicateServiceTypeEquals = FdcPredicate & { values?: string[] };

/**
 * The predicate of the `SET_OF_INTEGERS_CONTAINS_ALL` type. It checks whether the attribute (which is a set of integers) contains **all** the reference values.
 */
export type FdcPredicateSetOfIntegersContainsAll = FdcPredicate & { values?: number[] };

/**
 * The predicate of the `SET_OF_INTEGERS_CONTAINS_ANY` type. It checks whether the attribute (which is a set of integers) contains one of the reference values.
 */
export type FdcPredicateSetOfIntegersContainsAny = FdcPredicate & { values?: number[] };

/**
 * The predicate of the `STRING_CONTAINS_SUBSTRING` type. It checks whether the attribute (which is a string) contains one of the reference values.
 */
export type FdcPredicateStringContains = FdcPredicate & { ignoreCase?: boolean; values?: string[] };

/**
 * The predicate of the `STRING_ENDS_WITH ` type. It checks whether the attribute (which is a string) ends with one of the reference values.
 */
export type FdcPredicateStringEndsWith = FdcPredicate & { ignoreCase?: boolean; values?: string[] };

/**
 * The predicate of the `STRING_EQUALS` type. It checks whether the attribute (which is a string) equals one of the reference values.
 */
export type FdcPredicateStringEquals = FdcPredicate & { ignoreCase?: boolean; values?: string[] };

/**
 * The predicate of the `STRING_STARTS_WITH` type. It checks whether the attribute (which is a string) starts with one of the reference values.
 */
export type FdcPredicateStringStartsWith = FdcPredicate & { ignoreCase?: boolean; values?: string[] };

/**
* The predicate of the `TAG_EQUALS` type. It checks whether the attribute (which is a key:value pair) equals one of the reference values.

 The  reference value is a key:value pair, consisting of a key and a value that are at the **same position** in the respective list.
*/
export type FdcPredicateTagEquals = FdcPredicate & { keys?: string[]; values?: string[] };

/**
 * The predicate of the `TAG_KEY_EQUALS` type. It checks whether the attribute (which is the key of a tag) equals one of the reference values.
 */
export type FdcPredicateTagKeyEquals = FdcPredicate & { keys?: string[] };

/**
 * The order of the rules in the ruleset.
 * @example {"ruleIds":["R1","RZa","RZb"]}
 */
export interface FdpSelectionRuleOrder {
  /** A list of the rule IDs. The rules in the ruleset are arranged such that their IDs form the same sequence as this list. The ID of each rule in the ruleset must occur exactly once in the list.  */
  ruleIds: string[];
}

/**
 * Parameters of the frequent issue detection. To learn more about it, see [Detection of frequent issues](https://dt-url.net/4da3kdg) in Dynatrace Documentation.
 * @example {"frequentIssueDetectionApplicationEnabled":true,"frequentIssueDetectionServiceEnabled":true,"frequentIssueDetectionInfrastructureEnabled":true}
 */
export interface FrequentIssueDetectionConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The detection for applications is enabled (`true`) or disabled (`false`). */
  frequentIssueDetectionApplicationEnabled: boolean;

  /** The detection for services is enabled (`true`) or disabled (`false`). */
  frequentIssueDetectionServiceEnabled: boolean;

  /** The detection for infrastructure is enabled (`true`) or disabled (`false`). */
  frequentIssueDetectionInfrastructureEnabled: boolean;
}

/**
 * The location for an IP address mapping.
 */
export interface IpAddressMappingLocation {
  /**
   * The country code of the location.
   *
   *  Use the alpha-2 code of the [ISO 3166-2 standard](https://dt-url.net/iso3166-2), (for example, `AT` for Austria or `PL` for Poland).
   */
  countryCode: string;

  /** The city name of the location. */
  city?: string;

  /**
   * The region code of the location.
   *
   *  For the [USA](https://dt-url.net/iso3166us) or [Canada](https://dt-url.net/iso3166ca) use ISO 3166-2 state codes without `US-` or `CA-` prefix.
   *  For the rest of the world use [FIPS 10-4 codes](https://dt-url.net/fipscodes) without country prefix.
   */
  regionCode?: string;

  /**
   * The latitude of the location in `DDD.dddd` format.
   * @format double
   * @min -90
   * @max 90
   */
  latitude?: number;

  /**
   * The longitude of the location in `DDD.dddd` format.
   * @format double
   * @min -180
   * @max 180
   */
  longitude?: number;
}

/**
 * Configuration of the IP address mapping to the geographic location.
 */
export interface IpAddressMappingRule {
  /** The location for an IP address mapping. */
  ipAddressMappingLocation: IpAddressMappingLocation;

  /** The IP address or the IP address range to be mapped to the location. */
  ipAddressRange: IpAddressRange;
}

/**
 * Configuration of the IP address mappings to geographic locations.
 */
export interface IpAddressMappings {
  /**
   * A list of IP address mapping rules.
   *
   * Rules are evaluated from top to bottom; the first matching rule applies.
   */
  ipAddressMappingRules?: IpAddressMappingRule[];
}

/**
 * Configuration of the custom client IP headers.
 */
export interface IpDetectionHeaders {
  /**
   * A list of custom client IP headers.
   *
   * Headers are evaluated from top to bottom; the first matching header applies.
   */
  ipDetectionHeaders?: string[];
}

/**
* Configuration of OneAgent auto-update in a host group. 

Applies to all OneAgents installed on hosts of the host group if their **setting** parameter is set to `INHERITED`. Otherwise, the host level setting applies.
*/
export interface HostGroupAutoUpdateConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The Dynatrace entity ID of the host group.
   * @example HOST_GROUP-0123456789ABCDE
   */
  id?: string;

  /**
   * The auto-update state of OneAgents in a host group:
   *
   * * `ENABLED`: OneAgents automatically update to the most recent version.
   * * `DISABLED`: OneAgents update to the version specified in the **version** field.
   * * `INHERITED`: The setting from the environment-wide configuration is used.
   * OneAgents installed on hosts of the host group use this configuration only when their **setting** parameter is set to `INHERITED`.
   * @example DISABLED
   */
  setting: "DISABLED" | "ENABLED" | "INHERITED";

  /**
   * The version to which the OneAgent must be updated.
   *
   * Specify the version in the `<major>.<minor>.<revision>` format (for example `1.181.0`) or `<major>.<minor>` format (for example `1.181`). You can fetch the list of available versions with the [GET available versions](https://dt-url.net/fo23rb5) call. If no suitable installer is found for the provided version or the value is set to `null`, OneAgent won't be updated.
   * Only applicable when the **setting** parameter is set to `DISABLED`.
   * @example 1.181.0
   */
  version?: string;

  /** Basic information about all configured maintenance windows */
  updateWindows?: UpdateWindowsConfig;

  /**
   * The actual state of the auto-update on the hosts in a host group.
   *
   * Applicable only if the **setting** parameter is set to `INHERITED`. In that case the value is taken from the environment-wide setting.
   * @example DISABLED
   */
  effectiveSetting?: "ENABLED" | "DISABLED";

  /**
   * The actual version to which the OneAgent must be updated.
   *
   * Applicable only if the **setting** parameter is set to `INHERITED`. In that case the value is taken from the environment-wide setting.
   * @example 1.181.0
   */
  effectiveVersion?: string;
}

/**
 * Configuration of OneAgent in a host group.
 */
export interface OneAgentHostGroupConfig {
  /**
   * The Dynatrace entity ID of the host group.
   * @example HOST_GROUP-0123456789ABCDE
   */
  id?: string;

  /**
   * Configuration of OneAgent auto-update in a host group.
   *
   * Applies to all OneAgents installed on hosts of the host group if their **setting** parameter is set to `INHERITED`. Otherwise, the host level setting applies.
   */
  autoUpdateConfig?: HostGroupAutoUpdateConfig;
}

/**
 * Define an alias for a so called base queue. This can either be a local queue owned by this queue manager, a local definition of a remote queue or a cluster queue visible but owned by another queue manager. The alias can be made visible in one or more clusters.
 */
export interface AliasQueue {
  /** The name of the alias queue. */
  aliasQueue: string;

  /** The name of the base queue, which the alias queue should point to. */
  baseQueue: string;

  /** The alias queue is visible in these [clusters](https://dt-url.net/dic3kgg). The queue manager must be part of these clusters. */
  clusterVisibility: string[];
}

/**
 * This local queue is visible in these [clusters](https://dt-url.net/dic3kgg). The queue manager must be part of these clusters.
 */
export interface ClusterQueue {
  /** The name of the local queue. */
  localQueue: string;

  /** The local queue is visible in these [clusters](https://dt-url.net/dic3kgg). The queue manager must be part of these clusters. */
  clusterVisibility: string[];
}

/**
 * Parameters of the queue manager.
 * @example {"name":"name of a queue manager","clusters":["name of a cluster this queue manager is part of","another name of a cluster this queue manager is part of"],"aliasQueues":[{"aliasQueue":"alias queue name","baseQueue":"real queue name","clusterVisibility":["name of a cluster this alias should be visible in","another cluster"]}],"remoteQueues":[{"localQueue":"local definition of the remote queue","remoteQueue":"remote queue name","remoteQueueManager":"remote queue manager name","clusterVisibility":["name of a cluster this local definition of the remote queue should be visible in","another cluster"]}],"clusterQueues":[{"localQueue":"name of a local queue","clusterVisibility":["name of a cluster this local queue should be visible in","another cluster"]}]}
 */
export interface QueueManager {
  /** The name of the queue manager. */
  name: string;

  /** The queue manager will have access to all cluster visible queues in these [clusters](https://dt-url.net/dic3kgg). */
  clusters: string[];

  /** The list of alias queues in the queue manager. */
  aliasQueues: AliasQueue[];

  /** The list of remote queues in the queue manager. */
  remoteQueues: RemoteQueue[];

  /** The list of cluster queues in the queue manager. */
  clusterQueues: ClusterQueue[];
}

/**
 * Define a local definition of a remote queue owned by another queue manager. The local definition can be made visible in one or more clusters.
 */
export interface RemoteQueue {
  /** The name of the local definition of the remote queue. */
  localQueue: string;

  /** The name of the remote queue. */
  remoteQueue: string;

  /** The name of the remote queue manager. */
  remoteQueueManager: string;

  /** The local definition of the remote queue is visible in these [clusters](https://dt-url.net/dic3kgg). The queue manager must be part of these clusters. */
  clusterVisibility: string[];
}

/**
 * Ibm MQ queue which is an entrypoint to IMS.
 * @example {"queueManagerName":"MyQueueManagerName","queueName":"MyQueueName"}
 */
export interface IbmMQImsEntryQueue {
  /**
   * The ID of the IMS entry queue.
   * @format uuid
   * @example 12345678-abcd-1234-abcd-1234567890ab
   */
  id?: string;

  /** The name of the queue manager. */
  queueManagerName: string;

  /** The name of the queue. */
  queueName: string;
}

/**
* Configuration of the log filter for a custom log metric. 

If several criteria are specified, the AND logic applies.
*/
export interface LogSourceFilter {
  /**
   * A list of filtering criteria for log path.
   *
   * If several criteria are specified, the OR logic applies.
   */
  pathDefinitions?: PathDefinition[];

  /**
   * A list of Dynatrace entities, where the log can originate from. Specify Dynatrace entity IDs here.
   *
   *  Allowed types of entities are `PROCESS_GROUP` and `PROCESS_GROUP_INSTANCE`. You can't mix entity types.
   * If several entities are specified, the OR logic applies.
   * This field is mutually exclusive with the **osTypes** field.
   */
  sourceEntities?: string[];

  /**
   * A list of hosts, where the log can originate from. Specify Dynatrace entity IDs here.
   *
   * If several hosts are specified, the OR logic applies.
   */
  hostFilters?: string[];

  /**
   * A list of operating system types, where the log can originate from.
   *
   * If set, **only OS logs** are included in the result.
   * If several OS are specified, the OR logic applies.
   * This field is mutually exclusive with the **sourceEntities** field.
   */
  osTypes?: ("AIX" | "DARWIN" | "HPUX" | "LINUX" | "SOLARIS" | "WINDOWS" | "ZOS")[];
}

/**
 * A filtering criterion for log path.
 */
export interface PathDefinition {
  /**
   * The path to the required log path.
   *
   *  If the **type** is set to `WILDCARD`, it may contain wildcard characters (`*`).
   * @example /var/log/sample.log
   */
  definition: string;

  /**
   * The type of the log path **definition**: fixed or an expression with wildcards.
   * @example FIXED
   */
  type: "FIXED" | "WILDCARD";
}

/**
 * The entity-selector-based rule for management zone usage. It allows adding entities to a management zone via an entity selector.
 */
export interface EntitySelectorBasedMzRule {
  /** The rule is enabled (`true`) or disabled (`false`). */
  enabled?: boolean;

  /** The entity selector string, by which the entities are selected. */
  entitySelector: string;
}

/**
 * The configuration of the management zone. It defines how the management zone applies.
 * @example {"name":"sampleManagementZone","description":"sampleDescription","rules":[{"type":"SERVICE","enabled":true,"propagationTypes":["SERVICE_TO_HOST_LIKE"],"conditions":[{"key":{"attribute":"SERVICE_DATABASE_NAME"},"comparisonInfo":{"type":"STRING","operator":"BEGINS_WITH","value":"sample","negate":false,"caseSensitive":false}},{"key":{"attribute":"SERVICE_WEB_SERVER_NAME"},"comparisonInfo":{"type":"STRING","operator":"EXISTS","negate":false}},{"key":{"attribute":"PROCESS_GROUP_CUSTOM_METADATA","type":"PROCESS_CUSTOM_METADATA_KEY","dynamicKey":{"source":"KUBERNETES","key":"kubernetes.io/limit-ranger"}},"comparisonInfo":{"type":"STRING","operator":"BEGINS_WITH","value":"sample","negate":false,"caseSensitive":false}}]}],"dimensionalRules":[{"enabled":true,"appliesTo":"METRIC","conditions":[{"conditionType":"DIMENSION","ruleMatcher":"EQUALS","key":"alwaysRequired","value":"requiredForDimension_forbiddenForMetricKeyAndLogFileName"}]}],"entitySelectorBasedRules":[{"enabled":true,"entitySelector":"type(HOST) AND cpuCores(4)"}]}
 */
export interface ManagementZone {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the management zone.
   * @example 123456
   */
  id?: string;

  /** The name of the management zone. */
  name: string;

  /** The description of the management zone. */
  description?: string;

  /**
   * A list of rules for management zone usage.
   *
   * If several rules are specified, the **OR** logic applies.
   */
  rules?: MzRule[];

  /**
   * A list of dimensional data rules for management zone usage.
   *
   * If several rules are specified, the **OR** logic applies.
   */
  dimensionalRules?: MzDimensionalRule[];

  /**
   * A list of entity-selector based rules for management zone usage.
   *
   * If several rules are specified, the **OR** logic applies.
   */
  entitySelectorBasedRules?: EntitySelectorBasedMzRule[];
}

/**
* The dimensional rule of the management zone usage. It defines how the management zone applies. 

 Each rule is evaluated independently of all other rules.
*/
export interface MzDimensionalRule {
  /** The rule is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The target of the rule. */
  appliesTo: "ANY" | "LOG" | "METRIC";

  /**
   * A list of conditions for the management zone.
   *
   *  The management zone applies only if **all** conditions are fulfilled.
   */
  conditions: MzDimensionalRuleCondition[];
}

/**
 * A condition of the management zone dimensional rule.
 */
export interface MzDimensionalRuleCondition {
  /** The type of the condition. */
  conditionType: "DIMENSION" | "LOG_FILE_NAME" | "METRIC_KEY";

  /** How we compare the values. */
  ruleMatcher: "BEGINS_WITH" | "EQUALS";

  /**
   * The reference value for comparison.
   *
   * For conditions of the `DIMENSION` type, specify the key here.
   */
  key: string;

  /**
   * The value of the dimension.
   *
   * Only applicable when the **conditionType** is set to `DIMENSION`.
   */
  value?: string;
}

/**
* The rule of the management zone usage. It defines how the management zone applies. 

Each rule is evaluated independently of all other rules.
*/
export interface MzRule {
  /** The type of Dynatrace entities the management zone can be applied to. */
  type:
    | "APPMON_SERVER"
    | "APPMON_SYSTEM_PROFILE"
    | "AWS_ACCOUNT"
    | "AWS_APPLICATION_LOAD_BALANCER"
    | "AWS_AUTO_SCALING_GROUP"
    | "AWS_CLASSIC_LOAD_BALANCER"
    | "AWS_NETWORK_LOAD_BALANCER"
    | "AWS_RELATIONAL_DATABASE_SERVICE"
    | "AZURE"
    | "BROWSER_MONITOR"
    | "CLOUD_APPLICATION"
    | "CLOUD_APPLICATION_NAMESPACE"
    | "CLOUD_FOUNDRY_FOUNDATION"
    | "CUSTOM_APPLICATION"
    | "CUSTOM_DEVICE"
    | "CUSTOM_DEVICE_GROUP"
    | "DATA_CENTER_SERVICE"
    | "ENTERPRISE_APPLICATION"
    | "ESXI_HOST"
    | "EXTERNAL_MONITOR"
    | "HOST"
    | "HOST_GROUP"
    | "HTTP_MONITOR"
    | "KUBERNETES_CLUSTER"
    | "MOBILE_APPLICATION"
    | "OPENSTACK_ACCOUNT"
    | "PROCESS_GROUP"
    | "QUEUE"
    | "SERVICE"
    | "WEB_APPLICATION";

  /** The rule is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * How to apply the management zone to underlying entities:
   *
   * * `SERVICE_TO_HOST_LIKE`: Apply to underlying hosts of matching services.
   * * `SERVICE_TO_PROCESS_GROUP_LIKE`: Apply to underlying process groups of matching services.
   * * `PROCESS_GROUP_TO_HOST`: Apply to underlying hosts of matching process groups.
   * * `PROCESS_GROUP_TO_SERVICE`: Apply to all services provided by matching process groups.
   * * `HOST_TO_PROCESS_GROUP_INSTANCE`: Apply to processes running on matching hosts.
   * * `CUSTOM_DEVICE_GROUP_TO_CUSTOM_DEVICE`: Apply to custom devices in matching custom device groups.
   * * `AZURE_TO_PG`: Apply to process groups connected to matching Azure entities.
   * * `AZURE_TO_SERVICE`: Apply to services provided by matching Azure entities.
   */
  propagationTypes?: (
    | "AZURE_TO_PG"
    | "AZURE_TO_SERVICE"
    | "CUSTOM_DEVICE_GROUP_TO_CUSTOM_DEVICE"
    | "HOST_TO_PROCESS_GROUP_INSTANCE"
    | "PROCESS_GROUP_TO_HOST"
    | "PROCESS_GROUP_TO_SERVICE"
    | "SERVICE_TO_HOST_LIKE"
    | "SERVICE_TO_PROCESS_GROUP_LIKE"
  )[];

  /**
   * A list of matching rules for the management zone.
   *
   * The management zone applies only if **all** conditions are fulfilled.
   */
  conditions: EntityRuleEngineCondition[];
}

/**
 * Definition of numeric column.
 */
export interface ColumnDefinition {
  name: string;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `CUSTOM` -> CustomColumnDefinition
   * * `JSON` -> JsonColumnDefinition
   */
  type: "CUSTOM" | "JSON";
}

/**
 * Definition of a custom column.
 */
export type CustomColumnDefinition = ColumnDefinition & { prefix?: string; suffix?: string };

/**
 * Definition of a JSON column.
 */
export type JsonColumnDefinition = ColumnDefinition;

/**
 * Custom log metric definition.
 * @example {"metricKey":"calc:log.metric","active":true,"displayName":"Sample metric","unit":"HOUR","unitDisplayName":"","searchString":"\"memory fault\"","metricValueType":"OCCURRENCES","logSourceFilters":[{"pathDefinitions":[{"definition":"/var/log/sample.log","type":"FIXED"}],"sourceEntities":["PROCESS_GROUP_INSTANCE-63FC6E7C73DC893F"],"hostFilters":["HOST-066703AD79C38DB5"],"osTypes":[]}]}
 */
export interface LogMetricConfig {
  /**
   * The unique key of the metric.
   *
   * The key must have the `calc:log.` prefix.
   * @example calc:log.metric
   */
  metricKey: string;

  /** The metric is enabled (`true`) or disabled (`false`). */
  active?: boolean;

  /** The name of the metric, displayed in the UI. */
  displayName: string;

  /** The unit of the metric. */
  unit:
    | "BIT"
    | "BIT_PER_HOUR"
    | "BIT_PER_MINUTE"
    | "BIT_PER_SECOND"
    | "BYTE"
    | "BYTE_PER_HOUR"
    | "BYTE_PER_MINUTE"
    | "BYTE_PER_SECOND"
    | "CORES"
    | "COUNT"
    | "DAY"
    | "DECIBEL_MILLI_WATT"
    | "GIBI_BYTE"
    | "GIGA"
    | "GIGA_BYTE"
    | "HOUR"
    | "KIBI_BYTE"
    | "KIBI_BYTE_PER_HOUR"
    | "KIBI_BYTE_PER_MINUTE"
    | "KIBI_BYTE_PER_SECOND"
    | "KILO"
    | "KILO_BYTE"
    | "KILO_BYTE_PER_HOUR"
    | "KILO_BYTE_PER_MINUTE"
    | "KILO_BYTE_PER_SECOND"
    | "MEBI_BYTE"
    | "MEBI_BYTE_PER_HOUR"
    | "MEBI_BYTE_PER_MINUTE"
    | "MEBI_BYTE_PER_SECOND"
    | "MEGA"
    | "MEGA_BYTE"
    | "MEGA_BYTE_PER_HOUR"
    | "MEGA_BYTE_PER_MINUTE"
    | "MEGA_BYTE_PER_SECOND"
    | "MICRO_SECOND"
    | "MILLI_CORES"
    | "MILLI_SECOND"
    | "MILLI_SECOND_PER_MINUTE"
    | "MINUTE"
    | "MONTH"
    | "MSU"
    | "NANO_SECOND"
    | "NANO_SECOND_PER_MINUTE"
    | "NOT_APPLICABLE"
    | "PERCENT"
    | "PER_HOUR"
    | "PER_MINUTE"
    | "PER_SECOND"
    | "PIXEL"
    | "PROMILLE"
    | "RATIO"
    | "SECOND"
    | "STATE"
    | "UNSPECIFIED"
    | "WEEK"
    | "YEAR";

  /**
   * The display name of the unit.
   *
   *  Only applicable if the **unit** is set to `UNSPECIFIED`.
   */
  unitDisplayName?: string;

  /**
   * The pattern to look for in logs.
   *
   *  Use the [Dynatrace search query language](https://dt-url.net/vv83rhp) to specify it. Quotes must be escaped.
   *  To return all results, leave the field blank.
   * @example prefix1* OR prefix2*
   */
  searchString: string;

  /**
   * The type of the metric data points calculation. For now the only allowed value is `OCCURRENCES`.
   * @example OCCURRENCES
   */
  metricValueType:
    | "FP_COLUMN_AVG"
    | "FP_COLUMN_COUNT"
    | "FP_COLUMN_MAX"
    | "FP_COLUMN_MIN"
    | "FP_COLUMN_SUM"
    | "FP_COLUMN_TOP_X_AVG"
    | "FP_COLUMN_TOP_X_COUNT"
    | "FP_COLUMN_TOP_X_MAX"
    | "FP_COLUMN_TOP_X_MIN"
    | "FP_COLUMN_TOP_X_SUM"
    | "INT_COLUMN_AVG"
    | "INT_COLUMN_COUNT"
    | "INT_COLUMN_MAX"
    | "INT_COLUMN_MIN"
    | "INT_COLUMN_SUM"
    | "INT_COLUMN_TOP_X_AVG"
    | "INT_COLUMN_TOP_X_COUNT"
    | "INT_COLUMN_TOP_X_MAX"
    | "INT_COLUMN_TOP_X_MIN"
    | "INT_COLUMN_TOP_X_SUM"
    | "OCCURRENCES";

  /** Definition of numeric column. */
  columnDefiningValue?: ColumnDefinition;

  /**
   * A list of filters to define the logs to look into.
   *
   *  If several filters are specified, the OR logic applies.
   */
  logSourceFilters: LogSourceFilter[];
}

/**
 * Definition of the calculated metric for mobile or custom app.
 * @example {"enabled":true,"name":"MyMetric","metricKey":"calc:apps.mobile.mymetric","applicationIdentifier":"MOBILE_APPLICATION-1234","metricType":"USER_ACTION_DURATION","userActionFilter":{"hasHttpError":true,"country":"GEOLOCATION-1234","osVersion":"OS-1234"},"dimensions":[{"dimension":"GEOLOCATION","topX":20}]}
 */
export interface CalculatedMobileMetric {
  /** The Dynatrace entity ID of the application to which the metric belongs. */
  applicationIdentifier: string;

  /** The name of the metric, displayed in the UI. */
  name: string;

  /**
   * The unique key of the metric.
   *
   *  The key must have the `calc:apps` prefix.
   * @pattern ^calc:apps\..*
   */
  metricKey: string;

  /** The metric is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The type of the metric. */
  metricType: "REPORTED_ERROR_COUNT" | "USER_ACTION_DURATION" | "WEB_REQUEST_COUNT" | "WEB_REQUEST_ERROR_COUNT";

  /** A list of metric dimensions. */
  dimensions?: CalculatedMobileMetricDimension[];

  /** User actions filter of the calculated metric for mobile or custom app. */
  userActionFilter?: CalculatedMobileMetricUserActionFilter;
}

/**
 * Dimension of the calculated mobile metric.
 */
export interface CalculatedMobileMetricDimension {
  /**
   * The number of top values to be calculated.
   * @format int32
   * @min 1
   * @max 200
   */
  topX: number;

  /** The dimension of the metric. */
  dimension: "APP_VERSION" | "DEVICE" | "ERROR_CONTEXT" | "GEOLOCATION" | "MANUFACTURER" | "OS";
}

/**
 * User actions filter of the calculated metric for mobile or custom app.
 */
export interface CalculatedMobileMetricUserActionFilter {
  /**
   * The error status of the actions to be included in the metric calculation:
   *
   * * `true`: Only actions with reported errors are included.
   *  * `false`: All actions are included.
   */
  hasReportedError?: boolean;

  /**
   * The HTTP error status of the actions to be included in the metric calculation:
   *
   * * `true`: Only actions with HTTP errors are included.
   *  * `false`: All actions are included.
   */
  hasHttpError?: boolean;

  /**
   * Only actions with this name are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  userActionName?: string;

  /**
   * Only actions coming from this app version are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  appVersion?: string;

  /**
   * Only actions coming from this app version are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  device?: string;

  /**
   * Only actions coming from devices of this manufacturer are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  manufacturer?: string;

  /** Only actions with the specified Apdex score are included in the metric calculation. */
  apdex?: "Frustrated" | "Satisfied" | "Tolerating" | "Unknown";

  /**
   * Only actions coming from this OS family are included in the metric calculation.
   *
   *  Specify the OS ID here.
   */
  osFamily?: string;

  /**
   * Only actions coming from this OS version are included in the metric calculation.
   *
   *  Specify the OS ID here.
   */
  osVersion?: string;

  /**
   * Only actions of users from this city are included in the metric calculation.
   *
   *  Specify geolocation ID here.
   */
  city?: string;

  /**
   * Only actions of users from this continent are included in the metric calculation.
   *
   *  Specify geolocation ID here.
   */
  continent?: string;

  /**
   * Only actions of users from this country are included in the metric calculation.
   *
   *  Specify geolocation ID here.
   */
  country?: string;

  /**
   * Only actions of users from this region are included in the metric calculation.
   *
   *  Specify geolocation ID here.
   */
  region?: string;

  /**
   * Only actions with a duration more than or equal to this value (in milliseconds) are included in the metric calculation.
   * @format int32
   */
  actionDurationFromMilliseconds?: number;

  /**
   * Only actions with a duration less than or equal to this value (in milliseconds) are included in the metric calculation.
   * @format int32
   */
  actionDurationToMilliseconds?: number;

  /** Only actions coming from this carrier type are included in the metric calculation. */
  carrier?: string;

  /** Only actions coming from this connection type are included in the metric calculation. */
  connectionType?: "LAN" | "MOBILE" | "OFFLINE" | "UNKNOWN" | "WIFI";

  /** Filter by network technology */
  networkTechnology?: string;

  /**
   * Only actions coming from this internet service provider are included in the metric calculation.
   *
   *   The EQUALS operator applies.
   */
  isp?: string;

  /** Only actions coming from devices with this display orientation are included in the metric calculation. */
  orientation?: "LANDSCAPE" | "PORTRAIT" | "UNKNOWN";

  /** Only actions coming from devices with this display resolution are included in the metric calculation. */
  resolution?:
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
}

/**
 * Update of the calculated mobile or custom metric.
 */
export interface CalculatedMobileMetricUpdate {
  /** The metric is enabled (`true`) or disabled (`false`). */
  enabled?: boolean;
}

/**
* User actions filter of the calculated web application metric. 

Only user actions matching the provided criteria are used for metric calculation. 

A user action must match **all** the criteria.
*/
export interface UserActionFilter {
  /**
   * Only actions with a duration more than or equal to this value (in milliseconds) are included in the metric calculation.
   * @format int32
   */
  actionDurationFromMilliseconds?: number;

  /**
   * Only actions with a duration less than or equal to this value (in milliseconds) are included in the metric calculation.
   * @format int32
   */
  actionDurationToMilliseconds?: number;

  /**
   * The status of load actions in the metric calculation:
   *
   * * `true`: Load actions are included.
   * * `false`: All actions are included.
   */
  loadAction?: boolean;

  /**
   * The status of XHR actions in the metric calculation:
   *
   * * `true`: XHR actions are included.
   * * `false`: All actions are included.
   */
  xhrAction?: boolean;

  /**
   * The status of route change actions in the metric calculation:
   *
   * * `true`: Route change actions are included.
   * * `false`: All actions are included.
   */
  xhrRouteChangeAction?: boolean;

  /**
   * The status of custom actions in the metric calculation:
   *
   * * `true`: Custom actions are included.
   * * `false`: All actions are included.
   */
  customAction?: boolean;

  /** Only actions with the specified Apdex score are included in the metric calculation. */
  apdex?: "Frustrated" | "Satisfied" | "Tolerating" | "Unknown";

  /**
   * Only user actions coming from the specified domain are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  domain?: string;

  /**
   * Only actions with this name are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  userActionName?: string;

  /**
   * The status of actions coming from real users in the metric calculation:
   *
   * * `true`: Only actions from real users are included.
   * * `false`: All actions are included.
   */
  realUser?: boolean;

  /**
   * The status of actions coming from robots in the metric calculation:
   *
   * * `true`: Only actions from robots are included.
   * * `false`: All actions are included.
   */
  robot?: boolean;

  /**
   * The status of actions coming from synthetic monitors in the metric calculation:
   *
   * * `true`: Only actions from synthetic monitors are included.
   * * `false`: All actions are included.
   */
  synthetic?: boolean;

  /**
   * Only user actions coming from the specified browser family are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  browserFamily?: string;

  /**
   * Only user actions coming from the specified browser type are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  browserType?: string;

  /**
   * Only user actions coming from the specified browser version are included in the metric calculation.
   *
   *  The EQUALS operator applies.
   */
  browserVersion?: string;

  /**
   * The custom error status of the actions to be included in the metric calculation:
   *
   * * `true`: Only actions with custom errors are included.
   * * `false`: All actions are included.
   */
  hasCustomErrors?: boolean;

  /**
   * The error status of the actions to be included in the metric calculation:
   *
   * * `true`: Only actions that have any errors are included.
   * * `false`: All actions are included.
   */
  hasAnyError?: boolean;

  /**
   * The request error status of the actions to be included in the metric calculation:
   *
   * * `true`: Only actions with request errors (HTTP errors, failed images, CSP rule violations) are included.
   * * `false`: All actions are included.
   */
  hasHttpErrors?: boolean;

  /**
   * The JavaScript error status of the actions to be included in the metric calculation:
   *
   * * `true`: Only actions with JavaScript errors are included.
   * * `false`: All actions are included.
   */
  hasJavascriptErrors?: boolean;

  /**
   * Only actions of users from this city are included in the metric calculation.
   *
   *  Specify geolocation ID here.
   */
  city?: string;

  /**
   * Only actions of users from this continent are included in the metric calculation.
   *
   *  Specify geolocation ID here.
   */
  continent?: string;

  /**
   * Only actions of users from this country are included in the metric calculation.
   *
   *  Specify geolocation ID here.
   */
  country?: string;

  /**
   * Only actions of users from this region are included in the metric calculation.
   *
   *  Specify geolocation ID here.
   */
  region?: string;

  /**
   * Only actions coming from this IP address are included in the metric calculation.
   *
   *   The EQUALS operator applies.
   */
  ip?: string;

  /**
   * The IPv6 status of the actions to be included in the metric calculation:
   *
   * * `true`: Only actions coming from IPv6 are included.
   * * `false`: All actions are included.
   */
  ipV6Traffic?: boolean;

  /**
   * Only actions coming from this OS family are included in the metric calculation.
   *
   *  Specify the OS ID here.
   */
  osFamily?: string;

  /**
   * Only actions coming from this OS version are included in the metric calculation.
   *
   *  Specify the OS ID here.
   */
  osVersion?: string;

  /**
   * The HTTP error status code of the actions to be included in the metric calculation.
   * @format int32
   */
  httpErrorCode?: number;

  /**
   * Can be used in combination with `httpErrorCode` to define a range of error codes that will be included in the metric calculation.
   * @format int32
   */
  httpErrorCodeTo?: number;

  /** The request path that has been determined to be the origin of an HTTP error of the actions to be included in the metric calculation. */
  httpPath?: string;

  /** The custom error type of the actions to be included in the metric calculation. */
  customErrorType?: string;

  /** The custom error name of the actions to be included in the metric calculation. */
  customErrorName?: string;

  /** Only actions with the specified properties are included in the metric calculation. */
  userActionProperties?: UserActionPropertyFilter[];

  /** Only actions on the specified view are included in the metric calculation. */
  targetViewName?: string;

  /** Specifies the match type of the view name filter, e.g. using `Contains` or `Equals`. Defaults to `Equals`. */
  targetViewNameMatchType?: "Contains" | "Equals";

  /** Only actions on the specified group of views are included in the metric calculation. */
  targetViewGroup?: string;

  /** Specifies the match type of the view group filter, e.g. using `Contains` or `Equals`. Defaults to `Equals`. */
  targetViewGroupNameMatchType?: "Contains" | "Equals";
}

/**
 * User action property filter.
 */
export interface UserActionPropertyFilter {
  /** The key of the action property we're checking. */
  key?: string;

  /**
   * Only actions that have this value in the specified property are included in the metric calculation.
   *
   *  Only applicable to string values.
   */
  value?: string;

  /**
   * Only actions that have a value greater than or equal to this are included in the metric calculation.
   *
   *  Only applicable to numerical values.
   * @format double
   */
  from?: number;

  /**
   * Only actions that have a value less than or equal to this are included in the metric calculation.
   *
   *  Only applicable to numerical values.
   * @format double
   */
  to?: number;

  /**
   * Specifies the match type of a string filter, e.g. using `Contains` or `Equals`.
   *
   *  Only applicable to string values.
   */
  matchType?: "Contains" | "Equals";
}

/**
 * Dimension of the calculated web application metrics.
 */
export interface WebApplicationDimensionDefinition {
  /**
   * The number of top values to be calculated.
   * @format int32
   * @min 1
   * @max 200
   */
  topX: number;

  /** The dimension of the metric. */
  dimension:
    | "ApdexType"
    | "Browser"
    | "ErrorContext"
    | "ErrorOrigin"
    | "ErrorType"
    | "GeoLocation"
    | "StringProperty"
    | "UserActionType";

  /**
   * The key of the user action property.
   *
   *  Only applicable for the `StringProperty` dimension.
   */
  propertyKey?: string;
}

/**
 * Descriptor of the calculated web application metric.
 * @example {"enabled":true,"name":"MyMetric","metricKey":"calc:apps.web.mymetric","metricDefinition":{"metric":"UserActionDuration"},"applicationIdentifier":"APPLICATION-1234","userActionFilter":{"loadAction":true,"country":"GEOLOCATION-1234","browserType":"BROWSER-1234"},"dimensions":[{"dimension":"GeoLocation","topX":20}]}
 */
export interface WebApplicationMetric {
  /** The Dynatrace entity ID of the application to which the metric belongs. */
  applicationIdentifier: string;

  /** The displayed name of the metric. */
  name: string;

  /**
   * The unique key of the metric.
   *
   *  The key must have the `calc:apps` prefix.
   */
  metricKey: string;

  /** The metric is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** Definition of the web application metric. */
  metricDefinition: WebApplicationMetricDefinition;

  /** A list of metric dimensions. */
  dimensions?: WebApplicationDimensionDefinition[];

  /**
   * User actions filter of the calculated web application metric.
   *
   * Only user actions matching the provided criteria are used for metric calculation.
   * A user action must match **all** the criteria.
   */
  userActionFilter?: UserActionFilter;
}

/**
 * Definition of the web application metric.
 */
export interface WebApplicationMetricDefinition {
  /** The type of the web application metric. */
  metric:
    | "Apdex"
    | "ApplicationCache"
    | "Callback"
    | "CumulativeLayoutShift"
    | "DNSLookup"
    | "DOMComplete"
    | "DOMContentLoaded"
    | "DOMInteractive"
    | "DoubleProperty"
    | "ErrorCount"
    | "FirstContentfulPaint"
    | "FirstInputDelay"
    | "FirstInputStart"
    | "FirstPaint"
    | "HTMLDownloaded"
    | "LargestContentfulPaint"
    | "LoadEventEnd"
    | "LoadEventStart"
    | "LongProperty"
    | "LongTasksTime"
    | "NavigationStart"
    | "OnDOMContentLoaded"
    | "OnLoad"
    | "Processing"
    | "RedirectTime"
    | "Request"
    | "RequestStart"
    | "Response"
    | "SecureConnect"
    | "SpeedIndex"
    | "TCPConnect"
    | "TimeToFirstByte"
    | "UserActionDuration"
    | "VisuallyComplete";

  /**
   * The key of the user action property.
   *
   *  Only applicable for `DoubleProperty` and `LongProperty` metrics.
   */
  propertyKey?: string;
}

/**
 * The update of the calculated web application metric.
 */
export interface WebApplicationMetricUpdate {
  /** The metric is enabled (`true`) or disabled (`false`). */
  enabled?: boolean;
}

/**
 * Comparison for `BOOLEAN` attributes.
 */
export type BooleanComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?: boolean;
  values?: { empty?: boolean };
};

/**
 * The definition of a calculated service metric.
 */
export interface CalculatedMetricDefinition {
  /** The metric to be captured. */
  metric:
    | "CPU_TIME"
    | "DATABASE_CHILD_CALL_COUNT"
    | "DATABASE_CHILD_CALL_TIME"
    | "DISK_IO_TIME"
    | "EXCEPTION_COUNT"
    | "FAILED_REQUEST_COUNT"
    | "FAILED_REQUEST_COUNT_CLIENT"
    | "FAILURE_RATE"
    | "FAILURE_RATE_CLIENT"
    | "HTTP_4XX_ERROR_COUNT"
    | "HTTP_4XX_ERROR_COUNT_CLIENT"
    | "HTTP_5XX_ERROR_COUNT"
    | "HTTP_5XX_ERROR_COUNT_CLIENT"
    | "IO_TIME"
    | "LOCK_TIME"
    | "NETWORK_IO_TIME"
    | "NON_DATABASE_CHILD_CALL_COUNT"
    | "NON_DATABASE_CHILD_CALL_TIME"
    | "PROCESSING_TIME"
    | "REQUEST_ATTRIBUTE"
    | "REQUEST_COUNT"
    | "RESPONSE_TIME"
    | "RESPONSE_TIME_CLIENT"
    | "SUCCESSFUL_REQUEST_COUNT"
    | "SUCCESSFUL_REQUEST_COUNT_CLIENT"
    | "WAIT_TIME";

  /**
   * The request attribute to be captured.
   *
   *  Only applicable when the **metric** parameter is set to `REQUEST_ATTRIBUTE`.
   */
  requestAttribute?: string;
}

/**
 * Descriptor of a calculated service metric.
 * @example {"tsmMetricKey":"calc:service.mymetric","name":"My Metric","enabled":true,"metricDefinition":{"metric":"CPU_TIME"},"managementZones":["zone1"],"unit":"MICRO_SECOND","conditions":[{"attribute":"WEBREQUEST_URL_PATH","comparisonInfo":{"type":"STRING","comparison":"BEGINS_WITH","value":"/url_path","negate":false,"caseSensitive":false}}],"dimensionDefinition":{"name":"my dimension","dimension":"{myPlaceholder}","placeholders":[{"name":"myPlaceholder","attribute":"WEBREQUEST_URL_PATH","kind":"BEFORE_DELIMITER","delimiterOrRegex":"/booking","normalization":"ORIGINAL","useFromChildCalls":"false"}],"topX":10,"topXDirection":"DESCENDING","topXAggregation":"AVERAGE"}}
 */
export interface CalculatedServiceMetric {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The key of the calculated service metric. */
  tsmMetricKey: string;

  /** The displayed name of the metric. */
  name: string;

  /** The metric is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The definition of a calculated service metric. */
  metricDefinition: CalculatedMetricDefinition;

  /** The unit of the metric. */
  unit:
    | "BIT"
    | "BIT_PER_HOUR"
    | "BIT_PER_MINUTE"
    | "BIT_PER_SECOND"
    | "BYTE"
    | "BYTE_PER_HOUR"
    | "BYTE_PER_MINUTE"
    | "BYTE_PER_SECOND"
    | "CORES"
    | "COUNT"
    | "DAY"
    | "DECIBEL_MILLI_WATT"
    | "GIBI_BYTE"
    | "GIGA"
    | "GIGA_BYTE"
    | "HOUR"
    | "KIBI_BYTE"
    | "KIBI_BYTE_PER_HOUR"
    | "KIBI_BYTE_PER_MINUTE"
    | "KIBI_BYTE_PER_SECOND"
    | "KILO"
    | "KILO_BYTE"
    | "KILO_BYTE_PER_HOUR"
    | "KILO_BYTE_PER_MINUTE"
    | "KILO_BYTE_PER_SECOND"
    | "MEBI_BYTE"
    | "MEBI_BYTE_PER_HOUR"
    | "MEBI_BYTE_PER_MINUTE"
    | "MEBI_BYTE_PER_SECOND"
    | "MEGA"
    | "MEGA_BYTE"
    | "MEGA_BYTE_PER_HOUR"
    | "MEGA_BYTE_PER_MINUTE"
    | "MEGA_BYTE_PER_SECOND"
    | "MICRO_SECOND"
    | "MILLI_CORES"
    | "MILLI_SECOND"
    | "MILLI_SECOND_PER_MINUTE"
    | "MINUTE"
    | "MONTH"
    | "MSU"
    | "NANO_SECOND"
    | "NANO_SECOND_PER_MINUTE"
    | "NOT_APPLICABLE"
    | "PERCENT"
    | "PER_HOUR"
    | "PER_MINUTE"
    | "PER_SECOND"
    | "PIXEL"
    | "PROMILLE"
    | "RATIO"
    | "SECOND"
    | "STATE"
    | "UNSPECIFIED"
    | "WEEK"
    | "YEAR";

  /**
   * The display name of the metric's unit.
   *
   *  Only applicable when the **unit** parameter is set to `UNSPECIFIED`.
   */
  unitDisplayName?: string;

  /**
   * Restricts the metric usage to the specified service.
   *
   *  This field is mutually exclusive with the **managementZones** field.
   */
  entityId?: string;

  /**
   * Restricts the metric usage to specified management zones.
   *
   *  This field is mutually exclusive with the **entityId** field.
   */
  managementZones?: string[];

  /**
   * The set of conditions for the metric usage.
   *
   *  **All** the specified conditions must be fulfilled to use the metric.
   */
  conditions?: Condition[];

  /** Parameters of a definition of a calculated service metric. */
  dimensionDefinition?: DimensionDefinition;
}

/**
 * Type-specific comparison for attributes. The actual set of fields depends on the type of the comparison. Find the list of actual objects in the description of the **type** field or see [Service metrics API - JSON models](https://dt-url.net/9803svb).
 */
export interface ComparisonInfo {
  /** Operator of the comparision. You can reverse it by setting **negate** to `true`. */
  comparison: string;

  /** The value to compare to. */
  value?: object;

  /** The values to compare to. */
  values?: { empty?: boolean };

  /** Reverse the comparison **operator**. For example, it turns **equals** into **does not equal**. */
  negate: boolean;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `STRING` -> StringComparisonInfo
   * * `NUMBER` -> NumberComparisonInfo
   * * `BOOLEAN` -> BooleanComparisonInfo
   * * `HTTP_METHOD` -> HttpMethodComparisonInfo
   * * `STRING_REQUEST_ATTRIBUTE` -> StringRequestAttributeComparisonInfo
   * * `NUMBER_REQUEST_ATTRIBUTE` -> NumberRequestAttributeComparisonInfo
   * * `ZOS_CALL_TYPE` -> ZosComparisonInfo
   * * `IIB_INPUT_NODE_TYPE` -> IIBInputNodeTypeComparisonInfo
   * * `ESB_INPUT_NODE_TYPE` -> ESBInputNodeTypeComparisonInfo
   * * `FAILED_STATE` -> FailedStateComparisonInfo
   * * `FLAW_STATE` -> FlawStateComparisonInfo
   * * `FAILURE_REASON` -> FailureReasonComparisonInfo
   * * `HTTP_STATUS_CLASS` -> HttpStatusClassComparisonInfo
   * * `TAG` -> TagComparisonInfo
   * * `FAST_STRING` -> FastStringComparisonInfo
   * * `SERVICE_TYPE` -> ServiceTypeComparisonInfo
   */
  type:
    | "BOOLEAN"
    | "ESB_INPUT_NODE_TYPE"
    | "FAILED_STATE"
    | "FAILURE_REASON"
    | "FAST_STRING"
    | "FLAW_STATE"
    | "HTTP_METHOD"
    | "HTTP_STATUS_CLASS"
    | "IIB_INPUT_NODE_TYPE"
    | "NUMBER"
    | "NUMBER_REQUEST_ATTRIBUTE"
    | "SERVICE_TYPE"
    | "STRING"
    | "STRING_REQUEST_ATTRIBUTE"
    | "TAG"
    | "ZOS_CALL_TYPE";
}

/**
 * A condition of a rule usage.
 */
export interface Condition {
  /**
   * The attribute to be matched.
   *
   * Note that for a service property attribute you must use the comparison of the `FAST_STRING` type.
   */
  attribute:
    | "ACTOR_SYSTEM"
    | "AKKA_ACTOR_CLASS_NAME"
    | "AKKA_ACTOR_MESSAGE_TYPE"
    | "AKKA_ACTOR_PATH"
    | "APPLICATION_BUILD_VERSION"
    | "APPLICATION_RELEASE_VERSION"
    | "AZURE_FUNCTIONS_FUNCTION_NAME"
    | "AZURE_FUNCTIONS_SITE_NAME"
    | "CICS_PROGRAM_NAME"
    | "CICS_SYSTEM_ID"
    | "CICS_TASK_ID"
    | "CICS_TRANSACTION_ID"
    | "CICS_USER_ID"
    | "CPU_TIME"
    | "CTG_GATEWAY_URL"
    | "CTG_PROGRAM"
    | "CTG_SERVER_NAME"
    | "CTG_TRANSACTION_ID"
    | "CUSTOMSERVICE_CLASS"
    | "CUSTOMSERVICE_METHOD"
    | "DATABASE_CHILD_CALL_COUNT"
    | "DATABASE_CHILD_CALL_TIME"
    | "DATABASE_HOST"
    | "DATABASE_NAME"
    | "DATABASE_TYPE"
    | "DATABASE_URL"
    | "DISK_IO_TIME"
    | "ERROR_COUNT"
    | "ESB_APPLICATION_NAME"
    | "ESB_INPUT_TYPE"
    | "ESB_LIBRARY_NAME"
    | "ESB_MESSAGE_FLOW_NAME"
    | "EXCEPTION_CLASS"
    | "EXCEPTION_MESSAGE"
    | "FAILED_STATE"
    | "FAILURE_REASON"
    | "FLAW_STATE"
    | "HTTP_REQUEST_METHOD"
    | "HTTP_STATUS"
    | "HTTP_STATUS_CLASS"
    | "IMS_PROGRAM_NAME"
    | "IMS_TRANSACTION_ID"
    | "IMS_USER_ID"
    | "IO_TIME"
    | "IS_KEY_REQUEST"
    | "LAMBDA_COLDSTART"
    | "LOCK_TIME"
    | "MESSAGING_DESTINATION_TYPE"
    | "MESSAGING_IS_TEMPORARY_QUEUE"
    | "MESSAGING_QUEUE_NAME"
    | "MESSAGING_QUEUE_VENDOR"
    | "NETWORK_IO_TIME"
    | "NON_DATABASE_CHILD_CALL_COUNT"
    | "NON_DATABASE_CHILD_CALL_TIME"
    | "PROCESS_GROUP_NAME"
    | "PROCESS_GROUP_TAG"
    | "REMOTE_ENDPOINT"
    | "REMOTE_METHOD"
    | "REMOTE_SERVICE_NAME"
    | "REQUEST_NAME"
    | "REQUEST_TYPE"
    | "RESPONSE_TIME"
    | "RESPONSE_TIME_CLIENT"
    | "RMI_CLASS"
    | "RMI_METHOD"
    | "SERVICE_DISPLAY_NAME"
    | "SERVICE_NAME"
    | "SERVICE_PORT"
    | "SERVICE_PUBLIC_DOMAIN_NAME"
    | "SERVICE_REQUEST_ATTRIBUTE"
    | "SERVICE_TAG"
    | "SERVICE_TYPE"
    | "SERVICE_WEB_APPLICATION_ID"
    | "SERVICE_WEB_CONTEXT_ROOT"
    | "SERVICE_WEB_SERVER_NAME"
    | "SERVICE_WEB_SERVICE_NAME"
    | "SERVICE_WEB_SERVICE_NAMESPACE"
    | "SUSPENSION_TIME"
    | "TOTAL_PROCESSING_TIME"
    | "WAIT_TIME"
    | "WEBREQUEST_QUERY"
    | "WEBREQUEST_RELATIVE_URL"
    | "WEBREQUEST_URL"
    | "WEBREQUEST_URL_HOST"
    | "WEBREQUEST_URL_PATH"
    | "WEBREQUEST_URL_PORT"
    | "WEBSERVICE_ENDPOINT"
    | "WEBSERVICE_METHOD"
    | "ZOS_CALL_TYPE";

  /** Type-specific comparison for attributes. The actual set of fields depends on the type of the comparison. Find the list of actual objects in the description of the **type** field or see [Service metrics API - JSON models](https://dt-url.net/9803svb). */
  comparisonInfo: ComparisonInfo;
}

/**
 * Parameters of a definition of a calculated service metric.
 */
export interface DimensionDefinition {
  /** The name of the dimension. */
  name: string;

  /**
   * The dimension value pattern.
   *
   *  You can define custom placeholders in the **placeholders** field and use them here.
   */
  dimension: string;

  /** The list of custom placeholders to be used in a dimension value pattern. */
  placeholders?: Placeholder[];

  /**
   * The number of top values to be calculated.
   * @format int32
   * @min 1
   * @max 100
   */
  topX: number;

  /** How to calculate the **topX** values. */
  topXDirection: "ASCENDING" | "DESCENDING";

  /** The aggregation of the dimension. */
  topXAggregation: "AVERAGE" | "COUNT" | "MAX" | "MIN" | "OF_INTEREST_RATIO" | "OTHER_RATIO" | "SINGLE_VALUE" | "SUM";
}

/**
 * Type-specific comparison information for attributes of type 'ESB_INPUT_NODE_TYPE'.This model also inherits fields from the parent model ComparisonInfo.
 */
export type ESBInputNodeTypeComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?:
    | "CALLABLE_FLOW_ASYNC_RESPONSE_NODE"
    | "CALLABLE_FLOW_INPUT_NODE"
    | "DATABASE_INPUT_NODE"
    | "DOTNET_INPUT_NODE"
    | "EMAIL_INPUT_NODE"
    | "EVENT_INPUT"
    | "EVENT_INPUT_NODE"
    | "FILE_INPUT_NODE"
    | "FTE_INPUT_NODE"
    | "HTTP_ASYNC_RESPONSE"
    | "JD_EDWARDS_INPUT_NODE"
    | "JMS_CLIENT_INPUT_NODE"
    | "LABEL_NODE"
    | "MQ_INPUT_NODE"
    | "PEOPLE_SOFT_INPUT_NODE"
    | "REST_ASYNC_RESPONSE"
    | "REST_REQUEST"
    | "SAP_INPUT_NODE"
    | "SCA_ASYNC_RESPONSE_NODE"
    | "SCA_INPUT_NODE"
    | "SIEBEL_INPUT_NODE"
    | "SOAP_INPUT_NODE"
    | "TCPIP_CLIENT_INPUT_NODE"
    | "TCPIP_CLIENT_REQUEST_NODE"
    | "TCPIP_SERVER_INPUT_NODE"
    | "TCPIP_SERVER_REQUEST_NODE"
    | "TIMEOUT_NOTIFICATION_NODE"
    | "WS_INPUT_NODE";
  values?: { empty?: boolean };
};

/**
 * Comparison for `FAILED_STATE` attributes.
 */
export type FailedStateComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?: "FAILED" | "SUCCESSFUL";
  values?: { empty?: boolean };
};

/**
 * Comparison for `FAILURE_REASON` attributes.
 */
export type FailureReasonComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?: "EXCEPTION_AT_ENTRY_NODE" | "EXCEPTION_ON_ANY_NODE" | "HTTP_CODE" | "REQUEST_ATTRIBUTE" | "SPAN_FAILURE";
  values?: { empty?: boolean };
};

/**
 * Comparison for `FAST_STRING` attributes. Use it for all service property attributes.
 */
export type FastStringComparisonInfo = ComparisonInfo & {
  comparison?: "CONTAINS" | "EQUALS" | "EQUALS_ANY_OF";
  value?: string;
  values?: { empty?: boolean };
  caseSensitive?: boolean;
};

/**
 * Comparison for `FLAW_STATE` attributes.
 */
export type FlawStateComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?: "FLAWED" | "NOT_FLAWED";
  values?: { empty?: boolean };
};

/**
 * Comparison for `HTTP_METHOD` attributes.
 */
export type HttpMethodComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?: "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT" | "TRACE";
  values?: { empty?: boolean };
};

/**
 * Comparison for `HTTP_STATUS_CLASS` attributes.
 */
export type HttpStatusClassComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?: "C_1XX" | "C_2XX" | "C_3XX" | "C_4XX" | "C_5XX" | "NO_RESPONSE";
  values?: { empty?: boolean };
};

/**
 * Comparison for `IIB_INPUT_NODE_TYPE` attributes.
 */
export type IIBInputNodeTypeComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?:
    | "CALLABLE_FLOW_ASYNC_RESPONSE_NODE"
    | "CALLABLE_FLOW_INPUT_NODE"
    | "DATABASE_INPUT_NODE"
    | "DOTNET_INPUT_NODE"
    | "EMAIL_INPUT_NODE"
    | "EVENT_INPUT"
    | "EVENT_INPUT_NODE"
    | "FILE_INPUT_NODE"
    | "FTE_INPUT_NODE"
    | "HTTP_ASYNC_RESPONSE"
    | "JD_EDWARDS_INPUT_NODE"
    | "JMS_CLIENT_INPUT_NODE"
    | "LABEL_NODE"
    | "MQ_INPUT_NODE"
    | "PEOPLE_SOFT_INPUT_NODE"
    | "REST_ASYNC_RESPONSE"
    | "REST_REQUEST"
    | "SAP_INPUT_NODE"
    | "SCA_ASYNC_RESPONSE_NODE"
    | "SCA_INPUT_NODE"
    | "SIEBEL_INPUT_NODE"
    | "SOAP_INPUT_NODE"
    | "TCPIP_CLIENT_INPUT_NODE"
    | "TCPIP_CLIENT_REQUEST_NODE"
    | "TCPIP_SERVER_INPUT_NODE"
    | "TCPIP_SERVER_REQUEST_NODE"
    | "TIMEOUT_NOTIFICATION_NODE"
    | "WS_INPUT_NODE";
  values?: { empty?: boolean };
};

/**
 * Comparison for `NUMBER` attributes.
 */
export type NumberComparisonInfo = ComparisonInfo & {
  comparison?:
    | "EQUALS"
    | "EQUALS_ANY_OF"
    | "EXISTS"
    | "GREATER_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | "LOWER_THAN"
    | "LOWER_THAN_OR_EQUAL";
  value?: number;
  values?: { empty?: boolean };
};

/**
 * Comparison for `NUMBER_REQUEST_ATTRIBUTE` attributes, specifically of the generic **Number** type.
 */
export type NumberRequestAttributeComparisonInfo = ComparisonInfo & {
  comparison?:
    | "EQUALS"
    | "EQUALS_ANY_OF"
    | "EXISTS"
    | "GREATER_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | "LOWER_THAN"
    | "LOWER_THAN_OR_EQUAL";
  value?: number;
  values?: { empty?: boolean };
  requestAttribute?: string;
  matchOnChildCalls?: boolean;
  source?: PropagationSource;
};

/**
* The custom placeholder to be used as a naming value pattern. 

 It enables you to extract a request attribute value or other request attribute and use it in the naming pattern.
*/
export interface Placeholder {
  /** The name of the placeholder. Use it in the naming pattern as `{name}`. */
  name: string;

  /** The attribute to extract from. You can only use attributes of the **string** type. */
  attribute:
    | "ACTOR_SYSTEM"
    | "AKKA_ACTOR_CLASS_NAME"
    | "AKKA_ACTOR_MESSAGE_TYPE"
    | "AKKA_ACTOR_PATH"
    | "APPLICATION_BUILD_VERSION"
    | "APPLICATION_RELEASE_VERSION"
    | "AZURE_FUNCTIONS_FUNCTION_NAME"
    | "AZURE_FUNCTIONS_SITE_NAME"
    | "CICS_PROGRAM_NAME"
    | "CICS_SYSTEM_ID"
    | "CICS_TASK_ID"
    | "CICS_TRANSACTION_ID"
    | "CICS_USER_ID"
    | "CPU_TIME"
    | "CTG_GATEWAY_URL"
    | "CTG_PROGRAM"
    | "CTG_SERVER_NAME"
    | "CTG_TRANSACTION_ID"
    | "CUSTOMSERVICE_CLASS"
    | "CUSTOMSERVICE_METHOD"
    | "DATABASE_CHILD_CALL_COUNT"
    | "DATABASE_CHILD_CALL_TIME"
    | "DATABASE_HOST"
    | "DATABASE_NAME"
    | "DATABASE_TYPE"
    | "DATABASE_URL"
    | "DISK_IO_TIME"
    | "ERROR_COUNT"
    | "ESB_APPLICATION_NAME"
    | "ESB_INPUT_TYPE"
    | "ESB_LIBRARY_NAME"
    | "ESB_MESSAGE_FLOW_NAME"
    | "EXCEPTION_CLASS"
    | "EXCEPTION_MESSAGE"
    | "FAILED_STATE"
    | "FAILURE_REASON"
    | "FLAW_STATE"
    | "HTTP_REQUEST_METHOD"
    | "HTTP_STATUS"
    | "HTTP_STATUS_CLASS"
    | "IMS_PROGRAM_NAME"
    | "IMS_TRANSACTION_ID"
    | "IMS_USER_ID"
    | "IO_TIME"
    | "IS_KEY_REQUEST"
    | "LAMBDA_COLDSTART"
    | "LOCK_TIME"
    | "MESSAGING_DESTINATION_TYPE"
    | "MESSAGING_IS_TEMPORARY_QUEUE"
    | "MESSAGING_QUEUE_NAME"
    | "MESSAGING_QUEUE_VENDOR"
    | "NETWORK_IO_TIME"
    | "NON_DATABASE_CHILD_CALL_COUNT"
    | "NON_DATABASE_CHILD_CALL_TIME"
    | "PROCESS_GROUP_NAME"
    | "PROCESS_GROUP_TAG"
    | "REMOTE_ENDPOINT"
    | "REMOTE_METHOD"
    | "REMOTE_SERVICE_NAME"
    | "REQUEST_NAME"
    | "REQUEST_TYPE"
    | "RESPONSE_TIME"
    | "RESPONSE_TIME_CLIENT"
    | "RMI_CLASS"
    | "RMI_METHOD"
    | "SERVICE_DISPLAY_NAME"
    | "SERVICE_NAME"
    | "SERVICE_PORT"
    | "SERVICE_PUBLIC_DOMAIN_NAME"
    | "SERVICE_REQUEST_ATTRIBUTE"
    | "SERVICE_TAG"
    | "SERVICE_TYPE"
    | "SERVICE_WEB_APPLICATION_ID"
    | "SERVICE_WEB_CONTEXT_ROOT"
    | "SERVICE_WEB_SERVER_NAME"
    | "SERVICE_WEB_SERVICE_NAME"
    | "SERVICE_WEB_SERVICE_NAMESPACE"
    | "SUSPENSION_TIME"
    | "TOTAL_PROCESSING_TIME"
    | "WAIT_TIME"
    | "WEBREQUEST_QUERY"
    | "WEBREQUEST_RELATIVE_URL"
    | "WEBREQUEST_URL"
    | "WEBREQUEST_URL_HOST"
    | "WEBREQUEST_URL_PATH"
    | "WEBREQUEST_URL_PORT"
    | "WEBSERVICE_ENDPOINT"
    | "WEBSERVICE_METHOD"
    | "ZOS_CALL_TYPE";

  /**
   * The type of extraction.
   *
   *  Defines either usage of regular expression (`regex`) or the position of request attribute value to be extracted.
   * When the **attribute** is `SERVICE_REQUEST_ATTRIBUTE` attribute and **aggregation** is `COUNT`, needs to be set to `ORIGINAL_TEXT`
   */
  kind: "AFTER_DELIMITER" | "BEFORE_DELIMITER" | "BETWEEN_DELIMITER" | "ORIGINAL_TEXT" | "REGEX_EXTRACTION";

  /**
   * Depending on the **type** value:
   *
   *  * `REGEX_EXTRACTION`: The regular expression.
   *  * `BETWEEN_DELIMITER`: The opening delimiter string to look for.
   *  * All other values: The delimiter string to look for.
   */
  delimiterOrRegex?: string;

  /**
   * The closing delimiter string to look for.
   *
   *  Required if the **kind** value is `BETWEEN_DELIMITER`. Not applicable otherwise.
   */
  endDelimiter?: string;

  /**
   * The request attribute to extract from.
   *
   *  Required if the **kind** value is `SERVICE_REQUEST_ATTRIBUTE`. Not applicable otherwise.
   */
  requestAttribute?: string;

  /** The format of the extracted string. */
  normalization?: "ORIGINAL" | "TO_LOWER_CASE" | "TO_UPPER_CASE";

  /**
   * If `true` request attribute will be taken from a child service call.
   *
   *  Only applicable for the `SERVICE_REQUEST_ATTRIBUTE` attribute. Defaults to `false`.
   */
  useFromChildCalls?: boolean;

  /**
   * Which value of the request attribute must be used when it occurs across multiple child requests.
   *
   * Only applicable for the `SERVICE_REQUEST_ATTRIBUTE` attribute, when **useFromChildCalls** is `true`.
   * For the `COUNT` aggregation, the **kind** field is not applicable.
   */
  aggregation?: "COUNT" | "FIRST" | "LAST";

  /** Defines valid sources of request attributes for conditions or placeholders. */
  source?: PropagationSource;
}

/**
 * Defines valid sources of request attributes for conditions or placeholders.
 */
export interface PropagationSource {
  /** Use only request attributes from services that belong to this management zone.. Use either this or `serviceTag` */
  managementZone?: string;

  /** Use only request attributes from services that have this tag. Use either this or `managementZone` */
  serviceTag?: UniversalTag;
}

/**
 * Comparison for `SERVICE_TYPE` attributes.
 */
export type ServiceTypeComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?:
    | "BACKGROUND_ACTIVITY"
    | "CICS_SERVICE"
    | "CUSTOM_SERVICE"
    | "DATABASE_SERVICE"
    | "ENTERPRISE_SERVICE_BUS_SERVICE"
    | "EXTERNAL"
    | "IBM_INTEGRATION_BUS_SERVICE"
    | "IMS_SERVICE"
    | "MESSAGING_SERVICE"
    | "RMI_SERVICE"
    | "RPC_SERVICE"
    | "WEB_REQUEST_SERVICE"
    | "WEB_SERVICE"
    | "ZOS_CONNECT_SERVICE";
  values?: { empty?: boolean };
};

/**
 * Comparison for `STRING` attributes.
 */
export type StringComparisonInfo = ComparisonInfo & {
  comparison?:
    | "BEGINS_WITH"
    | "BEGINS_WITH_ANY_OF"
    | "CONTAINS"
    | "ENDS_WITH"
    | "ENDS_WITH_ANY_OF"
    | "EQUALS"
    | "EQUALS_ANY_OF"
    | "EXISTS"
    | "REGEX_MATCHES";
  value?: string;
  values?: { empty?: boolean };
  caseSensitive?: boolean;
};

/**
 * Comparison for `STRING_REQUEST_ATTRIBUTE` attributes, specifically of the **String** type.
 */
export type StringRequestAttributeComparisonInfo = ComparisonInfo & {
  comparison?:
    | "BEGINS_WITH"
    | "BEGINS_WITH_ANY_OF"
    | "CONTAINS"
    | "ENDS_WITH"
    | "ENDS_WITH_ANY_OF"
    | "EQUALS"
    | "EQUALS_ANY_OF"
    | "EXISTS"
    | "REGEX_MATCHES";
  value?: string;
  values?: { empty?: boolean };
  requestAttribute?: string;
  caseSensitive?: boolean;
  matchOnChildCalls?: boolean;
  source?: PropagationSource;
};

/**
 * Comparison for `TAG` attributes.
 */
export type TagComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "TAG_KEY_EQUALS" | "TAG_KEY_EQUALS_ANY_OF";
  value?: TagInfo;
  values?: { empty?: boolean };
};

/**
 * Use only request attributes from services that have this tag. Use either this or `managementZone`
 */
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
 * Comparison for `ZOS_CALL_TYPE` attributes.
 */
export type ZosComparisonInfo = ComparisonInfo & {
  comparison?: "EQUALS" | "EQUALS_ANY_OF" | "EXISTS";
  value?:
    | "CTG"
    | "DPL"
    | "EXPLICIT_ADK"
    | "HTTP"
    | "IMS_CONNECT"
    | "IMS_CONNECT_API"
    | "IMS_ITRA"
    | "IMS_MSC"
    | "IMS_PGM_SWITCH"
    | "IMS_SHARED_QUEUES"
    | "IMS_TRANS_EXEC"
    | "MQ"
    | "SOAP"
    | "START"
    | "TX"
    | "UNKNOWN"
    | "ZOS_CONNECT";
  values?: { empty?: boolean };
};

/**
 * Definition of the calculated synthetic metric.
 * @example {"enabled":true,"name":"MyMetric","metricKey":"calc:synthetic.browser.mymetric","metric":"UserActionDuration","monitorIdentifier":"SYNTHETIC_TEST-1234","filter":{"event":"SYNTHETIC_TEST_STEP-1234","hasError":true},"dimensions":[{"dimension":"Location"}]}
 */
export interface CalculatedSyntheticMetric {
  /** The Dynatrace entity ID of the synthetic monitor to which the metric belongs. */
  monitorIdentifier: string;

  /** The name of the metric, displayed in the UI. */
  name: string;

  /**
   * The unique key of the metric.
   *
   *  The key must have the `calc:synthetic` prefix.
   */
  metricKey: string;

  /** The metric is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The type of the synthetic metric. */
  metric:
    | "ApplicationCache"
    | "Callback"
    | "CumulativeLayoutShift"
    | "DNSLookup"
    | "DOMComplete"
    | "DOMContentLoaded"
    | "DOMInteractive"
    | "FailedRequestsResources"
    | "FirstContentfulPaint"
    | "FirstInputDelay"
    | "FirstInputStart"
    | "FirstPaint"
    | "HTMLDownloaded"
    | "HttpErrors"
    | "JavaScriptErrors"
    | "LargestContentfulPaint"
    | "LoadEventEnd"
    | "LoadEventStart"
    | "LongTasks"
    | "NavigationStart"
    | "OnDOMContentLoaded"
    | "OnLoad"
    | "Processing"
    | "RedirectTime"
    | "Request"
    | "RequestStart"
    | "ResourceCount"
    | "Response"
    | "SecureConnect"
    | "SpeedIndex"
    | "TCPConnect"
    | "TimeToFirstByte"
    | "TotalDuration"
    | "TransferSize"
    | "UserActionDuration"
    | "VisuallyComplete";

  /** A list of metric dimensions. */
  dimensions?: SyntheticMetricDimension[];

  /** Filter of the calculated synthetic metric. */
  filter?: SyntheticMetricFilter;
}

/**
 * Dimension of the calculated synthetic metric.
 */
export interface SyntheticMetricDimension {
  /**
   * The number of top values to be calculated.
   * @format int32
   * @min 1
   * @max 100
   */
  topX?: number;

  /** The dimension of the metric. */
  dimension: "Event" | "Location" | "ResourceOrigin";
}

/**
 * Filter of the calculated synthetic metric.
 */
export interface SyntheticMetricFilter {
  /** Only user actions of the specified type are included in the metric calculation. */
  actionType?: "Custom" | "Load" | "Xhr";

  /**
   * The execution status of the monitors to be included in the metric calculation:
   *
   * * `true`: Only failed executions are included.
   *  * `false`: All executions are included.
   */
  hasError?: boolean;

  /**
   * Only executions finished with the specified error code are included in the metric calculation.
   * @format int32
   */
  errorCode?: number;

  /**
   * Only the specified browser clickpath event is included in the metric calculation.
   *
   *  Specify the Dynatrace entity ID of the event here. You can fetch the list of clickpath events of the monitor with the [GET a synthetic monitor](https://dt-url.net/4oe3kka) request from the Environment API
   */
  event?: string;

  /**
   * Only executions from the specified location are included in the metric calculation.
   *
   *  Specify the Dynatrace entity ID of the location here. You can fetch the list of locations the monitor is running from with the [GET a synthetic monitor](https://dt-url.net/4oe3kka) request from the Environment API.
   */
  location?: string;
}

/**
 * The update of the calculated synthetic metric.
 */
export interface SyntheticMetricUpdate {
  /** The metric is enabled (`true`) or disabled (`false`). */
  enabled?: boolean;
}

/**
 * The short representation of a notification.
 */
export interface NotificationConfigStub {
  /** The ID of the Dynatrace entity. */
  id: string;

  /** The name of the Dynatrace entity. */
  name?: string;

  /** A short description of the Dynatrace entity. */
  description?: string;

  /** The type of the notification. */
  type?:
    | "ANSIBLETOWER"
    | "EMAIL"
    | "HIPCHAT"
    | "JIRA"
    | "OPS_GENIE"
    | "PAGER_DUTY"
    | "SERVICE_NOW"
    | "SLACK"
    | "TRELLO"
    | "VICTOROPS"
    | "WEBHOOK"
    | "XMATTERS";
}

export interface NotificationConfigStubListDto {
  values?: NotificationConfigStub[];
}

/**
 * Configuration of the Ansible Tower notification.
 */
export type AnsibleTowerNotificationConfig = NotificationConfig & {
  jobTemplateURL?: string;
  acceptAnyCertificate?: boolean;
  username?: string;
  password?: string;
  jobTemplateID?: number;
  customMessage?: string;
};

/**
 * Configuration of the email notification.
 */
export type EmailNotificationConfig = NotificationConfig & {
  subject?: string;
  body?: string;
  receivers?: string[];
  ccReceivers?: string[];
  bccReceivers?: string[];
};

/**
 * Configuration of the HipChat notification.
 */
export type HipChatNotificationConfig = NotificationConfig & { url?: string; message?: string };

/**
 * The HTTP header.
 */
export interface HttpHeader {
  /** The name of the HTTP header. */
  name: string;

  /**
   * The value of the HTTP header. May contain an empty value.
   *
   *  Required when creating a new notification.
   * For the **Authorization** header, GET requests return the `null` value.
   * If you want update a notification configuration with an **Authorization** header which you want to remain intact, set the **Authorization** header with the `null` value.
   */
  value?: string;
}

/**
 * Configuration of the Jira notification.
 */
export type JiraNotificationConfig = NotificationConfig & {
  username?: string;
  password?: string;
  url?: string;
  projectKey?: string;
  issueType?: string;
  summary?: string;
  description?: string;
};

/**
* Configuration of a notification. The actual set of fields depends on the `type` of the notification.
See [Notifications API - JSON models](https://dt-url.net/9qm3k5u) in Dynatrace Documentation for example models of every notification type.
* @example {"type":"JIRA","id":"acbed0c4-4ef1-4303-991f-102510a69322","name":"REST example","alertingProfile":"4f5e00f4-39b3-455a-820b-3514843615f3","active":true,"username":"john.smith","password":"","url":"https://my-jira.atlassian.net/rest/api/2/","projectKey":"DEV","issueType":"Task","summary":"Problem {ProblemID}: {ProblemTitle}","description":"{ProblemDetailsText}"}
*/
export interface NotificationConfig {
  /**
   * The ID of the notification configuration.
   * @format uuid
   */
  id?: string;

  /** The name of the notification configuration. */
  name: string;

  /**
   * The ID of the associated alerting profile.
   * @format uuid
   */
  alertingProfile: string;

  /** The configuration is enabled (`true`) or disabled (`false`). */
  active: boolean;

  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `EMAIL` -> EmailNotificationConfig
   * * `PAGER_DUTY` -> PagerDutyNotificationConfig
   * * `WEBHOOK` -> WebHookNotificationConfig
   * * `SLACK` -> SlackNotificationConfig
   * * `HIPCHAT` -> HipChatNotificationConfig
   * * `VICTOROPS` -> VictorOpsNotificationConfig
   * * `SERVICE_NOW` -> ServiceNowNotificationConfig
   * * `XMATTERS` -> XMattersNotificationConfig
   * * `ANSIBLETOWER` -> AnsibleTowerNotificationConfig
   * * `OPS_GENIE` -> OpsGenieNotificationConfig
   * * `JIRA` -> JiraNotificationConfig
   * * `TRELLO` -> TrelloNotificationConfig
   */
  type:
    | "ANSIBLETOWER"
    | "EMAIL"
    | "HIPCHAT"
    | "JIRA"
    | "OPS_GENIE"
    | "PAGER_DUTY"
    | "SERVICE_NOW"
    | "SLACK"
    | "TRELLO"
    | "VICTOROPS"
    | "WEBHOOK"
    | "XMATTERS";
}

/**
 * Configuration of the OpsGenie notification.
 */
export type OpsGenieNotificationConfig = NotificationConfig & { apiKey?: string; domain?: string; message?: string };

/**
 * Configuration of the PagerDuty notification.
 */
export type PagerDutyNotificationConfig = NotificationConfig & {
  account?: string;
  serviceApiKey?: string;
  serviceName?: string;
};

/**
 * Configuration of the ServiceNow notification.
 */
export type ServiceNowNotificationConfig = NotificationConfig & {
  instanceName?: string;
  url?: string;
  username?: string;
  password?: string;
  message?: string;
  sendIncidents?: boolean;
  sendEvents?: boolean;
};

/**
 * Configuration of the Slack notification.
 */
export type SlackNotificationConfig = NotificationConfig & { url?: string; channel?: string; title?: string };

/**
 * Configuration of the Trello notification.
 */
export type TrelloNotificationConfig = NotificationConfig & {
  applicationKey?: string;
  authorizationToken?: string;
  boardId?: string;
  listId?: string;
  resolvedListId?: string;
  text?: string;
  description?: string;
};

/**
 * Configuration of the VictorOps notification.
 */
export type VictorOpsNotificationConfig = NotificationConfig & {
  apiKey?: string;
  routingKey?: string;
  message?: string;
};

/**
 * Configuration of the custom WebHook notification.
 */
export type WebHookNotificationConfig = NotificationConfig & {
  url?: string;
  acceptAnyCertificate?: boolean;
  payload?: string;
  headers?: HttpHeader[];
  notifyEventMergesEnabled?: boolean;
};

/**
 * Configuration of the xMatters notification.
 */
export type XMattersNotificationConfig = NotificationConfig & {
  url?: string;
  acceptAnyCertificate?: boolean;
  headers?: HttpHeader[];
  payload?: string;
};

/**
 * The state of the plugin.
 */
export interface PluginState {
  /** The ID of the plugin. */
  pluginId?: string;

  /** The version of the plugin (for example `1.0.0`). */
  version?: string;

  /** The ID of the endpoint where the state is detected - Active Gate only. */
  endpointId?: string;

  /** The state of the plugin. */
  state?:
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

  /** A short description of the state. */
  stateDescription?: string;

  /**
   * The timestamp when the state was detected, in UTC milliseconds.
   * @format int64
   */
  timestamp?: number;

  /** The ID of the host on which the plugin runs. */
  hostId?: string;

  /** The ID of the entity on which the plugin is active. */
  processId?: string;
}

/**
 * A list of plugin states.
 * @example {"pluginId":"custom.remote.python.demo","version":"1.0.0","endpointId":"-8213819843595439277","state":"ERROR_AUTH","stateDescription":"Could not authorize","timestamp":1556199097994}
 */
export interface PluginStateList {
  /** A list of plugin states. */
  states?: PluginState[];
}

/**
 * Configuration of a plugin endpoint.
 * @example {"id":"-2183662974968812535","pluginId":"custom.remote.python.demo","name":"Demo endpoint","enabled":true,"properties":{"serverIp":"127.0.0.1","password":"","username":"dynatrace","dropdownProperty":"two"},"activeGatePluginModule":{"id":"-8844900174269363000"}}
 */
export interface RemotePluginEndpoint {
  /** The ID of the endpoint. */
  id?: string;

  /** The ID of the plugin to which the endpoint belongs. */
  pluginId?: string;

  /** The name of the endpoint, displayed in Dynatrace. */
  name?: string;

  /** The endpoint is enabled (`true`) or disabled (`false`). */
  enabled?: boolean;

  /**
   * The list of endpoint parameters.
   *
   *  Each parameter is a property-value pair.
   */
  properties?: Record<string, string>;

  /** The short representation of a Dynatrace entity. */
  activeGatePluginModule: EntityShortRepresentation;
}

/**
 * General configuration of a plugin.
 * @example {"id":"custom.remote.python.demo","name":"ActiveGate demo plugin","version":"1.01","type":"ActiveGate","metricGroup":"custom.demo_metrics","properties":[{"key":"serverIp","type":"STRING","defaultValue":"127.0.0.1"},{"key":"password","type":"PASSWORD","defaultValue":""},{"key":"username","type":"STRING","defaultValue":"dynatrace"},{"key":"dropdownProperty","type":"DROPDOWN","defaultValue":"one","dropdownValues":["one","two","three"]}]}
 */
export interface Plugin {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The ID of the plugin, for example `custom.remote.python.demo`. */
  id?: string;

  /** The name of the plugin, displayed in Dynatrace. */
  name?: string;

  /** The version of the plugin, displayed in Dynatrace. */
  version?: string;

  /** The type of the plugin. It indicates the runtime environment of the plugin (for example, ActiveGate). */
  type?: "ActiveGate" | "JMX" | "OneAgent" | "PMI";

  /** The metric group of the plugin. All the metrics, captured by the plugin are children of this group. */
  metricGroup?: string;

  /** A list of plugin properties. */
  properties?: PluginProperty[];
}

/**
 * A property of a plugin.
 */
export interface PluginProperty {
  /** The key of the property. */
  key?: string;

  /** The type of the property. */
  type?: string;

  /** The default value of the property. */
  defaultValue?: string;

  /**
   * The list of possible values of the property.
   *
   *  If such a list is defined, only values from this list can be assigned to the property.
   */
  dropdownValues?: string[];
}

/**
 * The short representation of a remote environment.
 */
export interface RemoteEnvironmentConfigStub {
  /**
   * The network scope of the remote environment:
   * * `EXTERNAL`: The remote environment is located in an another network.
   * * `INTERNAL`: The remote environment is located in the same network.
   * * `CLUSTER`: The remote environment is located in the same cluster.
   *
   * Dynatrace SaaS can only use `EXTERNAL`.
   * If not set, `EXTERNAL` is used.
   */
  networkScope?: "CLUSTER" | "EXTERNAL" | "INTERNAL";
  name?: string;
  id: string;

  /** The display name of the remote environment. */
  uri?: string;
}

export interface RemoteEnvironmentConfigDto {
  /**
   * The network scope of the remote environment:
   * * `EXTERNAL`: The remote environment is located in an another network.
   * * `INTERNAL`: The remote environment is located in the same network.
   * * `CLUSTER`: The remote environment is located in the same cluster.
   *
   * Dynatrace SaaS can only use `EXTERNAL`.
   * If not set, `EXTERNAL` is used.
   * @example EXTERNAL
   */
  networkScope?: "CLUSTER" | "EXTERNAL" | "INTERNAL";

  /** The ID of the configuration. */
  id?: string;

  /** The display name of the remote environment. */
  displayName: string;

  /** The URI of the remote environment. */
  uri: string;

  /**
   * The API token granting access to the remote environment.
   *
   * The token must have the **Fetch data from a remote environment** (`RestRequestForwarding`) scope.
   * For security reasons, GET requests return this field as `null`.
   */
  token?: string;
}

export interface RemoteEnvironmentConfigListDto {
  values?: RemoteEnvironmentConfigStub[];
}

/**
* Configuration of a dashboard report. 

The dashboard report provides a public link to the associated dashboard with a custom reporting period: last week for weekly subscribers or last month for monthly subscribers.
* @example {"id":"337d883e-98c3-4dac-b8f2-1a9cdbd05969","type":"DASHBOARD","dashboardId":"8dd67562-8bf5-4a09-830d-4e0ca992abd6","enabled":"true","subscriptions":{"WEEK":["demo@email.com"],"MONTH":["demo@email.com","demo2@email.com"]}}
*/
export interface DashboardReport {
  /** The ID of the report. */
  id?: string;
  type: "DASHBOARD";

  /** The ID of the associated dashboard. */
  dashboardId: string;

  /** The email notifications for the dashboard report are enabled (`true`) or disabled (`false`). */
  enabled?: boolean;

  /** A list of the report subscribers. */
  subscriptions: DashboardReportSubscription;
}

/**
 * A list of the report subscribers.
 */
export interface DashboardReportSubscription {
  /**
   * A list of weekly subscribers.
   *
   * Weekly subscribers receive the report every Monday at midnight.
   *  You can specify email addresses or Dynatrace user IDs here.
   */
  WEEK?: string[];

  /**
   * A list of monthly subscribers.
   *
   * Monthly subscribers receive the report on the first Monday of the month at midnight.
   * You can specify email addresses or Dynatrace user IDs here.
   */
  MONTH?: string[];
}

/**
 * Configuration of a report subscription.
 * @example {"schedule":"WEEK","recipients":["demo@email.com","demo2@email.com"]}
 */
export interface ReportSubscriptions {
  /**
   * The schedule of the subscription.
   *
   *  * Weekly subscribers receive the report every Monday at midnight.
   *  * Monthly subscribers receive the report on the first Monday of the month at midnight.
   */
  schedule: "MONTH" | "WEEK";

  /**
   * A list of the recipients.
   *
   * You can specify email addresses or Dynatrace user IDs here.
   */
  recipients: string[];
}

/**
 * A short representations of the report.
 */
export interface DashboardReportStub {
  /** The ID of the report. */
  id: string;

  /** The type of the report. */
  type: "DASHBOARD";

  /** The ID of the associated dashboard. */
  dashboardId: string;
}

/**
 * A list of short representations of reports.
 * @example {"values":[{"id":"337d883e-98c3-4dac-b8f2-1a9cdbd05969","type":"DASHBOARD","dashboardId":"9eee7ed6-a125-4d9d-bfa7-afdb3404cb36"},{"id":"b059e372-0b35-4d44-869b-95c326748848","type":"DASHBOARD","dashboardId":"26ccd360-828c-4d83-a65e-040ddc31e8f6"}]}
 */
export interface ReportStubList {
  /** A list of reports. */
  values: DashboardReportStub[];
}

export interface CapturedMethod {
  /** Configuration of a method to be captured. */
  method: MethodReference;

  /** What to capture from the method. */
  capture: "ARGUMENT" | "CLASS_NAME" | "METHOD_NAME" | "OCCURRENCES" | "SIMPLE_CLASS_NAME" | "THIS";

  /**
   * The index of the argument to capture. Set `0` to capture the return value, `1` or higher to capture a mehtod argument.
   *
   *  Required if the **capture** is set to `ARGUMENT`.
   *  Not applicable in other cases.
   * @format int32
   * @min 0
   */
  argumentIndex?: number;

  /**
   * The getter chain to apply to the captured object. It is required in one of the following cases:
   *
   *  The **capture** is set to `THIS`.
   *   The **capture** is set to `ARGUMENT`, and the argument is not a primitive, a primitive wrapper class, a string, or an array.
   *  Not applicable in other cases.
   */
  deepObjectAccess?: string;
}

export interface DataSource {
  /** The data source is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The source of the attribute to capture. Works in conjunction with **parameterName** or **methods** and **technology**. */
  source:
    | "CICS_SDK"
    | "CICS_SYSTEM_ID"
    | "CICS_TASK_ID"
    | "CICS_TRANSACTION_CALL_TYPE"
    | "CLIENT_IP"
    | "CUSTOM_ATTRIBUTE"
    | "IIB_LABEL"
    | "IIB_NODE"
    | "IMS_TRANSACTION_CALL_TYPE"
    | "METHOD_PARAM"
    | "MQ_CORRELATION_ID"
    | "MQ_MESSAGE_ID"
    | "MQ_MESSAGE_SIZE"
    | "POST_PARAMETER"
    | "QUERY_PARAMETER"
    | "REQUEST_HEADER"
    | "RESPONSE_HEADER"
    | "SERVER_VARIABLE"
    | "SESSION_ATTRIBUTE"
    | "SPAN_ATTRIBUTE"
    | "URI"
    | "URI_PATH";

  /** Process values as specified. */
  valueProcessing?: ValueProcessing;

  /** The technology of the method to capture if the **source** value is `METHOD_PARAM`. \n\n Not applicable in other cases. */
  technology?: "DOTNET" | "JAVA" | "PHP";

  /** The technology of the session attribute to capture if the **source** value is `SESSION_ATTRIBUTE`. \n\n Not applicable in other cases. */
  sessionAttributeTechnology?: "ASP_NET" | "ASP_NET_CORE" | "JAVA" | "PHP";

  /** The technology of the server variable to capture if the **source** value is `SERVER_VARIABLE`. \n\n Not applicable in other cases. */
  serverVariableTechnology?: "ASP_NET";

  /**
   * The method specification if the **source** value is `METHOD_PARAM`.
   *
   *  Not applicable in other cases.
   */
  methods?: CapturedMethod[];

  /**
   * The name of the web request parameter to capture.
   *
   *  Required if the **source** is one of the following: `POST_PARAMETER`, `GET_PARAMETER`, `REQUEST_HEADER`, `RESPONSE_HEADER`, `CUSTOM_ATTRIBUTE`.
   *  Not applicable in other cases.
   */
  parameterName?: string;

  /** Conditions for data capturing. */
  scope?: ScopeConditions;

  /**
   * Specifies the location where the values are captured and stored.
   *
   *  Required if the **source** is one of the following: `GET_PARAMETER`, `URI`, `REQUEST_HEADER`, `RESPONSE_HEADER`.
   *  Not applicable in other cases.
   *  If the **source** value is `REQUEST_HEADER` or `RESPONSE_HEADER`, the `CAPTURE_AND_STORE_ON_BOTH` location is not allowed.
   */
  capturingAndStorageLocation?:
    | "CAPTURE_AND_STORE_ON_BOTH"
    | "CAPTURE_AND_STORE_ON_CLIENT"
    | "CAPTURE_AND_STORE_ON_SERVER"
    | "CAPTURE_ON_CLIENT_STORE_ON_SERVER";

  /**
   * The IBM integration bus node type for which the value is captured.
   *
   *  This or `iibMethodNodeCondition` is required if the **source** is: `IIB_NODE`.
   *  Not applicable in other cases.
   */
  iibNodeType?:
    | "AGGREGATE_CONTROL_NODE"
    | "AGGREGATE_REPLY_NODE"
    | "AGGREGATE_REQUEST_NODE"
    | "CALLABLE_FLOW_REPLY_NODE"
    | "COLLECTOR_NODE"
    | "COMPUTE_NODE"
    | "DATABASE_NODE"
    | "DATABASE_RETRIEVE_NODE"
    | "DATABASE_ROUTE_NODE"
    | "DECISION_SERVICE_NODE"
    | "DOT_NET_COMPUTE_NODE"
    | "FILE_READ_NODE"
    | "FILTER_NODE"
    | "FLOW_ORDER_NODE"
    | "GROUP_COMPLETE_NODE"
    | "GROUP_GATHER_NODE"
    | "GROUP_SCATTER_NODE"
    | "HTTP_ASYNC_REQUEST"
    | "HTTP_ASYNC_RESPONSE"
    | "HTTP_HEADER"
    | "HTTP_INPUT"
    | "HTTP_REPLY"
    | "HTTP_REQUEST"
    | "JAVA_COMPUTE_NODE"
    | "JMS_CLIENT_RECEIVE"
    | "JMS_CLIENT_REPLY_NODE"
    | "JMS_HEADER"
    | "JMS_INPUT_NODE"
    | "JMS_OUTPUT_NODE"
    | "JMS_REPLY_NODE"
    | "MQ_GET_NODE"
    | "MQ_INPUT_NODE"
    | "MQ_OUTPUT_NODE"
    | "MQ_REPLY_NODE"
    | "PASSTHRU_NODE"
    | "PUBLICATION_NODE"
    | "RESET_CONTENT_DESCRIPTOR_NODE"
    | "REST_ASYNC_REQUEST_NODE"
    | "REST_ASYNC_RESPONSE_NODE"
    | "REST_REQUEST_NODE"
    | "RE_SEQUENCE_NODE"
    | "ROUTE_NODE"
    | "SAP_REPLY_NODE"
    | "SCA_REPLY_NODE"
    | "SECURITY_PEP"
    | "SEQUENCE_NODE"
    | "SOAP_ASYNC_REQUEST_NODE"
    | "SOAP_ASYNC_RESPONSE_NODE"
    | "SOAP_EXTRACT_NODE"
    | "SOAP_INPUT_NODE"
    | "SOAP_REPLY_NODE"
    | "SOAP_REQUEST_NODE"
    | "SOAP_WRAPPER_NODE"
    | "SR_RETRIEVE_ENTITY_NODE"
    | "SR_RETRIEVE_IT_SERVICE_NODE"
    | "THROW_NODE"
    | "TRACE_NODE"
    | "TRY_CATCH_NODE"
    | "VALIDATE_NODE"
    | "WS_REPLY_NODE"
    | "XSL_MQSI_NODE";

  /** IBM integration bus label node name condition for which the value is captured. */
  iibMethodNodeCondition?: ValueCondition;

  /** IBM integration bus label node name condition for which the value is captured. */
  cicsSDKMethodNodeCondition?: ValueCondition;

  /** IBM integration bus label node name condition for which the value is captured. */
  iibLabelMethodNodeCondition?: ValueCondition;

  /**
   * The key of the span attribute to capture.
   *
   *  Required if the **source** is: `SPAN_ATTRIBUTE`.
   *  Not applicable in other cases.
   */
  spanAttributeKey?: string;

  /**
   * CICS transaction call type condition for which the value is captured.
   *
   *  Required if the **source** is: `CICS_TRANSACTION_CALL_TYPE`.
   *  Not applicable in other cases.
   */
  cicsTransactionCallType?:
    | "CTG"
    | "DPL"
    | "EXPLICIT_ADK"
    | "HTTP"
    | "IMS_CONNECT"
    | "IMS_CONNECT_API"
    | "IMS_ITRA"
    | "IMS_MSC"
    | "IMS_PGM_SWITCH"
    | "IMS_SHARED_QUEUES"
    | "IMS_TRANS_EXEC"
    | "MQ"
    | "SOAP"
    | "START"
    | "TX"
    | "UNKNOWN"
    | "ZOS_CONNECT";

  /**
   * IMS transaction call type condition for which the value is captured.
   *
   *  Required if the **source** is: `IMS_TRANSACTION_CALL_TYPE`.
   *  Not applicable in other cases.
   */
  imsTransactionCallType?:
    | "CTG"
    | "DPL"
    | "EXPLICIT_ADK"
    | "HTTP"
    | "IMS_CONNECT"
    | "IMS_CONNECT_API"
    | "IMS_ITRA"
    | "IMS_MSC"
    | "IMS_PGM_SWITCH"
    | "IMS_SHARED_QUEUES"
    | "IMS_TRANS_EXEC"
    | "MQ"
    | "SOAP"
    | "START"
    | "TX"
    | "UNKNOWN"
    | "ZOS_CONNECT";
}

/**
 * Preprocess by extracting a substring from the original value.
 */
export interface ExtractSubstring {
  /** The position of the extracted string relative to delimiters. */
  position: "AFTER" | "BEFORE" | "BETWEEN";

  /** The delimiter string. */
  delimiter: string;

  /**
   * The end-delimiter string.
   *
   *  Required if the **position** value is `BETWEEN`. Otherwise not allowed.
   */
  endDelimiter?: string;
}

/**
 * Configuration of a method to be captured.
 */
export interface MethodReference {
  /** The visibility of the method to capture. */
  visibility: "INTERNAL" | "PACKAGE_PROTECTED" | "PRIVATE" | "PROTECTED" | "PUBLIC";

  /** The modifiers of the method to capture. */
  modifiers: ("ABSTRACT" | "EXTERN" | "FINAL" | "NATIVE" | "STATIC")[];

  /**
   * The class name where the method to capture resides.
   *
   *  Either this or the **fileName** must be set.
   */
  className?: string;

  /**
   * The file name where the method to capture resides.
   *
   *  Either this or **className** must be set.
   */
  fileName?: string;

  /**
   * The operator of the comparison.
   *
   *  If not set, `EQUALS` is used.
   */
  fileNameMatcher?: "ENDS_WITH" | "EQUALS" | "STARTS_WITH";

  /** The name of the method to capture. */
  methodName: string;

  /** The list of argument types. */
  argumentTypes: string[];

  /** The return type. */
  returnType: string;
}

/**
 * @example {"name":"Query Term","enabled":true,"dataType":"STRING","dataSources":[{"enabled":true,"source":"QUERY_PARAMETER","parameterName":"query","scope":{"tagOfProcessGroup":"SearchFrontend"},"capturingAndStorageLocation":"CAPTURE_AND_STORE_ON_SERVER"}],"normalization":"TO_LOWER_CASE","aggregation":"ALL_DISTINCT_VALUES","confidential":false,"skipPersonalDataMasking":false}
 */
export interface RequestAttribute {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the request attribute.
   * @format uuid
   */
  id?: string;

  /** The name of the request attribute. */
  name: string;

  /** The request attribute is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The data type of the request attribute. */
  dataType: "DOUBLE" | "INTEGER" | "STRING";

  /** The list of data sources. */
  dataSources: DataSource[];

  /**
   * String values transformation.
   *
   *  If the **dataType** is not `string`, set the `Original` here.
   */
  normalization: "ORIGINAL" | "TO_LOWER_CASE" | "TO_UPPER_CASE";

  /** Aggregation type for the request values. */
  aggregation:
    | "ALL_DISTINCT_VALUES"
    | "AVERAGE"
    | "COUNT_DISTINCT_VALUES"
    | "COUNT_VALUES"
    | "FIRST"
    | "LAST"
    | "MAXIMUM"
    | "MINIMUM"
    | "SUM";

  /** Confidential data flag. Set `true` to treat the captured data as confidential. */
  confidential: boolean;

  /**
   * Personal data masking flag. Set `true` to skip masking.
   *
   *  Warning: This will potentially access personalized data.
   */
  skipPersonalDataMasking: boolean;
}

/**
 * Conditions for data capturing.
 */
export interface ScopeConditions {
  /** Only applies to this service technology. */
  serviceTechnology?:
    | "ACTIVE_MQ"
    | "ACTIVE_MQ_ARTEMIS"
    | "ADO_NET"
    | "AIX"
    | "AKKA"
    | "AMAZON_REDSHIFT"
    | "AMQP"
    | "APACHE_CAMEL"
    | "APACHE_CASSANDRA"
    | "APACHE_COUCH_DB"
    | "APACHE_DERBY"
    | "APACHE_HTTP_CLIENT_ASYNC"
    | "APACHE_HTTP_CLIENT_SYNC"
    | "APACHE_HTTP_SERVER"
    | "APACHE_KAFKA"
    | "APACHE_LOG4J"
    | "APACHE_SOLR"
    | "APACHE_STORM"
    | "APACHE_SYNAPSE"
    | "APACHE_TOMCAT"
    | "APPARMOR"
    | "APPLICATION_INSIGHTS_SDK"
    | "ASP_DOTNET"
    | "ASP_DOTNET_CORE"
    | "ASP_DOTNET_CORE_SIGNALR"
    | "ASP_DOTNET_SIGNALR"
    | "ASYNC_HTTP_CLIENT"
    | "AWS_LAMBDA"
    | "AWS_RDS"
    | "AWS_SERVICE"
    | "AXIS"
    | "AZURE_FUNCTIONS"
    | "AZURE_SERVICE_BUS"
    | "AZURE_SERVICE_FABRIC"
    | "AZURE_STORAGE"
    | "BOSHBPM"
    | "CITRIX"
    | "CITRIX_COMMON"
    | "CITRIX_DESKTOP_DELIVERY_CONTROLLERS"
    | "CITRIX_DIRECTOR"
    | "CITRIX_LICENSE_SERVER"
    | "CITRIX_PROVISIONING_SERVICES"
    | "CITRIX_STOREFRONT"
    | "CITRIX_VIRTUAL_DELIVERY_AGENT"
    | "CITRIX_WORKSPACE_ENVIRONMENT_MANAGEMENT"
    | "CITRIX_XEN"
    | "CLOUDFOUNDRY"
    | "CLOUDFOUNDRY_AUCTIONEER"
    | "CLOUDFOUNDRY_BOSH"
    | "CLOUDFOUNDRY_GOROUTER"
    | "COLDFUSION"
    | "CONFLUENT_KAFKA_CLIENT"
    | "CONTAINERD"
    | "CORE_DNS"
    | "COUCHBASE"
    | "CRIO"
    | "CXF"
    | "DATASTAX"
    | "DB2"
    | "DIEGO_CELL"
    | "DOCKER"
    | "DOTNET"
    | "DOTNET_REMOTING"
    | "ELASTIC_SEARCH"
    | "ENVOY"
    | "ERLANG"
    | "ETCD"
    | "F5_LTM"
    | "FSHARP"
    | "GARDEN"
    | "GLASSFISH"
    | "GO"
    | "GRAAL_TRUFFLE"
    | "GRPC"
    | "GRSECURITY"
    | "HADOOP"
    | "HADOOP_HDFS"
    | "HADOOP_YARN"
    | "HAPROXY"
    | "HEAT"
    | "HESSIAN"
    | "HORNET_Q"
    | "IBM_CICS_REGION"
    | "IBM_CICS_TRANSACTION_GATEWAY"
    | "IBM_IMS_CONNECT_REGION"
    | "IBM_IMS_CONTROL_REGION"
    | "IBM_IMS_MESSAGE_PROCESSING_REGION"
    | "IBM_IMS_SOAP_GATEWAY"
    | "IBM_INTEGRATION_BUS"
    | "IBM_MQ"
    | "IBM_MQ_CLIENT"
    | "IBM_WEBSHPRERE_APPLICATION_SERVER"
    | "IBM_WEBSHPRERE_LIBERTY"
    | "IBM_WEBSPHERE_APPLICATION_SERVER"
    | "IBM_WEBSPHERE_LIBERTY"
    | "IIS"
    | "IIS_APP_POOL"
    | "ISTIO"
    | "JAVA"
    | "JAX_WS"
    | "JBOSS"
    | "JBOSS_EAP"
    | "JDK_HTTP_SERVER"
    | "JERSEY"
    | "JETTY"
    | "JRUBY"
    | "JYTHON"
    | "KUBERNETES"
    | "LIBC"
    | "LIBVIRT"
    | "LINKERD"
    | "MARIADB"
    | "MEMCACHED"
    | "MICROSOFT_SQL_SERVER"
    | "MONGODB"
    | "MSSQL_CLIENT"
    | "MULE_ESB"
    | "MYSQL"
    | "MYSQL_CONNECTOR"
    | "NETFLIX_SERVO"
    | "NETTY"
    | "NGINX"
    | "NODE_JS"
    | "OK_HTTP_CLIENT"
    | "ONEAGENT_SDK"
    | "OPENCENSUS"
    | "OPENSHIFT"
    | "OPENSTACK_COMPUTE"
    | "OPENSTACK_CONTROLLER"
    | "OPENTELEMETRY"
    | "OPENTRACING"
    | "OPEN_LIBERTY"
    | "ORACLE_DATABASE"
    | "ORACLE_WEBLOGIC"
    | "OWIN"
    | "PERL"
    | "PHP"
    | "PHP_FPM"
    | "PLAY"
    | "POSTGRE_SQL"
    | "POSTGRE_SQL_DOTNET_DATA_PROVIDER"
    | "POWER_DNS"
    | "PROGRESS"
    | "PYTHON"
    | "QOS_LOGBACK"
    | "RABBIT_MQ"
    | "REACTOR_CORE"
    | "REDIS"
    | "RESTEASY"
    | "RESTLET"
    | "RIAK"
    | "RUBY"
    | "SAG_WEBMETHODS_IS"
    | "SAP"
    | "SAP_HANADB"
    | "SAP_HYBRIS"
    | "SAP_MAXDB"
    | "SAP_SYBASE"
    | "SCALA"
    | "SELINUX"
    | "SHAREPOINT"
    | "SPARK"
    | "SPRING"
    | "SQLITE"
    | "THRIFT"
    | "TIBCO"
    | "TIBCO_BUSINESS_WORKS"
    | "TIBCO_EMS"
    | "UNDERTOW_IO"
    | "VARNISH_CACHE"
    | "VIM2"
    | "VIRTUAL_MACHINE_KVM"
    | "VIRTUAL_MACHINE_QEMU"
    | "WILDFLY"
    | "WINDOWS_CONTAINERS"
    | "WINK"
    | "ZERO_MQ"
    | "ZOS_CONNECT";

  /** Only applies to this process group. Note that this can't be transferred between different clusters or environments. */
  processGroup?: string;

  /** Only applies to this host group. */
  hostGroup?: string;

  /** Only apply to process groups matching this tag. */
  tagOfProcessGroup?: string;
}

/**
 * IBM integration bus label node name condition for which the value is captured.
 */
export interface ValueCondition {
  /** Operator comparing the extracted value to the comparison value. */
  operator:
    | "BEGINS_WITH"
    | "BEGINS_WITH_ANY_OF"
    | "CONTAINS"
    | "ENDS_WITH"
    | "ENDS_WITH_ANY_OF"
    | "EQUALS"
    | "EQUALS_ANY_OF";

  /** Negate the comparison. */
  negate: boolean;

  /** The value to compare to. */
  value: string;
}

/**
 * Process values as specified.
 */
export interface ValueProcessing {
  /** IBM integration bus label node name condition for which the value is captured. */
  valueCondition?: ValueCondition;

  /** Extract value from captured data per regex. */
  valueExtractorRegex?: string;

  /** Split (preprocessed) string values at this separator. */
  splitAt?: string;

  /** Prune Whitespaces. Defaults to false. */
  trim: boolean;

  /** Preprocess by extracting a substring from the original value. */
  extractSubstring?: ExtractSubstring;
}

/**
 * The request naming rule.
 * @example {"enabled":true,"namingPattern":"renamed request","conditions":[{"attribute":"WEBREQUEST_URL_PATH","comparisonInfo":{"type":"STRING","comparison":"BEGINS_WITH","value":"/url","negate":false,"caseSensitive":false}}]}
 */
export interface RequestNaming {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the request naming rule.
   * @format uuid
   */
  id?: string;

  /**
   * The order string. Sorting request namings alphabetically by their order string determines their relative ordering.
   *
   * Typically this is managed by Dynatrace internally and will not be present in GET responses nor used if present in PUT/POST requests, except where noted otherwise.
   */
  order?: string;

  /** The rule is enabled (`true`) or disabled (`false`). */
  enabled: boolean;

  /** The name to be assigned to matching requests. */
  namingPattern: string;

  /** Specifies the management zones for which this rule should be applied. */
  managementZones?: string[];

  /**
   * The set of conditions for the request naming rule usage.
   *
   *  You can specify several conditions. The request has to match **all** the specified conditions for the rule to trigger.
   */
  conditions: Condition[];

  /**
   * The list of custom placeholders to be used in the naming pattern.
   *
   *  It enables you to extract a request attribute value or other request attribute and use it in the request naming pattern.
   */
  placeholders?: Placeholder[];
}

/**
 * The resource naming rule.
 * @example {"image":[".jpg",".png",".gif",".jpeg",".bmp",".svg",".ico",".woff",".ttf",".otf"],"binary":[".exe",".zip"]}
 */
export interface ResourceNaming {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The list of image extensions that will be renamed to `Image`. */
  image: string[];

  /** The list of binary extensions that will be renamed to `Binary`. */
  binary: string[];
}

/**
 * The transformation of the `AFTER` type.The transformation removes everything before the specified delimiter and keeps the value after it.
 */
export type AfterTransformation = TransformationBase & { delimiter?: string };

/**
* The contribution to the service ID calculation from the detected application ID. 

 You have two mutually exclusive options: 
* Override the detected value with a specified static value. Specify the new value in the **valueOverride** field. 
* Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
*/
export interface ApplicationId {
  /** Transformations to be applied to the detected value. */
  transformations?: TransformationBase[];

  /** The value to be used instead of the detected value. */
  valueOverride?: string;
}

/**
* The transformation of the `BEFORE` type. 

The transformation keeps the value before the specified delimiter and removes everything after it.
*/
export type BeforeTransformation = TransformationBase & { delimiter?: string };

/**
 * The transformation of the `BETWEEN` type.The transformation keeps value between the specified delimiters and removes everything outside them.
 */
export type BetweenTransformation = TransformationBase & { after?: string; before?: string };

/**
* The condition of the rule. 

The actual set of fields depends on the type of the condition. Find the list of actual objects in the description of the **type** field or see [Service detection API - JSON models](https://dt-url.net/2ie3slq).
*/
export interface CompareOperation {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `EQUALS` -> EqualsCompareOperation
   * * `STRING_CONTAINS` -> StringContainsCompareOperation
   * * `STARTS_WITH` -> StartsWithCompareOperation
   * * `ENDS_WITH` -> EndsWithCompareOperation
   * * `EXISTS` -> ExistsCompareOperation
   * * `IP_IN_RANGE` -> IpInRangeCompareOperation
   * * `LESS_THAN` -> LessThanCompareOperation
   * * `GREATER_THAN` -> GreaterThanCompareOperation
   * * `INT_EQUALS` -> IntEqualsCompareOperation
   * * `STRING_EQUALS` -> StringEqualsCompareOperation
   * * `TAG` -> TagCompareOperation
   */
  type:
    | "ENDS_WITH"
    | "EQUALS"
    | "EXISTS"
    | "GREATER_THAN"
    | "INT_EQUALS"
    | "IP_IN_RANGE"
    | "LESS_THAN"
    | "STARTS_WITH"
    | "STRING_CONTAINS"
    | "STRING_EQUALS"
    | "TAG";
}

/**
 * A condition of the service detection rule.
 */
export interface ConditionsFullWebRequestAttributeTypeDto {
  /** The type of the attribute to be checked. */
  attributeType: "APPLICATION_ID" | "CONTEXT_ROOT" | "PG_TAG" | "SERVER_NAME" | "URL_HOST_NAME" | "URL_PATH";

  /**
   * A list of conditions for the rule.
   *
   * If several conditions are specified, the AND logic applies.
   */
  compareOperations?: CompareOperation[];
}

/**
* The contribution to the service ID calculation from the detected context root. 

 The context root is the first segment of the request URL after server name. For example, in the `www.dynatrace.com/support/help/dynatrace-api/` URL the context root is `support`. 

You have two options: 
* Keep a part of the detected URL. Specify the number of segments to be kept in the **segmentsToCopyFromUrlPath** field. 
* Dynamically transform the detected URL. Specify the transformation parameters in the **transformations** field. 

You can use one or both options. If you use both, the transformation applies to the modified URL.
*/
export interface ContextRoot {
  /** Transformations to be applied to the detected value. */
  transformations?: ContextRootTransformation[];

  /**
   * The number of segments of the URL to be kept.
   *
   * The URL is divided by slashes (`/`), the indexing starts with 1 at context root.
   * For example, if you specify `2` for the `www.dynatrace.com/support/help/dynatrace-api/` URL, the value of `support/help` is used.
   * @format int32
   */
  segmentsToCopyFromUrlPath?: number;
}

/**
* Configuration of transformation of the detected value. 

If several transformations are specified, they are handled sequentially from top to bottom. Each transformation is applied to the result of the preceding transformation. For example, the second transformation is applied to the result of the first transformation. 

The actual set of fields depends on the `type` of the transformation.
*/
export interface ContextRootTransformation {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `BEFORE` -> BeforeTransformation
   * * `REPLACE_BETWEEN` -> ReplaceBetweenTransformation
   * * `REMOVE_NUMBERS` -> RemoveNumbersTransformation
   * * `REMOVE_CREDIT_CARDS` -> RemoveCreditCardNumbersTransformation
   * * `REMOVE_IBANS` -> RemoveIBANsTransformation
   * * `REMOVE_IPS` -> RemoveIPsTransformation
   */
  type: "BEFORE" | "REMOVE_CREDIT_CARDS" | "REMOVE_IBANS" | "REMOVE_IPS" | "REMOVE_NUMBERS" | "REPLACE_BETWEEN";
}

/**
* The condition of the `ENDS_WITH` type. 

The condition checks whether the string value ends with the specified text.
*/
export type EndsWithCompareOperation = CompareOperation & { negate?: boolean; ignoreCase?: boolean; values?: string[] };

/**
* The condition of the `EQUALS` type. 

The condition checks whether the detected value equals the specified one.
*/
export type EqualsCompareOperation = CompareOperation & { negate?: boolean; ignoreCase?: boolean; values?: object[] };

/**
* The condition of the `EXISTS` type. 

The condition checks whether the specified attribute exists.
*/
export type ExistsCompareOperation = CompareOperation & { negate?: boolean };

/**
 * The service detection rule of the `FULL_WEB_REQUEST` type.
 * @example {"type":"FULL_WEB_REQUEST","name":"My sample rule","description":"REST API example","enabled":true,"managementZones":["zone 1"],"conditions":[{"attributeType":"APPLICATION_ID","compareOperations":[{"type":"STRING_CONTAINS","invert":"false","ignoreCase":"false","values":["value1","value2"]}]}],"applicationId":{"valueOverride":"abc"},"contextRoot":{"segmentsToCopyFromUrlPath":2,"transformations":[{"type":"BEFORE","delimiter":"/"}]},"serverName":{"transformations":[{"type":"BEFORE","delimiter":"-"}]}}
 */
export interface FullWebRequestRule {
  /** The type of the service detection rule. */
  type: string;

  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The management zone (specified by the ID) of the process group for which this service detection rule should be created.
   *
   *  You can specify only 1 management zone here.
   */
  managementZones?: string[];

  /**
   * The ID of the service detection rule.
   * @format uuid
   */
  id?: string;

  /**
   * The order of the rule in the rules list.
   *
   *  The rules are evaluated from top to bottom. The first matching rule applies.
   */
  order?: string;

  /** The name of the rule. */
  name: string;

  /** A short description of the rule. */
  description?: string;

  /** The rule is enabled(`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * A list of conditions of the rule.
   *
   * If several conditions are specified, the AND logic applies.
   */
  conditions?: ConditionsFullWebRequestAttributeTypeDto[];

  /**
   * The contribution to the service ID calculation from the detected application ID.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  applicationId?: ApplicationId;

  /**
   * The contribution to the service ID calculation from the detected context root.
   *
   *  The context root is the first segment of the request URL after server name. For example, in the `www.dynatrace.com/support/help/dynatrace-api/` URL the context root is `support`.
   * You have two options:
   * * Keep a part of the detected URL. Specify the number of segments to be kept in the **segmentsToCopyFromUrlPath** field.
   * * Dynamically transform the detected URL. Specify the transformation parameters in the **transformations** field.
   * You can use one or both options. If you use both, the transformation applies to the modified URL.
   */
  contextRoot?: ContextRoot;

  /**
   * The contribution to the service ID calculation from the detected server name.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  serverName?: ServerName;
}

/**
* The condition of the `GREATER_THAN` type. 

The condition checks whether the integer value is greater than the specified value.
*/
export type GreaterThanCompareOperation = CompareOperation & { value?: number };

/**
* The condition of the `INT_EQUALS` type. 

The condition checks whether the integer value equals the specified value.
*/
export type IntEqualsCompareOperation = CompareOperation & { negate?: boolean; values?: number[] };

/**
* The condition of the `IP_IN_RANGE` type. 

The condition checks whether the IP address belongs to a specified range.
*/
export type IpInRangeCompareOperation = CompareOperation & { negate?: boolean; lower?: string; upper?: string };

/**
* The condition of the `LESS_THAN` type. 

The condition checks whether the integer value is less than the specified value.
*/
export type LessThanCompareOperation = CompareOperation & { value?: number };

/**
* The transformation of the `REMOVE_CREDIT_CARDS` type. 

The transformation automatically detects and removes credit card numbers. No additional parameters needed.
*/
export type RemoveCreditCardNumbersTransformation = TransformationBase;

/**
* The transformation of the `REMOVE_IBANS` type. 

The transformation automatically detects and removes International Bank Account Numbers (IBAN). No additional parameters needed.
*/
export type RemoveIBANsTransformation = TransformationBase;

/**
* The transformation of the `REMOVE_IPS` type. 

The transformation automatically detects and removes IP addresses. No additional parameters needed.
*/
export type RemoveIPsTransformation = TransformationBase;

/**
* The transformation of the `REMOVE_NUMBERS` type. 

The transformation removes any numbers from the detected value.
*/
export type RemoveNumbersTransformation = TransformationBase & { minDigitCount?: number; includeHexNumbers?: boolean };

/**
* The transformation of the `REPLACE_BETWEEN` type. 

The transformation replaces the content in between specified delimiters with specified static value and removes everything outside them.
*/
export type ReplaceBetweenTransformation = TransformationBase & {
  after?: string;
  before?: string;
  replacement?: string;
};

/**
* The contribution to the service ID calculation from the detected server name. 

 You have two mutually exclusive options: 
* Override the detected value with a specified static value. Specify the new value in the **valueOverride** field. 
* Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
*/
export interface ServerName {
  /** Transformations to be applied to the detected value. */
  transformations?: TransformationBase[];

  /** The value to be used instead of the detected value. */
  valueOverride?: string;
}

/**
* The transformation of the `SPLIT_SELECT` type. 

The transformation splits the detected value into an array and keeps the specified element of the array.
*/
export type SplitSelectTransformation = TransformationBase & { delimiter?: string; itemIndex?: number };

/**
* The condition of the `STARTS_WITH` type. 

The condition checks whether the string value starts with the specified text.
*/
export type StartsWithCompareOperation = CompareOperation & {
  negate?: boolean;
  ignoreCase?: boolean;
  values?: string[];
};

/**
* The condition of the `STRING_CONTAINS` type. 

The condition checks whether the string value contains the specified text.
*/
export type StringContainsCompareOperation = CompareOperation & {
  negate?: boolean;
  ignoreCase?: boolean;
  values?: string[];
};

/**
* The condition of the `STRING_EQUALS` type. 

The condition checks whether the string value equals the specified text.
*/
export type StringEqualsCompareOperation = CompareOperation & {
  negate?: boolean;
  ignoreCase?: boolean;
  values?: string[];
};

/**
* The condition of the `TAG` type. 

The condition checks if the process group of the potential service is tagged with a specific tag.
*/
export type TagCompareOperation = CompareOperation & { compareKeyOnly?: boolean; tags?: TagInfo[] };

/**
* The transformation of the `TAKE_SEGMENTS` type. 

The transformation splits the detected value into an array and keeps the specified number of first or last elements.
*/
export type TakeSegmentsTransformation = TransformationBase & {
  segmentCount?: number;
  delimiter?: string;
  takeFromEnd?: boolean;
};

/**
* Configuration of transformation of the detected value. 

If several transformations are specified, they are handled sequentially from top to bottom. Each transformation is applied to the result of the preceding transformation. For example, the second transformation is applied to the result of the first transformation. 

The actual set of fields depends on the type of the transformation. Find the list of actual objects in the description of the **type** field or see [Service detection API - JSON models](https://dt-url.net/2ie3slq).
*/
export interface TransformationBase {
  /**
   * Defines the actual set of fields depending on the value. See one of the following objects:
   *
   * * `BEFORE` -> BeforeTransformation
   * * `AFTER` -> AfterTransformation
   * * `BETWEEN` -> BetweenTransformation
   * * `REPLACE_BETWEEN` -> ReplaceBetweenTransformation
   * * `REMOVE_NUMBERS` -> RemoveNumbersTransformation
   * * `REMOVE_CREDIT_CARDS` -> RemoveCreditCardNumbersTransformation
   * * `REMOVE_IBANS` -> RemoveIBANsTransformation
   * * `REMOVE_IPS` -> RemoveIPsTransformation
   * * `SPLIT_SELECT` -> SplitSelectTransformation
   * * `TAKE_SEGMENTS` -> TakeSegmentsTransformation
   */
  type:
    | "AFTER"
    | "BEFORE"
    | "BETWEEN"
    | "REMOVE_CREDIT_CARDS"
    | "REMOVE_IBANS"
    | "REMOVE_IPS"
    | "REMOVE_NUMBERS"
    | "REPLACE_BETWEEN"
    | "SPLIT_SELECT"
    | "TAKE_SEGMENTS";
}

/**
 * A condition of the service detection rule.
 */
export interface ConditionsFullWebServiceAttributeTypeDto {
  /** The type of the attribute to be checked. */
  attributeType:
    | "APPLICATION_ID"
    | "CONTEXT_ROOT"
    | "FRAMEWORK"
    | "IS_SOAP_SERVICE"
    | "PG_TAG"
    | "SERVER_NAME"
    | "URL_HOST_NAME"
    | "URL_PATH"
    | "WEBSERVICE_METHOD"
    | "WEBSERVICE_NAME"
    | "WEBSERVICE_NAMESPACE";

  /**
   * A list of conditions for the rule.
   *
   * If several conditions are specified, the AND logic applies.
   */
  compareOperations?: CompareOperation[];
}

/**
* The service detection rule of the `FULL_WEB_SERVICE` type. 

If you have a condition with the **attributeType** set to `FRAMEWORK`, the **values** field from **compareOperations** is limited to the following possible values: 

 * `AXIS` 
 * `CXF` 
 * `HESSIAN` 
 * `JAX_WS_RI` 
 * `JBOSS` 
 * `JERSEY` 
 * `PROGRESS` 
 * `RESTEASY` 
 * `RESTLET` 
 * `SPRING` 
 * `TIBCO` 
 * `WEBLOGIC` 
 * `WEBMETHODS` 
 * `WEBSPHERE` 
 * `WINK`
* @example {"type":"FULL_WEB_SERVICE","name":"My sample rule","description":"REST API example","enabled":true,"detectAsWebRequestService":false,"managementZones":["zone 1"],"conditions":[{"attributeType":"APPLICATION_ID","compareOperations":[{"type":"STRING_CONTAINS","invert":"false","ignoreCase":"false","values":["value1","value2"]}]}],"webServiceName":{"valueOverride":"abc"},"webServiceNameSpace":{"valueOverride":"abc"},"applicationId":{"valueOverride":"abc"},"contextRoot":{"segmentsToCopyFromUrlPath":2,"transformations":[{"type":"BEFORE","delimiter":"/"}]},"serverName":{"transformations":[{"type":"BEFORE","delimiter":"-"}]}}
*/
export interface FullWebServiceRule {
  /** The type of the service detection rule. */
  type: string;

  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The management zone (specified by the ID) of the process group for which this service detection rule should be created.
   *
   *  You can specify only 1 management zone here.
   */
  managementZones?: string[];

  /**
   * The ID of the service detection rule.
   * @format uuid
   */
  id?: string;

  /**
   * The order of the rule in the rules list.
   *
   *  The rules are evaluated from top to bottom. The first matching rule applies.
   */
  order?: string;

  /** The name of the rule. */
  name: string;

  /** A short description of the rule. */
  description?: string;

  /** The rule is enabled(`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * A list of conditions of the rule.
   *
   * If several conditions are specified, the AND logic applies.
   */
  conditions?: ConditionsFullWebServiceAttributeTypeDto[];

  /**
   * Detect the matching requests as full web services (`false`) or web request services (`true`).
   *
   * Setting this field to `true` prevents detecting of matching requests as full web services. A web request service is created instead. If you need to further modify the resulting web request service, you need to create a separate rule of the `FULL_WEB_REQUEST` type.
   * Default is `false`, detecting matching requests as full web services.
   */
  detectAsWebRequestService?: boolean;

  /**
   * The contribution to the service ID calculation from the detected web service name.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  webServiceName?: WebServiceName;

  /**
   * The contribution to the service ID calculation from the detected web service name space.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  webServiceNameSpace?: WebServiceNameSpace;

  /**
   * The contribution to the service ID calculation from the detected application ID.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  applicationId?: ApplicationId;

  /**
   * The contribution to the service ID calculation from the detected context root.
   *
   *  The context root is the first segment of the request URL after server name. For example, in the `www.dynatrace.com/support/help/dynatrace-api/` URL the context root is `support`.
   * You have two options:
   * * Keep a part of the detected URL. Specify the number of segments to be kept in the **segmentsToCopyFromUrlPath** field.
   * * Dynamically transform the detected URL. Specify the transformation parameters in the **transformations** field.
   * You can use one or both options. If you use both, the transformation applies to the modified URL.
   */
  contextRoot?: ContextRoot;

  /**
   * The contribution to the service ID calculation from the detected server name.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  serverName?: ServerName;
}

/**
* The contribution to the service ID calculation from the detected web service name. 

 You have two mutually exclusive options: 
* Override the detected value with a specified static value. Specify the new value in the **valueOverride** field. 
* Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
*/
export interface WebServiceName {
  /** Transformations to be applied to the detected value. */
  transformations?: TransformationBase[];

  /** The value to be used instead of the detected value. */
  valueOverride?: string;
}

/**
* The contribution to the service ID calculation from the detected web service name space. 

 You have two mutually exclusive options: 
* Override the detected value with a specified static value. Specify the new value in the **valueOverride** field. 
* Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
*/
export interface WebServiceNameSpace {
  /** Transformations to be applied to the detected value. */
  transformations?: TransformationBase[];

  /** The value to be used instead of the detected value. */
  valueOverride?: string;
}

/**
 * A condition of the service detection rule.
 */
export interface ConditionsOpaqueAndExternalWebRequestAttributeTypeDto {
  /** The type of the attribute to be checked. */
  attributeType: "IP" | "PG_TAG" | "TOP_LEVEL_DOMAIN" | "URL" | "URL_HOST_NAME" | "URL_PATH" | "URL_PORT";

  /**
   * A list of conditions for the rule.
   *
   * If several conditions are specified, the AND logic applies.
   */
  compareOperations?: CompareOperation[];
}

/**
 * The service detection rule of the `OPAQUE_AND_EXTERNAL_WEB_REQUEST` type.
 * @example {"type":"OPAQUE_AND_EXTERNAL_WEB_REQUEST","name":"My sample rule","description":"REST API example","enabled":true,"managementZones":["zone1"],"conditions":[{"attributeType":"URL_HOST_NAME","compareOperations":[{"type":"STRING_CONTAINS","ignoreCase":"false","values":["value1","value2"]}]}],"applicationId":{"valueOverride":"abc"},"contextRoot":{"segmentsToCopyFromUrlPath":2,"transformations":[{"type":"BEFORE","delimiter":"/"}]},"port":{"doNotUseForServiceId":"true"},"publicDomainName":{"copyFromHostName":"true","transformations":[{"type":"BEFORE","delimiter":"/"}]}}
 */
export interface OpaqueAndExternalWebRequestRule {
  /** The type of the service detection rule. */
  type: string;

  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The management zone (specified by the ID) of the process group for which this service detection rule should be created.
   *
   *  You can specify only 1 management zone here.
   */
  managementZones?: string[];

  /**
   * The ID of the service detection rule.
   * @format uuid
   */
  id?: string;

  /**
   * The order of the rule in the rules list.
   *
   *  The rules are evaluated from top to bottom. The first matching rule applies.
   */
  order?: string;

  /** The name of the rule. */
  name: string;

  /** A short description of the rule. */
  description?: string;

  /** The rule is enabled(`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * A list of conditions of the rule.
   *
   * If several conditions are specified, the AND logic applies.
   */
  conditions?: ConditionsOpaqueAndExternalWebRequestAttributeTypeDto[];

  /**
   * The contribution to the service ID calculation from the detected application ID.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  applicationId?: ApplicationId;

  /**
   * The contribution to the service ID calculation from the detected context root.
   *
   *  The context root is the first segment of the request URL after server name. For example, in the `www.dynatrace.com/support/help/dynatrace-api/` URL the context root is `support`.
   * You have two options:
   * * Keep a part of the detected URL. Specify the number of segments to be kept in the **segmentsToCopyFromUrlPath** field.
   * * Dynamically transform the detected URL. Specify the transformation parameters in the **transformations** field.
   * You can use one or both options. If you use both, the transformation applies to the modified URL.
   */
  contextRoot?: ContextRoot;

  /** The contribution to the service ID calculation from the port, where the web request has been detected. */
  port?: Port;

  /**
   * The contribution to the service ID calculation from the domain name where the web request has been detected.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  publicDomainName?: PublicDomainName;
}

/**
 * The contribution to the service ID calculation from the port, where the web request has been detected.
 */
export interface Port {
  /** The port is used (`false`) or isn't used (`true`) in the service ID calculation. */
  doNotUseForServiceId?: boolean;
}

/**
* The contribution to the service ID calculation from the domain name where the web request has been detected. 

 You have two mutually exclusive options: 
* Override the detected value with a specified static value. Specify the new value in the **valueOverride** field. 
* Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
*/
export interface PublicDomainName {
  /** Transformations to be applied to the detected value. */
  transformations?: TransformationBase[];

  /** The value to be used instead of the detected value. */
  valueOverride?: string;

  /**
   * Use (`true`) or don't use (`false`) the detected host name as base for transformation.
   *
   *  Not applicable if the override is specified.
   */
  copyFromHostName?: boolean;
}

/**
 * A condition of the service detection rule.
 */
export interface ConditionsOpaqueAndExternalWebServiceAttributeTypeDto {
  /** The type of the attribute to be checked. */
  attributeType: "ENDPOINT" | "IP" | "OPERATION_NAME" | "PG_TAG" | "URL_PATH" | "URL_PORT";

  /**
   * A list of conditions for the rule.
   *
   * If several conditions are specified, the AND logic applies.
   */
  compareOperations?: CompareOperation[];
}

/**
 * The service detection rule of the `OPAQUE_AND_EXTERNAL_WEB_SERVICE` type
 * @example {"type":"OPAQUE_AND_EXTERNAL_WEB_SERVICE","name":"My sample rule","description":"REST API example","enabled":true,"detectAsWebRequestService":false,"managementZones":["zone 1"],"conditions":[{"attributeType":"URL_PATH","compareOperations":[{"type":"STRING_CONTAINS","invert":"false","ignoreCase":"false","values":["value1","value2"]}]}],"urlPath":{"valueOverride":"abc"},"port":{"doNotUseForServiceId":"true"}}
 */
export interface OpaqueAndExternalWebServiceRule {
  /** The type of the service detection rule. */
  type: string;

  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The management zone (specified by the ID) of the process group for which this service detection rule should be created.
   *
   *  You can specify only 1 management zone here.
   */
  managementZones?: string[];

  /**
   * The ID of the service detection rule.
   * @format uuid
   */
  id?: string;

  /**
   * The order of the rule in the rules list.
   *
   *  The rules are evaluated from top to bottom. The first matching rule applies.
   */
  order?: string;

  /** The name of the rule. */
  name: string;

  /** A short description of the rule. */
  description?: string;

  /** The rule is enabled(`true`) or disabled (`false`). */
  enabled: boolean;

  /**
   * A list of conditions of the rule.
   *
   * If several conditions are specified, the AND logic applies.
   */
  conditions?: ConditionsOpaqueAndExternalWebServiceAttributeTypeDto[];

  /**
   * Detect the matching requests as web services (`false`) or web request services (`true`).
   *
   * Setting this field to `true` prevents detecting of matching requests as opaque web services. An opaque web request service is created instead. If you need to further modify the resulting web request service, you need to create a separate rule of the `OPAQUE_AND_EXTERNAL_WEB_REQUEST` type.
   * Default is `false`, detecting matching requests as opaque web services.
   */
  detectAsWebRequestService?: boolean;

  /**
   * The contribution from the URL, where the web request has been detected, into service ID calculation.
   *
   *  You have two mutually exclusive options:
   * * Override the detected value with a specified static value. Specify the new value in the **valueOverride** field.
   * * Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
   */
  urlPath?: UrlPath;

  /** The contribution to the service ID calculation from the port, where the web request has been detected. */
  port?: Port;
}

/**
* The contribution from the URL, where the web request has been detected, into service ID calculation. 

 You have two mutually exclusive options: 
* Override the detected value with a specified static value. Specify the new value in the **valueOverride** field. 
* Dynamically transform the detected value. Specify the transformation parameters in the **transformations** field.
*/
export interface UrlPath {
  /** Transformations to be applied to the detected value. */
  transformations?: TransformationBase[];

  /** The value to be used instead of the detected value. */
  valueOverride?: string;
}

/**
 * The appId, the app version and the bundle id which uniquely identify the app
 */
export interface AppIdentifier {
  /** The id where the file belongs to */
  id?: string;

  /** The version code (Android) / bundle version (iOS) the file belongs to */
  versionCode: string;

  /** The version name (Android) / bundle versions string (iOS) the file belongs to */
  versionName: string;

  /** The bundleId (iOS) or package name (Android) the file belongs to */
  packageName?: string;

  /** The operating system where the file belongs to */
  os?: "ANDROID" | "IOS" | "TVOS";
}

export interface SymbolFile {
  /** The name of the application this file belongs to */
  applicationName?: string;

  /**
   * The size of the file in KB
   * @format int32
   */
  size?: number;

  /** The appId, the app version and the bundle id which uniquely identify the app */
  appId?: AppIdentifier;

  /**
   * The timestamp of the upload time of the file, in UTC milliseconds
   * @format int64
   */
  uploadTimestamp?: number;

  /** Is the file pinned and therefore cannot be deleted. */
  pinned?: boolean;
}

export interface SymbolFileList {
  /** A list of symbolication files. */
  symbolFiles?: SymbolFile[];
}

export interface SymbolFilePinning {
  /** New setting for file pinning. True to pin the file, false to unpin the file */
  pinned: boolean;
}

export interface SupportedVersion {
  /** The supported iOS file format version. */
  version?: string;
}

export interface SymbolFileClientLinkDto {
  /** A download link for the latest compatible version of the DTXDssClient. */
  dssClientUrl: string;
}

export interface SymbolFileStorageInfo {
  /**
   * The size of the used storage by symbolication files in KB
   * @format int64
   */
  usedStorage?: number;

  /**
   * The storage space still empty which can be used for symbolication files in KB, -1 if quota is set to 'unlimited'
   * @format int64
   */
  availableStorage?: number;

  /**
   * The total storage quota available on this tenant for symbolication files in KB, -1 if quota is set to 'unlimited'
   * @format int64
   */
  storageQuota?: number;

  /** @format int64 */
  fileCount?: number;
}

/**
 * The external ID token for setting IAM Role in AWS.
 */
export interface AwsIamToken {
  /** The external ID token for setting IAM Role in AWS. */
  token: string;
}

/**
 * A credentials for the AWS authentication.
 */
export interface AwsAuthenticationData {
  /** The type of the authentication: role-based or key-based. */
  type: "KEYS" | "ROLE";

  /** The credentials for the key-based authentication. */
  keyBasedAuthentication?: KeyBasedAuthentication;

  /** The credentials for the role-based authentication. */
  roleBasedAuthentication?: RoleBasedAuthentication;
}

/**
 * An AWS tag of the resource to be monitored.
 */
export interface AwsConfigTag {
  /** The key of the AWS tag. */
  name: string;

  /** The value of the AWS tag. */
  value: string;
}

/**
 * Configuration of an AWS credentials.
 */
export interface AwsCredentialsConfig {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The unique ID of the credentials. */
  id?: string;

  /**
   * The status of the connection to the AWS environment.
   *
   *  * `CONNECTED`: There was a connection within last 10 minutes.
   * * `DISCONNECTED`: A problem occurred with establishing connection using these credentials. Check whether the data is correct.
   * * `UNINITIALIZED`: The successful connection has never been established for these credentials.
   */
  connectionStatus?: "CONNECTED" | "DISCONNECTED" | "UNINITIALIZED";

  /** The name of the credentials. */
  label: string;

  /** The type of the AWS partition. */
  partitionType: "AWS_CN" | "AWS_DEFAULT" | "AWS_US_GOV";

  /** A credentials for the AWS authentication. */
  authenticationData: AwsAuthenticationData;

  /** Monitor only resources which have specified AWS tags (`true`) or all resources (`false`). */
  taggedOnly: boolean;

  /**
   * A list of AWS tags to be monitored.
   *
   * You can specify up to 10 tags.
   * Only applicable when the **taggedOnly** parameter is set to `true`.
   */
  tagsToMonitor: AwsConfigTag[];

  /** A list of supporting services to be monitored. */
  supportingServicesToMonitor?: AwsSupportingServiceConfig[];
}

/**
 * A supporting service to be monitored.
 */
export interface AwsSupportingServiceConfig {
  /** The name of the supporting service. */
  name: string;

  /** A list of metrics to be monitored for this service. If the list is null then recommended list of metrics for this service will be monitored. */
  monitoredMetrics?: AwsSupportingServiceMetric[];
}

/**
 * A metric of supporting service to be monitored.
 */
export interface AwsSupportingServiceMetric {
  /** The name of the metric of the supporting service. */
  name: string;

  /** The statistic (aggregation) to be used for the metric. AVG_MIN_MAX value is 3 statistics at once: AVERAGE, MINIMUM and MAXIMUM */
  statistic: "AVERAGE" | "AVG_MIN_MAX" | "MAXIMUM" | "MINIMUM" | "SAMPLE_COUNT" | "SUM";

  /** A list of metric's dimensions names. */
  dimensions: string[];
}

/**
 * The credentials for the key-based authentication.
 */
export interface KeyBasedAuthentication {
  /** The ID of the access key. */
  accessKey: string;

  /** The secret access key. */
  secretKey: string;
}

/**
 * The credentials for the role-based authentication.
 */
export interface RoleBasedAuthentication {
  /** The IAM role to be used by Dynatrace to get monitoring data. */
  iamRole: string;

  /** The ID of the Amazon account. */
  accountId: string;

  /**
   * The external ID token for setting an IAM role.
   *
   *  You can obtain it with the `GET /aws/iamExternalId` request.
   */
  externalId?: string;
}

export interface AllowlistedAwsAccount {
  /**
   * The AWS account id to allowlist
   * @pattern [0-9]*
   */
  id: string;
}

export interface AllowlistedAwsAccountList {
  values?: AllowlistedAwsAccount[];
}

export interface AwsPrivateLinkConfig {
  /** Is AWS PrivateLink enabled */
  enabled: boolean;

  /** The VirtualPrivateCluster-service name */
  vpcEndpointServiceName?: string;
}

/**
 * Configuration of Azure app-level credentials.
 */
export interface AzureCredentials {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The Dynatrace entity ID of the Azure credentials configuration. */
  id?: string;

  /**
   * The unique name of the Azure credentials configuration.
   *
   * Allowed characters are letters, numbers, and spaces. Also the special characters `.+-_` are allowed.
   * @pattern ^([a-zA-Z0-9_ +-.]*)$
   */
  label: string;

  /**
   * The application ID (also referred to as client ID).
   *
   *  The field is **required** when creating a new credentials configuration.
   *  The field is ignored during an update, the old value remains unaffected.
   */
  appId?: string;

  /**
   * The directory ID (also referred to as tenant ID).
   *
   *  The field is **required** when creating a new credentials configuration.
   *  The field is ignored during an update, the old value remains unaffected.
   */
  directoryId?: string;

  /**
   * The secret key associated with the application ID.
   *
   * For security reasons, GET requests return this field as `null`.
   *  Submit your key on creation or update of the configuration.
   *  The field is **required** when creating a new credentials configuration. If the field is omitted during an update, the old value remains unaffected.
   */
  key?: string;

  /**
   * The monitoring is enabled (`true`) or disabled (`false`).
   *
   * If not set on creation, the `true` value is used.
   * If the field is omitted during an update, the old value remains unaffected.
   */
  active?: boolean;

  /** The automatic capture of Azure tags is on (`true`) or off (`false`). */
  autoTagging: boolean;

  /** Monitor only resources that have specified Azure tags (`true`) or all resources (`false`). */
  monitorOnlyTaggedEntities: boolean;

  /**
   * A list of Azure tags to be monitored.
   *
   * You can specify up to 10 tags. A resource tagged with *any* of the specified tags is monitored.
   * Only applicable when the **monitorOnlyTaggedEntities** parameter is set to `true`.
   */
  monitorOnlyTagPairs: CloudTag[];

  /** A list of Azure supporting services to be monitored. For each service there's a sublist of its metrics and the metrics' dimensions that should be monitored. All of these elements (services, metrics, dimensions) must have corresponding static definitions on the server. */
  supportingServices?: AzureSupportingService[];
}

/**
 * A metric of supporting service to be monitored.
 */
export interface AzureMonitoredMetric {
  /** The name of the metric of the supporting service. */
  name: string;

  /** A list of metric's dimensions names. It must include all the recommended dimensions. */
  dimensions?: string[];
}

/**
 * A supporting service to be monitored.
 */
export interface AzureSupportingService {
  /** The name of the supporting service. */
  name: string;

  /** A list of metrics to be monitored for this service. It must include all the recommended metrics. If the list is null then recommended list of metrics for this service will be monitored. */
  monitoredMetrics?: AzureMonitoredMetric[];
}

/**
 * A cloud tag.
 */
export interface CloudTag {
  /** The name of the tag. */
  name?: string;

  /**
   * The value of the tag.
   *
   *  If set to `null`, then resources with any value of the tag are monitored.
   */
  value?: string;
}

/**
 * Configuration of Azure app-level credentials.
 */
export interface AzureCredentialsCreation {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The Dynatrace entity ID of the Azure credentials configuration. */
  id?: string;

  /**
   * The unique name of the Azure credentials configuration.
   *
   * Allowed characters are letters, numbers, and spaces. Also the special characters `.+-_` are allowed.
   * @pattern ^([a-zA-Z0-9_ +-.]*)$
   */
  label: string;

  /**
   * The application ID (also referred to as client ID).
   *
   *  The field is **required** when creating a new credentials configuration.
   *  The field is ignored during an update, the old value remains unaffected.
   */
  appId: string;

  /**
   * The directory ID (also referred to as tenant ID).
   *
   *  The field is **required** when creating a new credentials configuration.
   *  The field is ignored during an update, the old value remains unaffected.
   */
  directoryId: string;

  /**
   * The secret key associated with the application ID.
   *
   * For security reasons, GET requests return this field as `null`.
   *  Submit your key on creation or update of the configuration.
   *  The field is **required** when creating a new credentials configuration. If the field is omitted during an update, the old value remains unaffected.
   */
  key: string;

  /**
   * The monitoring is enabled (`true`) or disabled (`false`).
   *
   * If not set on creation, the `true` value is used.
   * If the field is omitted during an update, the old value remains unaffected.
   */
  active?: boolean;

  /** The automatic capture of Azure tags is on (`true`) or off (`false`). */
  autoTagging: boolean;

  /** Monitor only resources that have specified Azure tags (`true`) or all resources (`false`). */
  monitorOnlyTaggedEntities: boolean;

  /**
   * A list of Azure tags to be monitored.
   *
   * You can specify up to 10 tags. A resource tagged with *any* of the specified tags is monitored.
   * Only applicable when the **monitorOnlyTaggedEntities** parameter is set to `true`.
   */
  monitorOnlyTagPairs: CloudTag[];

  /** A list of Azure supporting services to be monitored. For each service there's a sublist of its metrics and the metrics' dimensions that should be monitored. All of these elements (services, metrics, dimensions) must have corresponding static definitions on the server. */
  supportingServices?: AzureSupportingService[];
}

/**
 * Configuration for specific Cloud Foundry credentials.
 */
export interface CloudFoundryCredentials {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The ID of the given credentials configuration. */
  id?: string;

  /**
   * The monitoring is enabled (`true`) or disabled (`false`) for given credentials configuration.
   *
   * If not set on creation, the `true` value is used.
   * If the field is omitted during an update, the old value remains unaffected.
   */
  active?: boolean;

  /**
   * The status of the configured endpoint.
   *
   * ASSIGNED: The credentials are assigned to an ActiveGate which is responsible for processing.
   * UNASSIGNED: The credentials are not yet assigned to an ActiveGate so there is currently no processing.
   * DISABLED: The credentials have been disabled by the user.
   * FASTCHECK_AUTH_ERROR: The credentials are invalid.
   * FASTCHECK_TLS_ERROR: The endpoint TLS certificate is invalid.
   * FASTCHECK_NO_RESPONSE: The endpoint did not return a result until the timeout was reached.
   * FASTCHECK_INVALID_ENDPOINT: The endpoint URL was invalid.
   * FASTCHECK_AUTH_LOCKED: The credentials seem to be locked.
   * UNKNOWN: An unknown error occured.
   */
  endpointStatus?:
    | "ASSIGNED"
    | "DISABLED"
    | "FASTCHECK_AUTH_ERROR"
    | "FASTCHECK_AUTH_LOCKED"
    | "FASTCHECK_INVALID_ENDPOINT"
    | "FASTCHECK_LOW_MEMORY_ERROR"
    | "FASTCHECK_NO_RESPONSE"
    | "FASTCHECK_TLS_ERROR"
    | "UNASSIGNED"
    | "UNKNOWN";

  /** The detailed status info of the configured endpoint. */
  endpointStatusInfo?: string;

  /**
   * The name of the Cloud Foundry foundation credentials.
   *
   * Allowed characters are letters, numbers, whitespaces, and the following characters: `.+-_`. Leading or trailing whitespace is not allowed.
   * @pattern ^([a-zA-Z0-9_ +-.]*)$
   */
  name: string;

  /**
   * The URL of the Cloud Foundry foundation credentials.
   *
   * The URL must be valid according to RFC 2396.
   * Leading or trailing whitespaces are not allowed.
   */
  apiUrl: string;

  /**
   * The login URL of the Cloud Foundry foundation credentials.
   *
   * The URL must be valid according to RFC 2396.
   * Leading or trailing whitespaces are not allowed.
   */
  loginUrl: string;

  /**
   * The username of the Cloud Foundry foundation credentials.
   *
   * Leading and trailing whitespaces are not allowed.
   */
  username: string;

  /** The password of the Cloud Foundry foundation credentials. */
  password?: string;
}

/**
 * The short representation of a kubernetes configuration.
 */
export interface KubernetesConfigShortRepresentation {
  /** The ID of the Dynatrace entity. */
  id: string;

  /** The name of the Dynatrace entity. */
  name?: string;

  /** A short description of the Dynatrace entity. */
  description?: string;

  /**
   * The URL of the Kubernetes API server.
   *
   * It must be unique within a Dynatrace environment.
   * The URL must valid according to RFC 2396. Leading or trailing whitespaces are not allowed.
   */
  endpointUrl: string;
}

export interface KubernetesConfigStubListDto {
  values?: KubernetesConfigShortRepresentation[];
}

/**
 * Configuration for specific Kubernetes credentials.
 * @example {"id":"KUBERNETES_CLUSTER-CC06304728FC9396","label":"K8s credentials - REST example","endpointUrl":"https://k8s-api.sample.org","eventsFieldSelectors":[{"label":"Node events","fieldSelector":"involvedObject.kind=Node","active":true}],"workloadIntegrationEnabled":true,"eventsIntegrationEnabled":true,"authToken":"abcd9876","activeGateGroup":"group-1","active":true,"certificateCheckEnabled":true,"hostnameVerificationEnabled":true,"prometheusExportersIntegrationEnabled":true,"davisEventsIntegrationEnabled":true}
 */
export interface KubernetesCredentials {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /** The ID of the given credentials configuration. */
  id?: string;

  /**
   * The monitoring is enabled (`true`) or disabled (`false`) for given credentials configuration.
   *
   * If not set on creation, the `true` value is used.
   * If the field is omitted during an update, the old value remains unaffected.
   */
  active?: boolean;

  /**
   * The status of the configured endpoint.
   *
   * ASSIGNED: The credentials are assigned to an ActiveGate which is responsible for processing.
   * UNASSIGNED: The credentials are not yet assigned to an ActiveGate so there is currently no processing.
   * DISABLED: The credentials have been disabled by the user.
   * FASTCHECK_AUTH_ERROR: The credentials are invalid.
   * FASTCHECK_TLS_ERROR: The endpoint TLS certificate is invalid.
   * FASTCHECK_NO_RESPONSE: The endpoint did not return a result until the timeout was reached.
   * FASTCHECK_INVALID_ENDPOINT: The endpoint URL was invalid.
   * FASTCHECK_AUTH_LOCKED: The credentials seem to be locked.
   * UNKNOWN: An unknown error occured.
   */
  endpointStatus?:
    | "ASSIGNED"
    | "DISABLED"
    | "FASTCHECK_AUTH_ERROR"
    | "FASTCHECK_AUTH_LOCKED"
    | "FASTCHECK_INVALID_ENDPOINT"
    | "FASTCHECK_LOW_MEMORY_ERROR"
    | "FASTCHECK_NO_RESPONSE"
    | "FASTCHECK_TLS_ERROR"
    | "UNASSIGNED"
    | "UNKNOWN";

  /** The detailed status info of the configured endpoint. */
  endpointStatusInfo?: string;

  /**
   * The name of the Kubernetes credentials configuration.
   *
   * Allowed characters are letters, numbers, whitespaces, and the following characters: `.+-_`. Leading or trailing whitespace is not allowed.
   * @pattern ^([a-zA-Z0-9_ +-.]*)$
   */
  label: string;

  /**
   * The URL of the Kubernetes API server.
   *
   * It must be unique within a Dynatrace environment.
   * The URL must valid according to RFC 2396. Leading or trailing whitespaces are not allowed.
   */
  endpointUrl: string;

  /**
   * The service account bearer token for the Kubernetes API server.
   *
   * Submit your token on creation or update of the configuration. For security reasons, GET requests return this field as `null`.
   * If the field is omitted during an update, the old value remains unaffected.
   */
  authToken?: string;

  /** Active Gate group to filter active gates for this credentials. */
  activeGateGroup?: string;

  /**
   * The monitoring of events is enabled (`true`) or disabled (`false`) for the Kubernetes cluster. Event monitoring depends on the active state of this configuration to be true.
   *
   * If not set on creation, the `false` value is used.
   * If the field is omitted during an update, the old value remains unaffected.
   */
  eventsIntegrationEnabled?: boolean;

  /** Event analysis and alerting is (`true`) or disabled (`false`) for the Kubernetes cluster. If the field is omitted during an update, the old value remains unaffected. */
  eventAnalysisAndAlertingEnabled?: boolean;

  /** Workload and cloud application processing is enabled (`true`) or disabled (`false`) for the Kubernetes cluster. If the field is omitted during an update, the old value remains unaffected. */
  workloadIntegrationEnabled?: boolean;

  /** Prometheus exporters integration is enabled (`true`) or disabled (`false`) for the Kubernetes cluster. If the field is omitted during an update, the old value remains unaffected. */
  prometheusExportersIntegrationEnabled?: boolean;

  /** Inclusion of all Davis relevant events is enabled (`true`) or disabled (`false`) for the Kubernetes cluster. If the field is omitted during an update, the old value remains unaffected. */
  davisEventsIntegrationEnabled?: boolean;

  /** Kubernetes event filters based on field-selectors. If set to `null` on creation, no events field selectors are subscribed. If set to `null` on update, no change of stored events field selectors is applied. Set an empty list to clear all events field selectors. */
  eventsFieldSelectors?: KubernetesEventPattern[];

  /**
   * The check of SSL certificates is enabled (`true`) or disabled (`false`) for the Kubernetes cluster.
   *
   * If not set on creation, the `true` value is used.
   * If the field is omitted during an update, the old value remains unaffected.
   */
  certificateCheckEnabled?: boolean;
}

/**
 * Represents a single Kubernetes events field selector (=event filter based on the K8s field selector).
 */
export interface KubernetesEventPattern {
  /**
   * A label of the events field selector.
   * @pattern ^([a-zA-Z0-9_ +-.]*)$
   */
  label: string;

  /**
   * The field selector string (url decoding is applied) when storing it.
   * @pattern [\w\.]+((=){1,2}|(!=))[\w]([\.\-\w]*[\w])?(,[\w\.]+((=){1,2}|(!=))[\w]([\.\-\w]*[\w])?){0,9}
   */
  fieldSelector: string;

  /** Whether subscription to this events field selector is enabled (value set to `true`). If disabled (value set to `false`), Dynatrace will stop fetching events from the Kubernetes API for this events field selector */
  active: boolean;
}

/**
 * Configuration of a maintenance window.
 * @example {"metadata":{"configurationVersions":[4,2],"clusterVersion":"Mock version"},"name":"Example Window","description":"An example Maintenance window","type":"UNPLANNED","suppression":"DETECT_PROBLEMS_AND_ALERT","suppressSyntheticMonitorsExecution":"true","scope":{"entities":["HOST-0000000000123456"],"matches":[{"type":"HOST","mzId":"123456789","tags":[{"key":"testkey","value":"testvalue","context":"AWS"}],"tagCombination":"AND"}]},"schedule":{"recurrenceType":"MONTHLY","recurrence":{"dayOfMonth":"23","startTime":"16:28","durationMinutes":"60"},"start":"2018-08-02 00:00","end":"2019-02-27 00:00","zoneId":"Europe/Vienna"}}
 */
export interface MaintenanceWindow {
  /** Metadata useful for debugging */
  metadata?: ConfigurationMetadata;

  /**
   * The ID of the maintenance window.
   * @format uuid
   */
  id?: string;

  /** The name of the maintenance window, displayed in the UI. */
  name: string;

  /** A short description of the maintenance purpose. */
  description: string;

  /** The type of the maintenance: planned or unplanned. */
  type: "PLANNED" | "UNPLANNED";

  /** The type of suppression of alerting and problem detection during the maintenance. */
  suppression: "DETECT_PROBLEMS_AND_ALERT" | "DETECT_PROBLEMS_DONT_ALERT" | "DONT_DETECT_PROBLEMS";

  /** Suppress execution of synthetic monitors during the maintenance. */
  suppressSyntheticMonitorsExecution?: boolean;

  /**
   * The scope of the maintenance window.
   *
   *  The scope restricts the alert/problem detection suppression to certain Dynatrace entities. It can contain a list of entities and/or matching rules for dynamic formation of the scope.
   *  If no scope is specified, the alert/problem detection suppression applies to the entire environment.
   */
  scope?: Scope;

  /** The schedule of the maintenance window. */
  schedule: Schedule;
}

/**
 * A matching rule for Dynatrace entities.
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

  /** The ID of a management zone to which the matched entities must belong. */
  mzId?: string;

  /**
   * The tag you want to use for matching.
   *
   * You can use custom tags from the UI, AWS tags, Cloud Foundry tags, OpenShift/Kubernetes, and tags based on environment variables.
   */
  tags: TagInfo[];

  /**
   * The logic that applies when several tags are specified: AND/OR.
   *
   * If not set, the OR logic is used.
   */
  tagCombination?: "AND" | "OR";
}

/**
 * The recurrence of the maintenance window.
 */
export interface Recurrence {
  /**
   * The day of the week for weekly maintenance.
   *
   * The format is the full name of the day in upper case, for example `THURSDAY`.
   */
  dayOfWeek?: "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY";

  /**
   * The day of the month for monthly maintenance.
   *
   * The value of `31` is treated as the last day of the month for months that don't have a 31st day.
   * The value of `30` is also treated as the last day of the month for February.
   * @format int32
   * @min 1
   * @max 31
   */
  dayOfMonth?: number;

  /** The start time of the maintenance window in HH:mm format. */
  startTime: string;

  /**
   * The duration of the maintenance window in minutes.
   * @format int32
   * @min 1
   * @max 1440
   */
  durationMinutes: number;
}

/**
 * The schedule of the maintenance window.
 */
export interface Schedule {
  /** The type of the schedule recurrence. */
  recurrenceType: "DAILY" | "MONTHLY" | "ONCE" | "WEEKLY";

  /** The recurrence of the maintenance window. */
  recurrence?: Recurrence;

  /** The start date and time of the maintenance window validity period in yyyy-mm-dd HH:mm format. */
  start: string;

  /** The end date and time of the maintenance window validity period in yyyy-mm-dd HH:mm format. */
  end: string;

  /**
   * The time zone of the start and end time. Default time zone is UTC.
   *
   * You can use either UTC offset `UTC+01:00` format or the IANA Time Zone Database format (for example, `Europe/Vienna`).
   */
  zoneId: string;
}

/**
* The scope of the maintenance window. 

 The scope restricts the alert/problem detection suppression to certain Dynatrace entities. It can contain a list of entities and/or matching rules for dynamic formation of the scope. 

 If no scope is specified, the alert/problem detection suppression applies to the entire environment.
*/
export interface Scope {
  /**
   * A list of Dynatrace entities (for example, hosts or services) to be included in the scope.
   *
   * Allowed values are Dynatrace entity IDs.
   */
  entities: string[];

  /**
   * A list of matching rules for dynamic scope formation.
   *
   * If several rules are set, the OR logic applies.
   */
  matches: MonitoredEntityFilter[];
}














export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}



/**
 * @title Dynatrace Configuration API
 * @version 1.0
 *
 * Documentation of the Dynatrace Configuration API. To read about use-cases and examples, see [Dynatrace Documentation](https://dt-url.net/4u43kxw).
 *
 * Notes about compatibility:
 * * Operations marked as early adopter or preview may be changed in non-compatible ways, although we try to avoid this.
 * * We may add new enum constants without incrementing the API version; thus, clients need to handle unknown enum constants gracefully.
 */
export class Api extends APIBase {
  alertingProfiles = {
    /**
     * No description
     *
     * @tags Alerting Profiles
     * @name GetAlertingProfile
     * @summary Gets the properties of the specified alerting profile | maturity=EARLY_ADOPTER
     * @request GET:/alertingProfiles/{id}
     */
    getAlertingProfile: (id: string, params: RequestParams = {}) =>
      this.request<AlertingProfile, any>({
        path: `/alertingProfiles/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If an alerting profile with the specified ID doesn't exist, a new one is created.
     *
     * @tags Alerting Profiles
     * @name CreateOrUpdateAlertingProfile
     * @summary Updates an existing alerting profile | maturity=EARLY_ADOPTER
     * @request PUT:/alertingProfiles/{id}
     */
    createOrUpdateAlertingProfile: (id: string, data: AlertingProfile, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/alertingProfiles/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description The default alerting profile cannot be deleted.
     *
     * @tags Alerting Profiles
     * @name DeleteAlertingProfile
     * @summary Deletes the specified alerting profile | maturity=EARLY_ADOPTER
     * @request DELETE:/alertingProfiles/{id}
     */
    deleteAlertingProfile: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/alertingProfiles/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Alerting Profiles
     * @name GetAlertingProfiles
     * @summary Lists all alerting profiles available in your environment | maturity=EARLY_ADOPTER
     * @request GET:/alertingProfiles
     */
    getAlertingProfiles: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/alertingProfiles`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Alerting Profiles
     * @name CreateAlertingProfile
     * @summary Creates a new alerting profile | maturity=EARLY_ADOPTER
     * @request POST:/alertingProfiles
     */
    createAlertingProfile: (data: AlertingProfile, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/alertingProfiles`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Alerting Profiles
     * @name ValidateCreateAlertingProfile
     * @summary Validates the payload the `POST /alertingProfiles` request | maturity=EARLY_ADOPTER
     * @request POST:/alertingProfiles/validator
     */
    validateCreateAlertingProfile: (data: AlertingProfile, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/alertingProfiles/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Alerting Profiles
     * @name ValidateCreateOrUpdateAlertingProfile
     * @summary Validates the payload the `PUT /alertingProfiles/{id}` request | maturity=EARLY_ADOPTER
     * @request POST:/alertingProfiles/{id}/validator
     */
    validateCreateOrUpdateAlertingProfile: (id: string, data: AlertingProfile, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/alertingProfiles/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  anomalyDetection = {
    /**
     * No description
     *
     * @tags Anomaly detection - Applications
     * @name ValidateApplicationAnomalyDetectionConfig
     * @summary Validates the configuration of anomaly detection for applications for the `PUT /anomalyDetection/applications` request
     * @request POST:/anomalyDetection/applications/validator
     */
    validateApplicationAnomalyDetectionConfig: (data: ApplicationAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/applications/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Applications
     * @name GetApplicationAnomalyDetectionConfig
     * @summary Gets the configuration of anomaly detection for applications
     * @request GET:/anomalyDetection/applications
     */
    getApplicationAnomalyDetectionConfig: (params: RequestParams = {}) =>
      this.request<ApplicationAnomalyDetectionConfig, any>({
        path: `/anomalyDetection/applications`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Applications
     * @name UpdateApplicationAnomalyDetectionConfig
     * @summary Updates the configuration of anomaly detection for applications
     * @request PUT:/anomalyDetection/applications
     */
    updateApplicationAnomalyDetectionConfig: (data: ApplicationAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/applications`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - AWS
     * @name ValidateAwsAnomalyDetectionConfig
     * @summary Validates the configuration of anomaly detection for AWS for the `PUT /anomalyDetection/aws` request
     * @request POST:/anomalyDetection/aws/validator
     */
    validateAwsAnomalyDetectionConfig: (data: AwsAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/aws/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - AWS
     * @name GetAwsAnomalyDetectionConfig
     * @summary Gets the configuration of anomaly detection for AWS
     * @request GET:/anomalyDetection/aws
     */
    getAwsAnomalyDetectionConfig: (params: RequestParams = {}) =>
      this.request<AwsAnomalyDetectionConfig, any>({
        path: `/anomalyDetection/aws`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - AWS
     * @name UpdateAwsAnomalyDetectionConfig
     * @summary Updates the configuration of anomaly detection for AWS
     * @request PUT:/anomalyDetection/aws
     */
    updateAwsAnomalyDetectionConfig: (data: AwsAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/aws`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Database services
     * @name GetDatabaseServiceAnomalyDetectionConfig
     * @summary Gets the configuration of anomaly detection for database services
     * @request GET:/anomalyDetection/databaseServices
     */
    getDatabaseServiceAnomalyDetectionConfig: (params: RequestParams = {}) =>
      this.request<DatabaseAnomalyDetectionConfig, any>({
        path: `/anomalyDetection/databaseServices`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Database services
     * @name UpdateDatabaseServiceAnomalyDetectionConfig
     * @summary Updates the configuration of anomaly detection for database services
     * @request PUT:/anomalyDetection/databaseServices
     */
    updateDatabaseServiceAnomalyDetectionConfig: (data: DatabaseAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/databaseServices`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Database services
     * @name ValidateDatabaseServiceAnomalyDetectionConfig
     * @summary Validates the payload for the `PUT /anomalyDetection/databaseServices` request
     * @request POST:/anomalyDetection/databaseServices/validator
     */
    validateDatabaseServiceAnomalyDetectionConfig: (data: DatabaseAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/databaseServices/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Disk events
     * @name ValidateCreateDiskEventConfig
     * @summary Validates the payload for the `POST /anomalyDetection/diskEvents` request | maturity=EARLY_ADOPTER
     * @request POST:/anomalyDetection/diskEvents/validator
     */
    validateCreateDiskEventConfig: (data: DiskEventAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/diskEvents/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Disk events
     * @name ValidateUpdateDiskEventConfig
     * @summary Validates the payload for the `PUT /anomalyDetection/diskEvents/{id}` request | maturity=EARLY_ADOPTER
     * @request POST:/anomalyDetection/diskEvents/{id}/validator
     */
    validateUpdateDiskEventConfig: (id: string, data: DiskEventAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope | void>({
        path: `/anomalyDetection/diskEvents/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Disk events
     * @name GetDiskEventConfig
     * @summary Gets the properties of the specified disk event rule | maturity=EARLY_ADOPTER
     * @request GET:/anomalyDetection/diskEvents/{id}
     */
    getDiskEventConfig: (id: string, params: RequestParams = {}) =>
      this.request<DiskEventAnomalyDetectionConfig, any>({
        path: `/anomalyDetection/diskEvents/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If a disk event rule with the specified ID does not exist, a new rule is created.
     *
     * @tags Anomaly detection - Disk events
     * @name UpdateDiskEventConfig
     * @summary Updates or creates a disk event rule | maturity=EARLY_ADOPTER
     * @request PUT:/anomalyDetection/diskEvents/{id}
     */
    updateDiskEventConfig: (id: string, data: DiskEventAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope | void>({
        path: `/anomalyDetection/diskEvents/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Disk events
     * @name DeleteDiskEventConfig
     * @summary Deletes the specified disk event rule | maturity=EARLY_ADOPTER
     * @request DELETE:/anomalyDetection/diskEvents/{id}
     */
    deleteDiskEventConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/anomalyDetection/diskEvents/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Disk events
     * @name ListDiskEventConfigs
     * @summary Lists all existing disk event rules | maturity=EARLY_ADOPTER
     * @request GET:/anomalyDetection/diskEvents
     */
    listDiskEventConfigs: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/anomalyDetection/diskEvents`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Anomaly detection - Disk events
     * @name CreateDiskEventConfig
     * @summary Creates a new disk event rule | maturity=EARLY_ADOPTER
     * @request POST:/anomalyDetection/diskEvents
     */
    createDiskEventConfig: (data: DiskEventAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/anomalyDetection/diskEvents`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Hosts
     * @name GetHostEventsConfig
     * @summary Gets the configuration of anomaly detection for hosts
     * @request GET:/anomalyDetection/hosts
     */
    getHostEventsConfig: (params: RequestParams = {}) =>
      this.request<HostsAnomalyDetectionConfig, any>({
        path: `/anomalyDetection/hosts`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Hosts
     * @name UpdateHostEventsConfig
     * @summary Updates the configuration of anomaly detection for hosts
     * @request PUT:/anomalyDetection/hosts
     */
    updateHostEventsConfig: (data: HostsAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/hosts`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Hosts
     * @name ValidateHostEventsConfig
     * @summary Validates the configuration of anomaly detection for hosts for the `PUT /anomalyDetection/hosts` request
     * @request POST:/anomalyDetection/hosts/validator
     */
    validateHostEventsConfig: (data: HostsAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/hosts/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Metric events
     * @name ListMetricEventConfigs
     * @summary Lists all configured metric events
     * @request GET:/anomalyDetection/metricEvents
     */
    listMetricEventConfigs: (query?: { includeEntityFilterMetricEvents?: boolean }, params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/anomalyDetection/metricEvents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The response contains the ID of the newly created metric event.
     *
     * @tags Anomaly detection - Metric events
     * @name CreateMetricEvent
     * @summary Creates a new metric event
     * @request POST:/anomalyDetection/metricEvents
     */
    createMetricEvent: (data: MetricEvent, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/anomalyDetection/metricEvents`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Metric events
     * @name GetMetricEventConfig
     * @summary Gets the properties of the specified metric event
     * @request GET:/anomalyDetection/metricEvents/{id}
     */
    getMetricEventConfig: (id: string, params: RequestParams = {}) =>
      this.request<MetricEvent, any>({
        path: `/anomalyDetection/metricEvents/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the metric event with the specified ID does not exist, a new metric event will be created. You can't update the **type** of the metric event.
     *
     * @tags Anomaly detection - Metric events
     * @name UpdateMetricEvent
     * @summary Updates an existing metric event or creates a new one
     * @request PUT:/anomalyDetection/metricEvents/{id}
     */
    updateMetricEvent: (id: string, data: MetricEvent, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/anomalyDetection/metricEvents/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description You can't delete events created by plugins.
     *
     * @tags Anomaly detection - Metric events
     * @name DeleteMetricEvent
     * @summary Deletes the specified metric event
     * @request DELETE:/anomalyDetection/metricEvents/{id}
     */
    deleteMetricEvent: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/anomalyDetection/metricEvents/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Metric events
     * @name ValidateCreateMetricEvent
     * @summary Validates the payload for the `POST /anomalyDetection/metricEvents` request
     * @request POST:/anomalyDetection/metricEvents/validator
     */
    validateCreateMetricEvent: (data: MetricEvent, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/metricEvents/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Metric events
     * @name ValidateUpdateMetricEvent
     * @summary Validates the payload for the `PUT /anomalyDetection/metricEvents/{id}` request
     * @request POST:/anomalyDetection/metricEvents/{id}/validator
     */
    validateUpdateMetricEvent: (id: string, data: MetricEvent, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/metricEvents/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Process groups
     * @name GetLocalAvailabilityConfig
     * @summary Gets the configuration of anomaly detection for the specified process group | maturity=EARLY_ADOPTER
     * @request GET:/anomalyDetection/processGroups/{id}
     */
    getLocalAvailabilityConfig: (id: string, params: RequestParams = {}) =>
      this.request<AnomalyDetectionPG, ErrorEnvelope>({
        path: `/anomalyDetection/processGroups/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Process groups
     * @name SetLocalAvailabilityConfig
     * @summary Updates the configuration of anomaly detection for the specified process group | maturity=EARLY_ADOPTER
     * @request PUT:/anomalyDetection/processGroups/{id}
     */
    setLocalAvailabilityConfig: (id: string, data: AnomalyDetectionPG, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/processGroups/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Process groups
     * @name DeleteLocalAvailabilityConfig
     * @summary Switches off anomaly detection for the specified process group | maturity=EARLY_ADOPTER
     * @request DELETE:/anomalyDetection/processGroups/{id}
     */
    deleteLocalAvailabilityConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/processGroups/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Process groups
     * @name ValidateLocalPgAvailabilityAlertingEvent
     * @summary Validates the payload for the `PUT /anomalyDetection/processGroups/{id}` request | maturity=EARLY_ADOPTER
     * @request POST:/anomalyDetection/processGroups/{id}/validator
     */
    validateLocalPgAvailabilityAlertingEvent: (id: string, data: AnomalyDetectionPG, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/processGroups/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Services
     * @name ValidateServiceAnomalyDetectionConfig
     * @summary Validates the payload for the `PUT /anomalyDetection/services` request
     * @request POST:/anomalyDetection/services/validator
     */
    validateServiceAnomalyDetectionConfig: (data: ServiceAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/services/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Services
     * @name GetServiceAnomalyDetectionConfig
     * @summary Gets the service anomaly detection configuration
     * @request GET:/anomalyDetection/services
     */
    getServiceAnomalyDetectionConfig: (params: RequestParams = {}) =>
      this.request<ServiceAnomalyDetectionConfig, any>({
        path: `/anomalyDetection/services`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - Services
     * @name UpdateServiceAnomalyDetectionConfig
     * @summary Updates the service anomaly detection configuration
     * @request PUT:/anomalyDetection/services
     */
    updateServiceAnomalyDetectionConfig: (data: ServiceAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/services`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - VMware
     * @name GetVMwareAnomalyDetectionConfig
     * @summary Gets the configuration of anomaly detection for VMware
     * @request GET:/anomalyDetection/vmware
     */
    getVMwareAnomalyDetectionConfig: (params: RequestParams = {}) =>
      this.request<VMwareAnomalyDetectionConfig, any>({
        path: `/anomalyDetection/vmware`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - VMware
     * @name UpdateVMwareAnomalyDetectionConfig
     * @summary Updates the configuration of anomaly detection for VMware
     * @request PUT:/anomalyDetection/vmware
     */
    updateVMwareAnomalyDetectionConfig: (data: VMwareAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/vmware`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Anomaly detection - VMware
     * @name ValidateVMwareAnomalyDetectionConfig
     * @summary Validates the configuration of anomaly detection for VMware for the `PUT /anomalyDetection/vmware` request
     * @request POST:/anomalyDetection/vmware/validator
     */
    validateVMwareAnomalyDetectionConfig: (data: VMwareAnomalyDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/anomalyDetection/vmware/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  applications = {
    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name ListMobileApplicationConfigs
     * @summary Lists all existing mobile and custom applications
     * @request GET:/applications/mobile
     */
    listMobileApplicationConfigs: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/applications/mobile`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an identifier. An identifier is assigned automatically by Dynatrace. You can, however, provide your own applicationId. If you don't specify an applicationId, it is assigned automatically by Dynatrace.
     *
     * @tags RUM - Mobile and custom application configuration
     * @name CreateMobileApplicationConfig
     * @summary Creates a new mobile or custom application
     * @request POST:/applications/mobile
     */
    createMobileApplicationConfig: (data: NewMobileCustomAppConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/applications/mobile`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name GetMobileApplicationConfig
     * @summary Gets the configuration of the specified mobile or custom application
     * @request GET:/applications/mobile/{id}
     */
    getMobileApplicationConfig: (id: string, params: RequestParams = {}) =>
      this.request<MobileCustomAppConfig, void>({
        path: `/applications/mobile/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description You can't change applicationId and applicationType with this request.
     *
     * @tags RUM - Mobile and custom application configuration
     * @name UpdateMobileApplicationConfig
     * @summary Updates the configuration of the specified mobile or custom application
     * @request PUT:/applications/mobile/{id}
     */
    updateMobileApplicationConfig: (id: string, data: MobileCustomAppConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope | void>({
        path: `/applications/mobile/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name DeleteMobileApplicationConfig
     * @summary Deletes the specified mobile or custom application
     * @request DELETE:/applications/mobile/{id}
     */
    deleteMobileApplicationConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applications/mobile/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name ValidateCreateMobileApplicationConfig
     * @summary Validates the payload for the `POST /applications/mobile` request
     * @request POST:/applications/mobile/validator
     */
    validateCreateMobileApplicationConfig: (data: NewMobileCustomAppConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/mobile/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name ValidateUpdateMobileApplicationConfig
     * @summary Validates the payload for the `PUT /applications/mobile/{id}` request.
     * @request POST:/applications/mobile/{id}/validator
     */
    validateUpdateMobileApplicationConfig: (id: string, data: MobileCustomAppConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/mobile/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name ListSessionProperties
     * @summary Lists all mobile session and user action properties for the specified application
     * @request GET:/applications/mobile/{applicationId}/userActionAndSessionProperties
     */
    listSessionProperties: (applicationId: string, params: RequestParams = {}) =>
      this.request<MobileSessionUserActionPropertyList, any>({
        path: `/applications/mobile/${applicationId}/userActionAndSessionProperties`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name CreateSessionProperty
     * @summary Creates a new mobile session or user action property for the specified application
     * @request POST:/applications/mobile/{applicationId}/userActionAndSessionProperties
     */
    createSessionProperty: (applicationId: string, data: MobileSessionUserActionProperty, params: RequestParams = {}) =>
      this.request<MobileSessionUserActionPropertyShort, ErrorEnvelope>({
        path: `/applications/mobile/${applicationId}/userActionAndSessionProperties`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name GetSessionProperty
     * @summary Gets the specified mobile session or user action property of an application
     * @request GET:/applications/mobile/{applicationId}/userActionAndSessionProperties/{key}
     */
    getSessionProperty: (applicationId: string, key: string, params: RequestParams = {}) =>
      this.request<MobileSessionUserActionProperty, void>({
        path: `/applications/mobile/${applicationId}/userActionAndSessionProperties/${key}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the property with the specified ID does not exist, a new property is created.
     *
     * @tags RUM - Mobile and custom application configuration
     * @name UpdateSessionProperty
     * @summary Updates the specified mobile session or user action property for an application
     * @request PUT:/applications/mobile/{applicationId}/userActionAndSessionProperties/{key}
     */
    updateSessionProperty: (
      applicationId: string,
      key: string,
      data: MobileSessionUserActionPropertyUpd,
      params: RequestParams = {},
    ) =>
      this.request<MobileSessionUserActionPropertyShort, ErrorEnvelope>({
        path: `/applications/mobile/${applicationId}/userActionAndSessionProperties/${key}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name DeleteSessionProperty
     * @summary Deletes the specified mobile session or user action property for an application
     * @request DELETE:/applications/mobile/{applicationId}/userActionAndSessionProperties/{key}
     */
    deleteSessionProperty: (applicationId: string, key: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applications/mobile/${applicationId}/userActionAndSessionProperties/${key}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name ValidateCreateSessionProperty
     * @summary Validates the payload for the `POST /applications/mobile/{applicationId}/userActionAndSessionProperties` request
     * @request POST:/applications/mobile/{applicationId}/userActionAndSessionProperties/validator
     */
    validateCreateSessionProperty: (
      applicationId: string,
      data: MobileSessionUserActionProperty,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/mobile/${applicationId}/userActionAndSessionProperties/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name ValidateUpdateSessionProperty
     * @summary Validates the payload for the `PUT /applications/mobile/{applicationId}/userActionAndSessionProperties/{key}` request
     * @request POST:/applications/mobile/{applicationId}/userActionAndSessionProperties/{key}/validator
     */
    validateUpdateSessionProperty: (
      applicationId: string,
      key: string,
      data: MobileSessionUserActionPropertyUpd,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/mobile/${applicationId}/userActionAndSessionProperties/${key}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name CreateMobileKeyUserAction
     * @summary Marks the user action as a key user action in the specified application
     * @request POST:/applications/mobile/{applicationId}/keyUserActions/{actionName}
     */
    createMobileKeyUserAction: (applicationId: string, actionName: string, params: RequestParams = {}) =>
      this.request<KeyUserActionMobile, void>({
        path: `/applications/mobile/${applicationId}/keyUserActions/${actionName}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name DeleteMobileKeyUserAction
     * @summary Removes the specified user action from the list of key user actions in the specified application
     * @request DELETE:/applications/mobile/{applicationId}/keyUserActions/{actionName}
     */
    deleteMobileKeyUserAction: (applicationId: string, actionName: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/applications/mobile/${applicationId}/keyUserActions/${actionName}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Mobile and custom application configuration
     * @name ListMobileKeyUserActions
     * @summary Gets the list of key user actions in the specified application
     * @request GET:/applications/mobile/{applicationId}/keyUserActions
     */
    listMobileKeyUserActions: (applicationId: string, params: RequestParams = {}) =>
      this.request<KeyUserActionMobileList, void>({
        path: `/applications/mobile/${applicationId}/keyUserActions`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name ListDataPrivacySettings
     * @summary Lists data privacy settings of all web applications
     * @request GET:/applications/web/dataPrivacy
     */
    listDataPrivacySettings: (params: RequestParams = {}) =>
      this.request<ApplicationDataPrivacyList, any>({
        path: `/applications/web/dataPrivacy`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name GetDataPrivacySettings
     * @summary Gets the data privacy settings of the specified web application
     * @request GET:/applications/web/{id}/dataPrivacy
     */
    getDataPrivacySettings: (id: string, params: RequestParams = {}) =>
      this.request<ApplicationDataPrivacy, any>({
        path: `/applications/web/${id}/dataPrivacy`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name UpdateDataPrivacySettings
     * @summary Updates the data privacy settings of the specified web application
     * @request PUT:/applications/web/{id}/dataPrivacy
     */
    updateDataPrivacySettings: (id: string, data: ApplicationDataPrivacy, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/${id}/dataPrivacy`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Default application is pre-configured in your Dynatrace environment. By default all the traffic goes to this application. After you configure your own applications, all the traffic, which doesn't fit to any of your applications, goes to the default one.
     *
     * @tags RUM - Web application configuration
     * @name GetDefaultApplicationDataPrivacySettings
     * @summary Gets the data privacy settings of the default web application
     * @request GET:/applications/web/default/dataPrivacy
     */
    getDefaultApplicationDataPrivacySettings: (params: RequestParams = {}) =>
      this.request<ApplicationDataPrivacy, any>({
        path: `/applications/web/default/dataPrivacy`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Default application is pre-configured in your Dynatrace environment. By default all traffic goes to this application. After you configure your own applications, all the traffic, which doesn't fit to any of your applications, goes to the default one.
     *
     * @tags RUM - Web application configuration
     * @name UpdateDefaultApplicationDataPrivacySettings
     * @summary Updates the data privacy settings of the default web application
     * @request PUT:/applications/web/default/dataPrivacy
     */
    updateDefaultApplicationDataPrivacySettings: (data: ApplicationDataPrivacy, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/default/dataPrivacy`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name ValidateDataPrivacySettings
     * @summary Validates data privacy settings for the `PUT /applications/web/{id}/dataPrivacy` request
     * @request POST:/applications/web/{id}/dataPrivacy/validator
     */
    validateDataPrivacySettings: (id: string, data: ApplicationDataPrivacy, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/${id}/dataPrivacy/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name ValidateDefaultApplicationDataPrivacySettings
     * @summary Validates data privacy settings of the default web application for the `PUT /applications/web/default/dataPrivacy` request
     * @request POST:/applications/web/default/dataPrivacy/validator
     */
    validateDefaultApplicationDataPrivacySettings: (data: ApplicationDataPrivacy, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/default/dataPrivacy/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name ListKeyUserActions
     * @summary Gets the list of key user actions in the specified web application
     * @request GET:/applications/web/{id}/keyUserActions
     */
    listKeyUserActions: (id: string, params: RequestParams = {}) =>
      this.request<KeyUserActionList, any>({
        path: `/applications/web/${id}/keyUserActions`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name CreateKeyUserAction
     * @summary Marks the user action as a key user action in the specified web application
     * @request POST:/applications/web/{id}/keyUserActions
     */
    createKeyUserAction: (id: string, data: KeyUserAction, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/applications/web/${id}/keyUserActions`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name DeleteKeyUserAction
     * @summary Removes the specified user action from the list of key user actions in the specified web application
     * @request DELETE:/applications/web/{id}/keyUserActions/{keyUserActionId}
     */
    deleteKeyUserAction: (id: string, keyUserActionId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/applications/web/${id}/keyUserActions/${keyUserActionId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name GetApplicationErrorConfig
     * @summary Gets the configuration of error rules in the specified application
     * @request GET:/applications/web/{id}/errorRules
     */
    getApplicationErrorConfig: (id: string, params: RequestParams = {}) =>
      this.request<ApplicationErrorRules, any>({
        path: `/applications/web/${id}/errorRules`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name UpdateApplicationErrorConfig
     * @summary Updates the configuration of error rules in the specified application
     * @request PUT:/applications/web/{id}/errorRules
     */
    updateApplicationErrorConfig: (id: string, data: ApplicationErrorRules, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/${id}/errorRules`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name ListWebApplicationConfigs
     * @summary Lists all existing web applications
     * @request GET:/applications/web
     */
    listWebApplicationConfigs: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/applications/web`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID as that will be automatically assigned by Dynatrace server.
     *
     * @tags RUM - Web application configuration
     * @name CreateWebApplicationConfig
     * @summary Creates a new web application
     * @request POST:/applications/web
     */
    createWebApplicationConfig: (data: WebApplicationConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/applications/web`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name GetWebApplicationConfig
     * @summary Gets the configuration of the specified web application
     * @request GET:/applications/web/{id}
     */
    getWebApplicationConfig: (id: string, params: RequestParams = {}) =>
      this.request<WebApplicationConfig, any>({
        path: `/applications/web/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the application with the specified ID does not exist, a new application will be created.
     *
     * @tags RUM - Web application configuration
     * @name UpdateWebApplicationConfig
     * @summary Updates the configuration of the specified web application or creates a new one
     * @request PUT:/applications/web/{id}
     */
    updateWebApplicationConfig: (id: string, data: WebApplicationConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/applications/web/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name DeleteWebApplicationConfig
     * @summary Deletes the specified web application
     * @request DELETE:/applications/web/{id}
     */
    deleteWebApplicationConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/applications/web/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name ValidateCreateWebApplicationConfig
     * @summary Validates the configuration of the web application for the `POST /applications/web` request
     * @request POST:/applications/web/validator
     */
    validateCreateWebApplicationConfig: (data: WebApplicationConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name ValidateUpdateWebApplicationConfig
     * @summary Validates the configuration of the web application for the `PUT /applications/web/{id}` request.
     * @request POST:/applications/web/{id}/validator
     */
    validateUpdateWebApplicationConfig: (id: string, data: WebApplicationConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Default application is pre-configured in your Dynatrace environment. By default all traffic goes to this application. After you configure your own applications, all the traffic, which doesn't fit to any of your applications, goes to the default one.
     *
     * @tags RUM - Web application configuration
     * @name GetDefaultApplication
     * @summary Gets the configuration of the default web application
     * @request GET:/applications/web/default
     */
    getDefaultApplication: (params: RequestParams = {}) =>
      this.request<WebApplicationConfig, any>({
        path: `/applications/web/default`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Default application is pre-configured in your Dynatrace environment. By default all traffic goes to this application. After you configure your own applications, all the traffic, which doesn't fit to any of your applications, goes to the default one.
     *
     * @tags RUM - Web application configuration
     * @name CreateOrUpdateDefaultConfiguration
     * @summary Updates the configuration of the default web application
     * @request PUT:/applications/web/default
     */
    createOrUpdateDefaultConfiguration: (data: WebApplicationConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/default`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Web application configuration
     * @name ValidateDefaultConfiguration
     * @summary Validates the configuration of the default web application for the `PUT /applications/web/default` request
     * @request POST:/applications/web/default/validator
     */
    validateDefaultConfiguration: (data: WebApplicationConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applications/web/default/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  applicationDetectionRules = {
    /**
     * @description This request reorders the application detection rules according to the submitted list of IDs. Application detection rules not present in the body of the request will retain their relative ordering but are placed *after* all those present in the request.
     *
     * @tags RUM - Application detection rules
     * @name OrderApplicationDetectionConfigs
     * @summary Reorders the application detection rules
     * @request PUT:/applicationDetectionRules/order
     */
    orderApplicationDetectionConfigs: (data: StubList, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applicationDetectionRules/order`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Application detection rules
     * @name GetApplicationDetectionConfig
     * @summary Gets the parameters of the specified application detection rule
     * @request GET:/applicationDetectionRules/{id}
     */
    getApplicationDetectionConfig: (id: string, params: RequestParams = {}) =>
      this.request<ApplicationDetectionRuleConfig, any>({
        path: `/applicationDetectionRules/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the application detection rule with the specified ID doesn't exist, a new application is created and appended to the end of the rule list. If the **order** parameter is set for an existing rule, the request uses this value. Otherwise it keeps the existing order of rules.
     *
     * @tags RUM - Application detection rules
     * @name UpdateApplicationDetectionConfig
     * @summary Updates the specified application detection rule
     * @request PUT:/applicationDetectionRules/{id}
     */
    updateApplicationDetectionConfig: (id: string, data: ApplicationDetectionRuleConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/applicationDetectionRules/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Application detection rules
     * @name DeleteApplicationDetectionConfig
     * @summary Deletes the specified application detection rule
     * @request DELETE:/applicationDetectionRules/{id}
     */
    deleteApplicationDetectionConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/applicationDetectionRules/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Application detection rules
     * @name ListApplicationDetectionConfigs
     * @summary Lists all available application detection rules
     * @request GET:/applicationDetectionRules
     */
    listApplicationDetectionConfigs: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/applicationDetectionRules`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server. You can only create detection rules for an existing application. If you need to create a rule for an application that doesn't exist yet, [create an application first](https://dt-url.net/vt03khh) and then configure detection rules for it.
     *
     * @tags RUM - Application detection rules
     * @name CreateApplicationDetectionConfig
     * @summary Creates a new application detection rule
     * @request POST:/applicationDetectionRules
     */
    createApplicationDetectionConfig: (
      data: ApplicationDetectionRuleConfig,
      query?: { position?: "APPEND" | "PREPEND" },
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/applicationDetectionRules`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Application detection rules
     * @name ValidateCreateApplicationDetectionConfig
     * @summary Validates the payload for the `POST /applicationDetection` request
     * @request POST:/applicationDetectionRules/validator
     */
    validateCreateApplicationDetectionConfig: (data: ApplicationDetectionRuleConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applicationDetectionRules/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Application detection rules
     * @name ValidateUpdateApplicationDetectionConfig
     * @summary Validate the payload for the `PUT /applicationDetection/{id}` request
     * @request POST:/applicationDetectionRules/{id}/validator
     */
    validateUpdateApplicationDetectionConfig: (
      id: string,
      data: ApplicationDetectionRuleConfig,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/applicationDetectionRules/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Application detection rules - Host detection
     * @name GetHostDetectionConfig
     * @summary Gets the configuration of host detection headers
     * @request GET:/applicationDetectionRules/hostDetection
     */
    getHostDetectionConfig: (params: RequestParams = {}) =>
      this.request<ApplicationDetectionRulesHostDetectionSettings, any>({
        path: `/applicationDetectionRules/hostDetection`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The request overwrites the existing configuration. Any headers not presented in the payload will be lost.
     *
     * @tags RUM - Application detection rules - Host detection
     * @name UpdateHostDetectionConfig
     * @summary Updates the configuration of host detection headers
     * @request PUT:/applicationDetectionRules/hostDetection
     */
    updateHostDetectionConfig: (data: ApplicationDetectionRulesHostDetectionSettings, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applicationDetectionRules/hostDetection`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Application detection rules - Host detection
     * @name ValidateHostDetectionConfig
     * @summary Validate the payload for `PUT /applicationDetection/hostDetection` request.
     * @request POST:/applicationDetectionRules/hostDetection/validator
     */
    validateHostDetectionConfig: (data: ApplicationDetectionRulesHostDetectionSettings, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/applicationDetectionRules/hostDetection/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  autoTags = {
    /**
     * No description
     *
     * @tags Automatically applied tags
     * @name ListAutoTags
     * @summary Lists all configured auto-tags
     * @request GET:/autoTags
     */
    listAutoTags: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/autoTags`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Automatically applied tags
     * @name CreateAutoTag
     * @summary Creates a new auto-tag
     * @request POST:/autoTags
     */
    createAutoTag: (data: AutoTag, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/autoTags`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Automatically applied tags
     * @name GetAutoTag
     * @summary Gets the properties of the specified auto-tag
     * @request GET:/autoTags/{id}
     */
    getAutoTag: (id: string, query?: { includeProcessGroupReferences?: boolean }, params: RequestParams = {}) =>
      this.request<AutoTag, any>({
        path: `/autoTags/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description If the auto-tag with the specified ID does not exist, a new auto-tag is created.
     *
     * @tags Automatically applied tags
     * @name UpdateAutoTag
     * @summary Updates an existing auto-tag
     * @request PUT:/autoTags/{id}
     */
    updateAutoTag: (id: string, data: AutoTag, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/autoTags/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Automatically applied tags
     * @name DeleteAutoTag
     * @summary Deletes the specified auto-tag
     * @request DELETE:/autoTags/{id}
     */
    deleteAutoTag: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/autoTags/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Automatically applied tags
     * @name ValidateCreateAutoTag
     * @summary Validates the payload for the `POST /autoTags` request
     * @request POST:/autoTags/validator
     */
    validateCreateAutoTag: (data: AutoTag, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/autoTags/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Automatically applied tags
     * @name ValidateUpdateAutoTag
     * @summary Validates the payload for the `PUT /autoTags/{id}` request
     * @request POST:/autoTags/{id}/validator
     */
    validateUpdateAutoTag: (id: string, data: AutoTag, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/autoTags/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  hosts = {
    /**
     * No description
     *
     * @tags OneAgent - Environment-wide configuration
     * @name GetAutoUpdateConfig
     * @summary Gets the environment-wide configuration of OneAgents auto-update
     * @request GET:/hosts/autoupdate
     */
    getAutoUpdateConfig: (params: RequestParams = {}) =>
      this.request<EnvironmentAutoUpdateConfig, any>({
        path: `/hosts/autoupdate`,
        method: "GET",
        ...params,
      }),

    /**
     * @description OneAgents are updated several minutes after the change of configuration. The process can take more time depending on number of OneAgents in the update queue.
     *
     * @tags OneAgent - Environment-wide configuration
     * @name SetAutoUpdateConfig
     * @summary Updates the environment-wide configuration of OneAgents auto-update
     * @request PUT:/hosts/autoupdate
     */
    setAutoUpdateConfig: (data: EnvironmentAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/hosts/autoupdate`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent - Environment-wide configuration
     * @name ValidateAutoUpdateConfig
     * @summary Validates the payload for the `PUT /hosts/autoupdate` request
     * @request POST:/hosts/autoupdate/validator
     */
    validateAutoUpdateConfig: (data: EnvironmentAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/hosts/autoupdate/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent on a host
     * @name GetAutoUpdateConfig1
     * @summary Gets the configuration of OneAgent auto-update on the specified host
     * @request GET:/hosts/{id}/autoupdate
     */
    getAutoUpdateConfig1: (id: string, params: RequestParams = {}) =>
      this.request<HostAutoUpdateConfig, any>({
        path: `/hosts/${id}/autoupdate`,
        method: "GET",
        ...params,
      }),

    /**
     * @description OneAgent is updated several minutes after the change of configuration. The process can take more time depending on number of OneAgents in the update queue.
     *
     * @tags OneAgent on a host
     * @name UpdateAutoUpdateConfig
     * @summary Updates the configuration of OneAgent auto-update on the specified host
     * @request PUT:/hosts/{id}/autoupdate
     */
    updateAutoUpdateConfig: (id: string, data: HostAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/hosts/${id}/autoupdate`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent on a host
     * @name ValidateAutoUpdateConfig1
     * @summary Validates the payload for the `PUT /hosts/{id}/autoupdate` request
     * @request POST:/hosts/{id}/autoupdate/validator
     */
    validateAutoUpdateConfig1: (id: string, data: HostAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/hosts/${id}/autoupdate/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent on a host
     * @name GetHostConfig
     * @summary Gets the OneAgent configuration on the specified host
     * @request GET:/hosts/{id}
     */
    getHostConfig: (id: string, params: RequestParams = {}) =>
      this.request<HostConfig, any>({
        path: `/hosts/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent on a host
     * @name GetMonitoringConfig
     * @summary Gets the monitoring configuration of OneAgent on the specified host
     * @request GET:/hosts/{id}/monitoring
     */
    getMonitoringConfig: (id: string, params: RequestParams = {}) =>
      this.request<MonitoringConfig, any>({
        path: `/hosts/${id}/monitoring`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The monitoring mode of OneAgent is updated several minutes after the change of configuration.
     *
     * @tags OneAgent on a host
     * @name UpdateMonitoringConfig
     * @summary Updates the monitoring configuration of OneAgent on the specified host
     * @request PUT:/hosts/{id}/monitoring
     */
    updateMonitoringConfig: (id: string, data: MonitoringConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/hosts/${id}/monitoring`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent on a host
     * @name ValidateMonitoringConfig
     * @summary Validates the payload for the `PUT /hosts/{id}/monitoring` request
     * @request POST:/hosts/{id}/monitoring/validator
     */
    validateMonitoringConfig: (id: string, data: MonitoringConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/hosts/${id}/monitoring/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent on a host
     * @name GetTechHostConfigs
     * @summary Gets the configuration of monitored technologies on the specified host
     * @request GET:/hosts/{id}/technologies
     */
    getTechHostConfigs: (id: string, params: RequestParams = {}) =>
      this.request<TechMonitoringList, any>({
        path: `/hosts/${id}/technologies`,
        method: "GET",
        ...params,
      }),
  };
  allowedBeaconOriginsForCors = {
    /**
     * No description
     *
     * @tags RUM - Allowed beacon origins for CORS
     * @name GetAllowedBeaconOriginsConfig
     * @summary Gets the configuration of the allowed beacon origins for CORS requests
     * @request GET:/allowedBeaconOriginsForCors
     */
    getAllowedBeaconOriginsConfig: (params: RequestParams = {}) =>
      this.request<AllowedBeaconOrigins, any>({
        path: `/allowedBeaconOriginsForCors`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The request overwrites the existing configuration. Any rules not presented in the payload will be lost.
     *
     * @tags RUM - Allowed beacon origins for CORS
     * @name PutAllowedBeaconOriginsConfig
     * @summary Updates the configuration of the allowed beacon origins for CORS requests
     * @request PUT:/allowedBeaconOriginsForCors
     */
    putAllowedBeaconOriginsConfig: (data: AllowedBeaconOrigins, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/allowedBeaconOriginsForCors`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Allowed beacon origins for CORS
     * @name ValidateAllowedBeaconOriginsConfig
     * @summary Validates the payload for the `PUT /allowedBeaconOriginsForCors` request
     * @request POST:/allowedBeaconOriginsForCors/validator
     */
    validateAllowedBeaconOriginsConfig: (data: AllowedBeaconOrigins, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/allowedBeaconOriginsForCors/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  conditionalNaming = {
    /**
     * No description
     *
     * @tags Conditional naming
     * @name GetNamingRule
     * @summary Lists the parameters of the specified naming rule
     * @request GET:/conditionalNaming/{type}/{id}
     */
    getNamingRule: (type: "processGroup" | "host" | "service", id: string, params: RequestParams = {}) =>
      this.request<ConditionalNamingRule, any>({
        path: `/conditionalNaming/${type}/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the rule with the specified ID doesn't exist, a new rule will be created at the end of the rules list and will be the last to evaluate.
     *
     * @tags Conditional naming
     * @name UpdateNamingRule
     * @summary Updates the specified naming rule
     * @request PUT:/conditionalNaming/{type}/{id}
     */
    updateNamingRule: (
      type: "processGroup" | "host" | "service",
      id: string,
      data: ConditionalNamingRule,
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/conditionalNaming/${type}/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conditional naming
     * @name DeleteNamingRule
     * @summary Deletes the specified naming rule
     * @request DELETE:/conditionalNaming/{type}/{id}
     */
    deleteNamingRule: (type: "processGroup" | "host" | "service", id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/conditionalNaming/${type}/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conditional naming
     * @name ValidateCreateNamingRule
     * @summary Validates the payload for the `POST /conditionalNaming/{type}` request
     * @request POST:/conditionalNaming/{type}/validator
     */
    validateCreateNamingRule: (
      type: "processGroup" | "host" | "service",
      data: ConditionalNamingRule,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/conditionalNaming/${type}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conditional naming
     * @name ValidateUpdateNamingRule
     * @summary Validates the payload for the `PUT /conditionalNaming/{type}/{id}` request
     * @request POST:/conditionalNaming/{type}/{id}/validator
     */
    validateUpdateNamingRule: (
      type: "processGroup" | "host" | "service",
      id: string,
      data: ConditionalNamingRule,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/conditionalNaming/${type}/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Conditional naming
     * @name ListNamingRules
     * @summary Lists all configured naming rules of the specified type
     * @request GET:/conditionalNaming/{type}
     */
    listNamingRules: (type: "processGroup" | "host" | "service", params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/conditionalNaming/${type}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Conditional naming
     * @name CreateNamingRule
     * @summary Creates a new naming rule
     * @request POST:/conditionalNaming/{type}
     */
    createNamingRule: (
      type: "processGroup" | "host" | "service",
      data: ConditionalNamingRule,
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/conditionalNaming/${type}`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  contentResources = {
    /**
     * No description
     *
     * @tags RUM - Content resources
     * @name GetContentConfig
     * @summary Gets the configuration of content resources
     * @request GET:/contentResources
     */
    getContentConfig: (params: RequestParams = {}) =>
      this.request<ContentResources, any>({
        path: `/contentResources`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Content resources
     * @name PutContentResourceConfig
     * @summary Updates the configuration of content resources
     * @request PUT:/contentResources
     */
    putContentResourceConfig: (data: ContentResources, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/contentResources`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Content resources
     * @name ValidateContentResourceConfig
     * @summary Validates the payload for the `PUT /contentResources` request
     * @request POST:/contentResources/validator
     */
    validateContentResourceConfig: (data: ContentResources, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/contentResources/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  credentials = {
    /**
     * No description
     *
     * @tags Credential vault
     * @name ListCredentials
     * @summary Lists all sets of credentials for synthetic monitors stored in your environment
     * @request GET:/credentials
     */
    listCredentials: (query?: { type?: "CERTIFICATE" | "USERNAME_PASSWORD" | "TOKEN" }, params: RequestParams = {}) =>
      this.request<CredentialsList, any>({
        path: `/credentials`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Credential vault
     * @name CreateCredentials
     * @summary Creates a new credentials set
     * @request POST:/credentials
     */
    createCredentials: (data: Credentials, params: RequestParams = {}) =>
      this.request<CredentialsResponseElement, ErrorEnvelope>({
        path: `/credentials`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The credentials set itself (username/certificate and password) is not included in the response.
     *
     * @tags Credential vault
     * @name GetCredentials
     * @summary Gets the metadata of the specified credentials set
     * @request GET:/credentials/{id}
     */
    getCredentials: (id: string, params: RequestParams = {}) =>
      this.request<CredentialsResponseElement, any>({
        path: `/credentials/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credential vault
     * @name UpdateCredentials
     * @summary Updates the specified credentials set
     * @request PUT:/credentials/{id}
     */
    updateCredentials: (id: string, data: Credentials, params: RequestParams = {}) =>
      this.request<CredentialsResponseElement, ErrorEnvelope>({
        path: `/credentials/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Credential vault
     * @name RemoveCredentials
     * @summary Deletes the specified credentials set
     * @request DELETE:/credentials/{id}
     */
    removeCredentials: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/credentials/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  service = {
    /**
     * No description
     *
     * @tags Service - Custom services
     * @name ListCustomServices
     * @summary Lists all custom services of the specified technology
     * @request GET:/service/customServices/{technology}
     */
    listCustomServices: (technology: "dotNet" | "go" | "java" | "nodeJS" | "php", params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/customServices/${technology}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description In the body of the request, neither custom service nor its rules can have the ID. All IDs will be generated automatically by Dynatrace.
     *
     * @tags Service - Custom services
     * @name CreateCustomService
     * @summary Creates a custom service
     * @request POST:/service/customServices/{technology}
     */
    createCustomService: (
      technology: "dotNet" | "go" | "java" | "nodeJS" | "php",
      data: CustomService,
      query?: { position?: "APPEND" | "PREPEND" },
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/customServices/${technology}`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Custom services
     * @name GetCustomService
     * @summary Gets the definition of the specified custom service
     * @request GET:/service/customServices/{technology}/{id}
     */
    getCustomService: (
      technology: "dotNet" | "go" | "java" | "nodeJS" | "php",
      id: string,
      query?: { includeProcessGroupReferences?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<CustomService, any>({
        path: `/service/customServices/${technology}/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Will use the config's ´order´ attribute if supplied, otherwise keeps the order of the existing config or appends if no existing config with the supplied ID was found.
     *
     * @tags Service - Custom services
     * @name UpdateCustomService
     * @summary Updates the specified custom service or create a new one.
     * @request PUT:/service/customServices/{technology}/{id}
     */
    updateCustomService: (
      technology: "dotNet" | "go" | "java" | "nodeJS" | "php",
      id: string,
      data: CustomService,
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/customServices/${technology}/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Custom services
     * @name DeleteCustomService
     * @summary Deletes the specified custom service
     * @request DELETE:/service/customServices/{technology}/{id}
     */
    deleteCustomService: (
      technology: "dotNet" | "go" | "java" | "nodeJS" | "php",
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/service/customServices/${technology}/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description This request reorders the custom services of the specified technology according to the given list of IDs. Custom services not present in the body of the request will retain their relative ordering but will be ordered *after* all those present in the request.
     *
     * @tags Service - Custom services
     * @name OrderCustomServices
     * @summary Reorders the custom services of the specified technology
     * @request PUT:/service/customServices/{technology}/order
     */
    orderCustomServices: (
      technology: "dotNet" | "go" | "java" | "nodeJS" | "php",
      data: StubList,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/customServices/${technology}/order`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Custom services
     * @name ValidateCreateCustomService
     * @summary Validate the new custom service for the `POST /customServices/{technology}` request
     * @request POST:/service/customServices/{technology}/validator
     */
    validateCreateCustomService: (
      technology: "dotNet" | "go" | "java" | "nodeJS" | "php",
      data: CustomService,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/customServices/${technology}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Custom services
     * @name ValidateUpdateCustomService
     * @summary Validate the new custom service for the `PUT /customServices/{technology}/{id}` request
     * @request POST:/service/customServices/{technology}/{id}/validator
     */
    validateUpdateCustomService: (
      technology: "dotNet" | "go" | "java" | "nodeJS" | "php",
      id: string,
      data: CustomService,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/customServices/${technology}/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection parameter sets
     * @name GetFdp
     * @summary Gets the specified failure detection parameter set | maturity=EARLY_ADOPTER
     * @request GET:/service/failureDetection/parameterSelection/parameterSets/{id}
     */
    getFdp: (id: string, params: RequestParams = {}) =>
      this.request<FailureDetectionParameterSet, void>({
        path: `/service/failureDetection/parameterSelection/parameterSets/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If a set with the specified ID doesn't exist, a new one is created.
     *
     * @tags Service - Failure detection parameter sets
     * @name CreateOrUpdateFdp
     * @summary Updates the specified failure detection parameter set | maturity=EARLY_ADOPTER
     * @request PUT:/service/failureDetection/parameterSelection/parameterSets/{id}
     */
    createOrUpdateFdp: (id: string, data: FailureDetectionParameterSet, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/parameterSets/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description You cannot delete the set that is used by any failure detection rule. If you need to delete such a set, switch the rule to a new set or delete the rule first.
     *
     * @tags Service - Failure detection parameter sets
     * @name DeleteFdp
     * @summary Deletes the specified failure detection parameter set | maturity=EARLY_ADOPTER
     * @request DELETE:/service/failureDetection/parameterSelection/parameterSets/{id}
     */
    deleteFdp: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/service/failureDetection/parameterSelection/parameterSets/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection parameter sets
     * @name GetAllFdps
     * @summary Lists all available failure detection parameter sets | maturity=EARLY_ADOPTER
     * @request GET:/service/failureDetection/parameterSelection/parameterSets
     */
    getAllFdps: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/failureDetection/parameterSelection/parameterSets`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection parameter sets
     * @name CreateFdp
     * @summary Creates a new failure detection parameter set | maturity=EARLY_ADOPTER
     * @request POST:/service/failureDetection/parameterSelection/parameterSets
     */
    createFdp: (data: FailureDetectionParameterSet, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/parameterSets`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection parameter sets
     * @name ValidateCreateFdp
     * @summary Validates the payload for the `POST /service/failureDetection/parameterSelection/parameterSets` request | maturity=EARLY_ADOPTER
     * @request POST:/service/failureDetection/parameterSelection/parameterSets/validator
     */
    validateCreateFdp: (data: FailureDetectionParameterSet, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/parameterSets/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection parameter sets
     * @name ValidateUpdateFdp
     * @summary Validates the payload for the `PUT /service/failureDetection/parameterSelection/parameterSets/{id}` request | maturity=EARLY_ADOPTER
     * @request POST:/service/failureDetection/parameterSelection/parameterSets/{id}/validator
     */
    validateUpdateFdp: (id: string, data: FailureDetectionParameterSet, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/parameterSets/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Rules that use the set will be automatically adapted to the new ID.
     *
     * @tags Service - Failure detection parameter sets
     * @name ChangeFdpId
     * @summary Changes the ID of the specified failure detection parameter set | maturity=EARLY_ADOPTER
     * @request PUT:/service/failureDetection/parameterSelection/parameterSets/{id}/changeId
     */
    changeFdpId: (id: string, data: EntityShortRepresentation, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/parameterSets/${id}/changeId`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection rules
     * @name GetAllRules
     * @summary Lists all available failure detection rules | maturity=EARLY_ADOPTER
     * @request GET:/service/failureDetection/parameterSelection/rules
     */
    getAllRules: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/failureDetection/parameterSelection/rules`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The new rule is appended to the end of the rule list. Rules are evaluated from top to bottom, the first matching rule applies.To enforce a particular order use the reorder request. The failure detection parameter set used by the rule must exist at the time of rule creation.
     *
     * @tags Service - Failure detection rules
     * @name CreateRule
     * @summary Creates a new failure detection rule | maturity=EARLY_ADOPTER
     * @request POST:/service/failureDetection/parameterSelection/rules
     */
    createRule: (data: FailureDetectionRule, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/rules`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection rules
     * @name GetRule
     * @summary Gets the properties of the specified rule | maturity=EARLY_ADOPTER
     * @request GET:/service/failureDetection/parameterSelection/rules/{id}
     */
    getRule: (id: string, params: RequestParams = {}) =>
      this.request<FailureDetectionRule, void>({
        path: `/service/failureDetection/parameterSelection/rules/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If a rule with the specified ID doesn't exist, a new one is created and appended to the end of the rule list. Rules are evaluated from top to bottom, the first matching rule applies.To enforce a particular order use the reorder request. The failure detection parameter set used by the rule must exist at the time of rule creation.
     *
     * @tags Service - Failure detection rules
     * @name CreateOrUpdateRule
     * @summary Updates the specified failure detection rule rule | maturity=EARLY_ADOPTER
     * @request PUT:/service/failureDetection/parameterSelection/rules/{id}
     */
    createOrUpdateRule: (id: string, data: FailureDetectionRule, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/rules/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection rules
     * @name DeleteRule
     * @summary Deletes the specified failure detection rule | maturity=EARLY_ADOPTER
     * @request DELETE:/service/failureDetection/parameterSelection/rules/{id}
     */
    deleteRule: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/service/failureDetection/parameterSelection/rules/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection rules
     * @name ValidateCreateRule
     * @summary Validates the payload for the `POST /service/failureDetection/parameterSelection/rules` request | maturity=EARLY_ADOPTER
     * @request POST:/service/failureDetection/parameterSelection/rules/validator
     */
    validateCreateRule: (data: FailureDetectionRule, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/rules/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection rules
     * @name ValidateUpdateRule
     * @summary Validates the payload for the `PUT /service/failureDetection/parameterSelection/rules/{id}` request | maturity=EARLY_ADOPTER
     * @request POST:/service/failureDetection/parameterSelection/rules/{id}/validator
     */
    validateUpdateRule: (id: string, data: FailureDetectionRule, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/rules/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Rules are evaluated from top to bottom, the first matching rule applies.
     *
     * @tags Service - Failure detection rules
     * @name ReorderRules
     * @summary Reorders failure detection rules | maturity=EARLY_ADOPTER
     * @request PUT:/service/failureDetection/parameterSelection/rules/reorderRules
     */
    reorderRules: (data: FdpSelectionRuleOrder, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/rules/reorderRules`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Failure detection rules
     * @name ChangeRuleId
     * @summary Changes the ID of the specified rule | maturity=EARLY_ADOPTER
     * @request PUT:/service/failureDetection/parameterSelection/rules/{id}/changeId
     */
    changeRuleId: (id: string, data: EntityShortRepresentation, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/failureDetection/parameterSelection/rules/${id}/changeId`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - IBM MQ tracing
     * @name GetQueueManager
     * @summary Gets the parameters of the specified queue manager
     * @request GET:/service/ibmMQTracing/queueManager/{name}
     */
    getQueueManager: (name: string, params: RequestParams = {}) =>
      this.request<QueueManager, any>({
        path: `/service/ibmMQTracing/queueManager/${name}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the queue manager with the specified ID doesn’t exist, a new queue manager will be created.
     *
     * @tags Service - IBM MQ tracing
     * @name PutQueueManager
     * @summary Updates the specified queue manager or creates a new one
     * @request PUT:/service/ibmMQTracing/queueManager/{name}
     */
    putQueueManager: (name: string, data: QueueManager, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/ibmMQTracing/queueManager/${name}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - IBM MQ tracing
     * @name DeleteQueueManager
     * @summary Deletes the specified queue manager
     * @request DELETE:/service/ibmMQTracing/queueManager/{name}
     */
    deleteQueueManager: (name: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/service/ibmMQTracing/queueManager/${name}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - IBM MQ tracing
     * @name ValidateQueueManager
     * @summary Validates the queue manager update for the `PUT /service/ibmMQTracing/queueManager/{name}` request
     * @request POST:/service/ibmMQTracing/queueManager/{name}/validator
     */
    validateQueueManager: (name: string, data: QueueManager, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/ibmMQTracing/queueManager/${name}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description This endpoint is used to provide Dynatrace with your IBM MQ setup regarding alias, remote and cluster queues. This is required to facilitate end to end tracing for messages send via IBM MQ where sender and receiver use different queue names. Without this information Dynatrace would still trace all requests, but would not be able to stitch service calls that use these IBM MQ features.
     *
     * @tags Service - IBM MQ tracing
     * @name GetQueueManagers
     * @summary Lists all available queue managers
     * @request GET:/service/ibmMQTracing/queueManager
     */
    getQueueManagers: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/ibmMQTracing/queueManager`,
        method: "GET",
        ...params,
      }),

    /**
     * @description This endpoint is used to provide Dynatrace with all IBM MQ queues (defined by QueueManagerName and QueueName) which are used to send messages to IBM IMS on the mainframe. This is required to facilitate end to end tracing for messages sent via IBM MQ to IBM IMS.
     *
     * @tags Service - IBM MQ tracing
     * @name GetAllImsEntryQueues
     * @summary Lists all IBM IMS entry queues
     * @request GET:/service/ibmMQTracing/imsEntryQueue
     */
    getAllImsEntryQueues: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/ibmMQTracing/imsEntryQueue`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID as it will be automatically assigned by the Dynatrace server.
     *
     * @tags Service - IBM MQ tracing
     * @name CreateImsEntryQueue
     * @summary Creates an IBM IMS entry queue
     * @request POST:/service/ibmMQTracing/imsEntryQueue
     */
    createImsEntryQueue: (data: IbmMQImsEntryQueue, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/ibmMQTracing/imsEntryQueue`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - IBM MQ tracing
     * @name GetImsEntryQueue
     * @summary Gets the properties of the specified IBM IMS entry queue
     * @request GET:/service/ibmMQTracing/imsEntryQueue/{id}
     */
    getImsEntryQueue: (id: string, params: RequestParams = {}) =>
      this.request<IbmMQImsEntryQueue, any>({
        path: `/service/ibmMQTracing/imsEntryQueue/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the IBM IMS entry queue with the specified ID does not exist, a new IBM IMS entry queue will be created.
     *
     * @tags Service - IBM MQ tracing
     * @name CreateOrUpdateImsEntryQueue
     * @summary Updates an existing IBM IMS entry queue or creates a new one
     * @request PUT:/service/ibmMQTracing/imsEntryQueue/{id}
     */
    createOrUpdateImsEntryQueue: (id: string, data: IbmMQImsEntryQueue, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/ibmMQTracing/imsEntryQueue/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - IBM MQ tracing
     * @name DeleteImsEntryQueue
     * @summary Deletes the specified IBM IMS entry queue
     * @request DELETE:/service/ibmMQTracing/imsEntryQueue/{id}
     */
    deleteImsEntryQueue: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/service/ibmMQTracing/imsEntryQueue/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - IBM MQ tracing
     * @name ValidateImsEntryQueueForPost
     * @summary Validates new IBM IMS entry queues for the `POST /service/ibmMQTracing/imsEntryQueue` request
     * @request POST:/service/ibmMQTracing/imsEntryQueue/validator
     */
    validateImsEntryQueueForPost: (data: IbmMQImsEntryQueue, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/ibmMQTracing/imsEntryQueue/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - IBM MQ tracing
     * @name ValidateImsEntryQueueForPut
     * @summary Validates update of existing IBM IMS entry queues for the `PUT /service/ibmMQTracing/imsEntryQueue/{id}` request
     * @request POST:/service/ibmMQTracing/imsEntryQueue/{id}/validator
     */
    validateImsEntryQueueForPut: (id: string, data: IbmMQImsEntryQueue, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/ibmMQTracing/imsEntryQueue/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request attributes
     * @name ListRequestAttributesConfigs
     * @summary Lists all available request attributes
     * @request GET:/service/requestAttributes
     */
    listRequestAttributesConfigs: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/requestAttributes`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID as IDs are automatically assigned.
     *
     * @tags Service - Request attributes
     * @name CreateRequestAttributesConfig
     * @summary Creates a new request attribute
     * @request POST:/service/requestAttributes
     */
    createRequestAttributesConfig: (data: RequestAttribute, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/requestAttributes`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request attributes
     * @name GetRequestAttributesConfig
     * @summary Shows the properties of the specified request attribute
     * @request GET:/service/requestAttributes/{id}
     */
    getRequestAttributesConfig: (
      id: string,
      query?: { includeProcessGroupReferences?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<RequestAttribute, any>({
        path: `/service/requestAttributes/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request attributes
     * @name UpdateRequestAttributesConfig
     * @summary Updates an existing request attribute or creates a new one
     * @request PUT:/service/requestAttributes/{id}
     */
    updateRequestAttributesConfig: (id: string, data: RequestAttribute, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/requestAttributes/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request attributes
     * @name DeleteRequestAttributesConfig
     * @summary Deletes the specified request attribute
     * @request DELETE:/service/requestAttributes/{id}
     */
    deleteRequestAttributesConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/service/requestAttributes/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request attributes
     * @name ValidateCreateRequestAttributesConfig
     * @summary Validates new request attributes for the `POST /requestAttributes` request
     * @request POST:/service/requestAttributes/validator
     */
    validateCreateRequestAttributesConfig: (data: RequestAttribute, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/requestAttributes/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request attributes
     * @name ValidateUpdateRequestAttributesConfig
     * @summary Validate updates of existing request attribute for the `PUT /requestAttributes/{id}` request
     * @request POST:/service/requestAttributes/{id}/validator
     */
    validateUpdateRequestAttributesConfig: (id: string, data: RequestAttribute, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/requestAttributes/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request naming
     * @name GetRequestNaming
     * @summary Gets the parameters of the specified request naming rule
     * @request GET:/service/requestNaming/{id}
     */
    getRequestNaming: (id: string, params: RequestParams = {}) =>
      this.request<RequestNaming, any>({
        path: `/service/requestNaming/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the rule with the specified ID doesn't exist, a new rule will be created at the end of the rules list and will be the last to evaluate.
     *
     * @tags Service - Request naming
     * @name UpdateRequestNaming
     * @summary Updates the specified request naming rule
     * @request PUT:/service/requestNaming/{id}
     */
    updateRequestNaming: (id: string, data: RequestNaming, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/requestNaming/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request naming
     * @name DeleteRequestNaming
     * @summary Deletes the specified request naming rule
     * @request DELETE:/service/requestNaming/{id}
     */
    deleteRequestNaming: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/service/requestNaming/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request naming
     * @name ListRequestNaming
     * @summary Lists all request naming rules along with their parameters
     * @request GET:/service/requestNaming
     */
    listRequestNaming: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/requestNaming`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The new rule goes to the end of the rules list and will be the last to evaluate. Existing rules remain unaffected.
     *
     * @tags Service - Request naming
     * @name CreateRequestNaming
     * @summary Creates a new request naming rule
     * @request POST:/service/requestNaming
     */
    createRequestNaming: (
      data: RequestNaming,
      query?: { position?: "APPEND" | "PREPEND" },
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/requestNaming`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description If the rule with the specified ID doesn't exist, a new rule will be created at the end of the rules list and will be the last to evaluate.
     *
     * @tags Service - Request naming
     * @name ValidateUpdateRequestNaming
     * @summary Validates the new request naming for the `PUT /requestNaming/{id}` request
     * @request POST:/service/requestNaming/{id}/validator
     */
    validateUpdateRequestNaming: (id: string, data: RequestNaming, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/requestNaming/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request naming
     * @name ValidateCreateRequestNaming
     * @summary Validates the new request naming rule for the `POST /requestNaming` request
     * @request POST:/service/requestNaming/validator
     */
    validateCreateRequestNaming: (data: RequestNaming, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/requestNaming/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description This request reorders the request namings according to the given list of IDs. Request namings not present in the body of the request will retain their relative ordering but will be ordered *after* all those present in the request.
     *
     * @tags Service - Request naming
     * @name OrderRequestNaming
     * @summary Reorders the request namings
     * @request PUT:/service/requestNaming/order
     */
    orderRequestNaming: (data: StubList, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/requestNaming/order`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Lists all extensions which currently are renamed to e.g., `Image`
     *
     * @tags Service - Request naming
     * @name Get
     * @summary Lists the global service resource requests.
     * @request GET:/service/resourceNaming
     */
    get: (params: RequestParams = {}) =>
      this.request<ResourceNaming, any>({
        path: `/service/resourceNaming`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Update all extensions which are renamed to `Image` or `Binary`
     *
     * @tags Service - Request naming
     * @name Put
     * @summary Updates the global service resource requests.
     * @request PUT:/service/resourceNaming
     */
    put: (data: ResourceNaming, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/resourceNaming`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Request naming
     * @name Validate
     * @summary Validates new resource requests settings for the `PUT /service/resourceRequest` request.
     * @request POST:/service/resourceNaming/validator
     */
    validate: (data: ResourceNaming, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/resourceNaming/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web request
     * @name GetRequestDetectionRule
     * @summary Gets the properties of the specified service detection rule
     * @request GET:/service/detectionRules/FULL_WEB_REQUEST/{id}
     */
    getRequestDetectionRule: (id: string, params: RequestParams = {}) =>
      this.request<FullWebRequestRule, void>({
        path: `/service/detectionRules/FULL_WEB_REQUEST/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If a rule with the specified ID doesn't exist, a new rule is created and appended to the end of the rule list. The request keeps the existing order of rules, unless the **order** parameter is set.
     *
     * @tags Service - Detection full web request
     * @name UpdateRequestDetectionRule
     * @summary Updates an existing service detection rule
     * @request PUT:/service/detectionRules/FULL_WEB_REQUEST/{id}
     */
    updateRequestDetectionRule: (id: string, data: FullWebRequestRule, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_REQUEST/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web request
     * @name DeleteRequestDetectionRule
     * @summary Deletes the specified service detection rule
     * @request DELETE:/service/detectionRules/FULL_WEB_REQUEST/{id}
     */
    deleteRequestDetectionRule: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/service/detectionRules/FULL_WEB_REQUEST/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web request
     * @name ListRequestDetectionRules
     * @summary Lists all full web request service detection rules
     * @request GET:/service/detectionRules/FULL_WEB_REQUEST
     */
    listRequestDetectionRules: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/detectionRules/FULL_WEB_REQUEST`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Service - Detection full web request
     * @name CreateRequestDetectionRule
     * @summary Creates a new service detection rule
     * @request POST:/service/detectionRules/FULL_WEB_REQUEST
     */
    createRequestDetectionRule: (
      data: FullWebRequestRule,
      query?: { position?: "APPEND" | "PREPEND" },
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_REQUEST`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description The request reorders the rules of the specified type according to the order of the IDs in the body of the request. Rules that are omitted in the body of the request will retain their relative order but will be placed *after* all those present in the request.
     *
     * @tags Service - Detection full web request
     * @name OrderRequestDetectionRules
     * @summary Reorders the service detection rules of the specified type
     * @request PUT:/service/detectionRules/FULL_WEB_REQUEST/order
     */
    orderRequestDetectionRules: (data: StubList, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_REQUEST/order`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web request
     * @name ValidateCreateRequestDetectionRule
     * @summary Validates the payload for the `POST /ruleBasedServiceDetection/FULL_WEB_REQUEST` request
     * @request POST:/service/detectionRules/FULL_WEB_REQUEST/validator
     */
    validateCreateRequestDetectionRule: (data: FullWebRequestRule, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_REQUEST/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web request
     * @name ValidateUpdateRequestDetectionRule
     * @summary Validates the payload for the `PUT /service/detectionRules/FULL_WEB_REQUEST/{id}` request
     * @request POST:/service/detectionRules/FULL_WEB_REQUEST/{id}/validator
     */
    validateUpdateRequestDetectionRule: (id: string, data: FullWebRequestRule, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_REQUEST/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web service
     * @name GetServiceDetectionRule
     * @summary Shows the properties of the specified service detection rule
     * @request GET:/service/detectionRules/FULL_WEB_SERVICE/{id}
     */
    getServiceDetectionRule: (id: string, params: RequestParams = {}) =>
      this.request<FullWebServiceRule, void>({
        path: `/service/detectionRules/FULL_WEB_SERVICE/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the rule with the specified ID doesn't exist, a new rule will be created and appended to the end of the rule list. The request keeps an existing order of rules, unless the **order** parameter is set.
     *
     * @tags Service - Detection full web service
     * @name UpdateServiceDetectionRule
     * @summary Updates an existing service detection rule
     * @request PUT:/service/detectionRules/FULL_WEB_SERVICE/{id}
     */
    updateServiceDetectionRule: (id: string, data: FullWebServiceRule, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_SERVICE/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web service
     * @name DeleteServiceDetectionRule
     * @summary Deletes the specified service detection rule
     * @request DELETE:/service/detectionRules/FULL_WEB_SERVICE/{id}
     */
    deleteServiceDetectionRule: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/service/detectionRules/FULL_WEB_SERVICE/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web service
     * @name ListServiceDetectionRules
     * @summary Lists all full web service detection rules
     * @request GET:/service/detectionRules/FULL_WEB_SERVICE
     */
    listServiceDetectionRules: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/detectionRules/FULL_WEB_SERVICE`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID as it will be automatically assigned.
     *
     * @tags Service - Detection full web service
     * @name CreateServiceDetectionRule
     * @summary Creates a new service detection rule
     * @request POST:/service/detectionRules/FULL_WEB_SERVICE
     */
    createServiceDetectionRule: (
      data: FullWebServiceRule,
      query?: { position?: "APPEND" | "PREPEND" },
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_SERVICE`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description The request reorders the rules of the specified type according to the order of the IDs in the body of the request. Rules that are omitted in the body of the request will retain their relative order but will be placed *after* all those present in the request.
     *
     * @tags Service - Detection full web service
     * @name OrderServiceDetectionRules
     * @summary Reorders the service detection rules of the specified type
     * @request PUT:/service/detectionRules/FULL_WEB_SERVICE/order
     */
    orderServiceDetectionRules: (data: StubList, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_SERVICE/order`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web service
     * @name ValidateCreateServiceDetectionRule
     * @summary Validates the payload for the `POST /ruleBasedServiceDetection/FULL_WEB_SERVICE` request
     * @request POST:/service/detectionRules/FULL_WEB_SERVICE/validator
     */
    validateCreateServiceDetectionRule: (data: FullWebServiceRule, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_SERVICE/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection full web service
     * @name ValidateUpdateServiceDetectionRule
     * @summary Validate the payload for the `PUT /ruleBasedServiceDetection/FULL_WEB_SERVICE/{id}` request
     * @request POST:/service/detectionRules/FULL_WEB_SERVICE/{id}/validator
     */
    validateUpdateServiceDetectionRule: (id: string, data: FullWebServiceRule, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/FULL_WEB_SERVICE/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web request
     * @name ValidateCreateOpaqueAndExternalWebRequestDetectionRule
     * @summary Validates the payload for the `POST /ruleBasedServiceDetection/OPAQUE_AND_EXTERNAL_WEB_REQUEST` request
     * @request POST:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/validator
     */
    validateCreateOpaqueAndExternalWebRequestDetectionRule: (
      data: OpaqueAndExternalWebRequestRule,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web request
     * @name GetOpaqueAndExternalWebRequestDetectionRule
     * @summary Shows the properties of the specified service detection rule
     * @request GET:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/{id}
     */
    getOpaqueAndExternalWebRequestDetectionRule: (id: string, params: RequestParams = {}) =>
      this.request<OpaqueAndExternalWebRequestRule, void>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the rule with the specified ID doesn't exist, a new rule will be created and appended to the end of the rule list. The request keeps an existing order of rules, unless the **order** parameter is set.
     *
     * @tags Service - Detection opaque and external web request
     * @name UpdateOpaqueAndExternalWebRequestDetectionRule
     * @summary Updates an existing service detection rule
     * @request PUT:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/{id}
     */
    updateOpaqueAndExternalWebRequestDetectionRule: (
      id: string,
      data: OpaqueAndExternalWebRequestRule,
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web request
     * @name DeleteOpaqueAndExternalWebRequestDetectionRule
     * @summary Deletes the specified service detection rule
     * @request DELETE:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/{id}
     */
    deleteOpaqueAndExternalWebRequestDetectionRule: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web request
     * @name ListOpaqueAndExternalWebRequestDetectionRules
     * @summary Lists all opaque and external web request service detection rules
     * @request GET:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST
     */
    listOpaqueAndExternalWebRequestDetectionRules: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID as it will be automatically assigned.
     *
     * @tags Service - Detection opaque and external web request
     * @name CreateOpaqueAndExternalWebRequestDetectionRule
     * @summary Creates a new service detection rule
     * @request POST:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST
     */
    createOpaqueAndExternalWebRequestDetectionRule: (
      data: OpaqueAndExternalWebRequestRule,
      query?: { position?: "APPEND" | "PREPEND" },
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description The request reorders the rules of the specified type according to the order of the IDs in the body of the request. Rules that are omitted in the body of the request will retain their relative order but will be placed *after* all those present in the request.
     *
     * @tags Service - Detection opaque and external web request
     * @name OrderOpaqueAndExternalWebRequestDetectionRules
     * @summary Reorders the service detection rules of the specified type
     * @request PUT:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/order
     */
    orderOpaqueAndExternalWebRequestDetectionRules: (data: StubList, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/order`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web request
     * @name ValidateUpdateOpaqueAndExternalWebRequestDetectionRule
     * @summary Validate the payload for the `PUT /ruleBasedServiceDetection/OPAQUE_AND_EXTERNAL_WEB_REQUEST/{id}` request
     * @request POST:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/{id}/validator
     */
    validateUpdateOpaqueAndExternalWebRequestDetectionRule: (
      id: string,
      data: OpaqueAndExternalWebRequestRule,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_REQUEST/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web service
     * @name GetOpaqueAndExternalWebServiceRule
     * @summary Shows the properties of the specified service detection rule
     * @request GET:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/{id}
     */
    getOpaqueAndExternalWebServiceRule: (id: string, params: RequestParams = {}) =>
      this.request<OpaqueAndExternalWebServiceRule, void>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the rule with the specified ID doesn't exist, a new rule will be created and appended to the end of the rule list. The request keeps an existing order of rules, unless the **order** parameter is set.
     *
     * @tags Service - Detection opaque and external web service
     * @name UpdateOpaqueAndExternalWebServiceRule
     * @summary Updates an existing service detection rule
     * @request PUT:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/{id}
     */
    updateOpaqueAndExternalWebServiceRule: (
      id: string,
      data: OpaqueAndExternalWebServiceRule,
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web service
     * @name DeleteOpaqueAndExternalWebServiceRule
     * @summary Deletes the specified service detection rule
     * @request DELETE:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/{id}
     */
    deleteOpaqueAndExternalWebServiceRule: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web service
     * @name ListOpaqueAndExternalWebServiceRules
     * @summary Lists all opaque and external web service detection rules
     * @request GET:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE
     */
    listOpaqueAndExternalWebServiceRules: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID as it will be automatically assigned.
     *
     * @tags Service - Detection opaque and external web service
     * @name CreateOpaqueAndExternalWebServiceRule
     * @summary Creates a new service detection rule
     * @request POST:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE
     */
    createOpaqueAndExternalWebServiceRule: (
      data: OpaqueAndExternalWebServiceRule,
      query?: { position?: "APPEND" | "PREPEND" },
      params: RequestParams = {},
    ) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE`,
        method: "POST",
        query: query,
        body: data,
        ...params,
      }),

    /**
     * @description The request reorders the rules of the specified type according to the order of the IDs in the body of the request. Rules that are omitted in the body of the request will retain their relative order but will be placed *after* all those present in the request.
     *
     * @tags Service - Detection opaque and external web service
     * @name OrderOpaqueAndExternalWebServiceRules
     * @summary Reorders the service detection rules of the specified type
     * @request PUT:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/order
     */
    orderOpaqueAndExternalWebServiceRules: (data: StubList, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/order`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web service
     * @name ValidateCreateOpaqueAndExternalWebServiceRule
     * @summary Validates the payload for the `POST /ruleBasedServiceDetection/OPAQUE_AND_EXTERNAL_WEB_SERVICE` request
     * @request POST:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/validator
     */
    validateCreateOpaqueAndExternalWebServiceRule: (
      data: OpaqueAndExternalWebServiceRule,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service - Detection opaque and external web service
     * @name ValidateUpdateOpaqueAndExternalWebServiceRule
     * @summary Validate the payload for the `PUT /ruleBasedServiceDetection/OPAQUE_AND_EXTERNAL_WEB_SERVICE/{id}` request
     * @request POST:/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/{id}/validator
     */
    validateUpdateOpaqueAndExternalWebServiceRule: (
      id: string,
      data: OpaqueAndExternalWebServiceRule,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/service/detectionRules/OPAQUE_AND_EXTERNAL_WEB_SERVICE/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  dashboards = {
    /**
     * No description
     *
     * @tags Dashboards
     * @name GetDashboardStubsList
     * @summary Lists all dashboards of the environment
     * @request GET:/dashboards
     */
    getDashboardStubsList: (query?: { owner?: string; tags?: string[] }, params: RequestParams = {}) =>
      this.request<DashboardList, any>({
        path: `/dashboards`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by Dynatrace.
     *
     * @tags Dashboards
     * @name CreateDashboard
     * @summary Creates a dashboard
     * @request POST:/dashboards
     */
    createDashboard: (data: Dashboard, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/dashboards`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dashboards
     * @name GetDashboard
     * @summary Gets the properties of the specified dashboard
     * @request GET:/dashboards/{id}
     */
    getDashboard: (id: string, params: RequestParams = {}) =>
      this.request<Dashboard, any>({
        path: `/dashboards/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the dashboard with the specified ID doesn't exist, a new dashboard is created
     *
     * @tags Dashboards
     * @name UpdateDashboard
     * @summary Updates the specified dashboard
     * @request PUT:/dashboards/{id}
     */
    updateDashboard: (id: string, data: Dashboard, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/dashboards/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dashboards
     * @name DeleteDashboard
     * @summary Deletes the specified dashboard
     * @request DELETE:/dashboards/{id}
     */
    deleteDashboard: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/dashboards/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description The body must not provide an ID.
     *
     * @tags Dashboards
     * @name ValidateDashboardCreation
     * @summary Validates the payload for the 'POST /dashboards' request
     * @request POST:/dashboards/validator
     */
    validateDashboardCreation: (data: Dashboard, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/dashboards/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dashboards
     * @name ValidateDashboardUpdate
     * @summary Validates the payload for the 'PUT /dashboards/{id}' request
     * @request POST:/dashboards/{id}/validator
     */
    validateDashboardUpdate: (id: string, data: Dashboard, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/dashboards/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dashboards
     * @name GetDashboardSharingSettings
     * @summary Gets the sharing configuration of the specified dashboard | maturity=EARLY_ADOPTER
     * @request GET:/dashboards/{id}/shareSettings
     */
    getDashboardSharingSettings: (id: string, params: RequestParams = {}) =>
      this.request<DashboardSharing, any>({
        path: `/dashboards/${id}/shareSettings`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dashboards
     * @name UpdateShareSettings
     * @summary Updates the sharing configuration of the specified dashboard | maturity=EARLY_ADOPTER
     * @request PUT:/dashboards/{id}/shareSettings
     */
    updateShareSettings: (id: string, data: DashboardSharing, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/dashboards/${id}/shareSettings`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dashboards
     * @name ValidateShareSettingsUpdate
     * @summary Validates the payload for the 'PUT /dashboards/{id}/shareSettings' request | maturity=EARLY_ADOPTER
     * @request POST:/dashboards/{id}/shareSettings/validator
     */
    validateShareSettingsUpdate: (id: string, data: DashboardSharing, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/dashboards/${id}/shareSettings/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  dataPrivacy = {
    /**
     * No description
     *
     * @tags Data privacy and security
     * @name GetDataPrivacySettings1
     * @summary Lists the global data privacy and security settings
     * @request GET:/dataPrivacy
     */
    getDataPrivacySettings1: (params: RequestParams = {}) =>
      this.request<DataPrivacyAndSecurity, any>({
        path: `/dataPrivacy`,
        method: "GET",
        ...params,
      }),

    /**
     * @description This request updates global settings, affecting all your applications. To update application-specific data privacy settings, use the [**PUT data privacy of a web application**](https://dt-url.net/q403sv9) request.
     *
     * @tags Data privacy and security
     * @name UpdateDataPrivacySettings1
     * @summary Updates the global data privacy and security settings
     * @request PUT:/dataPrivacy
     */
    updateDataPrivacySettings1: (data: DataPrivacyAndSecurity, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/dataPrivacy`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Data privacy and security
     * @name ValidateDataPrivacySettings1
     * @summary Validates the payload for the `PUT /dataPrivacy` request
     * @request POST:/dataPrivacy/validator
     */
    validateDataPrivacySettings1: (data: DataPrivacyAndSecurity, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/dataPrivacy/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  extensions = {
    /**
     * No description
     *
     * @tags Extensions
     * @name GetExtension
     * @summary Lists the properties of the specified extension | maturity=EARLY_ADOPTER
     * @request GET:/extensions/{id}
     */
    getExtension: (id: string, params: RequestParams = {}) =>
      this.request<Extension, any>({
        path: `/extensions/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Deletion of the extension file uninstalls the extension, making it unavailable for use.
     *
     * @tags Extensions
     * @name DeleteExtension
     * @summary Deletes the ZIP file of the specified extension | maturity=EARLY_ADOPTER
     * @request DELETE:/extensions/{id}
     */
    deleteExtension: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/extensions/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name GetLocalExtensionConfiguration
     * @summary Returns instance of local configuration for given extension | maturity=EARLY_ADOPTER
     * @request GET:/extensions/{id}/instances/{configurationId}
     */
    getLocalExtensionConfiguration: (id: string, configurationId: string, params: RequestParams = {}) =>
      this.request<ExtensionConfigurationDto, any>({
        path: `/extensions/${id}/instances/${configurationId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name UpdateLocalExtensionConfiguration
     * @summary Updates instance of local configuration for given extension | maturity=EARLY_ADOPTER
     * @request PUT:/extensions/{id}/instances/{configurationId}
     */
    updateLocalExtensionConfiguration: (
      id: string,
      configurationId: string,
      data: ExtensionConfigurationDto,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/extensions/${id}/instances/${configurationId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name DeleteLocalExtensionConfiguration
     * @summary Deletes an existing configuration of the extension | maturity=EARLY_ADOPTER
     * @request DELETE:/extensions/{id}/instances/{configurationId}
     */
    deleteLocalExtensionConfiguration: (id: string, configurationId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/extensions/${id}/instances/${configurationId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name GetRemoteExtensionModules
     * @summary List available ActiveGate extension modules | maturity=EARLY_ADOPTER
     * @request GET:/extensions/activeGateExtensionModules
     */
    getRemoteExtensionModules: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/extensions/activeGateExtensionModules`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name GetHostsForTechnology
     * @summary Lists all available hosts that have specified technology running | maturity=EARLY_ADOPTER
     * @request GET:/extensions/{technology}/availableHosts
     */
    getHostsForTechnology: (
      technology:
        | "ACTIVE_MQ"
        | "ACTIVE_MQ_ARTEMIS"
        | "ADO_NET"
        | "AIX"
        | "AKKA"
        | "AMAZON_REDSHIFT"
        | "AMQP"
        | "APACHE_CAMEL"
        | "APACHE_CASSANDRA"
        | "APACHE_COUCH_DB"
        | "APACHE_DERBY"
        | "APACHE_HTTP_CLIENT_ASYNC"
        | "APACHE_HTTP_CLIENT_SYNC"
        | "APACHE_HTTP_SERVER"
        | "APACHE_KAFKA"
        | "APACHE_LOG4J"
        | "APACHE_SOLR"
        | "APACHE_STORM"
        | "APACHE_SYNAPSE"
        | "APACHE_TOMCAT"
        | "APPARMOR"
        | "APPLICATION_INSIGHTS_SDK"
        | "ASP_DOTNET"
        | "ASP_DOTNET_CORE"
        | "ASP_DOTNET_CORE_SIGNALR"
        | "ASP_DOTNET_SIGNALR"
        | "ASYNC_HTTP_CLIENT"
        | "AWS_LAMBDA"
        | "AWS_RDS"
        | "AWS_SERVICE"
        | "AXIS"
        | "AZURE_FUNCTIONS"
        | "AZURE_SERVICE_BUS"
        | "AZURE_SERVICE_FABRIC"
        | "AZURE_STORAGE"
        | "BOSHBPM"
        | "CITRIX"
        | "CITRIX_COMMON"
        | "CITRIX_DESKTOP_DELIVERY_CONTROLLERS"
        | "CITRIX_DIRECTOR"
        | "CITRIX_LICENSE_SERVER"
        | "CITRIX_PROVISIONING_SERVICES"
        | "CITRIX_STOREFRONT"
        | "CITRIX_VIRTUAL_DELIVERY_AGENT"
        | "CITRIX_WORKSPACE_ENVIRONMENT_MANAGEMENT"
        | "CITRIX_XEN"
        | "CLOUDFOUNDRY"
        | "CLOUDFOUNDRY_AUCTIONEER"
        | "CLOUDFOUNDRY_BOSH"
        | "CLOUDFOUNDRY_GOROUTER"
        | "COLDFUSION"
        | "CONFLUENT_KAFKA_CLIENT"
        | "CONTAINERD"
        | "CORE_DNS"
        | "COUCHBASE"
        | "CRIO"
        | "CXF"
        | "DATASTAX"
        | "DB2"
        | "DIEGO_CELL"
        | "DOCKER"
        | "DOTNET"
        | "DOTNET_REMOTING"
        | "ELASTIC_SEARCH"
        | "ENVOY"
        | "ERLANG"
        | "ETCD"
        | "F5_LTM"
        | "FSHARP"
        | "GARDEN"
        | "GLASSFISH"
        | "GO"
        | "GRAAL_TRUFFLE"
        | "GRPC"
        | "GRSECURITY"
        | "HADOOP"
        | "HADOOP_HDFS"
        | "HADOOP_YARN"
        | "HAPROXY"
        | "HEAT"
        | "HESSIAN"
        | "HORNET_Q"
        | "IBM_CICS_REGION"
        | "IBM_CICS_TRANSACTION_GATEWAY"
        | "IBM_IMS_CONNECT_REGION"
        | "IBM_IMS_CONTROL_REGION"
        | "IBM_IMS_MESSAGE_PROCESSING_REGION"
        | "IBM_IMS_SOAP_GATEWAY"
        | "IBM_INTEGRATION_BUS"
        | "IBM_MQ"
        | "IBM_MQ_CLIENT"
        | "IBM_WEBSHPRERE_APPLICATION_SERVER"
        | "IBM_WEBSHPRERE_LIBERTY"
        | "IBM_WEBSPHERE_APPLICATION_SERVER"
        | "IBM_WEBSPHERE_LIBERTY"
        | "IIS"
        | "IIS_APP_POOL"
        | "ISTIO"
        | "JAVA"
        | "JAX_WS"
        | "JBOSS"
        | "JBOSS_EAP"
        | "JDK_HTTP_SERVER"
        | "JERSEY"
        | "JETTY"
        | "JRUBY"
        | "JYTHON"
        | "KUBERNETES"
        | "LIBC"
        | "LIBVIRT"
        | "LINKERD"
        | "MARIADB"
        | "MEMCACHED"
        | "MICROSOFT_SQL_SERVER"
        | "MONGODB"
        | "MSSQL_CLIENT"
        | "MULE_ESB"
        | "MYSQL"
        | "MYSQL_CONNECTOR"
        | "NETFLIX_SERVO"
        | "NETTY"
        | "NGINX"
        | "NODE_JS"
        | "OK_HTTP_CLIENT"
        | "ONEAGENT_SDK"
        | "OPENCENSUS"
        | "OPENSHIFT"
        | "OPENSTACK_COMPUTE"
        | "OPENSTACK_CONTROLLER"
        | "OPENTELEMETRY"
        | "OPENTRACING"
        | "OPEN_LIBERTY"
        | "ORACLE_DATABASE"
        | "ORACLE_WEBLOGIC"
        | "OWIN"
        | "PERL"
        | "PHP"
        | "PHP_FPM"
        | "PLAY"
        | "POSTGRE_SQL"
        | "POSTGRE_SQL_DOTNET_DATA_PROVIDER"
        | "POWER_DNS"
        | "PROGRESS"
        | "PYTHON"
        | "QOS_LOGBACK"
        | "RABBIT_MQ"
        | "REACTOR_CORE"
        | "REDIS"
        | "RESTEASY"
        | "RESTLET"
        | "RIAK"
        | "RUBY"
        | "SAG_WEBMETHODS_IS"
        | "SAP"
        | "SAP_HANADB"
        | "SAP_HYBRIS"
        | "SAP_MAXDB"
        | "SAP_SYBASE"
        | "SCALA"
        | "SELINUX"
        | "SHAREPOINT"
        | "SPARK"
        | "SPRING"
        | "SQLITE"
        | "THRIFT"
        | "TIBCO"
        | "TIBCO_BUSINESS_WORKS"
        | "TIBCO_EMS"
        | "UNDERTOW_IO"
        | "VARNISH_CACHE"
        | "VIM2"
        | "VIRTUAL_MACHINE_KVM"
        | "VIRTUAL_MACHINE_QEMU"
        | "WILDFLY"
        | "WINDOWS_CONTAINERS"
        | "WINK"
        | "ZERO_MQ"
        | "ZOS_CONNECT",
      query?: {
        tag?: string[];
        managementZone?: number;
        hostGroupId?: string;
        hostGroupName?: string;
        pageSize?: number;
        nextPageKey?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<HostList, any>({
        path: `/extensions/${technology}/availableHosts`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name ValidateExtension
     * @summary Validates a ZIP extension file for `POST/extensions` request | maturity=EARLY_ADOPTER
     * @request POST:/extensions/validator
     */
    validateExtension: (data: { file: File }, query?: { jsonOnly?: boolean }, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/extensions/validator`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name GetExtensionGlobalConfiguration
     * @summary Get the global configuration of the specified OneAgent or JMX extension | maturity=EARLY_ADOPTER
     * @request GET:/extensions/{id}/global
     */
    getExtensionGlobalConfiguration: (id: string, params: RequestParams = {}) =>
      this.request<GlobalExtensionConfiguration, any>({
        path: `/extensions/${id}/global`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name UpdateGlobalExtensionConfiguration
     * @summary Updates the configuration of the specified OneAgent or JMX extension | maturity=EARLY_ADOPTER
     * @request PUT:/extensions/{id}/global
     */
    updateGlobalExtensionConfiguration: (id: string, data: GlobalExtensionConfiguration, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/extensions/${id}/global`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name GetExtensionBinary
     * @summary Downloads the ZIP file of the specified extension | maturity=EARLY_ADOPTER
     * @request GET:/extensions/{id}/binary
     */
    getExtensionBinary: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/extensions/${id}/binary`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name GetExtensionStates
     * @summary Lists the states of the specified extension | maturity=EARLY_ADOPTER
     * @request GET:/extensions/{id}/states
     */
    getExtensionStates: (
      id: string,
      query?: {
        pageSize?: number;
        nextPageKey?: string;
        state?:
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
      },
      params: RequestParams = {},
    ) =>
      this.request<ExtensionStateList, any>({
        path: `/extensions/${id}/states`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name GetExtensionConfigurations
     * @summary Returns list of all local configuration instances for given extension | maturity=EARLY_ADOPTER
     * @request GET:/extensions/{id}/instances
     */
    getExtensionConfigurations: (
      id: string,
      query?: { pageSize?: number; nextPageKey?: string },
      params: RequestParams = {},
    ) =>
      this.request<ExtensionConfigurationList, any>({
        path: `/extensions/${id}/instances`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name CreateLocalExtensionConfiguration
     * @summary Creates instance of local configuration for given extension | maturity=EARLY_ADOPTER
     * @request POST:/extensions/{id}/instances
     */
    createLocalExtensionConfiguration: (id: string, data: ExtensionConfigurationDto, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/extensions/${id}/instances`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name ValidateLocalExtensionConfiguration
     * @summary Validates the payload for the `POST /extensions/{id}/instances` request | maturity=EARLY_ADOPTER
     * @request POST:/extensions/{id}/instances/validator
     */
    validateLocalExtensionConfiguration: (id: string, data: ExtensionConfigurationDto, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/extensions/${id}/instances/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name GetExtensions
     * @summary Lists all uploaded extensions | maturity=EARLY_ADOPTER
     * @request GET:/extensions
     */
    getExtensions: (query?: { pageSize?: number; nextPageKey?: string }, params: RequestParams = {}) =>
      this.request<ExtensionListDto, any>({
        path: `/extensions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Extensions
     * @name UploadExtension
     * @summary Uploads a ZIP extension file | maturity=EARLY_ADOPTER
     * @request POST:/extensions
     */
    uploadExtension: (data: { file: File }, query?: { overrideAlerts?: boolean }, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/extensions`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
  frequentIssueDetection = {
    /**
     * No description
     *
     * @tags Frequent issue detection
     * @name GetFrequentIssueDetectionConfig
     * @summary Gets the configuration of frequent issue detection
     * @request GET:/frequentIssueDetection
     */
    getFrequentIssueDetectionConfig: (params: RequestParams = {}) =>
      this.request<FrequentIssueDetectionConfig, any>({
        path: `/frequentIssueDetection`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frequent issue detection
     * @name UpdateFrequentIssueDetectionConfig
     * @summary Updates the configuration of frequent issue detection
     * @request PUT:/frequentIssueDetection
     */
    updateFrequentIssueDetectionConfig: (data: FrequentIssueDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/frequentIssueDetection`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frequent issue detection
     * @name ValidateFrequentIssueDetectionConfig
     * @summary Validates the payload for the `PUT /frequentIssueDetection` request
     * @request POST:/frequentIssueDetection/validator
     */
    validateFrequentIssueDetectionConfig: (data: FrequentIssueDetectionConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/frequentIssueDetection/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  geographicRegions = {
    /**
     * No description
     *
     * @tags RUM - Geographic regions - IP address mapping
     * @name GetGeolocationRegionsIpAddress
     * @summary Gets the configuration of mapping between IP address and geographic regions
     * @request GET:/geographicRegions/ipAddressMappings
     */
    getGeolocationRegionsIpAddress: (params: RequestParams = {}) =>
      this.request<IpAddressMappings, any>({
        path: `/geographicRegions/ipAddressMappings`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The request overwrites the existing configuration. Any rules not presented in the payload will be lost.
     *
     * @tags RUM - Geographic regions - IP address mapping
     * @name PutGeolocationRegionsIpAddress
     * @summary Updates the configuration of mapping between IP address and geographic regions
     * @request PUT:/geographicRegions/ipAddressMappings
     */
    putGeolocationRegionsIpAddress: (data: IpAddressMappings, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/geographicRegions/ipAddressMappings`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Geographic regions - IP address mapping
     * @name ValidateGeolocationRegionsIpAddress
     * @summary Validates the payload for the `PUT /geographicRegions/ipAddressMappings` request
     * @request POST:/geographicRegions/ipAddressMappings/validator
     */
    validateGeolocationRegionsIpAddress: (data: IpAddressMappings, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/geographicRegions/ipAddressMappings/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Geographic regions - custom client IP headers
     * @name GetGeolocationRegionsIpHeaders
     * @summary Gets the configuration of custom client IP headers
     * @request GET:/geographicRegions/ipDetectionHeaders
     */
    getGeolocationRegionsIpHeaders: (params: RequestParams = {}) =>
      this.request<IpDetectionHeaders, any>({
        path: `/geographicRegions/ipDetectionHeaders`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The request overwrites the existing configuration. Any headers not presented in the payload will be lost.
     *
     * @tags RUM - Geographic regions - custom client IP headers
     * @name PutGeolocationRegionsIpHeaders
     * @summary Updates the configuration of custom client IP headers
     * @request PUT:/geographicRegions/ipDetectionHeaders
     */
    putGeolocationRegionsIpHeaders: (data: IpDetectionHeaders, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/geographicRegions/ipDetectionHeaders`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags RUM - Geographic regions - custom client IP headers
     * @name ValidateGeolocationRegionsIpHeaders
     * @summary Validates the payload for the `PUT /geographicRegions/ipDetectionHeaders` request
     * @request POST:/geographicRegions/ipDetectionHeaders/validator
     */
    validateGeolocationRegionsIpHeaders: (data: IpDetectionHeaders, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/geographicRegions/ipDetectionHeaders/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  hostgroups = {
    /**
     * No description
     *
     * @tags OneAgent in a host group
     * @name GetAutoUpdateConfig2
     * @summary Gets the configuration of OneAgent auto-update in the specified host group
     * @request GET:/hostgroups/{id}/autoupdate
     */
    getAutoUpdateConfig2: (id: string, params: RequestParams = {}) =>
      this.request<HostGroupAutoUpdateConfig, any>({
        path: `/hostgroups/${id}/autoupdate`,
        method: "GET",
        ...params,
      }),

    /**
     * @description OneAgents are updated several minutes after the change of configuration. The process can take more time depending on number of OneAgents in the update queue.
     *
     * @tags OneAgent in a host group
     * @name UpdateAutoUpdateConfig1
     * @summary Updates the configuration of OneAgent auto-update in the specified host group
     * @request PUT:/hostgroups/{id}/autoupdate
     */
    updateAutoUpdateConfig1: (id: string, data: HostGroupAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/hostgroups/${id}/autoupdate`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent in a host group
     * @name ValidateAutoUpdateConfig2
     * @summary Validates the payload for the `PUT /hostgroups/{id}/autoupdate` request
     * @request POST:/hostgroups/{id}/autoupdate/validator
     */
    validateAutoUpdateConfig2: (id: string, data: HostGroupAutoUpdateConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/hostgroups/${id}/autoupdate/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneAgent in a host group
     * @name GetHostGroupConfig
     * @summary Gets the OneAgent configuration in the specified host group
     * @request GET:/hostgroups/{id}
     */
    getHostGroupConfig: (id: string, params: RequestParams = {}) =>
      this.request<OneAgentHostGroupConfig, any>({
        path: `/hostgroups/${id}`,
        method: "GET",
        ...params,
      }),
  };
  managementZones = {
    /**
     * No description
     *
     * @tags Management zones
     * @name ListManagementZones
     * @summary Lists all configured management zones
     * @request GET:/managementZones
     */
    listManagementZones: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/managementZones`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Management zones
     * @name CreateManagementZone
     * @summary Creates a new management zone
     * @request POST:/managementZones
     */
    createManagementZone: (data: ManagementZone, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/managementZones`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Management zones
     * @name GetManagementZone
     * @summary Lists the parameters of the specified management zone
     * @request GET:/managementZones/{id}
     */
    getManagementZone: (id: string, query?: { includeProcessGroupReferences?: boolean }, params: RequestParams = {}) =>
      this.request<ManagementZone, any>({
        path: `/managementZones/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description If a management zone with the specified ID doesn't exist, a new one is created.
     *
     * @tags Management zones
     * @name UpdateManagementZone
     * @summary Updates the specified management zone
     * @request PUT:/managementZones/{id}
     */
    updateManagementZone: (id: string, data: ManagementZone, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/managementZones/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Management zones
     * @name DeleteManagementZone
     * @summary Deletes the specified management zone
     * @request DELETE:/managementZones/{id}
     */
    deleteManagementZone: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/managementZones/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Management zones
     * @name ValidateCreateManagementZone
     * @summary Validates a new management zone for the `POST /managementZones` request
     * @request POST:/managementZones/validator
     */
    validateCreateManagementZone: (data: ManagementZone, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/managementZones/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Management zones
     * @name ValidateUpdateManagementZone
     * @summary Validate updates of existing management zone for the `PUT /managementZones/{id}` request
     * @request POST:/managementZones/{id}/validator
     */
    validateUpdateManagementZone: (id: string, data: ManagementZone, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/managementZones/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  calculatedMetrics = {
    /**
     * No description
     *
     * @tags Calculated metrics - Log monitoring
     * @name GetLogMetricConfig
     * @summary Gets the definition of the specified custom log metric | maturity=EARLY_ADOPTER
     * @request GET:/calculatedMetrics/log/{metricKey}
     */
    getLogMetricConfig: (metricKey: string, params: RequestParams = {}) =>
      this.request<LogMetricConfig, ErrorEnvelope>({
        path: `/calculatedMetrics/log/${metricKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the metric definition with the specified key already exists, it is updated.
     *
     * @tags Calculated metrics - Log monitoring
     * @name UpdateOrCreateLogMetricConfig
     * @summary Creates a new custom log metric | maturity=EARLY_ADOPTER
     * @request PUT:/calculatedMetrics/log/{metricKey}
     */
    updateOrCreateLogMetricConfig: (metricKey: string, data: LogMetricConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/calculatedMetrics/log/${metricKey}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Log monitoring
     * @name DeleteLogMetricConfig
     * @summary Deletes the specified custom log metric definition | maturity=EARLY_ADOPTER
     * @request DELETE:/calculatedMetrics/log/{metricKey}
     */
    deleteLogMetricConfig: (metricKey: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/log/${metricKey}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Log monitoring
     * @name ListLogMetricConfigs
     * @summary Lists all custom log metrics configured in your environment | maturity=EARLY_ADOPTER
     * @request GET:/calculatedMetrics/log
     */
    listLogMetricConfigs: (params: RequestParams = {}) =>
      this.request<StubList, ErrorEnvelope>({
        path: `/calculatedMetrics/log`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Log monitoring
     * @name ValidateMetric
     * @summary Validates the payload for the `PUT /calculatedMetrics/log/{metricKey}` request. | maturity=EARLY_ADOPTER
     * @request POST:/calculatedMetrics/log/{metricKey}/validator
     */
    validateMetric: (metricKey: string, data: LogMetricConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/log/${metricKey}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Mobile & custom applications
     * @name GetMobileMetric
     * @summary Gets the descriptor of the specified calculated metric for mobile or custom app
     * @request GET:/calculatedMetrics/mobile/{metricKey}
     */
    getMobileMetric: (metricKey: string, params: RequestParams = {}) =>
      this.request<CalculatedMobileMetric, any>({
        path: `/calculatedMetrics/mobile/${metricKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Mobile & custom applications
     * @name UpdateMobileMetric
     * @summary Updates the specified calculated metric for a mobile or custom app
     * @request PUT:/calculatedMetrics/mobile/{metricKey}
     */
    updateMobileMetric: (metricKey: string, data: CalculatedMobileMetricUpdate, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/mobile/${metricKey}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Mobile & custom applications
     * @name DeleteMobileMetric
     * @summary Deletes the specified calculated metric for mobile or custom app
     * @request DELETE:/calculatedMetrics/mobile/{metricKey}
     */
    deleteMobileMetric: (metricKey: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/calculatedMetrics/mobile/${metricKey}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Mobile & custom applications
     * @name ListMobileMetrics
     * @summary Lists all calculated metrics for mobile and custom apps configured in your environment
     * @request GET:/calculatedMetrics/mobile
     */
    listMobileMetrics: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/calculatedMetrics/mobile`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Mobile & custom applications
     * @name CreateMobileMetric
     * @summary Creates a new calculated metric for a mobile or custom app
     * @request POST:/calculatedMetrics/mobile
     */
    createMobileMetric: (data: CalculatedMobileMetric, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/calculatedMetrics/mobile`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Mobile & custom applications
     * @name ValidateCreateMobileMetric
     * @summary Validates the payload for the `POST /calculatedMetrics/mobile` request
     * @request POST:/calculatedMetrics/mobile/validator
     */
    validateCreateMobileMetric: (data: CalculatedMobileMetric, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/mobile/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Mobile & custom applications
     * @name ValidateUpdateMobileMetric
     * @summary Validates the payload for the `PUT /calculatedMetrics/mobile/{metricKey}` request
     * @request POST:/calculatedMetrics/mobile/{metricKey}/validator
     */
    validateUpdateMobileMetric: (metricKey: string, data: CalculatedMobileMetricUpdate, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/mobile/${metricKey}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Web applications
     * @name GetRumMetric
     * @summary Gets the descriptor of the specified calculated web application metric
     * @request GET:/calculatedMetrics/rum/{metricKey}
     */
    getRumMetric: (metricKey: string, params: RequestParams = {}) =>
      this.request<WebApplicationMetric, any>({
        path: `/calculatedMetrics/rum/${metricKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Web applications
     * @name UpdateRumMetric
     * @summary Updates the specified calculated web application metric
     * @request PUT:/calculatedMetrics/rum/{metricKey}
     */
    updateRumMetric: (metricKey: string, data: WebApplicationMetricUpdate, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/rum/${metricKey}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Web applications
     * @name DeleteRumMetric
     * @summary Deletes the specified calculated web application metric
     * @request DELETE:/calculatedMetrics/rum/{metricKey}
     */
    deleteRumMetric: (metricKey: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/calculatedMetrics/rum/${metricKey}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Web applications
     * @name ListRumMetrics
     * @summary Lists all calculated web application metrics
     * @request GET:/calculatedMetrics/rum
     */
    listRumMetrics: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/calculatedMetrics/rum`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Web applications
     * @name CreateRumMetric
     * @summary Creates a new calculated web application metric
     * @request POST:/calculatedMetrics/rum
     */
    createRumMetric: (data: WebApplicationMetric, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/calculatedMetrics/rum`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The body must not provide an ID.
     *
     * @tags Calculated metrics - Web applications
     * @name ValidateCreateRumMetric
     * @summary Validates the payload for the `POST /calculatedMetrics/rum` request
     * @request POST:/calculatedMetrics/rum/validator
     */
    validateCreateRumMetric: (data: WebApplicationMetric, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/rum/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Web applications
     * @name ValidateUpdateRumMetric
     * @summary Validates the payload for the `PUT /calculatedMetrics/rum/{metricKey}` request
     * @request POST:/calculatedMetrics/rum/{metricKey}/validator
     */
    validateUpdateRumMetric: (metricKey: string, data: WebApplicationMetricUpdate, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/rum/${metricKey}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Services
     * @name ListServiceMetrics
     * @summary Lists all calculated service metrics configured in your environment
     * @request GET:/calculatedMetrics/service
     */
    listServiceMetrics: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/calculatedMetrics/service`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Services
     * @name CreateServiceMetric
     * @summary Creates a new calculated service metric
     * @request POST:/calculatedMetrics/service
     */
    createServiceMetric: (data: CalculatedServiceMetric, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/calculatedMetrics/service`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Services
     * @name GetServiceMetric
     * @summary Gets the descriptor of the specified calculated service metric
     * @request GET:/calculatedMetrics/service/{metricKey}
     */
    getServiceMetric: (metricKey: string, params: RequestParams = {}) =>
      this.request<CalculatedServiceMetric, any>({
        path: `/calculatedMetrics/service/${metricKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If the calculated service metric with the specified key doesn't exist, a new metric is created.
     *
     * @tags Calculated metrics - Services
     * @name UpdateServiceMetric
     * @summary Updates the specified calculated service metric
     * @request PUT:/calculatedMetrics/service/{metricKey}
     */
    updateServiceMetric: (metricKey: string, data: CalculatedServiceMetric, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/calculatedMetrics/service/${metricKey}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Services
     * @name DeleteServiceMetric
     * @summary Deletes the specified calculated service metric
     * @request DELETE:/calculatedMetrics/service/{metricKey}
     */
    deleteServiceMetric: (metricKey: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/calculatedMetrics/service/${metricKey}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Services
     * @name ValidateUpdateServiceMetric
     * @summary Validates the payload for the `PUT /calculatedMetric/service/{id}` request
     * @request POST:/calculatedMetrics/service/{metricKey}/validator
     */
    validateUpdateServiceMetric: (metricKey: string, data: CalculatedServiceMetric, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/service/${metricKey}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Services
     * @name ValidateCreateServiceMetric
     * @summary Validates the payload for the `POST /calculatedMetric/service` request
     * @request POST:/calculatedMetrics/service/validator
     */
    validateCreateServiceMetric: (data: CalculatedServiceMetric, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/service/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Synthetic
     * @name ListSyntheticMetrics
     * @summary Lists all calculated synthetic metrics available in your environment | maturity=EARLY_ADOPTER
     * @request GET:/calculatedMetrics/synthetic
     */
    listSyntheticMetrics: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/calculatedMetrics/synthetic`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Synthetic
     * @name CreateSyntheticMetric
     * @summary Creates a new calculated synthetic metric | maturity=EARLY_ADOPTER
     * @request POST:/calculatedMetrics/synthetic
     */
    createSyntheticMetric: (data: CalculatedSyntheticMetric, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/calculatedMetrics/synthetic`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Synthetic
     * @name GetSyntheticMetric
     * @summary Gets the descriptor of the specified calculated synthetic metric | maturity=EARLY_ADOPTER
     * @request GET:/calculatedMetrics/synthetic/{metricKey}
     */
    getSyntheticMetric: (metricKey: string, params: RequestParams = {}) =>
      this.request<CalculatedSyntheticMetric, any>({
        path: `/calculatedMetrics/synthetic/${metricKey}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Synthetic
     * @name UpdateSyntheticMetric
     * @summary Updates the specified calculated synthetic metric | maturity=EARLY_ADOPTER
     * @request PUT:/calculatedMetrics/synthetic/{metricKey}
     */
    updateSyntheticMetric: (metricKey: string, data: SyntheticMetricUpdate, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/synthetic/${metricKey}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Synthetic
     * @name DeleteSyntheticMetric
     * @summary Deletes the specified calculated synthetic metric | maturity=EARLY_ADOPTER
     * @request DELETE:/calculatedMetrics/synthetic/{metricKey}
     */
    deleteSyntheticMetric: (metricKey: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/calculatedMetrics/synthetic/${metricKey}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Synthetic
     * @name ValidateCreateSyntheticMetric
     * @summary Validates the payload for the `POST /calculatedMetrics/synthetic` request | maturity=EARLY_ADOPTER
     * @request POST:/calculatedMetrics/synthetic/validator
     */
    validateCreateSyntheticMetric: (data: CalculatedSyntheticMetric, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/synthetic/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Calculated metrics - Synthetic
     * @name ValidateUpdateSyntheticMetric
     * @summary Validates the payload for the `PUT /calculatedMetrics/synthetic/{metricKey}` request | maturity=EARLY_ADOPTER
     * @request POST:/calculatedMetrics/synthetic/{metricKey}/validator
     */
    validateUpdateSyntheticMetric: (metricKey: string, data: SyntheticMetricUpdate, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/calculatedMetrics/synthetic/${metricKey}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @tags Notifications
     * @name ListNotificationConfigs
     * @summary Lists all notification configurations available in your environment
     * @request GET:/notifications
     */
    listNotificationConfigs: (params: RequestParams = {}) =>
      this.request<NotificationConfigStubListDto, any>({
        path: `/notifications`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name CreateNotificationConfig
     * @summary Creates a new notification configuration
     * @request POST:/notifications
     */
    createNotificationConfig: (data: NotificationConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/notifications`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name GetNotificationConfig
     * @summary Gets the properties of the specified notification configuration
     * @request GET:/notifications/{id}
     */
    getNotificationConfig: (id: string, params: RequestParams = {}) =>
      this.request<NotificationConfig, any>({
        path: `/notifications/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If a notification configuration with the specified ID doesn't exist, a new configuration is created.
     *
     * @tags Notifications
     * @name UpdateNotificationConfig
     * @summary Updates an existing notification configuration or creates a new one
     * @request PUT:/notifications/{id}
     */
    updateNotificationConfig: (id: string, data: NotificationConfig, params: RequestParams = {}) =>
      this.request<NotificationConfigStub, ErrorEnvelope>({
        path: `/notifications/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name DeleteNotificationConfig
     * @summary Deletes the specified notification configuration
     * @request DELETE:/notifications/{id}
     */
    deleteNotificationConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/notifications/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name ValidateUpdateNotificationConfig
     * @summary Validates the payload the `PUT /notifications/{id}` request
     * @request POST:/notifications/{id}/validator
     */
    validateUpdateNotificationConfig: (id: string, data: NotificationConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/notifications/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notifications
     * @name ValidateCreateNotificationConfig
     * @summary Validates the payload for the `POST /notifications` request
     * @request POST:/notifications/validator
     */
    validateCreateNotificationConfig: (data: NotificationConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/notifications/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  plugins = {
    /**
     * No description
     *
     * @tags Plugins
     * @name GetPlugins
     * @summary Lists all uploaded plugins
     * @request GET:/plugins
     */
    getPlugins: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/plugins`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name UploadPlugin
     * @summary Uploads a ZIP plugin file
     * @request POST:/plugins
     */
    uploadPlugin: (data: { file: File }, query?: { overrideAlerts?: boolean }, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/plugins`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name ValidatePlugin
     * @summary Validates a ZIP plugin file for `POST/plugins` request
     * @request POST:/plugins/validator
     */
    validatePlugin: (data: { file: File }, query?: { jsonOnly?: boolean }, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/plugins/validator`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name GetPluginBinary
     * @summary Downloads the ZIP file of the specified plugin
     * @request GET:/plugins/{id}/binary
     */
    getPluginBinary: (id: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/plugins/${id}/binary`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Deletion of the plugin file uninstalls the plugin, making it unavailable for use.
     *
     * @tags Plugins
     * @name DeletePlugin
     * @summary Deletes the ZIP file of the specified plugin
     * @request DELETE:/plugins/{id}/binary
     */
    deletePlugin: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/plugins/${id}/binary`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name GetPluginStates
     * @summary Lists the states of the specified plugin
     * @request GET:/plugins/{id}/states
     */
    getPluginStates: (id: string, params: RequestParams = {}) =>
      this.request<PluginStateList, any>({
        path: `/plugins/${id}/states`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name GetRemotePluginEndpoints
     * @summary Lists endpoints of the specified ActiveGate plugin
     * @request GET:/plugins/{id}/endpoints
     */
    getRemotePluginEndpoints: (id: string, params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/plugins/${id}/endpoints`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID of the endpoint, as IDs are automatically assigned.
     *
     * @tags Plugins
     * @name CreateRemotePluginEndpoint
     * @summary Creates a new endpoint for the specified ActiveGate plugin
     * @request POST:/plugins/{id}/endpoints
     */
    createRemotePluginEndpoint: (id: string, data: RemotePluginEndpoint, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/plugins/${id}/endpoints`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name ValidateRemotePluginEndpoint
     * @summary Validates the payload for the `POST /plugins/{id}/endpoints` request
     * @request POST:/plugins/{id}/endpoints/validator
     */
    validateRemotePluginEndpoint: (id: string, data: RemotePluginEndpoint, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/plugins/${id}/endpoints/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name GetRemotePluginEndpoint
     * @summary Gets parameters of the specified endpoint of the ActiveGate plugin
     * @request GET:/plugins/{id}/endpoints/{endpointId}
     */
    getRemotePluginEndpoint: (id: string, endpointId: string, params: RequestParams = {}) =>
      this.request<RemotePluginEndpoint, any>({
        path: `/plugins/${id}/endpoints/${endpointId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name UpdateRemotePluginEndpoint
     * @summary Updates an existing endpoint of the ActiveGate plugin
     * @request PUT:/plugins/{id}/endpoints/{endpointId}
     */
    updateRemotePluginEndpoint: (
      id: string,
      endpointId: string,
      data: RemotePluginEndpoint,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/plugins/${id}/endpoints/${endpointId}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name DeleteRemotePluginEndpoint
     * @summary Deletes an existing endpoint of the ActiveGate plugin
     * @request DELETE:/plugins/{id}/endpoints/{endpointId}
     */
    deleteRemotePluginEndpoint: (id: string, endpointId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/plugins/${id}/endpoints/${endpointId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name GetRemotePluginModules
     * @summary List available ActiveGate plugin modules
     * @request GET:/plugins/activeGatePluginModules
     */
    getRemotePluginModules: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/plugins/activeGatePluginModules`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plugins
     * @name GetPlugin
     * @summary Lists the properties of the specified plugin
     * @request GET:/plugins/{id}
     */
    getPlugin: (id: string, params: RequestParams = {}) =>
      this.request<Plugin, any>({
        path: `/plugins/${id}`,
        method: "GET",
        ...params,
      }),
  };
  remoteEnvironments = {
    /**
     * No description
     *
     * @tags Remote environments
     * @name ListRemoteEnvironmentConfigs
     * @summary Lists all remote environment configurations | maturity=EARLY_ADOPTER
     * @request GET:/remoteEnvironments
     */
    listRemoteEnvironmentConfigs: (params: RequestParams = {}) =>
      this.request<RemoteEnvironmentConfigListDto, any>({
        path: `/remoteEnvironments`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server. Be sure to prepare a token with the **Fetch data from a remote environment** (`RestRequestForwarding`) scope. You can create such a token via [Tokens API](https://dt-url.net/ff23kmx).
     *
     * @tags Remote environments
     * @name CreateRemoteEnvironmentConfig
     * @summary Creates a new remote environment configuration | maturity=EARLY_ADOPTER
     * @request POST:/remoteEnvironments
     */
    createRemoteEnvironmentConfig: (data: RemoteEnvironmentConfigDto, params: RequestParams = {}) =>
      this.request<RemoteEnvironmentConfigStub, ErrorEnvelope>({
        path: `/remoteEnvironments`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remote environments
     * @name GetRemoteEnvironmentConfig
     * @summary Gets the properties of the specified remote environment configuration | maturity=EARLY_ADOPTER
     * @request GET:/remoteEnvironments/{id}
     */
    getRemoteEnvironmentConfig: (id: string, params: RequestParams = {}) =>
      this.request<RemoteEnvironmentConfigDto, any>({
        path: `/remoteEnvironments/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If a remote environment configuration with the specified ID doesn't exist, a new configuration is created.
     *
     * @tags Remote environments
     * @name UpdateRemoteEnvironmentConfig
     * @summary Updates an existing remote environment configuration or creates a new one | maturity=EARLY_ADOPTER
     * @request PUT:/remoteEnvironments/{id}
     */
    updateRemoteEnvironmentConfig: (id: string, data: RemoteEnvironmentConfigDto, params: RequestParams = {}) =>
      this.request<RemoteEnvironmentConfigStub, ErrorEnvelope>({
        path: `/remoteEnvironments/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remote environments
     * @name DeleteRemoteEnvironmentConfig
     * @summary Deletes the specified remote environment configuration | maturity=EARLY_ADOPTER
     * @request DELETE:/remoteEnvironments/{id}
     */
    deleteRemoteEnvironmentConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/remoteEnvironments/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remote environments
     * @name ValidateUpdateRemoteEnvironmentConfig
     * @summary Validates the payload for the `PUT /remoteEnvironments/{id}` request | maturity=EARLY_ADOPTER
     * @request POST:/remoteEnvironments/{id}/validator
     */
    validateUpdateRemoteEnvironmentConfig: (id: string, data: RemoteEnvironmentConfigDto, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/remoteEnvironments/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remote environments
     * @name ValidateCreateRemoteEnvironmentConfig
     * @summary Validates the payload for the `POST /remoteEnvironments` request | maturity=EARLY_ADOPTER
     * @request POST:/remoteEnvironments/validator
     */
    validateCreateRemoteEnvironmentConfig: (data: RemoteEnvironmentConfigDto, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/remoteEnvironments/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  reports = {
    /**
     * No description
     *
     * @tags Reports
     * @name GetReport
     * @summary Gets the properties of the specified report | maturity=EARLY_ADOPTER
     * @request GET:/reports/{id}
     */
    getReport: (id: string, params: RequestParams = {}) =>
      this.request<DashboardReport, any>({
        path: `/reports/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If a report with the specified ID doesn't exist, a new report is created.
     *
     * @tags Reports
     * @name CreateOrUpdateReport
     * @summary Updates an existing report | maturity=EARLY_ADOPTER
     * @request PUT:/reports/{id}
     */
    createOrUpdateReport: (id: string, data: DashboardReport, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/reports/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name DeleteReport
     * @summary Deletes the specified report | maturity=EARLY_ADOPTER
     * @request DELETE:/reports/{id}
     */
    deleteReport: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/reports/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name SubscribeReport
     * @summary Subscribes to the specified report | maturity=EARLY_ADOPTER
     * @request POST:/reports/{id}/subscribe
     */
    subscribeReport: (id: string, data: ReportSubscriptions, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/reports/${id}/subscribe`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name UnsubscribeReport
     * @summary Unsubscribes from the specified report | maturity=EARLY_ADOPTER
     * @request POST:/reports/{id}/unsubscribe
     */
    unsubscribeReport: (id: string, data: ReportSubscriptions, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/reports/${id}/unsubscribe`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description The body must not provide an ID.
     *
     * @tags Reports
     * @name ValidateCreateReport
     * @summary Validates the payload for the `POST /reports` request | maturity=EARLY_ADOPTER
     * @request POST:/reports/validator
     */
    validateCreateReport: (data: DashboardReport, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/reports/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name ValidateCreateOrUpdateReport
     * @summary Validates the payload for the `PUT /reports/{id}` request | maturity=EARLY_ADOPTER
     * @request POST:/reports/{id}/validator
     */
    validateCreateOrUpdateReport: (id: string, data: DashboardReport, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/reports/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name ListReports
     * @summary Lists all reports available in your environment | maturity=EARLY_ADOPTER
     * @request GET:/reports
     */
    listReports: (query?: { type?: "DASHBOARD"; sourceId?: string }, params: RequestParams = {}) =>
      this.request<ReportStubList, any>({
        path: `/reports`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Reports
     * @name CreateReport
     * @summary Creates a report | maturity=EARLY_ADOPTER
     * @request POST:/reports
     */
    createReport: (data: DashboardReport, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/reports`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  symfiles = {
    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name GetSingle
     * @summary Gets the metadata of the symbolication file belonging to the specified app version. There always can exist only one file per os and version
     * @request GET:/symfiles/{applicationId}/{packageName}/{os}/{versionCode}/{versionName}
     */
    getSingle: (
      applicationId: string,
      packageName: string,
      os: "ANDROID" | "IOS" | "TVOS",
      versionCode: string,
      versionName: string,
      params: RequestParams = {},
    ) =>
      this.request<SymbolFile, any>({
        path: `/symfiles/${applicationId}/${packageName}/${os}/${versionCode}/${versionName}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name CreateOrUpdate
     * @summary Upload a symbolication file. Either a ProGuard file for Android or a zip file containing all the iOS dSYM files.
     * @request PUT:/symfiles/{applicationId}/{packageName}/{os}/{versionCode}/{versionName}
     */
    createOrUpdate: (
      applicationId: string,
      packageName: string,
      os: "ANDROID" | "IOS" | "TVOS",
      versionCode: string,
      versionName: string,
      data: File,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/symfiles/${applicationId}/${packageName}/${os}/${versionCode}/${versionName}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name DeleteSingleFile
     * @summary Delete the symbolication file belonging to the given application, os and version
     * @request DELETE:/symfiles/{applicationId}/{packageName}/{os}/{versionCode}/{versionName}
     */
    deleteSingleFile: (
      applicationId: string,
      packageName: string,
      os: "ANDROID" | "IOS" | "TVOS",
      versionCode: string,
      versionName: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/symfiles/${applicationId}/${packageName}/${os}/${versionCode}/${versionName}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name GetAllPerApplication
     * @summary Lists the metadata of all symbolication files (ProGuard files for Android or dSYM files for iOS Apps) for one single mobile application from the Symbol File Store of this tenant.
     * @request GET:/symfiles/{applicationId}
     */
    getAllPerApplication: (applicationId: string, params: RequestParams = {}) =>
      this.request<SymbolFileList, any>({
        path: `/symfiles/${applicationId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name DeleteApp
     * @summary Deletes all symbolication file belonging to the Dynatrace App specified
     * @request DELETE:/symfiles/{applicationId}
     */
    deleteApp: (applicationId: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/symfiles/${applicationId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name CreateOrUpdatePinning
     * @summary Pin or unpin all symbolication files of a app version. A pinned file will not be deleted automtically, when running out of space.
     * @request PUT:/symfiles/{applicationId}/{packageName}/{os}/{versionCode}/{versionName}/pinning
     */
    createOrUpdatePinning: (
      applicationId: string,
      packageName: string,
      os: "ANDROID" | "IOS" | "TVOS",
      versionCode: string,
      versionName: string,
      data: SymbolFilePinning,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/symfiles/${applicationId}/${packageName}/${os}/${versionCode}/${versionName}/pinning`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name GetSupportedVersion
     * @summary Returns the supported file format version for iOS symbol files.
     * @request GET:/symfiles/ios/supportedversion
     */
    getSupportedVersion: (params: RequestParams = {}) =>
      this.request<SupportedVersion, any>({
        path: `/symfiles/ios/supportedversion`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name ValidatePinning
     * @summary Validate updates of existing request attribute for the `PUT /{applicationId}/{packageName}/{os}/{versionName}/pinning` request.
     * @request PUT:/symfiles/{applicationId}/{packageName}/{os}/{versionCode}/{versionName}/pinning/validator
     */
    validatePinning: (
      applicationId: string,
      packageName: string,
      os: "ANDROID" | "IOS" | "TVOS",
      versionCode: string,
      versionName: string,
      data: SymbolFilePinning,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/symfiles/${applicationId}/${packageName}/${os}/${versionCode}/${versionName}/pinning/validator`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name GetDssClientUrl
     * @summary Gets a download link for the latest version of the DTXDssClient.
     * @request GET:/symfiles/dtxdss-download
     */
    getDssClientUrl: (params: RequestParams = {}) =>
      this.request<SymbolFileClientLinkDto, any>({
        path: `/symfiles/dtxdss-download`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name GetInfo
     * @summary Retrieves information about used/empty diskspace, number of stored files,....
     * @request GET:/symfiles/info
     */
    getInfo: (params: RequestParams = {}) =>
      this.request<SymbolFileStorageInfo, any>({
        path: `/symfiles/info`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mobile Deobfuscation and Symbolication
     * @name GetAll
     * @summary Lists the metadata of all symbolication files (ProGuard files for Android or dSYM files for iOS Apps) from the Symbol File Store.
     * @request GET:/symfiles
     */
    getAll: (params: RequestParams = {}) =>
      this.request<SymbolFileList, any>({
        path: `/symfiles`,
        method: "GET",
        ...params,
      }),
  };
  technologies = {
    /**
     * No description
     *
     * @tags OneAgent - Environment-wide configuration
     * @name GetTechGlobalConfigs
     * @summary Gets the global monitoring configuration of technologies.
     * @request GET:/technologies
     */
    getTechGlobalConfigs: (params: RequestParams = {}) =>
      this.request<TechMonitoringList, any>({
        path: `/technologies`,
        method: "GET",
        ...params,
      }),
  };
  aws = {
    /**
     * @description You'll need it for the role-based AWS authentication.
     *
     * @tags AWS credentials configuration
     * @name ReadIamExternalIdToken
     * @summary Gets the external ID token for setting an IAM role
     * @request GET:/aws/iamExternalId
     */
    readIamExternalIdToken: (params: RequestParams = {}) =>
      this.request<AwsIamToken, any>({
        path: `/aws/iamExternalId`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AWS credentials configuration
     * @name GetAwsCredentialsConfig
     * @summary Gets the configuration of the specified AWS credentials
     * @request GET:/aws/credentials/{id}
     */
    getAwsCredentialsConfig: (id: string, params: RequestParams = {}) =>
      this.request<AwsCredentialsConfig, any>({
        path: `/aws/credentials/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AWS credentials configuration
     * @name UpdateAwsCredentialsConfig
     * @summary Updates an existing AWS credentials configuration
     * @request PUT:/aws/credentials/{id}
     */
    updateAwsCredentialsConfig: (id: string, data: AwsCredentialsConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/aws/credentials/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AWS credentials configuration
     * @name DeleteAwsCredentialsConfig
     * @summary Deletes the specified AWS credentials configuration
     * @request DELETE:/aws/credentials/{id}
     */
    deleteAwsCredentialsConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/aws/credentials/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AWS credentials configuration
     * @name ValidateCreateAwsCredentialsConfig
     * @summary Validates the payload for the `POST /aws/credentials` request
     * @request POST:/aws/credentials/validator
     */
    validateCreateAwsCredentialsConfig: (data: AwsCredentialsConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/aws/credentials/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AWS credentials configuration
     * @name ValidateUpdateAwsCredentialsConfig
     * @summary Validates the payload for the `PUT /aws/credentials/{id}` request
     * @request POST:/aws/credentials/{id}/validator
     */
    validateUpdateAwsCredentialsConfig: (id: string, data: AwsCredentialsConfig, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/aws/credentials/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AWS credentials configuration
     * @name ListAwsCredentialConfigs
     * @summary Lists all available AWS credentials configurations
     * @request GET:/aws/credentials
     */
    listAwsCredentialConfigs: (params: RequestParams = {}) =>
      this.request<EntityShortRepresentation[], any>({
        path: `/aws/credentials`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags AWS credentials configuration
     * @name CreateAwsCredentialsConfig
     * @summary Creates a new AWS credentials configuration
     * @request POST:/aws/credentials
     */
    createAwsCredentialsConfig: (data: AwsCredentialsConfig, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/aws/credentials`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * @description Lists the account ids of all allowlisted accounts in AWS PrivateLink for this tenant
     *
     * @tags AWS PrivateLink
     * @name GetAllAllowlistedAccounts
     * @summary Gets the information about all allowlisted accounts in AWS PrivateLink
     * @request GET:/aws/privateLink/allowlistedAccounts
     */
    getAllAllowlistedAccounts: (params: RequestParams = {}) =>
      this.request<AllowlistedAwsAccountList, any>({
        path: `/aws/privateLink/allowlistedAccounts`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the given AWS account id in the allowlisted accounts in AWS PrivateLink for this tenant
     *
     * @tags AWS PrivateLink
     * @name PutAllowlistedAccount
     * @summary Updates the given AWS account id in the allowlist in AWS PrivateLink
     * @request PUT:/aws/privateLink/allowlistedAccounts/{id}
     */
    putAllowlistedAccount: (id: string, data: AllowlistedAwsAccount, params: RequestParams = {}) =>
      this.request<AllowlistedAwsAccount, ErrorEnvelope>({
        path: `/aws/privateLink/allowlistedAccounts/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * @description Removes the given AWS account id from the allowlisted accounts in AWS PrivateLink for this tenant
     *
     * @tags AWS PrivateLink
     * @name RemoveAllowlistedAccount
     * @summary Removes one AWS account from the allowlist in AWS PrivateLink
     * @request DELETE:/aws/privateLink/allowlistedAccounts/{id}
     */
    removeAllowlistedAccount: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/aws/privateLink/allowlistedAccounts/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Gets all configuration settings for AWS PrivateLink for this tenant
     *
     * @tags AWS PrivateLink
     * @name GetPrivateLinkConfig
     * @summary Gets the configuration information about AWS PrivateLink
     * @request GET:/aws/privateLink
     */
    getPrivateLinkConfig: (params: RequestParams = {}) =>
      this.request<AwsPrivateLinkConfig, any>({
        path: `/aws/privateLink`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Updates the configuration settings for AWS PrivateLink for this tenant
     *
     * @tags AWS PrivateLink
     * @name PutPrivateLinkConfig
     * @summary Updates the configuration information about AWS PrivateLink
     * @request PUT:/aws/privateLink
     */
    putPrivateLinkConfig: (data: AwsPrivateLinkConfig, params: RequestParams = {}) =>
      this.request<AwsPrivateLinkConfig, any>({
        path: `/aws/privateLink`,
        method: "PUT",
        body: data,
        ...params,
      }),
  };
  azure = {
    /**
     * No description
     *
     * @tags Azure credentials configuration
     * @name ListAzureCredentialsConfigs
     * @summary Lists all available Azure credentials configurations
     * @request GET:/azure/credentials
     */
    listAzureCredentialsConfigs: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/azure/credentials`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Azure credentials configuration
     * @name CreateAzureCredentialsConfig
     * @summary Creates a new Azure credentials configuration
     * @request POST:/azure/credentials
     */
    createAzureCredentialsConfig: (data: AzureCredentialsCreation, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/azure/credentials`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Azure credentials configuration
     * @name GetAzureCredentialsConfig
     * @summary Gets the configuration of the specified Azure credentials
     * @request GET:/azure/credentials/{id}
     */
    getAzureCredentialsConfig: (id: string, params: RequestParams = {}) =>
      this.request<AzureCredentials, any>({
        path: `/azure/credentials/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description * You can't change the Application ID or Directory ID of an Azure configuration. If you need to change them, create a new credentials configuration. * If a configuration with the specified ID doesn't exist, a new configuration is created.
     *
     * @tags Azure credentials configuration
     * @name UpdateAzureCredentialsConfig
     * @summary Updates an existing Azure credentials configuration
     * @request PUT:/azure/credentials/{id}
     */
    updateAzureCredentialsConfig: (id: string, data: AzureCredentials, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/azure/credentials/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Azure credentials configuration
     * @name DeleteAzureCredentialsConfig
     * @summary Deletes the specified Azure credentials configuration
     * @request DELETE:/azure/credentials/{id}
     */
    deleteAzureCredentialsConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/azure/credentials/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Azure credentials configuration
     * @name ValidateConfigurationUpdate
     * @summary Validates the payload for the `PUT /azure/credentials/{id}` request
     * @request POST:/azure/credentials/{id}/validator
     */
    validateConfigurationUpdate: (id: string, data: AzureCredentials, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/azure/credentials/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Azure credentials configuration
     * @name ValidateAzureCredentialsConfig
     * @summary Validates the payload for the `POST /azure/credentials` request
     * @request POST:/azure/credentials/validator
     */
    validateAzureCredentialsConfig: (data: AzureCredentials, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/azure/credentials/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  cloudFoundry = {
    /**
     * No description
     *
     * @tags Cloud Foundry credentials configuration
     * @name ValidateCreateCloudFoundryCredentialsConfig
     * @summary Validate that creating credentials would be successful. | maturity=EARLY_ADOPTER
     * @request POST:/cloudFoundry/credentials/validator
     */
    validateCreateCloudFoundryCredentialsConfig: (data: CloudFoundryCredentials, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/cloudFoundry/credentials/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cloud Foundry credentials configuration
     * @name GetCloudFoundryCredentialsConfig
     * @summary Show the properties for the specified Cloud Foundry foundation credentials. | maturity=EARLY_ADOPTER
     * @request GET:/cloudFoundry/credentials/{id}
     */
    getCloudFoundryCredentialsConfig: (id: string, params: RequestParams = {}) =>
      this.request<CloudFoundryCredentials, any>({
        path: `/cloudFoundry/credentials/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cloud Foundry credentials configuration
     * @name UpdateCloudFoundryCredentialsConfig
     * @summary Create or update credentials for a single Cloud Foundry foundation. | maturity=EARLY_ADOPTER
     * @request PUT:/cloudFoundry/credentials/{id}
     */
    updateCloudFoundryCredentialsConfig: (id: string, data: CloudFoundryCredentials, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/cloudFoundry/credentials/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cloud Foundry credentials configuration
     * @name DeleteCloudFoundryCredentialsConfig
     * @summary Delete the specified Cloud Foundry foundation credentials. | maturity=EARLY_ADOPTER
     * @request DELETE:/cloudFoundry/credentials/{id}
     */
    deleteCloudFoundryCredentialsConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cloudFoundry/credentials/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cloud Foundry credentials configuration
     * @name ValidateUpdateCloudFoundryCredentialsConfig
     * @summary Validate that updating or creating credentials would be successful. | maturity=EARLY_ADOPTER
     * @request POST:/cloudFoundry/credentials/{id}/validator
     */
    validateUpdateCloudFoundryCredentialsConfig: (
      id: string,
      data: CloudFoundryCredentials,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorEnvelope>({
        path: `/cloudFoundry/credentials/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cloud Foundry credentials configuration
     * @name ListCloudFoundryCredentialsConfigs
     * @summary List all the Cloud Foundry foundations credentials. | maturity=EARLY_ADOPTER
     * @request GET:/cloudFoundry/credentials
     */
    listCloudFoundryCredentialsConfigs: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/cloudFoundry/credentials`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cloud Foundry credentials configuration
     * @name CreateCloudFoundryCredentialsConfig
     * @summary Create new credentials for a single foundation. | maturity=EARLY_ADOPTER
     * @request POST:/cloudFoundry/credentials
     */
    createCloudFoundryCredentialsConfig: (data: CloudFoundryCredentials, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/cloudFoundry/credentials`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  kubernetes = {
    /**
     * No description
     *
     * @tags Kubernetes credentials configuration
     * @name ListKubernetesCredentialsConfigs
     * @summary Lists all available Kubernetes credentials configurations | maturity=EARLY_ADOPTER
     * @request GET:/kubernetes/credentials
     */
    listKubernetesCredentialsConfigs: (params: RequestParams = {}) =>
      this.request<KubernetesConfigStubListDto, any>({
        path: `/kubernetes/credentials`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID as it will be automatically assigned by the Dynatrace server.
     *
     * @tags Kubernetes credentials configuration
     * @name CreateKubernetesCredentialsConfig
     * @summary Creates a new Kubernetes credentials configuration | maturity=EARLY_ADOPTER
     * @request POST:/kubernetes/credentials
     */
    createKubernetesCredentialsConfig: (data: KubernetesCredentials, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/kubernetes/credentials`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Kubernetes credentials configuration
     * @name GetKubernetesCredentialsConfig
     * @summary Gets the configuration of the specified Kubernetes credentials | maturity=EARLY_ADOPTER
     * @request GET:/kubernetes/credentials/{id}
     */
    getKubernetesCredentialsConfig: (id: string, params: RequestParams = {}) =>
      this.request<KubernetesCredentials, any>({
        path: `/kubernetes/credentials/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description You can't change the URL of the Kubernetes cluster. If a configuration with the specified ID doesn't exist, a new configuration is created. IDs of entities are computed server side upon creation. If you want to create a new entity, use the POST method without an ID. To update an existing entity, use the PUT method with an existing, valid ID. To re-create an entity under a specific ID, a valid ID must be provided with the PUT method.
     *
     * @tags Kubernetes credentials configuration
     * @name UpdateKubernetesCredentialsConfig
     * @summary Updates an existing Kubernetes credentials configuration | maturity=EARLY_ADOPTER
     * @request PUT:/kubernetes/credentials/{id}
     */
    updateKubernetesCredentialsConfig: (id: string, data: KubernetesCredentials, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/kubernetes/credentials/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Kubernetes credentials configuration
     * @name DeleteKubernetesCredentialsConfig
     * @summary Deletes the specified Kubernetes credentials configuration | maturity=EARLY_ADOPTER
     * @request DELETE:/kubernetes/credentials/{id}
     */
    deleteKubernetesCredentialsConfig: (id: string, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/kubernetes/credentials/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Kubernetes credentials configuration
     * @name ValidateCreateKubernetesCredentialsConfig
     * @summary Validates the payload for the `POST /kubernetes/credentials` request | maturity=EARLY_ADOPTER
     * @request POST:/kubernetes/credentials/validator
     */
    validateCreateKubernetesCredentialsConfig: (data: KubernetesCredentials, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/kubernetes/credentials/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Kubernetes credentials configuration
     * @name ValidateUpdateKubernetesCredentialsConfig
     * @summary Validates the payload for the `PUT /kubernetes/credentials/{id}` request | maturity=EARLY_ADOPTER
     * @request POST:/kubernetes/credentials/{id}/validator
     */
    validateUpdateKubernetesCredentialsConfig: (id: string, data: KubernetesCredentials, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/kubernetes/credentials/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
  maintenanceWindows = {
    /**
     * No description
     *
     * @tags Maintenance windows
     * @name ListMaintenanceWindows
     * @summary Lists all available maintenance windows
     * @request GET:/maintenanceWindows
     */
    listMaintenanceWindows: (params: RequestParams = {}) =>
      this.request<StubList, any>({
        path: `/maintenanceWindows`,
        method: "GET",
        ...params,
      }),

    /**
     * @description The body must not provide an ID. An ID is assigned automatically by the Dynatrace server.
     *
     * @tags Maintenance windows
     * @name CreateMaintenanceWindow
     * @summary Creates a new maintenance window
     * @request POST:/maintenanceWindows
     */
    createMaintenanceWindow: (data: MaintenanceWindow, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/maintenanceWindows`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maintenance windows
     * @name GetMaintenanceWindow
     * @summary Gets the properties of the specified maintenance window
     * @request GET:/maintenanceWindows/{id}
     */
    getMaintenanceWindow: (id: string, params: RequestParams = {}) =>
      this.request<MaintenanceWindow, any>({
        path: `/maintenanceWindows/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description If a maintenance window with the specified ID doesn't exist, a new one is created.
     *
     * @tags Maintenance windows
     * @name UpdateMaintenanceWindow
     * @summary Updates an existing maintenance window
     * @request PUT:/maintenanceWindows/{id}
     */
    updateMaintenanceWindow: (id: string, data: MaintenanceWindow, params: RequestParams = {}) =>
      this.request<EntityShortRepresentation, ErrorEnvelope>({
        path: `/maintenanceWindows/${id}`,
        method: "PUT",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maintenance windows
     * @name DeleteMaintenanceWindow
     * @summary Deletes the specified maintenance window
     * @request DELETE:/maintenanceWindows/{id}
     */
    deleteMaintenanceWindow: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/maintenanceWindows/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maintenance windows
     * @name ValidateUpdateMaintenanceWindow
     * @summary Validates the payload for the `PUT /maintenancewindow/{id}` request
     * @request POST:/maintenanceWindows/{id}/validator
     */
    validateUpdateMaintenanceWindow: (id: string, data: MaintenanceWindow, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/maintenanceWindows/${id}/validator`,
        method: "POST",
        body: data,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maintenance windows
     * @name ValidateCreateMaintenanceWindow
     * @summary Validates the payload for the `POST /maintenancewindow` request
     * @request POST:/maintenanceWindows/validator
     */
    validateCreateMaintenanceWindow: (data: MaintenanceWindow, params: RequestParams = {}) =>
      this.request<void, ErrorEnvelope>({
        path: `/maintenanceWindows/validator`,
        method: "POST",
        body: data,
        ...params,
      }),
  };
}
