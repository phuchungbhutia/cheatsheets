const fs = require('fs');
const path = require('path');

const JSON_PATH = path.join(__dirname, '..', 'cheatsheets.json');
const README_PATH = path.join(__dirname, '..', 'README.md');

const START_MARKER = '<!-- CHEATSHEET_INDEX_START -->';
const END_MARKER = '<!-- CHEATSHEET_INDEX_END -->';

function generateMarkdownIndex(data) {
  const grouped = {};
  data.forEach((item) => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });

  let output = '';
  Object.entries(grouped).forEach(([category, items]) => {
    output += `### 📂 ${category}\n\n`;
    items.forEach(({ title, description, file }) => {
      output += `- [${title}](${file}) — _${description}_\n`;
    });
    output += '\n';
  });

  return output.trim();
}

function updateReadme() {
  const cheatsheets = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8'));
  const readme = fs.readFileSync(README_PATH, 'utf-8');

  const indexMarkdown = generateMarkdownIndex(cheatsheets);

  const newReadme = readme.replace(
    new RegExp(`${START_MARKER}[\s\S]*?${END_MARKER}`),
    `${START_MARKER}\n\n${indexMarkdown}\n\n${END_MARKER}`
  );

  fs.writeFileSync(README_PATH, newReadme, 'utf-8');
  console.log('✅ README.md updated with cheatsheet index.');
}

updateReadme();