'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface AsciiBackgroundProps {
  variant?: 'dots' | 'cube' | 'globe' | 'stream' | 'matrix' | 'dragonfly';
  opacity?: number;
}

export default function AsciiBackground({ variant = 'dots', opacity = 0.12 }: AsciiBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const charList = ['.', ':', '+', '*', 'x', '#', '%', '@'];

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(242, 240, 235, ${opacity})`;
      ctx.font = '10px "JetBrains Mono", monospace';

      const step = 28;
      const cols = Math.ceil(canvas.width / step);
      const rows = Math.ceil(canvas.height / step);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * step;
          const y = r * step;

          // Diagonal wave formula with micro shimmer
          const dist = Math.sin(c * 0.15 + r * 0.15 + time);
          const noise = Math.cos(c * 0.1 - r * 0.1 - time * 0.8);

          if (variant === 'dragonfly') {
            // Complex structural ASCII mesh with diagonal rays, wings, and vector nodes
            const cx = cols / 2;
            const cy = rows / 2;
            const dx = (c - cx) / (cols / 2);
            const dy = (r - cy) / (rows / 2);

            // Diagonal rays passing through top-left to bottom-right and vice versa
            const diagRay1 = Math.abs((c * 0.85 - r * 1.2 + time * 6) % 18) < 1.2;
            const diagRay2 = Math.abs((c * 1.1 + r * 0.7 - time * 4) % 24) < 1.0;

            // Wing mesh shapes (symmetry along vertical axis)
            const wingShape1 = Math.abs(dx) * 1.5 - Math.sin(dy * 3 + time * 0.5) * 0.4;
            const wingBoundary = wingShape1 > 0.3 && wingShape1 < 1.2 && Math.abs(dy) < 0.8;

            // Central body axis
            const isCenterAxis = Math.abs(c - cx) < 1.8;

            // Character selection based on geometry
            if (diagRay1 || diagRay2) {
              const rayChars = ['/', '\\', '0', '1', 'c', '0', 'd', 'g', 'o', '%', '#', '>', '<'];
              const charIdx = Math.floor(Math.abs(Math.sin(c * 0.2 + r * 0.3 + time)) * rayChars.length);
              ctx.fillStyle = `rgba(242, 240, 235, ${opacity * 1.4})`;
              ctx.fillText(rayChars[charIdx], x, y);
            } else if (isCenterAxis) {
              if ((r + Math.floor(time * 5)) % 3 === 0) {
                ctx.fillStyle = `rgba(255, 77, 28, ${opacity * 1.8})`;
                ctx.fillText(r % 2 === 0 ? '0' : '|', x, y);
              } else {
                ctx.fillStyle = `rgba(242, 240, 235, ${opacity * 0.8})`;
                ctx.fillText(':', x, y);
              }
            } else if (wingBoundary && (c + r) % 2 === 0) {
              const wingChars = ['<', '>', '^', 'v', '/', '\\', '~', '=', '-', 'o', '%'];
              const charIdx = Math.floor(Math.abs(Math.cos(c * 0.1 - r * 0.15 + time)) * wingChars.length);
              ctx.fillStyle = `rgba(242, 240, 235, ${opacity * (dist > 0 ? 1.1 : 0.6)})`;
              ctx.fillText(wingChars[charIdx], x, y);
            } else if (dist > 0.45 && noise > -0.2) {
              ctx.fillStyle = `rgba(242, 240, 235, ${opacity * 0.5})`;
              ctx.fillText('.', x, y);
            }
          } else if (variant === 'stream') {
            if ((c + r) % 3 === 0 && Math.random() > 0.4) {
              const charIdx = Math.floor(Math.abs(dist) * charList.length) % charList.length;
              ctx.fillText(charList[charIdx], x, y);
            }
          } else if (variant === 'globe') {
            const centerX = cols / 2;
            const centerY = rows / 2;
            const d = Math.sqrt((c - centerX) ** 2 + (r - centerY) ** 2);
            if (d < 12 && Math.sin(d * 0.4 - time) > 0) {
              ctx.fillText('.', x, y);
            }
          } else if (variant === 'matrix') {
            if ((c * 7 + r * 13) % 4 === 0 && dist > -0.2) {
              const charIdx = Math.floor(Math.abs(noise * 5)) % charList.length;
              ctx.fillText(charList[charIdx], x, y);
            }
          } else {
            // default dot-matrix halftone wave
            if (dist > 0.2 && noise > -0.3) {
              const char = dist > 0.7 ? '+' : '.';
              ctx.fillText(char, x, y);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, opacity]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      animate={{
        opacity: [opacity, opacity * 1.35, opacity * 0.75, opacity * 1.2, opacity],
        x: [0, 2, -1.5, 1, -0.5, 0],
        y: [0, -1.5, 2, -1, 1, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
        aria-hidden="true"
      />
    </motion.div>
  );
}

