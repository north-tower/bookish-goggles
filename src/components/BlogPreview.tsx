
const BlogPreview = () => {
  const blogPosts = [
    {
      title: "AI, Business Agility, and the Future of Work: Insights from Diffco's CEO on the Elite Entrepreneurs Podcast",
      excerpt: "In a recent episode of the Elite Entrepreneurs podcast, Diffco CEO Vadim Peskov joined host David Gilliland for a wide-ranging discussion about artificial intelligence, business strategy, and the evolving nature of work in the digital age.",
      date: "April 3, 2025",
      image: "🎙️"
    },
    {
      title: "AI, Open Source, and the Future of Automation: Insights from Diffco's CEO on the CEO Wisdom Podcast",
      excerpt: "Our CEO, Vadim Peskov, recently chatted with Charles Cormier on the CEO Wisdom Podcast about where AI is headed, the role of open source technology, and how businesses can stay ahead of the curve.",
      date: "March 3, 2025",
      image: "🎧"
    },
    {
      title: "Diffco Wins TrueFirms Top Companies Award 2024!",
      excerpt: "We're proud to be named a TrueFirms Top Companies Annual Award 2024 winner in Software Development! Selected from thousands of companies worldwide, this recognition highlights our commitment to excellence.",
      date: "February 12, 2025",
      image: "🏆"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Browse our latest blog articles
          </h2>
          
          <div className="flex justify-center space-x-8 mb-12">
            <button className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-2">Everything</button>
            <button className="text-gray-500 hover:text-gray-900 transition-colors pb-2">Podcasts and Interviews</button>
            <button className="text-gray-500 hover:text-gray-900 transition-colors pb-2">Achievements</button>
            <button className="text-gray-500 hover:text-gray-900 transition-colors pb-2">Clients</button>
            <button className="text-gray-500 hover:text-gray-900 transition-colors pb-2">Insights</button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-6xl">
                {post.image}
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <span className="text-gray-600">←</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <span className="text-gray-600">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
