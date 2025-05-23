title: Alacritty Cheatsheet

category: Terminal
description: A quick reference guide for essential Alacritty commands, configurations, and workflows for efficient terminal usage.

---

## 🛠️ Commands

### **Basic Alacritty Operations**

| Command                                                       | Description                              |
| ------------------------------------------------------------- | ---------------------------------------- |
| `alacritty`                                                 | Open a new Alacritty terminal window     |
| `alacritty --working-directory ~/projects`                  | Launch Alacritty in a specific directory |
| `alacritty -e htop`                                         | Run a command inside Alacritty           |
| `alacritty --config-file ~/.config/alacritty/alacritty.yml` | Use a custom configuration file          |
| `alacritty --live-config-reload`                            | Enable live configuration reload         |

### **Configuration & Customization**

| File/Setting                          | Description                                  |
| ------------------------------------- | -------------------------------------------- |
| `~/.config/alacritty/alacritty.yml` | Main configuration file for Alacritty        |
| `font.size: 12`                     | Set font size in the config file             |
| `background_opacity: 0.8`           | Adjust terminal transparency                 |
| `cursor.style: Beam`                | Change cursor style (Block, Underline, Beam) |
| `shell: /bin/zsh`                   | Set default shell for Alacritty              |

### **Keybindings & Shortcuts**

| Shortcut                 | Description                    |
| ------------------------ | ------------------------------ |
| `Ctrl + Shift + Enter` | Open a new Alacritty window    |
| `Ctrl + Shift + C`     | Copy selected text             |
| `Ctrl + Shift + V`     | Paste clipboard content        |
| `Ctrl + Shift + N`     | Open a new tab (if using tmux) |
| `Ctrl + Shift + Q`     | Close the terminal window      |

### **Performance & GPU Optimization**

| Setting                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| `renderer: "gl"`       | Use OpenGL for rendering                    |
| `gpu: true`            | Enable GPU acceleration                     |
| `vsync: true`          | Enable vertical sync for smoother rendering |
| `scale_with_dpi: true` | Adjust scaling based on DPI settings        |

---

## 🔄 Workflows

### **Setting Up Alacritty Configuration**

1. Create a config file at `~/.config/alacritty/alacritty.yml`.
2. Define font, colors, and transparency settings.
3. Apply changes using `alacritty --live-config-reload`.

### **Optimizing Performance**

1. Enable GPU acceleration using `gpu: true` in the config file.
2. Adjust DPI scaling using `scale_with_dpi: true`.
3. Enable vertical sync using `vsync: true`.

### **Using Alacritty with tmux**

1. Open Alacritty and start tmux using `tmux`.
2. Create a new tmux session using `tmux new -s session_name`.
3. Split panes using `Ctrl + B + %` (vertical) or `Ctrl + B + "` (horizontal).

---

## 💡 Examples

```sh
# Open Alacritty in a specific directory
alacritty --working-directory ~/projects

# Run a command inside Alacritty
alacritty -e htop

# Use a custom configuration file
alacritty --config-file ~/.config/alacritty/alacritty.yml
```

---

## 📚 References

- **[Alacritty Configuration Guide](https://github.com/alacritty/alacritty/wiki/Configuration)^2^**
- **[Alacritty Keybindings &amp; Shortcuts](https://gist.github.com/yoonhoGo/61ea18476a127f5db7b86471ee027876)^3^**

```
<!-- end list -->
```
