import React, { useState } from 'react';

export const MicroInteractions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'haptic' | 'spring' | 'slider'>('spring');
  const [toggleState, setToggleState] = useState(false);
  const [sliderValue, setSliderValue] = useState(68);
  const [hapticFeedback, setHapticFeedback] = useState<string | null>(null);

  const triggerHaptic = (action: string) => {
    setHapticFeedback(action);
    setTimeout(() => setHapticFeedback(null), 1000);
  };

  return (
    <div className="relative bg-white text-[#121214] p-6 sm:p-8 rounded-2xl border border-black/10 shadow-xs min-h-[340px] flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between font-mono-tech text-xs text-[#5C5C66] border-b border-black/8 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#121214]" />
          <span>EXP_03 :: TACTILE_MICRO_LAB</span>
        </div>
        <div className="flex items-center gap-1 bg-black/5 p-1 rounded-lg">
          {(['spring', 'haptic', 'slider'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-all ${
                activeTab === tab
                  ? 'bg-white text-black font-semibold shadow-xs'
                  : 'text-[#5C5C66] hover:text-black'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="my-auto py-8 flex flex-col items-center justify-center">
        {activeTab === 'spring' && (
          <div className="space-y-6 w-full max-w-sm text-center">
            <div className="p-1.5 bg-black/5 rounded-full inline-flex items-center border border-black/5">
              {['Design', 'Code', 'Architecture'].map((item) => (
                <button
                  key={item}
                  onClick={() => triggerHaptic(`Selected ${item}`)}
                  className="px-5 py-2 rounded-full text-xs font-semibold font-body text-[#121214] hover:bg-white/60 focus:bg-white focus:shadow-xs transition-all active:scale-95"
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="text-xs text-[#5C5C66] font-mono-tech">
              Interactive segmented switch with spring easing
            </p>
          </div>
        )}

        {activeTab === 'haptic' && (
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="font-mono-tech text-xs text-[#5C5C66]">Feature Switch</span>
              <button
                onClick={() => {
                  setToggleState(!toggleState);
                  triggerHaptic(toggleState ? 'Disabled' : 'Enabled (Haptic Impulse)');
                }}
                className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black ${
                  toggleState ? 'bg-[#121214]' : 'bg-black/15'
                }`}
                role="switch"
                aria-checked={toggleState}
                aria-label="Toggle feature switch"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-200 flex items-center justify-center ${
                    toggleState ? 'translate-x-6' : 'translate-x-0'
                  }`}
                >
                  {toggleState && <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />}
                </div>
              </button>
            </div>

            <p className="text-xs text-[#5C5C66] font-mono-tech">
              Click toggle to simulate micro-interaction feedback
            </p>
          </div>
        )}

        {activeTab === 'slider' && (
          <div className="w-full max-w-sm space-y-4">
            <div className="flex justify-between text-xs font-mono-tech text-[#5C5C66]">
              <span>Dynamic Intensity</span>
              <span className="font-bold text-[#121214]">{sliderValue}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full accent-[#121214] h-2 bg-black/10 rounded-lg cursor-pointer"
            />
            <div className="h-4 flex items-center justify-center">
              <span
                style={{ width: `${sliderValue}%` }}
                className="h-1 bg-[#CCFF00] rounded-full transition-all"
              />
            </div>
          </div>
        )}

        {/* Haptic notification flash */}
        {hapticFeedback && (
          <div className="mt-4 px-3 py-1 rounded-full bg-black text-white text-[11px] font-mono-tech animate-in fade-in duration-150">
            {hapticFeedback}
          </div>
        )}
      </div>

      {/* Footer info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-black/8 text-xs font-mono-tech text-[#5C5C66]">
        <span>Accessible states • WCAG focus indicators</span>
        <span className="text-[#121214] font-medium">Sub-10ms UI latency</span>
      </div>
    </div>
  );
};
