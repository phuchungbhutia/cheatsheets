title: SearchSploit Cheatsheet

category: Pentesting
description: A quick reference guide for essential SearchSploit commands, exploit searching, and best practices for penetration testing.

---

## 🛠️ Commands

### **Basic SearchSploit Operations**

| Command                          | Description                              |
| -------------------------------- | ---------------------------------------- |
| `searchsploit <keyword>`       | Search for exploits related to a keyword |
| `searchsploit -t <keyword>`    | Search only in exploit titles            |
| `searchsploit -p <exploit_id>` | Show the full path of an exploit         |
| `searchsploit -m <exploit_id>` | Copy an exploit to the current directory |

### **Filtering & Advanced Searches**

| Command                                       | Description                              |
| --------------------------------------------- | ---------------------------------------- |
| `searchsploit <keyword> --exclude="<term>"` | Exclude specific terms from results      |
| `searchsploit <keyword> --cve <CVE-ID>`     | Search for exploits related to a CVE     |
| `searchsploit <keyword> --author <name>`    | Search for exploits by a specific author |

### **Updating & Managing Exploit Database**

| Command                       | Description                            |
| ----------------------------- | -------------------------------------- |
| `searchsploit -u`           | Update the local exploit database      |
| `searchsploit -j <keyword>` | Output results in JSON format          |
| `searchsploit -w <keyword>` | Open the exploit page in a web browser |

### **Using SearchSploit with Metasploit**

| Command                          | Description                           |
| -------------------------------- | ------------------------------------- |
| `searchsploit -x <exploit_id>` | Open an exploit in Metasploit         |
| `searchsploit -m <exploit_id>` | Copy an exploit for use in Metasploit |

---

## 🔄 Workflows

### **Performing a Basic Exploit Search**

1. Run `searchsploit <keyword>` to find relevant exploits.
2. Use `searchsploit -t <keyword>` to refine results to titles only.
3. Copy an exploit using `searchsploit -m <exploit_id>`.

### **Filtering Results for Specific Vulnerabilities**

1. Use `searchsploit <keyword> --cve <CVE-ID>` to find CVE-related exploits.
2. Exclude unwanted results using `searchsploit <keyword> --exclude="<term>"`.

### **Using SearchSploit with Metasploit**

1. Find an exploit using `searchsploit <keyword>`.
2. Open the exploit in Metasploit using `searchsploit -x <exploit_id>`.

---

## 💡 Examples

```sh
# Search for exploits related to Apache
searchsploit apache

# Search for exploits related to CVE-2023-1234
searchsploit --cve 2023-1234

# Copy an exploit to the current directory
searchsploit -m 39446
```

---

## 📚 References

- **[SearchSploit Cheat Sheet by Certcube Labs](https://blog.certcube.com/searchsploit-cheat-sheet/)**
- **[SearchSploit Cheatsheet on FO-Sec](https://www.fo-sec.com/cheatsheet/searchsploit)**
- **[SearchSploit Manual on Exploit Database](https://www.exploit-db.com/searchsploit)**

```
<!-- end list -->
```
