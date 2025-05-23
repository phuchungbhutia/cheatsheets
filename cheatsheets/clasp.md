title: Clasp Cheatsheet

category: Google
description: A quick reference guide for essential Clasp commands, authentication methods, and best practices for managing Google Apps Script projects from the command line.

---

## 🛠️ Commands

### **Basic Clasp Operations**

| Command                        | Description                           |
| ------------------------------ | ------------------------------------- |
| `clasp login`                | Authenticate with Google account      |
| `clasp logout`               | Log out of Clasp                      |
| `clasp create [scriptTitle]` | Create a new Apps Script project      |
| `clasp clone <scriptId>`     | Clone an existing Apps Script project |

### **Project Management**

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `clasp pull` | Download project files from Google Drive |
| `clasp push` | Upload local files to Google Drive       |
| `clasp open` | Open project in Apps Script editor       |
| `clasp list` | List all Apps Script projects            |

### **Deployment & Version Control**

| Command                      | Description                        |
| ---------------------------- | ---------------------------------- |
| `clasp deploy`             | Deploy the script                  |
| `clasp list --deployments` | List all deployments               |
| `clasp create-version`     | Create a new version of the script |

### **Advanced Features**

| Command                      | Description                      |
| ---------------------------- | -------------------------------- |
| `clasp run <functionName>` | Execute a function in the script |
| `clasp logs`               | View script execution logs       |
| `clasp tail`               | Stream real-time logs            |

---

## 🔄 Workflows

### **Setting Up Clasp for Local Development**

1. Install Clasp using `npm install -g @google/clasp`.
2. Authenticate using `clasp login`.
3. Create or clone an Apps Script project using `clasp create` or `clasp clone`.

### **Managing Apps Script Projects**

1. Pull the latest changes using `clasp pull`.
2. Edit files locally using a code editor.
3. Push updates using `clasp push`.

### **Deploying & Running Scripts**

1. Deploy the script using `clasp deploy`.
2. Run functions using `clasp run <functionName>`.
3. Monitor logs using `clasp logs`.

---

## 💡 Examples

```bash
# Create a new Apps Script project
clasp create "MyScript"

# Clone an existing project
clasp clone <scriptId>

# Push local changes to Google Drive
clasp push

# Deploy the script
clasp deploy
```

---

## 📚 References

- **[Google Apps Script &amp; Clasp Cheatsheet](https://docs.joshuatz.com/cheatsheets/google-apps-scripts/)**
- **[Clasp Guide - Google Developers](https://developers.google.com/apps-script/guides/clasp)**
- **[Clasp GitHub Repository](https://github.com/google/clasp/blob/master/README.md)**

```
<!-- end list -->
```
