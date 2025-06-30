
import { Button } from "@/components/ui/button";

const SolutionsGrid = () => {
  const solutions = [
    {
      title: "AI-Driven software",
      description: "We have years of experience in integrating industry-leading AI models and driving new AI solutions such as OpenAI GPT, Bing AI, Azure AI, and autoGPT.",
      buttonText: "Learn more",
      illustration: "🤖"
    },
    {
      title: "Enterprise Development", 
      description: "We are a team of professionals who will provide you with access to the design, development, and support expertise you need to make your enterprise apps venture a success.",
      buttonText: "Learn more",
      illustration: "💼"
    },
    {
      title: "Custom Development",
      description: "When off-the-shelf software can't fulfill the request because of individual business needs, we assist with developing custom solutions.",
      buttonText: "Learn more", 
      illustration: "⚙️"
    },
    {
      title: "Healthcare Development",
      description: "Our development team understands the healthcare industry, UI standards, HIPAA, and FDA requirements, and knows how to help you create reliable and innovative mobile apps.",
      buttonText: "Learn more",
      illustration: "🏥"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  >
                    {solution.buttonText} →
                  </Button>
                </div>
                <div className="text-4xl ml-4">
                  {solution.illustration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
