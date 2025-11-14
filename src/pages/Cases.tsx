
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CasesHero from "@/components/CasesHero";
import CaseStudies from "@/components/CaseStudies";
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Download } from 'lucide-react';

const Cases = () => {
   const handleExportPDF = () => {
    window.print();
  };
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto mb-4 print:hidden">
        <button
          onClick={handleExportPDF}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Download size={20} />
          Export to PDF
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg print:shadow-none">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Mike</h1>
        <h2 className="text-xl text-blue-600 font-semibold mb-4">Full Stack Software Engineer</h2>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>Kenya</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} />
            <span>mike@example.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Github size={16} />
            <span>github.com/mike</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">Professional Summary</h3>
        <p className="text-gray-700 leading-relaxed">
          Highly skilled Full Stack Software Engineer with 3+ years of experience in frontend technologies including React, React Native, and Tailwind CSS, alongside robust backend development using Express and Node.js. Proven expertise in building scalable, high-performance web applications with modern frameworks and technologies. Passionate about creating efficient API endpoints, implementing authentication features, and writing clean, maintainable code. Strong technical proficiency with attention to detail and commitment to staying current with industry trends. Thrive in collaborative environments, contributing to team success through knowledge sharing and proactive problem-solving.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">Technical Skills</h3>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Core Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {['Python (3 years)', 'React (3 years)', 'Django (1 year)', 'React Native (1 year)', 'Node.js (3 years)', 'Next.js (3 years)'].map(skill => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Frontend & Styling:</h4>
            <div className="flex flex-wrap gap-2">
              {['Tailwind CSS (3 years)', 'HTML/CSS (3 years)', 'TypeScript', 'Responsive Design', 'UI/UX', 'Visual Design', 'Animation'].map(skill => (
                <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Backend & Database:</h4>
            <div className="flex flex-wrap gap-2">
              {['Firebase', 'Supabase', 'Routing', 'Web Development', 'Third-party APIs (3 years)', 'Data Analysis (2 years)'].map(skill => (
                <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Advanced Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {['Algorithms & Data Structures (6 years)', 'Blockchain (3 years)', 'Web3 (3 years)', 'Security (3 years)', 'Optimization', 'SEO', 'DOM'].map(skill => (
                <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">Professional Experience</h3>
        
        {/* Full Stack Developer */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Full Stack Developer</h4>
              <p className="text-gray-600">Aeres Technologies</p>
            </div>
            <span className="text-gray-600 text-sm">August 2024 - Present (1 year 3 months)</span>
          </div>
          
          <div className="ml-4 space-y-4">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Instaplug Privacy Policy Website</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Built modern React application using Vite and TypeScript for enhanced type safety and performance</li>
                <li>Developed comprehensive UI framework using shadcn/ui with Radix UI primitives and accessible components</li>
                <li>Implemented professional-grade interactive elements including dialogs, dropdowns, tooltips, and accordions</li>
                <li>Created React Hook Form with Zod validation for contact forms and user feedback</li>
                <li>Integrated Recharts for data visualization and usage statistics</li>
                <li>Designed responsive, mobile-first interface with Tailwind CSS and custom animations</li>
                <li>Developed dark/light mode support with next-themes</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 mb-1">Crispy Perlogy - Next.js 15 Modern Web Application</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Built cutting-edge web application using Next.js 15 with App Router and Server Components</li>
                <li>Utilized Turbopack bundler for lightning-fast development and optimized production builds</li>
                <li>Implemented bleeding-edge React with concurrent features for improved performance</li>
                <li>Developed clean, professional interface using Tailwind CSS with utility-first styling approach</li>
                <li>Created accessible, unstyled primitives with Radix UI for form elements, separators, and slots</li>
                <li>Integrated Lucide React icon library for consistent visual elements</li>
                <li>Implemented custom Tailwind CSS animations for smooth user interactions</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 mb-1">NeonPos - Enterprise Point of Sale System</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Architected comprehensive cloud-based POS system using React 18 for enterprise retail management</li>
                <li>Implemented Supabase backend for real-time database operations and advanced data fetching</li>
                <li>Developed TanStack React Query for efficient state management and caching</li>
                <li>Created professional interface design using shadcn/ui component library</li>
                <li>Built real-time sales processing with instant transaction synchronization</li>
                <li>Implemented interactive product carousel for inventory display</li>
                <li>Developed receipt management system with validation and transaction record handling</li>
                <li>Integrated Recharts for revenue analytics, sales trends, and KPI visualization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Software Engineer */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Software Engineer</h4>
              <p className="text-gray-600">Kilimo Feeds Limited</p>
            </div>
            <span className="text-gray-600 text-sm">January 2024 - August 2024 (7 months)</span>
          </div>
          
          <div className="ml-4">
            <p className="font-semibold text-gray-800 mb-1">Astra - Tinder Clone Application</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
              <li>Developed dynamic Tinder clone using Tailwind CSS for responsive and modern UI</li>
              <li>Implemented Next.js for efficient client-side rendering and routing</li>
              <li>Integrated Firebase DB for real-time data storage and synchronization</li>
              <li>Built NextAuth for secure user authentication and session management</li>
              <li>Created profile management system allowing users to browse potential matches</li>
              <li>Implemented swipe functionality to connect users</li>
              <li>Developed full-stack architecture integrating backend services for seamless user experience</li>
            </ul>
          </div>
        </div>

        {/* Software Developer */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Software Developer</h4>
              <p className="text-gray-600">ZenTech Solutions</p>
            </div>
            <span className="text-gray-600 text-sm">January 2020 - May 2020 (4 months)</span>
          </div>
          
          <div className="ml-4 space-y-3">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Uber Clone</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Built clone of popular taxi app Uber using React Native and MapBox API</li>
                <li>Successfully demonstrated use of MAPBOX API in React Native application</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 mb-1">Amazon Clone</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Developed E-commerce application clone using Next.js and React framework</li>
                <li>Incorporated Stripe checkout, webhooks, Firestore, and NextAuth</li>
                <li>Learned core essentials of Next.js in real-life application development</li>
                <li>Integrated Stripe payment feature for seamless transactions</li>
              </ul>
            </div>
            
            <div>
              <p className="font-semibold text-gray-800 mb-1">Xbay - Web3 Blockchain Application</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                <li>Developed Web3 application using Next.js integrated with ThirdWeb platform</li>
                <li>Leveraged Next.js for efficient and scalable front-end development</li>
                <li>Harnessed ThirdWeb capabilities for decentralized and blockchain-powered features</li>
                <li>Delivered decentralized application with enhanced security, transparency, and user privacy</li>
                <li>Implemented smart contract interactions and decentralized storage</li>
                <li>Created user-friendly interface for blockchain technology interactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Analyst Roles */}
        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Data Analyst</h4>
              <p className="text-gray-600">Viz for Social Good, Nairobi</p>
            </div>
            <span className="text-gray-600 text-sm">October 2022 - October 2022</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
            <li>Presented business leaders with ROI estimations to drive project planning</li>
            <li>Developed diagrams to describe and layout logical operational steps</li>
            <li>Assessed business requirements to create focused solutions</li>
            <li>Monitored employee tasks to gauge business functions and inefficiencies</li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Data Analyst</h4>
              <p className="text-gray-600">Fiverr, Nairobi</p>
            </div>
            <span className="text-gray-600 text-sm">September 2021 - October 2022 (1 year 1 month)</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
            <li>Worked within applicable standards, policies and regulatory guidelines to promote safe work environment</li>
            <li>Conducted research and gathered information from multiple sources</li>
            <li>Presented results to stakeholders</li>
            <li>Collaborated with team members to achieve target results</li>
            <li>Provided excellent customer service and handled challenging situations with ease</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">Education</h3>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h4 className="text-lg font-bold text-gray-900">JKUAT</h4>
              <p className="text-gray-700">Mathematics And Computer Science</p>
            </div>
            <span className="text-gray-600 text-sm">September 2019 - December 2024</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h4 className="text-lg font-bold text-gray-900">Kapsabet High School</h4>
              <p className="text-gray-700">KCSE</p>
            </div>
            <span className="text-gray-600 text-sm">February 2015 - November 2018</span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">Certifications & Awards</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li><span className="font-semibold">Core Python</span> - 2021</li>
          <li><span className="font-semibold">Intermediate Machine Learning</span> - Kaggle, 2024</li>
        </ul>
      </section>

      {/* Key Strengths */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">Key Strengths</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Strong technical proficiency with attention to detail and commitment to excellence</li>
          <li>Experienced in content management using Sanity CMS</li>
          <li>Skilled in writing high-quality, bug-free code</li>
          <li>Proactive in staying updated with latest industry trends</li>
          <li>Excellent collaborative skills with ability to share knowledge and learn from peers</li>
          <li>Organized with effective task prioritization to meet strict deadlines</li>
          <li>Creative problem solver who thinks outside the box</li>
          <li>Positive attitude with passion for technology and commitment to excellence</li>
        </ul>
      </section>
    </div></div>
  );
};

export default Cases;


