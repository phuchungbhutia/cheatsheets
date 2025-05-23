title: Sudo Cheatsheet

category: Linux
description: A quick reference guide for essential Sudo commands, options, and workflows for executing commands with elevated privileges in Linux.

---

## 🛠️ Commands

### **Basic Sudo Operations**

| Command                  | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| `sudo command`         | Run a command as root                                      |
| `sudo -i`              | Start an interactive root shell                            |
| `sudo -s`              | Run the shell specified by the user's environment          |
| `sudo -u user command` | Run a command as a different user                          |
| `sudo -k`              | Invalidate cached credentials (require password next time) |

### **Managing User Privileges**

| Command                            | Description                             |
| ---------------------------------- | --------------------------------------- |
| `sudo -l`                        | List the current user's sudo privileges |
| `sudo visudo`                    | Edit the sudoers file securely          |
| `sudo adduser username`          | Add a new user to the system            |
| `sudo usermod -aG sudo username` | Grant sudo privileges to a user         |
| `sudo passwd root`               | Set or change the root password         |

### **Advanced Sudo Usage**

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `sudo !!`         | Run the last command with sudo                       |
| `sudo -v`         | Refresh sudo credentials without executing a command |
| `sudo -H command` | Run a command with the target user's home directory  |
| `sudo -b command` | Run a command in the background                      |
| `sudo -E command` | Preserve the user's environment variables            |

### **Troubleshooting & Security**

| Command                   | Description                                |
| ------------------------- | ------------------------------------------ |
| `sudo -K`               | Remove cached credentials completely       |
| `sudo -g group command` | Run a command as a specific group          |
| `sudo -p "Password: "`  | Customize the password prompt              |
| `sudo -C 5 command`     | Limit the number of password attempts to 5 |
| `sudo -r role command`  | Run a command with a specific SELinux role |

---

## 🔄 Workflows

### **Granting Sudo Privileges to a User**

1. Add the user using `sudo adduser username`.
2. Grant sudo access using `sudo usermod -aG sudo username`.
3. Verify privileges using `sudo -l`.

### **Running a Command as Another User**

1. Use `sudo -u username command` to execute a command as a different user.
2. Use `sudo -g group command` to run a command as a specific group.

### **Editing the Sudoers File Securely**

1. Open the sudoers file using `sudo visudo`.
2. Add a new rule (`username ALL=(ALL) ALL`).
3. Save and exit (`Ctrl+X`, `Y`, `Enter`).

---

## 💡 Examples

```sh
# Run a command as root
sudo apt update

# Grant sudo privileges to a user
sudo usermod -aG sudo username

# Edit the sudoers file securely
sudo visudo
```

---

## 📚 References

- **[Sudo Command Cheat Sheet](https://www.golinuxcloud.com/sudo-command-in-linux/)**
- **[Sudo Configuration Guide](https://opensource.com/sites/default/files/2022-05/OSDC_cheatsheet-sudo-2022.4.27.pdf)**

```
<!-- end list -->
```
