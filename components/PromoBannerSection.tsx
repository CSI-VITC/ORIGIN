'use client';

import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import SplitFlapText from './reactbits/SplitFlapText';

export default function PromoBannerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', end: 'bottom 25%', scrub: 0.8 } })
        .fromTo(contentRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.8 }, 0);
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-[#070707] border-y border-[#2A2A2A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] md:w-[600px] md:h-[200px] bg-[#FF4D1C]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center gap-6 md:gap-8">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_8px_#FF4D1C] md:shadow-[0_0_10px_#FF4D1C]" />
          <span className="font-mono-custom text-[9px] md:text-[10px] text-[#8A8A8A] tracking-[0.3em] uppercase">SIGNAL INCOMING</span>
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_8px_#FF4D1C] md:shadow-[0_0_10px_#FF4D1C]" />
        </div>
        <SplitFlapText
          words={['HACK THE FUTURE', '24 HOURS OF CODE', 'BUILD. SHIP. WIN.', 'YOUR ORIGIN STARTS', 'INNOVATE AT SCALE', 'CODE MEETS CAPITAL']}
          flipDuration={0.12} stagger={0.06} cycleDelay={2800} charset="alphanumeric" flipsPerChar={8}
          tileColor="#0A0A0A" textColor="#FF4D1C" tileRadius={5} gap={4} fontSize={28} loop padTo={16}
        />
      </div>
    </section>
  );
}
