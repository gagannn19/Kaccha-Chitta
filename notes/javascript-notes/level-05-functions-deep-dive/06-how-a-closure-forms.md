# How a Closure Forms

*Step by step*

```
CALL STACK (top first)
Step 1 : outer() runs count = 0
   outer() | GEC
Step 2 : returns inner outer EC removed
   GEC
Step 3 : fn() runs count → 1
   fn() | GEC
Step 4 : fn() runs count → 2
   fn() | GEC
```

- outer's EC is deleted from the stack, but **count** is NOT garbage collected
- Because inner still holds a reference to it through the closure

---
[← Closures](../level-05-functions-deep-dive/05-closures.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Closure : Data Privacy →](../level-05-functions-deep-dive/07-closure-data-privacy.md)
