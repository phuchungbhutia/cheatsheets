// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cheatsheetsUrl = './cheatsheets.json';
    const contentDiv = document.getElementById('content');
    const searchInput = document.getElementById('search');
    const backBtn = document.getElementById('back-btn');
    const listContainer = document.getElementById('list-container');
  
    let cheatsheets = [];
    let filteredCheatsheets = [];
  
    // Fetch cheatsheets metadata JSON
    async function loadCheatsheets() {
      try {
        const res = await fetch(cheatsheetsUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        cheatsheets = await res.json();
        filteredCheatsheets = cheatsheets;
        renderIndex();
      } catch (err) {
        contentDiv.innerHTML = `<p style="color:red;">Failed to load cheatsheets metadata: ${err.message}</p>`;
        console.error(err);
      }
    }
  
    // Group cheatsheets by category
    function groupByCategory(items) {
      return items.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {});
    }
  
    // Render cheatsheet list grouped by category
    function renderIndex() {
      backBtn.style.display = 'none';
      contentDiv.innerHTML = '';
      listContainer.style.display = 'block';
  
      const grouped = groupByCategory(filteredCheatsheets);
  
      if (filteredCheatsheets.length === 0) {
        listContainer.innerHTML = `<p>No cheatsheets found.</p>`;
        return;
      }
  
      let html = '';
      for (const category of Object.keys(grouped).sort()) {
        html += `<details class="category-group" open>
            <summary>${category} (${grouped[category].length})</summary>
            <ul>`;
        for (const cs of grouped[category]) {
          html += `<li><a href="#" data-file="${cs.file}">${cs.title}</a><br/><small>${cs.description}</small></li>`;
        }
        html += `</ul></details>`;
      }
      listContainer.innerHTML = html;
  
      // Add click listeners to load cheatsheet markdown
      listContainer.querySelectorAll('a[data-file]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const file = e.currentTarget.dataset.file;
          loadCheatsheet(file);
        });
      });
    }
  
    // Load and render selected markdown cheatsheet
    async function loadCheatsheet(mdFile) {
      try {
        backBtn.style.display = 'block';
        listContainer.style.display = 'none';
        contentDiv.innerHTML = '<p>Loading cheatsheet...</p>';
        const res = await fetch(mdFile);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const mdText = await res.text();
  
        // Use marked.js to convert markdown to HTML
        contentDiv.innerHTML = marked.parse(mdText);
  
        // Scroll to top
        window.scrollTo(0, 0);
      } catch (err) {
        contentDiv.innerHTML = `<p style="color:red;">Failed to load cheatsheet: ${err.message}</p>`;
        console.error(err);
      }
    }
  
    // Back button handler
    backBtn.addEventListener('click', () => {
      renderIndex();
      searchInput.value = '';
      filteredCheatsheets = cheatsheets;
    });
  
    // Search filter handler
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        filteredCheatsheets = cheatsheets;
      } else {
        filteredCheatsheets = cheatsheets.filter(cs =>
          cs.title.toLowerCase().includes(query) ||
          cs.category.toLowerCase().includes(query) ||
          (cs.description && cs.description.toLowerCase().includes(query))
        );
      }
      renderIndex();
    });
  
    // Initial load
    loadCheatsheets();
  });
  