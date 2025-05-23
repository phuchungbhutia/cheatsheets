title: Google API Cheatsheet

category: Google
description: A quick reference guide for essential Google APIs, authentication methods, and best practices for integrating Google services.

---

## 🛠️ Commands

### **Google Cloud APIs**

| API                            | Description                              |
| ------------------------------ | ---------------------------------------- |
| `Google Cloud Storage API`   | Manage cloud storage buckets and objects |
| `Google Compute Engine API`  | Create and manage virtual machines       |
| `Google BigQuery API`        | Perform large-scale data analytics       |
| `Google Cloud Functions API` | Deploy serverless functions              |

### **Google Workspace APIs**

| API                     | Description                              |
| ----------------------- | ---------------------------------------- |
| `Google Sheets API`   | Read, write, and format Google Sheets    |
| `Google Drive API`    | Manage files and folders in Google Drive |
| `Google Calendar API` | Create and manage calendar events        |
| `Gmail API`           | Send and receive emails programmatically |

### **Authentication & Security**

| Method              | Description                                |
| ------------------- | ------------------------------------------ |
| `OAuth 2.0`       | Secure authentication for Google APIs      |
| `API Key`         | Simple authentication for public APIs      |
| `Service Account` | Authenticate server-to-server applications |

### **Common API Requests**

| Request                             | Description                |
| ----------------------------------- | -------------------------- |
| `GET /drive/v3/files`             | List files in Google Drive |
| `POST /sheets/v4/spreadsheets`    | Create a new Google Sheet  |
| `PUT /calendar/v3/calendars/{id}` | Update a calendar event    |

---

## 🔄 Workflows

### **Setting Up Google API Access**

1. Create a project in **Google Cloud Console**.
2. Enable the required API (e.g., **Google Sheets API**).
3. Generate **API credentials** (OAuth, API Key, or Service Account).
4. Use credentials to authenticate API requests.

### **Making API Requests**

1. Use `fetch()` or `axios` in JavaScript to send requests.
2. Authenticate using OAuth 2.0 or API keys.
3. Parse JSON responses using `response.json()`.

### **Securing API Access**

1. Use **OAuth 2.0** for user authentication.
2. Restrict API keys to specific domains or IPs.
3. Monitor API usage with **Google Cloud Console**.

---

## 💡 Examples

```javascript
// Fetch Google Drive Files
fetch("https://www.googleapis.com/drive/v3/files?key=YOUR_API_KEY")
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 📚 References

- **[Google Cloud Developer&#39;s Cheat Sheet](https://github.com/priyankavergadia/google-cloud-4-words)**
- **[Google Sheets API Samples](https://developers.google.com/workspace/sheets/api/samples)**
- **[Google Sheets API Operations](https://developers.google.com/workspace/sheets/api/samples/sheet)**

```
<!-- end list -->
```
