import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export const FrequencyVisualizer: React.FC = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [sensitivity, setSensitivity] = useState(1.2);
  const [bars, setBars] = useState<number[]>(Array(24).fill(20));

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setBars((prev: number[]) =>
        prev.map((_: number, i: number) => {
          const base = Math.sin(Date.now() * 0.005 + i * 0.4) * 35;
          const noise = Math.random() * 25;
          return Math.max(8, Math.min(95, (base + 45 + noise) * (sensitivity / 1.5)));
        })
      );
    }, 60);

    return () => clearInterval(interval);
  }, [isRunning, sensitivity]);

  return (
    <div className="relative bg-[#121214] text-[#F9F9F6] p-6 sm:p-8 rounded-2xl border border-black/10 overflow-hidden min-h-[340px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between font-mono-tech text-xs text-white/50 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span>EXP_04 :: FREQUENCY_DSP_SIMULATOR</span>
        </div>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isRunning ? 'Pause Audio Feed' : 'Resume Audio Feed'}</span>
        </button>
      </div>

      {/* Visualizer Bars Stage */}
      <div className="my-auto py-8 flex items-end justify-center gap-1.5 sm:gap-2 h-44">
        {bars.map((height: number, i: number) => (
          <div
            key={i}
            className="flex-1 max-w-[12px] bg-white/15 rounded-t-sm overflow-hidden flex flex-col justify-end transition-all duration-75"
            style={{ height: '100%' }}
          >
            <div
              className="w-full bg-[#CCFF00] rounded-t-sm transition-all duration-75"
              style={{
                height: `${height}%`,
                opacity: 0.6 + (height / 100) * 0.4
              }}
            />
          </div>
        ))}
      </div>

      {/* Controls & Sensitivity */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tech text-white/50">
        <div className="flex items-center gap-2">
          <span>SENSITIVITY:</span>
          {[0.8, 1.2, 1.6].map((s) => (
            <button
              key={s}
              onClick={() => setSensitivity(s)}
              className={`px-2 py-0.5 rounded ${
                sensitivity === s ? 'bg-[#CCFF00] text-black font-bold' : 'bg-white/10 text-white'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
        <span className="text-[#CCFF00]">Real-time procedural audio FFT simulation</span>
      </div>
    </div>
  );
};
