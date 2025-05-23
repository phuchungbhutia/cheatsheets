title: Untitled
category: Uncategorized
description: No description provided.

**title:** Hashcat Cheatsheet

**category:** Cybersecurity
**description:** A structured reference guide for Hashcat, covering hash modes, attack types, and optimization techniques.

---

## 🔍 **Core Principles for Hashcat Usage**

### **Fundamental Concepts**

| Principle                     | Description                                             |
| ----------------------------- | ------------------------------------------------------- |
| **Hash Identification** | Recognizing hash types before cracking                  |
| **Attack Modes**        | Dictionary, brute-force, hybrid, and rule-based attacks |
| **Mask-Based Cracking** | Using predefined character sets for efficient cracking  |
| **GPU Acceleration**    | Leveraging GPU power for faster hash cracking           |
| **Session Management**  | Saving and resuming cracking sessions                   |

### **Essential Hashcat Commands & Modes**

| Command                                                                   | Function                                     |
| ------------------------------------------------------------------------- | -------------------------------------------- |
| **hashcat -m [mode] -a [attack] -o [output] [hashfile] [wordlist]** | Basic command format                         |
| **--show**                                                          | Display cracked hashes                       |
| **--username**                                                      | Ignore username part in hash file            |
| **--status**                                                        | Display cracking progress                    |
| **--potfile-disable**                                               | Disable saving cracked hashes to the potfile |

---

## 🔄 **Workflows**

### **Optimizing Hash Cracking**

1. **Identify hash type** using Hashcat’s built-in tools.
2. **Select the appropriate attack mode** for efficiency.
3. **Use GPU acceleration** for faster processing.

### **Enhancing Security Testing**

1. **Test password strength** by running common attack methods.
2. **Analyze hash vulnerabilities** to improve security policies.
3. **Use rule-based attacks** for advanced cracking techniques.

---

## 💡 **Examples**

```plaintext
# Example: Running a Dictionary Attack on an NTLM Hash
hashcat -m 1000 -a 0 -o cracked.txt hashes.txt /path/to/wordlist.txt  
```

---

## 📚 **References**

- **[Hashcat Cheat Sheet](https://github.com/frizb/Hashcat-Cheatsheet)**
- **[Hashcat Cybersecurity Guide](https://github.com/pwnVader/Cybersecurity/blob/main/cheatsheets/Hashcat-CheatSheets.md)**
- **[Hashcat Official Documentation](https://hashcat.net/wiki/)**

```
<!-- end list -->
```