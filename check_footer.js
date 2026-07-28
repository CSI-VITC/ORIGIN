const fs = require('fs');
const html = fs.readFileSync('ref/noomo.html', 'utf8');

const footerIdx = html.indexOf('<div class="home-footer">');
console.log(html.substring(footerIdx, footerIdx + 2500));
