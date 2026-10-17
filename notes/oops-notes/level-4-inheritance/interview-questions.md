# Level 4 : Interview & Revision Questions

<sub>Level 4 : Inheritance</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is inheritance? Why use it?</b></summary>

A child class acquires and reuses the properties and methods of a parent class (`class Dog extends Animal`). It avoids repeated code, models an is-a relationship, and enables polymorphism.

</details>
<details><summary><b>2. How does inheritance work in JavaScript under the hood?</b></summary>

Through the prototype chain. `class Dog extends Animal` sets the prototype of `Dog.prototype` to `Animal.prototype` (and the prototype of `Dog` to `Animal`, so statics are inherited). A missing property is looked up the chain until `Object.prototype`, then `null`.

</details>
<details><summary><b>3. What does `super()` do? Why must it be called before `this`?</b></summary>

`super()` calls the parent constructor. In a derived class the object is created by the parent constructor, so `this` doesn't exist until `super()` returns; using it earlier throws a `ReferenceError`.

</details>
<details><summary><b>4. What is `super.method()`?</b></summary>

A call to the parent class's version of a method, typically used inside an overriding method to extend the parent's behaviour instead of replacing it completely.

</details>
<details><summary><b>5. Types of inheritance supported by JavaScript?</b></summary>

Single, multilevel and hierarchical. Multiple (and therefore hybrid) inheritance is not supported with classes because `extends` takes only one parent; use mixins or composition.

</details>
<details><summary><b>6. Is there a diamond problem in JavaScript?</b></summary>

No. Each object has exactly one prototype, so lookup follows a single linear chain. With mixins, a name clash is resolved by order: the mixin applied last wins.

</details>
<details><summary><b>7. What is a mixin?</b></summary>

A reusable set of methods added to a class without being its parent: either copied with `Object.assign(Class.prototype, mixin)` or applied with a class-factory function `const CanFly = Base => class extends Base {...}`.

</details>
<details><summary><b>8. Order of construction in inheritance?</b></summary>

The child constructor is called first, but `super()` runs the parent's fields + constructor; then the child's fields are initialized and the rest of the child constructor runs. Net effect: parent is set up before child.

</details>
<details><summary><b>9. Are `static` and `#private` members inherited?</b></summary>

`static` members are inherited (`Child.staticMethod()` works). `#private` members are not accessible from the child class at all.

</details>
<details><summary><b>10. Is-a vs has-a?</b></summary>

Is-a = inheritance (Dog is an Animal). Has-a = composition (Car has an Engine). Prefer composition when the relationship isn't truly is-a.

</details>

## 🔁 Quick revision

1. Keyword to inherit from a class?
2. Can you write `class C extends A, B {}`?
3. Grandpa → Dad → You is which type?
4. What does a child class get if it has no constructor?
5. Output order of: parent field, child field, parent constructor, child constructor?

<details><summary>Answers</summary>

1. `extends` · 2. No, SyntaxError (use mixins) · 3. Multilevel · 4. `constructor(...args) { super(...args); }` · 5. parent field → parent constructor → child field → child constructor

</details>

---
[← Constructor Order & the Init Trap](04-constructor-order.md) · [Level 4](README.md) · [Home](../README.md) · [Polymorphism Overview →](../level-5-polymorphism/01-polymorphism-overview.md)
