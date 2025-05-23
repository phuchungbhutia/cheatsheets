title: JSX Cheatsheet

category: React
description: A quick reference guide for essential JSX syntax, attributes, and best practices for building React components.

---

## 🛠️ Commands

### **Basic JSX Syntax**

| Command                               | Description                             |
| ------------------------------------- | --------------------------------------- |
| `<h1>Hello, World!</h1>`            | JSX element syntax                      |
| `{expression}`                      | Embed JavaScript expressions inside JSX |
| `<Component prop={value} />`        | Pass props to a component               |
| `<Component>{children}</Component>` | Nest components                         |

### **JSX Attributes**

| Command                                             | Description                 |
| --------------------------------------------------- | --------------------------- |
| `<h1 id="title">Hello</h1>`                       | Assign attributes like HTML |
| `<img src="image.jpg" alt="Description" />`       | Self-closing tags           |
| `<button onClick={handleClick}>Click Me</button>` | Event handling in JSX       |

### **Conditional Rendering**

| Command                                              | Description                                |
| ---------------------------------------------------- | ------------------------------------------ |
| `{condition ? <Component /> : <OtherComponent />}` | Ternary operator for conditional rendering |
| `{condition && <Component />}`                     | Render component only if condition is true |

### **JSX Loops**

| Command                                              | Description                    |
| ---------------------------------------------------- | ------------------------------ |
| `{array.map(item => <li>{item}</li>)}`             | Render lists dynamically       |
| `{Object.keys(obj).map(key => <p>{obj[key]}</p>)}` | Iterate over object properties |

### **Fragments & Styling**

| Command                                                                | Description                   |
| ---------------------------------------------------------------------- | ----------------------------- |
| `<> <h1>Title</h1> <p>Content</p> </>`                               | JSX fragments (no extra divs) |
| `<div style={{ color: 'blue', fontSize: '20px' }}>Styled Text</div>` | Inline styles using objects   |

---

## 🔄 Workflows

### **Creating a JSX Component**

1. Define a function component using `function MyComponent() { return <h1>Hello</h1>; }`.
2. Pass props using `<MyComponent name="React" />`.
3. Use conditional rendering with `{condition ? <Component /> : <OtherComponent />}`.

### **Handling Events in JSX**

1. Define event handler using `function handleClick() { console.log("Clicked!"); }`.
2. Attach event using `<button onClick={handleClick}>Click Me</button>`.

### **Rendering Lists in JSX**

1. Use `.map()` method to iterate over an array.
2. Return JSX elements dynamically inside `.map()`.

---

## 💡 Examples

```jsx
// JSX Component Example
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Using the component
<Greeting name="React" />
```

---

## 📚 References

- **[JSX Live Cheatsheet - Frontend Armory](https://frontarm.com/james-k-nelson/jsx-live-cheatsheet/)**
- **[JSX Cheatsheet - Codecademy](https://www.codecademy.com/learn/react-101/modules/react-101-jsx-u/cheatsheet)**
- **[React &amp; JSX Cheatsheet - GitHub](https://gist.github.com/delibytes/5b4f480427b9e7a923f7a313e58aaca8)**

```
<!-- end list -->
```
