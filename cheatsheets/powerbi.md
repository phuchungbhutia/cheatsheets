title: Power BI Cheatsheet

category: Power BI
description: A quick reference guide for essential Power BI commands, workflows, and examples for efficient data visualization and analysis.

---

## 🛠️ Commands

### **Getting Started**

| Command                        | Description                               |
| ------------------------------ | ----------------------------------------- |
| `Get Data -> Excel Workbook` | Import data from an Excel file            |
| `Get Data -> SQL Server`     | Connect to a SQL database                 |
| `Get Data -> Web`            | Import data from a web source             |
| `Transform Data`             | Open Power Query for data cleaning        |
| `Close & Apply`              | Apply changes and load data into Power BI |

### **Data Modeling & Relationships**

| Command                                | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `Model View -> Manage Relationships` | Define relationships between tables               |
| `Model View -> Mark as Date Table`   | Set a table as a date table for time intelligence |
| `DAX -> Create Calculated Column`    | Add a new calculated column                       |
| `DAX -> Create Measure`              | Define a measure for calculations                 |

### **DAX Functions**

| Command                                      | Description                              |
| -------------------------------------------- | ---------------------------------------- |
| `SUM(Table[Column])`                       | Calculate the sum of a column            |
| `AVERAGE(Table[Column])`                   | Calculate the average of a column        |
| `IF(condition, true_result, false_result)` | Conditional logic                        |
| `CALCULATE(expression, filter)`            | Apply filters to calculations            |
| `RELATED(Table[Column])`                   | Retrieve related data from another table |

### **Visualizations & Formatting**

| Command                              | Description                     |
| ------------------------------------ | ------------------------------- |
| `Insert -> Bar Chart`              | Add a bar chart visualization   |
| `Insert -> Line Chart`             | Add a line chart visualization  |
| `Insert -> Slicer`                 | Add a slicer for filtering data |
| `Format -> Data Labels`            | Show values on charts           |
| `Format -> Conditional Formatting` | Apply color rules to data       |

### **Publishing & Sharing**

| Command                                 | Description                       |
| --------------------------------------- | --------------------------------- |
| `File -> Publish to Power BI Service` | Upload reports to Power BI online |
| `File -> Export to PDF`               | Save reports as a PDF             |
| `Share -> Workspace`                  | Share reports with a team         |
| `Schedule Refresh`                    | Automate data updates             |

---

## 🔄 Workflows

### **Importing & Cleaning Data**

1. Go to `Get Data -> Excel Workbook`.
2. Select the file and click "Load".
3. Open Power Query (`Transform Data`).
4. Remove unnecessary columns using `Remove Columns`.
5. Change data types using `Change Data Type`.

### **Creating a Measure in DAX**

1. Go to `Model View -> New Measure`.
2. Enter the formula:
   ```DAX
   TotalSales = SUM(Sales[Revenue])
   ```
3. Click "OK" to apply the measure.

### **Building a Dashboard**

1. Insert a bar chart (`Insert -> Bar Chart`).
2. Drag fields into the Axis and Values sections.
3. Add slicers (`Insert -> Slicer`) for filtering.
4. Format the visuals using `Format -> Data Labels`.

---

## 💡 Examples

```DAX
# Calculate total revenue
TotalRevenue = SUM(Sales[Revenue])

# Create a conditional measure
HighSales = IF(Sales[Revenue] > 5000, "High", "Low")

# Filter data using CALCULATE
FilteredSales = CALCULATE(SUM(Sales[Revenue]), Sales[Region] = "North")
```

---

## 📚 References

- **Power BI Cheat Sheet**: [DataCamp](https://www.datacamp.com/cheat-sheet/power-bi-cheat-sheet)
- **Power BI Quick Reference**: [Dataquest](https://www.dataquest.io/cheat-sheet/power-bi-cheat-sheet/)
- **Power BI Guide & PDF Download**: [Zero To Mastery](https://zerotomastery.io/cheatsheets/power-bi-cheat-sheet/)

```
<!-- end list -->
```
