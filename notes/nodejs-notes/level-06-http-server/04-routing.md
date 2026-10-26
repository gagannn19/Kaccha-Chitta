# Routing

*Different answer for different URLs*

```js
http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
}).listen(3000);
```

> This gets messy with many routes. **Express.js** makes it easy.

---
[← req & res](../level-06-http-server/03-req-res.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Sending JSON →](../level-06-http-server/05-sending-json.md)
