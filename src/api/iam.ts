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

export interface UserLoginMetaDataDto {
  /** The number of successful sign-ins. */
  successfulLoginCounter: number;

  /** The number of failed sign-ins. */
  failedLoginCounter: number;

  /** The date and time of the most recent successful sign-in in `2021-05-01T15:11:00Z` format. */
  lastSuccessfulLogin: string;

  /** The date and time of the most recent failed sign-in in `2021-05-01T15:11:00Z` format. */
  lastFailedLogin: string;

  /** The date and time of user creation in `2021-05-01T15:11:00Z` format. */
  createdAt: string;

  /** The date and time of the most recent modification to the user in `2021-05-01T15:11:00Z` format. */
  updatedAt: string;
}

export interface UsersDto {
  /** The UUID of the user. */
  uid: string;

  /** The email address of the user. */
  email: string;

  /** The first name of the user. */
  name: string;

  /** The last name of the user. */
  surname: string;

  /**
   * The status of this user in Dynatrace:
   *
   * * `ACTIVE`: The user is active.
   * * `INACTIVE`: The user is deactivated and cannot sign in to Dynatrace.
   * * `PENDING`: The user received an invitation, but hasn't completed sign-up yet.
   * * `DELETED`: The user is deleted from the account and cannot sign in to Dynatrace.
   * * `ECUSTOMS_MANUALLY_BLOCKED`: The user is blocked due to to a trade and export compliance violation.
   */
  userStatus: "ACTIVE" | "INACTIVE" | "PENDING" | "DELETED" | "ECUSTOMS_MANUALLY_BLOCKED";

  /** The user is (`true`) or is not (`false`) an emergency contact for the account. */
  emergencyContact: boolean;
  userLoginMetadata: UserLoginMetaDataDto;
}

export interface UserListDto {
  /** The number of entries in the list. */
  count: number;

  /** A list of the account's users. */
  items: UsersDto[];
}

export interface AccountGroupDto {
  /** The name of the user group. */
  groupName: string;

  /** The UUID of the user group. */
  uuid: string;

  /** The identity provider from which the group originates. */
  owner: "LOCAL" | "SCIM" | "SAML" | "DCS";

  /** The UUID of the Dynatrace account. */
  accountUUID: string;

  /** The name of the Dynatrace account. */
  accountName: string;

  /** A short description of the group. */
  description: string;

  /** The date and time of the group creation in `2021-05-01T15:11:00Z` format. */
  createdAt: string;

  /** The date and time of the most recent modification to the group in `2021-05-01T15:11:00Z` format. */
  updatedAt: string;
}

export interface GroupUserDto {
  /** The UUID of the user. */
  uid: string;

  /** The email address of the user. */
  email: string;

  /** The first name of the user. */
  name: string;

  /** The last name of the user. */
  surname: string;

  /**
   * The status of this user in Dynatrace:
   *
   * * `ACTIVE`: The user is active.
   * * `INACTIVE`: The user is deactivated and cannot sign in to Dynatrace.
   * * `PENDING`: The user received an invitation, but hasn't completed sign-up yet.
   * * `DELETED`: The user is deleted from the account and cannot sign in to Dynatrace.
   * * `ECUSTOMS_MANUALLY_BLOCKED`: The user is blocked due to to a trade and export compliance violation.
   */
  userStatus: "ACTIVE" | "INACTIVE" | "PENDING" | "DELETED" | "ECUSTOMS_MANUALLY_BLOCKED";

  /** The user is (`true`) or is not (`false`) an emergency contact for the account. */
  emergencyContact: boolean;

  /** A list of groups of which the user is a member. */
  groups: AccountGroupDto[];
}

export interface UserEmailDto {
  /** The email address of the user. */
  email: string;
}

export interface GetGroupDto {
  /** The UUID of the user group. */
  uuid?: string;

  /** The name of the user group. */
  name: string;

  /** A short description of the user group. */
  description?: string;

  /** A list of values associating this group with the corresponding claim from an identity provider. */
  federatedAttributeValues?: string[];

  /** The identity provider from which the group originates. */
  owner: "LOCAL" | "SCIM" | "SAML" | "DCS";

  /** The date and time of the group creation in `2021-05-01T15:11:00Z` format. */
  createdAt: string;

  /** The date and time of the most recent group modification in `2021-05-01T15:11:00Z` format. */
  updatedAt: string;
}

export interface GroupListDto {
  /** The number of entries in the list. */
  count: number;
  items: GetGroupDto[];
}

export interface UserDto {
  /** The UUID of the user. */
  uid: string;

  /** The email address of the user. */
  email: string;

  /** The first name of the user. */
  name: string;

  /** The last name of the user. */
  surname: string;

  /**
   * The status of this user in Dynatrace:
   *
   * * `ACTIVE`: The user is active.
   * * `INACTIVE`: The user is deactivated and cannot sign in to Dynatrace.
   * * `PENDING`: The user received an invitation, but hasn't completed sign-up yet.
   * * `DELETED`: The user is deleted from the account and cannot sign in to Dynatrace.
   * * `ECUSTOMS_MANUALLY_BLOCKED`: The user is blocked due to to a trade and export compliance violation.
   */
  userStatus: "ACTIVE" | "INACTIVE" | "PENDING" | "DELETED" | "ECUSTOMS_MANUALLY_BLOCKED";

  /** The user is (`true`) or is not (`false`) an emergency contact for the account. */
  emergencyContact: boolean;
}

export interface GroupUserListDto {
  /** The number of entries in the list. */
  count: number;
  items: UserDto[];
}

export interface PutGroupDto {
  /** The UUID of the user group. */
  uuid?: string;

  /** The name of the user group. */
  name: string;

  /** A short description of the user group. */
  description?: string;

  /** A list of values associating this group with the corresponding claim from an identity provider. */
  federatedAttributeValues?: string[];
}

export interface PermissionsDto {
  permissionName:
    | "account-company-info"
    | "account-user-management"
    | "account-viewer"
    | "tenant-viewer"
    | "tenant-manage-settings"
    | "tenant-agent-install"
    | "tenant-logviewer"
    | "tenant-view-sensitive-request-data"
    | "tenant-configure-request-capture-data"
    | "tenant-replay-sessions-with-masking"
    | "tenant-replay-sessions-without-masking"
    | "tenant-manage-security-problems"
    | "tenant-manage-support-tickets";

  /** Scope (account-uuid, tenant-id, or {tenant-id}:{management-zone-id} for this permission */
  scope: string;
  scopeType: "account" | "tenant" | "management-zone";
  createdAt: string;
  updatedAt: string;
}

export interface PermissionsGroupDto {
  /** The UUID of the user group. */
  uuid?: string;

  /** The name of the user group. */
  name: string;

  /** A short description of the user group. */
  description?: string;

  /** A list of values associating this group with the corresponding claim from an identity provider. */
  federatedAttributeValues?: string[];

  /** The identity provider from which the group originates. */
  owner: "LOCAL" | "SCIM" | "SAML" | "DCS";

  /** The date and time of the group creation in `2021-05-01T15:11:00Z` format. */
  createdAt: string;

  /** The date and time of the most recent group modification in `2021-05-01T15:11:00Z` format. */
  updatedAt: string;
  permissions: PermissionsDto[];
}

export interface PermissionDto {
  /** Available permission id */
  id: string;
  description: string;
}

export interface PolicyOverview {
  /** The ID of the policy. */
  uuid: string;

  /** The display name of the policy. */
  name: string;

  /** A short description of the policy. */
  description: string;

  /** The ID of the level to which the policy applies. */
  levelId: string;

  /** The type of the level to which the policy applies. */
  levelType: string;
}

export interface PolicyOverviewDtoList {
  /** A list of policies. */
  policyOverviewList: PolicyOverview[];
}

export interface ErrorDto {
  /** The code of the error. */
  code: number;

  /** A short description of the error. */
  message: string;
}

export interface PolicyDto {
  /** The ID of the policy. */
  uuid: string;

  /** The display name of the policy. */
  name: string;

  /** A short description of the policy. */
  description: string;
}

export interface PolicyDtoList {
  /** A list of policies. */
  policies: PolicyDto[];
}

export interface CreateOrUpdateLevelPolicyRequestDto {
  /** The display name of the policy. */
  name: string;

  /** A short description of the policy. */
  description: string;

  /** A list of tags. */
  tags: string[];

  /** The [statement](https://dt-url.net/ht03ucb) of the policy. */
  statementQuery: string;
}

export interface ValidationDto {
  /** A list of validation warnings. */
  warnings: string[];
}

export interface Condition {
  /**
   * The name of the condition.
   *
   *  It indicates which part of the **services** is checked by the condition.
   */
  name: string;

  /** The operator of the condition. */
  operator: string;

  /** A list of reference values of the condition. */
  values: string[];
}

export interface Statement {
  /** The effect of the policy (for example, allow something). */
  effect: string;

  /** The service to which the policy applies. */
  service: string;

  /** A list of granted permissions. */
  permissions: string[];

  /** A list of conditions limiting the granted permissions. */
  conditions: Condition[];
}

export interface LevelPolicyDto {
  /** The ID of the policy. */
  uuid: string;

  /** The display name of the policy. */
  name: string;

  /** A list of tags. */
  tags: string[];

  /** A short description of the policy. */
  description: string;

  /** The [statement](https://dt-url.net/ht03ucb) of the policy. */
  statementQuery: string;

  /** The expanded form of the policy statement. */
  statements: Statement[];
}

export interface PolicyUuidsDto {
  /** A list of policies bound to the user group. */
  policyUuids: string[];
}

export interface Binding {
  /** The ID of the policy. */
  policyUuid: string;

  /** A list of user groups to which the policy applies. */
  groups: string[];
}

export interface LevelPolicyBindingDto {
  /** The type of the policy level. */
  levelType: string;

  /** The ID of the policy level. */
  levelId: string;
  policyBindings: Binding[];
}

export interface CreateLevelPolicyBindingsRequestDto {
  /** A list of policy bindings of the user group. */
  policyBindings: Binding[];
}

export interface AppendLevelPolicyBindingsRequestDto {
  /** A list of user groups (specified by IDs) to which the policy applies. */
  groups: string[];
}

export interface LevelBindingGroupDto {
  groups: string[];
}

export interface AccountContractDto {
  /** The total amount of host units that the account owns. */
  concurrentHostsUnits: number;

  /**
   * The overage is (`true`) or is not (`false`) enabled for the account.
   *
   * If the overage is enabled, the account can exceed the quota. To learn more about host units consumption, see [Application and Infrastructure Monitoring](https://dt-url.net/hu03ub5) in Dynatrace Documentation.
   */
  hostUnitOverageAllowed: boolean;
}

export interface EnvironmentLimitListDto {
  /** The ID of the environment. */
  uuid: string;

  /** The total amount of host units assigned to the environment. */
  concurrentHostsUnits: number;

  /**
   * The overage is (`true`) or is not (`false`) enabled for the environment.
   *
   * If the overage is enabled, the environment can exceed the quota. To learn more about host units consumption, see [Application and Infrastructure Monitoring](https://dt-url.net/hu03ub5) in Dynatrace Documentation.
   */
  hostUnitOverageAllowed: boolean;

  /** The display name of the environment. */
  name: string;
}

export interface ContractLimitDto {
  accountInfo: AccountContractDto;
  environmentInfo: EnvironmentLimitListDto[];
}

export interface HostMonitoringOverageEnabledDto {
  /**
   * The overage is (`true`) or is not (`false`) enabled for the environment.
   *
   * If the overage is enabled, the environment can exceed the quota.
   */
  hostUnitOverageAllowed: boolean;
}

export interface EnvironmentChangeListDto {
  /** The ID of the environment. */
  uuid: string;

  /** The total amount of host units assigned to the environment. */
  concurrentHostsUnits: number;

  /**
   * The overage is (`true`) or is not (`false`) enabled for the environment.
   *
   * If the overage is enabled, the environment can exceed the quota. To learn more about host units consumption, see [Application and Infrastructure Monitoring](https://dt-url.net/hu03ub5) in Dynatrace Documentation.
   */
  hostUnitOverageAllowed: boolean;
}

export interface TenantResourceDto {
  /** The name of the environment. */
  name: string;

  /** The ID of the environment. */
  id: string;
}

export interface ManagementZoneResourceDto {
  /** The ID of the environment to which the management zone belongs. */
  parent: string;

  /** The name of the management zone. */
  name: string;

  /** The ID of the management zone. */
  id: string;
}

export interface EnvironmentResourceDto {
  /** A list of environments in the account. */
  tenantResources: TenantResourceDto[];

  /** A list of management zones in the account. */
  managementZoneResources: ManagementZoneResourceDto[];
}

export interface TimeZoneDto {
  /** Timezone name */
  displayName: string;

  /** Timezone standard name */
  name: string;
}

export interface RegionDto {
  /** Available region name */
  name: string;
}

export interface ClaSubscriptionDto {
  /** The ID of the Dynatrace Platform Subscription. */
  subscriptionId: number;

  /** The start date and time of the subscription in `2021-05-01T15:11:00Z` format. */
  start: string;

  /** The end date and time of the subscription in `2021-05-01T15:11:00Z` format. */
  end: string;
}

export interface ClaSubscriptionListDto {
  /** The number of entries in the list. */
  totalCount: number;

  /** A list of subscriptions of the account. */
  records: ClaSubscriptionDto[];
}

export interface ClaClusterDto {
  /** The ID of the cluster. */
  clusterUuid: string;
}

export interface ClaClusterListDto {
  /** The number of entries in the list. */
  totalCount: number;

  /** A list of clusters of the account. */
  records: ClaClusterDto[];
}

export interface ClaEnvironmentDto {
  /** The ID of the environments. */
  environmentUuid: string;
}

export interface ClaEnvironmentListDto {
  /** The number of entries in the list. */
  totalCount: number;

  /** A list of environments of the account. */
  records: ClaEnvironmentDto[];
}

export interface ConsumptionReturnDto {
  /**
   * The start date and time of the report interval in `2021-05-01T15:11:00Z` format.
   * @format date-time
   */
  timeFrameStart: string;

  /**
   * The end date and time of the report interval in `2021-05-01T15:11:00Z` format.
   * @format date-time
   */
  timeFrameEnd: string;

  /** The name of the consumed units (for example, `Davis data units`). */
  consumptionType: string;

  /** The quantity that has been deducted from the available unit's pool. */
  quantity: number;
}

export interface ConsumptionReturnListDto {
  /** The number of entries in the list. */
  totalCount: number;

  /** A list of consumption records. */
  records: ConsumptionReturnDto[];
}

export interface ClusterOrEnvironmentAggregatedReturnDto {
  /** The name of the resource. */
  resourceName: string;

  /** The type of the resource: environment or cluster. */
  resourceType: string;

  /** A list of consumption records. */
  consumptionRecords: object;
}

export interface ClaSubscriptionTermDto {
  /** The annual [commit](https://dt-url.net/i503u3z) of the Dynatrace Platform Subscription. */
  limit: number;

  /**
   * The start date of the subscription in `2021-05-01T15:11:00Z` format.
   * @format date-time
   */
  startDate: string;

  /**
   * The end date of the subscription in `2021-05-01T15:11:00Z` format.
   * @format date-time
   */
  endDate: string;
}

export interface ClaBudgetLimitRecordsDto {
  /** The ID of the cluster to which the limit applies. */
  clusterUuid: string;

  /** The ID of the environment to which the limit applies. */
  environmentUuid: string;

  /** The consumption units to which the limit applies. */
  dimensionName: string;
  tierType: "LIMIT";

  /**
   * The date and time when the restriction takes effect in `2021-05-01T15:11:00Z` format.
   *
   *  The limit is not enforeced in real-time and might lead to overages.
   * @format date-time
   */
  startDate: string;

  /**
   * The date and time when the restriction ends in `2021-05-01T15:11:00Z` format.
   *
   *  The limit is not enforeced in real-time and might lead to overages.
   * @format date-time
   */
  endDate: string;

  /**
   * The limit for the cluster or environment.
   *
   *  If consumption exceeds the limit, monitoring will stop.
   */
  amount: number;

  /** The ID of the Dynatrace Platform Subscription. */
  subscriptionId: number;
}

export interface ClaBudgetLimitRecordListDto {
  /** The number of entries in the list. */
  totalCount: number;
  records: ClaBudgetLimitRecordsDto[];
}

export interface ClaBudgetLimitDto {
  /** The limit for the cluster or environment. Consumption will be restricted to this value. */
  limit: number;
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
 * @title Dynatrace Account Management API
 * @version 1.0
 * @externalDocs /spec-json
 * @contact
 *
 * The enterprise management API for Dynatrace SaaS enables automation of operational tasks related to user access and environment lifecycle management.
 */
export class Api extends APIBase {
  iam = {
    /**
     * No description
     *
     * @tags User management
     * @name UsersControllerGetUsers
     * @summary Lists all users of an account
     * @request GET:/iam/v1/accounts/{accountUuid}/users
     */
    usersControllerGetUsers: (accountUuid: string, params: RequestParams = {}) =>
      this.request<UserListDto, any>({
        path: `/iam/v1/accounts/${accountUuid}/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User management
     * @name UsersControllerCreateUserForAccount
     * @summary Creates a new user in an account
     * @request POST:/iam/v1/accounts/{accountUuid}/users
     */
    usersControllerCreateUserForAccount: (accountUuid: string, data: UserEmailDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User management
     * @name UsersControllerGetUserGroups
     * @summary Lists all groups of a user
     * @request GET:/iam/v1/accounts/{accountUuid}/users/{email}
     */
    usersControllerGetUserGroups: (accountUuid: string, email: string, params: RequestParams = {}) =>
      this.request<GroupUserDto, any>({
        path: `/iam/v1/accounts/${accountUuid}/users/${email}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User management
     * @name UsersControllerAddUserToGroups
     * @summary Adds a user to groups. Any existing group membership remains unaffected.
     * @request POST:/iam/v1/accounts/{accountUuid}/users/{email}
     */
    usersControllerAddUserToGroups: (accountUuid: string, email: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/users/${email}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User management
     * @name UsersControllerRemoveUserFromAccount
     * @summary Removes a user from an account
     * @request DELETE:/iam/v1/accounts/{accountUuid}/users/{email}
     */
    usersControllerRemoveUserFromAccount: (accountUuid: string, email: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/users/${email}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User management
     * @name UsersControllerReplaceUserGroups
     * @summary Sets group membership of a user. Any existing membership is overwritten.
     * @request PUT:/iam/v1/accounts/{accountUuid}/users/{email}/groups
     */
    usersControllerReplaceUserGroups: (
      accountUuid: string,
      email: string,
      data: string[],
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/users/${email}/groups`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User management
     * @name UsersControllerRemoveUserFromGroups
     * @summary Removes a user from groups
     * @request DELETE:/iam/v1/accounts/{accountUuid}/users/{email}/groups
     */
    usersControllerRemoveUserFromGroups: (
      accountUuid: string,
      email: string,
      query: { "group-uuid": string[] },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/users/${email}/groups`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Group management
     * @name GroupsControllerGetGroups
     * @summary Lists all user groups of an account
     * @request GET:/iam/v1/accounts/{accountUuid}/groups
     */
    groupsControllerGetGroups: (accountUuid: string, params: RequestParams = {}) =>
      this.request<GroupListDto, any>({
        path: `/iam/v1/accounts/${accountUuid}/groups`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Group management
     * @name GroupsControllerCreateGroups
     * @summary Creates new user groups
     * @request POST:/iam/v1/accounts/{accountUuid}/groups
     */
    groupsControllerCreateGroups: (accountUuid: string, data: PutGroupDto[], params: RequestParams = {}) =>
      this.request<GetGroupDto[], any>({
        path: `/iam/v1/accounts/${accountUuid}/groups`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Group management
     * @name GroupsControllerGetUsersForGroup
     * @summary Lists all members of a group
     * @request GET:/iam/v1/accounts/{accountUuid}/groups/{groupUuid}/users
     */
    groupsControllerGetUsersForGroup: (accountUuid: string, groupUuid: string, params: RequestParams = {}) =>
      this.request<GroupUserListDto, any>({
        path: `/iam/v1/accounts/${accountUuid}/groups/${groupUuid}/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Group management
     * @name GroupsControllerEditGroup
     * @summary Edits a user group
     * @request PUT:/iam/v1/accounts/{accountUuid}/groups/{groupUuid}
     */
    groupsControllerEditGroup: (
      accountUuid: string,
      groupUuid: string,
      data: PutGroupDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/groups/${groupUuid}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Group management
     * @name GroupsControllerDeleteGroup
     * @summary Deletes a user group
     * @request DELETE:/iam/v1/accounts/{accountUuid}/groups/{groupUuid}
     */
    groupsControllerDeleteGroup: (accountUuid: string, groupUuid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/groups/${groupUuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission Management
     * @name PermissionsControllerGetGroupPermissions
     * @summary Get all permissions for a group
     * @request GET:/iam/v1/accounts/{accountUuid}/groups/{groupUuid}/permissions
     */
    permissionsControllerGetGroupPermissions: (accountUuid: string, groupUuid: string, params: RequestParams = {}) =>
      this.request<PermissionsGroupDto, any>({
        path: `/iam/v1/accounts/${accountUuid}/groups/${groupUuid}/permissions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission Management
     * @name PermissionsControllerAddGroupPermissions
     * @summary Add permissions to a group
     * @request POST:/iam/v1/accounts/{accountUuid}/groups/{groupUuid}/permissions
     */
    permissionsControllerAddGroupPermissions: (
      accountUuid: string,
      groupUuid: string,
      data: PermissionDto[],
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/groups/${groupUuid}/permissions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission Management
     * @name PermissionsControllerOverwriteGroupPermissions
     * @summary Set permissions for a group
     * @request PUT:/iam/v1/accounts/{accountUuid}/groups/{groupUuid}/permissions
     */
    permissionsControllerOverwriteGroupPermissions: (
      accountUuid: string,
      groupUuid: string,
      data: PermissionDto[],
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/groups/${groupUuid}/permissions`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission Management
     * @name PermissionsControllerRemoveGroupPermissions
     * @summary Remove a permission from a group
     * @request DELETE:/iam/v1/accounts/{accountUuid}/groups/{groupUuid}/permissions
     */
    permissionsControllerRemoveGroupPermissions: (
      accountUuid: string,
      groupUuid: string,
      query: {
        scope: string;
        "permission-name":
          | "account-company-info"
          | "account-user-management"
          | "account-viewer"
          | "tenant-viewer"
          | "tenant-manage-settings"
          | "tenant-agent-install"
          | "tenant-logviewer"
          | "tenant-view-sensitive-request-data"
          | "tenant-configure-request-capture-data"
          | "tenant-replay-sessions-with-masking"
          | "tenant-replay-sessions-without-masking"
          | "tenant-manage-security-problems"
          | "tenant-manage-support-tickets";
        "scope-type": "account" | "tenant" | "management-zone";
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/iam/v1/accounts/${accountUuid}/groups/${groupUuid}/permissions`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerGetPolicyOverviewList
     * @summary Lists all policies for a level, including inherited from higher levels
     * @request GET:/iam/v1/repo/{levelType}/{levelId}/policies/aggregate
     */
    policyControllerGetPolicyOverviewList: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<PolicyOverviewDtoList, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/policies/aggregate`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerGetLevelPolicies
     * @summary Lists all native policies of a level
     * @request GET:/iam/v1/repo/{levelType}/{levelId}/policies
     */
    policyControllerGetLevelPolicies: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<PolicyDtoList, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/policies`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerCreateLevelPolicy
     * @summary Creates a new policy
     * @request POST:/iam/v1/repo/{levelType}/{levelId}/policies
     */
    policyControllerCreateLevelPolicy: (
      levelType: string,
      levelId: string,
      data: CreateOrUpdateLevelPolicyRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<LevelPolicyDto, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/policies`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerValidateNewLevelPolicy
     * @summary Validates the payload for the `POST /iam/v1/repo/{levelType}/{levelId}/policies` request
     * @request POST:/iam/v1/repo/{levelType}/{levelId}/policies/validation
     */
    policyControllerValidateNewLevelPolicy: (
      levelType: string,
      levelId: string,
      data: CreateOrUpdateLevelPolicyRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ValidationDto, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/policies/validation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerValidateLevelPolicy
     * @summary Validates the payload for the `PUT /iam/v1/repo/{levelType}/{levelId}/policies/{policyUuid}` request
     * @request POST:/iam/v1/repo/{levelType}/{levelId}/policies/validation/{policyUuid}
     */
    policyControllerValidateLevelPolicy: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      data: CreateOrUpdateLevelPolicyRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ValidationDto, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/policies/validation/${policyUuid}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerGetLevelPolicy
     * @summary Gets a policy
     * @request GET:/iam/v1/repo/{levelType}/{levelId}/policies/{policyUuid}
     */
    policyControllerGetLevelPolicy: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<LevelPolicyDto, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/policies/${policyUuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description If the specified policy doesn't exist, a new one is created.
     *
     * @tags Policy management
     * @name PolicyControllerUpdateLevelPolicy
     * @summary Updates a policy
     * @request PUT:/iam/v1/repo/{levelType}/{levelId}/policies/{policyUuid}
     */
    policyControllerUpdateLevelPolicy: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      data: CreateOrUpdateLevelPolicyRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<LevelPolicyDto, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/policies/${policyUuid}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerDeleteLevelPolicy
     * @summary Deletes a policy
     * @request DELETE:/iam/v1/repo/{levelType}/{levelId}/policies/{policyUuid}
     */
    policyControllerDeleteLevelPolicy: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      force: boolean,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/policies/${policyUuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerGetPolicyUuidsBindings
     * @summary Lists all policies for a user group
     * @request GET:/iam/v1/repo/{levelType}/{levelId}/bindings/groups/{groupUuid}
     */
    policyControllerGetPolicyUuidsBindings: (
      levelType: string,
      levelId: string,
      groupUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PolicyUuidsDto, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/bindings/groups/${groupUuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The request overwrites exisiting policies.
     *
     * @tags Policy management
     * @name PolicyControllerUpdatePolicyBindingsToGroup
     * @summary Updates policies for a user group
     * @request PUT:/iam/v1/repo/{levelType}/{levelId}/bindings/groups/{groupUuid}
     */
    policyControllerUpdatePolicyBindingsToGroup: (
      levelType: string,
      levelId: string,
      groupUuid: string,
      data: PolicyUuidsDto,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/bindings/groups/${groupUuid}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description A policy binding shows which user groups use the policy.
     *
     * @tags Policy management
     * @name PolicyControllerGetLevelPolicyBindings
     * @summary Lists all policy bindings of a level
     * @request GET:/iam/v1/repo/{levelType}/{levelId}/bindings
     */
    policyControllerGetLevelPolicyBindings: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<LevelPolicyBindingDto, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/bindings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The request overwrited all existing bindings.
     *
     * @tags Policy management
     * @name PolicyControllerUpdateLevelPolicyBindings
     * @summary Updates policy bindings of a level
     * @request PUT:/iam/v1/repo/{levelType}/{levelId}/bindings
     */
    policyControllerUpdateLevelPolicyBindings: (
      levelType: string,
      levelId: string,
      data: CreateLevelPolicyBindingsRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/bindings`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerDeleteLevelPolicyBindings
     * @summary Deletes all policy bindings from a level
     * @request DELETE:/iam/v1/repo/{levelType}/{levelId}/bindings
     */
    policyControllerDeleteLevelPolicyBindings: (levelType: string, levelId: string, params: RequestParams = {}) =>
      this.request<void, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/bindings`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description Existing bindings remain unaffected.
     *
     * @tags Policy management
     * @name PolicyControllerAppendLevelPolicyBindings
     * @summary Adds policy bindings to a level
     * @request POST:/iam/v1/repo/{levelType}/{levelId}/bindings/{policyUuid}
     */
    policyControllerAppendLevelPolicyBindings: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      data: AppendLevelPolicyBindingsRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<LevelBindingGroupDto, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/bindings/${policyUuid}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerDeleteLevelPolicyBindingsForPolicy
     * @summary Deletes all bindings of a policy
     * @request DELETE:/iam/v1/repo/{levelType}/{levelId}/bindings/{policyUuid}
     */
    policyControllerDeleteLevelPolicyBindingsForPolicy: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/bindings/${policyUuid}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy management
     * @name PolicyControllerDeleteLevelPolicyBindingsForPolicyAndGroup
     * @summary Deletes a policy binding from a user group
     * @request DELETE:/iam/v1/repo/{levelType}/{levelId}/bindings/{policyUuid}/{groupUuid}
     */
    policyControllerDeleteLevelPolicyBindingsForPolicyAndGroup: (
      levelType: string,
      levelId: string,
      policyUuid: string,
      groupUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorDto>({
        path: `/iam/v1/repo/${levelType}/${levelId}/bindings/${policyUuid}/${groupUuid}`,
        method: "DELETE",
        ...params,
      }),
  };
  env = {
    /**
     * No description
     *
     * @tags Quota management
     * @name QuotaControllerGetQuota
     * @summary Gets the host units quota of an account
     * @request GET:/env/v1/accounts/{accountUuid}/quotas/host-monitoring
     */
    quotaControllerGetQuota: (accountUuid: string, params: RequestParams = {}) =>
      this.request<ContractLimitDto, any>({
        path: `/env/v1/accounts/${accountUuid}/quotas/host-monitoring`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Quota management
     * @name QuotaControllerSplitHostMonitoringCredits
     * @summary Updates environment-level host unit quotas
     * @request PATCH:/env/v1/accounts/{accountUuid}/quotas/host-monitoring
     */
    quotaControllerSplitHostMonitoringCredits: (
      accountUuid: string,
      data: EnvironmentChangeListDto[],
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/env/v1/accounts/${accountUuid}/quotas/host-monitoring`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Quota management
     * @name QuotaControllerEnableOverage
     * @summary Sets the host units overage
     * @request PUT:/env/v1/accounts/{accountUuid}/quotas/host-monitoring/environments/{environmentUuid}/overage
     */
    quotaControllerEnableOverage: (
      accountUuid: string,
      environmentUuid: string,
      data: HostMonitoringOverageEnabledDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/env/v1/accounts/${accountUuid}/quotas/host-monitoring/environments/${environmentUuid}/overage`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Environment management
     * @name EnvironmentResourcesControllerGetEnvironmentResources
     * @summary Lists all environments and management zones of an account
     * @request GET:/env/v1/accounts/{accountUuid}/environments
     */
    environmentResourcesControllerGetEnvironmentResources: (accountUuid: string, params: RequestParams = {}) =>
      this.request<EnvironmentResourceDto, any>({
        path: `/env/v1/accounts/${accountUuid}/environments`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  ref = {
    /**
     * No description
     *
     * @tags Reference Data
     * @name ReferenceDataControllerGetTimezones
     * @summary Get names of all timezones available
     * @request GET:/ref/v1/time-zones
     */
    referenceDataControllerGetTimezones: (params: RequestParams = {}) =>
      this.request<TimeZoneDto[], any>({
        path: `/ref/v1/time-zones`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Data
     * @name ReferenceDataControllerGetRegions
     * @summary Get names of all regions available
     * @request GET:/ref/v1/regions
     */
    referenceDataControllerGetRegions: (params: RequestParams = {}) =>
      this.request<RegionDto[], any>({
        path: `/ref/v1/regions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference Data
     * @name ReferenceDataControllerGetPermissions
     * @summary Get names of all permissions available for any given account
     * @request GET:/ref/v1/account/permissions
     */
    referenceDataControllerGetPermissions: (params: RequestParams = {}) =>
      this.request<PermissionDto[], any>({
        path: `/ref/v1/account/permissions`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  sub = {
    /**
     * No description
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerGetClaSubscriptions
     * @summary Lists all Dynatrace platform subscriptions of an account
     * @request GET:/sub/v1/accounts/{accountUuid}/subscriptions
     */
    limaClaControllerGetClaSubscriptions: (accountUuid: string, params: RequestParams = {}) =>
      this.request<ClaSubscriptionListDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerGetClaSubscriptionClusterDetails
     * @summary Lists all clusters of an account
     * @request GET:/sub/v1/accounts/{accountUuid}/clusters
     */
    limaClaControllerGetClaSubscriptionClusterDetails: (accountUuid: string, params: RequestParams = {}) =>
      this.request<ClaClusterListDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/clusters`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerGetClaSubscriptionEnvironmentDetails
     * @summary Lists all clusters of an account
     * @request GET:/sub/v1/accounts/{accountUuid}/environments
     */
    limaClaControllerGetClaSubscriptionEnvironmentDetails: (accountUuid: string, params: RequestParams = {}) =>
      this.request<ClaEnvironmentListDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/environments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description You can narrow down the output by specifying the timeframe during which the consumption happened.
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerGetProductLevelClaLicenseConsumptionData
     * @summary Gets the consumption of a subscription
     * @request GET:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/consumption
     */
    limaClaControllerGetProductLevelClaLicenseConsumptionData: (
      accountUuid: string,
      subscriptionId: number,
      query: {
        resolution: "HOURLY" | "DAILY" | "SUBSCRIPTION_MONTHLY" | "SUBSCRIPTION_YEARLY";
        from?: string;
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ConsumptionReturnListDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/consumption`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint is available only for Dynatrace Managed accounts.
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerGetClusterLevelClaLicenseConsumptionData
     * @summary Gets the cluster-level consumption of a subscription
     * @request GET:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/clusters/consumption
     */
    limaClaControllerGetClusterLevelClaLicenseConsumptionData: (
      accountUuid: string,
      subscriptionId: number,
      query: {
        clusterUuids?: string[];
        resolution: "HOURLY" | "DAILY" | "SUBSCRIPTION_MONTHLY" | "SUBSCRIPTION_YEARLY";
        from?: string;
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ClusterOrEnvironmentAggregatedReturnDto[], any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/clusters/consumption`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerGetTenantLevelClaLicenseConsumptionData
     * @summary Gets the environment-level consumption of a subscription
     * @request GET:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/environments/consumption
     */
    limaClaControllerGetTenantLevelClaLicenseConsumptionData: (
      accountUuid: string,
      subscriptionId: number,
      query: {
        environmentUuids?: string[];
        resolution: "HOURLY" | "DAILY" | "SUBSCRIPTION_MONTHLY" | "SUBSCRIPTION_YEARLY";
        from?: string;
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ClusterOrEnvironmentAggregatedReturnDto[], any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/environments/consumption`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerGetClaLicenseDetailsById
     * @summary Gets the active term of a subscription
     * @request GET:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/term
     */
    limaClaControllerGetClaLicenseDetailsById: (
      accountUuid: string,
      subscriptionId: number,
      params: RequestParams = {},
    ) =>
      this.request<ClaSubscriptionTermDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/term`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description [Limits](https://dt-url.net/yz03uq5) help you control the usage of your annual [commit](https://dt-url.net/i503u3z). If no limit is set, the commit is consumed until it is exhausted.
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerGetClaBudgetLimits
     * @summary Lists limits for a subscription
     * @request GET:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/limits
     */
    limaClaControllerGetClaBudgetLimits: (accountUuid: string, subscriptionId: number, params: RequestParams = {}) =>
      this.request<ClaBudgetLimitRecordListDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/limits`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description [Limits](https://dt-url.net/yz03uq5) help you control the usage of your annual [commit](https://dt-url.net/i503u3z). If no limit is set, the commit is consumed until it is exhausted. If the consumption on the cluster exceeds the limit, the cluster will stop the monitoring. The endpoint is available only for Dynatrace Managed accounts.
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerAddClaBudgetLimitForCluster
     * @summary Creates a limit for a cluster
     * @request POST:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/clusters/{clusterUuid}/limits
     */
    limaClaControllerAddClaBudgetLimitForCluster: (
      accountUuid: string,
      subscriptionId: number,
      clusterUuid: string,
      data: ClaBudgetLimitDto,
      params: RequestParams = {},
    ) =>
      this.request<ClaBudgetLimitRecordsDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/clusters/${clusterUuid}/limits`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description [Limits](https://dt-url.net/yz03uq5) help you control the usage of your annual [commit](https://dt-url.net/i503u3z). If no limit is set, the commit is consumed until it is exhausted. If the consumption on the cluster exceeds the limit, the cluster will stop the monitoring. The endpoint is available only for Dynatrace Managed accounts.
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerUpdateClaBudgetLimitForCluster
     * @summary Updates the limit for a cluster
     * @request PUT:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/clusters/{clusterUuid}/limits
     */
    limaClaControllerUpdateClaBudgetLimitForCluster: (
      accountUuid: string,
      subscriptionId: number,
      clusterUuid: string,
      data: ClaBudgetLimitDto,
      params: RequestParams = {},
    ) =>
      this.request<ClaBudgetLimitRecordsDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/clusters/${clusterUuid}/limits`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description [Limits](https://dt-url.net/yz03uq5) help you control the usage of your annual [commit](https://dt-url.net/i503u3z). If no limit is set, the commit is consumed until it is exhausted. If the consumption on the environment exceeds the limit, the environment will stop the monitoring.
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerAddClaBudgetLimitForEnvironment
     * @summary Creates a limit for an environment
     * @request POST:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/environments/{environmentUuid}/limits
     */
    limaClaControllerAddClaBudgetLimitForEnvironment: (
      accountUuid: string,
      subscriptionId: number,
      environmentUuid: string,
      data: ClaBudgetLimitDto,
      params: RequestParams = {},
    ) =>
      this.request<ClaBudgetLimitRecordsDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/environments/${environmentUuid}/limits`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description [Limits](https://dt-url.net/yz03uq5) help you control the usage of your annual [commit](https://dt-url.net/i503u3z). If no limit is set, the commit is consumed until it is exhausted. If the consumption on the environment exceeds the limit, the environment will stop the monitoring.
     *
     * @tags Dynatrace platform subscription
     * @name LimaClaControllerUpdateClaBudgetLimitForEnvironment
     * @summary Updates the limit for an environment
     * @request PUT:/sub/v1/accounts/{accountUuid}/subscriptions/{subscriptionId}/environments/{environmentUuid}/limits
     */
    limaClaControllerUpdateClaBudgetLimitForEnvironment: (
      accountUuid: string,
      subscriptionId: number,
      environmentUuid: string,
      data: ClaBudgetLimitDto,
      params: RequestParams = {},
    ) =>
      this.request<ClaBudgetLimitRecordsDto, any>({
        path: `/sub/v1/accounts/${accountUuid}/subscriptions/${subscriptionId}/environments/${environmentUuid}/limits`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
