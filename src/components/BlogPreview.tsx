import { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, BookOpen, Mic, Trophy, Users, Lightbulb, ArrowRight, Clock, Tag, Zap } from 'lucide-react';

const BlogPreview = () => {
  const [activeFilter, setActiveFilter] = useState('Everything');
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPost, setHoveredPost] = useState(null);

  const filters = [
    { name: 'Everything', icon: <BookOpen className="w-4 h-4" />, count: 9 },
    { name: 'Podcasts and Interviews', icon: <Mic className="w-4 h-4" />, count: 3 },
    { name: 'Achievements', icon: <Trophy className="w-4 h-4" />, count: 2 },
    { name: 'Clients', icon: <Users className="w-4 h-4" />, count: 2 },
    { name: 'Insights', icon: <Lightbulb className="w-4 h-4" />, count: 2 }
  ];

  const allBlogPosts = [
    {
      id: 1,
      title: "AI, Business Agility, and the Future of Work: Insights from Aeres Technologies' CEO on the Elite Entrepreneurs Podcast",
      excerpt: "In a recent episode of the Elite Entrepreneurs podcast, Aeres Technologies CEO [Name] joined host David Gilliland for a wide-ranging discussion about artificial intelligence, business strategy, and the evolving nature of work in the digital age.",
      date: "April 3, 2025",
      image: "🎙️",
      category: "Podcasts and Interviews",
      readTime: "5 min read",
      tags: ["AI", "Leadership", "Podcast"],
      featured: true
    },
    {
      id: 2,
      title: "AI, Open Source, and the Future of Automation: Insights from Aeres Technologies' CEO on the CEO Wisdom Podcast",
      excerpt: "Our CEO, [Name], recently chatted with Charles Cormier on the CEO Wisdom Podcast about where AI is headed, the role of open source technology, and how businesses can stay ahead of the curve.",
      date: "March 3, 2025",
      image: "🎧",
      category: "Podcasts and Interviews",
      readTime: "7 min read",
      tags: ["AI", "Open Source", "Automation"]
    },
    {
      id: 3,
      title: "Aeres Technologies Wins TrueFirms Top Companies Award 2024!",
      excerpt: "We're proud to be named a TrueFirms Top Companies Annual Award 2024 winner in Software Development! Selected from thousands of companies worldwide, this recognition highlights our commitment to excellence and innovation.",
      date: "February 12, 2025",
      image: "🏆",
      category: "Achievements",
      readTime: "3 min read",
      tags: ["Awards", "Recognition", "Excellence"]
    },
    {
      id: 4,
      title: "The Evolution of Software Development: From Monoliths to Microservices",
      excerpt: "Explore how software architecture has evolved over the years and why microservices are becoming the go-to choice for modern applications.",
      date: "January 28, 2025",
      image: "⚙️",
      category: "Insights",
      readTime: "8 min read",
      tags: ["Architecture", "Microservices", "Development"]
    },
    {
      id: 5,
      title: "Client Success Story: Transforming E-commerce with AI",
      excerpt: "How we helped a major retailer increase their conversion rates by 250% using machine learning and personalized recommendations.",
      date: "January 15, 2025",
      image: "🛒",
      category: "Clients",
      readTime: "6 min read",
      tags: ["AI", "E-commerce", "Case Study"]
    },
    {
      id: 6,
      title: "Building Scalable Cloud Infrastructure: Best Practices",
      excerpt: "Learn the essential strategies for designing and implementing cloud infrastructure that can grow with your business needs.",
      date: "December 20, 2024",
      image: "☁️",
      category: "Insights",
      readTime: "10 min read",
      tags: ["Cloud", "Infrastructure", "Scalability"]
    }
  ];

  const filteredPosts = activeFilter === 'Everything' 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.category === activeFilter);

  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage);

  useEffect(() => {
    setIsVisible(true);
    setCurrentPage(0);
  }, [activeFilter]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-100 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-20 w-28 h-28 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-32 w-36 h-36 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gray-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-amber-400 rotate-45 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl mb-8 shadow-lg shadow-amber-500/25 transform hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-6 leading-tight">
            Latest Insights & Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16">
            Stay updated with cutting-edge insights, client success stories, and industry expertise from our team of innovators
          </p>
          
          {/* Enhanced filter tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter, index) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`group relative px-6 py-4 rounded-2xl transition-all duration-500 flex items-center gap-3 font-medium ${
                  activeFilter === filter.name
                    ? 'bg-amber-400 text-white shadow-lg shadow-amber-400/25 transform scale-105'
                    : 'bg-white text-gray-600 hover:text-gray-900 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg hover:bg-blue-50/50'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`transition-transform duration-300 ${activeFilter === filter.name ? 'scale-110' : ''}`}>
                  {filter.icon}
                </div>
                <span className="text-sm font-semibold">{filter.name}</span>
                <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                  activeFilter === filter.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {filter.count}
                </span>
                
                {/* Active indicator */}
                {activeFilter === filter.name && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post, index) => (
            <article 
              key={post.id}
              className={`group bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Featured badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg">
                  <Zap className="w-3 h-3" />
                  Featured
                </div>
              )}
              
              {/* Enhanced image section */}
              <div className="relative h-56 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center text-6xl overflow-hidden border-b-2 border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-blue-400/5 group-hover:from-amber-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
                <div className={`relative z-10 transition-all duration-500 ${hoveredPost === post.id ? 'scale-125 rotate-12' : ''}`}>
                  {post.image}
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-amber-400/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-12 w-2 h-2 bg-gray-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <div className="p-8 space-y-5">
                {/* Enhanced meta information */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 bg-blue-50 px-3 py-2 rounded-lg">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{post.readTime}</span>
                  </div>
                </div>
                
                {/* Enhanced title */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Enhanced excerpt */}
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Enhanced tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-xs rounded-xl font-medium transition-colors duration-300 border border-gray-200">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-3 py-2 bg-amber-100 text-amber-700 text-xs rounded-xl font-medium border border-amber-200">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                {/* Enhanced read more button */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Enhanced pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 mb-16">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group font-medium"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Previous
            </button>
            
            {/* Enhanced page indicators */}
            <div className="flex gap-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-12 h-12 rounded-2xl font-bold transition-all duration-300 ${
                    currentPage === i
                      ? 'bg-amber-400 text-white shadow-lg shadow-amber-400/25 scale-110'
                      : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group font-medium"
            >
              Next
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
        
        {/* Enhanced view all button */}
        <div className="text-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-3">
              <BookOpen className="w-6 h-6" />
              View All Articles
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;