# os Module

*Info about your computer*

```js
const os = require("os");

os.platform();   // 'darwin'
os.cpus().length;// number of CPU cores
os.totalmem();   // total RAM (bytes)
os.freemem();    // free RAM (bytes)
os.homedir();    // '/Users/gagan'
os.uptime();     // seconds since computer started
```

---
[← fs/promises](../level-03-core-modules/04-fs-promises.md) | [Level 3 index](README.md) | [All levels](../README.md) | [events Module →](../level-03-core-modules/06-events-module.md)
