'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Insights() {
  const prizes = [
    { place: '1st Place', prize: '₹50,000', perks: ['Cash Prize', 'Internship Fast-Track', 'Certificate of Excellence', 'Industry Mentorship'] },
    { place: '2nd Place', prize: '₹30,000', perks: ['Cash Prize', 'Certificate', 'Networking Access', 'Sponsor Recognition'] },
    { place: '3rd Place', prize: '₹15,000', perks: ['Cash Prize', 'Certificate', 'Community Spotlight'] },
  ];

  const specialAwards = [
    { label: 'Best Use of AI', value: 'Special Recognition + Prize' },
    { label: 'Most Innovative Design', value: 'Sponsored Award' },
    { label: 'Best Rookie Team', value: 'First-timers Award' },
    { label: 'Best Sustainability Solution', value: 'Green Tech Award' },
  ];

  const mentors = [
    { name: 'Industry Engineer', role: 'Senior SWE at a top tech company', domain: 'Engineering' },
    { name: 'Product Leader', role: 'Director of Product, Series B Startup', domain: 'Product' },
    { name: 'Design Expert', role: 'UI/UX Lead, Fortune 500', domain: 'Design' },
    { name: 'Founder', role: 'CEO of funded AI startup', domain: 'Entrepreneurship' },
    { name: 'Security Researcher', role: 'Ethical Hacker & Author', domain: 'Cybersecurity' },
    { name: 'Data Scientist', role: 'ML Research at top university', domain: 'AI / ML' },
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
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Hero */}
          <div style={{ marginBottom: '80px' }}>
            <p className="font-neue-roman-14" style={{ color: '#FFFFFF', opacity: 0.5, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
              CSI ORIGIN — Chapter Four
            </p>
            <h1 className="font-machina-120" style={{ color: '#FFFFFF', lineHeight: 1.0, margin: 0 }}>
              The Rewards
            </h1>
            <p className="font-neue-roman-24" style={{ color: '#FFFFFF', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4, maxWidth: '800px' }}>
              The greatest reward is creating something that matters. Recognition is only the beginning.
            </p>
          </div>

          {/* Quote */}
          <div style={{ marginBottom: '80px', borderLeft: '2px solid rgba(255,255,255,0.25)', paddingLeft: '30px', maxWidth: '700px' }}>
            <p className="font-machina-36" style={{ color: '#FFFFFF', lineHeight: 1.2, fontStyle: 'italic' }}>
              "Beyond winning."
            </p>
          </div>

          {/* Prize Pool */}
          <div style={{ marginBottom: '100px' }}>
            <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '40px' }}>Prize Pool</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
              {prizes.map((p, i) => (
                <div key={i} style={{
                  backgroundColor: i === 0 ? '#1E5EFF' : '#0B1F3A',
                  borderRadius: '24px',
                  padding: '40px',
                  color: i === 0 ? '#ffffff' : '#FFFFFF',
                }}>
                  <p className="font-neue-roman-12" style={{ opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px', color: 'inherit' }}>{p.place}</p>
                  <h3 className="font-machina-54" style={{ color: 'inherit', margin: '0 0 24px 0', lineHeight: 1 }}>{p.prize}</h3>
                  {p.perks.map((perk, pi) => (
                    <p key={pi} className="font-neue-roman-16" style={{ color: 'inherit', opacity: i === 0 ? 0.8 : 0.6, marginBottom: '8px', lineHeight: 1.4 }}>
                      — {perk}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Special Awards */}
          <div style={{ marginBottom: '100px', backgroundColor: '#0B1F3A', padding: '60px', borderRadius: '20px' }}>
            <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '40px' }}>Special Awards</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {specialAwards.map((a, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
                  <p className="font-neue-roman-12" style={{ color: '#FFFFFF', opacity: 0.45, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{a.label}</p>
                  <p className="font-neue-roman-18" style={{ color: '#FFFFFF', lineHeight: 1.4 }}>{a.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div style={{ marginBottom: '100px' }}>
            <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '12px' }}>Mentors & Judges</h2>
            <p className="font-neue-roman-18" style={{ color: '#8FA3C0', marginBottom: '40px', lineHeight: 1.5 }}>
              World-class practitioners across engineering, product, design, and entrepreneurship.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
              {mentors.map((m, i) => (
                <div key={i} style={{ backgroundColor: '#0B1F3A', borderRadius: '20px', padding: '30px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#1E5EFF', marginBottom: '20px' }} />
                  <span className="font-neue-roman-12" style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '3px 10px', borderRadius: '20px', color: '#FFFFFF', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>{m.domain}</span>
                  <h3 className="font-machina-36" style={{ color: '#FFFFFF', margin: '12px 0 6px 0', lineHeight: 1.2 }}>{m.name}</h3>
                  <p className="font-neue-roman-14" style={{ color: '#8FA3C0', lineHeight: 1.4 }}>{m.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsors callout */}
          <div style={{ backgroundColor: '#1E5EFF', padding: '60px', borderRadius: '24px', textAlign: 'center' }}>
            <h3 className="font-machina-36" style={{ color: '#ffffff', marginBottom: '16px' }}>Sponsors & Partners</h3>
            <p className="font-neue-roman-18" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.5 }}>
              ORIGIN is powered by companies who believe the next breakthrough starts in a room like this. Interested in sponsoring?
            </p>
            <a href="/connect" className="font-neue-roman-16" style={{
              display: 'inline-block',
              backgroundColor: '#ffffff',
              color: '#FFFFFF',
              padding: '16px 40px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease'
            }}>
              Become a Sponsor
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
