# Temporal Dead Zone

*From hoisting until the let/const line runs*

```js
console.log(a);   // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a);   // 10
```

```text
┌──────────────────────────────┐
│ console.log(a);              │  ← TDZ of a (ReferenceError)
├──────────────────────────────┤
│ let a = 10;                  │  ← TDZ ends here
├──────────────────────────────┤
│ console.log(a);              │  ← usable (10)
└──────────────────────────────┘
```

- Accessing a variable inside its TDZ throws **ReferenceError**
- Declare let / const at the top to keep the TDZ tiny

## var vs let vs const in Phase 1

*In the Memory Creation phase, JS registers all variables, but initializes them differently*

| Keyword | In Phase 1 |
|---|---|
| **var** | initialized with **undefined** |
| **let** | **uninitialized** (TDZ) |
| **const** | **uninitialized** (TDZ) |

```js
console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError
var a = 10;
let b = 20;
const c = 30;
```

**Why?**

- **var** already holds undefined, so it can be read before its line
- **let / const** stay uninitialized until their line runs, so reading them early throws a **ReferenceError**

> **Remember :** All three are registered in memory (all are hoisted), they are just initialized differently.

> **Coming up :** Where let & const are stored (Script memory) is shown in Level 4.

---
[← Hoisting](../level-03-how-javascript-works/05-hoisting.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Hoisting : 3 Cases →](../level-03-how-javascript-works/07-hoisting-3-cases.md)
