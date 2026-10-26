# Create a Server

*Your first server*

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from server!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

- The function runs **for every request**.
- `req` → what the client sent
- `res` → what you send back
- Open `http://localhost:3000` in the browser.

---
[← Client & Server](../level-06-http-server/01-client-server.md) | [Level 6 index](README.md) | [All levels](../README.md) | [req & res →](../level-06-http-server/03-req-res.md)
