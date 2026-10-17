# Level 2 : Interview & Revision Questions

<sub>Level 2 : Processes & Threads</sub>

## 🎯 Top interview questions

<details><summary><b>1. Difference between a program and a process?</b></summary>

A program is passive code stored on disk. A process is a program in execution: it has a PC, registers, stack, heap and is loaded in RAM.

</details>
<details><summary><b>2. What is a PCB?</b></summary>

Process Control Block: the data structure the OS keeps for each process: PID, state, program counter, registers, priority, memory info, open files. Used to save and restore a process during context switch.

</details>
<details><summary><b>3. Explain the process state diagram.</b></summary>

New → Ready → Running → (Waiting on I/O → Ready) or (time slice over → Ready) → Terminated.

</details>
<details><summary><b>4. What is a context switch? Why is it overhead?</b></summary>

Saving the state of the running process in its PCB and loading the next process's state. During that time the CPU does no useful work, so it is overhead.

</details>
<details><summary><b>5. Process vs thread?</b></summary>

A process has its own memory; threads of the same process share code, data, heap and files but have their own stack and registers. Threads are lighter and faster to create and switch.

</details>
<details><summary><b>6. What are the benefits of multithreading?</b></summary>

Responsiveness (UI doesn't freeze), resource sharing, economy (cheaper than processes), and using multiple cores.

</details>
<details><summary><b>7. What is a zombie process? Orphan process?</b></summary>

Zombie: finished child whose exit status hasn't been collected by the parent with wait(). Orphan: child whose parent has exited; it is adopted by init/systemd.

</details>
<details><summary><b>8. How many times is "hi" printed? `fork(); fork(); printf("hi");`</b></summary>

4 times. Each fork doubles the processes: 2² = 4.

</details>
<details><summary><b>9. What is IPC? Name some methods.</b></summary>

Ways for processes to exchange data: pipes, named pipes, message queues, shared memory, sockets, signals.

</details>
<details><summary><b>10. Long-term vs short-term scheduler?</b></summary>

Long-term decides which jobs are admitted to memory (controls degree of multiprogramming). Short-term picks which ready process runs next on the CPU, many times per second.

</details>

## 🔁 Quick revision

1. Which part of process memory stores local variables?
2. What does `fork()` return in the child?
3. Which state does a process enter when it asks for disk input?
4. Do threads share the stack?
5. Fastest IPC method?
6. Who adopts orphan processes?

<details><summary>Answers</summary>

1. Stack · 2. 0 · 3. Waiting (blocked) · 4. No, each thread has its own stack · 5. Shared memory · 6. init / systemd (PID 1)

</details>

---
[← Inter-Process Communication (IPC)](05-ipc.md) · [Level 2](README.md) · [Home](../README.md) · [CPU Scheduling Basics →](../level-3-cpu-scheduling/01-scheduling-basics.md)
