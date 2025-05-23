title: String Manipulation in Excel Cheatsheet

category: Excel
description: A quick reference guide for performing string operations in Excel, including concatenation, extraction, formatting, and search functions.

---

## 🛠️ Commands

### **Basic String Operations**

| Command                           | Description                       |
| --------------------------------- | --------------------------------- |
| `=CONCATENATE(A1, B1)`          | Join two strings together         |
| `=TEXT(A1, "0.00")`             | Format numbers as text            |
| `=LEN(A1)`                      | Get the length of a string        |
| `=TRIM(A1)`                     | Remove extra spaces from a string |
| `=SUBSTITUTE(A1, "old", "new")` | Replace text within a string      |

### **Extracting & Modifying Strings**

| Command            | Description                                   |
| ------------------ | --------------------------------------------- |
| `=LEFT(A1, 5)`   | Extract first 5 characters                    |
| `=RIGHT(A1, 3)`  | Extract last 3 characters                     |
| `=MID(A1, 3, 4)` | Extract 4 characters starting from position 3 |
| `=LOWER(A1)`     | Convert text to lowercase                     |
| `=UPPER(A1)`     | Convert text to uppercase                     |

### **Searching & Matching Strings**

| Command                 | Description                        |
| ----------------------- | ---------------------------------- |
| `=SEARCH("text", A1)` | Find position of a substring       |
| `=FIND("text", A1)`   | Find position (case-sensitive)     |
| `=EXACT(A1, B1)`      | Check if two strings are identical |
| `=REPT(A1, 3)`        | Repeat a string 3 times            |
| `=CHAR(10)`           | Insert a line break in a string    |

### **Advanced String Functions**

| Command                          | Description                            |
| -------------------------------- | -------------------------------------- |
| `=TEXTJOIN(", ", TRUE, A1:A5)` | Join multiple strings with a separator |
| `=PROPER(A1)`                  | Capitalize first letter of each word   |
| `=CLEAN(A1)`                   | Remove non-printable characters        |
| `=VALUE(A1)`                   | Convert text to a number               |
| `=NUMBERVALUE(A1, ",", ".")`   | Convert formatted text to a number     |

---

## 🔄 Workflows

### **Cleaning & Formatting Strings**

1. Use `TRIM()` to remove extra spaces.
2. Convert text to lowercase using `LOWER()`.
3. Replace unwanted characters using `SUBSTITUTE()`.

### **Extracting Substrings**

1. Use `LEFT()` to get the first few characters.
2. Use `MID()` to extract a portion of text.
3. Use `RIGHT()` to get the last few characters.

### **Searching & Validating Strings**

1. Use `SEARCH()` to find text within a string.
2. Use `EXACT()` to compare two strings.
3. Use `TEXTJOIN()` to merge multiple values dynamically.

---

## 💡 Examples

```excel
# Example: Extract first 5 characters from a name
=LEFT(A1, 5)
```

```excel
# Example: Replace "old" with "new" in a string
=SUBSTITUTE(A1, "old", "new")
```

---

## 📚 References

- **[Excel String Functions Guide](https://www.exceldemy.com/learn-excel/function/categories/string/)**
- **[Mastering Text Functions in Excel](https://excelx.com/function/text/)**

```
<!-- end list -->
```
