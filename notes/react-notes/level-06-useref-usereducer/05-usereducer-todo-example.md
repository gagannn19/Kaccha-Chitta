# useReducer : Todo Example

```js
function todoReducer(todos, action) {
  switch (action.type) {
    case "add":
      return [...todos, { id: Date.now(), text: action.text, done: false }];
    case "toggle":
      return todos.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    case "delete":
      return todos.filter((t) => t.id !== action.id);
    default:
      return todos;
  }
}
const [todos, dispatch] = useReducer(todoReducer, []);
dispatch({ type: "add", text: "Learn React" });
```

> **Why :** All update logic in ONE place, outside the component. Easy to test & read. Same idea as Redux.

---
[← useReducer](../level-06-useref-usereducer/04-usereducer.md) | [Level 6 index](README.md) | [All levels](../README.md) | [useState vs useReducer →](../level-06-useref-usereducer/06-usestate-vs-usereducer.md)
