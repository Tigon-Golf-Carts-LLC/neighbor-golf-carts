import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Star, Shield, Truck, ArrowRight, Users } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import type { County } from "@/data/delawareCounties";
import type { Municipality } from "@/data/allDelawareMunicipalities";

interface CountyPageProps {
  county: County;
  municipalities: Municipality[];
}

export default function CountyPageTemplate({ county, municipalities }: CountyPageProps) {
  const { name, slug, seat, description } = county;
  
  const countyFeatures = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free County-Wide Delivery",
      description: `Complimentary delivery service throughout all ${name} municipalities`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Comprehensive Warranty",
      description: "Full manufacturer warranties on all new DENAGO and EVOLUTION vehicles"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Local Service",
      description: "Certified technicians serving all communities in the county"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Focused",
      description: `Proudly serving residents and businesses across ${name}`
    }
  ];

  const largestMunicipalities = municipalities
    .sort((a, b) => b.population - a.population)
    .slice(0, 6);

  const allMunicipalitiesAlphabetical = municipalities
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <SEOHead 
        title={`${name} Golf Carts | Neighborhood Golf Carts - All ${name} Beach Locations`}
        description={`Professional golf cart sales, rentals, and service throughout ${name}. DENAGO and EVOLUTION electric vehicles with expert service in all ${municipalities.length} locations from Neighborhood Golf Carts.`}
        keywords={`${name} golf carts, eastern coastline golf cart sales, ${name} golf cart rentals, DENAGO ${name}, EVOLUTION ${name}, Shoreside golf carts`}
        canonicalUrl={`https://neighborgolfcarts.com${county.url}`}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_ZIJgnM0qSLqCnmqzAiha0w_Tcds7ckvRe6FNLFDKo_aDg_1755541056710.jpeg"
        ogType="website"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-4 text-white overflow-hidden"
          style={getHeroBackgroundStyle(`county-${slug}`)}
        >
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <Badge className="bg-theme-orange text-white px-6 py-2 text-lg font-bold mb-6">
              SERVING {name.toUpperCase()}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {name} Golf Carts
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Premium DENAGO and EVOLUTION electric golf cart sales, rentals, and service 
              throughout all {municipalities.length} beach locations in {name} from Neighborhood Golf Carts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <Link href="/inventory">
                <Button size="lg" variant="outline" className="bg-white text-gray-900 border-white hover:bg-gray-100">
                  View Available Golf Carts
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* County Services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Golf Cart Services Across {name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {description}. We provide comprehensive golf cart solutions 
                for all residents and businesses throughout the county.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {countyFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-theme-orange/10 rounded-full flex items-center justify-center mb-4">
                      <div className="text-theme-orange">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Major Towns Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Major Communities in {name}
              </h2>
              <p className="text-lg text-gray-600">
                Serving our largest municipalities with premium golf cart solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {largestMunicipalities.map((municipality) => (
                <Link key={municipality.slug} href={municipality.url}>
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{municipality.name}</CardTitle>
                        <Badge variant="outline">{municipality.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-3">
                        Population: {municipality.population.toLocaleString()}
                      </p>
                      <p className="text-gray-700 text-sm mb-4">
                        Professional golf cart sales, rentals, and service available in {municipality.name}.
                      </p>
                      <div className="flex items-center text-theme-orange text-sm font-medium">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Municipalities List */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                All {name} Municipalities
              </h2>
              <p className="text-lg text-gray-600">
                Complete list of all {municipalities.length} towns and cities we serve in {name}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {allMunicipalitiesAlphabetical.map((municipality) => (
                <Link key={municipality.slug} href={municipality.url}>
                  <div className="p-4 bg-gray-50 rounded-lg hover:bg-theme-orange hover:text-white transition-colors cursor-pointer">
                    <h3 className="font-semibold text-sm">{municipality.name}</h3>
                    <p className="text-xs opacity-75 mt-1">{municipality.type}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Your Perfect Golf Cart in {name}?
            </h2>
            <p className="text-xl mb-8">
              Contact Delaware Golf Carts today for expert advice and premium service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Form
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}