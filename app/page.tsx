'use client';

import { useState } from 'react';
import CornerLetters from '@/components/CornerLetters';
import FloatingNavPill from '@/components/FloatingNavPill';
import HeroSection from '@/components/HeroSection';
import TracksSection from '@/components/TracksSection';
import AboutSection from '@/components/AboutSection';
import PrizePoolSection from '@/components/PrizePoolSection';
import TimelineSection from '@/components/TimelineSection';
import OrganizersSection from '@/components/OrganizersSection';
import SponsorsSection from '@/components/SponsorsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import InteractiveModals from '@/components/InteractiveModals';

export default function Home() {
  const [devfolioOpen, setDevfolioOpen] = useState<boolean>(false);
  const [whatsappOpen, setWhatsappOpen] = useState<boolean>(false);
  const [selectedTrackName, setSelectedTrackName] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#0A0A0A] text-[#F2F0EB] min-h-screen selection:bg-[#FF4D1C] selection:text-[#0A0A0A] overflow-x-hidden font-serif">
      {/* 1. Global Fixed Corner Anchors (C S I · O) */}
      <CornerLetters />

      {/* 2. Floating Top Nav Pill with 5-8 Progress Dots & Menu Drawer */}
      <FloatingNavPill onOpenRegister={() => setDevfolioOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full">
        {/* ========================================================
            00. HERO (Minimal "DRAGONFLY" Aesthetic with Subtle Hover Blur & ASCII Art)
           ======================================================== */}
        <HeroSection
          onOpenDevfolio={() => setDevfolioOpen(true)}
          onOpenWhatsApp={() => setWhatsappOpen(true)}
          onScrollToAbout={() => scrollToSection('tracks')}
        />

        {/* 01 · Tracks Section (Directly after Hero) */}
        <TracksSection onSelectTrack={(track) => setSelectedTrackName(track)} />

        {/* 02 · About Us Section */}
        <AboutSection />

        {/* 03 · Prize Pool */}
        <PrizePoolSection />

        {/* 04 · Timeline */}
        <TimelineSection />

        {/* 05 · Organizers */}
        <OrganizersSection />

        {/* 06 · Sponsors */}
        <SponsorsSection />

        {/* 07 · FAQ */}
        <FaqSection />

        {/* 08 · CTA + Footer */}
        <CtaSection
          onOpenRegister={() => setDevfolioOpen(true)}
          onOpenWhatsApp={() => setWhatsappOpen(true)}
          onScrollToTimeline={() => scrollToSection('timeline')}
        />
      </main>

      {/* Interactive Portal Modals */}
      <InteractiveModals
        devfolioOpen={devfolioOpen}
        onCloseDevfolio={() => setDevfolioOpen(false)}
        whatsappOpen={whatsappOpen}
        onCloseWhatsApp={() => setWhatsappOpen(false)}
        selectedTrackName={selectedTrackName}
        onCloseTrack={() => setSelectedTrackName(null)}
      />
    </div>
  );
}
