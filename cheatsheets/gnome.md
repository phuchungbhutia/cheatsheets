title: GNOME Cheatsheet

category: Linux
description: A quick reference guide for essential GNOME commands, workflows, and examples for managing the GNOME desktop environment efficiently.

---

## 🛠️ Commands

| Command                                                                    | Description                                   |
| -------------------------------------------------------------------------- | --------------------------------------------- |
| `gnome-shell --replace`                                                  | Restart the GNOME shell                       |
| `gnome-session-quit`                                                     | Quit the current GNOME session                |
| `gnome-control-center`                                                   | Open the GNOME settings manager               |
| `gnome-terminal`                                                         | Launch the GNOME terminal                     |
| `nautilus`                                                               | Open the GNOME file manager (Files)           |
| `gnome-system-monitor`                                                   | Open the GNOME system monitor                 |
| `gnome-tweaks`                                                           | Open GNOME Tweaks for customization           |
| `dconf-editor`                                                           | Open the DConf Editor for advanced settings   |
| `xrandr`                                                                 | Adjust screen resolution and display settings |
| `gsettings list-schemas`                                                 | List all GNOME configuration schemas          |
| `gsettings get [schema] [key]`                                           | Get the value of a GNOME setting              |
| `gsettings set [schema] [key] [value]`                                   | Set a GNOME setting manually                  |
| `gsettings reset [schema] [key]`                                         | Reset a GNOME setting to default              |
| `gdm restart`                                                            | Restart the GNOME Display Manager             |
| `gsettings list-keys [schema]`                                           | List all available configuration keys         |
| `gnome-screenshot`                                                       | Take a screenshot using GNOME Screenshot      |
| `gsettings set org.gnome.desktop.interface gtk-theme "[theme]"`          | Change the GNOME theme                        |
| `gsettings set org.gnome.desktop.background picture-uri "file://[path]"` | Change the wallpaper                          |

---

## 🔄 Workflows

### **Restarting GNOME Components**

1. Restart the GNOME shell:
   ```bash
   gnome-shell --replace
   ```
2. Restart the GNOME Display Manager:
   ```bash
   sudo systemctl restart gdm
   ```
3. Open GNOME settings for customization:
   ```bash
   gnome-control-center
   ```

### **Managing Applications & Files**

1. Open the GNOME file manager (Files):
   ```bash
   nautilus
   ```
2. Open the GNOME terminal:
   ```bash
   gnome-terminal
   ```
3. Launch GNOME Tweaks for customization:
   ```bash
   gnome-tweaks
   ```

### **Adjusting GNOME Appearance & Settings**

1. Change the GNOME theme:
   ```bash
   gsettings set org.gnome.desktop.interface gtk-theme "Adwaita-dark"
   ```
2. Change the wallpaper:
   ```bash
   gsettings set org.gnome.desktop.background picture-uri "file:///home/user/Pictures/wallpaper.jpg"
   ```
3. Adjust GNOME font size:
   ```bash
   gsettings set org.gnome.desktop.interface text-scaling-factor 1.2
   ```

---

## 💡 Examples

```bash
# Restart GNOME shell for troubleshooting
gnome-shell --replace

# Capture a screenshot and save it automatically
gnome-screenshot -f ~/Pictures/screenshot.png

# Change to dark mode
gsettings set org.gnome.desktop.interface gtk-theme "Adwaita-dark"

# Reset GNOME wallpaper settings
gsettings reset org.gnome.desktop.background picture-uri
```

---

## 📚 References

- **GNOME Official Documentation**: [https://help.gnome.org/](https://help.gnome.org/)
- **GNOME Wiki**: [https://wiki.gnome.org/](https://wiki.gnome.org/)
- **GNOME Customization Guide**: [https://extensions.gnome.org/](https://extensions.gnome.org/)

```
<!-- end list -->
```
