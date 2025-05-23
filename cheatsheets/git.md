title: GitHub Cheatsheet

category: Git
description: A quick reference guide for essential GitHub commands, workflows, and examples for efficient repository management.

---

## 🛠️ Commands

### **Repository Management**

| Command                         | Description                            |
| ------------------------------- | -------------------------------------- |
| `git init`                    | Initialize a new Git repository        |
| `git clone <repo-url>`        | Clone an existing repository           |
| `git remote add origin <url>` | Link local repo to a remote repository |
| `git pull origin main`        | Fetch and merge changes from remote    |

### **Branching & Merging**

| Command                        | Description                              |
| ------------------------------ | ---------------------------------------- |
| `git branch <branch-name>`   | Create a new branch                      |
| `git checkout <branch-name>` | Switch to a branch                       |
| `git merge <branch-name>`    | Merge a branch into the current branch   |
| `git rebase <branch-name>`   | Reapply commits on top of another branch |

### **Commit & Push Changes**

| Command                      | Description                       |
| ---------------------------- | --------------------------------- |
| `git add .`                | Stage all changes                 |
| `git commit -m "message"`  | Commit staged changes             |
| `git push origin <branch>` | Push changes to remote repository |
| `git reset --hard HEAD~1`  | Undo last commit                  |

### **Collaboration & Pull Requests**

| Command                      | Description                      |
| ---------------------------- | -------------------------------- |
| `git fetch origin`         | Fetch latest changes from remote |
| `git pull origin <branch>` | Pull latest changes from remote  |
| `git diff`                 | Show differences between commits |
| `git log --oneline`        | View commit history              |

### **GitHub Actions & Automation**

| Command                  | Description                            |
| ------------------------ | -------------------------------------- |
| `.github/workflows/`   | Directory for GitHub Actions workflows |
| `name: CI/CD Pipeline` | Define a workflow name                 |
| `jobs:`                | Define tasks for automation            |
| `on: push`             | Trigger workflow on push events        |

---

## 🔄 Workflows

### **Creating & Managing a Repository**

1. Initialize a repository:
   ```shell
   git init
   ```
2. Add a remote repository:
   ```shell
   git remote add origin <url>
   ```
3. Push changes to GitHub:
   ```shell
   git push origin main
   ```

### **Branching & Merging**

1. Create a new branch:
   ```shell
   git branch feature-branch
   ```
2. Switch to the branch:
   ```shell
   git checkout feature-branch
   ```
3. Merge changes:
   ```shell
   git merge main
   ```

### **Submitting a Pull Request**

1. Push changes to GitHub:
   ```shell
   git push origin feature-branch
   ```
2. Open GitHub and create a pull request.
3. Merge the pull request after review.

---

## 💡 Examples

```shell
# Clone a repository
git clone https://github.com/user/repo.git

# Commit and push changes
git add .
git commit -m "Updated feature"
git push origin main

# View commit history
git log --oneline
```

---

## 📚 References

- **[GitHub Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)**
- **[GitHub Docs - Git Cheatsheet](https://docs.github.com/en/get-started/git-basics/git-cheatsheet)**
- **[Git Cheat Sheet - GeeksforGeeks](https://www.geeksforgeeks.org/git-cheat-sheet/)**

```
<!-- end list -->
```
