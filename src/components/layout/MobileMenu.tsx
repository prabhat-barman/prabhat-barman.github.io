import { X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navItems: Array<{ label: string; href: string }>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
  navItems
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#F9F9F6] flex flex-col justify-between p-6 md:p-10 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-black/8 pb-6">
        <a
          href="#"
          onClick={onClose}
          className="font-display font-bold text-xl tracking-tight text-[#121214]"
        >
          {profileData.brandName}
        </a>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full border border-black/10 hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-[#121214]" />
        </button>
      </div>

      {/* Main Nav Links */}
      <nav className="my-auto py-8">
        <ul className="space-y-6">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between text-3xl font-display font-bold tracking-tight text-[#121214] hover:text-[#5C5C66] transition-colors"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono-tech text-xs text-black/35 font-normal">
                      0{index + 1}
                    </span>
                    <span className={isActive ? 'border-b-2 border-[#121214]' : ''}>
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight className="w-6 h-6 text-black/20 group-hover:text-[#121214] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Info */}
      <div className="border-t border-black/8 pt-6 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono-tech text-[#5C5C66]">
          <span>{profileData.location}</span>
          <span>{profileData.timezone}</span>
        </div>
        <div className="flex items-center gap-4 pt-2">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-black/10 hover:bg-black/5 text-[#121214]"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-black/10 hover:bg-black/5 text-[#121214]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="p-3 rounded-full border border-black/10 hover:bg-black/5 text-[#121214]"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
