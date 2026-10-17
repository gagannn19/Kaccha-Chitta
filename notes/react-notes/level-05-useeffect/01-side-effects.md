# Side Effects

*Anything that reaches outside the component*

- Fetching data from an API
- Timers - setInterval, setTimeout
- Event listeners on window / document (scroll, resize)
- Changing document.title, localStorage, subscriptions

> **Rule :** Rendering should be pure (just calculate JSX). Side effects go in useEffect, which runs AFTER the screen updates.

---
[← Build These](../level-04-lists-forms/09-build-these.md) | [Level 5 index](README.md) | [All levels](../README.md) | [useEffect →](../level-05-useeffect/02-useeffect.md)
