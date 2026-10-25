# Ways to Create a Function

```js
function a() {}                 // function statement / declaration (fully hoisted)
const b = function () {};       // function expression (anonymous)
const c = function xyz() {};    // named function expression - xyz only works inside
const d = () => {};             // arrow function
(function () { })();            // IIFE - runs immediately
```

- Only the **declaration** can be called before it is written (hoisting)
- **Anonymous** function = no name. Allowed only where a function is used as a value

---
[← Practice Set 4](../level-04-scope-let-const/07-practice-set-4.md) | [Level 5 index](README.md) | [All levels](../README.md) | [First-Class Functions →](../level-05-functions-deep-dive/02-first-class-functions.md)
