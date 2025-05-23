title: Pivot Table Cheatsheet

category: Excel
description: A quick reference guide for essential Pivot Table commands, workflows, and examples for efficient data analysis in Excel.

---

## 🛠️ Commands

### **Creating & Managing Pivot Tables**

| Command                                      | Description                                                  |
| -------------------------------------------- | ------------------------------------------------------------ |
| `Alt + N + V`                              | Open the PivotTable creation dialog                          |
| `Ctrl + T`                                 | Convert data into a table before creating a PivotTable       |
| `Drag Fields`                              | Move fields into Rows, Columns, Values, and Filters sections |
| `Right-Click -> Refresh`                   | Refresh PivotTable data when source data changes             |
| `PivotTable Analyze -> Change Data Source` | Change the dataset used in the PivotTable                    |

### **Sorting & Filtering**

| Command                                   | Description                             |
| ----------------------------------------- | --------------------------------------- |
| `Click Dropdown -> Sort A-Z`            | Sort values in ascending order          |
| `Click Dropdown -> Sort Z-A`            | Sort values in descending order         |
| `Click Filter -> Select Value`          | Filter PivotTable data                  |
| `PivotTable Analyze -> Insert Slicer`   | Add slicers for quick filtering         |
| `PivotTable Analyze -> Insert Timeline` | Add a timeline for date-based filtering |

### **Summarizing & Formatting Data**

| Command                                                         | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| `PivotTable Analyze -> Field Settings -> Summarize Values By` | Change aggregation (Sum, Count, Average)                        |
| `Right-Click -> Value Field Settings -> Show Values As`       | Show values as percentages or rankings                          |
| `PivotTable Design -> Grand Totals`                           | Enable or disable grand totals                                  |
| `PivotTable Design -> Report Layout`                          | Change the layout of the PivotTable (Compact, Tabular, Outline) |
| `PivotTable Design -> Banded Rows`                            | Apply alternating row colors                                    |

### **Calculated Fields & Pivot Charts**

| Command                                                             | Description                                  |
| ------------------------------------------------------------------- | -------------------------------------------- |
| `PivotTable Analyze -> Fields, Items, & Sets -> Calculated Field` | Create custom calculations inside PivotTable |
| `=IF([Field]>1000, "High", "Low")`                                | Example of a calculated field                |
| `PivotTable Analyze -> PivotChart`                                | Generate a chart based on PivotTable data    |
| `Right-Click -> Format Chart Area`                                | Customize Pivot Chart appearance             |

---

## 🔄 Workflows

### **Creating a Pivot Table**

1. Select the dataset.
2. Press `Alt + N + V` to open the PivotTable dialog.
3. Choose the location for the PivotTable and click "OK".
4. Drag fields into Rows, Columns, Values, and Filters sections.

### **Filtering Data in a Pivot Table**

1. Click the dropdown next to a field name.
2. Select the filter options.
3. Use slicers (`PivotTable Analyze -> Insert Slicer`) for quick visual filtering.

### **Creating a Calculated Field**

1. Go to `PivotTable Analyze -> Fields, Items & Sets -> Calculated Field`.
2. Enter the formula:
   ```excel
   =Profit - Expenses
   ```
3. Click "OK" to add the new calculated field to the PivotTable.

---

## 💡 Examples

```excel
# Create a calculated field to classify revenue
=IF(Revenue>5000, "High", "Low")

# Filter Pivot Table to show only values greater than $1000
Click Filter -> Value Filters -> Greater Than 1000

# Generate a Pivot Chart
PivotTable Analyze -> PivotChart -> Select Chart Type
```

---

## 📚 References

- **Pivot Table Cheat Sheet**: [Excel Graduate](https://excelgraduate.com/pivot-table-cheat-sheet/)
- **Comprehensive Pivot Tables Guide**: [Spreadsheeto](https://spreadsheeto.com/wp-content/uploads/2020/05/Cheat-sheet-Pivot-Tables.pdf)
- **Pivot Table Visual Guide**: [Lumeer](https://www.lumeer.io/pivot-tables-cheatsheet/)

```
<!-- end list -->
```
