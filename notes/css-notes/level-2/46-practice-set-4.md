# Practice Set 4 🚀

<sub>Level 2 · Slide 46</sub>

**Q1:** Create a webpage layout with a header, a footer & a content area containing 3 divs. Set the height & width of divs to 100px. (add the previous navbar in the header)

**Q2:** Add borders to all the divs.

**Q3:** Add a different background color to each div with an opacity of 0.5

**Q4:** Give the content area an appropriate height.

<details><summary>💡 Solution</summary>

```html
<header> <!-- navbar from practice set 3 --> </header>
<main class="content">
  <div id="d1"></div>
  <div id="d2"></div>
  <div id="d3"></div>
</main>
<footer>footer</footer>
```

```css
.content { height: 300px; }
.content div {
  height: 100px; width: 100px;
  display: inline-block;
  border: 2px solid black;
  opacity: 0.5;
}
#d1 { background-color: red; }
#d2 { background-color: green; }
#d3 { background-color: blue; }
```

</details>

---
[← Alpha Channel](45-alpha-channel.md) · [Level 2](README.md) · [Home](../README.md) · [Units in CSS : Relative →](../level-3/48-units-in-css-relative.md)
