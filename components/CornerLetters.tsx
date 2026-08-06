'use client';

export default function CornerLetters() {
  return (
    <div className="pointer-events-none select-none">
      {/* Top Left: C */}
      <div className="fixed top-6 left-6 z-40 font-display text-3xl md:text-5xl text-[#F2F0EB]/50 hover:text-[#FF4D1C] transition-all duration-300 pointer-events-auto cursor-pointer tracking-wider font-light group flex items-center">
        <span>C</span>
        <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">SI</span>
      </div>

      {/* Top Right: S */}
      <div className="fixed top-6 right-6 z-40 font-display text-3xl md:text-5xl text-[#F2F0EB]/50 hover:text-[#FF4D1C] transition-colors pointer-events-auto cursor-pointer tracking-wider font-light">
        S
      </div>

      {/* Bottom Left: I */}
      <div className="fixed bottom-6 left-6 z-40 font-display text-3xl md:text-5xl text-[#F2F0EB]/50 hover:text-[#FF4D1C] transition-colors pointer-events-auto cursor-pointer tracking-wider font-light">
        I
      </div>

      {/* Bottom Right: O */}
      <div className="fixed bottom-6 right-6 z-40 font-display text-3xl md:text-5xl text-[#F2F0EB]/50 hover:text-[#FF4D1C] transition-colors pointer-events-auto cursor-pointer tracking-wider font-light">
        O
      </div>

      {/* Top Center Crosshair Tick */}
      <div className="fixed top-4 left-1/4 z-30 font-mono-custom text-[10px] text-[#8A8A8A]/30">
        +
      </div>
      <div className="fixed top-4 right-1/4 z-30 font-mono-custom text-[10px] text-[#8A8A8A]/30">
        +
      </div>

      {/* Bottom Center Crosshair Tick */}
      <div className="fixed bottom-4 left-1/4 z-30 font-mono-custom text-[10px] text-[#8A8A8A]/30">
        +
      </div>
      <div className="fixed bottom-4 right-1/4 z-30 font-mono-custom text-[10px] text-[#8A8A8A]/30">
        +
      </div>
    </div>
  );
}

