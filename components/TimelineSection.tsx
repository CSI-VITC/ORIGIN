'use client';

import React from 'react';
import { Calendar, Users, Megaphone, CheckCircle2, PlayCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';

import { Timeline } from '@/components/ui/timeline';

const timelineData = [
  {
    title: "1 Feb '26",
    content: (
      <div>
        <h4 className="font-display text-2xl mb-2 text-[#F2F0EB] uppercase">Registration Starts</h4>
        <p className="font-mono-custom text-[#8A8A8A] text-xs md:text-sm font-normal mb-8">
          The portal opens. Gather your team of innovators, developers, and designers.
        </p>
      </div>
    ),
  },
  {
    title: "7 Mar '26",
    content: (
      <div>
        <h4 className="font-display text-2xl mb-2 text-[#F2F0EB] uppercase">Registration Ends</h4>
        <p className="font-mono-custom text-[#8A8A8A] text-xs md:text-sm font-normal mb-8">
          We stop accepting new entries. Time to review the profiles and GitHub repositories.
        </p>
      </div>
    ),
  },
  {
    title: "15 Mar '26",
    content: (
      <div>
        <h4 className="font-display text-2xl mb-2 text-[#F2F0EB] uppercase">Announcement of Shortlisted Teams</h4>
        <p className="font-mono-custom text-[#8A8A8A] text-xs md:text-sm font-normal mb-4">
          The best teams are selected to compete in the main event.
        </p>
        <div className="mb-8 font-mono-custom text-[#8A8A8A]">
          <div className="flex gap-2 items-center text-xs md:text-sm mb-2">
            <span className="text-[#FF4D1C]">✦</span> Official Invites Sent
          </div>
          <div className="flex gap-2 items-center text-xs md:text-sm mb-2">
            <span className="text-[#FF4D1C]">✦</span> Devfolio Dashboard Updated
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "17 Mar '26",
    content: (
      <div>
        <h4 className="font-display text-2xl mb-2 text-[#F2F0EB] uppercase">Team RSVP</h4>
        <p className="font-mono-custom text-[#8A8A8A] text-xs md:text-sm font-normal mb-8">
          Selected teams must confirm their attendance for the offline hackathon.
        </p>
      </div>
    ),
  },
  {
    title: "29 Mar '26",
    content: (
      <div>
        <h4 className="font-display text-2xl mb-2 text-[#F2F0EB] uppercase">Hackathon Ends</h4>
        <p className="font-mono-custom text-[#8A8A8A] text-xs md:text-sm font-normal mb-8">
          The 48-hour grind concludes. Final pitches and closing ceremony.
        </p>
      </div>
    ),
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative overflow-hidden bg-[#0A0A0A]">
      {/* 1. Subtle Dot-Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff15_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />
      {/* 2. Soft Vignette/Glow around the edges to blend the dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none z-0" />
      
      <div className="relative z-10 w-full">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
