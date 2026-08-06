'use client';

import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';
import CountdownTimer from './CountdownTimer';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);
  const factRefs = useRef<(HTMLDivElement | null)[]>([]);

  const keyFacts = [
    { label: 'DURATION', value: '24 HOURS', sub: 'Non-stop hacking' },
    { label: 'ELIGIBILITY', value: 'NATIONAL', sub: 'VIT & Non-VIT teams' },
    { label: 'VENUE', value: 'VIT CHENNAI', sub: 'On-campus final' },
    { label: 'FEE', value: 'FREE', sub: 'Food & swag provided' },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 30%', scrub: 0.8 }
      });
      tl.fromTo(countdownRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 0)
        .fromTo(factRefs.current[0], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3 }, 0.25)
        .fromTo(factRefs.current[1], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3 }, 0.40)
        .fromTo(factRefs.current[2], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3 }, 0.55)
        .fromTo(factRefs.current[3], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3 }, 0.70);
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 border-b border-[#2A2A2A] relative overflow-hidden bg-[#070707]">
      <AsciiBackground variant="dots" opacity={0.05} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
        <div ref={countdownRef} className="mb-10 md:mb-14"><CountdownTimer /></div>
        <SectionHeader secCode="SEC-02" numeral="02" title="ABOUT US" subtitle="COMPUTER SOCIETY OF INDIA · VIT CHENNAI" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center mt-8 md:mt-10">
          <div className="lg:col-span-6">
            <h3 className="font-sans font-bold text-xl md:text-3xl text-[#F2F0EB] uppercase tracking-wide leading-tight">Every breakthrough has an origin.</h3>
            <p className="mt-3 md:mt-4 font-body-custom text-sm md:text-base text-[#8A8A8A] leading-relaxed">CSI ORIGIN 2026 is Computer Society of India (CSI) VIT Chennai's premier national 24-hour hackathon. We bring together developers, quants, and systems engineers across India to build fault-tolerant financial systems, smart contract infrastructure, and high-frequency algorithms under real-world constraints.</p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 md:gap-4">
            {keyFacts.map((fact, idx) => (
              <div key={idx} ref={el => { factRefs.current[idx] = el; }} className="p-3 md:p-5 bg-[#0A0A0A] border border-[#222222] hover:border-[#FF4D1C]/60 transition-colors group relative">
                <div className="flex justify-between items-center mb-1"><span className="font-mono-custom text-[9px] md:text-[10px] text-[#8A8A8A] tracking-widest uppercase">{fact.label}</span><div className="w-1 h-1 bg-[#FF4D1C] opacity-60 group-hover:opacity-100" /></div>
                <div className="font-sans font-bold text-lg md:text-2xl text-[#F2F0EB] group-hover:text-[#FF4D1C] transition-colors tracking-wide">{fact.value}</div>
                <div className="font-mono-custom text-[10px] md:text-[11px] text-[#8A8A8A] mt-1">{fact.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
