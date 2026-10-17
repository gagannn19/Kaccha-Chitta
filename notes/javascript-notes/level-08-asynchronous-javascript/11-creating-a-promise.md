# Creating a Promise

```js
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (cart.length === 0) {
      reject(new Error("Cart is empty"));
      return;
    }
    setTimeout(() => resolve("ORD123"), 1000);   // pretend API call
  });
}
```

- **resolve(value)** - success,  **reject(error)** - failure

---
[← Promises](../level-08-asynchronous-javascript/10-promises.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Consuming a Promise →](../level-08-asynchronous-javascript/12-consuming-a-promise.md)
