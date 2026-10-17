# Fix it with var

*Use a function to create a new scope each round*

```js
for (var i = 1; i <= 3; i++) {
  function close(x) {             // x is a NEW variable every call
    setTimeout(() => console.log(x), x * 1000);
  }
  close(i);
}
// 1 2 3
```

> **Why 4 4 4 :** Callbacks run AFTER the loop ends (Level 8 explains why). With var there is only one i, which is 4 by then.

---
[← setTimeout + Closure](../level-05-functions-deep-dive/08-settimeout-closure.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Uses of Closures →](../level-05-functions-deep-dive/10-uses-of-closures.md)
