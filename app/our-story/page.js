'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function OurStory() {
  const stages = [
    {
      number: '01',
      title: 'Curiosity',
      description: 'It starts with a question. A problem you cannot stop thinking about. That restlessness is where every revolution begins.'
    },
    {
      number: '02',
      title: 'Team Formation',
      description: 'No idea survives alone. Form a team of up to four people. Different skills, one shared obsession — building something that matters.'
    },
    {
      number: '03',
      title: 'Ideation & Workshops',
      description: 'Expert-led sessions guide you from raw ideas to actionable concepts. Learn frameworks, pressure-test assumptions, and sharpen your edge.'
    },
    {
      number: '04',
      title: 'Mentorship',
      description: 'Industry leaders, engineers, and entrepreneurs join ORIGIN to mentor. Real conversations, direct feedback, and connections that last beyond the event.'
    },
    {
      number: '05',
      title: 'Build',
      description: '36 hours. One problem statement. Every line of code, every design choice, every decision — it all leads to this moment.'
    },
    {
      number: '06',
      title: 'Impact',
      description: 'Present your solution to a panel of judges. The best ideas don\'t just win prizes — they get recognized, funded, and launched into the world.'
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
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* Hero */}
          <div style={{ marginBottom: '80px' }}>
            <p className="font-neue-roman-14" style={{ color: '#FFFFFF', opacity: 0.5, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
              CSI ORIGIN — Chapter Two
            </p>
            <h1 className="font-machina-120" style={{ color: '#FFFFFF', lineHeight: 1.0, margin: 0 }}>
              The Journey
            </h1>
            <p className="font-neue-roman-24" style={{ color: '#FFFFFF', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4, maxWidth: '800px' }}>
              Travel through every stage of innovation — from curiosity and collaboration to building solutions that solve real-world problems.
            </p>
          </div>

          {/* Quote */}
          <div style={{ marginBottom: '80px', borderLeft: '2px solid rgba(255,255,255,0.25)', paddingLeft: '30px', maxWidth: '700px' }}>
            <p className="font-machina-36" style={{ color: '#FFFFFF', lineHeight: 1.2, fontStyle: 'italic' }}>
              "From a fleeting spark to a breakthrough capable of changing the world."
            </p>
          </div>

          {/* Journey Stages */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '60px' }}>
            {stages.map((s, i) => (
              <div key={i}>
                <p className="font-machina-36" style={{ color: '#FFFFFF', opacity: 0.2, margin: '0 0 12px 0' }}>{s.number}</p>
                <h2 className="font-machina-54" style={{ color: '#FFFFFF', lineHeight: 1.1, margin: 0 }}>
                  {s.title}
                </h2>
                <p className="font-neue-roman-18" style={{ color: '#8FA3C0', marginTop: '20px', lineHeight: 1.6 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline callout */}
          <div style={{ marginTop: '100px', backgroundColor: '#0B1F3A', padding: '60px', borderRadius: '20px' }}>
            <h3 className="font-machina-36" style={{ color: '#FFFFFF' }}>The 36-Hour Timeline</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px', marginTop: '40px' }}>
              {[
                { time: 'Day 1 — Morning', label: 'Opening ceremony, problem statements revealed, team formation' },
                { time: 'Day 1 — Afternoon', label: 'Ideation workshops, mentor sessions, first check-in' },
                { time: 'Day 1 — Night', label: 'Build sprint begins. The clock is running.' },
                { time: 'Day 2 — Morning', label: 'Mentorship rounds, progress reviews, energy drinks' },
                { time: 'Day 2 — Afternoon', label: 'Final submissions. Presentations begin.' },
                { time: 'Day 2 — Evening', label: 'Judging, awards ceremony, closing event' }
              ].map((t, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
                  <p className="font-neue-roman-12" style={{ color: '#FFFFFF', opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{t.time}</p>
                  <p className="font-neue-roman-16" style={{ color: '#FFFFFF', lineHeight: 1.4 }}>{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
