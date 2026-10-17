# Higher-Order Functions

*Takes a function OR returns a function*

```js
const radius = [1, 2, 3];
const area = (r) => Math.PI * r * r;
const diameter = (r) => 2 * r;

function calculate(arr, logic) {     // HOF - logic is a callback
  const output = [];
  for (const r of arr) output.push(logic(r));
  return output;
}
calculate(radius, area);
calculate(radius, diameter);         // reuse - no repeated loops (DRY)
```

> **Chain :** calculate is basically your own version of map. That's Level 6.

---
[← Callback Functions](../level-05-functions-deep-dive/03-callback-functions.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Closures →](../level-05-functions-deep-dive/05-closures.md)
