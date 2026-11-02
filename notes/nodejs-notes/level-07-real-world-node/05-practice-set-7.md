# Practice Set 7

**Q1 :** Read `PORT` from a `.env` file and start a server on it

<details><summary>💡 Answer</summary>

```
# .env
PORT=5000
```

```js
require("dotenv").config();   // npm i dotenv
const http = require("http");

const port = process.env.PORT || 3000;
http.createServer((req, res) => res.end("Hi")).listen(port, () =>
  console.log("Running on " + port)
);
```

> Node 20+ can also do : `node --env-file=.env app.js` (no package needed).

</details>

**Q2 :** Convert a callback-based `fs.readFile` into a promise with `util.promisify`

<details><summary>💡 Answer</summary>

```js
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

readFile("a.txt", "utf8").then((data) => console.log(data));
```

</details>

**Q3 :** Read a missing file with `async / await` and print a nice error

<details><summary>💡 Answer</summary>

```js
const fs = require("fs/promises");

async function main() {
  try {
    const data = await fs.readFile("missing.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log("❌ File not found!");
  }
}
main();
```

</details>

**Q4 :** Why should `.env` never be pushed to GitHub?

<details><summary>💡 Answer</summary>

It holds **secrets** (passwords, API keys). On GitHub, anyone could see and misuse them. Add `.env` to `.gitignore`.

</details>

**Q5 :** Mini project : a server where `/notes` sends the content of `notes.txt`

<details><summary>💡 Answer</summary>

```js
const http = require("http");
const fs = require("fs/promises");

http.createServer(async (req, res) => {
  if (req.url === "/notes") {
    try {
      const data = await fs.readFile("notes.txt", "utf8");
      res.end(data);
    } catch {
      res.statusCode = 500;
      res.end("Could not read notes");
    }
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
}).listen(3000);
```

</details>

---
[← Project Structure](../level-07-real-world-node/04-project-structure.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Interview Questions →](../level-08-top-interview-questions/01-interview-questions.md)
