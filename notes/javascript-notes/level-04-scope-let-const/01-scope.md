# Scope

*Where a variable is visible*

```js
var g = 1;

function a() {
  var b = 2;

  function c() {
    console.log(g, b);   // 1 2   c can see b and g
  }
  c();
}
a();

console.log(b);          // ReferenceError   global can't see inside a()
```

```text
┌─ Global scope ─────────────────────────────────┐
│ var g = 1;                                     │
│                                                │
│ ┌─ function a() ─────────────────────────────┐ │
│ │ var b = 2;                                 │ │
│ │                                            │ │
│ │ ┌─ function c()  (inner) ────────────────┐ │ │
│ │ │ console.log(g, b);  // 1 2             │ │ │
│ │ └────────────────────────────────────────┘ │ │
│ └────────────────────────────────────────────┘ │
└────────────────────────────────────────────────┘
```

- Each box can see **outward** (its own box + every box around it)
- No box can see **inward** (into a smaller box)
- **Lexical scope** - Lexical scope means JavaScript determines which variables a function can access based on where the function is written in the code, not where it is called.

---
[← Practice Set 3](../level-03-how-javascript-works/10-practice-set-3.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Scope Chain →](../level-04-scope-let-const/02-scope-chain.md)
