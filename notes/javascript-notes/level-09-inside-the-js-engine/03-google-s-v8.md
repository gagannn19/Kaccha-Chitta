# Google's V8

```mermaid
flowchart LR
  N0["JS Code"]
  N1["Parser"]
  N2["AST"]
  N3["Ignition (interpreter)"]
  N4["Bytecode"]
  N0 --> N1
  N1 --> N2
  N2 --> N3
  N3 --> N4
```

↓ hot code

TurboFan (optimising compiler)→Optimised machine code

- Garbage collector in V8 : **Orinoco**.  Is JS compiled? **Yes - JIT compiled**

---
[← Inside the Engine](../level-09-inside-the-js-engine/02-inside-the-engine.md) | [Level 9 index](README.md) | [All levels](../README.md) | [The Problem →](../level-10-debouncing-throttling/01-the-problem.md)
