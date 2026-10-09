import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Work } from './components/sections/Work';
import { StickyScrollReveal } from './components/sections/StickyScrollReveal';
import { About } from './components/sections/About';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Playground } from './components/sections/Playground';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
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

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
