
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutHistory = () => {
  const historyData = [
    {
      year: "2023",
      description: "We gain traction in the AI market with generative pre-trained transformers (GPT) and large language model (LLM)"
    },
    {
      year: "2022", 
      description: "Over 1,000 projects completed successfully for more 400 clients."
    },
    {
      year: "2021",
      description: "Exploring NFT market and leveraging blockchain technologies for businesses"
    },
    {
      year: "2020",
      description: "Our service provision starts to encompass projects and SaaS solutions",
      isGrayed: true
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold text-white">Our history</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {historyData.map((item, index) => (
            <div key={index} className={`${item.isGrayed ? 'opacity-50' : ''}`}>
              <h3 className={`text-4xl font-bold mb-4 ${item.isGrayed ? 'text-gray-500' : 'text-white'}`}>
                {item.year}
              </h3>
              <p className={`text-sm leading-relaxed ${item.isGrayed ? 'text-gray-600' : 'text-gray-400'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
