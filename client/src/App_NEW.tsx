import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useEffect } from "react";
import { initGA } from "@/lib/analytics";
import { useAnalytics } from "@/hooks/use-analytics";
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
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";

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

// All 50 States Pages
import {
  AlabamaPage, AlaskaPage, ArizonaPage, ArkansasPage, CaliforniaPage,
  ColoradoPage, ConnecticutPage, DelawarePage, FloridaPage, GeorgiaPage,
  HawaiiPage, IdahoPage, IllinoisPage, IndianaPage, IowaPage,
  KansasPage, KentuckyPage, LouisianaPage, MainePage, MarylandPage,
  MassachusettsPage, MichiganPage, MinnesotaPage, MississippiPage, MissouriPage,
  MontanaPage, NebraskaPage, NevadaPage, NewHampshirePage, NewJerseyPage,
  NewMexicoPage, NewYorkPage, NorthCarolinaPage, NorthDakotaPage, OhioPage,
  OklahomaPage, OregonPage, PennsylvaniaPage, RhodeIslandPage, SouthCarolinaPage,
  SouthDakotaPage, TennesseePage, TexasPage, UtahPage, VermontPage,
  VirginiaPage, WashingtonPage, WestVirginiaPage, WisconsinPage, WyomingPage
} from "@/pages/locations/All50StatePages";

// All Beach Location Pages
import {
  // Maine beaches
  MaineOldOrchardBeachPage, MaineKennebunkportPage, MaineBarHarborPage, MaineCamdenPage,
  MainePemaquidBeachPage, MainePophamBeachPage, MaineWellsBeachPage, MaineYorkBeachPage,
  MaineOgunquitPage, MaineBoothbayHarborPage, MaineAcadiaNationalParkPage, MainePortlandPage,
  // New Hampshire beaches
  NewHampshireHamptonBeachPage, NewHampshireSeabrookBeachPage, NewHampshireRyeBeachPage,
  NewHampshireNorthBeachPage, NewHampshireWallisSandsStateBeachPage, NewHampshirePortsmouthPage,
  // Massachusetts beaches
  MassachusettsCapecodPage, MassachusettsMarthasVineyardPage, MassachusettsNantucketPage,
  MassachusettsProvincetownPage, MassachusettsChathamPage, MassachusettsHyannisPage,
  MassachusettsFalmouthPage, MassachusettsGloucesterPage, MassachusettsSalemPage,
  MassachusettsNewburyportPage, MassachusettsRevereBeachPage, MassachusettsNahantBeachPage,
  MassachusettsDuxburyBeachPage, MassachusettsPlymouthBeachPage,
  // Rhode Island beaches
  RhodeIslandNewportPage, RhodeIslandNarragansettPage, RhodeIslandWatchHillPage,
  RhodeIslandWesterlyPage, RhodeIslandBlockIslandPage, RhodeIslandMisquamicutBeachPage,
  RhodeIslandScarboroughBeachPage, RhodeIslandEastBeachPage, RhodeIslandSecondBeachPage,
  RhodeIslandFirstBeachPage
} from "@/pages/locations/BeachLocationPages";

import {
  // Connecticut beaches
  ConnecticutMysticPage, ConnecticutNewLondonPage, ConnecticutOldSaybrookPage,
  ConnecticutMadisonPage, ConnecticutGuilfordPage, ConnecticutBranfordPage,
  ConnecticutEastHavenPage, ConnecticutMilfordPage, ConnecticutStratfordPage,
  ConnecticutBridgeportPage, ConnecticutNorwalkPage, ConnecticutStamfordPage,
  // New York beaches
  NewYorkConeyIslandPage, NewYorkBrightonBeachPage, NewYorkRockawayBeachPage,
  NewYorkJonesBeachPage, NewYorkFireIslandPage, NewYorkTheHamptonsPage,
  NewYorkMontaukPage, NewYorkSagHarborPage, NewYorkSouthamptonPage,
  NewYorkEastHamptonPage, NewYorkWesthamptonPage, NewYorkLongBeachPage,
  NewYorkOrchardBeachPage,
  // New Jersey beaches
  NewJerseyAtlanticCityPage, NewJerseyCapeMAyPage, NewJerseyOceanCityPage,
  NewJerseyWildwoodPage, NewJerseySeasideHeightsPage, NewJerseyAsburyParkPage,
  NewJerseyPointPleasantPage, NewJerseyLongBeachIslandPage, NewJerseyBelmarPage,
  NewJerseySpringLakePage, NewJerseyAvonByTheSeaPage, NewJerseyBradleyBeachPage,
  NewJerseyManasquanPage,
  // Delaware beaches
  DelawareRehobothBeachPage, DelawareBethanyBeachPage, DelawareDeweyBeachPage,
  DelawareFenwickIslandPage, DelawareLewesPage, DelawareCapeHenlopenPage,
  // Maryland beaches
  MarylandOceanCityPage, MarylandAssateagueIslandPage, MarylandCambridgePage,
  MarylandStMichaelsPage, MarylandAnnapolisPage, MarylandBaltimorePage,
  MarylandHavreDeGracePage, MarylandChesapeakeBeachPage,
  // Virginia beaches
  VirginiaVirginiaBeachPage, VirginiaNorfolkPage, VirginiaNewportNewsPage,
  VirginiaHamptonPage, VirginiaPortsmouthPage, VirginiaChesapeakePage,
  VirginiaSandbridgePage, VirginiaChincoteaguePage, VirginiaWilliamsburgPage,
  // North Carolina beaches
  NorthCarolinaOuterBanksPage, NorthCarolinaNagsHeadPage, NorthCarolinaDuckPage,
  NorthCarolinaKittyHawkPage, NorthCarolinaKillDevilHillsPage, NorthCarolinaCapeHatterasPage,
  NorthCarolinaOcracokePage, NorthCarolinaWrightsvilleBeachPage, NorthCarolinaCarolinaBeachPage,
  NorthCarolinaKureBeachPage, NorthCarolinaWilmingtonPage, NorthCarolinaSunsetBeachPage,
  NorthCarolinaOceanIsleBeachPage,
  // South Carolina beaches
  SouthCarolinaMyrtleBeachPage, SouthCarolinaCharlestonPage, SouthCarolinaHiltonHeadPage,
  SouthCarolinaKiawahIslandPage, SouthCarolinaFollyBeachPage, SouthCarolinaIsleOfPalmsPage,
  SouthCarolinaSullivansIslandPage, SouthCarolinaPawleysIslandPage, SouthCarolinaGardenCityPage,
  SouthCarolinaSurfsideBeachPage, SouthCarolinaNorthMyrtleBeachPage, SouthCarolinaBeaufortPage,
  // Georgia beaches
  GeorgiaSavannahPage, GeorgiaTybeeIslandPage, GeorgiaJekyllIslandPage,
  GeorgiaStSimonsIslandPage, GeorgiaSeaIslandPage, GeorgiaCumberlandIslandPage,
  GeorgiaLittleStSimonsIslandPage, GeorgiaBrunswickPage, GeorgiaStMarysPage,
  // Florida beaches
  FloridaMiamiBeachPage, FloridaFortLauderdalePage, FloridaDaytonaBeachPage,
  FloridaJacksonvillePage, FloridaStAugustinePage, FloridaFernandinaBeachPage,
  FloridaNeptuneBeachPage, FloridaAtlanticBeachPage, FloridaPonteVedraBeachPage,
  FloridaOrmondBeachPage, FloridaNewSmyrnaBeachPage, FloridaCocoaBeachPage,
  FloridaMelbourneBeachPage, FloridaVeroBeachPage, FloridaFortPiercePage,
  FloridaStuartPage, FloridaJupiterPage, FloridaWestPalmBeachPage,
  FloridaBocaRatonPage, FloridaDeerfieldBeachPage, FloridaPompanoBeachPage,
  FloridaHollywoodPage, FloridaHallendaleBeachPage
} from "@/pages/locations/AllBeachPages";

// Vehicle Detail Pages
import DenagoEvCityPage from "@/pages/vehicles/DenagoEvCityPage";
import DenagoEvNomadPage from "@/pages/vehicles/DenagoEvNomadPage";
import DenagoEvNomadXlPage from "@/pages/vehicles/DenagoEvNomadXlPage";
import DenagoEvRoverXlPage from "@/pages/vehicles/DenagoEvRoverXlPage";
import DenagoEvRoverXl6Page from "@/pages/vehicles/DenagoEvRoverXl6Page";
import DenagoEvRoverXxlPage from "@/pages/vehicles/DenagoEvRoverXxlPage";
import EvolutionD5Ranger4PlusPage from "@/pages/vehicles/EvolutionD5Ranger4PlusPage";
import EvolutionD5Ranger6PlusPage from "@/pages/vehicles/EvolutionD5Ranger6PlusPage";
import EvolutionD5Maverick4PlusPage from "@/pages/vehicles/EvolutionD5Maverick4PlusPage";
import EvolutionClassic4PlusPage from "@/pages/vehicles/EvolutionClassic4PlusPage";
import EvolutionCarrier6PlusPage from "@/pages/vehicles/EvolutionCarrier6PlusPage";
import EvolutionD6MaxXt4Page from "@/pages/vehicles/EvolutionD6MaxXt4Page";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function Router() {
  useAnalytics();
  useScrollToTop();

  return (
    <main className="flex-1">
      <Switch>
            {/* Main Pages */}
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />

            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />
            
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
            
            {/* Blog Pages */}
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={BlogPost} />
            
            {/* All 50 States Pages */}
            <Route path="/alabama-golf-carts" component={AlabamaPage} />
            <Route path="/alaska-golf-carts" component={AlaskaPage} />
            <Route path="/arizona-golf-carts" component={ArizonaPage} />
            <Route path="/arkansas-golf-carts" component={ArkansasPage} />
            <Route path="/california-golf-carts" component={CaliforniaPage} />
            <Route path="/colorado-golf-carts" component={ColoradoPage} />
            <Route path="/connecticut-golf-carts" component={ConnecticutPage} />
            <Route path="/delaware-golf-carts" component={DelawarePage} />
            <Route path="/florida-golf-carts" component={FloridaPage} />
            <Route path="/georgia-golf-carts" component={GeorgiaPage} />
            <Route path="/hawaii-golf-carts" component={HawaiiPage} />
            <Route path="/idaho-golf-carts" component={IdahoPage} />
            <Route path="/illinois-golf-carts" component={IllinoisPage} />
            <Route path="/indiana-golf-carts" component={IndianaPage} />
            <Route path="/iowa-golf-carts" component={IowaPage} />
            <Route path="/kansas-golf-carts" component={KansasPage} />
            <Route path="/kentucky-golf-carts" component={KentuckyPage} />
            <Route path="/louisiana-golf-carts" component={LouisianaPage} />
            <Route path="/maine-golf-carts" component={MainePage} />
            <Route path="/maryland-golf-carts" component={MarylandPage} />
            <Route path="/massachusetts-golf-carts" component={MassachusettsPage} />
            <Route path="/michigan-golf-carts" component={MichiganPage} />
            <Route path="/minnesota-golf-carts" component={MinnesotaPage} />
            <Route path="/mississippi-golf-carts" component={MississippiPage} />
            <Route path="/missouri-golf-carts" component={MissouriPage} />
            <Route path="/montana-golf-carts" component={MontanaPage} />
            <Route path="/nebraska-golf-carts" component={NebraskaPage} />
            <Route path="/nevada-golf-carts" component={NevadaPage} />
            <Route path="/new-hampshire-golf-carts" component={NewHampshirePage} />
            <Route path="/new-jersey-golf-carts" component={NewJerseyPage} />
            <Route path="/new-mexico-golf-carts" component={NewMexicoPage} />
            <Route path="/new-york-golf-carts" component={NewYorkPage} />
            <Route path="/north-carolina-golf-carts" component={NorthCarolinaPage} />
            <Route path="/north-dakota-golf-carts" component={NorthDakotaPage} />
            <Route path="/ohio-golf-carts" component={OhioPage} />
            <Route path="/oklahoma-golf-carts" component={OklahomaPage} />
            <Route path="/oregon-golf-carts" component={OregonPage} />
            <Route path="/pennsylvania-golf-carts" component={PennsylvaniaPage} />
            <Route path="/rhode-island-golf-carts" component={RhodeIslandPage} />
            <Route path="/south-carolina-golf-carts" component={SouthCarolinaPage} />
            <Route path="/south-dakota-golf-carts" component={SouthDakotaPage} />
            <Route path="/tennessee-golf-carts" component={TennesseePage} />
            <Route path="/texas-golf-carts" component={TexasPage} />
            <Route path="/utah-golf-carts" component={UtahPage} />
            <Route path="/vermont-golf-carts" component={VermontPage} />
            <Route path="/virginia-golf-carts" component={VirginiaPage} />
            <Route path="/washington-golf-carts" component={WashingtonPage} />
            <Route path="/west-virginia-golf-carts" component={WestVirginiaPage} />
            <Route path="/wisconsin-golf-carts" component={WisconsinPage} />
            <Route path="/wyoming-golf-carts" component={WyomingPage} />
            
            {/* Maine Beach Pages */}
            <Route path="/maine/old-orchard-beach-golf-carts" component={MaineOldOrchardBeachPage} />
            <Route path="/maine/kennebunkport-golf-carts" component={MaineKennebunkportPage} />
            <Route path="/maine/bar-harbor-golf-carts" component={MaineBarHarborPage} />
            <Route path="/maine/camden-golf-carts" component={MaineCamdenPage} />
            <Route path="/maine/pemaquid-beach-golf-carts" component={MainePemaquidBeachPage} />
            <Route path="/maine/popham-beach-golf-carts" component={MainePophamBeachPage} />
            <Route path="/maine/wells-beach-golf-carts" component={MaineWellsBeachPage} />
            <Route path="/maine/york-beach-golf-carts" component={MaineYorkBeachPage} />
            <Route path="/maine/ogunquit-golf-carts" component={MaineOgunquitPage} />
            <Route path="/maine/boothbay-harbor-golf-carts" component={MaineBoothbayHarborPage} />
            <Route path="/maine/acadia-national-park-golf-carts" component={MaineAcadiaNationalParkPage} />
            <Route path="/maine/portland-golf-carts" component={MainePortlandPage} />
            
            {/* New Hampshire Beach Pages */}
            <Route path="/new-hampshire/hampton-beach-golf-carts" component={NewHampshireHamptonBeachPage} />
            <Route path="/new-hampshire/seabrook-beach-golf-carts" component={NewHampshireSeabrookBeachPage} />
            <Route path="/new-hampshire/rye-beach-golf-carts" component={NewHampshireRyeBeachPage} />
            <Route path="/new-hampshire/north-beach-golf-carts" component={NewHampshireNorthBeachPage} />
            <Route path="/new-hampshire/wallis-sands-state-beach-golf-carts" component={NewHampshireWallisSandsStateBeachPage} />
            <Route path="/new-hampshire/portsmouth-golf-carts" component={NewHampshirePortsmouthPage} />
            
            {/* Massachusetts Beach Pages */}
            <Route path="/massachusetts/cape-cod-golf-carts" component={MassachusettsCapecodPage} />
            <Route path="/massachusetts/marthas-vineyard-golf-carts" component={MassachusettsMarthasVineyardPage} />
            <Route path="/massachusetts/nantucket-golf-carts" component={MassachusettsNantucketPage} />
            <Route path="/massachusetts/provincetown-golf-carts" component={MassachusettsProvincetownPage} />
            <Route path="/massachusetts/chatham-golf-carts" component={MassachusettsChathamPage} />
            <Route path="/massachusetts/hyannis-golf-carts" component={MassachusettsHyannisPage} />
            <Route path="/massachusetts/falmouth-golf-carts" component={MassachusettsFalmouthPage} />
            <Route path="/massachusetts/gloucester-golf-carts" component={MassachusettsGloucesterPage} />
            <Route path="/massachusetts/salem-golf-carts" component={MassachusettsSalemPage} />
            <Route path="/massachusetts/newburyport-golf-carts" component={MassachusettsNewburyportPage} />
            <Route path="/massachusetts/revere-beach-golf-carts" component={MassachusettsRevereBeachPage} />
            <Route path="/massachusetts/nahant-beach-golf-carts" component={MassachusettsNahantBeachPage} />
            <Route path="/massachusetts/duxbury-beach-golf-carts" component={MassachusettsDuxburyBeachPage} />
            <Route path="/massachusetts/plymouth-beach-golf-carts" component={MassachusettsPlymouthBeachPage} />
            
            {/* Rhode Island Beach Pages */}
            <Route path="/rhode-island/newport-golf-carts" component={RhodeIslandNewportPage} />
            <Route path="/rhode-island/narragansett-golf-carts" component={RhodeIslandNarragansettPage} />
            <Route path="/rhode-island/watch-hill-golf-carts" component={RhodeIslandWatchHillPage} />
            <Route path="/rhode-island/westerly-golf-carts" component={RhodeIslandWesterlyPage} />
            <Route path="/rhode-island/block-island-golf-carts" component={RhodeIslandBlockIslandPage} />
            <Route path="/rhode-island/misquamicut-beach-golf-carts" component={RhodeIslandMisquamicutBeachPage} />
            <Route path="/rhode-island/scarborough-beach-golf-carts" component={RhodeIslandScarboroughBeachPage} />
            <Route path="/rhode-island/east-beach-golf-carts" component={RhodeIslandEastBeachPage} />
            <Route path="/rhode-island/second-beach-golf-carts" component={RhodeIslandSecondBeachPage} />
            <Route path="/rhode-island/first-beach-golf-carts" component={RhodeIslandFirstBeachPage} />
            
            {/* Connecticut Beach Pages */}
            <Route path="/connecticut/mystic-golf-carts" component={ConnecticutMysticPage} />
            <Route path="/connecticut/new-london-golf-carts" component={ConnecticutNewLondonPage} />
            <Route path="/connecticut/old-saybrook-golf-carts" component={ConnecticutOldSaybrookPage} />
            <Route path="/connecticut/madison-golf-carts" component={ConnecticutMadisonPage} />
            <Route path="/connecticut/guilford-golf-carts" component={ConnecticutGuilfordPage} />
            <Route path="/connecticut/branford-golf-carts" component={ConnecticutBranfordPage} />
            <Route path="/connecticut/east-haven-golf-carts" component={ConnecticutEastHavenPage} />
            <Route path="/connecticut/milford-golf-carts" component={ConnecticutMilfordPage} />
            <Route path="/connecticut/stratford-golf-carts" component={ConnecticutStratfordPage} />
            <Route path="/connecticut/bridgeport-golf-carts" component={ConnecticutBridgeportPage} />
            <Route path="/connecticut/norwalk-golf-carts" component={ConnecticutNorwalkPage} />
            <Route path="/connecticut/stamford-golf-carts" component={ConnecticutStamfordPage} />
            
            {/* New York Beach Pages */}
            <Route path="/new-york/coney-island-golf-carts" component={NewYorkConeyIslandPage} />
            <Route path="/new-york/brighton-beach-golf-carts" component={NewYorkBrightonBeachPage} />
            <Route path="/new-york/rockaway-beach-golf-carts" component={NewYorkRockawayBeachPage} />
            <Route path="/new-york/jones-beach-golf-carts" component={NewYorkJonesBeachPage} />
            <Route path="/new-york/fire-island-golf-carts" component={NewYorkFireIslandPage} />
            <Route path="/new-york/the-hamptons-golf-carts" component={NewYorkTheHamptonsPage} />
            <Route path="/new-york/montauk-golf-carts" component={NewYorkMontaukPage} />
            <Route path="/new-york/sag-harbor-golf-carts" component={NewYorkSagHarborPage} />
            <Route path="/new-york/southampton-golf-carts" component={NewYorkSouthamptonPage} />
            <Route path="/new-york/east-hampton-golf-carts" component={NewYorkEastHamptonPage} />
            <Route path="/new-york/westhampton-golf-carts" component={NewYorkWesthamptonPage} />
            <Route path="/new-york/long-beach-golf-carts" component={NewYorkLongBeachPage} />
            <Route path="/new-york/orchard-beach-golf-carts" component={NewYorkOrchardBeachPage} />
            
            {/* New Jersey Beach Pages */}
            <Route path="/new-jersey/atlantic-city-golf-carts" component={NewJerseyAtlanticCityPage} />
            <Route path="/new-jersey/cape-may-golf-carts" component={NewJerseyCapeMAyPage} />
            <Route path="/new-jersey/ocean-city-golf-carts" component={NewJerseyOceanCityPage} />
            <Route path="/new-jersey/wildwood-golf-carts" component={NewJerseyWildwoodPage} />
            <Route path="/new-jersey/seaside-heights-golf-carts" component={NewJerseySeasideHeightsPage} />
            <Route path="/new-jersey/asbury-park-golf-carts" component={NewJerseyAsburyParkPage} />
            <Route path="/new-jersey/point-pleasant-golf-carts" component={NewJerseyPointPleasantPage} />
            <Route path="/new-jersey/long-beach-island-golf-carts" component={NewJerseyLongBeachIslandPage} />
            <Route path="/new-jersey/belmar-golf-carts" component={NewJerseyBelmarPage} />
            <Route path="/new-jersey/spring-lake-golf-carts" component={NewJerseySpringLakePage} />
            <Route path="/new-jersey/avon-by-the-sea-golf-carts" component={NewJerseyAvonByTheSeaPage} />
            <Route path="/new-jersey/bradley-beach-golf-carts" component={NewJerseyBradleyBeachPage} />
            <Route path="/new-jersey/manasquan-golf-carts" component={NewJerseyManasquanPage} />
            
            {/* Delaware Beach Pages */}
            <Route path="/delaware/rehoboth-beach-golf-carts" component={DelawareRehobothBeachPage} />
            <Route path="/delaware/bethany-beach-golf-carts" component={DelawareBethanyBeachPage} />
            <Route path="/delaware/dewey-beach-golf-carts" component={DelawareDeweyBeachPage} />
            <Route path="/delaware/fenwick-island-golf-carts" component={DelawareFenwickIslandPage} />
            <Route path="/delaware/lewes-golf-carts" component={DelawareLewesPage} />
            <Route path="/delaware/cape-henlopen-golf-carts" component={DelawareCapeHenlopenPage} />
            
            {/* Maryland Beach Pages */}
            <Route path="/maryland/ocean-city-golf-carts" component={MarylandOceanCityPage} />
            <Route path="/maryland/assateague-island-golf-carts" component={MarylandAssateagueIslandPage} />
            <Route path="/maryland/cambridge-golf-carts" component={MarylandCambridgePage} />
            <Route path="/maryland/st-michaels-golf-carts" component={MarylandStMichaelsPage} />
            <Route path="/maryland/annapolis-golf-carts" component={MarylandAnnapolisPage} />
            <Route path="/maryland/baltimore-golf-carts" component={MarylandBaltimorePage} />
            <Route path="/maryland/havre-de-grace-golf-carts" component={MarylandHavreDeGracePage} />
            <Route path="/maryland/chesapeake-beach-golf-carts" component={MarylandChesapeakeBeachPage} />
            
            {/* Virginia Beach Pages */}
            <Route path="/virginia/virginia-beach-golf-carts" component={VirginiaVirginiaBeachPage} />
            <Route path="/virginia/norfolk-golf-carts" component={VirginiaNorfolkPage} />
            <Route path="/virginia/newport-news-golf-carts" component={VirginiaNewportNewsPage} />
            <Route path="/virginia/hampton-golf-carts" component={VirginiaHamptonPage} />
            <Route path="/virginia/portsmouth-golf-carts" component={VirginiaPortsmouthPage} />
            <Route path="/virginia/chesapeake-golf-carts" component={VirginiaChesapeakePage} />
            <Route path="/virginia/sandbridge-golf-carts" component={VirginiaSandbridgePage} />
            <Route path="/virginia/chincoteague-golf-carts" component={VirginiaChincoteaguePage} />
            <Route path="/virginia/williamsburg-golf-carts" component={VirginiaWilliamsburgPage} />
            
            {/* North Carolina Beach Pages */}
            <Route path="/north-carolina/outer-banks-golf-carts" component={NorthCarolinaOuterBanksPage} />
            <Route path="/north-carolina/nags-head-golf-carts" component={NorthCarolinaNagsHeadPage} />
            <Route path="/north-carolina/duck-golf-carts" component={NorthCarolinaDuckPage} />
            <Route path="/north-carolina/kitty-hawk-golf-carts" component={NorthCarolinaKittyHawkPage} />
            <Route path="/north-carolina/kill-devil-hills-golf-carts" component={NorthCarolinaKillDevilHillsPage} />
            <Route path="/north-carolina/cape-hatteras-golf-carts" component={NorthCarolinaCapeHatterasPage} />
            <Route path="/north-carolina/ocracoke-golf-carts" component={NorthCarolinaOcracokePage} />
            <Route path="/north-carolina/wrightsville-beach-golf-carts" component={NorthCarolinaWrightsvilleBeachPage} />
            <Route path="/north-carolina/carolina-beach-golf-carts" component={NorthCarolinaCarolinaBeachPage} />
            <Route path="/north-carolina/kure-beach-golf-carts" component={NorthCarolinaKureBeachPage} />
            <Route path="/north-carolina/wilmington-golf-carts" component={NorthCarolinaWilmingtonPage} />
            <Route path="/north-carolina/sunset-beach-golf-carts" component={NorthCarolinaSunsetBeachPage} />
            <Route path="/north-carolina/ocean-isle-beach-golf-carts" component={NorthCarolinaOceanIsleBeachPage} />
            
            {/* South Carolina Beach Pages */}
            <Route path="/south-carolina/myrtle-beach-golf-carts" component={SouthCarolinaMyrtleBeachPage} />
            <Route path="/south-carolina/charleston-golf-carts" component={SouthCarolinaCharlestonPage} />
            <Route path="/south-carolina/hilton-head-golf-carts" component={SouthCarolinaHiltonHeadPage} />
            <Route path="/south-carolina/kiawah-island-golf-carts" component={SouthCarolinaKiawahIslandPage} />
            <Route path="/south-carolina/folly-beach-golf-carts" component={SouthCarolinaFollyBeachPage} />
            <Route path="/south-carolina/isle-of-palms-golf-carts" component={SouthCarolinaIsleOfPalmsPage} />
            <Route path="/south-carolina/sullivans-island-golf-carts" component={SouthCarolinaSullivansIslandPage} />
            <Route path="/south-carolina/pawleys-island-golf-carts" component={SouthCarolinaPawleysIslandPage} />
            <Route path="/south-carolina/garden-city-golf-carts" component={SouthCarolinaGardenCityPage} />
            <Route path="/south-carolina/surfside-beach-golf-carts" component={SouthCarolinaSurfsideBeachPage} />
            <Route path="/south-carolina/north-myrtle-beach-golf-carts" component={SouthCarolinaNorthMyrtleBeachPage} />
            <Route path="/south-carolina/beaufort-golf-carts" component={SouthCarolinaBeaufortPage} />
            
            {/* Georgia Beach Pages */}
            <Route path="/georgia/savannah-golf-carts" component={GeorgiaSavannahPage} />
            <Route path="/georgia/tybee-island-golf-carts" component={GeorgiaTybeeIslandPage} />
            <Route path="/georgia/jekyll-island-golf-carts" component={GeorgiaJekyllIslandPage} />
            <Route path="/georgia/st-simons-island-golf-carts" component={GeorgiaStSimonsIslandPage} />
            <Route path="/georgia/sea-island-golf-carts" component={GeorgiaSeaIslandPage} />
            <Route path="/georgia/cumberland-island-golf-carts" component={GeorgiaCumberlandIslandPage} />
            <Route path="/georgia/little-st-simons-island-golf-carts" component={GeorgiaLittleStSimonsIslandPage} />
            <Route path="/georgia/brunswick-golf-carts" component={GeorgiaBrunswickPage} />
            <Route path="/georgia/st-marys-golf-carts" component={GeorgiaStMarysPage} />
            
            {/* Florida Beach Pages */}
            <Route path="/florida/miami-beach-golf-carts" component={FloridaMiamiBeachPage} />
            <Route path="/florida/fort-lauderdale-golf-carts" component={FloridaFortLauderdalePage} />
            <Route path="/florida/daytona-beach-golf-carts" component={FloridaDaytonaBeachPage} />
            <Route path="/florida/jacksonville-golf-carts" component={FloridaJacksonvillePage} />
            <Route path="/florida/st-augustine-golf-carts" component={FloridaStAugustinePage} />
            <Route path="/florida/fernandina-beach-golf-carts" component={FloridaFernandinaBeachPage} />
            <Route path="/florida/neptune-beach-golf-carts" component={FloridaNeptuneBeachPage} />
            <Route path="/florida/atlantic-beach-golf-carts" component={FloridaAtlanticBeachPage} />
            <Route path="/florida/ponte-vedra-beach-golf-carts" component={FloridaPonteVedraBeachPage} />
            <Route path="/florida/ormond-beach-golf-carts" component={FloridaOrmondBeachPage} />
            <Route path="/florida/new-smyrna-beach-golf-carts" component={FloridaNewSmyrnaBeachPage} />
            <Route path="/florida/cocoa-beach-golf-carts" component={FloridaCocoaBeachPage} />
            <Route path="/florida/melbourne-beach-golf-carts" component={FloridaMelbourneBeachPage} />
            <Route path="/florida/vero-beach-golf-carts" component={FloridaVeroBeachPage} />
            <Route path="/florida/fort-pierce-golf-carts" component={FloridaFortPiercePage} />
            <Route path="/florida/stuart-golf-carts" component={FloridaStuartPage} />
            <Route path="/florida/jupiter-golf-carts" component={FloridaJupiterPage} />
            <Route path="/florida/west-palm-beach-golf-carts" component={FloridaWestPalmBeachPage} />
            <Route path="/florida/boca-raton-golf-carts" component={FloridaBocaRatonPage} />
            <Route path="/florida/deerfield-beach-golf-carts" component={FloridaDeerfieldBeachPage} />
            <Route path="/florida/pompano-beach-golf-carts" component={FloridaPompanoBeachPage} />
            <Route path="/florida/hollywood-golf-carts" component={FloridaHollywoodPage} />
            <Route path="/florida/hallandale-beach-golf-carts" component={FloridaHallendaleBeachPage} />
            
            {/* Vehicle Detail Pages */}
            {/* DENAGO Vehicles */}
            <Route path="/vehicles/denago-ev-city" component={DenagoEvCityPage} />
            <Route path="/vehicles/denago-ev-nomad" component={DenagoEvNomadPage} />
            <Route path="/vehicles/denago-ev-nomad-xl" component={DenagoEvNomadXlPage} />
            <Route path="/vehicles/denago-ev-rover-xl" component={DenagoEvRoverXlPage} />
            <Route path="/vehicles/denago-ev-rover-xl6" component={DenagoEvRoverXl6Page} />
            <Route path="/vehicles/denago-ev-rover-xxl" component={DenagoEvRoverXxlPage} />
            
            {/* EVOLUTION Vehicles */}
            <Route path="/vehicles/evolution-d5-ranger-4-plus" component={EvolutionD5Ranger4PlusPage} />
            <Route path="/vehicles/evolution-d5-ranger-6-plus" component={EvolutionD5Ranger6PlusPage} />
            <Route path="/vehicles/evolution-d5-maverick-4-plus" component={EvolutionD5Maverick4PlusPage} />
            <Route path="/vehicles/evolution-classic-4-plus" component={EvolutionClassic4PlusPage} />
            <Route path="/vehicles/evolution-carrier-6-plus" component={EvolutionCarrier6PlusPage} />
            <Route path="/vehicles/evolution-d6-max-xt4" component={EvolutionD6MaxXt4Page} />
            
            {/* 404 Page */}
            <Route component={NotFound} />
          </Switch>
        </main>
  );
}

export default function App() {
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Router />
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}