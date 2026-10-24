# Shadowing

*A variable inside a block with the same name hides the outer one*

```js
var a = 100;
{
  var a = 10;
}
console.log(a);  // 10 !!
// same memory - outer value
// got overwritten
```

```js
let b = 100;
{
  let b = 20;
  console.log(b);  // 20
}
console.log(b);    // 100
// separate memories - safe
```

- Illegal : `let a = 1; { var a = 2; }` → SyntaxError (var tries to cross the block)
- Legal : var shadowed by let,  let shadowed by let

---
[← Types of Errors](../level-04-scope-let-const/06-types-of-errors.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Practice Set 4 →](../level-04-scope-let-const/08-practice-set-4.md)
