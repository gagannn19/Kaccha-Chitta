# Ways to Create a Function

*There are 5 common ways to make a function in JS*

```js
function a() {}                 // 1. function declaration
const b = function () {};       // 2. function expression (anonymous)
const c = function xyz() {};    // 3. named function expression
const d = () => {};             // 4. arrow function
(function () { })();            // 5. IIFE
```

## 1. Function Declaration (Statement)

Starts with the word `function` + a name. It is **fully hoisted**.

- **Hoisting** = JS reads your file once *before* running it and remembers all variables & functions
- **Fully hoisted** = the *whole function* is remembered, not just its name. So you can call it even *above* the line where you wrote it

```js
a();             // ✅ works - prints "hi"
function a() { console.log("hi"); }
```

## 2. Function Expression

A function stored **inside a variable**, like a value.

- **Anonymous** = the function has **no name** of its own (`function () {}`). We call it using the variable name `b`
- Anonymous functions are allowed only where a function is used as a *value* (stored in a variable, passed to another function, etc.)
- **Not hoisted** - you can't call it before the line it is written on

```js
b();             // ❌ Error - b is not ready yet
const b = function () { console.log("hi"); };
b();             // ✅ works
```

```js
function () {}   // ❌ SyntaxError - a declaration must have a name
```

## 3. Named Function Expression

Same as above, but the function also has its own name (`xyz`).

- The name `xyz` works **only inside** the function (useful to call itself)
- Outside, you still use the variable name `c`

```js
const c = function xyz() { console.log(typeof xyz); };
c();             // "function" - xyz works inside
xyz();           // ❌ Error - xyz is not defined outside
```

## 4. Arrow Function

A shorter way to write a function expression, using `=>`.

```js
const add = (x, y) => x + y;   // returns x + y automatically
add(2, 3);       // 5
```

- Also **not** hoisted (it lives in a variable)
- Handles `this` differently - covered in [this: Normal vs Arrow](15-this-normal-vs-arrow.md)

## 5. IIFE

**I**mmediately **I**nvoked **F**unction **E**xpression = a function that **runs right away**, the moment it is created.

```js
(function () { console.log("ran!"); })();
//  ↑ wrap in ( ) to make it a value   ↑ ( ) at the end calls it
```

- More in [IIFE](13-iife.md)

> **Remember :** Only the **declaration** can be called before it is written. All the others live in a variable, so they must be created first.

---
[← Practice Set 4](../level-04-scope-let-const/07-practice-set-4.md) | [Level 5 index](README.md) | [All levels](../README.md) | [First-Class Functions →](../level-05-functions-deep-dive/02-first-class-functions.md)
