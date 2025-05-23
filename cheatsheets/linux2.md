title: Linux Cheatsheet

category: Linux
description: A quick reference guide for essential Linux commands, workflows, and examples for managing Linux systems efficiently.

---

## 🛠️ Commands

| Command                          | Description                                         |
| -------------------------------- | --------------------------------------------------- |
| `pwd`                          | Print working directory                             |
| `ls -lh`                       | List files in a directory with human-readable sizes |
| `cd [dir]`                     | Change directory                                    |
| `mkdir [name]`                 | Create a new directory                              |
| `rm [file]`                    | Remove a file                                       |
| `rm -r [dir]`                  | Remove a directory                                  |
| `cp [src] [dest]`              | Copy files or directories                           |
| `mv [src] [dest]`              | Move or rename a file                               |
| `touch [file]`                 | Create a new empty file                             |
| `echo [text]`                  | Print text to terminal                              |
| `cat [file]`                   | Display file contents                               |
| `grep [pattern] [file]`        | Search for a pattern in a file                      |
| `chmod [permissions] [file]`   | Change file permissions                             |
| `chown [user:group] [file]`    | Change file owner                                   |
| `find [dir] -name [pattern]`   | Search for files in a directory                     |
| `tar -cvf [archive.tar] [dir]` | Create a tar archive                                |
| `tar -xvf [archive.tar]`       | Extract a tar archive                               |
| `wget [URL]`                   | Download a file                                     |
| `curl -O [URL]`                | Download using curl                                 |
| `ps aux`                       | View running processes                              |
| `kill [PID]`                   | Terminate a process                                 |
| `top`                          | Show system resource usage                          |
| `uname -r`                     | Show kernel version                                 |
| `df -h`                        | Show disk space usage                               |
| `du -sh [dir]`                 | Show directory size                                 |
| `free -h`                      | Show system memory usage                            |
| `reboot`                       | Restart the system                                  |
| `shutdown -h now`              | Shut down the system immediately                    |

---

## 🔄 Workflows

### **Basic File Management**

1. Navigate to the target directory:
   ```bash
   cd /path/to/directory
   ```
2. List files:
   ```bash
   ls -lh
   ```
3. Create a directory:
   ```bash
   mkdir new_folder
   ```
4. Move a file:
   ```bash
   mv old_file.txt new_folder/
   ```
5. Remove a file:
   ```bash
   rm old_file.txt
   ```

### **User & Permission Management**

1. Add a new user:
   ```bash
   sudo adduser newuser
   ```
2. Change file permissions:
   ```bash
   chmod 755 script.sh
   ```
3. Change file ownership:
   ```bash
   chown user:usergroup myfile.txt
   ```

### **System Monitoring**

1. View system resource usage:
   ```bash
   top
   ```
2. Check disk space usage:
   ```bash
   df -h
   ```
3. Monitor memory usage:
   ```bash
   free -h
   ```

---

## 💡 Examples

```bash
# Print "Hello, World!"
echo "Hello, World!"

# Loop through files
for file in *.txt; do
  echo "Processing $file"
done

# Search for "error" in logs
grep "error" /var/log/syslog
```

---

## 📚 References

- **GNU Linux Command Guide**: [https://linuxcommand.org/](https://linuxcommand.org/)
- **The Linux Documentation Project**: [https://www.tldp.org/](https://www.tldp.org/)
- **Linux Kernel Documentation**: [https://www.kernel.org/doc/html/latest/](https://www.kernel.org/doc/html/latest/)

```
<!-- end list -->
```
