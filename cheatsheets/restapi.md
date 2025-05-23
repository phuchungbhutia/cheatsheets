title: REST API Cheatsheet

category: Web Development
description: A quick reference guide for essential REST API principles, HTTP methods, and best practices for designing scalable web services.

---

## 🛠️ Commands

### **Basic REST API Principles**

| Concept                          | Description                                                            |
| -------------------------------- | ---------------------------------------------------------------------- |
| **Statelessness**          | Each request is independent; no session state is stored on the server. |
| **Resource-Based URLs**    | API endpoints represent resources (`/users`, `/products`).         |
| **Standard HTTP Methods**  | Use `GET`, `POST`, `PUT`, `DELETE` for CRUD operations.        |
| **JSON as Default Format** | REST APIs commonly use JSON for request and response payloads.         |

### **HTTP Methods & Usage**

| Method                 | Description               |
| ---------------------- | ------------------------- |
| `GET /users`         | Retrieve a list of users. |
| `POST /users`        | Create a new user.        |
| `PUT /users/{id}`    | Update an existing user.  |
| `DELETE /users/{id}` | Delete a user.            |

### **Response Status Codes**

| Code                          | Description                    |
| ----------------------------- | ------------------------------ |
| `200 OK`                    | Successful request.            |
| `201 Created`               | Resource successfully created. |
| `400 Bad Request`           | Invalid request parameters.    |
| `401 Unauthorized`          | Authentication required.       |
| `404 Not Found`             | Resource does not exist.       |
| `500 Internal Server Error` | Server-side issue.             |

### **Authentication & Security**

| Method            | Description                                      |
| ----------------- | ------------------------------------------------ |
| `Bearer Token`  | Use JWT or OAuth tokens for authentication.      |
| `API Key`       | Secure endpoints with API keys.                  |
| `HTTPS`         | Always use HTTPS for secure communication.       |
| `Rate Limiting` | Prevent abuse by limiting API requests per user. |

### **Pagination & Filtering**

| Method                                 | Description                 |
| -------------------------------------- | --------------------------- |
| `GET /users?page=2&limit=10`         | Paginate results.           |
| `GET /products?category=electronics` | Filter results by category. |
| `GET /orders?sort=date_desc`         | Sort results by date.       |

---

## 🔄 Workflows

### **Building a REST API**

1. Define resource-based endpoints (`/users`, `/products`).
2. Implement CRUD operations using HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
3. Secure API with authentication (`Bearer Token`, `API Key`).
4. Optimize performance with pagination and caching.

### **Handling API Requests & Responses**

1. Send requests using `fetch()` or `axios` in JavaScript.
2. Parse JSON responses using `response.json()`.
3. Handle errors with appropriate status codes (`400`, `404`, `500`).

### **Securing REST APIs**

1. Use HTTPS for encrypted communication.
2. Implement authentication (`OAuth`, `JWT`).
3. Apply rate limiting to prevent abuse.

---

## 💡 Examples

```json
// Example API Response
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

```javascript
// Fetch API Example
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 📚 References

- **[ByteByteGo REST API Cheatsheet](https://bytebytego.com/guides/rest-api-cheatsheet/)**
- **[OWASP REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)**

```
<!-- end list -->
```
