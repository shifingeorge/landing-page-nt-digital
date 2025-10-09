import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PenTool, Code, Megaphone, Film, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'seo',
      icon: Search,
      title: 'SEO Services in Kochi',
      subtitle: 'Rank locally. Grow organic traffic. Convert better.',
      description: 'Comprehensive SEO services tailored for Kerala businesses. From technical optimization to local search dominance, we help you rank where your customers are searching.',
      deliverables: [
        'Technical & on-page SEO',
        'Local SEO (Google Business Profile)',
        'Content & internal links',
        'Reporting & growth sprints'
      ],
      ctaText: 'Request SEO Audit',
      ctaHref: '/contact?service=seo'
    },
    {
      id: 'content',
      icon: PenTool,
      title: 'Content Writing in Kochi',
      subtitle: 'Clear, conversion-focused content in English & Malayalam.',
      description: 'Content that connects with Kerala audiences. From website copy to blog posts, ad scripts to social media content – we create words that work.',
      deliverables: [
        'Web & landing copy',
        'Blogs & thought leadership',
        'Ad copy & scripts',
        'Content strategy & calendars'
      ],
      ctaText: 'Get Content Plan',
      ctaHref: '/contact?service=content'
    },
    {
      id: 'web',
      icon: Code,
      title: 'Website Development in Kochi',
      subtitle: 'Fast, secure, SEO-first websites that convert.',
      description: 'Modern websites built for Kerala businesses. Mobile-optimized, search-friendly, and designed to turn visitors into customers.',
      deliverables: [
        'WordPress / Headless builds',
        'E-commerce & landing pages',
        'Speed, security, analytics',
        'On-page SEO setup'
      ],
      ctaText: 'Start Your Website',
      ctaHref: '/contact?service=web'
    },
    {
      id: 'ads',
      icon: Megaphone,
      title: 'Meta Ads (Facebook/Instagram) in Kerala',
      subtitle: 'Full-funnel ads: creative, targeting, optimization, scale.',
      description: 'Facebook and Instagram advertising that delivers results. From awareness campaigns to conversion optimization, we help Kerala businesses reach their ideal customers.',
      deliverables: [
        'Campaign strategy & setup',
        'Creatives & testing',
        'Pixel, events & GA4',
        'Weekly optimization & reports'
      ],
      ctaText: 'Launch Meta Ads',
      ctaHref: '/contact?service=ads'
    },
    {
      id: 'movie',
      icon: Film,
      title: 'Movie Promotion in Kerala',
      subtitle: 'Digital-first film marketing for Kerala audiences.',
      description: 'Specialized digital marketing for Malayalam films. From teaser launches to box office campaigns, we help filmmakers connect with Kerala audiences and fill theatres.',
      deliverables: [
        'Trailer & song campaign rollouts',
        'Influencer & creator collabs',
        'Reels, teasers, countdowns',
        'Theatre & OTT push'
      ],
      ctaText: 'Promote Your Film',
      ctaHref: '/contact?service=movie'
    }
  ];

  const faqs = [
    {
      question: 'Do you serve clients outside Kochi?',
      answer: 'Yes, we work with clients across Kerala and also serve remote clients worldwide. Our local expertise in Kerala markets is valuable regardless of your physical location.'
    },
    {
      question: 'Do you offer Malayalam content?',
      answer: 'Absolutely! We create high-quality content in both English and Malayalam, perfect for local SEO campaigns and connecting with Kerala audiences authentically.'
    },
    {
      question: 'What\'s your minimum engagement?',
      answer: 'We offer both project-based work and monthly retainers. Project minimums start at ₹25,000, while retainers begin at ₹15,000/month depending on services.'
    },
    {
      question: 'How fast can we start?',
      answer: 'Typically within 7–10 business days after initial consultation and strategy approval. Emergency projects can be accommodated with expedited timelines.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-100 mb-6">
              Digital Marketing Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Kochi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-balance">
              Full-stack digital marketing services in Kochi: SEO, content writing, website development, Meta ads, and movie promotion.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-gray-950" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-100">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-primary-500 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link 
                      to={service.ctaHref}
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="card">
                      <h3 className="font-heading font-semibold text-gray-100 text-lg mb-4">
                        What's Included:
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{deliverable}</span>
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
      <section className="section-padding bg-gray-950">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about our services
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-100 text-lg mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
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
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-100 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your goals and create a custom digital marketing strategy for your Kerala business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Strategy Session
            </Link>
            <a 
              href="https://wa.me/+91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-success text-lg px-8 py-4"
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