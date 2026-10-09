import { CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-black/8 bg-[#FAF9F5]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <SectionHeading
          index="03"
          category="Philosophy & Approach"
          title="Bridging design nuance with technical rigor."
          description="Software engineering centered on building resilient, maintainable, and high-performance digital products."
        />

        {/* Editorial Bio Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-[#121214] font-body">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#121214]">
              "Good code solves the immediate user need. Great architecture ensures the product can evolve for years without friction."
            </h3>

            {profileData.editorialBio.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg text-[#5C5C66] leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Disciplines Checklist */}
            <div className="pt-6 border-t border-black/8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-[#121214]">
                  <CheckCircle2 className="w-4 h-4 text-[#88B800] mt-0.5 shrink-0" />
                  <span>Modular component design systems</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#121214]">
                  <CheckCircle2 className="w-4 h-4 text-[#88B800] mt-0.5 shrink-0" />
                  <span>Sub-16ms frame budget (60fps targets)</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#121214]">
                  <CheckCircle2 className="w-4 h-4 text-[#88B800] mt-0.5 shrink-0" />
                  <span>WCAG AA accessibility & semantic markup</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-[#121214]">
                  <CheckCircle2 className="w-4 h-4 text-[#88B800] mt-0.5 shrink-0" />
                  <span>Deterministic Redux & server-cache states</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#121214]">
                  <CheckCircle2 className="w-4 h-4 text-[#88B800] mt-0.5 shrink-0" />
                  <span>Camera feeds & native mobile bridge pipelines</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#121214]">
                  <CheckCircle2 className="w-4 h-4 text-[#88B800] mt-0.5 shrink-0" />
                  <span>Cross-functional communication with Figma & APIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Architectural Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66] mb-2">
              Engineering Disciplines
            </div>

            {profileData.corePrinciples.map((principle, idx) => (
              <div
                key={principle.title}
                className="p-5 rounded-2xl bg-white border border-black/8 shadow-xs hover:border-black/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] uppercase px-2 py-0.5 rounded bg-black/5 text-[#5C5C66]">
                    {principle.tag}
                  </span>
                  <span className="font-mono-tech text-xs text-[#5C5C66]">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-[#121214]">
                  {principle.title}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-[#5C5C66] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
