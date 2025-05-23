title: Vim Cheatsheet

category: Text Editing
description: A quick reference guide for essential Vim commands, shortcuts, and workflows for efficient text editing in Linux.

---

## 🛠️ Commands

### **Basic Navigation & Shortcuts**

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `vim filename` | Open file for editing in Vim |
| `:q`           | Quit Vim                     |
| `:w`           | Save the current file        |
| `:wq`          | Save and quit Vim            |
| `:q!`          | Quit without saving          |

### **Editing & Formatting**

| Command | Description                            |
| ------- | -------------------------------------- |
| `i`   | Insert mode before the cursor          |
| `a`   | Insert mode after the cursor           |
| `o`   | Open a new line below the current line |
| `O`   | Open a new line above the current line |
| `dd`  | Delete the current line                |
| `yy`  | Copy the current line                  |
| `p`   | Paste copied or deleted text           |

### **Navigation & Selection**

| Command      | Description                     |
| ------------ | ------------------------------- |
| `h`        | Move cursor left                |
| `l`        | Move cursor right               |
| `j`        | Move cursor down                |
| `k`        | Move cursor up                  |
| `gg`       | Go to the beginning of the file |
| `G`        | Go to the end of the file       |
| `Ctrl + d` | Scroll down half a page         |
| `Ctrl + u` | Scroll up half a page           |

### **Search & Replace**

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `/text`         | Search for "text" in the file               |
| `?text`         | Search backward for "text"                  |
| `n`             | Repeat last search forward                  |
| `N`             | Repeat last search backward                 |
| `:%s/old/new/g` | Replace all occurrences of "old" with "new" |

### **Undo & Redo**

| Command      | Description             |
| ------------ | ----------------------- |
| `u`        | Undo last action        |
| `Ctrl + r` | Redo last undone action |

### **Visual Mode & Selection**

| Command      | Description                     |
| ------------ | ------------------------------- |
| `v`        | Enter visual mode for selection |
| `V`        | Select entire lines             |
| `Ctrl + v` | Enter block selection mode      |

---

## 🔄 Workflows

### **Opening & Editing a File**

1. Open Vim:
   ```shell
   vim filename.txt
   ```
2. Edit the text using navigation and formatting commands.
3. Save the file (`:w`) and exit (`:q`).

### **Searching & Replacing Text**

1. Press `/` and type the search term.
2. Press `Enter` to search forward.
3. Use `:%s/old/new/g` to replace all occurrences.

### **Undo & Redo Changes**

1. Press `u` to undo the last action.
2. Press `Ctrl + r` to redo the last undone action.

---

## 💡 Examples

```shell
# Open a file for editing
vim myfile.txt

# Save changes and exit
:wq

# Search for "Linux" in the document
/Linux
```

---

## 📚 References

- **Vim Cheat Sheet & Quick Reference**: [QuickRef](https://quickref.me/vim.html)
- **Vim Commands & Shortcuts**: [Vim.rtorr](https://vim.rtorr.com/)

```
<!-- end list -->
```
