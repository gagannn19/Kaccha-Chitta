# Level 6 : Interview & Revision Questions

<sub>Level 6 : Composition, SOLID & Design Patterns</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is composition?</b></summary>

Building an object by combining other objects or behaviours instead of inheriting from a parent class. It represents a has-a relationship (Car has an Engine).

</details>
<details><summary><b>2. Composition vs inheritance: which to prefer and why?</b></summary>

Prefer composition for flexibility and loose coupling: you combine small abilities and can swap them, without deep rigid hierarchies. Use inheritance only for a true is-a relationship where the child can safely replace the parent.

</details>
<details><summary><b>3. Association vs aggregation vs composition?</b></summary>

Association: two classes use each other, independent lifetimes (Student–Teacher). Aggregation: weak has-a, the part can exist without the whole (Department–Teacher). Composition: strong has-a, the part dies with the whole (House–Room).

</details>
<details><summary><b>4. Explain SOLID.</b></summary>

Single responsibility (one reason to change), Open/closed (extend without modifying), Liskov substitution (child usable wherever parent is), Interface segregation (small focused contracts), Dependency inversion (depend on abstractions, inject dependencies).

</details>
<details><summary><b>5. Give a Dependency Inversion example in frontend code.</b></summary>

Pass an `apiClient` (or `storage`) into a service/hook instead of calling `fetch`/`localStorage` directly inside it. Production passes the real client, tests pass a fake one. React Context is often used to inject such dependencies.

</details>
<details><summary><b>6. How do you implement a Singleton in JavaScript?</b></summary>

Easiest: export one instance from an ES module (`export const store = createStore()`); modules are evaluated once and cached. With classes: a `static #instance` and `static getInstance()` that creates it only the first time (or return the existing instance from the constructor).

</details>
<details><summary><b>7. Implement a simple EventEmitter / pub-sub.</b></summary>

Keep a map `event → array of listeners`. `on(event, fn)` pushes, `off(event, fn)` filters it out, `emit(event, data)` calls every listener. Return an unsubscribe function from `on`. See the Observer code in [Design Patterns](03-design-patterns.md).

</details>
<details><summary><b>8. What is the Factory pattern? Where do you see it in JS?</b></summary>

A function that decides which class to instantiate and returns the object, so callers don't depend on concrete classes. `document.createElement()`, `React.createElement()`, `createPayment("upi")`.

</details>
<details><summary><b>9. Why does React prefer composition over inheritance?</b></summary>

Components are combined through props and `children` (has-a), and logic is shared through custom hooks. That's more flexible than deep `extends` chains, avoids tight coupling, and lets you mix behaviours freely.

</details>
<details><summary><b>10. What is coupling and cohesion?</b></summary>

Coupling: how much classes depend on each other (want LOW). Cohesion: how focused a class is on one job (want HIGH).

</details>
<details><summary><b>11. What are the disadvantages of OOP?</b></summary>

More boilerplate for small programs, deep inheritance hierarchies get hard to follow, `this` binding pitfalls in JS, and it needs good design upfront. That's why JS code often mixes OOP with functional style.

</details>

## 🔁 Quick revision

1. House and Room: which relationship?
2. Which SOLID letter says "one class, one job"?
3. Symbol for private in a UML diagram?
4. Easiest Singleton in modern JS?
5. Name a real place where the Observer pattern is used in frontend.

<details><summary>Answers</summary>

1. Composition · 2. S (Single Responsibility) · 3. `-` · 4. Export a single instance from an ES module · 5. `addEventListener`, Redux subscribe, RxJS, React state updates

</details>

---
[← JS OOP Cheat Sheet](04-js-oop-cheat-sheet.md) · [Level 6](README.md) · [Home](../README.md) · [The this Keyword →](../level-7-under-the-hood/01-this-keyword.md)
