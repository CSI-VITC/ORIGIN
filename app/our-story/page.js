'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function OurStory() {
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
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '80px' }}>
            <h1 className="font-machina-120" style={{ color: '#1a1a1a', lineHeight: 1.0, margin: 0 }}>
              Our Story
            </h1>
            <p className="font-neue-roman-24" style={{ color: '#1a1a1a', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4, maxWidth: '800px' }}>
              We are a team of creators, designers, and WebGL engineers obsessed with detail, innovation, and crafting digital narratives that leave a lasting impression.
            </p>
          </div>

          {/* Philosophy Section */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '60px' }}>
            <div>
              <h2 className="font-machina-54" style={{ color: '#1a1a1a', lineHeight: 1.1 }}>
                Innovate with a human touch.
              </h2>
              <p className="font-neue-roman-18" style={{ color: '#666666', marginTop: '30px', lineHeight: 1.6 }}>
                Our expertise and craftsmanship allow us to convert big, complex technological ideas into accessible, engaging human experiences. We bridge the gap between creative visual art and real-time WebGL engineering.
              </p>
            </div>
            <div>
              <h2 className="font-machina-54" style={{ color: '#1a1a1a', lineHeight: 1.1 }}>
                Collaboration first.
              </h2>
              <p className="font-neue-roman-18" style={{ color: '#666666', marginTop: '30px', lineHeight: 1.6 }}>
                Great work cannot happen without trust and collaboration. When working with Noomo, you get the value of working directly with the founders. We take time to align on your unique business goals, developing bespoke systems that connect emotionally.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '100px', backgroundColor: '#e2e6f0', padding: '60px', borderRadius: '20px' }}>
            <h3 className="font-machina-36" style={{ color: '#1a1a1a' }}>We partner with the bold.</h3>
            <p className="font-neue-roman-18" style={{ color: '#666666', marginTop: '20px', lineHeight: 1.5, maxWidth: '700px' }}>
              We work with Salesforce, AMD, Red Bull, Coinbase, and Intel. Companies that value true collaboration and understand that premium digital execution requires time, trust, and mutual respect.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
