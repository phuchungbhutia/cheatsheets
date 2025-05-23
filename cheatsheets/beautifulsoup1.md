title: BeautifulSoup Cheatsheet

category: Web Scraping
description: A quick reference guide for essential BeautifulSoup commands, parsing techniques, and best practices for extracting data from web pages.

---

## 🛠️ Commands

### **Basic BeautifulSoup Operations**

| Command                                       | Description                           |
| --------------------------------------------- | ------------------------------------- |
| `from bs4 import BeautifulSoup`             | Import BeautifulSoup for parsing HTML |
| `soup = BeautifulSoup(html, 'html.parser')` | Create a BeautifulSoup object         |
| `soup.prettify()`                           | Format HTML for better readability    |
| `soup.title.string`                         | Extract the page title                |

### **Searching & Filtering Elements**

| Command                                      | Description                        |
| -------------------------------------------- | ---------------------------------- |
| `soup.find('tag')`                         | Find the first occurrence of a tag |
| `soup.find_all('tag')`                     | Find all occurrences of a tag      |
| `soup.find('tag', {'class': 'classname'})` | Find a tag with a specific class   |
| `soup.select('css-selector')`              | Use CSS selectors to find elements |

### **Navigating the Parse Tree**

| Command                       | Description                      |
| ----------------------------- | -------------------------------- |
| `soup.tag.parent`           | Get the parent of a tag          |
| `soup.tag.children`         | Get all child elements of a tag  |
| `soup.tag.next_sibling`     | Get the next sibling element     |
| `soup.tag.previous_sibling` | Get the previous sibling element |

### **Extracting Attributes & Text**

| Command                           | Description                       |
| --------------------------------- | --------------------------------- |
| `soup.tag['href']`              | Extract an attribute value        |
| `soup.get_text()`               | Extract all text from an element  |
| `soup.find('tag').text.strip()` | Extract and clean text from a tag |

### **Modifying & Editing HTML**

| Command                                      | Description                      |
| -------------------------------------------- | -------------------------------- |
| `soup.tag.string.replace_with('New Text')` | Replace text inside a tag        |
| `new_tag = soup.new_tag('tag')`            | Create a new tag                 |
| `soup.tag.insert(1, new_tag)`              | Insert a new tag into an element |

---

## 🔄 Workflows

### **Parsing an HTML Page**

1. Load the HTML using `requests.get(url).text`.
2. Create a BeautifulSoup object using `soup = BeautifulSoup(html, 'html.parser')`.
3. Extract elements using `soup.find('tag')`.

### **Extracting Links from a Web Page**

1. Use `soup.find_all('a')` to find all anchor tags.
2. Extract URLs using `[link.get('href') for link in soup.find_all('a')]`.

### **Scraping Tables & Lists**

1. Locate the table using `soup.find('table')`.
2. Extract rows using `soup.find_all('tr')`.
3. Extract individual cells using `soup.find_all('td')`.

---

## 💡 Examples

```python
# Import BeautifulSoup
from bs4 import BeautifulSoup
import requests

# Fetch HTML content
url = "https://example.com"
html = requests.get(url).text
soup = BeautifulSoup(html, 'html.parser')

# Extract all links
links = [link.get('href') for link in soup.find_all('a')]
print(links)
```

---

## 📚 References

- **[BeautifulSoup Cheatsheet with Code Samples](https://scrapingant.com/blog/beautifulsoup-cheatsheet)**
- **[Web Scraping with Python Beautiful Soup](https://howtodoinjava.com/python/beautifulsoup-example-cheat-sheet/)**
- **[The Complete BeautifulSoup Cheatsheet](https://proxiesapi.com/articles/the-complete-beautifulsoup-cheatsheet-with-examples)**

```
<!-- end list -->
```
