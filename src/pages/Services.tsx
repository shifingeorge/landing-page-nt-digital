import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Search,
  PenTool,
  Code,
  Megaphone,
  Users,
  PhoneCall,
  ArrowRight,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const yOffset = -160;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const services = [
    {
      id: 'seo',
      icon: Search,
      title: 'SEO Services',
      subtitle: 'Rank higher. Attract the right audience.Drive real results.',
      description:
        'We create end-to-end SEO strategies tailored for your brand — combining technical SEO, keyword optimization, and content marketing to increase organic traffic and strengthen your online presence.',
      deliverables: [
        'Technical and On-Page SEO Optimization',
        'Local SEO for Google Business visibility',
        'Content Strategy & Keyword Recommendations',
        'Monthly SEO Performance Reports',
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
        'We craft impactful SEO content — from website copy, blogs, and ads to social media posts — focused on clarity, relevance, and audience engagement that strengthens your brand voice.',
      deliverables: [
        'Web & Landing Page Copywriting',
        'SEO Blogs and Thought Leadership Pieces',
        'Ad Copy and Brand Tone Guidelines',
        'Content Strategy & Calendar Planning',
      ],
      ctaText: 'Get Content Plan',
      ctaHref: '/contact?service=content',
    },
    {
      id: 'web',
      icon: Code,
      title: 'Website Development',
      subtitle: 'Fast, secure, and SEO-friendly website development tailored to your business goals.',
      description:
        'Professional website development services delivering fast, SEO-ready, and responsive sites built with modern frameworks to boost conversions and brand visibility.',
      deliverables: [
        'WordPress or Headless Website Development',
        'E-commerce and Conversion-Focused Landing Pages',
        'Speed Optimization and Analytics Integration',
        'On-Page SEO Setup for Better Search Visibility',
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
        'From Google Search to Meta Ads, we build and optimize campaigns that attract the right audience, drive traffic, and convert leads into customers — ensuring every click counts.',
      deliverables: [
        'Campaign Strategy & Targeting',
        'Ad Creatives & A/B Testing',
        'Pixel, Event, and Analytics Setup',
        'Continuous Optimization & Performance Reports',
      ],
      ctaText: 'Launch Ad Campaigns',
      ctaHref: '/contact?service=ads',
    },
    {
      id: 'targeted',
      icon: Users,
      title: 'Advertisement on Targeted Audience',
      subtitle: 'Reach the right audience, every time.',
      description:
        'Reach your ideal customers with data-driven, targeted advertising across Google and Meta platforms, using behavioral, demographic, and location-based targeting for measurable ROI.',
      deliverables: [
        'Audience research & Segmentation',
        'Look-Alike Audience Creation',
        'Ad Placement & Performance Tracking',
        'Detailed Reporting & Insights',
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
        'Professional telecalling and lead closing services to engage prospects, manage follow-ups, and convert leads into loyal customers.',
      deliverables: [
        'Dedicated Telecalling Agents',
        'Quick Lead Follow-Up',
        'Lead Qualification & Appointment Scheduling',
        'Reporting & Performance Insights',
      ],
      ctaText: 'Set Up Telecalling',
      ctaHref: '/contact?service=telecall',
    },
  ];

  const faqs = [
    {
      question: 'Do you serve clients outside Kerala?',
      answer:
        'Yes! We partner with businesses across India and internationally, leveraging our Kerala-based expertise to craft regionally informed, high-impact digital marketing strategies that drive results wherever your audience is.',
    },
    {
      question: 'Can we get content in Malayalam?',
      answer:
        'Absolutely! We craft engaging and natural Malayalam content for social media posts, blogs, and ad copy, helping your brand connect authentically with regional audiences and boost engagement.',
    },
    {
      question: 'What are your pricing models?',
      answer:
        'We offer flexible pricing with project-based services starting at ₹18,000 for a basic website and ₹25,000 for multi-page SEO-ready sites, and monthly retainers starting at ₹15,000/month for ongoing SEO, ads, and content marketing services',
    },
    {
      question: 'How soon can we begin?',
      answer:
        'Projects typically start within 7–10 business days after the initial consultation and strategy approval, with flexible options for urgent timelines if needed.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-[Syne] font-bold mb-6">
              Our Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Expert strategies to boost your visibility, leads, and growth.
            </p>
            <Link
              to="/contact"
              className="text-lg px-8 py-4 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-900">
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
                      <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-[Syne] font-bold">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-200 font-medium mb-4">
                      {service.subtitle}
                    </p>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <Link
                      to={service.ctaHref}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-md bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="p-6 border border-gray-700 rounded-2xl shadow-sm bg-gray-800">
                      <h3 className="font-semibold text-lg mb-4 text-white">
                        What's Included:
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((deliverable, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 text-gray-300"
                          >
                            <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                            <span>{deliverable}</span>
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
      <section className="section-padding bg-gray-800">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg">
              Everything you need to know about our services.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 border border-gray-700 rounded-2xl shadow-sm bg-gray-900"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-white">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let’s connect to discuss your goals and create a custom digital marketing strategy designed to boost visibility, generate leads, and grow your business <b className="text-primary-500 ">faster</b>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="text-lg px-8 py-4 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
            >
              Get Free Strategy Session
            </Link>
            <a
              href="https://wa.me/+91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg px-8 py-4 rounded-md font-semibold border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200"
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