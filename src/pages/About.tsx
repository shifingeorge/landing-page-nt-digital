import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Local expertise in Kochi & Kerala markets',
      description: 'Deep understanding of local business culture, customer behavior, and market dynamics across Kerala.'
    },
    {
      icon: Users,
      title: 'Clear roadmaps, transparent reporting',
      description: 'No black boxes. Every strategy, every metric, every result is clearly documented and shared with you.'
    },
    {
      icon: TrendingUp,
      title: 'Rapid testing, compounding ROI',
      description: 'We move fast, test smart, and scale what works. Your results compound over time through continuous optimization.'
    }
  ];

  const tools = [
    'Meta Ads Manager',
    'Google Analytics 4',
    'Google Search Console',
    'Google Tag Manager',
    'WordPress',
    'Shopify',
    'Ahrefs',
    'SEMrush',
    'Figma',
    'Canva',
    'HubSpot',
    'Mailchimp'
  ];

  const achievements = [
    'Certified Google Ads & Analytics expert',
    'Meta Blueprint certified',
    '50+ successful campaigns across Kerala',
    'Malayalam content expertise',
    '3+ years serving Kerala businesses'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-100 mb-6">
              About Nainas Digital World
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-gray-300">
              <p className="text-balance">
                We build growth systems for Kerala brands.
              </p>
              <p className="text-balance">
                Strategy-led. Data-driven. Creative at heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-100 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Born in Kochi, we understand the unique challenges Kerala businesses face in the digital landscape. From local startups to established SMEs, from emerging filmmakers to seasoned production houses – we've helped them all find their voice online.
                </p>
                <p>
                  What started as a passion for helping local businesses grow has evolved into a comprehensive digital marketing agency. We combine global best practices with deep local market knowledge to deliver results that matter.
                </p>
                <p>
                  Every campaign we run, every website we build, every piece of content we create is designed with one goal: measurable growth for your business.
                </p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-heading font-semibold text-gray-100 text-xl mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding bg-gray-950">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-100 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-400 text-lg">
              Three core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="card text-center group hover:border-primary-500/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-200">
                    <Icon className="w-8 h-8 text-gray-950" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-100 text-xl mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Technology */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-100 mb-6">
              Tools & Technology
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              We use industry-leading tools to deliver exceptional results
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 text-sm font-medium hover:border-primary-500/50 hover:text-primary-500 transition-all duration-200"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Approach */}
      <section className="section-padding bg-gray-950">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-100 mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong className="text-gray-100">Strategy First:</strong> Every campaign starts with deep research into your market, competitors, and audience. No guesswork, only data-driven decisions.
                </p>
                <p>
                  <strong className="text-gray-100">Local Focus:</strong> Kerala isn't just our location – it's our expertise. We understand local festivals, cultural nuances, and what resonates with Kerala audiences.
                </p>
                <p>
                  <strong className="text-gray-100">Bilingual Excellence:</strong> Whether your audience speaks English, Malayalam, or both – we create content that connects authentically.
                </p>
                <p>
                  <strong className="text-gray-100">Transparent Results:</strong> Weekly reports, monthly reviews, quarterly planning. You'll always know exactly how your campaigns are performing and what we're doing to improve them.
                </p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-heading font-semibold text-gray-100 text-xl mb-6">
                Ready to Work Together?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how we can help grow your Kerala business with strategic digital marketing.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary w-full text-center block mb-4"
              >
                Book a Strategy Call
              </Link>
              <Link 
                to="/services" 
                className="btn-secondary w-full text-center block flex items-center justify-center space-x-2"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-100 mb-4">
            Let's Grow Together
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ready to take your Kerala business to the next level? Get in touch for a free consultation and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <a 
              href="https://wa.me/+91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-success text-lg px-8 py-4"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;