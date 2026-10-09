import { useState, useEffect, useRef } from 'react';
import { Radio, Sparkles } from 'lucide-react';

interface StickyFeature {
  title: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  category: string;
  techBadge: string;
  gradientClass: string;
  accentColor: string;
  codeSnippet: string;
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
    gradientClass: 'from-[#052e16] via-[#022c22] to-[#0f172a]',
    accentColor: '#CCFF00',
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
    gradientClass: 'from-[#1e1b4b] via-[#0f172a] to-[#18181b]',
    accentColor: '#A78BFA',
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
    gradientClass: 'from-[#082f49] via-[#0c4a6e] to-[#0f172a]',
    accentColor: '#38BDF8',
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
    gradientClass: 'from-[#3b0764] via-[#1e1b4b] to-[#18181b]',
    accentColor: '#F472B6',
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
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const windowCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(windowCenter - elementCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeFeature = FEATURES[activeIndex];

  return (
    <section id="architecture" ref={containerRef} className="relative py-28 md:py-36 border-b border-black/8 bg-[#F9F9F6] transition-colors duration-500">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        {/* Section title */}
        <div className="mb-20 border-b border-black/8 pb-8">
          <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#5C5C66] uppercase mb-4">
            <span className="text-[#121214] font-semibold">02 / INTERACTIVE ARCHITECTURE</span>
            <span className="text-black/20">/</span>
            <span>Aceternity Sticky Scroll Reveal</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-editorial-md font-bold text-[#121214] tracking-tight max-w-3xl">
              Engineering impact, verified in production.
            </h2>
            <p className="text-[#5C5C66] text-sm md:text-base max-w-lg font-normal leading-relaxed">
              Scroll through the four architectural cornerstones that define my frontend engineering at Netlink Software. As you scroll, the live telemetry preview adapts dynamically.
            </p>
          </div>
        </div>

        {/* Two-column layout: Scrolling Story Steps + Sticky Right Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
          {/* Left Column: Interactive Story Steps with Aceternity Fade Reveal */}
          <div className="lg:col-span-6 space-y-28 md:space-y-40 py-12">
            {FEATURES.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={item.title}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-500 cursor-pointer p-8 sm:p-10 rounded-3xl border ${
                    isActive
                      ? 'bg-white border-black/20 shadow-xl opacity-100 scale-[1.02]'
                      : 'bg-transparent border-transparent opacity-30 hover:opacity-70 scale-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-tech text-xs tracking-wider text-[#5C5C66] font-semibold">
                      {item.category}
                    </span>
                    <span
                      className="font-mono-tech text-[11px] px-3 py-1 rounded-full border transition-colors font-medium"
                      style={{
                        backgroundColor: isActive ? '#121214' : 'rgba(0,0,0,0.05)',
                        color: isActive ? '#FFFFFF' : '#5C5C66',
                        borderColor: isActive ? '#121214' : 'rgba(0,0,0,0.1)'
                      }}
                    >
                      {item.techBadge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#121214] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base sm:text-lg font-semibold text-[#121214]">
                    {item.tagline}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-[#5C5C66] leading-relaxed font-body">
                    {item.description}
                  </p>

                  {/* Impact Metric Bar */}
                  <div className="mt-8 pt-6 border-t border-black/8 flex items-center justify-between">
                    <div>
                      <div
                        className="font-display font-black text-3xl sm:text-4xl transition-colors"
                        style={{ color: isActive ? '#121214' : '#5C5C66' }}
                      >
                        {item.metric}
                      </div>
                      <div className="text-xs font-mono-tech text-[#5C5C66] mt-0.5">
                        {item.metricLabel}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: isActive ? '#CCFF00' : 'rgba(0,0,0,0.2)',
                          boxShadow: isActive ? '0 0 10px #CCFF00' : 'none'
                        }}
                      />
                      <span className="text-xs font-mono-tech text-[#5C5C66]">
                        {isActive ? 'IN FOCUS' : 'SCROLL TO VIEW'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Aceternity Sticky Morphing Container */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div
              className={`rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl transition-all duration-700 ease-out bg-gradient-to-br ${activeFeature.gradientClass} text-white min-h-[520px] flex flex-col justify-between overflow-hidden relative group`}
            >
              {/* Subtle architectural noise / glow behind the card */}
              <div
                className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeFeature.accentColor }}
              />

              {/* Card Top Navigation / Telemetry Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-5 mb-6">
                <div className="flex items-center gap-2.5 font-mono-tech text-xs text-white/70">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-ping"
                    style={{ backgroundColor: activeFeature.accentColor }}
                  />
                  <span className="font-semibold tracking-wider text-white">
                    ACETERNITY_REVEAL :: STEP 0{activeIndex + 1}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono-tech text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  <Radio className="w-3.5 h-3.5 text-white" />
                  <span className="text-white/90">LIVE_TELEMETRY</span>
                </div>
              </div>

              {/* Dynamic Feature Preview Stage */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="font-mono-tech text-xs tracking-wider uppercase font-bold"
                      style={{ color: activeFeature.accentColor }}
                    >
                      {activeFeature.category}
                    </span>
                    <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1 tracking-tight">
                      {activeFeature.title}
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <div
                      className="font-display text-3xl sm:text-4xl font-black"
                      style={{ color: activeFeature.accentColor }}
                    >
                      {activeFeature.metric}
                    </div>
                    <div className="text-[11px] font-mono-tech text-white/60">
                      {activeFeature.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Live Code Specimen Block with syntax accents */}
                <div className="rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md p-5 font-mono-tech text-xs text-white/90 overflow-x-auto leading-relaxed shadow-2xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-white/40">
                    <span>PRODUCTION SPECIMEN</span>
                    <span>TypeScript • ESNext</span>
                  </div>
                  <pre className="text-[11px] sm:text-xs">
                    <code>{activeFeature.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs font-mono-tech text-white/70">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Verified Production Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {FEATURES.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === dotIdx
                          ? 'w-6 bg-white'
                          : 'w-1.5 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
