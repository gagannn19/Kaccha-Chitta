# Inversion of Control

*The second problem with callbacks*

```js
createOrder(cart, function () {
  proceedToPayment();     // we TRUST createOrder to call this
});
```

- We hand our code to another function and lose control over it
- What if it never calls it? Calls it twice? Throws an error?

> **Example :** Giving your house keys to a stranger and hoping they lock up. Promises fix both problems.

---
[← Callback Hell](../level-08-asynchronous-javascript/08-callback-hell.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Promises →](../level-08-asynchronous-javascript/10-promises.md)
