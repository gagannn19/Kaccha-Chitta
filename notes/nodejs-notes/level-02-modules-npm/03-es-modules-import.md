# ES Modules : import

*The modern way : import & export*

```js
// math.mjs
export const add = (a, b) => a + b;
export default function sub(a, b) { return a - b; }
```

```js
// app.mjs
import sub, { add } from "./math.mjs";
console.log(add(2, 3)); // 5
```

**To use import in `.js` files**, add this in `package.json` :

```json
{ "type": "module" }
```

| CommonJS | ES Modules |
|---|---|
| `require()` | `import` |
| `module.exports` | `export` |
| default in Node | default in browser |

---
[← CommonJS : require](../level-02-modules-npm/02-commonjs-require.md) | [Level 2 index](README.md) | [All levels](../README.md) | [npm →](../level-02-modules-npm/04-npm.md)
