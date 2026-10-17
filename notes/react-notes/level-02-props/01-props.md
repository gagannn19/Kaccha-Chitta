# Props

*Inputs to a component - like arguments to a function*

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age : {props.age}</p>
    </div>
  );
}
```

```jsx
function App() {
  return (
    <>
      <UserCard name="Aman" age={22} />
      <UserCard name="Neha" age={25} />
    </>
  );
}
```

- Strings in quotes, everything else in **{ }** - numbers, arrays, objects, functions
- Same component + different props = different output

---
[← Build These](../level-01-react-basics/16-build-these.md) | [Level 2 index](README.md) | [All levels](../README.md) | [One-Way Data Flow →](../level-02-props/02-one-way-data-flow.md)
