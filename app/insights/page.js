'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Insights() {
  const articles = [
    {
      title: "Why Gen Z broke the traditional marketing funnel",
      date: "January 15, 2026",
      tag: "Marketing"
    },
    {
      title: "The power of 3D storytelling in modern web design",
      date: "February 12, 2026",
      tag: "Design"
    },
    {
      title: "WebGL Performance: 3D websites for mobile devices",
      date: "March 18, 2026",
      tag: "Development"
    },
    {
      title: "AI-driven brand activation: A design case study",
      date: "April 05, 2026",
      tag: "AI Tech"
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
          <div style={{ marginBottom: '80px' }}>
            <h1 className="font-machina-120" style={{ color: '#1a1a1a', lineHeight: 1.0, margin: 0 }}>
              Insights
            </h1>
            <p className="font-neue-roman-24" style={{ color: '#1a1a1a', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4, maxWidth: '800px' }}>
              Thoughts, articles, and case studies from our design and engineering labs.
            </p>
          </div>

          {/* Grid of articles */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px 40px',
            marginTop: '40px'
          }}>
            {articles.map((a, idx) => (
              <div key={idx} className="article-card">
                <div className="article-image-wrapper" style={{ position: 'relative', height: '400px', backgroundColor: '#e2e6f0', borderRadius: '20px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#b7bdcc' }}>
                    <span className="font-machina-36" style={{ opacity: 0.25 }}>Article</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginTop: '20px', alignItems: 'center' }}>
                  <span className="font-neue-roman-12" style={{
                    backgroundColor: 'rgba(26,26,26,0.1)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    color: '#1a1a1a',
                    fontWeight: 'bold'
                  }}>{a.tag}</span>
                  <span className="font-neue-roman-14" style={{ color: '#666666' }}>{a.date}</span>
                </div>
                <h3 className="font-machina-36" style={{ marginTop: '15px', color: '#1a1a1a', lineHeight: 1.2 }}>{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
