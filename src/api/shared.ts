import { dynatraceUrlRegex, dynatraceTokenRegex } from "@dt-esa/platform-constants";
import { DynatraceConnection } from "../types/dynatrace-connection";

/**
 * 
 * @param environment 
 */
export const checkEnvironment = async (environment: DynatraceConnection, mode) => {
    if (!environment.token)
        throw "Connection Token is not present.";

    if (mode != 'env') {
        if (environment.baseUrl || environment.tenantId)
            throw "Tenant ID and Base URL may not be specified on this API interface.";
        if (!environment.url)
            throw "Connection URL is not present.";

        return;
    }

    if (!environment.url)
        throw "Connection URL is not present.";

    if (environment.url)
        environment.url = environment.url.trim();
    if (environment.baseUrl)
        environment.baseUrl = environment.baseUrl.trim();

    // Make sure the Environment URL is valid and correct.
    if (environment.url && !environment.url.startsWith("https://"))
        environment.url = "https://" + environment.url;

    if (environment.baseUrl && !environment.baseUrl.startsWith("https://"))
        environment.baseUrl = "https://" + environment.baseUrl;

    if (!environment.url.endsWith("/"))
        environment.url += "/";

    // TODO: Load balancers will break here
    if (!dynatraceUrlRegex.test(environment.url))
        throw 'You must provide a valid SaaS URL or Managed URL in the format "https://abc12345.live.dynatrace.com/" or "https://my.managed-dynatrace.local/e/12345678-1234-1234-1234-123456789abc/"';
    if (!dynatraceTokenRegex.test(environment.token))
        throw "Connection Token is not valid.";
}

/**
 * 
 * @param handler 
 * @param mode 
 */
// TODO: Also test token permissions
export const checkConnection = async (handler, mode?) => {
    const sTime = new Date().getTime();
    console.log("Connecting to your Dynatrace instance...");

    // Check if we can hit the Dynatrace API endpoint provided.
    let time = await handler.request({
        fullPath: 'time',
        method: "get"
    });

    let permissions = await handler.request({

    })

        .then(res => console.log('Connected to your Dynatrace instance in', (new Date().getTime() - sTime), 'ms'))
        .catch(err => console.error("Failed to connect to the Dynatrace API endpoint.", err))
}