# Practice Set 7 🚀

<sub>Level 4 · Slide 73</sub>

**Qs:** Add a media query to implement the following:
- the color of a div changes to green for viewport width less than 300px
- the color of a div changes to pink for width between 300px & 400px
- the color of a div changes to red for width between 400px & 600px
- the color of a div changes to blue for width above 600px

<details><summary>💡 Solution</summary>

```css
@media (max-width: 299px)                         { div { background-color: green; } }
@media (min-width: 300px) and (max-width: 399px)  { div { background-color: pink; } }
@media (min-width: 400px) and (max-width: 599px)  { div { background-color: red; } }
@media (min-width: 600px)                         { div { background-color: blue; } }
```

Test it: open DevTools (F12) → toggle device toolbar (Ctrl+Shift+M) → drag the width.

</details>

---
[← Media Queries : range](72-media-queries-range.md) · [Level 4](README.md) · [Home](../README.md) · [Transitions →](../level-5/75-transitions.md)
