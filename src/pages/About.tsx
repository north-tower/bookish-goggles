
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutClientLogos from "@/components/AboutClientLogos";
import AboutServices from "@/components/AboutServices";
import AboutValues from "@/components/AboutValues";
import AboutHistory from "@/components/AboutHistory";
import AboutProcesses from "@/components/AboutProcesses";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <AboutClientLogos />
      <AboutServices />
      <AboutValues />
      <AboutHistory />
      <AboutProcesses />
      <Footer />
    </div>
  );
};

export default About;
