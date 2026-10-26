# nodemon

*Auto-restart the server when you save*

Normally you must stop and re-run `node app.js` after every change. **nodemon** does it for you.

```bash
npm i -D nodemon
npx nodemon app.js
```

Or add a script :

```json
"scripts": { "dev": "nodemon app.js" }
```

```bash
npm run dev
```

> New Node versions also have : `node --watch app.js`

---
[← node_modules & package-lock](../level-02-modules-npm/06-node-modules-package-lock.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Practice Set 2 →](../level-02-modules-npm/08-practice-set-2.md)
