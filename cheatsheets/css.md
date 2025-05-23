title: CSS Cheatsheet

category: Web Design
description: A quick reference guide for essential CSS properties, selectors, and workflows for efficient styling.

---

## 🛠️ Commands

### **Basic CSS Syntax**

| Command                           | Description                   |
| --------------------------------- | ----------------------------- |
| `selector { property: value; }` | Basic CSS rule structure      |
| `color: red;`                   | Sets text color to red        |
| `background-color: blue;`       | Sets background color to blue |
| `font-size: 16px;`              | Defines font size             |
| `margin: 10px;`                 | Sets margin around an element |

### **Selectors**

| Command    | Description                                 |
| ---------- | ------------------------------------------- |
| `*`      | Selects all elements                        |
| `div`    | Selects all `<div>` elements              |
| `#id`    | Selects an element with a specific ID       |
| `.class` | Selects all elements with a specific class  |
| `div, p` | Selects both `<div>` and `<p>` elements |

### **Box Model Properties**

| Command                      | Description                           |
| ---------------------------- | ------------------------------------- |
| `width: 100px;`            | Sets element width                    |
| `height: 200px;`           | Sets element height                   |
| `padding: 10px;`           | Adds space inside the element border  |
| `border: 1px solid black;` | Defines border style                  |
| `margin: 20px;`            | Adds space outside the element border |

### **Positioning & Display**

| Command                 | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `position: absolute;` | Positions element relative to its nearest positioned ancestor |
| `position: fixed;`    | Fixes element relative to the viewport                        |
| `position: relative;` | Positions element relative to its normal position             |
| `display: flex;`      | Enables flexbox layout                                        |
| `display: grid;`      | Enables grid layout                                           |

### **Text & Font Styling**

| Command                             | Description                     |
| ----------------------------------- | ------------------------------- |
| `font-family: Arial, sans-serif;` | Sets font family                |
| `text-align: center;`             | Centers text                    |
| `text-transform: uppercase;`      | Converts text to uppercase      |
| `letter-spacing: 2px;`            | Adjusts spacing between letters |
| `line-height: 1.5;`               | Sets line spacing               |

---

## 🔄 Workflows

### **Creating a Responsive Layout**

1. Use `display: flex;` or `display: grid;` for layout structure.
2. Apply `media queries` to adjust styles for different screen sizes.
3. Use `max-width: 100%;` to ensure elements scale properly.

### **Styling a Navigation Bar**

1. Use `display: flex;` for horizontal alignment.
2. Apply `justify-content: space-between;` for spacing.
3. Style links using `text-decoration: none;` and `hover effects`.

### **Optimizing Typography**

1. Set `font-family` for readability.
2. Adjust `line-height` for better spacing.
3. Use `letter-spacing` to improve text clarity.

---

## 💡 Examples

```css
/* Center an element */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Style a button */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

/* Responsive design */
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

---

## 📚 References

- **[CSS Cheat Sheet - HTMLCheatSheet](https://htmlcheatsheet.com/css/)**
- **[CSS Guide - GeeksforGeeks](https://www.geeksforgeeks.org/css-cheat-sheet-a-basic-guide-to-css/)**

```
<!-- end list -->
```
