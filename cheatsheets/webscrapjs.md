title: Web Scraping with JavaScript Cheatsheet

category: Web Scraping
description: A quick reference guide for essential web scraping techniques, libraries, and best practices using JavaScript.

---

## 🛠️ Libraries & Tools

### **JavaScript-Based Web Scraping Libraries**

| Library              | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| **Axios**      | Handles HTTP requests (`npm install axios`)              |
| **Cheerio**    | Parses HTML (`npm install cheerio`)                      |
| **Puppeteer**  | Automates browser interactions (`npm install puppeteer`) |
| **Playwright** | Cross-browser automation (`npm install playwright`)      |
| **jsdom**      | Simulates a browser environment (`npm install jsdom`)    |

---

## 🔄 Workflows

### **Basic Web Scraping with JavaScript**

1. Send an HTTP request using `axios.get(url)`.
2. Parse the HTML using `cheerio.load(response.data)`.
3. Extract elements using `$('tag').text()`.

### **Scraping JavaScript-Rendered Pages**

1. Use Puppeteer to launch a headless browser.
2. Navigate to the page using `page.goto(url)`.
3. Extract dynamic content using `page.evaluate()`.

### **Handling Pagination & Infinite Scrolling**

1. Identify the pagination structure (`next page` button or URL pattern).
2. Loop through pages using `axios.get(url + "?page=" + i)`.
3. Use Puppeteer for infinite scrolling (`page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))`).

---

## 💡 Examples

```javascript
// Basic web scraping with Cheerio
const axios = require('axios');
const cheerio = require('cheerio');

async function scrape() {
    const url = "https://example.com";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Extract all links
    const links = $("a").map((i, link) => $(link).attr("href")).get();
    console.log(links);
}

scrape();
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

- **[Web Scraping &amp; Data Analysis Cheat Sheet](https://gist.github.com/kmcelwee/309ec6b3eae932530c1ef7b15fb325dc)**
- **[Web Scraping with JavaScript and Node.js](https://www.scrapingbee.com/blog/web-scraping-javascript/)**
- **[Web Scraping with JavaScript and Puppeteer](https://serpapi.com/blog/web-scraping-in-javascript-complete-tutorial-for-beginner/)**

```
<!-- end list -->
```
