title: Google Looker Studio Cheatsheet

category: Google
description: A quick reference guide for essential Google Looker Studio commands, workflows, and examples for efficient data visualization and reporting.

---

## 🛠️ Commands

### **Basic Navigation & Shortcuts**

| Command      | Description           |
| ------------ | --------------------- |
| `Ctrl + N` | Create a new report   |
| `Ctrl + S` | Save the report       |
| `Ctrl + P` | Print the report      |
| `Ctrl + Z` | Undo last action      |
| `Ctrl + Y` | Redo last action      |
| `Ctrl + C` | Copy selected element |
| `Ctrl + V` | Paste copied element  |
| `Ctrl + X` | Cut selected element  |
| `Ctrl + A` | Select all elements   |

### **Data Sources & Connections**

| Command                          | Description                 |
| -------------------------------- | --------------------------- |
| `Add Data -> Google Sheets`    | Connect to Google Sheets    |
| `Add Data -> BigQuery`         | Connect to Google BigQuery  |
| `Add Data -> Google Analytics` | Connect to Google Analytics |
| `Add Data -> SQL Database`     | Connect to an SQL database  |
| `Add Data -> CSV Upload`       | Import CSV files            |

### **Functions & Calculated Fields**

| Function                                                  | Description                              |
| --------------------------------------------------------- | ---------------------------------------- |
| `SUM(X)`                                                | Returns the sum of all values of X       |
| `AVG(X)`                                                | Returns the average of all values of X   |
| `COUNT(X)`                                              | Returns the number of values of X        |
| `COUNT_DISTINCT(X)`                                     | Returns the number of unique values of X |
| `MAX(X)`                                                | Returns the maximum value of X           |
| `MIN(X)`                                                | Returns the minimum value of X           |
| `CASE WHEN condition THEN result ELSE other_result END` | Conditional logic                        |

### **Visualization & Formatting**

| Command                          | Description                       |
| -------------------------------- | --------------------------------- |
| `Insert -> Chart`              | Add a chart to the report         |
| `Insert -> Table`              | Add a table to the report         |
| `Insert -> Scorecard`          | Add a KPI metric                  |
| `Insert -> Filter Control`     | Add a filter for user interaction |
| `Insert -> Date Range Control` | Add a date range selector         |

### **Sharing & Publishing**

| Command                     | Description                         |
| --------------------------- | ----------------------------------- |
| `File -> Share`           | Share report with others            |
| `File -> Download as PDF` | Export report as a PDF              |
| `File -> Embed Report`    | Generate an embed link for websites |
| `Schedule Email Delivery` | Automate report sharing via email   |

---

## 🔄 Workflows

### **Creating a Report in Looker Studio**

1. Open Looker Studio and click `Create Report`.
2. Select a data source (`Google Sheets`, `BigQuery`, etc.).
3. Add visualizations (`Charts`, `Tables`, `Scorecards`).
4. Format and customize the report layout.
5. Share or schedule automated delivery.

### **Using Calculated Fields**

1. Open the `Data` panel and click `Add a Field`.
2. Enter a formula, e.g.,
   ```sql
   CASE WHEN Revenue > 5000 THEN "High" ELSE "Low" END
   ```
3. Apply the calculated field to a visualization.

### **Filtering & Interactivity**

1. Insert a `Filter Control`.
2. Select the field to filter (e.g., `Region`).
3. Adjust filter settings for user interaction.

---

## 💡 Examples

```sql
# Calculate total revenue
SUM(Revenue)

# Create a conditional field
CASE WHEN Revenue > 5000 THEN "High" ELSE "Low" END

# Filter data by date range
DATE_DIFF(TODAY(), OrderDate)
```

---

## 📚 References

- **Google Looker Studio Function List**: [Google Help](https://support.google.com/looker-studio/table/6379764?hl=en)
- **Google Workspace Cheat Sheets**: [Google Learning Center](https://support.google.com/a/users/answer/13967034?hl=en)

```
<!-- end list -->
```
