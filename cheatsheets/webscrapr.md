title: Web Scraping with R Cheatsheet

category: Web Scraping
description: A quick reference guide for essential web scraping techniques, libraries, and best practices using R.

---

## 🛠️ Libraries & Tools

### **R-Based Web Scraping Libraries**

| Library             | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| **rvest**     | Simplifies HTML parsing (`install.packages("rvest")`)            |
| **httr**      | Handles HTTP requests (`install.packages("httr")`)               |
| **RSelenium** | Automates browser interactions (`install.packages("RSelenium")`) |
| **xml2**      | Parses XML and HTML (`install.packages("xml2")`)                 |

---

## 🔄 Workflows

### **Basic Web Scraping with R**

1. Load the required libraries using `library(rvest)`.
2. Send an HTTP request using `read_html(url)`.
3. Extract elements using `html_nodes()` and `html_text()`.

### **Scraping JavaScript-Rendered Pages**

1. Start an RSelenium session using `rsDriver()`.
2. Navigate to the page using `remDr$navigate(url)`.
3. Extract dynamic content using `remDr$findElement()`.

### **Handling Pagination & Infinite Scrolling**

1. Identify the pagination structure (`next page` button or URL pattern).
2. Loop through pages using `paste0(url, "?page=", i)`.
3. Use RSelenium for infinite scrolling (`remDr$executeScript("window.scrollTo(0, document.body.scrollHeight);")`).

---

## 💡 Examples

```r
# Basic web scraping with rvest
library(rvest)

url <- "https://example.com"
page <- read_html(url)

# Extract all links
links <- page %>% html_nodes("a") %>% html_attr("href")
print(links)
```

```r
# Scraping with RSelenium
library(RSelenium)

rD <- rsDriver(browser = "chrome")
remDr <- rD$client
remDr$navigate("https://example.com")

# Extract text from an element
element <- remDr$findElement(using = "css", value = "h1")
text <- element$getElementText()
print(text)
```

---

## 📚 References

- **[Web Scraping with R Cheat Sheet](https://github.com/yusuzech/r-web-scraping-cheat-sheet)**
- **[Web Scraping in R Guide](https://statsandr.com/blog/web-scraping-in-r/)**
- **[Complete Web Scraping in R Guide 2025](https://www.zenrows.com/blog/web-scraping-r)**

```
<!-- end list -->
```
