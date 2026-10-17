# Level 7 : Interview & Revision Questions

<sub>Level 7 : Under the Hood</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is a prototype? What is the prototype chain?</b></summary>

Every object has a hidden link (`[[Prototype]]`) to another object. If a property isn't found on the object, JS looks it up on the prototype, then its prototype, until `Object.prototype` and finally `null`. This chain is how JS objects inherit methods (e.g. arrays get `map` from `Array.prototype`).

</details>
<details><summary><b>2. Difference between `__proto__` and `prototype`?</b></summary>

`__proto__` (better: `Object.getPrototypeOf(obj)`) exists on every object and points to the object it inherits from. `prototype` exists only on functions/classes and is the object that instances created with `new` will get as their `__proto__`. So `new Dog().__proto__ === Dog.prototype`.

</details>
<details><summary><b>3. What does the `new` keyword do?</b></summary>

(1) creates an empty object, (2) sets its prototype to `Constructor.prototype`, (3) runs the constructor with `this` = that object, (4) returns the object (unless the constructor returns a different object).

</details>
<details><summary><b>4. How is `this` decided in JavaScript?</b></summary>

By how the function is called: `new` → new object; `call/apply/bind` → the given object; `obj.fn()` → obj; plain `fn()` → `undefined` in strict mode (global object otherwise). Arrow functions have no own `this` and use the `this` of the code around them.

</details>
<details><summary><b>5. call vs apply vs bind?</b></summary>

All set `this`. `call(obj, a, b)` and `apply(obj, [a, b])` run the function immediately (args as list vs array). `bind(obj, a)` returns a new function with `this` (and optionally some args) fixed permanently; a bound function's `this` can't be changed again by `call` or another `bind` (only `new` overrides it).

</details>
<details><summary><b>6. Why don't arrow functions work well as object methods or constructors?</b></summary>

They have no own `this` (it's taken from the surrounding scope, not the object), no `arguments`, no `prototype`, and can't be used with `new` (`TypeError: ... is not a constructor`).

</details>
<details><summary><b>7. Are ES6 classes just syntactic sugar?</b></summary>

Mostly: a class is a constructor function and its methods sit on `prototype`. But classes add real differences: must be called with `new`, TDZ (can't use before definition), always strict mode, non-enumerable methods, `super`, `#private` members, static blocks, and fields.

</details>
<details><summary><b>8. What is a closure, and how does it give privacy?</b></summary>

A closure is a function bundled with the variables of the scope it was created in. If a factory function returns inner functions that use a local variable, outside code can only reach that variable through those functions. That's encapsulation without classes (module pattern, React hooks).

</details>
<details><summary><b>9. Object.freeze vs Object.seal vs const?</b></summary>

`const`: variable can't be reassigned, object can still change. `seal`: can't add/delete properties, can change existing values. `freeze`: can't add, delete or change. Both seal and freeze are shallow.

</details>
<details><summary><b>10. Methods in the constructor vs on the prototype?</b></summary>

`this.fn = function(){}` in the constructor creates a new function for every object (more memory, but can use closure-private variables). Methods on the prototype (normal class methods) are shared by all objects. Arrow class fields behave like the constructor version.

</details>
<details><summary><b>11. Factory function vs class?</b></summary>

Factory: a normal function returning an object. No `new`, no `this` problems, real privacy via closures, easy composition; but no `instanceof` and no shared prototype methods by default. Class: shared methods, `instanceof`, `extends`, `#private`; but `this` binding pitfalls.

</details>
<details><summary><b>12. What is the difference between `in`, `hasOwnProperty` and `Object.hasOwn`?</b></summary>

`"x" in obj` checks the whole prototype chain. `obj.hasOwnProperty("x")` and `Object.hasOwn(obj, "x")` check only the object itself. `Object.hasOwn` is the modern one: it also works for objects made with `Object.create(null)`, which have no `hasOwnProperty` method.

</details>

## ✏️ Predict the output

**Q1.**
```js
function Person(n) { this.n = n; }
Person.prototype.say = function () { return this.n; };
const p = new Person("X");
Person.prototype.say = function () { return "changed"; };
console.log(p.say());
```
<details><summary>Answer</summary>

`changed`. `p` is linked to the prototype object, not a copy of it, so later changes to the prototype are visible.

</details>

**Q2.**
```js
class A { static x = 1; }
class B extends A {}
B.x++;
console.log(A.x, B.x);
```
<details><summary>Answer</summary>

`1 2`. `B.x` is read from `A` through the chain (1), but writing creates `B`'s own `x` = 2. `A.x` is untouched.

</details>

**Q3.**
```js
class P { constructor() { return { hacked: true }; } }
const obj = new P();
console.log(obj instanceof P, obj.hacked);
```
<details><summary>Answer</summary>

`false true`. The constructor returned an object, so `new` gives back that plain object instead of the `P` instance.

</details>

**Q4.**
```js
const a = { x: 1 };
const b = Object.create(a);
b.x = 2;
delete b.x;
console.log(b.x);
```
<details><summary>Answer</summary>

`1`. `b.x = 2` shadowed the prototype's `x`; deleting it removes only `b`'s own property, so lookup reaches `a.x` again.

</details>

**Q5.**
```js
const obj = {
  name: "Obj",
  regular() { return this.name; },
  arrow: () => this === obj,
  delayed() { return (() => this.name)(); },
};
console.log(obj.regular(), obj.arrow(), obj.delayed());
```
<details><summary>Answer</summary>

`Obj false Obj`. The arrow property takes `this` from outside the object literal (not `obj`). The arrow inside `delayed` takes `this` from `delayed`, which is `obj`.

</details>

**Q6.**
```js
function hi() { return this.name; }
const fn = hi.bind({ name: "Bound" });
console.log(fn(), fn.call({ name: "Call" }), fn.bind({ name: "Again" })());
```
<details><summary>Answer</summary>

`Bound Bound Bound`. Once bound, `this` can't be changed by `call` or by binding again.

</details>

**Q7.**
```js
class Parent { greet() { return "parent"; } }
class Child extends Parent { greet = () => "child-field"; }
const c = new Child();
console.log(c.greet(), Object.getPrototypeOf(c).greet());
```
<details><summary>Answer</summary>

`child-field parent`. The arrow field is an **own** property of `c`, so it's found first. `Child.prototype` has no `greet`, so `Object.getPrototypeOf(c).greet()` comes from `Parent.prototype`.

</details>

**Q8.**
```js
function Car() { this.speed = 0; }
const c = Car();
console.log(typeof c, typeof globalThis.speed);
```
<details><summary>Answer</summary>

`undefined number` (non-strict script). Without `new`, `Car` returns nothing and `this` is the global object, so `speed` leaks into the global scope. In strict mode it throws a `TypeError`.

</details>

**Q9.**
```js
class Base {
  constructor() { this.init(); }
  init() {}
}
class Child extends Base {
  x = 10;
  init() { console.log("x =", this.x); }
}
new Child();
```
<details><summary>Answer</summary>

`x = undefined`. The parent constructor calls the child's `init()`, but child fields are only set after `super()` returns.

</details>

**Q10.**
```js
console.log(Function instanceof Object, Object instanceof Function);
```
<details><summary>Answer</summary>

`true true`. `Function` is an object (its chain reaches `Object.prototype`), and `Object` is a function (its prototype is `Function.prototype`).

</details>

## 🛠️ Write the polyfill (asked in frontend rounds)

**`Function.prototype.bind`**
```js
Function.prototype.myBind = function (ctx, ...preset) {
  const fn = this;                                   // the function bind was called on
  return function (...later) {
    return fn.apply(ctx, [...preset, ...later]);
  };
};

function intro(city, role) { return `${this.name} from ${city}, ${role}`; }
const bound = intro.myBind({ name: "Ravi" }, "Delhi");
console.log(bound("SDE"));
```
**Output:**
```
Ravi from Delhi, SDE
```

**`Object.create`**
```js
function myCreate(proto) {
  function F() {}           // empty helper constructor
  F.prototype = proto;
  return new F();           // new object whose prototype is proto
}
const animal = { eats: true };
const dog = myCreate(animal);
console.log(dog.eats, Object.getPrototypeOf(dog) === animal);
```
**Output:**
```
true true
```

**`new`** → see [`myNew`](02-constructor-functions-and-new.md#what-does-new-do-very-common-question) · **`instanceof`** → see [`myInstanceOf`](03-prototypes.md#how-instanceof-really-works) · **EventEmitter** → see [Observer](../level-6-advanced/03-design-patterns.md#observer-pubsub-notify-everyone-who-subscribed)

## 🔁 Quick revision

1. What is at the end of every prototype chain?
2. `typeof class {}`?
3. Which method runs a function immediately with args as an array?
4. Can you use a class before its declaration line?
5. Is `Object.freeze` deep or shallow?
6. Where do normal class methods live?
7. Where does an arrow function get its `this`?
8. Modern replacement for `obj.__proto__`?

<details><summary>Answers</summary>

1. `null` (after `Object.prototype`) · 2. `"function"` · 3. `apply` · 4. No, TDZ → `ReferenceError` · 5. Shallow · 6. On `ClassName.prototype` · 7. From the surrounding (lexical) scope where it was defined · 8. `Object.getPrototypeOf()` / `Object.setPrototypeOf()`

</details>

---
[← Symbols & Extending Built-ins](06-symbols-and-built-ins.md) · [Level 7](README.md) · [Home](../README.md) · [🏁 Final Test →](../final-test.md)
