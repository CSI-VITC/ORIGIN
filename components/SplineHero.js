'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline';

const SPLINE_SCENE = 'https://prod.spline.design/EpcIsqDFzILlqXr1/scene.splinecode';

export default function SplineHero() {
  const sectionRef = useRef(null);
  const goneRef = useRef(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      gsap.set(
        '.spline-hero__label, .spline-hero__title, .spline-hero__subtitle, .spline-hero__cta, .spline-hero__scroll',
        { opacity: 1 }
      );
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.spline-hero__label', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo('.spline-hero__title', { opacity: 0, y: 56 }, { opacity: 1, y: 0, duration: 1.2 }, '-=0.7')
      .fromTo('.spline-hero__subtitle', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
      .fromTo('.spline-hero__cta', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .fromTo('.spline-hero__scroll', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.5');
    return () => tl.kill();
  }, []);

  const dismiss = () => {
    if (goneRef.current) return;
    goneRef.current = true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.to(sectionRef.current, {
      opacity: 0,
      yPercent: reduced ? 0 : -100,
      duration: reduced ? 0.4 : 1,
      ease: 'power4.inOut',
      onComplete: () => setHidden(true)
    });
  };

  useEffect(() => {
    const blockAndMaybeDismiss = (e) => {
      if (goneRef.current) return;
      const gesture =
        (e.type === 'wheel' && e.deltaY > 0) ||
        (e.type === 'keydown' && ['ArrowDown', 'PageDown', 'End', ' '].includes(e.key));
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (gesture) dismiss();
    };
    let startY = null;
    const onTouchStart = (e) => {
      if (goneRef.current) return;
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (goneRef.current) return;
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (startY !== null && startY - e.touches[0].clientY > 40) dismiss();
    };
    window.addEventListener('wheel', blockAndMaybeDismiss, { passive: false, capture: true });
    window.addEventListener('keydown', blockAndMaybeDismiss, { capture: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });
    return () => {
      window.removeEventListener('wheel', blockAndMaybeDismiss, { capture: true });
      window.removeEventListener('keydown', blockAndMaybeDismiss, { capture: true });
      window.removeEventListener('touchstart', onTouchStart, { capture: true });
      window.removeEventListener('touchmove', onTouchMove, { capture: true });
    };
  }, []);

  if (hidden) return null;

  return (
    <section ref={sectionRef} className="spline-hero" aria-label="ORIGIN - a 36-hour hackathon by CSI VIT Chennai">
      <div className="spline-hero__canvas">
        <Spline scene={SPLINE_SCENE} />
      </div>
      <div className="spline-hero__overlay">
        <p className="spline-hero__label">CSI VIT Chennai Presents</p>
        <h1 className="spline-hero__title">ORIGIN</h1>
        <p className="spline-hero__subtitle">
          Where curiosity ignites innovation and ideas reshape tomorrow. One idea, 36 hours, and the makers of the
          future.
        </p>
        <button type="button" className="spline-hero__cta" onClick={dismiss}>
          Begin the Journey
        </button>
      </div>
      <button type="button" className="spline-hero__scroll" onClick={dismiss} aria-label="Scroll to discover">
        <span className="spline-hero__scroll-text">Scroll to Discover</span>
        <span className="spline-hero__chevron" aria-hidden="true" />
      </button>
      <style jsx global>{`
        .spline-hero {
          position: fixed;
          inset: 0;
          z-index: 9999;
          overflow: hidden;
          background: radial-gradient(120% 120% at 50% 20%, #0b1f3a 0%, #05070d 72%);
        }
        .spline-hero__canvas {
          position: absolute;
          inset: 0;
        }
        .spline-hero__canvas > div,
        .spline-hero__canvas canvas {
          width: 100%;
          height: 100%;
          display: block;
        }
        .spline-hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 24px;
          pointer-events: none;
        }
        .spline-hero__label {
          margin: 0 0 26px;
          font-family: NeueRoman;
          font-size: 13px;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #8fa3c0;
        }
        .spline-hero__title {
          margin: 0;
          font-family: NeueMachina;
          font-weight: 700;
          font-size: clamp(4.5rem, 16vw, 13rem);
          line-height: 0.95;
          letter-spacing: 0.06em;
          background: linear-gradient(180deg, #ffffff 0%, #b8e8ff 55%, #4da3ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .spline-hero__subtitle {
          margin: 28px auto 0;
          max-width: 540px;
          font-family: NeueRoman;
          font-size: 16px;
          line-height: 1.6;
          color: #b8e8ff;
        }
        .spline-hero__cta {
          margin-top: 46px;
          pointer-events: auto;
          cursor: pointer;
          font-family: NeueRoman;
          font-size: 14px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #ffffff;
          background: rgba(30, 94, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          padding: 16px 38px;
          transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }
        .spline-hero__cta:hover {
          background: #4da3ff;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(30, 94, 255, 0.35);
        }
        .spline-hero__scroll {
          position: absolute;
          left: 50%;
          bottom: 36px;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 2;
          pointer-events: auto;
        }
        .spline-hero__scroll-text {
          font-family: NeueRoman;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #8fa3c0;
        }
        .spline-hero__chevron {
          width: 18px;
          height: 18px;
          border-right: 1.5px solid #4da3ff;
          border-bottom: 1.5px solid #4da3ff;
          transform: rotate(45deg);
          animation: spline-hero-bounce 1.8s ease-in-out infinite;
        }
        @keyframes spline-hero-bounce {
          0%,
          100% {
            transform: rotate(45deg) translate(0, 0);
            opacity: 0.35;
          }
          50% {
            transform: rotate(45deg) translate(4px, 4px);
            opacity: 1;
          }
        }
        @media (max-width: 767px) {
          .spline-hero__label {
            font-size: 11px;
            letter-spacing: 0.3em;
          }
          .spline-hero__subtitle {
            font-size: 14px;
            max-width: 320px;
          }
          .spline-hero__scroll {
            bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}
