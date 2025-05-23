title: Bash Cheatsheet

category: Bash
description: A quick reference guide for essential Bash commands, workflows, and examples to improve efficiency in shell scripting and command-line usage.

---

## 🛠️ Commands

| Command                          | Description                           |
| -------------------------------- | ------------------------------------- |
| `pwd`                          | Print working directory               |
| `ls`                           | List directory contents               |
| `cd [dir]`                     | Change directory                      |
| `mkdir [name]`                 | Create a new directory                |
| `rm [file]`                    | Remove a file                         |
| `rm -r [dir]`                  | Remove a directory                    |
| `cp [src] [dest]`              | Copy files or directories             |
| `mv [src] [dest]`              | Move or rename a file                 |
| `touch [file]`                 | Create a new empty file               |
| `echo [text]`                  | Print text to terminal                |
| `cat [file]`                   | Display file contents                 |
| `grep [pattern] [file]`        | Search for a pattern in a file        |
| `chmod [permissions] [file]`   | Change file permissions               |
| `chown [user:group] [file]`    | Change file owner                     |
| `find [dir] -name [pattern]`   | Search for files in a directory       |
| `tar -cvf [archive.tar] [dir]` | Create a tar archive                  |
| `tar -xvf [archive.tar]`       | Extract a tar archive                 |
| `wget [URL]`                   | Download a file from a URL            |
| `curl -O [URL]`                | Download using curl                   |
| `ps aux`                       | View running processes                |
| `kill [PID]`                   | Terminate a process by its Process ID |
| `top`                          | Show real-time system resource usage  |
| `history`                      | Show command history                  |
| `alias [name]='command'`       | Create a shortcut for a command       |
| `source [file]`                | Execute commands from a file          |
| `env`                          | Display environment variables         |

---

## 🔄 Workflows

### **Basic Navigation & File Management**

1. Navigate to the target directory:
   ```bash
   cd /path/to/directory
   ```
2. List all files in long format:
   ```bash
   ls -lh
   ```
3. Create a new directory:
   ```bash
   mkdir new_folder
   ```
4. Move a file to another directory:
   ```bash
   mv old_file.txt new_folder/
   ```
5. Remove a file permanently:
   ```bash
   rm old_file.txt
   ```

### **Script Creation & Execution**

1. Create a new Bash script file:
   ```bash
   nano script.sh
   ```
2. Add shebang at the top of the file:
   ```bash
   #!/bin/bash
   ```
3. Write commands inside the script. Example content:
   ```bash
   echo "Hello, this is my script!"
   ```
4. Save and exit (`Ctrl + X`, then `Y` and `Enter`).
5. Make the script executable:
   ```bash
   chmod +x script.sh
   ```
6. Run the script:
   ```bash
   ./script.sh
   ```

### **Process & System Monitoring**

1. Display currently running processes:
   ```bash
   ps aux
   ```
2. Find a specific process by name:
   ```bash
   ps aux | grep process_name
   ```
3. Kill a process by its ID:
   ```bash
   kill PID
   ```
4. Monitor real-time system performance:
   ```bash
   top
   ```

---

## 💡 Examples

```bash
# Print "Hello, World!" to the terminal
echo "Hello, World!"

# Loop through all .txt files in the current directory
for file in *.txt; do
  echo "Processing $file"
done

# Search for the word "error" in a log file
grep "error" /var/log/syslog

# Set an alias for clearing the screen
alias cls='clear'

# Display all available environment variables
env
```

---

## 📚 References

- **GNU Bash Manual**: [https://www.gnu.org/software/bash/manual/](https://www.gnu.org/software/bash/manual/)
- **Linux Command Guide**: [https://linuxcommand.org/](https://linuxcommand.org/)
- **Bash Scripting Guide**: [https://tldp.org/LDP/Bash-Beginners-Guide/html/](https://tldp.org/LDP/Bash-Beginners-Guide/html/)
- **Advanced Bash Scripting**: [http://www.tldp.org/LDP/abs/html/](http://www.tldp.org/LDP/abs/html/)

```
<!-- end list -->
```
