# Level 3 : Interview & Revision Questions

<sub>Level 3 : Encapsulation & Abstraction</sub>

## 🎯 Top interview questions

<details><summary><b>1. What are the 4 pillars of OOP?</b></summary>

Encapsulation, Abstraction, Inheritance, Polymorphism (A PIE).

</details>
<details><summary><b>2. What is encapsulation? How do you achieve it in JavaScript?</b></summary>

Bundling data and the methods that use it into one unit and controlling access to that data. In JS: `#private` fields and methods with public methods or getters/setters, closures (factory functions / module pattern), `WeakMap`, and ES modules (only what you `export` is public).

</details>
<details><summary><b>3. What access modifiers does JavaScript have?</b></summary>

Public (the default) and private (`#name`). There's no native `protected`; the `_name` prefix is only a convention and is still public. TypeScript has `public`/`protected`/`private`, checked only at compile time.

</details>
<details><summary><b>4. Can a child class access the parent's `#private` field?</b></summary>

No. `#private` members are accessible only inside the class body that declares them. The child must use the parent's public (or `_convention`) methods.

</details>
<details><summary><b>5. What are getters and setters? Why not just use public properties?</b></summary>

`get prop()` / `set prop(v)` run code when a property is read or written, while callers use normal property syntax. They allow validation, computed values (`fullName`), read-only properties (getter only), logging, and changing the internal storage without breaking callers.

</details>
<details><summary><b>6. What is abstraction? Give an example.</b></summary>

Hiding implementation details and exposing only the essential functionality. Example: a `CoffeeMachine` with one public `makeCoffee()` method and private `#boilWater()` / `#grindBeans()`; or `fetch()` hiding all networking details.

</details>
<details><summary><b>7. Encapsulation vs abstraction?</b></summary>

Encapsulation is about bundling data with methods and controlling access to it (how to protect). Abstraction is about hiding complexity and showing only what the user needs (what to show). Encapsulation is often the tool used to achieve abstraction.

</details>
<details><summary><b>8. How do you create an abstract class in JavaScript?</b></summary>

Throw in the constructor when `new.target === BaseClass`, and make "abstract" methods throw `Error("must implement")`. TypeScript has real `abstract` classes and methods, checked at compile time.

</details>
<details><summary><b>9. Does JavaScript have interfaces?</b></summary>

Not in plain JS; it relies on duck typing (if the object has the method, it works). TypeScript has `interface` and `implements`, but they're removed when compiled, so they exist only at compile time.

</details>
<details><summary><b>10. What is `new.target`?</b></summary>

Inside a constructor/function, it refers to the class or function that `new` was called on (`undefined` if called without `new`). Used to block direct creation of a base class.

</details>

## 🔁 Quick revision

1. Symbol that makes a class field private?
2. Is `_balance` private?
3. Keyword to define a getter?
4. A class with only a getter for `x`: what happens on `obj.x = 5`?
5. Real-life example of abstraction?

<details><summary>Answers</summary>

1. `#` · 2. No, it's a naming convention; still public · 3. `get` · 4. Ignored (TypeError in strict mode / inside class code) · 5. TV remote, ATM, car pedals, `fetch()`

</details>

---
[← Abstraction](05-abstraction.md) · [Level 3](README.md) · [Home](../README.md) · [Inheritance Basics →](../level-4-inheritance/01-inheritance-basics.md)
