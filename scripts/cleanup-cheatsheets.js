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
            getMarkdownFiles(filePath, fileList);
        } else if (path.extname(file) === '.md') {
            fileList.push(filePath);
        }
    });
    return fileList;
}

/**
 * Performs specific cleanup operations on a single Markdown file.
 * This script will only remove/replace text as specified, it will not
 * reformat or reconstruct missing metadata blocks.
 *
 * @param {string} filePath - The full path to the markdown file.
 */
function cleanMarkdownFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content; // Store original content to check for changes

    console.log(`Processing: ${path.relative(CHEATSHEETS_DIR, filePath)}`);

    // --- Cleanup Rule 1: Remove specific "Untitled" metadata block at the start of the file ---
    // This exact block will be removed if found at the very beginning of the file.
    const untitledBlock = `title: Untitled
category: Uncategorized
description: No description provided.`;

    if (content.startsWith(untitledBlock)) {
        console.log(`  - Removing "Untitled" block.`);
        // Remove the block and ensure no leading blank lines remain from its removal
        content = content.substring(untitledBlock.length).trimStart();
    }

    // --- Cleanup Rule 2: Replace bolded metadata keys with unbolded ones ---
    // This looks for the bolding within the entire content and removes it.
    let changedBolding = false;
    if (content.includes('**title:**')) {
        content = content.replace(/\*\*title:\*\*/g, 'title:');
        changedBolding = true;
    }
    if (content.includes('**category:**')) {
        content = content.replace(/\*\*category:\*\*/g, 'category:');
        changedBolding = true;
    }
    if (content.includes('**description:**')) {
        content = content.replace(/\*\*description:\*\*/g, 'description:');
        changedBolding = true;
    }
    if (changedBolding) {
        console.log(`  - Removed bolding from metadata keys (e.g., 'title:', 'category:', 'description:').`);
    }

    // --- Cleanup Rule 3: Replace the specific bolded placeholder block with unbolded and correct newlines ---
    // This targets the specific sequence you mentioned: " **title:** \n\n **category:** \n **description:** "
    // and changes it to " title: \n\n category: \n description: "
    // Note: The regex handles potential leading/trailing whitespace around the bolded parts and newlines.
    const oldSpecificPlaceholderRegex = /(\n|^)\s*\*\*title:\*\*\s*\n+\s*\*\*category:\*\*\s*\n+\s*\*\*description:\*\*\s*/g;
    const newSpecificPlaceholder = '$1title: \n\ncategory: \ndescription: ';

    if (oldSpecificPlaceholderRegex.test(content)) {
        console.log(`  - Replacing specific bolded placeholder block with unbolded format and proper newlines.`);
        content = content.replace(oldSpecificPlaceholderRegex, newSpecificPlaceholder);
    }


    // Write back only if content has truly changed
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  Updated ${path.basename(filePath)}`);
    } else {
        console.log(`  No changes needed for ${path.basename(filePath)}`);
    }
}

/**
 * Main function to start the cleanup process.
 */
function runCleanup() {
    console.log('--- Starting cheatsheet cleanup process (strict removal/replacement) ---');
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