title: Excel Functions Cheatsheet
category: Excel
description: A structured reference guide covering essential Excel functions for arithmetic, lookup, logic, text, and date calculations.

---

## 🔢 **Arithmetic Functions**

| Function             | Purpose                               | Syntax                                         | Example                              |
| -------------------- | ------------------------------------- | ---------------------------------------------- | ------------------------------------ |
| **SUM**        | Adds numbers together                 | `=SUM(range)`                                | `=SUM(A1:A10)`                     |
| **SUMIF**      | Adds numbers that meet criteria       | `=SUMIF(range, criteria, sum_range)`         | `=SUMIF(Names, ">500", Sales)`     |
| **SUMPRODUCT** | Multiplies and sums ranges            | `=SUMPRODUCT(range1, array2)`                | `=SUMPRODUCT(Quantity, Price)`     |
| **AVERAGE**    | Finds the average of numbers          | `=AVERAGE(range)`                            | `=AVERAGE(A1:A10)`                 |
| **AVERAGEIF**  | Finds the average that meets criteria | `=AVERAGEIF(range, criteria, average_range)` | `=AVERAGEIF(Names, ">500", Sales)` |

---

## 🔢 **Counting Functions**

| Function           | Purpose                             | Syntax                                                   | Example                                       |
| ------------------ | ----------------------------------- | -------------------------------------------------------- | --------------------------------------------- |
| **COUNT**    | Counts numbers in a range           | `=COUNT(range)`                                        | `=COUNT(A1:A10)`                            |
| **COUNTA**   | Counts non-blank cells              | `=COUNTA(range)`                                       | `=COUNTA(A1:A10)`                           |
| **COUNTIF**  | Counts cells that meet criteria     | `=COUNTIF(range, criteria)`                            | `=COUNTIF(Sales, ">100")`                   |
| **COUNTIFS** | Counts cells with multiple criteria | `=COUNTIFS(range1, criteria1, range2, criteria2, ...)` | `=COUNTIFS(Sales, ">100", Region, "North")` |

---

## 🔍 **Lookup and Reference Functions**

| Function          | Purpose                                               | Syntax                                                 | Example                                  |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------- |
| **VLOOKUP** | Searches vertically for value                         | `=VLOOKUP(lookup, range, col_num, TRUE/FALSE)`       | `=VLOOKUP(1001, A1:D10, 4, FALSE)`     |
| **INDEX**   | Returns a value at a position                         | `=INDEX(range, row_num, col_num)`                    | `=INDEX(A1:D10, 5, 4)`                 |
| **MATCH**   | Finds relative position of value                      | `=MATCH(lookup, range)`                              | `=MATCH("Alia", A1:A10)`               |
| **HLOOKUP** | Searches horizontally for value                       | `=HLOOKUP(lookup, range, row_num, TRUE/FALSE)`       | `=HLOOKUP(1001, A1:D10, 4, FALSE)`     |
| **XLOOKUP** | Searches in a range and returns a corresponding value | `=XLOOKUP(lookup_value, lookup_array, return_array)` | `=XLOOKUP("Potatoes", A1:A10, C1:C10)` |

---

## ✅ **Logical Functions**

| Function          | Purpose                            | Syntax                                  | Example                       |
| ----------------- | ---------------------------------- | --------------------------------------- | ----------------------------- |
| **IF**      | Tests condition and returns values | `=IF(condition, true_val, false_val)` | `=IF(101>100, "Yes", "No")` |
| **IFERROR** | Handles errors gracefully          | `=IFERROR(cell, value_if_error)`      | `=IFERROR(A1/B1, "Error")`  |
| **IFBLANK** | Returns value if a cell is blank   | `=IFBLANK(cell, value_if_blank)`      | `=IFBLANK(A1, "Blank")`     |

---

## 🔠 **Text Functions**

| Function         | Purpose                    | Syntax                         | Example            |
| ---------------- | -------------------------- | ------------------------------ | ------------------ |
| **CONCAT** | Joins text strings         | `=CONCAT(text1, text2, ...)` | `=CONCAT(A1:C1)` |
| **LEN**    | Returns text length        | `=LEN(text)`                 | `=LEN(A1)`       |
| **LOWER**  | Converts text to lowercase | `=LOWER(text)`               | `=LOWER(A1)`     |
| **UPPER**  | Converts text to uppercase | `=UPPER(text)`               | `=UPPER(A1)`     |

---

## 📅 **Date and Time Functions**

| Function        | Purpose                       | Syntax                          | Example               |
| --------------- | ----------------------------- | ------------------------------- | --------------------- |
| **TODAY** | Returns current date          | `=TODAY()`                    | `=TODAY()`          |
| **NOW**   | Returns current date and time | `=NOW()`                      | `=NOW()`            |
| **DATE**  | Creates a date                | `=DATE(year, month, day)`     | `=DATE(2022, 1, 1)` |
| **TIME**  | Creates a time                | `=TIME(hour, minute, second)` | `=TIME(12, 0, 0)`   |

---

## 📌 **Tips and Best Practices**

✅ **Use meaningful names** for ranges and variables.
✅ **Use absolute references** (`$A$1`) when necessary.
✅ **Use parentheses** for complex formulas to ensure clarity.
✅ **Validate formulas** to confirm accuracy.
✅ **Handle errors effectively** with functions like `IFERROR`.

---

## 🚫 **Common Errors & Solutions**

| Error             | Meaning                | Solution                             |
| ----------------- | ---------------------- | ------------------------------------ |
| **#DIV/0!** | Division by zero       | `"Ensure denominator is not zero"` |
| **#VALUE!** | Incorrect data type    | `"Check input format"`             |
| **#REF!**   | Invalid cell reference | `"Fix broken links"`               |
| **#N/A**    | Lookup failed          | `"Verify lookup values"`           |

---

## 📚 **References**

- **[Excel Function Guide](https://support.microsoft.com/en-us/excel)**
- **[Advanced Formulas &amp; Tips](https://www.office.com/excel-tips/)**

---
