import React from 'react';

interface SectionHeadingProps {
  index: string;
  category: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  category,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 border-b border-black/8 pb-8 ${className}`}>
      <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#5C5C66] uppercase mb-4">
        <span className="text-[#121214] font-semibold">{index}</span>
        <span className="text-black/25">/</span>
        <span>{category}</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <h2 className="font-display text-editorial-md font-bold text-[#121214] tracking-tight max-w-2xl">
          {title}
        </h2>
        {description && (
          <p className="text-[#5C5C66] text-sm md:text-base max-w-md font-normal leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
