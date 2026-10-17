# find, some, every, forEach

```js
const nums = [3, 8, 12, 5];
nums.find((n) => n > 5);       // 8       first match (or undefined)
nums.findIndex((n) => n > 5);  // 1
nums.some((n) => n > 10);      // true    at least one?
nums.every((n) => n > 1);      // true    all of them?
nums.forEach((n) => console.log(n));   // just loops, returns undefined
```

> **Careful :** forEach returns nothing - use map when you want a new array.

---
[← reduce Examples](../level-06-map-filter-reduce/04-reduce-examples.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Chaining →](../level-06-map-filter-reduce/06-chaining.md)
