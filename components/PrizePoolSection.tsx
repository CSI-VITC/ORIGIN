import { ScrollSyncedText } from './ui/scroll-synced-text';
import AsciiBackground from './AsciiBackground';

export default function PrizePoolSection() {
  const prizes = [
    "$2,000 USD OVERALL",
    "PRO TIER (3 MO)",
    "SCALE TIER (3 MO)",
    "CREATOR (1 MO)"
  ];

  return (
    <section id="prize" className="relative w-full border-b border-[#2A2A2A] bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AsciiBackground variant="matrix" opacity={0.08} />
      </div>

      <div className="relative z-10 w-full">
        <ScrollSyncedText prefixText="WIN" items={prizes} />
      </div>
    </section>
  );
}
