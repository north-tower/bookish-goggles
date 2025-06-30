
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let's build something great together.
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-white text-sm font-medium mb-2 block">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white text-sm font-medium mb-2 block">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="companyName" className="text-white text-sm font-medium mb-2 block">
                  Company name <span className="text-white/60">(optional)</span>
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="workEmail" className="text-white text-sm font-medium mb-2 block">
                    Work email
                  </Label>
                  <Input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber" className="text-white text-sm font-medium mb-2 block">
                    Phone number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="projectDescription" className="text-white text-sm font-medium mb-2 block">
                  Tell us about your project <span className="text-white/60">(optional)</span>
                </Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Send request
              </Button>

              <p className="text-white/60 text-sm">
                By sending this form, I confirm that I have read and accepted the{" "}
                <a href="#" className="text-white underline hover:no-underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>

          {/* Right side - Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="mb-6">
              <div className="text-6xl text-white/20 mb-4">"</div>
              <p className="text-white text-lg leading-relaxed">
                The quality and consistency of the team make Diffco stand out from other vendors.
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">AD</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Art Danielov</div>
                  <div className="text-white/60 text-sm">CEO at Flashgrid</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-white font-semibold">Clutch</div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
