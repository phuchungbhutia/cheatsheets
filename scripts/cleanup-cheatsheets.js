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

    // Rule 1: Remove specific "Untitled" metadata block at the start of the file
    const untitledBlock = `title: Untitled
category: Uncategorized
description: No description provided.`;

    // Ensure the block is at the very beginning of the content for a clean removal
    if (content.startsWith(untitledBlock)) {
        console.log(`  - Removing "Untitled" block.`);
        content = content.substring(untitledBlock.length).trimStart(); // Use trimStart to keep newlines as needed
    }

    // Rule 2: Replace bolded metadata keys with unbolded ones
    // These are general replacements and will catch variations within the file
    const replacementsMade = {
        title: false,
        category: false,
        description: false
    };

    if (content.includes('**title:**')) {
        content = content.replace(/\*\*title:\*\*/g, 'title:');
        replacementsMade.title = true;
    }
    if (content.includes('**category:**')) {
        content = content.replace(/\*\*category:\*\*/g, 'category:');
        replacementsMade.category = true;
    }
    if (content.includes('**description:**')) {
        content = content.replace(/\*\*description:\*\*/g, 'description:');
        replacementsMade.description = true;
    }

    if (Object.values(replacementsMade).some(Boolean)) {
        console.log(`  - Standardized metadata keys (e.g., 'title:', 'category:', 'description:').`);
    }

    // Rule 3: Replace the specific placeholder block you mentioned
    // This is a more targeted replacement if this specific sequence is found
    const oldSpecificPlaceholder = `
**title:** **category:** **description:** `;

    const newSpecificPlaceholder = `
title: 

category: 
description: `;

    if (content.includes(oldSpecificPlaceholder)) {
        console.log(`  - Replacing specific old placeholder block.`);
        content = content.replace(oldSpecificPlaceholder, newSpecificPlaceholder);
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