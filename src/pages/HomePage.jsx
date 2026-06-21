import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import AnalysisSection from "../components/sections/AnalysisSection";
import DataSection from "../components/sections/DataSection";
import WritingSection from "../components/sections/WritingSection";
import ToolsSection from "../components/sections/ToolsSection";
import ContactSection from "../components/sections/ContactSection";
import Video from "../components/sections/VideoSection"

export default function HomePage({ pageData }) {
  return (
    <>
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

      <Video controls />

      <div className="divider divider--glow" />

      <ToolsSection />

      <div className="divider" />

      <ContactSection />
    </>
  );
}