title: Vi Cheatsheet

category: Text Editing
description: A quick reference guide for essential Vi commands, shortcuts, and workflows for efficient text editing in Linux.

---

## 🛠️ Commands

### **Basic Vi Navigation**

| Command           | Description         |
| ----------------- | ------------------- |
| `vi filename`   | Open a file in Vi   |
| `:w`            | Save the file       |
| `:q`            | Quit Vi             |
| `:wq` or `ZZ` | Save and exit       |
| `:q!`           | Exit without saving |

### **Cursor Movement**

| Command | Description                       |
| ------- | --------------------------------- |
| `h`   | Move left                         |
| `l`   | Move right                        |
| `j`   | Move down                         |
| `k`   | Move up                           |
| `w`   | Move forward one word             |
| `b`   | Move backward one word            |
| `0`   | Move to the beginning of the line |
| `$`   | Move to the end of the line       |
| `gg`  | Move to the first line            |
| `G`   | Move to the last line             |

### **Editing & Deleting**

| Command      | Description                         |
| ------------ | ----------------------------------- |
| `i`        | Insert before the cursor            |
| `a`        | Append after the cursor             |
| `o`        | Open a new line below               |
| `O`        | Open a new line above               |
| `x`        | Delete a character                  |
| `dd`       | Delete the current line             |
| `d$`       | Delete to the end of the line       |
| `d0`       | Delete to the beginning of the line |
| `u`        | Undo last action                    |
| `Ctrl + r` | Redo last action                    |

### **Copy & Paste**

| Command | Description                 |
| ------- | --------------------------- |
| `yy`  | Copy (yank) a line          |
| `yw`  | Copy a word                 |
| `y$`  | Copy to the end of the line |
| `p`   | Paste below the cursor      |
| `P`   | Paste above the cursor      |

### **Search & Replace**

| Command           | Description                                     |
| ----------------- | ----------------------------------------------- |
| `/pattern`      | Search forward for a pattern                    |
| `?pattern`      | Search backward for a pattern                   |
| `n`             | Repeat last search forward                      |
| `N`             | Repeat last search backward                     |
| `:%s/old/new/g` | Replace all occurrences of `old` with `new` |
| `:s/old/new/g`  | Replace occurrences in the current line         |

---

## 🔄 Workflows

### **Editing a File Efficiently**

1. Open a file using `vi filename`.
2. Navigate using `h`, `j`, `k`, `l`.
3. Edit text using `i`, `a`, `o`.
4. Save changes using `:wq`.

### **Copying & Pasting Text**

1. Yank a line using `yy`.
2. Move to the desired location.
3. Paste using `p` or `P`.

### **Searching & Replacing Text**

1. Search for a word using `/pattern`.
2. Replace text using `:%s/old/new/g`.
3. Confirm changes and save using `:w`.

---

## 💡 Examples

```sh
# Open a file in Vi
vi myfile.txt

# Delete a word
dw

# Replace all occurrences of "foo" with "bar"
:%s/foo/bar/g
```

---

## 📚 References

- **[Vi Cheat Sheet](https://ryanstutorials.net/linuxtutorial/cheatsheetvi.php)**
- **[Vim Cheat Sheet](https://vim.rtorr.com/)**
- **[Basic Vi Commands](https://www.thegeekdiary.com/basic-vi-commands-cheat-sheet/)**

```
<!-- end list -->
```
