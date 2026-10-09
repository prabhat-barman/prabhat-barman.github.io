import { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/8 bg-[#F5F5F0] pt-16 pb-12 text-[#121214]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-black/8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl tracking-tight text-[#121214]">
                {profileData.brandName}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] border border-black/25" />
            </div>
            <p className="text-[#5C5C66] text-sm max-w-sm font-body leading-relaxed">
              {profileData.shortBio}
            </p>
            <div className="pt-2 flex items-center gap-3 font-mono-tech text-xs text-[#5C5C66]">
              <span>Bengaluru, IN</span>
              <span>•</span>
              <span className="tabular-nums font-semibold text-[#121214]">{currentTime || '12:00:00 PM'} IST</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-body">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#work" className="text-[#5C5C66] hover:text-[#121214] transition-colors">
                  01 / Work Showcase
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#5C5C66] hover:text-[#121214] transition-colors">
                  02 / Architecture & Bio
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#5C5C66] hover:text-[#121214] transition-colors">
                  03 / Experience & Skills
                </a>
              </li>
              <li>
                <a href="#playground" className="text-[#5C5C66] hover:text-[#121214] transition-colors">
                  04 / Interactive Lab
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#5C5C66] hover:text-[#121214] transition-colors">
                  05 / Contact & Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Social / Connect */}
          <div className="space-y-3 font-body">
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#5C5C66] mb-4">
              Network
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#5C5C66] hover:text-[#121214] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#5C5C66] hover:text-[#121214] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center gap-2 text-[#5C5C66] hover:text-[#121214] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Direct</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#5C5C66]">
          <div className="flex items-center gap-2">
            <span>© {CURRENT_YEAR} {profileData.brandName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline">React 19 • TypeScript • Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 hover:border-black/30 bg-white/70 hover:bg-white text-[#121214] transition-all"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
