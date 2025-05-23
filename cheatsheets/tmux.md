title: Tmux Cheatsheet

category: Terminal
description: A quick reference guide for essential Tmux commands, shortcuts, and workflows for managing multiple terminal sessions efficiently.

---

## 🛠️ Commands

### **Basic Tmux Operations**

| Command                               | Description                     |
| ------------------------------------- | ------------------------------- |
| `tmux`                              | Start a new Tmux session        |
| `tmux new -s session_name`          | Create a named session          |
| `tmux attach -t session_name`       | Attach to an existing session   |
| `tmux detach`                       | Detach from the current session |
| `tmux kill-session -t session_name` | Kill a specific session         |

### **Managing Windows & Panes**

| Command          | Description                   |
| ---------------- | ----------------------------- |
| `Ctrl + B + C` | Create a new window           |
| `Ctrl + B + N` | Switch to the next window     |
| `Ctrl + B + P` | Switch to the previous window |
| `Ctrl + B + %` | Split the window vertically   |
| `Ctrl + B + "` | Split the window horizontally |

### **Navigating & Resizing Panes**

| Command                         | Description            |
| ------------------------------- | ---------------------- |
| `Ctrl + B + Arrow Keys`       | Move between panes     |
| `Ctrl + B + Alt + Arrow Keys` | Resize panes           |
| `Ctrl + B + X`                | Close the current pane |
| `Ctrl + B + Z`                | Toggle pane zoom mode  |

### **Session & Window Management**

| Command                                      | Description               |
| -------------------------------------------- | ------------------------- |
| `tmux list-sessions`                       | List all active sessions  |
| `tmux rename-session -t old_name new_name` | Rename a session          |
| `tmux rename-window new_name`              | Rename the current window |
| `tmux kill-window`                         | Close the current window  |

### **Copy & Paste in Tmux**

| Command          | Description        |
| ---------------- | ------------------ |
| `Ctrl + B + [` | Enter copy mode    |
| `Space`        | Start selection    |
| `Enter`        | Copy selected text |
| `Ctrl + B + ]` | Paste copied text  |

### **Advanced Tmux Features**

| Command                                      | Description                     |
| -------------------------------------------- | ------------------------------- |
| `tmux save-buffer filename`                | Save clipboard buffer to a file |
| `tmux source-file ~/.tmux.conf`            | Reload Tmux configuration       |
| `tmux set-option -g mouse on`              | Enable mouse support            |
| `tmux bind-key R source-file ~/.tmux.conf` | Bind a key to reload config     |

---

## 🔄 Workflows

### **Creating & Managing Sessions**

1. Start a new session using `tmux new -s mysession`.
2. Detach from the session using `Ctrl + B + D`.
3. Reattach using `tmux attach -t mysession`.

### **Splitting & Navigating Panes**

1. Split vertically using `Ctrl + B + %`.
2. Split horizontally using `Ctrl + B + "`.
3. Move between panes using `Ctrl + B + Arrow Keys`.

### **Copying & Pasting Text**

1. Enter copy mode using `Ctrl + B + [`.
2. Select text using `Space` and copy with `Enter`.
3. Paste copied text using `Ctrl + B + ]`.

---

## 💡 Examples

```sh
# Start a new Tmux session
tmux new -s mysession

# Split the window vertically
Ctrl + B + %

# Enable mouse support
tmux set-option -g mouse on
```

---

## 📚 References

- **[Tmux Cheat Sheet](https://www.stationx.net/tmux-cheat-sheet/)**
- **[Tmux Shortcut Commands](https://www.golinuxcloud.com/tmux-cheatsheet/)**
- **[Tmux Free PDF Guide](https://linuxsimply.com/cheat-sheets/tmux/)**

```
<!-- end list -->
```
