# Temporal Dead Zone

*From hoisting until the let/const line runs*

TDZ of a (console.log(a) → ReferenceError)let a = 10; (now usable)

- Accessing a variable inside its TDZ throws **ReferenceError**
- Declare let / const at the top to keep the TDZ tiny

---
[← let & const Hoisting](../level-04-scope-let-const/04-let-const-hoisting.md) | [Level 4 index](README.md) | [All levels](../README.md) | [let vs const vs var →](../level-04-scope-let-const/06-let-vs-const-vs-var.md)
