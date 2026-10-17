# Composition Patterns

*Build flexible components*

```jsx
// Compound components - like <select> and <option>
<Tabs>
  <Tabs.List>
    <Tabs.Tab id="1">Profile</Tabs.Tab>
    <Tabs.Tab id="2">Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="1"><Profile /></Tabs.Panel>
</Tabs>

// Render props - parent decides what to render
<DataLoader url="/api/users" render={(users) => <UserList users={users} />} />
```

> **Rule :** Prefer composition (children & props) over copying components or deep inheritance.

---
[← Portals](../level-11-under-the-hood-advanced/05-portals.md) | [Level 11 index](README.md) | [All levels](../README.md) | [Higher-Order Components →](../level-11-under-the-hood-advanced/07-higher-order-components.md)
