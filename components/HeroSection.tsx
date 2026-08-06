'use client';

import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import AsciiModelBackground from './AsciiModelBackground';
import ASCIIText from './reactbits/ASCIIText';

interface HeroSectionProps {
  onOpenDevfolio: () => void;
  onOpenWhatsApp: () => void;
  onScrollToAbout: () => void;
}

export default function HeroSection({ onOpenDevfolio, onOpenWhatsApp, onScrollToAbout }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const dnaRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top top', end: '+=1500', pin: true, scrub: 1 }
      });
      tl
        .to(dnaRef.current, { y: -50, duration: 0.80 }, 0)
        .to(cueRef.current, { opacity: 0, duration: 0.05 }, 0)
        .to(taglineRef.current, { opacity: 0, duration: 0.06 }, 0.08)
        .to(auraRef.current, { opacity: 0.6, scale: 1.05, duration: 0.20 }, 0.05)
        .to(auraRef.current, { opacity: 0, scale: 1.1, duration: 0.40 }, 0.25)
        .to(wordmarkRef.current, { opacity: 0, scale: 0.95, duration: 0.40 }, 0.20)
        .to(actionsRef.current, { opacity: 0, y: -20, duration: 0.35 }, 0.35);
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-[100svh] w-full flex flex-col items-center justify-between px-4 md:px-6 py-8 md:py-12 overflow-hidden bg-[#070707] text-[#F2F0EB] select-none">
      <div ref={dnaRef} className="absolute inset-0 z-0">
        <AsciiModelBackground modelPath="/assets/dna.glb" />
      </div>
      <div ref={auraRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[140px] sm:w-[500px] sm:h-[250px] md:w-[700px] md:h-[350px] bg-gradient-to-r from-[#FF4D1C]/15 via-[#FF4D1C]/08 to-transparent rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      <div ref={taglineRef} className="w-full pt-12 md:pt-16 flex justify-center items-center z-10 pointer-events-none">
        <div className="font-mono-custom text-[9px] sm:text-xs text-[#8A8A8A] tracking-[0.3em] uppercase flex items-center gap-2 md:gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C]/80" />
          <span>CSI · VIT CHENNAI // 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C]/80" />
        </div>
      </div>
      <div ref={wordmarkRef} className="relative z-20 my-auto w-full flex flex-col items-center justify-center">
        <div className="w-full" style={{ height: 'clamp(80px, 20vw, 260px)', position: 'relative' }}>
          <ASCIIText text="ORIGIN" enableWaves={true} asciiFontSize={8} textFontSize={160} planeBaseHeight={8} textColor="#FF4D1C" />
        </div>
        <div ref={actionsRef} className="mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 z-20">
          <button onClick={onOpenDevfolio} className="font-mono-custom text-[10px] md:text-xs text-[#8A8A8A] hover:text-[#FF4D1C] border-b border-[#2A2A2A] hover:border-[#FF4D1C] pb-1 tracking-widest uppercase transition-all flex items-center gap-2 group">
            <span>APPLY WITH DEVFOLIO</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <span className="text-[#2A2A2A] hidden sm:inline">•</span>
          <button onClick={onOpenWhatsApp} className="font-mono-custom text-[10px] md:text-xs text-[#8A8A8A] hover:text-[#F2F0EB] tracking-widest uppercase transition-colors flex items-center gap-2">
            <span>COMMUNITY</span>
            <span>✦</span>
          </button>
        </div>
      </div>
      <div ref={cueRef} className="w-full pb-2 md:pb-4 flex flex-col items-center justify-center gap-2 z-20">
        <button onClick={onScrollToAbout} className="group flex flex-col items-center gap-1 md:gap-2 text-[#8A8A8A] hover:text-[#FF4D1C] transition-colors cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_10px_#FF4D1C] group-hover:scale-150 transition-transform" />
          <span className="font-mono-custom text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-[#8A8A8A] group-hover:text-[#F2F0EB]">SCROLL TO EXPLORE</span>
        </button>
      </div>
    </section>
  );
}
