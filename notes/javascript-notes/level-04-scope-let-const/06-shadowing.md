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

## Legal vs Illegal shadowing

### ✅ Legal

**let shadowed by let**

```js
let a = 1;
{
  let a = 2;
  console.log(a);  // 2
}
console.log(a);    // 1
```

**var shadowed by let**

```js
var a = 1;
{
  let a = 2;
  console.log(a);  // 2
}
console.log(a);    // 1
```

**let shadowed by var - inside a function**

```js
let a = 1;
function f() {
  var a = 2;       // var stops at the function wall
  console.log(a);  // 2
}
f();
console.log(a);    // 1
```

### ❌ Illegal

**let shadowed by var - inside a block**

```js
let a = 1;
{
  var a = 2;       // SyntaxError: Identifier 'a' has already been declared
}
```

- var ignores the `{ }` block, so it tries to go **out** to where `let a` already lives
- Same name declared twice in one place → SyntaxError
- Same for `const a = 1; { var a = 2; }`

| Outer | Inner | In a { } block | In a function |
|---|---|---|---|
| let | let | ✅ | ✅ |
| var | let | ✅ | ✅ |
| let | var | ❌ | ✅ |

> **Remember :** Only one case is illegal : `var` inside a block, with an outer `let` / `const` of the same name. var leaks out of the block and clashes with it.

---
[← Types of Errors](../level-04-scope-let-const/05-types-of-errors.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Practice Set 4 →](../level-04-scope-let-const/07-practice-set-4.md)
