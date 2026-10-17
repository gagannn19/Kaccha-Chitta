# Memoization

*Remember results so you don't calculate twice*

```js
function memoize(fn) {
  const cache = {};               // kept alive by closure
  return function (n) {
    if (cache[n] !== undefined) return cache[n];   // from cache
    cache[n] = fn(n);
    return cache[n];
  };
}
const slowSquare = (n) => { /* heavy work */ return n * n; };
const fastSquare = memoize(slowSquare);
fastSquare(9);   // calculated
fastSquare(9);   // instantly from cache
```

---
[← Currying](../level-05-functions-deep-dive/11-currying.md) | [Level 5 index](README.md) | [All levels](../README.md) | [IIFE →](../level-05-functions-deep-dive/13-iife.md)
