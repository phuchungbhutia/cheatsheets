title: Scrapy Cheatsheet

category: Web Scraping
description: A quick reference guide for essential Scrapy commands, spider creation, and best practices for extracting data from websites.

---

## 🛠️ Commands

### **Basic Scrapy Operations**

| Command                                      | Description                       |
| -------------------------------------------- | --------------------------------- |
| `pip install scrapy`                       | Install Scrapy                    |
| `scrapy startproject project_name`         | Create a new Scrapy project       |
| `cd project_name`                          | Navigate to the project directory |
| `scrapy genspider spider_name example.com` | Generate a new spider             |

### **Running a Spider**

| Command                                     | Description                   |
| ------------------------------------------- | ----------------------------- |
| `scrapy crawl spider_name`                | Run a spider                  |
| `scrapy crawl spider_name -o output.json` | Export scraped data to JSON   |
| `scrapy shell "https://example.com"`      | Open Scrapy shell for testing |

### **Extracting Data**

| Command                                    | Description                      |
| ------------------------------------------ | -------------------------------- |
| `response.css('tag::text').get()`        | Extract text using CSS selectors |
| `response.xpath('//tag/text()').get()`   | Extract text using XPath         |
| `response.css('a::attr(href)').getall()` | Extract all links                |

### **Handling Pagination**

| Command                                                       | Description             |
| ------------------------------------------------------------- | ----------------------- |
| `next_page = response.css('a.next_page::attr(href)').get()` | Find the next page link |
| `yield response.follow(next_page, callback=self.parse)`     | Follow the next page    |

### **Exporting Data**

| Command                                     | Description         |
| ------------------------------------------- | ------------------- |
| `scrapy crawl spider_name -o output.csv`  | Export data to CSV  |
| `scrapy crawl spider_name -o output.json` | Export data to JSON |
| `scrapy crawl spider_name -o output.xml`  | Export data to XML  |

---

## 🔄 Workflows

### **Creating a Scrapy Spider**

1. Start a new project using `scrapy startproject project_name`.
2. Generate a spider using `scrapy genspider spider_name example.com`.
3. Define parsing logic using `def parse(self, response)`.

### **Extracting Data from a Web Page**

1. Use `response.css('tag::text').get()` for CSS selectors.
2. Use `response.xpath('//tag/text()').get()` for XPath expressions.
3. Store extracted data using `yield {'title': response.css('h1::text').get()}`.

### **Handling Pagination**

1. Identify the next page link using `response.css('a.next_page::attr(href)').get()`.
2. Follow the next page using `yield response.follow(next_page, callback=self.parse)`.

---

## 💡 Examples

```python
# Basic Scrapy Spider
import scrapy

class ExampleSpider(scrapy.Spider):
    name = "example"
    start_urls = ["https://example.com"]

    def parse(self, response):
        yield {
            "title": response.css("h1::text").get(),
            "links": response.css("a::attr(href)").getall(),
        }
```

---

## 📚 References

- **[Scrapy Python Library Cheatsheet](https://studygyaan.com/cheatsheet/scrapy)**
- **[Scrapy Cheatsheet on GitHub](https://gist.github.com/zlin888/21517c4558962fa8e47a14a6259c7168)**

```
<!-- end list -->
```
