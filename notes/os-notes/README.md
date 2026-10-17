# Operating System Notes (for fresher interviews)

![Where the OS sits](images/os-layers.png)

> Simple notes with pictures. Read the levels in order, because each one builds on the previous.
> Every level ends with **🎯 top interview questions** (answers hidden, so try first!) and **🔁 quick revision** questions.
> At the very end, take the **🏁 Final Test**.

## Roadmap

```
Level 1 Basics ─▶ Level 2 Processes & Threads ─▶ Level 3 CPU Scheduling
                                                        │
Level 6 Files & Disk ◀─ Level 5 Memory ◀─ Level 4 Sync & Deadlock
                │
                ▼
          🏁 Final Test
```

## Contents

### [Level 1 : OS Basics](level-1-basics/README.md) 🟩⬜⬜⬜⬜⬜

What an OS is, its types, the kernel, system calls and booting.

- [What is an Operating System?](level-1-basics/01-what-is-an-os.md)
- [Types of Operating Systems](level-1-basics/02-types-of-os.md)
- [Kernel & Shell](level-1-basics/03-kernel-and-shell.md)
- [User Mode, Kernel Mode & System Calls](level-1-basics/04-user-mode-kernel-mode-system-calls.md)
- [Booting Process](level-1-basics/05-booting.md)
- 🎯 [Interview & revision questions](level-1-basics/interview-questions.md)

### [Level 2 : Processes & Threads](level-2-processes-threads/README.md) 🟩🟩⬜⬜⬜⬜

Process, PCB, states, context switch, threads, fork and IPC.

- [Process, Process Memory & PCB](level-2-processes-threads/01-process.md)
- [Process States & Context Switch](level-2-processes-threads/02-process-states-and-context-switch.md)
- [Threads & Multithreading](level-2-processes-threads/03-threads.md)
- [fork(), Zombie & Orphan Processes](level-2-processes-threads/04-fork-zombie-orphan.md)
- [Inter-Process Communication (IPC)](level-2-processes-threads/05-ipc.md)
- 🎯 [Interview & revision questions](level-2-processes-threads/interview-questions.md)

### [Level 3 : CPU Scheduling](level-3-cpu-scheduling/README.md) 🟩🟩🟩⬜⬜⬜

FCFS, SJF, SRTF, Priority, Round Robin with solved Gantt charts.

- [CPU Scheduling Basics](level-3-cpu-scheduling/01-scheduling-basics.md)
- [FCFS, SJF & SRTF](level-3-cpu-scheduling/02-fcfs-sjf-srtf.md)
- [Priority, Round Robin & Multilevel Queues](level-3-cpu-scheduling/03-priority-rr-multilevel.md)
- 🎯 [Interview & revision questions](level-3-cpu-scheduling/interview-questions.md)

### [Level 4 : Synchronization & Deadlock](level-4-synchronization-deadlock/README.md) 🟩🟩🟩🟩⬜⬜

Race conditions, critical section, mutex, semaphore, classic problems, deadlock and Banker's algorithm.

- [Race Condition & Critical Section](level-4-synchronization-deadlock/01-race-condition-critical-section.md)
- [Mutex & Semaphore](level-4-synchronization-deadlock/02-mutex-and-semaphore.md)
- [Classic Synchronization Problems](level-4-synchronization-deadlock/03-classic-problems.md)
- [Deadlock](level-4-synchronization-deadlock/04-deadlock.md)
- [Banker's Algorithm (Deadlock Avoidance)](level-4-synchronization-deadlock/05-bankers-algorithm.md)
- 🎯 [Interview & revision questions](level-4-synchronization-deadlock/interview-questions.md)

### [Level 5 : Memory Management](level-5-memory-management/README.md) 🟩🟩🟩🟩🟩⬜

Fragmentation, paging, TLB, segmentation, virtual memory and page replacement.

- [Memory Basics, Allocation & Fragmentation](level-5-memory-management/01-memory-basics-and-fragmentation.md)
- [Paging & Segmentation](level-5-memory-management/02-paging-and-segmentation.md)
- [Virtual Memory & Demand Paging](level-5-memory-management/03-virtual-memory.md)
- [Page Replacement Algorithms](level-5-memory-management/04-page-replacement.md)
- 🎯 [Interview & revision questions](level-5-memory-management/interview-questions.md)

### [Level 6 : File Systems & Disk](level-6-storage-files/README.md) 🟩🟩🟩🟩🟩🟩

File systems, allocation methods, disk scheduling, RAID, buffering and DMA.

- [File Systems](level-6-storage-files/01-file-systems.md)
- [Disk Scheduling](level-6-storage-files/02-disk-scheduling.md)
- [RAID, Buffer, Cache & Spooling](level-6-storage-files/03-raid-buffer-cache-spooling.md)
- 🎯 [Interview & revision questions](level-6-storage-files/interview-questions.md)

### [🏁 Final Test : Ask Yourself](final-test.md)

25 mixed questions: concepts, numericals (scheduling, paging, disk, Banker's) and rapid fire.

## How to revise in 1 day ⏱️

| Time | Do |
|---|---|
| 1 hr | Level 1 + 2 |
| 1.5 hr | Level 3 (solve the Gantt charts yourself first!) |
| 1.5 hr | Level 4 + 5 |
| 45 min | Level 6 |
| 45 min | Final Test, then revise ❌ topics |

Most-asked topics in fresher interviews: **process vs thread · deadlock (4 conditions) · paging & virtual memory · scheduling algorithms · semaphore vs mutex · thrashing**.
