# Event Delegation

*One listener on the parent instead of many on children*

```jsx
// instead of adding a listener to every <li>
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("You clicked", e.target.innerText);
  }
});
```

- Works because of **bubbling** - the click on li reaches the ul
- Less memory, and works for items added later too

---
[← Event Bubbling & Capturing](../level-07-dom-events/06-event-bubbling-capturing.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Removing Listeners →](../level-07-dom-events/08-removing-listeners.md)
