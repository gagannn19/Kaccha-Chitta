# 03 · INSERT, UPDATE & DELETE (DML)

> Add, change and remove rows.

## INSERT

```sql
INSERT INTO customers (customer_id, name, city, signup_date)
VALUES (6, 'Riya', 'Pune', '2024-10-01');                   -- one row, named columns (best)

INSERT INTO customers VALUES (7, 'Sam', 'Delhi', '2024-10-02');   -- all columns, in order

INSERT INTO customers (customer_id, name) VALUES
  (8, 'Tara'), (9, 'Om');                                    -- many rows; missing columns = NULL / DEFAULT

INSERT INTO archived_orders                                  -- copy rows from a query
SELECT * FROM orders WHERE status = 'cancelled';
```

## UPDATE

```sql
UPDATE employees
SET salary = salary * 1.10           -- 10% raise
WHERE dept_id = 1;                   -- ONLY Engineering

UPDATE employees
SET email = 'sneha@company.com', salary = 75000
WHERE emp_id = 6;
```

> ⚠️ **Never forget WHERE.** `UPDATE employees SET salary = 0;` changes **every** row. Run the same `WHERE` with `SELECT` first to see what will change.

## DELETE

```sql
DELETE FROM orders WHERE status = 'cancelled';     -- remove matching rows
DELETE FROM orders;                                 -- removes ALL rows (careful!)
```

## Update with CASE

```sql
UPDATE employees
SET salary = CASE
    WHEN dept_id = 1 THEN salary + 10000
    WHEN dept_id = 2 THEN salary + 5000
    ELSE salary
END;
```

## Safe workflow

```mermaid
flowchart LR
  A["Write the WHERE"] --> B["SELECT * ... WHERE<br/>check the rows"] --> C["UPDATE / DELETE<br/>same WHERE"] --> D["SELECT again<br/>verify"]
```

## Theory Questions

<details><summary><b>Q1. What happens to columns you don't mention in INSERT?</b></summary>

They get their DEFAULT value, or NULL. If the column is NOT NULL without a default, the insert fails.
</details>

<details><summary><b>Q2. How do you insert data from one table into another?</b></summary>

`INSERT INTO target (cols) SELECT cols FROM source WHERE ...;`
</details>

<details><summary><b>Q3. What is an UPSERT?</b></summary>

Insert a row, or update it if it already exists. MySQL : `INSERT ... ON DUPLICATE KEY UPDATE`. PostgreSQL / SQLite : `INSERT ... ON CONFLICT (...) DO UPDATE`.
</details>

## Practice Problems

**P1.** Give everyone in Sales (dept 3) a 5000 raise.

<details><summary>Solution</summary>

```sql
UPDATE employees SET salary = salary + 5000 WHERE dept_id = 3;
```
</details>

**P2.** Set the email of employees who have no email to `'unknown@company.com'`.

<details><summary>Solution</summary>

```sql
UPDATE employees SET email = 'unknown@company.com' WHERE email IS NULL;
```
</details>

**P3.** Delete all order items of cancelled orders (use a subquery).

<details><summary>Solution</summary>

```sql
DELETE FROM order_items
WHERE order_id IN (SELECT order_id FROM orders WHERE status = 'cancelled');
```
</details>

## LeetCode Problems

| # | Problem | Level | Concept |
|---|---|---|---|
| 627 | [Swap Salary](https://leetcode.com/problems/swap-salary/) | Easy | `UPDATE` + `CASE` |
| 196 | [Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails/) | Easy | `DELETE` with self join / subquery |

---
[← 02 · Create Tables & Constraints](02-create-tables-and-constraints.md) · [Index](README.md) · [04 · SELECT & Filtering →](04-select-and-filtering.md)
