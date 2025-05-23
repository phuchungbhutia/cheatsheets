title: PHP Cheatsheet

category: PHP
description: A quick reference guide for essential PHP commands, workflows, and examples for efficient web development.

---

## 🛠️ Commands

### **Basic Syntax**

| Command                            | Description                 |
| ---------------------------------- | --------------------------- |
| `<?php echo "Hello, World!"; ?>` | Print output to the browser |
| `// This is a comment`           | Single-line comment         |
| `/* Multi-line comment */`       | Multi-line comment          |
| `$x = 10;`                       | Declare a variable          |
| `define("PI", 3.14);`            | Define a constant           |

### **Operators**

| Operator | Description                          |
| -------- | ------------------------------------ |
| `+`    | Addition                             |
| `-`    | Subtraction                          |
| `*`    | Multiplication                       |
| `/`    | Division                             |
| `==`   | Loose equality (type conversion)     |
| `===`  | Strict equality (no type conversion) |

### **Control Flow**

| Command                           | Description           |
| --------------------------------- | --------------------- |
| `if ($x > 0) {}`                | Conditional statement |
| `else if ($x == 0) {}`          | Else-if condition     |
| `else {}`                       | Else condition        |
| `for ($i = 0; $i < 5; $i++) {}` | Loop through a range  |
| `while ($x < 10) {}`            | While loop            |

### **Functions**

| Command                           | Description                    |
| --------------------------------- | ------------------------------ |
| `function myFunction() {}`      | Define a function              |
| `return $x;`                    | Return a value from a function |
| `$add = fn($a, $b) => $a + $b;` | Arrow function (PHP 7.4+)      |

### **Arrays & Objects**

| Command                                               | Description                        |
| ----------------------------------------------------- | ---------------------------------- |
| `$arr = [1, 2, 3];`                                 | Define an array                    |
| `array_push($arr, 4);`                              | Add an item to an array            |
| `array_pop($arr);`                                  | Remove the last item from an array |
| `$obj = (object) ["name" => "Alice", "age" => 25];` | Define an object                   |
| `$obj->name`                                        | Access object properties           |

### **File Handling**

| Command                     | Description             |
| --------------------------- | ----------------------- |
| `fopen("file.txt", "r");` | Open a file for reading |
| `fwrite($file, "Hello");` | Write to a file         |
| `fclose($file);`          | Close a file            |

### **Session & Cookies**

| Command                                        | Description            |
| ---------------------------------------------- | ---------------------- |
| `session_start();`                           | Start a session        |
| `$_SESSION["user"] = "Alice";`               | Set a session variable |
| `setcookie("user", "Alice", time() + 3600);` | Set a cookie           |

---

## 🔄 Workflows

### **Defining & Calling Functions**

1. Define a function:
   ```php
   function greet($name) {
       return "Hello, $name!";
   }
   ```
2. Call the function:
   ```php
   echo greet("Alice");
   ```

### **Working with Arrays**

1. Create an array:
   ```php
   $numbers = [1, 2, 3, 4, 5];
   ```
2. Append an item:
   ```php
   array_push($numbers, 6);
   ```
3. Iterate through an array:
   ```php
   foreach ($numbers as $num) {
       echo $num;
   }
   ```

### **Handling Sessions**

1. Start a session:
   ```php
   session_start();
   ```
2. Set a session variable:
   ```php
   $_SESSION["user"] = "Alice";
   ```
3. Retrieve session data:
   ```php
   echo $_SESSION["user"];
   ```

---

## 💡 Examples

```php
// Print "Hello, World!"
echo "Hello, World!";

// Loop through numbers
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

// Read a file
$file = fopen("data.txt", "r");
$content = fread($file, filesize("data.txt"));
fclose($file);
echo $content;
```

---

## 📚 References

- **PHP Quick Reference**: [QuickRef](https://quickref.me/php.html)
- **PHP Cheat Sheet (PDF)**: [WebsiteSetup](https://websitesetup.org/php-cheat-sheet/)
- **Online PHP Cheat Sheet**: [HTML CheatSheet](https://htmlcheatsheet.com/php/)

```
<!-- end list -->
```
