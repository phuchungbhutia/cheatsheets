**title:** Proxmark3 Cheatsheet

**category:** Cybersecurity
**description:** A structured reference guide for Proxmark3, including setup, commands, and penetration testing techniques.

---

## 🔧 **Core Principles of Proxmark3**

### **Fundamental Concepts**

| Principle                        | Description                                       |
| -------------------------------- | ------------------------------------------------- |
| **RFID Analysis**          | Reads and emulates RFID, NFC, and sub-GHz signals |
| **Card Cloning**           | Copies RFID credentials for security testing      |
| **Firmware Customization** | Allows modification and expansion of capabilities |
| **Security Testing**       | Used for ethical hacking and penetration testing  |
| **Data Dumping**           | Extracts and analyzes card data                   |

### **Essential Proxmark3 Commands**

| Command                | Function                             |
| ---------------------- | ------------------------------------ |
| **hf search**    | Identifies High-Frequency (HF) cards |
| **lf search**    | Identifies Low-Frequency (LF) cards  |
| **hw tune**      | Measures antenna characteristics     |
| **hf mf dump**   | Dumps MIFARE card contents           |
| **lf hid clone** | Clones HID ProxCard                  |

---

## 🔄 **Workflows**

### **Optimizing Proxmark3 Usage**

1. **Install custom firmware** for extended functionality.
2. **Use antenna tuning** to improve signal detection.
3. **Capture and analyze RFID signals** for security testing.

### **Enhancing Cybersecurity Testing**

1. **Test RFID access control systems** for vulnerabilities.
2. **Emulate remote signals** for penetration testing.
3. **Monitor wireless networks** for security analysis.

---

## 💡 **Examples**

```plaintext
# Example: Dumping MIFARE Card Data
1. Scan the card using `hf search`.  
2. Authenticate with `hf mf auth`.  
3. Dump card contents using `hf mf dump`.  
```

---

## 📚 **References**

- **[Proxmark3 CheatSheet](https://3os.org/penetration-testing/proxmark/cheatsheet/)**
- **[Proxmark3 GitHub Documentation](https://github.com/RfidResearchGroup/proxmark3/blob/master/doc/cheatsheet.md)**
- **[HID Proxmark Cheat Sheet](https://gist.github.com/joswr1ght/efdb669d2f3feb018a22650ddc01f5f2)**

```
<!-- end list -->
```
