# Debouncing

*Run only after the user STOPS for some time*

```
delay = 2s : typing at 0, 0.5, 1, 1.5s then a pause
events | | |  |  |                     | |                  
wait   |         ===========             ===========        
runs   |                   O                       O        
       | 0s        2s        4s        6s        8s        10s       
```

- Every new event **cancels** the old timer and starts a new one
- Function runs only when there is a gap of 2s

> **Example :** A lift door : it closes only when nobody has entered for a few seconds.

---
[← The Problem](../level-10-debouncing-throttling/01-the-problem.md) | [Level 10 index](README.md) | [All levels](../README.md) | [Debounce Code →](../level-10-debouncing-throttling/03-debounce-code.md)
