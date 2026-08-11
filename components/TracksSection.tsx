'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';

interface TracksSectionProps { onSelectTrack: (trackName: string) => void; }

const asciiFintech = `                                                                                                              
                                                                                                              
                                                                                                              
                                                                                                              
                                                      +++++-..                                                
                                                      + .-++++++-.                                            
                                                      +.     .-+++-                                           
                                                        .-+-.  +++-                                           
                                                          +++--+-.                                            
                                                .-++++-.. +++.                                                
                                              -++++++++++#+++-                                                
                                            -++++++++++++#+++++++-.                                           
                                           +++##++++++++++++++#+++++++-.                                      
                                         .+++++#++++++++####+++++++#++++++++.                                 
                                         -++++#++++++++##########+++++++#+++++##.                             
                                        .+++++++++++++################++++++++++.                             
                                       .-#++++++++++++###############+++#+++++++.                             
                                      -+++++++#+++++++++#++#########++++++++++++.                             
                                    -++++#+++++++++++++++++++#++###++++++++++++++.                            
                                  -+--+++++++++++++++++++++++++++++++++++++++++++.                            
                                .++++++++--++++++++++-.-+++++++++++++++++++++++++.                            
                              .++++--++-+++++---+++-.-+++- .++++++++#++++++++++++.                            
                            .+++---++++--++--+++++--#++- -+++- .+++++++++++++++++.                            
                           -#+++++++---++-++++++-++-+-.-+++. .+++++++++++++++++++.                            
                           -+++++#++++++#+-+++-+--+-.-+++. .+++++++++++#+++++++++#+++-..                      
                           -++++++++++#+++++++.-+--++++. -+++++++++#++++#+++++#+++++++#+.                     
                       .++++##+++++++++++++#+++++++++---+++++++#+++++++#++#+++++++#+++++.                     
                     .++##++++++++#+++++++++++++##+++++++++#+++++++#++#+++++++#+++++++++.                     
                     .+++#++++#++++++++#++++++++++++++##++++++++++++++++++#+++++++++++++.                     
                     .++++++++#++++#++++++++#++++++++++++++++++#+++++++#+++++++++++++++-                      
                     .+++++++++++++#++++#++++++++#+++++++++#+++++++#+++++++++++++++-.                         
                      -+++++++++++++++++#+++++++++++++#+++++++++++++++++++++++++.                             
                          .-++++++++++++++++++++++++++++++++++++++++++++++++-.                                
                               .-+++++++++++++++++++++++++++++++++++++++-.                                    
                                    .-++++++++++++++++++++++++++++++-.                                        
                                         .-++++++++++++++++++++++-.                                           
                                              .-+++++++++++++-.                                               
                                                   .-++++-.                                                   
                                                                                                              
                                                                                                              
                                                                                                              
                                                                                                              `;

const asciiInnovation = `++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#++++
+++++++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#++++++++++
++++++++++++++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#++#+++#+++++#++#++#++#++#++#++#++#++#++#+++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++#####+#++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++#++#++#++#++#++#++#++#++#++#++#++#++#+++++#+++#######++++++#++#++#++#++#++#++#++#+#+++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++#+++#++#++++#+++##+++++++++++++++++++++++++++#++++++++++++++++++
++++++++++++++++++++#++#++#++#++#++#++#++#++#++#++#+######+++++++#++##++++++++#++#++#++#++#++#++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++#######++#++++#++#+++#+++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++#++#++#++#++#++#++#++#++#######++++++++##++#++++#+++#++#++#++#++#++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++#####+++#++#++++++++++++#+++++++++#++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++#++#++#++#++#++#++#++###########++++++#+++#++#+++++#++#++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++###################++#++++++++#+++++#+++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++#++#++#++#+###################++++++#++#+++++#++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++###############+##++++#++++++++#++#+++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++#++#++##############++++++++++#++#++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++#++#####+#########+#+++#++++++++#+++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++###########################++#++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++#################################++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++###################################+++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++#####################################++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++#####################################++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++##################################++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++###############################+++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++##############################+++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++##############################+++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++##############################+++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++####+################################+++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++###+###+#####################################+##++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++###+####+##+#################################+###+####+++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++###+##+####+#+###############################+###+#+#+++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++##+###+#####+##+########################+###+###++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++##+#+##+####################+##+###+#+++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`;

const TRACKS_DATA = [
  { code: 'TRACK-01', category: 'FINTECH', name: 'Agentic Finance', desc: 'Build autonomous AI-powered financial systems capable of reasoning, planning, and executing complex financial workflows.', ascii: asciiFintech },
  { code: 'TRACK-02', category: 'FINTECH', name: 'Web3 & DeFi', desc: 'Build decentralized and programmable financial solutions using blockchain, smart contracts, or decentralized infrastructure.', ascii: asciiFintech },
  { code: 'TRACK-03', category: 'FINTECH', name: 'Supply Chain Finance', desc: 'Build intelligent financial solutions for supply chains, addressing credit, trade finance, working capital, payments, or supplier risk.', ascii: asciiFintech },
  { code: 'TRACK-04', category: 'FINTECH', name: 'FinSec & Cyber Finance', desc: 'Build solutions that detect, prevent, investigate, or respond to financial cyber threats, fraud, and digital risks.', ascii: asciiFintech },
  { code: 'TRACK-05', category: 'OPEN INNOVATION', name: 'Open Innovation in FinTech', desc: 'Build an innovative solution that reimagines any financial problem, process, product, or ecosystem.', ascii: asciiInnovation },
];

export default function TracksSection({ onSelectTrack }: TracksSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'bottom 30%', scrub: 0.8 }
      });
      cardRefs.current.forEach((el, index) => {
        if (el) {
          const direction = index % 2 === 0 ? -40 : 40;
          tl.fromTo(el, { opacity: 0, x: direction }, { opacity: 1, x: 0, duration: 0.8 }, index * 0.1);
        }
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tracks" className="py-20 md:py-28 border-b border-[#2A2A2A] relative overflow-hidden bg-[#070707]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
        <SectionHeader secCode="SEC-01" numeral="01" title="TRACKS" subtitle="EXPLORE THE SPECIALIZED HACKING DOMAINS" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10">
          {TRACKS_DATA.map((track, idx) => (
            <div key={track.code} ref={el => { cardRefs.current[idx] = el; }} onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)} onClick={() => onSelectTrack(track.name)} className="group cursor-pointer flex flex-col">
              <div className="relative w-full h-[220px] sm:h-[300px] md:h-[340px] bg-[#0A0A0A] border border-[#2A2A2A] group-hover:border-[#FF4D1C]/60 transition-colors overflow-hidden flex items-center justify-center">
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20 px-2 py-0.5 md:px-2.5 md:py-1 bg-[#121212]/90 border border-[#2A2A2A] font-mono-custom text-[9px] md:text-[10px] text-[#8A8A8A] group-hover:text-[#FF4D1C] group-hover:border-[#FF4D1C]/40 transition-colors uppercase tracking-widest">{track.code} // {track.category}</div>
                <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20 font-mono-custom text-xs text-[#8A8A8A]/40 group-hover:text-[#FF4D1C] transition-colors">+</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity">
                  <pre className="font-mono-custom text-[3px] sm:text-[3.5px] md:text-[4px] text-[#F2F0EB] leading-[1.1] inline-block pointer-events-none">
                    {track.ascii}
                  </pre>
                </div>
              </div>
              <div className="mt-4 md:mt-5 flex flex-col">
                <div className="flex items-center gap-2 mb-1.5 md:mb-2"><span className="w-1.5 h-1.5 bg-[#FF4D1C]/60 group-hover:bg-[#FF4D1C] transition-colors" /><h3 className="font-mono-custom text-sm md:text-base font-semibold uppercase text-[#F2F0EB] group-hover:text-[#FF4D1C] transition-colors tracking-wide">{track.name}</h3></div>
                <p className="font-body-custom text-xs md:text-sm text-[#8A8A8A] leading-relaxed line-clamp-2 pl-3 md:pl-3.5 border-l border-[#2A2A2A] group-hover:border-[#FF4D1C]/40 transition-colors">{track.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
