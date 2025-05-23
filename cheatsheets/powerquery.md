title: Power Query Cheatsheet

category: Excel
description: A quick reference guide for essential Power Query commands, workflows, and examples for efficient data transformation in Excel and Power BI.

---

## 🛠️ Commands

### **Getting & Transforming Data**

| Command                             | Description                      |
| ----------------------------------- | -------------------------------- |
| `Get Data -> From Excel Workbook` | Import data from an Excel file   |
| `Get Data -> From Text/CSV`       | Import data from a CSV file      |
| `Get Data -> From Web`            | Import data from a web source    |
| `Get Data -> From Database`       | Connect to a database            |
| `Home -> Refresh`                 | Refresh the query to update data |
| `Home -> Close & Load`            | Load transformed data into Excel |

### **Data Cleaning & Transformation**

| Command                                           | Description                                    |
| ------------------------------------------------- | ---------------------------------------------- |
| `Transform -> Remove Columns`                   | Remove unnecessary columns                     |
| `Transform -> Remove Rows -> Remove Duplicates` | Remove duplicate values                        |
| `Transform -> Replace Values`                   | Replace specific values in a column            |
| `Transform -> Split Column`                     | Split a column by delimiter                    |
| `Transform -> Merge Columns`                    | Merge multiple columns into one                |
| `Transform -> Change Data Type`                 | Convert column data types (Text, Number, Date) |

### **Filtering & Sorting**

| Command                                      | Description                                |
| -------------------------------------------- | ------------------------------------------ |
| `Home -> Keep Rows -> Keep Top Rows`       | Keep only the top N rows                   |
| `Home -> Remove Rows -> Remove Blank Rows` | Remove empty rows                          |
| `Transform -> Sort Ascending/Descending`   | Sort data in ascending or descending order |
| `Transform -> Filter Rows`                 | Apply filters to data                      |

### **Grouping & Aggregation**

| Command                          | Description                                   |
| -------------------------------- | --------------------------------------------- |
| `Transform -> Group By`        | Group data by a specific column               |
| `Transform -> Aggregate`       | Perform calculations like Sum, Average, Count |
| `Transform -> Pivot Column`    | Convert rows into columns                     |
| `Transform -> Unpivot Columns` | Convert columns into rows                     |

### **Advanced Query Editing**

| Command                              | Description                         |
| ------------------------------------ | ----------------------------------- |
| `View -> Advanced Editor`          | Open the M code editor              |
| `Add Column -> Custom Column`      | Create a new column using formulas  |
| `Add Column -> Index Column`       | Add an index column                 |
| `Add Column -> Conditional Column` | Create a column based on conditions |

---

## 🔄 Workflows

### **Importing & Cleaning Data**

1. Go to `Get Data -> From Excel Workbook`.
2. Select the file and click "Load".
3. Remove unnecessary columns using `Transform -> Remove Columns`.
4. Change data types using `Transform -> Change Data Type`.

### **Filtering & Sorting Data**

1. Click `Transform -> Filter Rows`.
2. Select the condition (e.g., "Greater than 1000").
3. Sort data using `Transform -> Sort Ascending`.

### **Creating a Custom Column**

1. Go to `Add Column -> Custom Column`.
2. Enter the formula:
   ```powerquery
   if [Sales] > 5000 then "High" else "Low"
   ```
3. Click "OK" to apply the transformation.

---

## 💡 Examples

```powerquery
# Remove duplicate rows
Table.Distinct(Source)

# Convert a column to uppercase
Text.Upper([ColumnName])

# Add an index column starting from 1
Table.AddIndexColumn(Source, "Index", 1, 1, Int64.Type)
```

---

## 📚 References

- **Power Query Cheat Sheet (PDF)**: [My Online Training Hub](https://www.myonlinetraininghub.com/cdn/files/power_query_cheat_sheet.pdf)
- **Power Query M Language Guide**: [PBI Hub](https://d.pbihub.cn/document/PQ%20Cheatsheet%20EN.pdf)
- **Power BI Cheat Sheet (Includes Power Query)**: [DataCamp](https://www.datacamp.com/cheat-sheet/power-bi-cheat-sheet)

```
<!-- end list -->
```
