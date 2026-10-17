# 10 · Window Functions

> GROUP BY squashes rows into one. Window functions **keep every row** and add a calculated column next to it.

## GROUP BY vs Window : the big idea

```
GROUP BY dept_id                     AVG(salary) OVER (PARTITION BY dept_id)
┌──────┬────────┐                    ┌───────┬──────┬────────┬─────────┐
│ dept │ avg    │                    │ name  │ dept │ salary │ dept_avg│
├──────┼────────┤                    ├───────┼──────┼────────┼─────────┤
│ 1    │ 120000 │   rows squashed    │ Aman  │ 1    │ 150000 │ 120000  │
│ 2    │  90000 │   (4 → 1)          │ Neha  │ 1    │ 120000 │ 120000  │
│ 3    │  71667 │                    │ Rahul │ 1    │ 120000 │ 120000  │
└──────┴────────┘                    │ Priya │ 1    │  90000 │ 120000  │
                                     │ ...   │      │        │         │   every row stays!
                                     └───────┴──────┴────────┴─────────┘
```

Think of it like a class topper list: you don't merge all students into one row, you just write each student's **rank** next to their name.

## Syntax

```sql
function_name(...) OVER (
    PARTITION BY col      -- split into groups (optional)
    ORDER BY col          -- order inside each group (optional)
    ROWS BETWEEN ...      -- frame : which rows to look at (optional)
)
```

```
employees ──► PARTITION BY dept_id ──► ORDER BY salary DESC ──► apply function per row
              ┌─ dept 1 ─┐              Aman 150000  → 1
              │ 4 rows   │              Neha 120000  → 2
              └──────────┘              Rahul 120000 → 3 ...
              ┌─ dept 2 ─┐              (numbering restarts for every partition)
              └──────────┘
```

## Types of window functions

| Family | Functions | Use |
|---|---|---|
| **Ranking** | `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `NTILE(n)` | position of a row |
| **Value / offset** | `LAG(col, n)`, `LEAD(col, n)`, `FIRST_VALUE()`, `LAST_VALUE()` | look at a previous / next row |
| **Aggregate** | `SUM()`, `AVG()`, `COUNT()`, `MIN()`, `MAX()` with `OVER` | running totals, group averages |

## ROW_NUMBER vs RANK vs DENSE_RANK (most asked!)

Salaries sorted high → low:

```
salary   │ ROW_NUMBER │ RANK │ DENSE_RANK
─────────┼────────────┼──────┼───────────
150000   │     1      │  1   │    1
120000   │     2      │  2   │    2        ← tie
120000   │     3      │  2   │    2        ← tie
110000   │     4      │  4   │    3        ← RANK skips 3, DENSE_RANK doesn't
 95000   │     5      │  5   │    4
```

- **ROW_NUMBER** : always unique 1,2,3,4 (ties broken randomly).
- **RANK** : ties share, then **gap** (1,2,2,4) - like Olympic medals.
- **DENSE_RANK** : ties share, **no gap** (1,2,2,3) - use for "Nth highest salary".

```sql
SELECT name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn,
       RANK()       OVER (ORDER BY salary DESC) AS rnk,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS drnk
FROM employees;
```

## LAG and LEAD : look back / look forward

```
order_date   LAG(order_date)   LEAD(order_date)
2024-07-01   NULL          ◄── first row has no previous
2024-07-03   2024-07-01
2024-07-15   2024-07-03
...                             last row has no next ──► NULL
```

```sql
SELECT order_id, order_date,
       LAG(order_date)  OVER (ORDER BY order_date) AS prev_order,
       LEAD(order_date) OVER (ORDER BY order_date) AS next_order
FROM orders;
```

`LAG(col, 2, 0)` = look 2 rows back, and use 0 if there is none.

## Running totals & frames

```
ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW      (running total)
 ┌───┬───┬───┬───┬───┐
 │ ■ │ ■ │ ■ │ ▶ │   │   ■ = included,  ▶ = current row
 └───┴───┴───┴───┴───┘

ROWS BETWEEN 2 PRECEDING AND CURRENT ROW              (3-row moving average)
 ┌───┬───┬───┬───┬───┐
 │   │ ■ │ ■ │ ▶ │   │
 └───┴───┴───┴───┴───┘
```

```sql
SELECT name, salary,
       SUM(salary) OVER (ORDER BY emp_id) AS running_total,
       AVG(salary) OVER (ORDER BY emp_id
                         ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS moving_avg_3
FROM employees;
```

> Gotcha: with `ORDER BY` and no frame, the default frame is `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`. Ties in the ORDER BY column get the **same** running total. Use `ROWS` if you want strict row-by-row.

> Gotcha 2: `LAST_VALUE()` with the default frame just returns the current row. Write `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`.

## Where you can (and can't) use them

```
FROM → WHERE → GROUP BY → HAVING → SELECT (window runs here) → ORDER BY → LIMIT
```

Window functions run **after** WHERE, so you **can't** write `WHERE rn = 1`. Wrap in a CTE/subquery first:

```sql
WITH ranked AS (
  SELECT name, dept_id, salary,
         DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
  FROM employees
)
SELECT * FROM ranked WHERE rnk = 1;    -- top earner(s) per department
```

## Theory Questions

<details><summary><b>Q1. Window function vs GROUP BY?</b></summary>

GROUP BY collapses rows into one row per group. A window function computes over a group of rows but returns a value for **every** row - no rows are lost.
</details>

<details><summary><b>Q2. Difference between ROW_NUMBER, RANK and DENSE_RANK?</b></summary>

On ties: ROW_NUMBER gives unique numbers (1,2,3), RANK gives the same number then skips (1,2,2,4), DENSE_RANK gives the same number without skipping (1,2,2,3).
</details>

<details><summary><b>Q3. What does PARTITION BY do?</b></summary>

It splits rows into independent groups; the window function restarts for each group. It is like GROUP BY but without collapsing rows.
</details>

<details><summary><b>Q4. Why can't you use a window function in WHERE?</b></summary>

WHERE runs before SELECT in the logical order, and window functions are computed in SELECT. Use a CTE or subquery, then filter (some DBs have `QUALIFY` for this).
</details>

<details><summary><b>Q5. What is a frame? ROWS vs RANGE?</b></summary>

The frame is the set of rows (inside the partition) the function looks at for the current row. `ROWS` counts physical rows; `RANGE` groups rows with equal ORDER BY values together.
</details>

<details><summary><b>Q6. What do LAG and LEAD return for the first/last row?</b></summary>

NULL, unless you give a default as the 3rd argument: `LAG(x, 1, 0)`.
</details>

<details><summary><b>Q7. What does NTILE(4) do?</b></summary>

Splits ordered rows into 4 nearly equal buckets (quartiles) and returns the bucket number 1-4.
</details>

## Practice Problems

**P1.** Rank all employees by salary (dense rank, highest = 1).

<details><summary>Solution</summary>

```sql
SELECT name, salary,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;
```
</details>

**P2.** Highest-paid employee(s) in each department.

<details><summary>Solution</summary>

```sql
WITH r AS (
  SELECT name, dept_id, salary,
         RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
  FROM employees
  WHERE dept_id IS NOT NULL
)
SELECT name, dept_id, salary FROM r WHERE rnk = 1;
```
</details>

**P3.** Show each employee's salary and how far it is from their department average.

<details><summary>Solution</summary>

```sql
SELECT name, dept_id, salary,
       ROUND(AVG(salary) OVER (PARTITION BY dept_id), 0) AS dept_avg,
       salary - ROUND(AVG(salary) OVER (PARTITION BY dept_id), 0) AS diff
FROM employees;
```
</details>

**P4.** For every customer, show each order and the number of days since their previous order.

<details><summary>Solution</summary>

```sql
SELECT customer_id, order_id, order_date,
       JULIANDAY(order_date)
       - JULIANDAY(LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)) AS days_gap
FROM orders;
-- MySQL: DATEDIFF(order_date, LAG(order_date) OVER (...))
```
</details>

**P5.** Running total of revenue by order date (delivered orders only).

<details><summary>Solution</summary>

```sql
WITH rev AS (
  SELECT o.order_id, o.order_date, SUM(oi.quantity * p.price) AS amount
  FROM orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  JOIN products p     ON p.product_id = oi.product_id
  WHERE o.status = 'delivered'
  GROUP BY o.order_id, o.order_date
)
SELECT order_id, order_date, amount,
       SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_revenue
FROM rev;
```
</details>

**P6.** Each customer's first order only.

<details><summary>Solution</summary>

```sql
WITH f AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS rn
  FROM orders
)
SELECT customer_id, order_id, order_date FROM f WHERE rn = 1;
```
</details>

**P7.** Split employees into 4 salary groups (quartiles).

<details><summary>Solution</summary>

```sql
SELECT name, salary, NTILE(4) OVER (ORDER BY salary DESC) AS quartile
FROM employees;
```
</details>

**P8.** Top 2 salaries in each department (ties included).

<details><summary>Solution</summary>

```sql
WITH r AS (
  SELECT name, dept_id, salary,
         DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS dr
  FROM employees
)
SELECT name, dept_id, salary FROM r WHERE dr <= 2 AND dept_id IS NOT NULL
ORDER BY dept_id, salary DESC;
```
</details>

## LeetCode Problems

| # | Problem | Level | Concept |
|---|---|---|---|
| 178 | [Rank Scores](https://leetcode.com/problems/rank-scores/) | Medium | `DENSE_RANK()` |
| 185 | [Department Top Three Salaries](https://leetcode.com/problems/department-top-three-salaries/) | Hard | `DENSE_RANK` + `PARTITION BY` |
| 180 | [Consecutive Numbers](https://leetcode.com/problems/consecutive-numbers/) | Medium | `LAG` / `LEAD` |
| 626 | [Exchange Seats](https://leetcode.com/problems/exchange-seats/) | Medium | `LAG` / `LEAD` or `CASE` on id |
| 1204 | [Last Person to Fit in the Bus](https://leetcode.com/problems/last-person-to-fit-in-the-bus/) | Medium | running `SUM() OVER` |
| 1321 | [Restaurant Growth](https://leetcode.com/problems/restaurant-growth/) | Medium | 7-day moving window frame |
| 1174 | [Immediate Food Delivery II](https://leetcode.com/problems/immediate-food-delivery-ii/) | Medium | `ROW_NUMBER` first order |
| 550 | [Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/) | Medium | `MIN() OVER` / `LEAD` |
| 1164 | [Product Price at a Given Date](https://leetcode.com/problems/product-price-at-a-given-date/) | Medium | latest row per group |
| 601 | [Human Traffic of Stadium](https://leetcode.com/problems/human-traffic-of-stadium/) | Hard | gaps & islands (`id - ROW_NUMBER`) |

---
[← 09 · Set Operations](09-set-operations.md) · [Index](README.md) · [11 · Normalization & Keys →](11-normalization-and-keys.md)
