# Execution Context

*Everything in JS runs inside an Execution Context (EC)*

An EC is like a box with **2 parts** :

- **Memory** = Variable Environment - stores variables & functions as key : value
- **Code** = Thread of Execution - runs one line at a time, top to bottom

## Example

```js
var n = 2;
function square(x) {
  return x * x;
}
var ans = square(n);
```

```text
           Execution Context
┌─────────────────────┬─────────────────────┐
│       Memory        │        Code         │
│ (Variable Env.)     │ (Thread of Exec.)   │
├─────────────────────┼─────────────────────┤
│ n      : 2          │ var n = 2;          │
│ square : { ... }    │ function square ... │
│ ans    : 4          │ var ans = square(n);│
└─────────────────────┴─────────────────────┘
   key : value pairs      one line at a time
```

> **Remember :** JS is **synchronous & single-threaded** - one line at a time, in order.

---
[← Practice Set 2](../level-02-functions-arrays-objects/09-practice-set-2.md) | [Level 3 index](README.md) | [All levels](../README.md) | [The 2 Phases →](../level-03-how-javascript-works/02-the-2-phases.md)
