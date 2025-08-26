import LocationPageTemplate from "./LocationPageTemplate";
import { KENT_COUNTY_MUNICIPALITIES } from "@/data/kentCountyMunicipalities";

// Kent County Municipality Location Pages
// All 18 municipalities in Kent County, Delaware

export function BowersPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'bowers')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function CamdenPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'camden')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function CheswoldPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'cheswold')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function DoverPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'dover')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function FarmingtonPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'farmington')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function FeltonPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'felton')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function FredericaPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'frederica')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function HarringtonPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'harrington')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function HartlyPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'hartly')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function HoustonPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'houston')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function KentonPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'kenton')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function LeipsicPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'leipsic')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function LittleCreekPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'little-creek')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function MagnoliaPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'magnolia')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function MilfordKentPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'milford')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function ViolaPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'viola')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function WoodsidePage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'woodside')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function WyomingPage() {
  const municipality = KENT_COUNTY_MUNICIPALITIES.find(m => m.slug === 'wyoming')!;
  return <LocationPageTemplate municipality={municipality} />;
}