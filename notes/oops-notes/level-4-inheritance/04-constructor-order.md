# Constructor Order & the Init Trap

<sub>Level 4 : Inheritance</sub>

> **Easy rule:** the **child constructor is entered first**, but the **parent's constructor runs when `super()` is called**, so the parent finishes setting up before the child's own code continues.

```js
class Animal { constructor() { console.log("Animal()"); } }
class Dog extends Animal { constructor() { super(); console.log("Dog()"); } }
class Puppy extends Dog {
  constructor() {
    console.log("Puppy() starts");   // child constructor is entered FIRST...
    super();                         // ...but the parent runs here
    console.log("Puppy()");
  }
}
new Puppy();
```
**Output:**
```
Puppy() starts
Animal()
Dog()
Puppy()
```

## Where do class fields fit?

For each level, from the top parent down:
1. parent's **fields** are created
2. parent's **constructor body** runs
3. *(back in the child, right after `super()` returns)* child's **fields** are created
4. rest of the child's **constructor body** runs

```js
class Parent {
  a = console.log("1. Parent field");
  constructor() { console.log("2. Parent constructor"); }
}
class Child extends Parent {
  b = console.log("3. Child field");
  constructor() {
    super();
    console.log("4. Child constructor");
  }
}
new Child();
```
**Output:**
```
1. Parent field
2. Parent constructor
3. Child field
4. Child constructor
```

## ⚠️ Interview trap: calling an overridden method from the parent constructor

```js
class Base {
  constructor() { this.init(); }          // calls the CHILD's init (JS uses the real object's method)
  init() {}
}
class Child extends Base {
  x = 10;                                 // child fields are set only AFTER super() returns
  init() { console.log("x =", this.x); }
}
new Child();
```
**Output:**
```
x = undefined
```
The parent's constructor calls the **child's** `init()` (JS always uses the method of the actual object), but at that moment the child's fields (step 3) don't exist yet. Avoid calling overridable methods from constructors.

## 🧠 Interview answer

> **"When a child object is created, the child constructor starts first but must call `super()`, which runs the parent's field initializers and constructor; only after `super()` returns are the child's fields initialized and the rest of the child constructor executed. So effectively setup goes from parent to child. A common pitfall is calling an overridden method from the parent constructor, because the child's fields aren't initialized yet."**

## 🎯 Memory trick

> **Building a house 🏠: the foundation (parent) is finished before the upper floor (child), even though the child ordered the construction.**

---
[← Types of Inheritance & Mixins](03-types-of-inheritance.md) · [Level 4](README.md) · [Home](../README.md) · [Level 4 : Interview & Revision Questions →](interview-questions.md)
