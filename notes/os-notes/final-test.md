# 🏁 Final Test : Ask Yourself

> Try every question out loud, like in a real interview, before opening the answer. Score yourself: ✅ knew it · 🟡 partly · ❌ no idea. Revise the ❌ ones from their level.

## Part A : Concept questions (say the answer in 2-3 lines)

<details><summary><b>1. What is an OS, and why can't apps talk to hardware directly?</b></summary>

An OS manages hardware and gives programs services. Direct access would be unsafe (one app could break others) and every app would need drivers for every device.

</details>
<details><summary><b>2. What happens, step by step, when you double-click Chrome?</b></summary>

Shell asks the kernel (system calls fork/exec or CreateProcess) → OS creates a process + PCB → loads needed pages of the program into RAM (demand paging) → process goes New → Ready → scheduler dispatches it → it creates threads for UI, network, rendering.

</details>
<details><summary><b>3. Process vs thread, with a real example.</b></summary>

Chrome runs each tab as a separate process (one crash doesn't kill others), and each tab uses multiple threads (rendering, JS, network) that share the tab's memory.

</details>
<details><summary><b>4. What exactly is saved during a context switch?</b></summary>

Program counter, CPU registers, stack pointer, process state, memory-management info: everything in the PCB needed to resume later.

</details>
<details><summary><b>5. Why is Round Robin good for interactive systems?</b></summary>

Every process gets the CPU within a bounded time (n−1)×quantum, so response time is low and no one starves.

</details>
<details><summary><b>6. What is the difference between deadlock and starvation? Give a fix for each.</b></summary>

Deadlock: circular waiting, nobody progresses; fix with resource ordering / Banker's / recovery. Starvation: one process keeps losing; fix with aging.

</details>
<details><summary><b>7. Can a deadlock happen with just one process?</b></summary>

Not in the classic sense (needs circular wait among processes). A single thread can "self-deadlock" by trying to lock a non-recursive mutex it already holds.

</details>
<details><summary><b>8. Why do we need virtual memory if RAM is cheap now?</b></summary>

Isolation between processes, running programs larger than RAM, loading only what's needed (faster start), sharing libraries, and simpler memory management for programmers.

</details>
<details><summary><b>9. Your laptop becomes very slow when 40 tabs are open, and the disk light is always on. What is happening?</b></summary>

Thrashing: not enough RAM for all working sets, so the OS keeps swapping pages to and from disk. Close tabs or add RAM.

</details>
<details><summary><b>10. Why is LRU not used exactly in real OSes?</b></summary>

Tracking the exact last-use time of every page on every access is too expensive. OSes use approximations like the Clock / second-chance algorithm with a reference bit.

</details>

## Part B : Numericals (do them on paper ✏️)

**Q11.** Processes P1 (AT 0, BT 6), P2 (AT 2, BT 2), P3 (AT 4, BT 3). Find average WT for FCFS and SRTF.

<details><summary>Answer</summary>

**FCFS** : Gantt P1 0-6 | P2 6-8 | P3 8-11 → avg WT = **2.67**

**SRTF** : Gantt P1 0-2 | P2 2-4 | P3 4-7 | P1 7-11 → avg WT = **1.67**

</details>

**Q12.** Reference string 1 3 0 3 5 6 3 with 3 frames. Page faults for FIFO, LRU and Optimal?

<details><summary>Answer</summary>

FIFO: **6** · LRU: **5** · OPT: **5**

</details>

**Q13.** Head at 50, requests 82 170 43 140 24 16 190, disk 0–199. Total head movement for FCFS and SSTF?

<details><summary>Answer</summary>

FCFS: **642** (path 50 → 82 → 170 → 43 → 140 → 24 → 16 → 190) · SSTF: **208** (path 50 → 43 → 24 → 16 → 82 → 140 → 170 → 190)

</details>

**Q14.** How many child processes are created by `fork(); fork(); fork();`?

<details><summary>Answer</summary>

2³ = 8 processes in total → **7 child processes** (1 is the original parent).

</details>

**Q15.** A system has 12 tape drives. P0 holds 5 (max 10), P1 holds 2 (max 4), P2 holds 2 (max 9). Is it safe?

<details><summary>Answer</summary>

Available = 12 − 9 = 3. Need: P0 5, P1 2, P2 7. P1 (2 ≤ 3) → Available 5 → P0 (5 ≤ 5) → Available 10 → P2 (7 ≤ 10) ✓ → **Safe, sequence P1 → P0 → P2**.

</details>

**Q16.** Page size 2 KB. Logical address 5000. Page 2 is in frame 6. Physical address?

<details><summary>Answer</summary>

p = 5000 / 2048 = 2, d = 5000 − 4096 = 904 → physical = 6 × 2048 + 904 = **13192**

</details>

## Part C : Rapid fire ⚡ (answer in one word)

| # | Question | Answer (click to show) |
|---|---|---|
| 17 | Scheduler that admits jobs into memory? | <details><summary>show</summary>Long-term</details> |
| 18 | Algorithm with convoy effect? | <details><summary>show</summary>FCFS</details> |
| 19 | Fix for starvation? | <details><summary>show</summary>Aging</details> |
| 20 | Hardware cache for page table? | <details><summary>show</summary>TLB</details> |
| 21 | First process in Linux? | <details><summary>show</summary>init / systemd (PID 1)</details> |
| 22 | Semaphore operations? | <details><summary>show</summary>wait (P) and signal (V)</details> |
| 23 | Ignoring deadlocks is called? | <details><summary>show</summary>Ostrich algorithm</details> |
| 24 | Disk algorithm also called elevator? | <details><summary>show</summary>SCAN</details> |
| 25 | Page replacement with Belady's anomaly? | <details><summary>show</summary>FIFO</details> |

---

🎉 If you got 20+ right, you're ready for the OS round of most fresher interviews. Revise weak levels from the [Home](README.md) page.

---
[← Home](README.md)
