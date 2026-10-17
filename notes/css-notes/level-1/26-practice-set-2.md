# Practice Set 2 🚀

<sub>Level 1 · Slide 26</sub>

**Q1:** Create a heading centred on the page with all of its text capitalized by default.

**Q2:** Set the font family of all the content in the document to "Times New Roman".

**Q3:** Create one div inside another div. Set id & text "outer" for the first one & "inner" for the second one. Set the outer div text size to 25px & inner div text size to 10px.

<details><summary>💡 Solution</summary>

```html
<h1>my first heading</h1>
<div id="outer">outer
  <div id="inner">inner</div>
</div>
```

```css
h1 { text-align: center; text-transform: uppercase; }
* { font-family: "Times New Roman", serif; }
#outer { font-size: 25px; }
#inner { font-size: 10px; }
```

</details>

---
[← Text Properties : more](25-text-properties-more.md) · [Level 1](README.md) · [Home](../README.md) · [Box Model in CSS →](../level-2/28-box-model-in-css.md)
