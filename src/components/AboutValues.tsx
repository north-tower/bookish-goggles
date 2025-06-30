
import { MessageCircle, Users, Gem } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: MessageCircle,
      title: "Clear communication",
      description: "We build relationships based on integrity and trust, delivering on our promises and maintaining clear communication at all times."
    },
    {
      icon: Users,
      title: "Customer-Centric Approach", 
      description: "We prioritize our clients' success, understand your unique needs, and deliver tailored solutions that drive your business growth."
    },
    {
      icon: Gem,
      title: "Innovation and Excellence",
      description: "As a team on the cutting edge of technology trends, we consistently deliver innovative, high-quality solutions."
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Our values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
