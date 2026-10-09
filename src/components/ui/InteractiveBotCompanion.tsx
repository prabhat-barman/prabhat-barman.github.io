import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, ChevronUp, Terminal } from 'lucide-react';
import { profileData } from '../../data/profile';

export const InteractiveBotCompanion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHappy, setIsHappy] = useState(false);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const faceRef = useRef<HTMLDivElement>(null);

  const DIALOGUES = [
    "Beep boop! I'm Pixel, Prabhat's interactive AI companion 🤖",
    "Did you know Prabhat has 4+ years of real production React & React Native experience?",
    "Every component here is tuned for 60 FPS performance ⚡",
    "Looking for a frontend engineer? Check out his SiriusXM and IrisInsights work!",
    "Click anywhere or tap buttons below to test live interactive simulators!",
  ];

  // Pupil cursor tracking
  useEffect(() => {
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(() => {
        if (!faceRef.current) return;
        const rect = faceRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(4, Math.hypot(dx, dy) / 40); // max 4px pupil offset

        setPupilPos({
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Periodic blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4500);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleNextDialogue = () => {
    setIsHappy(true);
    setDialogueIndex((prev) => (prev + 1) % DIALOGUES.length);
    setTimeout(() => setIsHappy(false), 800);
  };

  return (
    <aside aria-label="Interactive portfolio assistant" className="fixed bottom-6 right-6 z-40 select-none">
      {/* Expanded Interactive Dialogue Box */}
      {isOpen && (
        <div
          role="region"
          aria-label="Assistant message and actions"
          className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#121214] text-white p-4 shadow-2xl border border-white/15 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono-tech">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              <span className="text-[#CCFF00] font-bold">PIXEL_BOT v1.4</span>
              <span className="text-white/40">• ONLINE</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Dialogue Message */}
          <div className="py-3 text-xs sm:text-sm font-body text-white/90 leading-relaxed min-h-[56px] flex items-center">
            {DIALOGUES[dialogueIndex]}
          </div>

          {/* Action Chips */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs font-mono-tech">
            <button
              type="button"
              onClick={handleNextDialogue}
              className="py-1.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-[#CCFF00]" />
              <span>Next Tip</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('open-terminal'));
              }}
              className="py-1.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#CCFF00] font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Terminal className="w-3 h-3" />
              <span>⌘K Shell</span>
            </button>
          </div>

          <div className="mt-2.5 text-[10px] font-mono-tech text-white/40 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Terminal className="w-2.5 h-2.5 text-[#CCFF00]" />
              {profileData.role}
            </span>
            <span>Netlink Software</span>
          </div>
        </div>
      )}

      {/* Floating Mascot Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setIsHappy(true);
          setTimeout(() => setIsHappy(false), 800);
        }}
        onMouseEnter={() => setIsHappy(true)}
        onMouseLeave={() => setIsHappy(false)}
        className="group relative flex items-center gap-3 px-3.5 py-2.5 rounded-full bg-[#121214] text-white shadow-xl hover:shadow-2xl border border-white/15 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Toggle interactive developer bot"
      >
        {/* Animated Robot Face with Cursor-Tracking Eyes */}
        <div
          ref={faceRef}
          className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-[#202024] to-[#121214] border border-white/20 flex items-center justify-center overflow-hidden shrink-0 shadow-inner"
        >
          {/* Little Antenna */}
          <div className="absolute -top-1 w-1 h-1.5 bg-[#CCFF00] rounded-full animate-pulse" />

          {/* Eyes Container */}
          <div className="flex items-center gap-1.5 z-10">
            {/* Left Eye */}
            <div className="relative w-2 h-2.5 rounded-full bg-black/60 flex items-center justify-center overflow-hidden border border-white/20">
              {isBlinking ? (
                <div className="w-full h-[1.5px] bg-[#CCFF00]" />
              ) : isHappy ? (
                <div className="text-[9px] font-bold text-[#CCFF00] leading-none">^</div>
              ) : (
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] transition-transform duration-75"
                  style={{
                    transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                  }}
                />
              )}
            </div>

            {/* Right Eye */}
            <div className="relative w-2 h-2.5 rounded-full bg-black/60 flex items-center justify-center overflow-hidden border border-white/20">
              {isBlinking ? (
                <div className="w-full h-[1.5px] bg-[#CCFF00]" />
              ) : isHappy ? (
                <div className="text-[9px] font-bold text-[#CCFF00] leading-none">^</div>
              ) : (
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] transition-transform duration-75"
                  style={{
                    transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mascot Label */}
        <div className="hidden xs:flex flex-col text-left">
          <span className="text-xs font-bold font-mono-tech text-white flex items-center gap-1.5">
            <span>Pixel Mascot</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
          </span>
          <span className="text-[10px] text-white/50 font-body">Tap to interact</span>
        </div>

        {/* Small Toggle Arrow */}
        <ChevronUp
          className={`w-3.5 h-3.5 text-white/70 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#CCFF00]' : ''
          }`}
        />
      </button>
    </aside>
  );
};
