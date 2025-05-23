title: HTML Cheatsheet

category: HTML
description: A quick reference guide for essential HTML tags, attributes, and examples for efficient web development.

---

## 🛠️ Tags & Elements

### **Basic Structure**

| Tag                 | Description                                   |
| ------------------- | --------------------------------------------- |
| `<!DOCTYPE html>` | Defines the document type                     |
| `<html>`          | Root element of an HTML document              |
| `<head>`          | Contains metadata and links to styles/scripts |
| `<title>`         | Defines the title of the document             |
| `<body>`          | Contains the visible page content             |

### **Text Formatting**

| Tag              | Description                    |
| ---------------- | ------------------------------ |
| `<h1> to <h6>` | Headings (largest to smallest) |
| `<p>`          | Paragraph                      |
| `<strong>`     | Bold text                      |
| `<em>`         | Italic text                    |
| `<u>`          | Underlined text                |
| `<br>`         | Line break                     |
| `<hr>`         | Horizontal rule                |

### **Links & Media**

| Tag                                         | Description          |
| ------------------------------------------- | -------------------- |
| `<a href="URL">`                          | Creates a hyperlink  |
| `<img src="image.jpg" alt="description">` | Displays an image    |
| `<video controls>`                        | Embeds a video       |
| `<audio controls>`                        | Embeds an audio file |

### **Lists**

| Tag      | Description    |
| -------- | -------------- |
| `<ul>` | Unordered list |
| `<ol>` | Ordered list   |
| `<li>` | List item      |

### **Tables**

| Tag         | Description       |
| ----------- | ----------------- |
| `<table>` | Defines a table   |
| `<tr>`    | Table row         |
| `<td>`    | Table data cell   |
| `<th>`    | Table header cell |

### **Forms & Inputs**

| Tag                       | Description           |
| ------------------------- | --------------------- |
| `<form>`                | Defines a form        |
| `<input type="text">`   | Text input field      |
| `<input type="submit">` | Submit button         |
| `<textarea>`            | Multi-line text input |
| `<select>`              | Dropdown menu         |

### **Semantic Elements**

| Tag           | Description              |
| ------------- | ------------------------ |
| `<header>`  | Defines a header section |
| `<nav>`     | Navigation section       |
| `<section>` | Defines a section        |
| `<article>` | Defines an article       |
| `<footer>`  | Footer section           |

---

## 🔄 Workflows

### **Creating a Basic HTML Page**

1. Define the document structure:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>My Web Page</title>
   </head>
   <body>
       <h1>Welcome to My Website</h1>
       <p>This is a simple HTML page.</p>
   </body>
   </html>
   ```

### **Adding Links & Images**

1. Create a hyperlink:
   ```html
   <a href="https://example.com">Visit Example</a>
   ```
2. Insert an image:
   ```html
   <img src="image.jpg" alt="A beautiful image">
   ```

### **Building a Form**

1. Create a simple form:
   ```html
   <form action="/submit" method="POST">
       <label for="name">Name:</label>
       <input type="text" id="name" name="name">
       <input type="submit" value="Submit">
   </form>
   ```

---

## 💡 Examples

```html
<!-- Create a table -->
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
    </tr>
</table>

<!-- Embed a video -->
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

---

## 📚 References

- **HTML Cheat Sheet**: [GeeksforGeeks](https://www.geeksforgeeks.org/html-cheat-sheet/)
- **Interactive HTML Guide**: [HTML Cheat Sheet](https://htmlcheatsheet.com/)
- **MDN HTML Cheatsheet**: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Cheatsheet)

```
<!-- end list -->
```
