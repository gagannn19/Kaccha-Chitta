# First-Class Functions

*First-Class Functions means JavaScript treats functions like ordinary values (just like numbers, strings, and objects).*

```js
const sayHi = function () { return "Hi"; };   // 1. store in a variable

function run(fn) { return fn(); }             // 2. pass as an argument
run(sayHi);   // "Hi"

function maker() {                            // 3. return from a function
  return function () { return "made"; };
}
maker()();    // "made"
```

> Because functions are first-class, we get callbacks, higher-order functions & closures.

## Callback

A function you **give to another function**, so it can call it **later**.

```js
setTimeout(function () { console.log("done"); }, 1000);
//         ↑ this is the callback - runs after 1 second
```

## Higher-Order Function (HOF)

A function that **takes** a function or **returns** a function.

```js
[1, 2, 3].map(x => x * 2);   // map is a HOF → [2, 4, 6]
```

- `run` and `maker` above are also HOFs

## Closure

A function **remembers the variables** from where it was created, even after the outer function has finished.

```js
function counter() {
  let count = 0;
  return () => ++count;   // remembers count
}
const next = counter();
next();   // 1
next();   // 2
```

- More in [Callbacks](03-callback-functions.md), [HOF](04-higher-order-functions.md), [Closures](05-closures.md)

---
[← Ways to Create a Function](../level-05-functions-deep-dive/01-ways-to-create-a-function.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Callback Functions →](../level-05-functions-deep-dive/03-callback-functions.md)
