# Arrow Functions

*Shorter syntax, with one big difference*

```js
// normal
function double(x) {
  return x * 2;
}

// arrow
const double = (x) => x * 2;

// one param - no ( ) needed
const half = x => x / 2;
```

* One expression: You can skip {} and return.
* Multiple statements: Use {} and write return explicitly if you want to return a value.

---
[← Functions](../level-02-functions-arrays-objects/01-functions.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Arrays →](../level-02-functions-arrays-objects/03-arrays.md)
