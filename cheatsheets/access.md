title: Microsoft Access Cheatsheet

category: Database Management
description: A quick reference guide for essential Microsoft Access commands, workflows, and examples for efficient database handling.

---

## 🛠️ Commands

### **Database & Table Management**

| Command                                                        | Description                  |
| -------------------------------------------------------------- | ---------------------------- |
| `CREATE DATABASE dbName;`                                    | Creates a new database       |
| `CREATE TABLE tableName (Field1 DataType, Field2 DataType);` | Creates a new table          |
| `ALTER TABLE tableName ADD COLUMN newField DataType;`        | Adds a new column to a table |
| `DROP TABLE tableName;`                                      | Deletes a table              |

### **Data Manipulation**

| Command                                                                 | Description       |
| ----------------------------------------------------------------------- | ----------------- |
| `INSERT INTO tableName (Field1, Field2) VALUES ('Value1', 'Value2');` | Adds a new record |
| `UPDATE tableName SET Field1 = 'NewValue' WHERE Condition;`           | Updates records   |
| `DELETE FROM tableName WHERE Condition;`                              | Deletes records   |
| `SELECT * FROM tableName WHERE Condition;`                            | Retrieves records |

### **Queries & Filtering**

| Command                                             | Description               |
| --------------------------------------------------- | ------------------------- |
| `SELECT Field1, Field2 FROM tableName;`           | Retrieves specific fields |
| `SELECT * FROM tableName WHERE Field1 = 'Value';` | Filters records           |
| `SELECT COUNT(*) FROM tableName;`                 | Counts records            |
| `SELECT DISTINCT Field1 FROM tableName;`          | Retrieves unique values   |

### **Forms & Reports**

| Command                                           | Description                    |
| ------------------------------------------------- | ------------------------------ |
| `MODIFY FORM formName;`                         | Opens the form designer        |
| `MODIFY REPORT reportName;`                     | Opens the report designer      |
| `DoCmd.OpenReport "reportName", acViewPreview;` | Opens a report in preview mode |

### **Database Relationships**

| Command                                                                    | Description             |
| -------------------------------------------------------------------------- | ----------------------- |
| `ALTER TABLE Table1 ADD FOREIGN KEY (Field1) REFERENCES Table2(Field2);` | Creates a relationship  |
| `INNER JOIN Table1 ON Table1.Field = Table2.Field;`                      | Joins tables in a query |

---

## 🔄 Workflows

### **Creating & Managing a Database**

1. Open Microsoft Access and create a new database.
2. Define tables using `CREATE TABLE`.
3. Insert records using `INSERT INTO`.

### **Filtering & Querying Data**

1. Use `SELECT` statements to retrieve data.
2. Apply `WHERE` conditions for filtering.
3. Use `JOIN` to combine tables.

### **Generating Reports**

1. Open the report designer (`MODIFY REPORT`).
2. Drag and drop fields onto the report.
3. Save and preview the report (`DoCmd.OpenReport`).

---

## 💡 Examples

```sql
# Create a table
CREATE TABLE Employees (ID INT, Name TEXT, Salary DECIMAL);

# Insert a record
INSERT INTO Employees (ID, Name, Salary) VALUES (1, 'Alice', 50000);

# Retrieve employees earning above 40000
SELECT * FROM Employees WHERE Salary > 40000;
```

---

## 📚 References

- **[Microsoft Access Database Cheatsheet](https://studygyaan.com/cheatsheet/microsoft-access-db)**
- **[Access 2021 Basic Quick Reference](https://www.customguide.com/cheat-sheet/access-2021-basic-quick-reference.pdf)**
- **[Microsoft Office Access Cheat Sheet](https://softwarekeep.com/blogs/tips-and-tricks/microsoft-office-access-cheat)**

```
<!-- end list -->
```
