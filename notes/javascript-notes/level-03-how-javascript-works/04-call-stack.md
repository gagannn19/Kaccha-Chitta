# Call Stack

*JS keeps track of ECs using a stack (last in, first out)*

```
CALL STACK (top first)
Step 1 : Program starts
   GEC
Step 2 : square(n) called
   square(n) | GEC
Step 3 : return 4
   GEC
Step 4 : square(4) called
   square(4) | GEC
Step 5 : return 16
   GEC
Step 6 : Program ends
   (empty)
```

- New EC → **pushed** on top.  Finished EC → **popped** off
- Other names : Execution Context Stack, Program Stack, Runtime Stack

> **Example :** Like a stack of plates : you always take the top plate first.

---
[← Phase 2 : Code Execution](../level-03-how-javascript-works/03-phase-2-code-execution.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Hoisting →](../level-03-how-javascript-works/05-hoisting.md)
