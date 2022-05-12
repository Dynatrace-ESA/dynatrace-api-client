import { DynatraceTenantAPI } from ".."; 
require("dotenv").config();


// api.v1.oneagents.getHostsWithSpecificAgents().then(res => console.log(res)).catch(err => console.error(err));


(async() => {
    //.then(res => console.log(res)).catch(err => console.error(err));

    const api = new DynatraceTenantAPI({
        url: "",
        token: ""
    });

    let d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);
    const midnight = d.getTime();

    const errors = await api.v1.userSessionQueryLanguage.getAllUserErrors({ 
        startTimestamp: midnight - 24 * 60 * 60 * 1000,
        endTimestamp: midnight,
    }).catch(err => {
        debugger
    });

    debugger;

})().catch(console.error);
