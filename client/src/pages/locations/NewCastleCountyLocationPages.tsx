import LocationPageTemplate from "./LocationPageTemplate";
import { NEW_CASTLE_COUNTY_MUNICIPALITIES } from "@/data/newCastleCountyMunicipalities";

// New Castle County Municipality Location Pages
// All 15 municipalities in New Castle County, Delaware

export function ArdenPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'arden')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function ArdencroftPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'ardencroft')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function ArdentownPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'ardentown')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function BellefontePage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'bellefonte')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function ClaytonPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'clayton')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function DelawareCityPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'delaware-city')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function ElsmerePage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'elsmere')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function MiddletownPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'middletown')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function NewCastlePage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'new-castle')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function NewarkPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'newark')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function NewportPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'newport')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function OdessaPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'odessa')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function SmyrnaPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'smyrna')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function TownsendPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'townsend')!;
  return <LocationPageTemplate municipality={municipality} />;
}

export function WilmingtonPage() {
  const municipality = NEW_CASTLE_COUNTY_MUNICIPALITIES.find(m => m.slug === 'wilmington')!;
  return <LocationPageTemplate municipality={municipality} />;
}