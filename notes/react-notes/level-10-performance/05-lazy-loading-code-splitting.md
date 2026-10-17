# Lazy Loading & Code Splitting

*Download a page's code only when it is needed*

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));   // separate JS file

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
```

> **Why :** Smaller first download = faster first load. Users who never open Dashboard never download it.

---
[← useCallback](../level-10-performance/04-usecallback.md) | [Level 10 index](README.md) | [All levels](../README.md) | [Big Lists & Search →](../level-10-performance/06-big-lists-search.md)
