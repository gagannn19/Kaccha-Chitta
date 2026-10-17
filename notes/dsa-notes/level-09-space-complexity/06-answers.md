# Answers

- **1.** inner runs 0 + 1 + 4 + ... + (n-1)<sup>2</sup> &asymp; n<sup>3</sup>/3 → `O(n<sup>3</sup>)`
- **2.** inner runs n + n/2 + n/4 + ... &asymp; 2n → `O(n)`  (not n log n!)
- **3.** 2 calls, depth n → `O(2<sup>n</sup>)` time, `O(n)` stack space
- **4.** O(n log n) sort + n x O(log n) map → `O(n log n)` time, `O(n)` space

> **Lesson :** Don't guess from the number of loops - count how many times the innermost line actually runs.

---
[← Practice : Find the Complexity](../level-09-space-complexity/05-practice-find-the-complexity.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Interview Questions →](../level-10-top-50-c-stl-complexity-interview-questions/questions.md)
