# Practice Set 1

**Q1 :** Run a file that prints `Hello, Node!`

<details><summary>💡 Answer</summary>

```js
// app.js
console.log("Hello, Node!");
```

```bash
node app.js    # Hello, Node!
```

</details>

**Q2 :** Print the folder and full path of your file

<details><summary>💡 Answer</summary>

```js
console.log(__dirname);   // folder
console.log(__filename);  // full path of the file
```

</details>

**Q3 :** Run `node app.js Gagan` and print `Hi Gagan`

<details><summary>💡 Answer</summary>

```js
// app.js
const name = process.argv[2];   // 'Gagan'
console.log("Hi " + name);      // Hi Gagan
```

</details>

**Q4 :** Will `document.getElementById()` work in Node? Why?

<details><summary>💡 Answer</summary>

❌ No. `document` (the DOM) exists only in the **browser**. Node has no webpage, so there's no `document`.

</details>

**Q5 :** Use REPL to find `10 ** 3`

<details><summary>💡 Answer</summary>

```bash
$ node
> 10 ** 3
1000
```

</details>

---
[← process Object](../level-01-node-js-basics/06-process-object.md) | [Level 1 index](README.md) | [All levels](../README.md) | [What is a Module? →](../level-02-modules-npm/01-what-is-a-module.md)
