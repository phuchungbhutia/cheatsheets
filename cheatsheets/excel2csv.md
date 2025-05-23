title: Excel to CSV Conversion in Python Cheatsheet

category: Python
description: A quick reference guide for converting Excel files to CSV using Python libraries such as pandas, xlrd, and openpyxl.

---

## 🛠️ Commands

### **Using Pandas**

| Command                                  | Description             |
| ---------------------------------------- | ----------------------- |
| `import pandas as pd`                  | Import pandas library   |
| `df = pd.read_excel("example.xlsx")`   | Read Excel file         |
| `df.to_csv("output.csv", index=False)` | Convert and save as CSV |

### **Using xlrd & CSV**

| Command                                     | Description               |
| ------------------------------------------- | ------------------------- |
| `import xlrd, csv`                        | Import required libraries |
| `wb = xlrd.open_workbook("example.xlsx")` | Open Excel workbook       |
| `sheet = wb.sheet_by_index(0)`            | Select sheet              |
| `writer.writerow(sheet.row_values(row))`  | Write row values to CSV   |

### **Using openpyxl & CSV**

| Command                                         | Description            |
| ----------------------------------------------- | ---------------------- |
| `import openpyxl, csv`                        | Import libraries       |
| `wb = openpyxl.load_workbook("example.xlsx")` | Load Excel workbook    |
| `sheet.iter_rows(values_only=True)`           | Extract data from rows |
| `writer.writerow(row)`                        | Write rows to CSV      |

---

## 🔄 Workflows

### **Converting Excel to CSV Using Pandas**

1. Load the Excel file using `pd.read_excel()`.
2. Convert to CSV using `df.to_csv()`.
3. Save the file without an index using `index=False`.

### **Handling Large Excel Files**

1. Use `openpyxl` for efficient handling of large files.
2. Iterate over rows with `values_only=True`.
3. Write rows using `csv.writer()`.

### **Saving Multiple Sheets as CSV**

1. Read sheets using `pd.read_excel("file.xlsx", sheet_name=None)`.
2. Convert each sheet separately using a loop.
3. Save as distinct CSV files for analysis.

---

## 💡 Examples

```python
# Example: Convert Excel to CSV using pandas
import pandas as pd

df = pd.read_excel("example.xlsx")
df.to_csv("output.csv", index=False)
```

```python
# Example: Convert Excel to CSV using openpyxl
import openpyxl
import csv

wb = openpyxl.load_workbook("example.xlsx")
sheet = wb.active

with open("output.csv", "w", newline="") as f:
    writer = csv.writer(f)
    for row in sheet.iter_rows(values_only=True):
        writer.writerow(row)
```

---

## 📚 References

- **[Convert Excel to CSV in Python](https://www.geeksforgeeks.org/convert-excel-to-csv-in-python/)**
- **[Pandas Read &amp; Write Excel Files](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_excel.html)**

```
<!-- end list -->
```
