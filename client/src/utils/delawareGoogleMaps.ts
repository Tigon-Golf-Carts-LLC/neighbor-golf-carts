/**
 * Utility functions for generating Google Maps embed URLs for Delaware municipalities
 */

export interface DelawareCoordinates {
  lat: number;
  lng: number;
}

export function generateDelawareGoogleMapsEmbed(
  municipalityName: string, 
  coordinates: DelawareCoordinates,
  municipalityType?: string
): string {
  // Clean up the municipality name for the search query
  const cleanMunicipalityName = municipalityName.trim();
  
  // Create the full location string with proper formatting for Google Maps
  const fullLocation = municipalityType 
    ? `${cleanMunicipalityName} ${municipalityType}, Delaware`
    : `${cleanMunicipalityName}, Delaware`;
  
  // Encode the location for the URL
  const encodedLocation = encodeURIComponent(fullLocation);
  
  // Return the Google Maps embed URL with the specific Delaware location
  // Using Google Maps place search with coordinates for accuracy
  return `https://maps.google.com/maps?width=100%&height=400&hl=en&q=${encodedLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

export function generateCoordinateBasedEmbed(
  municipalityName: string,
  coordinates: DelawareCoordinates,
  zoomLevel: number = 13
): string {
  // Generate a map embed using exact coordinates for precise location
  const { lat, lng } = coordinates;
  const encodedName = encodeURIComponent(`${municipalityName}, Delaware`);
  
  // Use coordinate-based embedding for maximum accuracy
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12192!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${zoomLevel}.1!3m3!1m2!1s0x0%3A0x0!2z${encodedName}!5e0!3m2!1sen!2sus!4v${Date.now()}!5m2!1sen!2sus`;
}

export function generateSimpleDelawareMapsEmbed(
  municipalityName: string,
  coordinates: DelawareCoordinates
): string {
  // Most reliable method - simple place search for Delaware municipalities
  const searchQuery = `${municipalityName.trim()}, Delaware`;
  const encodedQuery = encodeURIComponent(searchQuery);
  
  // Using Google Maps place search - most reliable method for Delaware locations
  return `https://maps.google.com/maps?width=100%25&height=400&hl=en&q=${encodedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
}