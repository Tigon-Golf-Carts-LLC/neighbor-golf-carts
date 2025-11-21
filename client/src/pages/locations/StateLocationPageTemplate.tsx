import { useLocation } from "wouter";
import { Link } from "wouter";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";
import { CoastalState } from "@/data/easternCoastlineStates";

interface StateLocationPageTemplateProps {
  state: CoastalState;
}

export default function StateLocationPageTemplate({ state }: StateLocationPageTemplateProps) {
  const [location] = useLocation();

  const pageTitle = `${state.name} Neighborhood Vehicle`;
  const pageDescription = `Professional golf cart sales, service, and rentals serving all ${state.name} coastal communities. Premium DENAGO and Evolution electric golf carts available throughout ${state.name} shores and beaches.`;
  const pageUrl = `https://neighborgolfcarts.com/${state.slug}-golf-carts`;

  const breadcrumbs = [
    { name: "Home", url: "https://neighborgolfcarts.com/" },
    { name: "States", url: "https://neighborgolfcarts.com/coastal-states" },
    { name: `${state.name} Golf Carts`, url: pageUrl }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={`golf carts ${state.name}, ${state.name} neighborhood golf carts, street-legal golf carts ${state.name}, ${state.beaches.slice(0, 5).map(b => b.name).join(', ')}`}
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
              {state.name} Golf Carts - Neighborhood Golf Carts
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-4xl mx-auto">
              Professional golf cart sales, service, and rentals serving all {state.name} coastal communities. 
              From {state.beaches[0]?.name} to {state.beaches[state.beaches.length - 1]?.name}, we deliver premium 
              golf cart solutions to every shore and beach in {state.name}.
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
              Comprehensive golf cart solutions for all {state.name} coastal communities
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
                  serving all {state.name} coastal areas.
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
                  Short-term and long-term golf cart rentals perfect for beach vacations 
                  and events throughout {state.name}.
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
              {state.name} Coastal Locations We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional golf cart services delivered to every shore and beach in {state.name}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.beaches.map((beach) => (
              <Link 
                key={beach.slug} 
                href={`/${state.slug}/${beach.slug}-golf-carts`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-theme-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">{beach.name}</div>
                    <div className="text-sm text-gray-500 capitalize">{beach.type.replace('-', ' ')}</div>
                  </div>
                </div>
              </Link>
            ))}
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
                Deep knowledge of {state.name} coastal communities and terrain requirements.
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
              {state.name} Coastal Coverage Map
            </h2>
            <p className="text-xl text-gray-600">
              We serve all coastal areas throughout {state.name}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${state.slug === 'maine' ? '-69.2649' : state.slug === 'new-hampshire' ? '-70.7494' : state.slug === 'massachusetts' ? '-70.5171' : state.slug === 'rhode-island' ? '-71.4774' : state.slug === 'connecticut' ? '-72.5473' : state.slug === 'new-york' ? '-72.6851' : state.slug === 'new-jersey' ? '-74.4776' : state.slug === 'delaware' ? '-75.5277' : state.slug === 'maryland' ? '-75.8939' : state.slug === 'virginia' ? '-75.9776' : state.slug === 'north-carolina' ? '-75.5449' : state.slug === 'south-carolina' ? '-78.6569' : state.slug === 'georgia' ? '-81.0987' : '-82.6404'}!3d${state.slug === 'maine' ? '43.7844' : state.slug === 'new-hampshire' ? '43.0389' : state.slug === 'massachusetts' ? '41.9028' : state.slug === 'rhode-island' ? '41.5801' : state.slug === 'connecticut' ? '41.2033' : state.slug === 'new-york' ? '40.9176' : state.slug === 'new-jersey' ? '39.8283' : state.slug === 'delaware' ? '38.9108' : state.slug === 'maryland' ? '38.4192' : state.slug === 'virginia' ? '36.8508' : state.slug === 'north-carolina' ? '35.2271' : state.slug === 'south-carolina' ? '33.8361' : state.slug === 'georgia' ? '31.9986' : '27.7663'}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f8.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(state.name + ' coast beaches')}!5e0!3m2!1sen!2sus!4v${Date.now()}!5m2!1sen!2sus`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${state.name} Coastal Areas Map`}
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