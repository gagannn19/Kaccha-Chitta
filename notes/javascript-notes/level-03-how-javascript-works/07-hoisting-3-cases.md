# Hoisting : 3 Cases

*Same idea, 3 different results*

## Case 1 : var

```js
console.log(a);    // undefined
var a = 1;
```

- **var** gets **undefined** in Phase 1, so reading it early is fine

## Case 2 : let / const

```js
console.log(b);    // ReferenceError
let b = 2;
```

- **let / const** are in the [TDZ](../level-03-how-javascript-works/06-temporal-dead-zone.md) until their line runs

## Case 3 : function expression

```js
sayHi();           // TypeError: sayHi is not a function
var sayHi = function () {};
```

- A function expression is **treated like a var**
- `sayHi` will hold a function, but before this line runs it holds **undefined**
- Calling `undefined()` → **TypeError**

> **Remember :** Only **function declarations** are fully hoisted with their code.

---
[← Temporal Dead Zone](../level-03-how-javascript-works/06-temporal-dead-zone.md) | [Level 3 index](README.md) | [All levels](../README.md) | [undefined vs not defined →](../level-03-how-javascript-works/08-undefined-vs-not-defined.md)
