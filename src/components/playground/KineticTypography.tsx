import React, { useState, useRef } from 'react';

export const KineticTypography: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const headline = 'ENGINEERED PRECISION';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      className="relative bg-[#121214] text-[#F9F9F6] p-8 md:p-12 rounded-2xl border border-black/10 overflow-hidden select-none cursor-crosshair min-h-[340px] flex flex-col justify-between"
    >
      {/* Top telemetry status */}
      <div className="flex items-center justify-between font-mono-tech text-xs text-white/50 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
          <span>EXP_01 :: VARIABLE_KINETICS</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>X: {(mousePos.x * 100).toFixed(0)}%</span>
          <span>Y: {(mousePos.y * 100).toFixed(0)}%</span>
          <span>DISTORTION: {isHovering ? 'ACTIVE' : 'IDLE'}</span>
        </div>
      </div>

      {/* Kinetic Headline with Dynamic Letter Spacing & Weight */}
      <div className="my-auto py-6 flex flex-wrap justify-center items-center gap-1 sm:gap-2">
        {headline.split('').map((char, i) => {
          if (char === ' ') {
            return <span key={i} className="w-4 sm:w-8" />;
          }

          // Compute distance to mouse
          const charRelativeX = i / headline.length;
          const dist = Math.abs(charRelativeX - mousePos.x);
          const weight = isHovering
            ? Math.round(900 - dist * 500)
            : 600;
          const offsetY = isHovering ? (mousePos.y - 0.5) * (1 - dist) * 32 : 0;
          const rotate = isHovering ? (mousePos.x - charRelativeX) * 20 : 0;
          const scale = isHovering ? Math.max(0.85, 1.4 - dist * 0.8) : 1;

          return (
            <span
              key={i}
              style={{
                fontWeight: Math.max(400, Math.min(900, weight)),
                transform: `translate3d(0, ${offsetY}px, 0) rotate(${rotate}deg) scale(${scale})`,
                transition: isHovering
                  ? 'transform 0.08s ease-out, font-weight 0.1s ease'
                  : 'transform 0.4s ease, font-weight 0.4s ease'
              }}
              className="font-display text-3xl sm:text-5xl md:text-6xl text-white inline-block tracking-normal"
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Explanatory footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-white/10 text-xs font-mono-tech text-white/50">
        <span>Move pointer across the letters to modulate weight and spring kinematics</span>
        <span className="text-[#CCFF00]">Calculated in real-time via client coordinates</span>
      </div>
    </div>
  );
};
