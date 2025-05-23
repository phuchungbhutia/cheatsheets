title: Flask Cheatsheet

category: Python 
description: A quick reference guide for essential Flask commands, routing, request handling, and best practices for building web applications.

---

## 🛠️ Commands

### **Basic Flask Operations**

| Command                     | Description                              |
| --------------------------- | ---------------------------------------- |
| `pip install flask`       | Install Flask                            |
| `from flask import Flask` | Import Flask module                      |
| `app = Flask(__name__)`   | Create a Flask app instance              |
| `app.run(debug=True)`     | Run the Flask app with debugging enabled |

### **Routing & Views**

| Command                                  | Description                       |
| ---------------------------------------- | --------------------------------- |
| `@app.route('/')`                      | Define a route for the homepage   |
| `@app.route('/about')`                 | Define a route for the about page |
| `return "Hello, Flask!"`               | Return a simple response          |
| `return render_template('index.html')` | Render an HTML template           |

### **Request Handling**

| Command                       | Description                   |
| ----------------------------- | ----------------------------- |
| `from flask import request` | Import request module         |
| `request.method`            | Get request method (GET/POST) |
| `request.form['username']`  | Access form data              |
| `request.args.get('query')` | Get query parameters          |

### **Templates & Static Files**

| Command                                       | Description                      |
| --------------------------------------------- | -------------------------------- |
| `from flask import render_template`         | Import template rendering module |
| `render_template('index.html', data=value)` | Pass data to a template          |
| `url_for('static', filename='style.css')`   | Access static files              |

### **Forms & Authentication**

| Command                              | Description                |
| ------------------------------------ | -------------------------- |
| `from flask_wtf import FlaskForm`  | Import Flask-WTF for forms |
| `forms.StringField('Username')`    | Define a form field        |
| `authenticate(username, password)` | Authenticate a user        |
| `login_user(user)`                 | Log in a user              |

---

## 🔄 Workflows

### **Setting Up a Flask Project**

1. Install Flask using `pip install flask`.
2. Create a Flask app using `app = Flask(__name__)`.
3. Define routes using `@app.route('/')`.
4. Run the app using `app.run(debug=True)`.

### **Handling User Requests**

1. Use `request.method` to check request type.
2. Access form data using `request.form['username']`.
3. Retrieve query parameters using `request.args.get('query')`.

### **Securing Flask Applications**

1. Enable authentication using `Flask-Login`.
2. Protect endpoints with `login_required` decorators.
3. Validate user input to prevent SQL injection.

---

## 💡 Examples

```python
# Example: Define a Flask route
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to Flask!"

if __name__ == "__main__":
    app.run(debug=True)
```

```python
# Example: Handle form data in Flask
from flask import Flask, request

app = Flask(__name__)

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    return f"Logged in as {username}"
```

---

## 📚 References

- **[Flask Cheatsheet | CodeWithHarry](https://www.codewithharry.com/blogpost/flask-cheatsheet)**
- **[Flask Python Library Cheatsheet - StudyGyaan](https://studygyaan.com/cheatsheet/flask)**
- **[Learn Flask: Introduction to Flask Cheatsheet - Codecademy](https://www.codecademy.com/learn/learn-flask/modules/introduction-to-flask/cheatsheet)**

```
<!-- end list -->
```
