import './styles/globals.css';


import { useEffect, useState } from "react";
import { getPageData } from "./services/api";
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
 const [pageData, setPageData] = useState(null);

useEffect(() => {
  async function loadData() {
    const data = await getPageData();
    setPageData(data);
  }

  loadData();
}, []);

if (!pageData) {
  return <div>Loading...</div>;
}
  return (
    <>
      <Navbar />

      <main className='mainBoxWrap'>
        <HeroSection data={pageData} />

        <div className="divider divider--glow" />

        <AboutSection data={pageData} />

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
