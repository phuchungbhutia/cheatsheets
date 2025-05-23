title: String Manipulation Cheatsheet

category: Python
description: A quick reference guide for performing string operations, including concatenation, slicing, formatting, and regex matching.

---

## 🛠️ Commands

### **Basic String Operations**

| Command                       | Description                        |
| ----------------------------- | ---------------------------------- |
| `str1 + str2`               | Concatenate two strings            |
| `str.lower()`               | Convert string to lowercase        |
| `str.upper()`               | Convert string to uppercase        |
| `str.strip()`               | Remove leading and trailing spaces |
| `str.replace("old", "new")` | Replace substring                  |

### **String Slicing & Indexing**

| Command      | Description                        |
| ------------ | ---------------------------------- |
| `str[0]`   | Get first character                |
| `str[-1]`  | Get last character                 |
| `str[2:5]` | Slice substring from index 2 to 4  |
| `str[:5]`  | Get first 5 characters             |
| `str[5:]`  | Get characters from index 5 onward |

### **String Formatting**

| Command                     | Description                       |
| --------------------------- | --------------------------------- |
| `f"Hello {name}"`         | Format string using f-strings     |
| `"Hello {}".format(name)` | Format string using `.format()` |
| `"%.2f" % value`          | Format floating-point numbers     |
| `"{:>10}".format(str)`    | Right-align text                  |
| `"{:<10}".format(str)`    | Left-align text                   |

### **Regular Expressions (Regex)**

| Command                                 | Description                             |
| --------------------------------------- | --------------------------------------- |
| `import re`                           | Import regex module                     |
| `re.match(pattern, str)`              | Match pattern at the start of a string  |
| `re.search(pattern, str)`             | Search for pattern anywhere in a string |
| `re.findall(pattern, str)`            | Find all occurrences of a pattern       |
| `re.sub(pattern, "replacement", str)` | Replace pattern with new text           |

---

## 🔄 Workflows

### **Cleaning & Formatting Strings**

1. Use `str.strip()` to remove extra spaces.
2. Convert text to lowercase using `str.lower()`.
3. Replace unwanted characters using `str.replace()`.

### **Extracting Substrings**

1. Use `str[:5]` to get the first 5 characters.
2. Use `str[-3:]` to get the last 3 characters.
3. Use regex `re.findall()` for complex patterns.

### **Validating & Searching Strings**

1. Use `re.match()` to check if a string starts with a pattern.
2. Use `re.search()` to find patterns anywhere in a string.
3. Use `re.sub()` to replace patterns dynamically.

---

## 💡 Examples

```python
# Example: Format a string using f-strings
name = "Alice"
print(f"Hello {name}")
```

```python
# Example: Extract numbers from a string using regex
import re
text = "Order ID: 12345"
numbers = re.findall(r"\d+", text)
print(numbers)  # Output: ['12345']
```

---

## 📚 References

- **[Python String Methods](https://docs.python.org/3/library/stdtypes.html#string-methods)**
- **[Regex Cheat Sheet](https://www.rexegg.com/regex-quickstart.html)**

```
<!-- end list -->
```
