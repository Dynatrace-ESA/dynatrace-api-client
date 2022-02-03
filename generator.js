// @ts-nocheck

const fs = require('fs');
const path = require('path');

const getFiles = source =>
    fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => !dirent.isDirectory())
        .map(dirent => dirent.name)


// ! Here be dragons.
// You shouldn't lightly touch this without understanding _why_ this has been done.
// If possible: Identify if there is a cleaner method of applying these patches.
const stringReplacementPatches = [
    {
        // Insert "include" at the start of the generated script.
        rx: /^\/\* eslint-disable \*\//,
        value: [
            "import { APIBase } from \"../../apibase\";",
            "import { RequestOptions as RequestParams } from \"@dt-esa/dynatrace-api-balancer\";"
        ].join('\n')
    },
    {
        // Make the API class extend our custom base.
        rx: /export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType>/,
        value: "export class Api extends APIBase"
    },
    {
        // Destroy the builtin HTTP Client
        rx: /export class HttpClient<SecurityDataType = unknown> \{(.|[\r\n])+?\n}/,
        value: ""
    },
    {
        // Remove extraneous ApiConfig object.
        rx: /export interface ApiConfig<SecurityDataType = unknown> \{(.|[\r\n])+?\n}/,
        value: ""
    },
    {
        // Remove extraneous HttpResponse object.
        rx: /export interface HttpResponse(.|[\r\n])+?\n}/,
        value: ""
    },


    // 
    {
        rx: /export type RequestParams = Omit<FullRequestParams, "body" \| "method" \| "query" \| "path">;/,
        value: ""
    },
    {
        rx: /export interface FullRequestParams extends Omit<RequestInit, "body"> {(.|[\r\n])+?\n}/,
        value: ""
    },
    {
        rx: /export type ResponseFormat = keyof Omit<Body, "body" \| "bodyUsed">;/,
        value: ""
    },
    {
        rx: /export type QueryParamsType = Record<string \| number, any>;/,
        value: ""
    },
    {
        rx: /type CancelToken = Symbol \| string \| number;/,
        value: ""
    },

    {
        // Remove extraneous HttpResponse object.
        rx: /DtaqlResultAsTree/g,
        value: "UsqlResultsAsTree"
    },
    {
        // Remove extraneous HttpResponse object.
        rx: /DtaqlResultAsTable/g,
        value: "UsqlResults"
    },
    // We implicitly decide on security contexts, so here we override the annotation and objects
    // that are passed between the contexts.
    {
        // Remove @secure annotations.
        rx: /\n\s+\* @secure/g,
        value: ""
    },
    {
        // Remove secure properties.
        rx: /\n\s+secure: (true|false),/g,
        value: ""
    }
]

const targetDir = __dirname + "/src/api/generated/";

getFiles(targetDir).forEach(file => {
    let fileText = fs.readFileSync(targetDir + file, {encoding: 'utf8'});

    stringReplacementPatches.forEach(replacer => {
        fileText = fileText.replace(replacer.rx, replacer.value);
    })

    fs.writeFileSync(targetDir + file, fileText);
});


