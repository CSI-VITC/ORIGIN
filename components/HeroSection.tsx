'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import AsciiBackground from './AsciiBackground';
import AsciiModelBackground from './AsciiModelBackground';

interface HeroSectionProps {
  onOpenDevfolio: () => void;
  onOpenWhatsApp: () => void;
  onScrollToAbout: () => void;
}

export default function HeroSection({
  onOpenDevfolio,
  onOpenWhatsApp,
  onScrollToAbout,
}: HeroSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLHeadingElement>(null);
  const blurAmountRef = useRef(0);
  const animationRef = useRef<number>(0);

  const animateBlur = () => {
    // Gradually increase blur (max 4px for subtle text blur)
    blurAmountRef.current = Math.min(blurAmountRef.current + 0.05, 4);

    if (overlayRef.current) {
      overlayRef.current.style.filter = `blur(${blurAmountRef.current}px)`;
      overlayRef.current.style.textShadow = `0 0 ${15 + blurAmountRef.current * 8}px rgba(255, 77, 28, ${0.15 + (blurAmountRef.current / 4) * 0.35})`;
    }

    if (blurAmountRef.current < 4) {
      animationRef.current = requestAnimationFrame(animateBlur);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !overlayRef.current) return;
    
    // Get mouse coordinates relative to the container
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Apply radial mask around cursor
    const mask = `radial-gradient(circle 80px at ${x}px ${y}px, black 0%, transparent 100%)`;
    overlayRef.current.style.webkitMaskImage = mask;
    overlayRef.current.style.maskImage = mask;

    cancelAnimationFrame(animationRef.current);
    blurAmountRef.current = 0;
    
    if (overlayRef.current) {
      overlayRef.current.style.transition = 'none';
      overlayRef.current.style.filter = 'blur(0px)';
      overlayRef.current.style.textShadow = '0 0 15px rgba(255, 77, 28, 0.15)';
      overlayRef.current.style.opacity = '1';
    }
    
    animationRef.current = requestAnimationFrame(animateBlur);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    cancelAnimationFrame(animationRef.current);
    blurAmountRef.current = 0;
    
    if (overlayRef.current) {
      overlayRef.current.style.transition = 'opacity 0.4s ease-out';
      overlayRef.current.style.opacity = '0';
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    handleMouseMove(e);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 py-12 overflow-hidden bg-[#070707] text-[#F2F0EB] select-none"
    >
      {/* 1. Dynamic 3D ASCII Model Background */}
      <AsciiModelBackground modelPath="/assets/dna.glb" />

      {/* 2. Central Warm Muted Radial Aura */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] sm:w-[700px] sm:h-[350px] bg-gradient-to-r from-[#FF4D1C]/15 via-[#FF4D1C]/08 to-transparent rounded-full blur-[100px] pointer-events-none transition-all duration-700 ${isHovered ? 'scale-110 opacity-80 blur-[120px]' : 'scale-100 opacity-40'
          }`}
      />

      {/* Top Margin Spacer */}
      <div className="w-full pt-16 flex justify-center items-center z-10 pointer-events-none">
        <div className="font-mono-custom text-[10px] sm:text-xs text-[#8A8A8A] tracking-[0.3em] uppercase flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C]/80" />
          <span>CSI · VIT CHENNAI // 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C]/80" />
        </div>
      </div>

      {/* 3. Main Center Hero Wordmark with Subtle Dark Hover Blur */}
      <div className="relative z-20 my-auto text-center max-w-7xl w-full flex flex-col items-center justify-center">
        <motion.div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative cursor-pointer group px-4 py-2"
        >
          {/* Base Sharp Text */}
          <h1
            className="uppercase text-[#FF4D1C] hero-title-clamp select-none"
            style={{
              textShadow: '0 0 15px rgba(255, 77, 28, 0.15)',
            }}
          >
            ORIGIN
          </h1>

          {/* Overlay Blurred Text (Masked to cursor) */}
          <h1
            ref={overlayRef}
            className="absolute inset-0 px-4 py-2 uppercase text-[#FF4D1C] hero-title-clamp select-none pointer-events-none opacity-0"
            style={{
              textShadow: '0 0 15px rgba(255, 77, 28, 0.15)',
            }}
          >
            ORIGIN
          </h1>
        </motion.div>

        {/* Minimal Actions - Single Line */}
        <div className="mt-6 flex items-center justify-center gap-6 z-20">
          <button
            onClick={onOpenDevfolio}
            className="font-mono-custom text-xs text-[#8A8A8A] hover:text-[#FF4D1C] border-b border-[#2A2A2A] hover:border-[#FF4D1C] pb-1 tracking-widest uppercase transition-all flex items-center gap-2 group"
          >
            <span>APPLY WITH DEVFOLIO</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <span className="text-[#2A2A2A]">•</span>

          <button
            onClick={onOpenWhatsApp}
            className="font-mono-custom text-xs text-[#8A8A8A] hover:text-[#F2F0EB] tracking-widest uppercase transition-colors flex items-center gap-2"
          >
            <span>COMMUNITY</span>
            <span>✦</span>
          </button>
        </div>
      </div>

      {/* 4. Bottom Footer Cue (Matches the orange dot at the bottom center in reference) */}
      <div className="w-full pb-4 flex flex-col items-center justify-center gap-2 z-20">
        <button
          onClick={onScrollToAbout}
          className="group flex flex-col items-center gap-2 text-[#8A8A8A] hover:text-[#FF4D1C] transition-colors cursor-pointer"
        >
          {/* Small glowing orange pulse dot at bottom center (exact match to screenshot) */}
          <div className="w-2 h-2 rounded-full bg-[#FF4D1C] shadow-[0_0_10px_#FF4D1C] group-hover:scale-150 transition-transform" />
          <span className="font-mono-custom text-[9px] tracking-[0.25em] uppercase text-[#8A8A8A] group-hover:text-[#F2F0EB]">
            SCROLL TO EXPLORE
          </span>
        </button>
      </div>
    </section>
  );
}
