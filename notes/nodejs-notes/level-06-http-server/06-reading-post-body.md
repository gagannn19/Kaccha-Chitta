# Reading POST Body

*The body comes in chunks (it's a stream!)*

```js
http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/users") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const user = JSON.parse(body);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ added: user }));
    });
  }
}).listen(3000);
```

> Express does this in one line : `app.use(express.json())`

---
[← Sending JSON](../level-06-http-server/05-sending-json.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Status Codes →](../level-06-http-server/07-status-codes.md)
