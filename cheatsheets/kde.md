title: KDE Cheatsheet

category: Linux
description: A quick reference guide for essential KDE commands, workflows, and examples for managing the KDE Plasma desktop environment efficiently.

---

## 🛠️ Commands

| Command                                        | Description                                |
| ---------------------------------------------- | ------------------------------------------ |
| `plasmashell --replace`                      | Restart the Plasma shell                   |
| `killall plasmashell && kstart5 plasmashell` | Force restart Plasma shell                 |
| `kquitapp5 plasmashell`                      | Quit the Plasma shell                      |
| `systemsettings5`                            | Open the KDE system settings manager       |
| `krunner`                                    | Launch the KDE application runner          |
| `konsole`                                    | Open the KDE terminal emulator             |
| `dolphin`                                    | Open the Dolphin file manager              |
| `kscreen-doctor`                             | Display and configure screen settings      |
| `kcmshell5 [module]`                         | Open a specific KDE system settings module |
| `kwin_x11 --replace`                         | Restart the KDE window manager             |
| `kdeconnect-cli`                             | Control KDE Connect via the command line   |
| `kwrite`                                     | Open KWrite text editor                    |
| `kate`                                       | Open Kate text editor                      |
| `spectacle`                                  | Open the KDE screenshot tool               |
| `xrandr`                                     | Adjust screen resolution settings          |
| `plasmapkg2 --list`                          | List installed Plasma widgets              |
| `plasmapkg2 --install [package]`             | Install a new Plasma widget                |
| `kdialog --msgbox "Hello, KDE!"`             | Display a simple message box               |
| `kdeinit5`                                   | Restart KDE initialization process         |

---

## 🔄 Workflows

### **Restarting KDE Plasma Components**

1. Restart the Plasma shell:
   ```bash
   plasmashell --replace
   ```
2. Force restart Plasma shell:
   ```bash
   killall plasmashell && kstart5 plasmashell
   ```
3. Restart the KDE window manager:
   ```bash
   kwin_x11 --replace
   ```

### **Managing KDE Applications & Files**

1. Open the Dolphin file manager:
   ```bash
   dolphin
   ```
2. Open the Kate text editor:
   ```bash
   kate
   ```
3. Launch KRunner for quick app searching:
   ```bash
   krunner
   ```

### **Taking Screenshots & Display Configuration**

1. Capture a screenshot:
   ```bash
   spectacle
   ```
2. Adjust display resolution:
   ```bash
   xrandr --output HDMI-1 --mode 1920x1080
   ```

---

## 💡 Examples

```bash
# Restart KDE Plasma shell
plasmashell --replace

# Force restart Plasma when unresponsive
killall plasmashell && kstart5 plasmashell

# Open Dolphin file manager
dolphin

# Open KDE system settings manager
systemsettings5

# Capture a screenshot and save it automatically
spectacle -b -o ~/Pictures/screenshot.png
```

---

## 📚 References

- **KDE Plasma Documentation**: [https://docs.kde.org/](https://docs.kde.org/)
- **KDE Community Wiki**: [https://community.kde.org/](https://community.kde.org/)
- **KDE Arch Linux Guide**: [https://wiki.archlinux.org/title/KDE](https://wiki.archlinux.org/title/KDE)

```
<!-- end list -->
```
