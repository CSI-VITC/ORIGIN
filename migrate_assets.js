const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const publicDir = path.join(rootDir, 'noomo', 'public');

const foldersToCopy = [
    '_nuxt', 'assets', 'awards', 'awardsslides', 'backTexture', 'backgrounds', 'cases',
    'css', 'hdri', 'icons', 'js', 'logos', 'mobileRev', 'newModels', 'revs', 'svgtitle'
];

const filesToCopy = [
    'favicon.png', 'favicon.svg', 'icons.svg', 'smallPlace.png'
];

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

foldersToCopy.forEach(folder => {
    const src = path.join(rootDir, folder);
    const dest = path.join(publicDir, folder);
    if (fs.existsSync(src)) {
        try {
            execSync(`Copy-Item -Path "${src}" -Destination "${publicDir}" -Recurse -Force`, { shell: 'powershell.exe' });
            console.log(`Copied folder: ${folder}`);
        } catch (e) {
            console.error(`Failed to copy folder ${folder}:`, e.message);
        }
    }
});

filesToCopy.forEach(file => {
    const src = path.join(rootDir, file);
    const dest = path.join(publicDir, file);
    if (fs.existsSync(src)) {
        try {
            fs.copyFileSync(src, dest);
            console.log(`Copied file: ${file}`);
        } catch (e) {
            console.error(`Failed to copy file ${file}:`, e.message);
        }
    }
});

console.log('Asset migration complete.');
