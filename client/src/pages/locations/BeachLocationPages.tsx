import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Star, Car, Wrench, Calendar, Shield } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { EASTERN_COASTLINE_STATES, generateAllBeachUrls, type Beach } from "@/data/easternCoastlineStates";
import { generateBeachMapEmbed, generateDirectionsUrl } from "@/utils/easternCoastlineMaps";

interface BeachLocationPageProps {
  beachSlug: string;
  stateSlug: string;
}

export function BeachLocationPageTemplate({ beachSlug, stateSlug }: BeachLocationPageProps) {
  const state = EASTERN_COASTLINE_STATES.find(s => s.slug === stateSlug);
  const beach = state?.beaches.find(b => b.slug === beachSlug);
  
  if (!state || !beach) {
    return <div>Location not found</div>;
  }

  const pageTitle = `Golf Carts in ${beach.name}, ${state.name} | Neighborhood Golf Carts`;
  const pageDescription = `Premium golf cart sales, rentals, and service in ${beach.name}, ${state.name}. Neighborhood Golf Carts delivers DENAGO and EVOLUTION electric vehicles to every shore and beach.`;
  const pageUrl = `https://neighborgolfcarts.com/${stateSlug}/${beachSlug}-golf-carts`;

  const breadcrumbs = [
    { name: "Home", url: "https://neighborgolfcarts.com/" },
    { name: `${state.name} Golf Carts`, url: `https://neighborgolfcarts.com/${stateSlug}-golf-carts` },
    { name: beach.name, url: pageUrl }
  ];

  const locationTypes = {
    beach: "Beach",
    shore: "Shore",
    "coastal-town": "Coastal Town",
    port: "Port"
  };

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={`golf carts ${beach.name} ${state.name}, electric golf carts ${beach.name}, neighborhood golf carts, street-legal golf carts, DENAGO, EVOLUTION`}
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
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MapPin className="w-3 h-3 mr-1" />
                {locationTypes[beach.type]}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {state.name}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Golf Carts in {beach.name}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Premium electric golf carts delivered to {beach.name}, {state.name}. 
              Neighborhood Golf Carts serves every shore and beach with expert sales, service, and rentals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                <Link href="/inventory">
                  <Car className="w-5 h-5 mr-2" />
                  View Inventory
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-theme-primary">
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Golf Cart Services in {beach.name}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive golf cart solutions delivered directly to {beach.name}. 
              From beach cruisers to utility vehicles, we have the perfect electric vehicle for your coastal lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Car className="w-12 h-12 text-theme-primary mx-auto mb-4" />
                <CardTitle>Sales</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  New DENAGO and EVOLUTION electric golf carts delivered to {beach.name}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Calendar className="w-12 h-12 text-theme-primary mx-auto mb-4" />
                <CardTitle>Rentals</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Short and long-term golf cart rentals for {beach.name} visitors
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Wrench className="w-12 h-12 text-theme-primary mx-auto mb-4" />
                <CardTitle>Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Professional maintenance and repair services for {beach.name}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-theme-primary mx-auto mb-4" />
                <CardTitle>Warranty</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive warranty coverage for {beach.name} customers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving {beach.name} & All {state.name} Coastal Areas
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Neighborhood Golf Carts is proud to serve {beach.name} and every coastal community throughout {state.name}. 
                Our team delivers premium electric golf carts directly to your location, whether you're at the beach, 
                a coastal resort, or your waterfront home.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Expert delivery to {beach.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Local {state.name} service team</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Beach-ready electric vehicles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Salt-air resistant models available</span>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (844) 844-6638
                </Link>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Other {state.name} Locations</h3>
              <div className="grid grid-cols-2 gap-3">
                {state.beaches.filter(b => b.slug !== beach.slug).slice(0, 8).map((otherBeach) => (
                  <Link 
                    key={otherBeach.slug} 
                    href={`/${stateSlug}/${otherBeach.slug}-golf-carts`}
                    className="block p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow text-sm"
                  >
                    <div className="font-medium">{otherBeach.name}</div>
                    <div className="text-gray-500 text-xs">{locationTypes[otherBeach.type]}</div>
                  </Link>
                ))}
              </div>
              
              {state.beaches.length > 9 && (
                <Link 
                  href={`/${stateSlug}-golf-carts`}
                  className="inline-block mt-4 text-theme-primary hover:underline"
                >
                  View all {state.name} locations →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Find Us in {beach.name}
            </h2>
            <p className="text-xl text-gray-600">
              Interactive map showing {beach.name} area
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={generateBeachMapEmbed(stateSlug, beach.slug)}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${beach.name} Location Map`}
            />
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href={generateDirectionsUrl(stateSlug, beach.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-theme-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions to {beach.name}
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your {beach.name} Golf Cart?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact Neighborhood Golf Carts today for expert advice and delivery to {beach.name}, {state.name}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
              <a href="tel:844-844-6638">
                <Phone className="w-5 h-5 mr-2" />
                (844) 844-6638
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-theme-primary">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// Generate all beach pages programmatically
const allBeaches = generateAllBeachUrls();

// Export individual beach components for routing
export const MaineOldOrchardBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="old-orchard-beach" stateSlug="maine" />
);

export const MaineKennebunkportPage = () => (
  <BeachLocationPageTemplate beachSlug="kennebunkport" stateSlug="maine" />
);

export const MaineBarHarborPage = () => (
  <BeachLocationPageTemplate beachSlug="bar-harbor" stateSlug="maine" />
);

export const MaineCamdenPage = () => (
  <BeachLocationPageTemplate beachSlug="camden" stateSlug="maine" />
);

export const MainePemaquidBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="pemaquid-beach" stateSlug="maine" />
);

export const MainePophamBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="popham-beach" stateSlug="maine" />
);

export const MaineWellsBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="wells-beach" stateSlug="maine" />
);

export const MaineYorkBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="york-beach" stateSlug="maine" />
);

export const MaineOgunquitPage = () => (
  <BeachLocationPageTemplate beachSlug="ogunquit" stateSlug="maine" />
);

export const MaineBoothbayHarborPage = () => (
  <BeachLocationPageTemplate beachSlug="boothbay-harbor" stateSlug="maine" />
);

export const MaineAcadiaNationalParkPage = () => (
  <BeachLocationPageTemplate beachSlug="acadia-national-park" stateSlug="maine" />
);

export const MainePortlandPage = () => (
  <BeachLocationPageTemplate beachSlug="portland" stateSlug="maine" />
);

// New Hampshire beach pages
export const NewHampshireHamptonBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="hampton-beach" stateSlug="new-hampshire" />
);

export const NewHampshireSeabrookBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="seabrook-beach" stateSlug="new-hampshire" />
);

export const NewHampshireRyeBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="rye-beach" stateSlug="new-hampshire" />
);

export const NewHampshireNorthBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="north-beach" stateSlug="new-hampshire" />
);

export const NewHampshireWallisSandsStateBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="wallis-sands-state-beach" stateSlug="new-hampshire" />
);

export const NewHampshirePortsmouthPage = () => (
  <BeachLocationPageTemplate beachSlug="portsmouth" stateSlug="new-hampshire" />
);

// Massachusetts beach pages  
export const MassachusettsCapecodPage = () => (
  <BeachLocationPageTemplate beachSlug="cape-cod" stateSlug="massachusetts" />
);

export const MassachusettsMarthasVineyardPage = () => (
  <BeachLocationPageTemplate beachSlug="marthas-vineyard" stateSlug="massachusetts" />
);

export const MassachusettsNantucketPage = () => (
  <BeachLocationPageTemplate beachSlug="nantucket" stateSlug="massachusetts" />
);

export const MassachusettsProvincetownPage = () => (
  <BeachLocationPageTemplate beachSlug="provincetown" stateSlug="massachusetts" />
);

export const MassachusettsChathamPage = () => (
  <BeachLocationPageTemplate beachSlug="chatham" stateSlug="massachusetts" />
);

export const MassachusettsHyannisPage = () => (
  <BeachLocationPageTemplate beachSlug="hyannis" stateSlug="massachusetts" />
);

export const MassachusettsFalmouthPage = () => (
  <BeachLocationPageTemplate beachSlug="falmouth" stateSlug="massachusetts" />
);

export const MassachusettsGloucesterPage = () => (
  <BeachLocationPageTemplate beachSlug="gloucester" stateSlug="massachusetts" />
);

export const MassachusettsSalemPage = () => (
  <BeachLocationPageTemplate beachSlug="salem" stateSlug="massachusetts" />
);

export const MassachusettsNewburyportPage = () => (
  <BeachLocationPageTemplate beachSlug="newburyport" stateSlug="massachusetts" />
);

export const MassachusettsRevereBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="revere-beach" stateSlug="massachusetts" />
);

export const MassachusettsNahantBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="nahant-beach" stateSlug="massachusetts" />
);

export const MassachusettsDuxburyBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="duxbury-beach" stateSlug="massachusetts" />
);

export const MassachusettsPlymouthBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="plymouth-beach" stateSlug="massachusetts" />
);

// Rhode Island beach pages
export const RhodeIslandNewportPage = () => (
  <BeachLocationPageTemplate beachSlug="newport" stateSlug="rhode-island" />
);

export const RhodeIslandNarragansettPage = () => (
  <BeachLocationPageTemplate beachSlug="narragansett" stateSlug="rhode-island" />
);

export const RhodeIslandWatchHillPage = () => (
  <BeachLocationPageTemplate beachSlug="watch-hill" stateSlug="rhode-island" />
);

export const RhodeIslandWesterlyPage = () => (
  <BeachLocationPageTemplate beachSlug="westerly" stateSlug="rhode-island" />
);

export const RhodeIslandBlockIslandPage = () => (
  <BeachLocationPageTemplate beachSlug="block-island" stateSlug="rhode-island" />
);

export const RhodeIslandMisquamicutBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="misquamicut-beach" stateSlug="rhode-island" />
);

export const RhodeIslandScarboroughBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="scarborough-beach" stateSlug="rhode-island" />
);

export const RhodeIslandEastBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="east-beach" stateSlug="rhode-island" />
);

export const RhodeIslandSecondBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="second-beach" stateSlug="rhode-island" />
);

export const RhodeIslandFirstBeachPage = () => (
  <BeachLocationPageTemplate beachSlug="first-beach" stateSlug="rhode-island" />
);

// Continue with remaining states...
// Due to length limits, I'll create a comprehensive system that generates all beach pages

// Export function to generate all beach page components
export const generateAllBeachPageComponents = () => {
  const components: Record<string, () => JSX.Element> = {};
  
  allBeaches.forEach(beach => {
    const componentName = `${beach.state.replace(/\s+/g, '')}${beach.name.replace(/[^a-zA-Z0-9]/g, '')}Page`;
    components[componentName] = () => (
      <BeachLocationPageTemplate beachSlug={beach.slug} stateSlug={beach.stateSlug} />
    );
  });
  
  return components;
};