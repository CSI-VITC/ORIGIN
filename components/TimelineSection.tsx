'use client';

import React, { useRef, useEffect } from 'react';
import { Calendar, Users, Megaphone, CheckCircle2, PlayCircle } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import SectionHeader from './SectionHeader';

const milestones = [
  { date: "1 Feb '26", title: 'Registration Opens', desc: 'Applications go live on Devfolio. Submit your team and idea.', icon: PlayCircle, pos: { x: 10, y: 42 }, align: 'bottom' },
  { date: "7 Mar '26", title: 'Registration Closes', desc: 'Final call. All entries must be submitted before midnight.', icon: Calendar, pos: { x: 30, y: 36 }, align: 'top' },
  { date: "15 Mar '26", title: 'Shortlist Announced', desc: 'Top teams selected. Evaluation rubrics released alongside.', icon: Megaphone, pos: { x: 50, y: 48 }, align: 'bottom' },
  { date: "17 Mar '26", title: 'Team RSVP', desc: 'Confirmed teams lock in. Mentorship assignments begin.', icon: Users, pos: { x: 70, y: 60 }, align: 'top' },
  { date: "29 Mar '26", title: 'Hackathon Day', desc: '24 hours. One stage. Build something that matters.', icon: CheckCircle2, pos: { x: 90, y: 54 }, align: 'bottom' },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top top', end: '+=2000', pin: true, scrub: 1 }
      });

      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        tl.to(pathRef.current, { strokeDashoffset: 0, duration: 0.55 }, 0);
      }

      // Each milestone reveals at its x-position along the path
      // pos.x goes 10, 30, 50, 70, 90 — map directly to timeline positions
      milestones.forEach((m, i) => {
        const t = m.pos.x / 100 * 0.55; // path completes at 55% of scroll
        tl.fromTo(glowRef.current, { opacity: 0 }, { opacity: 1, duration: 0.02 }, t)
          .fromTo(glowRef.current, { opacity: 0 }, { duration: 0.05 }, t + 0.03);
        tl.fromTo(dotRefs.current[i], { scale: 0, opacity: 0 }, { scale: 1.3, opacity: 1, duration: 0.06 }, t)
          .fromTo(dotRefs.current[i], { scale: 1.3 }, { scale: 1, duration: 0.04 }, t + 0.06);
        tl.fromTo(cardRefs.current[i], { opacity: 0, y: m.align === 'bottom' ? 12 : -12 }, { opacity: 1, y: 0, duration: 0.10 }, t + 0.06);
      });
    });

    mm.add('(max-width: 767px)', () => {
      // Mobile: simple staggered reveal in flow
      gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: section, start: 'top 85%', end: 'bottom 20%', scrub: 0.8 }
        });
        milestones.forEach((_, i) => {
          tl.fromTo(cardRefs.current[i], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.2 }, i * 0.18);
          if (dotRefs.current[i]) {
            tl.fromTo(dotRefs.current[i], { scale: 0 }, { scale: 1, duration: 0.15 }, i * 0.18);
          }
        });
      }, section);
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="timeline" className="py-16 md:py-24 border-b border-[#2A2A2A] relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff15_1px,_transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full">
        <SectionHeader secCode="SEC-03" numeral="03" title="TIMELINE" subtitle="CHRONOLOGICAL ROADMAP FROM REGISTRATION TO FINAL PITCH" />

        {/* Mobile: stacked vertical cards */}
        <div className="md:hidden mt-8 space-y-4">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} ref={el => { cardRefs.current[index] = el; }} className="flex items-start gap-4 p-4 bg-[#050505]/95 backdrop-blur-md border border-[#2A2A2A] rounded-lg border-l-[#FF4D1C] border-l-2">
                <div ref={el => { dotRefs.current[index] = el; }} className="w-3 h-3 mt-1 rounded-full bg-[#FF4D1C] shadow-[0_0_10px_rgba(255,77,28,0.5)] shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[#FF4D1C] text-[11px] uppercase font-bold tracking-widest mb-1.5"><Icon className="w-3.5 h-3.5" /><span>{item.date}</span></div>
                  <h4 className="text-sm font-semibold text-[#F2F0EB] uppercase tracking-wide mb-1">{item.title}</h4>
                  <p className="text-[11px] text-[#8A8A8A] font-body-custom leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: curve + positioned overlay */}
        <div className="hidden md:block mt-12 relative w-full h-[450px]">
          {/* Traveling orange glow that sweeps along the path */}
          <div ref={glowRef} className="absolute inset-0 pointer-events-none z-10 opacity-0"
            style={{
              background: 'radial-gradient(ellipse 180px 80px at 10% 42%, rgba(255,77,28,0.25), transparent 70%)',
            }}
          />

          <div className="absolute inset-0 w-full h-full">
            <svg viewBox="0 0 1000 300" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2A2A2A" /><stop offset="25%" stopColor="#FF4D1C" /><stop offset="75%" stopColor="#FF4D1C" /><stop offset="100%" stopColor="#2A2A2A" />
                </linearGradient>
              </defs>
              <path ref={pathRef} d="M 0 150 Q 250 80 500 150 T 1000 150" fill="none" stroke="url(#timeline-gradient)" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="absolute inset-0 w-full h-full">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isTop = item.align === 'top';
              return (
                <div key={index} className="absolute" style={{ left: `${item.pos.x}%`, top: `${item.pos.y}%` }}>
                  <div ref={el => { dotRefs.current[index] = el; }} className="absolute w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#FF4D1C] shadow-[0_0_18px_rgba(255,77,28,0.6)] transform -translate-x-1/2 -translate-y-1/2 z-20 transition-transform duration-300 hover:scale-150 hover:bg-[#FF4D1C] hover:shadow-[0_0_25px_rgba(255,77,28,0.8)]" />
                  <div ref={el => { cardRefs.current[index] = el; }}>
                    {isTop ? (
                      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center pb-2 group">
                        <div className="flex flex-col items-center gap-1.5 p-3.5 rounded-lg bg-[#050505]/95 backdrop-blur-md border border-[#2A2A2A] shadow-xl min-w-[170px] max-w-[200px] text-center transition-all duration-300 group-hover:border-[#FF4D1C]/50 group-hover:-translate-y-2">
                          <div className="flex items-center justify-center gap-1.5 text-[#FF4D1C] text-[10px] uppercase font-bold tracking-widest border-b border-[#2A2A2A] w-full pb-1.5"><Icon className="w-3.5 h-3.5" /><span>{item.date}</span></div>
                          <h4 className="text-[13px] font-semibold text-[#F2F0EB] uppercase tracking-wide leading-tight">{item.title}</h4>
                          <p className="text-[10px] text-[#8A8A8A] font-body-custom leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="w-[1px] h-8 bg-gradient-to-b from-[#2A2A2A] to-[#FF4D1C] transition-all duration-300 group-hover:h-10" />
                      </div>
                    ) : (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center pt-2 group">
                        <div className="w-[1px] h-8 bg-gradient-to-b from-[#FF4D1C] to-[#2A2A2A] transition-all duration-300 group-hover:h-10" />
                        <div className="flex flex-col items-center gap-1.5 p-3.5 rounded-lg bg-[#050505]/95 backdrop-blur-md border border-[#2A2A2A] shadow-xl min-w-[170px] max-w-[200px] text-center transition-all duration-300 group-hover:border-[#FF4D1C]/50 group-hover:translate-y-2">
                          <div className="flex items-center justify-center gap-1.5 text-[#FF4D1C] text-[10px] uppercase font-bold tracking-widest border-b border-[#2A2A2A] w-full pb-1.5"><Icon className="w-3.5 h-3.5" /><span>{item.date}</span></div>
                          <h4 className="text-[13px] font-semibold text-[#F2F0EB] uppercase tracking-wide leading-tight">{item.title}</h4>
                          <p className="text-[10px] text-[#8A8A8A] font-body-custom leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll hint at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
            <span className="font-mono-custom text-[9px] text-[#8A8A8A] tracking-[0.2em] uppercase">DRAG TO REVEAL</span>
            <div className="w-4 h-0.5 bg-[#FF4D1C]/40 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
