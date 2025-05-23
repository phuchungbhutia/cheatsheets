title: Swift Cheatsheet

category: Apple
description: A quick reference guide for essential Swift commands, syntax, and best practices for developing iOS applications.

---

## 🛠️ Commands

### **Basic Swift Operations**

| Command                        | Description                  |
| ------------------------------ | ---------------------------- |
| `let constant = "Hello"`     | Define an immutable variable |
| `var variable = "World"`     | Define a mutable variable    |
| `print("Swift is awesome!")` | Print output to console      |
| `import UIKit`               | Import UIKit framework       |

### **Data Types & Optionals**

| Command                                           | Description                    |
| ------------------------------------------------- | ------------------------------ |
| `let number: Int = 42`                          | Define an integer              |
| `let pi: Double = 3.14`                         | Define a floating-point number |
| `var isSwiftFun: Bool = true`                   | Define a boolean               |
| `var optionalValue: Int? = nil`                 | Define an optional variable    |
| `if let value = optionalValue { print(value) }` | Unwrap an optional             |

### **Control Flow & Loops**

| Command                               | Description           |
| ------------------------------------- | --------------------- |
| `if condition { } else { }`         | Conditional statement |
| `for item in array { print(item) }` | Loop through an array |
| `while condition { }`               | While loop            |
| `repeat { } while condition`        | Repeat-while loop     |

### **Functions & Closures**

| Command                                                             | Description       |
| ------------------------------------------------------------------- | ----------------- |
| `func greet(name: String) -> String { return "Hello, \(name)!" }` | Define a function |
| `let result = greet(name: "Swift")`                               | Call a function   |
| `{ (a: Int, b: Int) -> Int in return a + b }`                     | Define a closure  |

### **Object-Oriented Programming**

| Command                                                   | Description       |
| --------------------------------------------------------- | ----------------- |
| `class Person { var name: String }`                     | Define a class    |
| `struct Car { var model: String }`                      | Define a struct   |
| `protocol Drawable { func draw() }`                     | Define a protocol |
| `extension String { var length: Int { return count } }` | Extend a class    |

---

## 🔄 Workflows

### **Setting Up a Swift Project**

1. Install Xcode and open a new Swift project.
2. Write Swift code in `ViewController.swift`.
3. Run the project using the Xcode simulator.

### **Handling Data Efficiently**

1. Use optionals to handle missing values.
2. Use arrays and dictionaries for structured data.
3. Optimize loops and conditionals for performance.

### **Developing iOS Apps**

1. Use `UIKit` for UI components.
2. Implement `ViewController` for screen logic.
3. Use `Auto Layout` for responsive design.

---

## 💡 Examples

```swift
// Example: Define a Swift function
func greet(name: String) -> String {
    return "Hello, \(name)!"
}

print(greet(name: "Swift"))
```

```swift
// Example: Define a Swift class
class Person {
    var name: String
  
    init(name: String) {
        self.name = name
    }
}

let user = Person(name: "Alice")
print(user.name)
```

---

## 📚 References

- **[Swift Cheat Sheet (Updated) - Sling Academy](https://www.slingacademy.com/article/swift-cheat-sheet/)**
- **[Swift Cheat Sheet &amp; Quick Reference](https://quickref.me/swift.html)**

```
<!-- end list -->
```
