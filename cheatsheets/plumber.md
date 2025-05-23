title: Plumber Cheatsheet

category: R Programming
description: A quick reference guide for essential Plumber commands, API creation, and best practices for building REST APIs in R.

---

## 🛠️ Commands

### **Basic Plumber Operations**

| Command                                        | Description                        |
| ---------------------------------------------- | ---------------------------------- |
| `library(plumber)`                           | Load Plumber package               |
| `pr("plumber.R") %>% pr_run(port=8000)`      | Run API on port 8000               |
| `install.packages("plumber")`                | Install Plumber package            |
| `remotes::install_github("rstudio/plumber")` | Install latest development version |

### **Defining API Endpoints**

| Command               | Description             |
| --------------------- | ----------------------- |
| `@get /endpoint`    | Define a GET request    |
| `@post /endpoint`   | Define a POST request   |
| `@put /endpoint`    | Define a PUT request    |
| `@delete /endpoint` | Define a DELETE request |

### **Filters & Middleware**

| Command                  | Description                |
| ------------------------ | -------------------------- |
| `@filter log`          | Log request details        |
| `@preempt filter_name` | Opt out of a filter        |
| `@parser json`         | Parse request body as JSON |

### **Serializers & Response Formatting**

| Command              | Description                   |
| -------------------- | ----------------------------- |
| `@serializer json` | Return response as JSON       |
| `@serializer png`  | Return response as an image   |
| `@serializer text` | Return response as plain text |

---

## 🔄 Workflows

### **Creating a Plumber API**

1. Install Plumber using `install.packages("plumber")`.
2. Write API functions in `plumber.R`.
3. Run the API using `pr("plumber.R") %>% pr_run(port=8000)`.

### **Handling API Requests**

1. Define endpoints using `@get`, `@post`, etc.
2. Parse request body using `@parser json`.
3. Return formatted responses using `@serializer json`.

### **Deploying Plumber APIs**

1. Host API using **Docker** or **PM2**.
2. Deploy to **DigitalOcean** or **Posit Connect**.
3. Monitor API logs using `pr_run()` with logging filters.

---

## 💡 Examples

```r
# Example: Define a GET endpoint
#* @get /hello
function() {
  list(message = "Hello, world!")
}
```

```r
# Example: Define a POST endpoint with JSON parsing
#* @post /sum
#* @parser json
function(req) {
  list(result = as.numeric(req$body$a) + as.numeric(req$body$b))
}
```

---

## 📚 References

- **[REST APIs with Plumber Cheat Sheet](https://posit.co/wp-content/uploads/2022/10/plumber-1.pdf)**
- **[Plumber Cheatsheet on GitHub](https://github.com/rstudio/cheatsheets/blob/main/plumber.pdf)**
- **[Plumber API Generator for R](https://www.rplumber.io/index.html)**

```
<!-- end list -->
```
