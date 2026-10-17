# Important Questions : Level Pro ❓

> Try to answer first, then click a question to open the answer.

## Lists

<details>
<summary><b>1. Difference between <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>?</b></summary>

- `<ul>` : **unordered** list, shows bullets (•). Order doesn't matter.
- `<ol>` : **ordered** list, shows numbers (1, 2, 3). Order matters.

Each item is an `<li>` in both.

```html
<ul>
  <li>Milk</li>
  <li>Bread</li>
</ul>

<ol type="A" start="3">   <!-- C, D... -->
  <li>Boil water</li>
  <li>Add tea</li>
</ol>
```

</details>

<details>
<summary><b>2. How do you make a nested list?</b></summary>

Put a new `<ul>` / `<ol>` **inside an `<li>`**.

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

</details>

## Tables

<details>
<summary><b>3. What are <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code> and <code>&lt;th&gt;</code>?</b></summary>

- `<tr>` : table **row**
- `<td>` : table **data** (normal cell)
- `<th>` : table **header** cell (bold + centered by default)

```html
<table>
  <tr> <th>Name</th> <th>Roll No</th> </tr>
  <tr> <td>Shradha</td> <td>1664</td> </tr>
</table>
```

</details>

<details>
<summary><b>4. Why use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> and <code>&lt;caption&gt;</code>?</b></summary>

- `<caption>` : title of the table (first thing inside `<table>`).
- `<thead>` / `<tbody>` / `<tfoot>` : split the table into head, body and footer. Makes it easier to style with CSS and more readable for screen readers.

```html
<table>
  <caption>Student Data</caption>
  <thead>
    <tr> <th>Name</th> <th>Marks</th> </tr>
  </thead>
  <tbody>
    <tr> <td>Aman</td> <td>90</td> </tr>
  </tbody>
  <tfoot>
    <tr> <td>Total</td> <td>90</td> </tr>
  </tfoot>
</table>
```

</details>

<details>
<summary><b>5. Difference between <code>colspan</code> and <code>rowspan</code>?</b></summary>

- `colspan="n"` : one cell takes **n columns** (wider, horizontally).
- `rowspan="n"` : one cell takes **n rows** (taller, vertically).

```html
<table border="1">
  <tr> <th colspan="2">Marks</th> </tr>
  <tr> <td rowspan="2">Shradha</td> <td>Maths : 95</td> </tr>
  <tr> <td>Science : 90</td> </tr>
</table>
```

</details>

## Forms

<details>
<summary><b>6. What is a form? What do <code>action</code> and <code>method</code> do?</b></summary>

A `<form>` collects data from the user (login, sign up, contact).

- `action` : **where** to send the data (URL of the server).
- `method` : **how** to send it (`GET` or `POST`).

```html
<form action="/login" method="POST">
  <input type="email" name="email">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form>
```

</details>

<details>
<summary><b>7. Difference between GET and POST?</b></summary>

| GET | POST |
|---|---|
| Data shows in the **URL** (`?q=html`) | Data hidden in the request body |
| Can be bookmarked | Can't be bookmarked |
| Limited size | No real size limit |
| For **search**, filters | For **login, sign up**, payments |

```html
<form action="/search" method="GET">
  <input type="text" name="q">   <!-- URL : /search?q=html -->
</form>
```

</details>

<details>
<summary><b>8. Why is the <code>name</code> attribute important in form inputs?</b></summary>

`name` is the **key** the server receives with the value. Without `name`, the input's data is **not sent** at all.

```html
<input type="text" name="username">
<!-- sent as : username=gagan -->
```

</details>

<details>
<summary><b>9. Difference between <code>placeholder</code> and <code>value</code>?</b></summary>

- `placeholder` : grey **hint** text, disappears when you type, is **not** sent.
- `value` : the **actual data** in the input, is sent with the form.

```html
<input type="text" placeholder="Enter name">
<input type="text" value="Gagan">
```

</details>

<details>
<summary><b>10. Name some input types and useful input attributes.</b></summary>

Types : `text`, `email`, `password`, `number`, `date`, `file`, `color`, `range`, `checkbox`, `radio`, `submit`

Attributes : `required`, `placeholder`, `value`, `min`, `max`, `maxlength`, `readonly`, `disabled`

```html
<input type="email" name="email" required>
<input type="number" name="age" min="18" max="60">
<input type="text" name="pin" maxlength="6">
<input type="text" value="India" readonly>
```

</details>

<details>
<summary><b>11. Why use <code>&lt;label&gt;</code>? How does <code>for</code> work?</b></summary>

`<label>` gives a text name to an input. The label's `for` must match the input's `id`. Then clicking the **label text** also selects the input, and screen readers read the label.

```html
<label for="email">Email</label>
<input type="email" id="email" name="email">
```

</details>

<details>
<summary><b>12. Radio vs checkbox? How do you group radio buttons?</b></summary>

- **Radio** : pick only **one** option.
- **Checkbox** : pick **many** options.

Radio buttons are grouped by giving them the **same `name`**.

```html
<!-- only one can be picked -->
<input type="radio" name="gender" id="m" value="male"> <label for="m">Male</label>
<input type="radio" name="gender" id="f" value="female"> <label for="f">Female</label>

<!-- many can be picked -->
<input type="checkbox" name="skill" id="h" value="html" checked> <label for="h">HTML</label>
<input type="checkbox" name="skill" id="c" value="css"> <label for="c">CSS</label>
```

</details>

<details>
<summary><b>13. Difference between <code>&lt;input type="text"&gt;</code> and <code>&lt;textarea&gt;</code>?</b></summary>

- `input type="text"` : **one line** only, empty tag.
- `<textarea>` : **many lines**, has a closing tag. Size with `rows` and `cols`.

```html
<input type="text" name="title">
<textarea name="feedback" rows="4" cols="30" placeholder="Your feedback"></textarea>
```

</details>

<details>
<summary><b>14. How do you make a dropdown with a default selected option?</b></summary>

Use `<select>` with `<option>`s. Add `selected` to the default one.

```html
<label for="city">City</label>
<select name="city" id="city">
  <option value="">-- choose --</option>
  <option value="Delhi">Delhi</option>
  <option value="Agra" selected>Agra</option>
</select>
```

</details>

<details>
<summary><b>15. Difference between <code>class</code> and <code>id</code>?</b></summary>

| `id` | `class` |
|---|---|
| **Unique** : one element only | **Reusable** : many elements |
| CSS : `#box` | CSS : `.card` |
| One element has one id | One element can have many classes |

```html
<div id="navbar" class="dark sticky"></div>
<div class="card"></div>
<div class="card"></div>
```

</details>

## Media

<details>
<summary><b>16. What is an iframe? Give a use case.</b></summary>

`<iframe>` shows **another web page inside your page** (website inside website). Used for YouTube videos, Google Maps etc.

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID"
        width="560" height="315" title="YouTube video"></iframe>
```

</details>

<details>
<summary><b>17. How do you add a video with controls that autoplays?</b></summary>

Browsers only allow autoplay when the video is **muted**.

```html
<video src="myVid.mp4" controls autoplay muted loop width="400">
  Your browser does not support video.
</video>
```

</details>

<details>
<summary><b>18. Why use the <code>&lt;source&gt;</code> tag?</b></summary>

To give **backup file formats**. Not every browser supports every format, so the browser plays the **first one it can**. The text at the end shows if nothing works.

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser does not support audio.
</audio>
```

</details>

## Entities

<details>
<summary><b>19. What are HTML entities? How do you show <code>&lt;p&gt;</code> as text on the page?</b></summary>

Entities are codes for **special characters** that HTML would otherwise treat as code, or that are hard to type.

| Entity | Shows |
|---|---|
| `&lt;` | < |
| `&gt;` | > |
| `&amp;` | & |
| `&copy;` | © |
| `&nbsp;` | extra space |

```html
<p>The paragraph tag is &lt;p&gt;</p>
<!-- shows : The paragraph tag is <p> -->
```

</details>

## Final challenge 🚀

<details>
<summary><b>20. Build a complete registration form using everything from this level.</b></summary>

```html
<form action="/register" method="POST">
  <h2>Register</h2>

  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Enter name" required>
  <br>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>
  <br>

  <label for="pass">Password</label>
  <input type="password" id="pass" name="password" required>
  <br>

  <p>Class :</p>
  <input type="radio" id="x" name="class" value="X"> <label for="x">Class X</label>
  <input type="radio" id="xii" name="class" value="XII"> <label for="xii">Class XII</label>

  <p>Subjects :</p>
  <input type="checkbox" id="maths" name="subject" value="maths"> <label for="maths">Maths</label>
  <input type="checkbox" id="sci" name="subject" value="science"> <label for="sci">Science</label>
  <br>

  <label for="city">City</label>
  <select id="city" name="city">
    <option value="Delhi">Delhi</option>
    <option value="Agra">Agra</option>
  </select>
  <br>

  <label for="about">About you</label>
  <textarea id="about" name="about" rows="3"></textarea>
  <br>

  <button type="submit">Register</button>
</form>
```

</details>

---
[← HTML Entities](55-html-entities.md) · [Level Pro](README.md) · [Home](../README.md)
