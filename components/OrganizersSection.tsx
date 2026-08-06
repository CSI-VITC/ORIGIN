'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';
import CircularGallery from './reactbits/CircularGallery';

interface Organizer {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
}

export default function OrganizersSection() {

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

        {/* Circular Gallery of Organizers */}
        <div style={{ height: '600px', position: 'relative' }} className="mt-12 w-full">
          <CircularGallery
            items={organizers.map((org) => ({ image: org.image, text: org.name }))}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
            font="bold 30px Orbitron"
          />
        </div>
      </div>
    </section>
  );
}
