import { Link } from 'react-router-dom';
import { Search, Megaphone, Code, PenTool, MapPin, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: 'All', slug: 'all', icon: null },
    { name: 'SEO', slug: 'seo', icon: Search },
    { name: 'Meta Ads', slug: 'meta-ads', icon: Megaphone },
    { name: 'Websites', slug: 'websites', icon: Code },
    { name: 'Content', slug: 'content', icon: PenTool },
    { name: 'Local SEO', slug: 'local-seo', icon: MapPin },
  ];

  const posts = [
    {
      title: 'SEO in Kerala: How Local Brands Rank #1',
      excerpt:
        'Complete guide to local SEO strategies that work in Kerala markets. Learn the exact tactics local businesses use to dominate Google search results.',
      category: 'SEO',
      categorySlug: 'seo',
      readTime: '5 min read',
      publishedDate: '2025-01-15',
      slug: 'seo-in-kerala-local-brands-rank-1',
      featured: true,
    },
    {
      title: 'Meta & Google Ads: Costs, ROAS Benchmarks & Creative Tips',
      excerpt:
        'Everything you need to know about Facebook, Instagram, and Google advertising for Kerala businesses. Real data, performance benchmarks, and creative strategies.',
      category: 'Meta Ads',
      categorySlug: 'meta-ads',
      readTime: '7 min read',
      publishedDate: '2025-01-12',
      slug: 'meta-google-ads-strategies-kerala',
      featured: true,
    },
    {
      title: 'Website Development in Kerala: A 2025 Checklist for SMEs',
      excerpt:
        'Essential requirements for modern business websites — speed, security, SEO, and UX best practices.',
      category: 'Websites',
      categorySlug: 'websites',
      readTime: '6 min read',
      publishedDate: '2025-01-10',
      slug: 'website-development-kerala-2025-checklist',
      featured: true,
    },
    {
      title: 'Local SEO for Kerala: Google Business Profile Wins',
      excerpt:
        'Optimize your Business Profile for Kerala customers. Ranking factors, reviews, and optimization tactics that really work.',
      category: 'Local SEO',
      categorySlug: 'local-seo',
      readTime: '4 min read',
      publishedDate: '2025-01-05',
      slug: 'local-seo-kerala-business-profile',
      featured: false,
    },
  ];

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const getCategoryIcon = (slug: string) =>
    categories.find((c) => c.slug === slug)?.icon;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="section-padding bg-white text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-[Syne] font-bold mb-6">
            Digital Marketing Blog
          </h1>
          <p className="text-xl md:text-2xl text-black/80 mb-8">
            Insights on SEO, ads, websites & content for Kerala brands
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold border border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            <span>Get Free Marketing Consultation</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.slug}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-black hover:bg-black hover:text-white transition-all duration-200"
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
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-[Syne] font-bold mb-2">
              Featured Articles
            </h2>
            <p className="text-black/70 text-lg mb-12 max-w-xl mx-auto">
              Our most popular digital marketing insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts
              .filter((p) => p.featured)
              .map((post) => {
                const CategoryIcon = getCategoryIcon(post.categorySlug);
                return (
                  <article
                    key={post.slug}
                    className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-black/5 text-black/70 px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                        {CategoryIcon && <CategoryIcon className="w-3 h-3" />}
                        <span>{post.category}</span>
                      </span>
                      <span className="text-black/50 text-xs flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    <h3 className="font-[Syne] font-semibold text-lg mb-3 group-hover:text-gray-700 transition-colors duration-200">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-black/70 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-black/50">
                      <time>{formatDate(post.publishedDate)}</time>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="font-semibold hover:text-black transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Rectangle */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="bg-black rounded-3xl p-10 md:p-16 text-center text-white shadow-xl">
            <h2 className="text-3xl md:text-4xl font-[Syne] font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest digital marketing insights, Kerala business trends,
              and growth strategies delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="text-lg px-8 py-4 rounded-md font-semibold bg-white text-black hover:bg-gray-200 transition-colors duration-200"
              >
                Get Marketing Tips
              </Link>
              <Link
                to="/services"
                className="text-lg px-8 py-4 rounded-md font-semibold border border-white text-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;