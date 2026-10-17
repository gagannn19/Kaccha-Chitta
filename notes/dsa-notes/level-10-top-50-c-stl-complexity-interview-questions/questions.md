# Level 10 : Top 50 C++, STL & Complexity Interview Questions

## Q1. Why is C++ popular for DSA & competitive programming?

It is compiled and very fast, gives low-level control of memory, and the STL provides ready-made data structures and algorithms.

## Q2. What does #include <bits/stdc++.h> do?

Includes every standard library header at once (GCC only). Convenient in contests, but slows compilation and isn't portable - avoid in production code.

## Q3. What is using namespace std?

Lets you use names like cout and vector without the std:: prefix. In big projects it can cause name clashes, so headers usually write std:: explicitly.

## Q4. endl vs '\n'?

Both print a newline, but endl also flushes the output buffer every time, which is slow when printing a lot. Use '\n' in loops.

## Q5. How do you make cin / cout faster?

Turn off sync with C streams and untie cin from cout.

```cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
```

## Q6. int vs long long? What is overflow?

int holds about ±2.1 × 10^9, long long about ±9.2 × 10^18. Overflow happens when a result is too big for its type - it wraps to a wrong value.

```cpp
int a = 1e5, b = 1e5;
long long ok = 1LL * a * b;   // multiply as long long
```

## Q7. Why does 7 / 2 give 3?

Both are ints, so integer division drops the decimal. Make one side a double to get 3.5.

```cpp
double r = 7 / 2.0;   // 3.5
```

## Q8. Pass by value vs pass by reference?

By value copies the argument - changes don't affect the caller. By reference (&) works on the original. Use const & for big objects to avoid copies.

```cpp
void f(const vector<int>& v);
```

## Q9. Pointer vs reference?

A pointer stores an address, can be null, can be re-pointed and needs * to read. A reference is an alias that must be initialised and can't be re-bound.

## Q10. Stack vs heap memory?

Stack : automatic local variables and function calls - fast, small, freed automatically. Heap : memory from new / containers - large, managed manually (delete) or by RAII classes like vector.

## Q11. What is a memory leak?

Heap memory that is allocated but never freed (new without delete). Use vectors / smart pointers (unique_ptr) so memory is freed automatically.

## Q12. struct vs class?

Identical except default access : struct members are public, class members are private by default.

## Q13. What are the 4 pillars of OOP?

Encapsulation (hide data), Abstraction (show only essentials), Inheritance (reuse a base class), Polymorphism (one interface, many behaviours - overloading, virtual functions).

## Q14. Function overloading vs overriding?

Overloading : same name, different parameters, chosen at compile time. Overriding : a derived class redefines a virtual function of the base class, chosen at runtime.

## Q15. What is the STL?

The Standard Template Library : containers (vector, map...), algorithms (sort, find...), iterators that connect them, and function objects - all generic through templates.

## Q16. Array vs vector?

A built-in array has a fixed size known at compile time and no bounds info. vector resizes automatically, knows its size, and manages its own memory.

## Q17. Why is vector push_back amortized O(1)?

When full, the vector reallocates to about double the capacity and copies elements (O(n)), but this happens rarely, so the average cost per push stays constant.

## Q18. size() vs capacity() of a vector?

size is the number of elements stored; capacity is how many it can hold before reallocating. reserve(n) raises capacity.

## Q19. What is an iterator?

An object that points to an element in a container and can move through it (it++, *it). begin() points to the first element, end() to one past the last.

## Q20. Difference between set, multiset and unordered_set?

set : sorted, unique, O(log n). multiset : sorted, allows duplicates. unordered_set : hash based, unique, no order, O(1) average.

## Q21. map vs unordered_map?

map is a Red-Black tree : sorted keys, O(log n) operations, supports lower_bound. unordered_map is a hash table : no order, O(1) average but O(n) worst case.

## Q22. What happens when you access a missing key with map[key]?

It inserts the key with a default value (0 for int). Use count() or find() to check without inserting.

```cpp
if (mp.count(k)) { ... }
```

## Q23. How do you make a min-heap?

Use priority_queue with greater<> as the comparator.

```cpp
priority_queue<int, vector<int>, greater<int>> pq;
```

## Q24. stack vs queue vs deque?

stack : LIFO, top only. queue : FIFO, push back / pop front. deque : insert and remove at both ends plus random access.

## Q25. How do you write a custom comparator for sort?

Pass a function or lambda that returns true if a should come before b.

```cpp
sort(v.begin(), v.end(), [](auto &a, auto &b) {
  return a.second > b.second;
});
```

## Q26. lower_bound vs upper_bound?

On a sorted range, lower_bound returns the first element >= x, upper_bound the first element > x. Both O(log n).

```cpp
int cnt = upper_bound(b, e, x) - lower_bound(b, e, x);   // count of x
```

## Q27. How do you remove duplicates from a vector?

Sort, then unique moves duplicates to the end, then erase them.

```cpp
sort(v.begin(), v.end());
v.erase(unique(v.begin(), v.end()), v.end());
```

## Q28. What algorithm does std::sort use? Complexity?

Introsort (quicksort + heapsort + insertion sort). O(n log n) in the worst case, not stable. Use stable_sort when equal elements must keep their order.

## Q29. What is a lambda?

An anonymous inline function, often passed to algorithms. [ ] is the capture list : [x] by value, [&x] by reference.

```cpp
auto add = [](int a, int b) { return a + b; };
```

## Q30. What is time complexity?

How the number of operations grows as the input size n grows, ignoring constants and machine speed.

## Q31. What is space complexity?

How the extra memory used by an algorithm grows with input size - variables, data structures and the recursion stack.

## Q32. Big O vs Omega vs Theta?

O is an upper bound (worst case), Ω a lower bound (best case), Θ a tight bound when both match.

## Q33. Why do we drop constants in Big O?

Big O describes growth for very large n. 2n and n both grow linearly; constants depend on the machine, not the algorithm.

## Q34. Complexity of nested loops each running n times?

Multiply : O(n²). Loops one after another are added : O(n + m).

## Q35. Why is a loop with i *= 2 O(log n)?

i doubles each time : 1, 2, 4 ... reaching n after k steps where 2^k = n, so k = log₂ n.

```cpp
for (int i = 1; i < n; i *= 2) { }
```

## Q36. Complexity of binary search?

O(log n) time - the search space halves each step. O(1) space iteratively, O(log n) recursively.

## Q37. Complexity of recursive Fibonacci? How to improve?

O(2^n) time, O(n) stack space. Memoization / DP brings it to O(n) time; two variables give O(1) space.

## Q38. Why is merge sort O(n log n)?

The array is halved log n times, and each level does O(n) work to merge. T(n) = 2T(n/2) + O(n).

## Q39. What is the space complexity of merge sort and quicksort?

Merge sort : O(n) extra for merging. Quicksort : O(log n) average for the recursion stack (O(n) worst).

## Q40. What is amortized complexity?

The average cost per operation over a long sequence, even if a few operations are expensive - e.g. vector push_back, dynamic array resizing.

## Q41. What is the Master Theorem?

A shortcut for T(n) = aT(n/b) + O(n^d) : compare a with b^d to get O(n^d), O(n^d log n) or O(n^(log_b a)).

## Q42. How do you decide the needed complexity from constraints?

About 10^8 simple operations run per second. n ≤ 10^5–10^6 needs O(n log n) or better; n ≤ 5000 allows O(n²); n ≤ 20 allows O(2^n).

## Q43. What is the space complexity of a recursive function?

The maximum depth of the call stack times the space per call - not the total number of calls.

## Q44. What is the time-space trade-off?

Using extra memory (hash maps, DP tables, prefix sums) to reduce time, or using less memory at the cost of more time.

## Q45. Find the complexity : for(i=0;i<n;i++) for(j=i;j<n;j++)

Inner runs n + (n-1) + ... + 1 = n(n+1)/2 times → O(n²).

## Q46. Find the complexity : for(i=n;i>0;i/=2) for(j=0;j<i;j++)

n + n/2 + n/4 + ... ≤ 2n → O(n).

## Q47. Is two pointers with a nested while loop O(n²)?

Not if the inner pointer never moves backward - it moves at most n times in total, so the whole thing is O(n).

## Q48. Why can string concatenation in a loop be O(n²)?

s = s + "a" creates a new copy of the growing string every time. Use s += 'a' or push_back, which is amortized O(1).

```cpp
for (...) s += 'a';   // O(n) total
```

## Q49. Complexity of common STL operations?

vector push_back O(1)*, insert / erase middle O(n); set / map insert, find, erase O(log n); unordered_map O(1) average; priority_queue push / pop O(log n), top O(1); sort O(n log n).

## Q50. How do you find frequency of elements efficiently?

Use unordered_map (O(n) average) or map (O(n log n), sorted output).

```cpp
unordered_map<int,int> f;
for (int x : a) f[x]++;
```

---
[← Answers](../level-09-space-complexity/06-answers.md) | [Level 10 index](README.md) | [All levels](../README.md)
