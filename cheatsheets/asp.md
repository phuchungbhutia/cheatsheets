title: ASP.NET Cheatsheet

category: Web Development
description: A quick reference guide for essential ASP.NET commands, MVC architecture, and best practices for building web applications.

---

## 🛠️ Commands

### **Basic ASP.NET Operations**

| Command                     | Description                      |
| --------------------------- | -------------------------------- |
| `dotnet new mvc -n MyApp` | Create a new ASP.NET MVC project |
| `dotnet run`              | Run the application              |
| `dotnet build`            | Compile the project              |
| `dotnet publish`          | Publish the application          |

### **MVC Architecture**

| Component            | Description                            |
| -------------------- | -------------------------------------- |
| **Model**      | Represents data and business logic     |
| **View**       | Handles UI presentation                |
| **Controller** | Manages user requests and interactions |

### **Routing & Controllers**

| Command                               | Description                |
| ------------------------------------- | -------------------------- |
| `[HttpGet]`                         | Handle GET requests        |
| `[HttpPost]`                        | Handle POST requests       |
| `return View();`                    | Render a view              |
| `return RedirectToAction("Index");` | Redirect to another action |

### **Entity Framework & Database Handling**

| Command                     | Description                        |
| --------------------------- | ---------------------------------- |
| `DbContext`               | Represents the database context    |
| `DbSet<T>`                | Represents a table in the database |
| `context.SaveChanges();`  | Save changes to the database       |
| `context.Users.ToList();` | Retrieve all users                 |

### **Authentication & Security**

| Command                           | Description                |
| --------------------------------- | -------------------------- |
| `services.AddAuthentication();` | Enable authentication      |
| `services.AddAuthorization();`  | Enable authorization       |
| `User.Identity.IsAuthenticated` | Check if user is logged in |

---

## 🔄 Workflows

### **Setting Up an ASP.NET Project**

1. Install .NET SDK and run `dotnet new mvc -n MyApp`.
2. Configure `Startup.cs` for middleware and services.
3. Define models, views, and controllers.

### **Handling User Requests**

1. Create controllers using `[HttpGet]` and `[HttpPost]`.
2. Use `return View();` to render UI.
3. Implement routing for navigation.

### **Securing Web Applications**

1. Enable authentication using `services.AddAuthentication();`.
2. Protect endpoints with authorization policies.
3. Validate user input to prevent SQL injection.

---

## 💡 Examples

```csharp
// Example Controller in ASP.NET MVC
public class HomeController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }
}
```

---

## 📚 References

- **[ASP.NET Databases Cheatsheet - Codecademy](https://www.codecademy.com/learn/asp-net-i/modules/asp-net-databases/cheatsheet)**
- **[ASP.NET Cheatsheet - GitHub](https://github.com/warisali2/asp.net-cheatsheet)**
- **[C# Cheat Sheet &amp; Quick Reference](https://quickref.me/cs.html)**

```
<!-- end list -->
```
