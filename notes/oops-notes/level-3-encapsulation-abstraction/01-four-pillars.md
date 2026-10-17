# The 4 Pillars of OOP

<sub>Level 3 : Encapsulation & Abstraction</sub>

![4 pillars](../images/pillars.png)

| Pillar | One line | JavaScript tool |
|---|---|---|
| **Encapsulation** | bundle data + methods, and **control access** to the data | `#private` fields, getters/setters, closures |
| **Abstraction** | **hide implementation details**, show only the essential functionality | simple public methods, `#private` helpers, base classes that throw, modules |
| **Inheritance** | a child class **reuses** the properties and methods of a parent | `extends`, `super`, the prototype chain, mixins |
| **Polymorphism** | the **same method** behaves **differently** for different objects | method overriding, duck typing |

All four in one small example:

```js
class Payment {                                   // abstraction: callers only know pay()
  #log = [];                                      // encapsulation: private history
  pay(amount) {
    this.#log.push(amount);
    return `${this.method()}: paid ₹${amount}`;
  }
  method() { return "Generic"; }
  get count() { return this.#log.length; }
}
class UpiPayment extends Payment {                // inheritance: reuses pay()
  method() { return "UPI"; }                      // polymorphism: own version of method()
}
class CardPayment extends Payment {
  method() { return "Card"; }
}

const payments = [new UpiPayment(), new CardPayment()];
payments.forEach(p => console.log(p.pay(500)));   // same call, different behaviour
console.log(payments[0].count);
```
**Output:**
```
UPI: paid ₹500
Card: paid ₹500
1
```

Order in these notes: **Encapsulation & Abstraction** (this level) → **Inheritance** (Level 4) → **Polymorphism** (Level 5).

## 🧠 Interview answer

> **"The four pillars of OOP are encapsulation, abstraction, inheritance and polymorphism. Encapsulation bundles data with methods and controls access to it; abstraction hides implementation details and exposes only what's needed; inheritance lets a child class reuse a parent's features; and polymorphism lets the same method behave differently for different objects."**

## 🎯 Memory trick

> **A PIE 🥧 = Abstraction, Polymorphism, Inheritance, Encapsulation.**

---
[← Level 2 : Interview & Revision Questions](../level-2-constructors/interview-questions.md) · [Level 3](README.md) · [Home](../README.md) · [Encapsulation →](02-encapsulation.md)
