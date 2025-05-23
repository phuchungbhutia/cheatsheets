title: Nikto Cheatsheet

category: Pentesting
description: A quick reference guide for essential Nikto commands, scanning techniques, and best practices for identifying web server vulnerabilities.

---

## 🛠️ Commands

### **Basic Nikto Scanning**

| Command                            | Description                          |
| ---------------------------------- | ------------------------------------ |
| `nikto -h <target>`              | Perform a basic scan on a web server |
| `nikto -h <target> -port <port>` | Scan a specific port                 |
| `nikto -h <target> -ssl`         | Scan for SSL vulnerabilities         |
| `nikto -h <target> -Tuning 6`    | Use a specific scan tuning level     |

### **Advanced Scanning Options**

| Command                               | Description                          |
| ------------------------------------- | ------------------------------------ |
| `nikto -h <target> -Format html`    | Format output in HTML                |
| `nikto -h <target> -output out.txt` | Save the output to a file            |
| `nikto -h <target> -Display 4`      | Show URLs requiring authentication   |
| `nikto -h <target> -evasion 1`      | Use evasion techniques to bypass IDS |

### **Using Proxies & Authentication**

| Command                                 | Description                       |
| --------------------------------------- | --------------------------------- |
| `nikto -h <target> -useproxy <proxy>` | Use a proxy for scanning          |
| `nikto -h <target> -id <user:pass>`   | Authenticate using credentials    |
| `nikto -h <target> -key <cert.key>`   | Use a client certificate key file |

### **Output & Logging**

| Command                                     | Description                            |
| ------------------------------------------- | -------------------------------------- |
| `nikto -h <target> -o <output_file.xml>`  | Save results in XML format             |
| `nikto -h <target> -o <output_file.json>` | Save results in JSON format            |
| `nikto -h <target> -v`                    | Increase verbosity for detailed output |

---

## 🔄 Workflows

### **Performing a Basic Web Server Scan**

1. Run `nikto -h <target>` to scan for vulnerabilities.
2. Use `nikto -h <target> -ssl` to check SSL-related issues.
3. Save results using `nikto -h <target> -o output.json`.

### **Scanning for Specific Vulnerabilities**

1. Use `nikto -h <target> -Tuning 6` to focus on specific vulnerabilities.
2. Enable evasion techniques using `nikto -h <target> -evasion 1`.
3. Analyze results for potential security risks.

### **Using Authentication & Proxies**

1. Authenticate using `nikto -h <target> -id <user:pass>`.
2. Use a proxy for scanning using `nikto -h <target> -useproxy <proxy>`.

---

## 💡 Examples

```sh
# Perform a basic scan on a web server
nikto -h http://example.com

# Scan for SSL vulnerabilities
nikto -h https://example.com -ssl

# Save results in JSON format
nikto -h http://example.com -o output.json
```

---

## 📚 References

- **[Nikto Cheat Sheet - Commands &amp; Examples](https://highon.coffee/blog/nikto-cheat-sheet/)**
- **[Nikto Cheat Sheet - Comparitech](https://www.comparitech.com/net-admin/nikto-cheat-sheet/)**
- **[Nikto Cheat Sheet by milo.skoro](https://www.reddit.com/r/Cheatography/comments/1clajws/nikto_cheat_sheet_by_miloskoro_programming/)**

```
<!-- end list -->
```
