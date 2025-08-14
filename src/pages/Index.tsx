import HeroSection from "@/components/HeroSection";
import FlavorsSection from "@/components/FlavorsSection";
import CustomOrdersSection from "@/components/CustomOrdersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FlavorsSection />
      <CustomOrdersSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
