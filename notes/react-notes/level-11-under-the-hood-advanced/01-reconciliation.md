# Reconciliation

*How React decides what to change*

- After a render, React **compares** the new Virtual DOM tree with the old one (diffing)
- Different element type (div → span) → destroy old subtree, build new
- Same type → keep the DOM node, update only changed attributes
- Lists → match items by **key**

> **Fast :** Normal tree diff is O(n³). With these rules React does it in O(n).

---
[← Build These](../level-10-performance/07-build-these.md) | [Level 11 index](README.md) | [All levels](../README.md) | [React Fiber →](../level-11-under-the-hood-advanced/02-react-fiber.md)
