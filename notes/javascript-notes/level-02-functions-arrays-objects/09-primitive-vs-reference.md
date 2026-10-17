# Primitive vs Reference

*How values are stored in memory*

```js
let a = 10;
let b = a;   b = 20;        // a is still 10  (copy of the VALUE)

let obj1 = { n: 1 };
let obj2 = obj1;  obj2.n = 99;  // obj1.n is 99 too! (copy of the ADDRESS)
```

**Stack**

| Variable | Value |
|---|---|
| a | 10 |
| b | 20 |
| obj1 | → 0x01 |
| obj2 | → 0x01 |

**Heap**

| Address | Object |
|---|---|
| 0x01 | { n: 99 } |

> **Why :** Both obj1 & obj2 hold the same address, so they point to the SAME object.

---
[← Spread & Rest](../level-02-functions-arrays-objects/08-spread-rest.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Shallow vs Deep Copy →](../level-02-functions-arrays-objects/10-shallow-vs-deep-copy.md)
