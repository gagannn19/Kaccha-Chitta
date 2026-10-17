# 07 · JOINs

> Combine rows from two or more tables using a related column. The most asked SQL topic in interviews.

## The two tables we'll join

```
employees (left)                    departments (right)
┌────────┬─────────┐                ┌─────────┬─────────────┐
│ name   │ dept_id │                │ dept_id │ dept_name   │
├────────┼─────────┤                ├─────────┼─────────────┤
│ Aman   │ 1       │ ──────────────►│ 1       │ Engineering │
│ Vikram │ 2       │ ──────────────►│ 2       │ Marketing   │
│ Arjun  │ 3       │ ──────────────►│ 3       │ Sales       │
│ Meera  │ NULL    │  (no match)    │ 4       │ HR          │  (no employees)
└────────┴─────────┘                └─────────┴─────────────┘
```

## Join types at a glance

```
 INNER JOIN          LEFT JOIN           RIGHT JOIN          FULL OUTER JOIN
   ┌───┬───┐           ┌───┬───┐           ┌───┬───┐           ┌───┬───┐
  (  A(███)B  )      (███A(███)B  )      (  A(███)B███)      (███A(███)B███)
   only matches       all of A           all of B            everything
                      + matches          + matches
```

| Join | Returns | Meera (no dept) | HR (no people) |
|---|---|---|---|
| `INNER JOIN` | only matching rows | ❌ | ❌ |
| `LEFT JOIN` | all left rows + matches (NULL if none) | ✅ dept = NULL | ❌ |
| `RIGHT JOIN` | all right rows + matches | ❌ | ✅ name = NULL |
| `FULL OUTER JOIN` | all rows from both | ✅ | ✅ |
| `CROSS JOIN` | every combination (A × B rows) | - | - |
| `SELF JOIN` | a table joined with itself | - | - |

## INNER JOIN

```sql
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;      -- 9 rows (Meera missing)
```

## LEFT JOIN

```sql
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;       -- 10 rows, Meera → NULL
```

### Pattern : find rows with NO match (anti-join)

```sql
-- departments with no employees
SELECT d.dept_name
FROM departments d
LEFT JOIN employees e ON e.dept_id = d.dept_id
WHERE e.emp_id IS NULL;                                  -- HR
```

> **Example :** LEFT JOIN is like taking the attendance list (left) and ticking who submitted homework (right). Everyone stays on the list; missing homework shows as blank (NULL).

### ⚠️ ON vs WHERE in a LEFT JOIN

```sql
-- keeps all customers, only attaches DELIVERED orders
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id AND o.status = 'delivered';

-- ✗ turns it back into an INNER JOIN (customers without delivered orders disappear)
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.status = 'delivered';
```

## SELF JOIN - employee & their manager

```sql
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id;
```

```
emp ──manager_id──► same table, different alias
Priya → Neha → Aman
```

## Joining 3+ tables

```sql
SELECT c.name AS customer, o.order_id, p.name AS product, oi.quantity
FROM customers c
JOIN orders o       ON o.customer_id = c.customer_id
JOIN order_items oi ON oi.order_id   = o.order_id
JOIN products p     ON p.product_id  = oi.product_id;
```

```mermaid
flowchart LR
  C[customers] -- customer_id --> O[orders] -- order_id --> OI[order_items] -- product_id --> P[products]
```

## CROSS JOIN

```sql
SELECT c.name, p.name FROM customers c CROSS JOIN products p;   -- 5 × 6 = 30 rows
```

Used to build "every combination" grids (LeetCode 1280 - every student × every subject).

## Theory Questions

<details><summary><b>Q1. INNER vs LEFT JOIN?</b></summary>

INNER returns only rows with a match in both tables. LEFT returns every row from the left table, with NULLs where the right side has no match.
</details>

<details><summary><b>Q2. How do you find records in A that are not in B?</b></summary>

`LEFT JOIN B ... WHERE B.key IS NULL`, or `NOT EXISTS`, or `NOT IN` (careful : NOT IN breaks if the subquery returns a NULL).
</details>

<details><summary><b>Q3. What is a self join? Give a use case.</b></summary>

Joining a table with itself using two aliases - e.g. employees and their managers, or comparing today's row with yesterday's (LeetCode 197).
</details>

<details><summary><b>Q4. How many rows does a CROSS JOIN return?</b></summary>

rows(A) × rows(B).
</details>

<details><summary><b>Q5. MySQL has no FULL OUTER JOIN - how do you do it?</b></summary>

`LEFT JOIN ... UNION ... RIGHT JOIN ...` (UNION removes the duplicated matching rows).
</details>

<details><summary><b>Q6. Can a JOIN create more rows than the left table has?</b></summary>

Yes - if one left row matches many right rows (one-to-many), it appears once per match. Watch out when you SUM after joining.
</details>

## Practice Problems

**P1.** Every employee with their department name; show `'No Dept'` if missing.

<details><summary>Solution</summary>

```sql
SELECT e.name, COALESCE(d.dept_name, 'No Dept') AS dept
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;
```
</details>

**P2.** Customers who never placed an order.

<details><summary>Solution</summary>

```sql
SELECT c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;
```
</details>

**P3.** Employees who earn more than their manager.

<details><summary>Solution</summary>

```sql
SELECT e.name
FROM employees e
JOIN employees m ON e.manager_id = m.emp_id
WHERE e.salary > m.salary;
-- returns nothing in our data - try changing Priya's salary to 130000 and run again
```
</details>

**P4.** Number of employees in every department, including departments with 0 people.

<details><summary>Solution</summary>

```sql
SELECT d.dept_name, COUNT(e.emp_id) AS people      -- COUNT(e.emp_id), not COUNT(*) !
FROM departments d
LEFT JOIN employees e ON e.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name;
```
</details>

**P5.** Total amount spent by each customer on delivered orders (quantity × price).

<details><summary>Solution</summary>

```sql
SELECT c.name, SUM(oi.quantity * p.price) AS spent
FROM customers c
JOIN orders o       ON o.customer_id = c.customer_id AND o.status = 'delivered'
JOIN order_items oi ON oi.order_id = o.order_id
JOIN products p     ON p.product_id = oi.product_id
GROUP BY c.customer_id, c.name
ORDER BY spent DESC;
```
</details>

**P6.** Products that were never sold.

<details><summary>Solution</summary>

```sql
SELECT p.name
FROM products p
LEFT JOIN order_items oi ON oi.product_id = p.product_id
WHERE oi.order_id IS NULL;
```
</details>

## LeetCode Problems

| # | Problem | Level | Concept |
|---|---|---|---|
| 175 | [Combine Two Tables](https://leetcode.com/problems/combine-two-tables/) | Easy | `LEFT JOIN` |
| 183 | [Customers Who Never Order](https://leetcode.com/problems/customers-who-never-order/) | Easy | anti-join |
| 181 | [Employees Earning More Than Their Managers](https://leetcode.com/problems/employees-earning-more-than-their-managers/) | Easy | self join |
| 197 | [Rising Temperature](https://leetcode.com/problems/rising-temperature/) | Easy | self join on dates |
| 1378 | [Replace Employee ID With The Unique Identifier](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/) | Easy | `LEFT JOIN` |
| 1068 | [Product Sales Analysis I](https://leetcode.com/problems/product-sales-analysis-i/) | Easy | `INNER JOIN` |
| 1581 | [Customer Who Visited but Did Not Make Any Transactions](https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/) | Easy | anti-join + `GROUP BY` |
| 577 | [Employee Bonus](https://leetcode.com/problems/employee-bonus/) | Easy | `LEFT JOIN` + NULL check |
| 1280 | [Students and Examinations](https://leetcode.com/problems/students-and-examinations/) | Easy | `CROSS JOIN` + `LEFT JOIN` |
| 1661 | [Average Time of Process per Machine](https://leetcode.com/problems/average-time-of-process-per-machine/) | Easy | self join |
| 1731 | [The Number of Employees Which Report to Each Employee](https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/) | Easy | self join + `GROUP BY` |
| 1251 | [Average Selling Price](https://leetcode.com/problems/average-selling-price/) | Easy | join on date range |
| 570 | [Managers with at Least 5 Direct Reports](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/) | Medium | self join + `HAVING` |
| 1934 | [Confirmation Rate](https://leetcode.com/problems/confirmation-rate/) | Medium | `LEFT JOIN` + `AVG(condition)` |
| 1158 | [Market Analysis I](https://leetcode.com/problems/market-analysis-i/) | Medium | condition inside `ON` |
| 262 | [Trips and Users](https://leetcode.com/problems/trips-and-users/) | Hard | multiple joins + rate |

---
[← 06 · GROUP BY & Aggregates](06-group-by-and-aggregates.md) · [Index](README.md) · [08 · Subqueries & CTEs →](08-subqueries-and-ctes.md)
