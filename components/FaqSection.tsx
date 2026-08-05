'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  id: string;
  code: string;
  category: 'REGISTRATION' | 'LOGISTICS' | 'TEAMS' | 'TRACKS';
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const faqs: FaqItem[] = [
    {
      id: 'q-01',
      code: 'Q01',
      category: 'REGISTRATION',
      question: 'Is there any registration fee for CSI ORIGIN 2026?',
      answer: 'No. Registration for CSI ORIGIN 2026 is 100% free of cost for all participants. Food, high-speed WiFi, developer swag, and 24-hour workspace facilities at VIT Chennai are provided free to selected teams.',
    },
    {
      id: 'q-02',
      code: 'Q02',
      category: 'TEAMS',
      question: 'Who is eligible to participate? Can non-VIT students apply?',
      answer: 'Yes! CSI ORIGIN 2026 is a nationwide hackathon open to undergraduate, postgraduate, and diploma students from all universities, colleges, and institutes across India (both VIT and non-VIT students).',
    },
    {
      id: 'q-03',
      code: 'Q03',
      category: 'TEAMS',
      question: 'What is the required team size?',
      answer: 'Teams must consist of 2 to 4 members. Solo participation is not permitted to ensure collaborative engineering dynamics under real-time constraints.',
    },
    {
      id: 'q-04',
      code: 'Q04',
      category: 'LOGISTICS',
      question: 'Is CSI ORIGIN 2026 an in-person hackathon?',
      answer: 'Yes. Round 1 (PPT screening & architecture review) is online. The top selected finalist teams will attend the 24-hour live hackathon on-campus at VIT Chennai on 18–19 August 2026.',
    },
    {
      id: 'q-05',
      code: 'Q05',
      category: 'LOGISTICS',
      question: 'What items should participants bring to the venue?',
      answer: 'Finalists should bring valid college ID cards, laptops, chargers, extension boards, government ID (Aadhaar/PAN), personal items, and any specialized hardware (if relevant to your track).',
    },
    {
      id: 'q-06',
      code: 'Q06',
      category: 'TRACKS',
      question: 'How does track selection and problem statement allocation work?',
      answer: 'Problem statements across FinTech Open Innovation, Algorithmic Trading, and ZK Systems will be officially released prior to Round 1. Teams select their preferred track during Round 1 submission.',
    },
    {
      id: 'q-07',
      code: 'Q07',
      category: 'REGISTRATION',
      question: 'Where will official announcements and finalist updates be posted?',
      answer: 'All official announcements, schedule adjustments, and campus entry details will be published in the official CSI ORIGIN 2026 WhatsApp Group and Devfolio portal.',
    },
  ];

  const categories = ['ALL', 'REGISTRATION', 'TEAMS', 'LOGISTICS', 'TRACKS'];

  const filteredFaqs = activeFilter === 'ALL'
    ? faqs
    : faqs.filter((f) => f.category === activeFilter);

  return (
    <section id="faq" className="py-24 md:py-32 border-b border-[#2A2A2A] relative overflow-hidden bg-[#070707]">
      <AsciiBackground variant="stream" opacity={0.05} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          secCode="SEC-06"
          numeral="06"
          title="FAQ"
          subtitle="FREQUENTLY ASKED TECHNICAL & LOGISTICAL INQUIRIES"
        />

        {/* Dragonfly-style Category Filters Row */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#2A2A2A] pb-6">
          <span className="font-mono-custom text-xs text-[#8A8A8A] mr-4 hidden sm:inline">
            {filteredFaqs.length} ITEMS
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono-custom text-[11px] px-3.5 py-1.5 uppercase tracking-wider transition-colors ${
                activeFilter === cat
                  ? 'bg-[#FF4D1C] text-[#0A0A0A] font-bold'
                  : 'bg-[#121212] text-[#8A8A8A] border border-[#2A2A2A] hover:text-[#F2F0EB] hover:border-[#FF4D1C]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dragonfly Dragonfly-Style Table View Rows */}
        <div className="w-full flex flex-col border-t border-[#2A2A2A]">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border-b border-[#2A2A2A] hover:bg-[#101010] transition-colors group cursor-pointer"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                {/* Main Row Bar */}
                <div className="py-6 px-2 sm:px-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Col 1: Question Title (35% width) */}
                  <div className="md:col-span-4 flex items-start gap-3">
                    <span className="font-mono-custom text-xs text-[#8A8A8A] shrink-0 pt-0.5">
                      {faq.code}
                    </span>
                    <h3 className="font-sans font-bold text-sm sm:text-base text-[#F2F0EB] group-hover:text-[#FF4D1C] transition-colors uppercase tracking-wide leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Col 2: Answer Preview / Content (50% width) */}
                  <div className="md:col-span-6 text-xs sm:text-sm text-[#8A8A8A] font-body-custom leading-relaxed pr-4">
                    <p className={isOpen ? '' : 'line-clamp-2'}>
                      {faq.answer}
                    </p>
                  </div>

                  {/* Col 3: Category Tag & Orange Double Pixel Mark (15% width) */}
                  <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3 font-mono-custom text-[10px] text-[#8A8A8A] tracking-widest uppercase">
                    <span className="group-hover:text-[#F2F0EB] transition-colors">
                      {faq.category}
                    </span>
                    {/* Dragonfly double orange pixel accent mark */}
                    <div className="flex flex-col gap-0.5 shrink-0">
                      <div className="w-1.5 h-1.5 bg-[#FF4D1C]" />
                      <div className="w-1.5 h-1.5 bg-[#FF4D1C]" />
                    </div>
                  </div>
                </div>

                {/* Expanded Answer Content when open */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-4 md:px-8 pt-2 font-mono-custom text-xs text-[#FF4D1C]/80 flex items-center gap-2">
                        <span>[ STATUS: RESOLVED ]</span>
                        <span className="text-[#8A8A8A]">• CLICK TO COLLAPSE</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

