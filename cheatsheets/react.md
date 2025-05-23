title: React Cheatsheet
category: Programming
description: A quick reference guide for essential React commands, JSX syntax, and best practices for building interactive web applications.

---

## 🛠️ Commands

### **Basic React Setup**

| Command                          | Description                                      |
| -------------------------------- | ------------------------------------------------ |
| `npx create-react-app my-app`  | Create a new React project                       |
| `cd my-app && npm start`       | Navigate to project and start development server |
| `npm install react-router-dom` | Install React Router for navigation              |

### **JSX Syntax**

| Command                               | Description                             |
| ------------------------------------- | --------------------------------------- |
| `<h1>Hello, World!</h1>`            | JSX element syntax                      |
| `{expression}`                      | Embed JavaScript expressions inside JSX |
| `<Component prop={value} />`        | Pass props to a component               |
| `<Component>{children}</Component>` | Nest components                         |

### **React Components**

| Command                                                                               | Description          |
| ------------------------------------------------------------------------------------- | -------------------- |
| `function MyComponent() { return <h1>Hello</h1>; }`                                 | Functional component |
| `class MyComponent extends React.Component { render() { return <h1>Hello</h1>; } }` | Class component      |
| `export default MyComponent;`                                                       | Export component     |

### **State & Props**

| Command                                    | Description                           |
| ------------------------------------------ | ------------------------------------- |
| `const [count, setCount] = useState(0);` | Declare state in functional component |
| `this.state = { count: 0 };`             | Declare state in class component      |
| `<Component name="React" />`             | Pass props to a component             |
| `props.name`                             | Access props inside a component       |

### **Event Handling**

| Command                                                 | Description          |
| ------------------------------------------------------- | -------------------- |
| `<button onClick={handleClick}>Click Me</button>`     | Attach event handler |
| `function handleClick() { console.log("Clicked!"); }` | Define event handler |

### **Conditional Rendering**

| Command                                              | Description                                |
| ---------------------------------------------------- | ------------------------------------------ |
| `{condition ? <Component /> : <OtherComponent />}` | Ternary operator for conditional rendering |
| `{condition && <Component />}`                     | Render component only if condition is true |

### **React Router**

| Command                                                            | Description          |
| ------------------------------------------------------------------ | -------------------- |
| `import { BrowserRouter, Route, Link } from 'react-router-dom';` | Import React Router  |
| `<Route path="/about" element={<About />} />`                    | Define route         |
| `<Link to="/about">Go to About</Link>`                           | Navigate using links |

---

## 🔄 Workflows

### **Creating a React Component**

1. Define a function component using `function MyComponent() { return <h1>Hello</h1>; }`.
2. Pass props using `<MyComponent name="React" />`.
3. Use conditional rendering with `{condition ? <Component /> : <OtherComponent />}`.

### **Handling Events in React**

1. Define event handler using `function handleClick() { console.log("Clicked!"); }`.
2. Attach event using `<button onClick={handleClick}>Click Me</button>`.

### **Using React Router for Navigation**

1. Install React Router using `npm install react-router-dom`.
2. Define routes using `<Route path="/about" element={<About />} />`.
3. Navigate using `<Link to="/about">Go to About</Link>`.

---

## 💡 Examples

```jsx
// React Component Example
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Using the component
<Greeting name="React" />
```

---

## 📚 References

- **[React Cheat Sheet - GeeksforGeeks](https://www.geeksforgeeks.org/react-cheat-sheet/)**
- **[2025 React Cheatsheet - SheCodes](https://www.shecodes.io/cheatsheets/react)**

```
<!-- end list -->
```
