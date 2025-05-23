title: Node.js Cheatsheet

category: Node.js
description: A quick reference guide for essential Node.js commands, workflows, and examples for efficient backend development.

---

## 🛠️ Commands

### **Node.js Basics**

| Command                     | Description                      |
| --------------------------- | -------------------------------- |
| `node -v`                 | Check Node.js version            |
| `node filename.js`        | Run a Node.js script             |
| `npm init`                | Initialize a new Node.js project |
| `npm install [package]`   | Install a package                |
| `npm uninstall [package]` | Remove a package                 |
| `npm update`              | Update installed packages        |
| `npm list`                | List installed packages          |

### **Modules & Packages**

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `require('module')`   | Import a module                          |
| `module.exports = {}` | Export a module                          |
| `npm install express` | Install Express.js framework             |
| `npm install dotenv`  | Install dotenv for environment variables |

### **File System Operations**

| Command                                   | Description                   |
| ----------------------------------------- | ----------------------------- |
| `fs.readFileSync('file.txt', 'utf8')`   | Read a file synchronously     |
| `fs.writeFileSync('file.txt', 'Hello')` | Write to a file synchronously |
| `fs.unlinkSync('file.txt')`             | Delete a file                 |

### **HTTP Server**

| Command                                               | Description           |
| ----------------------------------------------------- | --------------------- |
| `http.createServer((req, res) => {...})`            | Create an HTTP server |
| `res.writeHead(200, {'Content-Type': 'text/html'})` | Set response headers  |
| `res.end('Hello, World!')`                          | Send response         |

### **Process & Environment Variables**

| Command                       | Description                  |
| ----------------------------- | ---------------------------- |
| `process.env.VARIABLE_NAME` | Access environment variables |
| `process.exit(0)`           | Exit the process             |
| `process.argv`              | Get command-line arguments   |

---

## 🔄 Workflows

### **Creating a Simple HTTP Server**

1. Import the required module:
   ```javascript
   const http = require('http');
   ```
2. Create the server:
   ```javascript
   const server = http.createServer((req, res) => {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Hello, World!');
   });
   ```
3. Start the server:
   ```javascript
   server.listen(3000, () => {
       console.log('Server running on port 3000');
   });
   ```

### **Reading & Writing Files**

1. Import the `fs` module:
   ```javascript
   const fs = require('fs');
   ```
2. Read a file:
   ```javascript
   const data = fs.readFileSync('file.txt', 'utf8');
   console.log(data);
   ```
3. Write to a file:
   ```javascript
   fs.writeFileSync('file.txt', 'Hello, Node.js!');
   ```

---

## 💡 Examples

```javascript
// Import a module
const os = require('os');
console.log(os.platform());

// Read environment variables
console.log(process.env.NODE_ENV);

// Create an Express server
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, Express!'));
app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 📚 References

- **Node.js Cheat Sheet**: [Zero To Mastery](https://zerotomastery.io/cheatsheets/node-js-cheat-sheet/)
- **Complete Node.js Cheatsheet**: [GitHub Gist](https://gist.github.com/LeCoupa/985b82968d8285987dc3)
- **Node.js Tutorials**: [TutorialsPoint](https://www.tutorialspoint.com/nodejs/nodejs_cheatsheet.htm)

```
<!-- end list -->
```
