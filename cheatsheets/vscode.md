title: VSCode Cheatsheet

category: Visual Studio Code
description: A quick reference guide for essential VSCode commands, shortcuts, and features for efficient coding and development.

---

## 🛠️ Commands

### **Basic Navigation & Shortcuts**

| Command               | Description              |
| --------------------- | ------------------------ |
| `Ctrl + Shift + P`  | Open Command Palette     |
| `Ctrl + P`          | Quick Open (Go to File)  |
| `Ctrl + Shift + N`  | Open a new window        |
| `Ctrl + Shift + W`  | Close the current window |
| `Ctrl + ,`          | Open User Settings       |
| `Ctrl + K Ctrl + S` | Open Keyboard Shortcuts  |

### **Editing & Formatting**

| Command                   | Description                 |
| ------------------------- | --------------------------- |
| `Ctrl + X`              | Cut line (empty selection)  |
| `Ctrl + C`              | Copy line (empty selection) |
| `Alt + ↑ / ↓`         | Move line up/down           |
| `Shift + Alt + ↑ / ↓` | Copy line up/down           |
| `Ctrl + Shift + K`      | Delete line                 |
| `Ctrl + Enter`          | Insert line below           |
| `Ctrl + Shift + Enter`  | Insert line above           |
| `Ctrl + Shift + \`      | Jump to matching bracket    |
| `Ctrl + ] / [`          | Indent/outdent line         |
| `Ctrl + Space`          | Trigger suggestion          |
| `Shift + Alt + F`       | Format document             |

### **Multi-Cursor & Selection**

| Command                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| `Alt + Click`          | Insert cursor                               |
| `Ctrl + Alt + ↑ / ↓` | Insert cursor above/below                   |
| `Ctrl + U`             | Undo last cursor operation                  |
| `Shift + Alt + I`      | Insert cursor at end of each line selected  |
| `Ctrl + L`             | Select current line                         |
| `Ctrl + Shift + L`     | Select all occurrences of current selection |
| `Ctrl + F2`            | Select all occurrences of current word      |
| `Shift + Alt + →`     | Expand selection                            |
| `Shift + Alt + ←`     | Shrink selection                            |

### **Search & Replace**

| Command               | Description                            |
| --------------------- | -------------------------------------- |
| `Ctrl + F`          | Find                                   |
| `Ctrl + H`          | Replace                                |
| `F3 / Shift + F3`   | Find next/previous                     |
| `Alt + Enter`       | Select all occurrences of Find match   |
| `Ctrl + D`          | Add selection to next Find match       |
| `Ctrl + K Ctrl + D` | Move last selection to next Find match |

### **File & Project Management**

| Command               | Description          |
| --------------------- | -------------------- |
| `Ctrl + N`          | New file             |
| `Ctrl + O`          | Open file            |
| `Ctrl + S`          | Save file            |
| `Ctrl + Shift + S`  | Save As              |
| `Ctrl + K S`        | Save All             |
| `Ctrl + F4`         | Close file           |
| `Ctrl + K Ctrl + W` | Close all files      |
| `Ctrl + Shift + T`  | Reopen closed editor |

### **Terminal & Debugging**

| Command              | Description          |
| -------------------- | -------------------- |
| `Ctrl + ~`         | Toggle terminal      |
| `Ctrl + Shift + C` | Copy terminal output |
| `F5`               | Start debugging      |
| `Shift + F5`       | Stop debugging       |
| `F9`               | Toggle breakpoint    |
| `F10`              | Step over            |
| `F11`              | Step into            |
| `Shift + F11`      | Step out             |

---

## 🔄 Workflows

### **Opening & Managing Files**

1. Press `Ctrl + P` to open Quick Open.
2. Type the filename and press `Enter`.
3. Use `Ctrl + Tab` to switch between open files.

### **Using Multi-Cursor Editing**

1. Hold `Alt` and click to insert multiple cursors.
2. Use `Ctrl + Alt + ↑ / ↓` to add cursors above/below.
3. Press `Ctrl + Shift + L` to select all occurrences of a word.

### **Debugging a Program**

1. Open the Debug panel (`Ctrl + Shift + D`).
2. Set breakpoints using `F9`.
3. Start debugging with `F5`.
4. Step through the code using `F10` and `F11`.

---

## 💡 Examples

```json
// VSCode settings.json example
{
    "editor.tabSize": 4,
    "editor.formatOnSave": true,
    "files.autoSave": "afterDelay"
}
```

---

## 📚 References

- **VSCode Keyboard Shortcuts (Windows)**: [Official PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- **VSCode Quick Reference**: [QuickRef](https://quickref.me/vscode.html)
- **VSCode Shortcuts & Cheat Sheet**: [Crio Blog](https://www.crio.do/blog/vs-code-shortcuts/)

```
<!-- end list -->
```
