import { dynatraceTokenRegex } from "@dt-esa/platform-constants";
import { DynatraceEnvironmentAPIV2, DynatraceConfigurationAPI } from "..";
import { DynatraceConnection } from "../types/dynatrace-connection";
import { DynatraceEnvironmentAPIV1 } from "./env-v1";

/**
 * Dynatrace Tenant API
 * 
 * Single instance for interfacing any of the Dynatrace Tenant APIs.
 * - v1: DynatraceEnvironmentAPIV1
 * - v2: DynatraceEnvironmentAPIV2
 * - config: DynatraceConfigurationAPI
 */
export class DynatraceTenantAPI {
    v1: DynatraceEnvironmentAPIV1;
    v2: DynatraceEnvironmentAPIV2;
    config: DynatraceConfigurationAPI;

    constructor(protected environment: DynatraceConnection, testConnection = true, customAxios?) {

        this.v1 = new DynatraceEnvironmentAPIV1(environment, testConnection, customAxios);
        this.v2 = new DynatraceEnvironmentAPIV2(environment, false, customAxios);
        this.config = new DynatraceConfigurationAPI(environment, false, customAxios);
    }

    public useBase(url: string) {
        this.v1.useBase(url);
        this.v2.useBase(url);
        this.config.useBase(url);

        return this;
    }
    public useTenant(id: string) {
        this.v1.useTenant(id);
        this.v2.useTenant(id);
        this.config.useTenant(id);

        return this;
    }
    public useToken(token: string) {
        if (dynatraceTokenRegex.test(token)) {

            this.v1.useToken(token);
            this.v2.useToken(token);
            this.config.useToken(token);

            return this;
        }

        throw Error("Invalid Token: " + token);
    }
    public useUrl(url: string) {
        this.v1.useUrl(url);
        this.v2.useUrl(url);
        this.config.useUrl(url);

        return this;
    }
}