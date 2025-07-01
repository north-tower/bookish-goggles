import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    workEmail: "",
    phoneNumber: "",
    projectDescription: ""
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Form */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 lg:p-10 border border-slate-200/50 backdrop-blur-sm">
            <div className="mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 shadow-lg shadow-amber-500/25">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                Let's build something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                  extraordinary
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ready to transform your vision into reality? Share your project details and let's start the conversation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <Label htmlFor="firstName" className="text-slate-700 text-sm font-semibold mb-3 block">
                    First name *
                  </Label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-slate-50 border-2 ${
                        focusedField === 'firstName' ? 'border-amber-400 bg-white' : 'border-slate-200'
                      } text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white transition-all duration-300 rounded-xl py-3 px-4 text-base shadow-sm hover:border-slate-300`}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <Label htmlFor="lastName" className="text-slate-700 text-sm font-semibold mb-3 block">
                    Last name *
                  </Label>
                  <div className="relative">
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-slate-50 border-2 ${
                        focusedField === 'lastName' ? 'border-amber-400 bg-white' : 'border-slate-200'
                      } text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white transition-all duration-300 rounded-xl py-3 px-4 text-base shadow-sm hover:border-slate-300`}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <Label htmlFor="companyName" className="text-slate-700 text-sm font-semibold mb-3 block">
                  Company name <span className="text-slate-400 font-normal">(optional)</span>
                </Label>
                <div className="relative">
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('companyName')}
                    onBlur={() => setFocusedField(null)}
                    className={`bg-slate-50 border-2 ${
                      focusedField === 'companyName' ? 'border-amber-400 bg-white' : 'border-slate-200'
                    } text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white transition-all duration-300 rounded-xl py-3 px-4 text-base shadow-sm hover:border-slate-300`}
                    placeholder="Your company or organization"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <Label htmlFor="workEmail" className="text-slate-700 text-sm font-semibold mb-3 block">
                    Work email *
                  </Label>
                  <div className="relative">
                    <Input
                      id="workEmail"
                      name="workEmail"
                      type="email"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('workEmail')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-slate-50 border-2 ${
                        focusedField === 'workEmail' ? 'border-amber-400 bg-white' : 'border-slate-200'
                      } text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white transition-all duration-300 rounded-xl py-3 px-4 text-base shadow-sm hover:border-slate-300`}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <Label htmlFor="phoneNumber" className="text-slate-700 text-sm font-semibold mb-3 block">
                    Phone number
                  </Label>
                  <div className="relative">
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phoneNumber')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-slate-50 border-2 ${
                        focusedField === 'phoneNumber' ? 'border-amber-400 bg-white' : 'border-slate-200'
                      } text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white transition-all duration-300 rounded-xl py-3 px-4 text-base shadow-sm hover:border-slate-300`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <Label htmlFor="projectDescription" className="text-slate-700 text-sm font-semibold mb-3 block">
                  Tell us about your project <span className="text-slate-400 font-normal">(optional)</span>
                </Label>
                <div className="relative">
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('projectDescription')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`bg-slate-50 border-2 ${
                      focusedField === 'projectDescription' ? 'border-amber-400 bg-white' : 'border-slate-200'
                    } text-slate-800 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white transition-all duration-300 rounded-xl py-3 px-4 text-base shadow-sm hover:border-slate-300 resize-none`}
                    placeholder="Describe your project goals, timeline, and any specific requirements..."
                  />
                </div>
              </div>

              <Button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  Send request
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </Button>

              <p className="text-slate-500 text-sm leading-relaxed">
                By sending this form, I confirm that I have read and accepted the{" "}
                <a href="#" className="text-amber-600 underline hover:text-amber-700 hover:no-underline transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right side - Enhanced Testimonial */}
          <div className="space-y-8">
            {/* Main testimonial card */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 backdrop-blur-xl rounded-3xl p-10 border border-slate-200/50 shadow-xl shadow-slate-200/25 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500">
              <div className="mb-8">
                <div className="text-8xl text-amber-500/20 mb-6 font-serif leading-none">"</div>
                <p className="text-slate-700 text-xl leading-relaxed font-medium mb-6">
                  The quality and consistency of the team make Aeres Technologies stand out from other vendors. Their attention to detail and commitment to excellence exceeded our expectations.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                    <span className="text-white font-bold text-lg">AD</span>
                  </div>
                  <div>
                    <div className="text-slate-800 font-bold text-lg">Art Danielov</div>
                    <div className="text-slate-500 text-sm font-medium">CEO at Flashgrid</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white rounded-full px-4 py-2 shadow-sm">
                  <div className="text-slate-700 font-bold text-sm">Clutch</div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-slate-700 font-bold text-sm">5.0</span>
                </div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-lg shadow-slate-200/25 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-slate-600 text-sm font-medium">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-lg shadow-slate-200/25 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300">
                <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                <div className="text-slate-600 text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need to talk right away?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">hello@company.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;