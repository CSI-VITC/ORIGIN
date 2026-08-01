'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Work() {
  const pillars = [
    {
      title: "The Singularity",
      tagline: "Every universe-changing idea begins as a single point of energy. ORIGIN was born from that moment.",
      tags: ["Philosophy", "Vision", "Purpose"]
    },
    {
      title: "CSI's Mission",
      tagline: "The Computer Society of India drives innovation at the intersection of technology and human ambition.",
      tags: ["Community", "Education", "Innovation"]
    },
    {
      title: "Why ORIGIN?",
      tagline: "Because the best ideas don't announce themselves. They need a stage, a spark, and the right people around them.",
      tags: ["Hackathon", "Growth", "Impact"]
    },
    {
      title: "The Cosmic Metaphor",
      tagline: "Just as the universe expanded from nothingness, every great product, platform, and breakthrough begins in the same place.",
      tags: ["Storytelling", "Narrative", "Theme"]
    },
    {
      title: "Who Should Come",
      tagline: "Developers, designers, data scientists, and dreamers who believe that one weekend can change everything.",
      tags: ["Developers", "Designers", "Builders"]
    },
    {
      title: "The Story Begins",
      tagline: "ORIGIN is not a competition. It is a calling. Answer it, and you will never look at problems the same way again.",
      tags: ["Inspiration", "Challenge", "Legacy"]
    }
  ];

  return (
    <>
      <Header />

      <main style={{
        backgroundColor: '#05070D',
        minHeight: '100vh',
        padding: '160px 40px 100px',
        position: 'relative',
        zIndex: 5,
        pointerEvents: 'auto'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Hero */}
          <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
            <p className="font-neue-roman-14" style={{ color: '#FFFFFF', opacity: 0.5, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
              CSI ORIGIN — Chapter One
            </p>
            <h1 className="font-machina-120 load-works" style={{ color: '#FFFFFF', lineHeight: 1.0, margin: 0 }}>
              The Origin
            </h1>
            <p className="font-neue-roman-24 load-works" style={{ color: '#FFFFFF', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4 }}>
              Every breakthrough has an origin. The universe began with a singularity — one spark that set everything in motion. ORIGIN is that spark for you.
            </p>
          </div>

          {/* Quote block */}
          <div style={{ marginBottom: '80px', borderLeft: '2px solid rgba(255,255,255,0.25)', paddingLeft: '30px', maxWidth: '700px' }}>
            <p className="font-machina-36" style={{ color: '#FFFFFF', lineHeight: 1.2, fontStyle: 'italic' }}>
              "Where curiosity bends space, possibilities ignite, and every extraordinary innovation begins its journey."
            </p>
          </div>

          {/* Pillars grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px 40px',
            marginTop: '40px'
          }}>
            {pillars.map((c, idx) => (
              <div key={idx} className="case-card" style={{ marginTop: idx % 2 === 1 ? '80px' : '0px' }}>
                <div className="case-image-wrapper" style={{ position: 'relative', height: '300px', backgroundColor: '#0B1F3A', borderRadius: '20px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E5EFF' }}>
                    <span className="font-machina-36" style={{ opacity: 0.2, textAlign: 'center', padding: '0 20px' }}>{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <h3 className="font-machina-36" style={{ marginTop: '20px', color: '#FFFFFF' }}>{c.title}</h3>
                <p className="font-neue-roman-18" style={{ color: '#8FA3C0', marginTop: '8px', lineHeight: 1.4 }}>{c.tagline}</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
                  {c.tags.map((t, tIdx) => (
                    <span key={tIdx} className="font-neue-roman-12" style={{
                      border: '1px solid rgba(255,255,255,0.25)',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      color: '#FFFFFF',
                      opacity: 0.7
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
