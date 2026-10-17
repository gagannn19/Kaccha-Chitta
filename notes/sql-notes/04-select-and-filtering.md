# 04 · SELECT, WHERE, ORDER BY & LIMIT

> 80% of real SQL is reading data. Master this file first.

## Basic SELECT

```sql
SELECT * FROM employees;                         -- all columns (avoid in real apps)
SELECT name, salary FROM employees;              -- chosen columns
SELECT name, salary * 12 AS yearly FROM employees;   -- calculated column + alias
SELECT DISTINCT dept_id FROM employees;          -- unique values only
```

## WHERE - filter rows

| Operator | Example |
|---|---|
| `=`, `!=` / `<>`, `>`, `<`, `>=`, `<=` | `salary >= 100000` |
| `AND`, `OR`, `NOT` | `dept_id = 1 AND salary > 100000` |
| `BETWEEN a AND b` (inclusive) | `salary BETWEEN 60000 AND 100000` |
| `IN (...)` | `dept_id IN (1, 3)` |
| `LIKE` pattern | `name LIKE 'A%'` |
| `IS NULL` / `IS NOT NULL` | `email IS NULL` |

```sql
SELECT name, salary
FROM employees
WHERE dept_id IN (1, 3)
  AND salary BETWEEN 60000 AND 120000
  AND name NOT LIKE 'R%';
```

### LIKE wildcards

```
%   any number of characters      'A%'    → starts with A
_   exactly one character         '_a%'   → 2nd letter is a
                                  '%@company.com' → ends with
```

### NULL is special

```
salary = NULL      ✗  always unknown → no rows
salary IS NULL     ✓
NULL = NULL        → NULL (not TRUE!)
```

> **Example :** NULL means "unknown", not zero or empty. "Is unknown equal to unknown?" - we can't say, so SQL returns unknown.

### AND before OR

```sql
-- returns Engineering people + ANYONE earning > 100000 from any dept
WHERE dept_id = 1 OR dept_id = 2 AND salary > 100000
-- what you probably meant :
WHERE (dept_id = 1 OR dept_id = 2) AND salary > 100000
```

## ORDER BY & LIMIT

```sql
SELECT name, salary
FROM employees
ORDER BY salary DESC, name ASC     -- highest first, ties by name
LIMIT 3;                           -- top 3

LIMIT 3 OFFSET 3                   -- rows 4 to 6 (pagination : page 2)
-- SQL Server : SELECT TOP 3 ...   Oracle / standard : FETCH FIRST 3 ROWS ONLY
```

## Order of a query

```
SELECT   columns        5
FROM     table          1
WHERE    row filter     2
GROUP BY groups         3   (next file)
HAVING   group filter   4
ORDER BY sorting        6
LIMIT    how many       7
```

Written top to bottom, but **run in the number order**. That's why you can't use a `SELECT` alias inside `WHERE`.

## Theory Questions

<details><summary><b>Q1. Why does WHERE email = NULL return nothing?</b></summary>

Any comparison with NULL gives UNKNOWN, not TRUE. Use `IS NULL`.
</details>

<details><summary><b>Q2. Is BETWEEN inclusive?</b></summary>

Yes, both ends are included : `BETWEEN 1 AND 5` includes 1 and 5.
</details>

<details><summary><b>Q3. Why can't I use a column alias in WHERE?</b></summary>

WHERE runs before SELECT, so the alias doesn't exist yet. Repeat the expression or use a subquery / CTE.
</details>

<details><summary><b>Q4. Why avoid SELECT * ?</b></summary>

It fetches unneeded data (slower, more memory), breaks when columns change, and hides which columns your code depends on.
</details>

## Practice Problems

**P1.** Names of employees hired in 2024.

<details><summary>Solution</summary>

```sql
SELECT name FROM employees
WHERE hire_date BETWEEN '2024-01-01' AND '2024-12-31';
```
</details>

**P2.** Employees whose email is missing.

<details><summary>Solution</summary>

```sql
SELECT name FROM employees WHERE email IS NULL;
```
</details>

**P3.** The 3 cheapest products.

<details><summary>Solution</summary>

```sql
SELECT name, price FROM products ORDER BY price ASC LIMIT 3;
```
</details>

**P4.** Customers from Agra or Delhi whose name contains the letter `a`, sorted by name.

<details><summary>Solution</summary>

```sql
SELECT name, city FROM customers
WHERE city IN ('Agra', 'Delhi') AND name LIKE '%a%'
ORDER BY name;
```
</details>

**P5.** The 2nd page of products when showing 2 per page, most expensive first.

<details><summary>Solution</summary>

```sql
SELECT name, price FROM products ORDER BY price DESC LIMIT 2 OFFSET 2;
```
</details>

## LeetCode Problems

| # | Problem | Level | Concept |
|---|---|---|---|
| 1757 | [Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/) | Easy | `WHERE ... AND` |
| 584 | [Find Customer Referee](https://leetcode.com/problems/find-customer-referee/) | Easy | NULL trap : `!= 2 OR IS NULL` |
| 595 | [Big Countries](https://leetcode.com/problems/big-countries/) | Easy | `OR` |
| 1148 | [Article Views I](https://leetcode.com/problems/article-views-i/) | Easy | `DISTINCT`, `ORDER BY` |
| 1683 | [Invalid Tweets](https://leetcode.com/problems/invalid-tweets/) | Easy | `LENGTH()` in WHERE |
| 620 | [Not Boring Movies](https://leetcode.com/problems/not-boring-movies/) | Easy | `%` odd ids, `!=`, `ORDER BY` |

---
[← 03 · Insert, Update & Delete](03-insert-update-delete.md) · [Index](README.md) · [05 · Functions, CASE & NULL →](05-functions-case-null.md)
