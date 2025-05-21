// docs/script.js

// Mobile navigation toggle
function toggleMobileMenu() {
    var x = document.getElementById("myNavLinks");
    if (x && x.className === "nav-links") {
        x.className += " responsive";
    } else if (x) {
        x.className = "nav-links";
    }
}

// Function to populate category dropdowns on all relevant pages
async function populateCategoryDropdowns() {
    try {
        const response = await fetch('cheatsheets.json');
        const data = await response.json();
        const categories = [...new Set(data.map(sheet => sheet.category))].sort((a, b) => a.localeCompare(b)); // Get unique and sorted categories

        // Target all dropdowns that need category lists
        const dropdowns = [
            document.getElementById('category-dropdown'),
            document.getElementById('category-dropdown-viewer')
        ].filter(Boolean); // Filter out nulls if element doesn't exist on current page

        dropdowns.forEach(dropdown => {
            dropdown.innerHTML = ''; // Clear existing content
            categories.forEach(category => {
                const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
                const link = document.createElement('a');
                link.href = `index.html#${categorySlug}`; // Link to category section on index.html
                link.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                dropdown.appendChild(link);
            });
        });

        // Populate Recent Cheatsheets
        const recentCheatsheetsContainer = document.getElementById('recent-cheatsheets-list');
        if (recentCheatsheetsContainer) {
            recentCheatsheetsContainer.innerHTML = ''; // Clear existing
            const recentCount = 5; // Display top 5 most recent
            // Data is already sorted by lastUpdated in generate-index.js
            for (let i = 0; i < Math.min(recentCount, data.length); i++) {
                const sheet = data[i];
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `cheatsheet-viewer.html?id=${sheet.slug}`;
                a.textContent = sheet.title;
                li.appendChild(a);
                recentCheatsheetsContainer.appendChild(li);
            }
        }

    } catch (error) {
        console.error('Error fetching categories or recent cheatsheets:', error);
    }
}


// Live search functionality for index.html
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const cheatsheetListContainer = document.getElementById('cheatsheet-list');

    if (searchInput && cheatsheetListContainer) {
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toLowerCase();
            const items = cheatsheetListContainer.querySelectorAll('.cheatsheet-item'); // Each cheatsheet entry

            items.forEach(item => {
                const title = item.textContent || item.innerText;
                if (title.toLowerCase().indexOf(filter) > -1) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }
}

// Function to load and display cheatsheet content on cheatsheet-viewer.html
async function loadCheatsheetContent() {
    const cheatsheetContentDiv = document.getElementById('cheatsheet-content');
    if (!cheatsheetContentDiv) return; // Not on the viewer page

    const urlParams = new URLSearchParams(window.location.search);
    const cheatsheetSlug = urlParams.get('id');

    if (cheatsheetSlug) {
        try {
            // Fetch the metadata from cheatsheets.json
            const metadataResponse = await fetch('cheatsheets.json');
            if (!metadataResponse.ok) throw new Error('Failed to fetch cheatsheet metadata.');
            const cheatsheetsMetadata = await metadataResponse.json();

            // Find the cheatsheet's metadata by slug
            const cheatsheetMeta = cheatsheetsMetadata.find(s => s.slug === cheatsheetSlug);

            if (cheatsheetMeta) {
                // Fetch the actual HTML content for this specific cheatsheet from the generated files
                const contentResponse = await fetch(`cheatsheet-content/${cheatsheetSlug}.html`);
                if (!contentResponse.ok) throw new Error('Failed to fetch cheatsheet HTML content.');
                const htmlContent = await contentResponse.text();

                cheatsheetContentDiv.innerHTML = `
                    <h1>${cheatsheetMeta.title}</h1>
                    <p><strong>Category:</strong> ${cheatsheetMeta.category}</p>
                    <p>${cheatsheetMeta.description}</p>
                    <hr>
                    ${htmlContent}
                `;
                // Re-highlight code blocks if any (needed after dynamic content insertion)
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            } else {
                cheatsheetContentDiv.innerHTML = '<p>Cheatsheet not found.</p>';
            }
        } catch (error) {
            console.error('Error loading cheatsheet:', error);
            cheatsheetContentDiv.innerHTML = `<p>Error loading cheatsheet content. Details: ${error.message}</p>`;
        }
    } else {
        cheatsheetContentDiv.innerHTML = '<p>No cheatsheet selected. Please go back to the <a href="index.html">home page</a> to select one.</p>';
    }
}

// --- Auxiliary Pages (Optional: Categories, Recent, About, Contact, Help) ---
// These pages will just need the navbar setup and potentially dynamic content if you
// want them to fetch data via JS instead of being purely static.

// For 'categories.html', 'recent.html', 'about.html', 'contact.html', 'help.html'
// you can copy the navbar structure from index.html or cheatsheet-viewer.html
// and then add content specific to each page.
// The `populateCategoryDropdowns` function already handles dropdowns for all pages.

// Example for a simple `recent.html`:
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recent Cheatsheets</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">...</nav> <main class="content">
        <h1>Recently Updated Cheatsheets</h1>
        <ul id="recent-cheatsheets-list" class="cheatsheet-list">
            </ul>
    </main>

    <script src="script.js"></script>
</body>
</html>
*/


// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate categories on all pages that have the dropdown elements
    populateCategoryDropdowns();

    // Set up search only on index.html
    setupSearch();

    // Load cheatsheet content if on the viewer page
    loadCheatsheetContent();
});