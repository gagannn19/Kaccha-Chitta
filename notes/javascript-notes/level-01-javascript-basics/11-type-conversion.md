# Type Conversion

*Changing one type to another*

---

```js
Number("42");     // 42
Number("abc");    // NaN  (Not a Number)
String(42);       // "42"
Boolean(1);       // true
parseInt("10px"); // 10
```

---

## 🔢 How `parseInt` works

It reads the string from **left to right** and keeps going as long as it sees digits. When it hits something that isn't a digit, it **stops** and returns what it has so far.

```
"10px"
 1 → digit, keep it     ✅
 0 → digit, keep it     ✅
 p → not a digit, STOP  🛑
Result: 10
```

---

## ⚡ Coercion (JS converts automatically)

```js
"5" + 2   // "52"  (+ with a string joins)
"5" - 2   // 3     (- converts to number)
"5" * "2" // 10
```

---
[← == vs ===](../level-01-javascript-basics/10-vs.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Conditionals →](../level-01-javascript-basics/12-conditionals.md)
