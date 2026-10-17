# 🏁 Final Test : Ask Yourself

> Answer out loud like in a real interview, then open the answer. Mark ✅ / 🟡 / ❌ and revise the ❌ topics.

## Part A : Explain it (2-3 lines each)

<details><summary><b>1. Explain the 4 pillars of OOP with one real-life example each.</b></summary>

Encapsulation: an ATM hides the cash box, you use the buttons. Abstraction: you drive a car without knowing how the engine works. Inheritance: a SportsCar is a Car and reuses its features. Polymorphism: the same `pay()` works differently for UPI, card or cash.

</details>
<details><summary><b>2. Design a simple class for a Library Book. What will be private and what public?</b></summary>

Private: `#id`, `#isIssued` (and maybe `#issuedTo`). Public: `title`, `author`, the constructor, `issue(member)`, `returnBook()`, and a getter `get isAvailable()`. `issue()` checks `#isIssued` before changing it. That's encapsulation.

</details>
<details><summary><b>3. When would you make an "abstract" base class, and how do you do it in JS?</b></summary>

When the base is only a concept that should never be created directly (Shape, Payment) and every child must implement certain methods (`area()`, `pay()`). In JS: throw in the constructor if `new.target === Shape`, and make the base method throw "must implement"; or use TypeScript's `abstract`.

</details>
<details><summary><b>4. Composition or inheritance for: Car–Engine, Dog–Animal, Order–Payment?</b></summary>

Car **has** an Engine (composition). Dog **is** an Animal (inheritance). Order **has** a Payment (composition; Payment can be a base class with UPI/Card children).

</details>
<details><summary><b>5. Explain the prototype chain using an array as the example.</b></summary>

`const a = [1, 2]` → `a`'s prototype is `Array.prototype` (where `map`, `push` live) → its prototype is `Object.prototype` (`toString`, `hasOwnProperty`) → `null`. `a.map` isn't on `a` itself, so JS finds it one step up the chain.

</details>
<details><summary><b>6. You pass `this.handleClick` to a button and get "Cannot read properties of undefined". Why, and 3 fixes?</b></summary>

The method is called as a plain function, so `this` is `undefined` (class code is strict). Fixes: `this.handleClick = this.handleClick.bind(this)` in the constructor, an arrow class field `handleClick = () => {...}`, or wrap it: `onClick={() => this.handleClick()}`.

</details>
<details><summary><b>7. How would you make a "private" variable in JS without `#`?</b></summary>

Closure: declare it with `let` inside a factory function / IIFE and return only the methods that use it. Or store it in a module-level `WeakMap` keyed by the object.

</details>
<details><summary><b>8. Class or factory function for a React-style app? Why?</b></summary>

Usually factory functions + composition (hooks): no `this` binding issues, easy to combine abilities, privacy through closures. Classes are fine when you need `instanceof`, inheritance like custom `Error`s, or many objects sharing methods.

</details>

## Part B : Predict the output ✏️

**Q9.**
```js
class A { constructor() { console.log("A"); } }
class B extends A { constructor() { console.log("B1"); super(); console.log("B2"); } }
new B();
```
<details><summary>Answer</summary>

`B1`, `A`, `B2` (each on its own line). The child constructor starts first; the parent runs when `super()` is called.

</details>

**Q10.**
```js
class Calc {
  add(a, b) { return a + b; }
  add(a, b, c) { return a + b + c; }
}
console.log(new Calc().add(1, 2));
```
<details><summary>Answer</summary>

`NaN`. The second `add` replaced the first (no overloading in JS), so `c` is `undefined` and `1 + 2 + undefined` is `NaN`.

</details>

**Q11.**
```js
class Counter { static count = 0; constructor() { Counter.count++; } }
new Counter(); new Counter();
const c = new Counter();
console.log(Counter.count, c.count);
```
<details><summary>Answer</summary>

`3 undefined`. The static count is shared and lives on the class; instances can't see it.

</details>

**Q12.**
```js
const user = { name: "G", marks: { math: 90 } };
const copy = { ...user };
copy.name = "R";
copy.marks.math = 10;
console.log(user.name, user.marks.math);
```
<details><summary>Answer</summary>

`G 10`. Spread is a shallow copy: `name` is copied, but `marks` is the same object in both.

</details>

**Q13.**
```js
class Animal { speak() { return "..."; } }
class Dog extends Animal { speak() { return super.speak() + "Woof"; } }
console.log(new Dog().speak());
```
<details><summary>Answer</summary>

`...Woof`. `super.speak()` calls the parent's version, then the child adds to it.

</details>

**Q14.**
```js
const counter = { count: 0, inc: () => { this.count++; } };
counter.inc();
console.log(counter.count);
```
<details><summary>Answer</summary>

`0`. The arrow function's `this` is not `counter` (it's the outer `this`), so `counter.count` never changes. Inside an ES module the outer `this` is `undefined`, so it would throw a `TypeError` instead. Fix: `inc() { this.count++; }`.

</details>

**Q15.**
```js
class Account {
  #balance = 100;
  get balance() { return this.#balance; }
}
const acc = new Account();
acc.balance = 500;
console.log(acc.balance);
```
<details><summary>Answer</summary>

`100`. There's only a getter, so assigning is ignored (it would throw a `TypeError` in strict mode / an ES module).

</details>

**Q16.**
```js
function Person(n) { this.n = n; }
Person.prototype.say = function () { return this.n; };
const p = new Person("X");
Person.prototype.say = function () { return "changed"; };
console.log(p.say());
```
<details><summary>Answer</summary>

`changed`. `p` is linked to the prototype object (not a copy), so later changes to it are visible.

</details>

**Q17.**
```js
class Shape {
  constructor() { if (new.target === Shape) throw new Error("abstract!"); }
}
class Circle extends Shape {}
console.log(new Circle() instanceof Shape);
try { new Shape(); } catch (e) { console.log(e.message); }
```
<details><summary>Answer</summary>

`true`, then `abstract!`. `new.target` is `Circle` in the first case, `Shape` in the second.

</details>

**Q18.**
```js
const a = { x: 1 };
const b = a;
b.x = 2;
const c = { ...a };
c.x = 3;
console.log(a.x, b.x, c.x, a === b, a === c);
```
<details><summary>Answer</summary>

`2 2 3 true false`. `b` is the same object as `a`; `c` is a new (shallow) copy.

</details>

## Part C : Rapid fire ⚡

| # | Question | Answer |
|---|---|---|
| 19 | `typeof` a class? | <details><summary>show</summary>"function"</details> |
| 20 | Syntax for a private field? | <details><summary>show</summary>`#field`</details> |
| 21 | Does JS have `protected`? | <details><summary>show</summary>No (`_name` is a convention; TS has `protected`)</details> |
| 22 | How many constructors can a class have? | <details><summary>show</summary>One</details> |
| 23 | Keyword to call the parent constructor? | <details><summary>show</summary>`super()`</details> |
| 24 | Can a class `extends` two classes? | <details><summary>show</summary>No, use mixins / composition</details> |
| 25 | Does JS support method overloading? | <details><summary>show</summary>No, the last definition wins</details> |
| 26 | Built-in for a deep copy? | <details><summary>show</summary>`structuredClone()`</details> |
| 27 | `Object.freeze`: deep or shallow? | <details><summary>show</summary>Shallow</details> |
| 28 | What frees memory in JS? | <details><summary>show</summary>The garbage collector (mark-and-sweep)</details> |
| 29 | End of every prototype chain? | <details><summary>show</summary>`null`</details> |
| 30 | Pattern with only one object? | <details><summary>show</summary>Singleton</details> |
| 31 | "A PIE" stands for? | <details><summary>show</summary>Abstraction, Polymorphism, Inheritance, Encapsulation</details> |
| 32 | Want high or low coupling? | <details><summary>show</summary>Low coupling, high cohesion</details> |

---

🎉 26+ of 32 correct? You're ready for the OOPs round. Go back to [Home](README.md) to revise weak levels.

---
[← Home](README.md)
