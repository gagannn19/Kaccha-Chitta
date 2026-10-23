# Data Types

**1. Primitive** (single value)
- String - `"hello"`
- Number - `42, 3.14`
- Boolean - `true / false`
- undefined - declared, no value
```js
let age;
console.log(age); // undefined
```
- null - Intentionally represents no value
```js
let age = null;
console.log(age); // null
```
- BigInt - `123n` (read more about it [BigInt](../level-01-javascript-basics/06-symbol-bigint.md))
- Symbol - unique id (read more about it [Symbol](../level-01-javascript-basics/06-symbol-bigint.md))

**2. Non-Primitive(Reference)** (collection)

- Object - `{ name: "Aman" }`
- Array - `[1, 2, 3]`
- Function - `function () {}`
- Arrays & functions are also objects

---
[← Variables](../level-01-javascript-basics/04-variables.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Symbol & BigInt →](../level-01-javascript-basics/06-symbol-bigint.md)
