title: JSON Cheatsheet

category: Javascript
description: A quick reference guide for essential JSON syntax, structures, and workflows for efficient data representation.

---

## 🛠️ Commands

### **Basic JSON Structure**

| Element | Description                              |
| ------- | ---------------------------------------- |
| `{}`  | Defines an object                        |
| `[]`  | Defines an array                         |
| `:`   | Separates keys and values                |
| `,`   | Separates elements in an object or array |

### **Data Types**

| Type        | Description                       |
| ----------- | --------------------------------- |
| `String`  | `"Hello"`                       |
| `Number`  | `42`                            |
| `Boolean` | `true` or `false`             |
| `Array`   | `["apple", "banana", "cherry"]` |
| `Object`  | `{"name": "Alice", "age": 25}`  |
| `Null`    | `null`                          |

### **Special Characters**

| Character | Description  |
| --------- | ------------ |
| `\n`    | Newline      |
| `\t`    | Tab          |
| `\\`    | Backslash    |
| `\"`    | Double quote |

### **Accessing JSON Data**

| Method            | Description                        |
| ----------------- | ---------------------------------- |
| `object.key`    | Access object property             |
| `object["key"]` | Alternative way to access property |
| `array[index]`  | Access array element               |

### **Parsing & Stringifying JSON**

| Command                    | Description                    |
| -------------------------- | ------------------------------ |
| `JSON.parse(string)`     | Converts JSON string to object |
| `JSON.stringify(object)` | Converts object to JSON string |

---

## 🔄 Workflows

### **Creating a JSON Object**

1. Define an object:
   ```json
   {
     "name": "Alice",
     "age": 25,
     "isStudent": false
   }
   ```
2. Save as `.json` file.

### **Parsing JSON in JavaScript**

1. Convert JSON string to object:
   ```javascript
   let jsonString = '{"name": "Alice", "age": 25}';
   let jsonObject = JSON.parse(jsonString);
   console.log(jsonObject.name);
   ```

### **Accessing Nested JSON Data**

1. Define a nested object:
   ```json
   {
     "person": {
       "name": "Alice",
       "address": {
         "city": "New York",
         "zip": "10001"
       }
     }
   }
   ```
2. Access nested properties:
   ```javascript
   console.log(jsonObject.person.address.city);
   ```

---

## 💡 Examples

```json
# JSON Array Example
{
  "fruits": ["apple", "banana", "cherry"]
}

# JSON Object Example
{
  "user": {
    "name": "Alice",
    "age": 25,
    "skills": ["JavaScript", "Python"]
  }
}
```

---

## 📚 References

- **[JSON Cheat Sheet &amp; Quick Reference](https://quickref.me/json.html)**
- **[JSON Shortcuts &amp; Examples](https://codebeautify.org/json-cheat-sheet)**
- **[JSON Syntax Guide](https://www.tutorialspoint.com/json/json_cheatsheet.htm)**

```
<!-- end list -->
```
