# process Object

*Info & control of the running program*

```js
// node app.js gagan 25
console.log(process.argv);
// [ '/usr/bin/node', '/path/app.js', 'gagan', '25' ]

const name = process.argv[2];   // 'gagan'

console.log(process.platform);  // 'darwin' / 'win32' / 'linux'
console.log(process.cwd());     // folder you ran the command from

process.exit(0);                // stop the program (0 = success)
```

- `process.argv` → array of command-line words
- `process.env` → secret keys / settings (Level 7)

---
[← Global Objects](../level-01-node-js-basics/05-global-objects.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Practice Set 1 →](../level-01-node-js-basics/07-practice-set-1.md)
