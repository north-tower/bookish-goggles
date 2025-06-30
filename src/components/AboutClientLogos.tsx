
const AboutClientLogos = () => {
  const achievements = [
    {
      title: "2025 Clutch Global Winners",
      subtitle: "Clutch",
      logo: "🏆"
    },
    {
      title: "Top 20 App Developers", 
      subtitle: "MANIFEST",
      logo: "📱"
    },
    {
      title: "Top 10 Software Developers",
      subtitle: "DESIGNRUSH", 
      logo: "💻"
    },
    {
      title: "Top app developers In California",
      subtitle: "TopDevelopers",
      logo: "🌟"
    },
    {
      title: "Top app developers In California", 
      subtitle: "GoodFirms",
      logo: "⭐"
    }
  ];

  const mediaLogos = [
    { name: "TechCrunch", logo: "TC" },
    { name: "Forbes", logo: "Forbes" },
    { name: "VentureBeat", logo: "VentureBeat" },
    { name: "Bloomberg", logo: "Bloomberg" },
    { name: "CNBC", logo: "CNBC" },
    { name: "The Sun", logo: "The Sun" },
    { name: "TNW", logo: "TNW" },
    { name: "Business Insider", logo: "BUSINESS INSIDER" },
    { name: "Yahoo Finance", logo: "yahoo! finance" }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Awards Section */}
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="text-4xl mb-2">{achievement.logo}</div>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{achievement.title}</h3>
              <p className="text-gray-400 text-xs">{achievement.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <button className="text-white border border-gray-600 px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            All achievements ↓
          </button>
        </div>

        {/* Media Coverage */}
        <div className="text-center mb-12">
          <h2 className="text-white text-2xl font-bold">Our clients were featured on</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {mediaLogos.slice(0, 5).map((media, index) => (
            <div key={index} className="text-center">
              <div className="text-white font-bold text-lg">{media.logo}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mt-8">
          {mediaLogos.slice(5).map((media, index) => (
            <div key={index} className="text-center">
              <div className="text-white font-bold text-lg">{media.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutClientLogos;
