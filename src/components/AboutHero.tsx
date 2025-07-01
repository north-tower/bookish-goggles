import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full mb-6">
            Now developing faster with AI ⚡
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Company Profile: Aeres Technologies
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Aeres Technologies is a dynamic tech company based in Nairobi, Kenya, specializing in innovative mobile and web-based solutions. We leverage cutting-edge technology to build scalable, user-friendly applications that solve real-world problems for businesses and consumers across Africa and beyond.<br/><br/>
          <span className="text-white font-semibold">Mission:</span> To empower businesses and individuals through innovative, reliable, and affordable digital solutions that drive efficiency and growth.<br/>
          <span className="text-white font-semibold">Vision:</span> To be a leading technology solutions provider in Africa, recognized for excellence in software development and digital innovation.
        </p>
        
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg text-lg">
          Let's chat →
        </Button>
      </div>
    </section>
  );
};

export default AboutHero;
