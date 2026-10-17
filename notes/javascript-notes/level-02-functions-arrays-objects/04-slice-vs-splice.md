# slice vs splice

*The most confused pair*

```js
const a = [1, 2, 3, 4, 5];

a.slice(1, 3);     // [2, 3]   copy from index 1 to 3 (3 not included)
console.log(a);    // [1, 2, 3, 4, 5]  original safe

a.splice(1, 2);    // [2, 3]   removes 2 items from index 1
console.log(a);    // [1, 4, 5]        original CHANGED

a.splice(1, 0, 9); // insert 9 at index 1  -> [1, 9, 4, 5]
```

> **Remember :** sLice = Look (copy).  sPlice = sPoil (changes the array).

---
[← Arrays](../level-02-functions-arrays-objects/03-arrays.md) | [Level 2 index](README.md) | [All levels](../README.md) | [More Array Methods →](../level-02-functions-arrays-objects/05-more-array-methods.md)
