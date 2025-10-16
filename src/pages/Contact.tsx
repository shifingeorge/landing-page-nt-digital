import { useState } from 'react';
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
    consent: false,
  });

  const serviceOptions = [
    'SEO Services',
    'Content Writing',
    'Website Development',
    'Meta & Google Ads',
    'Social Media Management',
    'Other',
  ];

  const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,00,000',
    'Above ₹2,00,000',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const t = e.target as HTMLInputElement;
      setFormData((p) => ({ ...p, [name]: t.checked }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleServiceChange = (service: string) =>
    setFormData((p) => ({
      ...p,
      services: p.services.includes(service)
        ? p.services.filter((s) => s !== service)
        : [...p.services, service],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="section-padding bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-[Syne] font-bold mb-6">
            Contact Nainas Digital World
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Tell us your goals. Get a free growth audit within 24 hours.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-6 border border-gray-700 rounded-2xl shadow-sm bg-gray-800">
                <h2 className="text-2xl font-[Syne] font-bold mb-6 text-white">
                  Get Your Free Growth Audit
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* name / email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  {/* phone / company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Phone / WhatsApp *
                      </label>
                      <input
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">
                        Company
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">
                      Services Interested In (select all)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((s) => (
                        <label
                          key={s}
                          className="flex items-center space-x-3 cursor-pointer text-gray-300"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(s)}
                            onChange={() => handleServiceChange(s)}
                            className="w-4 h-4 text-primary-500 border-gray-500 rounded focus:ring-primary-500 focus:ring-1"
                          />
                          <span className="text-sm">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Monthly Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Tell us about your goals
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      placeholder="What are you looking to achieve?"
                    ></textarea>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-500 border-gray-500 rounded focus:ring-primary-500 focus:ring-1 mt-1"
                    />
                    <span className="text-sm text-gray-400">
                      I agree to receive marketing communications from Nainas Digital World.
                      You can unsubscribe any time.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-lg px-8 py-4 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
                  >
                    Get Free Audit & Strategy
                  </button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-4">
                  You'll receive a response within 24 hours with your custom growth audit.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800 shadow-sm">
                <h3 className="font-[Syne] font-semibold text-lg mb-6 text-white">
                  Get in Touch
                </h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">Address</p>
                      <p>
                        [ADDRESS_LINE]
                        <br />
                        Kochi, Kerala [PIN]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <a href="tel:+91XXXXXXXXXX" className="hover:underline">
                        +91‑XXXXXXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a
                        href="mailto:hello@nainasdigitalworld.com"
                        className="hover:underline"
                      >
                        hello@nainasdigitalworld.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">WhatsApp</p>
                      <a
                        href="https://wa.me/+91XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91‑XXXXXXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-500 mt-1" />
                    <div>
                      <p className="font-medium text-white">Business Hours</p>
                      <p>Mon – Sat, 9:30 AM – 6:30 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800 shadow-sm">
                <h3 className="font-[Syne] font-semibold text-lg mb-4 text-white">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  For urgent queries, contact us directly below.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="w-full block text-center px-6 py-3 rounded-md font-semibold border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/+91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-3 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800 shadow-sm text-center">
                <h3 className="font-[Syne] font-semibold text-lg mb-4 text-white">
                  Visit Our Office
                </h3>
                <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center mb-2">
                  <p className="text-gray-400 text-sm">
                    Google Maps Integration
                    <br />
                    <span className="text-xs">[GOOGLE_MAPS_EMBED]</span>
                  </p>
                </div>
                <p className="text-gray-400 text-xs">
                  Located in the heart of Kochi, Kerala
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