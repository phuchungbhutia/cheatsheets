title: INDEX MATCH Cheatsheet

category: Excel
description: A quick reference guide for using the `INDEX` and `MATCH` functions in Excel to perform advanced lookups and retrieve data dynamically.

---

## 🛠️ Commands

### **Basic INDEX MATCH Syntax**

| Command                                              | Description                                     |
| ---------------------------------------------------- | ----------------------------------------------- |
| `=INDEX(array, row_num, [column_num])`             | Retrieve a value from a specific row and column |
| `=MATCH(lookup_value, lookup_array, [match_type])` | Find the position of a value in a range         |
| `=INDEX(A2:A10, MATCH(1001, B2:B10, 0))`           | Lookup a value using INDEX MATCH                |
| `=INDEX(A2:A10, MATCH("Product A", B2:B10, 0))`    | Lookup text values dynamically                  |

### **Advanced INDEX MATCH Usage**

| Command                                                                   | Description              |
| ------------------------------------------------------------------------- | ------------------------ |
| `=INDEX(A2:A10, MATCH(1001, B2:B10, 0), MATCH("Price", C1:E1, 0))`      | Two-way lookup           |
| `=INDEX(A2:A10, MATCH(1001, B2:B10, 1))`                                | Approximate match lookup |
| `=IFERROR(INDEX(A2:A10, MATCH(1001, B2:B10, 0)), "Not Found")`          | Handle errors gracefully |
| `=INDEX(A2:A10, MATCH(1001, B2:B10, 0), MATCH("ColumnName", C1:E1, 0))` | Dynamic column lookup    |

### **Combining INDEX MATCH with Other Functions**

| Command                                                                                | Description                                |
| -------------------------------------------------------------------------------------- | ------------------------------------------ |
| `=INDEX(A2:A10, MATCH(A2, B2:B10, 0)) & " - " & INDEX(C2:C10, MATCH(A2, B2:B10, 0))` | Concatenate multiple lookup results        |
| `=IF(INDEX(A2:A10, MATCH(A2, B2:B10, 0))>50, "Pass", "Fail")`                        | Conditional lookup                         |
| `=INDEX(D2:D10, MATCH(A2, B2:B10, 0))`                                               | Alternative to VLOOKUP using INDEX & MATCH |

---

## 🔄 Workflows

### **Performing a Basic Lookup**

1. Identify the lookup value in column B.
2. Define the lookup range (`B2:B10`).
3. Specify the return range (`A2:A10`).
4. Use `MATCH()` to find the row position.
5. Use `INDEX()` to retrieve the corresponding value.

### **Handling Errors in INDEX MATCH**

1. Use `IFERROR()` to return custom error messages.
2. Validate lookup values before applying INDEX MATCH.
3. Use `MATCH()` for dynamic column selection.

### **Optimizing Lookup Performance**

1. Use `INDEX()` and `MATCH()` for faster lookups.
2. Convert lookup tables into named ranges.
3. Avoid using entire columns in `lookup_array`.

---

## 💡 Examples

```excel
# Example: Lookup Employee Name by ID
=INDEX(A2:A10, MATCH(1001, B2:B10, 0))
```

```excel
# Example: Handle Missing Values
=IFERROR(INDEX(A2:A10, MATCH(A2, B2:B10, 0)), "Not Found")
```

---

## 📚 References

- **[INDEX MATCH vs VLOOKUP](https://trumpexcel.com/index-match/)**
- **[Step-by-Step INDEX MATCH Guide](https://www.excel-easy.com/examples/index-match.html)**
- **[INDEX MATCH Excel Practice Exercises](https://www.exceldemy.com/index-match-excel-practice-exercises/)**

```
<!-- end list -->
```
