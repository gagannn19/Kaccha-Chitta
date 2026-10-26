# Practice Set 1 🚀

**Q1:** Create a simple div with an id "box". Add some text content inside the div. Set its background color to blue.

**Q2:** Create 3 headings with h1, h2 & h3. Give them all a class "heading" & set color of "heading" to red.

**Q3:** Create a button & set its background color to :
- green using css stylesheet
- blue using `<style>` tag
- pink using inline style

<details><summary>💡 Solution</summary>

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="style.css">
  <style>
    button { background-color: blue; }
  </style>
</head>
<body>
  <div id="box">Hello, I am a box</div>

  <h1 class="heading">Heading 1</h1>
  <h2 class="heading">Heading 2</h2>
  <h3 class="heading">Heading 3</h3>

  <button style="background-color: pink;">Click</button>
</body>
```

```css
/* style.css */
#box { background-color: blue; }
.heading { color: red; }
button { background-color: green; }
```

The button shows **pink**: inline beats both. Remove the inline style and it shows blue, because `<style>` is written after `<link>` (last one wins).

</details>

---
[← Specificity](15-specificity.md) · [Level 1](README.md) · [Home](../README.md) · [Text Properties : text-align →](17-text-properties-text-align.md)
