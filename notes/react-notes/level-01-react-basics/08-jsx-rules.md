# JSX Rules

```jsx
function Card() {
  return (
    <>                                    {/* 1. ONE parent (fragment) */}
      <h2 className="title">Card</h2>    {/* 2. className, not class */}
      <label htmlFor="email">Email</label>{/* 3. htmlFor, not for */}
      <img src="a.png" alt="" />          {/* 4. close every tag */}
      <p style={{ color: "red", fontSize: 20 }}>Hi</p>  {/* 5. style = object */}
      <button onClick={handleClick}>Go</button>          {/* 6. camelCase: onClick, not onclick */}
    </>
  );
}
```

## 🧩 Fragment `<> </>`

A component can return only **ONE parent** element.

```jsx
// ❌ Error - two parents side by side
return (
  <h2>Card</h2>
  <p>Hi</p>
);

// ✅ Wrap them in a fragment
return (
  <>
    <h2>Card</h2>
    <p>Hi</p>
  </>
);
```

💡 **Why use Fragment instead of `<div>`?**

A Fragment groups multiple elements without adding an extra HTML element to the DOM.

📦 Think of it as an invisible box that holds multiple elements together.

## 🎨 Why `style={{ }}` has two braces

```jsx
<p style="color: red">Hi</p>      // ❌ HTML way (CSS string) - error in React
<p style={{ color: "red" }}>Hi</p> // ✅ React way (JS object)
```

Two things are happening:

1️⃣ **Outer `{ }`** → `style={...}` lets us put **JavaScript** inside JSX (like `{name}`)
2️⃣ **Inner `{ }`** → `{ color: "red" }` is a **JavaScript object** holding the CSS properties.

## Why JavaScript object not CSS?
> Because React’s style attribute expects a JavaScript object, not a CSS string.

```jsx
const myStyle = { color: "red", fontSize: 20 };  // the object
<p style={myStyle}>Hi</p>                        // same thing, one brace
```

> ✍️ CSS properties use **camelCase**: `fontSize`, not `font-size`. Numbers mean `px` (`20` → `20px`).

---
[← JSX](../level-01-react-basics/07-jsx.md) | [Level 1 index](README.md) | [All levels](../README.md) | [JavaScript inside JSX →](../level-01-react-basics/09-javascript-inside-jsx.md)
