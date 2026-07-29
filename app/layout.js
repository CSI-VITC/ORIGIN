import NuxtHead from './NuxtHead';

// Base / global styles
import './styles/globals.css';

// Shared Nuxt layout chrome (header, mobile-menu, transition, preloader)
import './styles/layout.css';

// Swiper library CSS (used by home page reviews slider)
import './styles/swiper.css';

// Page-specific styles
import './styles/home.css';
import './styles/error.css';

export const metadata = {
  title: 'Digital Storytelling & 3D Website Design Agency | Noomo',
  description: 'We create 3D storytelling websites and immersive digital experiences that make people stop scrolling.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: 'auto', touchAction: 'pan-x' }}
      suppressHydrationWarning={true}
    >
      <head>
        <NuxtHead />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
