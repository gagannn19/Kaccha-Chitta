# State with Arrays

*Use methods that return a NEW array*

```js
const [todos, setTodos] = useState([]);

setTodos([...todos, newTodo]);                         // add
setTodos(todos.filter((t) => t.id !== id));            // delete
setTodos(todos.map((t) =>
  t.id === id ? { ...t, done: !t.done } : t            // update one
));
```

- **Avoid** (mutate)
- push, pop, splice
- arr[i] = x
- sort, reverse (in place)

- **Use** (new array)
- [...arr, x], concat
- map, filter, slice
- [...arr].sort(), toSorted()

---
[← State with Objects](../level-03-state-events/06-state-with-objects.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Handling Events →](../level-03-state-events/08-handling-events.md)
