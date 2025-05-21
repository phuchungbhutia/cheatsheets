// scripts/generate-index.js
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const matter = require('gray-matter');
const hljs = require('highlight.js'); // For syntax highlighting

const cheatsheetsDir = path.join(__dirname, '../cheatsheets');
const docsDir = path.join(__dirname, '../docs');
const indexPath = path.join(docsDir, 'index.html');
const cheatsheetViewerPath = path.join(docsDir, 'cheatsheet-viewer.html');
const cheatsheetsJsonPath = path.join(docsDir, 'cheatsheets.json');
const cheatsheetContentDir = path.join(docsDir, 'cheatsheet-content');

// Ensure cheatsheet-content directory exists
if (!fs.existsSync(cheatsheetContentDir)) {
    fs.mkdirSync(cheatsheetContentDir);
}

// Configure marked for Markdown to HTML conversion
marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    },
    gfm: true, // GitHub Flavored Markdown
    breaks: true // Enable GFM line breaks
});

// Function to slugify titles for clean URLs
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w-]+/g, '')       // Remove all non-word chars
        .replace(/--+/g, '-')          // Replace multiple - with single -
        .replace(/^-+/, '')            // Trim - from start of text
        .replace(/-+$/, '');           // Trim - from end of text
}

async function generateIndex() {
    const categories = {};
    const allCheatsheetsData = []; // Store metadata for JSON index

    // Recursively read cheatsheet files
    function readCheatsheets(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                readCheatsheets(filePath); // Recurse into subdirectories
            } else if (file.endsWith('.md')) {
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContent); // Extract front matter and content

                if (data.Title && data.Category) {
                    const category = data.Category.toLowerCase();
                    const slug = slugify(data.Title); // Create a unique slug for the cheatsheet

                    // Convert Markdown content to HTML
                    const cheatsheetHtmlContent = marked.parse(content);

                    // Save the HTML content to a separate file
                    const htmlContentFilePath = path.join(cheatsheetContentDir, `${slug}.html`);
                    fs.writeFileSync(htmlContentFilePath, cheatsheetHtmlContent, 'utf8');

                    const cheatsheetInfo = {
                        title: data.Title,
                        category: data.Category,
                        description: data.Description || '',
                        slug: slug,
                        lastUpdated: stat.mtime.toISOString() // Get last modified time
                    };

                    if (!categories[category]) {
                        categories[category] = [];
                    }
                    categories[category].push(cheatsheetInfo);
                    allCheatsheetsData.push(cheatsheetInfo);
                }
            };
        });
    }

    readCheatsheets(cheatsheetsDir);

    // --- Generate Cheatsheet Index HTML (index.html) ---
    let cheatsheetListHtml = '';
    for (const category in categories) {
        cheatsheetListHtml += `<div class="category-section" id="${category}">`; // Add ID for category linking
        cheatsheetListHtml += `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
        cheatsheetListHtml += `<ul class="cheatsheet-list">`;
        categories[category].forEach(sheet => {
            // Link to the viewer page with the slug as a URL parameter
            cheatsheetListHtml += `<li class="cheatsheet-item"><a href="cheatsheet-viewer.html?id=${sheet.slug}">${sheet.title}</a> - ${sheet.description}</li>`;
        });
        cheatsheetListHtml += `</ul>`;
        cheatsheetListHtml += `</div>`;
    }

    // Read the base index.html template
    let indexBaseHtml = fs.readFileSync(indexPath, 'utf8');

    // Populate the category dropdown in the navbar (this will be overridden by script.js dynamically, but good for initial render)
    let categoryDropdownHtml = '';
    const sortedCategories = Object.keys(categories).sort();
    sortedCategories.forEach(category => {
        categoryDropdownHtml += `<a href="index.html#${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</a>`;
    });
    indexBaseHtml = indexBaseHtml.replace('<div class="dropdown-content" id="category-dropdown">', `<div class="dropdown-content" id="category-dropdown">${categoryDropdownHtml}`);


    // Replace main content placeholder in index.html
    indexBaseHtml = indexBaseHtml.replace(
        '<main class="content" id="cheatsheet-list">\n            <h1>All Cheatsheets</h1>\n            \n            <p>Loading cheatsheets...</p>\n        </main>',
        `<main class="content" id="cheatsheet-list">
            <h1>All Cheatsheets</h1>
            ${cheatsheetListHtml}
        </main>`
    );
    fs.writeFileSync(indexPath, indexBaseHtml);
    console.log('docs/index.html generated successfully.');


    // --- Generate Cheatsheet Viewer HTML (cheatsheet-viewer.html) ---
    // This file is static as its content will be dynamically loaded by script.js
    const viewerHtmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cheatsheet Viewer</title>
            <link rel="stylesheet" href="styles.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
        </head>
        <body>
            <nav class="navbar">
                <div class="nav-brand">Developer Cheatsheets</div>
                <ul class="nav-links" id="myNavLinks">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="categories.html" class="dropbtn">Categories ▼</a>
                        <div class="dropdown-content" id="category-dropdown-viewer">
                            </div>
                    </li>
                    <li><a href="recent.html">Recent</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="help.html">Help</a></li>
                </ul>
                <div class="search-container">
                    <input type="text" id="search-input" placeholder="Search cheatsheets...">
                </div>
                <a href="javascript:void(0);" class="icon" onclick="toggleMobileMenu()">&#9776;</a>
            </nav>

            <main class="content">
                <button onclick="history.back()" class="back-button">← Back to Cheatsheets</button>
                <div id="cheatsheet-content" class="cheatsheet-detail">
                    Loading cheatsheet...
                </div>
            </main>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
            <script src="script.js"></script>
        </body>
        </html>
    `;
    fs.writeFileSync(cheatsheetViewerPath, viewerHtmlTemplate);
    console.log('docs/cheatsheet-viewer.html generated successfully.');


    // --- Generate JSON Index for Client-Side Fetching ---
    // Sort by lastUpdated for "Recent" feature
    allCheatsheetsData.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));

    fs.writeFileSync(cheatsheetsJsonPath, JSON.stringify(allCheatsheetsData, null, 2));
    console.log('docs/cheatsheets.json generated successfully.');
}

generateIndex().catch(console.error);