# Title: Git Basics

**Category:** Git
**Description:** Essential commands and concepts for everyday Git usage.

---

## 🛠️ Commands

| Command                      | Description                                      |
| ---------------------------- | ------------------------------------------------ |
| `git init`                 | Initializes a new Git repository.                |
| `git add .`                | Stages all changes in the current directory.     |
| `git commit -m "Message"`  | Commits staged changes with a message.           |
| `git status`               | Shows working tree status.                       |
| `git log`                  | Displays commit history.                         |
| `git push origin ` | Pushes committed changes to a remote repository. |
| `git pull origin ` | Fetches and merges changes from a remote branch. |
| `git branch`               | Lists, creates, or deletes branches.             |
| `git checkout `    | Switches to a specified branch.                  |
| `git merge `       | Merges specified branch into current branch.     |

## 🔄 Workflows

### 1. Starting a New Project

1. `git init`
2. Create your files.
3. `git add .`
4. `git commit -m "Initial commit"`

### 2. Making Changes

1. Modify files.
2. `git add <file>` or `git add .`
3. `git commit -m "Descriptive commit message"`
4. `git push origin main` (or your branch)

## 💡 Examples

```bash
# Initialize a new repo
git init

# Clone an existing repo
git clone [https://github.com/user/repo.git](https://github.com/user/repo.git)

# Stage and commit changes
git add index.html style.css
git commit -m "feat: Add initial HTML and CSS structure"

# Create and switch to a new branch
git branch develop
git checkout develop

# Push current branch to remote
git push origin develop
```

## 📚 References

<!-- end list -->

