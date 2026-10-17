# The DOM

*Document Object Model - the page as a tree of objects*

```jsx
<html>
  <head>
    <title>Hi</title>
  </head>
  <body>
    <h1>Title</h1>
    <ul>
      <li>One</li>
    </ul>
  </body>
</html>
```

```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── ul
            └── li
```

> **Note :** The browser builds this tree from HTML. JS changes the tree → the page changes.

---
[← Practice Set 6](../level-06-map-filter-reduce/10-practice-set-6.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Selecting Elements →](../level-07-dom-events/02-selecting-elements.md)
