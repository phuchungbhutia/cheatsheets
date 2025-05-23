title: Zsh Cheatsheet

category: Terminal
description: A quick reference guide for essential Zsh commands, shortcuts, and workflows for efficient terminal usage.

---

## 🛠️ Commands

### **Basic Zsh Operations**

| Command                  | Description                     |
| ------------------------ | ------------------------------- |
| `zsh`                  | Start a Zsh shell session       |
| `exec zsh`             | Restart Zsh without logging out |
| `echo $SHELL`          | Check the current shell         |
| `chsh -s $(which zsh)` | Set Zsh as the default shell    |

### **Navigation & Directory Management**

| Command       | Description                                      |
| ------------- | ------------------------------------------------ |
| `cd -`      | Switch to the previous directory                 |
| `cd ..`     | Move up one directory                            |
| `cd ../..`  | Move up two directories                          |
| `pushd dir` | Save the current directory and switch to another |
| `popd`      | Return to the previous directory                 |

### **Aliases & Functions**

| Command                                      | Description                         |
| -------------------------------------------- | ----------------------------------- |
| `alias ll='ls -lah'`                       | Create a shortcut for listing files |
| `unalias ll`                               | Remove an alias                     |
| `function myfunc() { echo "Hello, Zsh!" }` | Define a function                   |
| `myfunc`                                   | Execute a function                  |

### **Auto-completion & History**

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `bindkey -v` | Enable Vi-style key bindings         |
| `bindkey -e` | Enable Emacs-style key bindings      |
| `history`    | Show command history                 |
| `Ctrl + R`   | Search command history interactively |

### **Zsh Plugins & Customization**

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `omz update`      | Update Oh My Zsh                   |
| `omz reload`      | Reload Zsh configuration           |
| `source ~/.zshrc` | Apply changes to `.zshrc`        |
| `zsh_stats`       | Show the top 20 most used commands |

---

## 🔄 Workflows

### **Setting Up Zsh as Default Shell**

1. Install Zsh using `sudo apt install zsh` or `brew install zsh`.
2. Set Zsh as the default shell using `chsh -s $(which zsh)`.
3. Restart the terminal and verify using `echo $SHELL`.

### **Creating & Using Aliases**

1. Define an alias using `alias gs='git status'`.
2. Use the alias by typing `gs`.
3. Remove an alias using `unalias gs`.

### **Managing Command History**

1. View history using `history`.
2. Search history interactively using `Ctrl + R`.
3. Clear history using `history -c`.

---

## 💡 Examples

```sh
# Set Zsh as the default shell
chsh -s $(which zsh)

# Create an alias for listing files
alias ll='ls -lah'

# Reload Zsh configuration
source ~/.zshrc
```

---

## 📚 References

- **[Zsh Cheat Sheet](https://linuxsimply.com/cheat-sheets/zsh/)^3^**
- **[Oh My Zsh Cheatsheet](https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet)^2^**

```
<!-- end list -->
```
