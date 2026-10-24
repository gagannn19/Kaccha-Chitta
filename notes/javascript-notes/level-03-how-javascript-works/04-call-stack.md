# Call Stack

*JS keeps track of ECs using a stack (last in, first out)*

For the code from the last page :

```js
var square2 = square(n);   // n = 2
var square4 = square(4);
```

```text
1. start      2. square(n)  3. return 4   4. square(4)  5. return 16  6. end

              ┌───────────┐               ┌───────────┐
              │ square(n) │               │ square(4) │
┌───────────┐ ├───────────┤ ┌───────────┐ ├───────────┤ ┌───────────┐
│    GEC    │ │    GEC    │ │    GEC    │ │    GEC    │ │    GEC    │   (empty)
└───────────┘ └───────────┘ └───────────┘ └───────────┘ └───────────┘
  GEC pushed       push          pop           push          pop        GEC popped
```

- New EC → **pushed** on top
- Finished EC → **popped** off
- Other names : Execution Context Stack, Program Stack, Runtime Stack

> **Example :** Like a stack of plates : you always take the top plate first.

---
[← Phase 2 : Code Execution](../level-03-how-javascript-works/03-phase-2-code-execution.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Hoisting →](../level-03-how-javascript-works/05-hoisting.md)
