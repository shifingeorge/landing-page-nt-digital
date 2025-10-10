import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';

// import your co‑founder photos
import founder1 from '../assets/founder1.png';
import founder2 from '../assets/founder2.png';
import founder3 from '../assets/founder3.png';

const About = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Local Expertise',
      description:
        'Deep understanding of Kerala markets and the cultural pulse that drives engagement.',
    },
    {
      icon: Users,
      title: 'Transparency',
      description:
        'Clear strategies, measurable outcomes, and full visibility at every step.',
    },
    {
      icon: TrendingUp,
      title: 'ROI Focus',
      description:
        'We iterate fast, test smarter, and scale winning ideas to maximize returns.',
    },
  ];

  const achievements = [
    'Certified Google Ads & Analytics Expert',
    'Meta Blueprint Certified',
    '50 + Successful Campaigns Across Kerala',
    'Malayalam Content Expertise',
    '3 + Years Empowering Local Businesses',
  ];

  const team = [
    {
      name: 'Naina Joseph',
      role: 'Co‑Founder / Head of Strategy',
      img: founder1,
      desc: 'Drives strategy and client success; passionate about marketing psychology.',
    },
    {
      name: 'Ajay Varghese',
      role: 'Co‑Founder / Creative Director',
      img: founder2,
      desc: 'Leads creative direction and visual storytelling for brand campaigns.',
    },
    {
      name: 'Meera Mathew',
      role: 'Co‑Founder / Operations Lead',
      img: founder3,
      desc: 'Manages workflows, client communication, and keeps projects on track.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="section-padding bg-white text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-[Syne] font-bold mb-6">
            About Nainas Digital World
          </h1>
          <p className="text-xl md:text-2xl mb-3 font-medium">
            We build growth systems for Kerala brands.
          </p>
        </div>
      </section>

      {/* Story and Achievements */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Born in Kochi, we understand the unique challenges Kerala
                  businesses face in the digital space. From startups to
                  established brands — we’ve helped them all find their voice
                  online.
                </p>
                <p>
                  What started as a small consulting project became a
                  full‑fledged digital agency blending global best practices
                  with regional insights.
                </p>
                <p>
                  Every campaign, website, and piece of content is designed with
                  one core goal: measurable growth.
                </p>
              </div>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white">
              <h3 className="font-[Syne] font-semibold text-xl mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {achievements.map((point, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-black/70 mt-0.5" />
                    <span className="text-black/70">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
<section className="section-padding bg-gray-50">
  <div className="max-w-7xl mx-auto container-padding text-center">
    <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4">
      What Sets Us Apart
    </h2>

    {/* Centered subtitle */}
    <p className="text-black/70 text-lg mb-12 max-w-xl mx-auto">
      Three core principles that guide everything we do
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pillars.map((pillar, i) => {
        const Icon = pillar.icon;
        return (
          <div
            key={i}
            className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-[Syne] font-semibold text-lg mb-3">
              {pillar.title}
            </h3>
            <p className="text-black/70 text-sm">{pillar.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Co‑Founders Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4">
            Meet Our Co‑Founders
          </h2>
          <p className="text-black/70 text-lg mb-12 max-w-xl mx-auto">
            The minds behind Nainas Digital World
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <div
                key={i}
                className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 text-center bg-white"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="font-[Syne] font-semibold text-lg mb-1">
                  {person.name}
                </h3>
                <p className="text-black/60 text-sm mb-3">{person.role}</p>
                <p className="text-black/70 text-sm">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="bg-black rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4">
              Let's Grow Together
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to take your Kerala business to the next level?  
              Reach out for a free consultation and discover how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="text-lg px-8 py-4 rounded-md font-semibold bg-white text-black hover:bg-gray-200 transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <a
                href="https://wa.me/+91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-8 py-4 rounded-md font-semibold border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
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