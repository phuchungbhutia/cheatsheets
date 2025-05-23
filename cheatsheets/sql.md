title: SQL Cheatsheet

category: Database Management

description: A quick reference guide for essential SQL commands, workflows, and examples for managing databases efficiently.

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

### **Transactions & Views**

| Command                                                               | Description                           |
| --------------------------------------------------------------------- | ------------------------------------- |
| `BEGIN TRANSACTION;`                                                | Start a transaction                   |
| `COMMIT;`                                                           | Save changes permanently              |
| `ROLLBACK;`                                                         | Undo changes since the last commit    |
| `CREATE VIEW view_name AS SELECT column1, column2 FROM table_name;` | Create a view for simplified querying |

---

## 🔄 Workflows

### **Creating & Managing Tables**

1. Create a new table:
   ```sql
   CREATE TABLE employees (
       id INT PRIMARY KEY,
       name VARCHAR(50),
       salary DECIMAL(10,2)
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
   BEGIN TRANSACTION;
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

-- Create a view for high-salary employees
CREATE VIEW high_salary AS SELECT * FROM employees WHERE salary > 60000;
```

---

## 📚 References

- **SQL Cheat Sheet (Basic to Advanced)**: [GeeksforGeeks](https://www.geeksforgeeks.org/sql-cheat-sheet/)
- **SQL Basics Cheat Sheet**: [LearnSQL.com](https://learnsql.com/blog/sql-basics-cheat-sheet/)
- **Comprehensive SQL Cheat Sheet (PDF)**: [DbVis](https://www.dbvis.com/wp-content/uploads/2024/04/SQL-Cheat-Sheet.pdf)

```
<!-- end list -->
```
