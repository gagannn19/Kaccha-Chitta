# path Module

*Work with file & folder paths safely*

```js
const path = require("path");

path.join(__dirname, "data", "users.json"); // /project/data/users.json
path.basename("/a/b/notes.txt");            // 'notes.txt'
path.extname("notes.txt");                  // '.txt'
path.dirname("/a/b/notes.txt");             // '/a/b'
path.resolve("app.js");                     // full absolute path
```

> Use `path.join()` instead of `"folder/" + "file"`. Windows uses `\` and Mac/Linux use `/`. path handles it.

---
[← Practice Set 2](../level-02-modules-npm/08-practice-set-2.md) | [Level 3 index](README.md) | [All levels](../README.md) | [fs : Read & Write Files →](../level-03-core-modules/02-fs-read-write-files.md)
