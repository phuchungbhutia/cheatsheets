title: Oracle Database Cheatsheet

category: Database Management

description: A quick reference guide for essential Oracle SQL commands, workflows, and examples for managing databases efficiently.

---

## 🛠️ Commands

### **Basic SQL Queries**

| Command                                                      | Description                            |
| ------------------------------------------------------------ | -------------------------------------- |
| `SELECT * FROM table_name;`                                | Retrieve all records from a table      |
| `SELECT column1, column2 FROM table_name;`                 | Retrieve specific columns from a table |
| `SELECT DISTINCT column FROM table_name;`                  | Retrieve unique values from a column   |
| `SELECT * FROM table_name WHERE condition;`                | Filter records based on a condition    |
| `SELECT * FROM table_name ORDER BY column ASC                | DESC;`                                 |
| `SELECT column, COUNT(*) FROM table_name GROUP BY column;` | Group records and count occurrences    |

### **Data Manipulation (DML)**

| Command                                                  | Description                                     |
| -------------------------------------------------------- | ----------------------------------------------- |
| `INSERT INTO table_name VALUES (value1, value2, ...);` | Insert a new record into a table                |
| `UPDATE table_name SET column=value WHERE condition;`  | Update records in a table                       |
| `DELETE FROM table_name WHERE condition;`              | Delete records from a table                     |
| `TRUNCATE TABLE table_name;`                           | Remove all records from a table without logging |

### **Data Definition (DDL)**

| Command                                                                | Description                  |
| ---------------------------------------------------------------------- | ---------------------------- |
| `CREATE TABLE table_name (column1 datatype, column2 datatype, ...);` | Create a new table           |
| `ALTER TABLE table_name ADD column datatype;`                        | Add a new column to a table  |
| `ALTER TABLE table_name DROP COLUMN column;`                         | Remove a column from a table |
| `DROP TABLE table_name;`                                             | Delete a table permanently   |

### **Indexes & Constraints**

| Command                                                         | Description                 |
| --------------------------------------------------------------- | --------------------------- |
| `CREATE INDEX index_name ON table_name(column);`              | Create an index on a column |
| `CREATE UNIQUE INDEX index_name ON table_name(column);`       | Create a unique index       |
| `CREATE PRIMARY KEY (column);`                                | Define a primary key        |
| `CREATE FOREIGN KEY (column) REFERENCES other_table(column);` | Define a foreign key        |

### **Sequences & Transactions**

| Command                                                   | Description                                    |
| --------------------------------------------------------- | ---------------------------------------------- |
| `CREATE SEQUENCE seq_name START WITH 1 INCREMENT BY 1;` | Create a sequence for auto-incrementing values |
| `SELECT seq_name.NEXTVAL FROM dual;`                    | Retrieve the next value from a sequence        |
| `COMMIT;`                                               | Save changes permanently                       |
| `ROLLBACK;`                                             | Undo changes since the last commit             |

---

## 🔄 Workflows

### **Creating & Managing Tables**

1. Create a new table:
   ```sql
   CREATE TABLE employees (
       id NUMBER PRIMARY KEY,
       name VARCHAR2(50),
       salary NUMBER
   );
   ```
2. Insert a record:
   ```sql
   INSERT INTO employees VALUES (1, 'John Doe', 50000);
   ```
3. Update a record:
   ```sql
   UPDATE employees SET salary = 55000 WHERE id = 1;
   ```
4. Delete a record:
   ```sql
   DELETE FROM employees WHERE id = 1;
   ```

### **Using Transactions**

1. Start a transaction:
   ```sql
   BEGIN;
   ```
2. Make changes:
   ```sql
   UPDATE employees SET salary = 60000 WHERE id = 2;
   ```
3. Commit changes:
   ```sql
   COMMIT;
   ```
4. Rollback changes if needed:
   ```sql
   ROLLBACK;
   ```

---

## 💡 Examples

```sql
-- Retrieve employees earning more than $50,000
SELECT * FROM employees WHERE salary > 50000;

-- Count employees in each department
SELECT department, COUNT(*) FROM employees GROUP BY department;

-- Create a sequence for employee IDs
CREATE SEQUENCE emp_seq START WITH 1 INCREMENT BY 1;

-- Use the sequence to insert a new employee
INSERT INTO employees VALUES (emp_seq.NEXTVAL, 'Jane Doe', 60000);
```

---

## 📚 References

- **Oracle SQL Cheatsheet**: [Oracle Database SQL Cheatsheet](https://en.wikibooks.org/wiki/Oracle_Database/SQL_Cheatsheet)
- **Oracle SQL Quick Reference**: [Oracle SQL Quick Reference](https://docs.oracle.com/en/database/oracle/oracle-database/18/sqlqr/sql-language-quick-reference.pdf)
- **Oracle Database Guide**: [Oracle Cheat Sheet](https://dev.to/nehasoni__/oracle-cheat-sheet-5fg7)

```
<!-- end list -->
```
