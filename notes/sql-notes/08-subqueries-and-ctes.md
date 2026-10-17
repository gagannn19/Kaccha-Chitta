# 08 · Subqueries & CTEs

> A query inside a query - for when one step isn't enough.

## Types of subqueries

```
┌─ outer query ─────────────────────────────────────────────┐
│ SELECT name FROM employees                                │
│ WHERE salary > ( SELECT AVG(salary) FROM employees )      │
│                └────────── inner query ──────────┘        │
└───────────────────────────────────────────────────────────┘
inner runs first → 92500 → outer uses it
```

| Type | Returns | Example use |
|---|---|---|
| **Scalar** | one value | `WHERE salary > (SELECT AVG(salary) ...)` |
| **Row / list** | one column, many rows | `WHERE dept_id IN (SELECT ...)` |
| **Table (derived table)** | a full table | `FROM (SELECT ...) AS t` |
| **Correlated** | runs once per outer row | uses a column from the outer query |

## Scalar & IN

```sql
-- above-average earners
SELECT name, salary FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- employees working in Bangalore or Mumbai
SELECT name FROM employees
WHERE dept_id IN (SELECT dept_id FROM departments WHERE location IN ('Bangalore', 'Mumbai'));
```

## Derived table (subquery in FROM)

```sql
SELECT dept_id, avg_sal
FROM (SELECT dept_id, AVG(salary) AS avg_sal
      FROM employees GROUP BY dept_id) AS t
WHERE avg_sal > 80000;
```

## Correlated subquery

```sql
-- employees who earn more than the average of THEIR OWN department
SELECT e.name, e.salary, e.dept_id
FROM employees e
WHERE e.salary > (SELECT AVG(salary)
                  FROM employees
                  WHERE dept_id = e.dept_id);     -- ← refers to the outer row
```

```
for each outer row e:
    compute avg of e's department  → compare
(like a nested loop - can be slow on big tables)
```

## EXISTS / NOT EXISTS

```sql
-- customers who placed at least one order
SELECT c.name FROM customers c
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);
```

> ⚠️ **NOT IN with NULL :** `WHERE x NOT IN (1, 2, NULL)` returns **no rows** - comparing with NULL is unknown. `NOT EXISTS` is safe.

## CTE - Common Table Expression (WITH)

A named, temporary result you can read like a table. Makes long queries readable.

```sql
WITH dept_avg AS (
    SELECT dept_id, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY dept_id
)
SELECT e.name, e.salary, d.avg_sal
FROM employees e
JOIN dept_avg d ON d.dept_id = e.dept_id
WHERE e.salary > d.avg_sal;
```

```mermaid
flowchart LR
  A["WITH step1 AS (...)"] --> B["step2 AS (... FROM step1)"] --> C["final SELECT ... FROM step2"]
```

> **Example :** A CTE is like doing rough work in your notebook before writing the final answer - each step has a name.

## Recursive CTE - walk a hierarchy

```sql
WITH RECURSIVE chain AS (
    SELECT emp_id, name, manager_id, 1 AS level
    FROM employees WHERE manager_id IS NULL          -- start : top bosses
    UNION ALL
    SELECT e.emp_id, e.name, e.manager_id, c.level + 1
    FROM employees e
    JOIN chain c ON e.manager_id = c.emp_id          -- next level down
)
SELECT name, level FROM chain ORDER BY level, name;
```

```
level 1 : Aman, Arjun, Meera, Vikram
level 2 : Neha, Rahul, Sneha, Kavya, Rohit
level 3 : Priya
```

## Theory Questions

<details><summary><b>Q1. Subquery vs JOIN - which is better?</b></summary>

Both can often answer the same question. JOINs are usually faster and better when you need columns from both tables. Subqueries read naturally for "filter by a calculated value". Modern optimisers often rewrite one into the other.
</details>

<details><summary><b>Q2. What is a correlated subquery?</b></summary>

A subquery that uses a column from the outer query, so it is evaluated once per outer row.
</details>

<details><summary><b>Q3. CTE vs subquery vs temporary table?</b></summary>

CTE : named, readable, exists only for one statement, can be recursive. Subquery : inline, unnamed. Temp table : physically stored for the session, can be indexed and reused by many queries.
</details>

<details><summary><b>Q4. Why prefer NOT EXISTS over NOT IN?</b></summary>

If the subquery returns any NULL, NOT IN returns no rows at all. NOT EXISTS handles NULLs correctly.
</details>

## Practice Problems

**P1.** Products more expensive than the average product.

<details><summary>Solution</summary>

```sql
SELECT name, price FROM products
WHERE price > (SELECT AVG(price) FROM products);
```
</details>

**P2.** Second highest salary (without window functions).

<details><summary>Solution</summary>

```sql
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);       -- 120000
```
</details>

**P3.** Highest paid employee(s) in each department.

<details><summary>Solution</summary>

```sql
SELECT e.dept_id, e.name, e.salary
FROM employees e
WHERE e.salary = (SELECT MAX(salary) FROM employees WHERE dept_id = e.dept_id);
```
</details>

**P4.** Using a CTE, list customers whose total delivered spending is above 30000.

<details><summary>Solution</summary>

```sql
WITH spend AS (
    SELECT o.customer_id, SUM(oi.quantity * p.price) AS total
    FROM orders o
    JOIN order_items oi ON oi.order_id = o.order_id
    JOIN products p     ON p.product_id = oi.product_id
    WHERE o.status = 'delivered'
    GROUP BY o.customer_id
)
SELECT c.name, s.total
FROM spend s JOIN customers c ON c.customer_id = s.customer_id
WHERE s.total > 30000;
```
</details>

**P5.** Customers who ordered a product from the 'Clothing' category (use EXISTS).

<details><summary>Solution</summary>

```sql
SELECT c.name FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    JOIN order_items oi ON oi.order_id = o.order_id
    JOIN products p     ON p.product_id = oi.product_id
    WHERE o.customer_id = c.customer_id AND p.category = 'Clothing'
);
```
</details>

## LeetCode Problems

| # | Problem | Level | Concept |
|---|---|---|---|
| 1978 | [Employees Whose Manager Left the Company](https://leetcode.com/problems/employees-whose-manager-left-the-company/) | Easy | `NOT IN` subquery |
| 1789 | [Primary Department for Each Employee](https://leetcode.com/problems/primary-department-for-each-employee/) | Easy | subquery / `UNION` |
| 176 | [Second Highest Salary](https://leetcode.com/problems/second-highest-salary/) | Medium | scalar subquery, return NULL if none |
| 177 | [Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/) | Medium | `LIMIT 1 OFFSET N-1` in a function |
| 184 | [Department Highest Salary](https://leetcode.com/problems/department-highest-salary/) | Medium | `(dept, salary) IN (subquery)` |
| 1070 | [Product Sales Analysis III](https://leetcode.com/problems/product-sales-analysis-iii/) | Medium | first year per product |
| 1164 | [Product Price at a Given Date](https://leetcode.com/problems/product-price-at-a-given-date/) | Medium | latest row before a date |
| 1174 | [Immediate Food Delivery II](https://leetcode.com/problems/immediate-food-delivery-ii/) | Medium | first order per customer |
| 550 | [Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/) | Medium | first login + next day |
| 585 | [Investments in 2016](https://leetcode.com/problems/investments-in-2016/) | Medium | conditions via subqueries |

---
[← 07 · JOINs](07-joins.md) · [Index](README.md) · [09 · Set Operations →](09-set-operations.md)
