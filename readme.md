
#### Use VS Code and Typescript for typings.

A dependency map can be found [here](https://npmgraph.js.org/?q=@dt-esa/dynatrace-api-client).

---

Create an API instance
```typescript
const api = new DynatraceTenantAPI({
    url: process.env['TENANT_URL'],
    token: process.env['TENANT_TOKEN']
});
```

This will connect to the specified Dynatrace instance and validate that connectivity has been established. If there is a failure, said failure will be emitted via the global console object.


Make an API call
```typescript
(async () => {
    let hosts = await api.v1.entity.getHosts();
 
    let processes = await api.v1.entity.getProcesses();

    let myHost = await api.v1.entity.getSingleHost("HOST-1234567890abcdef");

    let data = await api.v1.entity.getApplications();
})();
```

### Environment API (v1, v2, config)
```typescript
const api = new DynatraceTenantAPI({
    url: process.env['TENANT_URL'],
    token: process.env['TENANT_TOKEN']
});
```

### Environment API V1
```typescript
const api = new DynatraceEnvironmentAPIV1({
    url: process.env['TENANT_URL'],
    token: process.env['TENANT_TOKEN']
});
```

### Environment API V2
```typescript
const api = new DynatraceEnvironmentAPIV2({
    url: process.env['TENANT_URL'],
    token: process.env['TENANT_TOKEN']
});
```

### Environment Config API
```typescript
const api = new DynatraceConfigurationAPI({
    url: process.env['TENANT_URL'],
    token: process.env['TENANT_TOKEN']
});
```

### Cluster Management API V1
```typescript
const cmc = new DynatraceClusterManagementAPIV1({
    url: process.env['CLUSTER_URL'],
    token: process.env['CLUSTER_TOKEN']
});
```

### Cluster Management API V2
```typescript
const cmc = new DynatraceClusterManagementAPIV2({
    url: process.env['CLUSTER_URL'],
    token: process.env['CLUSTER_TOKEN']
});
```

### Account Management API
```typescript
const iam = new DynatraceAccountManagementAPI({
    token: process.env['ACCOUNT_TOKEN']
});
```