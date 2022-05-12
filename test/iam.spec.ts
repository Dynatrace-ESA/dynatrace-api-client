import { DynatraceTenantAPI } from "..";
// import test from 'ava';
import dotenv from 'dotenv';
dotenv.config();

// // @ts-ignore
// console.log("Running unit tests against tenant ", process.env['TENANT_URL']);

// const api = new DynatraceTenantAPI({
//     // @ts-ignore
//     url: process.env['TENANT_URL'],
//     // @ts-ignore
//     token: process.env['TENANT_TOKEN']
// });

// test('Environment V1: Time', async t => {
//     let time = await api.v1.time.getCurrentClusterTime();
//     t.assert(typeof time == 'number');
//     t.assert(time > 0);
// });

// test('true', async t => {
//     t.assert(true);
// });