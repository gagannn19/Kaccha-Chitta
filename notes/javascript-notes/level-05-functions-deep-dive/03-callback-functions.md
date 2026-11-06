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

**1. "Call me back when you're done"**

- You don't call the callback yourself - you **hand it over**, and the other function decides **when** to run it
- Like giving your number to a shop: *"call me when my order is ready"*. The shop calls you, not the other way round
- Above, `greet` decides to run the callback *after* saying "Hi"

**2. Callbacks are how JS does async work**

- **Async** = something that takes time, so JS doesn't wait for it - it moves on to the next line
- Some things take time: a **timer** (wait 2s), a **click** (wait for the user), a **network** request (wait for data from a server)
- So we give JS a callback: *"run this when it's finished"*

```js
console.log("1");
setTimeout(() => console.log("2"), 2000);   // wait 2s, then run the callback
console.log("3");
// 1
// 3
// 2   ← came last, JS didn't wait

button.addEventListener("click", () => console.log("clicked"));
// runs only when the user clicks
```

---
[← First-Class Functions](../level-05-functions-deep-dive/02-first-class-functions.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Higher-Order Functions →](../level-05-functions-deep-dive/04-higher-order-functions.md)
