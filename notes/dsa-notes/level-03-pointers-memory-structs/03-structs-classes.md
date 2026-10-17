# Structs & Classes

*Group related data together*

```cpp
struct Student {
    string name;
    int marks;
};
Student s = {"Aman", 85};
cout << s.name;

class Rectangle {
private:
    int w, h;
public:
    Rectangle(int w, int h) : w(w), h(h) {}    // constructor
    int area() { return w * h; }
};
Rectangle r(3, 4);
cout << r.area();      // 12
```

> **Difference :** struct members are public by default, class members are private by default. That's the only difference.

---
[← Stack vs Heap Memory](../level-03-pointers-memory-structs/02-stack-vs-heap-memory.md) | [Level 3 index](README.md) | [All levels](../README.md) | [OOP in One Slide →](../level-03-pointers-memory-structs/04-oop-in-one-slide.md)
