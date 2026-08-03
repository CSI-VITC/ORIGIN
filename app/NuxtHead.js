/**
 * NuxtHead.js
 *
 * Renders all Nuxt bundle preload/stylesheet <link> tags
 * inside the Next.js <head>. Extracted from the original
 * monolithic headHtml string in layout.js.
 */
export default function NuxtHead() {
  return (
    <>
      {/* ── Nuxt entry bundle ── */}
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/entry.ea3395e2.js" />
      <link rel="preload"       as="style"  href="/_nuxt/entry.ef5ab1c2.css" />
      <link rel="stylesheet"               href="/_nuxt/entry.ef5ab1c2.css" />

      {/* ── Swiper ── */}
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/swiper-vue.9fd8c7bd.js" />
      <link rel="preload"       as="style"  href="/_nuxt/swiper-vue.693050bc.css" />
      <link rel="stylesheet"               href="/_nuxt/swiper-vue.693050bc.css" />

      {/* ── Nuxt layout / pages ── */}
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/default.fc5a372c.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/index.ba499ee8_v5.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/index.93ffdf89.js" />

      {/* ── GSAP plugins ── */}
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/ScrollSmoother.8d9f90d6.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/ScrollTrigger.039d4140.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/ScrollToPlugin.e2ef7d76.js" />

      {/* ── Home: contact form ── */}
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/homeContactForm.4fdc7dc3.js" />
      <link rel="preload"       as="style"  href="/_nuxt/homeContactForm.db2e1673.css" />
      <link rel="stylesheet"               href="/_nuxt/homeContactForm.db2e1673.css" />

      {/* ── Home: footer ── */}
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/homeFooter.8d29b2e8.js" />
      <link rel="preload"       as="style"  href="/_nuxt/homeFooter.bf7d9eb6.css" />
      <link rel="stylesheet"               href="/_nuxt/homeFooter.bf7d9eb6.css" />

      {/* ── Home: news ── */}
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/homeNews.vue.a59e816a.js" />
      <link rel="preload"       as="style"  href="/_nuxt/homeNews.b40c183e.css" />
      <link rel="stylesheet"               href="/_nuxt/homeNews.b40c183e.css" />

      {/* ── Shared Nuxt components ── */}
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/allNews.9bc059ef.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/nuxt-img.7485e894.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/icon_eye.1bbdff11.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="/_nuxt/linkArrow.9537ab61.js" />

      {/* ── Prefetch (low priority) ── */}
      <link rel="prefetch" as="script" crossOrigin="" href="/_nuxt/custom.8de65538.js" />
      <link rel="prefetch" as="script" crossOrigin="" href="/_nuxt/browser.4083dc18.js" />
      <link rel="prefetch" as="script" crossOrigin="" href="/_nuxt/_commonjsHelpers.3c9a3002.js" />

      {/* ── External Nuxt pages (noomoagency.com CDN) ── */}
      {/* Work page */}
      <link rel="modulepreload" as="script" crossOrigin="" href="https://noomoagency.com/_nuxt/index.19d8a6f7.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="https://noomoagency.com/_nuxt/worksCasesList.vue.7c6214c1.js" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/index.2a86cd7c.css" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/default.72b59ac1.css" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/worksCasesList.dcd68510.css" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/index.7b4b7ded.css" />

      {/* Our Story page */}
      <link rel="modulepreload" as="script" crossOrigin="" href="https://noomoagency.com/_nuxt/our-story.5d3b1882.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="https://noomoagency.com/_nuxt/ourDesignSolution.vue.463a6160.js" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/ourDesignSolution.2d1bc1ef.css" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/our-story.ff3243d9.css" />

      {/* Insights / News page */}
      <link rel="modulepreload" as="script" crossOrigin="" href="https://noomoagency.com/_nuxt/index.578f37a2.js" />
      <link rel="modulepreload" as="script" crossOrigin="" href="https://noomoagency.com/_nuxt/newsListItem.vue.27d37300.js" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/newsListItem.4a6d00df.css" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/index.95805651.css" />

      {/* Connect page */}
      <link rel="modulepreload" as="script" crossOrigin="" href="https://noomoagency.com/_nuxt/connect.8efde437.js" />
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/connect.2dce479f.css" />

      {/* Global custom overrides */}
      <link rel="stylesheet" href="https://noomoagency.com/_nuxt/custom.adb95559.css" />

      {/* Google Analytics */}
      <script src="https://www.googletagmanager.com/gtag/js?id=G-9R6X953ER3" defer></script>
    </>
  );
}
