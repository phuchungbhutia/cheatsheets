title: Curl Cheatsheet

category: File Transfers
description: A quick reference guide for essential Curl commands, options, and workflows for interacting with APIs, downloading files, and testing network connections.

---

## 🛠️ Commands

### **Basic Curl Operations**

| Command                                            | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- |
| `curl http://example.com`                        | Fetch a webpage                                    |
| `curl -O http://example.com/file.zip`            | Download a file and save it with its original name |
| `curl -o myfile.zip http://example.com/file.zip` | Download a file and rename it                      |
| `curl -L http://example.com`                     | Follow redirects                                   |
| `curl -I http://example.com`                     | Fetch only HTTP headers                            |

### **Handling HTTP Methods**

| Command                                             | Description                   |
| --------------------------------------------------- | ----------------------------- |
| `curl -X GET http://example.com`                  | Perform a GET request         |
| `curl -X POST http://example.com -d "name=value"` | Send a POST request with data |
| `curl -X PUT http://example.com -d "name=value"`  | Send a PUT request            |
| `curl -X DELETE http://example.com`               | Perform a DELETE request      |

### **Authentication & Headers**

| Command                                                                              | Description                  |
| ------------------------------------------------------------------------------------ | ---------------------------- |
| `curl -u user:password http://example.com`                                         | Basic authentication         |
| `curl -H "Authorization: Bearer token" http://example.com`                         | Send an authorization header |
| `curl -H "Content-Type: application/json" -d '{"key":"value"}' http://example.com` | Send JSON data               |
| `curl -H "User-Agent: CustomAgent" http://example.com`                             | Set a custom user agent      |

### **Handling Cookies & Sessions**

| Command                                           | Description              |
| ------------------------------------------------- | ------------------------ |
| `curl -b cookies.txt http://example.com`        | Send cookies from a file |
| `curl -c cookies.txt http://example.com`        | Save cookies to a file   |
| `curl --cookie "name=value" http://example.com` | Send a cookie manually   |

### **SSL & Security Options**

| Command                                        | Description                   |
| ---------------------------------------------- | ----------------------------- |
| `curl -k https://example.com`                | Ignore SSL certificate errors |
| `curl --cert mycert.pem https://example.com` | Use a client certificate      |
| `curl --cacert ca.pem https://example.com`   | Specify a CA certificate      |

### **Advanced Curl Usage**

| Command                                                   | Description              |
| --------------------------------------------------------- | ------------------------ |
| `curl --limit-rate 100k http://example.com/file.zip`    | Limit download speed     |
| `curl --connect-timeout 10 http://example.com`          | Set a connection timeout |
| `curl --proxy http://proxy.com:8080 http://example.com` | Use a proxy server       |
| `curl -F "file=@myfile.txt" http://example.com/upload`  | Upload a file            |

---

## 🔄 Workflows

### **Downloading & Saving Files**

1. Use `curl -O http://example.com/file.zip` to download a file.
2. Rename the file using `curl -o myfile.zip http://example.com/file.zip`.
3. Limit download speed using `curl --limit-rate 100k http://example.com/file.zip`.

### **Interacting with APIs**

1. Perform a GET request using `curl -X GET http://api.example.com`.
2. Send JSON data using `curl -H "Content-Type: application/json" -d '{"key":"value"}' http://api.example.com`.
3. Authenticate using `curl -H "Authorization: Bearer token" http://api.example.com`.

### **Handling Cookies & Sessions**

1. Save cookies using `curl -c cookies.txt http://example.com`.
2. Send cookies using `curl -b cookies.txt http://example.com`.
3. Manually set a cookie using `curl --cookie "name=value" http://example.com`.

---

## 💡 Examples

```sh
# Fetch a webpage
curl http://example.com

# Send a POST request with JSON data
curl -H "Content-Type: application/json" -d '{"key":"value"}' http://api.example.com

# Download a file and rename it
curl -o myfile.zip http://example.com/file.zip
```

---

## 📚 References

- **[Curl Command Cheat Sheet](https://quickref.me/curl.html)**
- **[Linux Curl Cheat Sheet](https://linuxopsys.com/curl-command-cheat-sheet)**

```
<!-- end list -->
```
