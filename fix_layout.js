const fs = require('fs');
const path = require('path');
const layoutPath = path.join('noomo', 'app', 'layout.js');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');

const skeletonHtml = fs.readFileSync('skeleton_clean.html', 'utf8');
const headMatch = skeletonHtml.match(/<head>([\s\S]*?)<\/head>/i);
let headContent = headMatch ? headMatch[1] : '';

const links = [];
const linkRegex = /<link([^>]+)>/gi;
let match;
while ((match = linkRegex.exec(headContent)) !== null) {
    if (!match[1].includes('rel="icon"') && !match[1].includes('rel="modulepreload"')) {
        // Next.js handles preloads usually, but let's keep them if needed, wait.
        // The original had modulepreload for JS files. 
        // We'll just convert HTML attrs to JSX attrs
        let attrs = match[1]
            .replace(/crossorigin=""/gi, 'crossOrigin=""')
            .replace(/class=/gi, 'className=')
            .replace(/as=/gi, 'as=');
        
        // Ensure self closing
        if (!attrs.endsWith('/')) {
            attrs += '/';
        }
        links.push('<link ' + attrs + '>');
    }
}

let stylesStr = '';
const styleRegex = /<style>([\s\S]*?)<\/style>/gi;
while ((match = styleRegex.exec(headContent)) !== null) {
    stylesStr += match[1] + '\n';
}

const newHead = `<head>
        ${links.join('\n        ')}
        <style dangerouslySetInnerHTML={{ __html: \`${stylesStr.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      </head>`;

layoutCode = layoutCode.replace(/<head dangerouslySetInnerHTML=.*? \/>/, newHead);

fs.writeFileSync(layoutPath, layoutCode);
console.log('Updated layout.js with safe JSX head injection.');
