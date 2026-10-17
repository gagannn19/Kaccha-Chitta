# Level 5 : Interview & Revision Questions

<sub>Level 5 : Polymorphism</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is polymorphism?</b></summary>

"Many forms": the same method or interface behaves differently for different objects. Example: `animal.sound()` returns "Bark" for a Dog and "Meow" for a Cat.

</details>
<details><summary><b>2. How is polymorphism achieved in JavaScript?</b></summary>

Mainly through method overriding (child classes redefine parent methods, chosen at run time via the prototype chain) and duck typing (any object with the right method can be used). JS has no compile-time overloading.

</details>
<details><summary><b>3. What is method overriding?</b></summary>

A child class provides its own implementation of a method that exists in the parent class. When called, lookup starts at the actual object, so the child's version runs. `super.method()` calls the parent's version.

</details>
<details><summary><b>4. Does JavaScript support method overloading? Why not?</b></summary>

No. Methods are properties, and a property name can hold only one value, so a second definition with the same name replaces the first. Simulate it with default parameters, rest parameters, type checks, or an options object.

</details>
<details><summary><b>5. Overloading vs overriding?</b></summary>

Overloading: same name, different parameters, usually in one class, chosen before running (not in JS). Overriding: same name in a child class with a different implementation, needs inheritance, chosen at run time (fully supported in JS).

</details>
<details><summary><b>6. What is duck typing?</b></summary>

Deciding what an object can do by the methods it has, not by its class. If an object has `.then()`, `await` treats it like a promise; if it has `[Symbol.iterator]`, `for...of` can loop over it.

</details>
<details><summary><b>7. Can you overload operators in JavaScript?</b></summary>

No. You can only define `valueOf()`, `toString()` or `[Symbol.toPrimitive](hint)` to control how an object converts to a number/string with `+`, `<`, template strings, etc. `===` always compares references.

</details>
<details><summary><b>8. What is runtime polymorphism / dynamic dispatch?</b></summary>

Deciding which function to call while the program runs, based on the actual object. In JS every method call works this way: the engine looks up the method on the object's prototype chain at call time.

</details>

## 🔁 Quick revision

1. `class A { f(){return 1} f(x){return 2} }` → `new A().f()` returns?
2. How to call the parent's version of an overridden method?
3. Poly + morph means?
4. Which method controls `${obj}` output?
5. Overriding needs what relationship?

<details><summary>Answers</summary>

1. `2` (the last definition wins) · 2. `super.method()` · 3. Many forms · 4. `toString()` (or `Symbol.toPrimitive`) · 5. Inheritance (parent–child)

</details>

---
[← Method Overloading](03-method-overloading.md) · [Level 5](README.md) · [Home](../README.md) · [Composition & Relationships →](../level-6-advanced/01-composition-and-relationships.md)
