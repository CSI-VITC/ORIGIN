const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  'https://noomoagency.com/_nuxt/entry.ea3395e2.js',
  'https://noomoagency.com/_nuxt/swiper-vue.9fd8c7bd.js',
  'https://noomoagency.com/_nuxt/default.fc5a372c.js',
  'https://noomoagency.com/_nuxt/index.ba499ee8.js',
  'https://noomoagency.com/_nuxt/index.93ffdf89.js',
  'https://noomoagency.com/_nuxt/ScrollSmoother.8d9f90d6.js',
  'https://noomoagency.com/_nuxt/ScrollTrigger.039d4140.js',
  'https://noomoagency.com/_nuxt/ScrollToPlugin.e2ef7d76.js',
  'https://noomoagency.com/_nuxt/homeContactForm.4fdc7dc3.js',
  'https://noomoagency.com/_nuxt/homeFooter.8d29b2e8.js',
  'https://noomoagency.com/_nuxt/homeNews.vue.a59e816a.js',
  'https://noomoagency.com/_nuxt/allNews.9bc059ef.js',
  'https://noomoagency.com/_nuxt/nuxt-img.7485e894.js',
  'https://noomoagency.com/_nuxt/icon_eye.1bbdff11.js',
  'https://noomoagency.com/_nuxt/linkArrow.9537ab61.js',
  'https://noomoagency.com/logos/noomoLogo1.png',
  'https://noomoagency.com/logos/noomoLogo2.png',
  'https://noomoagency.com/mobileRev/mrev1.png',
  'https://noomoagency.com/mobileRev/mrev2.png',
  'https://noomoagency.com/mobileRev/mrev3.png',
  'https://noomoagency.com/mobileRev/mrev4.png',
  'https://noomoagency.com/icons/linkArrow.svg',
  'https://noomoagency.com/icons/allNews.svg',
  'https://noomoagency.com/icons/smallArrow.svg',
  'https://noomoagency.com/icons/smallArrowBlack.svg',
  'https://noomoagency.com/icons/footerlogo.png',
  'https://noomoagency.com/logos/mobileLogo.svg',
  'https://noomoagency.com/icons/oiG.svg',
  'https://noomoagency.com/icons/arrowpixel.svg',
  'https://noomoagency.com/logos/preloadLogoadjusted.svg',
  'https://noomoagency.com/_nuxt/custom.8de65538.js',
  'https://noomoagency.com/_nuxt/browser.4083dc18.js',
  'https://noomoagency.com/_nuxt/_commonjsHelpers.3c9a3002.js',
  'https://noomoagency.com/backgrounds/background_min.png',
  'https://noomoagency.com/awardsslides/1s.png',
  'https://noomoagency.com/awardsslides/2s.png',
  'https://noomoagency.com/awardsslides/3s.png',
  'https://noomoagency.com/awardsslides/4s.png',
  'https://noomoagency.com/awardsslides/5s.png',
  'https://noomoagency.com/awardsslides/6s.png',
  'https://noomoagency.com/awardsslides/7s.png',
  'https://noomoagency.com/awardsslides/8s.png',
  'https://noomoagency.com/awardsslides/9s.png',
  'https://noomoagency.com/awardsslides/10s.png',
  'https://noomoagency.com/awardsslides/11s.png',
  'https://noomoagency.com/awardsslides/12s.png',
  'https://noomoagency.com/awardsslides/13s.png',
  'https://noomoagency.com/awardsslides/14s.png',
  'https://noomoagency.com/awardsslides/15s.png',
  'https://noomoagency.com/awardsslides/16s.png',
  'https://noomoagency.com/awardsslides/17s.png',
  'https://noomoagency.com/awardsslides/18s.png',
  'https://noomoagency.com/awardsslides/19s.png',
  'https://noomoagency.com/icons/formheart.svg',
  'https://noomoagency.com/_nuxt/NeueHaasDisplayRoman.d8850e5c.ttf',
  'https://noomoagency.com/_nuxt/NeueMachina-Regular.e896c98c.otf',
  'https://noomoagency.com/icons/hover.png',
  'https://noomoagency.com/cases/glassT.png',
  'https://noomoagency.com/newModels/draco_wasm_wrapper.js',
  'https://noomoagency.com/newModels/draco_decoder.wasm',
  'https://noomoagency.com/hdri/1.jpeg',
  'https://noomoagency.com/hdri/h4.jpeg',
  'https://noomoagency.com/_nuxt/index.19d8a6f7.js',
  'https://noomoagency.com/_nuxt/worksCasesList.vue.7c6214c1.js',
  'https://noomoagency.com/_nuxt/index.2295d986.js',
  'https://noomoagency.com/_nuxt/our-story.5d3b1882.js',
  'https://noomoagency.com/_nuxt/ourDesignSolution.vue.463a6160.js',
  'https://noomoagency.com/_nuxt/index.578f37a2.js',
  'https://noomoagency.com/_nuxt/newsListItem.vue.27d37300.js',
  'https://noomoagency.com/_nuxt/connect.8efde437.js',
  'https://noomoagency.com/smallPlace.png',
  'https://noomoagency.com/icons/icon_eye.svg',
  'https://noomoagency.com/newModels/Platform-O.glb',
  'https://noomoagency.com/svgtitle/immersive.svg',
  'https://noomoagency.com/newModels/Jellyfish.glb',
  'https://noomoagency.com/newModels/HeartLocation.glb',
  'https://noomoagency.com/newModels/Clouds.glb',
  'https://noomoagency.com/svgtitle/InteractiveSvg.svg',
  'https://noomoagency.com/newModels/CoinbaseBall2.glb',
  'https://noomoagency.com/svgtitle/enterpriseSvg.svg',
  'https://noomoagency.com/newModels/Cards2Anim.glb',
  'https://noomoagency.com/svgtitle/BespokeSvg.svg',
  'https://noomoagency.com/newModels/Dendy3.glb',
  'https://noomoagency.com/backTexture/beckground_04min.jpeg',
  'https://noomoagency.com/newModels/BG2.glb',
  'https://noomoagency.com/svgtitle/startTitle.svg',
  'https://noomoagency.com/newModels/M.glb',
  'https://noomoagency.com/newModels/O.glb',
  'https://noomoagency.com/newModels/N.glb',
  'https://noomoagency.com/favicon.png',
  'https://noomoagency.com/newModels/Rocket.glb',
  'https://noomoagency.com/newModels/Eye.glb',
  'https://noomoagency.com/newModels/Bitcoin.glb',
  'https://noomoagency.com/newModels/Sun.glb',
  'https://noomoagency.com/newModels/Plug.glb',
  'https://noomoagency.com/newModels/lightning.glb',
  'https://noomoagency.com/revs/rev1.png',
  'https://noomoagency.com/revs/rev2.png',
  'https://noomoagency.com/revs/rev3.png',
  'https://noomoagency.com/revs/rev4.png',
  'https://noomoagency.com/newModels/netrixtest3.glb',
  'https://noomoagency.com/svgtitle/revTitle.svg',
  'https://noomoagency.com/newModels/playWithMesh.glb',
  'https://noomoagency.com/newModels/SoundOff.glb',
  'https://noomoagency.com/awards/Webby.png',
  'https://noomoagency.com/awards/reddot.png',
  'https://noomoagency.com/awards/SFDesignweek.png',
  'https://noomoagency.com/awards/awwwards.png',
  'https://noomoagency.com/newModels/webbby.glb',
  'https://noomoagency.com/newModels/reddot.glb',
  'https://noomoagency.com/newModels/SFDF_op1.glb',
  'https://noomoagency.com/newModels/awwwardsModel.glb',
  'https://noomoagency.com/newModels/Like.glb',
  'https://noomoagency.com/newModels/heart.glb',
  'https://noomoagency.com/newModels/goblet.glb',
  'https://noomoagency.com/icons/home1.svg',
  'https://noomoagency.com/_nuxt/_slug_.3b44e9a6.js',
  'https://noomoagency.com/_nuxt/_slug_.3f1148d5.css',
  'https://noomoagency.com/_nuxt/privacy-policy.4fa941ca.js',
  'https://noomoagency.com/_nuxt/privacy-policy.207a34cc.css'
];

async function download() {
  const publicDir = path.join(__dirname, 'noomo-react', 'public');
  
  for (const url of urls) {
    if (!url.startsWith('https://noomoagency.com/')) continue;
    const urlPath = new URL(url).pathname;
    const dest = path.join(publicDir, urlPath);
    
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (fs.existsSync(dest)) continue;

    console.log('Downloading', urlPath);
    await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode !== 200) {
          console.error(`Failed to download ${urlPath}: ${res.statusCode}`);
          resolve();
          return;
        }
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      }).on('error', (err) => {
        console.error(`Error downloading ${urlPath}:`, err.message);
        resolve();
      });
    });
  }
}

download().then(() => console.log('Done'));
