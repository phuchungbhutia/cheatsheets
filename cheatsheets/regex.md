title: Regex Cheatsheet

category: Text Processing
description: A quick reference guide for essential regular expressions (regex) syntax, operators, and workflows for efficient text searching.

---

## 🛠️ Commands

### **Basic Regex Syntax**

| Command | Description                                              |
| ------- | -------------------------------------------------------- |
| `.`   | Matches any single character except newline              |
| `^`   | Anchors match at the start of a string                   |
| `$`   | Anchors match at the end of a string                     |
| `\d`  | Matches any digit (0-9)                                  |
| `\D`  | Matches any non-digit                                    |
| `\w`  | Matches any word character (letters, digits, underscore) |
| `\W`  | Matches any non-word character                           |
| `\s`  | Matches any whitespace character                         |
| `\S`  | Matches any non-whitespace character                     |

### **Quantifiers & Repetitions**

| Command   | Description                                 |
| --------- | ------------------------------------------- |
| `*`     | Matches 0 or more occurrences               |
| `+`     | Matches 1 or more occurrences               |
| `?`     | Matches 0 or 1 occurrence                   |
| `{n}`   | Matches exactly `n` occurrences           |
| `{n,}`  | Matches `n` or more occurrences           |
| `{n,m}` | Matches between `n` and `m` occurrences |

### **Character Classes & Groups**

| Command     | Description                                   |
| ----------- | --------------------------------------------- |
| `[abc]`   | Matches any character in the set (a, b, or c) |
| `[^abc]`  | Matches any character NOT in the set          |
| `[a-z]`   | Matches any lowercase letter                  |
| `[A-Z]`   | Matches any uppercase letter                  |
| `[0-9]`   | Matches any digit                             |
| `(abc)`   | Captures group for later reference            |
| `(?:abc)` | Non-capturing group                           |

### **Assertions & Lookarounds**

| Command      | Description                                               |
| ------------ | --------------------------------------------------------- |
| `\b`       | Matches a word boundary                                   |
| `\B`       | Matches a non-word boundary                               |
| `(?=abc)`  | Positive lookahead (matches if `abc` follows)           |
| `(?!abc)`  | Negative lookahead (matches if `abc` does NOT follow)   |
| `(?<=abc)` | Positive lookbehind (matches if `abc` precedes)         |
| `(?<!abc)` | Negative lookbehind (matches if `abc` does NOT precede) |

---

## 🔄 Workflows

### **Validating an Email Address**

1. Use regex pattern:
   ```regex
   ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
   ```
2. Match against user input.
3. Ensure proper formatting before submission.

### **Extracting Phone Numbers**

1. Use regex pattern:
   ```regex
   \b\d{3}[-.]?\d{3}[-.]?\d{4}\b
   ```
2. Match against text to find valid phone numbers.

### **Finding URLs in Text**

1. Use regex pattern:
   ```regex
   https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}\/?
   ```
2. Extract valid URLs from a document.

---

## 💡 Examples

```regex
# Match a valid date format (YYYY-MM-DD)
^\d{4}-\d{2}-\d{2}$

# Find all words starting with "a"
\b[aA]\w*\b

# Replace multiple spaces with a single space
\s{2,}
```

---

## 📚 References

- **[Regex Cheat Sheet &amp; Quick Reference](https://quickref.me/regex.html)**
- **[MDN Regex Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)**
- **[Regular Expressions Cheat Sheet](https://cheatography.com/davechild/cheat-sheets/regular-expressions/)**

```
<!-- end list -->
```
