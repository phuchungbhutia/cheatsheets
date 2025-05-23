title: Data Validation Cheatsheet

category: Data Validation
description: A quick reference guide for essential data validation techniques, rules, and workflows for ensuring accurate and secure data entry.

---

## 🛠️ Commands

### **Basic Validation Techniques**

| Command               | Description                                                               |
| --------------------- | ------------------------------------------------------------------------- |
| `Type Checking`     | Ensures data is of the correct type (e.g., integer, string)               |
| `Length Validation` | Restricts input length (e.g., max 255 characters)                         |
| `Format Validation` | Ensures data follows a specific format (e.g., email, phone number)        |
| `Range Validation`  | Confirms values fall within an acceptable range (e.g., age between 18-65) |
| `Required Fields`   | Ensures mandatory fields are not left empty                               |

### **Advanced Validation Methods**

| Command                        | Description                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `Regex Validation`           | Uses regular expressions to enforce patterns (e.g.,`^\d{3}-\d{2}-\d{4}$` for SSN) |
| `Cross-field Validation`     | Ensures consistency between related fields (e.g., start date < end date)            |
| `Database Lookup Validation` | Confirms input exists in a database (e.g., valid user ID)                           |
| `Whitelist Validation`       | Allows only predefined values (e.g., country codes)                                 |
| `Blacklist Validation`       | Blocks known invalid or harmful inputs                                              |

### **Security & Error Handling**

| Command                                   | Description                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| `Sanitization`                          | Removes harmful characters to prevent SQL injection & XSS |
| `Error Messages`                        | Provides clear feedback for invalid inputs                |
| `Logging & Monitoring`                  | Tracks validation failures for security analysis          |
| `Client-Side vs Server-Side Validation` | Ensures validation occurs at both levels                  |

---

## 🔄 Workflows

### **Implementing Basic Validation**

1. Define required fields and acceptable formats.
2. Apply type checking and length restrictions.
3. Use regex for structured data validation.

### **Ensuring Secure Data Entry**

1. Sanitize user input to prevent injection attacks.
2. Validate data on both client and server sides.
3. Log validation errors for security monitoring.

### **Handling Validation Errors**

1. Display user-friendly error messages.
2. Provide suggestions for correcting invalid input.
3. Prevent submission of incomplete or incorrect data.

---

## 💡 Examples

```python
# Validate email format using regex
import re
def is_valid_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

# Check if input is within a valid range
def validate_age(age):
    return 18 <= age <= 65
```

---

## 📚 References

- **[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)**
- **[GitHub Input Validation Guide](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Input_Validation_Cheat_Sheet.md)**
- **[Cloudutsuk OWASP Validation Guide](https://cloudutsuk.com/posts/cybersecurity/owasp/owasp-input-validation-cheatsheet/)**

```
<!-- end list -->
```
