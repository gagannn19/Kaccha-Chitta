# The `new` Keyword

<sub>Level 2 : Constructors & Creating Objects</sub>

> **Easy definition:** `new` **creates a new object from a class** (or constructor function) and **initializes it using the constructor**.

```js
class Student {
  constructor(name) {
    this.name = name;
  }
}

const student1 = new Student("Gagan");
console.log(student1, student1 instanceof Student);
```
**Output:**
```
Student { name: 'Gagan' } true
```
```text
Student                 → the class
new Student("Gagan")    → creates an object
student1                → the object (instance)
```

## What happens when we write `new Student("Gagan")`?

JavaScript does 4 steps:

1. **Creates** a new empty object `{}`.
2. **Links** it to `Student.prototype`, so the object can use the class's methods.
3. **Calls the constructor** with `this` set to that new object (so `this.name = name` sets `name` on it).
4. **Returns** the new object (unless the constructor returns a different object).

```js
class Student {
  constructor(name) { this.name = name; }
  hi() { return `Hi, I'm ${this.name}`; }
}
const s = new Student("Gagan");
console.log(Object.getPrototypeOf(s) === Student.prototype);   // step 2
console.log(s.hi());                                           // method found via that link
```
**Output:**
```
true
Hi, I'm Gagan
```
You'll write your own version of `new` in [Level 7](../level-7-under-the-hood/02-constructor-functions-and-new.md).

## Forgetting `new`

```js
class Car {}
try { Car(); } catch (e) { console.log(e.message); }
```
**Output:**
```
Class constructor Car cannot be invoked without 'new'
```
With old-style **constructor functions** (`function Car() {}`), forgetting `new` doesn't throw; it silently returns `undefined` and can leak properties onto the global object. Classes are safer.

## 🧠 Interview answer

> **"The `new` keyword creates an instance of a class. It creates an empty object, links it to the class's prototype, calls the constructor with `this` bound to that object, and returns the object."**

## 🎯 Memory trick

> **new = Create → Link → Call → Return.**

---
[← Constructors & Class Fields](01-constructors.md) · [Level 2](README.md) · [Home](../README.md) · [Shallow Copy vs Deep Copy →](03-shallow-vs-deep-copy.md)
