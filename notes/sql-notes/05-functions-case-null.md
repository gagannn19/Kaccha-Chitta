# 05 · Functions, CASE & NULL Handling

> Transform values inside your query.

## String functions

| Function | Example | Result |
|---|---|---|
| `UPPER(s)` / `LOWER(s)` | `UPPER('aman')` | `AMAN` |
| `LENGTH(s)` | `LENGTH('Neha')` | `4` |
| `CONCAT(a, b, ...)` | `CONCAT(name, ' - ', city)` | `Ankit - Agra` |
| `SUBSTRING(s, start, len)` | `SUBSTRING('Rahul', 1, 3)` | `Rah` (1-based!) |
| `TRIM(s)` | `TRIM('  hi  ')` | `hi` |
| `REPLACE(s, a, b)` | `REPLACE('a-b', '-', '+')` | `a+b` |
| `LEFT(s, n)` / `RIGHT(s, n)` | `LEFT('Delhi', 2)` | `De` (MySQL / PostgreSQL) |

```sql
-- capitalise first letter (LeetCode 1667)
SELECT CONCAT(UPPER(SUBSTRING(name, 1, 1)), LOWER(SUBSTRING(name, 2))) AS name
FROM employees;
```

## Number functions

`ROUND(x, 2)`, `CEIL(x)`, `FLOOR(x)`, `ABS(x)`, `MOD(a, b)` or `a % b`

```sql
SELECT ROUND(AVG(salary), 2) FROM employees;
```

## Date functions (names differ by database)

| Need | MySQL | PostgreSQL | SQLite |
|---|---|---|---|
| today | `CURDATE()` | `CURRENT_DATE` | `DATE('now')` |
| year | `YEAR(d)` | `EXTRACT(YEAR FROM d)` | `strftime('%Y', d)` |
| format | `DATE_FORMAT(d, '%Y-%m')` | `TO_CHAR(d, 'YYYY-MM')` | `strftime('%Y-%m', d)` |
| add days | `DATE_ADD(d, INTERVAL 1 DAY)` | `d + INTERVAL '1 day'` | `DATE(d, '+1 day')` |
| difference | `DATEDIFF(a, b)` | `a - b` | `julianday(a) - julianday(b)` |

> LeetCode uses **MySQL** by default, so learn the MySQL column first.

## CASE - if / else in SQL

```sql
SELECT name, salary,
       CASE
         WHEN salary >= 120000 THEN 'High'
         WHEN salary >= 80000  THEN 'Medium'
         ELSE 'Low'
       END AS band
FROM employees;
```

```
salary 150000 → High
salary  90000 → Medium
salary  60000 → Low
```

## NULL handling

```sql
COALESCE(email, 'no email')          -- first non-NULL value (standard)
IFNULL(email, 'no email')            -- MySQL / SQLite
NULLIF(a, b)                         -- NULL if a = b (avoid divide by zero : x / NULLIF(y, 0))
```

> **Remember :** `NULL + 5 = NULL`, `CONCAT('a', NULL)` = NULL in MySQL. Aggregates like `SUM`, `AVG`, `COUNT(col)` **skip** NULLs.

## Theory Questions

<details><summary><b>Q1. COALESCE vs IFNULL?</b></summary>

COALESCE is standard SQL and takes many arguments (returns the first non-NULL). IFNULL is MySQL/SQLite and takes exactly two.
</details>

<details><summary><b>Q2. How do you avoid division by zero?</b></summary>

`a / NULLIF(b, 0)` - if b is 0, it becomes NULL and the result is NULL instead of an error.
</details>

<details><summary><b>Q3. Can CASE be used in ORDER BY or GROUP BY?</b></summary>

Yes - anywhere an expression is allowed (SELECT, WHERE, ORDER BY, GROUP BY, inside aggregates).
</details>

## Practice Problems

**P1.** Show every employee's email, or `'not given'` if missing.

<details><summary>Solution</summary>

```sql
SELECT name, COALESCE(email, 'not given') AS email FROM employees;
```
</details>

**P2.** Label products as `'Premium'` (price ≥ 20000), `'Mid'` (≥ 2000) or `'Budget'`.

<details><summary>Solution</summary>

```sql
SELECT name, price,
       CASE WHEN price >= 20000 THEN 'Premium'
            WHEN price >= 2000  THEN 'Mid'
            ELSE 'Budget' END AS tier
FROM products;
```
</details>

**P3.** Show customer names in UPPER case with the length of each name.

<details><summary>Solution</summary>

```sql
SELECT UPPER(name) AS name, LENGTH(name) AS len FROM customers;
```
</details>

**P4.** Count delivered and non-delivered orders in ONE row (conditional aggregation).

<details><summary>Solution</summary>

```sql
SELECT SUM(CASE WHEN status = 'delivered' THEN 1 ELSE 0 END) AS delivered,
       SUM(CASE WHEN status <> 'delivered' THEN 1 ELSE 0 END) AS not_delivered
FROM orders;
```
</details>

## LeetCode Problems

| # | Problem | Level | Concept |
|---|---|---|---|
| 1667 | [Fix Names in a Table](https://leetcode.com/problems/fix-names-in-a-table/) | Easy | `UPPER`, `LOWER`, `SUBSTRING` |
| 1527 | [Patients With a Condition](https://leetcode.com/problems/patients-with-a-condition/) | Easy | `LIKE` patterns |
| 1517 | [Find Users With Valid E-Mails](https://leetcode.com/problems/find-users-with-valid-e-mails/) | Easy | `REGEXP` |
| 610 | [Triangle Judgement](https://leetcode.com/problems/triangle-judgement/) | Easy | `CASE` |
| 608 | [Tree Node](https://leetcode.com/problems/tree-node/) | Medium | `CASE` + subquery |
| 1484 | [Group Sold Products By The Date](https://leetcode.com/problems/group-sold-products-by-the-date/) | Easy | `GROUP_CONCAT` |

---
[← 04 · SELECT & Filtering](04-select-and-filtering.md) · [Index](README.md) · [06 · GROUP BY & Aggregates →](06-group-by-and-aggregates.md)
