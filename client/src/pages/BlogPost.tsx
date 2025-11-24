import { useRoute, Link } from "wouter";
import { Calendar, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = BLOG_POSTS.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const renderHeading = (heading: string, level: number) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    const className = {
      2: "text-3xl font-bold text-gray-900 mt-12 mb-6",
      3: "text-2xl font-bold text-gray-900 mt-10 mb-5",
      4: "text-xl font-bold text-gray-900 mt-8 mb-4",
      5: "text-lg font-semibold text-gray-900 mt-6 mb-3",
      6: "text-base font-semibold text-gray-900 mt-4 mb-2"
    }[level] || "text-xl font-bold text-gray-900 mt-8 mb-4";

    return (
      <HeadingTag className={className}>
        {heading}
      </HeadingTag>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={post.seoTitle}
        description={post.metaDescription}
        keywords={`${post.title}, neighborhood golf carts, street-legal golf carts, electric golf carts, DENAGO, Evolution`}
        canonicalUrl={`https://neighborgolfcarts.com/blog/${post.slug}`}
        ogType="article"
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 flex items-center">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="aspect-video bg-gradient-to-br from-theme-primary to-blue-700 rounded-lg flex items-center justify-center text-white p-8">
            <div className="text-center max-w-2xl">
              <p className="text-sm font-medium opacity-80 mb-3">Hero Image Prompt for AI Generation:</p>
              <p className="text-sm opacity-90 leading-relaxed">{post.heroImagePrompt}</p>
              <p className="text-xs opacity-60 mt-4 italic">Alt Text: {post.heroImageAlt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.content.h1}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Sections */}
        <div className="prose prose-lg max-w-none">
          {post.content.sections.map((section, index) => (
            <section key={index} className="mb-8">
              {renderHeading(section.heading, section.level)}
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Internal Links Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/inventory">
              <Button variant="outline" className="w-full justify-start" data-testid="link-inventory">
                View Our Golf Cart Inventory
              </Button>
            </Link>
            <Link href="/rentals">
              <Button variant="outline" className="w-full justify-start" data-testid="link-rentals">
                Explore Rental Options
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="w-full justify-start" data-testid="link-services">
                Learn About Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full justify-start" data-testid="link-contact">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-theme-primary to-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Need Expert Advice?</h3>
          <p className="text-lg mb-6 text-gray-100">
            Our team is ready to help you find the perfect neighborhood golf cart for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1-844-844-6638">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Call 1-844-844-6638
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                Send Us a Message
              </Button>
            </Link>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button variant="ghost" data-testid="button-back-to-blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Blog Posts
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
