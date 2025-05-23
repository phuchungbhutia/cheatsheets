title: CrackMapExec & enum4linux Cheatsheet

category: Pentesting
description: A quick reference guide for essential CrackMapExec and enum4linux commands, enumeration techniques, and best practices for penetration testing.

---

## 🛠️ Commands

### **CrackMapExec (CME) Basic Operations**

| Command                                               | Description                             |
| ----------------------------------------------------- | --------------------------------------- |
| `crackmapexec smb <target>`                         | Enumerate SMB shares on a target        |
| `crackmapexec smb <target> -u <user> -p <password>` | Authenticate with SMB using credentials |
| `crackmapexec smb <target> --shares`                | List available SMB shares               |
| `crackmapexec smb <target> --sessions`              | Enumerate active SMB sessions           |
| `crackmapexec smb <target> --users`                 | Enumerate domain users                  |

### **CrackMapExec Advanced Enumeration**

| Command                                      | Description                               |
| -------------------------------------------- | ----------------------------------------- |
| `crackmapexec smb <target> --groups`       | Enumerate domain groups                   |
| `crackmapexec smb <target> --pass-pol`     | Retrieve password policy information      |
| `crackmapexec smb <target> --local-admins` | Check for local administrator privileges  |
| `crackmapexec smb <target> --ntds`         | Dump NTDS.dit (Active Directory database) |

### **enum4linux Basic Operations**

| Command                    | Description                          |
| -------------------------- | ------------------------------------ |
| `enum4linux -a <target>` | Perform full enumeration on a target |
| `enum4linux -U <target>` | Enumerate domain users               |
| `enum4linux -G <target>` | Enumerate domain groups              |
| `enum4linux -S <target>` | Enumerate SMB shares                 |
| `enum4linux -P <target>` | Enumerate password policies          |

### **Using CrackMapExec for Credential Attacks**

| Command                                                                     | Description                                   |
| --------------------------------------------------------------------------- | --------------------------------------------- |
| `crackmapexec smb <target> -u <user> -p <password> --exec-method smbexec` | Execute commands remotely via SMB             |
| `crackmapexec smb <target> -u <user> -p <password> --exec-method wmiexec` | Execute commands remotely via WMI             |
| `crackmapexec smb <target> -u <user> -p <password> --exec-method atexec`  | Execute commands remotely via scheduled tasks |

---

## 🔄 Workflows

### **Performing SMB Enumeration with CrackMapExec**

1. Run `crackmapexec smb <target> --shares` to list available SMB shares.
2. Use `crackmapexec smb <target> --users` to enumerate domain users.
3. Check for local admin privileges using `crackmapexec smb <target> --local-admins`.

### **Using enum4linux for Active Directory Reconnaissance**

1. Run `enum4linux -a <target>` for full enumeration.
2. Use `enum4linux -U <target>` to list domain users.
3. Retrieve password policies using `enum4linux -P <target>`.

### **Executing Remote Commands with CrackMapExec**

1. Authenticate using `crackmapexec smb <target> -u <user> -p <password>`.
2. Execute commands using `--exec-method smbexec`, `wmiexec`, or `atexec`.

---

## 💡 Examples

```sh
# Enumerate SMB shares using CrackMapExec
crackmapexec smb 192.168.1.100 --shares

# Perform full enumeration using enum4linux
enum4linux -a 192.168.1.100

# Execute remote command via SMB
crackmapexec smb 192.168.1.100 -u admin -p password --exec-method smbexec -x "whoami"
```

---

## 📚 References

- **[CrackMapExec Cheat Sheet](https://www.stationx.net/crackmapexec-cheat-sheet/)**
- **[Offensive Security CrackMapExec Cheatsheet](https://cheatsheet.haax.fr/windows-systems/exploitation/crackmapexec/)**

```
<!-- end list -->
```
