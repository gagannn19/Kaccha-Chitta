# Conditional Rendering

*Show different UI based on a condition*

```jsx
function Greeting({ isLoggedIn, unread }) {
  if (!isLoggedIn) return <p>Please log in</p>;      // 1. early return

  return (
    <div>
      {isLoggedIn ? <Logout /> : <Login />}           {/* 2. ternary */}
      {unread > 0 && <span>{unread} new</span>}       {/* 3. && */}
    </div>
  );
}
```

> **Trap :** `{count && <p>..</p>}` shows 0 on screen when count is 0! Use `count > 0 &&`.

---
[← Styling in React](../level-01-react-basics/14-styling-in-react.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Build These →](../level-01-react-basics/16-build-these.md)
