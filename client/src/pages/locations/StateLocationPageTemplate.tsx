import { useLocation } from "wouter";
import { Link } from "wouter";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";
import { State } from "@/data/all50States";

interface StateLocationPageTemplateProps {
  state: State;
}

export default function StateLocationPageTemplate({ state }: StateLocationPageTemplateProps) {
  const [location] = useLocation();

  const pageTitle = `${state.name} Neighborhood Golf Carts`;
  const pageDescription = `Professional golf cart sales, service, and rentals serving all ${state.name} neighborhoods and communities. Premium DENAGO and Evolution street-legal electric golf carts available throughout ${state.name}.`;
  const pageUrl = `https://neighborgolfcarts.com/${state.slug}-golf-carts`;

  const breadcrumbs = [
    { name: "Home", url: "https://neighborgolfcarts.com/" },
    { name: "States", url: "https://neighborgolfcarts.com/states" },
    { name: `${state.name} Neighborhood Golf Carts`, url: pageUrl }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={`golf carts ${state.name}, ${state.name} neighborhood golf carts, street-legal golf carts ${state.name}, ${state.cities?.slice(0, 5).map(c => c.name).join(', ') || state.name}`}
        canonicalUrl={pageUrl}
        ogType="website"
      />
      
      <AllSchemas 
        pageType="location" 
        pageData={{
          title: pageTitle,
          description: pageDescription,
          url: pageUrl,
          breadcrumbs: breadcrumbs
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {state.name} Neighborhood Golf Carts
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-4xl mx-auto">
              Professional golf cart sales, service, and rentals serving all {state.name} neighborhoods and communities. 
              Street-legal electric golf carts perfect for residential areas, retirement communities, and local transportation throughout {state.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  View Inventory
                </Button>
              </Link>
              <a href="tel:1-844-844-6638">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900">
                  Call Now 1-844-844-6638
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Complete Golf Cart Services in {state.name}
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive golf cart solutions for all {state.name} neighborhoods and communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  New and pre-owned golf carts from premium brands including Evolution and Denago, 
                  delivered to any location in {state.name}.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Service & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional maintenance and repair services by certified technicians, 
                  serving all {state.name} neighborhoods.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Short-term and long-term golf cart rentals perfect for neighborhoods, events, 
                  and personal transportation throughout {state.name}.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {state.name} Cities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional neighborhood golf cart services delivered throughout {state.name}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.cities?.map((city) => (
              <Link 
                key={city.slug} 
                href={`/${state.slug}/${city.slug}-golf-carts`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-theme-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">{city.name}</div>
                    <div className="text-sm text-gray-500 capitalize">{city.type}</div>
                  </div>
                </div>
              </Link>
            )) || <p className="text-gray-600">Serving all neighborhoods in {state.name}</p>}
          </div>
        </div>
      </section>

      {/* Why Choose Us for State */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Why Choose Neighborhood Golf Carts in {state.name}?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of {state.name} neighborhoods and local terrain requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Brands</h3>
              <p className="text-gray-600">
                Authorized dealer for Evolution, Denago, and other top golf cart manufacturers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Full Service</h3>
              <p className="text-gray-600">
                Complete sales, service, parts, and rental solutions throughout {state.name}.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated customer service and technical support for all {state.name} customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {state.name} Service Area Map
            </h2>
            <p className="text-xl text-gray-600">
              We serve neighborhoods throughout {state.name}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(state.name)}`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${state.name} Service Area Map`}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Your Golf Cart in {state.name}?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact Neighborhood Golf Carts today for expert advice and personalized service throughout {state.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Get Quote
              </Button>
            </Link>
            <a href="tel:1-844-844-6638">
              <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900">
                Call 1-844-844-6638
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}