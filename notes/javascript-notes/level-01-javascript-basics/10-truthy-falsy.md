# Truthy & Falsy

*Every value is treated as true or false in a condition*

- **Falsy** (only 8)
- false
- 0, -0, 0n
- "" (empty string)
- null
- undefined
- NaN

- **Truthy** (everything else)
- "0", "false"
- [ ] (empty array)
- { } (empty object)
- any number except 0
- functions

```js
if ("") console.log("never runs");
const name = userInput || "Guest";  // default value
```

---
[← Type Conversion](../level-01-javascript-basics/09-type-conversion.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Conditionals →](../level-01-javascript-basics/11-conditionals.md)
