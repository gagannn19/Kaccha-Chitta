# Method Overriding

<sub>Level 5 : Polymorphism</sub>

> **Easy definition:** **Method overriding** happens when a **child class provides its own implementation** of a method that already exists in the parent class (same name).

```js
class Animal { sound() { return "Some sound"; } }
class Dog extends Animal { sound() { return "Woof"; } }
class Cat extends Animal { sound() { return "Meow"; } }

for (const a of [new Dog(), new Cat(), new Animal()]) console.log(a.sound());

// call the parent's version with super.method()
class Puppy extends Dog { sound() { return super.sound() + " (tiny)"; } }
console.log(new Puppy().sound());

// Duck typing: "if it has sound(), it can make a sound" (no inheritance needed)
const robot = { sound: () => "Beep" };
for (const x of [new Cat(), robot]) console.log(x.sound());
```
**Output:**
```
Woof
Meow
Some sound
Woof (tiny)
Meow
Beep
```

## How JS picks the method

When you call `dog.sound()`, JS searches **from the object upward** through the prototype chain and runs the **first** `sound` it finds:

```text
dog (own properties)  →  Dog.prototype.sound ✅ found, stop
                          Animal.prototype.sound  (never reached)
```
So the child's version "shadows" the parent's. This happens at **run time**, on the **actual object**, and every method works this way automatically (no special keyword needed).

## Extend instead of replace: `super.method()`

```js
class Logger {
  log(msg) { return `[LOG] ${msg}`; }
}
class TimeLogger extends Logger {
  log(msg) { return super.log(msg) + " @ 10:30"; }   // reuse parent, then add
}
console.log(new TimeLogger().log("Server started"));
```
**Output:**
```
[LOG] Server started @ 10:30
```

## Overriding built-in methods

Every object inherits `toString()` from `Object.prototype`. Override it to control how your object turns into text:

```js
class Point {
  constructor(x, y) { this.x = x; this.y = y; }
  toString() { return `(${this.x}, ${this.y})`; }   // overrides Object.prototype.toString
}
const p = new Point(1, 2);
console.log(`Point is ${p}`, String({}));
```
**Output:**
```
Point is (1, 2) [object Object]
```

## Rules & tips

- Same method **name** in the child (JS doesn't check parameters).
- Needs inheritance (`extends`) or a prototype link.
- **Arrow-function class fields** (`sound = () => ...`) are own properties of each object, so they "win" over prototype methods and can't be reached with `super.sound()`.
- TypeScript has an `override` keyword that errors if the parent has no such method (catches typos).

## 🧠 Interview answer

> **"Method overriding occurs when a child class provides its own implementation of a method that is already defined in the parent class. In JavaScript, when the method is called, the lookup starts at the actual object and walks up the prototype chain, so the child's version runs. The child can still call the parent's version with `super.method()`. Overriding is how runtime polymorphism works in JavaScript."**

## 🎯 Memory trick

> **Overriding → the child says "I'll do it MY way" ✋, but can still ask the parent with `super`.**

---
[← Polymorphism Overview](01-polymorphism-overview.md) · [Level 5](README.md) · [Home](../README.md) · [Method Overloading →](03-method-overloading.md)
