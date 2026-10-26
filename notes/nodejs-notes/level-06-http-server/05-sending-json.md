# Sending JSON

*How APIs send data*

```js
const users = [{ id: 1, name: "Gagan" }];

http.createServer((req, res) => {
  if (req.url === "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
}).listen(3000);
```

- `JSON.stringify()` → object to text (to send)
- `JSON.parse()` → text to object (to read)

---
[← Routing](../level-06-http-server/04-routing.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Reading POST Body →](../level-06-http-server/06-reading-post-body.md)
