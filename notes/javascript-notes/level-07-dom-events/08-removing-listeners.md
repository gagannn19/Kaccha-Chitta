# Removing Listeners

*Event listeners are heavy*

```js
function handleClick() { console.log("clicked"); }
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);   // must be the SAME function
```

- Every listener is a closure - its memory can't be freed while it is attached
- Many scroll / click / hover listeners slow the page. Remove them when not needed

---
[← Event Delegation](../level-07-dom-events/07-event-delegation.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Practice Set 7 →](../level-07-dom-events/09-practice-set-7.md)
