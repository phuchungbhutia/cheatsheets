title: Data Extraction using JavaScript Cheatsheet

category: Web Scraping
description: A quick reference guide for essential JavaScript libraries, functions, and workflows for efficient data extraction.

---

## 🛠️ Commands

### **File-Based Data Extraction**

| Command                                                       | Description                              |
| ------------------------------------------------------------- | ---------------------------------------- |
| `fs.readFileSync("data.txt", "utf8")`                       | Read data from a text file using Node.js |
| `fs.readFile("data.json", (err, data) => JSON.parse(data))` | Load JSON data asynchronously            |
| `csv-parser`                                                | Parse CSV files in Node.js               |
| `xml2js.parseString(xml, (err, result) => {...})`           | Parse XML data                           |

### **Web Scraping & API Extraction**

| Command                                                  | Description                           |
| -------------------------------------------------------- | ------------------------------------- |
| `fetch("https://example.com")`                         | Fetch webpage content using Fetch API |
| `axios.get("https://example.com")`                     | Fetch webpage content using Axios     |
| `document.querySelector(".content")`                   | Extract specific HTML elements        |
| `cheerio.load(html).find("div.title").text()`          | Parse HTML using Cheerio              |
| `json.parse(fetch("api_url").then(res => res.json()))` | Extract JSON data from an API         |

### **Database Extraction**

| Command                                        | Description                    |
| ---------------------------------------------- | ------------------------------ |
| `mysql.createConnection({...})`              | Connect to MySQL database      |
| `db.collection("users").find({})`            | Query MongoDB database         |
| `sqlite3.Database("database.db")`            | Connect to SQLite database     |
| `pg.connect("postgres://user:pass@host/db")` | Connect to PostgreSQL database |

### **Text & Log File Processing**

| Command                                        | Description                 |
| ---------------------------------------------- | --------------------------- |
| `text.match(/\d+/g)`                         | Extract numbers using regex |
| `fs.readFileSync("log.txt").split("\n")`     | Read log file line by line  |
| `csv.parse("log.csv", (err, data) => {...})` | Read CSV log files          |
| `JSON.stringify(data, null, 4)`              | Format extracted JSON data  |

---

## 🔄 Workflows

### **Extracting Data from a Webpage**

1. Fetch webpage content using `fetch()`.
2. Parse HTML using `Cheerio`.
3. Extract specific elements using `querySelector()`.

### **Extracting Data from an API**

1. Send a request using `fetch()`.
2. Convert response to JSON using `.json()`.
3. Process extracted data using JavaScript functions.

### **Extracting Data from a Database**

1. Connect to the database using `mysql.createConnection()`.
2. Execute SQL queries using `.query()`.
3. Process results using JavaScript objects.

---

## 💡 Examples

```javascript
// Extract data from a webpage
const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://example.com").then(response => {
    const $ = cheerio.load(response.data);
    console.log($("h1").text());
});

// Extract data from an API
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));

// Extract data from a CSV file
const fs = require("fs");
const csv = require("csv-parser");

fs.createReadStream("data.csv")
    .pipe(csv())
    .on("data", row => console.log(row));
```

---

## 📚 References

- **[JavaScript Web Scraping Guide](https://usescraper.com/blog/data-extraction-and-parsing-with-javascript)**
- **[XPath Cheat Sheet for Web Scraping](https://www.scrapehero.com/xpath-cheat-sheet-for-web-scraping/)**

```
<!-- end list -->
```
