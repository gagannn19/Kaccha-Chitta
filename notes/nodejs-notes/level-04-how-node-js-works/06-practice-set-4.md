# Practice Set 4

- **Q1 :** Is Node single-threaded? Explain in one line.
- **Q2 :** Explain blocking vs non-blocking with the waiter example
- **Q3 :** What is libuv?
- **Q4 :** Predict the output :

```js
setTimeout(() => console.log("A"), 0);
process.nextTick(() => console.log("B"));
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

<details><summary>Answer</summary>

`D B C A`

</details>

---
[← nextTick vs setImmediate](../level-04-how-node-js-works/05-nexttick-vs-setimmediate.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Buffer →](../level-05-buffers-streams/01-buffer.md)
