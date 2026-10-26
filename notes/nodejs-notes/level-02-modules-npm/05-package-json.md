# package.json

*The ID card of your project*

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

- **dependencies** → needed to **run** the app
- **devDependencies** → needed only while **coding** (`npm i -D nodemon`)
- **scripts** → shortcuts : `npm start`, `npm run dev`

---
[← npm](../level-02-modules-npm/04-npm.md) | [Level 2 index](README.md) | [All levels](../README.md) | [node_modules & package-lock →](../level-02-modules-npm/06-node-modules-package-lock.md)
