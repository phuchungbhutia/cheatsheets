const fs = require('fs');
const path = require('path');

const CHEATSHEET_DIR = path.join(__dirname, '..', 'cheatsheets');
const OUTPUT_FILE = path.join(__dirname, '..', 'cheatsheets.json');

function extractOrFixMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  let title, category, description;
  let metadataLines = [];
  let contentStartIndex = 0;

  // Extract first 10 lines for metadata check
  for (let i = 0; i < Math.min(10, lines.length); i++) {
    const line = lines[i];
    if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim();
      metadataLines.push(`title: ${title}`);
    } else if (line.startsWith('category:')) {
      category = line.replace('category:', '').trim();
      metadataLines.push(`category: ${category}`);
    } else if (line.startsWith('description:')) {
      description = line.replace('description:', '').trim();
      metadataLines.push(`description: ${description}`);
    }

    // Stop checking if we already have 3 metadata fields
    if (title && category && description) {
      contentStartIndex = i + 1;
      break;
    }
  }

  // Fill missing values
  if (!title) {
    title = 'Untitled';
    metadataLines.push(`title: ${title}`);
  }
  if (!category) {
    category = 'Uncategorized';
    metadataLines.push(`category: ${category}`);
  }
  if (!description) {
    description = 'No description provided.';
    metadataLines.push(`description: ${description}`);
  }

  // Rewrite the file with corrected metadata
  const restOfContent = lines.slice(contentStartIndex).join('\n').trim();
  const correctedContent = metadataLines.join('\n') + '\n\n' + restOfContent;
  fs.writeFileSync(filePath, correctedContent);

  return { title, category, description };
}

function walkDir(dir) {
  let results = [];

  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else if (file.endsWith('.md')) {
      const metadata = extractOrFixMetadata(filePath);
      if (metadata) {
        results.push({
          ...metadata,
          file: './' + path.posix.join('cheatsheets', path.relative(CHEATSHEET_DIR, filePath)).replace(/\\/g, '/'),
        });
      }
    }
  });

  return results;
}

function main() {
  const cheatsheets = walkDir(CHEATSHEET_DIR);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(cheatsheets, null, 2));
  console.log(`✅ cheatsheets.json generated with ${cheatsheets.length} entries.`);
}

main();
