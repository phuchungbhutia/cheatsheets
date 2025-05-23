title: lxml Cheatsheet

category: Python
description: A quick reference guide for essential lxml commands, XPath queries, and best practices for parsing structured data.

---

## 🛠️ Commands

### **Basic lxml Operations**

| Command                                     | Description                         |
| ------------------------------------------- | ----------------------------------- |
| `from lxml import etree`                  | Import lxml for XML parsing         |
| `tree = etree.parse("file.xml")`          | Parse an XML file                   |
| `root = tree.getroot()`                   | Get the root element of an XML tree |
| `etree.tostring(root, pretty_print=True)` | Convert XML to a formatted string   |

### **Creating & Modifying XML Elements**

| Command                               | Description                    |
| ------------------------------------- | ------------------------------ |
| `element = etree.Element("tag")`    | Create a new XML element       |
| `element.text = "Hello"`            | Set text inside an element     |
| `element.set("attribute", "value")` | Add an attribute to an element |
| `parent.append(element)`            | Append a child element         |

### **XPath Queries**

| Command                                     | Description                             |
| ------------------------------------------- | --------------------------------------- |
| `root.xpath("//tag")`                     | Find all elements with a specific tag   |
| `root.xpath("//tag[@attribute='value']")` | Find elements with a specific attribute |
| `root.xpath("//tag/text()")`              | Extract text from elements              |
| `root.xpath("//tag[position()=1]")`       | Select the first occurrence of a tag    |

### **Parsing HTML with lxml**

| Command                                        | Description                         |
| ---------------------------------------------- | ----------------------------------- |
| `from lxml import html`                      | Import lxml for HTML parsing        |
| `tree = html.fromstring("<html>...</html>")` | Parse an HTML string                |
| `tree.xpath("//a/@href")`                    | Extract all links from an HTML page |

---

## 🔄 Workflows

### **Parsing an XML File**

1. Load the XML using `tree = etree.parse("file.xml")`.
2. Get the root element using `root = tree.getroot()`.
3. Extract data using `root.xpath("//tag/text()")`.

### **Modifying XML Elements**

1. Create a new element using `etree.Element("tag")`.
2. Set attributes using `element.set("attribute", "value")`.
3. Append the element to a parent using `parent.append(element)`.

### **Extracting Links from an HTML Page**

1. Parse the HTML using `tree = html.fromstring("<html>...</html>")`.
2. Use `tree.xpath("//a/@href")` to extract all links.

---

## 💡 Examples

```python
# Basic XML parsing with lxml
from lxml import etree

xml_data = "<root><child>Hello</child></root>"
tree = etree.fromstring(xml_data)

# Extract text from child element
text = tree.xpath("//child/text()")[0]
print(text)
```

```python
# Parsing HTML with lxml
from lxml import html

html_data = "<html><body><a href='https://example.com'>Link</a></body></html>"
tree = html.fromstring(html_data)

# Extract all links
links = tree.xpath("//a/@href")
print(links)
```

---

## 📚 References

- **[lxml Tutorial](https://lxml.de/tutorial.html)^2^**
- **[Using lxml with BeautifulSoup](https://www.geeksforgeeks.org/how-to-use-lxml-with-beautifulsoup-in-python/)^3^**
- **[Web Scraping with lxml](https://www.geeksforgeeks.org/implementing-web-scraping-using-lxml-python/)^4^**

```
<!-- end list -->
```
