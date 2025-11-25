import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Facebook, ExternalLink, Youtube } from "lucide-react";
import { Link } from "wouter";
import EnhancedSEOHead, { createPageSEOConfig } from "@/components/EnhancedSEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { SUSSEX_COUNTY_MUNICIPALITIES } from "@/data/sussexCountyMunicipalities";

export default function ShowroomPage() {
  const locations = [
    {
      name: "TIGON Dover DE",
      address: "5158 N Dupont Hwy, Dover, DE 19901",
      phone: "302-546-0010",
      coordinates: "39.22044318468275, -75.57452048907642",
      googleMapsUrl: "https://www.google.com/maps?cid=12843447677705895190",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsDover/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsDoverDE",
      websiteUrl: "https://tigongolfcarts.com/dover/",
      reviewUrl: "https://g.page/r/CRa9-YidFz2yEBM/review",
      city: "Dover DE",
      type: "physical"
    },
    {
      name: "TIGON Hatfield PA",
      address: "2333 Bethlehem Pike, Hatfield, PA 19440",
      phone: "215-595-8736",
      coordinates: "40.29839945958623, -75.28308913039525",
      googleMapsUrl: "https://www.google.com/maps?cid=8221925612164093496",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsHatfield/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsHatfieldPA",
      websiteUrl: "https://tigongolfcarts.com/hatfield/",
      reviewUrl: "https://g.page/r/CTgWulrIJRpyEBM/review",
      city: "Hatfield PA",
      type: "physical"
    },
    {
      name: "TIGON Ocean View NJ",
      address: "101 NJ-50, Ocean View, NJ 08230",
      phone: "609-840-0404",
      coordinates: "39.22254797811702, -74.70417212536503",
      googleMapsUrl: "https://www.google.com/maps?cid=6446924254429489274",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsOceanView/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsOceanViewNJ",
      websiteUrl: "https://tigongolfcarts.com/ocean-view/",
      reviewUrl: "https://g.page/r/CXqoHr9zE3hZEBM/review",
      city: "Ocean View NJ",
      type: "physical"
    },
    {
      name: "TIGON Pocono PA",
      address: "1712 Pennsylvania 940, Pocono Pines, PA 18350",
      phone: "570-643-0152",
      coordinates: "41.10286354605563, -75.48758590250345",
      googleMapsUrl: "https://www.google.com/maps?cid=17137841834562046914",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsPoconos/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsPoconosPA",
      websiteUrl: "https://tigongolfcarts.com/pocono/",
      reviewUrl: "https://g.page/r/CcJL5i1Z2NXtEBM/review",
      city: "Pocono Pines PA",
      type: "physical"
    },
    {
      name: "TIGON Scranton-Wilkes-Barre PA",
      address: "1225 N Keyser Ave #2, Scranton, PA 18504",
      phone: "570-344-4443",
      coordinates: "41.4374075, -75.6835104",
      googleMapsUrl: "https://www.google.com/maps?cid=13243686786001524416",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsScranton/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsScrantonWilkesPA",
      websiteUrl: "https://tigongolfcarts.com/scranton-wilkes-barre/",
      reviewUrl: "https://g.page/r/CcDWJ7z2Bsu3EBM/review",
      city: "Scranton PA",
      type: "physical"
    },
    {
      name: "TIGON Raleigh NC",
      address: "2700 S Wilmington St, Raleigh, NC 27603",
      phone: "984-489-0296",
      coordinates: "35.7471032, -78.6452007",
      googleMapsUrl: "https://www.google.com/maps?cid=14570072271497929915",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsRaleigh/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsRaleighNC",
      websiteUrl: "https://tigongolfcarts.com/raleigh/",
      reviewUrl: "https://g.page/r/CbskZw6JSzPKEBM/review",
      city: "Raleigh NC",
      type: "physical"
    },
    {
      name: "TIGON South Bend IN",
      address: "52129 State Road 933, South Bend, IN 46637",
      phone: "574-703-0456",
      coordinates: "41.7360283, -86.2511865",
      googleMapsUrl: "https://www.google.com/maps?cid=17532455648086849827",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsSouthBend/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsSouthBendIN",
      websiteUrl: "https://tigongolfcarts.com/south-bend/",
      reviewUrl: "https://g.page/r/CSP5gWCFy0_zEBM/review",
      city: "South Bend IN",
      type: "physical"
    },
    {
      name: "TIGON Gloucester Point VA",
      address: "2810 George Washington Memorial Hwy, Gloucester Point, VA 23072",
      phone: "804-792-0234",
      coordinates: "37.2850625, -76.5074161",
      googleMapsUrl: "https://www.google.com/maps?cid=16682967888503617377",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsGloucesterPoint/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsGloucesterPoint",
      websiteUrl: "https://tigongolfcarts.com/gloucester-point/",
      reviewUrl: "",
      city: "Gloucester Point VA",
      type: "physical"
    },
    {
      name: "TIGON Bayville NJ",
      address: "155 Atlantic City Blvd Bayville, NJ 08721",
      phone: "732-908-7166",
      coordinates: "39.9277698, -74.1748497",
      googleMapsUrl: "https://www.google.com/maps?cid=16812778070531162551",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsBayville/",
      youtubeUrl: "",
      websiteUrl: "https://tigongolfcarts.com/bayville/",
      reviewUrl: "https://g.page/r/CbfBfMWT_FLpEBM/review",
      city: "Bayville NJ",
      type: "physical"
    },
    {
      name: "TIGON Waretown NJ",
      address: "526 US-9 Waretown, NJ 08758",
      phone: "732-998-8146",
      coordinates: "",
      googleMapsUrl: "https://www.google.com/maps?cid=11595558320608622005",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsWaretown/",
      youtubeUrl: "",
      websiteUrl: "https://tigongolfcarts.com/waretown/",
      reviewUrl: "https://g.page/r/CbW1M1DbsuugEBM/review",
      city: "Waretown NJ",
      type: "physical"
    },
    {
      name: "TIGON Orangeburg SC",
      address: "4166 North Rd, Orangeburg, SC 29118",
      phone: "803-596-0246",
      coordinates: "33.547201, -80.9162039",
      googleMapsUrl: "https://www.google.com/maps?cid=17192321019507936230",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsOrangeburg/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsOrangeburgSC",
      websiteUrl: "https://tigongolfcarts.com/orangeburg/",
      reviewUrl: "",
      city: "Orangeburg SC",
      type: "physical"
    },
    {
      name: "TIGON Swanton OH",
      address: "10420 AIrport Hwy, Swanton, OH 43558",
      phone: "419-402-8400",
      coordinates: "41.6013184, -83.7926472",
      googleMapsUrl: "https://www.google.com/maps?cid=16517552730289967239",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsSwanton/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsSwantonOH",
      websiteUrl: "https://tigongolfcarts.com/swanton/",
      reviewUrl: "https://g.page/r/CYeQt8exIjrlEBM/review",
      city: "Swanton OH",
      type: "physical"
    },
    {
      name: "TIGON Lecanto FL",
      address: "299 E. Gulf to Lake Hwy, Lecanto, FL 34461",
      phone: "352-453-0345",
      coordinates: "28.858622, -82.4295381",
      googleMapsUrl: "https://www.google.com/maps?cid=4773802157529013859",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsLecanto/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsLecantoFL",
      websiteUrl: "https://tigongolfcarts.com/lecanto/",
      reviewUrl: "https://g.page/r/CWOeggPF8z9CEBM/review",
      city: "Lecanto FL",
      type: "physical"
    },
    {
      name: "TIGON Long Pond PA",
      address: "4738 PA-115, Long Pond, PA 18334",
      phone: "570-580-0567",
      coordinates: "41.053988, -75.534146",
      googleMapsUrl: "https://www.google.com/maps?cid=11714838830522733253",
      facebookUrl: "",
      youtubeUrl: "",
      websiteUrl: "https://tigongolfcarts.com/long-pond/",
      reviewUrl: "",
      city: "Long Pond PA",
      type: "physical"
    },
    {
      name: "TIGON Pleasantville NJ",
      address: "7000 Black Horse Pike, Pleasantville, NJ 08232",
      phone: "640-444-3094",
      coordinates: "39.38812835576412, -74.5186949022294",
      googleMapsUrl: "https://www.google.com/maps?cid=7635149767591436869",
      facebookUrl: "https://www.facebook.com/TigonGolfCartPleasantville",
      youtubeUrl: "",
      websiteUrl: "https://tigongolfcarts.com/pleasantville/",
      reviewUrl: "https://g.page/r/CUWiMchCgPVpEBM/review",
      city: "Pleasantville NJ",
      type: "physical"
    },
    {
      name: "TIGON Portsmouth VA",
      address: "2008 Portsmouth Blvd, Portsmouth, VA 23704",
      phone: "757-977-0146",
      coordinates: "36.817786, -76.3235434",
      googleMapsUrl: "https://www.google.com/maps?cid=5113923461119431468",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsPortsmouthVA/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsPortsmouthVA",
      websiteUrl: "https://tigongolfcarts.com/portsmouth/",
      reviewUrl: "https://g.page/r/CSxTjwxLTvhGEBM/review",
      city: "Portsmouth VA",
      type: "physical"
    },
    {
      name: "TIGON Virginia Beach VA",
      address: "1101 Virginia Beach Blvd, Virginia Beach, VA 23451",
      phone: "1-844-844-6638",
      coordinates: "36.8414381, -75.9965854",
      googleMapsUrl: "https://www.google.com/maps?cid=17806490138133315425",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsVirginiaBeach/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsVirginiaBeachVA",
      websiteUrl: "https://tigongolfcarts.com/virginia-beach/",
      reviewUrl: "",
      city: "Virginia Beach VA",
      type: "physical"
    },
    {
      name: "TIGON National",
      address: "Serving all 50 states nationwide",
      phone: "1-844-844-6638",
      coordinates: "",
      googleMapsUrl: "https://www.google.com/maps?cid=913687030872245288",
      facebookUrl: "https://www.facebook.com/Tigongolfcarts",
      youtubeUrl: "https://www.youtube.com/@TigonGolfCarts",
      websiteUrl: "https://tigongolfcarts.com",
      reviewUrl: "https://g.page/r/CSiEBX-DEa4MEBM/review",
      city: "Nationwide",
      type: "online"
    }
  ];

  return (
    <>
      <EnhancedSEOHead config={createPageSEOConfig.showroom()} />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("showroom")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Neighborhood Golf Carts all 50 states Showroom
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit our premier Neptune City, New Jersey showroom featuring the complete lineup of DENAGO and EVOLUTION electric vehicles. 
            Serving the entire all 50 states from nationwide with 400+ beach locations.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">Our Locations</h2>
            <p className="text-xl text-gray-600">Serving the entire all 50 states with expert golf cart sales and service</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border border-gray-200 hover:border-theme-orange h-full">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-bold text-theme-primary mb-2 leading-tight">
                        <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-theme-orange transition-colors cursor-pointer">
                          {location.name}
                        </a>
                      </CardTitle>
                      <Badge className="bg-theme-orange text-white text-xs px-2 py-1">
                        {location.city} Location
                      </Badge>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-theme-orange mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{location.address}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-theme-orange flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-sm font-medium text-theme-primary hover:text-theme-orange transition-colors">
                        {location.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-theme-orange mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Business Hours</p>
                        <p className="text-gray-600 text-xs">Mon-Fri: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-xs">Sat: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-xs">Sun: CLOSED</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-3">
                      <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="w-full bg-theme-orange hover:bg-orange-600 text-white text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          Directions
                        </Button>
                      </a>
                      <a href={`tel:${location.phone}`}>
                        <Button size="sm" variant="outline" className="w-full border-theme-orange text-theme-orange hover:bg-orange-50 text-xs">
                          <Phone className="w-3 h-3 mr-1" />
                          Call Now
                        </Button>
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 pt-2 justify-center">
                      <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-500 hover:text-theme-orange transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {location.facebookUrl && (
                        <a href={location.facebookUrl} target="_blank" rel="noopener noreferrer"
                           className="text-gray-500 hover:text-blue-600 transition-colors">
                          <Facebook className="w-4 h-4" />
                        </a>
                      )}
                      {location.youtubeUrl && (
                        <a href={location.youtubeUrl} target="_blank" rel="noopener noreferrer"
                           className="text-gray-500 hover:text-red-600 transition-colors">
                          <Youtube className="w-4 h-4" />
                        </a>
                      )}
                      <a href={location.reviewUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-500 hover:text-yellow-500 transition-colors">
                        <Star className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">Showroom Services</h2>
            <p className="text-xl text-gray-600">Everything you need for your golf cart experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Test Drives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experience our golf carts firsthand with comprehensive test drives on our demonstration courses.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Expert Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our knowledgeable staff will help you choose the perfect golf cart for your specific needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Financing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Flexible financing solutions to make your golf cart purchase affordable and convenient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Areas We Serve</h2>
          <p className="text-xl text-gray-600 mb-8">
            We proudly serve customers throughout all Sussex County municipalities and surrounding Delaware areas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700">
            {SUSSEX_COUNTY_MUNICIPALITIES.map((municipality, index) => (
              <Link key={index} href={municipality.url}>
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-theme-orange">
                  <div className="font-medium text-theme-primary hover:text-theme-orange transition-colors">
                    {municipality.name}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {municipality.type}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Serving all of Sussex County including towns, cities, and surrounding Delaware communities
            </p>
            <Link href="/contact">
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Contact Us for Service in Your Area
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Visit Our Showroom?
          </h2>
          <p className="text-xl mb-8">
            Visit our TIGON Golf Carts showroom in Dover, DE, or call us to see our full inventory of DENAGO and EVOLUTION golf carts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Schedule Visit
              </Button>
            </Link>
            <a href="tel:1-844-844-6638">
              <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}