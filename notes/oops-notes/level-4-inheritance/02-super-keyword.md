# The `super` Keyword

<sub>Level 4 : Inheritance</sub>

> **Easy definition:** `super()` is used inside a **child class constructor** to call the **parent class's constructor**. `super.method()` calls the **parent's version** of a method.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);              // runs Animal's constructor → sets this.name
    this.breed = breed;       // then add Dog's own property
  }
}

const dog = new Dog("Tommy", "Labrador");
console.log(dog.name, dog.breed);
```
**Output:**
```
Tommy Labrador
```
```text
new Dog("Tommy", "Labrador")
      ↓
Dog constructor → super(name)
      ↓
Animal constructor → this.name = name
      ↓
back in Dog → this.breed = breed
```

## Why must `super()` come before `this`?

In a child class, the object is actually created by the **parent** constructor. Until `super()` runs, `this` doesn't exist yet.

```js
class Animal { constructor(name) { this.name = name; } }
class Dog extends Animal {
  constructor(name) {
    this.name = name;         // ❌ using this before super()
    super(name);
  }
}
try { new Dog("Tommy"); } catch (e) { console.log(e.constructor.name + ": " + e.message); }
```
**Output:**
```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

## `super.method()`: call the parent's version

```js
class Animal {
  eat() { console.log("Animal is eating"); }
}
class Dog extends Animal {
  eat() {
    super.eat();                          // parent's version first
    console.log("Dog is eating bones 🦴");  // then extra behaviour
  }
}
new Dog().eat();
```
**Output:**
```
Animal is eating
Dog is eating bones 🦴
```

## No constructor in the child?

JS adds a default one that forwards everything to the parent: `constructor(...args) { super(...args); }`.

```js
class Animal { constructor(name) { this.name = name; } }
class Dog extends Animal {}               // no constructor written
console.log(new Dog("Tommy").name);
```
**Output:**
```
Tommy
```

## Rules

1. `super()` calls the parent constructor; `super.method()` calls a parent method.
2. In a child constructor, call `super()` **before** using `this`.
3. A child constructor **must** call `super()` (unless it returns an object itself).
4. The top parent class (no `extends`) doesn't call `super()`.
5. `super` also works in `static` methods (calls the parent's static method) and in object literals' methods.

## 🧠 Interview answer

> **"`super()` is used in a child class constructor to call the parent class's constructor, and it must be called before `this` is used because the parent creates the object. `super.method()` calls the parent class's version of a method, which is useful when overriding a method but still wanting the parent's behaviour."**

## 🎯 Memory trick

> **`extends` → get features from parent · `super()` → call parent's constructor · `super.method()` → call parent's method.**

---
[← Inheritance Basics](01-inheritance-basics.md) · [Level 4](README.md) · [Home](../README.md) · [Types of Inheritance & Mixins →](03-types-of-inheritance.md)
