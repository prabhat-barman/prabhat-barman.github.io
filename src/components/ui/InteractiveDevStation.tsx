import React, { useState, useEffect, useRef } from 'react';
import { 
  Headphones, 
  Coffee, 
  Zap, 
  MessageSquare, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Terminal,
  Activity,
  Code2
} from 'lucide-react';

interface InteractiveDevStationProps {
  className?: string;
}

const QUOTES = [
  "Hey there! Welcome to Prabhat.dev 👋",
  "React Native + Reanimated 3: Smooth 60fps on iOS & Android 📱",
  "Currently architecting high-performance React 19 apps ⚡",
  "Bluetooth LE & JSI Bridges: Sub-50ms telematics response 🏎️",
  "Coffee converted into clean TypeScript code: 1,420+ cups ☕",
  "60 FPS locked in. Zero frame drops allowed! 🎯",
  "Need a senior React & React Native engineer? Let's collaborate!",
  "Inspect the code: Strict TypeScript, zero warnings 🛡️",
];

export const InteractiveDevStation: React.FC<InteractiveDevStationProps> = ({ className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Interactive States
  const [activeMood, setActiveMood] = useState<'coding' | 'focus' | 'coffee' | 'turbo'>('coding');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);
  const [coffeeLevel, setCoffeeLevel] = useState(85);
  const [turboCount, setTurboCount] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [fps, setFps] = useState(60);

  // Measure real-time FPS
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const measureFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measureFps);
    };

    animId = requestAnimationFrame(measureFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Mouse tilt physics
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Next quote
  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    setShowBubble(true);
  };

  // Trigger Turbo compile
  const handleTurbo = () => {
    setActiveMood('turbo');
    setTurboCount((prev) => prev + 1);
    setShowBubble(true);
    setQuoteIndex(4); // 60 FPS quote

    setTimeout(() => {
      setActiveMood('coding');
    }, 2500);
  };

  // Refuel coffee
  const handleCoffee = () => {
    setActiveMood('coffee');
    setCoffeeLevel((prev) => Math.min(100, prev + 15));
    setShowBubble(true);
    setQuoteIndex(3); // Coffee quote

    setTimeout(() => {
      setActiveMood('coding');
    }, 2500);
  };

  // Toggle Lo-Fi Focus
  const handleFocus = () => {
    setActiveMood((prev) => (prev === 'focus' ? 'coding' : 'focus'));
    setIsMuted((prev) => !prev);
    setShowBubble(true);
    setQuoteIndex(1);
  };

  return (
    <div
      className={`relative select-none perspective-[1200px] ${className}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Tilting Card Container */}
      <div
        className="relative rounded-3xl overflow-hidden border border-black/10 bg-[#FAF9F5] shadow-xl md:shadow-2xl transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.015 : 1}, ${isHovered ? 1.015 : 1}, 1)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Glare Reflection Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />

        {/* Top Header Bar / Live Status */}
        <div className="absolute top-0 inset-x-0 z-20 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
          {/* Status Badge */}
          <div className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono-tech border border-white/10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]" />
            </span>
            <span className="font-semibold text-[11px] tracking-wide">
              {activeMood === 'focus' && 'HEADPHONES ON • FOCUS'}
              {activeMood === 'coffee' && 'REFUELING CAFFEINE • +100%'}
              {activeMood === 'turbo' && 'TURBO COMPILING • 0ms'}
              {activeMood === 'coding' && 'PRABHAT • ACTIVE CODING'}
            </span>
          </div>

          {/* Real-time FPS Meter */}
          <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/8 text-[11px] font-mono-tech text-[#121214] shadow-xs">
            <Activity className="w-3.5 h-3.5 text-[#6FA800]" />
            <span className="font-bold">{fps} FPS</span>
          </div>
        </div>

        {/* Character Illustration Visual */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3F2EC]">
          <img
            src="/images/developer-character.jpg"
            alt="Prabhat Barman 3D Developer Character at Workstation"
            className={`w-full h-full object-cover object-center transition-all duration-700 ${
              activeMood === 'turbo' ? 'scale-105 filter brightness-105' : 'scale-100'
            }`}
          />

          {/* Ambient Lighting Gradient Bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Interactive Speech Bubble */}
          {showBubble && (
            <div
              onClick={handleNextQuote}
              className="absolute left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs bottom-20 z-20 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-black/10 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#CCFF00] text-[#121214] flex items-center justify-center shrink-0 font-bold text-xs">
                  💬
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#121214] font-body leading-snug">
                    {QUOTES[quoteIndex]}
                  </div>
                  <div className="text-[10px] font-mono-tech text-[#5C5C66] mt-1 flex items-center justify-between">
                    <span>Click bubble for more</span>
                    <span className="text-[#121214] font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
              {/* Little triangle tail */}
              <div className="absolute -bottom-1.5 left-8 w-3 h-3 bg-white border-b border-r border-black/10 transform rotate-45" />
            </div>
          )}

          {/* Floating Technology Badges on the 3D surface */}
          <div
            className="hidden sm:flex absolute right-5 top-20 flex-col gap-2 z-10"
            style={{ transform: 'translateZ(25px)' }}
          >
            <div className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-black/10 text-xs font-mono-tech font-bold text-[#121214] shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default">
              <span className="text-[#61DAFB] font-extrabold">⚛</span>
              <span>React 19</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-black/10 text-xs font-mono-tech font-bold text-[#121214] shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default">
              <span className="text-[#3178C6] font-extrabold">TS</span>
              <span>TypeScript</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-black/10 text-xs font-mono-tech font-bold text-[#121214] shadow-md flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default">
              <Code2 className="w-3.5 h-3.5 text-[#121214]" />
              <span>React Native & BLE</span>
            </div>
          </div>

          {/* Turbo Particle Burst Effect */}
          {activeMood === 'turbo' && (
            <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
              <div className="text-[#CCFF00] font-mono-tech text-3xl font-extrabold tracking-widest animate-ping drop-shadow-md">
                ⚡ 100% COMPILED ⚡
              </div>
            </div>
          )}
        </div>

        {/* Bottom Interactive Dashboard Bar */}
        <div className="p-4 sm:p-5 bg-white border-t border-black/8 relative z-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Mascot description */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-[#121214] text-[#CCFF00] flex items-center justify-center font-mono-tech font-bold text-sm shrink-0">
                PB
              </div>
              <div>
                <div className="font-display font-bold text-sm text-[#121214] flex items-center gap-1.5">
                  <span>Interactive Dev Station</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#6FA800]" />
                </div>
                <div className="text-xs text-[#5C5C66] font-body flex items-center gap-2">
                  <span>Tap controls to interact with character</span>
                </div>
              </div>
            </div>

            {/* Interactive Control Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              {/* Coffee Refuel Button */}
              <button
                type="button"
                onClick={handleCoffee}
                title="Refuel Coffee"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono-tech transition-all border ${
                  activeMood === 'coffee'
                    ? 'bg-[#121214] text-[#CCFF00] border-[#121214]'
                    : 'bg-[#F9F9F6] text-[#121214] border-black/8 hover:border-black/25 active:scale-95'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{coffeeLevel}%</span>
              </button>

              {/* Lo-Fi Focus Button */}
              <button
                type="button"
                onClick={handleFocus}
                title="Focus & Headphones Mode"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono-tech transition-all border ${
                  activeMood === 'focus'
                    ? 'bg-[#121214] text-[#CCFF00] border-[#121214]'
                    : 'bg-[#F9F9F6] text-[#121214] border-black/8 hover:border-black/25 active:scale-95'
                }`}
              >
                <Headphones className="w-3.5 h-3.5" />
                {isMuted ? <VolumeX className="w-3 h-3 text-[#5C5C66]" /> : <Volume2 className="w-3 h-3 text-[#6FA800] animate-pulse" />}
              </button>

              {/* Turbo Compiler */}
              <button
                type="button"
                onClick={handleTurbo}
                title="Turbo Compile Build"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono-tech font-bold transition-all border ${
                  activeMood === 'turbo'
                    ? 'bg-[#CCFF00] text-[#121214] border-[#121214] shadow-sm'
                    : 'bg-[#121214] text-white border-transparent hover:bg-black active:scale-95'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>Turbo {turboCount > 0 ? `(${turboCount})` : ''}</span>
              </button>

              {/* Chat bubble toggle */}
              <button
                type="button"
                onClick={handleNextQuote}
                title="Next Developer Thought"
                className="p-2 rounded-xl text-xs font-mono-tech bg-[#F9F9F6] text-[#121214] border border-black/8 hover:border-black/25 active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Micro Telemetry Bar */}
          <div className="mt-3 pt-3 border-t border-black/6 flex items-center justify-between text-[11px] font-mono-tech text-[#5C5C66]">
            <div className="flex items-center gap-2 truncate">
              <Terminal className="w-3 h-3 text-[#121214]" />
              <span className="text-[#121214] font-medium truncate">
                {activeMood === 'focus' && '♪ Lo-Fi Beats: 120BPM Flow State'}
                {activeMood === 'coffee' && '☕ Caffeine Level: Peak Efficiency'}
                {activeMood === 'turbo' && '⚡ Vite HMR: Hot reload in 14ms'}
                {activeMood === 'coding' && 'λ git status: working tree clean (main)'}
              </span>
            </div>
            <span className="text-[#121214] font-bold shrink-0 ml-2">4+ Yrs Exp</span>
          </div>
        </div>
      </div>
    </div>
  );
};
