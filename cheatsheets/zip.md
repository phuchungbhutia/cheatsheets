title: Archive Zip Handling in Linux Cheatsheet

category: File Compression
description: A quick reference guide for essential zip and unzip commands in Linux, including compression, extraction, and advanced options.

---

## 🛠️ Commands

### **Creating & Compressing Zip Files**

| Command                         | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `zip archive.zip file1 file2` | Create a zip archive containing multiple files |
| `zip -r archive.zip folder/`  | Compress an entire folder recursively          |
| `zip -9 archive.zip file.txt` | Use maximum compression level                  |
| `zip -e archive.zip file.txt` | Create a password-protected zip file           |
| `zip -m archive.zip file.txt` | Move files into the archive (delete originals) |

### **Extracting & Managing Zip Files**

| Command                                | Description                                    |
| -------------------------------------- | ---------------------------------------------- |
| `unzip archive.zip`                  | Extract all files from a zip archive           |
| `unzip archive.zip -d /destination/` | Extract files to a specific directory          |
| `unzip -l archive.zip`               | List contents of a zip file without extracting |
| `unzip -t archive.zip`               | Test integrity of a zip file                   |
| `unzip -P password archive.zip`      | Extract a password-protected zip file          |

### **Modifying Zip Archives**

| Command                                   | Description                                   |
| ----------------------------------------- | --------------------------------------------- |
| `zip -u archive.zip newfile.txt`        | Update an existing zip archive with new files |
| `zip -d archive.zip file.txt`           | Remove a specific file from a zip archive     |
| `zip -r archive.zip folder/ -x "*.log"` | Exclude specific file types from compression  |
| `zip -FS archive.zip`                   | Remove duplicate files from a zip archive     |

### **Advanced Zip Handling**

| Command                             | Description                                   |
| ----------------------------------- | --------------------------------------------- |
| `zipinfo archive.zip`             | Display detailed information about a zip file |
| `zip -s 10m archive.zip`          | Split a large zip file into 10MB chunks       |
| `cat archive.zip.* > archive.zip` | Merge split zip files back into one           |
| `unzip -o archive.zip`            | Overwrite existing files when extracting      |

---

## 🔄 Workflows

### **Creating & Extracting Zip Files**

1. Compress files using `zip archive.zip file1 file2`.
2. Extract files using `unzip archive.zip`.
3. List archive contents using `unzip -l archive.zip`.

### **Handling Password-Protected Archives**

1. Create a password-protected zip using `zip -e archive.zip file.txt`.
2. Extract using `unzip -P password archive.zip`.
3. Test integrity using `unzip -t archive.zip`.

### **Managing Large Archives**

1. Split a large archive using `zip -s 10m archive.zip`.
2. Merge split files using `cat archive.zip.* > archive.zip`.
3. Extract using `unzip archive.zip`.

---

## 💡 Examples

```sh
# Create a zip archive
zip archive.zip file1.txt file2.txt

# Extract files to a specific directory
unzip archive.zip -d /home/user/documents/

# Remove a file from a zip archive
zip -d archive.zip file.txt
```

---

## 📚 References

- **[Linux Zip Command Guide](https://www.geeksforgeeks.org/zip-command-in-linux-with-examples/)^2^**
- **[Linux Zip Commands Cheat Sheet](https://gist.github.com/montgomerykern/697db5c84d09125714b97a7888697d8b)^3^**

```
<!-- end list -->
```
