# Types of Errors

- **SyntaxError** - code is written wrong, nothing runs. e.g. `let a = 1; let a = 2;`, `const b;`
- **ReferenceError** - variable not found or in TDZ. e.g. `x is not defined`
- **TypeError** - wrong use of a value. e.g. `const c = 1; c = 2;`, `undefined()`
- **RangeError** - value out of range. e.g. `new Array(-1)`, infinite recursion

---
[← let vs const vs var](../level-04-scope-let-const/05-let-vs-const-vs-var.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Shadowing →](../level-04-scope-let-const/07-shadowing.md)
