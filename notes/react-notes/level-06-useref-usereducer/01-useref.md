# useRef

*A box that keeps a value WITHOUT causing re-renders*

```js
const ref = useRef(initialValue);
ref.current;           // read
ref.current = 10;      // write - no re-render!
```

|  | useState | useRef |
|---|---|---|
| Remembers value between renders | yes | yes |
| Changing it re-renders | yes | **no** |
| Use for | data shown on screen | DOM nodes, timer ids, previous values |

---
[← Build These](../level-05-useeffect/10-build-these.md) | [Level 6 index](README.md) | [All levels](../README.md) | [useRef for DOM Elements →](../level-06-useref-usereducer/02-useref-for-dom-elements.md)
