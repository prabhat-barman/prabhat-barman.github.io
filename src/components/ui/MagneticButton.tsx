import React, { useRef, useState, useCallback } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  asAnchor = false,
  href,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * 0.2;
    const deltaY = (clientY - centerY) * 0.2;
    setPosition({ x: deltaX, y: deltaY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  const baseStyles =
    'relative inline-flex items-center justify-center font-body text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 active:scale-[0.98] select-none';

  const variants = {
    primary:
      'bg-[#121214] text-[#F9F9F6] px-6 py-3.5 rounded-full hover:bg-black/85 shadow-sm hover:shadow',
    accent:
      'bg-[#CCFF00] text-[#121214] px-6 py-3.5 rounded-full hover:bg-[#B8E600] font-bold border border-black/10 shadow-sm',
    secondary:
      'bg-black/5 text-[#121214] px-6 py-3.5 rounded-full hover:bg-black/10 border border-black/5',
    outline:
      'bg-transparent text-[#121214] px-5 py-3 rounded-full border border-black/15 hover:border-black/40 hover:bg-black/[0.02]'
  };

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s ease-out'
  };

  if (asAnchor && href) {
    return (
      <a
        ref={buttonRef as unknown as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as unknown as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
