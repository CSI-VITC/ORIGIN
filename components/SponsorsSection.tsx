'use client';

import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';
import Image from 'next/image';

export default function SponsorsSection() {
  const spotlightCards = [
    {
      num: '01',
      title: 'TITLE SPONSOR',
      subtitle: 'STITCH',
      logo: '/assets/stitch.png',
      asciiVariant: 'dragonfly' as const,
      btnLabel: 'VIEW PARTNER',
      isPrimaryOrange: false,
      link: '#',
    },
    {
      num: '02',
      title: 'POWERED BY',
      subtitle: 'ELEVENLABS',
      logo: '/assets/eleven-labs.png',
      asciiVariant: 'globe' as const,
      btnLabel: 'VIEW PLATFORM',
      isPrimaryOrange: false,
      link: '#',
    },
    {
      num: '03',
      title: 'TOOLING PARTNER',
      subtitle: 'CODECRAFTERS',
      logo: '/assets/code_crafters.png',
      asciiVariant: 'matrix' as const,
      btnLabel: 'START BUILDING',
      isPrimaryOrange: false,
      link: '#',
    },
    {
      num: '04',
      title: 'INFRASTRUCTURE',
      subtitle: 'NEXUS',
      logo: '/assets/nexusx.jpeg',
      asciiVariant: 'dots' as const,
      btnLabel: 'JOIN NETWORK',
      isPrimaryOrange: false,
      link: '#',
    },
  ];

  return (
    <section id="sponsors" className="py-24 md:py-32 border-b border-[#2A2A2A] relative overflow-hidden bg-[#050505]">
      <AsciiBackground variant="dots" opacity={0.04} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          secCode="SEC-05"
          numeral="05"
          title="SPONSORS"
          subtitle="BACKED BY PREMIER INSTITUTIONS & VENTURE INFRASTRUCTURE BUILDERS"
        />

        {/* Spotlight Grid (Updated for 4 Sponsors) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#2A2A2A] bg-[#070707] my-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {spotlightCards.map((card, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#2A2A2A] last:border-r-0 relative group bg-[#070707] hover:bg-[#0A0A0A] transition-colors`}
            >
              {/* Top Header Row of Card */}
              <div className="p-4 flex items-center justify-between border-b border-[#1A1A1A]">
                {/* Top-Left Orange Pixel Square */}
                <div className="w-1.5 h-1.5 bg-[#FF4D1C] shrink-0" />

                {/* Top Center Numeral */}
                <span className="font-mono-custom text-xs text-[#8A8A8A] tracking-widest">
                  {card.num}
                </span>

                {/* Corner Plus Sign */}
                <span className="font-mono-custom text-xs text-[#3A3A3A] group-hover:text-[#FF4D1C] transition-colors">
                  +
                </span>
              </div>

              {/* Middle ASCII Canvas Area */}
              <div className="relative w-full h-[280px] sm:h-[320px] flex flex-col justify-end p-6 overflow-hidden">
                <AsciiBackground variant={card.asciiVariant} opacity={0.35} />

                {/* Logo Image */}
                <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center pt-8 pb-16 px-6">
                  <div className="relative w-full max-w-[180px] h-24">
                    <Image 
                      src={card.logo} 
                      alt={card.subtitle} 
                      fill 
                      className="object-contain opacity-90 drop-shadow-2xl" 
                    />
                  </div>
                </div>

                {/* Title & Subtitle Overlay at Card Bottom */}
                <div className="relative z-20 text-center flex flex-col items-center">
                  <span className="font-sans font-bold text-sm sm:text-base uppercase text-[#F2F0EB] tracking-wider mb-1">
                    {card.title}
                  </span>
                  <span className="font-mono-custom text-xs text-[#8A8A8A] tracking-widest uppercase">
                    {card.subtitle}
                  </span>
                </div>
              </div>

              {/* Full-Width Bottom Action Button */}
              <div>
                {card.isPrimaryOrange ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-4 bg-[#FF4D1C] hover:bg-[#FF5E33] text-[#0A0A0A] font-mono-custom font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="mx-auto pl-4">{card.btnLabel}</span>
                    {/* Double Black Pixel Icon on right */}
                    <div className="flex gap-0.5 shrink-0">
                      <div className="w-1.5 h-1.5 bg-[#0A0A0A]" />
                      <div className="w-1.5 h-1.5 bg-[#0A0A0A]" />
                    </div>
                  </a>
                ) : (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-4 bg-[#0A0A0A] hover:bg-[#121212] hover:text-[#FF4D1C] border-t border-[#2A2A2A] text-[#F2F0EB] font-mono-custom font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-between transition-colors cursor-pointer group/btn"
                  >
                    <span className="mx-auto pl-4">{card.btnLabel}</span>
                    <span className="font-mono-custom text-xs text-[#8A8A8A] group-hover/btn:text-[#FF4D1C] group-hover/btn:translate-x-1 transition-all">
                      →
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

