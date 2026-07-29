'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Connect() {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h1 className="font-machina-120" style={{ color: '#1a1a1a', lineHeight: 1.0, margin: 0 }}>
              Connect
            </h1>
            <p className="font-neue-roman-24" style={{ color: '#1a1a1a', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4 }}>
              Let's build something unforgettable. Share your project details below.
            </p>
          </div>

          {/* Form Card */}
          <div style={{ backgroundColor: '#e2e6f0', padding: '60px', borderRadius: '30px' }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h2 className="font-machina-54" style={{ color: '#1a1a1a' }}>Inquiry Sent!</h2>
                <p className="font-neue-roman-18" style={{ color: '#666666', marginTop: '10px' }}>
                  Thank you for reaching out. We will review your project details and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                {/* Name */}
                <div>
                  <label className="font-neue-roman-14" style={{ display: 'block', color: '#1a1a1a', marginBottom: '10px', fontWeight: 'bold' }}>Your name</label>
                  <input type="text" required style={{ width: '100%', padding: '18px 25px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '30px', background: 'transparent', outline: 'none', color: '#1a1a1a' }} />
                </div>

                {/* Email */}
                <div>
                  <label className="font-neue-roman-14" style={{ display: 'block', color: '#1a1a1a', marginBottom: '10px', fontWeight: 'bold' }}>Your email</label>
                  <input type="email" required style={{ width: '100%', padding: '18px 25px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '30px', background: 'transparent', outline: 'none', color: '#1a1a1a' }} />
                </div>

                {/* Description */}
                <div>
                  <label className="font-neue-roman-14" style={{ display: 'block', color: '#1a1a1a', marginBottom: '10px', fontWeight: 'bold' }}>Tell us about the project</label>
                  <textarea rows="5" required style={{ width: '100%', padding: '18px 25px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '20px', background: 'transparent', outline: 'none', color: '#1a1a1a', resize: 'vertical' }} />
                </div>

                {/* Budget selector */}
                <div>
                  <label className="font-neue-roman-14" style={{ display: 'block', color: '#1a1a1a', marginBottom: '15px', fontWeight: 'bold' }}>Project budget (USD)</label>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map(b => (
                      <button 
                        key={b}
                        type="button"
                        onClick={() => handleBudgetSelect(b)}
                        style={{
                          padding: '12px 28px',
                          border: '1px solid rgba(26,26,26,0.15)',
                          borderRadius: '30px',
                          background: selectedBudget === b ? '#1a1a1a' : 'transparent',
                          color: selectedBudget === b ? '#ffffff' : '#1a1a1a',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button type="submit" className="font-neue-roman-16" style={{
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  padding: '20px 50px',
                  border: 'none',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  transition: 'transform 0.2s ease, background-color 0.3s ease'
                }}>
                  Send inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
