# let & const Hoisting

*They ARE hoisted - but locked*

```js
console.log(b);   // undefined
console.log(a);   // ReferenceError: Cannot access 'a' before initialization
let a = 10;
var b = 15;
```

## Where they are stored (after Phase 1)

**Global (window)** - for var

| Memory | Value |
|---|---|
| b | undefined |

**Script** - for let / const

| Memory | Value |
|---|---|
| a | *uninitialized* |

- **var b** → stored on **window** with **undefined**, so reading it early gives undefined
- **let a** → stored in a **separate memory (Script)**, with no value yet, so reading it early gives a **ReferenceError**
- Once the `let a = 10;` line runs, `a` gets its value and can be used

> **Note :** You can see this yourself : put a breakpoint on line 1 in Chrome DevTools and check the **Scope** panel - you'll find **Script** and **Global**.

> **Remember :** let & const are hoisted, but they stay locked (in the [TDZ](../level-03-how-javascript-works/06-temporal-dead-zone.md)) until their line runs.

---
[← Block Scope](../level-04-scope-let-const/03-block-scope.md) | [Level 4 index](README.md) | [All levels](../README.md) | [let vs const vs var →](../level-04-scope-let-const/05-let-vs-const-vs-var.md)
