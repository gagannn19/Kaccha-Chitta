# Polyfill of map

*Write the built-in method yourself (common interview task)*

```js
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
[1, 2, 3].myMap((x) => x * 10);   // [10, 20, 30]
```

- **Array.prototype** - adding here gives the method to every array
- **this** = the array it was called on

---
[← Chaining](../level-06-map-filter-reduce/06-chaining.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Polyfill of filter & reduce →](../level-06-map-filter-reduce/08-polyfill-of-filter-reduce.md)
