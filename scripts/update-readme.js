// scripts/update-readme.js
const fs = require('fs'); // Changed from import fs from 'fs';
const path = require('path'); // Changed from import path from 'path';

// Define the paths
const ROOT_DIR = path.join(__dirname, '..');
const README_PATH = path.join(ROOT_DIR, 'README.md');
const CHEATSHEETS_DIR = path.join(ROOT_DIR, 'cheatsheets');

// Define the markers for the auto-generated section
const START_MARKER = '';
const END_MARKER = '';

/**
 * Recursively gets all markdown files in a directory.
 * @param {string} dir - The directory to scan.
 * @param {Array<string>} fileList - Accumulated list of file paths.
 * @returns {Array<string>} - List of all markdown file paths with relative paths.
 */
function getMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getMarkdownFiles(filePath, fileList);
        } else if (path.extname(file) === '.md') {
            // Store path relative to the project root for README links
            fileList.push(path.relative(ROOT_DIR, filePath));
        }
    });
    return fileList;
}

/**
 * Extracts metadata from a cheatsheet content string.
 * @param {string} content - The full content of the cheatsheet markdown file.
 * @returns {object} - An object with title, category, and description.
 */
function extractMetadata(content) {
    const metadata = {
        title: 'Untitled',
        category: 'Uncategorized',
        description: 'No description provided.'
    };

    const titleMatch = content.match(/^title:\s*(.*)$/m);
    if (titleMatch && titleMatch[1]) {
        metadata.title = titleMatch[1].trim();
    }

    const categoryMatch = content.match(/^category:\s*(.*)$/m);
    if (categoryMatch && categoryMatch[1]) {
        metadata.category = categoryMatch[1].trim();
    }

    const descriptionMatch = content.match(/^description:\s*(.*)$/m);
    if (descriptionMatch && descriptionMatch[1]) {
        metadata.description = descriptionMatch[1].trim();
    }

    return metadata;
}

/**
 * Generates the Markdown content for the README index.
 * @param {Array<string>} markdownFiles - List of relative paths to markdown files.
 * @returns {string} - Markdown string for the index section.
 */
function generateReadmeIndex(markdownFiles) {
    const cheatsheets = [];

    markdownFiles.forEach(filePath => {
        const fullPath = path.join(ROOT_DIR, filePath);
        try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const metadata = extractMetadata(content);
            cheatsheets.push({
                filePath: filePath,
                title: metadata.title,
                category: metadata.category,
                description: metadata.description
            });
        } catch (error) {
            console.warn(`Warning: Could not read or process ${filePath}. Skipping.`, error.message);
        }
    });

    // Group cheatsheets by category and sort them
    const categorizedCheatsheets = cheatsheets.reduce((acc, sheet) => {
        if (!acc[sheet.category]) {
            acc[sheet.category] = [];
        }
        acc[sheet.category].push(sheet);
        return acc;
    }, {});

    let indexContent = '';
    const sortedCategories = Object.keys(categorizedCheatsheets).sort();

    sortedCategories.forEach(category => {
        indexContent += `### 📂 ${category}\n\n`;
        // Sort cheatsheets within each category by title
        categorizedCheatsheets[category].sort((a, b) => a.title.localeCompare(b.title));
        categorizedCheatsheets[category].forEach(sheet => {
            // Use original filePath for the link in README, relative to README.md
            const relativeLink = path.relative(path.dirname(README_PATH), path.join(ROOT_DIR, sheet.filePath)).replace(/\\/g, '/'); // Ensure forward slashes for URLs
            indexContent += `- [${sheet.title}](./${relativeLink})\n`;
        });
        indexContent += '\n'; // Add a blank line between categories for readability
    });

    return indexContent;
}

/**
 * Updates the README.md file with the generated index.
 */
function updateReadme() {
    console.log('--- Starting README update process ---');
    let readmeContent = fs.readFileSync(README_PATH, 'utf8');

    const startIndex = readmeContent.indexOf(START_MARKER);
    const endIndex = readmeContent.indexOf(END_MARKER);

    if (startIndex === -1 || endIndex === -1) {
        console.error(`Error: Could not find both "${START_MARKER}" and "${END_MARKER}" markers in README.md.`);
        console.error('Please ensure these markers are present to define the auto-index section.');
        process.exit(1);
    }

    const beforeIndex = readmeContent.substring(0, startIndex + START_MARKER.length);
    const afterIndex = readmeContent.substring(endIndex);

    const markdownFiles = getMarkdownFiles(CHEATSHEETS_DIR);
    const generatedIndex = generateReadmeIndex(markdownFiles);

    // Combine parts: before markers + markers + generated content + markers + after markers
    const newReadmeContent = `${beforeIndex}\n\n${generatedIndex}${afterIndex}`;

    if (newReadmeContent !== readmeContent) {
        fs.writeFileSync(README_PATH, newReadmeContent, 'utf8');
        console.log('README.md updated successfully with new cheatsheet index.');
    } else {
        console.log('README.md index is already up-to-date. No changes needed.');
    }
    console.log('--- README update complete ---');
}

// Execute the update
updateReadme();