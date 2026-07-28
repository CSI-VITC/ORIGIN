const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

const findLine = (str, start = 0) => lines.findIndex((l, i) => i >= start && l.includes(str));
const findLineEnd = (str, start = 0) => lines.findIndex((l, i) => i >= start && l.includes(str)); // Same but useful for clarity

// Define the boundaries
const headerStart = findLine('<header');
const headerEnd = findLine('</header>') + 1;

const heroStart = findLine('<div class="mobile-hero"');
const casesStart = findLine('<div class="home-mobile-cases"');
const infoBlockStart = findLine('<div class="home-info-block"');
const revStart = findLine('<div class="mobile-rev"');
const awardsStart = findLine('<div class="home-awards"');
const newsStart = findLine('<div class="home-news"');
const contactStart = findLine('<div class="home-contact-form"');
const footerStart = findLine('<div class="home-footer"');
const footerEnd = findLine('</footer>', footerStart) > -1 ? findLine('</footer>', footerStart) + 1 : findLine('</div>\n    <script', footerStart) - 1; // Hacky way to find end

// If standard footer end isn't found, search for the script tag
let finalFooterEnd = footerEnd;
if (finalFooterEnd < footerStart) {
  finalFooterEnd = findLine('    <script', footerStart) - 1;
}

const slices = {
  header: { start: headerStart, end: headerEnd },
  hero: { start: heroStart, end: casesStart },
  cases: { start: casesStart, end: infoBlockStart },
  infoBlock: { start: infoBlockStart, end: revStart },
  testimonials: { start: revStart, end: awardsStart },
  awards: { start: awardsStart, end: newsStart },
  insights: { start: newsStart, end: contactStart },
  contact: { start: contactStart, end: footerStart },
  footer: { start: footerStart, end: finalFooterEnd }
};

// Create dirs
fs.mkdirSync('src/partials', { recursive: true });

let indexTemplate = lines.slice(0, headerStart).join('\n') + '\n';

for (const [name, bounds] of Object.entries(slices)) {
  const content = lines.slice(bounds.start, bounds.end).join('\n');
  fs.writeFileSync(`src/partials/${name}.html`, content);
  indexTemplate += `    <!-- INCLUDE: partials/${name}.html -->\n`;
}

indexTemplate += lines.slice(finalFooterEnd).join('\n');
fs.writeFileSync('src/index.html', indexTemplate);

console.log('Modularization complete!');
