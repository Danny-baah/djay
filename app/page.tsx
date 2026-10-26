import DjayHero from "@/components/hero/DjayHero";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import StructureSection from "@/components/structure/StructureSection";
import SectorsSection from "@/components/sectors/SectorsSection";
import AccreditationsSection from "@/components/accreditations/AccreditationsSection";
import WhyWorkWithUsSection from "@/components/why-us/WhyWorkWithUsSection";
import CtaSection from "@/components/cta/CtaSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <DjayHero />
      <AboutSection />
      <ServicesSection />
      <StructureSection />
      <SectorsSection />
      <AccreditationsSection />
      <WhyWorkWithUsSection />
      <CtaSection />
      <Footer />
    </>
  );
}





