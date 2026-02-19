import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import WaveBackground from "../components/WaveBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
// import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CoursesSection } from "../components/CoursesSection";

export const Home = () => {
  return (
    // <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      {/* <StarBackground /> */}
      <WaveBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        {/* <SkillsSection /> */}
        <CoursesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
