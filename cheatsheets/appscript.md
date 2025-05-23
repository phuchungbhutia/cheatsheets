title: Google Apps Script Cheatsheet

category: Google
description: A quick reference guide for essential Google Apps Script commands, functions, and best practices for automating Google Workspace applications.

---

## 🛠️ Commands

### **Basic Apps Script Operations**

| Command                                    | Description                |
| ------------------------------------------ | -------------------------- |
| `function myFunction() {}`               | Define a function          |
| `Logger.log("Hello, World!");`           | Print output to logs       |
| `SpreadsheetApp.getActiveSpreadsheet();` | Access active Google Sheet |
| `DocumentApp.getActiveDocument();`       | Access active Google Doc   |

### **Working with Google Sheets**

| Command                                          | Description             |
| ------------------------------------------------ | ----------------------- |
| `var sheet = SpreadsheetApp.getActiveSheet();` | Get active sheet        |
| `sheet.getRange("A1").setValue("Hello");`      | Set value in a cell     |
| `var data = sheet.getDataRange().getValues();` | Get all data from sheet |

### **Working with Google Drive**

| Command                                                           | Description             |
| ----------------------------------------------------------------- | ----------------------- |
| `var files = DriveApp.getFiles();`                              | List all files in Drive |
| `var folder = DriveApp.getFolderById("folderId");`              | Get folder by ID        |
| `var file = DriveApp.createFile("NewFile.txt", "Hello World");` | Create a new file       |

### **Working with Gmail**

| Command                                                             | Description                |
| ------------------------------------------------------------------- | -------------------------- |
| `var threads = GmailApp.getInboxThreads();`                       | Get inbox threads          |
| `var messages = threads[0].getMessages();`                        | Get messages from a thread |
| `GmailApp.sendEmail("recipient@example.com", "Subject", "Body");` | Send an email              |

### **Triggers & Automation**

| Command                                                                    | Description                 |
| -------------------------------------------------------------------------- | --------------------------- |
| `ScriptApp.newTrigger("myFunction").timeBased().everyHours(1).create();` | Create a time-based trigger |
| `ScriptApp.getProjectTriggers();`                                        | List all triggers           |
| `ScriptApp.deleteTrigger(trigger);`                                      | Delete a trigger            |

---

## 🔄 Workflows

### **Automating Google Sheets**

1. Open Google Sheets and go to **Extensions > Apps Script**.
2. Write a script to modify sheet data (`getRange().setValue()`).
3. Set up a trigger to run the script automatically.

### **Sending Automated Emails**

1. Use `GmailApp.sendEmail()` to send emails.
2. Fetch inbox messages using `GmailApp.getInboxThreads()`.
3. Automate responses using triggers.

### **Managing Google Drive Files**

1. Use `DriveApp.getFiles()` to list files.
2. Create new files using `DriveApp.createFile()`.
3. Organize files into folders using `DriveApp.getFolderById()`.

---

## 💡 Examples

```javascript
// Example: Send an automated email
function sendEmail() {
  GmailApp.sendEmail("recipient@example.com", "Hello!", "This is an automated email.");
}
```

---

## 📚 References

- **[Google Apps Script Fundamentals](https://developers.google.com/codelabs/apps-script-fundamentals-1)**
- **[JavaScript for Apps Script Cheat Sheet](https://basescripts.com/wp-content/uploads/2024/03/Cheat-Sheet-JavaScript-for-Apps-Script.pdf)**
- **[Google Apps Script &amp; Clasp Cheatsheet](https://docs.joshuatz.com/cheatsheets/google-apps-scripts/)**

```
<!-- end list -->
```
