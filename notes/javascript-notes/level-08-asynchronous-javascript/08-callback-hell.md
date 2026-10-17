# Callback Hell

*Callbacks inside callbacks - the Pyramid of Doom*

```js
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWallet(function () {
        // ...and deeper
      });
    });
  });
});
```

- Code grows sideways → hard to read, debug & handle errors

---
[← Trust Issues with setTimeout](../level-08-asynchronous-javascript/07-trust-issues-with-settimeout.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Inversion of Control →](../level-08-asynchronous-javascript/09-inversion-of-control.md)
