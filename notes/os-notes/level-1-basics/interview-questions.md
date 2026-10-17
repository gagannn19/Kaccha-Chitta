# Level 1 : Interview & Revision Questions

<sub>Level 1 : OS Basics</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is an operating system?</b></summary>

System software that manages hardware (CPU, memory, disk, devices) and provides services to programs. It is the interface between the user and the hardware, and a resource manager.

</details>
<details><summary><b>2. What are the main functions of an OS?</b></summary>

Process management, memory management, file management, device (I/O) management, security & protection, and providing a user interface.

</details>
<details><summary><b>3. What is a kernel? What are its types?</b></summary>

The core part of the OS that is always in memory and controls hardware. Types: monolithic (everything in kernel, fast, e.g. Linux), microkernel (minimal kernel, services in user space, safer, e.g. Minix), hybrid (Windows, macOS).

</details>
<details><summary><b>4. Difference between multiprogramming and multitasking?</b></summary>

Multiprogramming keeps several programs in memory and switches when one waits for I/O, to maximize CPU use. Multitasking (time-sharing) switches after a small time slice so every task responds quickly to the user.

</details>
<details><summary><b>5. What is a system call? Give examples.</b></summary>

The way a user program requests a service from the kernel, e.g. `fork()`, `exec()`, `open()`, `read()`, `write()`, `exit()`. It switches the CPU from user mode to kernel mode.

</details>
<details><summary><b>6. Why do we need user mode and kernel mode?</b></summary>

For protection. User programs run with limited rights, so a bug can't directly damage hardware or other programs. Only the kernel can run privileged instructions.

</details>
<details><summary><b>7. What is an RTOS? Hard vs soft?</b></summary>

An OS that guarantees a response within a deadline. Hard RTOS: deadline miss = failure (airbags). Soft RTOS: deadline miss = reduced quality (video streaming).

</details>
<details><summary><b>8. What happens when you switch on a computer?</b></summary>

Firmware (BIOS/UEFI) runs POST → finds the boot device → bootloader (GRUB) loads the kernel into RAM → kernel initializes drivers → starts init/systemd (PID 1) → login screen.

</details>
<details><summary><b>9. Interrupt vs system call?</b></summary>

An interrupt comes from hardware (or a timer) asynchronously. A system call is a deliberate software request from a running program. Both are handled by the kernel.

</details>

## 🔁 Quick revision (answer in 1 line)

1. Name 3 OSes you use daily.
2. Which part of the OS is always in RAM?
3. Linux is monolithic or microkernel?
4. What is the mode bit for kernel mode?
5. What is PID 1 on Linux?
6. Which OS type is used in an airbag?

<details><summary>Answers</summary>

1. e.g. Windows, Android, Linux · 2. Kernel · 3. Monolithic · 4. 0 · 5. init / systemd · 6. Hard real-time OS

</details>

---
[← Booting Process](05-booting.md) · [Level 1](README.md) · [Home](../README.md) · [Process, Process Memory & PCB →](../level-2-processes-threads/01-process.md)
