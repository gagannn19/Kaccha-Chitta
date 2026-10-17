# Changing Elements

```jsx
const h1 = document.querySelector("h1");
h1.innerText = "New title";              // text only
h1.innerHTML = "<span>Bold</span>";      // parses HTML (careful with user input)
h1.style.color = "orange";               // inline style
h1.classList.add("active");              // add / remove / toggle / contains
h1.setAttribute("id", "main");
h1.getAttribute("id");                   // "main"
```

---
[← Selecting Elements](../level-07-dom-events/02-selecting-elements.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Creating & Removing →](../level-07-dom-events/04-creating-removing.md)
