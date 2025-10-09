import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Megaphone, Code, PenTool, Film, MapPin, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: 'All', slug: 'all', icon: null },
    { name: 'SEO', slug: 'seo', icon: Search },
    { name: 'Meta Ads', slug: 'meta-ads', icon: Megaphone },
    { name: 'Websites', slug: 'websites', icon: Code },
    { name: 'Content', slug: 'content', icon: PenTool },
    { name: 'Movie Promotion', slug: 'movie-promotion', icon: Film },
    { name: 'Local SEO', slug: 'local-seo', icon: MapPin }
  ];

  const posts = [
    {
      title: 'SEO in Kochi: How Local Brands Rank #1',
      excerpt: 'Complete guide to local SEO strategies that work in Kerala markets. Learn the exact tactics local businesses use to dominate Google search results.',
      category: 'SEO',
      categorySlug: 'seo',
      readTime: '5 min read',
      publishedDate: '2025-01-15',
      slug: 'seo-in-kochi-local-brands-rank-1',
      featured: true
    },
    {
      title: 'Meta Ads in Kerala: Costs, ROAS Benchmarks, and Creative Tips',
      excerpt: 'Everything you need to know about Facebook and Instagram advertising in Kerala. Real cost data, performance benchmarks, and creative strategies.',
      category: 'Meta Ads',
      categorySlug: 'meta-ads',
      readTime: '7 min read',
      publishedDate: '2025-01-12',
      slug: 'meta-ads-kerala-costs-roas-benchmarks',
      featured: true
    },
    {
      title: 'Website Development in Kochi: A 2025 Checklist for SMEs',
      excerpt: 'Essential requirements for modern business websites in Kerala. Speed, security, SEO, and user experience best practices.',
      category: 'Websites',
      categorySlug: 'websites',
      readTime: '6 min read',
      publishedDate: '2025-01-10',
      slug: 'website-development-kochi-2025-checklist',
      featured: true
    },
    {
      title: 'Movie Promotion in Kerala: Digital Strategies That Fill Theatres',
      excerpt: 'How Malayalam films use digital marketing to drive box office success. Case studies, strategies, and platform-specific tactics.',
      category: 'Movie Promotion',
      categorySlug: 'movie-promotion',
      readTime: '6 min read',
      publishedDate: '2025-01-08',
      slug: 'movie-promotion-kerala-digital-strategies',
      featured: true
    },
    {
      title: 'Local SEO for Kerala: Google Business Profile Wins',
      excerpt: 'Optimize your Google Business Profile for Kerala customers. Local ranking factors, review management, and GMB optimization tactics.',
      category: 'Local SEO',
      categorySlug: 'local-seo',
      readTime: '4 min read',
      publishedDate: '2025-01-05',
      slug: 'local-seo-kerala-google-business-profile',
      featured: false
    },
    {
      title: 'Content Writing in Kochi: Bilingual Copy That Converts',
      excerpt: 'Creating compelling content for Kerala audiences in English and Malayalam. Tone, cultural nuances, and conversion optimization.',
      category: 'Content',
      categorySlug: 'content',
      readTime: '5 min read',
      publishedDate: '2025-01-03',
      slug: 'content-writing-kochi-bilingual-copy',
      featured: false
    },
    {
      title: 'Instagram Marketing for Kerala Businesses: A Complete Guide',
      excerpt: 'Platform-specific strategies for Instagram success in Kerala. Content types, hashtag research, and audience engagement tactics.',
      category: 'Meta Ads',
      categorySlug: 'meta-ads',
      readTime: '6 min read',
      publishedDate: '2024-12-28',
      slug: 'instagram-marketing-kerala-businesses-guide',
      featured: false
    },
    {
      title: 'E-commerce SEO for Kerala Online Stores',
      excerpt: 'Product page optimization, local inventory targeting, and Kerala-specific e-commerce SEO strategies that drive sales.',
      category: 'SEO',
      categorySlug: 'seo',
      readTime: '8 min read',
      publishedDate: '2024-12-25',
      slug: 'ecommerce-seo-kerala-online-stores',
      featured: false
    },
    {
      title: 'WordPress Security for Kerala Businesses: Essential Guide',
      excerpt: 'Protect your WordPress website from security threats. Essential plugins, best practices, and maintenance tips for Kerala businesses.',
      category: 'Websites',
      categorySlug: 'websites',
      readTime: '7 min read',
      publishedDate: '2024-12-22',
      slug: 'wordpress-security-kerala-businesses',
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (categorySlug: string) => {
    const category = categories.find(cat => cat.slug === categorySlug);
    return category?.icon;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-100 mb-6">
              Digital Marketing Blog — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Kochi, Kerala</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 text-balance">
              Insights on SEO, Meta ads, websites, and movie promotion for Kerala brands.
            </p>
            <Link to="/contact" className="btn-secondary inline-flex items-center space-x-2">
              <span>Get Free Marketing Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.slug}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-100 mb-2">
              Featured Articles
            </h2>
            <p className="text-gray-400">
              Our most popular digital marketing insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {posts.filter(post => post.featured).slice(0, 4).map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.categorySlug);
              return (
                <article key={post.slug} className={`card group hover:border-primary-500/50 ${index === 0 ? 'lg:row-span-2' : ''}`}>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-primary-500/10 text-primary-500 px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                      {CategoryIcon && <CategoryIcon className="w-3 h-3" />}
                      <span>{post.category}</span>
                    </span>
                    <span className="text-gray-500 text-xs flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  
                  <h3 className={`font-heading font-semibold text-gray-100 mb-3 group-hover:text-primary-500 transition-colors duration-200 ${index === 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <time className="text-gray-500 text-xs">
                      {formatDate(post.publishedDate)}
                    </time>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary-500 hover:text-primary-400 font-medium text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all duration-200"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-gray-950">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-100 mb-2">
              All Articles
            </h2>
            <p className="text-gray-400">
              Latest insights and strategies for Kerala businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const CategoryIcon = getCategoryIcon(post.categorySlug);
              return (
                <article key={post.slug} className="card group hover:border-primary-500/50">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-primary-500/10 text-primary-500 px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                      {CategoryIcon && <CategoryIcon className="w-3 h-3" />}
                      <span>{post.category}</span>
                    </span>
                    <span className="text-gray-500 text-xs flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-gray-100 text-lg mb-3 group-hover:text-primary-500 transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <time className="text-gray-500 text-xs">
                      {formatDate(post.publishedDate)}
                    </time>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary-500 hover:text-primary-400 font-medium text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all duration-200"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-100 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest digital marketing insights, Kerala business trends, and growth strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Marketing Tips
            </Link>
            <Link to="/services" className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2">
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;