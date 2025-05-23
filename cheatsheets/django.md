title: Django Cheatsheet

category: Python
description: A quick reference guide for essential Django commands, MVT architecture, and best practices for building web applications.

---

## 🛠️ Commands

### **Basic Django Operations**

| Command                                 | Description                  |
| --------------------------------------- | ---------------------------- |
| `pip install django`                  | Install Django               |
| `django-admin startproject myproject` | Create a new Django project  |
| `python manage.py startapp myapp`     | Create a new Django app      |
| `python manage.py runserver`          | Start the development server |

### **MVT Architecture**

| Component          | Description                    |
| ------------------ | ------------------------------ |
| **Model**    | Represents database schema     |
| **View**     | Handles request-response logic |
| **Template** | Defines HTML structure         |

### **Database & Migrations**

| Command                              | Description                      |
| ------------------------------------ | -------------------------------- |
| `python manage.py makemigrations`  | Generate migration files         |
| `python manage.py migrate`         | Apply migrations to the database |
| `python manage.py createsuperuser` | Create an admin user             |

### **URL Routing & Views**

| Command                                    | Description              |
| ------------------------------------------ | ------------------------ |
| `path('home/', views.home, name='home')` | Define a URL pattern     |
| `return render(request, 'home.html')`    | Render a template        |
| `return HttpResponse("Hello, Django!")`  | Return a simple response |

### **Forms & Authentication**

| Command                              | Description                |
| ------------------------------------ | -------------------------- |
| `forms.Form`                       | Define a basic form        |
| `forms.ModelForm`                  | Create a form from a model |
| `authenticate(username, password)` | Authenticate a user        |
| `login(request, user)`             | Log in a user              |

---

## 🔄 Workflows

### **Setting Up a Django Project**

1. Install Django using `pip install django`.
2. Create a project using `django-admin startproject myproject`.
3. Start the development server using `python manage.py runserver`.

### **Handling User Requests**

1. Define views using `def home(request): return render(request, 'home.html')`.
2. Map URLs using `path('home/', views.home, name='home')`.
3. Use templates for dynamic content rendering.

### **Securing Django Applications**

1. Enable authentication using `django.contrib.auth`.
2. Protect endpoints with `login_required` decorators.
3. Validate user input to prevent SQL injection.

---

## 💡 Examples

```python
# Example: Define a Django view
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Django!")
```

```python
# Example: Define a Django model
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
```

---

## 📚 References

- **[Django Cheat Sheet - DEV Community](https://dev.to/eklaassen/django-cheat-sheet-4fjd)**
- **[Django Cheatsheet | CodeWithHarry](https://www.codewithharry.com/blogpost/django-cheatsheet)**
- **[Django Cheat Sheet &amp; Quick Reference](https://cheatsheets.zip/django.html)**

```
<!-- end list -->
```
