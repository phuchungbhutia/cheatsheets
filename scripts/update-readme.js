const fs = require('fs');
const path = require('path');

const CHEATSHEET_DIR = path.join(__dirname, '../cheatsheets');
const README_PATH = path.join(__dirname, '../README.md');

function getMarkdownFiles(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(base, entry.name);

    if (entry.isDirectory()) {
      files = files.concat(getMarkdownFiles(fullPath, relativePath));
    } else if (entry.name.endsWith('.md')) {
      files.push(relativePath);
    }
  }

  return files;
}

function groupByCategory(files) {
  const grouped = {};
  files.forEach(file => {
    const parts = file.split(path.sep);
    const category = parts[0];
    const filename = parts[1].replace('.md', '');

    if (!grouped[category]) grouped[category] = [];
    grouped[category].push({ file, name: filename });
  });
  return grouped;
}

function generateMarkdownList(grouped) {
  let content = '';
  for (const [category, items] of Object.entries(grouped)) {
    content += `### 📂 ${category.charAt(0).toUpperCase() + category.slice(1)}\n`;
    items.forEach(item => {
      const link = `./cheatsheets/${item.file.replace(/\\/g, '/')}`;
      content += `- [${item.name.replace(/-/g, ' ')}](${link})\n`;
    });
    content += '\n';
  }
  return content;
}

function updateReadme(newList) {
  const readme = fs.readFileSync(README_PATH, 'utf-8');
  const [start, , end] = readme.split(/<!-- AUTO_INDEX_START -->([\s\S]*?)<!-- AUTO_INDEX_END -->/);

  const updated = `${start}<!-- AUTO_INDEX_START -->\n\n${newList}<!-- AUTO_INDEX_END -->${end}`;
  fs.writeFileSync(README_PATH, updated);
  console.log('README.md updated with auto index.');
}

// Main
const mdFiles = getMarkdownFiles(CHEATSHEET_DIR);
const grouped = groupByCategory(mdFiles);
const markdownList = generateMarkdownList(grouped);
updateReadme(markdownList);
