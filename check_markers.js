const fs = require('fs');
const html = fs.readFileSync('ref/noomo.html', 'utf8');

const search = [
    '<div class="home-info-block',
    '<div class="home-news',
    '<div class="home-contact-form',
    '<div class="home-footer'
];

search.forEach(s => {
    const idx = html.indexOf(s);
    if (idx === -1) console.log('MISSING:', s);
    else console.log('FOUND:', s, html.substring(idx, idx + 60));
});
