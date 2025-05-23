title: Flutter Cheatsheet

category: Programming
description: A quick reference guide for essential Flutter commands, widgets, and best practices for building cross-platform applications.

---

## 🛠️ Commands

### **Basic Flutter Setup**

| Command                      | Description                                 |
| ---------------------------- | ------------------------------------------- |
| `flutter create my_app`    | Create a new Flutter project                |
| `cd my_app && flutter run` | Navigate to project and run the app         |
| `flutter doctor`           | Check Flutter installation and dependencies |
| `flutter pub get`          | Fetch dependencies from `pubspec.yaml`    |

### **Project Structure**

| Folder                  | Description                        |
| ----------------------- | ---------------------------------- |
| `/lib`                | Main application code              |
| `/assets`             | Images, fonts, and other resources |
| `/pubspec.yaml`       | Dependency management file         |
| `/android` & `/ios` | Platform-specific configurations   |

### **Flutter Widgets**

| Widget               | Description                                |
| -------------------- | ------------------------------------------ |
| `Container`        | A box model widget for layout              |
| `Row` & `Column` | Arrange widgets horizontally or vertically |
| `Text`             | Display text in the UI                     |
| `Image.asset()`    | Load images from assets                    |
| `ListView`         | Scrollable list of widgets                 |

### **State Management**

| Command                           | Description                       |
| --------------------------------- | --------------------------------- |
| `setState(() { count++; })`     | Update UI state in StatefulWidget |
| `Provider.of<MyModel>(context)` | Access state using Provider       |
| `BlocProvider`                  | Manage state using BLoC pattern   |

### **Navigation & Routing**

| Command                                                                           | Description                    |
| --------------------------------------------------------------------------------- | ------------------------------ |
| `Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))` | Navigate to a new screen       |
| `Navigator.pop(context)`                                                        | Go back to the previous screen |

### **Styling & Theming**

| Command                                        | Description          |
| ---------------------------------------------- | -------------------- |
| `ThemeData(primaryColor: Colors.blue)`       | Define global theme  |
| `TextStyle(fontSize: 20, color: Colors.red)` | Apply styles to text |

---

## 🔄 Workflows

### **Creating a Flutter App**

1. Install Flutter and run `flutter create my_app`.
2. Define UI using widgets like `Container`, `Row`, and `Column`.
3. Manage state using `setState()` or Provider.
4. Navigate between screens using `Navigator.push()`.

### **Handling User Input**

1. Use `TextField` for text input.
2. Attach event listeners using `onChanged` or `onPressed`.

### **Deploying a Flutter App**

1. Build APK using `flutter build apk`.
2. Deploy to Play Store or App Store.

---

## 💡 Examples

```dart
// Flutter Stateless Widget Example
import 'package:flutter/material.dart';

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Flutter App")),
      body: Center(child: Text("Hello, Flutter!")),
    );
  }
}
```

---

## 📚 References

- **[Flutter Cheat Sheet - OneCompiler](https://onecompiler.com/cheatsheets/flutter)**
- **[Flutter Cheatsheet - GitHub](https://gist.github.com/jb0gie/ed298ac37f3e5c6d147688a176e67546)**
- **[Flutter Widgets Cheat Sheet - DEV Community](https://dev.to/codemagicio/flutter-widgets-cheat-sheet-33an)**

```
<!-- end list -->
```
