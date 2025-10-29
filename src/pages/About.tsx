import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Local Expertise',
      description:
        'We have a deep understanding of Kerala markets and the cultural pulse that drives meaningful engagement, helping your brand connect authentically with local audiences.',
    },
    {
      icon: Users,
      title: 'Transparency',
      description:
        'We provide clear strategies, measurable results, and full visibility at every step, ensuring you stay informed and confident in your digital marketing investment.',
    },
    {
      icon: TrendingUp,
      title: 'ROI Focus',
      description:
        'We iterate quickly, test strategically, and scale what works to maximize your returns and ensure every marketing effort delivers measurable impact.',
    },
  ];

  const achievements = [
    'Certified Google Ads & Analytics Expert',
    'Meta Blueprint Certified',
    '50 + Successful Campaigns Across Kerala',
    'Malayalam Content Expertise',
    '3 + Years Empowering Local Businesses',
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="section-padding bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-[Syne] font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl mb-3 font-medium text-gray-300">
            We create growth-driven digital systems for Kerala brands, combining SEO, ads, websites, and content to boost visibility, leads, and conversions online.
          </p>
        </div>
      </section>

      {/* Story and Achievements */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Born in Kochi, we understand the unique challenges Kerala businesses face in the digital space. From startups to established brands, we’ve helped them all find their voice online. What started as a small consulting project has grown into a full-fledged digital agency, blending global best practices with regional insights. Every campaign, website, and piece of content we create is designed to drive growth, visibility, and meaningful engagement for our clients.
                </p>
                {/*<p>
                  What started as a small consulting project became a
                  full‑fledged digital agency blending global best practices
                  with regional insights.
                </p>*/}
                <p>
                  Every campaign, website, and piece of content is designed with
                  one core goal: measurable growth.
                </p>
              </div>
            </div>
            <div className="p-6 border border-gray-700 rounded-2xl shadow-sm bg-gray-800">
              <h3 className="font-[Syne] font-semibold text-xl mb-4 text-white">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {achievements.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-gray-800">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4 text-white">
            What Sets Us Apart
          </h2>

          <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto">
            Three core principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-6 border border-gray-700 rounded-2xl bg-gray-900 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-[Syne] font-semibold text-lg mb-3 text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="bg-gray-800 rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4">
              Let's Grow Together
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to take your Kerala business to the next level? Reach out for a free consultation and discover how our digital marketing expertise in SEO, ads, websites, and content can help your brand thrive online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="text-lg px-8 py-4 rounded-md font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <a
                href="https://wa.me/+91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8 py-4 rounded-md font-semibold border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors duration-200"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;