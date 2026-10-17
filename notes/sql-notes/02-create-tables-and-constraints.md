# 02 · Create Tables, Data Types & Constraints (DDL)

> Design the **shape** of your data and the **rules** it must follow.

## CREATE TABLE

```sql
CREATE TABLE students (
    id         INT PRIMARY KEY,                 -- unique + not null
    name       VARCHAR(50) NOT NULL,            -- must have a value
    email      VARCHAR(100) UNIQUE,             -- no duplicates
    age        INT CHECK (age >= 17),           -- custom rule
    city       VARCHAR(50) DEFAULT 'Agra',      -- used when no value given
    dept_id    INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
```

## Common data types

| Type | Stores | Example |
|---|---|---|
| `INT` / `BIGINT` | whole numbers | `25`, `9000000000` |
| `DECIMAL(10,2)` | exact decimals - **use for money** | `1999.99` |
| `FLOAT` / `DOUBLE` | approximate decimals | `3.14159` |
| `CHAR(n)` | fixed length text (padded) | `CHAR(2)` → `'UP'` |
| `VARCHAR(n)` | variable length text | `'Gagan'` |
| `TEXT` | long text | blog content |
| `DATE` / `DATETIME` / `TIMESTAMP` | dates & times | `'2026-10-13'` |
| `BOOLEAN` | true / false | `TRUE` |

> **CHAR vs VARCHAR :** `CHAR(10)` always uses 10 characters of space. `VARCHAR(10)` uses only what it needs (+1-2 bytes). Use CHAR only for fixed-size codes.

## Constraints at a glance

```
NOT NULL     → value required
UNIQUE       → no duplicates
PRIMARY KEY  → NOT NULL + UNIQUE, one per table
FOREIGN KEY  → must match a row in the parent table
CHECK        → custom condition must be true
DEFAULT      → value used when none is given
```

### Foreign key actions

```sql
FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
    ON DELETE SET NULL      -- dept deleted → employee.dept_id becomes NULL
    ON UPDATE CASCADE       -- dept_id changed → employees updated too
-- other options : CASCADE (delete children too), RESTRICT / NO ACTION (block the delete)
```

## ALTER, DROP, TRUNCATE

```sql
ALTER TABLE students ADD phone VARCHAR(15);           -- add a column
ALTER TABLE students DROP COLUMN phone;                -- remove a column
ALTER TABLE students RENAME COLUMN city TO hometown;   -- rename
ALTER TABLE students MODIFY age SMALLINT;              -- change type (MySQL)

TRUNCATE TABLE students;    -- delete ALL rows, keep the table
DROP TABLE students;        -- delete the table itself
```

| | `DELETE` | `TRUNCATE` | `DROP` |
|---|---|---|---|
| Type | DML | DDL | DDL |
| Removes | chosen rows (`WHERE`) | all rows | whole table + structure |
| Can roll back | yes | usually no (MySQL) | no |
| Speed | slow (row by row) | fast | fast |
| Triggers fire | yes | no | no |

## Theory Questions

<details><summary><b>Q1. DELETE vs TRUNCATE vs DROP?</b></summary>

DELETE removes selected rows and can be rolled back. TRUNCATE quickly removes all rows but keeps the table. DROP removes the table completely. (See the table above.)
</details>

<details><summary><b>Q2. Why use DECIMAL for money instead of FLOAT?</b></summary>

FLOAT stores approximate binary values (0.1 + 0.2 ≠ 0.3 exactly). DECIMAL stores exact digits, so totals never drift.
</details>

<details><summary><b>Q3. What does ON DELETE CASCADE do?</b></summary>

When a parent row is deleted, all child rows that reference it are deleted automatically.
</details>

<details><summary><b>Q4. Can a table have two primary keys?</b></summary>

No - only one primary key, but it can be **composite** (made of several columns).
</details>

## Practice Problems

**P1.** Create a table `reviews` with: `review_id` (primary key), `product_id` (FK to products), `rating` (1 to 5 only), `comment` (text), `created_at` (date, default today).

<details><summary>Solution</summary>

```sql
CREATE TABLE reviews (
    review_id  INT PRIMARY KEY,
    product_id INT NOT NULL,
    rating     INT CHECK (rating BETWEEN 1 AND 5),
    comment    TEXT,
    created_at DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
```
</details>

**P2.** Add a column `phone` to `customers`.

<details><summary>Solution</summary>

```sql
ALTER TABLE customers ADD phone VARCHAR(15);
```
</details>

**P3.** What happens if you run `INSERT INTO employees VALUES (11, 'Test', 9, NULL, 50000, '2025-01-01', NULL);` ?

<details><summary>Answer</summary>

It fails (when foreign keys are enforced) - department 9 doesn't exist, so the foreign key constraint blocks it.
</details>

---
[← 01 · Databases & SQL Basics](01-databases-and-sql-basics.md) · [Index](README.md) · [03 · Insert, Update & Delete →](03-insert-update-delete.md)
