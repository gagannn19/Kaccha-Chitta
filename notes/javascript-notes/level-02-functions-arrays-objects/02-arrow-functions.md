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

- One line? Skip **{ }** and **return**
- Arrow functions have **no own this** - they borrow this from outside
- No **arguments** object
- Can't be used with **new**

> **Coming up :** The 'this' difference is explained in Level 5.

---
[← Functions](../level-02-functions-arrays-objects/01-functions.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Arrays →](../level-02-functions-arrays-objects/03-arrays.md)
