# Level 2 : Interview & Revision Questions

<sub>Level 2 : Constructors & Creating Objects</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is a constructor?</b></summary>

A special method named `constructor` that runs automatically when an object is created with `new`. It initializes the object's properties.

</details>
<details><summary><b>2. Can a JS class have multiple constructors?</b></summary>

No, only one (`SyntaxError: A class may only have one constructor`). To create objects in different ways use default parameters, an options object, or static factory methods like `Car.from(other)` / `User.fromJSON(json)`.

</details>
<details><summary><b>3. What happens if you don't write a constructor?</b></summary>

JavaScript adds a default empty one, `constructor() {}`. In a child class the default is `constructor(...args) { super(...args); }`, which forwards all arguments to the parent.

</details>
<details><summary><b>4. What does the `new` keyword do?</b></summary>

It creates an empty object, links it to `ClassName.prototype`, calls the constructor with `this` set to that object, and returns the object (unless the constructor returns another object).

</details>
<details><summary><b>5. What are class fields?</b></summary>

Properties declared directly in the class body (`age = 26;` or `#secret = 1;`). They're created on every object before the constructor body runs, and are useful for default values.

</details>
<details><summary><b>6. Shallow copy vs deep copy? How do you deep copy?</b></summary>

Shallow copy (`{...obj}`, `Object.assign`, `slice`) copies only the top level; nested objects are shared. Deep copy copies every level: `structuredClone(obj)` (handles Date/Map/Set/circular refs, but not functions or class prototypes), `JSON.parse(JSON.stringify(obj))` (simple data only), lodash `cloneDeep`, or a recursive function.

</details>
<details><summary><b>7. What is a static method? Give built-in examples.</b></summary>

A method that belongs to the class, not to instances, called as `ClassName.method()`. Inside it `this` is the class. Examples: `Math.max`, `Array.from`, `Object.keys`, `Promise.all`, `Number.isInteger`.

</details>
<details><summary><b>8. Does JavaScript have destructors? How is memory freed?</b></summary>

No. The garbage collector (mark-and-sweep) frees objects no longer reachable from the roots (globals and the current call stack). Other resources need manual cleanup: `close()` + `try/finally`, `removeEventListener`, `clearInterval`, React effect cleanup, or `using` + `[Symbol.dispose]()`.

</details>
<details><summary><b>9. What happens if a constructor returns a value?</b></summary>

If it returns an object, `new` gives that object instead of `this` (so `instanceof` may be false). If it returns a primitive, the return is ignored and `this` is returned.

</details>
<details><summary><b>10. Name some common causes of memory leaks in frontend apps.</b></summary>

Event listeners and intervals that are never removed, missing `useEffect` cleanup, accidental globals, ever-growing caches, detached DOM nodes still referenced, and closures holding large objects.

</details>

## 🔁 Quick revision

1. What is the constructor method always called?
2. Calling a class without `new` → ?
3. Which built-in makes a deep copy?
4. Do child classes inherit `static` methods in JS?
5. Which hook-style function do you return in `useEffect` for cleanup?

<details><summary>Answers</summary>

1. `constructor` · 2. `TypeError: Class constructor X cannot be invoked without 'new'` · 3. `structuredClone()` · 4. Yes · 5. A cleanup function: `return () => { ... }`

</details>

---
[← Garbage Collection & Cleanup](05-garbage-collection-and-cleanup.md) · [Level 2](README.md) · [Home](../README.md) · [The 4 Pillars of OOP →](../level-3-encapsulation-abstraction/01-four-pillars.md)
