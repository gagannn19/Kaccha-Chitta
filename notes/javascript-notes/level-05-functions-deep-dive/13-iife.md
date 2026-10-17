# IIFE

*Immediately Invoked Function Expression*

```js
(function () {
  const secret = 42;
  console.log("runs once, right away");
})();

(() => console.log("arrow IIFE"))();
```

- Creates a private scope - variables don't leak into global
- Used before let/const & modules existed to avoid global pollution

---
[← Memoization](../level-05-functions-deep-dive/12-memoization.md) | [Level 5 index](README.md) | [All levels](../README.md) | [The this Keyword →](../level-05-functions-deep-dive/14-the-this-keyword.md)
