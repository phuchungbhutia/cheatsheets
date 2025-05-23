title: Xfce Cheatsheet

category: Linux
description: A quick reference guide for essential Xfce commands, workflows, and examples for managing the lightweight Xfce desktop environment efficiently.

---

## 🛠️ Commands

| Command                                       | Description                             |
| --------------------------------------------- | --------------------------------------- |
| `xfce4-panel --restart`                     | Restart the Xfce panel                  |
| `xfwm4 --replace`                           | Restart the window manager              |
| `xfdesktop --reload`                        | Reload the desktop background and icons |
| `xfce4-session-logout`                      | Logout or shut down the session         |
| `xfce4-appfinder`                           | Open the application finder             |
| `xfce4-terminal`                            | Launch the default Xfce terminal        |
| `xfce4-settings-manager`                    | Open the settings manager               |
| `thunar`                                    | Open the Thunar file manager            |
| `xfce4-taskmanager`                         | Open the task manager                   |
| `xfconf-query -c xfce4-panel -p /panels -T` | Reset Xfce panel settings               |
| `xfce4-screenshooter`                       | Capture a screenshot                    |
| `xfce4-power-manager-settings`              | Open power manager settings             |
| `xfce4-notifyd-config`                      | Open notification settings              |
| `xfce4-mouse-settings`                      | Adjust mouse settings                   |
| `xfce4-keyboard-settings`                   | Adjust keyboard settings                |
| `xfwm4 --compositor=on`                     | Enable window compositing               |
| `xfwm4 --compositor=off`                    | Disable window compositing              |
| `xfdesktop --quit`                          | Stop the Xfce desktop process           |

---

## 🔄 Workflows

### **Restarting Xfce Components**

1. Restart the Xfce panel:
   ```bash
   xfce4-panel --restart
   ```
2. Restart the window manager:
   ```bash
   xfwm4 --replace
   ```
3. Reload the desktop icons and wallpaper:
   ```bash
   xfdesktop --reload
   ```

### **Managing System Settings**

1. Open the settings manager:
   ```bash
   xfce4-settings-manager
   ```
2. Adjust display settings:
   ```bash
   xfce4-display-settings
   ```
3. Change keyboard shortcuts:
   ```bash
   xfce4-keyboard-settings
   ```

### **Managing Applications & Files**

1. Open the Thunar file manager:
   ```bash
   thunar
   ```
2. Open the application finder to quickly launch apps:
   ```bash
   xfce4-appfinder
   ```
3. Capture a screenshot using the built-in screenshot tool:
   ```bash
   xfce4-screenshooter
   ```

---

## 💡 Examples

```bash
# Restart window manager for troubleshooting
xfwm4 --replace

# Take a screenshot and save it automatically
xfce4-screenshooter -s ~/Pictures/screenshot.png

# Disable window compositing for better performance
xfwm4 --compositor=off

# Reset Xfce panel settings
xfconf-query -c xfce4-panel -p /panels -T
```

---

## 📚 References

- **Xfce Official Documentation**: [https://docs.xfce.org/](https://docs.xfce.org/)
- **Xfce Wiki**: [https://wiki.xfce.org/](https://wiki.xfce.org/)
- **Xfce Arch Linux Guide**: [https://wiki.archlinux.org/title/Xfce](https://wiki.archlinux.org/title/Xfce)

```
<!-- end list -->
```
