# 12 · Indexes, Views, Transactions & More

> The "behind the scenes" topics: speed, safety, and reusable logic. Very common in interviews.

## Indexes : the book index analogy

Without an index, finding "Kavya" means reading every row (full table scan). With an index, the DB jumps straight there - like using a book's index instead of flipping every page.

```
B-Tree index on salary
                 [ 95000 ]
               /           \
     [60000 | 70000]     [120000 | 150000]
      /    |     \         /     |      \
   50000 60000 70000+  110000 120000  150000 ──► row pointers
search 110000 → 3 hops instead of 10 rows (millions → ~20 hops)
```

```sql
CREATE INDEX idx_emp_salary ON employees(salary);
CREATE INDEX idx_dept_salary ON employees(dept_id, salary);   -- composite
CREATE UNIQUE INDEX idx_emp_email ON employees(email);
DROP INDEX idx_emp_salary;          -- MySQL: DROP INDEX idx ON employees;
```

| Clustered | Non-clustered |
|---|---|
| table rows physically stored in this order | separate structure with pointers to rows |
| only **one** per table (usually the PK) | many per table |
| like a phone book (sorted by name itself) | like the index at the back of a book |

**Composite index & leftmost prefix rule:** index on `(dept_id, salary)` helps `WHERE dept_id = 1` and `WHERE dept_id = 1 AND salary > 100000`, but **not** `WHERE salary > 100000` alone.

| Index helps | Index hurts / not used |
|---|---|
| WHERE, JOIN, ORDER BY, GROUP BY columns | small tables |
| high-cardinality columns (email, id) | low-cardinality (gender, boolean) |
| | every INSERT/UPDATE/DELETE gets slower |
| | `WHERE UPPER(name) = ...` (function on column) |
| | `LIKE '%abc'` (leading wildcard) |

## EXPLAIN : ask the DB how it will run your query

```sql
EXPLAIN QUERY PLAN                 -- SQLite;  MySQL/Postgres: EXPLAIN
SELECT * FROM employees WHERE salary > 100000;
-- before index: SCAN employees
-- after index : SEARCH employees USING INDEX idx_emp_salary (salary>?)
```

## Query optimization checklist

1. `SELECT` only the columns you need, not `*`.
2. Index columns used in `WHERE`, `JOIN`, `ORDER BY`.
3. Avoid functions on indexed columns in WHERE (`YEAR(date) = 2024` → `date >= '2024-01-01' AND date < '2025-01-01'`).
4. Prefer `EXISTS` over `IN` for big correlated subqueries; `UNION ALL` over `UNION` when duplicates are fine.
5. Filter early (WHERE) instead of late (HAVING) when possible.
6. Use `LIMIT` and pagination.
7. Check the plan with `EXPLAIN`.

## Views : saved queries

A view is a **virtual table** - a stored SELECT. No data is copied (unless it's a materialized view).

```sql
CREATE VIEW emp_details AS
SELECT e.emp_id, e.name, e.salary, d.dept_name
FROM employees e LEFT JOIN departments d ON e.dept_id = d.dept_id;

SELECT * FROM emp_details WHERE salary > 100000;   -- use like a table
DROP VIEW emp_details;
```

| View | Materialized view |
|---|---|
| query runs every time | result stored on disk |
| always fresh | must be refreshed |
| no storage | faster reads, uses storage |

Uses: hide complex joins, security (show only some columns), reusable logic.

## Transactions & ACID

A transaction = a group of statements that succeed **together** or fail **together**.
Classic example: transfer Rs.500 from A to B.

```
BEGIN
  ├─ UPDATE accounts SET bal = bal - 500 WHERE id = 'A'
  ├─ UPDATE accounts SET bal = bal + 500 WHERE id = 'B'
  │      ✓ both ok ──► COMMIT   (saved permanently)
  │      ✗ crash   ──► ROLLBACK (as if nothing happened)
```

```sql
BEGIN;  -- or START TRANSACTION
UPDATE employees SET salary = salary - 5000 WHERE emp_id = 1;
UPDATE employees SET salary = salary + 5000 WHERE emp_id = 10;
COMMIT;            -- or ROLLBACK;

-- SAVEPOINT : partial undo
BEGIN;
UPDATE employees SET salary = 1 WHERE emp_id = 2;
SAVEPOINT s1;
UPDATE employees SET salary = 1 WHERE emp_id = 3;
ROLLBACK TO s1;    -- undoes only Rahul's update
COMMIT;
```

| ACID | Meaning | Real-life example |
|---|---|---|
| **A**tomicity | all or nothing | money not deducted without being credited |
| **C**onsistency | DB moves from one valid state to another (constraints hold) | balance never negative if CHECK says so |
| **I**solation | concurrent transactions don't mess with each other | two people booking the last seat |
| **D**urability | once committed, it survives crashes | power cut after "Payment successful" - still saved |

## Isolation levels & concurrency problems

| Problem | What happens |
|---|---|
| **Dirty read** | read another transaction's *uncommitted* change (it may roll back) |
| **Non-repeatable read** | read the same row twice, value changed in between |
| **Phantom read** | run the same query twice, *new rows* appear |

| Level | Dirty | Non-repeatable | Phantom |
|---|---|---|---|
| READ UNCOMMITTED | ✗ possible | ✗ | ✗ |
| READ COMMITTED (Postgres default) | ✓ prevented | ✗ | ✗ |
| REPEATABLE READ (MySQL InnoDB default) | ✓ | ✓ | ✗ (mostly prevented in InnoDB) |
| SERIALIZABLE | ✓ | ✓ | ✓ (slowest) |

Higher isolation = safer but slower (more locking).

## Stored procedures, functions & triggers (quick view)

```sql
-- MySQL stored procedure
DELIMITER //
CREATE PROCEDURE raise_salary(IN p_dept INT, IN p_pct INT)
BEGIN
  UPDATE employees SET salary = salary * (100 + p_pct) / 100 WHERE dept_id = p_dept;
END //
DELIMITER ;
CALL raise_salary(1, 10);
```

```sql
-- Trigger: auto-run on an event (SQLite syntax)
CREATE TABLE salary_log (emp_id INT, old_sal INT, new_sal INT);

CREATE TRIGGER log_salary AFTER UPDATE OF salary ON employees
BEGIN
  INSERT INTO salary_log VALUES (OLD.emp_id, OLD.salary, NEW.salary);
END;

UPDATE employees SET salary = 55000 WHERE emp_id = 10;
SELECT * FROM salary_log;
```

| Procedure | Function | Trigger |
|---|---|---|
| called with `CALL` | used inside a query | fires automatically |
| may return 0+ result sets | returns exactly one value | on INSERT / UPDATE / DELETE |

## Other common interview terms

- **OLTP vs OLAP** : many small transactions (app DB) vs big analytical reads (warehouse).
- **Sharding** : split rows across multiple servers. **Replication** : copy data to replicas for reads/backup.
- **SQL vs NoSQL** : fixed schema + joins + ACID vs flexible schema + horizontal scale (MongoDB, Redis, Cassandra).
- **Deadlock** : T1 waits for T2's lock, T2 waits for T1's. DB kills one.
- **SQL injection** : never build queries with string concat - use parameterized queries.

## Theory Questions

<details><summary><b>Q1. What is an index and what's the trade-off?</b></summary>

A data structure (usually a B-Tree) that makes lookups fast - O(log n) instead of O(n). Cost: extra storage, slower writes.
</details>

<details><summary><b>Q2. Clustered vs non-clustered index?</b></summary>

Clustered decides the physical order of rows (one per table). Non-clustered is a separate structure pointing to rows (many allowed).
</details>

<details><summary><b>Q3. Why might a query not use an index?</b></summary>

Function on the column, leading `%` in LIKE, type conversion, low selectivity, small table, or composite index used without its leftmost column.
</details>

<details><summary><b>Q4. View vs table? Can you update a view?</b></summary>

A view stores a query, not data. Simple views (one table, no GROUP BY/DISTINCT/aggregates) are usually updatable; complex ones are not.
</details>

<details><summary><b>Q5. Explain ACID with an example.</b></summary>

Bank transfer: both updates or none (A), constraints stay valid (C), parallel transfers don't interfere (I), committed data survives a crash (D).
</details>

<details><summary><b>Q6. What is a dirty read? Which isolation level prevents it?</b></summary>

Reading data another transaction hasn't committed yet. READ COMMITTED and above prevent it.
</details>

<details><summary><b>Q7. Trigger use cases?</b></summary>

Audit logs, auto-updating `updated_at`, enforcing complex rules. Downside: hidden logic, harder to debug.
</details>

<details><summary><b>Q8. How would you speed up a slow query?</b></summary>

Run EXPLAIN, add/adjust indexes, select fewer columns, remove functions on indexed columns, rewrite subqueries as joins/CTEs, paginate, and cache or denormalize hot data.
</details>

## Practice Problems

**P1.** Create an index for "employees of a department sorted by salary" and check the plan.

<details><summary>Solution</summary>

```sql
CREATE INDEX idx_dept_sal ON employees(dept_id, salary);
EXPLAIN QUERY PLAN
SELECT name, salary FROM employees WHERE dept_id = 1 ORDER BY salary DESC;
```
</details>

**P2.** Rewrite to be index-friendly: `SELECT * FROM orders WHERE strftime('%Y', order_date) = '2024';`

<details><summary>Solution</summary>

```sql
SELECT * FROM orders
WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01';
```
</details>

**P3.** Create a view `customer_spend` (customer name + total delivered spend) and query the top spender.

<details><summary>Solution</summary>

```sql
CREATE VIEW customer_spend AS
SELECT c.name, SUM(oi.quantity * p.price) AS total
FROM customers c
JOIN orders o       ON o.customer_id = c.customer_id AND o.status = 'delivered'
JOIN order_items oi ON oi.order_id = o.order_id
JOIN products p     ON p.product_id = oi.product_id
GROUP BY c.name;

SELECT * FROM customer_spend ORDER BY total DESC LIMIT 1;
```
</details>

**P4.** Move Rs.10000 of salary from Aman to Meera in one transaction, then verify.

<details><summary>Solution</summary>

```sql
BEGIN;
UPDATE employees SET salary = salary - 10000 WHERE emp_id = 1;
UPDATE employees SET salary = salary + 10000 WHERE emp_id = 10;
COMMIT;
SELECT name, salary FROM employees WHERE emp_id IN (1, 10);
```
</details>

**P5.** Show that ROLLBACK undoes changes.

<details><summary>Solution</summary>

```sql
BEGIN;
DELETE FROM order_items;
SELECT COUNT(*) FROM order_items;   -- 0
ROLLBACK;
SELECT COUNT(*) FROM order_items;   -- 10 again
```
</details>

## LeetCode Problems

These are about writing efficient queries (LeetCode also shows runtime - try two versions and compare):

| # | Problem | Level | Concept |
|---|---|---|---|
| 1693 | [Daily Leads and Partners](https://leetcode.com/problems/daily-leads-and-partners/) | Easy | GROUP BY on indexed-style keys |
| 1890 | [The Latest Login in 2020](https://leetcode.com/problems/the-latest-login-in-2020/) | Easy | date range instead of `YEAR()` |
| 1873 | [Calculate Special Bonus](https://leetcode.com/problems/calculate-special-bonus/) | Easy | CASE, no subquery needed |
| 1393 | [Capital Gain/Loss](https://leetcode.com/problems/capital-gainloss/) | Medium | single-pass conditional SUM |
| 1907 | [Count Salary Categories](https://leetcode.com/problems/count-salary-categories/) | Medium | one scan vs three scans |

---
[← 11 · Normalization & Keys](11-normalization-and-keys.md) · [Index](README.md) · [13 · Interview Questions →](13-interview-questions.md)
