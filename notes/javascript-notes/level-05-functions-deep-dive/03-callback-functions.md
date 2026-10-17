# Callback Functions

*A function passed into another function, to be called later*

```js
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}
greet("Aman", function () {
  console.log("Callback ran");
});
// Hi Aman
// Callback ran

setTimeout(() => console.log("after 2s"), 2000);  // async callback
```

- You give control to another function and say **"call me back when you're done"**
- Callbacks are how JS does async work (timers, clicks, network)

---
[← First-Class Functions](../level-05-functions-deep-dive/02-first-class-functions.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Higher-Order Functions →](../level-05-functions-deep-dive/04-higher-order-functions.md)
