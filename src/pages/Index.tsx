import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductOverview from "@/components/ProductOverview";
import BenefitsSection from "@/components/BenefitsSection";
import CaseStudySection from "@/components/CaseStudySection";
import AboutSection from "@/components/AboutSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductOverview />
      <BenefitsSection />
      <CaseStudySection />
      <AboutSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
