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
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="section-padding bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-[Syne] font-bold mb-6">
            Contact Nainas Digital World
          </h1>
          <p className="text-xl md:text-2xl text-black/80 mb-8">
            Tell us your goals. Get a free growth audit within 24 hours.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white">
                <h2 className="text-2xl font-[Syne] font-bold mb-6">
                  Get Your Free Growth Audit
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* name / email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* phone / company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Services Interested In (select all)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((s) => (
                        <label
                          key={s}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(s)}
                            onChange={() => handleServiceChange(s)}
                            className="w-4 h-4 text-black border-gray-400 rounded focus:ring-black focus:ring-1"
                          />
                          <span className="text-sm">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Monthly Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Tell us about your goals
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black"
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
                      className="w-4 h-4 text-black border-gray-400 rounded focus:ring-black focus:ring-1 mt-1"
                    />
                    <span className="text-sm text-black/70">
                      I agree to receive marketing communications from Nainas Digital World.
                      You can unsubscribe any time.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-lg px-8 py-4 rounded-md font-semibold bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Get Free Audit & Strategy
                  </button>
                </form>

                <p className="text-center text-black/50 text-sm mt-4">
                  You'll receive a response within 24 hours with your custom growth audit.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
                <h3 className="font-[Syne] font-semibold text-lg mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4 text-sm text-black/70">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-black">Address</p>
                      <p>
                        [ADDRESS_LINE]
                        <br />
                        Kochi, Kerala [PIN]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-black mt-1" />
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="hover:underline"
                      >
                        +91‑XXXXXXXXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-black mt-1" />
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <a
                        href="mailto:hello@nainasdigitalworld.com"
                        className="hover:underline"
                      >
                        hello@nainasdigitalworld.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-black mt-1" />
                    <div>
                      <p className="font-medium text-black">WhatsApp</p>
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
                    <Clock className="w-5 h-5 text-black mt-1" />
                    <div>
                      <p className="font-medium text-black">Business Hours</p>
                      <p>Mon – Sat, 9:30 AM – 6:30 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
                <h3 className="font-[Syne] font-semibold text-lg mb-4">
                  Need Immediate Help?
                </h3>
                <p className="text-black/70 text-sm mb-6">
                  For urgent queries, contact us directly below.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="w-full block text-center px-6 py-3 rounded-md font-semibold border border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/+91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-3 rounded-md font-semibold bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm text-center">
                <h3 className="font-[Syne] font-semibold text-lg mb-4">
                  Visit Our Office
                </h3>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-2">
                  <p className="text-gray-500 text-sm">
                    Google Maps Integration
                    <br />
                    <span className="text-xs">[GOOGLE_MAPS_EMBED]</span>
                  </p>
                </div>
                <p className="text-black/60 text-xs">
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