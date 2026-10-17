# Throttling

*Run at most ONCE every X time*

```
limit = 2s : events keep firing
events | | |  |  | | |  |  | | |  |                         
wait   | ===============================                    
runs   | O         O         O                              
       | 0s        2s        4s        6s        8s        10s       
```

- First call runs, then the function is **locked** for 2s
- Calls during the lock are ignored

> **Example :** A gun fires one bullet, then needs time to reload - pressing the trigger faster does nothing.

---
[← Debounce Code](../level-10-debouncing-throttling/03-debounce-code.md) | [Level 10 index](README.md) | [All levels](../README.md) | [Throttle Code →](../level-10-debouncing-throttling/05-throttle-code.md)
