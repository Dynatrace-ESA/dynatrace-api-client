import { DynatraceTenantAPI } from "..";
import test from 'ava';

// @ts-ignore
console.log("Running unit tests against tenant ", process.env['TENANT_URL']);

const paasAPI = new DynatraceTenantAPI({
    // @ts-ignore
    url: process.env['TENANT_URL'],
    // @ts-ignore
    token: process.env['TENANT_PAAS_TOKEN']
});

const api = new DynatraceTenantAPI({
    // @ts-ignore
    url: process.env['TENANT_URL'],
    // @ts-ignore
    token: process.env['TENANT_TOKEN']
});

test('Environment V1: Time', async t => {
    let time = await paasAPI.v1.time.getCurrentClusterTime();
    t.assert(typeof time == 'number');
    t.assert(time > 0);
});

test('Environment V1: ActiveGate Installer Versions', async t => {
    let data = await paasAPI.v1.deployment.getActiveGateInstallerAvailableVersions("unix");
    t.assert(data.availableVersions.length > 5);
});

test('Environment V1: ActiveGate Installer Connection Info', async t => {
    let data = await paasAPI.v1.deployment.getActiveGateInstallerConnectionInfo();

    t.assert(
        data.tenantToken &&
        data.tenantUUID  &&
        data.communicationEndpoints
    );
});

test('Environment V1: OneAgent Installer Versions', async t => {
    let data = await paasAPI.v1.deployment.getAgentInstallerAvailableVersions("unix", "default");
    t.assert(data.availableVersions.length > 5);
});

test('Environment V1: OneAgent Installer Connection Info', async t => {
    let data = await paasAPI.v1.deployment.getAgentInstallerConnectionInfo();
    t.assert(
        data.tenantToken &&
        data.tenantUUID &&
        data.communicationEndpoints &&
        data.formattedCommunicationEndpoints
    );
});

test('Environment V1: OneAgent Installer Connection Info Endpoints', async t => {
    let data = await paasAPI.v1.deployment.getAgentInstallerConnectionInfoEndpoints();

    t.assert(data);
});

test('Environment V1: OneAgent Installer Metadata Info', async t => {
    let data = await paasAPI.v1.deployment.getAgentInstallerMetaInfo("unix", "default");
    t.assert(data.latestAgentVersion);
});

test('Environment V1: OneAgent Installer Module Config', async t => {
    let data = await paasAPI.v1.deployment.getAgentProcessModuleConfig();
    t.assert(data.properties && data.revision);
});

test('Environment V1: Entity/Applications', async t => {
    let data = await api.v1.entity.getApplications();
    t.assert(Array.isArray(data));
});
