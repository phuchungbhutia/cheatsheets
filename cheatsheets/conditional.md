title: Conditional Formatting Cheatsheet

category: Excel
description: A quick reference guide for using conditional formatting in Excel to highlight data, apply rules, and automate visual insights.

---

## 🛠️ Commands

### **Basic Conditional Formatting Operations**

| Command                                  | Description                                |
| ---------------------------------------- | ------------------------------------------ |
| `Home > Conditional Formatting`        | Open conditional formatting menu           |
| `Highlight Cells Rules > Greater Than` | Format cells greater than a specific value |
| `Data Bars`                            | Add gradient bars based on cell values     |
| `Color Scales`                         | Apply color gradients to highlight trends  |
| `Icon Sets`                            | Use icons to represent data values         |

### **Custom Rules & Formulas**

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `=A1>100`             | Highlight cells where value is greater than 100 |
| `=MOD(ROW(),2)=0`     | Apply formatting to alternate rows              |
| `=AND(A1>50, A1<100)` | Format cells within a range                     |
| `=ISBLANK(A1)`        | Highlight empty cells                           |
| `=COUNTIF(A:A, A1)>1` | Identify duplicate values                       |

### **Advanced Formatting Options**

| Command                                   | Description                              |
| ----------------------------------------- | ---------------------------------------- |
| `Manage Rules`                          | Edit or delete existing formatting rules |
| `Stop If True`                          | Prevent overlapping rules                |
| `Apply to Entire Row`                   | Format entire row based on a condition   |
| `Conditional Formatting > New Rule`     | Create custom formatting rules           |
| `Use a Formula to Determine Formatting` | Apply logic-based formatting             |

---

## 🔄 Workflows

### **Highlighting Key Data Points**

1. Select the range of cells.
2. Go to `Home > Conditional Formatting`.
3. Choose `Highlight Cells Rules` and set conditions.

### **Creating Dynamic Formatting Rules**

1. Use `New Rule` to define custom logic.
2. Apply formulas like `=A1>100` for conditional styling.
3. Adjust formatting styles for better visualization.

### **Automating Data Insights**

1. Use `Data Bars` for quick comparisons.
2. Apply `Color Scales` to show trends.
3. Use `Icon Sets` for intuitive data representation.

---

## 💡 Examples

```excel
# Example: Highlight values greater than 100
=IF(A1>100, TRUE, FALSE)
```

```excel
# Example: Format alternate rows for readability
=MOD(ROW(),2)=0
```

---

## 📚 References

- **[Apply Conditional Formatting in Excel](https://support.microsoft.com/en-us/office/apply-conditional-formatting-to-a-form-template-5aaea14d-d35f-45ee-a691-64b1d0793ee5)**
- **[Conditional Formatting Guide](https://www.geeksforgeeks.org/excel-conditional-formatting/)**

```
<!-- end list -->
```
