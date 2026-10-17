# More Array Methods

```js
[3, 1, 2].sort();               // [1, 2, 3]
[10, 9, 100].sort();            // [10, 100, 9]  <- sorts as strings!
[10, 9, 100].sort((a, b) => a - b); // [9, 10, 100]
[1, 2].concat([3]);             // [1, 2, 3]
["a", "b"].join("-");           // "a-b"
[1, 2, 3].reverse();            // [3, 2, 1]
[1, [2, [3]]].flat(Infinity);   // [1, 2, 3]
```

> **Coming up :** map, filter, reduce, find, some, every come in Level 6.

---
[← slice vs splice](../level-02-functions-arrays-objects/04-slice-vs-splice.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Objects →](../level-02-functions-arrays-objects/06-objects.md)
