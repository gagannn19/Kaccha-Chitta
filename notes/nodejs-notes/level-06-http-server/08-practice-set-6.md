# Practice Set 6

**Q1 :** Make a server on port `4000` that says `Hello`

<details><summary>💡 Answer</summary>

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(4000, () => console.log("Running on 4000"));
```

</details>

**Q2 :** Add routes `/`, `/about`, `/contact` and a 404 page

<details><summary>💡 Answer</summary>

```js
const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/") res.end("Home");
  else if (req.url === "/about") res.end("About");
  else if (req.url === "/contact") res.end("Contact");
  else {
    res.statusCode = 404;
    res.end("Page not found");
  }
}).listen(4000);
```

</details>

**Q3 :** `/api/time` should send `{ "time": "<current time>" }` as JSON

<details><summary>💡 Answer</summary>

```js
if (req.url === "/api/time") {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ time: new Date().toLocaleTimeString() }));
}
```

</details>

**Q4 :** Read a `POST` body and send it back

<details><summary>💡 Answer</summary>

```js
if (req.method === "POST") {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => res.end("You sent : " + body));
}
```

</details>

**Q5 :** What status code for : user not logged in? item created? server crash?

<details><summary>💡 Answer</summary>

| Case | Code |
|---|---|
| 🔒 user not logged in | `401` Unauthorized |
| ✅ item created | `201` Created |
| 💥 server crash | `500` Internal Server Error |

</details>

---
[← Status Codes](../level-06-http-server/07-status-codes.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Environment Variables →](../level-07-real-world-node/01-environment-variables.md)
