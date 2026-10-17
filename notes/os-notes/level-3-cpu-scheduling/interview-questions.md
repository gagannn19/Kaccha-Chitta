# Level 3 : Interview & Revision Questions

<sub>Level 3 : CPU Scheduling</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is CPU scheduling and why is it needed?</b></summary>

Choosing which ready process runs on the CPU next. Needed to keep the CPU busy, give fast response and share the CPU fairly between processes.

</details>
<details><summary><b>2. Preemptive vs non-preemptive scheduling?</b></summary>

Preemptive: the OS can take the CPU away from a running process (timer, higher priority). Non-preemptive: a process keeps the CPU until it finishes or blocks.

</details>
<details><summary><b>3. Define TAT, WT and RT.</b></summary>

TAT = CT − AT (total time in system). WT = TAT − BT (time spent waiting in ready queue). RT = first time on CPU − AT.

</details>
<details><summary><b>4. What is the convoy effect?</b></summary>

In FCFS, short processes wait behind one long process, increasing average waiting time, like cars behind a slow truck.

</details>
<details><summary><b>5. Which algorithm gives the minimum average waiting time?</b></summary>

SJF (non-preemptive) among non-preemptive algorithms; SRTF overall. Problem: burst time must be known/predicted.

</details>
<details><summary><b>6. What is starvation and how is it solved?</b></summary>

A process waits indefinitely because others keep getting preference (SJF, Priority). Solved by aging: gradually raising the priority of waiting processes.

</details>
<details><summary><b>7. How does Round Robin work? What if the quantum is too big or too small?</b></summary>

Each process runs for one time quantum, then goes to the end of the ready queue. Too big → behaves like FCFS. Too small → too many context switches.

</details>
<details><summary><b>8. Which scheduling algorithm is used in modern OSes?</b></summary>

Variants of multilevel feedback queues / priority-based preemptive scheduling. Linux used CFS (Completely Fair Scheduler) and newer kernels use EEVDF; Windows uses priority-based preemptive scheduling with RR inside a priority level.

</details>
<details><summary><b>9. What is a dispatcher?</b></summary>

The module that gives control of the CPU to the process chosen by the short-term scheduler: context switch, switch to user mode, jump to the right instruction.

</details>

## 🔁 Quick revision (numericals)

Processes: A (AT 0, BT 4), B (AT 1, BT 2), C (AT 2, BT 1)

1. FCFS: average waiting time?
2. SJF (non-preemptive): order of execution?
3. RR with quantum 2: Gantt chart?
4. Which of the three algorithms above is preemptive?

<details><summary>Answers</summary>

1. A 0–4, B 4–6, C 6–7 → WT A=0, B=3, C=4 → avg = **2.33**
2. A (only one at t=0) → C → B : A 0–4, C 4–5, B 5–7
3. A 0–2 → B 2–4 → C 4–5 → A 5–7 (at t=2 the queue is [B, C, A]: new arrivals join before the preempted A)
4. Round Robin

</details>

---
[← Priority, Round Robin & Multilevel Queues](03-priority-rr-multilevel.md) · [Level 3](README.md) · [Home](../README.md) · [Race Condition & Critical Section →](../level-4-synchronization-deadlock/01-race-condition-critical-section.md)
