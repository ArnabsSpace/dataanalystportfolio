import './styles/globals.css';

// Layout
import Navbar  from './components/layout/Navbar';
import Footer  from './components/layout/Footer';

// Sections
import HeroSection     from './components/sections/HeroSection';
import AboutSection    from './components/sections/AboutSection';
import AnalysisSection from './components/sections/AnalysisSection';
import DataSection     from './components/sections/DataSection';
import WritingSection  from './components/sections/WritingSection';
import ToolsSection    from './components/sections/ToolsSection';
import ContactSection  from './components/sections/ContactSection';

/**
 * App
 * Root composition component. Assembles the full portfolio page
 * from independent section components. No logic lives here —
 * this file is purely structural.
 */
export default function App() {
  return (
    <>
      <Navbar />

      <main className='mainBoxWrap'>
        <HeroSection />

        <div className="divider divider--glow" />

        <AboutSection />

        <div className="divider" />

        <AnalysisSection />

        <div className="divider divider--glow" />

        <DataSection />

        <div className="divider" />

        <WritingSection />

        <div className="divider divider--glow" />

        <ToolsSection />

        <div className="divider" />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
