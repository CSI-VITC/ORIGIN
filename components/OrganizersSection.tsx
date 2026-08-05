'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';
import Image from 'next/image';

interface Organizer {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
}

export default function OrganizersSection() {
  const [activeBio, setActiveBio] = useState<string | null>(null);

  const organizers: Organizer[] = [
    {
      id: 'org-1',
      name: 'DR. V. R. SUBHASHINI',
      role: 'FACULTY COORDINATOR',
      department: 'CSI VIT CHENNAI',
      bio: 'Leading research initiatives in distributed systems and institutional computing. Faculty Lead for CSI Chapter at VIT Chennai.',
      image: 'https://picsum.photos/seed/csi_coord1/600/800',
    },
    {
      id: 'org-2',
      name: 'ARAVIND S. KUMAR',
      role: 'PRESIDENT',
      department: 'CSI STUDENT CHAPTER',
      bio: 'Systems architect specializing in high-throughput financial protocols and low-latency network infrastructure.',
      image: 'https://picsum.photos/seed/csi_pres/600/800',
    },
    {
      id: 'org-3',
      name: 'MEERA RAMAKRISHNAN',
      role: 'VICE PRESIDENT',
      department: 'TECHNICAL OPERATIONS',
      bio: 'Quant researcher and algorithmic trading enthusiast leading technical problem curation for ORIGIN 2026.',
      image: 'https://picsum.photos/seed/csi_vp/600/800',
    },
    {
      id: 'org-4',
      name: 'ROHIT VERMA',
      role: 'TECHNICAL LEAD',
      department: 'INFRASTRUCTURE & SECURITY',
      bio: 'Smart contract security specialist auditing zero-knowledge proof implementations and automated market makers.',
      image: 'https://picsum.photos/seed/csi_tech/600/800',
    },
    {
      id: 'org-5',
      name: 'PRIYA DESHMUKH',
      role: 'OPERATIONS HEAD',
      department: 'EVENT LOGISTICS',
      bio: 'Managing nationwide university outreach, Devfolio platform synchronization, and campus infrastructure.',
      image: 'https://picsum.photos/seed/csi_ops/600/800',
    },
    {
      id: 'org-6',
      name: 'KARTIK SUNDARAM',
      role: 'DESIGN & MEDIA LEAD',
      department: 'EDITORIAL ARCHITECTURE',
      bio: 'Crafting institutional visual aesthetics, terminal graphics, and digital communications for CSI ORIGIN.',
      image: 'https://picsum.photos/seed/csi_design/600/800',
    },
    {
      id: 'org-7',
      name: 'ANANYA CHATTERJEE',
      role: 'SPONSORSHIP LEAD',
      department: 'CORPORATE RELATIONS',
      bio: 'Securing tier-1 venture capital partnerships, developer bounty grants, and corporate mentorship channels.',
      image: 'https://picsum.photos/seed/csi_spon/600/800',
    },
    {
      id: 'org-8',
      name: 'ADITYA REDDY',
      role: 'JUDGING COORDINATOR',
      department: 'EVALUATION BENCH',
      bio: 'Curating double-blind evaluation protocols, technical rubric validation, and jury coordination.',
      image: 'https://picsum.photos/seed/csi_judge/600/800',
    },
  ];

  return (
    <section id="organizers" className="py-24 md:py-32 border-b border-[#2A2A2A] relative overflow-hidden">
      <AsciiBackground variant="cube" opacity={0.08} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          secCode="SEC-04"
          numeral="04"
          title="ORGANIZERS"
          subtitle="COMPUTER SOCIETY OF INDIA · VIT CHENNAI CORE EXECUTIVE TEAM"
        />

        {/* 4-Column Grid of Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {organizers.map((org) => {
            const isHighlighted = activeBio === org.id;

            return (
              <div
                key={org.id}
                onClick={() => setActiveBio(activeBio === org.id ? null : org.id)}
                className={`group relative border transition-all duration-300 cursor-pointer overflow-hidden aspect-[3/4] flex flex-col justify-between p-6 ${
                  isHighlighted
                    ? 'bg-[#FF4D1C] border-[#FF4D1C] text-[#0A0A0A]'
                    : 'bg-[#121212] border-[#2A2A2A] text-[#F2F0EB] hover:border-[#FF4D1C]'
                }`}
              >
                {/* Background Photo with Grayscale Filter */}
                {!isHighlighted && (
                  <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity grayscale contrast-125">
                    <Image
                      src={org.image}
                      alt={org.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
                  </div>
                )}

                {/* Top Corner Compass Icon (4-dot / plus) */}
                <div className="relative z-10 flex justify-between items-center">
                  <span
                    className={`font-mono-custom text-[10px] tracking-widest ${
                      isHighlighted ? 'text-[#0A0A0A]/70' : 'text-[#8A8A8A]'
                    }`}
                  >
                    {org.department}
                  </span>
                  {/* Small orange 4-dot / plus icon */}
                  <div
                    className={`font-mono-custom text-xs ${
                      isHighlighted ? 'text-[#0A0A0A]' : 'text-[#FF4D1C]'
                    }`}
                  >
                    ✦
                  </div>
                </div>

                {/* Center / Hover Overlay Bio Content */}
                <div className="relative z-10 mt-auto">
                  {isHighlighted ? (
                    <div className="space-y-3">
                      <div className="font-mono-custom text-[10px] font-bold tracking-widest text-[#0A0A0A] uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#0A0A0A]"></span>
                        SHOW BIO
                      </div>
                      <h4 className="font-mono-custom font-bold text-lg text-[#0A0A0A] leading-tight">
                        {org.name}
                      </h4>
                      <p className="font-mono-custom text-xs font-semibold text-[#0A0A0A]/80 border-b border-[#0A0A0A]/20 pb-2">
                        {org.role}
                      </p>
                      <p className="font-body-custom text-xs text-[#0A0A0A]/90 leading-normal">
                        {org.bio}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-mono-custom text-base font-semibold text-[#F2F0EB] group-hover:text-[#FF4D1C] transition-colors uppercase">
                        {org.name}
                      </h4>
                      <p className="font-mono-custom text-xs text-[#8A8A8A] mt-1">
                        {org.role}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
