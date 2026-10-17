# Block Scope

*A block is anything inside { }*

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a);   // 10
console.log(b);   // ReferenceError: b is not defined
```

**Global**

| Memory | Value |
|---|---|
| a | 10 |

*Code :* var lives here

**Block**

| Memory | Value |
|---|---|
| b | 20 |
| c | 30 |

*Code :* deleted after the block

- **let / const** = block scoped.  **var** = function scoped (ignores blocks)

---
[← Scope Chain](../level-04-scope-let-const/02-scope-chain.md) | [Level 4 index](README.md) | [All levels](../README.md) | [let & const Hoisting →](../level-04-scope-let-const/04-let-const-hoisting.md)
