# Level 11 : Top 57 Interview Questions

## Q1. What is JavaScript & what does single-threaded mean?

A dynamically typed language for the web (and servers via Node.js). Single-threaded = one call stack, so it runs one task at a time. Async work is handled by the browser + event loop.

## Q2. Difference between var, let and const?

var : function scoped, re-declarable, hoisted as undefined, attaches to window. let : block scoped, re-assignable, in TDZ until declared. const : like let but can't be re-assigned (object contents can still change).

```js
const a = [1];
a.push(2);   // OK
a = [3];     // TypeError
```

## Q3. What are the data types in JS?

Primitives (copied by value) : string, number, boolean, undefined, null, bigint, symbol. Reference (copied by address) : object - including arrays & functions.

## Q4. Difference between == and ===?

== converts types before comparing (coercion). === compares value AND type. Always prefer ===.

```js
0 == "0"    // true
0 === "0"   // false
null == undefined  // true
```

## Q5. null vs undefined?

undefined : declared but no value yet (JS sets it). null : empty on purpose (you set it). typeof null is 'object' - an old bug.

```js
let a;          // undefined
let b = null;   // empty on purpose
```

## Q6. What is hoisting?

In the memory phase, JS reserves memory before running code. var gets undefined, function declarations get their full code, let / const are hoisted but stay in the TDZ.

```js
f();             // works
console.log(x);  // undefined
var x = 1;
function f() {}
```

## Q7. What is the Temporal Dead Zone?

The time between a let / const being hoisted and its declaration line running. Accessing it there throws ReferenceError.

```js
console.log(a);  // ReferenceError
let a = 5;
```

## Q8. What is an Execution Context?

The environment where code runs. It has a Memory part (variable environment) and a Code part (thread of execution). It is created in 2 phases : memory creation and code execution.

## Q9. What is the Call Stack?

A stack that tracks which execution context is running. Function call = push, return = pop. GEC sits at the bottom.

## Q10. What is scope & the scope chain?

Scope = where a variable is accessible (global, function, block). If a variable isn't in local scope, JS looks in the parent's lexical environment, then its parent... up to global. That chain is the scope chain.

## Q11. What is lexical scope?

Scope is decided by where a function is WRITTEN in the code, not where it is called.

```js
const x = 1;
function a() { console.log(x); }
function b() { const x = 2; a(); }
b();   // 1
```

## Q12. What is a closure?

A function bundled with its lexical environment. The inner function remembers the outer variables even after the outer function has returned.

```js
function outer() {
  let n = 0;
  return () => ++n;
}
const inc = outer();
inc(); inc();   // 2
```

## Q13. Uses & disadvantages of closures?

Uses : data privacy, module pattern, currying, memoization, debounce / throttle, setTimeout. Disadvantage : closed-over variables are not garbage collected - too many can cause memory leaks.

## Q14. Output of this loop? How to fix it?

var has one shared i, which is 4 when callbacks run. Fix : use let (new i every round) or wrap in a function.

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}   // 4 4 4   -> use let : 1 2 3
```

## Q15. Function declaration vs function expression?

Declarations are fully hoisted (can be called before). Expressions are assigned to a variable, so they behave like that variable (undefined or TDZ).

```js
a();  // OK
b();  // TypeError
function a() {}
var b = function () {};
```

## Q16. Arrow function vs normal function?

Arrow : shorter, no own this (uses outer this), no arguments object, can't be used with new. Normal : this depends on how it is called.

## Q17. What are first-class functions?

Functions are treated like values : stored in variables, passed as arguments, and returned from other functions.

## Q18. What is a callback function?

A function passed into another function to be called later.

```js
setTimeout(() => console.log("done"), 1000);
```

## Q19. What is a higher-order function?

A function that takes a function as an argument or returns a function. map, filter, reduce, setTimeout, addEventListener are HOFs.

## Q20. map vs forEach?

map returns a new array of transformed values. forEach returns undefined - it only loops. Use map when you need the result.

```js
[1,2].map(x => x * 2);      // [2, 4]
[1,2].forEach(x => x * 2);  // undefined
```

## Q21. Explain map, filter and reduce.

map : transform each item (same length). filter : keep items that pass a test. reduce : combine all items into one value.

```js
[1,2,3,4].filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((a, b) => a + b, 0);   // 60
```

## Q22. Write a polyfill for map.

Add a method to Array.prototype that loops over this and pushes callback results.

```js
Array.prototype.myMap = function (cb) {
  const r = [];
  for (let i = 0; i < this.length; i++) r.push(cb(this[i], i, this));
  return r;
};
```

## Q23. How does the this keyword work?

this = the object that calls the function. obj.fn() -> obj. Plain fn() -> window (undefined in strict mode). new -> the new object. Arrow -> outer this. call / apply / bind -> what you pass.

## Q24. call vs apply vs bind?

call & apply run the function immediately with a chosen this - call takes args one by one, apply takes an array. bind returns a new function to run later.

```js
fn.call(obj, 1, 2);
fn.apply(obj, [1, 2]);
const g = fn.bind(obj, 1); g(2);
```

## Q25. What is currying?

Converting f(a, b) into f(a)(b) using closures. Helps create reusable, pre-filled functions.

```js
const add = a => b => a + b;
const add5 = add(5);
add5(3);   // 8
```

## Q26. What is memoization?

Caching function results so the same input isn't calculated twice. Uses a closure to keep the cache.

```js
function memo(fn) {
  const c = {};
  return n => c[n] ?? (c[n] = fn(n));
}
```

## Q27. What is an IIFE?

Immediately Invoked Function Expression - runs as soon as it is defined and creates a private scope.

```js
(function () {
  const secret = 1;
})();
```

## Q28. Spread vs rest operator?

Same ... syntax. Spread expands an array / object into items. Rest collects remaining items into an array.

```js
const b = [...a, 4];           // spread
function f(...args) {}         // rest
```

## Q29. Shallow copy vs deep copy?

Shallow copy copies only the top level - nested objects are shared. Deep copy copies everything.

```js
const s = { ...obj };
const d = structuredClone(obj);
```

## Q30. Primitive vs reference types?

Primitives are copied by value. Objects / arrays are copied by reference (address), so two variables can point to the same object.

```js
let a = { n: 1 };
let b = a;
b.n = 2;
a.n;   // 2
```

## Q31. What is type coercion?

JS automatically converts types in operations.

```js
"5" + 1   // "51"
"5" - 1   // 4
true + 1  // 2
[] + []   // ""
```

## Q32. Truthy and falsy values?

Falsy : false, 0, -0, 0n, "", null, undefined, NaN. Everything else is truthy - including [], {}, "0".

## Q33. What is NaN? How to check it?

Not-a-Number, the result of invalid math. typeof NaN is 'number' and NaN !== NaN, so use Number.isNaN().

```js
Number("abc");        // NaN
Number.isNaN(NaN);    // true
```

## Q34. What is the event loop?

It keeps checking : is the call stack empty? If yes, it moves the next callback from the microtask queue first, then from the callback queue, into the call stack.

## Q35. Microtask queue vs callback queue?

Microtask : promise callbacks, await, MutationObserver - higher priority, emptied completely first. Callback (task) queue : setTimeout, setInterval, DOM events.

```js
setTimeout(() => console.log(1));
Promise.resolve().then(() => console.log(2));
console.log(3);   // 3 2 1
```

## Q36. Why is setTimeout(fn, 0) not instant?

The callback must go through Web API -> queue -> event loop, and only enters when the call stack is empty. The delay is a minimum, not a guarantee.

## Q37. What are Web APIs?

Features given by the browser, not JS itself : setTimeout, DOM, fetch, localStorage, console, geolocation. JS reaches them via window.

## Q38. What is callback hell & inversion of control?

Callback hell : deeply nested callbacks (pyramid of doom), hard to read. Inversion of control : passing our callback to other code and trusting it to call it correctly. Promises solve both.

## Q39. What is a Promise?

An object representing a future value. States : pending -> fulfilled or rejected. It settles only once.

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 1000);
});
p.then(console.log);
```

## Q40. Promise.all vs allSettled vs race vs any?

all : all succeed or fails fast. allSettled : waits for all, gives each status. race : first to settle (success or fail). any : first to succeed.

## Q41. What is async / await?

Syntax on top of promises. async functions return a promise. await pauses that function until the promise settles, without blocking the main thread.

```js
async function load() {
  const res = await fetch(url);
  return res.json();
}
```

## Q42. How do you handle errors in async / await?

Wrap awaits in try / catch, or add .catch() on the returned promise.

```js
try {
  const d = await getData();
} catch (e) {
  console.log(e.message);
}
```

## Q43. What is event bubbling and capturing?

When an event happens, it travels down from window to the target (capturing), then back up to window (bubbling). Listeners run in the bubbling phase by default. stopPropagation() stops it.

## Q44. What is event delegation?

Putting one listener on a parent to handle events of its children, using bubbling and e.target. Saves memory and works for elements added later.

```js
ul.addEventListener("click", e => {
  if (e.target.tagName === "LI") console.log(e.target.innerText);
});
```

## Q45. preventDefault vs stopPropagation?

preventDefault stops the browser's default action (form submit reload, link opening). stopPropagation stops the event from bubbling / capturing further.

## Q46. What is the DOM?

Document Object Model - the browser's tree of objects built from HTML. JS reads and changes this tree to update the page.

## Q47. What is debouncing? Write it.

Run a function only after events stop for a given delay. Each new event resets the timer.

```js
function debounce(fn, d) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), d);
  };
}
```

## Q48. What is throttling? Write it.

Run a function at most once in a given time, ignoring calls in between.

```js
function throttle(fn, l) {
  let lock = false;
  return (...a) => {
    if (lock) return;
    fn(...a); lock = true;
    setTimeout(() => (lock = false), l);
  };
}
```

## Q49. Debounce vs throttle - when to use which?

Debounce : when you only care about the final value - search box, auto-save, resize end. Throttle : when you want regular updates during continuous events - scroll, mouse move, game controls.

## Q50. What is a JS engine? Name some.

Software that converts JS into machine code : parse -> AST -> JIT compile -> execute. V8 (Chrome, Node), SpiderMonkey (Firefox), JavaScriptCore (Safari).

## Q51. What is JIT compilation?

Just-In-Time : an interpreter starts running bytecode quickly, while a compiler optimises frequently-used code during runtime. V8 : Ignition (interpreter) + TurboFan (compiler).

## Q52. What is garbage collection?

Automatic freeing of memory that is no longer reachable. V8 uses Mark & Sweep : mark everything reachable from roots, sweep the rest.

## Q53. What is strict mode?

'use strict' turns silent mistakes into errors : no undeclared variables, this is undefined in plain functions, no duplicate parameter names.

```js
"use strict";
x = 5;   // ReferenceError
```

## Q54. Output? (classic this question)

obj.f() -> this is obj. g is a plain call after extracting -> this is window / undefined.

```js
const obj = { n: 1, f() { return this?.n; } };
obj.f();          // 1
const g = obj.f;
g();              // undefined
```

## Q55. Reverse a string & check palindrome.

Split into characters, reverse, join, then compare.

```js
const rev = s => s.split("").reverse().join("");
const isPal = s => s === rev(s);
isPal("madam");   // true
```

## Q56. Remove duplicates from an array.

A Set only keeps unique values. Spread it back into an array.

```js
const unique = [...new Set([1, 2, 2, 3, 3])];   // [1, 2, 3]
```

## Q57. Flatten a nested array (without flat).

Use recursion + reduce.

```js
const flatten = arr => arr.reduce(
  (a, x) => a.concat(Array.isArray(x) ? flatten(x) : x), []);
flatten([1, [2, [3, 4]]]);   // [1, 2, 3, 4]
```

---
[← Practice Set 9](../level-10-debouncing-throttling/07-practice-set-9.md) | [Level 11 index](README.md) | [All levels](../README.md)
