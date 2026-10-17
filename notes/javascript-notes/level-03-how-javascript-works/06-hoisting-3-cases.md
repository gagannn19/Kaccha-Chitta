# Hoisting : 3 Cases

```js
console.log(a);    // undefined            -> var gets undefined
var a = 1;

console.log(b);    // ReferenceError       -> let / const are in TDZ (Level 4)
let b = 2;

sayHi();           // TypeError: sayHi is not a function
var sayHi = function () {};   // function expression = treated like a var
```

- Only **function declarations** are fully hoisted with their code

---
[← Hoisting](../level-03-how-javascript-works/05-hoisting.md) | [Level 3 index](README.md) | [All levels](../README.md) | [undefined vs not defined →](../level-03-how-javascript-works/07-undefined-vs-not-defined.md)
