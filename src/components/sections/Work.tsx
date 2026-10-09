import { useState } from 'react';
import { 
  ArrowUpRight, 
  BookOpen, 
  Scan, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Table, 
  Sparkles, 
  Check, 
  AlertTriangle,
  RotateCcw,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { ProjectData } from '../../types/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { CaseStudyModal } from './CaseStudyModal';

/* Interactive Mockup for WellValet Scanner */
const WellValetPreview: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);

  const mockItems = [
    {
      name: 'Organic Almond Oat Milk (1L)',
      barcode: '8901234567891',
      status: 'VERIFIED SAFE',
      statusColor: 'text-[#88B800] bg-[#CCFF00]/20 border-[#CCFF00]/40',
      allergens: [
        { label: 'Gluten-Free', safe: true },
        { label: 'Dairy-Free', safe: true },
        { label: 'Tree Nuts (Almond)', safe: false }
      ],
      score: '94 / 100 NutriScore'
    },
    {
      name: 'Artisan Whole Wheat Sourdough',
      barcode: '8909876543210',
      status: 'ALLERGEN WARNING',
      statusColor: 'text-amber-800 bg-amber-100 border-amber-200',
      allergens: [
        { label: 'Contains Wheat/Gluten', safe: false },
        { label: 'Dairy-Free', safe: true },
        { label: 'Soy-Free', safe: true }
      ],
      score: '78 / 100 NutriScore'
    }
  ];

  const handleNextScan = () => {
    setScanning(true);
    setTimeout(() => {
      setActiveItemIndex((prev: number) => (prev + 1) % mockItems.length);
      setScanning(false);
    }, 450);
  };

  const item = mockItems[activeItemIndex];

  return (
    <div className="bg-[#121214] text-[#F9F9F6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-black/10 shadow-xl overflow-hidden relative group">
      {/* Top camera viewfinder bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-white/60">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span>VISION_CAMERA :: ACTIVE</span>
        </div>
        <button
          onClick={handleNextScan}
          disabled={scanning}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
          aria-label="Scan next item"
        >
          <RotateCcw className={`w-3 h-3 ${scanning ? 'animate-spin' : ''}`} />
          <span>Simulate Scan</span>
        </button>
      </div>

      {/* Simulated Scanner Viewport */}
      <div className="relative rounded-xl border border-white/15 bg-black/40 p-6 flex flex-col items-center justify-center min-h-[170px] overflow-hidden">
        {/* Animated scanning laser line */}
        <div className={`absolute left-0 right-0 h-0.5 bg-[#CCFF00] shadow-[0_0_12px_#CCFF00] transition-all duration-700 ease-in-out ${
          scanning ? 'top-3/4 opacity-100' : 'top-1/4 opacity-75'
        }`} />

        <div className="relative z-10 text-center space-y-2">
          <Scan className="w-8 h-8 text-[#CCFF00] mx-auto opacity-80" />
          <div className="font-mono-tech text-xs tracking-widest text-white/50">
            BARCODE: {item.barcode}
          </div>
        </div>
      </div>

      {/* Real-time Ingredient Safety Card */}
      <div className="mt-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-display font-bold text-lg text-white">
              {item.name}
            </div>
            <div className="font-mono-tech text-xs text-white/50 mt-0.5">
              {item.score}
            </div>
          </div>
          <span className={`px-2.5 py-1 rounded text-[11px] font-mono-tech border ${item.statusColor}`}>
            {item.status}
          </span>
        </div>

        {/* Allergen Tag List */}
        <div className="flex flex-wrap gap-2 pt-1">
          {item.allergens.map((alg) => (
            <span
              key={alg.label}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono-tech border ${
                alg.safe
                  ? 'bg-white/5 border-white/10 text-white/80'
                  : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
              }`}
            >
              {alg.safe ? <Check className="w-3 h-3 text-[#CCFF00]" /> : <AlertTriangle className="w-3 h-3 text-amber-400" />}
              <span>{alg.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Interactive Mockup for PlayDrama Player */
const PlayDramaPreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38);
  const [currentEpisode, setCurrentEpisode] = useState(1);

  return (
    <div className="bg-[#18181B] text-[#F9F9F6] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-black/10 shadow-xl overflow-hidden relative">
      {/* Stream Player Mock Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-white/60">
          <span className="w-2 h-2 rounded-full bg-indigo-400" />
          <span>HLS_STREAM :: 4K UHD</span>
        </div>
        <div className="flex items-center gap-2 font-mono-tech text-xs text-white/70">
          <span>EPISODE 0{currentEpisode} OF 12</span>
        </div>
      </div>

      {/* Cinematic Viewport */}
      <div className="relative rounded-xl border border-white/15 bg-gradient-to-br from-indigo-950/60 to-purple-950/40 p-8 flex flex-col items-center justify-center min-h-[170px] overflow-hidden group">
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all active:scale-95 border border-white/30 shadow-lg"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
          </button>
        </div>

        {/* Live Audio / HUD Indicators */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono-tech text-white/80">
          <span>{isPlaying ? 'PLAYING • BUFFERING 100%' : 'STANDBY • READY'}</span>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-1.5 hover:text-white transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Scrub Bar & Controls */}
      <div className="mt-6 space-y-4">
        {/* Interactive Scrubber */}
        <div className="space-y-1.5">
          <div
            className="h-2 w-full bg-white/15 rounded-full overflow-hidden cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.round((clickX / rect.width) * 100));
            }}
          >
            <div
              className="h-full bg-[#CCFF00] rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono-tech text-white/50">
            <span>{Math.floor((progress * 42) / 100)}:15</span>
            <span>42:00</span>
          </div>
        </div>

        {/* Quick Episode Switcher */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-xs font-mono-tech text-white/50">Jump:</span>
          {[1, 2, 3, 4].map((ep) => (
            <button
              key={ep}
              onClick={() => setCurrentEpisode(ep)}
              className={`px-2.5 py-1 rounded text-xs font-mono-tech transition-colors ${
                currentEpisode === ep
                  ? 'bg-white text-black font-bold'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              EP 0{ep}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Interactive Mockup for floq_ui Design System */
const FloqUiPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'table' | 'form'>('table');

  const rows = [
    { id: 'REC-091', entity: 'Enterprise Payroll Matrix', status: 'ACTIVE', latency: '12ms', a11y: 'PASS' },
    { id: 'REC-092', entity: 'Schema Form Orchestrator', status: 'DEPLOYED', latency: '8ms', a11y: 'PASS' },
    { id: 'REC-093', entity: 'Data Grid Virtualizer', status: 'SYNCHRONIZED', latency: '14ms', a11y: 'PASS' }
  ];

  return (
    <div className="bg-white text-[#121214] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-black/10 shadow-xl overflow-hidden relative">
      {/* Component Library Header */}
      <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-6">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-[#5C5C66]">
          <Table className="w-3.5 h-3.5 text-[#121214]" />
          <span>FLOQ_UI :: COMPONENT_LAB</span>
        </div>
        <div className="flex items-center gap-1 bg-black/5 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('table')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-colors ${
              activeTab === 'table' ? 'bg-white text-black shadow-xs font-semibold' : 'text-[#5C5C66]'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono-tech transition-colors ${
              activeTab === 'form' ? 'bg-white text-black shadow-xs font-semibold' : 'text-[#5C5C66]'
            }`}
          >
            Form Schema
          </button>
        </div>
      </div>

      {/* Interactive Table Container */}
      {activeTab === 'table' ? (
        <div className="overflow-x-auto border border-black/8 rounded-xl bg-[#FAF9F6]">
          <table className="w-full text-left text-xs font-body">
            <thead>
              <tr className="border-b border-black/8 font-mono-tech text-[11px] text-[#5C5C66] uppercase bg-black/[0.02]">
                <th className="py-2.5 px-3">UID</th>
                <th className="py-2.5 px-3">Component / Spec</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">WCAG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-white transition-colors">
                  <td className="py-2.5 px-3 font-mono-tech text-[#5C5C66]">{row.id}</td>
                  <td className="py-2.5 px-3 font-medium text-[#121214]">{row.entity}</td>
                  <td className="py-2.5 px-3">
                    <span className="font-mono-tech text-[10px] bg-[#CCFF00]/40 text-[#121214] font-semibold px-2 py-0.5 rounded">
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 font-mono-tech text-[#88B800] font-semibold">
                    {row.a11y}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-4 rounded-xl border border-black/8 bg-[#FAF9F6] space-y-3 font-body text-xs">
          <div>
            <label className="font-mono-tech text-[11px] text-[#5C5C66] block mb-1">
              Field Generator (Zod Strict)
            </label>
            <input
              type="text"
              readOnly
              value="z.object({ token: z.string().min(8), scope: z.enum(['read','write']) })"
              className="w-full font-mono-tech text-[11px] bg-white border border-black/10 px-3 py-2 rounded-lg text-[#121214]"
            />
          </div>
          <div className="flex items-center justify-between text-xs pt-1 text-[#5C5C66]">
            <span>Compound JSX Architecture</span>
            <span className="font-mono-tech text-[10px] text-[#88B800] font-semibold">✓ Ready</span>
          </div>
        </div>
      )}

      {/* Meta Specs footer */}
      <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between text-xs font-mono-tech text-[#5C5C66]">
        <span>40+ Modular Primitives</span>
        <span>Virtualization: 10,000+ Rows</span>
      </div>
    </div>
  );
};

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const visibleProjects = projectsData.filter((p) => p.visible);

  return (
    <section id="work" className="py-24 md:py-32 border-b border-black/8 bg-[#F9F9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          index="01"
          category="Selected Projects"
          title="Engineered for real-world reliability."
          description="A curated selection of production web and mobile applications demonstrating UI architecture, low-latency performance, and rigorous frontend engineering."
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
                      Contribution
                    </div>
                    <div className="text-xs text-[#121214] font-medium font-body">
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
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Interactive Visual Preview Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {project.previewType === 'mobile-scanner' && <WellValetPreview />}
                  {project.previewType === 'streaming-player' && <PlayDramaPreview />}
                  {project.previewType === 'design-system' && <FloqUiPreview />}
                  {project.previewType === 'creative-lab' && (
                    <div className="bg-[#121214] text-white rounded-2xl p-8 border border-black/10 shadow-xl flex flex-col justify-between min-h-[300px]">
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
