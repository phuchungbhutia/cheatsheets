title: Nano Cheatsheet

category: Text Editing
description: A quick reference guide for essential Nano commands, shortcuts, and workflows for efficient text editing in Linux.

---

## 🛠️ Commands

### **Basic Navigation & Shortcuts**

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `nano filename` | Open file for editing in Nano |
| `Ctrl + X`      | Exit Nano                     |
| `Ctrl + S`      | Save the current file         |
| `Ctrl + O`      | Save as (write file)          |
| `Ctrl + G`      | Display help text             |

### **Editing & Formatting**

| Command      | Description                             |
| ------------ | --------------------------------------- |
| `Ctrl + K` | Cut the current line                    |
| `Ctrl + U` | Paste the cut text                      |
| `Ctrl + W` | Search for text                         |
| `Ctrl + R` | Insert a file into the current document |
| `Ctrl + T` | Run a spell check                       |

### **Navigation & Selection**

| Command      | Description                              |
| ------------ | ---------------------------------------- |
| `Ctrl + A` | Move cursor to the beginning of the line |
| `Ctrl + E` | Move cursor to the end of the line       |
| `Ctrl + Y` | Scroll up one page                       |
| `Ctrl + V` | Scroll down one page                     |
| `Ctrl + _` | Go to a specific line                    |

### **Undo & Redo**

| Command     | Description             |
| ----------- | ----------------------- |
| `Alt + U` | Undo last action        |
| `Alt + E` | Redo last undone action |

### **Case Conversion & Formatting**

| Command     | Description                        |
| ----------- | ---------------------------------- |
| `Alt + U` | Convert selected text to uppercase |
| `Alt + L` | Convert selected text to lowercase |
| `Alt + 6` | Copy selected text                 |

---

## 🔄 Workflows

### **Opening & Editing a File**

1. Open Nano:
   ```shell
   nano filename.txt
   ```
2. Edit the text using navigation and formatting commands.
3. Save the file (`Ctrl + O`) and exit (`Ctrl + X`).

### **Searching & Replacing Text**

1. Press `Ctrl + W` to search for text.
2. Enter the search term and press `Enter`.
3. Use `Ctrl + \` to replace text.

### **Undo & Redo Changes**

1. Press `Alt + U` to undo the last action.
2. Press `Alt + E` to redo the last undone action.

---

## 💡 Examples

```shell
# Open a file for editing
nano myfile.txt

# Save changes and exit
Ctrl + O -> Enter -> Ctrl + X

# Search for "Linux" in the document
Ctrl + W -> Type "Linux" -> Enter
```

---

## 📚 References

- **Nano Cheat Sheet [Free PDF Download]**: [LinuxSimply](https://linuxsimply.com/cheat-sheets/nano/)
- **Editing Files With Nano in Linux**: [It&#39;s FOSS](https://itsfoss.com/content/files/2023/01/Nano-Cheat-Sheet.pdf)
- **GNU Nano Official Cheatsheet**: [Nano Editor](https://www.nano-editor.org/dist/latest/cheatsheet.html)

```
<!-- end list -->
```
