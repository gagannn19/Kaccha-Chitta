# Throttle Code

```js
function throttle(fn, limit) {
  let locked = false;                     // remembered by closure
  return function (...args) {
    if (locked) return;                   // ignore while locked
    fn.apply(this, args);
    locked = true;
    setTimeout(() => (locked = false), limit);
  };
}
const onScroll = () => console.log("scroll position:", window.scrollY);
window.addEventListener("scroll", throttle(onScroll, 1000));
```

- Use for : scroll, mouse move, resize, shooting in games, button spam

---
[← Throttling](../level-10-debouncing-throttling/04-throttling.md) | [Level 10 index](README.md) | [All levels](../README.md) | [Debounce vs Throttle →](../level-10-debouncing-throttling/06-debounce-vs-throttle.md)
