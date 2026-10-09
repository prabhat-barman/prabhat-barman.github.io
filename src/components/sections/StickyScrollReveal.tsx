import { useState, useEffect, useRef } from 'react';
import { Radio, Sparkles } from 'lucide-react';

interface StickyFeature {
  title: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  category: string;
  codeSnippet: string;
  techBadge: string;
}

const FEATURES: StickyFeature[] = [
  {
    category: '01 / REAL-TIME ARCHITECTURE',
    title: 'Low-Latency WebSocket Streaming',
    tagline: 'High-frequency telemetry pipelines for connected automotive fleets.',
    description: 'Engineered WebSocket event processors capable of ingesting 10+ telemetry packets per second without causing frame drops or UI stutters. Batching socket dispatches to animation frames preserved 60fps rendering.',
    metric: '10+ Hz',
    metricLabel: 'WebSocket Telemetry Frequency',
    techBadge: 'WebSockets • React.js • Redux',
    codeSnippet: `// Frame-batched WebSocket Telemetry Hook
export function useTelemetryStream(vehicleId: string) {
  const [telemetry, setTelemetry] = useState<VehicleMetrics>(initialState);
  useEffect(() => {
    const socket = new WebSocket(\`wss://fleet.siriusxm.io/v1/\${vehicleId}\`);
    socket.onmessage = (event) => {
      requestAnimationFrame(() => {
        setTelemetry(JSON.parse(event.data));
      });
    };
    return () => socket.close();
  }, [vehicleId]);
  return telemetry;
}`
  },
  {
    category: '02 / PERFORMANCE ENGINEERING',
    title: '35–40% Initial Load Time Reduction',
    tagline: 'Rigorous profiling, selective memoization, and route-level code splitting.',
    description: 'Systematically profiled heavy component render trees with Chrome DevTools and React Profiler. Applied granular memoization and route-level lazy loading to slash initial bundle weight and eliminate wasted re-renders.',
    metric: '35–40%',
    metricLabel: 'Initial Load Time Reduction',
    techBadge: 'Code Splitting • Memoization • Vite',
    codeSnippet: `// Route-level Dynamic Import & Selective Memo
const FleetAnalytics = lazy(() => import('./FleetAnalytics'));

export const MetricGauge = React.memo(
  ({ value, max }: { value: number; max: number }) => {
    const percentage = useMemo(() => (value / max) * 100, [value, max]);
    return <div className="gauge-fill" style={{ width: \`\${percentage}%\` }} />;
  },
  (prev, next) => prev.value === next.value
);`
  },
  {
    category: '03 / REGULATED ARCHITECTURE',
    title: 'HIPAA-Compliant Patient Workflows',
    tagline: 'Secure data handling, zero-leak state, and WCAG AA accessibility.',
    description: 'Architected healthcare interfaces for IrisInsights.us that translate complex federal HIPAA privacy requirements into scalable React UI patterns. Kept sensitive PHI in ephemeral memory with automated idle session timeouts.',
    metric: '100% WCAG AA',
    metricLabel: 'Accessible & HIPAA Compliant',
    techBadge: 'HIPAA • WCAG AA • OAuth 2.0',
    codeSnippet: `// Ephemeral HIPAA Patient PHI Filter
export function MaskedField({ value, isAuthorized }: FieldProps) {
  const [unmasked, setUnmasked] = useState(false);
  
  if (!isAuthorized) {
    return <span className="font-mono text-zinc-500">•••••••••• [RESTRICTED]</span>;
  }
  return (
    <button onClick={() => setUnmasked(!unmasked)} className="audit-logged-click">
      {unmasked ? value : \`••• \${value.slice(-4)}\`}
    </button>
  );
}`
  },
  {
    category: '04 / ENTERPRISE DESIGN SYSTEMS',
    title: '30% Code Duplication Reduction',
    tagline: 'Standardized component abstractions deployed across 6+ enterprise modules.',
    description: 'Designed and deployed reusable component abstractions at Netlink Software adopted across 6+ distinct enterprise modules. Accelerated team delivery timelines by approximately 20% while enforcing design consistency.',
    metric: '30% Less Code',
    metricLabel: 'Across 6+ Enterprise Modules',
    techBadge: 'floq_ui • TypeScript • Storybook',
    codeSnippet: `// Compound Enterprise Data Grid Primitive
<DataGrid.Root records={dataset} pageSize={50}>
  <DataGrid.Header>
    <DataGrid.Column field="id" sortable />
    <DataGrid.Column field="status" filterable />
  </DataGrid.Header>
  <DataGrid.VirtualBody rowHeight={48} />
</DataGrid.Root>`
  }
];

export const StickyScrollReveal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.scrollHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress through this section
      const progress = Math.max(0, Math.min(1, (-rect.top) / (totalHeight - windowHeight)));
      const nextIndex = Math.min(
        FEATURES.length - 1,
        Math.floor(progress * FEATURES.length)
      );
      setActiveIndex(nextIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeFeature = FEATURES[activeIndex];

  return (
    <div ref={containerRef} className="relative py-24 md:py-32 border-b border-black/8 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section title */}
        <div className="mb-16 border-b border-black/8 pb-8">
          <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#5C5C66] uppercase mb-4">
            <span className="text-[#121214] font-semibold">INTERACTIVE DEEP DIVE</span>
            <span className="text-black/20">/</span>
            <span>Sticky Architecture Reveal</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-editorial-md font-bold text-[#121214] tracking-tight max-w-2xl">
              Engineering impact, verified in production.
            </h2>
            <p className="text-[#5C5C66] text-sm md:text-base max-w-md font-normal leading-relaxed">
              Scroll through the four architectural cornerstones that define my frontend engineering at Netlink Software.
            </p>
          </div>
        </div>

        {/* Two-column layout: Sticky Right Card + Scrolling Left Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* Left Column: Interactive Story Steps */}
          <div className="lg:col-span-6 space-y-24 md:space-y-36 py-8">
            {FEATURES.map((item, idx) => (
              <div
                key={item.title}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 cursor-pointer p-6 sm:p-8 rounded-2xl border ${
                  activeIndex === idx
                    ? 'bg-white border-black/20 shadow-md translate-x-1'
                    : 'bg-transparent border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-tech text-xs text-[#5C5C66]">
                    {item.category}
                  </span>
                  <span className="font-mono-tech text-[10px] px-2.5 py-1 rounded-full bg-black/5 text-[#121214] font-semibold">
                    {item.techBadge}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#121214] tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-base font-medium text-[#121214]">
                  {item.tagline}
                </p>

                <p className="mt-3 text-sm text-[#5C5C66] leading-relaxed font-body">
                  {item.description}
                </p>

                {/* Metric pill */}
                <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between">
                  <div>
                    <div className="font-display font-extrabold text-2xl text-[#121214]">
                      {item.metric}
                    </div>
                    <div className="text-xs font-mono-tech text-[#5C5C66]">
                      {item.metricLabel}
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] border border-black/40" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Live Telemetry & Code Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-[#121214] text-[#F9F9F6] rounded-2xl p-6 sm:p-8 border border-black/10 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px]">
              {/* Card Top Navigation / Telemetry Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2 font-mono-tech text-xs text-white/60">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                  <span>ARCHITECTURE_REVEAL :: 0{activeIndex + 1}</span>
                </div>
                <div className="flex items-center gap-2 font-mono-tech text-xs text-white/70">
                  <Radio className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>ACTIVE_NODE</span>
                </div>
              </div>

              {/* Dynamic Feature Preview Stage */}
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono-tech text-xs text-[#CCFF00]">
                      {activeFeature.category}
                    </span>
                    <h4 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                      {activeFeature.title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-black text-[#CCFF00]">
                      {activeFeature.metric}
                    </div>
                    <div className="text-[10px] font-mono-tech text-white/50">
                      {activeFeature.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Live Code Specimen Block */}
                <div className="rounded-xl border border-white/15 bg-black/60 p-4 font-mono-tech text-xs text-white/90 overflow-x-auto leading-relaxed shadow-inner">
                  <pre className="text-[11px] sm:text-xs">
                    <code>{activeFeature.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-white/50">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>Verified Production Metric</span>
                </div>
                <span className="text-white/70">Step {activeIndex + 1} of {FEATURES.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
