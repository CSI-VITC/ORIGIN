'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const NAV_ITEMS = ['origin', 'journey', 'arena', 'rewards', 'launch'];

const MENU_DATA = {
  origin: {
    headline: 'Every breakthrough has an origin.',
    subtext: 'The universe began with a singularity. Every invention, every discovery, and every revolutionary idea begins exactly the same way—with one spark.',
    cta: 'Enter the Journey →',
    ctaHref: '#',
    links: [
      { label: 'Our Vision', href: '#' },
      { label: 'Why ORIGIN?', href: '#' },
      { label: 'About CSI', href: '#' },
      { label: 'The Story Begins', href: '#' },
    ],
    visual: 'origin',
  },
  journey: {
    headline: 'From an Idea to Impact.',
    subtext: 'Travel through every stage of innovation—from curiosity and collaboration to building solutions that solve real-world problems.',
    cta: 'Explore the Mission →',
    ctaHref: '#',
    links: [
      { label: 'Timeline', href: '#' },
      { label: 'Workshops', href: '#' },
      { label: 'Mentorship', href: '#' },
      { label: 'Team Formation', href: '#' },
    ],
    visual: 'journey',
  },
  arena: {
    headline: 'Where Bold Ideas Compete.',
    subtext: 'Every challenge is an opportunity to redefine what is possible. Choose your frontier and start building.',
    cta: 'Enter the Arena →',
    ctaHref: '#',
    links: [
      { label: 'Problem Statements', href: '#' },
      { label: 'Tracks', href: '#' },
      { label: 'Rules', href: '#' },
      { label: 'Judging Criteria', href: '#' },
      { label: 'Schedule', href: '#' },
    ],
    visual: 'arena',
    tracks: ['AI', 'Cybersecurity', 'Web', 'Robotics', 'Blockchain'],
  },
  rewards: {
    headline: 'Beyond Winning.',
    subtext: 'The greatest reward is creating something that matters. Recognition is only the beginning.',
    cta: "See What's Beyond →",
    ctaHref: '#',
    links: [
      { label: 'Prize Pool', href: '#' },
      { label: 'Internship Opportunities', href: '#' },
      { label: 'Certificates', href: '#' },
      { label: 'Networking', href: '#' },
      { label: 'Sponsors', href: '#' },
    ],
    visual: 'rewards',
  },
  launch: {
    headline: 'Your Story Starts Here.',
    subtext: 'The universe is expanding. The next breakthrough could carry your name.',
    cta: 'Launch ORIGIN',
    ctaHref: '#',
    links: [
      { label: 'Register', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'Community', href: '#' },
    ],
    visual: 'launch',
    bigCta: true,
  },
};

// SVG art for each panel
function VisualArt({ type }) {
  const arts = {
    origin: (
      <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="blackhole" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="30%" stopColor="#0a0020" />
            <stop offset="70%" stopColor="#1a0050" />
            <stop offset="100%" stopColor="#0d0030" />
          </radialGradient>
          <radialGradient id="glowOuter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(120,60,255,0)" />
            <stop offset="60%" stopColor="rgba(120,60,255,0.15)" />
            <stop offset="100%" stopColor="rgba(80,20,200,0.3)" />
          </radialGradient>
        </defs>
        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <circle key={i} cx={Math.random() * 300} cy={Math.random() * 220} r={Math.random() * 1.5} fill="white" opacity={0.3 + Math.random() * 0.7} />
        ))}
        {/* Outer glow ring */}
        <circle cx="150" cy="110" r="80" fill="url(#glowOuter)" />
        {/* Accretion disk ellipses */}
        <ellipse cx="150" cy="110" rx="90" ry="18" fill="none" stroke="rgba(180,100,255,0.4)" strokeWidth="8" />
        <ellipse cx="150" cy="110" rx="78" ry="12" fill="none" stroke="rgba(200,140,255,0.25)" strokeWidth="4" />
        {/* Black hole center */}
        <circle cx="150" cy="110" r="38" fill="url(#blackhole)" />
        {/* Light particles */}
        <circle cx="150" cy="72" r="3" fill="rgba(200,160,255,0.8)" />
        <circle cx="188" cy="108" r="2" fill="rgba(180,120,255,0.6)" />
        <circle cx="112" cy="112" r="2.5" fill="rgba(220,180,255,0.7)" />
      </svg>
    ),
    journey: (
      <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b1fff" />
            <stop offset="100%" stopColor="#a020ff" />
          </linearGradient>
        </defs>
        {/* Stars bg */}
        {[...Array(20)].map((_, i) => (
          <circle key={i} cx={Math.random() * 300} cy={Math.random() * 220} r={Math.random() * 1.2} fill="white" opacity={0.2 + Math.random() * 0.6} />
        ))}
        {/* Constellation lines */}
        <line x1="50" y1="180" x2="100" y2="140" stroke="rgba(120,80,255,0.4)" strokeWidth="1" />
        <line x1="100" y1="140" x2="160" y2="110" stroke="rgba(120,80,255,0.4)" strokeWidth="1" />
        <line x1="160" y1="110" x2="220" y2="80" stroke="rgba(120,80,255,0.4)" strokeWidth="1" />
        <line x1="220" y1="80" x2="260" y2="50" stroke="rgba(120,80,255,0.4)" strokeWidth="1" />
        {/* Path curve */}
        <path d="M 30 190 Q 100 150 150 110 Q 200 70 270 40" fill="none" stroke="url(#pathGrad)" strokeWidth="2" strokeDasharray="6 4" />
        {/* Nodes */}
        {[[50,180],[100,140],[160,110],[220,80],[260,50]].map(([x,y],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="8" fill="rgba(80,40,180,0.3)" stroke="rgba(160,100,255,0.6)" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="3" fill="rgba(200,160,255,0.9)" />
          </g>
        ))}
        {/* Neural lines */}
        <line x1="50" y1="180" x2="160" y2="110" stroke="rgba(80,40,200,0.2)" strokeWidth="1" />
        <line x1="100" y1="140" x2="220" y2="80" stroke="rgba(80,40,200,0.2)" strokeWidth="1" />
      </svg>
    ),
    arena: (
      <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="planet1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2a6fff" />
            <stop offset="100%" stopColor="#0a1a60" />
          </radialGradient>
          <radialGradient id="planet2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6a20" />
            <stop offset="100%" stopColor="#5a1a00" />
          </radialGradient>
          <radialGradient id="planet3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#20d060" />
            <stop offset="100%" stopColor="#003a18" />
          </radialGradient>
          <radialGradient id="planet4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3a80" />
            <stop offset="100%" stopColor="#400018" />
          </radialGradient>
          <radialGradient id="planet5" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffdd30" />
            <stop offset="100%" stopColor="#3a2a00" />
          </radialGradient>
        </defs>
        {/* Stars */}
        {[...Array(25)].map((_, i) => (
          <circle key={i} cx={Math.random() * 300} cy={Math.random() * 220} r={Math.random() * 1.2} fill="white" opacity={0.15 + Math.random() * 0.5} />
        ))}
        {/* Orbits */}
        <ellipse cx="150" cy="110" rx="120" ry="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <ellipse cx="150" cy="110" rx="90" ry="20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        {/* Planets */}
        <circle cx="50" cy="110" r="22" fill="url(#planet1)" />
        <circle cx="110" cy="72" r="16" fill="url(#planet2)" />
        <circle cx="200" cy="68" r="18" fill="url(#planet3)" />
        <circle cx="255" cy="115" r="14" fill="url(#planet4)" />
        <circle cx="170" cy="155" r="12" fill="url(#planet5)" />
        {/* Rings on planet1 */}
        <ellipse cx="50" cy="110" rx="30" ry="6" fill="none" stroke="rgba(100,160,255,0.4)" strokeWidth="2" />
      </svg>
    ),
    rewards: (
      <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="energyCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9a0" />
            <stop offset="30%" stopColor="#ffd020" />
            <stop offset="70%" stopColor="#ff8000" />
            <stop offset="100%" stopColor="rgba(255,80,0,0)" />
          </radialGradient>
          <radialGradient id="glowGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,220,0,0.3)" />
            <stop offset="100%" stopColor="rgba(255,100,0,0)" />
          </radialGradient>
        </defs>
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <circle key={i} cx={Math.random() * 300} cy={Math.random() * 220} r={Math.random() * 1.5} fill="#ffd060" opacity={0.2 + Math.random() * 0.5} />
        ))}
        {/* Gold particle lines */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x1 = 150 + Math.cos(angle) * 40;
          const y1 = 110 + Math.sin(angle) * 40;
          const x2 = 150 + Math.cos(angle) * 90;
          const y2 = 110 + Math.sin(angle) * 90;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,200,0,0.25)" strokeWidth="1" />;
        })}
        {/* Outer glow */}
        <circle cx="150" cy="110" r="80" fill="url(#glowGold)" />
        {/* Trophy silhouette */}
        <rect x="135" y="90" width="30" height="40" rx="4" fill="rgba(255,210,0,0.15)" stroke="rgba(255,200,0,0.5)" strokeWidth="1.5" />
        <rect x="130" y="78" width="40" height="20" rx="10" fill="rgba(255,210,0,0.2)" stroke="rgba(255,200,0,0.6)" strokeWidth="1.5" />
        <rect x="140" y="130" width="20" height="10" rx="2" fill="rgba(255,210,0,0.3)" />
        <rect x="132" y="140" width="36" height="6" rx="2" fill="rgba(255,210,0,0.3)" />
        {/* Energy core */}
        <circle cx="150" cy="110" r="18" fill="url(#energyCore)" />
      </svg>
    ),
    launch: (
      <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="earth" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2a80ff" />
            <stop offset="50%" stopColor="#1040c0" />
            <stop offset="100%" stopColor="#050a30" />
          </radialGradient>
          <radialGradient id="engineGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(80,160,255,0.8)" />
            <stop offset="100%" stopColor="rgba(40,80,255,0)" />
          </radialGradient>
        </defs>
        {/* Stars - warp effect */}
        {[...Array(30)].map((_, i) => {
          const x = Math.random() * 300;
          const y = Math.random() * 220;
          const len = Math.random() * 15 + 5;
          return <line key={i} x1={x} y1={y} x2={x + len} y2={y + len * 0.5} stroke="white" strokeWidth="0.5" opacity={0.2 + Math.random() * 0.5} />;
        })}
        {/* Earth */}
        <circle cx="60" cy="170" r="55" fill="url(#earth)" />
        <path d="M 20 155 Q 40 145 60 150 Q 80 155 100 145" fill="none" stroke="rgba(100,200,100,0.4)" strokeWidth="2" />
        <path d="M 30 165 Q 50 158 70 162" fill="none" stroke="rgba(100,200,100,0.3)" strokeWidth="1.5" />
        {/* Rocket */}
        <g transform="rotate(-45, 180, 80)">
          <path d="M 180 50 L 170 90 L 190 90 Z" fill="rgba(220,230,255,0.9)" />
          <rect x="172" y="88" width="16" height="20" rx="2" fill="rgba(200,210,255,0.8)" />
          <path d="M 172 105 L 165 120 L 172 108 Z" fill="rgba(180,190,255,0.6)" />
          <path d="M 188 105 L 195 120 L 188 108 Z" fill="rgba(180,190,255,0.6)" />
        </g>
        {/* Engine glow/trail */}
        <ellipse cx="215" cy="115" rx="20" ry="8" fill="url(#engineGlow)" transform="rotate(-45, 215, 115)" />
        <circle cx="215" cy="115" r="4" fill="rgba(120,180,255,0.9)" />
      </svg>
    ),
  };
  return arts[type] || null;
}

function MegaMenuPanel({ item, data }) {
  const isLaunch = item === 'launch';

  return (
    <div style={{
      display: 'flex',
      gap: '0',
      width: '100%',
      height: '100%',
    }}>
      {/* Left: Content */}
      <div style={{
        flex: '1 1 55%',
        padding: '40px 48px 40px 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <p style={{
            fontFamily: 'NeueMachina, sans-serif',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(180,160,255,0.7)',
            marginBottom: '16px',
          }}>
            ORIGIN HACKATHON
          </p>
          <h2 style={{
            fontFamily: 'NeueMachina, sans-serif',
            fontSize: isLaunch ? '38px' : '28px',
            lineHeight: '1.1',
            color: '#ffffff',
            fontWeight: '700',
            margin: '0 0 20px 0',
            letterSpacing: isLaunch ? '-1px' : '-0.5px',
          }}>
            {data.headline}
          </h2>
          <p style={{
            fontFamily: 'NeueRoman, Georgia, serif',
            fontSize: '14px',
            lineHeight: '1.65',
            color: 'rgba(200,200,220,0.75)',
            margin: '0 0 32px 0',
            maxWidth: '360px',
          }}>
            {data.subtext}
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ marginBottom: '0' }}>
          <p style={{
            fontFamily: 'NeueMachina, sans-serif',
            fontSize: '10px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'rgba(150,130,220,0.6)',
            marginBottom: '14px',
          }}>
            Quick Links
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            {data.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="origin-megamenu-link"
                style={{
                  fontFamily: 'NeueRoman, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(220,210,255,0.85)',
                  textDecoration: 'none',
                  padding: '7px 14px',
                  borderRadius: '30px',
                  border: '1px solid rgba(140,110,255,0.25)',
                  background: 'rgba(80,50,180,0.1)',
                  transition: 'all 0.25s ease',
                  display: 'inline-block',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(120,80,255,0.3), transparent)',
        margin: '20px 0',
        flexShrink: 0,
      }} />

      {/* Right: Visual + CTA */}
      <div style={{
        flex: '1 1 45%',
        padding: '40px 40px 40px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        {/* Visual Art */}
        <div style={{
          width: '100%',
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'rgba(10,5,30,0.5)',
          border: '1px solid rgba(80,50,180,0.2)',
          maxHeight: '200px',
        }}>
          <VisualArt type={data.visual} />
        </div>

        {/* CTA */}
        {isLaunch ? (
          <a
            href={data.ctaHref}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              fontFamily: 'NeueMachina, sans-serif',
              fontSize: '14px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#ffffff',
              textDecoration: 'none',
              padding: '16px 24px',
              borderRadius: '60px',
              background: 'linear-gradient(135deg, #4020c0 0%, #8020ff 50%, #3010a0 100%)',
              border: '1px solid rgba(140,80,255,0.5)',
              boxShadow: '0 4px 30px rgba(80,20,200,0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            {data.cta}
          </a>
        ) : (
          <a
            href={data.ctaHref}
            className="origin-megamenu-cta"
            style={{
              fontFamily: 'NeueMachina, sans-serif',
              fontSize: '12px',
              letterSpacing: '1px',
              color: 'rgba(180,150,255,0.9)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.25s ease',
              paddingBottom: '3px',
              borderBottom: '1px solid rgba(140,100,255,0.4)',
            }}
          >
            {data.cta}
          </a>
        )}

        {/* Arena tracks */}
        {item === 'arena' && data.tracks && (
          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {data.tracks.map((track, i) => (
              <span key={i} style={{
                fontFamily: 'NeueMachina, sans-serif',
                fontSize: '9px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(200,180,255,0.6)',
                padding: '4px 10px',
                borderRadius: '20px',
                background: 'rgba(60,30,150,0.25)',
                border: '1px solid rgba(100,60,220,0.3)',
              }}>
                {track}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPos, setMenuPos] = useState({ left: 0, width: 0 });
  const menuRef = useRef(null);
  const closeTimerRef = useRef(null);
  const listenersRef = useRef([]);

  const openMenu = useCallback((menuKey, triggerRect) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(menuKey);
    setMenuPos({ triggerLeft: triggerRect.left, triggerWidth: triggerRect.width });
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Map nav link text to menu keys
    const navTextMap = {
      'the origin': 'origin',
      'the journey': 'journey',
      'the arena': 'arena',
      'the rewards': 'rewards',
      'launch': 'launch',
    };

    const attachListeners = () => {
      // Clean up previous listeners
      listenersRef.current.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      listenersRef.current = [];

      // Find all nav links in the header (both Nuxt and React header)
      const headerLinks = document.querySelectorAll(
        'header .right a, header .right [class*="font-12"]'
      );

      headerLinks.forEach((link) => {
        const text = link.textContent.trim().toLowerCase();
        const menuKey = navTextMap[text];
        if (!menuKey) return;

        const enter = () => {
          const rect = link.getBoundingClientRect();
          openMenu(menuKey, rect);
        };
        const leave = scheduleClose;

        link.addEventListener('mouseenter', enter);
        link.addEventListener('mouseleave', leave);
        listenersRef.current.push({ el: link, enter, leave });
      });
    };

    // Attach immediately and also after a short delay (for Nuxt hydration)
    attachListeners();
    const timer = setTimeout(attachListeners, 1500);
    const timer2 = setTimeout(attachListeners, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      listenersRef.current.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [openMenu, scheduleClose]);

  if (!activeMenu || !MENU_DATA[activeMenu]) return null;

  return (
    <>
      <style>{`
        .origin-megamenu-link:hover {
          background: rgba(100,70,220,0.2) !important;
          border-color: rgba(160,120,255,0.5) !important;
          color: #ffffff !important;
          transform: translateY(-1px);
        }
        .origin-megamenu-cta:hover {
          color: #ffffff !important;
          border-bottom-color: rgba(200,160,255,0.8) !important;
          letter-spacing: 2px !important;
        }
        @keyframes megaMenuFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .origin-megamenu-panel {
          animation: megaMenuFadeIn 0.2s ease forwards;
        }
      `}</style>

      {/* Backdrop blur overlay under the menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 98,
        }}
      />

      {/* Mega Menu Panel */}
      <div
        ref={menuRef}
        className="origin-megamenu-panel"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        style={{
          position: 'fixed',
          top: '80px',
          left: '0',
          right: '0',
          margin: '0 auto',
          width: '100%',
          maxWidth: '900px',
          zIndex: 999,
          background: 'linear-gradient(135deg, rgba(8,4,24,0.97) 0%, rgba(12,6,35,0.97) 50%, rgba(6,2,20,0.97) 100%)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(80,50,180,0.3)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(100,60,220,0.1), inset 0 1px 0 rgba(140,100,255,0.1)',
          overflow: 'hidden',
          minHeight: '320px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Subtle top glow bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '15%',
          right: '15%',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(140,80,255,0.6), transparent)',
          pointerEvents: 'none',
        }} />

        <MegaMenuPanel item={activeMenu} data={MENU_DATA[activeMenu]} />
      </div>
    </>
  );
}
