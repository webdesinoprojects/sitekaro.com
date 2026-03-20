const fs = require('fs');
const path = require('path');

// Branding replacements (case-sensitive)
const brandingReplacements = [
  { from: 'Sitekaro', to: 'Sitekaro', caseSensitive: true },
  { from: 'sitekaro', to: 'sitekaro', caseSensitive: true },
  { from: 'SITEKARO', to: 'SITEKARO', caseSensitive: true },
  { from: 'Sitekaro', to: 'Sitekaro', caseSensitive: true },
  { from: 'sitekaro.com', to: 'sitekaro.com', caseSensitive: false },
];

// Directories to search
const searchDirs = [
  'components',
  'app',
  'lib',
  'prisma',
  'scripts',
];

// File extensions to process
const extensions = ['.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.txt'];

// Files/directories to skip
const skipPatterns = [
  'node_modules',
  '.next',
  '.git',
  'dist',
  'build',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
];

let filesProcessed = 0;
let filesModified = 0;
let totalReplacements = 0;

function shouldSkip(filePath) {
  return skipPatterns.some(pattern => filePath.includes(pattern));
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let fileReplacements = 0;

    // Apply all branding replacements
    for (const replacement of brandingReplacements) {
      const flags = replacement.caseSensitive ? 'g' : 'gi';
      const regex = new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
      const matches = (content.match(regex) || []).length;
      
      if (matches > 0) {
        content = content.replace(regex, replacement.to);
        modified = true;
        fileReplacements += matches;
        totalReplacements += matches;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesModified++;
      console.log(`✅ Modified: ${filePath} (${fileReplacements} replacements)`);
    }

    filesProcessed++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  if (shouldSkip(dir)) return;

  try {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      
      if (shouldSkip(filePath)) return;

      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDirectory(filePath);
      } else if (stat.isFile()) {
        const ext = path.extname(filePath);
        if (extensions.includes(ext)) {
          processFile(filePath);
        }
      }
    });
  } catch (error) {
    console.error(`❌ Error reading directory ${dir}:`, error.message);
  }
}

console.log('🏷️  Starting branding replacement: Sitekaro → Sitekaro\n');
console.log('Searching in:', searchDirs.join(', '));
console.log('File types:', extensions.join(', '));
console.log('─'.repeat(60));

// Process each search directory
searchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`\n📁 Processing directory: ${dir}`);
    walkDirectory(dir);
  } else {
    console.log(`⚠️  Directory not found: ${dir}`);
  }
});

console.log('\n' + '─'.repeat(60));
console.log('✨ Branding replacement complete!\n');
console.log(`📊 Summary:`);
console.log(`   Files processed: ${filesProcessed}`);
console.log(`   Files modified: ${filesModified}`);
console.log(`   Total replacements: ${totalReplacements}`);
console.log('\n💡 Tip: Restart your dev server to see the changes!');
