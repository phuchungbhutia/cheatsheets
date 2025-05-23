**title:** USB Rubber Ducky Cheatsheet

**category:** Cybersecurity
**description:** A structured reference guide for USB Rubber Ducky, including setup, commands, and payload development.

---

## 🦆 **Core Principles of USB Rubber Ducky**

### **Fundamental Concepts**

| Principle                        | Description                                       |
| -------------------------------- | ------------------------------------------------- |
| **Keystroke Injection**    | Emulates a keyboard to execute automated scripts  |
| **DuckyScript Language**   | Uses simple scripting for payload execution       |
| **Payload Execution**      | Runs predefined commands on target systems        |
| **Firmware Customization** | Allows modification and expansion of capabilities |
| **Security Testing**       | Used for ethical hacking and penetration testing  |

### **Essential USB Rubber Ducky Commands**

| Command                         | Function                                             |
| ------------------------------- | ---------------------------------------------------- |
| **DELAY 1000**            | Waits for 1 second before executing the next command |
| **STRING Hello, World!**  | Types "Hello, World!" as keyboard input              |
| **ENTER**                 | Simulates pressing the Enter key                     |
| **CONTROL ALT DELETE**    | Sends Ctrl+Alt+Del keystroke                         |
| **REM This is a comment** | Adds a comment in the script                         |

---

## 🔄 **Workflows**

### **Optimizing USB Rubber Ducky Usage**

1. **Write DuckyScript payloads** for automation.
2. **Compile scripts** using Hak5 Payload Studio.
3. **Deploy payloads** on target systems for testing.

### **Enhancing Cybersecurity Testing**

1. **Simulate phishing attacks** for security awareness training.
2. **Automate system tasks** using keystroke injection.
3. **Test security defenses** against unauthorized access.

---

## 💡 **Examples**

```plaintext
# Example: Open Notepad and Type a Message
DELAY 1000  
GUI r  
DELAY 500  
STRING notepad  
ENTER  
DELAY 1000  
STRING Hello, this is a test!  
ENTER  
```

---

## 📚 **References**

- **[DuckyScript Quick Reference](https://docs.hak5.org/hak5-usb-rubber-ducky/duckyscript-tm-quick-reference)**
- **[Essential USB Rubber Ducky Cheat Sheet](https://github.com/JonnyBanana/Essential-USB-Rubber-Ducky-Printable-Cheat-Sheet)**
- **[USB Rubber Ducky Guide](https://studylib.net/doc/27409053/usb-rubber-ducky-ebook-v22.08-2)**

```
<!-- end list -->
```
