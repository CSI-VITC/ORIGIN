export default function Header() {
  const content = `<header>
                <div class="back"></div>
                <div class="wrapper">
                    <div class="left"><span><a aria-current="page" href="/"
                                class="router-link-active router-link-exact-active for-logo"><img alt="netrix logo"
                                    class="logo" src="/logos/noomoLogo1.png"><img alt="netrix logo" class="logo"
                                    src="/logos/noomoLogo2.png"></a></span></div>
                    <div class="right"><a href="/work" class="font-12-dark"> Work </a><a href="/our-story"
                            class="font-12-dark"> Our Story </a><a target="_blank" class="font-12-dark"
                            href="https://labs.noomoagency.com/"> Labs </a><a href="/insights" class="font-12-dark">
                            Insights </a><a href="/connect" class="font-12-dark"> Connect </a></div>
                    <div class="burger">
                        <div class="font-14-dark">Menu</div>
                    </div>
                </div>
            `;
  // header is its own root tag, so we can strip it and attach innerHTML, OR we just use a fragment? No, we can't.
  // Actually, let's just make the entire page one component to guarantee 0 wrapper bugs.
}