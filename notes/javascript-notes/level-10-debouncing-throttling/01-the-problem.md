# The Problem

*Some events fire VERY often*

- Typing in a search box → **input** fires on every key
- Scrolling → **scroll** fires 30+ times a second
- Resizing the window → **resize** fires continuously

> **Problem :** Calling an API on every keystroke = 10 letters = 10 API calls. Wasteful & slow.

> **Solution :** Debouncing & throttling limit the calls - both use closures + setTimeout.

---
[← Google's V8](../level-09-inside-the-js-engine/03-google-s-v8.md) | [Level 10 index](README.md) | [All levels](../README.md) | [Debouncing →](../level-10-debouncing-throttling/02-debouncing.md)
