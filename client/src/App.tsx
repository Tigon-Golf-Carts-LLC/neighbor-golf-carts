import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";
import EcoImpactPage from "@/pages/EcoImpactPage";

// Delaware County Pages
import NewCastleCountyPage from "@/pages/counties/NewCastleCountyPage";
import KentCountyPage from "@/pages/counties/KentCountyPage";
import SussexCountyPage from "@/pages/counties/SussexCountyPage";

// New Castle County Location Pages
import {
  ArdenPage,
  ArdencroftPage,
  ArdentownPage,
  BellefontePage,
  ClaytonPage,
  DelawareCityPage,
  ElsmerePage,
  MiddletownPage,
  NewCastlePage,
  NewarkPage,
  NewportPage,
  OdessaPage,
  SmyrnaPage,
  TownsendPage,
  WilmingtonPage
} from "@/pages/locations/NewCastleCountyLocationPages";

// Kent County Location Pages
import {
  BowersPage,
  CamdenPage,
  CheswoldPage,
  DoverPage,
  FarmingtonPage,
  FeltonPage,
  FredericaPage,
  HarringtonPage,
  HartlyPage,
  HoustonPage,
  KentonPage,
  LeipsicPage,
  LittleCreekPage,
  MagnoliaPage,
  MilfordKentPage,
  ViolaPage,
  WoodsidePage,
  WyomingPage
} from "@/pages/locations/KentCountyLocationPages";

// Sussex County Location Pages
import {
  BethanyBeachPage,
  BethelPage,
  BladesPage,
  BridgevillePage,
  DagsboroPage,
  DelmarPage,
  DeweyBeachPage,
  EllendalesPage,
  FenwickIslandPage,
  FrankfordPage,
  GeorgetownPage,
  GreenwoodPage,
  HenlopenAcresPage,
  LaurelPage,
  LewesPage,
  MilfordPage,
  MillsboroPage,
  MillvillePage,
  MiltonPage,
  OceanViewPage,
  RehobothBeachPage,
  SeafordPage,
  SelbyvillePage,
  SlaughterBeachPage,
  SouthBethanyPage
} from "@/pages/locations/SussexCountyLocationPages";

import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";

// Policy Pages
import TermsConditionsPage from "@/pages/policies/TermsConditionsPage";
import ReturnPolicyPage from "@/pages/policies/ReturnPolicyPage";
import DeliveryPolicyPage from "@/pages/policies/DeliveryPolicyPage";
import RentalPolicyPage from "@/pages/policies/RentalPolicyPage";
import StoragePolicyPage from "@/pages/policies/StoragePolicyPage";
import PublishingPolicyPage from "@/pages/policies/PublishingPolicyPage";
import FeedbackPolicyPage from "@/pages/policies/FeedbackPolicyPage";
import CorrectionsPolicyPage from "@/pages/policies/CorrectionsPolicyPage";
import DiversityPolicyPage from "@/pages/policies/DiversityPolicyPage";
import EthicsPolicyPage from "@/pages/policies/EthicsPolicyPage";
import StaffingReportPage from "@/pages/policies/StaffingReportPage";

// Sussex County Municipality Pages - All 27 location pages created
// Complete coverage of every municipality in Sussex County, Delaware

// Note: Individual vehicle detail pages removed - using dynamic VehicleDetailPage instead

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

queryClient.setQueryDefaults(['get'], { queryFn: ({ queryKey }) => fetcher(queryKey[0] as string) });

export default function App() {
  useScrollToTop();

  return (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />
            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/vehicles/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/eco-impact" component={EcoImpactPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />
            
            {/* Delaware County Pages */}
            <Route path="/new-castle-county-golf-carts" component={NewCastleCountyPage} />
            <Route path="/kent-county-golf-carts" component={KentCountyPage} />
            <Route path="/sussex-county-golf-carts" component={SussexCountyPage} />

            {/* Policy Pages */}
            <Route path="/policies/terms-conditions" component={TermsConditionsPage} />
            <Route path="/policies/return-policy" component={ReturnPolicyPage} />
            <Route path="/policies/delivery-policy" component={DeliveryPolicyPage} />
            <Route path="/policies/rental-policy" component={RentalPolicyPage} />
            <Route path="/policies/storage-policy" component={StoragePolicyPage} />
            <Route path="/policies/publishing-policy" component={PublishingPolicyPage} />
            <Route path="/policies/feedback-policy" component={FeedbackPolicyPage} />
            <Route path="/policies/corrections-policy" component={CorrectionsPolicyPage} />
            <Route path="/policies/diversity-policy" component={DiversityPolicyPage} />
            <Route path="/policies/ethics-policy" component={EthicsPolicyPage} />
            <Route path="/policies/staffing-report" component={StaffingReportPage} />

            {/* New Castle County Municipality Pages - All 15 locations */}
            <Route path="/arden-golf-carts" component={ArdenPage} />
            <Route path="/ardencroft-golf-carts" component={ArdencroftPage} />
            <Route path="/ardentown-golf-carts" component={ArdentownPage} />
            <Route path="/bellefonte-golf-carts" component={BellefontePage} />
            <Route path="/clayton-golf-carts" component={ClaytonPage} />
            <Route path="/delaware-city-golf-carts" component={DelawareCityPage} />
            <Route path="/elsmere-golf-carts" component={ElsmerePage} />
            <Route path="/middletown-golf-carts" component={MiddletownPage} />
            <Route path="/new-castle-golf-carts" component={NewCastlePage} />
            <Route path="/newark-golf-carts" component={NewarkPage} />
            <Route path="/newport-golf-carts" component={NewportPage} />
            <Route path="/odessa-golf-carts" component={OdessaPage} />
            <Route path="/smyrna-golf-carts" component={SmyrnaPage} />
            <Route path="/townsend-golf-carts" component={TownsendPage} />
            <Route path="/wilmington-golf-carts" component={WilmingtonPage} />

            {/* Kent County Municipality Pages - All 18 locations */}
            <Route path="/bowers-golf-carts" component={BowersPage} />
            <Route path="/camden-golf-carts" component={CamdenPage} />
            <Route path="/cheswold-golf-carts" component={CheswoldPage} />
            <Route path="/dover-golf-carts" component={DoverPage} />
            <Route path="/farmington-golf-carts" component={FarmingtonPage} />
            <Route path="/felton-golf-carts" component={FeltonPage} />
            <Route path="/frederica-golf-carts" component={FredericaPage} />
            <Route path="/harrington-golf-carts" component={HarringtonPage} />
            <Route path="/hartly-golf-carts" component={HartlyPage} />
            <Route path="/houston-golf-carts" component={HoustonPage} />
            <Route path="/kenton-golf-carts" component={KentonPage} />
            <Route path="/leipsic-golf-carts" component={LeipsicPage} />
            <Route path="/little-creek-golf-carts" component={LittleCreekPage} />
            <Route path="/magnolia-golf-carts" component={MagnoliaPage} />
            <Route path="/milford-golf-carts-kent" component={MilfordKentPage} />
            <Route path="/viola-golf-carts" component={ViolaPage} />
            <Route path="/woodside-golf-carts" component={WoodsidePage} />
            <Route path="/wyoming-golf-carts" component={WyomingPage} />

            {/* Sussex County Municipality Pages - All 24 locations */}
            <Route path="/bethany-beach-golf-carts" component={BethanyBeachPage} />
            <Route path="/bethel-golf-carts" component={BethelPage} />
            <Route path="/blades-golf-carts" component={BladesPage} />
            <Route path="/bridgeville-golf-carts" component={BridgevillePage} />
            <Route path="/dagsboro-golf-carts" component={DagsboroPage} />
            <Route path="/delmar-golf-carts" component={DelmarPage} />
            <Route path="/dewey-beach-golf-carts" component={DeweyBeachPage} />
            <Route path="/ellendale-golf-carts" component={EllendalesPage} />
            <Route path="/fenwick-island-golf-carts" component={FenwickIslandPage} />
            <Route path="/frankford-golf-carts" component={FrankfordPage} />
            <Route path="/georgetown-golf-carts" component={GeorgetownPage} />
            <Route path="/greenwood-golf-carts" component={GreenwoodPage} />
            <Route path="/henlopen-acres-golf-carts" component={HenlopenAcresPage} />
            <Route path="/laurel-golf-carts" component={LaurelPage} />
            <Route path="/lewes-golf-carts" component={LewesPage} />
            <Route path="/milford-golf-carts" component={MilfordPage} />
            <Route path="/millsboro-golf-carts" component={MillsboroPage} />
            <Route path="/millville-golf-carts" component={MillvillePage} />
            <Route path="/milton-golf-carts" component={MiltonPage} />
            <Route path="/ocean-view-golf-carts" component={OceanViewPage} />
            <Route path="/rehoboth-beach-golf-carts" component={RehobothBeachPage} />
            <Route path="/seaford-golf-carts" component={SeafordPage} />
            <Route path="/selbyville-golf-carts" component={SelbyvillePage} />
            <Route path="/slaughter-beach-golf-carts" component={SlaughterBeachPage} />
            <Route path="/south-bethany-golf-carts" component={SouthBethanyPage} />

            {/* All vehicle detail pages handled by dynamic VehicleDetailPage component */}

            {/* 404 Page */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  </HelmetProvider>
  );
}