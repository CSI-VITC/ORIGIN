'use client';

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

export type ScrollState = {
  scrollYPx: number;
  scrollProgress: number;
  sectionIndex: number;
  heroProgress: number;
  pinnedProgress: number;
  totalHeight: number;
};

const defaultState: ScrollState = {
  scrollYPx: 0,
  scrollProgress: 0,
  sectionIndex: 0,
  heroProgress: 0,
  pinnedProgress: 0,
  totalHeight: 0,
};

const ScrollContext = createContext<ScrollState>(defaultState);

export const SECTION_IDS = [
  'hero',
  'tracks',
  'about',
  'prize',
  'timeline',
  'organizers',
  'sponsors',
  'faq',
  'cta',
] as const;

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ScrollState>(defaultState);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY || 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const progress = h > 0 ? Math.min(1, Math.max(0, y / h)) : 0;

      // Section index: which section's top is closest above current scroll
      let idx = 0;
      const vh = window.innerHeight;
      for (let i = 0; i < SECTION_IDS.length; i++) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - vh * 0.35 <= 0) idx = i;
      }

      // Hero progress: 0 when at top of page, 1 when past 1.5 viewports
      const heroEl = document.getElementById('hero');
      let heroProgress = 0;
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        const span = window.innerHeight * 1.5;
        heroProgress = Math.min(1, Math.max(0, -rect.top / span));
      }

      // Pinned progress: 0..1 over the Tracks→About→Prize region
      const pinnedEl = document.getElementById('pinned-scenes-region');
      let pinnedProgress = 0;
      if (pinnedEl) {
        const rect = pinnedEl.getBoundingClientRect();
        const span = Math.max(1, pinnedEl.offsetHeight - window.innerHeight);
        pinnedProgress = Math.min(1, Math.max(0, -rect.top / span));
      }

      setState({
        scrollYPx: y,
        scrollProgress: progress,
        sectionIndex: idx,
        heroProgress,
        pinnedProgress,
        totalHeight: h,
      });
      rafRef.current = null;
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <ScrollContext.Provider value={state}>{children}</ScrollContext.Provider>;
}

export function useScrollState(): ScrollState {
  return useContext(ScrollContext);
}
