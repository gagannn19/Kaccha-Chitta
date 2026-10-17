# JSX Rules

```jsx
function Card() {
  return (
    <>                                    {/* 1. ONE parent (fragment) */}
      <h2 className="title">Card</h2>    {/* 2. className, not class */}
      <label htmlFor="email">Email</label>{/* 3. htmlFor, not for */}
      <img src="a.png" alt="" />          {/* 4. close every tag */}
      <p style={{ color: "red", fontSize: 20 }}>Hi</p>  {/* 5. style = object */}
      <button onClick={handleClick}>Go</button>          {/* 6. camelCase events */}
    </>
  );
}
```

---
[← JSX](../level-01-react-basics/07-jsx.md) | [Level 1 index](README.md) | [All levels](../README.md) | [JavaScript inside JSX →](../level-01-react-basics/09-javascript-inside-jsx.md)
