# Spread & Rest

*Same ... , opposite jobs*

```js
// SPREAD - opens up
const a = [1, 2];
const b = [...a, 3];   // [1, 2, 3]

const u = { name: "Aman" };
const u2 = { ...u, age: 22 };

Math.max(...[4, 9, 2]); // 9
```

```js
// REST - collects
function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
sum(1, 2, 3);   // 6

const [first, ...others] = [1, 2, 3];
// first = 1, others = [2, 3]
```

> **Remember :** Spread spreads things OUT.  Rest gathers the REST of things IN.

---
[← Destructuring](../level-02-functions-arrays-objects/07-destructuring.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Primitive vs Reference →](../level-02-functions-arrays-objects/09-primitive-vs-reference.md)
