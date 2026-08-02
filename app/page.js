'use client';

import { useState, useEffect } from 'react';

// Configurable event start date/time (e.g. March 26, 2027 at 09:00 AM IST)
const EVENT_START_DATE = '2027-03-26T09:00:00+05:30';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Suppress Vue hydration console mismatch warning
    const rawError = console.error;
    console.error = (...args) => {
      if (args[0] && typeof args[0] === 'string' && args[0].includes('Hydration completed but contains mismatches')) {
        return;
      }
      rawError(...args);
    };

    // Configure global Nuxt config object
    window.__NUXT__ = {};
    window.__NUXT__.config = {
      public: {
        robotsClient: "index, follow",
        device: {
          defaultUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36",
          enabled: true,
          refreshOnResize: false
        },
        prismic: {
          endpoint: "noomo-website",
          clientConfig: {},
          client: "~/app/prismic/client",
          linkResolver: "~/app/prismic/linkResolver",
          richTextSerializer: "~/app/prismic/richTextSerializer",
          injectComponents: true,
          components: {},
          preview: false,
          toolbar: false
        },
        gtm: { devtools: true, id: "GTM-KXQJRFKX" },
        gtag: { id: "G-9R6X953ER3", config: {}, initialConsent: true, loadingStrategy: "defer" },
        site: {
          _context: {
            defaultLocale: "defaults",
            trailingSlash: "defaults",
            titleSeparator: "defaults",
            name: "vendorEnv",
            indexable: "system",
            url: "nuxt:config:site",
            debug: "nuxt:config:site"
          },
          defaultLocale: "en",
          trailingSlash: false,
          titleSeparator: "|",
          name: "nuxt-blunk",
          indexable: true,
          url: "https://noomoagency.com",
          debug: false
        }
      },
      app: { baseURL: "/", buildAssetsDir: "/_nuxt/", cdnURL: "" }
    };

    // Dynamically inject the Nuxt Data JSON script tag
    const dataScript = document.createElement('script');
    dataScript.type = 'application/json';
    dataScript.id = '__NUXT_DATA__';
    dataScript.setAttribute('data-ssr', 'true');
    dataScript.textContent = `[["Reactive",1],{"data":2,"state":334,"_errors":346,"serverRendered":345,"path":347,"prerenderedAt":348,"pinia":349},{"home_page":3,"award":129},{"id":4,"uid":5,"url":5,"type":6,"href":7,"tags":8,"first_publication_date":19,"last_publication_date":20,"slugs":21,"linked_documents":23,"lang":24,"alternate_languages":25,"data":26},"ZMJ35xAAACEAJonp",null,"home_page","https://noomo-website.cdn.prismic.io/api/v2/documents/search?ref=aikt9xEAACgAcnUZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZMJ35xAAACEAJonp%22%29+%5D%5D",[9,10,11,12,13,14,15,16,17,18],"los angeles web design","website design los angeles","best interactive design agency","creative agency los angeles","storytelling website design","design agency los angeles","WebGL website design company","3d website design","top creative digital agency","3d storytelling videos","2023-07-27T14:00:01+0000","2026-01-29T04:01:40+0000",[22],"home-page",[],"en-us",[],{"hero_description":27,"enterprise_title":28,"enterprise_text":29,"enterprise_main_tag":30,"enterprise_tags":31,"interactive_title":32,"interactive_text":33,"interactive_main_tag":30,"interactive_tags":34,"iconic_title":35,"iconic_text":36,"iconic_main_tag":30,"iconic_tags":37,"immersive_title":38,"immersive_text":39,"immersive_main_tag":30,"immersive_tags":40,"main_text":41,"main_decription":42,"right_description":43,"item_title_1":44,"item_title_2":45,"item_title_3":46,"digital_products":47,"interactive_websites":48,"digital_branding":49,"reviews_description":50,"awards_list_title":51,"selected_news":52,"home_object_video_webm":104,"home_object_video_mp":106,"contact_form_title":113,"contact_form_description":114,"slices":115,"meta_description":116,"meta_image":117,"meta_title":128},"Award-winning design agency building websites, activations, and experiences that make people stop scrolling.","Noomo Labs","Immersive 3D web experience with customizable jellyfish showcasing transformation and motion. Real-time WebGL rendering, interactive storytelling, and experimental design pushing boundaries of what's possible on the web.","Website","Immersive  /  3D  /  Interactive","Coinbase and Golden State Warriors","Mobile-first brand activation microsite bringing game-day excitement to life through golden-hour aesthetics and real-time NFT minting. Interactive storytelling experience celebrating Warriors legacy through immersive 3D design.","Web 3  /  Brand Activation","Salesforce 360 Platform","Enterprise website design using interactive 3D elements to visualize Salesforce AI ecosystem. Glassy 3D tiles, modular UX, and spatial storytelling make complex enterprise platform accessible for CIOs, developers, and architects.","Enterprise  /  Storytelling  /  3D","Vision by Dandy","Interactive product website transforming dental technology into cinematic narrative. High-end 3D product visualization, scroll-based storytelling, and refined UI design showcase intraoral scanner through craft-driven digital experience for modern practices.","Storytelling  /  3D  /  Product","At Noomo, we create 3D storytelling websites and immersive digital experiences where craft and narrative become one.","From immersive 3D websites to cinematic brand videos, we let the story dictate the medium—whether that's real-time rendering, editorial design, or interactive experiences.","We partner with brands like Salesforce, AMD, Red Bull and Vogue Business who believe craft makes the difference.\\n\\nCompanies that value innovation, obsess over details, and understand great digital work requires time, trust, and true collaboration.","Services","Clients","♥‿♥","3D websites\\u003Cbr>\\nStorytelling websites\\u003Cbr>\\n3D storytelling videos\\u003Cbr>\\nImmersive web experiences \\u003Cbr>\\nWebGL development\\u003Cbr>\\nBrand activation microsites\\u003Cbr>\\nDigital event experiences\\u003Cbr>\\nInteractive website design\\u003Cbr>\\nAI-driven experiences\\u003Cbr>\\nDigital branding\\u003Cbr>","Salesforce\\u003Cbr> \\nAMD\\u003Cbr>\\nCoinbase\\u003Cbr>\\nRed Bull\\u003Cbr>\\nIntel | ai.io\\u003Cbr>\\nYolo Federal Credit Union\\u003Cbr>\\nPercipio Health\\u003Cbr>\\nDandy Vision\\u003Cbr>\\nVibrant Wellness\\u003Cbr>","Vogue Business\\u003Cbr>\\nSamsung\\u003Cbr>\\nCadence Design Systems\\u003Cbr>\\nSpace Needle\\u003Cbr>\\nOneLine Health\\u003Cbr>\\nMiddle Finance\\u003Cbr>\\nThe Art of Living\\u003Cbr>\\nLife House\\u003Cbr>\\nBattalion\\u003Cbr>","We work as one team with our clients. Through discovery workshops, we uncover your story and translate it into digital experiences that reflect your vision.\\n\\nOur agency combines storytelling craft with technical expertise to create work that connects emotionally and drives engagement.","Recognition for innovative work that pushes what's possible in digital design.",[53,65,74,83,92],{"news":54},{"id":55,"type":56,"tags":57,"lang":24,"slug":58,"first_publication_date":59,"last_publication_date":60,"uid":61,"link_type":62,"key":63,"isBroken":64},"aV8LtRIAACYAMZIE","news",[],"why-this-report-needed-a-new-universe.","2026-01-09T19:58:45+0000","2026-01-15T01:48:54+0000","vogue-business-gen-z-interactive-editorial-design","Document","30afc5ed-7c22-49ac-9620-c4989c74b7e1",false,{"news":66},{"id":67,"type":56,"tags":68,"lang":24,"slug":69,"first_publication_date":70,"last_publication_date":71,"uid":72,"link_type":62,"key":73,"isBroken":64},"aIQAxRcAACQARLF3",[],"why-storytelling-matters-in-digital-experiences","2025-07-25T23:00:32+0000","2026-02-12T17:20:22+0000","the-power-of-digital-storytelling","3d82a458-7a17-4294-ad09-dd79457057ee",{"news":75},{"id":76,"type":56,"tags":77,"lang":24,"slug":78,"first_publication_date":79,"last_publication_date":80,"uid":81,"link_type":62,"key":82,"isBroken":64},"aBNvrBEAACcAl6Gy",[],"it-all-starts-with-interactive-storytelling","2025-05-01T20:58:46+0000","2026-02-05T22:44:03+0000","noomo-valentime-immersive-storytelling","00c5bf51-d1f6-4ede-b055-f01a188030bb",{"news":84},{"id":85,"type":56,"tags":86,"lang":24,"slug":87,"first_publication_date":88,"last_publication_date":89,"uid":90,"link_type":62,"key":91,"isBroken":64},"Zyu_rxEAACkARJGG",[],"creating-a-personalized-3d-website-experience-for-immersive-brand-activation","2024-11-06T22:13:32+0000","2026-03-31T11:37:49+0000","ai-brand-activation-3d-music-case-study","c091019f-1908-4994-a2c3-362677c1b626",{"news":93},{"id":94,"type":56,"tags":95,"lang":24,"slug":99,"first_publication_date":100,"last_publication_date":101,"uid":102,"link_type":62,"key":103,"isBroken":64},"Zj0BohMAAGnyCCFJ",[96,97,98],"3d websites","immersive marketing","ar websites","brand-storytelling-websites-in-immersive-marketing","2024-05-09T21:58:54+0000","2026-02-17T21:40:14+0000","3d-websites-and-immersive-web-experiences-for-marketing","b947b7df-382a-4ad1-b217-a7f086c6eeca",{"link_type":105},"Media",{"link_type":105,"key":107,"kind":108,"id":109,"url":110,"name":111,"size":112},"f3dcd447-5b69-4951-8fda-8491aca93318","file","aHDVIEMqNJQqHyXy","https://noomo-website.cdn.prismic.io/noomo-website/aHDVIEMqNJQqHyXy_Showreel2025.mp4","Showreel2025.mp4","20927918","BUT WE'RE HERE NOT TO TALK ABOUT OURSELVES - WE'RE HERE TO TALK ABOUT YOU, YOUR COMPANY, YOUR PRODUCT, AND YOUR GOALS.","With us it happens.\\u003Cbr> We would love to hear from you.",[],"We create 3D storytelling websites and immersive digital experiences that make people stop scrolling. Los Angeles creative agency where story dictates the medium—whether that's WebGL, cinematic video, or interactive design.",{"dimensions":118,"alt":121,"copyright":5,"url":122,"id":123,"edit":124},{"width":119,"height":120},2400,1260,"Noomo Agency - Los Angeles 3D storytelling website design and immersive digital experiences","https://images.prismic.io/noomo-website/aXrLewIvOtkhCDc4_1300x630.png?auto=format,compress&rect=0,0,1200,630&w=2400&h=1260","aXrLewIvOtkhCDc4",{"x":125,"y":125,"zoom":126,"background":127},0,1,"transparent","Digital Storytelling & 3D Website Design Agency | Noomo",[130,171,205,221,238,295,318],{"id":131,"uid":132,"url":5,"type":133,"href":134,"tags":135,"first_publication_date":136,"last_publication_date":137,"slugs":138,"linked_documents":139,"lang":24,"alternate_languages":140,"data":141},"ZcuScxEAAFmB_fLB","fwa","award","https://noomo-website.cdn.prismic.io/api/v2/documents/search?ref=aikt9xEAACgAcnUZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZcuScxEAAFmB_fLB%22%29+%5D%5D",[],"2024-02-13T16:02:09+0000","2026-01-29T23:39:44+0000",[132],[],[],{"title":142,"projects":143,"sort_order":5},"FWA",[144,148,151,153,156,157,160,162,164,165,167,170],{"name":145,"nomination":146,"year":147},"Vibrant Wellness","FWA of the day","2026",{"name":149,"nomination":146,"year":150},"Vogue Business | Archrival: Gen Z Broke The Marketing Funnel","2025",{"name":152,"nomination":146,"year":150},"Noomo Valentime",{"name":154,"nomination":155,"year":150},"Noomo Beat","FWA of the day - AI",{"name":154,"nomination":146,"year":150},{"name":158,"nomination":146,"year":159},"Intel | ai.io interactive AI experience for AWS re:Invent","2024",{"name":161,"nomination":146,"year":159},"Noomo Playground",{"name":28,"nomination":163,"year":159},"FWA of the day - Mobile",{"name":28,"nomination":146,"year":159},{"name":166,"nomination":146,"year":159},"The Silly Bunny",{"name":168,"nomination":146,"year":169},"Noomo Agency","2023",{"name":5,"nomination":5,"year":5},{"id":172,"uid":173,"url":5,"type":133,"href":174,"tags":175,"first_publication_date":176,"last_publication_date":177,"slugs":178,"linked_documents":179,"lang":24,"alternate_languages":180,"data":181},"ZLfAgBEAACIAzspq","the-webby-awards","https://noomo-website.cdn.prismic.io/api/v2/documents/search?ref=aikt9xEAACgAcnUZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZLfAgBEAACIAzspq%22%29+%5D%5D",[],"2023-07-19T10:52:51+0000","2025-05-01T00:39:16+0000",[173],[],[],{"title":182,"projects":183,"sort_order":126},"The Webby Awards",[184,186,188,190,193,195,198,201],{"name":28,"nomination":185,"year":150},"Winner, Websites and Mobile Sites - Best Use of Animation or Motion Graphics",{"name":28,"nomination":187,"year":150},"Winner, Websites and Mobile Sites - Technical Achievement",{"name":154,"nomination":189,"year":150},"Winner, Websites and Mobile Sites - Best Use of AI",{"name":191,"nomination":192,"year":150},"Percipio Health","Winner, Websites and Mobile Sites - Web Services & Applications",{"name":154,"nomination":194,"year":150},"Nomination, AI, Immersive & Games - Media & Entertainment",{"name":196,"nomination":197,"year":150},"Jasmina Denner","Honors, Websites and Mobile Sites - Personal Blog/Website",{"name":199,"nomination":200,"year":169},"Middle","Winner, Financial Services/Banking",{"name":202,"nomination":203,"year":204},"ITG Digital","Nomination, Web Services & Applications","2020",{"id":206,"uid":207,"url":5,"type":133,"href":208,"tags":209,"first_publication_date":210,"last_publication_date":211,"slugs":212,"linked_documents":213,"lang":24,"alternate_languages":214,"data":215},"ZLfAWBEAACMAzsmp","red-dot-design-award","https://noomo-website.cdn.prismic.io/api/v2/documents/search?ref=aikt9xEAACgAcnUZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZLfAWBEAACMAzsmp%22%29+%5D%5D",[],"2023-07-19T10:52:11+0000","2023-08-07T13:18:25+0000",[207],[],[],{"title":216,"projects":217,"sort_order":220},"Red Dot Design Award",[218],{"name":202,"nomination":219,"year":204},"Winner, Online platforms",2,{"id":222,"uid":223,"url":5,"type":133,"href":224,"tags":225,"first_publication_date":226,"last_publication_date":227,"slugs":228,"linked_documents":229,"lang":24,"alternate_languages":230,"data":231},"ZLfAnREAACIAzsr9","san-francisco-design-week","https://noomo-website.cdn.prismic.io/api/v2/documents/search?ref=aikt9xEAACgAcnUZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZLfAnREAACIAzsr9%22%29+%5D%5D",[],"2023-07-19T10:53:19+0000","2023-08-07T13:18:43+0000",[223],[],[],{"title":232,"projects":233,"sort_order":237},"San Francisco Design Week",[234],{"name":235,"nomination":236,"year":204},"Crisis Clean Up","Honorable Mentions, Civic and Government",3,{"id":239,"uid":240,"url":5,"type":133,"href":241,"tags":242,"first_publication_date":243,"last_publication_date":244,"slugs":245,"linked_documents":246,"lang":24,"alternate_languages":247,"data":248},"ZLfBNREAACQAzs3r","awwwards","https://noomo-website.cdn.prismic.io/api/v2/documents/search?ref=aikt9xEAACgAcnUZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZLfBNREAACQAzs3r%22%29+%5D%5D",[],"2023-07-19T10:55:52+0000","2024-12-16T23:34:27+0000",[240],[],[],{"title":249,"projects":250,"sort_order":294},"Awwwards",[251,253,255,257,259,261,263,264,265,267,269,270,272,273,275,278,282,283,285,286,288,291,293],{"name":154,"nomination":252,"year":159},"Site of the day",{"name":154,"nomination":254,"year":159},"Developer award",{"name":196,"nomination":256,"year":159},"Honorable mentions",{"name":258,"nomination":256,"year":159},"Noomo XR",{"name":258,"nomination":260,"year":159},"No-code honors",{"name":28,"nomination":262,"year":159},"Portfolio honors",{"name":28,"nomination":254,"year":159},{"name":28,"nomination":252,"year":159},{"name":168,"nomination":266,"year":159},"Website of the year",{"name":268,"nomination":256,"year":159},"Cathey & Miles Attorneys Website",{"name":168,"nomination":254,"year":169},{"name":168,"nomination":271,"year":169},"Website of the day",{"name":166,"nomination":256,"year":169},{"name":274,"nomination":256,"year":169},"Middle Finance",{"name":276,"nomination":252,"year":277},"Olha Uzhykova portfolio","2022",{"name":279,"nomination":280,"year":281},"Netrix","nominated for “Mobile website of the year”","2021",{"name":279,"nomination":252,"year":281},{"name":279,"nomination":284,"year":281},"Mobile website of the week",{"name":279,"nomination":254,"year":281},{"name":287,"nomination":256,"year":204},"MadDad",{"name":287,"nomination":289,"year":290},"Mobile design excellence","2019",{"name":279,"nomination":256,"year":292},"2018",{"name":279,"nomination":289,"year":292},4,{"id":296,"uid":297,"url":5,"type":133,"href":298,"tags":299,"first_publication_date":300,"last_publication_date":301,"slugs":302,"linked_documents":303,"lang":24,"alternate_languages":304,"data":305},"ZLfBaBEAACIAzs7i","css-design-award","https://noomo-website.cdn.prismic.io/api/v2/documents/search?ref=aikt9xEAACgAcnUZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZLfBaBEAACIAzs7i%22%29+%5D%5D",[],"2023-07-19T10:56:42+0000","2024-12-16T23:28:37+0000",[297],[],[],{"title":306,"projects":307,"sort_order":317},"CSS Design Award",[308,309,310,312,313,314,316],{"name":154,"nomination":271,"year":159},{"name":196,"nomination":271,"year":159},{"name":311,"nomination":271,"year":159},"The Future Of XR",{"name":28,"nomination":271,"year":159},{"name":166,"nomination":271,"year":169},{"name":315,"nomination":271,"year":169},"Olha Uzhykova Portfolio",{"name":168,"nomination":271,"year":169},5,{"id":319,"uid":320,"url":5,"type":133,"href":321,"tags":322,"first_publication_date":323,"last_publication_date":324,"slugs":325,"linked_documents":326,"lang":24,"alternate_languages":327,"data":328},"ZLfBhBEAACMAzs9m","adc-europe","https://noomo-website.cdn.prismic.io/api/v2/documents/search?ref=aikt9xEAACgAcnUZ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZLfBhBEAACMAzs9m%22%29+%5D%5D",[],"2023-07-19T10:57:11+0000","2023-08-07T13:19:28+0000",[320],[],[],{"title":329,"projects":330,"sort_order":333},"ADC Europe",[331],{"name":202,"nomination":332,"year":204},"Nomination in category Interactive & Mobile",6,{"$ssite-config":335},{"_context":336,"url":341,"defaultLocale":342,"trailingSlash":64,"titleSeparator":343,"name":344,"indexable":345,"debug":64},{"url":337,"defaultLocale":338,"trailingSlash":338,"titleSeparator":338,"name":339,"indexable":340,"debug":337},"nuxt:config:site","defaults","vendorEnv","system","https://noomoagency.com","en","|","nuxt-blunk",true,{"home_page":5,"award":5},"/",1783340279996,{"sceneId":350},{"mixers":351,"cameraMove":345,"menuOpen":64,"preloaderDone":64,"ourStoryModelLoaded":64,"caseModelLoaded":64,"goToPage":352},[],""]`;
    document.body.appendChild(dataScript);

    // Dynamically inject the Nuxt bundle entry script post-hydration
    const script = document.createElement('script');
    script.src = '/_nuxt/entry.ea3395e2.js';
    script.type = 'module';
    script.crossOrigin = '';
    document.body.appendChild(script);

    setMounted(true);
  }, []);

  useEffect(() => {
    // 1. Header Synchronization
    const customHeader = document.getElementById('custom-header');
    
    const syncHeaderClasses = () => {
      const hiddenHeader = document.querySelector('#__nuxt header');
      if (hiddenHeader && customHeader) {
        customHeader.className = hiddenHeader.className;
      }
    };

    syncHeaderClasses();

    // 2. Hero and Countdown Patching
    const calculateTimeLeft = () => {
      const difference = +new Date(EVENT_START_DATE) - +new Date();
      let days = '00', hours = '00', minutes = '00';
      if (difference > 0) {
        days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
      }
      return { days, hours, minutes };
    };

    let observer;

    const updateTimerAndHero = () => {
      // Disconnect observer to avoid infinite loops when mutating DOM
      if (observer) {
        observer.disconnect();
      }

      syncHeaderClasses();

      // Check if we are on the landing page
      const isLandingPage = window.location.pathname === '/';

      const desktopHeroText = document.querySelector('.hero-text');
      if (desktopHeroText) {
        if (!isLandingPage) {
          desktopHeroText.style.display = 'none';
        } else {
          desktopHeroText.style.display = 'block';
        }
      }

      const mobileHero = document.querySelector('.mobile-hero');
      if (mobileHero) {
        if (!isLandingPage) {
          mobileHero.style.display = 'none';
        } else {
          mobileHero.style.display = 'block';
        }
      }

      if (!isLandingPage) {
        // Reconnect observer and exit
        if (observer) {
          observer.observe(document.body, { childList: true, subtree: true });
          const hiddenHeader = document.querySelector('#__nuxt header');
          if (hiddenHeader) {
            observer.observe(hiddenHeader, { attributes: true, attributeFilter: ['class'] });
          }
        }
        return;
      }

      const time = calculateTimeLeft();

      const countdownHTML = `
        <div class="countdown-title">HACKATHON KICKS OFF IN</div>
        <div class="countdown-cards">
            <div class="countdown-card">
                <span class="card-number">${time.days}</span>
                <span class="card-label">DAYS</span>
            </div>
            <div class="countdown-card">
                <span class="card-number">${time.hours}</span>
                <span class="card-label">HOURS</span>
            </div>
            <div class="countdown-card">
                <span class="card-number">${time.minutes}</span>
                <span class="card-label">MINS</span>
            </div>
        </div>
      `;

      // Hide the 3D SVG text in the Three.js canvas (Z position is 20, X is -3)
      if (window.scene) {
        window.scene.children.forEach(child => {
          if (child.position && child.position.z === 20 && child.position.x === -3) {
            child.visible = false;
          }
        });
      }

      // Patch desktop headline
      const desktopH1 = document.querySelector('.hero-text h1');
      if (desktopH1) {
        const targetHTML = '<span style="white-space: nowrap;">WHERE <span class="headline-gap"></span> IDEAS</span> <br/> FIND THEIR <br/> ORIGIN.';
        if (desktopH1.innerHTML !== targetHTML) {
          desktopH1.innerHTML = targetHTML;
        }
        desktopH1.style.display = 'block';
      }

      // Patch mobile headline
      const mobileH1 = document.querySelector('.mobile-hero h1');
      if (mobileH1) {
        const targetHTML = '<span style="white-space: nowrap;">WHERE <span class="headline-gap"></span> IDEAS</span> <br/> FIND THEIR <br/> ORIGIN.';
        if (mobileH1.innerHTML !== targetHTML) {
          mobileH1.innerHTML = targetHTML;
        }
      }

      // Patch desktop countdown wrapper
      if (desktopHeroText) {
        const originalP = desktopHeroText.querySelector('p');
        if (originalP) {
          originalP.style.display = 'none';
        }

        let desktopGlass = desktopHeroText.querySelector('.glass-countdown-container');
        if (!desktopGlass) {
          desktopGlass = document.createElement('div');
          desktopGlass.className = 'glass-countdown-container';
          desktopHeroText.appendChild(desktopGlass);
        }
        if (desktopGlass.innerHTML !== countdownHTML) {
          desktopGlass.innerHTML = countdownHTML;
        }
      }

      // Patch mobile countdown wrapper
      const mobileHeroWrapper = document.querySelector('.mobile-hero .wrapper');
      if (mobileHeroWrapper) {
        const originalH2 = mobileHeroWrapper.querySelector('h2');
        if (originalH2) {
          originalH2.style.display = 'none';
        }

        let mobileGlass = mobileHeroWrapper.querySelector('.glass-countdown-container');
        if (!mobileGlass) {
          mobileGlass = document.createElement('div');
          mobileGlass.className = 'glass-countdown-container';
          mobileHeroWrapper.appendChild(mobileGlass);
        }
        if (mobileGlass.innerHTML !== countdownHTML) {
          mobileGlass.innerHTML = countdownHTML;
        }
      }

      // Patch desktop cases/tracks text to override Vue hydration
      const desktopCases = document.querySelectorAll('.cases-texts .item');
      if (desktopCases.length >= 4) {
        // Card 1: Fintech
        const c1 = desktopCases[0];
        const tag1 = c1.querySelector('.tags .tag');
        if (tag1 && tag1.innerHTML !== 'Payments / Lending / Access') {
          tag1.innerHTML = 'Payments / Lending / Access';
        }
        const name1 = c1.querySelector('.name strong');
        if (name1 && name1.innerHTML !== 'FINTECH') {
          name1.innerHTML = 'FINTECH';
        }
        const desc1 = c1.querySelector('.desc');
        if (desc1 && desc1.innerHTML !== 'Reimagine payments, lending, and financial access with secure, scalable FinTech.') {
          desc1.innerHTML = 'Reimagine payments, lending, and financial access with secure, scalable FinTech.';
        }
        const btn1Spans = c1.querySelectorAll('.view-project-link span');
        btn1Spans.forEach(span => {
          if (span.innerHTML.trim() !== 'View track') {
            span.innerHTML = 'View track';
          }
        });
        const btn1 = c1.querySelector('.view-project-link');
        if (btn1) {
          btn1.setAttribute('href', '/connect');
          btn1.style.cursor = 'pointer';
          btn1.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '/connect';
          };
        }

        // Card 2: Web3
        const c2 = desktopCases[1];
        const tag2 = c2.querySelector('.tags .tag');
        if (tag2 && tag2.innerHTML !== 'Web3 / DApps / Solidity') {
          tag2.innerHTML = 'Web3 / DApps / Solidity';
        }
        const name2 = c2.querySelector('.name strong');
        if (name2 && name2.innerHTML !== 'WEB3 &amp; BLOCKCHAIN' && name2.innerHTML !== 'WEB3 & BLOCKCHAIN') {
          name2.innerHTML = 'WEB3 &amp; BLOCKCHAIN';
        }
        const desc2 = c2.querySelector('.desc');
        if (desc2 && desc2.innerHTML !== 'Build trustless apps with smart contracts, tokens, and decentralized rails.') {
          desc2.innerHTML = 'Build trustless apps with smart contracts, tokens, and decentralized rails.';
        }
        const btn2Spans = c2.querySelectorAll('.view-project-link span');
        btn2Spans.forEach(span => {
          if (span.innerHTML.trim() !== 'View track') {
            span.innerHTML = 'View track';
          }
        });
        const btn2 = c2.querySelector('.view-project-link');
        if (btn2) {
          btn2.setAttribute('href', '/connect');
          btn2.style.cursor = 'pointer';
          btn2.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '/connect';
          };
        }

        // Card 3: Sustainability
        const c3 = desktopCases[2];
        const tag3 = c3.querySelector('.tags .tag');
        if (tag3 && tag3.innerHTML !== 'Climate / IoT / Smart Tech') {
          tag3.innerHTML = 'Climate / IoT / Smart Tech';
        }
        const name3 = c3.querySelector('.name strong');
        if (name3 && name3.innerHTML !== 'SUSTAINABILITY &amp; EM-TECH' && name3.innerHTML !== 'SUSTAINABILITY & EM-TECH') {
          name3.innerHTML = 'SUSTAINABILITY &amp; EM-TECH';
        }
        const desc3 = c3.querySelector('.desc');
        if (desc3 && desc3.innerHTML !== 'Use tech to tackle climate challenges, design immersive AR/VR experiences, and prototype smart devices.') {
          desc3.innerHTML = 'Use tech to tackle climate challenges, design immersive AR/VR experiences, and prototype smart devices.';
        }
        const btn3Spans = c3.querySelectorAll('.view-project-link span');
        btn3Spans.forEach(span => {
          if (span.innerHTML.trim() !== 'View track') {
            span.innerHTML = 'View track';
          }
        });
        const btn3 = c3.querySelector('.view-project-link');
        if (btn3) {
          btn3.setAttribute('href', '/connect');
          btn3.style.cursor = 'pointer';
          btn3.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '/connect';
          };
        }

        // Card 4: Open Innovation
        const c4 = desktopCases[3];
        const tag4 = c4.querySelector('.tags .tag');
        if (tag4 && tag4.innerHTML !== 'Cross-Domain / Open-Ended') {
          tag4.innerHTML = 'Cross-Domain / Open-Ended';
        }
        const name4 = c4.querySelector('.name strong');
        if (name4 && name4.innerHTML !== 'OPEN INNOVATION') {
          name4.innerHTML = 'OPEN INNOVATION';
        }
        const desc4 = c4.querySelector('.desc');
        if (desc4 && desc4.innerHTML !== 'Solve any real-world problem with bold, cross-domain, open-ended ideas.') {
          desc4.innerHTML = 'Solve any real-world problem with bold, cross-domain, open-ended ideas.';
        }
        const btn4Spans = c4.querySelectorAll('.view-project-link span');
        btn4Spans.forEach(span => {
          if (span.innerHTML.trim() !== 'View track') {
            span.innerHTML = 'View track';
          }
        });
        const btn4 = c4.querySelector('.view-project-link');
        if (btn4) {
          btn4.setAttribute('href', '/connect');
          btn4.style.cursor = 'pointer';
          btn4.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '/connect';
          };
        }
      }

      // Patch mobile cases/tracks text to override Vue hydration
      const mobileCases = document.querySelectorAll('.home-mobile-cases .case');
      if (mobileCases.length >= 4) {
        // Card 1
        const mc1 = mobileCases[0];
        const title1 = mc1.querySelector('.title');
        if (title1 && title1.innerHTML !== 'FINTECH') {
          title1.innerHTML = 'FINTECH';
        }
        const name1 = mc1.querySelector('.name');
        if (name1 && name1.innerHTML !== 'FINTECH') {
          name1.innerHTML = 'FINTECH';
        }
        const desc1 = mc1.querySelector('.desc');
        if (desc1 && desc1.innerHTML !== 'Reimagine payments, lending, and financial access with secure, scalable FinTech.') {
          desc1.innerHTML = 'Reimagine payments, lending, and financial access with secure, scalable FinTech.';
        }
        const btn1Spans = mc1.querySelectorAll('.view-project-link span');
        btn1Spans.forEach(span => {
          if (span.innerHTML.trim() !== 'View track') {
            span.innerHTML = 'View track';
          }
        });
        const mbtn1 = mc1.querySelector('.view-project-link');
        if (mbtn1) {
          mbtn1.setAttribute('href', '/connect');
          mbtn1.style.cursor = 'pointer';
          mbtn1.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '/connect';
          };
        }

        // Card 2
        const mc2 = mobileCases[1];
        const title2 = mc2.querySelector('.title');
        if (title2 && title2.innerHTML !== 'WEB3') {
          title2.innerHTML = 'WEB3';
        }
        const name2 = mc2.querySelector('.name');
        if (name2 && name2.innerHTML !== 'WEB3 &amp; BLOCKCHAIN' && name2.innerHTML !== 'WEB3 & BLOCKCHAIN') {
          name2.innerHTML = 'WEB3 &amp; BLOCKCHAIN';
        }
        const desc2 = mc2.querySelector('.desc');
        if (desc2 && desc2.innerHTML !== 'Build trustless apps with smart contracts, tokens, and decentralized rails.') {
          desc2.innerHTML = 'Build trustless apps with smart contracts, tokens, and decentralized rails.';
        }
        const btn2Spans = mc2.querySelectorAll('.view-project-link span');
        btn2Spans.forEach(span => {
          if (span.innerHTML.trim() !== 'View track') {
            span.innerHTML = 'View track';
          }
        });
        const mbtn2 = mc2.querySelector('.view-project-link');
        if (mbtn2) {
          mbtn2.setAttribute('href', '/connect');
          mbtn2.style.cursor = 'pointer';
          mbtn2.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '/connect';
          };
        }

        // Card 3
        const mc3 = mobileCases[2];
        const title3 = mc3.querySelector('.title');
        if (title3 && title3.innerHTML !== 'EM-TECH') {
          title3.innerHTML = 'EM-TECH';
        }
        const name3 = mc3.querySelector('.name');
        if (name3 && name3.innerHTML !== 'SUSTAINABILITY &amp; EM-TECH' && name3.innerHTML !== 'SUSTAINABILITY & EM-TECH') {
          name3.innerHTML = 'SUSTAINABILITY &amp; EM-TECH';
        }
        const desc3 = mc3.querySelector('.desc');
        if (desc3 && desc3.innerHTML !== 'Use tech to tackle climate challenges, design immersive AR/VR experiences, and prototype smart devices.') {
          desc3.innerHTML = 'Use tech to tackle climate challenges, design immersive AR/VR experiences, and prototype smart devices.';
        }
        const btn3Spans = mc3.querySelectorAll('.view-project-link span');
        btn3Spans.forEach(span => {
          if (span.innerHTML.trim() !== 'View track') {
            span.innerHTML = 'View track';
          }
        });
        const mbtn3 = mc3.querySelector('.view-project-link');
        if (mbtn3) {
          mbtn3.setAttribute('href', '/connect');
          mbtn3.style.cursor = 'pointer';
          mbtn3.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '/connect';
          };
        }

        // Card 4
        const mc4 = mobileCases[3];
        const title4 = mc4.querySelector('.title');
        if (title4 && title4.innerHTML !== 'OPEN') {
          title4.innerHTML = 'OPEN';
        }
        const name4 = mc4.querySelector('.name');
        if (name4 && name4.innerHTML !== 'OPEN INNOVATION') {
          name4.innerHTML = 'OPEN INNOVATION';
        }
        const desc4 = mc4.querySelector('.desc');
        if (desc4 && desc4.innerHTML !== 'Solve any real-world problem with bold, cross-domain, open-ended ideas.') {
          desc4.innerHTML = 'Solve any real-world problem with bold, cross-domain, open-ended ideas.';
        }
        const btn4Spans = mc4.querySelectorAll('.view-project-link span');
        btn4Spans.forEach(span => {
          if (span.innerHTML.trim() !== 'View track') {
            span.innerHTML = 'View track';
          }
        });
        const mbtn4 = mc4.querySelector('.view-project-link');
        if (mbtn4) {
          mbtn4.setAttribute('href', '/connect');
          mbtn4.style.cursor = 'pointer';
          mbtn4.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = '/connect';
          };
        }
      }

      // Reconnect observer
      if (observer) {
        observer.observe(document.body, { childList: true, subtree: true });
        const hiddenHeader = document.querySelector('#__nuxt header');
        if (hiddenHeader) {
          observer.observe(hiddenHeader, { attributes: true, attributeFilter: ['class'] });
        }
      }
    };

    updateTimerAndHero();

    observer = new MutationObserver(() => {
      updateTimerAndHero();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Header class list observer
    const hiddenHeader = document.querySelector('#__nuxt header');
    if (hiddenHeader) {
      observer.observe(hiddenHeader, { attributes: true, attributeFilter: ['class'] });
    }

    const interval = setInterval(updateTimerAndHero, 200);

    // Scroll synchronizer to translate fixed desktop hero-text upwards as we scroll down
    const handleScroll = () => {
      const desktopHeroText = document.querySelector('.hero-text');
      if (desktopHeroText) {
        desktopHeroText.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Forward click from custom burger to hidden Nuxt burger
    const customBurger = document.querySelector('#custom-header .burger');
    const onBurgerClick = () => {
      const hiddenBurger = document.querySelector('#__nuxt header .burger');
      if (hiddenBurger) {
        hiddenBurger.click();
      }
    };

    if (customBurger) {
      customBurger.addEventListener('click', onBurgerClick);
    }

    return () => {
      observer.disconnect();
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      if (customBurger) {
        customBurger.removeEventListener('click', onBurgerClick);
      }
    };
  }, []);

  if (!mounted) {
    return <div style={{ backgroundColor: '#c9d2e7', minHeight: '100vh' }} />;
  }

  return (
    <>
      <header id="custom-header">
          <div className="back"></div>
          <div className="wrapper">
              <div className="header-logos-center">
                  <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                      <img alt="vit chennai logo" className="partner-logo" src="/logos/vit_logo.webp" />
                      <img alt="csi logo" className="partner-logo" src="/logos/csi_logo.png" />
                  </a>
              </div>
              <div className="right">
                  <a href="/work" className="font-12-dark"> Work </a>
                  <a href="/our-story" className="font-12-dark"> Our Story </a>
                  <a target="_blank" className="font-12-dark" href="https://labs.noomoagency.com/"> Labs </a>
                  <a href="/insights" className="font-12-dark"> Insights </a>
                  <a href="/connect" className="font-12-dark"> Connect </a>
              </div>
              <div className="burger">
                  <div className="font-14-dark">Menu</div>
              </div>
          </div>
      </header>

      <div id="__nuxt">
          <div className="index">
              {/* Original header is kept here for Nuxt hydration, but is hidden by CSS */}
              <header>
                  <div className="back"></div>
                  <div className="wrapper">
                      <div className="left"><span><a aria-current="page" href="/"
                                  className="router-link-active router-link-exact-active for-logo"><img alt="netrix logo"
                                      className="logo" src="/logos/noomoLogo1.png" /><img alt="netrix logo" className="logo"
                                      src="/logos/noomoLogo2.png" /></a></span></div>
                      <div className="right"><a href="/work" className="font-12-dark"> Work </a><a href="/our-story"
                              className="font-12-dark"> Our Story </a><a target="_blank" className="font-12-dark"
                              href="https://labs.noomoagency.com/"> Labs </a><a href="/insights" className="font-12-dark">
                              Insights </a><a href="/connect" className="font-12-dark"> Connect </a></div>
                      <div className="burger">
                          <div className="font-14-dark">Menu</div>
                      </div>
                  </div>
              </header>
              <div className="mobile-menu">
                  <div className="mobile-links"><a href="/work" className="font-12-dark"><span>Work</span></a><a
                          href="/our-story" className="font-12-dark"><span>Our Story</span></a><a target="_blank"
                          className="font-12-dark" href="https://labs.noomoagency.com/"><span>LABS</span></a><a
                          href="/insights" className="font-12-dark"><span>Insights</span></a><a href="/connect"
                          className="font-12-dark"><span>Connect</span></a></div>
                  <div className="lets"><a href="/connect" className=""><span>Let's work together</span></a></div>
              </div>
            <div className="index-page">
                <div className="on-touch home-page-wrapper" id="smooth-wrapper"
                    style={{"inset":"0px","width":"100%","height":"100%","position":"fixed","overflow":"hidden"}}>
                    <div id="main-scene" style={{"opacity":"1"}}></div><img
                        alt="background" src="/backgrounds/background_min.png" loading="lazy"
                        className="custom-l-back-image" />
                    <div id="smooth-content"
                        style={{"translate":"none","rotate":"none","scale":"none","transform":"matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)","boxSizing":"border-box","width":"100%","overflow":"visible"}}>
                        <div className="home-page">
                            <div data-v-1d267d81="" className="mobile-hero">
                                <div data-v-1d267d81="" className="wrapper">
                                    <h1 data-v-1d267d81=""> Design that elevates your digital presence </h1>
                                    <h2 data-v-1d267d81="">Award-winning design agency building websites, activations, and experiences that make people stop scrolling.</h2>
                                </div>
                            </div>
                            <div data-v-7abacc29="" className="home-mobile-cases">
                                <div data-v-7abacc29="" className="wrapper">
                                    <div data-v-7abacc29="" className="case">
                                        <div data-v-7abacc29="" className="image-block">
                                            <p data-v-7abacc29="" className="title-0 title">FINTECH</p><img
                                                data-v-7abacc29="" className="glass-t glass-t-0" src="/cases/glassT.png"
                                                alt="image" />
                                        </div>
                                        <p data-v-7abacc29="" className="name">FINTECH</p>
                                        <p data-v-7abacc29="" className="desc">Reimagine payments, lending, and financial access with secure, scalable FinTech.</p><a data-v-7abacc29="" href="#"
                                            className="view-project-link"><span className="">View track</span><img alt="arrow"
                                                className="arrow" src="/icons/smallArrow.svg" />
                                            <div className="hover-mask"><span className=""> View track </span><img alt="arrow"
                                                    className="arrow" src="/icons/smallArrowBlack.svg" /></div>
                                        </a>
                                    </div>
                                    <div data-v-7abacc29="" className="case">
                                        <div data-v-7abacc29="" className="image-block">
                                            <p data-v-7abacc29="" className="title-1 title">WEB3</p><img
                                                data-v-7abacc29="" className="glass-t glass-t-1" src="/cases/glassT.png"
                                                alt="image" />
                                        </div>
                                        <p data-v-7abacc29="" className="name">WEB3 & BLOCKCHAIN</p>
                                        <p data-v-7abacc29="" className="desc">Build trustless apps with smart contracts, tokens, and decentralized rails.</p><a data-v-7abacc29=""
                                            href="#"
                                            className="view-project-link"><span className="">View track</span><img alt="arrow"
                                                className="arrow" src="/icons/smallArrow.svg" />
                                            <div className="hover-mask"><span className=""> View track </span><img alt="arrow"
                                                    className="arrow" src="/icons/smallArrowBlack.svg" /></div>
                                        </a>
                                    </div>
                                    <div data-v-7abacc29="" className="case">
                                        <div data-v-7abacc29="" className="image-block">
                                            <p data-v-7abacc29="" className="title-2 title">EM-TECH</p><img
                                                data-v-7abacc29="" className="glass-t glass-t-2" src="/cases/glassT.png"
                                                alt="image" />
                                        </div>
                                        <p data-v-7abacc29="" className="name">SUSTAINABILITY & EM-TECH</p>
                                        <p data-v-7abacc29="" className="desc">Use tech to tackle climate challenges, design immersive AR/VR experiences, and prototype smart devices.</p><a data-v-7abacc29=""
                                            href="#"
                                            className="view-project-link"><span className="">View track</span><img alt="arrow"
                                                className="arrow" src="/icons/smallArrow.svg" />
                                            <div className="hover-mask"><span className=""> View track </span><img alt="arrow"
                                                    className="arrow" src="/icons/smallArrowBlack.svg" /></div>
                                        </a>
                                    </div>
                                    <div data-v-7abacc29="" className="case">
                                        <div data-v-7abacc29="" className="image-block">
                                            <p data-v-7abacc29="" className="title-3 title">OPEN</p><img
                                                data-v-7abacc29="" className="glass-t glass-t-3" src="/cases/glassT.png"
                                                alt="image" />
                                        </div>
                                        <p data-v-7abacc29="" className="name">OPEN INNOVATION</p>
                                        <p data-v-7abacc29="" className="desc">Solve any real-world problem with bold, cross-domain, open-ended ideas.</p><a
                                            data-v-7abacc29="" href="#"
                                            className="view-project-link"><span className="">View track</span><img alt="arrow"
                                                className="arrow" src="/icons/smallArrow.svg" />
                                            <div className="hover-mask"><span className=""> View track </span><img alt="arrow"
                                                    className="arrow" src="/icons/smallArrowBlack.svg" /></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="home-info-block">
                                <div className="wrapper">
                                    <div className="top">
                                        <div className="left">
                                            <h1 className="font-machina-60 title-1">At Noomo, we create 3D storytelling
                                                websites and immersive digital experiences where craft and narrative
                                                become one.</h1>
                                            <h2 className="font-machina-60">From immersive 3D websites to cinematic brand
                                                videos, we let the story dictate the medium—whether that's real-time
                                                rendering, editorial design, or interactive experiences.</h2>
                                        </div>
                                        <div className="right">
                                            <p className="font-neue-roman-16">We partner with brands like Salesforce, AMD,
                                                Red Bull and Vogue Business who believe craft makes the difference.

                                                Companies that value innovation, obsess over details, and understand
                                                great digital work requires time, trust, and true collaboration.</p>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="left">
                                            <div className="bottom-item">
                                                <p className="tag">Services</p>
                                                <p className="font-neue-roman-16 line">3D websites<br />
                                                    Storytelling websites<br />
                                                    3D storytelling videos<br />
                                                    Immersive web experiences <br />
                                                    WebGL development<br />
                                                    Brand activation microsites<br />
                                                    Digital event experiences<br />
                                                    Interactive website design<br />
                                                    AI-driven experiences<br />
                                                    Digital branding<br /></p>
                                            </div>
                                            <div className="bottom-item show-m">
                                                <p className="tag">♥‿♥</p>
                                                <p className="font-neue-roman-16 line">Vogue Business<br />
                                                    Samsung<br />
                                                    Cadence Design Systems<br />
                                                    Space Needle<br />
                                                    OneLine Health<br />
                                                    Middle Finance<br />
                                                    The Art of Living<br />
                                                    Life House<br />
                                                    Battalion<br /></p>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="bottom-item">
                                                <p className="tag">Clients</p>
                                                <p className="font-neue-roman-16 line">Salesforce<br />
                                                    AMD<br />
                                                    Coinbase<br />
                                                    Red Bull<br />
                                                    Intel | ai.io<br />
                                                    Yolo Federal Credit Union<br />
                                                    Percipio Health<br />
                                                    Dandy Vision<br />
                                                    Vibrant Wellness<br /></p>
                                            </div>
                                            <div className="bottom-item item-margin hide-m">
                                                <p className="tag">♥‿♥</p>
                                                <p className="font-neue-roman-16 line">Vogue Business<br />
                                                    Samsung<br />
                                                    Cadence Design Systems<br />
                                                    Space Needle<br />
                                                    OneLine Health<br />
                                                    Middle Finance<br />
                                                    The Art of Living<br />
                                                    Life House<br />
                                                    Battalion<br /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-real"><video autoPlay="" loop="" playsInline="" id="video"
                                    crossOrigin="anonymous">
                                    <source src="/api/showreel-video" type="video/mp4" />
                                </video></div>
                            <div className="scene-awards">
                                <div className="wrapper">
                                    <div className="left">
                                        <p className="font-machina-120 title"><span>Innovate –</span> with a human touch.
                                        </p>
                                    </div>
                                    <div className="right">
                                        <p className="font-neue-roman-18 desc"> Our design expertise and craftsmanship means
                                            we convert big, innovative ideas into powerful, accessible human
                                            experiences, which ignite emotions and provoke action. </p>
                                    </div>
                                    <div className="mobile-awards-list">
                                        <div className="item">
                                            <p className="font-machina-54">Webby</p>
                                        </div>
                                        <div className="item">
                                            <p className="font-machina-54">reddot</p>
                                        </div>
                                        <div className="item">
                                            <p className="font-machina-54">SF Design WEEk</p>
                                        </div>
                                        <div className="item">
                                            <p className="font-machina-54">awwwards</p>
                                        </div>
                                        <div className="item">
                                            <p className="font-machina-54">+50 awards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-rev">
                                <div className="wrapper">
                                    <h2 className="font-machina-60"> Great work can’t happen without team a. </h2>
                                    <p className="desc font-neue-roman-16"> When working with us, you get the value of
                                        working with founders. Building strong relationships with our clients is at the
                                        heart of our approach. </p>
                                    <p className="font-neue-roman-16"> We take the time to understand your unique needs and
                                        create tailored design solutions to help you make an impact. </p>
                                </div>
                                <div
                                    className="swiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
                                    
                                    <div className="swiper-wrapper"
                                        style={{"transitionDuration":"0ms","transitionDelay":"0ms","transform":"translate3d(0px, 0px, 0px)"}}>
                                        
                                        <div className="swiper-slide swiper-slide-active slide" style={{"marginRight":"15px"}}>
                                            
                                            <div>
                                                <div className="company"><img alt="logo" src="/mobileRev/mrev1.png" /></div>
                                                <p className="desc font-neue-roman-16"> “Noomo does such incredible and
                                                    thoughtful work. I have been at this almost 25 years and have never
                                                    been more impressed with an agency.” </p>
                                            </div>
                                            <div>
                                                <p className="name font-12-dark">Wallis Mills</p>
                                                <p className="position font-14-dark">Director of Marketing,<br />Network
                                                    Technology Solutions Group</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next slide" style={{"marginRight":"15px"}}>
                                            
                                            <div>
                                                <div className="company"><img alt="logo" className="webf"
                                                        src="/mobileRev/mrev2.png" /></div>
                                                <p className="desc font-neue-roman-16"> "I've been very impressed with how
                                                    the Noomo team has worked quickly to immerse themselves in the
                                                    narrative of our often complicated suite of products and solutions.
                                                    Their willingness to collaborate in partnership with our Salesforce
                                                    creative team has allowed us to explore innovative web experiences
                                                    while remaining true to the Salesforce brand." </p>
                                            </div>
                                            <div>
                                                <p className="name font-12-dark">JONNY FRUITS</p>
                                                <p className="position font-14-dark">Sr. Creative Director</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide slide" style={{"marginRight":"15px"}}>
                                            <div>
                                                <div className="company"><img alt="logo" className="cadence"
                                                        src="/mobileRev/mrev3.png" /></div>
                                                <p className="desc font-neue-roman-16"> “The entire Noomo team have been an
                                                    exceptional and trusted creative partner in shaping our global
                                                    digital products. Their dedication to listening, iterating, and
                                                    pushing for the best possible experience makes them invaluable
                                                    collaborators. I have full confidence in their technical and
                                                    creative expertise to deliver time and time again.” </p>
                                            </div>
                                            <div>
                                                <p className="name font-12-dark">David Grau</p>
                                                <p className="position font-14-dark">Director Global Product Design &amp;
                                                    Research</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide slide" style={{"marginRight":"15px"}}>
                                            <div>
                                                <div className="company"><img alt="logo" className="life"
                                                        src="/mobileRev/mrev4.png" /></div>
                                                <p className="desc font-neue-roman-16"> “Noomo demonstrates an abundance of
                                                    creativity and ambition when it comes to complex Web3 projects. I’m
                                                    grateful for their willingness to adapt to any challenge and remain
                                                    committed partners through the entire development process.” </p>
                                            </div>
                                            <div>
                                                <p className="name font-12-dark">Eric Davies</p>
                                                <p className="position font-14-dark">Senior Producer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-awards-list">
                                <div className="wrapper">
                                    <h3 className="font-machina-60">Recognition for innovative work that pushes what's
                                        possible in digital design.</h3>
                                    <div className="items-list">
                                        <div className="item-id-fwa item home-a-item">
                                            <div className="top-line"></div>
                                            <div className="bottom-line"></div>
                                            <p className="font-neue-roman-24 name">FWA</p>
                                            <p className="count font-neue-roman-14-500">/ 12</p><img className="arrow"
                                                alt="arrow" src="/icons/linkArrow.svg" />
                                            <div className="aw-list-fwa aw-list">
                                                <div className="list-item top-titles">
                                                    <p className="s-name">Project</p>
                                                    <p className="s-nomination">Nomination</p>
                                                    <p className="s-year">Year</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Vibrant Wellness<span
                                                            className="only-mobile"> - FWA of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2026</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Vogue Business | Archrival: Gen
                                                        Z Broke The Marketing Funnel<span className="only-mobile"> - FWA of
                                                            the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Valentime<span
                                                            className="only-mobile"> - FWA of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Beat<span
                                                            className="only-mobile"> - FWA of the day - AI</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day - AI</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Beat<span
                                                            className="only-mobile"> - FWA of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Intel | ai.io interactive AI
                                                        experience for AWS re:Invent<span className="only-mobile"> - FWA of
                                                            the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Playground<span
                                                            className="only-mobile"> - FWA of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Labs<span
                                                            className="only-mobile"> - FWA of the day - Mobile</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day - Mobile
                                                    </p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Labs<span
                                                            className="only-mobile"> - FWA of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">The Silly Bunny<span
                                                            className="only-mobile"> - FWA of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Agency<span
                                                            className="only-mobile"> - FWA of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">FWA of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name"><span className="only-mobile"> -
                                                        </span></p>
                                                    <p className="font-neue-roman-24 s-nomination"></p>
                                                    <p className="font-neue-roman-24 s-year"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-id-the-webby-awards item home-a-item">
                                            <div className="top-line"></div>
                                            <div className="bottom-line"></div>
                                            <p className="font-neue-roman-24 name">The Webby Awards</p>
                                            <p className="count font-neue-roman-14-500">/ 08</p><img className="arrow"
                                                alt="arrow" src="/icons/linkArrow.svg" />
                                            <div className="aw-list-the-webby-awards aw-list">
                                                <div className="list-item top-titles">
                                                    <p className="s-name">Project</p>
                                                    <p className="s-nomination">Nomination</p>
                                                    <p className="s-year">Year</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Labs<span
                                                            className="only-mobile"> - Winner, Websites and Mobile Sites -
                                                            Best Use of Animation or Motion Graphics</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Winner, Websites and
                                                        Mobile Sites - Best Use of Animation or Motion Graphics</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Labs<span
                                                            className="only-mobile"> - Winner, Websites and Mobile Sites -
                                                            Technical Achievement</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Winner, Websites and
                                                        Mobile Sites - Technical Achievement</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Beat<span
                                                            className="only-mobile"> - Winner, Websites and Mobile Sites -
                                                            Best Use of AI</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Winner, Websites and
                                                        Mobile Sites - Best Use of AI</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Percipio Health<span
                                                            className="only-mobile"> - Winner, Websites and Mobile Sites -
                                                            Web Services &amp; Applications</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Winner, Websites and
                                                        Mobile Sites - Web Services &amp; Applications</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Beat<span
                                                            className="only-mobile"> - Nomination, AI, Immersive &amp; Games
                                                            - Media &amp; Entertainment</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Nomination, AI, Immersive
                                                        &amp; Games - Media &amp; Entertainment</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Jasmina Denner<span
                                                            className="only-mobile"> - Honors, Websites and Mobile Sites -
                                                            Personal Blog/Website</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Honors, Websites and
                                                        Mobile Sites - Personal Blog/Website</p>
                                                    <p className="font-neue-roman-24 s-year">2025</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Middle<span
                                                            className="only-mobile"> - Winner, Financial
                                                            Services/Banking</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Winner, Financial
                                                        Services/Banking</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">ITG Digital<span
                                                            className="only-mobile"> - Nomination, Web Services &amp;
                                                            Applications</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Nomination, Web Services
                                                        &amp; Applications</p>
                                                    <p className="font-neue-roman-24 s-year">2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-id-red-dot-design-award item home-a-item">
                                            <div className="top-line"></div>
                                            <div className="bottom-line"></div>
                                            <p className="font-neue-roman-24 name">Red Dot Design Award</p>
                                            <p className="count font-neue-roman-14-500">/ 01</p><img className="arrow"
                                                alt="arrow" src="/icons/linkArrow.svg" />
                                            <div className="aw-list-red-dot-design-award aw-list">
                                                <div className="list-item top-titles">
                                                    <p className="s-name">Project</p>
                                                    <p className="s-nomination">Nomination</p>
                                                    <p className="s-year">Year</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">ITG Digital<span
                                                            className="only-mobile"> - Winner, Online platforms</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Winner, Online platforms
                                                    </p>
                                                    <p className="font-neue-roman-24 s-year">2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-id-san-francisco-design-week item home-a-item">
                                            <div className="top-line"></div>
                                            <div className="bottom-line"></div>
                                            <p className="font-neue-roman-24 name">San Francisco Design Week</p>
                                            <p className="count font-neue-roman-14-500">/ 01</p><img className="arrow"
                                                alt="arrow" src="/icons/linkArrow.svg" />
                                            <div className="aw-list-san-francisco-design-week aw-list">
                                                <div className="list-item top-titles">
                                                    <p className="s-name">Project</p>
                                                    <p className="s-nomination">Nomination</p>
                                                    <p className="s-year">Year</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Crisis Clean Up<span
                                                            className="only-mobile"> - Honorable Mentions, Civic and
                                                            Government</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Honorable Mentions, Civic
                                                        and Government</p>
                                                    <p className="font-neue-roman-24 s-year">2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-id-awwwards item home-a-item">
                                            <div className="top-line"></div>
                                            <div className="bottom-line"></div>
                                            <p className="font-neue-roman-24 name">Awwwards</p>
                                            <p className="count font-neue-roman-14-500">/ 23</p><img className="arrow"
                                                alt="arrow" src="/icons/linkArrow.svg" />
                                            <div className="aw-list-awwwards aw-list">
                                                <div className="list-item top-titles">
                                                    <p className="s-name">Project</p>
                                                    <p className="s-nomination">Nomination</p>
                                                    <p className="s-year">Year</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Beat<span
                                                            className="only-mobile"> - Site of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Site of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Beat<span
                                                            className="only-mobile"> - Developer award</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Developer award</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Jasmina Denner<span
                                                            className="only-mobile"> - Honorable mentions</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Honorable mentions</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo XR<span
                                                            className="only-mobile"> - Honorable mentions</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Honorable mentions</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo XR<span
                                                            className="only-mobile"> - No-code honors</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">No-code honors</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Labs<span
                                                            className="only-mobile"> - Portfolio honors</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Portfolio honors</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Labs<span
                                                            className="only-mobile"> - Developer award</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Developer award</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Labs<span
                                                            className="only-mobile"> - Site of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Site of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Agency<span
                                                            className="only-mobile"> - Website of the year</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the year</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Cathey &amp; Miles Attorneys
                                                        Website<span className="only-mobile"> - Honorable mentions</span>
                                                    </p>
                                                    <p className="font-neue-roman-24 s-nomination">Honorable mentions</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Agency<span
                                                            className="only-mobile"> - Developer award</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Developer award</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Agency<span
                                                            className="only-mobile"> - Website of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">The Silly Bunny<span
                                                            className="only-mobile"> - Honorable mentions</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Honorable mentions</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Middle Finance<span
                                                            className="only-mobile"> - Honorable mentions</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Honorable mentions</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Olha Uzhykova portfolio<span
                                                            className="only-mobile"> - Site of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Site of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2022</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Netrix<span
                                                            className="only-mobile"> - nominated for “Mobile website of the
                                                            year”</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">nominated for “Mobile
                                                        website of the year”</p>
                                                    <p className="font-neue-roman-24 s-year">2021</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Netrix<span
                                                            className="only-mobile"> - Site of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Site of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2021</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Netrix<span
                                                            className="only-mobile"> - Mobile website of the week</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Mobile website of the
                                                        week</p>
                                                    <p className="font-neue-roman-24 s-year">2021</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Netrix<span
                                                            className="only-mobile"> - Developer award</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Developer award</p>
                                                    <p className="font-neue-roman-24 s-year">2021</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">MadDad<span
                                                            className="only-mobile"> - Honorable mentions</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Honorable mentions</p>
                                                    <p className="font-neue-roman-24 s-year">2020</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">MadDad<span
                                                            className="only-mobile"> - Mobile design excellence</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Mobile design excellence
                                                    </p>
                                                    <p className="font-neue-roman-24 s-year">2019</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Netrix<span
                                                            className="only-mobile"> - Honorable mentions</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Honorable mentions</p>
                                                    <p className="font-neue-roman-24 s-year">2018</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Netrix<span
                                                            className="only-mobile"> - Mobile design excellence</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Mobile design excellence
                                                    </p>
                                                    <p className="font-neue-roman-24 s-year">2018</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-id-css-design-award item home-a-item">
                                            <div className="top-line"></div>
                                            <div className="bottom-line"></div>
                                            <p className="font-neue-roman-24 name">CSS Design Award</p>
                                            <p className="count font-neue-roman-14-500">/ 07</p><img className="arrow"
                                                alt="arrow" src="/icons/linkArrow.svg" />
                                            <div className="aw-list-css-design-award aw-list">
                                                <div className="list-item top-titles">
                                                    <p className="s-name">Project</p>
                                                    <p className="s-nomination">Nomination</p>
                                                    <p className="s-year">Year</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Beat<span
                                                            className="only-mobile"> - Website of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Jasmina Denner<span
                                                            className="only-mobile"> - Website of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">The Future Of XR<span
                                                            className="only-mobile"> - Website of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Labs<span
                                                            className="only-mobile"> - Website of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2024</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">The Silly Bunny<span
                                                            className="only-mobile"> - Website of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Olha Uzhykova Portfolio<span
                                                            className="only-mobile"> - Website of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">Noomo Agency<span
                                                            className="only-mobile"> - Website of the day</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Website of the day</p>
                                                    <p className="font-neue-roman-24 s-year">2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-id-adc-europe item home-a-item">
                                            <div className="top-line"></div>
                                            <div className="bottom-line"></div>
                                            <p className="font-neue-roman-24 name">ADC Europe</p>
                                            <p className="count font-neue-roman-14-500">/ 01</p><img className="arrow"
                                                alt="arrow" src="/icons/linkArrow.svg" />
                                            <div className="aw-list-adc-europe aw-list">
                                                <div className="list-item top-titles">
                                                    <p className="s-name">Project</p>
                                                    <p className="s-nomination">Nomination</p>
                                                    <p className="s-year">Year</p>
                                                </div>
                                                <div className="list-item">
                                                    <p className="font-neue-roman-24 s-name">ITG Digital<span
                                                            className="only-mobile"> - Nomination in category Interactive
                                                            &amp; Mobile</span></p>
                                                    <p className="font-neue-roman-24 s-nomination">Nomination in category
                                                        Interactive &amp; Mobile</p>
                                                    <p className="font-neue-roman-24 s-year">2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide-wrapper"><img alt="image" loading="lazy"
                                                src="/awardsslides/1s.png" style={{"opacity":"0"}} /><img alt="image"
                                                loading="lazy" src="/awardsslides/2s.png" style={{"opacity":"0"}} /><img
                                                alt="image" loading="lazy" src="/awardsslides/3s.png"
                                                style={{"opacity":"0"}} /><img alt="image" loading="lazy"
                                                src="/awardsslides/4s.png" style={{"opacity":"0"}} /><img alt="image"
                                                loading="lazy" src="/awardsslides/5s.png" style={{"opacity":"0"}} /><img
                                                alt="image" loading="lazy" src="/awardsslides/6s.png"
                                                style={{"opacity":"0"}} /><img alt="image" loading="lazy"
                                                src="/awardsslides/7s.png" style={{"opacity":"0"}} /><img alt="image"
                                                loading="lazy" src="/awardsslides/8s.png" style={{"opacity":"0"}} /><img
                                                alt="image" loading="lazy" src="/awardsslides/9s.png"
                                                style={{"opacity":"0"}} /><img alt="image" loading="lazy"
                                                src="/awardsslides/10s.png" style={{"opacity":"0"}} /><img alt="image"
                                                loading="lazy" src="/awardsslides/11s.png" style={{"opacity":"0"}} /><img
                                                alt="image" loading="lazy" src="/awardsslides/12s.png"
                                                style={{"opacity":"0"}} /><img alt="image" loading="lazy"
                                                src="/awardsslides/13s.png" style={{"opacity":"0"}} /><img alt="image"
                                                loading="lazy" src="/awardsslides/14s.png" style={{"opacity":"0"}} /><img
                                                alt="image" loading="lazy" src="/awardsslides/15s.png"
                                                style={{"opacity":"0"}} /><img alt="image" loading="lazy"
                                                src="/awardsslides/16s.png" style={{"opacity":"0"}} /><img alt="image"
                                                loading="lazy" src="/awardsslides/17s.png" style={{"opacity":"0"}} /><img
                                                alt="image" loading="lazy" src="/awardsslides/18s.png"
                                                style={{"opacity":"0"}} /><img alt="image" loading="lazy"
                                                src="/awardsslides/19s.png" style={{"opacity":"0"}} /></div>
                                    </div>
                                    <div className="more">
                                        <p className="">+ 50 more awards</p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-news">
                                <div className="wrapper">
                                    <div className="top">
                                        <h4 className="font-machina-120">Our Insights</h4><a href="/insights"
                                            className="font-14-dark"><span>View All</span><img alt="news"
                                                src="/icons/allNews.svg" /></a>
                                        <div className="anim-line anim-line-bottom"></div>
                                    </div>
                                    <div className="parent">
                                        <div><a href="/insights/vogue-business-gen-z-interactive-editorial-design"
                                                className="item">
                                                <div className="anim-line anim-line-bottom"></div>
                                                <div className="cover"><img
                                                        src="https://images.prismic.io/noomo-website/aWGhGQIvOtkhBPho_voguearchrivalarticlenobgnew-1--1-.png?auto=format,compress"
                                                        alt="Interactive editorial design for Vogue Business Gen Z Report showing headline 'Gen Z broke the marketing funnel part II what now?' with pixelated gradient background, diverse Gen Z portraits, and nature vs digital aesthetic by Noomo Agency"
                                                        loading="lazy" data-nuxt-img="" className="cover-image" /><img
                                                        src="https://images.prismic.io/noomo-website/aWGhGQIvOtkhBPho_voguearchrivalarticlenobgnew-1--1-.png?auto=format,compress&amp;blur=180&amp;q=90"
                                                        alt="Interactive editorial design for Vogue Business Gen Z Report showing headline 'Gen Z broke the marketing funnel part II what now?' with pixelated gradient background, diverse Gen Z portraits, and nature vs digital aesthetic by Noomo Agency"
                                                        loading="lazy" data-nuxt-img="" className="cover-blur" /><img
                                                        alt="icon" className="tag-icon"
                                                        src="https://images.prismic.io/noomo-website/ZiLK4fPdc1huKphD_articleicon3.png?auto=format,compress" />
                                                    <div className="hover-tags">
                                                        <span>Editorial</span><br /><span>Interactive</span><br /><span>Web</span><br />
                                                    </div>
                                                    <div className="back"><img alt="icon"
                                                            src="/icons/icon_eye.svg" /><span>READ</span></div>
                                                </div>
                                                <div className="info">
                                                    <h3 className="font-neue-roman-28">Designing Vogue Business' Gen Z
                                                        Report: Interactive Editorial Website</h3>
                                                    <div className="bottom">
                                                        <p className="tag font-neue-roman-16">Editorial</p>
                                                        <p className="date font-neue-roman-16">Jan 8, 2026</p>
                                                    </div>
                                                </div>
                                                <div className="hover-icon"><img alt="icon" src="/icons/allNews.svg" /></div>
                                            </a></div>
                                        <div><a href="/insights/the-power-of-digital-storytelling" className="item">
                                                <div className="anim-line anim-line-bottom"></div>
                                                <div className="cover"><img
                                                        src="https://images.prismic.io/noomo-website/aIf61FGsbswqTXwE_storytellingarticlecover-2.png?auto=format,compress"
                                                        alt="Digital storytelling in web design combining 3D environments, interactive animations, and immersive experiences to create memorable brand narratives"
                                                        loading="lazy" data-nuxt-img="" className="cover-image" /><img
                                                        src="https://images.prismic.io/noomo-website/aIf61FGsbswqTXwE_storytellingarticlecover-2.png?auto=format,compress&amp;blur=180&amp;q=90"
                                                        alt="Digital storytelling in web design combining 3D environments, interactive animations, and immersive experiences to create memorable brand narratives"
                                                        loading="lazy" data-nuxt-img="" className="cover-blur" /><img
                                                        alt="icon" className="tag-icon"
                                                        src="https://images.prismic.io/noomo-website/69c7c05c-2f67-4351-89ee-1b0b9d7c41b8_article+earth+icon+%281%29.png?auto=compress,format" />
                                                    <div className="hover-tags">
                                                        <span>Storytelling</span><br /><span>Website</span><br /><span>3D</span><br />
                                                    </div>
                                                    <div className="back"><img alt="icon"
                                                            src="/icons/icon_eye.svg" /><span>READ</span></div>
                                                </div>
                                                <div className="info">
                                                    <h3 className="font-neue-roman-28">The Power of Digital Storytelling or
                                                        How to Tell the Story Without Words</h3>
                                                    <div className="bottom">
                                                        <p className="tag font-neue-roman-16">Storytelling</p>
                                                        <p className="date font-neue-roman-16">Jul 28, 2025</p>
                                                    </div>
                                                </div>
                                                <div className="hover-icon"><img alt="icon" src="/icons/allNews.svg" /></div>
                                            </a></div>
                                        <div><a href="/insights/noomo-valentime-immersive-storytelling" className="item">
                                                <div className="anim-line anim-line-bottom"></div>
                                                <div className="cover"><img
                                                        src="https://images.prismic.io/noomo-website/aBPduPIqRLdaBzOW_Frame2147207049-4.png?auto=format,compress"
                                                        alt="Noomo ValenTime immersive 3D storytelling experience featuring magical portal, floating heart, gold accents, and interactive 3D customizer"
                                                        loading="lazy" data-nuxt-img="" className="cover-image" /><img
                                                        src="https://images.prismic.io/noomo-website/aBPduPIqRLdaBzOW_Frame2147207049-4.png?auto=format,compress&amp;blur=180&amp;q=90"
                                                        alt="Noomo ValenTime immersive 3D storytelling experience featuring magical portal, floating heart, gold accents, and interactive 3D customizer"
                                                        loading="lazy" data-nuxt-img="" className="cover-blur" /><img
                                                        alt="icon" className="tag-icon"
                                                        src="https://images.prismic.io/noomo-website/ZiLK4vPdc1huKphE_articleicon4.png?auto=format,compress" />
                                                    <div className="hover-tags">
                                                        <span>3D</span><br /><span>Immersive</span><br /><span>Website</span><br />
                                                    </div>
                                                    <div className="back"><img alt="icon"
                                                            src="/icons/icon_eye.svg" /><span>READ</span></div>
                                                </div>
                                                <div className="info">
                                                    <h3 className="font-neue-roman-28">Noomo ValenTime, an Immersive
                                                        Storytelling About Love</h3>
                                                    <div className="bottom">
                                                        <p className="tag font-neue-roman-16">3D</p>
                                                        <p className="date font-neue-roman-16">May 1, 2025</p>
                                                    </div>
                                                </div>
                                                <div className="hover-icon"><img alt="icon" src="/icons/allNews.svg" /></div>
                                            </a></div>
                                        <div><a href="/insights/ai-brand-activation-3d-music-case-study" className="item">
                                                <div className="anim-line anim-line-bottom"></div>
                                                <div className="cover"><img
                                                        src="https://images.prismic.io/noomo-website/Zyvnga8jQArT0Wlv_NoomoBeatarticle.png?auto=format,compress"
                                                        alt="Interactive 3D visualization that responds in real-time to AI-generated music"
                                                        loading="lazy" data-nuxt-img="" className="cover-image" /><img
                                                        src="https://images.prismic.io/noomo-website/Zyvnga8jQArT0Wlv_NoomoBeatarticle.png?auto=format,compress&amp;blur=180&amp;q=90"
                                                        alt="Interactive 3D visualization that responds in real-time to AI-generated music"
                                                        loading="lazy" data-nuxt-img="" className="cover-blur" /><img
                                                        alt="icon" className="tag-icon"
                                                        src="https://images.prismic.io/noomo-website/d5a09caa-fd41-45ae-9bed-5e66a06c7306_flash+icon+article+%282%29.png?auto=format,compress" />
                                                    <div className="hover-tags">
                                                        <span>AI</span><br /><span>Immersive</span><br /><span>3D</span><br />
                                                    </div>
                                                    <div className="back"><img alt="icon"
                                                            src="/icons/icon_eye.svg" /><span>READ</span></div>
                                                </div>
                                                <div className="info">
                                                    <h3 className="font-neue-roman-28">AI-powered Brand Activation: Building
                                                        Interactive 3D Music Experiences</h3>
                                                    <div className="bottom">
                                                        <p className="tag font-neue-roman-16">AI</p>
                                                        <p className="date font-neue-roman-16">Nov 06, 2024</p>
                                                    </div>
                                                </div>
                                                <div className="hover-icon"><img alt="icon" src="/icons/allNews.svg" /></div>
                                            </a></div>
                                        <div><a href="/insights/3d-websites-and-immersive-web-experiences-for-marketing"
                                                className="item">
                                                <div className="anim-line anim-line-bottom"></div>
                                                <div className="cover"><img
                                                        src="https://images.prismic.io/noomo-website/Zj1CuUMTzAJOCq7c_immercivewebsitecover.png?auto=format,compress"
                                                        alt="Abstract geometric background for immersive web experiences marketing"
                                                        loading="lazy" data-nuxt-img="" className="cover-image" /><img
                                                        src="https://images.prismic.io/noomo-website/Zj1CuUMTzAJOCq7c_immercivewebsitecover.png?auto=format,compress&amp;blur=180&amp;q=90"
                                                        alt="Abstract geometric background for immersive web experiences marketing"
                                                        loading="lazy" data-nuxt-img="" className="cover-blur" /><img
                                                        alt="icon" className="tag-icon"
                                                        src="https://images.prismic.io/noomo-website/ZiLK4PPdc1huKphC_articleicon2.png?auto=format,compress" />
                                                    <div className="hover-tags">
                                                        <span>Immersive</span><br /><span>3D</span><br /><span>AR</span><br />
                                                    </div>
                                                    <div className="back"><img alt="icon"
                                                            src="/icons/icon_eye.svg" /><span>READ</span></div>
                                                </div>
                                                <div className="info">
                                                    <h3 className="font-neue-roman-28">Elevate Marketing and Sales by Using
                                                        Immersive Web Experiences</h3>
                                                    <div className="bottom">
                                                        <p className="tag font-neue-roman-16">Immersive Experiences</p>
                                                        <p className="date font-neue-roman-16">May 10, 2024</p>
                                                    </div>
                                                </div>
                                                <div className="hover-icon"><img alt="icon" src="/icons/allNews.svg" /></div>
                                            </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-contact-form">
                                <div className="wrapper">
                                    <div className="top">
                                        <h3 className="font-machina-60">BUT WE'RE HERE NOT TO TALK ABOUT OURSELVES - WE'RE
                                            HERE TO TALK ABOUT YOU, YOUR COMPANY, YOUR PRODUCT, AND YOUR GOALS.</h3>
                                    </div>
                                    <div className="bottom">
                                        <div className="info-text">
                                            <p className="font-14-dark">With us it happens.<br /> We would love to hear from
                                                you.</p>
                                        </div>
                                        <form noValidate="" className="form-inputs">
                                            <div className="input-wrapper done-trigger"><input id="form-name" type="text"
                                                    placeholder="Your name" name="name" /></div>
                                            <div className="input-wrapper done-trigger"><input type="email"
                                                    placeholder="Your email" name="email" /></div>
                                            <div className="input-wrapper done-trigger"><input type="text"
                                                    placeholder="Your project is about" name="message" /></div>
                                            <p className="font-neue-roman-16 budget done-trigger"> Project budget (USD) </p>
                                            <div className="input-wrapper-bottom done-trigger">
                                                <div className="radio-block"><input type="radio" id="radio1"
                                                        value="50K–100K" name="radio" /><label
                                                        htmlFor="radio1">50K–100K</label><input type="radio" id="radio2"
                                                        value="100K–300K" name="radio" /><label
                                                        htmlFor="radio2">100K–300K</label><input type="radio" id="radio3"
                                                        value="300K+" name="radio" /><label
                                                        htmlFor="radio3">300K+</label></div><button
                                                    className="its-mac submit" type="submit"><span>Send</span><img
                                                        alt="arrow" className="arrow" src="/icons/smallArrow.svg" /><i
                                                        className="hover-mask"><span className="its-mac"> Send </span><img
                                                            alt="arrow" className="arrow"
                                                            src="/icons/smallArrowBlack.svg" /></i></button>
                                            </div>
                                            <div className="form-send-suc">
                                                <p className="font-machina-30"> Thank you </p><img loading="lazy" alt="done"
                                                    src="/icons/formheart.svg" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="home-footer">
                                <div className="wrapper">
                                    <div className="col-1">
                                        <div>
                                            <p className="font-neue-roman-14-500 small-title"> Menu. </p><a href="/work"
                                                className="font-neue-roman-16 link"> Work </a><br /><a href="/our-story"
                                                className="font-neue-roman-16 link"> Our story </a><br /><a href="/insights"
                                                className="font-neue-roman-16 link"> Insights </a><br /><a href="/connect"
                                                className="font-neue-roman-16 link"> Connect </a><br /><a
                                                href="/privacy-policy" className="font-neue-roman-16 link"> Privacy policy
                                            </a><br />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div></div>
                                    </div>
                                    <div className="col-3">
                                        <div>
                                            <p className="font-neue-roman-14-500 small-title"> Social. </p><a
                                                target="_blank" href="https://www.linkedin.com/company/noomoagency"
                                                className="social-link font-neue-roman-16 link"> LinkedIn </a><br /><a
                                                target="_blank" href="https://www.instagram.com/noomoagency/"
                                                className="social-link font-neue-roman-16 link"> Instagram </a><br /><a
                                                target="_blank" href="https://dribbble.com/noomoagency"
                                                className="social-link font-neue-roman-16 link"> Dribbble </a><br /><a
                                                target="_blank" href="https://x.com/noomoagency"
                                                className="social-link font-neue-roman-16 link"> X </a>
                                        </div>
                                        <div>
                                            <p className="font-neue-roman-14-500 small-title email"> Email. </p><a
                                                className="font-neue-roman-16 link email-address"
                                                href="mailto:hello@noomoagency.com">hello@noomoagency.com</a>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p className="font-neue-roman-16"> Let’s grab some coffee. </p>
                                        <p className="font-neue-roman-16 desc"> We are based in Los Angeles but often come
                                            to San Francisco ☕ </p>
                                    </div>
                                </div>
                                <div className="mobile-copy">
                                    <div className="left"><a aria-current="page" href="/"
                                            className="router-link-active router-link-exact-active"><img alt="netrix logo"
                                                className="logo-icon desctop-logo" src="/icons/footerlogo.png" /><img
                                                alt="netrix logo" className="logo-icon mobile-logo"
                                                src="/logos/mobileLogo.svg" /></a></div><a
                                        className="font-neue-roman-16 link mobile-email"
                                        href="mailto:hello@noomoagency.com">hello@noomoagency.com</a>
                                    <div className="animation-icons"><img alt="icons" src="/icons/oiG.svg" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonails-text"
                        style={{"translate":"none","rotate":"none","scale":"none","transform":"translate(0px, 190vh)"}}>
                        <div className="wrapper">
                            <div className="texts">
                                <p className="font-neue-roman-18">We work as one team with our clients. Through discovery
                                    workshops, we uncover your story and translate it into digital experiences that
                                    reflect your vision.

                                    Our agency combines storytelling craft with technical expertise to create work that
                                    connects emotionally and drives engagement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="proxy-parent">
                        <div className="proxy-test"></div>
                        <div className="proxy-test-2"></div>
                        <div className="proxy-test-3"></div>
                        <div className="proxy-test-4"></div>
                    </div>
                     <div className="background-config"></div>
                     <div className="hero-text"
                          style={{"translate":"none","rotate":"none","scale":"none","transform":"translate(0px, 0px)","opacity":"1"}}>
                          <h1> Design that elevates your digital presence </h1>
                          <p><span>Award-winning design agency building websites, activations, and experiences that make people stop scrolling.</span></p>
                      </div>
                    <div className="cases-texts">
                        <div className="item orcad-text" style={{"pointerEvents":"none"}}>
                            <div className="left">
                                <div className="tags"><span className="year tag font-10-black stag-tag"
                                        style={{"opacity":"0"}}><span>Track</span></span>
                                    <div><span className="tag font-10-black stag-tag" style={{"opacity":"0"}}>Payments / Lending / Access</span></div>
                                </div>
                            </div>
                            <div className="center stag-tag" style={{"opacity":"0"}}>
                                <div className="view-project-link"><span className="">View track</span><img alt="arrow"
                                        className="arrow" src="/icons/smallArrow.svg" />
                                    <div className="hover-mask"><span className=""> View track </span><img alt="arrow"
                                            className="arrow" src="/icons/smallArrowBlack.svg" /></div>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="name font-neue-roman-14-bold"><strong className="stag-tag"
                                            style={{"opacity":"0"}}>FINTECH</strong></p>
                                    <p className="desc font-14-dark stag-tag" style={{"opacity":"0"}}>Reimagine payments, lending, and financial access with secure, scalable FinTech.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item middle-text" style={{"pointerEvents":"none"}}>
                            <div className="left">
                                <div className="tags"><span className="year tag font-10-black stag-tag"
                                        style={{"opacity":"0"}}><span>Track</span></span>
                                    <div><span className="tag font-10-black stag-tag" style={{"opacity":"0"}}>Web3 / DApps / Solidity</span></div>
                                </div>
                            </div>
                            <div className="center stag-tag" style={{"opacity":"0"}}>
                                <div className="view-project-link"><span className="">View track</span><img alt="arrow"
                                        className="arrow" src="/icons/smallArrow.svg" />
                                    <div className="hover-mask"><span className=""> View track </span><img alt="arrow"
                                            className="arrow" src="/icons/smallArrowBlack.svg" /></div>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="name font-neue-roman-14-bold"><strong className="stag-tag"
                                            style={{"opacity":"0"}}>WEB3 & BLOCKCHAIN</strong></p>
                                    <p className="desc font-14-dark stag-tag" style={{"opacity":"0"}}>Build trustless apps with smart contracts, tokens, and decentralized rails.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item space-text" style={{"pointerEvents":"none"}}>
                            <div className="left">
                                <div className="tags"><span className="year tag font-10-black stag-tag"
                                        style={{"opacity":"0"}}><span>Track</span></span>
                                    <div><span className="tag font-10-black stag-tag" style={{"opacity":"0"}}>Climate / IoT / Smart Tech</span></div>
                                </div>
                            </div>
                            <div className="center stag-tag" style={{"opacity":"0"}}>
                                <div className="view-project-link"><span className="">View track</span><img alt="arrow"
                                        className="arrow" src="/icons/smallArrow.svg" />
                                    <div className="hover-mask"><span className=""> View track </span><img alt="arrow"
                                            className="arrow" src="/icons/smallArrowBlack.svg" /></div>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="name font-neue-roman-14-bold"><strong className="stag-tag"
                                            style={{"opacity":"0"}}>SUSTAINABILITY & EM-TECH</strong></p>
                                    <p className="desc font-14-dark stag-tag" style={{"opacity":"0"}}>Use tech to tackle climate challenges, design immersive AR/VR experiences, and prototype smart devices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="item bunny-text" style={{"pointerEvents":"none"}}>
                            <div className="left">
                                <div className="tags"><span className="year tag font-10-black stag-tag"
                                        style={{"opacity":"0"}}><span>Track</span></span>
                                    <div><span className="tag font-10-black stag-tag" style={{"opacity":"0"}}>Cross-Domain / Open-Ended</span></div>
                                </div>
                            </div>
                            <div className="center stag-tag" style={{"opacity":"0"}}>
                                <div className="view-project-link"><span className="">View track</span><img alt="arrow"
                                        className="arrow" src="/icons/smallArrow.svg" />
                                    <div className="hover-mask"><span className=""> View track </span><img alt="arrow"
                                            className="arrow" src="/icons/smallArrowBlack.svg" /></div>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <p className="name font-neue-roman-14-bold"><strong className="stag-tag"
                                            style={{"opacity":"0"}}>OPEN INNOVATION</strong></p>
                                    <p className="desc font-14-dark stag-tag" style={{"opacity":"0"}}>Solve any real-world problem with bold, cross-domain, open-ended ideas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-fix">
                        <div className="scroll-down">
                            <p className="scroll-text">Scroll</p><img alt="scroll" className="icon" src="/icons/arrowpixel.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="preloader" style={{"clipPath":"polygon(0% 0%, 100% 0px, 100% 0%, 0% 0%)"}}>
                <div className="logo-wrapper"><img src="/logos/preloadLogoadjusted.svg" alt="logo" /></div>
            </div>
            <div id="transition">
                <div className="logo-image">
                    <div className="parent"><img alt="icon" className="transition-image home"
                            src="/icons/home1.svg" /></div>
                </div>
                <div className="transition-text">home</div>
            </div>
        </div>
    </div>
    </>
    
    
    
    
    
    



  );
}
