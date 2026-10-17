# Important Questions : Level 1 ❓

> Try to answer first, then click a question to open the answer.

<details>
<summary><b>1. What is HTML? Is it a programming language?</b></summary>

**HTML** = **H**yper **T**ext **M**arkup **L**anguage. It gives a web page its **structure** (headings, paragraphs, images, links...).

It is **not** a programming language. It is a **markup language** : it has no logic (no `if`, no loops, no variables). It only describes content.

| HTML | CSS | JS |
|---|---|---|
| Structure | Style | Logic |

```html
<h1>My Website</h1>
<p>This is structure, written in HTML.</p>
```

</details>

<details>
<summary><b>2. What is the difference between an HTML tag and an HTML element?</b></summary>

- **Tag** : the keyword inside angle brackets, like `<p>` or `</p>`.
- **Element** : the complete thing = opening tag + content + closing tag.

```html
<p>  Hello  </p>
<!-- ↑ opening tag   ↑ content   ↑ closing tag -->
<!-- the whole line together is one ELEMENT -->
```

</details>

<details>
<summary><b>3. What are empty (void / self-closing) elements? Give examples.</b></summary>

Elements that have **no content and no closing tag**.

Examples : `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`, `<link>`

```html
<p>Line one<br>Line two</p>
<hr>
<img src="cat.png" alt="A cat">
<input type="text">
```

</details>

<details>
<summary><b>4. Why is the homepage file usually named <code>index.html</code>?</b></summary>

When you open a folder on a web server (e.g. `example.com/`), the server looks for **`index.html`** by default and shows it. So it becomes the **homepage** without typing the file name.

```
my-website/
├── index.html    ← opens at example.com/
├── about.html    ← opens at example.com/about.html
└── style.css
```

</details>

<details>
<summary><b>5. Write the basic structure of an HTML page and explain each part.</b></summary>

```html
<!DOCTYPE html>               <!-- this is an HTML5 document -->
<html lang="en">              <!-- root element, parent of everything -->
  <head>                      <!-- info ABOUT the page (not shown) -->
    <meta charset="UTF-8">
    <title>My Page</title>    <!-- text on the browser tab -->
  </head>
  <body>                      <!-- everything shown on the screen -->
    <h1>Hello World</h1>
  </body>
</html>
```

</details>

<details>
<summary><b>6. What is <code>&lt;!DOCTYPE html&gt;</code>? Is it a tag?</b></summary>

It is **not an HTML tag**, it is a **declaration**. It tells the browser : "this page is written in **HTML5**".

Without it, the browser may switch to **quirks mode** (old, buggy rendering rules), and the page can look different across browsers.

```html
<!DOCTYPE html>   <!-- always the very first line -->
```

</details>

<details>
<summary><b>7. What is the difference between <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>?</b></summary>

| `<head>` | `<body>` |
|---|---|
| Information **about** the page (metadata) | The **content** of the page |
| Not shown on the screen | Shown on the screen |
| `<title>`, `<meta>`, `<link>`, `<script>` | `<h1>`, `<p>`, `<img>`, `<a>`... |

```html
<head>
  <title>Shop</title>              <!-- shows on the tab -->
</head>
<body>
  <h1>Welcome to the shop</h1>     <!-- shows on the page -->
</body>
```

</details>

<details>
<summary><b>8. Where does the text inside <code>&lt;title&gt;</code> appear?</b></summary>

On the **browser tab** (and in bookmarks and Google search results). It does **not** appear on the page itself.

```html
<head>
  <title>Gagan's Portfolio</title>
</head>
```

</details>

<details>
<summary><b>9. What are meta tags? Explain <code>charset</code> and <code>viewport</code>.</b></summary>

Meta tags give **extra information about the page** to the browser and search engines. They go inside `<head>`.

- `charset="UTF-8"` : shows all characters correctly (Hindi, emojis, ©, ₹...).
- `viewport` : makes the page fit the **mobile screen** width instead of looking zoomed out.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free HTML notes for beginners">
</head>
```

</details>

<details>
<summary><b>10. How do you connect a CSS file and a JS file to an HTML page?</b></summary>

- CSS : `<link>` inside `<head>`
- JS : `<script>` (usually at the end of `<body>`, or in `<head>` with `defer`)

```html
<head>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
```

</details>

<details>
<summary><b>11. What are comments in HTML? Why use them?</b></summary>

Comments are notes in the code that the browser **ignores** (not shown on the page). Used to explain code or to temporarily hide code.

```html
<!-- Navbar starts here -->
<nav>...</nav>

<!-- <p>This paragraph is hidden for now</p> -->
```

Shortcut in VS Code : `Ctrl + /` (Mac : `Cmd + /`).

</details>

<details>
<summary><b>12. Is HTML case sensitive?</b></summary>

**No.** `<BODY>` and `<body>` mean the same thing. But always write **lowercase**, it is the standard.

```html
<P>Works</P>
<p>Works too, and this is the correct style</p>
```

</details>

<details>
<summary><b>13. What is nesting? What is wrong with this code?</b></summary>

```html
<p><b>Hello</p></b>
```

**Nesting** = putting one element inside another. The rule : **the tag opened last must be closed first**.

```html
<!-- ❌ wrong -->
<p><b>Hello</p></b>

<!-- ✅ correct -->
<p><b>Hello</b></p>
```

</details>

<details>
<summary><b>14. How can you see or edit the HTML of any website?</b></summary>

- **View Page Source** : right click → *View Page Source* (`Ctrl + U`) shows the original HTML.
- **Inspect Element** : right click → *Inspect* (`F12`) lets you see and **edit** HTML live. Changes are only on your screen and disappear on refresh.

</details>

---
[← HTML is NOT case sensitive](10-html-is-not-case-sensitive.md) · [Level 1](README.md) · [Home](../README.md) · [Basic HTML Tags →](../level-2/12-basic-html-tags.md)
