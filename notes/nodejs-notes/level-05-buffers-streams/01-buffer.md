# Buffer

*Raw binary data (bytes)*

- Computers store everything as **bytes**.
- A **Buffer** holds raw bytes (images, videos, files).

```js
const buf = Buffer.from("Hi");
console.log(buf);            // <Buffer 48 69>
console.log(buf.toString()); // 'Hi'
console.log(buf.length);     // 2 (bytes)
```

> `readFile` without `"utf-8"` gives you a Buffer.

---
[← Practice Set 4](../level-04-how-node-js-works/06-practice-set-4.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Streams →](../level-05-buffers-streams/02-streams.md)
