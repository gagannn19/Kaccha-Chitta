# Level 4 : Interview & Revision Questions

<sub>Level 4 : Synchronization & Deadlock</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is a race condition?</b></summary>

When two or more processes/threads access shared data at the same time and the final result depends on the order of execution, e.g. two threads doing count++ and losing one update.

</details>
<details><summary><b>2. What is a critical section? What are the 3 requirements of a solution?</b></summary>

Code that accesses shared resources. A solution needs mutual exclusion, progress and bounded waiting.

</details>
<details><summary><b>3. Mutex vs semaphore?</b></summary>

Mutex is a lock with ownership (only the locker unlocks), used for one resource. Semaphore is a counter (wait/signal) that can allow n processes, and any process can signal. Binary semaphore ≈ mutex but without ownership.

</details>
<details><summary><b>4. What is a deadlock? What are the necessary conditions?</b></summary>

A set of processes each waiting for a resource held by another, so none can proceed. Conditions: mutual exclusion, hold and wait, no preemption, circular wait. All four must hold.

</details>
<details><summary><b>5. How can deadlock be prevented?</b></summary>

Break one condition: e.g. request all resources at once (hold & wait), allow preemption, or impose a global order on resource requests (circular wait).

</details>
<details><summary><b>6. Deadlock prevention vs avoidance?</b></summary>

Prevention designs the system so a condition can never hold (restrictive). Avoidance decides at runtime, granting a request only if the state stays safe (Banker's algorithm).

</details>
<details><summary><b>7. Explain Banker's algorithm.</b></summary>

Compute Need = Max − Allocation. Starting with Work = Available, repeatedly find a process whose Need ≤ Work, add its allocation to Work. If all can finish, the state is safe and the order is the safe sequence.

</details>
<details><summary><b>8. Deadlock vs starvation?</b></summary>

Deadlock: processes wait for each other forever, none progress. Starvation: one process waits indefinitely while others keep progressing. Starvation is fixed with aging.

</details>
<details><summary><b>9. What is the Producer-Consumer problem?</b></summary>

A producer adds items to a fixed-size buffer and a consumer removes them. Producer must wait when full, consumer when empty, and both must not access the buffer at the same time. Solved with semaphores empty, full and mutex.

</details>
<details><summary><b>10. What does Windows/Linux do about deadlocks?</b></summary>

Mostly ignore them (Ostrich algorithm). Deadlocks are rare, and prevention/avoidance is costly. Developers are expected to avoid them (e.g. lock ordering).

</details>

## 🔁 Quick revision

1. Initial values of empty, full and mutex for a buffer of size 10?
2. Which Coffman condition is easiest to break in practice?
3. Unsafe state always means deadlock? (yes/no)
4. A cycle in RAG with single-instance resources means?
5. Name the 3 classic synchronization problems.

<details><summary>Answers</summary>

1. empty = 10, full = 0, mutex = 1 · 2. Circular wait (order the resources) · 3. No, it only *may* lead to deadlock · 4. Deadlock for sure · 5. Producer-Consumer, Readers-Writers, Dining Philosophers

</details>

---
[← Banker's Algorithm (Deadlock Avoidance)](05-bankers-algorithm.md) · [Level 4](README.md) · [Home](../README.md) · [Memory Basics, Allocation & Fragmentation →](../level-5-memory-management/01-memory-basics-and-fragmentation.md)
