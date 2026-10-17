# Strings

*Text in quotes*

```js
const name = "Gagan";
const msg = `Hello ${name}, 2 + 2 = ${2 + 2}`;  // template literal

name.length;          // 5
name.toUpperCase();   // "GAGAN"
name.includes("ga");  // true
name.slice(0, 3);     // "Gag"
"a,b,c".split(",");   // ["a", "b", "c"]
"  hi  ".trim();      // "hi"
name.replace("G", "R"); // "Ragan"
```

> **Note :** Strings are immutable - methods return a NEW string, the original never changes.

---
[← Loops](../level-01-javascript-basics/12-loops.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Practice Set 1 →](../level-01-javascript-basics/14-practice-set-1.md)
