# Error Boundaries

*Catch crashes so the whole app doesn't go blank*

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error, info);           // send to a logging service
  }
  render() {
    if (this.state.hasError) return <h2>Something went wrong.</h2>;
    return this.props.children;
  }
}
<ErrorBoundary><Dashboard /></ErrorBoundary>
```

> **Note :** Catches errors during rendering only - not in event handlers or async code (use try / catch there).

---
[← Lifecycle in Class Components](../level-11-under-the-hood-advanced/03-lifecycle-in-class-components.md) | [Level 11 index](README.md) | [All levels](../README.md) | [Portals →](../level-11-under-the-hood-advanced/05-portals.md)
