title: VLOOKUP Cheatsheet

category: Excel
description: A quick reference guide for using the `VLOOKUP` function in Excel to search for values in a table and return corresponding data.

---

## 🛠️ Commands

### **Basic VLOOKUP Syntax**

| Command                                                                | Description                                            |
| ---------------------------------------------------------------------- | ------------------------------------------------------ |
| `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])` | Basic VLOOKUP formula                                  |
| `=VLOOKUP(A2, B2:D10, 2, FALSE)`                                     | Lookup value in column A and return data from column 2 |
| `=VLOOKUP(1001, A2:D10, 3, TRUE)`                                    | Approximate match lookup                               |
| `=VLOOKUP(A2, Table1, 2, FALSE)`                                     | Lookup using a named table                             |

### **Advanced VLOOKUP Usage**

| Command                                                        | Description              |
| -------------------------------------------------------------- | ------------------------ |
| `=VLOOKUP(A2, B2:D10, 2, FALSE)`                             | Exact match lookup       |
| `=VLOOKUP(A2, B2:D10, 2, TRUE)`                              | Approximate match lookup |
| `=IFERROR(VLOOKUP(A2, B2:D10, 2, FALSE), "Not Found")`       | Handle errors gracefully |
| `=VLOOKUP(A2, B2:D10, MATCH("ColumnName", B1:D1, 0), FALSE)` | Dynamic column lookup    |

### **Combining VLOOKUP with Other Functions**

| Command                                                                    | Description                                |
| -------------------------------------------------------------------------- | ------------------------------------------ |
| `=VLOOKUP(A2, B2:D10, 2, FALSE) & " - " & VLOOKUP(A2, B2:D10, 3, FALSE)` | Concatenate multiple lookup results        |
| `=IF(VLOOKUP(A2, B2:D10, 2, FALSE)>50, "Pass", "Fail")`                  | Conditional lookup                         |
| `=INDEX(D2:D10, MATCH(A2, B2:B10, 0))`                                   | Alternative to VLOOKUP using INDEX & MATCH |

---

## 🔄 Workflows

### **Performing a Basic Lookup**

1. Identify the lookup value in column A.
2. Define the table range (`B2:D10`).
3. Specify the column index number (`2`).
4. Use `FALSE` for an exact match.

### **Handling Errors in VLOOKUP**

1. Use `IFERROR()` to return custom error messages.
2. Validate lookup values before applying VLOOKUP.
3. Use `MATCH()` for dynamic column selection.

### **Optimizing Lookup Performance**

1. Use `INDEX()` and `MATCH()` for faster lookups.
2. Convert lookup tables into named ranges.
3. Avoid using entire columns in `table_array`.

---

## 💡 Examples

```excel
# Example: Lookup Employee Name by ID
=VLOOKUP(1001, A2:D10, 2, FALSE)
```

```excel
# Example: Handle Missing Values
=IFERROR(VLOOKUP(A2, B2:D10, 2, FALSE), "Not Found")
```

---

## 📚 References

- **[VLOOKUP Practice Example File](https://www.thespreadsheetguru.com/vlookup-practice-example-file-with-solutions/)**
- **[10 VLOOKUP Examples for Beginners &amp; Advanced Users](https://trumpexcel.com/excel-vlookup-function/)**
- **[Free VLOOKUP Templates for Excel](https://slidesdocs.com/excel-sheets/vlookup)**

```
<!-- end list -->
```
