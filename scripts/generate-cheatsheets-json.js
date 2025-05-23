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
 *
 * @param {string} filePath - The full path to the markdown file.
 * @returns {boolean} - True if the file was modified, false otherwise.
 */
function cleanupFileInPlace(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content; // Store original content to check if modification happened
    let modified = false;

    // Split content into lines for robust line-based trimming
    let lines = content.split(/\r?\n/);

    // --- CLEANUP RULE 1: Remove everything BEFORE the first "title:" line ---
    let firstTitleLineIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().toLowerCase().startsWith('title:')) {
            firstTitleLineIndex = i;
            break;
        }
    }

    if (firstTitleLineIndex > 0) { // If "title:" is found and not on the first line
        console.log(`  CLEANUP: Removing ${firstTitleLineIndex} lines before "title:" line.`);
        lines = lines.slice(firstTitleLineIndex);
        modified = true;
    }
    // If firstTitleLineIndex is -1, it means "title:" was not found.
    // If it's 0, it means "title:" was already on the first line.
    // In both cases, no lines are removed by this specific rule.

    // Rejoin lines to work with string for next rules, then trim leading whitespace
    content = lines.join('\n').trimStart();


    // --- Existing Cleanup Rule 3: Remove specific "Untitled" metadata block at the start ---
    // This targets the exact block: "title: Untitled\ncategory: Uncategorized\ndescription: No description provided."
    // and removes it only if it's precisely at the beginning of the *current* content.
    const untitledBlock = `title: Untitled
category: Uncategorized
description: No description provided.`;

    if (content.startsWith(untitledBlock)) {
        console.log(`  CLEANUP: Removing exact "Untitled" block.`);
        content = content.substring(untitledBlock.length).trimStart();
        modified = true;
    }


    // --- Existing Cleanup Rule 4: Replace bolded metadata keys with unbolded ones ---
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
        modified = true;
    }

    // --- Existing Cleanup Rule 5: Replace specific bolded placeholder block ---
    // This targets a specific sequence of bolded metadata keys and normalizes their formatting.
    const oldSpecificPlaceholderRegex = /(\n|^)\s*\*\*title:\*\*\s*\n+\s*\*\*category:\*\*\s*\n+\s*\*\*description:\*\*\s*/g;
    const newSpecificPlaceholder = '$1title: \n\ncategory: \ndescription: ';

    if (oldSpecificPlaceholderRegex.test(content)) {
        console.log(`  CLEANUP: Replacing specific bolded placeholder block.`);
        content = content.replace(oldSpecificPlaceholderRegex, newSpecificPlaceholder);
        modified = true;
    }

    // Write back only if content has truly changed
    if (modified && content !== originalContent) { // Ensure actual content change, not just 'modified' flag
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

    // Only look in the first few lines (up to 10) to find metadata
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
    let cheatsheetsData = []; // Use 'let' because we will reassign after sorting

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
                console.log(`  File was modified by cleanup.`);
            } else {
                console.log(`  No cleanup needed.`);
            }

            // Step 2: Read cleaned content and extract/validate metadata
            const cleanedContent = fs.readFileSync(fullPath, 'utf8'); // Read again after potential modification
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
            wrongFormatFiles.push(`- ${relativePath}: Reading/Processing error - ${error.message}`);
        }
    }

    // --- Sort cheatsheetsData before writing to JSON ---
    cheatsheetsData.sort((a, b) => {
        // Primary sort by category (case-insensitive)
        const categoryA = a.category ? a.category.toLowerCase() : '';
        const categoryB = b.category ? b.category.toLowerCase() : '';
        const categoryCompare = categoryA.localeCompare(categoryB);
        if (categoryCompare !== 0) {
            return categoryCompare;
        }
        // Secondary sort by title (case-insensitive)
        const titleA = a.title ? a.title.toLowerCase() : '';
        const titleB = b.title ? b.title.toLowerCase() : '';
        return titleA.localeCompare(titleB);
    });
    console.log(`\nSorted ${cheatsheetsData.length} cheatsheet entries.`);

    // --- Final Output Generation ---

    // Generate cheatsheets.json
    fs.writeFileSync(OUTPUT_JSON_FILE, JSON.stringify(cheatsheetsData, null, 2), 'utf8');
    console.log(`✅ ${cheatsheetsData.length} valid cheatsheet entries processed.`);
    console.log(`Output written to: ${OUTPUT_JSON_FILE}`);

    // Generate/Update wrong-format.txt
    if (wrongFormatFiles.length > 0) {
        const header = `--- Files with potential formatting issues or missing essential metadata ---\n\n`;
        fs.writeFileSync(WRONG_FORMAT_FILE, header + wrongFormatFiles.join('\n') + '\n', 'utf8');
        console.warn(`\n⚠️ Found ${wrongFormatFiles.length} files with issues. Please review: ${WRONG_FORMAT_FILE}`);
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