import React, { useState } from 'react';

interface HoverBorderGradientProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'button' | 'a' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  download?: string;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  children: React.ReactNode;
}

export const HoverBorderGradient: React.FC<HoverBorderGradientProps> = ({
  children,
  containerClassName = '',
  className = '',
  as: Component = 'button',
  duration = 1,
  clockwise = true,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Component
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full transition-all duration-300 ${containerClassName}`}
      {...props}
    >
      {/* Moving border gradient */}
      <div
        className={`absolute inset-[-100%] transition-opacity duration-500 ${
          hovered ? 'opacity-100' : 'opacity-40'
        }`}
        style={{
          background: 'conic-gradient(from 0deg, transparent 0 340deg, #CCFF00 360deg)',
          animation: `moving-border ${duration * 4}s linear infinite ${clockwise ? 'normal' : 'reverse'}`,
        }}
      />

      {/* Inner surface content */}
      <div
        className={`relative z-10 w-full rounded-full bg-[#121214] text-[#F9F9F6] px-5 py-2.5 text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#1a1a1e] ${className}`}
      >
        {children}
      </div>
    </Component>
  );
};
