import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppFloat from "./components/WhatsAppFloat";
import AnnouncementBar from "./sections/AnnouncementBar";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import Services from "./sections/Services";
import Quiz from "./sections/Quiz";
import Gallery from "./sections/Gallery";
import LivingArt from "./sections/LivingArt";
import Process from "./sections/Process";
import Pricing from "./sections/Pricing";
import Maintenance from "./sections/Maintenance";
import Proof from "./sections/Proof";
import FAQSection from "./sections/FAQ";
import ServiceArea from "./sections/ServiceArea";
import FinalCTA from "./sections/FinalCTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <WhatsAppFloat />
      <header className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar />
        <Navbar />
      </header>
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Quiz />
        <Gallery />
        <LivingArt />
        <Process />
        <Pricing />
        <Maintenance />
        <Proof />
        <FAQSection />
        <ServiceArea />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
