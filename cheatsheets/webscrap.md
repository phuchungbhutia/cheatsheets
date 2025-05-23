title: Web Scraping Cheatsheet

category: Web Scraping
description: A quick reference guide for essential web scraping techniques, libraries, and best practices for extracting data from websites.

---

## 🛠️ Libraries & Tools

### **Python-Based Web Scraping Libraries**

| Library                 | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| **Requests**      | Handles HTTP requests (`pip install requests`)              |
| **BeautifulSoup** | Parses HTML and XML (`pip install beautifulsoup4`)          |
| **Scrapy**        | Full-featured web scraping framework (`pip install scrapy`) |
| **Selenium**      | Automates browser interactions (`pip install selenium`)     |
| **lxml**          | Fast XML and HTML parsing (`pip install lxml`)              |

### **JavaScript-Based Web Scraping Tools**

| Tool                 | Description                                            |
| -------------------- | ------------------------------------------------------ |
| **Puppeteer**  | Headless Chrome automation (`npm install puppeteer`) |
| **Cheerio**    | Lightweight HTML parsing (`npm install cheerio`)     |
| **Playwright** | Cross-browser automation (`npm install playwright`)  |

---

## 🔄 Workflows

### **Basic Web Scraping with Python**

1. Send an HTTP request using `requests.get(url)`.
2. Parse the HTML using `BeautifulSoup(response.text, "html.parser")`.
3. Extract elements using `soup.find_all("tag")`.

### **Scraping JavaScript-Rendered Pages**

1. Use Selenium to open a browser session.
2. Navigate to the page using `driver.get(url)`.
3. Extract dynamic content using `driver.find_element_by_xpath()`.

### **Handling Pagination & Infinite Scrolling**

1. Identify the pagination structure (`next page` button or URL pattern).
2. Loop through pages using `requests.get(url + "?page=" + str(i))`.
3. Use Selenium for infinite scrolling (`driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")`).

---

## 💡 Examples

```python
# Basic web scraping with BeautifulSoup
import requests
from bs4 import BeautifulSoup

url = "https://example.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Extract all links
links = soup.find_all("a")
for link in links:
    print(link.get("href"))
```

```javascript
// Scraping with Puppeteer
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');

    const data = await page.evaluate(() => {
        return document.querySelector('h1').innerText;
    });

    console.log(data);
    await browser.close();
})();
```

---

## 📚 References

- **[BeautifulSoup Web Scraping Cheat Sheet](https://howtodoinjava.com/python/beautifulsoup-example-cheat-sheet/)**
- **[Python Web Scraping Cheat Sheet](https://blog.hartleybrody.com/web-scraping-cheat-sheet/)**
- **[Web Scraping with R Cheat Sheet](https://github.com/yusuzech/r-web-scraping-cheat-sheet)**

```
<!-- end list -->
```
