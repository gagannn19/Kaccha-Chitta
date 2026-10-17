# this : Normal vs Arrow

```js
const user = {
  name: "Aman",
  normal() { console.log(this.name); },
  arrow: () => console.log(this.name),
  later() {
    setTimeout(() => console.log(this.name), 100);   // arrow borrows this
  },
};
user.normal();   // "Aman"
user.arrow();    // undefined  - arrow has no own this
user.later();    // "Aman"
```

> **Rule :** Don't use arrow functions as object methods. DO use them inside methods for callbacks.

---
[← The this Keyword](../level-05-functions-deep-dive/14-the-this-keyword.md) | [Level 5 index](README.md) | [All levels](../README.md) | [call, apply & bind →](../level-05-functions-deep-dive/16-call-apply-bind.md)
