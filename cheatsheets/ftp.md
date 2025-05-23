title: FTP Cheatsheet

category: File Sharing
description: A quick reference guide for essential FTP commands, authentication, and file management.

---

## 🛠️ Commands

### **Basic FTP Operations**

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `ftp hostname`  | Connect to an FTP server                 |
| `open hostname` | Open a connection to a remote FTP server |
| `quit`          | Exit the FTP session                     |
| `bye`           | Close the FTP connection                 |

### **Authentication & Login**

| Command                   | Description                           |
| ------------------------- | ------------------------------------- |
| `ftp username@hostname` | Connect using a username              |
| `anonymous`             | Log in as an anonymous user           |
| `pass password`         | Enter the password for authentication |

### **File Transfers**

| Command          | Description                                |
| ---------------- | ------------------------------------------ |
| `get filename` | Download a file from the server            |
| `put filename` | Upload a file to the server                |
| `mget *.txt`   | Download multiple files matching a pattern |
| `mput *.jpg`   | Upload multiple files matching a pattern   |

### **Directory & File Management**

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `ls`              | List files in the current directory |
| `pwd`             | Show the current directory path     |
| `cd directory`    | Change to a different directory     |
| `mkdir directory` | Create a new directory              |
| `rmdir directory` | Remove a directory                  |

### **Advanced FTP Commands**

| Command    | Description                                  |
| ---------- | -------------------------------------------- |
| `binary` | Switch to binary mode for file transfers     |
| `ascii`  | Switch to ASCII mode for text file transfers |
| `hash`   | Display transfer progress using hash marks   |
| `status` | Show the current FTP session status          |

---

## 🔄 Workflows

### **Connecting & Authenticating**

1. Open an FTP session using `ftp hostname`.
2. Enter the username and password for authentication.
3. Use `ls` to list available files.

### **Downloading & Uploading Files**

1. Download a file using `get filename`.
2. Upload a file using `put filename`.
3. Transfer multiple files using `mget *.txt` or `mput *.jpg`.

### **Managing Directories**

1. Navigate using `cd directory`.
2. Create a directory using `mkdir directory`.
3. Remove a directory using `rmdir directory`.

---

## 💡 Examples

```sh
# Connect to an FTP server
ftp example.com

# Download a file
get report.pdf

# Upload a file
put image.jpg
```

---

## 📚 References

- **[Basic FTP Commands](https://www.cs.colostate.edu/helpdocs/ftp.html)^2^**
- **[List of FTP Commands](https://en.wikipedia.org/wiki/List_of_FTP_commands)^3^**

```
<!-- end list -->t
```
