import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { BLOG_POSTS } from "@/data/blogPosts";

// Import all blog hero images
import neighborhoodGolfCartLifestyle from "@assets/generated_images/neighborhood_golf_cart_lifestyle.png";
import golfCartsNationwideLandscapes from "@assets/generated_images/golf_carts_nationwide_landscapes.png";
import denagoGolfCartHome from "@assets/generated_images/denago_golf_cart_home.png";
import evolutionGolfCartFeatures from "@assets/generated_images/evolution_golf_cart_features.png";
import golfCartDailyUse from "@assets/generated_images/golf_cart_daily_use.png";
import golfCartSizeComparison from "@assets/generated_images/golf_cart_size_comparison.png";
import golfCartChargingStation from "@assets/generated_images/golf_cart_charging_station.png";
import golfCartAllSeasons from "@assets/generated_images/golf_cart_all_seasons.png";
import customGolfCartOptions from "@assets/generated_images/custom_golf_cart_options.png";
import golfCartDealershipShowroom from "@assets/generated_images/golf_cart_dealership_showroom.png";

// Map image paths to imported images
const imageMap: Record<string, string> = {
  "@assets/generated_images/neighborhood_golf_cart_lifestyle.png": neighborhoodGolfCartLifestyle,
  "@assets/generated_images/golf_carts_nationwide_landscapes.png": golfCartsNationwideLandscapes,
  "@assets/generated_images/denago_golf_cart_home.png": denagoGolfCartHome,
  "@assets/generated_images/evolution_golf_cart_features.png": evolutionGolfCartFeatures,
  "@assets/generated_images/golf_cart_daily_use.png": golfCartDailyUse,
  "@assets/generated_images/golf_cart_size_comparison.png": golfCartSizeComparison,
  "@assets/generated_images/golf_cart_charging_station.png": golfCartChargingStation,
  "@assets/generated_images/golf_cart_all_seasons.png": golfCartAllSeasons,
  "@assets/generated_images/custom_golf_cart_options.png": customGolfCartOptions,
  "@assets/generated_images/golf_cart_dealership_showroom.png": golfCartDealershipShowroom,
};

export default function Blog() {
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Neighborhood Golf Cart Blog | Expert Tips, Reviews & Guides"
        description="Expert insights on neighborhood golf carts, buying guides, maintenance tips, and industry news. Serving customers across all 50 states with professional advice and reviews."
        keywords="golf cart blog, neighborhood golf cart tips, golf cart reviews, electric golf cart guides, street-legal golf cart news"
        canonicalUrl="https://neighborgolfcarts.com/blog"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Neighborhood Golf Cart Blog
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Expert insights, comprehensive guides, and the latest news about neighborhood golf carts across America
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <Card 
              key={post.slug} 
              className="flex flex-col hover:shadow-lg transition-shadow"
              data-testid={`blog-card-${post.slug}`}
            >
              <CardHeader className="pb-4">
                {imageMap[post.heroImage] ? (
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={imageMap[post.heroImage]}
                      alt={post.heroImageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-theme-primary to-blue-700 rounded-lg mb-4 flex items-center justify-center text-white p-6">
                    <p className="text-sm opacity-80">Image loading...</p>
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <h2 className="text-xl font-bold text-gray-900 line-clamp-2 mb-2">
                  {post.title}
                </h2>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    data-testid={`button-read-${post.slug}`}
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Neighborhood Golf Cart?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experts are here to help you choose the right golf cart for your needs across all 50 states.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                View Inventory
              </Button>
            </Link>
            <a href="tel:1-844-844-6638">
              <Button size="lg" variant="outline">
                Call 1-844-844-6638
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
