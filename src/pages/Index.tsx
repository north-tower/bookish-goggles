
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <ClientLogos />
      <Testimonials />
      <BlogPreview />
      <Footer />
    </div>
  );
};

export default Index;
