const fs = require('fs');
const path = require('path');

// --- Configuration Paths ---
const CHEATSHEETS_DIR = path.join(__dirname, '..', 'cheatsheets');
const OUTPUT_JSON_FILE = path.join(__dirname, '..', 'cheatsheets.json');
const WRONG_FORMAT_FILE = path.join(__dirname, '..', 'wrong-format.txt');

// --- Global state for validation reporting ---
let wrongFormatFiles = [];

// --- Utility Functions ---

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
 * Performs specific cleanup operations on a single Markdown file in place.
 * This script will only remove/replace text as specified, it will not
 * reformat or reconstruct missing metadata blocks.
 *
 * @param {string} filePath - The full path to the markdown file.
 * @returns {boolean} - True if the file was modified, false otherwise.
 */
function cleanupFileInPlace(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // --- Cleanup Rule 1: Remove specific "Untitled" metadata block at the start of the file ---
    const untitledBlock = `title: Untitled
category: Uncategorized
description: No description provided.`;

    if (content.startsWith(untitledBlock)) {
        console.log(`  CLEANUP: Removing "Untitled" block.`);
        content = content.substring(untitledBlock.length).trimStart();
    }

    // --- Cleanup Rule 2: Replace bolded metadata keys with unbolded ones ---
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
        console.log(`  CLEANUP: Removed bolding from metadata keys.`);
    }

    // --- Cleanup Rule 3: Replace the specific bolded placeholder block with unbolded and correct newlines ---
    const oldSpecificPlaceholderRegex = /(\n|^)\s*\*\*title:\*\*\s*\n+\s*\*\*category:\*\*\s*\n+\s*\*\*description:\*\*\s*/g;
    const newSpecificPlaceholder = '$1title: \n\ncategory: \ndescription: ';

    if (oldSpecificPlaceholderRegex.test(content)) {
        console.log(`  CLEANUP: Replacing specific bolded placeholder block.`);
        content = content.replace(oldSpecificPlaceholderRegex, newSpecificPlaceholder);
    }

    // Write back only if content has truly changed
    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true; // File was modified
    }
    return false; // No modification
}


/**
 * Extracts metadata (title, category, description) from a markdown file's content.
 * It strictly parses the first few lines and expects the format 'key: value'.
 * It also removes bolding from the extracted values for the JSON output.
 *
 * @param {string} content - The full content of the markdown file.
 * @param {string} relativeFilePath - The path of the file relative to the cheatsheets directory.
 * @returns {object|null} - An object with extracted metadata, or null if essential metadata is missing/invalid.
 */
function extractAndValidateMetadata(content, relativeFilePath) {
    const lines = content.split(/\r?\n/);
    let metadata = {
        title: '',
        category: '',
        description: ''
    };
    let foundKeys = {
        title: false,
        category: false,
        description: false
    };

    // Only look in the first few lines to find metadata
    for (let i = 0; i < Math.min(10, lines.length); i++) {
        const line = lines[i].trim();

        if (line.toLowerCase().startsWith('title:')) {
            metadata.title = line.substring('title:'.length).trim().replace(/\*\*/g, ''); // Remove bolding
            foundKeys.title = true;
        } else if (line.toLowerCase().startsWith('category:')) {
            metadata.category = line.substring('category:'.length).trim().replace(/\*\*/g, ''); // Remove bolding
            foundKeys.category = true;
        } else if (line.toLowerCase().startsWith('description:')) {
            metadata.description = line.substring('description:'.length).trim().replace(/\*\*/g, ''); // Remove bolding
            foundKeys.description = true;
        } else if (line === '---' && (foundKeys.title || foundKeys.category || foundKeys.description)) {
            // Stop if we hit the separator and have found at least one metadata field
            break;
        } else if (line.length > 0 && !(line.toLowerCase().startsWith('title:') || line.toLowerCase().startsWith('category:') || line.toLowerCase().startsWith('description:'))) {
            // If we encounter a non-empty line that's not a metadata key, assume metadata block ended
            if (foundKeys.title || foundKeys.category || foundKeys.description) {
                 break;
            }
        }
    }

    let issues = [];

    // Check for "Untitled" title specifically
    if (metadata.title.toLowerCase() === 'untitled') {
        issues.push('Title is "Untitled"');
    }

    // Check if essential metadata is present for a valid entry
    if (!metadata.title) issues.push('Missing title');
    if (!metadata.category) issues.push('Missing category');
    if (!metadata.description) issues.push('Missing description');


    if (issues.length > 0) {
        wrongFormatFiles.push(`- ${relativeFilePath}: ${issues.join(', ')}`);
        return null; // Return null if essential metadata is missing or title is "Untitled"
    }

    return metadata;
}

// --- Main Script Execution ---

/**
 * Orchestrates the entire process: cleanup, metadata extraction,
 * JSON generation, and error reporting.
 */
function main() {
    console.log('--- Starting Cheatsheets Automation Process ---');
    wrongFormatFiles = []; // Reset for each run
    const allMarkdownFiles = getMarkdownFiles(CHEATSHEETS_DIR);
    const cheatsheetsData = [];

    if (allMarkdownFiles.length === 0) {
        console.log('No Markdown files found in the cheatsheets directory.');
    }

    for (const fullPath of allMarkdownFiles) {
        const relativePath = path.relative(CHEATSHEETS_DIR, fullPath);
        console.log(`Processing file: ${relativePath}`);

        try {
            // Step 1: Cleanup the file in place
            const wasCleaned = cleanupFileInPlace(fullPath);
            if (wasCleaned) {
                console.log(`  File was modified by cleanup: ${path.basename(fullPath)}`);
            } else {
                console.log(`  No cleanup needed for: ${path.basename(fullPath)}`);
            }

            // Step 2: Read cleaned content and extract/validate metadata
            const cleanedContent = fs.readFileSync(fullPath, 'utf8');
            const metadata = extractAndValidateMetadata(cleanedContent, relativePath);

            if (metadata) {
                cheatsheetsData.push({
                    title: metadata.title,
                    category: metadata.category,
                    description: metadata.description,
                    // Use path.posix.join for consistent forward slashes in URLs
                    // The link in JSON will be relative to the project root
                    file: './' + path.posix.join('cheatsheets', relativePath).replace(/\\/g, '/')
                });
            }

        } catch (error) {
            console.error(`ERROR: Could not process file ${relativePath}:`, error.message);
            wrongFormatFiles.push(`- ${relativePath}: Reading error - ${error.message}`);
        }
    }

    // --- Final Output Generation ---

    // Generate cheatsheets.json
    fs.writeFileSync(OUTPUT_JSON_FILE, JSON.stringify(cheatsheetsData, null, 2), 'utf8');
    console.log(`\n✅ ${cheatsheetsData.length} valid cheatsheet entries processed.`);
    console.log(`Output written to: ${OUTPUT_JSON_FILE}`);

    // Generate/Update wrong-format.txt
    if (wrongFormatFiles.length > 0) {
        const header = `--- Files with potential formatting issues or missing essential metadata ---\n\n`;
        fs.writeFileSync(WRONG_FORMAT_FILE, header + wrongFormatFiles.join('\n') + '\n', 'utf8');
        console.warn(`\n⚠️ Found ${wrongFormatFiles.length} files with issues. Please review: ${WRONG_FORMAT_FILE}`);
        // Optionally, you might want to exit with a non-zero code in CI/CD to indicate failure
        // process.exit(1);
    } else {
        if (fs.existsSync(WRONG_FORMAT_FILE)) {
             fs.unlinkSync(WRONG_FORMAT_FILE); // Remove the file if no errors
             console.log(`\n✅ No formatting issues found. ${WRONG_FORMAT_FILE} removed.`);
        } else {
             console.log(`\n✅ No formatting issues found.`);
        }
    }
    console.log('--- Cheatsheets Automation Process Complete ---');
}

// Execute the main function
main();