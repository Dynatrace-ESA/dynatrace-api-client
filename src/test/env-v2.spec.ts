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

test('Environment V2: Events', async t => {
    let data = await api.v2.events.getEvents();
    t.assert(data.events);
});

test('Environment V2: Test', async t => {
    let data = await api.v2.securityProblems.getRemediationItems("11497873967941161718");

    
    
});

