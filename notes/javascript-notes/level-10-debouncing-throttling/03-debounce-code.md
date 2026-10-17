# Debounce Code

```js
function debounce(fn, delay) {
  let timer;                              // remembered by closure
  return function (...args) {
    clearTimeout(timer);                  // cancel the previous one
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
const search = (e) => console.log("API call:", e.target.value);
input.addEventListener("input", debounce(search, 500));
```

- Use for : search boxes, auto-save, form validation, window resize end

---
[← Debouncing](../level-10-debouncing-throttling/02-debouncing.md) | [Level 10 index](README.md) | [All levels](../README.md) | [Throttling →](../level-10-debouncing-throttling/04-throttling.md)
