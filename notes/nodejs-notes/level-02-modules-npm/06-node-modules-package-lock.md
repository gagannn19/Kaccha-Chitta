# node_modules & package-lock

*Where packages live*

- **node_modules/** → folder with all installed package code. Very big.
- **package-lock.json** → saves the **exact** version of every package, so everyone gets the same code.

**Never push `node_modules` to GitHub.** Add it to `.gitignore` :

```
node_modules/
```

Someone clones your project? They just run :

```bash
npm install    # reads package.json and installs everything
```

**Version `^4.19.2`** → `4` major · `19` minor · `2` patch. `^` = allow minor & patch updates.

---
[← package.json](../level-02-modules-npm/05-package-json.md) | [Level 2 index](README.md) | [All levels](../README.md) | [nodemon →](../level-02-modules-npm/07-nodemon.md)
