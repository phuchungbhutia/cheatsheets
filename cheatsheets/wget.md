title: Wget Cheatsheet

category: Linux
description: A quick reference guide for using the `wget` command to download files, mirror websites, and manage network requests.

---

## 🛠️ Commands

### **Basic Wget Operations**

| Command                            | Description                             |
| ---------------------------------- | --------------------------------------- |
| `wget URL`                       | Download a file from a URL              |
| `wget -O filename URL`           | Save the file with a specific name      |
| `wget -P /path/to/directory URL` | Download a file to a specific directory |
| `wget -c URL`                    | Resume an interrupted download          |
| `wget -i urls.txt`               | Download multiple files from a list     |

### **Advanced Download Options**

| Command                                          | Description                             |
| ------------------------------------------------ | --------------------------------------- |
| `wget -r URL`                                  | Download an entire website recursively  |
| `wget -m URL`                                  | Mirror a website                        |
| `wget --limit-rate=500k URL`                   | Limit download speed to 500 KB/s        |
| `wget --no-check-certificate URL`              | Ignore SSL certificate errors           |
| `wget --user=username --password=password URL` | Download from a password-protected site |

### **Filtering & Customization**

| Command                       | Description                                      |
| ----------------------------- | ------------------------------------------------ |
| `wget -A "*.jpg,*.png"`     | Download only specific file types                |
| `wget -R "*.zip"`           | Exclude specific file types                      |
| `wget -np -nd -r URL`       | Download files without creating directories      |
| `wget -U "Mozilla/5.0" URL` | Set a custom user agent                          |
| `wget --spider URL`         | Check if a URL is accessible without downloading |

---

## 🔄 Workflows

### **Downloading Files Efficiently**

1. Use `wget URL` to download a file.
2. Resume downloads using `wget -c URL`.
3. Save files with a custom name using `wget -O filename URL`.

### **Mirroring Websites**

1. Use `wget -m URL` to create a local copy.
2. Download recursively using `wget -r URL`.
3. Exclude unnecessary files using `wget -R "*.zip"`.

### **Managing Network Requests**

1. Set a custom user agent using `wget -U "Mozilla/5.0"`.
2. Limit download speed using `wget --limit-rate=500k`.
3. Authenticate with credentials using `wget --user=username --password=password URL`.

---

## 💡 Examples

```bash
# Example: Download a file and save it with a custom name
wget -O myfile.zip https://example.com/file.zip
```

```bash
# Example: Mirror an entire website
wget -m https://example.com
```

```bash
# Example: Download all images from a website
wget -r -A "*.jpg,*.png" https://example.com
```

---

## 📚 References

- **[Wget Cheat Sheet on GitHub](https://gist.github.com/Dammmien/4af98e05f9c51c2da007cc70d62bf562)**
- **[15+ Wget Command Examples](https://www.golinuxcloud.com/wget-command-in-linux/)**

```
<!-- end list -->
```
