export default function Home() {
  const bodyHtml = `
    <div id="__nuxt">
        <div class="index">
            </header>
            <div class="mobile-menu">
                <div class="mobile-links"><!----><a href="/work" class="font-12-dark"><span>Work</span></a><a
                        href="/our-story" class="font-12-dark"><span>Our Story</span></a><a target="_blank"
                        class="font-12-dark" href="https://labs.noomoagency.com/"><span>LABS</span></a><a
                        href="/insights" class="font-12-dark"><span>Insights</span></a><a href="/connect"
                        class="font-12-dark"><span>Connect</span></a></div>
                <div class="lets"><a href="/connect" class=""><span>Let's work together</span></a></div>
            </div>
            <div class="index-page"><!--[-->
                <div class="on-touch home-page-wrapper" id="smooth-wrapper"
                    style="inset: 0px; width: 100%; height: 100%; position: fixed; overflow: hidden;">
                    <div id="main-scene" style="opacity: 1;"><canvas data-engine="three.js r156" width="1118"
                            height="942"
                            style="display: block; width: 895px; height: 754px; touch-action: none;"></canvas></div><img
                        alt="background" src="/backgrounds/background_min.png" loading="lazy"
                        class="custom-l-back-image">
                    <div id="smooth-content"
                        style="translate: none; rotate: none; scale: none; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); box-sizing: border-box; width: 100%; overflow: visible;">
                        <div class="home-page">
                            <div class="testimonails-text"
                        style="translate: none; rotate: none; scale: none; transform: translate(0px, 190vh);">
                        <div class="wrapper">
                            <div class="texts">
                                <p class="font-neue-roman-18">We work as one team with our clients. Through discovery
                                    workshops, we uncover your story and translate it into digital experiences that
                                    reflect your vision.

                                    Our agency combines storytelling craft with technical expertise to create work that
                                    connects emotionally and drives engagement.</p>
                            </div>
                        </div>
                    </div>
                    <div class="proxy-parent">
                        <div class="proxy-test"></div>
                        <div class="proxy-test-2"></div>
                        <div class="proxy-test-3"></div>
                        <div class="proxy-test-4"></div>
                    </div>
                    <div class="background-config"></div>
                    <div class="hero-text"
                        style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">
                        <h1> Design that elevates your digital presence </h1>
                        <p><span>Award-winning design agency building websites, activations, and experiences that make
                                people stop scrolling.</span></p>
                    </div><!----><!---->
                    <div class="cases-texts">
                        <div class="item orcad-text" style="pointer-events: none;">
                            <div class="left">
                                <div class="tags"><span class="year tag font-10-black stag-tag"
                                        style="opacity: 0;"><span>Website</span></span>
                                    <div><span class="tag font-10-black stag-tag" style="opacity: 0;">Immersive / 3D /
                                            Interactive</span></div>
                                </div>
                            </div>
                            <div class="center stag-tag" style="opacity: 0;">
                                <div class="view-project-link"><span class="">View project</span><img alt="arrow"
                                        class="arrow" src="/icons/smallArrow.svg">
                                    <div class="hover-mask"><span class=""> View project </span><img alt="arrow"
                                            class="arrow" src="/icons/smallArrowBlack.svg"></div>
                                </div>
                            </div>
                            <div class="right">
                                <div>
                                    <p class="name font-neue-roman-14-bold"><strong class="stag-tag"
                                            style="opacity: 0;">Noomo Labs</strong></p>
                                    <p class="desc font-14-dark stag-tag" style="opacity: 0;">Immersive 3D web
                                        experience with customizable jellyfish showcasing transformation and motion.
                                        Real-time WebGL rendering, interactive storytelling, and experimental design
                                        pushing boundaries of what's possible on the web.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item middle-text" style="pointer-events: none;">
                            <div class="left">
                                <div class="tags"><span class="year tag font-10-black stag-tag"
                                        style="opacity: 0;"><span>Website</span></span>
                                    <div><span class="tag font-10-black stag-tag" style="opacity: 0;">Web 3 / Brand
                                            Activation</span></div>
                                </div>
                            </div>
                            <div class="center stag-tag" style="opacity: 0;">
                                <div class="view-project-link"><span class="">View project</span><img alt="arrow"
                                        class="arrow" src="/icons/smallArrow.svg">
                                    <div class="hover-mask"><span class=""> View project </span><img alt="arrow"
                                            class="arrow" src="/icons/smallArrowBlack.svg"></div>
                                </div>
                            </div>
                            <div class="right">
                                <div>
                                    <p class="name font-neue-roman-14-bold"><strong class="stag-tag"
                                            style="opacity: 0;">Coinbase and Golden State Warriors</strong></p>
                                    <p class="desc font-14-dark stag-tag" style="opacity: 0;">Mobile-first brand
                                        activation microsite bringing game-day excitement to life through golden-hour
                                        aesthetics and real-time NFT minting. Interactive storytelling experience
                                        celebrating Warriors legacy through immersive 3D design.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item space-text" style="pointer-events: none;">
                            <div class="left">
                                <div class="tags"><span class="year tag font-10-black stag-tag"
                                        style="opacity: 0;"><span>Website</span></span>
                                    <div><span class="tag font-10-black stag-tag" style="opacity: 0;">Enterprise /
                                            Storytelling / 3D</span></div>
                                </div>
                            </div>
                            <div class="center stag-tag" style="opacity: 0;">
                                <div class="view-project-link"><span class="">View project</span><img alt="arrow"
                                        class="arrow" src="/icons/smallArrow.svg">
                                    <div class="hover-mask"><span class=""> View project </span><img alt="arrow"
                                            class="arrow" src="/icons/smallArrowBlack.svg"></div>
                                </div>
                            </div>
                            <div class="right">
                                <div>
                                    <p class="name font-neue-roman-14-bold"><strong class="stag-tag"
                                            style="opacity: 0;">Salesforce 360 Platform</strong></p>
                                    <p class="desc font-14-dark stag-tag" style="opacity: 0;">Enterprise website design
                                        using interactive 3D elements to visualize Salesforce AI ecosystem. Glassy 3D
                                        tiles, modular UX, and spatial storytelling make complex enterprise platform
                                        accessible for CIOs, developers, and architects.</p>
                                </div>
                            </div>
                        </div>
                        <div class="item bunny-text" style="pointer-events: none;">
                            <div class="left">
                                <div class="tags"><span class="year tag font-10-black stag-tag"
                                        style="opacity: 0;"><span>Website</span></span>
                                    <div><span class="tag font-10-black stag-tag" style="opacity: 0;">Storytelling / 3D
                                            / Product</span></div>
                                </div>
                            </div>
                            <div class="center stag-tag" style="opacity: 0;">
                                <div class="view-project-link"><span class="">View project</span><img alt="arrow"
                                        class="arrow" src="/icons/smallArrow.svg">
                                    <div class="hover-mask"><span class=""> View project </span><img alt="arrow"
                                            class="arrow" src="/icons/smallArrowBlack.svg"></div>
                                </div>
                            </div>
                            <div class="right">
                                <div>
                                    <p class="name font-neue-roman-14-bold"><strong class="stag-tag"
                                            style="opacity: 0;">Vision by Dandy</strong></p>
                                    <p class="desc font-14-dark stag-tag" style="opacity: 0;">Interactive product
                                        website transforming dental technology into cinematic narrative. High-end 3D
                                        product visualization, scroll-based storytelling, and refined UI design showcase
                                        intraoral scanner through craft-driven digital experience for modern practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-fix">
                        <div class="scroll-down">
                            <p class="scroll-text">Scroll</p><img alt="scroll" class="icon" src="/icons/arrowpixel.svg">
                        </div>
                    </div>
                </div><!--]-->
            </div>
            
            <div id="transition">
                <div class="logo-image">
                    <div class="parent"><img alt="icon" class="transition-image home"
                            src="/icons/home1.svg"><!----><!----><!----><!----></div>
                </div>
                <div class="transition-text">home</div>
            </div>
        </div>
    </div>
    <script type="text/javascript" async=""
        src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/GOYPYHDK9DOX/GOYPYHDK9DOX.js.gz"></script>
    
    <script>window.__NUXT__ = {}; window.__NUXT__.config = { public: { robotsClient: "index, follow", device: { defaultUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36", enabled: true, refreshOnResize: false }, prismic: { endpoint: "noomo-website", clientConfig: {}, client: "~/app/prismic/client", linkResolver: "~/app/prismic/linkResolver", richTextSerializer: "~/app/prismic/richTextSerializer", injectComponents: true, components: {}, preview: false, toolbar: false }, gtm: { devtools: true, id: "GTM-KXQJRFKX" }, gtag: { id: "G-9R6X953ER3", config: {}, initialConsent: true, loadingStrategy: "defer" }, site: { _context: { defaultLocale: "defaults", trailingSlash: "defaults", titleSeparator: "defaults", name: "vendorEnv", indexable: "system", url: "nuxt:config:site", debug: "nuxt:config:site" }, defaultLocale: "en", trailingSlash: false, titleSeparator: "|", name: "nuxt-blunk", indexable: true, url: "https://noomoagency.com", debug: false } }, app: { baseURL: "/", buildAssetsDir: "/_nuxt/", cdnURL: "" } }</script>
    
    <script type="application/ld+json" id="schema-org-graph" data-h-3437552="">{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Noomo Agency",
      "url": "https://noomoagency.com",
      "alternateName": [
        "Noomo Design Agency",
        "Noomo Creative Agency"
      ],
      "image": {
        "@id": "#/schema/image/474d311"
      },
      "logo": {
        "@id": "#/schema/image/66fe54e"
      },
      "sameAs": [
        "https://www.awwwards.com/noomoagency/",
        "https://www.linkedin.com/company/noomoagency",
        "https://dribbble.com/noomoagency",
        "https://www.instagram.com/noomoagency/",
        "https://twitter.com/noomoagency"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Noomo Agency",
      "url": "https://noomoagency.com",
      "publisher": {
        "@id": "https://noomoagency.com#organization"
      }
    },
    {
      "@id": "",
      "@type": "WebPage",
      "description": "Award-winning design agency in Los Angeles specializing in 3D website design, storytelling websites, 3D storytelling videos, WebGL development, and immersive digital experiences for brands like Intel, Salesforce, Red Bull, AMD, and Vogue Business",
      "name": "Noomo Agency — 3D Design & WebGL Studio",
      "url": "https://noomoagency.com",
      "about": {
        "@id": "https://noomoagency.com#organization"
      },
      "isPartOf": {
        "@id": "https://noomoagency.com#website"
      },
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            null
          ]
        }
      ]
    },
    {
      "description": "Award-winning design agency in Los Angeles specializing in 3D website design, storytelling websites, 3D storytelling videos, WebGL development, and immersive digital experiences for brands like Intel, Salesforce, Red Bull, AMD, and Vogue Business",
      "email": "hello@noomoagency.com",
      "name": "Noomo Agency",
      "priceRange": "\$\$\$",
      "url": "https://noomoagency.com",
      "@type": [
        "Organization",
        "LocalBusiness",
        "ProfessionalService"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90245",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "12"
      },
      "alternateName": [
        "Noomo Design Agency",
        "Noomo Creative Agency"
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Los Angeles"
        },
        {
          "@type": "Country",
          "name": "United States"
        }
      ],
      "award": [
        "FWA Site of the Day 2025",
        "FWA Site of the Day 2024 (Multiple)",
        "Webby Awards Winner 2025 - Best Use of AI",
        "Webby Awards Winner 2025 - Technical Achievement",
        "Awwwards Website of the Year 2024",
        "Awwwards Site of the Day (Multiple)",
        "CSS Design Awards Website of the Day (Multiple)"
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.9189",
        "longitude": "-118.3964"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Design Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "3D Website Design",
              "description": "Interactive 3D websites with WebGL, real-time rendering, and spatial storytelling for brands and products"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Storytelling Websites",
              "description": "Narrative-driven website design combining editorial craft, motion design, and interactive storytelling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "3D Storytelling Videos",
              "description": "Cinematic 3D storytelling videos for product launches, brand campaigns, and digital experiences combining narrative craft with high-end 3D animation and motion design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Immersive Web Experiences",
              "description": "Full-scale immersive digital experiences using WebGL, Three.js, and cutting-edge web technologies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Activation Design",
              "description": "Interactive promo websites, 3D storytelling videos, and immersive brand activation experiences for events and product launches"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WebGL Development",
              "description": "Custom WebGL and Three.js development for interactive 3D web experiences and real-time rendering"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interactive Website Design",
              "description": "Motion design, scroll-based animations, and interactive elements for engaging digital experiences"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Event Experiences",
              "description": "Interactive booth experiences and digital activations for conferences, trade shows, and brand events"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Video Production",
              "description": "3D animation, motion graphics, and cinematic video production for brands and products"
            }
          }
        ]
      },
      "image": {
        "@id": "#/schema/image/474d311"
      },
      "knowsAbout": [
        "3D Web Design",
        "WebGL Development",
        "Three.js",
        "WebGPU",
        "Interactive Design",
        "Digital Storytelling",
        "3D Storytelling Videos",
        "Video Production",
        "Immersive Experiences",
        "Brand Activations",
        "Motion Design",
        "3D Animation",
        "Product Visualization",
        "Website Design",
        "Editorial Website Design",
        "Enterprise Website Design",
        "Creative Direction"
      ],
      "logo": {
        "@type": "ImageObject",
        "url": "https://noomoagency.com/logos/noomoLogo1.png",
        "contentUrl": "https://noomoagency.com/logos/noomoLogo1.png",
        "@id": "#logo",
        "caption": "Noomo Agency"
      },
      "sameAs": [
        "https://www.awwwards.com/noomoagency/",
        "https://www.linkedin.com/company/noomoagency",
        "https://dribbble.com/noomoagency",
        "https://www.instagram.com/noomoagency/",
        "https://twitter.com/noomoagency"
      ]
    },
    {
      "@id": "#/schema/image/474d311",
      "@type": "ImageObject",
      "contentUrl": "https://noomoagency.com/noomo.png",
      "url": "https://noomoagency.com/noomo.png"
    },
    {
      "@id": "#/schema/image/66fe54e",
      "@type": "ImageObject",
      "caption": "Noomo Agency",
      "contentUrl": "https://noomoagency.com/logos/noomoLogo1.png",
      "url": "https://noomoagency.com/logos/noomoLogo1.png"
    }
  ]
}</script>
    <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-KXQJRFKX"></script>
`;
  
  // We attach the exact original body content to a Fragment? No, must be an element.
  // We can attach it to a <main> tag, but that adds a wrapper!
  // Wait, if we just return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />, the original had <div id="__nuxt">...
  // So we can extract the id="__nuxt" wrapper!
  
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} suppressHydrationWarning />;
}
