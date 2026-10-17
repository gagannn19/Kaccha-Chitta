# Important Questions : Level 2 ❓

> Try to answer first, then click a question to open the answer.

<details>
<summary><b>1. What are HTML attributes? Give examples.</b></summary>

Attributes add **extra information** to a tag. They are always written in the **opening tag** as `name="value"`.

```html
<html lang="en">
<a href="https://google.com">Google</a>
<img src="cat.png" alt="A cat" width="200">
```

Here `lang`, `href`, `src`, `alt` and `width` are attributes.

</details>

<details>
<summary><b>2. How many heading tags are there? Why use only one <code>&lt;h1&gt;</code>?</b></summary>

There are **6** : `<h1>` (most important, biggest) to `<h6>` (least important, smallest).

Use only **one `<h1>`** per page because it is the main title. Search engines (SEO) and screen readers use it to understand what the page is about. Don't skip levels just to get a smaller size, use CSS for size.

```html
<h1>HTML Notes</h1>          <!-- page title -->
  <h2>Level 1</h2>           <!-- section -->
    <h3>Meta Tags</h3>       <!-- sub-section -->
```

</details>

<details>
<summary><b>3. What happens to extra spaces and new lines inside a <code>&lt;p&gt;</code> tag?</b></summary>

The browser **collapses** them : many spaces / new lines become **one single space**.

```html
<p>Hello        World
   from    HTML</p>
<!-- shows : Hello World from HTML -->
```

To keep them, use `<pre>`. To force a new line, use `<br>`.

</details>

<details>
<summary><b>4. What does the <code>href</code> attribute do? What are absolute and relative links?</b></summary>

`href` = the address the link goes to.

- **Absolute URL** : full address, used for other websites.
- **Relative URL** : path to a file in **your own** project.

```html
<a href="https://google.com">Google</a>       <!-- absolute -->
<a href="about.html">About me</a>             <!-- relative -->
<a href="#contact">Go to contact</a>          <!-- same page section -->
<a href="mailto:me@mail.com">Email me</a>     <!-- opens email app -->
```

</details>

<details>
<summary><b>5. What are <code>src</code> and <code>alt</code> in the image tag? Why is <code>alt</code> important?</b></summary>

- `src` : path / link of the image.
- `alt` : text description of the image.

`alt` is important because :
1. It shows if the image **fails to load**.
2. **Screen readers** read it for blind users.
3. It helps **SEO** (Google understands the image).

```html
<img src="images/logo.png" alt="Company logo">
```

</details>

<details>
<summary><b>6. Difference between <code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code>? <code>&lt;i&gt;</code> and <code>&lt;em&gt;</code>?</b></summary>

Both look the same on screen, but :

| Visual only | With meaning (semantic) |
|---|---|
| `<b>` : bold | `<strong>` : **important** text |
| `<i>` : italic | `<em>` : **stressed** text |

Screen readers and search engines give extra importance to `<strong>` and `<em>`. Prefer them when the text really matters.

```html
<p><strong>Warning:</strong> do not share your password.</p>
<p>I <em>really</em> love HTML.</p>
```

</details>

<details>
<summary><b>7. What do <code>&lt;mark&gt;</code>, <code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code> do?</b></summary>

- `<mark>` : highlights text (yellow background)
- `<del>` : deleted text (line through)
- `<ins>` : inserted text (underlined)

```html
<p>Search result for <mark>HTML</mark></p>
<p>Price : <del>₹999</del> <ins>₹499</ins></p>
```

</details>

<details>
<summary><b>8. Write H₂O and a² + b² in HTML.</b></summary>

`<sub>` = below the line (subscript), `<sup>` = above the line (superscript).

```html
<p>H<sub>2</sub>O</p>
<p>a<sup>2</sup> + b<sup>2</sup></p>
```

</details>

<details>
<summary><b>9. Difference between <code>&lt;br&gt;</code> and <code>&lt;hr&gt;</code>?</b></summary>

| `<br>` | `<hr>` |
|---|---|
| Line break (moves text to next line) | Horizontal line (separates sections) |
| Invisible | Visible line |

Both are **empty tags** (no closing tag).

```html
<p>Gagan<br>Agra, India</p>
<hr>
<p>Next section</p>
```

</details>

<details>
<summary><b>10. Difference between <code>&lt;p&gt;</code> and <code>&lt;pre&gt;</code>?</b></summary>

- `<p>` : ignores extra spaces and new lines.
- `<pre>` : shows text **exactly as typed** (spaces + new lines kept), in a monospace font. Good for code or poems.

```html
<pre>
  Roses are red,
      Violets are blue.
</pre>
```

</details>

<details>
<summary><b>11. Why should we not use <code>&lt;big&gt;</code> or <code>&lt;u&gt;</code> for styling?</b></summary>

`<big>` is **removed in HTML5**. Styling (size, color, underline) is the job of **CSS**, not HTML. HTML should only describe structure / meaning.

```html
<!-- ❌ old way -->
<big>Big text</big>

<!-- ✅ modern way -->
<p style="font-size: 24px;">Big text</p>
```

</details>

<details>
<summary><b>12. Write a small "About Me" section using the tags from this level.</b></summary>

```html
<h1>About Me</h1>
<img src="me.jpg" alt="Photo of Gagan" width="150">
<p>Hi, I am <strong>Gagan</strong>. I am learning <em>web development</em>.</p>
<hr>
<h2>Contact</h2>
<p>
  City : Agra<br>
  Website : <a href="https://google.com">My site</a>
</p>
```

</details>

---
[← Pre Tag](23-pre-tag.md) · [Level 2](README.md) · [Home](../README.md) · [Page Layout Techniques →](../level-3/25-page-layout-techniques.md)
