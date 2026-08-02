'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const EVENT_START_DATE = '2027-03-26T09:00:00+05:30';

export default function GlobalTimer() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00' });

  // Hide the floating widget on the landing page
  if (pathname === '/') {
    return null;
  }

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(EVENT_START_DATE) - +new Date();
      let days = '00', hours = '00', minutes = '00';
      if (difference > 0) {
        days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
      }
      return { days, hours, minutes };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update once a minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="global-floating-timer">
      {isOpen ? (
        <div className="glass-countdown-container expanded">
          <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close timer">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="countdown-title">HACKATHON KICKS OFF IN</div>
          <div className="countdown-cards">
            <div className="countdown-card">
              <span className="card-number">{timeLeft.days}</span>
              <span className="card-label">DAYS</span>
            </div>
            <div className="countdown-card">
              <span className="card-number">{timeLeft.hours}</span>
              <span className="card-label">HOURS</span>
            </div>
            <div className="countdown-card">
              <span className="card-number">{timeLeft.minutes}</span>
              <span className="card-label">MINS</span>
            </div>
          </div>
        </div>
      ) : (
        <button className="minimized-pill" onClick={() => setIsOpen(true)}>
          <span className="pill-dot"></span>
          <span className="pill-text">Hackathon: {timeLeft.days}d {timeLeft.hours}h</span>
        </button>
      )}
    </div>
  );
}
