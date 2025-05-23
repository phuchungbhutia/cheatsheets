title: Kitty Cheatsheet

category: Terminal
description: A quick reference guide for essential Kitty commands, shortcuts, and workflows for efficient terminal usage.

---

## 🛠️ Commands

### **Basic Kitty Operations**

| Command                                       | Description                                    |
| --------------------------------------------- | ---------------------------------------------- |
| `kitty`                                     | Open a new Kitty terminal window               |
| `kitty --config ~/.config/kitty/kitty.conf` | Use a custom configuration file                |
| `kitty -e htop`                             | Run a command inside Kitty                     |
| `kitty --title "My Terminal"`               | Set a custom window title                      |
| `kitty --hold -e command`                   | Keep the terminal open after running a command |

### **Tab & Window Management**

| Shortcut                 | Description                |
| ------------------------ | -------------------------- |
| `Ctrl + Shift + T`     | Open a new tab             |
| `Ctrl + Shift + Q`     | Close the current tab      |
| `Ctrl + Shift + Right` | Switch to the next tab     |
| `Ctrl + Shift + Left`  | Switch to the previous tab |
| `Ctrl + Shift + Enter` | Open a new window          |

### **Font & Appearance Customization**

| Shortcut                     | Description                |
| ---------------------------- | -------------------------- |
| `Ctrl + Shift + +`         | Increase font size         |
| `Ctrl + Shift + -`         | Decrease font size         |
| `Ctrl + Shift + Backspace` | Reset font size            |
| `Ctrl + Shift + F11`       | Toggle fullscreen mode     |
| `Ctrl + Shift + F5`        | Reload Kitty configuration |

### **Clipboard & Text Operations**

| Shortcut             | Description                   |
| -------------------- | ----------------------------- |
| `Ctrl + Shift + C` | Copy selected text            |
| `Ctrl + Shift + V` | Paste clipboard content       |
| `Ctrl + Shift + S` | Paste from selection          |
| `Ctrl + Shift + F` | Search within terminal output |

### **Performance & GPU Optimization**

| Setting                      | Description                                 |
| ---------------------------- | ------------------------------------------- |
| `enable_gpu_rendering yes` | Enable GPU acceleration                     |
| `vsync yes`                | Enable vertical sync for smoother rendering |
| `background_opacity 0.8`   | Adjust terminal transparency                |
| `scrollback_lines 5000`    | Increase scrollback buffer size             |

---

## 🔄 Workflows

### **Setting Up Kitty Configuration**

1. Create a config file at `~/.config/kitty/kitty.conf`.
2. Define font, colors, and transparency settings.
3. Apply changes using `Ctrl + Shift + F5`.

### **Managing Tabs & Windows**

1. Open a new tab using `Ctrl + Shift + T`.
2. Switch between tabs using `Ctrl + Shift + Right/Left`.
3. Open a new window using `Ctrl + Shift + Enter`.

### **Optimizing Performance**

1. Enable GPU acceleration using `enable_gpu_rendering yes`.
2. Adjust DPI scaling using `scale_with_dpi yes`.
3. Enable vertical sync using `vsync yes`.

---

## 💡 Examples

```sh
# Open Kitty with a custom title
kitty --title "My Terminal"

# Run a command inside Kitty
kitty -e htop

# Reload Kitty configuration
Ctrl + Shift + F5
```

---

## 📚 References

- **[Kitty Cheat Sheet](https://gist.github.com/AskinNet/0d0d4f7f0ee221f8362af9d9876d021a)**
- **[Kitty Terminal Basics](https://dev.to/otamm/kitty-terminal-basics-cheatsheet-1f0o)**

```
<!-- end list -->
```
