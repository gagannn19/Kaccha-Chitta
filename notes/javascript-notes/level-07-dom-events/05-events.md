# Events

*React to what the user does*

```js
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (event) {
  console.log("clicked!", event.target);
});

input.addEventListener("input", (e) => console.log(e.target.value));
form.addEventListener("submit", (e) => {
  e.preventDefault();      // stop page reload
});
```

- Common events : **click, input, change, submit, keydown, mouseover, scroll, load**
- The callback gets an **event** object with details (target, key, ...)

---
[← Creating & Removing](../level-07-dom-events/04-creating-removing.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Event Bubbling & Capturing →](../level-07-dom-events/06-event-bubbling-capturing.md)
