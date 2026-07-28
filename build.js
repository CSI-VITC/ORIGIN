const fs = require('fs');
const path = require('path');

const srcIndex = fs.readFileSync('src/index.html', 'utf8');
const lines = srcIndex.split('\n');

const compiled = lines.map(line => {
    const match = line.match(/<!-- INCLUDE: (.*?) -->/);
    if (match) {
        const partialPath = path.join('src', match[1]);
        if (fs.existsSync(partialPath)) {
            return fs.readFileSync(partialPath, 'utf8');
        } else {
            console.error('Missing partial: ' + partialPath);
            return line;
        }
    }
    return line;
});

fs.writeFileSync('index.html', compiled.join('\n'));
console.log('Successfully built index.html from partials!');
