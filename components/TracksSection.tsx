'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';

interface TracksSectionProps {
  onSelectTrack: (trackName: string) => void;
}

const TRACKS_DATA = [
  {
    code: 'TRACK-01',
    category: 'FINTECH',
    name: 'FINTECH',
    desc: 'Architect next-generation decentralized payments, automated clearinghouses, cross-chain liquidity rails, and algorithmic financial instruments.',
    asciiVariant: 'globe' as const,
  },
  {
    code: 'TRACK-02',
    category: 'OPEN INNOVATION',
    name: 'OPEN INNOVATION',
    desc: 'Solve unconstrained challenges across any domain. Build innovative SaaS platforms, secure systems, or revolutionary AI architectures.',
    asciiVariant: 'cube' as const,
  },
];

export default function TracksSection({ onSelectTrack }: TracksSectionProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="tracks" className="py-24 md:py-32 border-b border-[#2A2A2A] relative overflow-hidden bg-[#070707]">
      {/* Background removed as requested */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          secCode="SEC-01"
          numeral="01"
          title="TRACKS"
          subtitle="EXPLORE THE SPECIALIZED HACKING DOMAINS"
        />

        {/* 2-Column Grid Matching the Reference Image (Writing / Dragonfly Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-12">
          {TRACKS_DATA.map((track, idx) => (
            <div
              key={track.code}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onSelectTrack(track.name)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Top Graphic Card Frame with ASCII Canvas Backdrop */}
              <div className="relative w-full h-[280px] sm:h-[340px] bg-[#0A0A0A] border border-[#2A2A2A] group-hover:border-[#FF4D1C]/60 transition-colors overflow-hidden flex items-center justify-center">
                {/* Category Badge top left */}
                <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-[#121212]/90 border border-[#2A2A2A] font-mono-custom text-[10px] text-[#8A8A8A] group-hover:text-[#FF4D1C] group-hover:border-[#FF4D1C]/40 transition-colors uppercase tracking-widest">
                  {track.code} // {track.category}
                </div>

                {/* Micro corner indicators */}
                <div className="absolute top-3 right-3 z-20 font-mono-custom text-xs text-[#8A8A8A]/40 group-hover:text-[#FF4D1C] transition-colors">
                  +
                </div>

                {/* Embedded ASCII Canvas Artwork */}
                <AsciiBackground
                  variant={track.asciiVariant}
                  opacity={hoveredIdx === idx ? 0.35 : 0.18}
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute bottom-4 right-4 z-20 font-mono-custom text-[10px] text-[#8A8A8A] group-hover:text-[#F2F0EB] bg-[#070707]/80 px-3 py-1 border border-[#2A2A2A] group-hover:border-[#FF4D1C] transition-all flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
                  <span>VIEW DETAILS</span>
                  <span>→</span>
                </div>
              </div>

              {/* Title & Metadata below Artwork (Exact match to Dragonfly Writing layout) */}
              <div className="mt-5 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-[#FF4D1C]/60 group-hover:bg-[#FF4D1C] transition-colors" />
                  <h3 className="font-mono-custom text-sm sm:text-base font-semibold uppercase text-[#F2F0EB] group-hover:text-[#FF4D1C] transition-colors tracking-wide">
                    {track.name}
                  </h3>
                </div>

                <p className="font-body-custom text-xs sm:text-sm text-[#8A8A8A] leading-relaxed line-clamp-2 pl-3.5 border-l border-[#2A2A2A] group-hover:border-[#FF4D1C]/40 transition-colors">
                  {track.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
