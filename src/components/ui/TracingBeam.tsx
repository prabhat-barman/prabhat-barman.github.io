import React, { useEffect, useRef, useState } from 'react';

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export const TracingBeam: React.FC<TracingBeamProps> = ({
  children,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        setSvgHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element has scrolled past window top
      const total = rect.height;
      const current = windowHeight - rect.top;
      const progress = Math.min(Math.max(current / (total + windowHeight), 0), 1);
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const beamHeight = Math.max(svgHeight * scrollYProgress, 20);

  return (
    <div ref={ref} className={`relative w-full ${className}`}>
      {/* Tracing SVG Beam on Desktop */}
      <div className="hidden lg:block absolute -left-6 xl:-left-10 top-3 pointer-events-none z-20">
        <div className="relative">
          {/* Luminous Pulsing Orb */}
          <div
            className="absolute -left-1.5 w-4 h-4 rounded-full bg-[#121214] border-2 border-[#CCFF00] shadow-[0_0_12px_#CCFF00] transition-transform duration-75 flex items-center justify-center"
            style={{
              top: `${Math.min(beamHeight, svgHeight - 16)}px`,
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
          </div>

          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="ml-0.5 block"
            aria-hidden="true"
          >
            {/* Background passive path */}
            <line
              x1="10"
              y1="0"
              x2="10"
              y2={svgHeight}
              stroke="rgba(18, 18, 20, 0.08)"
              strokeWidth="2"
            />
            {/* Active luminous tracing line */}
            <line
              x1="10"
              y1="0"
              x2="10"
              y2={beamHeight}
              stroke="url(#gradient-tracing)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="gradient-tracing"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="0"
                y2={beamHeight}
              >
                <stop stopColor="#121214" stopOpacity="0.1" />
                <stop offset="0.7" stopColor="#34D399" />
                <stop offset="1" stopColor="#CCFF00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};
