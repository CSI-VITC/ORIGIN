'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section" style={{
      backgroundColor: '#0B1F3A',
      color: '#ffffff',
      padding: '80px 40px 40px',
      position: 'relative',
      zIndex: 10,
      pointerEvents: 'auto',
      marginTop: '-1px'
    }}>
      <div className="wrapper" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '60px',
      }}>
        {/* Left Column */}
        <div className="left-col">
          <h2 className="font-machina-54" style={{ marginBottom: '20px', lineHeight: 1.1 }}>
            With us it happens.<br />
            We would love to hear from you.
          </h2>
          <Link href="/connect" className="contact-cta font-neue-roman-16">
            Let's work together
          </Link>
          <p className="font-neue-roman-16" style={{ marginTop: '40px', color: '#8FA3C0' }}>
            hello@noomoagency.com
          </p>
        </div>

        {/* Sitemap */}
        <div className="links-col">
          <p className="footer-tag font-neue-roman-12">Sitemap</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link href="/work" className="footer-link">Work</Link></li>
            <li><Link href="/our-story" className="footer-link">Our Story</Link></li>
            <li><a href="https://labs.noomoagency.com/" target="_blank" rel="noreferrer" className="footer-link">Labs</a></li>
            <li><Link href="/insights" className="footer-link">Insights</Link></li>
            <li><Link href="/connect" className="footer-link">Connect</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="socials-col">
          <p className="footer-tag font-neue-roman-12">Socials</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="https://www.instagram.com/noomoagency/" target="_blank" rel="noreferrer" className="footer-link">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/noomo-agency/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a></li>
            <li><a href="https://twitter.com/noomoagency" target="_blank" rel="noreferrer" className="footer-link">Twitter</a></li>
            <li><a href="https://www.facebook.com/noomoagency/" target="_blank" rel="noreferrer" className="footer-link">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{
        maxWidth: '1200px',
        margin: '80px auto 0 auto',
        paddingTop: '30px',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#8FA3C0',
        fontSize: '14px'
      }}>
        <p className="font-neue-roman-14">© 2026 Noomo Agency. All rights reserved.</p>
        <p className="font-neue-roman-14">Made natively in Next.js</p>
      </div>

      <style jsx>{`
        .footer-tag {
          color: #8FA3C0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .footer-link {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: #4DA3FF;
        }
        .contact-cta {
          display: inline-block;
          border: 1px solid #ffffff;
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 30px;
          text-decoration: none;
          margin-top: 10px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .contact-cta:hover {
          background-color: #ffffff;
          color: #1E5EFF;
        }
        @media (max-width: 768px) {
          footer {
            padding: 60px 20px 20px;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
            margin-top: 60px;
          }
        }
      `}</style>
    </footer>
  );
}
