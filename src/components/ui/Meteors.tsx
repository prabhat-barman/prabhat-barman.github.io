import React, { useMemo } from 'react';

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 18, className = '' }) => {
  const meteors = useMemo(() => {
    return Array.from({ length: number }).map((_, idx) => {
      const top = (idx * 29 + 17) % 80;
      const left = (idx * 37 + 11) % 100;
      const delay = ((idx * 1.37) % 4.5).toFixed(2);
      const duration = (4 + ((idx * 1.63) % 5)).toFixed(2);

      return {
        id: idx,
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      };
    });
  }, [number]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rounded-full bg-[#CCFF00] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor-effect"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        >
          {/* Meteor tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-[#CCFF00] via-[#CCFF00]/40 to-transparent" />
        </span>
      ))}
    </div>
  );
};
