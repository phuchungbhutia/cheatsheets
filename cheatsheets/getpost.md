title: GET & POST Cheatsheet

category: Web Development
description: A quick reference guide for essential GET and POST HTTP methods, their differences, and best practices for API development.

---

## 🛠️ Commands

### **GET Method**

| Feature                | Description                             |
| ---------------------- | --------------------------------------- |
| **Purpose**      | Retrieve data from a server             |
| **Request Body** | No request body (parameters in URL)     |
| **Caching**      | Can be cached                           |
| **Security**     | Less secure (parameters visible in URL) |
| **Example**      | `GET /users?id=123 HTTP/1.1`          |

### **POST Method**

| Feature                | Description                                |
| ---------------------- | ------------------------------------------ |
| **Purpose**      | Send data to a server                      |
| **Request Body** | Contains data in the body                  |
| **Caching**      | Cannot be cached                           |
| **Security**     | More secure (data in request body)         |
| **Example**      | `POST /users HTTP/1.1` with JSON payload |

### **Key Differences**

| Feature                 | GET            | POST             |
| ----------------------- | -------------- | ---------------- |
| **Data Location** | URL parameters | Request body     |
| **Security**      | Less secure    | More secure      |
| **Caching**       | Can be cached  | Cannot be cached |
| **Use Case**      | Fetch data     | Submit data      |

---

## 🔄 Workflows

### **Using GET for Data Retrieval**

1. Send a request using `GET /resource`.
2. Server responds with requested data.
3. Use query parameters for filtering (`GET /users?id=123`).

### **Using POST for Data Submission**

1. Send a request using `POST /resource`.
2. Include data in the request body (JSON, form data).
3. Server processes and stores the data.

### **Securing API Requests**

1. Use HTTPS for encrypted communication.
2. Validate input to prevent SQL injection.
3. Implement authentication for sensitive requests.

---

## 💡 Examples

```http
# Example GET Request
GET /users?id=123 HTTP/1.1
Host: example.com
```

```http
# Example POST Request
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 📚 References

- **[HTTP Methods &amp; Status Codes - GitHub](https://gist.github.com/ross-u/95edf274b378711e2115239ab64abd7b)**
- **[HTTP Methods Cheat Sheet - Anto Online](https://anto.online/http-methods-guide-get-post-put-delete/)**

```
<!-- end list -->
```
