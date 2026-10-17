# Type Conversion

*Changing one type to another*

```js
Number("42");     // 42
Number("abc");    // NaN  (Not a Number)
String(42);       // "42"
Boolean(1);       // true
parseInt("10px"); // 10

// Coercion - JS converts automatically
"5" + 2   // "52"  (+ with a string joins)
"5" - 2   // 3     (- converts to number)
"5" * "2" // 10
```

---
[← == vs ===](../level-01-javascript-basics/08-vs.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Truthy & Falsy →](../level-01-javascript-basics/10-truthy-falsy.md)
