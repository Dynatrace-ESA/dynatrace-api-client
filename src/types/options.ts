import { ApiToken } from "../api/generated/env-v2"


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
export type TokenScope =
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
    | "logs.ingest";
export const knownScopes = [
    "InstallerDownload",
    "DataExport",
    "PluginUpload",
    "SupportAlert",
    "DcrumIntegration",
    "AdvancedSyntheticIntegration",
    "ExternalSyntheticIntegration",
    "AppMonIntegration",
    "RumBrowserExtension",
    "LogExport",
    "ReadConfig",
    "WriteConfig",
    "DTAQLAccess",
    "UserSessionAnonymization",
    "DataPrivacy",
    "CaptureRequestData",
    "Davis",
    "DssFileManagement",
    "RumJavaScriptTagManagement",
    "TenantTokenManagement",
    "ActiveGateCertManagement",
    "RestRequestForwarding",
    "ReadSyntheticData",
    "DataImport",
    "auditLogs.read",
    "metrics.read",
    "metrics.write",
    "entities.read",
    "entities.write",
    "problems.read",
    "problems.write",
    "events.read",
    "events.ingest",
    "networkZones.read",
    "networkZones.write",
    "activeGates.read",
    "activeGates.write",
    "activeGateTokenManagement.read",
    "activeGateTokenManagement.create",
    "activeGateTokenManagement.write",
    "credentialVault.read",
    "credentialVault.write",
    "extensions.read",
    "extensions.write",
    "extensionConfigurations.read",
    "extensionConfigurations.write",
    "extensionEnvironment.read",
    "extensionEnvironment.write",
    "metrics.ingest",
    "securityProblems.read",
    "securityProblems.write",
    "syntheticLocations.read",
    "syntheticLocations.write",
    "settings.read",
    "settings.write",
    "tenantTokenRotation.write",
    "slo.read",
    "slo.write",
    "releases.read",
    "apiTokens.read",
    "apiTokens.write",
    "openTelemetryTrace.ingest",
    "logs.read",
    "logs.ingest"
];


export type APIOptions = {
    /**
     * Custom axios-compatible request handler. 
     * TODO: Type correctly.
     */
    customAxios?: any,

    /**
     * 
     */
    headers?: { key: string, value: string }[] | { [key: string]: string },
    /**
     * Set to `true` to skip the tenant connectivity check.
     */
    skipConnectivityCheck?: boolean,
    /**
     * Set to `true` to skip checking the connection string URL/Token. 
     * Useful for a few niche scenarios. (namely API gateway). Generally this should be `false`.
     */
    skipConnectionStringCheck?: boolean,
    /**
     * Provide a list of token scopes that will be validated along with the connectivity check.
     * This is very useful as a flight-check to make sure that the application has a fully working 
     * connection between the application and the Dynatrace environment.
     */
    requiredTokenScopes?: TokenScope[],
    /**
     * Provide a logger interface for emitting log events to the client application. 
     */
    logger?: {
        info: (text: string) => void,
        warn: (text: string) => void,
        error: (text: string) => void
    }

    /**
     * Amount of time in ms to wait between 429 responses
     * default `1000`
     */
    retryDelay?: number
    
    /**
     * Amount of times to retry 429 transactions.
     * default `10`
     * set to `-1` to infinitely retry.
     */
    retryCount?: number
}

export type RequestOptions = {
    /**
     * Set to `false` to disable automatic pagination
     */
    paging?: boolean,
    /**
     * Set to handle each page of data as it's received. 
     * Will prevent memory buildup while fetching many entities.
     */
    onPageReceived?: (page: Object) => void
}
export type File = unknown;