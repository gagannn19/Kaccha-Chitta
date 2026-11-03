# JSX

*HTML-like syntax inside JavaScript*

```jsx
const name = "Gagan";
const element = <h1 className="title">Hello, {name}!</h1>;

// JSX is converted by the compiler into plain JS:
const element2 = React.createElement("h1", { className: "title" }, "Hello, ", name, "!");
```

- JSX is NOT HTML - it is syntactic sugar for **React.createElement()**
- Browsers don't understand JSX. **Vite / Babel** converts it before it runs

## 🔍 Reading `React.createElement()`

```js
React.createElement("h1", { className: "title" }, "Hello, ", name, "!");
//                   1️⃣        2️⃣                    3️⃣
```

| Part | Means | In JSX |
|---|---|---|
| 1️⃣ `"h1"` | 🏷️ **which tag** to make | `<h1>` |
| 2️⃣ `{ className: "title" }` | ⚙️ its **attributes** (props) | `className="title"` |
| 3️⃣ `"Hello, ", name, "!"` | 📝 what goes **inside** (children) | `Hello, {name}!` |

> 💡 The text inside is split into pieces: `"Hello, "` + `name` + `"!"` → shows **Hello, Gagan!**

---
[← How React Starts](../level-01-react-basics/06-how-react-starts.md) | [Level 1 index](README.md) | [All levels](../README.md) | [JSX Rules →](../level-01-react-basics/08-jsx-rules.md)
