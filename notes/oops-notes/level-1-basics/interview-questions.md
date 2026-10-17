# Level 1 : Interview & Revision Questions

<sub>Level 1 : OOP Basics</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is OOP?</b></summary>

A programming paradigm that organizes code around classes and objects, where objects bundle data (properties) and behaviour (methods). It helps structure large programs and improves reusability, maintainability and data protection. It's built on 4 pillars: encapsulation, abstraction, inheritance and polymorphism.

</details>
<details><summary><b>2. What is a class and what is an object?</b></summary>

A class is a blueprint/template that defines the properties and methods objects will have. An object is an instance created from the class with `new`, holding its own data. One class can create many objects.

</details>
<details><summary><b>3. What is the difference between procedural programming and OOP?</b></summary>

Procedural code is a list of functions working on separate (often shared/global) data. OOP groups data with the functions that use it into objects, can hide data (private fields), and supports inheritance and polymorphism. Both support reuse: procedural through functions, OOP through classes, inheritance and composition.

</details>
<details><summary><b>4. Is JavaScript an object-oriented language?</b></summary>

Yes, but it is **prototype-based**, not class-based: objects inherit directly from other objects through the prototype chain. The ES6 `class` keyword is syntactic sugar over constructor functions and prototypes. JS is also multi-paradigm (functional and procedural styles work too).

</details>
<details><summary><b>5. What are properties and methods?</b></summary>

Properties are an object's data/state (what it **has**: `name`, `age`). Methods are functions that belong to the object and describe its behaviour (what it **does**: `study()`).

</details>
<details><summary><b>6. What is `this`?</b></summary>

Inside a method, `this` refers to the object that called the method (`student1.introduce()` → `this` is `student1`). In JS it is decided at call time, so it can be lost when a method is passed as a callback.

</details>
<details><summary><b>7. What is `typeof` a class?</b></summary>

`"function"`. A class is a special constructor function; its methods are stored on `ClassName.prototype`.

</details>
<details><summary><b>8. Can you create an object without a class in JS?</b></summary>

Yes: object literals `{ name: "Gagan" }`, `Object.create(proto)`, factory functions that return objects, and constructor functions with `new`.

</details>
<details><summary><b>9. Difference between `==`/`===` for objects? Why is `{} === {}` false?</b></summary>

For objects, both compare **references**, not contents. Two separately created objects are different objects in memory, so `{} === {}` is `false`. To compare contents, compare their properties (or use a deep-equal helper).

</details>

## 🔁 Quick revision

1. Name the 4 pillars of OOP.
2. What keyword creates an object from a class?
3. `const b = a` where `a` is an object: how many objects exist?
4. Can you add a property to a JS object after it's created?
5. What frees memory in JavaScript?

<details><summary>Answers</summary>

1. Encapsulation, Abstraction, Inheritance, Polymorphism · 2. `new` · 3. One (two references to it) · 4. Yes, objects are dynamic (`obj.newProp = 1`) · 5. The garbage collector, automatically

</details>

---
[← Objects in Memory](04-objects-in-memory.md) · [Level 1](README.md) · [Home](../README.md) · [Constructors →](../level-2-constructors/01-constructors.md)
