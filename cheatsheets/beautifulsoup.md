title: lxml with BeautifulSoup Cheatsheet

category: Web Scraping
description: A quick reference guide for using lxml with BeautifulSoup to efficiently parse and extract data from web pages.

---

## 🛠️ Commands

### **Basic Setup**

| Command                             | Description                    |
| ----------------------------------- | ------------------------------ |
| `pip install beautifulsoup4 lxml` | Install BeautifulSoup and lxml |
| `from bs4 import BeautifulSoup`   | Import BeautifulSoup           |
| `from lxml import etree`          | Import lxml for XML parsing    |

### **Parsing HTML with lxml**

| Command                                | Description                        |
| -------------------------------------- | ---------------------------------- |
| `soup = BeautifulSoup(html, 'lxml')` | Parse HTML using lxml              |
| `soup.prettify()`                    | Format HTML for better readability |
| `soup.title.string`                  | Extract the page title             |

### **Extracting Elements**

| Command                                      | Description                        |
| -------------------------------------------- | ---------------------------------- |
| `soup.find('tag')`                         | Find the first occurrence of a tag |
| `soup.find_all('tag')`                     | Find all occurrences of a tag      |
| `soup.find('tag', {'class': 'classname'})` | Find a tag with a specific class   |
| `soup.select('css-selector')`              | Use CSS selectors to find elements |

### **Using XPath with lxml**

| Command                                     | Description                               |
| ------------------------------------------- | ----------------------------------------- |
| `tree = etree.HTML(str(soup))`            | Convert BeautifulSoup object to lxml tree |
| `tree.xpath('//tag')`                     | Find all elements with a specific tag     |
| `tree.xpath('//tag[@attribute="value"]')` | Find elements with a specific attribute   |
| `tree.xpath('//tag/text()')`              | Extract text from elements                |

### **Extracting Attributes & Text**

| Command                           | Description                       |
| --------------------------------- | --------------------------------- |
| `soup.tag['href']`              | Extract an attribute value        |
| `soup.get_text()`               | Extract all text from an element  |
| `soup.find('tag').text.strip()` | Extract and clean text from a tag |

---

## 🔄 Workflows

### **Parsing an HTML Page**

1. Load the HTML using `requests.get(url).text`.
2. Create a BeautifulSoup object using `soup = BeautifulSoup(html, 'lxml')`.
3. Extract elements using `soup.find('tag')`.

### **Using XPath for Advanced Extraction**

1. Convert the BeautifulSoup object to an lxml tree using `tree = etree.HTML(str(soup))`.
2. Use `tree.xpath('//tag/text()')` to extract text.
3. Use `tree.xpath('//tag[@attribute="value"]')` to filter elements.

### **Extracting Links from a Web Page**

1. Use `soup.find_all('a')` to find all anchor tags.
2. Extract URLs using `[link.get('href') for link in soup.find_all('a')]`.

---

## 💡 Examples

```python
# Parsing HTML with BeautifulSoup and lxml
from bs4 import BeautifulSoup
import requests
from lxml import etree

url = "https://example.com"
html = requests.get(url).text
soup = BeautifulSoup(html, 'lxml')

# Convert to lxml tree
tree = etree.HTML(str(soup))

# Extract all links using XPath
links = tree.xpath("//a/@href")
print(links)
```

---

## 📚 References

- **[How to Use lxml with BeautifulSoup](https://www.geeksforgeeks.org/how-to-use-lxml-with-beautifulsoup-in-python/)**
- **[Python BeautifulSoup Example Cheat Sheet](https://www.javacodegeeks.com/python-beautifulsoup-example-cheat-sheet.html)**
- **[Web Scraping with Python BeautifulSoup](https://howtodoinjava.com/python/beautifulsoup-example-cheat-sheet/)**

```
<!-- end list -->
```
