title: TTY Cheatsheet

category: Terminal
description: A quick reference guide for essential TTY commands, shell stabilization techniques, and interactive shell upgrades.

---

## 🛠️ Commands

### **Basic TTY Operations**

| Command | Description                                  |
| ------- | -------------------------------------------- |
| `tty` | Display the current terminal device name     |
| `who` | Show logged-in users and their TTY sessions  |
| `w`   | Display active users and system load         |
| `ps aux | grep tty`                                    |
| `fg`  | Bring a background process to the foreground |

### **Obtaining a TTY Shell**

| Command                                            | Description                     |
| -------------------------------------------------- | ------------------------------- |
| `python -c 'import pty; pty.spawn("/bin/bash")'` | Spawn a TTY shell using Python  |
| `perl -e 'exec "/bin/bash";'`                    | Spawn a TTY shell using Perl    |
| `ruby -e 'exec "/bin/bash"'`                     | Spawn a TTY shell using Ruby    |
| `lua -e 'os.execute("/bin/bash")'`               | Spawn a TTY shell using Lua     |
| `/bin/bash -i`                                   | Start an interactive Bash shell |

### **Upgrading to a Fully Interactive Shell**

| Command                        | Description                                  |
| ------------------------------ | -------------------------------------------- |
| `Ctrl + Z`                   | Suspend the current shell process            |
| `stty raw -echo`             | Set terminal settings for better interaction |
| `fg`                         | Resume the shell process                     |
| `export TERM=xterm-256color` | Set terminal type for better compatibility   |
| `stty rows 40 columns 100`   | Adjust terminal size manually                |

### **Managing TTY Sessions**

| Command       | Description                       |
| ------------- | --------------------------------- |
| `tty`       | Show the current terminal session |
| `logout`    | Log out from the current session  |
| `exit`      | Close the current shell session   |
| `reset`     | Reset the terminal display        |
| `stty sane` | Restore default terminal settings |

---

## 🔄 Workflows

### **Obtaining a TTY Shell**

1. Use `python -c 'import pty; pty.spawn("/bin/bash")'` to spawn a TTY shell.
2. If Python is unavailable, try `perl -e 'exec "/bin/bash";'`.
3. Use `/bin/bash -i` for an interactive shell session.

### **Upgrading to a Fully Interactive Shell**

1. Suspend the shell using `Ctrl + Z`.
2. Set terminal settings using `stty raw -echo`.
3. Resume the shell using `fg`.
4. Set terminal type using `export TERM=xterm-256color`.

### **Managing TTY Sessions**

1. Check the current session using `tty`.
2. Log out using `logout` or `exit`.
3. Reset the terminal using `reset`.

---

## 💡 Examples

```sh
# Spawn a TTY shell using Python
python -c 'import pty; pty.spawn("/bin/bash")'

# Upgrade to a fully interactive shell
Ctrl + Z
stty raw -echo
fg
export TERM=xterm-256color

# Reset terminal settings
stty sane
```

---

## 📚 References

- **[Linux TTY Shell Cheat Sheet](https://steflan-security.com/linux-tty-shell-cheat-sheet/)**
- **[Reverse Shell TTY Cheat Sheet](https://github.com/RoqueNight/Reverse-Shell-TTY-Cheat-Sheet)**
- **[Linux TTY Command Guide](https://www.howtoforge.com/linux-tty-command/)**

```
<!-- end list -->
```
