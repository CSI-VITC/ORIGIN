'use client';

import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';
import CircularGallery from './reactbits/CircularGallery';

interface Organizer { id: string; name: string; role: string; department: string; bio: string; image: string; }

export default function OrganizersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const organizers: Organizer[] = [
    { id: 'org-1', name: 'DR. V. R. SUBHASHINI', role: 'FACULTY COORDINATOR', department: 'CSI VIT CHENNAI', bio: 'Leading research initiatives in distributed systems.', image: 'https://picsum.photos/seed/csi_coord1/600/800' },
    { id: 'org-2', name: 'ARAVIND S. KUMAR', role: 'PRESIDENT', department: 'CSI STUDENT CHAPTER', bio: 'Systems architect specializing in high-throughput financial protocols.', image: 'https://picsum.photos/seed/csi_pres/600/800' },
    { id: 'org-3', name: 'MEERA RAMAKRISHNAN', role: 'VICE PRESIDENT', department: 'TECHNICAL OPERATIONS', bio: 'Quant researcher and algorithmic trading enthusiast.', image: 'https://picsum.photos/seed/csi_vp/600/800' },
    { id: 'org-4', name: 'ROHIT VERMA', role: 'TECHNICAL LEAD', department: 'INFRASTRUCTURE & SECURITY', bio: 'Smart contract security specialist.', image: 'https://picsum.photos/seed/csi_tech/600/800' },
    { id: 'org-5', name: 'PRIYA DESHMUKH', role: 'OPERATIONS HEAD', department: 'EVENT LOGISTICS', bio: 'Managing nationwide university outreach.', image: 'https://picsum.photos/seed/csi_ops/600/800' },
    { id: 'org-6', name: 'KARTIK SUNDARAM', role: 'DESIGN & MEDIA LEAD', department: 'EDITORIAL ARCHITECTURE', bio: 'Crafting institutional visual aesthetics.', image: 'https://picsum.photos/seed/csi_design/600/800' },
    { id: 'org-7', name: 'ANANYA CHATTERJEE', role: 'SPONSORSHIP LEAD', department: 'CORPORATE RELATIONS', bio: 'Securing tier-1 venture capital partnerships.', image: 'https://picsum.photos/seed/csi_spon/600/800' },
    { id: 'org-8', name: 'ADITYA REDDY', role: 'JUDGING COORDINATOR', department: 'EVALUATION BENCH', bio: 'Curating double-blind evaluation protocols.', image: 'https://picsum.photos/seed/csi_judge/600/800' },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', end: 'bottom 25%', scrub: 0.8 } })
        .fromTo(galleryRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.8 }, 0);
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="organizers" className="py-16 md:py-24 border-b border-[#2A2A2A] relative overflow-hidden">
      <AsciiBackground variant="cube" opacity={0.08} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
        <SectionHeader secCode="SEC-04" numeral="04" title="ORGANIZERS" subtitle="COMPUTER SOCIETY OF INDIA · VIT CHENNAI CORE EXECUTIVE TEAM" />
        <div ref={galleryRef} style={{ height: '400px' }} className="hidden md:block mt-10 w-full">
          <CircularGallery items={organizers.map(org => ({ image: org.image, text: org.name }))} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" font="bold 30px Orbitron" />
        </div>
        {/* Mobile fallback: simple cards */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-3">
          {organizers.map(org => (
            <div key={org.id} className="p-3 bg-[#0A0A0A] border border-[#2A2A2A] rounded">
              <div className="font-mono-custom text-[10px] text-[#FF4D1C] uppercase tracking-wider">{org.role}</div>
              <div className="font-sans font-bold text-sm text-[#F2F0EB] mt-1">{org.name}</div>
              <div className="font-mono-custom text-[9px] text-[#8A8A8A] mt-0.5">{org.department}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
