import { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  FileDown
} from 'lucide-react';
import { experienceData } from '../../data/experience';
import { skillCategories } from '../../data/skills';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export const ExperienceSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [resumeNotice, setResumeNotice] = useState(false);

  const handleResumeClick = (e: React.MouseEvent) => {
    if (!profileData.contact.hasResumeFile) {
      e.preventDefault();
      setResumeNotice(true);
      setTimeout(() => setResumeNotice(false), 4000);
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 border-b border-black/8 bg-[#F9F9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          index="03"
          category="Experience & Capabilities"
          title="Battle-tested production background."
          description="A verifiable trajectory of frontend and mobile engineering across high-traffic consumer apps and enterprise software systems."
        />

        {/* Experience Timeline */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-black/8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#121214]">
              Career Trajectory
            </h3>

            {/* Resume Action */}
            <div className="relative">
              <a
                href={profileData.contact.resumeUrl}
                download="Prabhat_Software_Engineer_Resume.pdf"
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#121214] text-[#F9F9F6] text-xs font-semibold rounded-full hover:bg-black/85 transition-colors shadow-xs"
              >
                <FileDown className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>Download Verified Resume</span>
              </a>

              {resumeNotice && (
                <div className="absolute right-0 top-full mt-2 w-72 p-3 bg-white border border-black/15 shadow-xl rounded-xl text-xs text-[#121214] z-20 animate-in fade-in duration-150">
                  <p className="font-medium text-[#121214]">Resume available upon request</p>
                  <p className="text-[#5C5C66] mt-1">
                    Connect via <a href={`mailto:${profileData.contact.email}`} className="underline font-semibold">email</a> to receive the latest confidential resume copy.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-12">
            {experienceData.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-black/8 shadow-xs hover:border-black/20 transition-colors"
              >
                {/* Timeline metadata */}
                <div className="md:col-span-4 space-y-2">
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-[#5C5C66]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="font-display font-bold text-lg sm:text-xl text-[#121214]">
                    {item.role}
                  </div>
                  <div className="text-sm font-medium text-[#5C5C66]">
                    {item.company}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono-tech text-xs text-[#5C5C66] pt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.type}</span>
                  </div>
                </div>

                {/* Role details & responsibilities */}
                <div className="md:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-[#121214] font-body leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C5C66]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#121214] mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight pill */}
                  {item.highlight && (
                    <div className="mt-4 p-3 rounded-lg bg-black/[0.02] border border-black/5 text-xs font-mono-tech text-[#121214]">
                      <span className="font-bold text-[#88B800] mr-2">KEY OUTCOME:</span>
                      <span>{item.highlight}</span>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-black/5 text-[#121214]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grouped Skills Matrix (No Percentage Bars!) */}
        <div>
          <div className="mb-8 pb-4 border-b border-black/8">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#121214]">
              Substantiated Technical Capabilities
            </h3>
            <p className="text-sm text-[#5C5C66] mt-1 font-body">
              Grouped by domain. Every listed competency reflects actual production implementation.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skillCategories.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono-tech transition-all ${
                  activeCategoryIndex === idx
                    ? 'bg-[#121214] text-[#F9F9F6] font-semibold shadow-xs'
                    : 'bg-white border border-black/10 text-[#5C5C66] hover:text-[#121214] hover:border-black/25'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Active Category Detail Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/8 shadow-xs">
            <div className="mb-6">
              <h4 className="font-display text-xl font-bold text-[#121214]">
                {skillCategories[activeCategoryIndex].category}
              </h4>
              <p className="text-sm text-[#5C5C66] mt-1">
                {skillCategories[activeCategoryIndex].description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories[activeCategoryIndex].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-black/6 flex flex-col justify-between hover:border-black/20 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-display font-bold text-sm text-[#121214]">
                        {skill.name}
                      </span>
                      <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-white border border-black/10 text-[#121214] font-medium">
                        {skill.level}
                      </span>
                    </div>
                    {skill.note && (
                      <p className="text-xs text-[#5C5C66] leading-relaxed mt-1">
                        {skill.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
