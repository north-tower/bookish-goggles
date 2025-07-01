import { MessageCircle, Users, Gem } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: MessageCircle,
      title: "Expert Team",
      description: "Skilled developers, designers, and tech enthusiasts dedicated to delivering excellence."
    },
    {
      icon: Users,
      title: "Client-Centric Approach", 
      description: "Tailored solutions to meet unique business needs and ensure client satisfaction."
    },
    {
      icon: Gem,
      title: "Agile Methodology",
      description: "Fast, adaptive, and efficient project execution for optimal results."
    },
    {
      icon: Gem,
      title: "Affordable & Scalable",
      description: "Cost-effective solutions for startups and enterprises, designed to grow with your business."
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
