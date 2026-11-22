import React, { useState, useRef } from 'react';
import { 
  Layers, 
  Gauge, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight
} from 'lucide-react';

interface InteractiveDevStationProps {
  className?: string;
}

export const InteractiveDevStation: React.FC<InteractiveDevStationProps> = ({ className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'matrix' | 'benchmarks' | 'stack'>('matrix');
  const [selectedSystem, setSelectedSystem] = useState<number>(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const systems = [
    {
      name: 'FLOQ Design System',
      tag: 'Enterprise UI System',
      metric: '35–40% faster initial load',
      detail: 'Standardized token architecture deployed across 6+ modules, reducing duplicate code by 30%.',
      icon: Layers,
      badge: 'React 19 • Storybook 8'
    },
    {
      name: 'Demand Management',
      tag: 'B2B Talent Platform',
      metric: '< 50ms grid filter latency',
      detail: 'Fine-grained RBAC and virtualized candidate tables managing 1,000+ talent demands.',
      icon: Cpu,
      badge: 'React.js • Redux Toolkit'
    },
    {
      name: 'IrisInsights.us',
      tag: 'HIPAA Clinical Suite',
      metric: '100% WCAG 2.1 AA',
      detail: 'Zero-leak ephemeral PHI state, automated session lockouts, and cryptographic compliance.',
      icon: ShieldCheck,
      badge: 'Next.js • HIPAA Vault'
    },
    {
      name: 'SiriusXM Drive Mobile',
      tag: 'Connected Telematics',
      metric: '60 FPS on UI Thread',
      detail: 'BLE 5.0 proximity pairing and Reanimated 3 worklets for real-time vehicular control.',
      icon: Gauge,
      badge: 'React Native • BLE'
    }
  ];

  const benchmarks = [
    { label: 'Initial Load Time Cut', value: '35–40%', note: 'Granular memoization & dynamic route splitting' },
    { label: 'Duplicate Code Reduced', value: '30%', note: 'Atomic tokens across 6+ enterprise modules' },
    { label: 'Mobile Frame Budget', value: '60 FPS', note: 'Reanimated 3 native worklet execution' },
    { label: 'Virtual Grid Query', value: '< 50ms', note: 'Sub-50ms search across 1,000+ data rows' },
  ];

  const stackCategories = [
    { category: 'Frontend Web', items: ['React.js (React 19)', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Next.js', 'Vite'] },
    { category: 'Mobile Engineering', items: ['React Native (iOS & Android)', 'Reanimated 3', 'Vision Camera', 'Bluetooth LE', 'MMKV'] },
    { category: 'Performance & Quality', items: ['React Profiler', 'Route Splitting', 'Vitest / RTL', 'WCAG 2.1 AA', 'Docker'] }
  ];

  return (
    <div
      className={`relative select-none perspective-[1200px] ${className}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sleek Dark Engineering Card */}
      <div
        className="relative rounded-3xl overflow-hidden border border-black/10 bg-[#121214] text-white shadow-2xl transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.01 : 1}, ${isHovered ? 1.01 : 1}, 1)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Terminal Header */}
        <div className="px-5 py-3.5 bg-[#18181c] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
            <span className="ml-2 font-mono-tech text-xs text-white/50 tracking-wider">
              architecture-console.tsx
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono-tech text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>4+ YOE • Production</span>
          </div>
        </div>

        {/* Console Tab Bar */}
        <div className="px-5 pt-4 pb-2 border-b border-white/10 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-colors ${
              activeTab === 'matrix'
                ? 'bg-white/15 text-white font-semibold'
                : 'text-white/50 hover:text-white'
            }`}
          >
            01 / Flagship Systems
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('benchmarks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-colors ${
              activeTab === 'benchmarks'
                ? 'bg-white/15 text-white font-semibold'
                : 'text-white/50 hover:text-white'
            }`}
          >
            02 / Benchmarks
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('stack')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-colors ${
              activeTab === 'stack'
                ? 'bg-white/15 text-white font-semibold'
                : 'text-white/50 hover:text-white'
            }`}
          >
            03 / Tech Stack
          </button>
        </div>

        {/* Tab 1: Flagship Systems */}
        {activeTab === 'matrix' && (
          <div className="p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {systems.map((sys, idx) => {
                const Icon = sys.icon;
                const isSelected = selectedSystem === idx;
                return (
                  <div
                    key={sys.name}
                    onClick={() => setSelectedSystem(idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-white/30 bg-white/10 shadow-lg'
                        : 'border-white/5 bg-white/[0.03] hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-[#A3E635]" />
                        <span className="font-display font-bold text-xs text-white">
                          {sys.name}
                        </span>
                      </div>
                      <span className="font-mono-tech text-[10px] text-white/40">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="font-mono-tech text-[11px] text-[#A3E635] font-semibold">
                      {sys.metric}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected System Breakdown Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-white/50 uppercase tracking-wider">
                  {systems[selectedSystem].tag}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px]">
                  {systems[selectedSystem].badge}
                </span>
              </div>
              <p className="text-xs text-white/80 font-body leading-relaxed">
                {systems[selectedSystem].detail}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Benchmarks */}
        {activeTab === 'benchmarks' && (
          <div className="p-5 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {benchmarks.map((b) => (
                <div key={b.label} className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-display font-black text-2xl text-white">
                    {b.value}
                  </div>
                  <div className="font-display font-semibold text-xs text-[#A3E635]">
                    {b.label}
                  </div>
                  <div className="text-[11px] text-white/50 font-body leading-snug">
                    {b.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Tech Stack */}
        {activeTab === 'stack' && (
          <div className="p-5 space-y-3 font-mono-tech text-xs">
            {stackCategories.map((cat) => (
              <div key={cat.category} className="space-y-1.5">
                <div className="text-[10px] text-white/40 uppercase tracking-wider">
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-white text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Action Bar */}
        <div className="px-5 py-3 bg-[#18181c] border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-white/50">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-terminal'))}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-[#A3E635]" />
            <span>Open Terminal (⌘K)</span>
          </button>

          <a
            href="#work"
            className="inline-flex items-center gap-1 text-[#A3E635] hover:underline"
          >
            <span>View 4 Flagship Projects</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
