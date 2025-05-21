// script.js
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('navbar').innerHTML = `
      <nav class="navbar">
        <a href="index.html">Home</a>
        <a href="categories.html">Categories</a>
        <a href="recent.html">Recent</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="help.html">Help</a>
        <input type="text" id="searchInput" placeholder="Search..."/>
      </nav>
    `;
  
    document.getElementById('footer').innerHTML = `
      <footer class="footer">
        <p>&copy; 2025 Cheatsheet Library. Built with ❤️ using GitHub Pages.</p>
      </footer>
    `;
  
    const searchBox = document.getElementById('searchInput');
    if (searchBox) {
      searchBox.addEventListener('input', function () {
        // Implement live search filtering logic here (optional)
      });
    }
  });
  