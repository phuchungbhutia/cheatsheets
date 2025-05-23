title: Excele Dashboard Cheatsheet

category: Excel
description: A quick reference guide for creating interactive Excel dashboards, including formulas, charts, pivot tables, and automation.

---

## 🛠️ Components

### **Data Preparation**

| Command                                          | Description                                |
| ------------------------------------------------ | ------------------------------------------ |
| `SORT(range, order)`                           | Sort data in ascending or descending order |
| `FILTER(range, criteria)`                      | Filter data based on conditions            |
| `IF(condition, value_if_true, value_if_false)` | Conditional logic for data processing      |
| `VLOOKUP(value, table, column, FALSE)`         | Lookup values from another table           |
| `INDEX(range, row, column)`                    | Retrieve data from a specific cell         |

### **Pivot Tables & Charts**

| Command                               | Description                                  |
| ------------------------------------- | -------------------------------------------- |
| `Insert > PivotTable`               | Create a pivot table for data analysis       |
| `Insert > Chart`                    | Add bar, line, pie, or scatter charts        |
| `PivotTable > Value Field Settings` | Customize calculations (sum, average, count) |
| `Slicer`                            | Add interactive filters to pivot tables      |
| `Conditional Formatting`            | Highlight key data points dynamically        |

### **Dashboard Automation**

| Command                  | Description                           |
| ------------------------ | ------------------------------------- |
| `Data Validation`      | Create dropdown lists for user input  |
| `Macros (VBA)`         | Automate repetitive tasks             |
| `Power Query`          | Import and transform data efficiently |
| `Power Pivot`          | Perform advanced data modeling        |
| `Dynamic Named Ranges` | Automatically update dashboard data   |

---

## 🔄 Workflows

### **Building an Interactive Dashboard**

1. Prepare raw data using `SORT()` and `FILTER()`.
2. Create pivot tables for dynamic analysis.
3. Add charts and slicers for visualization.

### **Automating Data Processing**

1. Use `Power Query` for data transformation.
2. Apply `Macros (VBA)` for automation.
3. Implement `Conditional Formatting` for insights.

### **Enhancing Dashboard Usability**

1. Use `Data Validation` for dropdown selections.
2. Apply `Dynamic Named Ranges` for auto-updating charts.
3. Optimize calculations using `INDEX()` and `VLOOKUP()`.

---

## 💡 Examples

```excel
# Example: Conditional Formatting for Highlighting High Sales
=IF(A2>10000, "High", "Low")
```

```excel
# Example: VLOOKUP for Fetching Customer Data
=VLOOKUP(A2, Customers!A:D, 2, FALSE)
```

---

## 📚 References

- **[20 Excel Dashboard Templates](https://templatelab.com/excel-dashboards/)**
- **[Editable Dashboard Templates](https://www.template.net/dashboard/excel)**

```
<!-- end list -->
```
