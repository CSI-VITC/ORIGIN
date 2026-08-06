'use client';

import AsciiModelBackground from './AsciiModelBackground';
import ASCIIText from './reactbits/ASCIIText';

interface HeroSectionProps {
  onOpenDevfolio: () => void;
  onOpenWhatsApp: () => void;
  onScrollToAbout: () => void;
}

export default function HeroSection({
  onOpenDevfolio,
  onOpenWhatsApp,
  onScrollToAbout,
}: HeroSectionProps) {

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 py-12 overflow-hidden bg-[#070707] text-[#F2F0EB] select-none"
    >
      {/* 1. Dynamic 3D ASCII Model Background */}
      <AsciiModelBackground modelPath="/assets/dna.glb" />

      {/* 2. Central Warm Muted Radial Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] sm:w-[700px] sm:h-[350px] bg-gradient-to-r from-[#FF4D1C]/15 via-[#FF4D1C]/08 to-transparent rounded-full blur-[100px] pointer-events-none scale-100 opacity-40"
      />

      {/* Top Margin Spacer */}
      <div className="w-full pt-16 flex justify-center items-center z-10 pointer-events-none">
        <div className="font-mono-custom text-[10px] sm:text-xs text-[#8A8A8A] tracking-[0.3em] uppercase flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C]/80" />
          <span>CSI · VIT CHENNAI // 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C]/80" />
        </div>
      </div>

      {/* 3. ASCII Text Wordmark — 3D wavy ORIGIN with orange ASCII overlay */}
      <div className="relative z-20 my-auto w-full flex flex-col items-center justify-center">
        <div style={{ height: 'clamp(120px, 25vw, 300px)', width: '100%', position: 'relative' }}>
          <ASCIIText
            text="ORIGIN"
            enableWaves={true}
            asciiFontSize={10}
            textFontSize={200}
            planeBaseHeight={8}
            textColor="#FF4D1C"
          />
        </div>

        {/* Minimal Actions - Single Line */}
        <div className="mt-6 flex items-center justify-center gap-6 z-20">
          <button
            onClick={onOpenDevfolio}
            className="font-mono-custom text-xs text-[#8A8A8A] hover:text-[#FF4D1C] border-b border-[#2A2A2A] hover:border-[#FF4D1C] pb-1 tracking-widest uppercase transition-all flex items-center gap-2 group"
          >
            <span>APPLY WITH DEVFOLIO</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <span className="text-[#2A2A2A]">•</span>

          <button
            onClick={onOpenWhatsApp}
            className="font-mono-custom text-xs text-[#8A8A8A] hover:text-[#F2F0EB] tracking-widest uppercase transition-colors flex items-center gap-2"
          >
            <span>COMMUNITY</span>
            <span>✦</span>
          </button>
        </div>
      </div>

      {/* 4. Bottom Footer Cue (Matches the orange dot at the bottom center in reference) */}
      <div className="w-full pb-4 flex flex-col items-center justify-center gap-2 z-20">
        <button
          onClick={onScrollToAbout}
          className="group flex flex-col items-center gap-2 text-[#8A8A8A] hover:text-[#FF4D1C] transition-colors cursor-pointer"
        >
          {/* Small glowing orange pulse dot at bottom center (exact match to screenshot) */}
          <div className="w-2 h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_10px_#FF4D1C] group-hover:scale-150 transition-transform" />
          <span className="font-mono-custom text-[9px] tracking-[0.25em] uppercase text-[#8A8A8A] group-hover:text-[#F2F0EB]">
            SCROLL TO EXPLORE
          </span>
        </button>
      </div>
    </section>
  );
}
