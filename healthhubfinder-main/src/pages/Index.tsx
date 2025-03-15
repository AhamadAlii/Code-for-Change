
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import BloodBankStatus from "@/components/BloodBankStatus";
import HealthTips from "@/components/HealthTips";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <BloodBankStatus />
        <HealthTips />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
