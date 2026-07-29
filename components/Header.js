'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 40px',
        zIndex: 100,
        pointerEvents: 'auto'
      }}>
        {/* Logo */}
        <Link href="/" className="logo font-machina-24" style={{
          color: '#1a1a1a',
          textDecoration: 'none',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Noomo
        </Link>

        {/* Desktop Links */}
        <nav className="hide-m" style={{ display: 'flex', gap: '30px' }}>
          <Link href="/work" className="font-neue-roman-14 menu-link">Work</Link>
          <Link href="/our-story" className="font-neue-roman-14 menu-link">Our Story</Link>
          <a href="https://labs.noomoagency.com/" target="_blank" rel="noreferrer" className="font-neue-roman-14 menu-link">Labs</a>
          <Link href="/insights" className="font-neue-roman-14 menu-link">Insights</Link>
          <Link href="/connect" className="font-neue-roman-14 menu-link">Connect</Link>
        </nav>

        {/* Let's Work Button */}
        <div className="lets-work-btn hide-m">
          <Link href="/connect" className="lets-work-link font-neue-roman-14">
            Let's work together
          </Link>
        </div>

        {/* Mobile Hamburger Burger */}
        <button 
          className="hamburger show-m" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            zIndex: 101,
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          <span style={{
            display: 'block',
            width: '25px',
            height: '2px',
            backgroundColor: '#1a1a1a',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
            transition: 'transform 0.3s ease'
          }} />
          <span style={{
            display: 'block',
            width: '25px',
            height: '2px',
            backgroundColor: '#1a1a1a',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }} />
          <span style={{
            display: 'block',
            width: '25px',
            height: '2px',
            backgroundColor: '#1a1a1a',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
            transition: 'transform 0.3s ease'
          }} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className="mobile-menu-overlay" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#c9d2e7',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
          pointerEvents: menuOpen ? 'auto' : 'none'
        }}
      >
        <Link href="/work" onClick={() => setMenuOpen(false)} className="font-machina-36 mobile-menu-link">Work</Link>
        <Link href="/our-story" onClick={() => setMenuOpen(false)} className="font-machina-36 mobile-menu-link">Our Story</Link>
        <a href="https://labs.noomoagency.com/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="font-machina-36 mobile-menu-link">Labs</a>
        <Link href="/insights" onClick={() => setMenuOpen(false)} className="font-machina-36 mobile-menu-link">Insights</Link>
        <Link href="/connect" onClick={() => setMenuOpen(false)} className="font-machina-36 mobile-menu-link">Connect</Link>
        <Link href="/connect" onClick={() => setMenuOpen(false)} className="lets-work-mobile font-neue-roman-16" style={{ marginTop: '20px' }}>
          Let's work together
        </Link>
      </div>

      <style jsx global>{`
        .menu-link {
          color: #1a1a1a;
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
        }
        .menu-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #1a1a1a;
          transition: width 0.3s ease;
        }
        .menu-link:hover::after {
          width: 100%;
        }
        .lets-work-link {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 30px;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.2s ease;
          display: inline-block;
        }
        .lets-work-link:hover {
          background-color: #333333;
          transform: translateY(-2px);
        }
        .mobile-menu-link {
          color: #1a1a1a;
          text-decoration: none;
          font-weight: bold;
        }
        .lets-work-mobile {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
