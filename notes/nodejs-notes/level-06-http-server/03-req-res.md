# req & res

*Read the request, build the response*

```js
http.createServer((req, res) => {
  console.log(req.method); // 'GET'
  console.log(req.url);    // '/about?x=1'
  console.log(req.headers);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hi</h1>");
  res.end();               // must call end!
}).listen(3000);
```

> Forgot `res.end()`? The browser keeps **loading forever**.

---
[← Create a Server](../level-06-http-server/02-create-a-server.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Routing →](../level-06-http-server/04-routing.md)
