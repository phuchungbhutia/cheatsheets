title: iOS Cheatsheet

category: Apple 
description: A quick reference guide for essential iOS commands, shortcuts, and best practices for developing and using iOS devices.

---

## 🛠️ Commands

### **Basic iOS Operations**

| Command                             | Description              |
| ----------------------------------- | ------------------------ |
| `Settings > General > About`      | View device information  |
| `Settings > Display & Brightness` | Adjust screen brightness |
| `Settings > Battery`              | Monitor battery usage    |
| `Settings > Privacy`              | Manage app permissions   |

### **Keyboard Shortcuts (iPad with Magic Keyboard)**

| Shortcut            | Description                |
| ------------------- | -------------------------- |
| `Cmd + H`         | Go to Home screen          |
| `Cmd + Space`     | Open Spotlight search      |
| `Cmd + Tab`       | Switch between apps        |
| `Cmd + Shift + 3` | Take a screenshot          |
| `Cmd + Shift + 4` | Take a screenshot and edit |

### **App Management**

| Command                      | Description                        |
| ---------------------------- | ---------------------------------- |
| `Double-click Home button` | Open App Switcher (older devices)  |
| `Swipe up from bottom`     | Open App Switcher (newer devices)  |
| `Long press app icon`      | Enter edit mode (delete/move apps) |
| `Settings > App Store`     | Manage app downloads and updates   |

### **Developer Tools (Xcode & Swift)**

| Command                                 | Description                      |
| --------------------------------------- | -------------------------------- |
| `xcode-select --install`              | Install Xcode command-line tools |
| `swift --version`                     | Check Swift version              |
| `xcrun simctl list`                   | List available iOS simulators    |
| `xcodebuild -project MyApp.xcodeproj` | Build an Xcode project           |

### **Security & Privacy**

| Command                                    | Description                          |
| ------------------------------------------ | ------------------------------------ |
| `Settings > Face ID & Passcode`          | Manage Face ID and passcode settings |
| `Settings > Privacy > Location Services` | Control app location access          |
| `Settings > Safari > Clear History`      | Clear browsing history               |
| `Settings > Screen Time`                 | Monitor and limit app usage          |

---

## 🔄 Workflows

### **Setting Up an iOS Device**

1. Configure settings via `Settings > General > About`.
2. Enable security features via `Settings > Face ID & Passcode`.
3. Install apps via `App Store`.

### **Using iOS for Productivity**

1. Use `Cmd + Space` for quick searches.
2. Manage multitasking via `Cmd + Tab`.
3. Take screenshots using `Cmd + Shift + 3`.

### **Developing iOS Apps**

1. Install Xcode using `xcode-select --install`.
2. Write Swift code using `swift --version`.
3. Test apps using `xcrun simctl list`.

---

## 💡 Examples

```swift
// Example: Basic Swift Code for iOS
import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        print("Hello, iOS!")
    }
}
```

```shell
# Example: Build an iOS app using Xcode
xcodebuild -project MyApp.xcodeproj -scheme MyApp -sdk iphoneos
```

---

## 📚 References

- **[iOS Ref](https://iosref.com/)**
- **[iOS Cheat Sheet on GitHub](https://gist.github.com/421160171ded899ddc02847396e88a40)**

```
<!-- end list -->
```
