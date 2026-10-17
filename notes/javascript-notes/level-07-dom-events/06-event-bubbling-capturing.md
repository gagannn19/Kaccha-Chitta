# Event Bubbling & Capturing

*Events travel through the tree*

```
[div#grandparent]
   [div#parent]
      [button#child]
         click!
```

- **1. Capturing** ↓ - window → grandparent → parent → child
- **2. Target** - the child itself
- **3. Bubbling** ↑ (default) - child → parent → grandparent

```js
parent.addEventListener("click", fn);         // bubbling phase
parent.addEventListener("click", fn, true);   // capturing phase
e.stopPropagation();                          // stop it travelling further
```

---
[← Events](../level-07-dom-events/05-events.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Event Delegation →](../level-07-dom-events/07-event-delegation.md)
