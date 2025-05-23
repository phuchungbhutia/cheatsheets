**title:** Raspberry Pi Cheatsheet

**category:** Computing
**description:** A structured reference guide for Raspberry Pi basics, including setup, commands, and project ideas.

---

## 🖥 **Core Principles of Raspberry Pi**

### **Fundamental Concepts**

| Principle                  | Description                                 |
| -------------------------- | ------------------------------------------- |
| **Operating System** | Runs Raspberry Pi OS (Linux-based)          |
| **GPIO Pins**        | Used for electronics and sensor connections |
| **Networking**       | Supports WiFi, Ethernet, and Bluetooth      |
| **Storage**          | Uses microSD cards for OS and data          |
| **Programming**      | Supports Python, C++, Java, and more        |

### **Essential Raspberry Pi Commands**

| Command                         | Function                              |
| ------------------------------- | ------------------------------------- |
| **sudo apt update**       | Updates package lists                 |
| **sudo apt upgrade**      | Upgrades installed software           |
| **raspi-config**          | Opens Raspberry Pi configuration menu |
| **gpio readall**          | Displays GPIO pin status              |
| **vcgencmd measure_temp** | Shows CPU temperature                 |

---

## 🔄 **Workflows**

### **Optimizing Raspberry Pi Setup**

1. **Install Raspberry Pi OS** using Raspberry Pi Imager.
2. **Enable SSH & VNC** for remote access.
3. **Set up WiFi & Ethernet** for connectivity.

### **Enhancing Raspberry Pi Projects**

1. **Use GPIO pins** for sensors and motors.
2. **Install Python libraries** for automation.
3. **Create IoT applications** with MQTT and Node-RED.

---

## 💡 **Examples**

```plaintext
# Example: Blinking LED with Python
import RPi.GPIO as GPIO  
import time  

GPIO.setmode(GPIO.BCM)  
GPIO.setup(18, GPIO.OUT)  

while True:  
    GPIO.output(18, GPIO.HIGH)  
    time.sleep(1)  
    GPIO.output(18, GPIO.LOW)  
    time.sleep(1)  
```

---

## 📚 **References**

- **[Raspberry Pi Basics Cheatsheet](https://www.woolseyworkshop.com/wp-content/uploads/WoolseyWorkshop_Cheatsheet_RaspberryPiBasics_v1.5.pdf)**
- **[Top 50 Raspberry Pi Commands](https://projects-raspberry.com/wp-content/uploads/2018/05/Top-50-Raspberry-pi-commands-List-cheat-sheet.pdf)**
- **[Raspberry Pi Setup Guide](https://opensource.com/sites/default/files/gated-content/raspberry_pi_cheatsheet_from_opensource.com_.pdf)**

```
<!-- end list -->
```
