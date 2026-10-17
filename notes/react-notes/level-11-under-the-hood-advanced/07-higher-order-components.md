# Higher-Order Components

*A function that takes a component & returns a new one*

```jsx
function withLoader(Component) {
  return function Wrapped({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}
const UserListWithLoader = withLoader(UserList);
<UserListWithLoader isLoading={loading} users={users} />
```

> **Chain :** Same idea as higher-order functions from JS Level 5. Today custom hooks usually replace HOCs.

---
[← Composition Patterns](../level-11-under-the-hood-advanced/06-composition-patterns.md) | [Level 11 index](README.md) | [All levels](../README.md) | [useTransition →](../level-11-under-the-hood-advanced/08-usetransition.md)
