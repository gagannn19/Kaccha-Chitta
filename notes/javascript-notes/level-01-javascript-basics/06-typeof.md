# typeof

*Check the type of a value*

```js
typeof "hi";        // "string"
typeof 42;          // "number"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object"   <- famous JS bug
typeof [1, 2];      // "object"
typeof function(){};// "function"
Array.isArray([1]); // true  <- correct way to check arrays
```

---
[← Data Types](../level-01-javascript-basics/05-data-types.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Operators →](../level-01-javascript-basics/07-operators.md)
