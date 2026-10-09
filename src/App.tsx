import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Work } from './components/sections/Work';
import { StickyScrollReveal } from './components/sections/StickyScrollReveal';
import { About } from './components/sections/About';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Playground } from './components/sections/Playground';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { InteractiveBotCompanion } from './components/ui/InteractiveBotCompanion';
import { DeveloperTerminal } from './components/ui/DeveloperTerminal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleOpenTerminalEvent = () => setIsTerminalOpen(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
      // Backtick / tilde when not typing in form inputs
      if (
        (e.key === '`' || e.key === '~') &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('open-terminal', handleOpenTerminalEvent);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-terminal', handleOpenTerminalEvent);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F9F6] text-[#121214] font-body selection:bg-[#CCFF00] selection:text-[#121214]">
      {/* Header & Global Navigation */}
      <Header />

      {/* Main Content Landmarks */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Work />
        <StickyScrollReveal />
        <About />
        <ExperienceSection />
        <Playground />
        <Contact />
      </main>

      {/* Floating Interactive Mascot / Bot Companion */}
      <InteractiveBotCompanion />

      {/* Interactive Developer Terminal (⌘K / ~) */}
      <DeveloperTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
