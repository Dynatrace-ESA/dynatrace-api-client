import { DynatraceTenantAPI } from "..";
import test from 'ava';

// @ts-ignore
console.log("Running unit tests against tenant ", process.env['TENANT_URL']);

const api = new DynatraceTenantAPI({
    // @ts-ignore
    url: process.env['TENANT_URL'],
    // @ts-ignore
    token: process.env['TENANT_TOKEN']
});

test('Environment Config: Notifications', async t => {
    let data = await api.config.notifications.listNotificationConfigs();
    
    t.assert(data.values.length > 0);
});

