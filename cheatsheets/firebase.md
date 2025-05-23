title: Firebase Cheatsheet

category: Firebase
description: A quick reference guide for essential Firebase commands, workflows, and examples for managing backend services efficiently.

---

## 🛠️ Commands

### **Firebase Setup & Configuration**

| Command                           | Description                                     |
| --------------------------------- | ----------------------------------------------- |
| `npm install -g firebase-tools` | Install Firebase CLI globally                   |
| `firebase login`                | Authenticate with Firebase                      |
| `firebase init`                 | Initialize Firebase in a project                |
| `firebase use --add`            | Add a Firebase project to the current directory |
| `firebase deploy`               | Deploy Firebase services                        |
| `firebase logout`               | Log out from Firebase CLI                       |

### **Firestore Database**

| Command                                    | Description                   |
| ------------------------------------------ | ----------------------------- |
| `firebase firestore:rules`               | View Firestore security rules |
| `firebase firestore:indexes`             | View Firestore indexes        |
| `firebase firestore:delete [collection]` | Delete a Firestore collection |
| `firebase firestore:export [path]`       | Export Firestore data         |
| `firebase firestore:import [path]`       | Import Firestore data         |

### **Authentication**

| Command                         | Description                 |
| ------------------------------- | --------------------------- |
| `firebase auth:export [file]` | Export authentication users |
| `firebase auth:import [file]` | Import authentication users |
| `firebase auth:list-users`    | List all registered users   |

### **Hosting & Functions**

| Command                                       | Description                                   |
| --------------------------------------------- | --------------------------------------------- |
| `firebase hosting:sites:list`               | List all Firebase hosting sites               |
| `firebase hosting:channel:create [channel]` | Create a hosting preview channel              |
| `firebase functions:config:set [key=value]` | Set environment variables for Cloud Functions |
| `firebase functions:config:get`             | Retrieve Cloud Functions configuration        |

---

## 🔄 Workflows

### **Setting Up Firebase in a Project**

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in to Firebase:
   ```bash
   firebase login
   ```
3. Initialize Firebase in a project:
   ```bash
   firebase init
   ```
4. Deploy Firebase services:
   ```bash
   firebase deploy
   ```

### **Managing Firestore Database**

1. View Firestore security rules:
   ```bash
   firebase firestore:rules
   ```
2. Export Firestore data:
   ```bash
   firebase firestore:export ./backup
   ```
3. Delete a Firestore collection:
   ```bash
   firebase firestore:delete users
   ```

### **Deploying Firebase Hosting**

1. Create a hosting preview channel:
   ```bash
   firebase hosting:channel:create preview
   ```
2. Deploy the hosting site:
   ```bash
   firebase deploy --only hosting
   ```

---

## 💡 Examples

```bash
# Initialize Firebase in a project
firebase init

# Deploy Firebase services
firebase deploy

# Export authentication users
firebase auth:export users.json

# Set environment variables for Cloud Functions
firebase functions:config:set api_key="12345"
```

---

## 📚 References

- **Firebase Documentation**: [Firebase Docs](https://firebase.google.com/docs)
- **Firestore Cheatsheet**: [Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/all-you-need-know-about-firestore-cheatsheet)
- **Firebase CLI Guide**: [Firebase CLI](https://firebase.google.com/docs/cli)

```
<!-- end list -->
```
