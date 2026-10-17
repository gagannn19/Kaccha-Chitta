# Query Params

*Read & update ?search=shoes&page=2*

```js
const [searchParams, setSearchParams] = useSearchParams();

const search = searchParams.get("search") || "";
const page = Number(searchParams.get("page") || 1);

setSearchParams({ search: "shoes", page: 2 });   // updates the URL
```

> **Why :** Keeping filters in the URL means users can share or bookmark the exact view.

---
[← Protected Routes](../level-09-react-router/06-protected-routes.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Build These →](../level-09-react-router/08-build-these.md)
