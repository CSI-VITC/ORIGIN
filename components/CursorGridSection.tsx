'use client';

import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import CursorGrid from './reactbits/CursorGrid';

export default function CursorGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 30%', scrub: 0.8 } })
        .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0);
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[80svh] md:min-h-screen bg-[#070707] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-auto">
        <CursorGrid
          cellSize={80}
          color="#FF4D1C"
          radius={160}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1}
          maxOpacity={0.7}
          fillOpacity={0.04}
          gridOpacity={0.04}
          cellRadius={4}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      <div ref={overlayRef} className="relative z-10 flex flex-col items-center gap-6 md:gap-10 px-4 pointer-events-none">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_10px_#FF4D1C]" />
          <span className="font-mono-custom text-[10px] md:text-xs text-[#FF4D1C] tracking-[0.3em] uppercase">MOVE YOUR CURSOR</span>
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_10px_#FF4D1C]" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl italic uppercase text-[#F2F0EB] tracking-wide text-center leading-tight">
          <span className="text-[#FF4D1C] glow-orange-text">TRACE</span> THE GRID.<br />
          <span className="text-[#FF4D1C] glow-orange-text">IGNITE</span> THE NETWORK.
        </h2>

        <p className="font-body-custom text-sm md:text-lg text-[#8A8A8A] max-w-lg text-center leading-relaxed mt-2">
          Every cell you touch lights a connection. This is how ideas catch fire — one synapse, one signal, one line of code at a time.
        </p>

        <div className="flex items-center gap-3 md:gap-4 mt-4">
          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#FF4D1C] shadow-[0_0_6px_#FF4D1C]" />
          <span className="font-mono-custom text-[9px] md:text-[10px] text-[#8A8A8A] tracking-[0.3em] uppercase">THE FIELD RESPONDS TO YOU</span>
          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#FF4D1C] shadow-[0_0_6px_#FF4D1C]" />
        </div>
      </div>
    </section>
  );
}
