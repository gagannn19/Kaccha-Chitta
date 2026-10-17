# Consuming a Promise

```js
createOrder(["shoes"])
  .then(function (orderId) {
    console.log("Order:", orderId);
    return proceedToPayment(orderId);   // RETURN the next promise
  })
  .then((payment) => console.log(payment))
  .catch((err) => console.log(err.message))   // handles ANY error above
  .finally(() => console.log("always runs"));
```

> **Fixed :** Flat chain instead of a pyramid, and WE call the next step - control is back with us.

---
[← Creating a Promise](../level-08-asynchronous-javascript/11-creating-a-promise.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Promise APIs →](../level-08-asynchronous-javascript/13-promise-apis.md)
