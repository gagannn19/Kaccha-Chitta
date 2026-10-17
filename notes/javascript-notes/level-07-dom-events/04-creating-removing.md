# Creating & Removing

```js
const li = document.createElement("li");
li.innerText = "New item";
document.querySelector("ul").append(li);   // add at end
// prepend() -> start,  before() / after() -> next to an element

li.remove();                               // delete it
```

---
[← Changing Elements](../level-07-dom-events/03-changing-elements.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Events →](../level-07-dom-events/05-events.md)
