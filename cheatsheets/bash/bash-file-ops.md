title: Bash File Operations
category: Bash
description: Common Bash commands for managing files and directories.

---

## 🛠️ Commands

| Command                   | Description                                       |
| ------------------------- | ------------------------------------------------- |
| `ls -l`                 | Lists directory contents in long format.          |
| `pwd`                   | Prints the current working directory.             |
| `cd `                   | Changes directory to ``.                          |
| `mkdir `                | Creates a new directory.                          |
| `rm `                   | Removes a file.                                   |
| `rm -r `                | Recursively removes a directory and its contents. |
| `cp  `                  | Copies files or directories.                      |
| `mv  `                  | Moves or renames files/directories.               |
| `cat `                  | Concatenates and displays file content.           |
| `grep "pattern" `       | Searches for patterns in files.                   |
| `find  -name "pattern"` | Searches for files in a directory hierarchy.      |

## 🔄 Workflows

### 1. Creating a new directory and moving a file

1. `mkdir my_new_folder`
2. `mv old_file.txt my_new_folder/`
3. `cd my_new_folder`
4. `ls` (to verify `old_file.txt` is there)

### 2. Searching for files

1. `find . -name "*.log"` (Find all log files in current dir and subdirs)
2. `grep -r "error" /var/log` (Search for "error" in all files under /var/log)

## 💡 Examples

```bash
# List all files and hidden files, including details
ls -la

# Create a new directory and navigate into it
mkdir projects/my_app && cd projects/my_app

# Copy a file to another location
cp report.txt /tmp/backup_report.txt

# Move a file (rename it)
mv old_name.log new_name.log

# Delete a directory recursively
rm -rf unused_assets/

# View content of a file
cat /etc/hosts
```

## 📚 References

<!-- end list -->