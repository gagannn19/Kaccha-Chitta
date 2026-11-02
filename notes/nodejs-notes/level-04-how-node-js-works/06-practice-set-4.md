# Practice Set 4

**Q1 :** Is Node single-threaded? Explain in one line.

<details><summary>💡 Answer</summary>

Your JS runs on **one thread**, but heavy async work (files, network) is done in the background by **libuv**.

</details>

**Q2 :** Explain blocking vs non-blocking with the waiter example

<details><summary>💡 Answer</summary>

- 🧍 **Blocking :** the waiter takes your order and **stands in the kitchen** until the food is ready. Other customers wait.
- 🏃 **Non-blocking :** the waiter gives the order to the kitchen and **serves other tables**. When the food is ready, it's brought to you.

Node is the **non-blocking** waiter.

</details>

**Q3 :** What is libuv?

<details><summary>💡 Answer</summary>

A **C library** inside Node that gives the **event loop**, the **thread pool** and async I/O (files, network).

</details>

**Q4 :** Predict the output :

```js
setTimeout(() => console.log("A"), 0);
process.nextTick(() => console.log("B"));
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

<details><summary>💡 Answer</summary>

`D B C A`

1. `D` → normal code runs first
2. `B` → `nextTick` runs right after the current code
3. `C` → promises next
4. `A` → `setTimeout` runs last, in the event loop

</details>

---
[← nextTick vs setImmediate](../level-04-how-node-js-works/05-nexttick-vs-setimmediate.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Buffer →](../level-05-buffers-streams/01-buffer.md)
