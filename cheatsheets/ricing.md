title: Linux Ricing Cheatsheet

category: Linux
description: A quick reference guide for essential tools, configurations, and workflows to enhance the visual appeal and usability of a Linux desktop.

---

## 🛠️ Tools & Components

### **Window Managers**

| Tool          | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| `i3`        | Lightweight tiling window manager with extensive customization options  |
| `bspwm`     | Minimalist tiling window manager controlled via shell commands          |
| `awesomewm` | Highly customizable window manager with Lua scripting support           |
| `dwm`       | Dynamic window manager with a small codebase, requiring manual patching |
| `hyprland`  | Modern dynamic tiling Wayland compositor                                |

### **Desktop Panels & Bars**

| Tool         | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| `polybar`  | Customizable status bar for window managers                      |
| `waybar`   | Lightweight Wayland-compatible bar with rich customization       |
| `lemonbar` | Minimal and flexible bar with shell scripting capabilities       |
| `tint2`    | Lightweight panel designed for Openbox and other window managers |

### **Launcher & Menus**

| Tool          | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| `rofi`      | Highly customizable app launcher, window switcher, and dmenu replacement |
| `dmenu`     | Lightweight launcher with simple, scriptable UI                          |
| `ulauncher` | Application launcher with fuzzy search and extension support             |

### **System & Terminal Appearance**

| Tool          | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| `neofetch`  | Display system info with a custom logo or ASCII art                      |
| `fastfetch` | Alternative to neofetch with faster performance and richer customization |
| `starship`  | Customizable cross-shell prompt with extensive theming options           |
| `alacritty` | Fast GPU-accelerated terminal emulator with rich customization           |
| `kitty`     | GPU-rendered terminal emulator with scripting support                    |

### **Themes, Icons & Fonts**

| Tool                   | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `gtk-theme-manager`  | Manage GTK themes easily                                           |
| `lxappearance`       | Change themes, icons, and fonts for GTK-based desktops             |
| `papirus-icon-theme` | Popular icon set for modern Linux desktops                         |
| `nerd-fonts`         | Patched fonts with icons for terminal prompts and UI customization |

### **Additional Tweaks**

| Tool         | Description                                          |
| ------------ | ---------------------------------------------------- |
| `picom`    | Compositor for transparency, shadows, and animations |
| `kvantum`  | Qt theme engine for improved aesthetics              |
| `feh`      | Lightweight tool for setting wallpapers              |
| `nitrogen` | GUI-based wallpaper manager                          |

---

## 🔄 Workflows

### **Setting Up a Tiling Window Manager (i3 Example)**

1. Install i3 using `sudo apt install i3` or `sudo pacman -S i3`.
2. Configure `~/.config/i3/config` for keybindings and layout.
3. Use `Mod + Enter` to open a terminal and `Mod + Shift + Q` to close a window.

### **Customizing Terminal Appearance**

1. Install Starship using `curl -sS https://starship.rs/install.sh | sh`.
2. Apply Starship prompt by adding `eval "$(starship init bash)"` to `.bashrc`.
3. Use `neofetch` or `fastfetch` for system info display.

### **Setting Up Polybar for a Custom Status Bar**

1. Install Polybar using `sudo apt install polybar` or `yay -S polybar`.
2. Configure `~/.config/polybar/config.ini` with modules and colors.
3. Start Polybar using `polybar example &`.

### **Applying GTK & Icon Themes**

1. Use `lxappearance` to select a GTK theme and icon pack.
2. Install Papirus icons using `sudo apt install papirus-icon-theme`.
3. Apply custom fonts using `fc-cache -fv` after installing Nerd Fonts.

---

## 💡 Examples

```sh
# Install a tiling window manager
sudo apt install i3

# Customize your terminal prompt with Starship
curl -sS https://starship.rs/install.sh | sh

# Set a wallpaper using feh
feh --bg-scale ~/Pictures/wallpaper.png
```

---

## 📚 References

- **[Linux Ricing Guide](https://wiki.archlinux.org/title/Desktop_environment_customization)**
- **[Awesome Ricing Repository](https://github.com/fosslife/awesome-ricing)**
- **[Polybar Configuration Guide](https://github.com/polybar/polybar/wiki/Configuration)**

```
<!-- end list -->
```
