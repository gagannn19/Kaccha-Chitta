# Environment Variables

*Keep secrets out of your code*

Never write passwords / API keys directly in code. Put them in a **`.env`** file :

```
PORT=3000
DB_URL=mongodb://localhost:27017/shop
SECRET_KEY=abc123
```

```js
require("dotenv").config();      // npm i dotenv

const port = process.env.PORT || 3000;
console.log(process.env.DB_URL);
```

- Add **`.env` to `.gitignore`** ❗
- New Node versions : `node --env-file=.env app.js` (no package needed)

---
[← Practice Set 6](../level-06-http-server/08-practice-set-6.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Callbacks → Promises → async/await →](../level-07-real-world-node/02-callbacks-promises-async-await.md)
