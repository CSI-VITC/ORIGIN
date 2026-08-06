'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollSyncedTextProps {
  prefixText: string;
  items: string[];
  className?: string;
}

export function ScrollSyncedText({ prefixText, items, className = '' }: ScrollSyncedTextProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !listRef.current) return;

    // Use the exact line height of the text to calculate the slide distance
    const firstItem = listRef.current.children[0] as HTMLElement;
    const itemHeight = firstItem.offsetHeight;

    const snapConfig = {
      snapTo: 1 / (items.length - 1),
      duration: { min: 0.1, max: 0.4 },
      delay: 0.05,
      ease: "power2.inOut",
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth interpolation
        snap: snapConfig,
      }
    });

    tl.to(listRef.current, {
      y: -(items.length - 1) * itemHeight,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (listRef.current) gsap.killTweensOf(listRef.current);
    };
  }, [items.length]);

  return (
    <div 
      ref={sectionRef} 
      // Total scrollable height = 100vh per item to give enough scrub distance
      style={{ height: `${items.length * 80}vh` }}
      className={`relative w-full ${className}`}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="flex flex-col md:flex-row items-center font-display font-bold uppercase tracking-wider text-center md:text-left">
          {/* Prefix Text */}
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none text-[#FF4D1C] md:mr-8 mb-4 md:mb-0 glow-orange-text">
            {prefixText}
          </span>
          
          {/* Sliding Mask Window */}
          <div className="h-[1.1em] overflow-hidden relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-[#F2F0EB]">
            <ul ref={listRef} className="m-0 p-0 list-none will-change-transform flex flex-col">
              {items.map((item, i) => (
                <li key={i} className="h-[1.1em] flex items-center whitespace-nowrap">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Helper footer */}
        <div className="absolute bottom-12 font-mono-custom text-xs tracking-[0.3em] uppercase text-[#8A8A8A] opacity-50">
          KEEP SCROLLING
        </div>
      </div>
    </div>
  );
}
