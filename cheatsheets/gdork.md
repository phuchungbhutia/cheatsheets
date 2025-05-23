title: Google Dork Cheatsheet

category: Google
description: A quick reference guide for essential Google Dork operators, commands, and workflows for efficient information retrieval.

---

## 🛠️ Commands

### **Basic Search Operators**

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `"exact phrase"`  | Search for an exact phrase           |
| `word1 OR word2`  | Search for either word1 or word2     |
| `word1 AND word2` | Search for both words together       |
| `-word`           | Exclude a word from search results   |
| `*`               | Acts as a wildcard for unknown words |
| `#..#`            | Search for numbers within a range    |

### **Site-Specific Searches**

| Command              | Description                                |
| -------------------- | ------------------------------------------ |
| `site:example.com` | Search within a specific website           |
| `inurl:keyword`    | Search for pages with keyword in the URL   |
| `intitle:keyword`  | Search for pages with keyword in the title |
| `filetype:pdf`     | Search for specific file types             |

### **Security & Vulnerability Searches**

| Command                  | Description                     |
| ------------------------ | ------------------------------- |
| `inurl:admin`          | Find admin login pages          |
| `intitle:"index of /"` | Search for open directories     |
| `filetype:log`         | Search for exposed log files    |
| `ext:sql`              | Find exposed SQL database files |

### **Advanced Search Features**

| Command                 | Description                             |
| ----------------------- | --------------------------------------- |
| `related:example.com` | Find websites similar to example.com    |
| `link:example.com`    | Find pages linking to example.com       |
| `define:word`         | Get the definition of a word            |
| `cache:example.com`   | View Google’s cached version of a page |

---

## 🔄 Workflows

### **Finding Specific Information**

1. Use `site:example.com` to search within a website.
2. Apply `intitle:keyword` to find pages with relevant titles.
3. Use `filetype:pdf` to locate downloadable documents.

### **Filtering Search Results**

1. Use `-word` to exclude irrelevant results.
2. Apply `after:YYYY-MM-DD` for recent updates.
3. Use `related:example.com` to find similar sites.

### **Security & Ethical Considerations**

1. Google Dorking should be used responsibly.
2. Avoid searching for sensitive or private data.
3. Respect website terms of service and privacy policies.

---

## 💡 Examples

```shell
# Search for PDFs on cybersecurity
cybersecurity filetype:pdf

# Find login pages on a website
site:example.com inurl:login

# Get the cached version of a webpage
cache:example.com
```

---

## 📚 References

- **[Google Dorking Cheat Sheet](https://gist.github.com/sundowndev/283efaddbcf896ab405488330d1bbc06)**
- **[Google Dorks Cheat Sheet 2025](https://www.stationx.net/google-dorks-cheat-sheet/)**
- **[GitHub Google Dorking Guide](https://github.com/chr3st5an/Google-Dorking)**

```
<!-- end list -->
```
