import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download,
  ExternalLink, 
  MapPin, 
  Mail, 
  Phone, 
  Sparkles 
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { experienceData } from '../../data/experience';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const resumeText = `
PRABHAT BARMAN
${profileData.role}
Location: ${profileData.location} | Phone: ${profileData.contact.phone} | Email: ${profileData.contact.email}
LinkedIn: ${profileData.contact.linkedin} | GitHub: ${profileData.contact.github}

PROFESSIONAL SUMMARY:
${profileData.shortBio}

CORE TECHNICAL SKILLS:
- State Management: Redux Toolkit, Redux, Context API
- React Development: React.js, React Native, React Hooks, Custom Hooks, Component Architecture, React Router
- Performance: React Profiling, Memoization (useMemo/useCallback), Lazy Loading, Code Splitting, 60fps targets
- Testing & Quality: Vitest, Jest, React Testing Library
- Build & Deployment: Vite, CI/CD, Azure DevOps, Docker, Git & GitHub
- APIs & Real-Time: WebSockets (10+ Hz streaming), REST APIs (Axios/Fetch), Bluetooth Low Energy (BLE)
- Standards: TypeScript, JavaScript (ES6+), Tailwind CSS, WCAG AA Accessibility, HIPAA & PIPEDA Compliance

WORK EXPERIENCE:
${experienceData.map((exp) => `
${exp.role} | ${exp.company} (${exp.period})
Location: ${exp.location}
Responsibilities:
${exp.responsibilities.map((r) => `- ${r}`).join('\n')}
Key Highlight: ${exp.highlight}
Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

FLAGSHIP PROJECTS:
1. FLOQ — Enterprise Design System & UI Architecture (Netlink Software)
- Role: Lead UI Systems Engineer
- Technologies: React 19, TypeScript, Storybook 8, Radix UI, Rollup Bundler, Tailwind CSS
- Features: Standardized component architecture across 6+ modules, reducing duplicate code by 30%, cutting initial load times by 35–40%, and accelerating sprint velocity by ~20%.

2. Demand Management System — B2B Vendor & Resource Portal
- Role: Senior Frontend Engineer
- Technologies: React.js, TypeScript, Redux Toolkit, RBAC Security, Virtual Tables, REST APIs
- Features: Enterprise talent demand allocation, fine-grained RBAC for hiring managers and vendors, sub-50ms candidate searching across 1,000+ records, real-time SLA metrics.

3. IrisInsights.us — Regulated Healthcare Platform
- Role: Frontend Healthcare Systems Engineer
- Live: https://irisinsights.us
- Technologies: React.js, Next.js, TypeScript, HIPAA Secure Vault, WCAG 2.1 AA, OAuth 2.0
- Features: 100% WCAG 2.1 AA accessibility, zero-leak ephemeral PHI state, automated session timeouts in full compliance with federal HIPAA standards.

4. SiriusXM Drive Mobile Companion (React Native)
- Role: Lead Mobile Systems Engineer
- Technologies: React Native, TypeScript, Reanimated 3, Bluetooth LE, MMKV Storage, JSI
- Features: BLE keyless proximity pairing, remote lock/unlock & start, 60 FPS UI thread animations with Reanimated 3 worklets, sub-50ms native bridge response.

EDUCATION:
${profileData.education.map((e) => `${e.degree} — ${e.institution} (${e.period})`).join('\n')}

CERTIFICATIONS:
${profileData.certifications.map((c) => `- ${c.name} (${c.issuer}, ${c.date})`).join('\n')}
    `.trim();

    try {
      await navigator.clipboard.writeText(resumeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] rounded-2xl bg-white text-[#121214] shadow-2xl flex flex-col overflow-hidden border border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Controls */}
        <div className="px-5 py-3.5 bg-[#FAF9F6] border-b border-black/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[#121214]">
              Verified Production Resume :: ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 hover:bg-black/5 text-xs font-mono-tech font-semibold text-[#121214] transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied Text!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121214] hover:bg-black/85 text-white text-xs font-mono-tech font-semibold transition-all shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            {profileData.contact.hasResumeFile && (
              <a
                href={profileData.contact.resumeUrl}
                download="Prabhat_Barman_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono-tech font-semibold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-black/10 text-black/70 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-body text-xs sm:text-sm space-y-6 leading-relaxed select-text">
          {/* Header */}
          <div className="border-b border-black/10 pb-5">
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#121214] tracking-tight">
              {profileData.fullName}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-[#10B981] mt-1 font-mono-tech">
              {profileData.role}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#5C5C66] font-mono-tech">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#121214]" />
                <span>{profileData.location}</span>
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#121214]" />
                <a href={`mailto:${profileData.contact.email}`} className="underline hover:text-black">
                  {profileData.contact.email}
                </a>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#121214]" />
                <span>{profileData.contact.phone}</span>
              </span>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black font-semibold"
              >
                LinkedIn
              </a>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#121214] border-b border-black/10 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-[#5C5C66] leading-relaxed">
              {profileData.shortBio}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#121214] border-b border-black/10 pb-1 mb-2.5">
              Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-[#121214]">State Management: </span>
                <span className="text-[#5C5C66]">Redux Toolkit, Redux, Context API</span>
              </div>
              <div>
                <span className="font-bold text-[#121214]">React Development: </span>
                <span className="text-[#5C5C66]">React.js, React Hooks, Custom Hooks, Component Architecture, React Router</span>
              </div>
              <div>
                <span className="font-bold text-[#121214]">Performance Engineering: </span>
                <span className="text-[#5C5C66]">React Profiling, Memoization, Lazy Loading, Code Splitting, 60fps targets</span>
              </div>
              <div>
                <span className="font-bold text-[#121214]">Mobile Development: </span>
                <span className="text-[#5C5C66]">React Native, Vision Camera, API Integration, Mobile UI Optimization</span>
              </div>
              <div>
                <span className="font-bold text-[#121214]">Testing: </span>
                <span className="text-[#5C5C66]">Vitest, Jest, React Testing Library</span>
              </div>
              <div>
                <span className="font-bold text-[#121214]">Build & Deployment: </span>
                <span className="text-[#5C5C66]">Vite, CI/CD, Azure DevOps, Docker, Git & GitHub</span>
              </div>
              <div>
                <span className="font-bold text-[#121214]">APIs & Real-Time: </span>
                <span className="text-[#5C5C66]">WebSockets (10+ Hz telemetry), REST APIs (Axios/Fetch), Bluetooth Low Energy</span>
              </div>
              <div>
                <span className="font-bold text-[#121214]">Standards & Compliance: </span>
                <span className="text-[#5C5C66]">TypeScript, JavaScript (ES6+), Tailwind CSS, WCAG AA, HIPAA, PIPEDA</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#121214] border-b border-black/10 pb-1 mb-3">
              Work Experience (4+ Years Production)
            </h2>
            <div className="space-y-5">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-bold text-[#121214] text-sm sm:text-base">
                      {exp.role} <span className="font-normal text-[#5C5C66]">| {exp.company}</span>
                    </span>
                    <span className="font-mono-tech text-xs text-[#5C5C66]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#5C5C66]">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                  <div className="text-xs font-mono-tech pt-1">
                    <span className="font-bold text-[#10B981]">Outcome: </span>
                    <span className="text-[#121214]">{exp.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flagship Projects */}
          <div>
            <h2 className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#121214] border-b border-black/10 pb-1 mb-3">
              Flagship Production Projects
            </h2>
            <div className="space-y-4">
              {/* FLOQ */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-black/8 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-[#121214]">
                    FLOQ — Enterprise Design System & UI Architecture
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#8C52FF] font-semibold">
                    Netlink Software · 6+ Modules
                  </span>
                </div>
                <p className="text-xs text-[#5C5C66]">
                  Standardized component framework and design tokens across 6+ production modules. Reduced duplicate code by 30%, slashed initial load times by 35–40% through strict tree-shaking, and accelerated sprint velocity by ~20%.
                </p>
              </div>

              {/* Demand Management System */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-black/8 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-[#121214]">
                    Demand Management System — B2B Vendor & Resource Portal
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#8B5CF6] font-semibold">
                    React · RBAC · Virtual Tables
                  </span>
                </div>
                <p className="text-xs text-[#5C5C66]">
                  Enterprise B2B resource management platform with fine-grained role-based access control (RBAC). Built dynamic demand wizard, real-time vendor SLA tracking, and virtualized candidate grid handling 1,000+ records with sub-50ms filtering.
                </p>
              </div>

              {/* IrisInsights */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-black/8 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-[#121214]">
                    IrisInsights.us — Regulated Healthcare Platform
                  </span>
                  <div className="flex items-center gap-2 font-mono-tech text-[11px]">
                    <a
                      href="https://irisinsights.us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold flex items-center gap-0.5 text-[#00C2FF]"
                    >
                      <span>irisinsights.us</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#5C5C66]">
                  HIPAA-compliant clinical therapy and EMR management platform. Engineered zero-leak ephemeral state architecture for sensitive Protected Health Information (PHI) and verified 100% WCAG 2.1 AA accessibility across all patient-facing modules.
                </p>
              </div>

              {/* SiriusXM Drive Mobile Companion */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-black/8 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-[#121214]">
                    SiriusXM Drive Mobile Companion
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#10B981] font-semibold">
                    React Native · Bluetooth LE · Reanimated 3
                  </span>
                </div>
                <p className="text-xs text-[#5C5C66]">
                  Cross-platform React Native companion app for connected automotive drivers. Built BLE key fob proximity pairing, sub-50ms native bridge wrappers, MMKV fast key-value storage, and buttery 60 FPS gesture animations on the UI thread.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-black/10">
            <div>
              <h2 className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#121214] mb-2">
                Education
              </h2>
              {profileData.education.map((edu) => (
                <div key={edu.degree}>
                  <div className="font-bold text-[#121214]">{edu.degree}</div>
                  <div className="text-xs text-[#5C5C66]">{edu.institution} ({edu.period})</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#121214] mb-2">
                Verified Certifications
              </h2>
              <ul className="space-y-1 text-xs text-[#5C5C66]">
                {profileData.certifications.map((cert) => (
                  <li key={cert.name} className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#10B981] shrink-0" />
                    <span className="text-[#121214] font-medium">{cert.name}</span>
                    <span>— {cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
