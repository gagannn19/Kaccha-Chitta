# 09 · Set Operations : UNION, INTERSECT, EXCEPT

> Stack the results of two queries on top of each other.

```
  UNION              INTERSECT          EXCEPT (A - B)
  ┌───┬───┐          ┌───┬───┐          ┌───┬───┐
 (███A(███)B███)    (  A(███)B  )      (███A(   )B  )
  all rows           in both            in A, not in B
```

## Rules

- Both queries must have the **same number of columns**
- Matching columns must have **compatible types**
- Column names come from the **first** query
- `ORDER BY` goes once, at the very end

## UNION vs UNION ALL

```sql
SELECT city FROM customers
UNION                -- removes duplicates (sorts / hashes → slower)
SELECT location FROM departments;

SELECT city FROM customers
UNION ALL            -- keeps duplicates (faster)
SELECT location FROM departments;
```

| | UNION | UNION ALL |
|---|---|---|
| Duplicates | removed | kept |
| Speed | slower | faster |
| Use when | you need unique values | you know there are no duplicates, or you want them |

## INTERSECT & EXCEPT

```sql
-- cities that have both customers and an office
SELECT city FROM customers
INTERSECT
SELECT location FROM departments;          -- Agra, Delhi, Mumbai, Bangalore

-- customer cities without an office
SELECT city FROM customers
EXCEPT                                     -- Oracle calls it MINUS
SELECT location FROM departments;
```

> MySQL supports INTERSECT and EXCEPT only from **8.0.31**. On older versions use `IN` / `NOT IN` or joins.

## UNION for "label + combine" reports

```sql
SELECT 'High' AS band, COUNT(*) AS people FROM employees WHERE salary >= 100000
UNION ALL
SELECT 'Low',          COUNT(*)           FROM employees WHERE salary < 100000;
```

This trick (LeetCode 1907) guarantees a row even when a count is 0.

## Theory Questions

<details><summary><b>Q1. UNION vs UNION ALL?</b></summary>

UNION removes duplicate rows (extra work). UNION ALL keeps everything and is faster.
</details>

<details><summary><b>Q2. UNION vs JOIN?</b></summary>

JOIN combines columns side by side (wider rows). UNION stacks rows of similar queries (more rows).
</details>

<details><summary><b>Q3. How to emulate FULL OUTER JOIN in MySQL?</b></summary>

`SELECT ... LEFT JOIN ... UNION SELECT ... RIGHT JOIN ...`
</details>

## Practice Problems

**P1.** A single list of all people names : employees and customers, labelled with their type.

<details><summary>Solution</summary>

```sql
SELECT name, 'employee' AS type FROM employees
UNION ALL
SELECT name, 'customer' FROM customers
ORDER BY name;
```
</details>

**P2.** Full outer join of employees and departments (show Meera AND HR).

<details><summary>Solution</summary>

```sql
SELECT e.name, d.dept_name
FROM employees e LEFT JOIN departments d ON e.dept_id = d.dept_id
UNION
SELECT e.name, d.dept_name
FROM departments d LEFT JOIN employees e ON e.dept_id = d.dept_id;
```
</details>

## LeetCode Problems

| # | Problem | Level | Concept |
|---|---|---|---|
| 1907 | [Count Salary Categories](https://leetcode.com/problems/count-salary-categories/) | Medium | `UNION` to keep zero-count rows |
| 1341 | [Movie Rating](https://leetcode.com/problems/movie-rating/) | Medium | `UNION ALL` of two answers |
| 602 | [Friend Requests II: Who Has the Most Friends](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/) | Medium | `UNION ALL` both columns, then count |

---
[← 08 · Subqueries & CTEs](08-subqueries-and-ctes.md) · [Index](README.md) · [10 · Window Functions →](10-window-functions.md)
