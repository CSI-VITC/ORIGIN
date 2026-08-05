'use client';

import { motion } from 'motion/react';

interface SectionHeaderProps {
  secCode: string;
  numeral: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ secCode, numeral, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full mb-16 relative"
    >
      {/* Top Left Monospace Code */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono-custom text-xs text-[#8A8A8A] tracking-widest uppercase mb-4"
      >
        {secCode}
      </motion.div>

      {/* Centered Large Orange Numeral & White Serif Title */}
      <div className="text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="font-mono-custom text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FF4D1C] glow-num-text tracking-widest mb-2"
        >
          {numeral}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-normal uppercase text-[#F2F0EB] tracking-wider"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3 font-body-custom text-base md:text-lg text-[#8A8A8A] max-w-xl text-center"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Full-width 1px hairline rule beneath title */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
        className="mt-10 w-full h-px bg-[#2A2A2A] origin-center"
      />
    </motion.div>
  );
}

