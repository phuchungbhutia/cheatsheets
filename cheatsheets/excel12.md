title: Excel Must-Know Formulas Cheatsheet
category: Excel
description: A structured reference guide covering essential Excel formulas for efficient calculations and automation.

---

## 🔢 **Key Excel Formulas & Functions**

### **Lookup & Reference**

| Formula           | Syntax                                   | Description                                                                                                           |
| ----------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **VLOOKUP** | `=VLOOKUP(1001, A1:D10, 4, FALSE)`     | Finds a match for**1001** in **A1:A10** and returns the corresponding value from the **4th column** |
| **XLOOKUP** | `=XLOOKUP("Potatoes", A1:A10, C1:C10)` | Searches for**"Potatoes"** in **A1:A10** and returns the corresponding value from **C1:C10**        |

### **Text & Formatting**

| Formula          | Syntax                          | Description                                                   |
| ---------------- | ------------------------------- | ------------------------------------------------------------- |
| **TEXT**   | `=TEXT(45793, "d mmmm yyyy")` | Converts**45793** to a formatted date (`d mmmm yyyy`) |
| **CONCAT** | `=CONCAT(A1:C1)`              | Joins text across multiple cells                              |
| **LOWER**  | `=LOWER(A1)`                  | Converts text to lowercase                                    |
| **UPPER**  | `=UPPER(A1)`                  | Converts text to uppercase                                    |

### **Date & Time Functions**

| Formula         | Syntax       | Description                              |
| --------------- | ------------ | ---------------------------------------- |
| **TODAY** | `=TODAY()` | Returns the**current date**        |
| **NOW**   | `=NOW()`   | Returns the**current date & time** |

### **Arithmetic & Statistical**

| Formula           | Syntax                       | Description                                                                                                    |
| ----------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **SUM**     | `=SUM(A1:A10)`             | Adds values within a range                                                                                     |
| **SUMIF**   | `=SUMIF(A:A, ">500", B:B)` | Adds**column A** values greater than **500** and sums corresponding values from **column B** |
| **AVERAGE** | `=AVERAGE(A1:A10)`         | Calculates the**average value** of a range                                                               |

### **Logical & Error Handling**

| Formula           | Syntax                          | Description                                                                 |
| ----------------- | ------------------------------- | --------------------------------------------------------------------------- |
| **IF**      | `=IF(55>=50, "Pass", "Fail")` | Returns**"Pass"** if 55 is **≥50**, otherwise **"Fail"** |
| **ISERROR** | `=ISERROR(2/0)`               | Checks if a formula results in an**error**                            |

### **Unit Conversion & Other Useful Functions**

| Formula           | Syntax                     | Description                                     |
| ----------------- | -------------------------- | ----------------------------------------------- |
| **CONVERT** | `=CONVERT(30, "C", "F")` | Converts**30°C** to **Fahrenheit** |

---

## 🔄 **Optimized Practices**

### **Boosting Efficiency in Excel**

1. **Use absolute references** (`$A$1`) to maintain consistent formulas.
2. **Apply conditional formatting** to highlight key data points.
3. **Utilize dynamic formulas** like `XLOOKUP` for advanced lookups.
4. **Leverage automation** using built-in functions like `SUMIF` & `TEXT`.

---

## 📚 **References**

- **[Microsoft Excel Formula Guide](https://support.microsoft.com/en-us/excel)**
- **[Advanced Excel Techniques](https://www.office.com/excel-tips/)**

---
