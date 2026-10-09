import { useEffect } from 'react';
import { X, Check, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import type { ProjectData } from '../../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative bg-[#F9F9F6] w-full max-w-4xl rounded-2xl shadow-2xl border border-black/10 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-[#F9F9F6]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-black/8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs uppercase tracking-wider text-[#5C5C66]">
              Case Study
            </span>
            <span className="text-black/20">•</span>
            <span className="font-mono-tech text-xs text-[#121214] font-medium">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-black/10 hover:bg-black/5 text-[#121214] transition-colors focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 space-y-12">
          {/* Header section */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-mono-tech bg-black/5 text-[#121214] px-3 py-1 rounded-full border border-black/5">
                {project.year}
              </span>
              <span className="text-xs font-mono-tech bg-[#CCFF00]/40 text-[#121214] font-semibold px-3 py-1 rounded-full border border-black/10">
                Verified Architecture
              </span>
            </div>

            <h2 id="case-study-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121214] tracking-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-lg text-[#5C5C66] font-body">
              {project.tagline}
            </p>

            {/* Quick Action Links if available */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {project.demoUrl && project.demoUrl.startsWith('http') && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#121214] text-[#F9F9F6] text-xs font-semibold rounded-full hover:bg-black/85 transition-colors"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-black/15 text-[#121214] text-xs font-semibold rounded-full hover:bg-black/5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Overview & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/8 pt-8">
            <div>
              <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66] mb-3">
                01 / Project Overview
              </h3>
              <p className="text-sm sm:text-base text-[#121214] leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
            <div>
              <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66] mb-3">
                02 / The Core Problem
              </h3>
              <p className="text-sm sm:text-base text-[#121214] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* Role & Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/8 pt-8">
            <div>
              <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66] mb-4">
                03 / My Role & Contributions
              </h3>
              <ul className="space-y-2.5">
                {caseStudy.role.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#121214]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#121214] mt-2 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66] mb-4">
                04 / Architectural Goals
              </h3>
              <ul className="space-y-2.5">
                {caseStudy.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#121214]">
                    <Check className="w-4 h-4 text-[#7ACC00] mt-0.5 shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Approach & Key Decisions */}
          <div className="border-t border-black/8 pt-8 space-y-6">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66]">
              05 / Technical Approach & Architectural Decisions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.keyDecisions.map((kd, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-black/8 shadow-xs">
                  <div className="flex items-center gap-2 mb-2 font-display font-bold text-sm text-[#121214]">
                    <Cpu className="w-4 h-4 text-[#5C5C66]" />
                    <span>{kd.decision}</span>
                  </div>
                  <p className="text-xs text-[#5C5C66] leading-relaxed">
                    {kd.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Verified Highlights */}
          <div className="border-t border-black/8 pt-8 space-y-6">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66]">
              06 / Verified Implementation Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.verifiedHighlights.map((vh, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-black/[0.02] border border-black/5 text-xs text-[#121214] font-medium font-body">
                  <ShieldCheck className="w-4 h-4 text-[#88B800] shrink-0" />
                  <span>{vh}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="border-t border-black/8 pt-8">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66] mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-tech text-xs bg-white px-3 py-1.5 rounded-full border border-black/10 text-[#121214]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F0F0EB] px-6 sm:px-8 py-4 border-t border-black/8 flex items-center justify-between">
          <span className="font-mono-tech text-xs text-[#5C5C66]">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-black/10 text-[10px]">Esc</kbd> to exit
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#121214] text-[#F9F9F6] text-xs font-semibold rounded-full hover:bg-black/85 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
