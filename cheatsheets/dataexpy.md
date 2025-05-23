title: Data Extraction using Python Cheatsheet

category: Web Scraping
description: A quick reference guide for essential Python libraries, functions, and workflows for efficient data extraction.

---

## 🛠️ Commands

### **File-Based Data Extraction**

| Command                                     | Description                  |
| ------------------------------------------- | ---------------------------- |
| `open("file.txt", "r")`                   | Read data from a text file   |
| `pd.read_csv("data.csv")`                 | Load CSV data using Pandas   |
| `pd.read_excel("data.xlsx")`              | Load Excel data using Pandas |
| `json.load(open("data.json"))`            | Load JSON data               |
| `xml.etree.ElementTree.parse("data.xml")` | Parse XML data               |

### **Web Scraping & API Extraction**

| Command                                      | Description                    |
| -------------------------------------------- | ------------------------------ |
| `requests.get("https://example.com")`      | Fetch webpage content          |
| `BeautifulSoup(html, "html.parser")`       | Parse HTML using BeautifulSoup |
| `soup.find("div", class_="content")`       | Extract specific HTML elements |
| `json.loads(requests.get("api_url").text)` | Extract JSON data from an API  |
| `selenium.webdriver.Chrome()`              | Automate browser interaction   |

### **Database Extraction**

| Command                                                   | Description                |
| --------------------------------------------------------- | -------------------------- |
| `sqlite3.connect("database.db")`                        | Connect to SQLite database |
| `cursor.execute("SELECT * FROM table")`                 | Execute SQL query          |
| `pd.read_sql("SELECT * FROM table", conn)`              | Load SQL data into Pandas  |
| `sqlalchemy.create_engine("mysql://user:pass@host/db")` | Connect to MySQL database  |
| `cursor.fetchall()`                                     | Retrieve all query results |

### **Text & Log File Processing**

| Command                         | Description                 |
| ------------------------------- | --------------------------- |
| `re.findall(r"\d+", text)`    | Extract numbers using regex |
| `log.readlines()`             | Read log file line by line  |
| `text.split("\n")`            | Split text into lines       |
| `csv.reader(open("log.csv"))` | Read CSV log files          |
| `json.dumps(data, indent=4)`  | Format extracted JSON data  |

---

## 🔄 Workflows

### **Extracting Data from a Webpage**

1. Fetch webpage content using `requests.get()`.
2. Parse HTML using `BeautifulSoup()`.
3. Extract specific elements using `soup.find()`.

### **Extracting Data from an API**

1. Send a request using `requests.get()`.
2. Convert response to JSON using `json.loads()`.
3. Process extracted data using Pandas or NumPy.

### **Extracting Data from a Database**

1. Connect to the database using `sqlite3.connect()`.
2. Execute SQL queries using `cursor.execute()`.
3. Load results into Pandas using `pd.read_sql()`.

---

## 💡 Examples

```python
# Extract data from a CSV file
import pandas as pd
df = pd.read_csv("data.csv")
print(df.head())

# Extract data from a webpage
import requests
from bs4 import BeautifulSoup
html = requests.get("https://example.com").text
soup = BeautifulSoup(html, "html.parser")
print(soup.title.text)

# Extract data from an API
import json
response = requests.get("https://api.example.com/data")
data = json.loads(response.text)
print(data)
```

---

## 📚 References

- **[Python Data Extraction Guide](https://www.joffreymayer.com/post/python-cheat-sheet-for-data-science/)**
- **[Python Cheat Sheet for Data Engineers](https://dev.to/pavanbelagatti/python-cheat-sheet-for-data-engineers-and-data-scientists-3emj)**
- **[GeeksforGeeks Python Cheat Sheet](https://www.geeksforgeeks.org/python-cheat-sheet/)**

```
<!-- end list -->
```
