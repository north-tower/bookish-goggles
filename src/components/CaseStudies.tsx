
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All industries");

  const filters = [
    "All industries",
    "e-commerce", 
    "Finance",
    "Government",
    "Healthcare",
    "Media & Entertainment",
    "Retail",
    "SaaS",
    "Security",
    "Tech",
    "Travel"
  ];

  const caseStudies = [
    {
      id: 1,
      title: "We led the infrastructure migration to a new AWS-based architecture and assisted in product growth",
      company: "9good",
      description: "An innovative solution providing keyless, touchless, and mobile-enabled access to protected storage and rooms in the business and retail environments, creating a sense of confidence and assurance for all users.",
      tags: ["AWS", "PERFORMANCE AND LOAD TESTING", "ACCESS"],
      background: "bg-gradient-to-br from-blue-50 to-purple-50",
      website: "www.9good2go.com"
    },
    {
      id: 2,
      title: "We developed an iOS app for socializing with like-minded people by participating in engaging events.",
      company: "MYA",
      description: "A location-based social media application that provides people with an effortless way to connect and socialize with like-minded individuals through exciting social gatherings.",
      tags: ["SOCIAL MEDIA APP", "IOS APP"],
      background: "bg-gradient-to-br from-red-500 to-orange-500",
      website: "wyaapp.com"
    },
    {
      id: 3,
      title: "We have developed a new generation app that simplifies the payment process in restaurants and brings a new dining experience.",
      company: "álacart",
      description: "Alacart revolutionizes the dining experience by enabling fast payment and providing valuable insights to restaurant owners. The NFC technology, customers can easily register at their tables, pay via WhatsApp or SMS, and leave the restaurant anytime without needing to request a bill or wait for the servant to close their order.",
      tags: ["PAYMENT PLATFORM", "RESTAURANTS", "CHAT BOT"],
      background: "bg-gradient-to-br from-green-300 to-lime-300",
      website: "www.alacart.ma"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case studies */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`rounded-3xl p-8 md:p-12 ${study.background} relative overflow-hidden`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex-1 max-w-2xl">
                  <div className="mb-6">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full mb-4"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="text-lg font-bold text-gray-900 mb-2">{study.company}</div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {study.description}
                    </p>
                  </div>

                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                    See case study
                  </Button>
                </div>

                <div className="hidden md:block">
                  <div className="text-xs text-gray-600 bg-white px-2 py-1 rounded">
                    {study.website}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
