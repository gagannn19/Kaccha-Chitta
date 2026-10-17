# Link & NavLink

*Never use <a href> for internal pages*

```jsx
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>                // no reload

<NavLink
  to="/blog"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Blog
</NavLink>                                    // knows if it is the current page
```

> **Why :** &lt;a href&gt; reloads the whole page and loses all state.

---
[← Setup](../level-09-react-router/01-setup.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Dynamic Routes & useParams →](../level-09-react-router/03-dynamic-routes-useparams.md)
