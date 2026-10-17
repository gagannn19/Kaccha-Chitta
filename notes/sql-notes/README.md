# SQL Revision Notes

> Theory → diagrams → theory questions → practice queries → LeetCode, topic by topic. Every topic builds on the one before it.

## How to use these notes

1. Run [00 · Sample Database](00-sample-database.md) first in any SQL tool (MySQL Workbench, [sqliteonline.com](https://sqliteonline.com), DB Fiddle). Every practice query in these notes uses this one small company + shop database.
2. For each topic, read the theory, answer the theory questions **before** opening them, then write the practice queries yourself.
3. Finish that topic's LeetCode problems before moving on. LeetCode uses **MySQL** by default.
4. Before an interview, revise [13 · Interview Questions](13-interview-questions.md).

## Roadmap (the chain)

```
 00 Sample DB
   │
 01 Basics ──► 02 CREATE & constraints ──► 03 INSERT/UPDATE/DELETE
                                                │
 04 SELECT & WHERE ──► 05 Functions/CASE/NULL ──► 06 GROUP BY & HAVING
                                                │
 07 JOINs ──► 08 Subqueries & CTEs ──► 09 UNION/INTERSECT/EXCEPT ──► 10 Window functions
                                                │
 11 Keys & Normalization ──► 12 Indexes/Views/Transactions ──► 13 Interview Qs
```

| # | Topic | What you'll learn |
|---|---|---|
| 00 | [Sample Database](00-sample-database.md) | the tables used everywhere |
| 01 | [Databases & SQL Basics](01-databases-and-sql-basics.md) | DBMS, RDBMS, SQL command types |
| 02 | [Create Tables & Constraints](02-create-tables-and-constraints.md) | data types, PK, FK, CHECK, ALTER |
| 03 | [INSERT, UPDATE & DELETE](03-insert-update-delete.md) | changing data safely |
| 04 | [SELECT & Filtering](04-select-and-filtering.md) | WHERE, LIKE, IN, BETWEEN, ORDER BY, LIMIT |
| 05 | [Functions, CASE & NULL](05-functions-case-null.md) | string/date/number functions, CASE, COALESCE |
| 06 | [GROUP BY & Aggregates](06-group-by-and-aggregates.md) | COUNT/SUM/AVG, HAVING |
| 07 | [JOINs](07-joins.md) | INNER, LEFT, RIGHT, FULL, SELF, CROSS |
| 08 | [Subqueries & CTEs](08-subqueries-and-ctes.md) | scalar, IN, EXISTS, correlated, WITH, recursive |
| 09 | [Set Operations](09-set-operations.md) | UNION, UNION ALL, INTERSECT, EXCEPT |
| 10 | [Window Functions](10-window-functions.md) | RANK, DENSE_RANK, LAG/LEAD, running totals |
| 11 | [Keys & Normalization](11-normalization-and-keys.md) | keys, ER, 1NF→BCNF |
| 12 | [Indexes, Views & Transactions](12-indexes-views-transactions.md) | B-Tree, EXPLAIN, ACID, isolation |
| 13 | [Interview Questions](13-interview-questions.md) | 40 theory Qs + 16 classic queries |

## LeetCode practice plan

Each topic file has its own LeetCode table. If you only have time for a short list, do these in order (mostly the LeetCode "SQL 50" set):

| Stage | Problems |
|---|---|
| Week 1 : Select & basics | 1757, 584, 595, 1148, 1683, 620, 627, 196 |
| Week 1 : Functions | 1667, 1527, 1517, 1484, 610, 608 |
| Week 2 : Aggregates | 182, 596, 586, 2356, 1729, 619, 1211, 1141, 1193 |
| Week 2 : Joins | 175, 183, 181, 197, 1378, 1068, 1581, 577, 1280, 1661, 1731, 570, 1934 |
| Week 3 : Subqueries | 176, 177, 184, 1978, 1789, 1070, 1164, 1174, 550, 585 |
| Week 3 : Window + hard | 178, 180, 185, 626, 1204, 1321, 1907, 1341, 602, 262, 601 |

Tip: after solving, look at the fastest solutions in the Discuss/Solutions tab. You often learn a second way (JOIN vs subquery vs window).

## Notation used

- `<details>` blocks hide answers. Try first, then click to open.
- `-- MySQL:` comments show syntax that differs from SQLite.
- Diagrams use ASCII boxes and mermaid. They render on GitHub, VS Code (with a mermaid extension), and Obsidian.
