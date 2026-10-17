# Lifecycle in Class Components

*Old code you may still see*

```jsx
class Counter extends React.Component {
  state = { count: 0 };
  componentDidMount() { /* like useEffect(fn, []) */ }
  componentDidUpdate(prevProps, prevState) { /* like useEffect(fn, [deps]) */ }
  componentWillUnmount() { /* like the cleanup function */ }
  render() {
    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>
      {this.state.count}
    </button>;
  }
}
```

> **Today :** Write new code with function components + hooks.

---
[← React Fiber](../level-11-under-the-hood-advanced/02-react-fiber.md) | [Level 11 index](README.md) | [All levels](../README.md) | [Error Boundaries →](../level-11-under-the-hood-advanced/04-error-boundaries.md)
