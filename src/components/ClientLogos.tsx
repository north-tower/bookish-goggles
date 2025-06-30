
const ClientLogos = () => {
  const clients = [
    { name: "Whole Foods", logo: "🏪" },
    { name: "Starbucks", logo: "☕" },
    { name: "Dun & Bradstreet", logo: "📊" },
    { name: "PivotTree", logo: "🌳" },
    { name: "Nuance", logo: "🎯" },
    { name: "Mars", logo: "🍫" },
    { name: "American Express", logo: "💳" },
    { name: "Nokia", logo: "📞" },
    { name: "ChemTreat", logo: "⚗️" },
    { name: "Shift", logo: "🚗" },
    { name: "Hilton", logo: "🏨" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products we developed are used by
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-4xl mb-2">{client.logo}</div>
              <span className="text-sm font-medium text-gray-600 text-center">{client.name}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Expertise for Your Success
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Using powerful, industry-specific software solutions, our team can help you achieve your business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
