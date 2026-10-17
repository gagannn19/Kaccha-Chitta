# Practice Set 6 🚀

<sub>Level 4 · Slide 70</sub>

**Qs:** Create a navbar with 4 options in the form of anchor tags inside list items. Now, use flexbox to place them all spaced equally in a single line.

**Qs:** Use flexbox to center one div inside another div.

**Qs:** Which has higher priority - align-items or align-self?

<details><summary>💡 Solution</summary>

```html
<ul class="nav">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Projects</a></li>
  <li><a href="#">Contact</a></li>
</ul>

<div class="outer"><div class="inner"></div></div>
```

```css
.nav { display: flex; justify-content: space-evenly; list-style: none; }

.outer {
  height: 300px;
  display: flex;
  justify-content: center;   /* horizontal */
  align-items: center;       /* vertical */
}
.inner { height: 100px; width: 100px; background: orange; }
```

**align-self** has higher priority. It overrides align-items for that one item.

</details>

---
[← Grid Item](69-grid-item.md) · [Level 4](README.md) · [Home](../README.md) · [Media Queries →](71-media-queries.md)
