# 13 · SQL Interview Questions (Theory + Classic Queries)

> Last-day revision. Theory answers in 1-3 lines, then the query patterns that come up again and again.

## Part A : Theory (40 quick questions)

<details><summary><b>1. SQL vs MySQL?</b></summary>
SQL is the language. MySQL is a database system (RDBMS) that understands SQL - like English vs a book written in English.
</details>

<details><summary><b>2. DDL, DML, DQL, DCL, TCL?</b></summary>
DDL: CREATE/ALTER/DROP/TRUNCATE. DML: INSERT/UPDATE/DELETE. DQL: SELECT. DCL: GRANT/REVOKE. TCL: COMMIT/ROLLBACK/SAVEPOINT.
</details>

<details><summary><b>3. DELETE vs TRUNCATE vs DROP?</b></summary>
DELETE removes chosen rows (WHERE, rollback-able, fires triggers). TRUNCATE removes all rows fast, resets auto-increment. DROP removes the whole table structure.
</details>

<details><summary><b>4. WHERE vs HAVING?</b></summary>
WHERE filters rows before grouping; HAVING filters groups after GROUP BY and can use aggregates.
</details>

<details><summary><b>5. Logical order of execution of a SELECT?</b></summary>
FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT (+ window functions) → DISTINCT → ORDER BY → LIMIT.
</details>

<details><summary><b>6. Can you use a column alias in WHERE?</b></summary>
No - WHERE runs before SELECT. You can use it in ORDER BY (and in MySQL, HAVING).
</details>

<details><summary><b>7. COUNT(*) vs COUNT(col) vs COUNT(DISTINCT col)?</b></summary>
COUNT(*) counts all rows; COUNT(col) skips NULLs; COUNT(DISTINCT col) counts unique non-NULL values.
</details>

<details><summary><b>8. What is NULL? Why does `= NULL` not work?</b></summary>
NULL means unknown. Any comparison with NULL gives UNKNOWN, not TRUE. Use IS NULL / IS NOT NULL.
</details>

<details><summary><b>9. NOT IN with NULL trap?</b></summary>
If the subquery returns a NULL, `x NOT IN (...)` is never TRUE → empty result. Use NOT EXISTS or filter NULLs.
</details>

<details><summary><b>10. Types of joins?</b></summary>
INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF.
</details>

<details><summary><b>11. LEFT JOIN: condition in ON vs WHERE?</b></summary>
In ON it only filters the right table (left rows are kept). In WHERE it filters the final result, which can turn the LEFT JOIN into an INNER JOIN.
</details>

<details><summary><b>12. How to get a FULL OUTER JOIN in MySQL?</b></summary>
LEFT JOIN UNION RIGHT JOIN.
</details>

<details><summary><b>13. UNION vs UNION ALL?</b></summary>
UNION removes duplicates (slower); UNION ALL keeps all rows.
</details>

<details><summary><b>14. UNION vs JOIN?</b></summary>
UNION stacks rows vertically (same columns). JOIN combines columns horizontally (matching rows).
</details>

<details><summary><b>15. Subquery vs JOIN - which is faster?</b></summary>
Often the same after optimization. Correlated subqueries can be slow (run per row); JOINs/CTEs are usually clearer and faster.
</details>

<details><summary><b>16. Correlated subquery?</b></summary>
An inner query that uses a column from the outer query, so it runs once per outer row.
</details>

<details><summary><b>17. IN vs EXISTS?</b></summary>
IN compares against a list of values; EXISTS just checks if any row exists and stops at the first match - better for large correlated checks.
</details>

<details><summary><b>18. What is a CTE? Recursive CTE?</b></summary>
A named temporary result (`WITH x AS (...)`) for readability. A recursive CTE refers to itself - used for hierarchies (manager chains) and number series.
</details>

<details><summary><b>19. CTE vs temp table vs view?</b></summary>
CTE: lives for one query. Temp table: lives for the session, stores data. View: permanent saved query, no data.
</details>

<details><summary><b>20. ROW_NUMBER vs RANK vs DENSE_RANK?</b></summary>
Ties → ROW_NUMBER 1,2,3; RANK 1,2,2,4; DENSE_RANK 1,2,2,3.
</details>

<details><summary><b>21. Window function vs GROUP BY?</b></summary>
Window keeps every row; GROUP BY collapses rows.
</details>

<details><summary><b>22. CHAR vs VARCHAR?</b></summary>
CHAR(n) is fixed length (padded); VARCHAR(n) is variable length. CHAR for fixed codes like 'IN', 'M'.
</details>

<details><summary><b>23. Constraints in SQL?</b></summary>
NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT.
</details>

<details><summary><b>24. Primary key vs unique key?</b></summary>
PK: one per table, no NULLs. UNIQUE: many allowed, NULL allowed.
</details>

<details><summary><b>25. ON DELETE CASCADE?</b></summary>
Deleting a parent row automatically deletes its child rows. SET NULL sets the FK to NULL instead.
</details>

<details><summary><b>26. Normalization? 1NF/2NF/3NF?</b></summary>
Remove redundancy. 1NF atomic; 2NF no partial dependency; 3NF no transitive dependency.
</details>

<details><summary><b>27. Denormalization?</b></summary>
Adding controlled redundancy for faster reads (reports, dashboards).
</details>

<details><summary><b>28. What is an index?</b></summary>
A B-Tree-like structure for fast lookups; speeds reads, slows writes.
</details>

<details><summary><b>29. Clustered vs non-clustered index?</b></summary>
Clustered = physical row order (one). Non-clustered = separate pointer structure (many).
</details>

<details><summary><b>30. What is a view?</b></summary>
A saved SELECT used like a virtual table.
</details>

<details><summary><b>31. ACID?</b></summary>
Atomicity, Consistency, Isolation, Durability.
</details>

<details><summary><b>32. Isolation levels?</b></summary>
Read Uncommitted, Read Committed, Repeatable Read, Serializable - each prevents more anomalies (dirty, non-repeatable, phantom reads).
</details>

<details><summary><b>33. What is a deadlock?</b></summary>
Two transactions each waiting for the other's lock; the DB aborts one.
</details>

<details><summary><b>34. Stored procedure vs function?</b></summary>
Procedure: called with CALL, can do DML, returns 0+ results. Function: returns one value, used inside queries.
</details>

<details><summary><b>35. What is a trigger?</b></summary>
Code that runs automatically on INSERT/UPDATE/DELETE - e.g. audit logs.
</details>

<details><summary><b>36. SQL injection and prevention?</b></summary>
Attacker input becomes part of the query (`' OR 1=1 --`). Prevent with parameterized queries / prepared statements.
</details>

<details><summary><b>37. OLTP vs OLAP?</b></summary>
OLTP: many short read/write transactions (apps). OLAP: heavy analytical reads (warehouses).
</details>

<details><summary><b>38. SQL vs NoSQL?</b></summary>
SQL: tables, fixed schema, joins, strong ACID. NoSQL: documents/key-value/graph, flexible schema, easy horizontal scaling.
</details>

<details><summary><b>39. COALESCE vs IFNULL?</b></summary>
IFNULL(a, b) takes 2 args (MySQL). COALESCE(a, b, c, ...) returns the first non-NULL and is standard SQL.
</details>

<details><summary><b>40. DISTINCT vs GROUP BY?</b></summary>
Both give unique rows; GROUP BY also lets you aggregate per group.
</details>

## Part B : Classic query patterns (with our sample DB)

### 1. Second highest salary (LC 176)

```
salaries: 150000, 120000, 120000, 110000 ...
                  └── 2nd highest DISTINCT = 120000
```

<details><summary>Solution</summary>

```sql
-- Way 1: subquery
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Way 2: LIMIT OFFSET (wrap so it returns NULL if missing)
SELECT (SELECT DISTINCT salary FROM employees
        ORDER BY salary DESC LIMIT 1 OFFSET 1) AS second_highest;
```
</details>

### 2. Nth highest salary (LC 177) - N = 3

<details><summary>Solution</summary>

```sql
WITH r AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dr
  FROM employees
)
SELECT DISTINCT salary FROM r WHERE dr = 3;   -- 110000
```
</details>

### 3. Find duplicates (LC 182)

<details><summary>Solution</summary>

```sql
SELECT salary, COUNT(*) AS cnt
FROM employees
GROUP BY salary
HAVING COUNT(*) > 1;
```
</details>

### 4. Delete duplicates, keep the smallest id (LC 196)

<details><summary>Solution</summary>

```sql
-- keep one employee per salary (demo)
DELETE FROM employees
WHERE emp_id NOT IN (
  SELECT MIN(emp_id) FROM employees GROUP BY salary
);
SELECT emp_id, name, salary FROM employees;
```
</details>

### 5. Employees earning more than their manager (LC 181)

<details><summary>Solution</summary>

```sql
SELECT e.name
FROM employees e
JOIN employees m ON e.manager_id = m.emp_id
WHERE e.salary > m.salary;      -- none in our data, try UPDATE to test
```
</details>

### 6. Top N per group (LC 185)

<details><summary>Solution</summary>

```sql
WITH r AS (
  SELECT d.dept_name, e.name, e.salary,
         DENSE_RANK() OVER (PARTITION BY e.dept_id ORDER BY e.salary DESC) AS dr
  FROM employees e JOIN departments d ON e.dept_id = d.dept_id
)
SELECT dept_name, name, salary FROM r WHERE dr <= 2;
```
</details>

### 7. Rows with no match - customers who never ordered (LC 183)

<details><summary>Solution</summary>

```sql
SELECT c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;      -- Dev
```
</details>

### 8. Department with the highest average salary

<details><summary>Solution</summary>

```sql
SELECT d.dept_name, AVG(e.salary) AS avg_sal
FROM employees e JOIN departments d ON e.dept_id = d.dept_id
GROUP BY d.dept_name
ORDER BY avg_sal DESC
LIMIT 1;
```
</details>

### 9. Running total (LC 1204)

<details><summary>Solution</summary>

```sql
SELECT name, salary,
       SUM(salary) OVER (ORDER BY emp_id) AS running_total
FROM employees;
```
</details>

### 10. Consecutive values (LC 180) - same salary on 2 consecutive emp_ids

<details><summary>Solution</summary>

```sql
WITH t AS (
  SELECT emp_id, salary,
         LAG(salary) OVER (ORDER BY emp_id) AS prev_sal
  FROM employees
)
SELECT DISTINCT salary FROM t WHERE salary = prev_sal;   -- 120000, 60000
```
</details>

### 11. Pivot rows into columns (LC 1179 style)

```
dept | status count                 dept | delivered | pending | cancelled
```

<details><summary>Solution</summary>

```sql
SELECT c.city,
       SUM(CASE WHEN o.status = 'delivered' THEN 1 ELSE 0 END) AS delivered,
       SUM(CASE WHEN o.status = 'pending'   THEN 1 ELSE 0 END) AS pending,
       SUM(CASE WHEN o.status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled
FROM orders o JOIN customers c ON c.customer_id = o.customer_id
GROUP BY c.city;
```
</details>

### 12. Percentage of total

<details><summary>Solution</summary>

```sql
SELECT status,
       COUNT(*) AS cnt,
       ROUND(100.0 * COUNT(*) / (SELECT COUNT(*) FROM orders), 2) AS pct
FROM orders
GROUP BY status;
```
</details>

### 13. Employees hired in the last N years / per year count

<details><summary>Solution</summary>

```sql
SELECT strftime('%Y', hire_date) AS yr, COUNT(*) AS hires   -- MySQL: YEAR(hire_date)
FROM employees
GROUP BY yr
ORDER BY yr;
```
</details>

### 14. Manager hierarchy with a recursive CTE

<details><summary>Solution</summary>

```sql
WITH RECURSIVE chain AS (
  SELECT emp_id, name, manager_id, 0 AS level
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.emp_id, e.name, e.manager_id, c.level + 1
  FROM employees e JOIN chain c ON e.manager_id = c.emp_id
)
SELECT level, name FROM chain ORDER BY level, name;
```
</details>

### 15. Products never sold

<details><summary>Solution</summary>

```sql
SELECT name FROM products p
WHERE NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id);
```
</details>

### 16. Gaps & islands (LC 601 idea) - streaks of consecutive emp_ids with salary >= 90000

<details><summary>Solution</summary>

```sql
WITH f AS (
  SELECT emp_id, salary,
         emp_id - ROW_NUMBER() OVER (ORDER BY emp_id) AS grp
  FROM employees WHERE salary >= 90000
)
SELECT MIN(emp_id) AS start_id, MAX(emp_id) AS end_id, COUNT(*) AS len
FROM f GROUP BY grp;
```
</details>

## Part C : Final checklist before an interview

- [ ] I can write all 4 joins and explain LEFT JOIN + `IS NULL`.
- [ ] I know WHERE vs HAVING and the execution order.
- [ ] I can solve 2nd/Nth highest salary 3 ways.
- [ ] I can do top-N-per-group with `DENSE_RANK`.
- [ ] I can use `LAG/LEAD` and running `SUM() OVER`.
- [ ] I can pivot with `SUM(CASE ...)`.
- [ ] I can explain ACID, indexes and normalization with examples.
- [ ] I finished the LeetCode SQL 50 list in the [README](README.md).

---
[← 12 · Indexes, Views & Transactions](12-indexes-views-transactions.md) · [Index](README.md)
