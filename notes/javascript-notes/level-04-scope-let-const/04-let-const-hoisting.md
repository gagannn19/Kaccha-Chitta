# let & const Hoisting

*They ARE hoisted - but locked*

```js
console.log(b);   // undefined
console.log(a);   // ReferenceError: Cannot access 'a' before initialization
let a = 10;
var b = 15;
```

**Global (window)** | Memory | Value | |---|---| | b | undefined | *Code :* var **Script** | Memory | Value | |---|---| | a | | *Code :* let / const

> **Note :** let & const are stored in a separate memory (Script) and can't be touched until their line runs.

---
[← Block Scope](../level-04-scope-let-const/03-block-scope.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Temporal Dead Zone →](../level-04-scope-let-const/05-temporal-dead-zone.md)
