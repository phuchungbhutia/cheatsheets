title: WebDriver Cheatsheet

category: Python
description: A quick reference guide for essential WebDriver commands, browser interactions, and best practices for automating web applications.

---

## 🛠️ Commands

### **Basic WebDriver Operations**

| Command                               | Description              |
| ------------------------------------- | ------------------------ |
| `pip install selenium`              | Install Selenium library |
| `from selenium import webdriver`    | Import Selenium module   |
| `driver = webdriver.Chrome()`       | Launch Chrome browser    |
| `driver.get("https://example.com")` | Open a webpage           |

### **Locators & Element Interaction**

| Command                                                     | Description                   |
| ----------------------------------------------------------- | ----------------------------- |
| `driver.find_element(By.ID, "username")`                  | Locate element by ID          |
| `driver.find_element(By.NAME, "email")`                   | Locate element by name        |
| `driver.find_element(By.XPATH, "//button[@id='submit']")` | Locate element by XPath       |
| `element.click()`                                         | Click an element              |
| `element.send_keys("Hello")`                              | Type text into an input field |

### **Navigation & Browser Control**

| Command              | Description       |
| -------------------- | ----------------- |
| `driver.back()`    | Navigate back     |
| `driver.forward()` | Navigate forward  |
| `driver.refresh()` | Refresh the page  |
| `driver.quit()`    | Close the browser |

### **Waits & Alerts**

| Command                                                                                  | Description       |
| ---------------------------------------------------------------------------------------- | ----------------- |
| `driver.implicitly_wait(10)`                                                           | Set implicit wait |
| `WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "username")))` | Explicit wait     |
| `alert = driver.switch_to.alert`                                                       | Handle alerts     |
| `alert.accept()`                                                                       | Accept alert      |

### **Mouse & Keyboard Actions**

| Command                                                | Description         |
| ------------------------------------------------------ | ------------------- |
| `actions = ActionChains(driver)`                     | Create action chain |
| `actions.move_to_element(element).click().perform()` | Hover and click     |
| `actions.send_keys(Keys.RETURN).perform()`           | Press Enter key     |

---

## 🔄 Workflows

### **Setting Up WebDriver for Automation**

1. Install Selenium using `pip install selenium`.
2. Download and configure WebDriver (Chrome, Firefox, Edge).
3. Launch a browser using `webdriver.Chrome()`.

### **Interacting with Web Elements**

1. Locate elements using `find_element(By.ID, "username")`.
2. Perform actions like `click()` and `send_keys()`.
3. Use explicit waits for dynamic elements.

### **Automating Browser Navigation**

1. Open a webpage using `driver.get("https://example.com")`.
2. Navigate using `driver.back()` and `driver.forward()`.
3. Close the browser using `driver.quit()`.

---

## 💡 Examples

```python
# Example: Open a webpage and interact with an element
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://example.com")

element = driver.find_element(By.ID, "username")
element.send_keys("TestUser")
```

```python
# Example: Handle alerts in WebDriver
from selenium.webdriver.common.alert import Alert

alert = driver.switch_to.alert
alert.accept()
```

---

## 📚 References

- **[The Ultimate Cheat Sheet for Selenium&#39;s WebDriver](https://cpsat.agiletestingalliance.org/2023/10/13/the-ultimate-cheat-sheet-for-seleniums-webdriver/)**
- **[Selenium WebDriver Cheat Sheet - Test Automation Studio](https://www.testautomationstudio.com/cheat-sheet/selenium/selenium-webdriver-cheat-sheet/)**
- **[Most Complete Selenium WebDriver Java Cheat Sheet](https://www.automatetheplanet.com/selenium-webdriver-java-cheat-sheet/)**

```
<!-- end list -->
```
