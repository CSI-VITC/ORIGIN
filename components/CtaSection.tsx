'use client';

import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import SectionHeader from './SectionHeader';
import Cubes from './reactbits/Cubes';
import DecryptedText from './reactbits/DecryptedText';

interface CtaSectionProps { onOpenRegister: () => void; onOpenWhatsApp: () => void; onScrollToTimeline: () => void; }

export default function CtaSection({ onOpenRegister, onOpenWhatsApp, onScrollToTimeline }: CtaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cubesRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 30%', scrub: 0.8 } })
        .fromTo(cubesRef.current, { opacity: 0.3 }, { opacity: 0.55, duration: 0.6 }, 0)
        .fromTo(cardRefs.current[0], { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.35 }, 0.2)
        .fromTo(cardRefs.current[1], { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.35 }, 0.4)
        .fromTo(cardRefs.current[2], { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.35 }, 0.6)
        .fromTo(footerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.75);
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="py-16 md:py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div ref={cubesRef} className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-full h-full flex items-center justify-center opacity-40">
          <Cubes gridSize={14} maxAngle={60} radius={5} borderStyle="1px solid #2A2A2A" faceColor="#0A0A0A" rippleColor="#FF4D1C" rippleSpeed={1.5} autoAnimate={true} rippleOnClick={false} />
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
        <SectionHeader secCode="SEC-07" numeral="07" title="EXECUTION" subtitle="INITIALIZE YOUR PROTOCOL ENTRY & JOIN THE INSTITUTIONAL NETWORK" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          {[
            { num: '01', title: 'REGISTER NOW', subtitle: 'DEVFOLIO PLATFORM', action: onOpenRegister, btnLabel: 'VIEW', ascii: '   .:::\n .:::::\n  \':::\'' },
            { num: '02', title: 'EVENT TIMELINE', subtitle: 'FULL SCHEDULE & ROADMAP', action: onScrollToTimeline, btnLabel: 'BROWSE', ascii: '  +-------+\n  |  o o  |\n  |   |   |\n  |  ---  |\n  +-------+' },
            { num: '03', title: 'JOIN COMMUNITY', subtitle: 'WHATSAPP GROUP', action: onOpenWhatsApp, btnLabel: 'JOIN', ascii: '    _/\\_\n  /      \\\n (  o  o  )\n  \\  --  /\n    \'--\'' },
          ].map((card, idx) => (
            <div key={idx} ref={el => { cardRefs.current[idx] = el; }} className="bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#FF4D1C] transition-all flex flex-col justify-between p-5 md:p-8 min-h-[300px] md:min-h-[420px] relative group">
              <div className="flex justify-between items-start"><span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF4D1C] shadow-[0_0_6px_#FF4D1C] md:shadow-[0_0_8px_#FF4D1C]" /><span className="font-mono-custom text-[10px] md:text-xs text-[#8A8A8A]">{card.num}</span></div>
              <div className="my-auto py-4 md:py-8 text-center pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                <pre className="font-mono-custom text-[7px] md:text-[9px] text-[#F2F0EB] leading-none inline-block">{card.ascii}</pre>
              </div>
              <div className="text-center mb-5 md:mb-8 border-b border-[#2A2A2A] pb-4 md:pb-6">
                <h3 className="font-display text-lg md:text-2xl uppercase tracking-wider text-[#F2F0EB]">{card.title}</h3>
                <p className="font-mono-custom text-[9px] md:text-xs text-[#8A8A8A] mt-1 tracking-widest uppercase">{card.subtitle}</p>
              </div>
              <button onClick={card.action} className="w-full py-2.5 md:py-3 border border-[#2A2A2A] group-hover:border-[#FF4D1C] text-[#F2F0EB] group-hover:text-[#FF4D1C] font-mono-custom text-[10px] md:text-xs tracking-widest uppercase transition-all flex justify-center items-center gap-1.5 md:gap-2">
                <span>{card.btnLabel}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
        <footer ref={footerRef} className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-[#2A2A2A] text-center relative z-10">
          <div className="font-display text-2xl sm:text-4xl md:text-6xl italic uppercase tracking-wide text-[#F2F0EB]">
            <DecryptedText
              text="WHERE IDEAS FIND THEIR ORIGIN."
              animateOn="view"
              sequential
              revealDirection="center"
              speed={40}
              maxIterations={8}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ.?!0123456789"
              className="text-[#F2F0EB]"
              encryptedClassName="text-[#8A8A8A]/60"
              parentClassName="inline"
            />
          </div>
          <div className="mt-4 md:mt-8 font-mono-custom text-[9px] md:text-xs text-[#8A8A8A] tracking-widest uppercase">COMPUTER SOCIETY OF INDIA · VIT CHENNAI CHAPTER // 2026</div>
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-8 font-mono-custom text-[10px] md:text-xs text-[#8A8A8A]">
            <button onClick={onOpenRegister} className="hover:text-[#FF4D1C] transition-colors">[ DEVFOLIO ]</button>
            <button onClick={onOpenWhatsApp} className="hover:text-[#FF4D1C] transition-colors">[ WHATSAPP ]</button>
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D1C] transition-colors">[ DISCORD ]</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D1C] transition-colors">[ INSTAGRAM ]</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D1C] transition-colors">[ LINKEDIN ]</a>
            <a href="mailto:csi.vitc@gmail.com" className="hover:text-[#FF4D1C] transition-colors">[ EMAIL US ]</a>
          </div>
          <div className="mt-8 md:mt-12 text-[8px] md:text-[10px] font-mono-custom text-[#8A8A8A]/50 tracking-wider">CSI ORIGIN 2026 © ALL RIGHTS RESERVED. DESIGNED FOR HIGH-STAKES INSTITUTIONAL BUILDERS.</div>
        </footer>
      </div>
    </section>
  );
}
