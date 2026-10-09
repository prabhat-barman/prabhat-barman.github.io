import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Unlock, 
  Power, 
  Thermometer, 
  BatteryCharging, 
  Wifi, 
  Navigation, 
  Smartphone,
  Gauge,
  Code2,
  CheckCircle2,
  Radio,
  Sliders
} from 'lucide-react';

interface InteractiveMobileSimulatorProps {
  className?: string;
}

export const InteractiveMobileSimulator: React.FC<InteractiveMobileSimulatorProps> = ({ className = '' }) => {
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');
  const [activeTab, setActiveTab] = useState<'controls' | 'telemetry' | 'code'>('controls');
  const [isLocked, setIsLocked] = useState(true);
  const [isEngineOn, setIsEngineOn] = useState(false);
  const [temp, setTemp] = useState(21.5);
  const [batteryLevel] = useState(88);
  const [bleSignal, setBleSignal] = useState(-48);
  const [hapticTriggered, setHapticTriggered] = useState(false);

  // Simulate fluctuating BLE signal
  useEffect(() => {
    const interval = setInterval(() => {
      setBleSignal((prev) => {
        const delta = Math.floor((Math.random() - 0.5) * 6);
        return Math.max(-65, Math.min(-35, prev + delta));
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const triggerHaptic = () => {
    setHapticTriggered(true);
    setTimeout(() => setHapticTriggered(false), 600);
  };

  const handleToggleLock = () => {
    setIsLocked((prev) => !prev);
    triggerHaptic();
  };

  const handleToggleEngine = () => {
    setIsEngineOn((prev) => !prev);
    triggerHaptic();
  };

  return (
    <div className={`w-full flex flex-col items-center select-none ${className}`}>
      {/* Top Mobile Control Bar */}
      <div className="w-full flex items-center justify-between mb-4 px-2 font-mono-tech text-xs">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-[#CCFF00]" />
          <span className="text-white/80 font-bold uppercase tracking-wider">
            React Native Simulator
          </span>
          <span className="text-white/30 hidden sm:inline">• Reanimated 3</span>
        </div>

        {/* Platform Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/10 border border-white/10">
          <button
            type="button"
            onClick={() => { setPlatform('ios'); triggerHaptic(); }}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              platform === 'ios'
                ? 'bg-white text-black shadow-xs'
                : 'text-white/60 hover:text-white'
            }`}
          >
             iOS
          </button>
          <button
            type="button"
            onClick={() => { setPlatform('android'); triggerHaptic(); }}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
              platform === 'android'
                ? 'bg-[#CCFF00] text-black shadow-xs font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            🤖 Android
          </button>
        </div>
      </div>

      {/* Realistic Mobile Device Frame */}
      <div className="relative w-full max-w-[300px] xs:max-w-[340px] sm:max-w-[360px] aspect-[9/18.5] rounded-[38px] sm:rounded-[44px] p-2.5 sm:p-3.5 bg-gradient-to-b from-[#2a2a2e] via-[#1a1a1c] to-[#0d0d0f] border-4 border-[#3a3a40] shadow-2xl overflow-hidden transition-all duration-300">
        {/* Device Outer Glow */}
        <div className="absolute inset-0 rounded-[40px] border border-white/15 pointer-events-none" />

        {/* Screen Display Container */}
        <div className="relative w-full h-full rounded-[36px] bg-[#0c0c0e] text-white overflow-hidden flex flex-col justify-between border border-black/40">
          
          {/* Status Bar */}
          <div className="px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-mono-tech text-white/80 z-20">
            <span className="font-semibold tracking-tight">09:41</span>
            
            {/* Dynamic Island (iOS) or Punchhole (Android) */}
            {platform === 'ios' ? (
              <div className="w-24 h-5 rounded-full bg-black border border-white/10 flex items-center justify-between px-2.5">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span className="text-[9px] font-mono-tech text-[#CCFF00] font-bold">BLE LINK</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
            ) : (
              <div className="w-3.5 h-3.5 rounded-full bg-black border border-white/20 mx-auto" />
            )}

            <div className="flex items-center gap-1.5 text-white/90">
              <Wifi className="w-3 h-3" />
              <div className="flex items-center gap-0.5">
                <span className="text-[10px]">{batteryLevel}%</span>
                <BatteryCharging className="w-3.5 h-3.5 text-[#CCFF00]" />
              </div>
            </div>
          </div>

          {/* Mobile Screen Header */}
          <div className="px-5 pt-2 pb-2 border-b border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono-tech text-white/50 uppercase tracking-widest">
                SiriusXM Telematics
              </div>
              <div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                <span>Model Horizon X</span>
                <span className="px-1.5 py-0.2 rounded bg-[#CCFF00]/15 text-[#CCFF00] text-[9px] font-mono-tech">
                  Connected
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-mono-tech text-white/60 bg-white/5 px-2 py-1 rounded-full border border-white/10">
              <Radio className="w-2.5 h-2.5 text-[#CCFF00] animate-pulse" />
              <span>{bleSignal} dBm</span>
            </div>
          </div>

          {/* Screen Body Content based on Active Tab */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeTab === 'controls' && (
              <>
                {/* Vehicle Wireframe Visual */}
                <div className="relative rounded-2xl bg-gradient-to-b from-white/5 to-white/0 p-4 border border-white/10 flex flex-col items-center justify-center">
                  <div className="w-full flex items-center justify-between text-[10px] font-mono-tech text-white/60 mb-2">
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3 h-3 text-[#CCFF00]" />
                      <span>Bhopal Tech Park</span>
                    </span>
                    <span className="text-[#CCFF00]">Range: 412 km</span>
                  </div>

                  {/* Stylized Vehicle Outline */}
                  <div className="w-36 h-20 my-1 relative flex items-center justify-center">
                    <svg viewBox="0 0 160 80" className="w-full h-full text-white/90 filter drop-shadow">
                      <path
                        d="M 20 50 Q 25 35 45 32 L 65 24 Q 85 20 115 24 L 135 34 Q 148 40 150 52 L 150 58 Q 148 64 135 64 L 25 64 Q 20 60 20 50 Z"
                        fill="none"
                        stroke="#CCFF00"
                        strokeWidth="2.5"
                      />
                      <circle cx="45" cy="62" r="10" fill="#121214" stroke="#CCFF00" strokeWidth="2.5" />
                      <circle cx="125" cy="62" r="10" fill="#121214" stroke="#CCFF00" strokeWidth="2.5" />
                      {/* Door Lock Indicator */}
                      <circle cx="85" cy="40" r="4" fill={isLocked ? '#ef4444' : '#10b981'} />
                    </svg>

                    {/* Status Pill */}
                    <div className="absolute bottom-0 text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-black/80 border border-white/15">
                      {isEngineOn ? (
                        <span className="text-[#CCFF00] font-bold animate-pulse">ENGINE RUNNING</span>
                      ) : isLocked ? (
                        <span className="text-red-400">DOORS LOCKED</span>
                      ) : (
                        <span className="text-emerald-400">UNLOCKED</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Primary Remote Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Lock/Unlock Toggle */}
                  <button
                    type="button"
                    onClick={handleToggleLock}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 ${
                      isLocked
                        ? 'bg-white/10 border-white/20 text-white hover:bg-white/15'
                        : 'bg-[#10b981]/20 border-[#10b981]/40 text-emerald-300'
                    }`}
                  >
                    {isLocked ? <Lock className="w-5 h-5 text-white" /> : <Unlock className="w-5 h-5 text-emerald-400" />}
                    <span className="text-xs font-mono-tech font-bold">
                      {isLocked ? 'Doors Locked' : 'Unlocked'}
                    </span>
                    <span className="text-[9px] text-white/50">Tap to toggle</span>
                  </button>

                  {/* Remote Engine Start */}
                  <button
                    type="button"
                    onClick={handleToggleEngine}
                    className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 ${
                      isEngineOn
                        ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-lg shadow-[#CCFF00]/20'
                        : 'bg-white/10 border-white/20 text-white hover:bg-white/15'
                    }`}
                  >
                    <Power className={`w-5 h-5 ${isEngineOn ? 'text-black' : 'text-[#CCFF00]'}`} />
                    <span className="text-xs font-mono-tech font-bold">
                      {isEngineOn ? 'Engine Active' : 'Start Engine'}
                    </span>
                    <span className={`text-[9px] ${isEngineOn ? 'text-black/70' : 'text-white/50'}`}>
                      {isEngineOn ? 'Running 850 RPM' : 'Remote Ignition'}
                    </span>
                  </button>
                </div>

                {/* Cabin Climate Control */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech text-white/80">
                      <Thermometer className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>Cabin Climate</span>
                    </div>
                    <span className="font-display font-extrabold text-sm text-[#CCFF00]">
                      {temp.toFixed(1)}°C
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => { setTemp((t) => Math.max(16, t - 0.5)); triggerHaptic(); }}
                      className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm font-bold active:scale-90"
                    >
                      -
                    </button>
                    <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#38bdf8] via-[#CCFF00] to-[#f97316] transition-all"
                        style={{ width: `${((temp - 16) / 14) * 100}%` }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => { setTemp((t) => Math.min(30, t + 0.5)); triggerHaptic(); }}
                      className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm font-bold active:scale-90"
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'telemetry' && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-tech">
                  <div className="text-[10px] text-white/50 uppercase mb-2">Real-Time Tire Pressure (TPMS)</div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-white/40 text-[9px]">Front Left</div>
                      <div className="text-emerald-400 font-bold text-sm">33 PSI</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-white/40 text-[9px]">Front Right</div>
                      <div className="text-emerald-400 font-bold text-sm">33 PSI</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-white/40 text-[9px]">Rear Left</div>
                      <div className="text-emerald-400 font-bold text-sm">32 PSI</div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-white/40 text-[9px]">Rear Right</div>
                      <div className="text-emerald-400 font-bold text-sm">32 PSI</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-tech space-y-1.5">
                  <div className="text-[10px] text-white/50 uppercase">Native JSI Bridge Logs</div>
                  <div className="text-[10px] text-[#CCFF00] font-mono truncate">
                    &gt; BLE.scanPeripherals: 0x8F4A (RSSI -48dBm)
                  </div>
                  <div className="text-[10px] text-white/70 font-mono truncate">
                    &gt; MMKV.set('last_known_gps', [23.25, 77.41])
                  </div>
                  <div className="text-[10px] text-white/70 font-mono truncate">
                    &gt; Reanimated.worklet: Frame time 16.1ms (60FPS)
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="p-3 rounded-xl bg-black/80 border border-white/10 font-mono text-[10px] text-white/90 space-y-2 leading-relaxed overflow-x-auto">
                <div className="text-[#CCFF00] font-bold">// React Native Reanimated 3 Worklet</div>
                <div className="text-white/60">
                  const animatedStyle = useAnimatedStyle(() =&gt; ({`{`}
                </div>
                <div className="pl-2 text-emerald-400">
                  transform: [{`{`} scale: withSpring(isPressed.value ? 0.95 : 1) {`}`}]
                </div>
                <div className="text-white/60">{`}`});</div>
                <div className="text-[#38bdf8] pt-1">// JSI Fast Storage:</div>
                <div className="text-white/80">storage.set('telemetry_cache', json);</div>
              </div>
            )}
          </div>

          {/* Bottom App Navigation Tabs */}
          <div className="px-4 py-2 border-t border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-around text-xs font-mono-tech z-20">
            <button
              type="button"
              onClick={() => { setActiveTab('controls'); triggerHaptic(); }}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'controls' ? 'text-[#CCFF00]' : 'text-white/50 hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span className="text-[9px]">Controls</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab('telemetry'); triggerHaptic(); }}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'telemetry' ? 'text-[#CCFF00]' : 'text-white/50 hover:text-white'
              }`}
            >
              <Gauge className="w-4 h-4" />
              <span className="text-[9px]">Telemetry</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab('code'); triggerHaptic(); }}
              className={`flex flex-col items-center gap-0.5 transition-colors ${
                activeTab === 'code' ? 'text-[#CCFF00]' : 'text-white/50 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span className="text-[9px]">RN Code</span>
            </button>
          </div>

          {/* Home Bar (iOS indicator) */}
          <div className="pb-1.5 pt-0.5 flex justify-center">
            <div className="w-28 h-1 rounded-full bg-white/30" />
          </div>
        </div>
      </div>

      {/* Interactive Haptic Badge */}
      <div className="mt-3 flex items-center gap-2 text-[11px] font-mono-tech text-[#5C5C66]">
        <CheckCircle2 className={`w-3.5 h-3.5 transition-colors ${hapticTriggered ? 'text-[#CCFF00]' : 'text-[#88B800]'}`} />
        <span>{hapticTriggered ? '⚡ Native Haptic Pulse Dispatched' : 'Tap buttons to test interactive mobile states'}</span>
      </div>
    </div>
  );
};
