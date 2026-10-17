# First Program

```cpp
#include <bits/stdc++.h>     // includes ALL standard headers (GCC only)
// Header provides declarations for features you want to use in your program. Different headers provide different features, such as input/output, vectors, strings, and algorithms.
using namespace std;         // so we can write cout instead of std::cout

int main() {                 // program starts here
    cout << "Hello World" << endl;
    return 0;                // 0 = finished successfully
}
```

```bash
g++ -std=c++17 main.cpp -o main     # compile
./main                              # run
```

> **Tip :** bits/stdc++.h is great for contests. In real projects include only what you need : &lt;iostream&gt;, &lt;vector&gt;...

---
[← Why C++ for DSA?](../level-01-c-basics/01-why-c-for-dsa.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Input & Output →](../level-01-c-basics/03-input-output.md)
