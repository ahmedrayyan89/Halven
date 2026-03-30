import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import DestinationsGrid from "@/components/sections/DestinationsGrid";
import TravelTech from "@/components/sections/TravelTech";
import Packages from "@/components/sections/Packages";
import Footer from "@/components/sections/Footer";
import Preloader from "@/components/ui/Preloader";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import SectionDivider from "@/components/ui/SectionDivider";
import ScrollToTop from "@/components/ui/ScrollToTop";


export default function Home() {
  return (
    <>
      <Preloader />
      <NoiseOverlay />
      <main>
        <Navbar />
        <HeroSection />
        <SectionDivider variant="fade" />
        <DestinationsGrid />
        <SectionDivider variant="glow" className="my-8" />
        <TravelTech />
        <SectionDivider variant="fade" />
        <Packages />
        <SectionDivider variant="line" className="my-8" />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}