# Time vs Space Trade-off

*Use more memory to save time*

| Problem | Slow, less memory | Fast, more memory |
|---|---|---|
| Find duplicate | 2 loops : O(n2) time, O(1) space | hash set : O(n) time, O(n) space |
| Two Sum | 2 loops : O(n2), O(1) | unordered_map : O(n), O(n) |
| Fibonacci | plain recursion : O(2n) | DP array : O(n), O(n) 2 variables : O(n), O(1) |

---
[← Recursion Uses Stack Space](../level-09-space-complexity/02-recursion-uses-stack-space.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Example : Two Sum, Both Ways →](../level-09-space-complexity/04-example-two-sum-both-ways.md)
