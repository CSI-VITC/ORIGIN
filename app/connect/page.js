'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Connect() {
  const [formData, setFormData] = useState({ name: '', email: '', college: '', teamName: '', track: '', teamSize: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    { q: 'Who can participate?', a: 'Any college student with a passion for building. All skill levels welcome — beginners to experts.' },
    { q: 'How big can a team be?', a: 'Teams of 2 to 4 members. Solo participants will be helped with team formation at the event.' },
    { q: 'Is there a registration fee?', a: 'No. ORIGIN is completely free to attend. We believe cost should never stop a great idea.' },
    { q: 'What should I bring?', a: 'Your laptop, charger, ideas, and a willingness to stay up too late working on something you believe in.' },
    { q: 'Will food be provided?', a: 'Yes. Meals, snacks, and all the coffee you need will be available throughout the 36 hours.' },
    { q: 'Do we need a complete idea before coming?', a: 'No. Come with curiosity. Problem statements are revealed at the opening ceremony.' },
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
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <p className="font-neue-roman-14" style={{ color: '#FFFFFF', opacity: 0.5, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
              CSI ORIGIN — Final Chapter
            </p>
            <h1 className="font-machina-120" style={{ color: '#FFFFFF', lineHeight: 1.0, margin: 0 }}>
              Launch
            </h1>
            <p className="font-neue-roman-24" style={{ color: '#FFFFFF', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4, maxWidth: '700px', margin: '30px auto 0' }}>
              Your story starts here. The universe is expanding. The next breakthrough could carry your name.
            </p>
          </div>

          {/* Registration Form */}
          <div style={{ backgroundColor: '#0B1F3A', padding: '60px', borderRadius: '30px', marginBottom: '80px' }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <h2 className="font-machina-54" style={{ color: '#FFFFFF' }}>You're in the Universe.</h2>
                <p className="font-neue-roman-18" style={{ color: '#8FA3C0', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', lineHeight: 1.5 }}>
                  Registration received. Watch your inbox — more details about ORIGIN are coming your way.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '40px' }}>Register for ORIGIN</h2>
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {/* Name */}
                    <div>
                      <label className="font-neue-roman-14" style={{ display: 'block', color: '#FFFFFF', marginBottom: '10px', fontWeight: 'bold' }}>Full Name</label>
                      <input name="name" type="text" required onChange={handleChange} value={formData.name}
                        style={{ width: '100%', padding: '18px 25px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '30px', background: 'transparent', outline: 'none', color: '#FFFFFF', boxSizing: 'border-box' }} />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-neue-roman-14" style={{ display: 'block', color: '#FFFFFF', marginBottom: '10px', fontWeight: 'bold' }}>Email Address</label>
                      <input name="email" type="email" required onChange={handleChange} value={formData.email}
                        style={{ width: '100%', padding: '18px 25px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '30px', background: 'transparent', outline: 'none', color: '#FFFFFF', boxSizing: 'border-box' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {/* College */}
                    <div>
                      <label className="font-neue-roman-14" style={{ display: 'block', color: '#FFFFFF', marginBottom: '10px', fontWeight: 'bold' }}>College / University</label>
                      <input name="college" type="text" required onChange={handleChange} value={formData.college}
                        style={{ width: '100%', padding: '18px 25px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '30px', background: 'transparent', outline: 'none', color: '#FFFFFF', boxSizing: 'border-box' }} />
                    </div>

                    {/* Team Name */}
                    <div>
                      <label className="font-neue-roman-14" style={{ display: 'block', color: '#FFFFFF', marginBottom: '10px', fontWeight: 'bold' }}>Team Name</label>
                      <input name="teamName" type="text" onChange={handleChange} value={formData.teamName}
                        placeholder="Optional — can be formed at event"
                        style={{ width: '100%', padding: '18px 25px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '30px', background: 'transparent', outline: 'none', color: '#FFFFFF', boxSizing: 'border-box' }} />
                    </div>
                  </div>

                  {/* Track Selection */}
                  <div>
                    <label className="font-neue-roman-14" style={{ display: 'block', color: '#FFFFFF', marginBottom: '15px', fontWeight: 'bold' }}>Preferred Track</label>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {['AI / ML', 'Cybersecurity', 'Web & App', 'Robotics & IoT', 'Open Track'].map(t => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, track: t })}
                          style={{
                            padding: '12px 24px',
                            border: '1px solid rgba(255,255,255,0.25)',
                            borderRadius: '30px',
                            background: formData.track === t ? '#1E5EFF' : 'transparent',
                            color: formData.track === t ? '#ffffff' : '#FFFFFF',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontFamily: 'NeueRoman, sans-serif',
                            fontSize: '14px',
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="font-neue-roman-14" style={{ display: 'block', color: '#FFFFFF', marginBottom: '15px', fontWeight: 'bold' }}>Team Size</label>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      {['Solo', '2', '3', '4'].map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setFormData({ ...formData, teamSize: s })}
                          style={{
                            padding: '12px 28px',
                            border: '1px solid rgba(255,255,255,0.25)',
                            borderRadius: '30px',
                            background: formData.teamSize === s ? '#1E5EFF' : 'transparent',
                            color: formData.teamSize === s ? '#ffffff' : '#FFFFFF',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontFamily: 'NeueRoman, sans-serif',
                            fontSize: '14px',
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="font-neue-roman-16" style={{
                    backgroundColor: '#1E5EFF',
                    color: '#ffffff',
                    padding: '20px 60px',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: '10px',
                    transition: 'transform 0.2s ease, background-color 0.3s ease',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    Launch ORIGIN
                  </button>
                </form>
              </>
            )}
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '40px' }}>FAQs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqs.map((f, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', padding: '28px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                  <h3 className="font-machina-36" style={{ color: '#FFFFFF', margin: 0, lineHeight: 1.2, fontSize: '20px' }}>{f.q}</h3>
                  <p className="font-neue-roman-16" style={{ color: '#8FA3C0', lineHeight: 1.6, margin: 0 }}>{f.a}</p>
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
