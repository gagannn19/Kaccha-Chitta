# Conditionals

*Make decisions*

```js
let marks = 75;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else {
  console.log("C");
}
// B
```

```js
// Ternary
let msg = age >= 18 ? "Adult" : "Minor";

// Switch
switch (day) {
  case "Sat":
  case "Sun":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
```

---
[← Truthy & Falsy](../level-01-javascript-basics/10-truthy-falsy.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Loops →](../level-01-javascript-basics/12-loops.md)
