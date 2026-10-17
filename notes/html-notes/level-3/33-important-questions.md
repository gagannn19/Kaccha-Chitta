# Important Questions : Level 3 ❓

> Try to answer first, then click a question to open the answer.

<details>
<summary><b>1. What are semantic tags? Why use them?</b></summary>

A **semantic tag** clearly describes the **meaning** of its content, both to the browser and to developers.

Why use them :
1. **SEO** : search engines understand the page better.
2. **Accessibility** : screen readers can jump to `<nav>`, `<main>`...
3. **Readable code** : easier than a page full of `<div>`s.

```html
<!-- ❌ non-semantic -->
<div class="header">...</div>

<!-- ✅ semantic -->
<header>...</header>
```

</details>

<details>
<summary><b>2. Make a basic page layout using semantic tags.</b></summary>

```html
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
    </nav>
  </header>

  <main>
    <section>
      <article>
        <h2>My first post</h2>
        <p>Post content...</p>
      </article>
    </section>
    <aside>Ads / related links</aside>
  </main>

  <footer>
    <p>&copy; 2026 My Blog</p>
  </footer>
</body>
```

</details>

<details>
<summary><b>3. Difference between <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> and <code>&lt;aside&gt;</code>?</b></summary>

| Tag | Use | Example |
|---|---|---|
| `<section>` | A group of related content | "Our Services" part of a page |
| `<article>` | Content that makes sense **on its own** | Blog post, news story, comment |
| `<aside>` | Content **beside** the main content | Ads, sidebar, related links |

</details>

<details>
<summary><b>4. How many <code>&lt;main&gt;</code> tags can a page have?</b></summary>

Only **one** visible `<main>` per page. It holds the main, unique content of the page (not the header, navbar or footer that repeat on every page).

</details>

<details>
<summary><b>5. How do you open a link in a new tab?</b></summary>

Use `target="_blank"`. Add `rel="noopener"` for safety, so the new page can't control your page.

```html
<a href="https://google.com" target="_blank" rel="noopener">Google</a>
```

</details>

<details>
<summary><b>6. How do you make an image clickable?</b></summary>

Put the `<img>` **inside** an `<a>` tag.

```html
<a href="https://google.com">
  <img src="logo.png" alt="Google logo" width="100">
</a>
```

</details>

<details>
<summary><b>7. How do you resize an image without stretching it?</b></summary>

Give **only one** of `width` or `height`. The browser calculates the other one and keeps the shape (aspect ratio).

```html
<img src="cat.png" alt="cat" width="200">   <!-- ✅ keeps shape -->
<img src="cat.png" alt="cat" width="200" height="50">   <!-- ❌ stretched -->
```

</details>

<details>
<summary><b>8. What is the difference between block and inline elements?</b></summary>

| Block | Inline |
|---|---|
| Starts on a **new line** | Stays **in the same line** |
| Takes **full width** | Takes only the **width it needs** |
| `<div>`, `<p>`, `<h1>`, `<ul>`, `<section>` | `<span>`, `<a>`, `<img>`, `<b>`, `<input>` |

```html
<div>Block 1</div>
<div>Block 2</div>          <!-- each on its own line -->

<span>Inline 1</span>
<span>Inline 2</span>       <!-- side by side -->
```

</details>

<details>
<summary><b>9. Difference between <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>?</b></summary>

Both are **containers with no meaning**, used to group things for styling with CSS.

- `<div>` : **block** container, for big parts of a page.
- `<span>` : **inline** container, for a small part of text.

```html
<div class="card">
  <p>My name is <span style="color: red;">Gagan</span>.</p>
</div>
```

</details>

<details>
<summary><b>10. When should you use <code>&lt;div&gt;</code> instead of a semantic tag?</b></summary>

Only when **no semantic tag fits**, usually for styling / layout wrappers. If the content is a header, navbar, article, footer etc., use the semantic tag.

```html
<article>                     <!-- has meaning : a blog post -->
  <div class="post-image">    <!-- just a wrapper for CSS -->
    <img src="post.jpg" alt="Post cover">
  </div>
</article>
```

</details>

<details>
<summary><b>11. Can a block element go inside an inline element?</b></summary>

Generally **no** : don't put `<div>` or `<p>` inside `<span>`. Inline elements should hold only text or other inline elements.

(Exception : in HTML5, `<a>` can wrap block elements, like a whole card.)

```html
<!-- ❌ wrong -->
<span><div>Hello</div></span>

<!-- ✅ correct -->
<div><span>Hello</span></div>
```

</details>

<details>
<summary><b>12. Is <code>&lt;img&gt;</code> block or inline? Is <code>&lt;li&gt;</code>?</b></summary>

- `<img>` : **inline** (images sit next to each other in a line).
- `<li>` : **block** (each list item starts on a new line).

</details>

---
[← List : Span Tags](32-list-span-tags.md) · [Level 3](README.md) · [Home](../README.md) · [List in HTML →](../level-pro/34-list-in-html.md)
