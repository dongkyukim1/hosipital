import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import ProgramsSection from "@/components/programs-section";
import InfoSection from "@/components/info-section";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ProgramsSection />
        <InfoSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
