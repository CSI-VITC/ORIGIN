const fs = require('fs');

let html = fs.readFileSync('ref/noomo.html', 'utf8');

// The hackathon template likely didn't have Nuxt json block at the bottom, or maybe it did.
// Let's preserve everything exactly as it is in ref/noomo.html.

fs.mkdirSync('src/partials', { recursive: true });

function extract(name, startStr, endStr) {
    const startIndex = html.indexOf(startStr);
    if (startIndex === -1) throw new Error(`Could not find start for ${name}: ${startStr}`);
    
    // We search for the endStr starting from startIndex + startStr.length to avoid immediate matching if they overlap
    const searchFrom = startIndex + startStr.length;
    const endIndex = html.indexOf(endStr, searchFrom);
    if (endIndex === -1) throw new Error(`Could not find end for ${name}: ${endStr}`);
    
    const content = html.substring(startIndex, endIndex);
    fs.writeFileSync(`src/partials/${name}.html`, content);
    
    // Replace the extracted chunk with an INCLUDE comment
    html = html.substring(0, startIndex) + `<!-- INCLUDE: partials/${name}.html -->\n` + html.substring(endIndex);
}

// Slice the header
extract('header', '<header', '</header>');

// Slice the page sections
extract('hero', '<div data-v-1d267d81="" class="mobile-hero">', '<div data-v-7abacc29="" class="home-mobile-cases">');
extract('cases', '<div data-v-7abacc29="" class="home-mobile-cases">', '<div class="home-info-block">'); 
extract('infoBlock', '<div class="home-info-block">', '<div class="home-news">');
extract('insights', '<div class="home-news">', '<div class="home-contact-form">');
extract('contact', '<div class="home-contact-form">', '<div class="home-footer">');
extract('footer', '<div class="home-footer">', '<div class="testimonails-text"');

// Slice the Nuxt Data json to make index.html small on disk
const dataMatch = html.match(/<script type="application\/json" id="__NUXT_DATA__"[^>]*>[\s\S]*?<\/script>/);
if (dataMatch) {
    fs.writeFileSync('src/partials/nuxtData.html', dataMatch[0]);
    html = html.replace(dataMatch[0], '<!-- INCLUDE: partials/nuxtData.html -->\n');
}

// Slice SVG sprite if it exists
const svgMatch = html.match(/<svg[^>]*>[\s\S]*?<\/svg>/);
if (svgMatch && svgMatch[0].length > 1000) {
    fs.writeFileSync('src/partials/svgSprite.html', svgMatch[0]);
    html = html.replace(svgMatch[0], '<!-- INCLUDE: partials/svgSprite.html -->\n');
}

// Remove the .preloader element so it doesn't show loading animation
const preloaderStart = html.indexOf('<div class="preloader"');
if (preloaderStart !== -1) {
    const preloaderEnd = html.indexOf('</div>', html.indexOf('</div>', preloaderStart) + 1); // rough skip
    // Wait, preloader has nested divs. It's safer to just replace it with display:none or empty string using regex
    html = html.replace(/<div class="preloader"[^>]*>[\s\S]*?<\/div>\s*<\/div>/, '');
}

// Write the master skeleton
fs.writeFileSync('src/index.html', html);
console.log('Perfectly sliced HTML using string indices.');
