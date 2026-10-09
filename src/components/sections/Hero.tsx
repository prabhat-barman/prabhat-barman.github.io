import { ArrowDown, ArrowUpRight, Sparkles, Layers, Cpu, Smartphone } from 'lucide-react';
import { profileData } from '../../data/profile';
import { AvailabilityBadge } from '../ui/AvailabilityBadge';
import { MagneticButton } from '../ui/MagneticButton';

export const Hero: React.FC = () => {

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between border-b border-black/8 overflow-hidden"
    >
      {/* Background subtle architectural grid lines */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1720px] mx-auto relative z-10">
        {/* Top meta pill row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12">
          <AvailabilityBadge showDetail={true} />

          <div className="hidden sm:flex items-center gap-3 font-mono-tech text-xs text-[#5C5C66] bg-white/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-black/8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#121214]" />
            <span>{profileData.location}</span>
            <span className="text-black/20">•</span>
            <span className="font-semibold text-[#121214]">{profileData.experienceYears} Production Experience</span>
          </div>
        </div>

        {/* Oversized Editorial Headline */}
        <div className="max-w-6xl my-4 md:my-8">
          <h1 className="font-display text-hero font-extrabold text-[#121214] tracking-tight leading-[0.98]">
            I build digital experiences that{' '}
            <span className="relative inline-block text-[#121214] underline decoration-[#CCFF00] decoration-wavy decoration-2 sm:decoration-4 underline-offset-8">
              work beautifully.
            </span>
          </h1>

          <p className="mt-8 md:mt-10 text-lg md:text-2xl text-[#5C5C66] max-w-2xl font-body leading-relaxed font-normal">
            {profileData.shortBio}
          </p>
        </div>

        {/* Action CTAs & Interactive Capability Chips */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <MagneticButton asAnchor href="#work" variant="primary" className="group">
            <span>Explore my work</span>
            <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
          </MagneticButton>

          <MagneticButton asAnchor href="#contact" variant="outline" className="group">
            <span>Let's collaborate</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>

          {/* Interactive Micro-Widget */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-black/10 font-mono-tech text-xs text-[#5C5C66]">
            <Sparkles className="w-3.5 h-3.5 text-[#88B800]" />
            <span>High-Fidelity Code & Architecture</span>
          </div>
        </div>

        {/* Engineering Specialty Badges */}
        <div className="mt-14 md:mt-20 pt-8 border-t border-black/8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="p-4 rounded-xl bg-white/70 border border-black/6 transition-all hover:border-black/20 hover:bg-white shadow-xs group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-tech text-[11px] text-[#5C5C66] uppercase">Focus 01</span>
              <Layers className="w-4 h-4 text-[#121214] group-hover:rotate-12 transition-transform" />
            </div>
            <div className="font-display font-bold text-sm md:text-base text-[#121214]">React.js Systems</div>
            <div className="text-xs text-[#5C5C66] mt-1 font-body">Modular SPAs, Next & Vite</div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-black/6 transition-all hover:border-black/20 hover:bg-white shadow-xs group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-tech text-[11px] text-[#5C5C66] uppercase">Focus 02</span>
              <Smartphone className="w-4 h-4 text-[#121214] group-hover:scale-110 transition-transform" />
            </div>
            <div className="font-display font-bold text-sm md:text-base text-[#121214]">React Native</div>
            <div className="text-xs text-[#5C5C66] mt-1 font-body">iOS, Android & Native APIs</div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-black/6 transition-all hover:border-black/20 hover:bg-white shadow-xs group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-tech text-[11px] text-[#5C5C66] uppercase">Focus 03</span>
              <Cpu className="w-4 h-4 text-[#121214] group-hover:text-[#6FA800] transition-colors" />
            </div>
            <div className="font-display font-bold text-sm md:text-base text-[#121214]">Performance</div>
            <div className="text-xs text-[#5C5C66] mt-1 font-body">Virtualization & Core Web Vitals</div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-black/6 transition-all hover:border-black/20 hover:bg-white shadow-xs group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono-tech text-[11px] text-[#5C5C66] uppercase">Focus 04</span>
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] border border-black/40" />
            </div>
            <div className="font-display font-bold text-sm md:text-base text-[#121214]">Architecture</div>
            <div className="text-xs text-[#5C5C66] mt-1 font-body">Redux Toolkit, REST, A11y</div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1720px] mx-auto mt-10 flex items-center justify-between text-xs font-mono-tech text-[#5C5C66]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-[1px] bg-black/40" />
          <span>INDEX: 01 — 05</span>
        </div>
        <a
          href="#work"
          className="group inline-flex items-center gap-1.5 hover:text-[#121214] transition-colors"
          aria-label="Scroll to projects"
        >
          <span>Scroll to inspect</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
