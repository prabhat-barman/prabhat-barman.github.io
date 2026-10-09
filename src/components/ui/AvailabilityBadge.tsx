import React from 'react';
import { profileData } from '../../data/profile';

interface AvailabilityBadgeProps {
  className?: string;
  showDetail?: boolean;
}

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({
  className = '',
  showDetail = false
}) => {
  const { availability } = profileData;

  if (!availability.status) {
    return null;
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-tech tracking-wide border border-black/10 bg-white/80 backdrop-blur-sm transition-all hover:border-black/25 ${className}`}
      role="status"
      aria-label={availability.label}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#99E600] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ACC00]" />
      </span>
      <span className="text-[#121214] font-medium tracking-tight">
        {availability.label}
      </span>
      {showDetail && (
        <span className="hidden md:inline text-[#7A7A85] border-l border-black/10 pl-2">
          {availability.description}
        </span>
      )}
    </div>
  );
};
