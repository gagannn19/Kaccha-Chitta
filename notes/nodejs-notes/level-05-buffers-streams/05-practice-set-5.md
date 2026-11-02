# Practice Set 5

**Q1 :** Make a Buffer from `"Node"` and print it as text

<details><summary>💡 Answer</summary>

```js
const buf = Buffer.from("Node");
console.log(buf);              // <Buffer 4e 6f 64 65>
console.log(buf.toString());   // Node
```

</details>

**Q2 :** Why use a stream instead of `readFile` for a 2 GB file?

<details><summary>💡 Answer</summary>

- 🐘 `readFile` loads the **whole 2 GB into memory** at once → slow, may crash.
- 🚰 A stream reads it in **small chunks** → uses little memory and starts working right away.

</details>

**Q3 :** Read a file with a stream and count the chunks

<details><summary>💡 Answer</summary>

```js
const fs = require("fs");

const stream = fs.createReadStream("big.txt");
let count = 0;

stream.on("data", () => count++);
stream.on("end", () => console.log("Chunks :", count));
```

</details>

**Q4 :** Copy `a.txt` to `b.txt` using `pipe`

<details><summary>💡 Answer</summary>

```js
const fs = require("fs");

fs.createReadStream("a.txt").pipe(fs.createWriteStream("b.txt"));
```

</details>

---
[← pipe](../level-05-buffers-streams/04-pipe.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Client & Server →](../level-06-http-server/01-client-server.md)
