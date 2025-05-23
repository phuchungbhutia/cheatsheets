title: Cat Command in Shell Cheatsheet

category: Text Processing
description: A quick reference guide for essential `cat` command usage in Linux shell for viewing, creating, and manipulating files.

---

## 🛠️ Commands

### **Basic File Operations**

| Command                     | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| `cat filename.txt`        | Display the contents of a file                       |
| `cat file1.txt file2.txt` | Concatenate multiple files and display output        |
| `cat > newfile.txt`       | Create a new file and add content (Ctrl + D to save) |
| `cat >> existingfile.txt` | Append content to an existing file                   |

### **Advanced File Manipulation**

| Command                 | Description                            |
| ----------------------- | -------------------------------------- |
| `cat -n filename.txt` | Display file content with line numbers |
| `cat -b filename.txt` | Number only non-empty lines            |
| `cat -s filename.txt` | Remove repeated empty lines            |
| `cat -E filename.txt` | Show `$` at the end of each line     |
| `cat -T filename.txt` | Display tab characters as `^I`       |

### **Redirecting Output**

| Command                        | Description                             |
| ------------------------------ | --------------------------------------- |
| `cat file1.txt > file2.txt`  | Copy content from one file to another   |
| `cat file1.txt >> file2.txt` | Append content from one file to another |
| `cat filename.txt              | more`                                   |
| `cat filename.txt              | less`                                   |

### **Combining Files & Streams**

| Command                                  | Description                               |
| ---------------------------------------- | ----------------------------------------- |
| `cat file1.txt file2.txt > merged.txt` | Merge multiple files into one             |
| `cat < filename.txt`                   | Read file content using input redirection |
| `cat filename.txt                        | grep "keyword"`                           |
| `cat filename.txt                        | sort`                                     |

---

## 🔄 Workflows

### **Creating & Viewing Files**

1. Use `cat > newfile.txt` to create a file.
2. Enter text and press `Ctrl + D` to save.
3. View the file using `cat newfile.txt`.

### **Appending & Merging Files**

1. Append content using `cat >> existingfile.txt`.
2. Merge files using `cat file1.txt file2.txt > merged.txt`.
3. Verify merged content using `cat merged.txt`.

### **Filtering & Formatting Output**

1. Use `cat -n filename.txt` to add line numbers.
2. Remove empty lines using `cat -s filename.txt`.
3. Highlight end-of-line characters using `cat -E filename.txt`.

---

## 💡 Examples

```sh
# Create a new file and add content
cat > notes.txt
Hello, this is a test file.
Ctrl + D

# View file content with line numbers
cat -n notes.txt

# Merge two files into one
cat file1.txt file2.txt > combined.txt
```

---

## 📚 References

- **[Cat Command Guide](https://www.golinuxcloud.com/cat-command-examples/)**
- **[Linux Cat Command Cheatsheet](https://onecompiler.com/cheatsheets/cat)**

```
<!-- end list -->
```
