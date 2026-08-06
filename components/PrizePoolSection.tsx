'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';
import { motion, AnimatePresence } from 'motion/react';

export default function PrizePoolSection() {
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prizes = [
    { title: 'TOTAL PRIZE POOL', amount: '$2,000 USD', category: 'OVERALL CASH PRIZE', perks: ['$2,000 Total Cash Prize Pool to be distributed among winners.'], isOrangeFill: true },
    { title: 'OVERALL WINNING TEAM', amount: 'PRO TIER (3 MONTHS)', category: 'ELEVENLABS', perks: ['Each team member receives 3 months of our Pro tier', '$297 value / team member', '600k credits/mo'], isRustFill: true },
    { title: 'BEST ELEVENLABS PROJECT', amount: 'SCALE TIER (3 MONTHS)', category: 'ELEVENLABS TRACK', perks: ['Each team member receives 3 months of our Scale tier', '$897 value / team member', '1.8M credits/mo'], isOrangeFill: false },
    { title: 'ALL PARTICIPANTS', amount: 'CREATOR TIER (1 MONTH)', category: 'ELEVENLABS PERK', perks: ['1 month free of our Creator tier', 'Normally $22/month', '131k credits'], isOrangeFill: false },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 30%', scrub: 0.8 } })
        .fromTo(rowRefs.current[0], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4 }, 0)
        .fromTo(rowRefs.current[1], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4 }, 0.25)
        .fromTo(rowRefs.current[2], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4 }, 0.50)
        .fromTo(rowRefs.current[3], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4 }, 0.75);
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="prize" className="py-16 md:py-24 border-b border-[#2A2A2A] relative overflow-hidden">
      <AsciiBackground variant="matrix" opacity={0.08} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
        <SectionHeader secCode="SEC-02" numeral="02" title="PRIZE POOL" subtitle="CUMULATIVE NATIONAL REWARDS & INSTITUTIONAL BOUNTIES" />
        <div className="w-full border-t border-[#2A2A2A] mt-6 md:mt-8">
          {prizes.map((prize, idx) => {
            let bgStyle = 'bg-[#0A0A0A] text-[#F2F0EB] hover:bg-[#4A1E0F]/40';
            let titleColor = 'text-[#F2F0EB] group-hover:text-[#FF4D1C]';
            let amountColor = 'text-[#8A8A8A] group-hover:text-[#F2F0EB]';
            if (prize.isOrangeFill) { bgStyle = 'bg-[#FF4D1C] text-[#0A0A0A]'; titleColor = 'text-[#0A0A0A] font-bold'; amountColor = 'text-[#0A0A0A] font-semibold'; }
            else if (prize.isRustFill) { bgStyle = 'bg-[#4A1E0F] text-[#F2F0EB]'; titleColor = 'text-[#FF4D1C] font-semibold'; amountColor = 'text-[#F2F0EB]'; }
            return (
              <div key={idx} ref={el => { rowRefs.current[idx] = el; }} onClick={() => setSelectedPrize(idx)} className={`group flex flex-col md:flex-row md:items-center justify-between py-5 md:py-8 px-4 md:px-6 border-b border-[#2A2A2A] transition-all duration-200 cursor-pointer ${bgStyle} relative`}>
                <div className="flex items-baseline gap-3 md:gap-4"><span className="font-mono-custom text-[10px] md:text-xs opacity-60">0{idx + 1}</span><h3 className={`font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide transition-colors ${titleColor}`}>{prize.title}</h3></div>
                <div className="mt-3 md:mt-0 flex items-center gap-4 md:gap-6"><span className="font-mono-custom text-[10px] md:text-xs uppercase tracking-[0.15em] opacity-80 border border-current px-2 py-0.5 md:px-2.5 md:py-1">{prize.category}</span><span className={`font-mono-custom text-xs md:text-lg tracking-wider ${amountColor}`}>{prize.amount}</span><span className="font-mono-custom text-xs opacity-80 group-hover:translate-x-1 transition-transform">→</span></div>
                <div className="absolute top-2 right-2 text-current opacity-40 font-mono-custom text-xs">+</div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 md:mt-8 font-body-custom text-xs md:text-base text-[#8A8A8A] text-center italic">* All finalists receive official hard-copy certificates of participation, exclusive CSI ORIGIN 2026 merchandise kits, and developer cloud credits.</p>
      </div>
      <AnimatePresence>
        {selectedPrize !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6" onClick={() => setSelectedPrize(null)}>
            <motion.div initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }} onClick={e => e.stopPropagation()} className="bg-[#121212] border border-[#FF4D1C] p-6 md:p-8 max-w-lg w-full relative shadow-[0_0_30px_rgba(255,77,28,0.2)] mx-4">
              <div className="flex justify-between items-center mb-4 md:mb-6 border-b border-[#2A2A2A] pb-3 md:pb-4"><div><span className="font-mono-custom text-[10px] md:text-xs text-[#FF4D1C] uppercase">PRIZE BREAKDOWN // {prizes[selectedPrize].category}</span><h3 className="font-display text-2xl md:text-3xl text-[#F2F0EB] mt-1">{prizes[selectedPrize].title}</h3></div><button onClick={() => setSelectedPrize(null)} className="font-mono-custom text-xs text-[#FF4D1C] hover:underline">[ CLOSE ]</button></div>
              <div className="mb-4 md:mb-6 font-mono-custom text-lg md:text-xl text-[#FF4D1C] glow-orange-text">{prizes[selectedPrize].amount}</div>
              <div className="space-y-2 md:space-y-3 font-mono-custom text-[10px] md:text-xs text-[#F2F0EB]"><div className="text-[#8A8A8A] uppercase tracking-wider mb-1 md:mb-2">INCLUDED PERKS:</div>{prizes[selectedPrize].perks.map((perk, i) => (<div key={i} className="flex items-center gap-2 md:gap-3 p-1.5 md:p-2 bg-[#0A0A0A] border border-[#2A2A2A]"><span className="w-1.5 h-1.5 bg-[#FF4D1C]" /><span>{perk}</span></div>))}</div>
              <div className="mt-6 md:mt-8 pt-3 md:pt-4 border-t border-[#2A2A2A] flex justify-between items-center"><span className="font-mono-custom text-[9px] md:text-[10px] text-[#8A8A8A]">CSI ORIGIN 2026 TREASURY</span><button onClick={() => setSelectedPrize(null)} className="px-3 md:px-4 py-1.5 md:py-2 bg-[#FF4D1C] text-[#0A0A0A] font-mono-custom text-[10px] md:text-xs font-bold">DISMISS</button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
