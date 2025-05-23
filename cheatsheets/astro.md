title: Astro.js Cheatsheet

category: Javascript
description: A quick reference guide for essential Astro.js commands, component syntax, and best practices for building fast websites.

---

## 🛠️ Commands

### **Basic Astro.js Operations**

| Command                     | Description                          |
| --------------------------- | ------------------------------------ |
| `npm create astro@latest` | Install Astro.js                     |
| `npm install`             | Install dependencies                 |
| `npm run dev`             | Start local development server       |
| `npm run build`           | Generate static files for production |
| `npm run preview`         | Preview the production site locally  |

### **Project Structure**

| Folder               | Description                        |
| -------------------- | ---------------------------------- |
| `/public`          | Static files (images, fonts, etc.) |
| `/src/components`  | Reusable components                |
| `/src/pages`       | Application pages                  |
| `/src/layouts`     | Page layouts                       |
| `/src/styles`      | CSS styles                         |
| `astro.config.mjs` | Configuration file                 |

### **Astro Components & Syntax**

| Command                                                        | Description                     |
| -------------------------------------------------------------- | ------------------------------- |
| `--- const title = "Hello from Astro"; ---`                  | Define variables in frontmatter |
| `<h1>{title}</h1>`                                           | Use variables in HTML           |
| `import MyComponent from '../components/MyComponent.astro';` | Import components               |
| `<MyComponent name="Astro" />`                               | Use components with props       |

### **Routing & Dynamic Pages**

| Command                             | Description                   |
| ----------------------------------- | ----------------------------- |
| `src/pages/index.astro → /`      | Default homepage route        |
| `src/pages/about.astro → /about` | Static route                  |
| `src/pages/[id].astro`            | Dynamic route with parameters |

### **Styling in Astro**

| Command                                  | Description                      |
| ---------------------------------------- | -------------------------------- |
| `<style> h1 { color: blue; } </style>` | Local styles in Astro components |
| `import './src/styles/global.css';`    | Import global styles             |

### **Client-Side Scripts**

| Command                                  | Description                |
| ---------------------------------------- | -------------------------- |
| `<script src="/my-script.js" />`       | Load external JavaScript   |
| `<script defer src="/my-script.js" />` | Load script asynchronously |

---

## 🔄 Workflows

### **Setting Up an Astro Project**

1. Install Astro using `npm create astro@latest`.
2. Define project structure with `/src/pages`, `/src/components`, and `/src/layouts`.
3. Start development server using `npm run dev`.

### **Creating Components & Pages**

1. Define components using `.astro` files.
2. Import components using `import MyComponent from '../components/MyComponent.astro';`.
3. Use components in pages with `<MyComponent name="Astro" />`.

### **Deploying an Astro Site**

1. Build static files using `npm run build`.
2. Preview production site using `npm run preview`.
3. Deploy to hosting platforms like Vercel or Netlify.

---

## 💡 Examples

```astro
---
// Define variables
const title = "Welcome to Astro";
---
<h1>{title}</h1>
```

```astro
---
// Import component
import MyComponent from '../components/MyComponent.astro';
---
<MyComponent name="Astro" />
```

---

## 📚 References

- **[CheatSheet Astro - Luis Llamas](https://www.luisllamas.es/en/cheatsheet-astro/)**
- **[Astro.js Syntax Reference - Official Docs](https://docs.astro.build/en/reference/astro-syntax/)**
- **[Developer&#39;s Cheat Sheet Project - GitHub](https://github.com/TomFanHM/cheat-sheet)**

```
<!-- end list -->
```
