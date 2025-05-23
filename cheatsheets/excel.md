title: Excel Cheatsheet

category: Excel
description: A quick reference guide for essential Excel formulas, shortcuts, and functions for efficient spreadsheet management.

---

## 🛠️ Commands

### **Basic Navigation & Shortcuts**

| Command      | Description                   |
| ------------ | ----------------------------- |
| `Ctrl + N` | Create a new workbook         |
| `Ctrl + S` | Save the current workbook     |
| `Ctrl + O` | Open an existing workbook     |
| `Ctrl + P` | Print the workbook            |
| `Ctrl + Z` | Undo last action              |
| `Ctrl + Y` | Redo last action              |
| `Ctrl + C` | Copy selected cells           |
| `Ctrl + V` | Paste copied cells            |
| `Ctrl + X` | Cut selected cells            |
| `Ctrl + A` | Select all cells              |
| `Ctrl + F` | Find text in the worksheet    |
| `Ctrl + H` | Replace text in the worksheet |

### **Formulas & Functions**

| Formula                                                                | Description                                                                 |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `=SUM(A1:A10)`                                                       | Adds values in the range A1 to A10                                          |
| `=AVERAGE(A1:A10)`                                                   | Calculates the average of values in the range                               |
| `=IF(A1>10, "High", "Low")`                                          | Conditional logic: returns "High" if A1 is greater than 10, otherwise "Low" |
| `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])` | Searches for a value in a table                                             |
| `=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])` | Searches for a value in a row                                               |
| `=INDEX(array, row_num, col_num)`                                    | Returns the value at a specific row and column in an array                  |
| `=MATCH(lookup_value, lookup_array, [match_type])`                   | Returns the position of a value in a range                                  |
| `=LEN(A1)`                                                           | Returns the number of characters in a cell                                  |
| `=LEFT(A1, 5)`                                                       | Extracts the first 5 characters from a cell                                 |
| `=RIGHT(A1, 5)`                                                      | Extracts the last 5 characters from a cell                                  |
| `=MID(A1, 3, 4)`                                                     | Extracts 4 characters starting from the 3rd character                       |

### **Data Formatting & Manipulation**

| Command              | Description              |
| -------------------- | ------------------------ |
| `Ctrl + B`         | Bold text                |
| `Ctrl + I`         | Italicize text           |
| `Ctrl + U`         | Underline text           |
| `Ctrl + 1`         | Open Format Cells dialog |
| `Ctrl + Shift + %` | Apply percentage format  |
| `Ctrl + Shift + $` | Apply currency format    |
| `Ctrl + Shift + #` | Apply date format        |
| `Ctrl + Shift + @` | Apply time format        |

### **Data Analysis & Pivot Tables**

| Command              | Description                   |
| -------------------- | ----------------------------- |
| `Alt + N + V`      | Insert a Pivot Table          |
| `Ctrl + T`         | Create a table                |
| `Ctrl + Shift + L` | Apply filters to a dataset    |
| `Alt + A + M`      | Remove duplicates             |
| `Alt + A + S + A`  | Sort data in ascending order  |
| `Alt + A + S + D`  | Sort data in descending order |

---

## 🔄 Workflows

### **Creating & Formatting a Table**

1. Select the data range.
2. Press `Ctrl + T` to convert it into a table.
3. Use `Ctrl + Shift + L` to apply filters.
4. Format the table using `Ctrl + 1` for custom styling.

### **Using VLOOKUP for Data Retrieval**

1. Define a lookup value in a cell.
2. Use the formula:
   ```excel
   =VLOOKUP(A2, B2:D10, 2, FALSE)
   ```
3. This retrieves the corresponding value from the second column of the table.

### **Creating a Pivot Table**

1. Select the dataset.
2. Press `Alt + N + V` to insert a Pivot Table.
3. Drag fields into Rows, Columns, and Values sections.
4. Apply filters and sorting for analysis.

---

## 💡 Examples

```excel
# Calculate total sales
=SUM(B2:B20)

# Find the average price of products
=AVERAGE(C2:C20)

# Extract the first 3 characters of a product code
=LEFT(A2, 3)

# Lookup a product name based on an ID
=VLOOKUP(101, A2:B10, 2, FALSE)
```

---

## 📚 References

- **Excel Cheat Sheet**: [Dataquest](https://www.dataquest.io/cheat-sheet/excel-cheat-sheet/)
- **Excel Formulas Guide**: [DataCamp](https://www.datacamp.com/cheat-sheet/getting-started-with-excel-cheat-sheet)
- **Excel Shortcuts & Functions**: [Excel Help](https://excel-help.com/cheat-sheets/)

```
<!-- end list -->
```
