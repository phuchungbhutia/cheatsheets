title: Tree Cheatsheet

category: Linux
description: A quick reference guide for using the `tree` command to visualize directory structures, list files, and customize output formatting.

---

## 🛠️ Command Breakdown

| Command       | Description                                |
| ------------- | ------------------------------------------ |
| `tree`      | Display directory structure in tree format |
| `tree -d`   | Show directories only                      |
| `tree -a`   | Include hidden files                       |
| `tree -L 2` | Limit depth to 2 levels                    |
| `tree -f`   | Show full file paths                       |

### **Filtering & Sorting**

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `tree -I "*.log"` | Exclude files matching a pattern |
| `tree -t`         | Sort by last modification time   |
| `tree -s`         | Show file sizes                  |
| `tree -u`         | Display file owner               |
| `tree -g`         | Display file group               |

### **Advanced Usage**

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `tree -C`         | Enable colored output           |
| `tree -X`         | Export output as XML            |
| `tree -J`         | Export output as JSON           |
| `tree -H .`       | Generate an HTML representation |
| `tree --noreport` | Hide summary report at the end  |

---

## 🔄 Workflows

### **Visualizing Directory Structures**

1. Run `tree` to display the current directory structure.
2. Use `tree -L 2` to limit depth for better readability.
3. Enable colors using `tree -C`.

### **Filtering & Customizing Output**

1. Exclude specific files using `tree -I "*.log"`.
2. Sort files by modification time using `tree -t`.
3. Show file sizes using `tree -s`.

### **Exporting Directory Structures**

1. Generate an HTML tree using `tree -H .`.
2. Export as JSON using `tree -J`.
3. Save output to a file using `tree > directory_structure.txt`.

---

## 💡 Examples

```bash
# Example: Display directory structure with full paths
tree -f
```

```bash
# Example: Show only directories up to 3 levels deep
tree -d -L 3
```

```bash
# Example: Export directory structure as JSON
tree -J > structure.json
```

---

## 📚 References

- **[Tree Command in Linux - GeeksforGeeks](https://www.geeksforgeeks.org/tree-command-unixlinux/)**
- **[Tree Command in Linux - LinuxSimply](https://linuxsimply.com/tree-command-in-linux/)**

```
<!-- end list -->
```
