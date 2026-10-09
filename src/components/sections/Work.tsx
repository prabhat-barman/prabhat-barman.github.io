import { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  BookOpen, 
  ShieldCheck, 
  Table, 
  Sparkles, 
  Check, 
  ChevronRight,
  Radio,
  Eye,
  EyeOff,
  Clock,
  Award
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { ProjectData } from '../../types/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { CaseStudyModal } from './CaseStudyModal';
import { InteractiveMobileSimulator } from '../ui/InteractiveMobileSimulator';

/* Interactive Mockup for SiriusXM Automotive Telemetry with Live Stress Tester */
const SiriusXmTelemetryPreview: React.FC = () => {
  const [speed, setSpeed] = useState(68);
  const [isLive, setIsLive] = useState(true);
  const [packetCount, setPacketCount] = useState(1482);
  const [rateHz, setRateHz] = useState<10 | 100 | 1000>(10);
  const [useBatching, setUseBatching] = useState(true);
  const [fps, setFps] = useState(60);

  // Measure actual browser render FPS
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const loop = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Telemetry packet streamer matching rateHz
  useEffect(() => {
    if (!isLive) return;

    const intervalMs = rateHz === 1000 ? 20 : rateHz === 100 ? 40 : 100;
    const packetStep = rateHz === 1000 ? 20 : rateHz === 100 ? 4 : 1;

    const interval = setInterval(() => {
      setPacketCount((p) => p + packetStep);
      setSpeed((prev) => {
        const delta = (Math.random() - 0.48) * 3;
        return Math.max(48, Math.min(84, Math.round(prev + delta)));
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isLive, rateHz]);

  return (
    <div className="bg-[#121214] text-[#F9F9F6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-black/10 shadow-2xl overflow-hidden relative">
      {/* Top telemetry status bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-5 gap-3">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-white/60">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span>SIRIUS_XM :: WEBSOCKET_TELEMETRY</span>
        </div>

        {/* Live FPS Counter */}
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono-tech flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
            <span className="text-white font-bold">{fps} FPS</span>
          </div>

          <button
            type="button"
            onClick={() => setIsLive(!isLive)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
          >
            <Radio className="w-3 h-3 text-[#CCFF00]" />
            <span>{isLive ? 'Live' : 'Paused'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Hz Frequency Stress-Test Bar */}
      <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono-tech text-xs">
        <div className="flex items-center gap-2">
          <span className="text-white/60">Stress Test Frequency:</span>
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
            <button
              type="button"
              onClick={() => setRateHz(10)}
              className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                rateHz === 10 ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              10 Hz
            </button>
            <button
              type="button"
              onClick={() => setRateHz(100)}
              className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                rateHz === 100 ? 'bg-[#CCFF00] text-black font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              100 Hz
            </button>
            <button
              type="button"
              onClick={() => setRateHz(1000)}
              className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                rateHz === 1000 ? 'bg-red-500 text-white font-bold shadow-xs' : 'text-white/60 hover:text-white'
              }`}
            >
              1,000 Hz 🔥
            </button>
          </div>
        </div>

        {/* Batching Toggle */}
        <button
          type="button"
          onClick={() => setUseBatching(!useBatching)}
          className={`px-2.5 py-1 rounded-lg border text-[11px] transition-all ${
            useBatching
              ? 'bg-[#CCFF00]/15 border-[#CCFF00]/40 text-[#CCFF00]'
              : 'bg-white/5 border-white/10 text-white/50'
          }`}
        >
          {useBatching ? '✓ rAF Frame Batching' : 'Direct (Unbatched)'}
        </button>
      </div>

      {/* Live Vehicle Telemetry Gauges */}
      <div className="relative rounded-xl border border-white/15 bg-black/50 p-6 flex flex-col items-center justify-center min-h-[170px] overflow-hidden">
        <div className="grid grid-cols-3 gap-4 w-full text-center">
          {/* Speed Gauge */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="font-mono-tech text-[10px] text-white/50 uppercase">Velocity</div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#CCFF00] mt-1">
              {speed} <span className="text-xs font-mono-tech text-white/60 font-normal">MPH</span>
            </div>
            <div className="text-[10px] font-mono-tech text-white/40 mt-1">
              {(speed * 1.609).toFixed(0)} KM/H
            </div>
          </div>

          {/* Battery State of Charge */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="font-mono-tech text-[10px] text-white/50 uppercase">Battery SoC</div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
              87<span className="text-xs font-mono-tech text-white/60 font-normal">%</span>
            </div>
            <div className="text-[10px] font-mono-tech text-[#88B800] mt-1">
              Optimal Thermal
            </div>
          </div>

          {/* Packets & Reconnects */}
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="font-mono-tech text-[10px] text-white/50 uppercase">Streamed Packets</div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
              {packetCount.toLocaleString()}
            </div>
            <div className="text-[10px] font-mono-tech text-[#CCFF00] mt-1">
              {rateHz} Packets / sec
            </div>
          </div>
        </div>

        {/* GPS Coordinates Bar */}
        <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-between text-[11px] font-mono-tech text-white/60">
          <span>GPS: 23.2599° N, 77.4126° E</span>
          <span className="text-[#CCFF00]">Fleet Node #SX-940</span>
        </div>
      </div>

      {/* Proof of Performance Banner */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-white/60">
        <div className="flex items-center gap-1.5 text-white/90">
          <Check className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span>Stress Tested at {rateHz} Hz with 0 dropped frames</span>
        </div>
        <span className="text-[#CCFF00]">60fps Locked</span>
      </div>
    </div>
  );
};

/* Interactive Mockup for IrisInsights.us Healthcare with Live HIPAA Audit Log & Auto-Lock */
const IrisInsightsPreview: React.FC = () => {
  const [maskPhi, setMaskPhi] = useState(true);
  const [autoLockSeconds, setAutoLockSeconds] = useState(15);
  const [auditLogs, setAuditLogs] = useState<string[]>([
    '09:41:00 INITIAL_LOAD: Encrypted session token AES-256 authenticated',
  ]);

  // Handle Unmask with Audit Log and Auto-Lock Timer
  const handleToggleMask = () => {
    if (maskPhi) {
      // Unmasking PHI
      const now = new Date().toLocaleTimeString('en-IN', { hour12: false });
      setMaskPhi(false);
      setAutoLockSeconds(15);
      setAuditLogs((prev) => [
        `${now} PHI_UNMASKED: Authorized provider access (Audit ID #HIPAA-${Math.floor(1000 + Math.random() * 9000)})`,
        ...prev.slice(0, 2),
      ]);
    } else {
      // Re-masking
      const now = new Date().toLocaleTimeString('en-IN', { hour12: false });
      setMaskPhi(true);
      setAuditLogs((prev) => [
        `${now} PHI_SECURED: Manual privacy shield engaged`,
        ...prev.slice(0, 2),
      ]);
    }
  };

  // 15-second idle guard countdown
  useEffect(() => {
    if (maskPhi) return;

    const timer = setInterval(() => {
      setAutoLockSeconds((sec) => {
        if (sec <= 1) {
          setMaskPhi(true);
          const now = new Date().toLocaleTimeString('en-IN', { hour12: false });
          setAuditLogs((prev) => [
            `${now} AUTO_LOCK: 15s Idle guard engaged. PHI masked`,
            ...prev.slice(0, 2),
          ]);
          return 15;
        }
        return sec - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [maskPhi]);

  return (
    <div className="bg-[#121214] text-[#F9F9F6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-black/10 shadow-2xl overflow-hidden relative">
      {/* Top HIPAA compliance status */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-5 gap-3">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-white/60">
          <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
          <span>IRIS_INSIGHTS :: HIPAA_COMPLIANT_UI</span>
        </div>
        <button
          type="button"
          onClick={handleToggleMask}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-tech transition-all active:scale-95 ${
            maskPhi
              ? 'bg-[#00C2FF] text-black font-bold shadow-xs'
              : 'bg-red-500/20 border border-red-500/40 text-red-300'
          }`}
        >
          {maskPhi ? <Eye className="w-3.5 h-3.5 text-black" /> : <EyeOff className="w-3.5 h-3.5 text-red-400" />}
          <span>{maskPhi ? 'Unmask PHI (Test Audit)' : `Auto-locking in ${autoLockSeconds}s`}</span>
        </button>
      </div>

      {/* Clinical Patient Workflow Sheet */}
      <div className="rounded-xl border border-white/15 bg-black/40 p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-mono-tech text-[10px] text-white/50 uppercase">Patient Record</div>
            <div className="font-display font-bold text-lg text-white">
              {maskPhi ? 'Johnathan D•••••• (MRN #••••921)' : 'Johnathan Doe (MRN #401921)'}
            </div>
          </div>
          <span className="px-2.5 py-1 rounded text-[10px] font-mono-tech bg-[#00C2FF]/20 border border-[#00C2FF]/40 text-[#00C2FF] font-semibold">
            ENCRYPTED AES-256
          </span>
        </div>

        {/* Clinical metrics */}
        <div className="grid grid-cols-2 gap-3 pt-1 text-xs font-mono-tech">
          <div className="p-2.5 rounded bg-white/5 border border-white/10">
            <span className="text-white/50 block text-[10px]">Vitals Telemetry</span>
            <span className="text-white font-medium">BP: 120/80 • HR: 72 bpm</span>
          </div>
          <div className="p-2.5 rounded bg-white/5 border border-white/10">
            <span className="text-white/50 block text-[10px]">Session Timeout Guard</span>
            <span className={`font-medium ${maskPhi ? 'text-[#CCFF00]' : 'text-amber-400 animate-pulse'}`}>
              {maskPhi ? 'Active (15m Idle Guard)' : `Auto-masking: ${autoLockSeconds}s`}
            </span>
          </div>
        </div>
      </div>

      {/* Real-time Audit Log Stream */}
      <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono-tech space-y-1">
        <div className="text-[10px] text-white/50 uppercase">Live HIPAA Audit Trail:</div>
        {auditLogs.map((log, idx) => (
          <div key={idx} className="text-white/80 truncate">
            &gt; {log}
          </div>
        ))}
      </div>

      {/* WCAG & Compliance Verification Footer */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-white/60">
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-[#00C2FF]" />
          <span>WCAG AA Verified</span>
        </div>
        <span>Zero-Leak Ephemeral State</span>
      </div>
    </div>
  );
};

/* Interactive Mockup for Netlink Enterprise Design System */
const NetlinkDesignSystemPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grid' | 'tokens'>('grid');

  const rows = [
    { module: 'Module 01: Core Billing Gateway', duplicate: '-32% Code', loadTime: '-38% FCP', status: 'SYNCHRONIZED' },
    { module: 'Module 02: Enterprise User Matrix', duplicate: '-30% Code', loadTime: '-40% FCP', status: 'SYNCHRONIZED' },
    { module: 'Module 03: Reporting & Exports', duplicate: '-28% Code', loadTime: '-35% FCP', status: 'SYNCHRONIZED' }
  ];

  return (
    <div className="bg-white text-[#121214] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-black/10 shadow-2xl overflow-hidden relative">
      {/* Component Library Header */}
      <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-6">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-[#5C5C66]">
          <Table className="w-3.5 h-3.5 text-[#121214]" />
          <span>NETLINK_ENTERPRISE :: FLOQ_UI_SYSTEM</span>
        </div>
        <div className="flex items-center gap-1 bg-black/5 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('grid')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-colors ${
              activeTab === 'grid' ? 'bg-white text-black shadow-xs font-semibold' : 'text-[#5C5C66]'
            }`}
          >
            6+ Modules
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-colors ${
              activeTab === 'tokens' ? 'bg-white text-black shadow-xs font-semibold' : 'text-[#5C5C66]'
            }`}
          >
            Token Specs
          </button>
        </div>
      </div>

      {/* Data Table */}
      {activeTab === 'grid' ? (
        <div className="overflow-x-auto border border-black/8 rounded-xl bg-[#FAF9F6]">
          <table className="w-full text-left text-xs font-body">
            <thead>
              <tr className="border-b border-black/8 font-mono-tech text-[11px] text-[#5C5C66] uppercase bg-black/[0.02]">
                <th className="py-2.5 px-3">Production Module</th>
                <th className="py-2.5 px-3">Code Reduction</th>
                <th className="py-2.5 px-3">Load Time</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {rows.map((row) => (
                <tr key={row.module} className="hover:bg-white transition-colors">
                  <td className="py-2.5 px-3 font-medium text-[#121214]">{row.module}</td>
                  <td className="py-2.5 px-3 font-mono-tech font-bold text-[#88B800]">{row.duplicate}</td>
                  <td className="py-2.5 px-3 font-mono-tech font-bold text-[#121214]">{row.loadTime}</td>
                  <td className="py-2.5 px-3">
                    <span className="font-mono-tech text-[10px] bg-[#CCFF00]/40 text-[#121214] font-semibold px-2 py-0.5 rounded">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-4 rounded-xl border border-black/8 bg-[#FAF9F6] space-y-3 font-mono-tech text-xs">
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span className="text-[#5C5C66]">Duplicate Code Reduction:</span>
            <span className="font-bold text-[#88B800]">30% Verified</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span className="text-[#5C5C66]">Initial Load Time:</span>
            <span className="font-bold text-[#121214]">35–40% Reduction</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5C5C66]">Timeline Acceleration:</span>
            <span className="font-bold text-[#121214]">~20% Faster Releases</span>
          </div>
        </div>
      )}

      {/* Meta Specs footer */}
      <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between text-xs font-mono-tech text-[#5C5C66]">
        <span>Standardized Reusable Architecture</span>
        <span className="font-bold text-[#121214]">Netlink Software Pvt Ltd</span>
      </div>
    </div>
  );
};

/* Interactive Mockup for Language Academy */
const LanguageAcademyPreview: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);

  return (
    <div className="bg-[#121214] text-[#F9F9F6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-black/10 shadow-2xl overflow-hidden relative">
      {/* Test Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-white/60">
          <Award className="w-4 h-4 text-[#FF6B00]" />
          <span>LANGUAGE_ACADEMY :: EXAM_SIMULATOR</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono-tech text-xs text-[#FF6B00] bg-[#FF6B00]/10 px-2.5 py-1 rounded-full border border-[#FF6B00]/20">
          <Clock className="w-3 h-3" />
          <span>14:48 Remaining</span>
        </div>
      </div>

      {/* Exam Question Card */}
      <div className="rounded-xl border border-white/15 bg-black/50 p-5 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono-tech text-white/50">
          <span>Question 03 of 40</span>
          <span>Reading Comprehension</span>
        </div>

        <p className="text-sm font-body text-white font-medium">
          Which grammatical structure best demonstrates conditional causality in formal academic discourse?
        </p>

        {/* Options */}
        <div className="space-y-2 pt-1 font-body text-xs">
          {[
            'Provided that the hypothesis is verifiable through empirical data...',
            'Because the observation occurs naturally without intervention...',
            'Although multiple variables were introduced simultaneously...'
          ].map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelectedOption(i)}
              className={`w-full text-left p-3 rounded-lg border transition-all ${
                selectedOption === i
                  ? 'bg-white/20 border-[#CCFF00] text-white font-semibold'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              <span className="font-mono-tech mr-2 text-white/50">0{i + 1}.</span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Analytics Footer */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-white/60">
        <span>Persistent State Auto-Save</span>
        <span className="text-[#CCFF00]">Score Analytics Engine</span>
      </div>
    </div>
  );
};

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const visibleProjects = projectsData.filter((p) => p.visible);

  return (
    <section id="work" className="py-24 md:py-32 border-b border-black/8 bg-[#F9F9F6]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <SectionHeading
          index="01"
          category="Selected Production Projects"
          title="Battle-tested architectures across real domains."
          description="A showcase of real-world production systems engineered across automotive telemetry, HIPAA-compliant healthcare, and enterprise component design systems."
        />

        {/* Editorial Project Showcase Grid */}
        <div className="space-y-24 md:space-y-36">
          {visibleProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Project Info Column */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono-tech text-xs text-[#5C5C66]">
                      0{index + 1}
                    </span>
                    <span className="text-black/20">•</span>
                    <span className="font-mono-tech text-xs uppercase tracking-wider text-[#121214] font-medium">
                      {project.category}
                    </span>
                    <span className="text-black/20">•</span>
                    <span className="font-mono-tech text-xs text-[#5C5C66]">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121214] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base text-[#121214] font-medium">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-sm text-[#5C5C66] leading-relaxed font-body">
                      {project.summary}
                    </p>
                  </div>

                  {/* Role & Contribution Callout */}
                  <div className="p-4 rounded-xl bg-black/[0.02] border border-black/6">
                    <div className="font-mono-tech text-[11px] text-[#5C5C66] uppercase mb-1">
                      Contribution & Impact
                    </div>
                    <div className="text-xs text-[#121214] font-medium font-body leading-relaxed">
                      {project.role}
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono-tech text-[11px] px-2.5 py-1 rounded-md bg-white border border-black/8 text-[#121214]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121214] text-[#F9F9F6] text-xs font-semibold rounded-full hover:bg-black/85 transition-colors shadow-xs"
                      aria-label={`Read case study for ${project.title}`}
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#CCFF00]" />
                      <span>Read Case Study</span>
                    </button>

                    {project.demoUrl && project.demoUrl.startsWith('http') && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-black/15 text-[#121214] text-xs font-semibold rounded-full hover:bg-black/5 transition-colors"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Interactive Visual Preview Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {project.previewType === 'automotive-telemetry' && <SiriusXmTelemetryPreview />}
                  {project.previewType === 'mobile-simulator' && <InteractiveMobileSimulator />}
                  {project.previewType === 'healthcare-hipaa' && <IrisInsightsPreview />}
                  {project.previewType === 'design-system' && <NetlinkDesignSystemPreview />}
                  {project.previewType === 'education-exam' && <LanguageAcademyPreview />}
                  {project.previewType === 'creative-lab' && (
                    <div className="bg-[#121214] text-white rounded-2xl p-8 border border-black/10 shadow-2xl flex flex-col justify-between min-h-[300px]">
                      <div>
                        <div className="flex items-center gap-2 font-mono-tech text-xs text-white/60 mb-4">
                          <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
                          <span>INTERACTION_LABORATORY</span>
                        </div>
                        <h4 className="font-display text-2xl font-bold">
                          Kinetic Typography & Canvas Physics
                        </h4>
                        <p className="mt-2 text-sm text-white/70 max-w-md">
                          Explore live experiments in browser physics, vector wave calculations, and tactile micro-interactions.
                        </p>
                      </div>
                      <div className="pt-8">
                        <a
                          href="#playground"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#CCFF00] text-[#121214] text-xs font-bold rounded-full hover:bg-[#B8E600] transition-colors"
                        >
                          <span>Open Interactive Playground</span>
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* In-Depth Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
