import React, { useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { MobileMenu } from './MobileMenu';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Playground', href: '#playground' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const activeSection = useScrollSpy(['hero', 'work', 'architecture', 'about', 'experience', 'playground', 'contact'], 180);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hidden when scrolling down and not at top of page
  const isHidden = scrollDirection === 'down' && !isAtTop;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          isAtTop
            ? 'bg-[#F9F9F6]/80 backdrop-blur-md border-b border-black/[0.04]'
            : 'bg-[#F9F9F6]/95 backdrop-blur-md border-b border-black/8 shadow-xs'
        }`}
      >
        <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 font-display font-bold text-xl tracking-tight text-[#121214] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
          >
            <span>{profileData.brandName}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] border border-black/30 group-hover:scale-150 transition-transform" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.03] p-1.5 rounded-full border border-black/[0.06]">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                    isActive
                      ? 'bg-[#121214] text-[#F9F9F6] shadow-xs'
                      : 'text-[#5C5C66] hover:text-[#121214] hover:bg-black/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action / Let's Talk CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono-tech tracking-tight font-medium text-[#121214] hover:text-black border-b border-black/30 pb-0.5 hover:border-black transition-all"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg border border-black/10 hover:bg-black/5 text-[#121214] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        navItems={NAV_ITEMS}
      />
    </>
  );
};
