title: Excel Formula & Functions Cheatsheet
category: Excel
description: A structured reference guide covering essential Excel formulas, functions, and optimization techniques.

---

## 🔢 **Key Formula Components**

### **Reference Other Cell(s)**

| Action                           | Example Syntax |
| -------------------------------- | -------------- |
| **Relative Reference**     | `=A1`        |
| **Absolute Reference**     | `=$A$1`      |
| **Named Range (Absolute)** | `=FXRate`    |
| **Range Selection**        | `=A1:B5`     |
| **Column in Table**        | `=[@[DoB]]`  |

### **Basic Arithmetic & Logic Operators**

| Symbol | Meaning                  |
| ------ | ------------------------ |
| `+`  | Addition                 |
| `-`  | Subtraction              |
| `*`  | Multiplication           |
| `/`  | Division                 |
| `^`  | Power to                 |
| `%`  | Percentage               |
| `=`  | Equal to                 |
| `<>` | Not equal to             |
| `<`  | Less than                |
| `>`  | Greater than             |
| `<=` | Less than or equal to    |
| `>=` | Greater than or equal to |
| `&`  | Join (text)              |

---

## 📊 **Key Excel Functions**

### **Numerical & Statistical Functions**

| Function          | Syntax                                  | Purpose                               |
| ----------------- | --------------------------------------- | ------------------------------------- |
| **SUM**     | `=SUM(A1:A10)`                        | Adds all numbers in a range           |
| **SUMIFS**  | `=SUMIFS(range, criteria, sum_range)` | Summarizes values based on conditions |
| **AVERAGE** | `=AVERAGE(A1:A10)`                    | Calculates the mean value             |
| **COUNT**   | `=COUNT(A1:A10)`                      | Counts numbers in a range             |
| **COUNTA**  | `=COUNTA(A1:A10)`                     | Counts non-blank cells                |
| **MIN/MAX** | `=MIN(A1:A10)` / `=MAX(A1:A10)`     | Finds minimum/maximum value           |

### **Date Functions**

| Function              | Syntax                                   | Purpose                       |
| --------------------- | ---------------------------------------- | ----------------------------- |
| **DATE**        | `=DATE(year, month, day)`              | Creates a date                |
| **YEAR**        | `=YEAR(A1)`                            | Extracts the year from a date |
| **EOMONTH**     | `=EOMONTH(A1, months)`                 | Finds last day of the month   |
| **DATEDIF**     | `=DATEDIF(start_date, end_date, unit)` | Finds date differences        |
| **NETWORKDAYS** | `=NETWORKDAYS(start_date, end_date)`   | Counts workdays               |
| **DATEVALUE**   | `=DATEVALUE(text)`                     | Converts text to a date       |

### **Text Functions**

| Function                     | Syntax                                                           | Purpose                           |
| ---------------------------- | ---------------------------------------------------------------- | --------------------------------- |
| **LEFT/RIGHT/MID**     | `=LEFT(A1, 5)`, `=RIGHT(A1, 5)`, `=MID(A1, start, length)` | Cuts text from left/right/middle  |
| **FIND**               | `=FIND("text", A1)`                                            | Finds position of text            |
| **SUBSTITUTE**         | `=SUBSTITUTE(A1, "old", "new")`                                | Replaces text                     |
| **LEN**                | `=LEN(A1)`                                                     | Counts characters                 |
| **UPPER/LOWER/PROPER** | `=UPPER(A1)`, `=LOWER(A1)`, `=PROPER(A1)`                  | Changes text format               |
| **TRIM**               | `=TRIM(A1)`                                                    | Removes extra spaces              |
| **TEXT**               | `=TEXT(A1, "format")`                                          | Converts number to formatted text |

### **Logical Functions**

| Function          | Syntax                                                            | Purpose                                     |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------------- |
| **AND/OR**  | `=AND(condition1, condition2)`, `=OR(condition1, condition2)` | Tests multiple conditions                   |
| **IF**      | `=IF(condition, value_if_true, value_if_false)`                 | Returns different values based on condition |
| **IFERROR** | `=IFERROR(expression, value_if_error)`                          | Handles errors gracefully                   |

### **Lookup & Reference**

| Function          | Syntax                                                 | Purpose                    |
| ----------------- | ------------------------------------------------------ | -------------------------- |
| **XLOOKUP** | `=XLOOKUP(lookup_value, lookup_array, return_array)` | Searches and returns match |

---

## 🔄 **Formula Tools & Advanced Features**

### **Formula Auditing Tools**

✔ `Evaluate Formula` → Helps understand calculation order
✔ `Trace Precedents/Dependents` → Tracks cell relationships

### **Other Uses for Formulas**

✔ Custom **Data Validation** → Ensure proper input formats
✔ Custom **Conditional Formatting** → Dynamically highlight values

---

## 📚 **References**

- **[Excel Formula Guide](https://support.microsoft.com/en-us/excel)**
- **[Advanced Excel Techniques](https://www.office.com/excel-tips/)**

---
