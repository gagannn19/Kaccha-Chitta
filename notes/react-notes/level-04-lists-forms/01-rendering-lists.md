# Rendering Lists

*Use map() to turn data into JSX*

```jsx
const students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Neha", marks: 92 },
];

function StudentList() {
  return (
    <ul>
      {students.map((s) => (
        <li key={s.id}>{s.name} - {s.marks}</li>
      ))}
    </ul>
  );
}
```

---
[← Build These](../level-03-state-events/12-build-these.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Why Keys? →](../level-04-lists-forms/02-why-keys.md)
