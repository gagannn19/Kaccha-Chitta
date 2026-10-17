# The `this` Keyword (basics)

<sub>Level 1 : OOP Basics</sub>

> **Easy definition:** inside a method, **`this` refers to the object that is calling the method**. It's how a method reaches *its own* object's properties.

```js
class Student {
  constructor(name, age) {
    this.name = name;     // this = the new object being created
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.name}`);
  }
}

const student1 = new Student("Gagan", 25);
const student2 = new Student("Rahul", 22);
student1.introduce();     // this = student1
student2.introduce();     // this = student2
```
**Output:**
```
My name is Gagan
My name is Rahul
```
```text
student1.introduce()  →  this = student1
student2.introduce()  →  this = student2
```

`this.name = name` → left side is the object's property, right side is the parameter.

## Returning `this` = method chaining

```js
class Student {
  setName(name) {
    this.name = name;   // this = the object the method was called on
    return this;        // return the object itself (allows chaining)
  }
  hi() { console.log(`Hi, I am ${this.name}`); }
}

new Student().setName("Gagan").hi();   // method chaining

// ⚠️ In JS, `this` depends on HOW a function is called, not where it is written
const s = new Student().setName("Ravi");
const hi = s.hi;          // method pulled out of the object
try { hi(); } catch (e) { console.log("TypeError:", e.message); }
s.hi.bind(s)();           // bind fixes `this` permanently
```
**Output:**
```
Hi, I am Gagan
TypeError: Cannot read properties of undefined (reading 'name')
Hi, I am Ravi
```
Chaining is everywhere in JS: `arr.filter(...).map(...)`, jQuery, query builders.

## ⚠️ The big JS gotcha

`this` is **not fixed to the object** like in many languages. It is decided **when the function is called**:

![this rules](../images/this.svg)

So when you pass a method as a callback (`setTimeout(obj.method)`, `onClick={this.handleClick}`), it is called without an object in front of it and `this` is lost. All the rules plus `call`/`apply`/`bind` and arrow functions are in [Level 7: the `this` keyword](../level-7-under-the-hood/01-this-keyword.md).

## 🧠 Interview answer

> **"In a class, `this` refers to the current object, the one that called the method, and is used to access that object's properties and methods. In JavaScript, the value of `this` is decided by how a function is called, so it can be lost when a method is passed around as a callback; `bind` or arrow functions fix that."**

## 🎯 Memory trick

> **`this` = "me", and "me" depends on who is speaking 🗣️.**

---
[← Class, Object, Properties & Methods](02-class-and-object.md) · [Level 1](README.md) · [Home](../README.md) · [Objects in Memory →](04-objects-in-memory.md)
