'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxWrapper({ children, className = '' }: ParallaxWrapperProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current;

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 1 // Adding a numeric scrub adds smooth interpolation to the parallax without needing Lenis
        }
      });

      // Dynamically find all elements with data-parallax-speed
      const layers = triggerElement.querySelectorAll('[data-parallax-speed]');

      layers.forEach((layer) => {
        const yPercent = parseInt(layer.getAttribute('data-parallax-speed') || '0', 10);
        if (!isNaN(yPercent)) {
          tl.to(
            layer,
            {
              yPercent: yPercent,
              ease: "none"
            },
            0 // Animate them all together from the start of the timeline
          );
        }
      });
    }

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={parallaxRef}>
      {children}
    </div>
  );
}
