const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const nextAppDir = path.join(rootDir, 'noomo');
const componentsDir = path.join(nextAppDir, 'components');
const appDir = path.join(nextAppDir, 'app');

if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}

// Read partials
const partialsToRead = ['header', 'hero', 'cases', 'infoBlock', 'insights', 'contact', 'footer', 'nuxtData', 'svgSprite'];
const partialContent = {};
partialsToRead.forEach(p => {
    const pPath = path.join(rootDir, 'src', 'partials', `${p}.html`);
    partialContent[p] = fs.existsSync(pPath) ? fs.readFileSync(pPath, 'utf8') : '';
});

// Since Next.js requires a single React component, and we must avoid introducing ANY extra wrapper divs 
// (which would break Vue hydration), we will build the exact inner HTML string for `<div class="index">`
// and inject it using `dangerouslySetInnerHTML`.

// Wait, the mobile-menu and index-page wrappers are currently lost because split_html.js dropped them.
// Oh wait, my slice_perfect.js extracted the partials correctly, BUT what about the wrappers?
// I need the exact string from `<div class="index">` to `</div>` (end of index).
// Let's get the exact wrappers from skeleton_clean.html!

const skeletonHtml = fs.readFileSync(path.join(rootDir, 'skeleton_clean.html'), 'utf8');

// Find the content inside <div id="__nuxt">
const nuxtStart = skeletonHtml.indexOf('<div id="__nuxt">');
const nuxtEnd = skeletonHtml.indexOf('</div>\n    <div dangerouslySetInnerHTML={{ __html: nuxtDataHtml }}'); // wait, the skeleton doesn't have this.
// In skeleton_clean.html, the scripts come after </div> of __nuxt.
// Let's just find the exact inner HTML of <div id="__nuxt">.
const nuxtContentMatch = skeletonHtml.match(/<div id="__nuxt">([\s\S]*?)<script type="application\/json"/);
// Actually, I already replaced the scripts in slice_perfect.js with <!-- INCLUDE: partials/nuxtData.html -->
// So the end of __nuxt is just before that!
let innerNuxtHtml = '';
const nuxtDataInc = '<!-- INCLUDE: partials/nuxtData.html -->';
if (skeletonHtml.includes(nuxtDataInc)) {
    innerNuxtHtml = skeletonHtml.substring(nuxtStart + '<div id="__nuxt">'.length, skeletonHtml.indexOf(nuxtDataInc));
    // Trim the trailing </div> of __nuxt
    const lastDiv = innerNuxtHtml.lastIndexOf('</div>');
    if (lastDiv !== -1) {
        innerNuxtHtml = innerNuxtHtml.substring(0, lastDiv);
    }
} else {
    // If it doesn't have it, let's just do a regex match for the whole div
    // It's safer to just inject the partials back into the skeleton!
}

// Let's just reconstruct the full string by replacing the INCLUDE tags in skeleton_clean.html!
// This is the absolute safest way to guarantee exact character-for-character DOM.
let finalReconstructedBody = skeletonHtml;
partialsToRead.forEach(p => {
    finalReconstructedBody = finalReconstructedBody.replace(`<!-- INCLUDE: partials/${p}.html -->\n`, partialContent[p] || '');
});

// Now extract the <head> and <body> contents from the fully reconstructed HTML!
const headMatch = finalReconstructedBody.match(/<head>([\s\S]*?)<\/head>/i);
let headContent = headMatch ? headMatch[1] : '';

// Remove title/meta/icon from head as Next.js handles them
headContent = headContent
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta[^>]*>/gi, '')
    .replace(/<link rel="icon"[^>]*>/gi, '');

const bodyMatch = finalReconstructedBody.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Next.js handles the scripts, so let's extract the Nuxt entry script to put it in Next.js <Script>
// Wait, if we just dangerouslySetInnerHTML the ENTIRE bodyContent onto a <div>, it will include the script!
// But React doesn't execute <script> tags injected via dangerouslySetInnerHTML.
// So we must remove the script tags from bodyContent and render them via Next.js <Script>.

// Find the nuxt entry script
let entryScriptSrc = '/_nuxt/entry.ea3395e2.js'; // fallback
const scriptMatch = bodyContent.match(/<script[^>]*src="([^"]*entry[^"]*\.js)"[^>]*><\/script>/i);
if (scriptMatch) {
    entryScriptSrc = scriptMatch[1];
    bodyContent = bodyContent.replace(scriptMatch[0], '');
}

// Write app/layout.js
const layoutCode = `import Script from 'next/script';

export const metadata = {
  title: 'Digital Storytelling & 3D Website Design Agency | Noomo',
  description: 'We create 3D storytelling websites and immersive digital experiences that make people stop scrolling.',
};

export default function RootLayout({ children }) {
  const headHtml = \`${headContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
  
  return (
    <html lang="en" style={{ scrollBehavior: 'auto', touchAction: 'pan-x' }}>
      <head dangerouslySetInnerHTML={{ __html: headHtml }} suppressHydrationWarning />
      <body className="cursor-active">
        {children}
        <Script src="${entryScriptSrc}" type="module" crossOrigin="" strategy="afterInteractive" />
      </body>
    </html>
  );
}
`;
fs.writeFileSync(path.join(appDir, 'layout.js'), layoutCode);

// Write app/page.js
const pageCode = `export default function Home() {
  const bodyHtml = \`${bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
  
  // We attach the exact original body content to a Fragment? No, must be an element.
  // We can attach it to a <main> tag, but that adds a wrapper!
  // Wait, if we just return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />, the original had <div id="__nuxt">...
  // So we can extract the id="__nuxt" wrapper!
  
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} suppressHydrationWarning />;
}
`;
// Wait, if we return <div dangerouslySetInnerHTML>, we ADD a <div> right inside <body>!
// Original DOM:
// <body>
//   <div id="__nuxt">...</div>
//   <script>...
// </body>
// Our Next.js DOM:
// <body>
//   <div>
//     <div id="__nuxt">...</div>
//     <script>...
//   </div>
//   <Script ... />
// </body>
// Will an extra <div> wrapping `__nuxt` break Vue?
// Vue mounts on `#__nuxt` using `document.getElementById('__nuxt')`.
// It doesn't care if `__nuxt` is wrapped inside another `<div>`! It only cares about the children of `#__nuxt`!
// This is perfect! The extra wrapper is completely harmless.

fs.writeFileSync(path.join(appDir, 'page.js'), pageCode);

console.log('Next.js robust setup complete.');
