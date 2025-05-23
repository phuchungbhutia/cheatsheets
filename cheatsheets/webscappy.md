title: Web Scraping with Python Cheatsheet

category: Web Scraping
description: A quick reference guide for essential web scraping techniques, libraries, and best practices using Python.

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

```python
# Scraping with Selenium
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com")

# Extract text from an element
element = driver.find_element_by_xpath("//h1")
print(element.text)

driver.quit()
```

---

## 📚 References

- **[Web Scraping with Python Beautiful Soup](https://howtodoinjava.com/python/beautifulsoup-example-cheat-sheet/)**
- **[Web Scraping Reference: A Simple Cheat Sheet](https://blog.hartleybrody.com/web-scraping-cheat-sheet/)**
- **[The Complete BeautifulSoup Cheatsheet](https://proxiesapi.com/articles/the-complete-beautifulsoup-cheatsheet-with-examples)**

```
<!-- end list -->
```
