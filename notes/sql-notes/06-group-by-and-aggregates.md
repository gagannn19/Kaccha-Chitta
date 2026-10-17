# 06 · Aggregates, GROUP BY & HAVING

> Turn many rows into summaries : totals, averages, counts per group.

## Aggregate functions

| Function | Returns | NULLs |
|---|---|---|
| `COUNT(*)` | number of rows | counted |
| `COUNT(col)` | number of non-NULL values | skipped |
| `COUNT(DISTINCT col)` | number of unique non-NULL values | skipped |
| `SUM(col)`, `AVG(col)` | total, average | skipped |
| `MIN(col)`, `MAX(col)` | smallest, largest | skipped |

```sql
SELECT COUNT(*), COUNT(email), AVG(salary), MAX(salary) FROM employees;
-- 10 rows, 9 emails (Sneha's is NULL), average 92500, max 150000
```

## GROUP BY - one result row per group

```
employees                         GROUP BY dept_id
┌──────┬─────────┬────────┐       ┌─────────┬──────────┬───────────┐
│ Aman │ 1       │ 150000 │ ┐     │ dept_id │ COUNT(*) │ AVG(sal)  │
│ Neha │ 1       │ 120000 │ ├──►  │ 1       │ 4        │ 120000    │
│ Rahul│ 1       │ 120000 │ │     │ 2       │ 2        │ 90000     │
│ Priya│ 1       │  90000 │ ┘     │ 3       │ 3        │ 71666.67  │
│ ...  │ 2, 3    │ ...    │ ───►  │ NULL    │ 1        │ 50000     │
└──────┴─────────┴────────┘       └─────────┴──────────┴───────────┘
```

```sql
SELECT dept_id, COUNT(*) AS people, AVG(salary) AS avg_salary
FROM employees
GROUP BY dept_id;
```

> **Rule :** every column in SELECT must be either **inside an aggregate** or **in GROUP BY**.
> `SELECT name, dept_id, COUNT(*) ... GROUP BY dept_id` is wrong - which `name` should it show for a group of 4 people?

## WHERE vs HAVING

```mermaid
flowchart LR
  A["FROM<br/>all rows"] --> B["WHERE<br/>filter ROWS"] --> C["GROUP BY<br/>make groups"] --> D["HAVING<br/>filter GROUPS"] --> E["SELECT"] --> F["ORDER BY"] --> G["LIMIT"]
```

```sql
SELECT dept_id, COUNT(*) AS people
FROM employees
WHERE salary > 55000            -- 1. drop low salaries first (row level)
GROUP BY dept_id
HAVING COUNT(*) >= 3            -- 2. keep only big departments (group level)
ORDER BY people DESC;
```

| | WHERE | HAVING |
|---|---|---|
| Filters | individual rows | groups |
| Runs | before GROUP BY | after GROUP BY |
| Can use aggregates | ❌ | ✅ |

## Group by multiple columns

```sql
SELECT customer_id, status, COUNT(*) AS orders
FROM orders
GROUP BY customer_id, status;     -- one row per (customer, status) pair
```

## Theory Questions

<details><summary><b>Q1. COUNT(*) vs COUNT(col) vs COUNT(DISTINCT col)?</b></summary>

COUNT(*) counts all rows. COUNT(col) counts non-NULL values of col. COUNT(DISTINCT col) counts unique non-NULL values.
</details>

<details><summary><b>Q2. WHERE vs HAVING?</b></summary>

WHERE filters rows before grouping and can't use aggregates. HAVING filters groups after grouping and can.
</details>

<details><summary><b>Q3. Order of execution of a SELECT?</b></summary>

FROM → (JOIN) → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT.
</details>

<details><summary><b>Q4. Does AVG include NULLs?</b></summary>

No. AVG(col) = SUM of non-NULL values / COUNT of non-NULL values. Use `AVG(COALESCE(col, 0))` to treat NULL as 0.
</details>

## Practice Problems

**P1.** Number of employees and total salary per department.

<details><summary>Solution</summary>

```sql
SELECT dept_id, COUNT(*) AS people, SUM(salary) AS total
FROM employees
GROUP BY dept_id;
```
</details>

**P2.** Customers who placed more than 1 order.

<details><summary>Solution</summary>

```sql
SELECT customer_id, COUNT(*) AS total_orders
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 1;
```
</details>

**P3.** Find salaries that appear more than once (duplicates).

<details><summary>Solution</summary>

```sql
SELECT salary, COUNT(*) AS times
FROM employees
GROUP BY salary
HAVING COUNT(*) > 1;
```
</details>

**P4.** Total quantity sold per product, most sold first.

<details><summary>Solution</summary>

```sql
SELECT product_id, SUM(quantity) AS sold
FROM order_items
GROUP BY product_id
ORDER BY sold DESC;
```
</details>

**P5.** Number of orders per month (MySQL : `DATE_FORMAT(order_date, '%Y-%m')`).

<details><summary>Solution</summary>

```sql
SELECT SUBSTR(order_date, 1, 7) AS month, COUNT(*) AS orders
FROM orders
GROUP BY SUBSTR(order_date, 1, 7)
ORDER BY month;
```
</details>

## LeetCode Problems

| # | Problem | Level | Concept |
|---|---|---|---|
| 182 | [Duplicate Emails](https://leetcode.com/problems/duplicate-emails/) | Easy | `GROUP BY ... HAVING COUNT > 1` |
| 596 | [Classes More Than 5 Students](https://leetcode.com/problems/classes-more-than-5-students/) | Easy | `HAVING` |
| 586 | [Customer Placing the Largest Number of Orders](https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/) | Easy | `GROUP BY` + `ORDER BY` + `LIMIT 1` |
| 2356 | [Number of Unique Subjects Taught by Each Teacher](https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/) | Easy | `COUNT(DISTINCT)` |
| 1729 | [Find Followers Count](https://leetcode.com/problems/find-followers-count/) | Easy | `GROUP BY` |
| 619 | [Biggest Single Number](https://leetcode.com/problems/biggest-single-number/) | Easy | `HAVING COUNT = 1` + `MAX` |
| 1211 | [Queries Quality and Percentage](https://leetcode.com/problems/queries-quality-and-percentage/) | Easy | `AVG(condition)`, `ROUND` |
| 1141 | [User Activity for the Past 30 Days I](https://leetcode.com/problems/user-activity-for-the-past-30-days-i/) | Easy | date range + `COUNT(DISTINCT)` |
| 1193 | [Monthly Transactions I](https://leetcode.com/problems/monthly-transactions-i/) | Medium | `DATE_FORMAT` + conditional `SUM` |
| 1045 | [Customers Who Bought All Products](https://leetcode.com/problems/customers-who-bought-all-products/) | Medium | `HAVING COUNT(DISTINCT) = (SELECT COUNT ...)` |

---
[← 05 · Functions, CASE & NULL](05-functions-case-null.md) · [Index](README.md) · [07 · JOINs →](07-joins.md)
