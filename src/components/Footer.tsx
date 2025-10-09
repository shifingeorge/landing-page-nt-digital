import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    { path: '/services#seo', label: 'SEO Services' },
    { path: '/services#content', label: 'Content Writing' },
    { path: '/services#web', label: 'Website Development' },
    { path: '/services#ads', label: 'Meta Ads' },
    { path: '/services#movie', label: 'Movie Promotion' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com/nainasdigitalworld', icon: Facebook, label: 'Facebook' },
    { href: 'https://instagram.com/nainasdigitalworld', icon: Instagram, label: 'Instagram' },
    { href: 'https://linkedin.com/company/nainasdigitalworld', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://youtube.com/@nainasdigitalworld', icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Search className="w-4 h-4 text-gray-950" />
              </div>
              <span className="font-heading font-bold text-xl text-gray-100">
                Nainas Digital World
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Digital Marketing Agency in Kochi, Kerala. SEO, website development, Meta ads, content writing, and movie promotion services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>[ADDRESS_LINE], Kochi, Kerala [PIN]</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-500" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-primary-500 transition-colors duration-200">
                  +91-XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-500" />
                <a href="mailto:hello@nainasdigitalworld.com" className="hover:text-primary-500 transition-colors duration-200">
                  hello@nainasdigitalworld.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/privacy"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-gray-100 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Business Hours */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-4 mb-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-500">
              Business Hours: Mon–Sat, 9:30 AM–6:30 PM IST
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 mb-1">
              Serving Kochi, Ernakulam, Kakkanad, Fort Kochi, and Kerala
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} Nainas Digital World. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;