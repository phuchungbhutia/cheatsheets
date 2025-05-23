title: PowerShell Cheatsheet

category: PowerShell
description: A quick reference guide for essential PowerShell commands, workflows, and examples for efficient automation and scripting.

---

## 🛠️ Commands

| Command                                  | Description                               |
| ---------------------------------------- | ----------------------------------------- |
| `Get-Help [cmd]`                       | Display help information for a command    |
| `Get-Command`                          | List all available commands               |
| `Get-Alias`                            | Show command aliases                      |
| `Get-Location`                         | Display the current directory             |
| `Set-Location [dir]`                   | Change directory                          |
| `New-Item [name] -ItemType File`       | Create a new file                         |
| `New-Item [name] -ItemType Directory`  | Create a new directory                    |
| `Remove-Item [file]`                   | Delete a file or directory                |
| `Copy-Item [src] [dest]`               | Copy files or directories                 |
| `Move-Item [src] [dest]`               | Move or rename a file                     |
| `Rename-Item [file] [newname]`         | Rename a file or directory                |
| `Write-Output "[text]"`                | Print text to the terminal                |
| `Get-Content [file]`                   | Display file contents                     |
| `Set-Content [file] "[text]"`          | Write text to a file                      |
| `Add-Content [file] "[text]"`          | Append text to a file                     |
| `Select-String -Pattern [text] [file]` | Search for a pattern in a file            |
| `Test-Path [file]`                     | Check if a file or directory exists       |
| `Get-Process`                          | List running processes                    |
| `Stop-Process -Name [process]`         | Stop a process                            |
| `Start-Process [program]`              | Start a program                           |
| `Get-Service`                          | Display system services                   |
| `Restart-Service [service]`            | Restart a service                         |
| `Get-ChildItem [dir]`                  | List items in a directory                 |
| `Get-Item [file]`                      | Retrieve file or directory properties     |
| `Measure-Object`                       | Get statistics on a collection of objects |

---

## 🔄 Workflows

### **File Management**

1. Navigate to a directory:
   ```powershell
   Set-Location C:\Users\Documents
   ```
2. List all files:
   ```powershell
   Get-ChildItem
   ```
3. Create a new file:
   ```powershell
   New-Item example.txt -ItemType File
   ```
4. Move a file to another directory:
   ```powershell
   Move-Item example.txt C:\Users\Documents\Backup\
   ```
5. Remove a file permanently:
   ```powershell
   Remove-Item example.txt
   ```

### **Script Creation & Execution**

1. Open PowerShell ISE or Notepad and create a new script file:
   ```powershell
   New-Item script.ps1 -ItemType File
   ```
2. Edit the script file (`notepad script.ps1`) and add a basic command:
   ```powershell
   Write-Output "Hello, PowerShell!"
   ```
3. Save and exit.
4. Run the script using:
   ```powershell
   .\script.ps1
   ```
5. Allow script execution (if required):
   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```

### **Process & System Management**

1. View currently running processes:
   ```powershell
   Get-Process
   ```
2. Kill a process by name:
   ```powershell
   Stop-Process -Name notepad
   ```
3. Restart a specific service:
   ```powershell
   Restart-Service spooler
   ```
4. Get detailed system information:
   ```powershell
   Get-ComputerInfo
   ```

---

## 💡 Examples

```powershell
# Print "Hello, World!" to the terminal
Write-Output "Hello, World!"

# Get all files larger than 10MB
Get-ChildItem -Path C:\Users\Documents -File | Where-Object { $_.Length -gt 10MB }

# Search for "error" in a log file
Select-String -Pattern "error" -Path C:\Logs\system.log

# Restart multiple services
Restart-Service "wuauserv", "bits"

# Get system IP address
Get-NetIPAddress
```

---

## 📚 References

- **PowerShell Documentation**: [https://docs.microsoft.com/en-us/powershell/](https://docs.microsoft.com/en-us/powershell/)
- **PowerShell Commands Cheat Sheet**: [https://ss64.com/ps/](https://ss64.com/ps/)
- **Microsoft PowerShell Guide**: [https://devblogs.microsoft.com/powershell/](https://devblogs.microsoft.com/powershell/)
- **Advanced PowerShell Scripting**: [https://www.powershellgallery.com/](https://www.powershellgallery.com/)

```
<!-- end list -->
```
