// docs/script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cheatsheet-container');
    const searchInput = document.getElementById('search');
  
    fetch('../cheatsheets.json')
      .then(response => response.json())
      .then(data => {
        const grouped = {};
  
        data.forEach(item => {
          if (!grouped[item.category]) grouped[item.category] = [];
          grouped[item.category].push(item);
        });
  
        const render = () => {
          const keyword = searchInput.value.toLowerCase();
          container.innerHTML = '';
  
          for (const category in grouped) {
            const filtered = grouped[category].filter(item =>
              item.title.toLowerCase().includes(keyword) ||
              item.description.toLowerCase().includes(keyword)
            );
  
            if (filtered.length === 0) continue;
  
            const section = document.createElement('section');
            section.innerHTML = `<h2>${category}</h2>`;
  
            filtered.forEach(item => {
              const div = document.createElement('div');
              div.className = 'cheatsheet';
              div.innerHTML = `
                <h3><a href="${item.file}" target="_blank">${item.title}</a></h3>
                <p>${item.description}</p>
              `;
              section.appendChild(div);
            });
  
            container.appendChild(section);
          }
        };
  
        searchInput.addEventListener('input', render);
        render();
      });
  });
  