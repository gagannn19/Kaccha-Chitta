# Context : Things to Know

- When the Provider's **value** changes, **every** component using that context re-renders
- Split into small contexts (Theme, Auth, Cart) instead of one giant context
- Good for : theme, logged-in user, language, cart, toasts
- Not a replacement for all state - keep local state local
- Big apps with complex shared state often use **Redux Toolkit** or **Zustand**

---
[← Provider + Custom Hook Pattern](../level-08-context-api/03-provider-custom-hook-pattern.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Build These →](../level-08-context-api/05-build-these.md)
