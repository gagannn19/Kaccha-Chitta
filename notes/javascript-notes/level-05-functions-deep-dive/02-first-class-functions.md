# First-Class Functions

*Functions are values - like numbers or strings*

```js
const sayHi = function () { return "Hi"; };   // 1. store in a variable

function run(fn) { return fn(); }             // 2. pass as an argument
run(sayHi);   // "Hi"

function maker() {                            // 3. return from a function
  return function () { return "made"; };
}
maker()();    // "made"
```

> **Chain :** Because functions are first-class, we get callbacks, higher-order functions & closures.

---
[← Ways to Create a Function](../level-05-functions-deep-dive/01-ways-to-create-a-function.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Callback Functions →](../level-05-functions-deep-dive/03-callback-functions.md)
