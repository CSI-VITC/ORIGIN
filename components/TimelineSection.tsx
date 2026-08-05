'use client';

import React from 'react';
import { Calendar, Users, Megaphone, CheckCircle2, PlayCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';

const milestones = [
  {
    date: '1 Feb \'26',
    title: 'Registration Starts',
    icon: PlayCircle,
    pos: { x: 10, y: 39.3 },
    align: 'bottom',
  },
  {
    date: '7 Mar \'26',
    title: 'Registration Ends',
    icon: Calendar,
    pos: { x: 30, y: 34.0 },
    align: 'top',
  },
  {
    date: '15 Mar \'26',
    title: 'Announcement of Shortlisted Teams',
    icon: Megaphone,
    pos: { x: 50, y: 50.0 },
    align: 'bottom',
  },
  {
    date: '17 Mar \'26',
    title: 'Team RSVP',
    icon: Users,
    pos: { x: 70, y: 66.0 },
    align: 'top',
  },
  {
    date: '29 Mar \'26',
    title: 'Hackathon Ends',
    icon: CheckCircle2,
    pos: { x: 90, y: 60.7 },
    align: 'bottom',
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 md:py-32 border-b border-[#2A2A2A] relative overflow-hidden bg-[#0A0A0A]">
      
      {/* 1. Subtle Dot-Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff15_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

      {/* 2. Soft Vignette/Glow around the edges to blend the dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeader
          secCode="SEC-03"
          numeral="03"
          title="TIMELINE"
          subtitle="CHRONOLOGICAL ROADMAP FROM REGISTRATION TO FINAL PITCH"
        />

        <div className="mt-20 relative w-full h-[450px] flex items-center justify-center">
          
          {/* Main Track Vector - Gentle Sine Wave */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              viewBox="0 0 1000 300"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2A2A2A" />
                  <stop offset="30%" stopColor="#FF4D1C" />
                  <stop offset="70%" stopColor="#FF4D1C" />
                  <stop offset="100%" stopColor="#2A2A2A" />
                </linearGradient>
              </defs>

              {/* The Smooth Continuous Path */}
              <path
                d="M 0 150 Q 250 50 500 150 T 1000 150"
                fill="none"
                stroke="url(#timeline-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-90"
              />
            </svg>
          </div>

          {/* Milestone Cards Overlay */}
          <div className="absolute inset-0 w-full h-full">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isTop = item.align === 'top';

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{ left: `${item.pos.x}%`, top: `${item.pos.y}%` }}
                >
                  {/* The actual dot sitting exactly on the mathematical curve */}
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-[#0A0A0A] border-2 border-[#FF4D1C] shadow-[0_0_15px_rgba(255,77,28,0.5)] transform -translate-x-1/2 -translate-y-1/2 z-20 transition-transform duration-300 hover:scale-125 hover:bg-[#FF4D1C]" />

                  {/* Top-aligned cards (card above, pin pointing down to dot) */}
                  {isTop ? (
                    <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center pb-2 group">
                      {/* Premium Card */}
                      <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-[#050505]/95 backdrop-blur-md border border-[#2A2A2A] shadow-xl min-w-[150px] max-w-[180px] text-center transition-all duration-300 group-hover:border-[#FF4D1C]/50 group-hover:-translate-y-2">
                        <div className="flex items-center justify-center gap-1.5 text-[#FF4D1C] text-[10px] uppercase font-bold tracking-widest border-b border-[#2A2A2A] w-full pb-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                        </div>
                        <h4 className="text-[13px] font-semibold text-[#F2F0EB] uppercase tracking-wide leading-tight pt-1">
                          {item.title}
                        </h4>
                      </div>
                      
                      {/* Flawless Connecting Pin connecting card precisely to the node */}
                      <div className="w-[1px] h-10 bg-gradient-to-b from-[#2A2A2A] to-[#FF4D1C] transition-all duration-300 group-hover:h-12" />
                    </div>
                  ) : (
                    /* Bottom-aligned cards (pin pointing up to dot, card below) */
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center pt-2 group">
                      {/* Flawless Connecting Pin connecting card precisely to the node */}
                      <div className="w-[1px] h-10 bg-gradient-to-b from-[#FF4D1C] to-[#2A2A2A] transition-all duration-300 group-hover:h-12" />
                      
                      {/* Premium Card */}
                      <div className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-[#050505]/95 backdrop-blur-md border border-[#2A2A2A] shadow-xl min-w-[150px] max-w-[180px] text-center transition-all duration-300 group-hover:border-[#FF4D1C]/50 group-hover:translate-y-2">
                        <div className="flex items-center justify-center gap-1.5 text-[#FF4D1C] text-[10px] uppercase font-bold tracking-widest border-b border-[#2A2A2A] w-full pb-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                        </div>
                        <h4 className="text-[13px] font-semibold text-[#F2F0EB] uppercase tracking-wide leading-tight pt-1">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
