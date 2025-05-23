title: FoxPro Cheatsheet

category: Database Management
description: A quick reference guide for essential FoxPro commands, workflows, and examples for efficient database management.

---

## 🛠️ Commands

### **Basic Navigation & File Management**

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `USE tableName`   | Opens a table for use              |
| `CLOSE DATABASES` | Closes all open databases          |
| `SELECT 0`        | Activates the default work area    |
| `BROWSE`          | Displays table records in a grid   |
| `LIST`            | Lists records in the current table |

### **Data Manipulation**

| Command                      | Description                         |
| ---------------------------- | ----------------------------------- |
| `APPEND BLANK`             | Adds a new empty record             |
| `DELETE FOR condition`     | Marks records for deletion          |
| `RECALL`                   | Restores deleted records            |
| `REPLACE field WITH value` | Updates a field value               |
| `PACK`                     | Permanently removes deleted records |

### **Filtering & Searching**

| Command                     | Description                                       |
| --------------------------- | ------------------------------------------------- |
| `SET FILTER TO condition` | Filters records based on a condition              |
| `LOCATE FOR condition`    | Finds the first matching record                   |
| `SEEK value`              | Searches for a specific value in an indexed field |
| `FIND value`              | Finds a record using an index                     |

### **Sorting & Indexing**

| Command                         | Description                    |
| ------------------------------- | ------------------------------ |
| `SORT TO newTable ON field`   | Sorts records into a new table |
| `INDEX ON field TO indexName` | Creates an index on a field    |
| `SET ORDER TO indexName`      | Sets the active index          |
| `REINDEX`                     | Rebuilds all indexes           |

### **Reports & Labels**

| Command                             | Description               |
| ----------------------------------- | ------------------------- |
| `MODIFY REPORT reportName`        | Opens the report designer |
| `MODIFY LABEL labelName`          | Opens the label designer  |
| `REPORT FORM reportName TO PRINT` | Prints a report           |
| `LABEL FORM labelName TO PRINT`   | Prints a label            |

### **System & Environment Settings**

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `SET DELETED ON`   | Hides deleted records          |
| `SET SAFETY OFF`   | Disables overwrite warnings    |
| `SET DATE BRITISH` | Sets date format to DD/MM/YYYY |
| `SET TALK OFF`     | Disables system messages       |

---

## 🔄 Workflows

### **Opening & Browsing a Table**

1. Open FoxPro and enter:
   ```foxpro
   USE customers
   BROWSE
   ```
2. View and edit records in the table.

### **Filtering & Searching Records**

1. Apply a filter:
   ```foxpro
   SET FILTER TO age > 30
   ```
2. Locate a specific record:
   ```foxpro
   LOCATE FOR name = "John"
   ```

### **Creating & Using Indexes**

1. Create an index:
   ```foxpro
   INDEX ON name TO nameIndex
   ```
2. Set the active index:
   ```foxpro
   SET ORDER TO nameIndex
   ```

---

## 💡 Examples

```foxpro
# Open a table and browse records
USE employees
BROWSE

# Replace a field value
REPLACE salary WITH 5000 FOR job = "Manager"

# Create an index and search
INDEX ON lastName TO lastIndex
SEEK "Smith"
```

---

## 📚 References

- **[Basic FoxPro Commands PDF](https://csu-jaipur.edu.in/uploads/SLM/Shastri/Basic-FoxPro-commands.pdf)**
- **[Useful FoxPro Commands](https://www.alvechurchdata.co.uk/foxcommand.htm)**

```
<!-- end list -->
```
