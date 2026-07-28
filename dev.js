const fs = require('fs');
const { spawn, execSync } = require('child_process');

console.log('🚀 Starting Development Environment...');

// Run initial build
function runBuild() {
  try {
    execSync('node build.js', { stdio: 'inherit' });
  } catch (e) {
    console.error('Build failed', e.message);
  }
}
runBuild();

// Watch src/ directory with debounce
let debounceTimer;
console.log('👀 Watching src/ directory for changes...');
fs.watch('src', { recursive: true }, (eventType, filename) => {
  if (filename) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      console.log(`\n🔄 File ${filename} changed. Rebuilding index.html...`);
      runBuild();
    }, 100);
  }
});

// Start local server
console.log('🌐 Starting local server (npx serve)...');
const server = spawn('npx', ['serve', '.', '-l', '3000'], { stdio: 'inherit', shell: true });

process.on('SIGINT', () => {
    server.kill('SIGINT');
    process.exit();
});
