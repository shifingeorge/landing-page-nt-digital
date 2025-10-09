import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    services: [] as string[],
    budget: '',
    message: '',
    consent: false
  });

  const serviceOptions = [
    'SEO Services',
    'Content Writing',
    'Website Development',
    'Meta Ads (Facebook/Instagram)',
    'Movie Promotion',
    'Social Media Management',
    'Other'
  ];

  const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,00,000',
    'Above ₹2,00,000'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Redirect to thank you page or show success message
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-100 mb-6">
              Contact Nainas Digital World
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-balance">
              Tell us your goals. Get a free growth audit in 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-heading font-bold text-gray-100 mb-6">
                  Get Your Free Growth Audit
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Services Interested In (select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <label key={service} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="w-4 h-4 text-primary-500 bg-gray-800 border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
                          />
                          <span className="text-gray-300 text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Monthly Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us about your goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What are you looking to achieve? Any specific challenges or requirements?"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200 resize-vertical"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-500 bg-gray-800 border-gray-600 rounded focus:ring-primary-500 focus:ring-2 mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-400">
                      I agree to receive marketing communications from Nainas Digital World. You can unsubscribe at any time.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4"
                  >
                    Get Free Audit & Strategy
                  </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-4">
                  We'll respond within 24 hours with your customized growth audit.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card">
                <h3 className="font-heading font-semibold text-gray-100 text-lg mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">Address</p>
                      <p className="text-gray-400 text-sm">
                        [ADDRESS_LINE]<br />
                        Kochi, Kerala [PIN]
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">Phone</p>
                      <a 
                        href="tel:+91XXXXXXXXXX" 
                        className="text-gray-400 text-sm hover:text-primary-500 transition-colors duration-200"
                      >
                        +91-XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">Email</p>
                      <a 
                        href="mailto:hello@nainasdigitalworld.com" 
                        className="text-gray-400 text-sm hover:text-primary-500 transition-colors duration-200"
                      >
                        hello@nainasdigitalworld.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">WhatsApp</p>
                      <a 
                        href="https://wa.me/+91XXXXXXXXXX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm hover:text-primary-500 transition-colors duration-200"
                      >
                        +91-XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">Business Hours</p>
                      <p className="text-gray-400 text-sm">
                        Mon–Sat, 9:30 AM–6:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card">
                <h3 className="font-heading font-semibold text-gray-100 text-lg mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  For urgent inquiries or quick questions, reach out directly.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+91XXXXXXXXXX" 
                    className="btn-secondary w-full text-center block"
                  >
                    Call Now
                  </a>
                  <a 
                    href="https://wa.me/+91XXXXXXXXXX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-success w-full text-center block"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="card">
                <h3 className="font-heading font-semibold text-gray-100 text-lg mb-4">
                  Visit Our Office
                </h3>
                <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">
                    Google Maps Integration
                    <br />
                    <span className="text-xs">[GOOGLE_MAPS_EMBED]</span>
                  </p>
                </div>
                <p className="text-gray-500 text-xs mt-2 text-center">
                  Located in the heart of Kochi, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;