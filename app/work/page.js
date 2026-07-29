'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Work() {
  const cases = [
    {
      title: "Vibrant Wellness",
      tagline: "High-end health technology branding & immersive web presence",
      tags: ["Web 3D", "Strategy", "Creative Direction"]
    },
    {
      title: "Salesforce 360 AI Platform",
      tagline: "Enterprise interactive 3D tiles & AI storytelling",
      tags: ["WebGL", "Enterprise UX", "Interactive Design"]
    },
    {
      title: "Archrival Gen Z Funnel",
      tagline: "Interactive digital editorial report breaking marketing funnels",
      tags: ["Micro-Animations", "Gen Z Branding", "React"]
    },
    {
      title: "Coinbase & Golden State Warriors",
      tagline: "Mobile-first game-day brand activation and live NFT minting",
      tags: ["Web3 Tech", "Brand Activation", "Mobile Design"]
    },
    {
      title: "Percipio Health",
      tagline: "Accessible healthcare services web application design",
      tags: ["Technical UX", "Product Design", "Healthcare"]
    },
    {
      title: "Vision by Dandy",
      tagline: "Refined 3D intraoral scanner product visualization landing page",
      tags: ["Product Visuals", "WebGL Shaders", "UI Craft"]
    }
  ];

  return (
    <>
      <Header />
      
      <main style={{
        backgroundColor: '#c9d2e7',
        minHeight: '100vh',
        padding: '160px 40px 100px',
        position: 'relative',
        zIndex: 5,
        pointerEvents: 'auto'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
            <h1 className="font-machina-120 load-works" style={{ color: '#1a1a1a', lineHeight: 1.0, margin: 0 }}>
              Our Work
            </h1>
            <p className="font-neue-roman-24 load-works" style={{ color: '#1a1a1a', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4 }}>
              Explore our portfolio of 3D storytelling websites and immersive digital experiences crafted for brands who believe craft makes the difference.
            </p>
          </div>

          {/* Cases grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px 40px',
            marginTop: '40px'
          }}>
            {cases.map((c, idx) => (
              <div key={idx} className="case-card" style={{ marginTop: idx % 2 === 1 ? '80px' : '0px' }}>
                <div className="case-image-wrapper" style={{ position: 'relative', height: '500px', backgroundColor: '#e2e6f0', borderRadius: '20px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#c5cbdb' }}>
                    <span className="font-machina-36" style={{ opacity: 0.25 }}>{c.title}</span>
                  </div>
                </div>
                <h3 className="font-machina-36" style={{ marginTop: '20px', color: '#1a1a1a' }}>{c.title}</h3>
                <p className="font-neue-roman-18" style={{ color: '#666666', marginTop: '8px', lineHeight: 1.4 }}>{c.tagline}</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                  {c.tags.map((t, tIdx) => (
                    <span key={tIdx} className="font-neue-roman-12" style={{
                      border: '1px solid rgba(26,26,26,0.15)',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      color: '#1a1a1a',
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
