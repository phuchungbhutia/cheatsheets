title: Web Scraping Cheatsheet

category: Web Scraping
description: A quick reference guide for essential web scraping techniques, libraries, and workflows for efficient data collection.

---

## 🛠️ Commands

### **Basic Web Scraping Techniques**

| Command                                      | Description                                 |
| -------------------------------------------- | ------------------------------------------- |
| `requests.get("https://example.com")`      | Fetch webpage content using Python Requests |
| `BeautifulSoup(html, "html.parser")`       | Parse HTML using BeautifulSoup              |
| `soup.find("div", class_="content")`       | Extract specific HTML elements              |
| `json.loads(requests.get("api_url").text)` | Extract JSON data from an API               |
| `selenium.webdriver.Chrome()`              | Automate browser interaction                |

### **JavaScript-Based Scraping**

| Command                                                         | Description                               |
| --------------------------------------------------------------- | ----------------------------------------- |
| `puppeteer.launch()`                                          | Launch a headless browser using Puppeteer |
| `page.evaluate(() => document.querySelector("h1").innerText)` | Extract text from a webpage               |
| `page.click("button")`                                        | Simulate button clicks                    |
| `page.screenshot({ path: "screenshot.png" })`                 | Capture a screenshot of the page          |

### **XPath & CSS Selectors**

| Command                           | Description                          |
| --------------------------------- | ------------------------------------ |
| `soup.select("div.content")`    | Extract elements using CSS selectors |
| `soup.xpath("//h1/text()")`     | Extract elements using XPath         |
| `soup.find_all("a", href=True)` | Extract all links from a page        |

### **Handling Dynamic Content**

| Command                                                                 | Description                      |
| ----------------------------------------------------------------------- | -------------------------------- |
| `selenium.webdriver.Chrome()`                                         | Load JavaScript-heavy pages      |
| `page.waitForSelector("div.content")`                                 | Wait for an element to load      |
| `page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))` | Scroll to the bottom of the page |

---

## 🔄 Workflows

### **Extracting Data from a Webpage**

1. Fetch webpage content using `requests.get()`.
2. Parse HTML using `BeautifulSoup()`.
3. Extract specific elements using `soup.find()`.

### **Scraping JavaScript-Rendered Pages**

1. Launch a headless browser using `puppeteer.launch()`.
2. Navigate to the webpage using `page.goto()`.
3. Extract dynamic content using `page.evaluate()`.

### **Handling Pagination & Infinite Scroll**

1. Detect pagination links using `soup.find_all("a", class_="next")`.
2. Automate scrolling using `page.evaluate()`.
3. Extract new data as it loads dynamically.

---

## 💡 Examples

```python
# Extract data from a webpage
import requests
from bs4 import BeautifulSoup

html = requests.get("https://example.com").text
soup = BeautifulSoup(html, "html.parser")
print(soup.title.text)

# Scrape JavaScript-rendered content
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com")
print(driver.page_source)
driver.quit()
```

---

## 📚 References

- **[Web Scraping Cheat Sheet](https://blog.hartleybrody.com/web-scraping-cheat-sheet/)**
- **[BeautifulSoup Cheat Sheet](https://howtodoinjava.com/python/beautifulsoup-example-cheat-sheet/)**
- **[Web Scraping with R Cheat Sheet](https://github.com/yusuzech/r-web-scraping-cheat-sheet)**

```
<!-- end list -->
```
