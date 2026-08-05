'use client';

import SectionHeader from './SectionHeader';
import AsciiBackground from './AsciiBackground';
import CountdownTimer from './CountdownTimer';

export default function AboutSection() {
  const keyFacts = [
    { label: 'DURATION', value: '24 HOURS', sub: 'Non-stop hacking' },
    { label: 'ELIGIBILITY', value: 'NATIONAL', sub: 'VIT & Non-VIT teams' },
    { label: 'VENUE', value: 'VIT CHENNAI', sub: 'On-campus final' },
    { label: 'FEE', value: 'FREE', sub: 'Food & swag provided' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#2A2A2A] relative overflow-hidden bg-[#070707]">
      <AsciiBackground variant="dots" opacity={0.05} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Countdown Banner */}
        <div className="mb-14">
          <CountdownTimer />
        </div>

        <SectionHeader
          secCode="SEC-02"
          numeral="02"
          title="ABOUT US"
          subtitle="COMPUTER SOCIETY OF INDIA · VIT CHENNAI"
        />

        {/* Concise About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-10">
          {/* Main Statement */}
          <div className="lg:col-span-6">
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-[#F2F0EB] uppercase tracking-wide leading-tight">
              Every breakthrough has an origin.
            </h3>
            <p className="mt-4 font-body-custom text-sm md:text-base text-[#8A8A8A] leading-relaxed">
              CSI ORIGIN 2026 is Computer Society of India (CSI) VIT Chennai’s premier national 24-hour hackathon. We bring together developers, quants, and systems engineers across India to build fault-tolerant financial systems, smart contract infrastructure, and high-frequency algorithms under real-world constraints.
            </p>
          </div>

          {/* Key Facts Matrix */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {keyFacts.map((fact, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#0A0A0A] border border-[#222222] hover:border-[#FF4D1C]/60 transition-colors group relative"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono-custom text-[10px] text-[#8A8A8A] tracking-widest uppercase">
                    {fact.label}
                  </span>
                  <div className="w-1 h-1 bg-[#FF4D1C] opacity-60 group-hover:opacity-100" />
                </div>
                <div className="font-sans font-bold text-xl sm:text-2xl text-[#F2F0EB] group-hover:text-[#FF4D1C] transition-colors tracking-wide">
                  {fact.value}
                </div>
                <div className="font-mono-custom text-[11px] text-[#8A8A8A] mt-1">
                  {fact.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

