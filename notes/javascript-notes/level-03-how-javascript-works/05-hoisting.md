# Hoisting

*Using variables & functions before you write them*

```js
getName();         // Namaste JS
console.log(x);    // undefined

var x = 7;
function getName() {
  console.log("Namaste JS");
}
```

## After Phase 1

| Memory | Value |
|---|---|
| x | undefined |
| getName | { whole code } |

*Code :* getName() works / x is undefined

- **getName()** works - functions get their full code in Phase 1
- **x** is undefined - var gets undefined in Phase 1

> **Truth :** Hoisting is NOT moving code to the top. It is just Phase 1 reserving memory before anything runs.

---
[← Call Stack](../level-03-how-javascript-works/04-call-stack.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Temporal Dead Zone →](../level-03-how-javascript-works/06-temporal-dead-zone.md)
