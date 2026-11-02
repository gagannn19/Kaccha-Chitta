# Practice Set 3

**Q1 :** Write `"Hello"` to `hello.txt`, then read and print it

<details><summary>💡 Answer</summary>

```js
const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello");
const data = fs.readFileSync("hello.txt", "utf8");
console.log(data);   // Hello
```

</details>

**Q2 :** Do Q1 using `fs/promises` and `async / await`

<details><summary>💡 Answer</summary>

```js
const fs = require("fs/promises");

async function main() {
  await fs.writeFile("hello.txt", "Hello");
  const data = await fs.readFile("hello.txt", "utf8");
  console.log(data);   // Hello
}
main();
```

</details>

**Q3 :** Print all file names inside the current folder

<details><summary>💡 Answer</summary>

```js
const fs = require("fs");

const files = fs.readdirSync(".");
console.log(files);   // [ 'app.js', 'hello.txt', ... ]
```

</details>

**Q4 :** Use `path.join` to build the path of `data/users.json`

<details><summary>💡 Answer</summary>

```js
const path = require("path");

const file = path.join(__dirname, "data", "users.json");
console.log(file);   // /project/data/users.json
```

</details>

**Q5 :** Make an event `"login"` that prints `Welcome, <name>`

<details><summary>💡 Answer</summary>

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("login", (name) => console.log("Welcome, " + name));

emitter.emit("login", "Gagan");   // Welcome, Gagan
```

</details>

**Q6 :** Predict the order of output :

```js
fs.readFile("a.txt", () => console.log("A"));
console.log("B");
```

<details><summary>💡 Answer</summary>

`B A`

`readFile` is **async**, so Node doesn't wait. `B` prints first, `A` prints when the file is read.

</details>

---
[← events Module](../level-03-core-modules/06-events-module.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Single Threaded →](../level-04-how-node-js-works/01-single-threaded.md)
