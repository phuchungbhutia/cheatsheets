title: Grep Cheatsheet

category: Linux
description: A quick reference guide for essential Grep commands, regular expressions, and best practices for searching text efficiently.

---

## 🛠️ Commands

### **Basic Grep Operations**

| Command                        | Description                    |
| ------------------------------ | ------------------------------ |
| `grep "pattern" file.txt`    | Search for a pattern in a file |
| `grep -i "pattern" file.txt` | Case-insensitive search        |
| `grep -w "word" file.txt`    | Match exact words only         |
| `grep -c "pattern" file.txt` | Count occurrences of a pattern |

### **Advanced Grep Searches**

| Command                          | Description                                      |
| -------------------------------- | ------------------------------------------------ |
| `grep -r "pattern" /path/`     | Search recursively in directories                |
| `grep -v "pattern" file.txt`   | Show lines that do NOT match the pattern         |
| `grep -A 3 "pattern" file.txt` | Show 3 lines**after** the match            |
| `grep -B 3 "pattern" file.txt` | Show 3 lines**before** the match           |
| `grep -C 3 "pattern" file.txt` | Show 3 lines**before and after** the match |

### **Using Regular Expressions with Grep**

| Command                        | Description                               |
| ------------------------------ | ----------------------------------------- |
| `grep -E "regex" file.txt`   | Use extended regular expressions          |
| `grep -o "pattern" file.txt` | Show only the matching part of the string |
| `grep -n "pattern" file.txt` | Show line numbers of matches              |
| `grep -l "pattern" *.txt`    | Show filenames containing the pattern     |

### **Filtering & Output Formatting**

| Command                                       | Description                       |
| --------------------------------------------- | --------------------------------- |
| `grep -e "pattern1" -e "pattern2" file.txt` | Search for multiple patterns      |
| `grep --color=auto "pattern" file.txt`      | Highlight matches in output       |
| `grep -f patterns.txt file.txt`             | Search using patterns from a file |

---

## 🔄 Workflows

### **Performing a Basic Text Search**

1. Run `grep "pattern" file.txt` to find occurrences.
2. Use `grep -i "pattern" file.txt` for case-insensitive searches.
3. Show line numbers using `grep -n "pattern" file.txt`.

### **Filtering Results for Specific Matches**

1. Use `grep -w "word" file.txt` to match exact words.
2. Show lines that do NOT match using `grep -v "pattern" file.txt`.

### **Using Regular Expressions for Advanced Searches**

1. Enable extended regex using `grep -E "regex" file.txt`.
2. Extract only matching parts using `grep -o "pattern" file.txt`.

---

## 💡 Examples

```sh
# Case-insensitive search
grep -i "error" logs.txt

# Search recursively in directories
grep -r "TODO" /home/user/projects/

# Show 3 lines before and after the match
grep -C 3 "warning" system.log
```

---

## 📚 References

- **[Grep Command Cheat Sheet &amp; Quick Reference](https://quickref.me/grep.html)**
- **[Grep Command Cheat Sheet With Examples](https://linuxhandbook.com/cheatsheets/grep/)**
- **[20 Grep Command Examples in Linux](https://www.golinuxcloud.com/grep-command-in-linux/)**

```
<!-- end list -->
```
