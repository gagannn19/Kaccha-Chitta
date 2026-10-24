# Spread & Rest

*Same ... , opposite jobs*

## Spread - opens up

*Takes an array / object and spreads its items out*

```js
const a = [1, 2];
const b = [...a, 3];          // [1, 2, 3]

const u = { name: "Aman" };
const u2 = { ...u, age: 22 }; // { name: "Aman", age: 22 }

Math.max(...[4, 9, 2]);       // 9
// same as -> Math.max(4, 9, 2)
```

## Rest - collects

*Gathers many values into one array*

```js
function sum(...nums) {       // sum(1, 2, 3) -> nums = [1, 2, 3]
  return nums.reduce((s, n) => s + n, 0);
}
sum(1, 2, 3);                 // 6

const [first, ...others] = [1, 2, 3];
// first = 1, others = [2, 3]
```

**How reduce works here** - it turns the array into one value

- **s** → the running total
- **n** → the current number
- **0** → the starting total
- Steps : 0 + 1 = 1 → 1 + 2 = 3 → 3 + 3 = **6**

> **Remember :** Spread spreads things OUT.  Rest gathers the REST of things IN.

---
[← Destructuring](../level-02-functions-arrays-objects/05-destructuring.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Primitive vs Reference →](../level-02-functions-arrays-objects/07-primitive-vs-reference.md)
