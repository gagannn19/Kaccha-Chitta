# State with Objects

*Never mutate - always create a new object*

```js
const [user, setUser] = useState({ name: "Aman", age: 22 });

user.age = 23;                 // WRONG - same object, React sees no change
setUser(user);                 // no re-render

setUser({ ...user, age: 23 }); // RIGHT - copy, then change
setUser((prev) => ({ ...prev, age: prev.age + 1 }));
```

> **Why :** React checks if state changed using === (reference). Same object = 'nothing changed'. That's Primitive vs Reference from JS Level 2!

---
[← Functional Updates](../level-03-state-events/05-functional-updates.md) | [Level 3 index](README.md) | [All levels](../README.md) | [State with Arrays →](../level-03-state-events/07-state-with-arrays.md)
