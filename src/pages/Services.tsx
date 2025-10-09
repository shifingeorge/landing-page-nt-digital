import { Link } from 'react-router-dom';
import { Search, PenTool, Code, Megaphone, Users, PhoneCall, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'seo',
      icon: Search,
      title: 'SEO Services',
      subtitle: 'Rank higher. Drive quality traffic. Improve conversions.',
      description:
        'We deliver complete SEO strategies for your business — from technical optimization to on‑page improvements and content planning, all designed to get your brand found easily.',
      deliverables: [
        'Technical & on-page SEO',
        'Local SEO optimization',
        'Content recommendations',
        'Monthly performance reports',
      ],
      ctaText: 'Request SEO Audit',
      ctaHref: '/contact?service=seo',
    },
    {
      id: 'content',
      icon: PenTool,
      title: 'Content Writing',
      subtitle: 'Powerful, persuasive copy that connects and converts.',
      description:
        'We craft impactful content — from website copy to blogs, ads, and social media messaging — focused on clarity, relevance, and engagement.',
      deliverables: [
        'Web & landing copy',
        'Blogs & thought pieces',
        'Ad copy & brand tone',
        'Content calendar planning',
      ],
      ctaText: 'Get Content Plan',
      ctaHref: '/contact?service=content',
    },
    {
      id: 'web',
      icon: Code,
      title: 'Website Development',
      subtitle: 'Modern, SEO‑ready websites built for performance.',
      description:
        'Fast, secure, mobile‑optimized sites that showcase your brand and drive conversions. Built using scalable, modern frameworks.',
      deliverables: [
        'WordPress / Headless builds',
        'E‑commerce / Landing pages',
        'Performance & analytics setup',
        'On‑page SEO configuration',
      ],
      ctaText: 'Start Your Website',
      ctaHref: '/contact?service=web',
    },
    {
      id: 'ads',
      icon: Megaphone,
      title: 'Meta & Google Ads',
      subtitle: 'Smart campaigns designed to attract and convert.',
      description:
        'We plan, design, and optimize ad campaigns across Meta and Google to maximize visibility, clicks, and lead generation—all tracked for measurable ROI.',
      deliverables: [
        'Campaign strategy & setup',
        'Creatives & A/B testing',
        'Pixel, events, and analytics integration',
        'Ongoing optimization & reports',
      ],
      ctaText: 'Launch Ad Campaigns',
      ctaHref: '/contact?service=ads',
    },
    {
      id: 'targeted',
      icon: Users,
      title: 'Advertisement on Targeted Audience',
      subtitle: 'Reach the exact people who fit your ideal customer profile.',
      description:
        'We identify, segment, and advertise to your perfect audience using behavioral data, demographics, and location‑based targeting.',
      deliverables: [
        'Audience research & targeting',
        'Custom look‑alike segments',
        'Ad placement & monitoring',
        'Detailed targeting reports',
      ],
      ctaText: 'Target Your Audience',
      ctaHref: '/contact?service=targeted',
    },
    {
      id: 'telecall',
      icon: PhoneCall,
      title: 'Telecall & Lead Closing',
      subtitle: 'Human connection that turns leads into customers.',
      description:
        'Our team strategically handles calls from leads generated online — answering queries, nurturing interest, and helping close more deals efficiently.',
      deliverables: [
        'Dedicated calling agents',
        'Prompt lead follow‑up',
        'Qualification & scheduling',
        'Performance tracking reports',
      ],
      ctaText: 'Set Up Telecalling',
      ctaHref: '/contact?service=telecall',
    },
  ];

  const faqs = [
    {
      question: 'Do you serve clients outside Kerala?',
      answer:
        'Yes, we collaborate with businesses across India and internationally, using our Kerala‑based expertise to create regionally informed digital strategies.',
    },
    {
      question: 'Can we get content in Malayalam?',
      answer:
        'Absolutely. We create engaging and natural Malayalam content for posts, blogs, and ads — ideal for regional marketing and authenticity.',
    },
    {
      question: 'What are your pricing models?',
      answer:
        'We provide both project‑based and monthly retainer options. Project work starts at ₹25,000, while ongoing retainers begin at ₹15,000/month.',
    },
    {
      question: 'How soon can we begin?',
      answer:
        'Typically within 7–10 business days after the initial consultation and strategy approval. Urgent timelines can also be accommodated.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-[Syne] font-bold mb-6">
              Our Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black/80">
              Expert strategies to boost your visibility, leads, and growth.
            </p>
            <Link
              to="/contact"
              className="text-lg px-8 py-4 rounded-md font-semibold bg-black text-white hover:bg-gray-800 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-[Syne] font-bold">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-black font-medium mb-4">
                      {service.subtitle}
                    </p>

                    <p className="text-black/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <Link
                      to={service.ctaHref}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white">
                      <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                            <span className="text-black/70">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-black/70 text-lg">
              Everything you need to know about our services.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-black/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your goals and build a custom digital marketing plan to grow your business faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="text-lg px-8 py-4 rounded-md font-semibold bg-black text-white hover:bg-gray-800 transition-colors duration-200"
            >
              Get Free Strategy Session
            </Link>
            <a
              href="https://wa.me/+91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg px-8 py-4 rounded-md font-semibold border border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;