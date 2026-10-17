# Level 6 : Interview & Revision Questions

<sub>Level 6 : File Systems & Disk</sub>

## 🎯 Top interview questions

<details><summary><b>1. What is a file system?</b></summary>

The part of the OS that organizes, stores, names and protects data on storage devices as files and directories, e.g. NTFS, ext4, APFS, FAT32.

</details>
<details><summary><b>2. Explain the file allocation methods.</b></summary>

Contiguous (consecutive blocks; fast but external fragmentation), linked (each block points to the next; no fragmentation but slow random access), indexed (an index block lists all blocks; fast random access, index overhead).

</details>
<details><summary><b>3. What is seek time and rotational latency?</b></summary>

Seek time: time to move the head to the correct track. Rotational latency: time for the required sector to rotate under the head.

</details>
<details><summary><b>4. Compare SSTF and SCAN.</b></summary>

SSTF serves the nearest request next (low movement but starvation). SCAN moves in one direction serving requests until the end, then reverses (no starvation, more uniform wait).

</details>
<details><summary><b>5. What is RAID? Explain RAID 0, 1, 5.</b></summary>

Redundant Array of Independent Disks. RAID 0 = striping (fast, no redundancy), RAID 1 = mirroring (copy, safe), RAID 5 = striping with distributed parity (survives one disk failure).

</details>
<details><summary><b>6. Buffering vs caching vs spooling?</b></summary>

Buffer: temporary area to handle speed mismatch during transfer. Cache: fast copy of frequently used data. Spooling: queue jobs on disk for a slow device like a printer.

</details>
<details><summary><b>7. What is an inode?</b></summary>

A Linux data structure holding a file's metadata (owner, permissions, size, timestamps, block pointers), everything except its name.

</details>
<details><summary><b>8. What is DMA?</b></summary>

Direct Memory Access lets devices transfer data to/from RAM without the CPU handling each byte; the CPU is interrupted only at the end.

</details>

## 🔁 Quick revision

1. Which file allocation suffers external fragmentation?
2. Which disk algorithm is called the elevator algorithm?
3. What does `chmod 644` mean?
4. Which RAID level gives no fault tolerance?
5. SSD vs HDD: which has seek time?

<details><summary>Answers</summary>

1. Contiguous · 2. SCAN · 3. owner rw-, group r--, others r-- · 4. RAID 0 · 5. HDD (SSD has no moving parts)

</details>

---
[← RAID, Buffer, Cache & Spooling](03-raid-buffer-cache-spooling.md) · [Level 6](README.md) · [Home](../README.md) · [🏁 Final Test →](../final-test.md)
