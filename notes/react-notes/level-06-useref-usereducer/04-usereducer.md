# useReducer

*For complex state with many actions*

```mermaid
flowchart LR
  N0["UI (dispatch({ type: 'add' }))"]
  N1["reducer(state, action) (returns NEW state)"]
  N2["new state (re-render)"]
  N0 --> N1
  N1 --> N2
```

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset":     return { count: 0 };
    default:          return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
<button onClick={() => dispatch({ type: "increment" })}>+</button>
```

---
[← useRef for Values](../level-06-useref-usereducer/03-useref-for-values.md) | [Level 6 index](README.md) | [All levels](../README.md) | [useReducer : Todo Example →](../level-06-useref-usereducer/05-usereducer-todo-example.md)
