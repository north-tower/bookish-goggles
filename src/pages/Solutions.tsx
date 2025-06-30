
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/SolutionsHero";
import SolutionsGrid from "@/components/SolutionsGrid";
import SuccessStories from "@/components/SuccessStories";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SolutionsHero />
      <SolutionsGrid />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Solutions;
