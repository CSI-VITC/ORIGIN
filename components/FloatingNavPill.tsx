'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import AsciiBackground from './AsciiBackground';

interface FloatingNavPillProps {
  onOpenRegister?: () => void;
}

const MENU_ITEMS = [
  { num: '01', label: 'TRACKS', id: 'tracks' },
  { num: '02', label: 'ABOUT', id: 'about' },
  { num: '03', label: 'PRIZES', id: 'prize' },
  { num: '04', label: 'TIMELINE', id: 'timeline' },
  { num: '05', label: 'SPONSORS', id: 'sponsors' },
  { num: '06', label: 'FAQ', id: 'faq' },
  { num: '07', label: 'CONTACT', id: 'cta' },
];

export default function FloatingNavPill({ onOpenRegister }: FloatingNavPillProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Sleek Minimalistic Top Floating Header Bar */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[280px] pointer-events-auto">
        <div className="bg-[#0A0A0A] border border-[#222222] shadow-[0_10px_30px_rgba(0,0,0,0.8)] px-3.5 py-2 flex items-center justify-between font-mono-custom text-xs text-[#F2F0EB]">
          {/* Left Symbol */}
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-[#FF4D1C] transition-colors font-bold tracking-widest text-xs flex items-center"
            title="Origin 2026 Top"
          >
            &gt;|&lt;
          </button>

          {/* Center Orange 5-Square Cross Icon */}
          <div className="grid grid-cols-3 gap-[2px] w-3.5 h-3.5 items-center justify-center">
            <div />
            <div className="w-1 h-1 bg-[#FF4D1C]" />
            <div />
            <div className="w-1 h-1 bg-[#FF4D1C]" />
            <div className="w-1 h-1 bg-[#FF4D1C]" />
            <div className="w-1 h-1 bg-[#FF4D1C]" />
            <div />
            <div className="w-1 h-1 bg-[#FF4D1C]" />
            <div />
          </div>

          {/* Right Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-[#FF4D1C] transition-colors font-bold tracking-wider uppercase text-[10px]"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* 2. Dragonfly Style Compact Menu Card Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Dimmed Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs -z-10"
              />

              {/* Menu Container Card (Exact width matching top bar) */}
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="mt-1 bg-[#050505] border border-[#222222] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden font-mono-custom text-xs text-[#F2F0EB]"
              >
                {/* Menu List Rows */}
                <div className="flex flex-col">
                  {MENU_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group border-t border-[#181818] first:border-t-0 py-2.5 px-4 flex items-center hover:bg-[#111111] transition-colors cursor-pointer text-left"
                    >
                      {/* Faint Numeral */}
                      <span className="font-mono-custom text-[11px] text-[#38BDF8]/60 group-hover:text-[#38BDF8] w-6 shrink-0 transition-colors">
                        {item.num}
                      </span>

                      {/* Centered Title */}
                      <span className="font-sans font-bold text-sm sm:text-base uppercase text-[#F2F0EB] tracking-wider text-center flex-1 group-hover:text-[#FF4D1C] transition-colors">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Embedded ASCII Canvas Matrix Block */}
                <div className="relative w-full h-[140px] bg-[#020202] border-t border-[#181818] overflow-hidden">
                  <AsciiBackground variant="matrix" opacity={0.4} />
                </div>

                {/* Footer Action Buttons */}
                <div className="grid grid-cols-2 border-t border-[#181818]">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      if (onOpenRegister) onOpenRegister();
                    }}
                    className="py-2.5 px-2 font-mono-custom text-[10px] font-bold tracking-widest text-[#F2F0EB] hover:text-[#FF4D1C] hover:bg-[#111111] transition-colors text-center border-r border-[#181818] uppercase"
                  >
                    TERMS
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToSection('cta');
                    }}
                    className="py-2.5 px-2 font-mono-custom text-[10px] font-bold tracking-widest text-[#F2F0EB] hover:text-[#FF4D1C] hover:bg-[#111111] transition-colors text-center uppercase"
                  >
                    DISCLOSURES
                  </button>
                </div>

                {/* Bottom Color Stripe Accent */}
                <div className="grid grid-cols-3 h-4 w-full">
                  <div className="bg-[#FF4D1C] flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#050505]" />
                  </div>
                  <div className="bg-[#E024B3]" />
                  <div className="bg-[#4F46E5]" />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

