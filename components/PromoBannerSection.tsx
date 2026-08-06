'use client';

import SplitFlapText from './reactbits/SplitFlapText';

export default function PromoBannerSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#070707] border-y border-[#2A2A2A] overflow-hidden">
      {/* Ambient orange glow behind the board */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#FF4D1C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Top accent line */}
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_10px_#FF4D1C]" />
          <span className="font-mono-custom text-[10px] text-[#8A8A8A] tracking-[0.3em] uppercase">SIGNAL INCOMING</span>
          <span className="w-2 h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_10px_#FF4D1C]" />
        </div>

        <SplitFlapText
          words={[
            'HACK THE FUTURE',
            '24 HOURS OF CODE',
            'BUILD. SHIP. WIN.',
            'YOUR ORIGIN STARTS',
            'INNOVATE AT SCALE',
            'CODE MEETS CAPITAL'
          ]}
          flipDuration={0.12}
          stagger={0.06}
          cycleDelay={2800}
          charset="alphanumeric"
          flipsPerChar={8}
          tileColor="#0A0A0A"
          textColor="#FF4D1C"
          tileRadius={6}
          gap={5}
          fontSize={48}
          loop
          padTo={18}
        />
      </div>
    </section>
  );
}
