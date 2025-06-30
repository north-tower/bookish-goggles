
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CasesHero from "@/components/CasesHero";
import CaseStudies from "@/components/CaseStudies";

const Cases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CasesHero />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default Cases;
