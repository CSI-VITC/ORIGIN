'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ModalsProps {
  devfolioOpen: boolean;
  onCloseDevfolio: () => void;
  whatsappOpen: boolean;
  onCloseWhatsApp: () => void;
  selectedTrackName: string | null;
  onCloseTrack: () => void;
}

export default function InteractiveModals({
  devfolioOpen,
  onCloseDevfolio,
  whatsappOpen,
  onCloseWhatsApp,
  selectedTrackName,
  onCloseTrack,
}: ModalsProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [teamName, setTeamName] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDevfolioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onCloseDevfolio();
    }, 2000);
  };

  return (
    <>
      {/* Devfolio Registration Modal */}
      <AnimatePresence>
        {devfolioOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={onCloseDevfolio}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-[#FF4D1C] p-8 max-w-lg w-full relative shadow-[0_0_35px_rgba(255,77,28,0.2)]"
            >
              <div className="flex justify-between items-center mb-6 border-b border-[#2A2A2A] pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-[#FF4D1C] glow-orange-box" />
                  <span className="font-mono-custom text-xs text-[#FF4D1C] font-bold tracking-widest uppercase">
                    DEVFOLIO PORTAL // CSI ORIGIN 2026
                  </span>
                </div>
                <button
                  onClick={onCloseDevfolio}
                  className="font-mono-custom text-xs text-[#8A8A8A] hover:text-[#FF4D1C]"
                >
                  [ ESC ]
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono-custom">
                  <div className="text-3xl text-[#FF4D1C] glow-orange-text">✓ REGISTRATION INITIALIZED</div>
                  <p className="text-xs text-[#F2F0EB]">
                    Team <span className="text-[#FF4D1C] font-bold">{teamName}</span> pre-registered. Synchronizing with Devfolio API...
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl text-[#F2F0EB] uppercase">
                      OFFICIAL DEVFOLIO APPLICATION
                    </h3>
                    <p className="font-body-custom text-xs text-[#8A8A8A] mt-1">
                      Direct registration portal for CSI ORIGIN 2026. Teams of 2–4 members allowed.
                    </p>
                  </div>

                  <form onSubmit={handleDevfolioSubmit} className="space-y-4 font-mono-custom text-xs">
                    <div>
                      <label className="block text-[#8A8A8A] uppercase mb-2">Team Name</label>
                      <input
                        type="text"
                        required
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="e.g. QUANT_SOLVER_99"
                        className="w-full bg-[#0A0A0A] border border-[#2A2A2A] focus:border-[#FF4D1C] px-4 py-3 text-[#F2F0EB] focus:outline-none"
                      />
                    </div>

                    <div className="p-4 bg-[#0A0A0A] border border-[#2A2A2A] space-y-2 text-[#8A8A8A]">
                      <div className="flex justify-between">
                        <span>FEE:</span>
                        <span className="text-[#FF4D1C]">FREE (₹0)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VENUE:</span>
                        <span className="text-[#F2F0EB]">VIT CHENNAI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>DATES:</span>
                        <span className="text-[#F2F0EB]">18-19 AUG 2026</span>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                      <button
                        type="submit"
                        className="flex-1 py-3 bg-[#FF4D1C] text-[#0A0A0A] font-bold tracking-widest uppercase hover:bg-[#4A1E0F] hover:text-[#F2F0EB] transition-colors"
                      >
                        SUBMIT ON DEVFOLIO
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCopy('https://csiorigin2026.devfolio.co')}
                        className="px-4 py-3 border border-[#2A2A2A] text-[#8A8A8A] hover:text-[#F2F0EB] hover:border-[#FF4D1C]"
                      >
                        {copied ? 'COPIED!' : 'COPY LINK'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Community Join Modal */}
      <AnimatePresence>
        {whatsappOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={onCloseWhatsApp}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-[#FF4D1C] p-8 max-w-lg w-full relative shadow-[0_0_35px_rgba(255,77,28,0.2)]"
            >
              <div className="flex justify-between items-center mb-6 border-b border-[#2A2A2A] pb-4">
                <span className="font-mono-custom text-xs text-[#FF4D1C] font-bold tracking-widest uppercase">
                  COMMUNITY NETWORK // WHATSAPP
                </span>
                <button
                  onClick={onCloseWhatsApp}
                  className="font-mono-custom text-xs text-[#8A8A8A] hover:text-[#FF4D1C]"
                >
                  [ ESC ]
                </button>
              </div>

              <div className="space-y-6 text-center">
                <div className="inline-block p-4 bg-[#0A0A0A] border border-[#FF4D1C]">
                  {/* QR Code Graphic Simulation */}
                  <pre className="font-mono-custom text-[8px] text-[#FF4D1C] leading-none glow-orange-text">
{`██████████████  ████  ██████████████
██          ██  ██    ██          ██
██  ██████  ██  ████  ██  ██████  ██
██  ██████  ██        ██  ██████  ██
██  ██████  ██  ████  ██  ██████  ██
██          ██  ████  ██          ██
██████████████  ████  ██████████████
                ████                
████████  ██████    ████  ████  ████
██        ██    ██████    ██  ██  ██
██████████    ████    ██████    ████
                ████  ██      ██    
██████████████  ██    ██  ██    ██  
██          ██    ██████    ██████  
██  ██████  ██  ████  ████  ████  ██
██  ██████  ██  ██    ██████  ██████
██          ██  ████  ██    ██      
██████████████  ██████████  ████████`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-[#F2F0EB] uppercase">
                    CSI ORIGIN 2026 OFFICIAL GROUP
                  </h3>
                  <p className="font-body-custom text-xs text-[#8A8A8A] mt-2">
                    Join over 850+ finalist hackers, team leads, and mentors for real-time announcements, campus pass updates, and mentor Q&A.
                  </p>
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href="https://chat.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-[#FF4D1C] text-[#0A0A0A] font-mono-custom text-xs font-bold tracking-widest uppercase hover:bg-[#4A1E0F] hover:text-[#F2F0EB] transition-colors text-center"
                  >
                    JOIN WHATSAPP GROUP NOW
                  </a>
                  <button
                    onClick={() => handleCopy('https://chat.whatsapp.com/csiorigin2026')}
                    className="px-4 py-3 border border-[#2A2A2A] text-[#8A8A8A] font-mono-custom text-xs hover:text-[#F2F0EB] hover:border-[#FF4D1C]"
                  >
                    {copied ? 'COPIED!' : 'COPY INVITE'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Track Specification Modal */}
      <AnimatePresence>
        {selectedTrackName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={onCloseTrack}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-[#FF4D1C] p-8 max-w-xl w-full relative shadow-[0_0_35px_rgba(255,77,28,0.2)]"
            >
              <div className="flex justify-between items-center mb-6 border-b border-[#2A2A2A] pb-4">
                <span className="font-mono-custom text-xs text-[#FF4D1C] font-bold tracking-widest uppercase">
                  TRACK SPECIFICATION // {selectedTrackName}
                </span>
                <button
                  onClick={onCloseTrack}
                  className="font-mono-custom text-xs text-[#8A8A8A] hover:text-[#FF4D1C]"
                >
                  [ ESC ]
                </button>
              </div>

              <div className="space-y-6 font-mono-custom text-xs">
                <h3 className="font-display text-3xl text-[#F2F0EB]">
                  {selectedTrackName}
                </h3>

                <div className="p-4 bg-[#0A0A0A] border border-[#2A2A2A] space-y-3">
                  <div className="text-[#FF4D1C] uppercase font-bold">KEY TECHNICAL DOMAINS:</div>
                  <ul className="space-y-1.5 text-[#F2F0EB]">
                    <li>• Smart Contract Architecture & Verification</li>
                    <li>• Real-Time Data Streaming & Order Matching</li>
                    <li>• High-Frequency Risk Engines & Algorithmic Execution</li>
                    <li>• Cryptographic Proof Generation (zk-SNARKs / STARKs)</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="text-[#8A8A8A] uppercase">EVALUATION CRITERIA (100 PTS):</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 bg-[#0A0A0A] border border-[#2A2A2A]">Technical Complexity (30 pts)</div>
                    <div className="p-2 bg-[#0A0A0A] border border-[#2A2A2A]">Production Readiness (25 pts)</div>
                    <div className="p-2 bg-[#0A0A0A] border border-[#2A2A2A]">Innovation & Originality (25 pts)</div>
                    <div className="p-2 bg-[#0A0A0A] border border-[#2A2A2A]">Pitch & Presentation (20 pts)</div>
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <button
                    onClick={() => handleCopy(`https://csiorigin2026.vit.ac.in/tracks/${selectedTrackName.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="flex-1 py-3 bg-[#FF4D1C] text-[#0A0A0A] font-bold tracking-widest uppercase hover:bg-[#4A1E0F] hover:text-[#F2F0EB] transition-colors"
                  >
                    DOWNLOAD PPT TEMPLATE & SPEC
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
