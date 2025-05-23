const fs = require('fs');
const path = require('path');

const CHEATSHEETS_DIR = path.join(__dirname, '..', 'cheatsheets');

/**
 * Recursively gets all markdown files in a directory.
 * @param {string} dir - The directory to scan.
 * @param {Array<string>} fileList - Accumulated list of file paths.
 * @returns {Array<string>} - List of all markdown file paths.
 */
function getMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            // If it's a directory, recurse into it
            getMarkdownFiles(filePath, fileList);
        } else if (path.extname(file) === '.md') {
            // If it's a markdown file, add it to the list
            fileList.push(filePath);
        }
    });
    return fileList;
}

/**
 * Cleans up a single Markdown file based on specified rules.
 * @param {string} filePath - The full path to the markdown file.
 */
function cleanMarkdownFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content; // Store original content to check for changes

    console.log(`Processing: ${path.relative(CHEATSHEETS_DIR, filePath)}`);

    // --- Rule 1: Remove specific "Untitled" metadata block at the start of the file ---
    // This exact block will be removed if found at the beginning of the file.
    const untitledBlock = `title: Untitled
category: Uncategorized
description: No description provided.`;

    if (content.startsWith(untitledBlock)) {
        console.log(`  - Removing "Untitled" block.`);
        // Remove the block and ensure no leading blank lines remain from its removal
        content = content.substring(untitledBlock.length).trimStart();
    }

    // --- Rule 2: Replace the specific bolded placeholder block with the desired format ---
    // This handles the exact pattern with blank lines you specified.
    // We use a regular expression with multiline flag and capture groups for flexibility
    // and to handle potential leading/trailing whitespace variations.
    const oldSpecificPlaceholderRegex = /^\s*\*\*title:\*\*\s*\n+\s*\*\*category:\*\*\s*\n+\s*\*\*description:\*\*\s*$/m;

    // The replacement string includes the desired blank lines.
    const newSpecificPlaceholder = `title: 

category: 

description: `;

    if (oldSpecificPlaceholderRegex.test(content)) {
        console.log(`  - Replacing specific bolded placeholder block with new format.`);
        content = content.replace(oldSpecificPlaceholderRegex, newSpecificPlaceholder);
    }


    // Write back only if content has changed
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  Successfully updated ${path.basename(filePath)}`);
    } else {
        console.log(`  No changes needed.`);
    }
}

/**
 * Main function to start the cleanup process.
 */
function runCleanup() {
    console.log('--- Starting cheatsheet cleanup process ---');
    const markdownFiles = getMarkdownFiles(CHEATSHEETS_DIR);

    if (markdownFiles.length === 0) {
        console.log('No Markdown files found in the cheatsheets directory. Exiting cleanup.');
        console.log('--- Cleanup process finished ---');
        return;
    }

    markdownFiles.forEach(filePath => {
        cleanMarkdownFile(filePath);
    });

    console.log('--- Cheatsheet cleanup complete ---');
}

// Execute the cleanup
runCleanup();