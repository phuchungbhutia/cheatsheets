const fs = require('fs');
const path = require('path');

const CHEATSHEETS_JSON_FILE = path.join(__dirname, '..', 'cheatsheets.json');
const README_FILE = path.join(__dirname, '..', 'README.md');

// Markers for the generated Cheatsheet Index (HTML comments)
const START_INDEX_MARKER = '';
const END_INDEX_MARKER = '';

/**
 * Generates the Markdown content for the cheatsheet index,
 * grouped by category and sorted alphabetically.
 *
 * @param {Array<object>} cheatsheetsData - The parsed data from cheatsheets.json.
 * @returns {string} The generated Markdown index.
 */
function generateIndexMarkdown(cheatsheetsData) {
    if (!cheatsheetsData || cheatsheetsData.length === 0) {
        return `\nNo cheatsheets found yet.\n`;
    }

    // Deduplicate cheatsheets by their file path (just in case)
    const uniqueCheatsheetsMap = new Map();
    cheatsheetsData.forEach(sheet => {
        if (sheet.file) { // Ensure file property exists
            uniqueCheatsheetsMap.set(sheet.file, sheet);
        }
    });
    const uniqueCheatsheets = Array.from(uniqueCheatsheetsMap.values());

    // Group unique cheatsheets by category
    const categories = {};
    uniqueCheatsheets.forEach(sheet => {
        const categoryName = sheet.category || 'Uncategorized'; // Handle potentially missing category
        if (!categories[categoryName]) {
            categories[categoryName] = [];
        }
        categories[categoryName].push(sheet);
    });

    let indexContent = '';

    // Sort categories alphabetically (case-insensitive)
    const sortedCategoryNames = Object.keys(categories).sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    sortedCategoryNames.forEach(categoryName => {
        indexContent += `### ${categoryName}\n\n`;

        // Sort cheatsheets within each category by title (case-insensitive)
        categories[categoryName].sort((a, b) => {
            const titleA = a.title || ''; // Handle potentially missing title
            const titleB = b.title || '';
            return titleA.toLowerCase().localeCompare(titleB.toLowerCase());
        });

        categories[categoryName].forEach(sheet => {
            // Ensure the link is relative to the project root and uses forward slashes
            // and remove any leading './' that might be in sheet.file
            const fileLink = sheet.file ? sheet.file.replace(/^\.\//, '') : '#'; // Fallback for missing file
            const title = sheet.title || 'Untitled Cheatsheet'; // Fallback for missing title
            const description = sheet.description || 'No description provided.'; // Fallback for missing description

            indexContent += `- [${title}](${fileLink}) - ${description}\n`;
        });
        indexContent += '\n'; // Add a newline after each category block for separation
    });

    return indexContent;
}


function createFullReadme() {
    console.log('--- Starting Full README Generation ---');

    let cheatsheetsData = []; // This will hold the parsed JSON array

    try {
        console.log(`Attempting to read cheatsheets.json from: ${CHEATSHEETS_JSON_FILE}`);
        const cheatsheetsJsonString = fs.readFileSync(CHEATSHEETS_JSON_FILE, 'utf8');
        cheatsheetsData = JSON.parse(cheatsheetsJsonString);
        if (!Array.isArray(cheatsheetsData)) {
            console.warn(`WARNING: ${CHEATSHEETS_JSON_FILE} is not an array. Using empty data.`);
            cheatsheetsData = [];
        }
        console.log(`Parsed ${cheatsheetsData.length} entries from cheatsheets.json.`);

    } catch (error) {
        console.error(`ERROR: Could not read or parse ${CHEATSHEETS_JSON_FILE}: ${error.message}`);
        console.error(`Ensure 'npm run generate' has been run to create/update this file.`);
        // Continue with default empty data if an error occurs
    }

    // Generate the human-readable Markdown index from the parsed JSON data
    const generatedCheatsheetIndex = generateIndexMarkdown(cheatsheetsData);

    // --- Construct the entire README.md content ---
    const readmeContent = `
# Developer Cheatsheet Hub 🚀

**A growing collection of developer cheatsheets, accessible via a user-friendly GitHub Pages website with live search, categorized Browse, and community contribution support.**

---

## ✨ Project Stats

[![GitHub stars](https://img.shields.io/github/stars/phuchungbhutia/cheatsheets?style=social)](https://github.com/phuchungbhutia/cheatsheets/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/phuchungbhutia/cheatsheets?style=social)](https://github.com/phuchungbhutia/cheatsheets/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/phuchungbhutia/cheatsheets?style=social)](https://github.com/phuchungbhutia/cheatsheets/watchers)
[![GitHub last commit](https://img.shields.io/github/last-commit/phuchungbhutia/cheatsheets)](https://github.com/phuchungbhutia/cheatsheets/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/phuchungbhutia/cheatsheets)](https://github.com/phuchungbhutia/cheatsheets/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/phuchungbhutia/cheatsheets)](https://github.com/phuchungbhutia/cheatsheets/pulls)
[![License](https://img.shields.io/github/license/phuchungbhutia/cheatsheets)](https://github.com/phuchungbhutia/cheatsheets/blob/main/LICENSE)

---

## 📘 Cheatsheet Index

${START_INDEX_MARKER}
${generatedCheatsheetIndex.trim()}
${END_INDEX_MARKER}

---

## 🌐 Live Demo

Explore the live cheatsheet hub deployed on GitHub Pages:
[**Visit the Cheatsheet Hub!**](https://phuchungbhutia.github.io/cheatsheets/)

---

## 🎯 Project Objective

Our goal is to build a **professionally structured GitHub repository** that provides a comprehensive and ever-expanding collection of **developer cheatsheets** in Markdown format. This hub aims to be user-friendly, auto-indexing, and easily accessible through a dedicated **GitHub Pages website**. Key features include:

* **Live Search**: Quickly find the commands and workflows you need.
* **Categorized Browse**: Explore cheatsheets by topic (e.g., \`bash\`, \`git\`, \`python\`, \`javascript\`).
* **Community-Driven Contributions**: A streamlined process for developers to add or improve cheatsheets.
* **Auto-Indexing**: Cheatsheet listings are automatically updated via GitHub Actions.
* **Responsive Navigation**: A smooth experience across all devices.

---

## 📦 Cheatsheet Organization

All cheatsheets are organized under \`/cheatsheets/<category>/filename.md\`. We enforce a **standardized Markdown template** for consistency and ease of use.

### Markdown Cheatsheet Template

\`\`\`markdown
title: [Cheatsheet Title]
category: [e.g., Bash, Python]
description: Brief summary of the topic.

---

## 🛠️ Commands
| Command | Description |
|--------|-------------|
| \`example\` | Explanation |

## 🔄 Workflows
Step-by-step instructions for common tasks.

## 💡 Examples
\`\`\`bash
# Example command usage
command --option
\`\`\`

## 📚 References

\`\`\`

---

## 📁 Repository Structure

\`\`\`
/cheatsheets-repo/
│
├── /cheatsheets/                   # All Markdown cheatsheets go here
│   ├── /Git/
│   │   └── git-basics.md
│   ├── /Linux/
│   │   └── linux-commands.md
│
├── /scripts/                       # Node.js utility scripts
│   ├── generate-cheatsheets-json.js # ✅ Always updates + corrects metadata
│   └── update-readme.js            # (Optional) Auto-updates README.md
│
├── cheatsheets.json                # ✅ Auto-generated JSON index of cheatsheets
├── index.html                      # Static GitHub Pages UI (optional enhancement)
├── .nojekyll                       # Needed for GitHub Pages to serve folders with underscores
├── README.md                       # Will include dynamic category-wise index (next step)
├── package.json                    # Optional: if using \`npm run generate\`
└── .github/
    └── workflows/
        └── generate.yml            # (Optional) GitHub Action to auto-run scripts on push
\`\`\`

---

## 🌐 GitHub Pages UI

Our GitHub Pages site provides a seamless experience:

* **Fixed Navigation Bar**: Stays visible for easy access.
* **Responsive Dropdown Menu**: Adapts for mobile and desktop Browse.
* **Floating Search Bar**: Dynamically filters cheatsheets by name.
* **In-Page Markdown Rendering**: View cheatsheets directly within the website, no raw \`.md\` files exposed.

---

## 🔁 Automation & GitHub Actions

We leverage GitHub Actions for efficient maintenance:

* **\`scripts/generate-index.js\`**: A Node.js script that recursively reads Markdown files, groups them by category, converts them to HTML, and updates \`docs/index.html\`, \`docs/cheatsheet-viewer.html\`, \`docs/cheatsheets.json\`, and \`docs/cheatsheet-content/\`.
* **\`.github/workflows/auto-index.yml\`**: A GitHub Actions workflow that triggers on any change to a Markdown file in \`cheatsheets/\`, runs the index generator script, and commits the updated files back to the repository.

---

## 🤝 Contributing

We welcome contributions from the community! To add or update a cheatsheet:

1.  **Fork** this repository.
2.  **Create a new branch** for your changes.
3.  **Use the provided template** (\`templates/cheatsheet-template.md\`) to create new cheatsheets or modify existing ones under \`cheatsheets/<category>/\`.
4.  **Ensure consistency** with existing formatting and content standards.
5.  **Submit a Pull Request** with a clear description of your changes.

---

## ✍️ Commit Best Practices & How-Tos

Clear, concise, and descriptive commit messages are crucial for project maintainability, collaboration, and understanding the history of changes. Follow these guidelines for your contributions:

### 1. **Structure Your Commit Messages**

A good commit message consists of a subject line and an optional, but recommended, body.

* **Subject Line (50-72 characters)**:
    
    * Summarizes the change in a single line.
    * Use the **imperative mood** (e.g., "Add new feature," "Fix bug," "Update documentation" instead of "Added new feature," "Fixes bug," "Updating documentation").
    * Capitalize the first letter.
    * Do **not** end with a period.
* **Body (Optional, but detailed)**:
    
    * Provide more context and explanation for the change.
    * Explain *why* the change was made, *what* problem it solves, and *how* it was implemented.
    * Wrap lines at 72 characters.
    * Separate the subject from the body with a blank line.
    
    **Example:**
    
    \`\`\`
    feat: Add new Python list comprehension cheatsheet
    
    This commit introduces a new cheatsheet for Python list comprehensions.
    It covers basic syntax, conditional expressions, nested comprehensions,
    and common use cases. This addresses the request for more Python-specific
    content and aims to provide quick references for common Python patterns.
    \`\`\`

### 2. **Make Atomic Commits**

* Each commit should represent a single, logical, and self-contained change.
* Avoid committing multiple unrelated changes in one go. If you're fixing a bug and adding a new feature, commit them separately.
* This makes it easier to review, revert, or cherry-pick specific changes.

### 3. **Reference Issues (If Applicable)**

* If your commit relates to a specific GitHub Issue, reference it in the commit message body using keywords like \`Fixes #ISSUE_NUMBER\`, \`Closes #ISSUE_NUMBER\`, or \`Refs #ISSUE_NUMBER\`. This automatically links the commit to the issue and can even close the issue when the commit is merged into the default branch.
    
    **Example:**
    
    \`\`\`
    fix: Correct typo in Git basics cheatsheet
    
    Found and fixed a minor typo in the 'git-basics.md' file under the
    "Commands" section. The previous text had a grammatical error.
    
    Fixes #123
    \`\`\`

### 4. **How to Write a Good Commit Message**

When making a commit, consider these questions:

* **What** was changed? (Subject line)
* **Why** was this change made? (Body)
* **How** was it implemented? (Body - if not obvious)
* **What problem** does it solve? (Body)
* **What impact** does it have? (Body)

### 5. **Using Git Commands for Commits**

* **Staging changes:**
    
    \`\`\`bash
    git add .                     # stages all changes
    git add cheatsheets/git/git-basics.md # stages specific file
    \`\`\`
* **Committing with a subject line:**
    
    \`\`\`bash
    git commit -m "feat: Add new cheatsheet template"
    \`\`\`
* **Committing with a subject and body:**
    
    \`\`\`bash
    git commit -m "feat: Introduce comprehensive Bash scripting cheatsheet" -m "This cheatsheet provides detailed examples and workflows for common Bash scripting tasks, including variable handling, loops, conditionals, and functions. It aims to be a quick reference for users working with command-line automation."
    \`\`\`
    
    Alternatively, for a more detailed message, simply run \`git commit\` without \`-m\` and your default text editor will open.

By adhering to these guidelines, we ensure a high-quality, readable, and maintainable Git history for this project.

---

## 📬 Contact

For inquiries or suggestions, feel free to open an issue or reach out directly.

---

## 📜 License

This project is licensed under the MIT License - see the \`LICENSE\` file for details.
`;

    try {
        fs.writeFileSync(README_FILE, readmeContent.trim() + '\n', 'utf8'); // .trim() removes leading/trailing blank lines, +'\n' ensures a final newline
        console.log(`✅ ${README_FILE} generated successfully with human-readable cheatsheet index.`);
    } catch (error) {
        console.error(`ERROR: Could not write to README.md: ${error.message}`);
    }

    console.log('--- Full README Generation Complete ---');
}

// Execute the main function
createFullReadme();