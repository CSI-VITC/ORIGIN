import type { Metadata } from 'next';
import './globals.css';
import { ScrollProvider } from '@/hooks/scroll-context';

export const metadata: Metadata = {
  title: 'CSI ORIGIN 2026 | 24-Hour National Hackathon',
  description: 'Institutional finance meets hacker terminal. The flagship 24-hour national hackathon by Computer Society of India, VIT Chennai.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F2F0EB] antialiased selection:bg-[#FF4D1C] selection:text-[#0A0A0A] overflow-x-hidden font-serif" suppressHydrationWarning>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
