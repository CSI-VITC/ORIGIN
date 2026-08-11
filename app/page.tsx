'use client';

import { useState } from 'react';
import CornerLetters from '@/components/CornerLetters';
import FloatingNavPill from '@/components/FloatingNavPill';
import HeroSection from '@/components/HeroSection';
import TracksSection from '@/components/TracksSection';
import PromoBannerSection from '@/components/PromoBannerSection';
import AboutSection from '@/components/AboutSection';
import PrizePoolSection from '@/components/PrizePoolSection';
import TimelineSection from '@/components/TimelineSection';
import SponsorsSection from '@/components/SponsorsSection';
import CursorGridSection from '@/components/CursorGridSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import InteractiveModals from '@/components/InteractiveModals';

export default function Home() {
  const [selectedTrackName, setSelectedTrackName] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDevfolio = () => {
    window.open('https://origins.devfolio.co/overview', '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsApp = () => {
    window.open('https://chat.whatsapp.com/BTF7eO96ycK3JYuGFigaXk?s=qs&p=a&mlu=4', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative bg-[#0A0A0A] text-[#F2F0EB] min-h-screen selection:bg-[#FF4D1C] selection:text-[#0A0A0A] overflow-x-hidden font-serif">
      {/* 1. Global Fixed Corner Anchors (C S I · O) */}
      <CornerLetters />

      {/* 2. Floating Top Nav Pill with 5-8 Progress Dots & Menu Drawer */}
      <FloatingNavPill onOpenRegister={handleOpenDevfolio} />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full">
        {/* ========================================================
            00. HERO (Minimal "DRAGONFLY" Aesthetic with Subtle Hover Blur & ASCII Art)
           ======================================================== */}
        <HeroSection
          onOpenDevfolio={handleOpenDevfolio}
          onOpenWhatsApp={handleOpenWhatsApp}
          onScrollToAbout={() => scrollToSection('tracks')}
        />

        {/* 01 · Tracks Section (Directly after Hero) */}
        <TracksSection onSelectTrack={(track) => setSelectedTrackName(track)} />

        {/* Kinetic Departure Board — Hype Banner */}
        <PromoBannerSection />

        {/* 02 · About Us Section */}
        <AboutSection />

        {/* 03 · Prize Pool */}
        <PrizePoolSection />

        {/* 04 · Timeline */}
        <TimelineSection />

        {/* 05 · Sponsors */}
        <SponsorsSection />

        {/* Interactive Cursor Grid */}
        <CursorGridSection />

        {/* 07 · FAQ */}
        <FaqSection />

        {/* 08 · CTA + Footer */}
        <CtaSection
          onOpenRegister={handleOpenDevfolio}
          onScrollToTimeline={() => scrollToSection('timeline')}
        />
      </main>

      {/* Interactive Portal Modals */}
      <InteractiveModals
        selectedTrackName={selectedTrackName}
        onCloseTrack={() => setSelectedTrackName(null)}
      />
    </div>
  );
}
