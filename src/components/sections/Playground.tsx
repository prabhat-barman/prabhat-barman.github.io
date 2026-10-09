import { useState } from 'react';
import { Terminal, Activity, Layers, Sliders } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { KineticTypography } from '../playground/KineticTypography';
import { WaveGrid } from '../playground/WaveGrid';
import { MicroInteractions } from '../playground/MicroInteractions';
import { FrequencyVisualizer } from '../playground/FrequencyVisualizer';
import type { PlaygroundTab } from '../../types/portfolio';

export const Playground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlaygroundTab>('kinetic-type');

  const tabs: Array<{ id: PlaygroundTab; label: string; icon: React.FC<{ className?: string }> }> = [
    { id: 'kinetic-type', label: '01 / Kinetic Typography', icon: Terminal },
    { id: 'wave-grid', label: '02 / Wave Grid Canvas', icon: Activity },
    { id: 'micro-ui', label: '03 / Tactile Micro-UI', icon: Sliders },
    { id: 'audio-spectrum', label: '04 / DSP Frequency FFT', icon: Layers }
  ];

  return (
    <section id="playground" className="py-24 md:py-32 border-b border-black/8 bg-[#FAF9F5]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <SectionHeading
          index="05"
          category="Interactive Playground"
          title="Creative coding & frontend physics."
          description="A hands-on testing laboratory exploring real-time DOM physics, Canvas 2D math, and tactile micro-interactions without bloated 3D engines."
        />

        {/* Experiment Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono-tech transition-all ${
                  isActive
                    ? 'bg-[#121214] text-[#F9F9F6] font-semibold shadow-xs'
                    : 'bg-white border border-black/10 text-[#5C5C66] hover:text-[#121214] hover:border-black/25'
                }`}
                aria-pressed={isActive}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#CCFF00]' : 'text-[#5C5C66]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Experiment Container */}
        <div>
          {activeTab === 'kinetic-type' && <KineticTypography />}
          {activeTab === 'wave-grid' && <WaveGrid />}
          {activeTab === 'micro-ui' && <MicroInteractions />}
          {activeTab === 'audio-spectrum' && <FrequencyVisualizer />}
        </div>
      </div>
    </section>
  );
};
