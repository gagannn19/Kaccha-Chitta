# Scope

*Where a variable is visible*

```
[Global scope]
   var g = 1
   [function a()]
      var b = 2
      [function c()]
         console.log(g, b) → 1 2
```

- Inner can see outer.  Outer can NOT see inner
- **Lexical scope** - scope is decided by WHERE the code is written, not where it is called

---
[← Practice Set 3](../level-03-how-javascript-works/10-practice-set-3.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Scope Chain →](../level-04-scope-let-const/02-scope-chain.md)
