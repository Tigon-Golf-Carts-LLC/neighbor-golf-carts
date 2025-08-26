import { CoastalState, Beach } from "@/data/easternCoastlineStates";

export interface CoordinateLocation {
  lat: number;
  lng: number;
}

// Eastern Coastline state center coordinates for map display
export const EASTERN_COASTLINE_COORDINATES: Record<string, CoordinateLocation> = {
  "maine": { lat: 43.7844, lng: -69.2649 },
  "new-hampshire": { lat: 43.0389, lng: -70.7494 },
  "massachusetts": { lat: 41.9028, lng: -70.5171 },
  "rhode-island": { lat: 41.5801, lng: -71.4774 },
  "connecticut": { lat: 41.2033, lng: -72.5473 },
  "new-york": { lat: 40.9176, lng: -72.6851 },
  "new-jersey": { lat: 39.8283, lng: -74.4776 },
  "delaware": { lat: 38.9108, lng: -75.5277 },
  "maryland": { lat: 38.4192, lng: -75.8939 },
  "virginia": { lat: 36.8508, lng: -75.9776 },
  "north-carolina": { lat: 35.2271, lng: -75.5449 },
  "south-carolina": { lat: 33.8361, lng: -78.6569 },
  "georgia": { lat: 31.9986, lng: -81.0987 },
  "florida": { lat: 27.7663, lng: -82.6404 }
};

// Beach/shore specific coordinates for detailed maps
export const BEACH_COORDINATES: Record<string, Record<string, CoordinateLocation>> = {
  "maine": {
    "old-orchard-beach": { lat: 43.5162, lng: -70.3773 },
    "kennebunkport": { lat: 43.3618, lng: -70.4769 },
    "bar-harbor": { lat: 44.3876, lng: -68.2047 },
    "camden": { lat: 44.2098, lng: -69.0648 },
    "pemaquid-beach": { lat: 43.8370, lng: -69.5058 },
    "popham-beach": { lat: 43.7342, lng: -69.7848 },
    "wells-beach": { lat: 43.3220, lng: -70.5806 },
    "york-beach": { lat: 43.1959, lng: -70.6098 },
    "ogunquit": { lat: 43.2481, lng: -70.5998 },
    "boothbay-harbor": { lat: 43.8526, lng: -69.6273 },
    "acadia-national-park": { lat: 44.3386, lng: -68.2733 },
    "portland": { lat: 43.6591, lng: -70.2568 }
  },
  "new-hampshire": {
    "hampton-beach": { lat: 42.9009, lng: -70.8179 },
    "seabrook-beach": { lat: 42.8751, lng: -70.8370 },
    "rye-beach": { lat: 43.0170, lng: -70.7748 },
    "north-beach": { lat: 42.9198, lng: -70.8089 },
    "wallis-sands-state-beach": { lat: 43.0170, lng: -70.7748 },
    "portsmouth": { lat: 43.0718, lng: -70.7626 }
  },
  "massachusetts": {
    "cape-cod": { lat: 41.6688, lng: -70.2962 },
    "marthas-vineyard": { lat: 41.3912, lng: -70.6416 },
    "nantucket": { lat: 41.2835, lng: -70.0995 },
    "provincetown": { lat: 42.0526, lng: -70.1915 },
    "chatham": { lat: 41.6821, lng: -69.9597 },
    "hyannis": { lat: 41.6532, lng: -70.2962 },
    "falmouth": { lat: 41.5515, lng: -70.6148 },
    "gloucester": { lat: 42.6334, lng: -70.6731 },
    "salem": { lat: 42.5195, lng: -70.8967 },
    "newburyport": { lat: 42.8126, lng: -70.8773 },
    "revere-beach": { lat: 42.4084, lng: -70.9927 },
    "nahant-beach": { lat: 42.4165, lng: -70.9553 },
    "duxbury-beach": { lat: 42.0418, lng: -70.6478 },
    "plymouth-beach": { lat: 41.9584, lng: -70.6673 }
  },
  "rhode-island": {
    "newport": { lat: 41.4901, lng: -71.3128 },
    "narragansett": { lat: 41.4351, lng: -71.4495 },
    "watch-hill": { lat: 41.3218, lng: -71.8565 },
    "westerly": { lat: 41.3773, lng: -71.8270 },
    "block-island": { lat: 41.1681, lng: -71.5503 },
    "misquamicut-beach": { lat: 41.3226, lng: -71.8067 },
    "scarborough-beach": { lat: 41.4326, lng: -71.4495 },
    "east-beach": { lat: 41.3984, lng: -71.7370 },
    "second-beach": { lat: 41.4829, lng: -71.3006 },
    "first-beach": { lat: 41.4829, lng: -71.3006 }
  },
  "connecticut": {
    "mystic": { lat: 41.3543, lng: -71.9666 },
    "new-london": { lat: 41.3556, lng: -72.0995 },
    "old-saybrook": { lat: 41.2937, lng: -72.3756 },
    "madison": { lat: 41.2790, lng: -72.5987 },
    "guilford": { lat: 41.2882, lng: -72.6815 },
    "branford": { lat: 41.2790, lng: -72.8148 },
    "east-haven": { lat: 41.2765, lng: -72.8684 },
    "milford": { lat: 41.2234, lng: -73.0565 },
    "stratford": { lat: 41.1845, lng: -73.1332 },
    "bridgeport": { lat: 41.1865, lng: -73.1951 },
    "norwalk": { lat: 41.1177, lng: -73.4079 },
    "stamford": { lat: 41.0534, lng: -73.5387 }
  },
  "new-york": {
    "coney-island": { lat: 40.5749, lng: -73.9857 },
    "brighton-beach": { lat: 40.5776, lng: -73.9609 },
    "rockaway-beach": { lat: 40.5926, lng: -73.8370 },
    "jones-beach": { lat: 40.5926, lng: -73.5151 },
    "fire-island": { lat: 40.6482, lng: -73.1593 },
    "the-hamptons": { lat: 40.8843, lng: -72.3759 },
    "montauk": { lat: 41.0362, lng: -71.9537 },
    "sag-harbor": { lat: 40.9987, lng: -72.2925 },
    "southampton": { lat: 40.8843, lng: -72.3759 },
    "east-hampton": { lat: 40.9637, lng: -72.1848 },
    "westhampton": { lat: 40.8276, lng: -72.6384 },
    "long-beach": { lat: 40.5887, lng: -73.6579 },
    "orchard-beach": { lat: 40.8704, lng: -73.7865 }
  },
  "new-jersey": {
    "atlantic-city": { lat: 39.3643, lng: -74.4229 },
    "cape-may": { lat: 38.9351, lng: -74.9065 },
    "ocean-city": { lat: 39.2776, lng: -74.5746 },
    "wildwood": { lat: 38.9915, lng: -74.8154 },
    "seaside-heights": { lat: 39.9434, lng: -74.0721 },
    "asbury-park": { lat: 40.2204, lng: -74.0121 },
    "point-pleasant": { lat: 40.0834, lng: -74.0682 },
    "long-beach-island": { lat: 39.6426, lng: -74.1968 },
    "belmar": { lat: 40.1787, lng: -74.0218 },
    "spring-lake": { lat: 40.1529, lng: -74.0279 },
    "avon-by-the-sea": { lat: 40.1926, lng: -74.0159 },
    "bradley-beach": { lat: 40.2026, lng: -74.0121 },
    "manasquan": { lat: 40.1165, lng: -74.0379 }
  },
  "delaware": {
    "rehoboth-beach": { lat: 38.7196, lng: -75.0760 },
    "bethany-beach": { lat: 38.5390, lng: -75.0637 },
    "dewey-beach": { lat: 38.6912, lng: -75.0707 },
    "fenwick-island": { lat: 38.4651, lng: -75.0537 },
    "lewes": { lat: 38.7740, lng: -75.1393 },
    "cape-henlopen": { lat: 38.7984, lng: -75.0954 }
  },
  "maryland": {
    "ocean-city": { lat: 38.3365, lng: -75.0849 },
    "assateague-island": { lat: 38.0593, lng: -75.1537 },
    "cambridge": { lat: 38.5632, lng: -76.0783 },
    "st-michaels": { lat: 38.7851, lng: -76.2244 },
    "annapolis": { lat: 38.9717, lng: -76.5010 },
    "baltimore": { lat: 39.2904, lng: -76.6122 },
    "havre-de-grace": { lat: 39.5487, lng: -76.0919 },
    "chesapeake-beach": { lat: 38.6901, lng: -76.5344 }
  },
  "virginia": {
    "virginia-beach": { lat: 36.8529, lng: -75.9780 },
    "norfolk": { lat: 36.8468, lng: -76.2852 },
    "newport-news": { lat: 36.9779, lng: -76.4951 },
    "hampton": { lat: 37.0299, lng: -76.3452 },
    "portsmouth": { lat: 36.8354, lng: -76.2983 },
    "chesapeake": { lat: 36.7682, lng: -76.2875 },
    "sandbridge": { lat: 36.7032, lng: -75.9687 },
    "chincoteague": { lat: 37.9332, lng: -75.3779 },
    "williamsburg": { lat: 37.2707, lng: -76.7075 }
  },
  "north-carolina": {
    "outer-banks": { lat: 35.5585, lng: -75.4665 },
    "nags-head": { lat: 35.9576, lng: -75.6237 },
    "duck": { lat: 36.1632, lng: -75.7446 },
    "kitty-hawk": { lat: 36.0626, lng: -75.7168 },
    "kill-devil-hills": { lat: 36.0287, lng: -75.6779 },
    "cape-hatteras": { lat: 35.2187, lng: -75.5287 },
    "ocracoke": { lat: 35.1154, lng: -75.9879 },
    "wrightsville-beach": { lat: 34.2085, lng: -77.7968 },
    "carolina-beach": { lat: 34.0582, lng: -77.8968 },
    "kure-beach": { lat: 33.9968, lng: -77.9079 },
    "wilmington": { lat: 34.2257, lng: -77.9447 },
    "sunset-beach": { lat: 33.8779, lng: -78.5096 },
    "ocean-isle-beach": { lat: 33.9043, lng: -78.4368 }
  },
  "south-carolina": {
    "myrtle-beach": { lat: 33.6891, lng: -78.8867 },
    "charleston": { lat: 32.7765, lng: -79.9311 },
    "hilton-head": { lat: 32.2163, lng: -80.7526 },
    "kiawah-island": { lat: 32.6099, lng: -80.0831 },
    "folly-beach": { lat: 32.6552, lng: -79.9398 },
    "isle-of-palms": { lat: 32.7868, lng: -79.7457 },
    "sullivans-island": { lat: 32.7602, lng: -79.8370 },
    "pawleys-island": { lat: 33.4343, lng: -79.1287 },
    "garden-city": { lat: 33.5685, lng: -79.0059 },
    "surfside-beach": { lat: 33.5935, lng: -78.9739 },
    "north-myrtle-beach": { lat: 33.8160, lng: -78.6831 },
    "beaufort": { lat: 32.4315, lng: -80.6698 }
  },
  "georgia": {
    "savannah": { lat: 32.0835, lng: -81.0998 },
    "tybee-island": { lat: 32.0002, lng: -80.8457 },
    "jekyll-island": { lat: 31.0732, lng: -81.4290 },
    "st-simons-island": { lat: 31.1499, lng: -81.3826 },
    "sea-island": { lat: 31.1299, lng: -81.3887 },
    "cumberland-island": { lat: 30.8357, lng: -81.4565 },
    "little-st-simons-island": { lat: 31.2665, lng: -81.2776 },
    "brunswick": { lat: 31.1498, lng: -81.4915 },
    "st-marys": { lat: 30.7296, lng: -81.5465 }
  },
  "florida": {
    "miami-beach": { lat: 25.7907, lng: -80.1300 },
    "fort-lauderdale": { lat: 26.1224, lng: -80.1373 },
    "daytona-beach": { lat: 29.2108, lng: -81.0228 },
    "jacksonville": { lat: 30.3322, lng: -81.6557 },
    "st-augustine": { lat: 29.9012, lng: -81.3124 },
    "fernandina-beach": { lat: 30.6691, lng: -81.4615 },
    "neptune-beach": { lat: 30.3124, lng: -81.3959 },
    "atlantic-beach": { lat: 30.3391, lng: -81.4004 },
    "ponte-vedra-beach": { lat: 30.2419, lng: -81.3870 },
    "ormond-beach": { lat: 29.2858, lng: -81.0559 },
    "new-smyrna-beach": { lat: 29.0258, lng: -80.9270 },
    "cocoa-beach": { lat: 28.3200, lng: -80.6076 },
    "melbourne-beach": { lat: 28.0681, lng: -80.5606 },
    "vero-beach": { lat: 27.6386, lng: -80.3973 },
    "fort-pierce": { lat: 27.4467, lng: -80.3256 },
    "stuart": { lat: 27.1973, lng: -80.2525 },
    "jupiter": { lat: 26.9342, lng: -80.0942 },
    "west-palm-beach": { lat: 26.7153, lng: -80.0534 },
    "boca-raton": { lat: 26.3683, lng: -80.1289 },
    "deerfield-beach": { lat: 26.3184, lng: -80.0998 },
    "pompano-beach": { lat: 26.2379, lng: -80.1248 },
    "hollywood": { lat: 26.0112, lng: -80.1495 },
    "hallandale-beach": { lat: 25.9812, lng: -80.1484 }
  }
};

/**
 * Generate Google Maps embed URL for a specific state's coastal area
 */
export function generateStateMapEmbed(stateSlug: string, zoomLevel: number = 8): string {
  const coordinates = EASTERN_COASTLINE_COORDINATES[stateSlug];
  if (!coordinates) {
    return generateEasternCoastlineMapEmbed();
  }

  const { lat, lng } = coordinates;
  const encodedQuery = encodeURIComponent(`${stateSlug.replace('-', ' ')} coast beaches`);
  
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${zoomLevel}.1!3m3!1m2!1s0x0%3A0x0!2z${encodedQuery}!5e0!3m2!1sen!2sus!4v${Date.now()}!5m2!1sen!2sus`;
}

/**
 * Generate Google Maps embed URL for a specific beach/shore location
 */
export function generateBeachMapEmbed(stateSlug: string, beachSlug: string, zoomLevel: number = 13): string {
  const beachCoordinates = BEACH_COORDINATES[stateSlug]?.[beachSlug];
  if (!beachCoordinates) {
    return generateStateMapEmbed(stateSlug);
  }

  const { lat, lng } = beachCoordinates;
  const beachName = beachSlug.replace(/-/g, ' ');
  const encodedQuery = encodeURIComponent(`${beachName}, ${stateSlug.replace('-', ' ')}`);
  
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${zoomLevel}.1!3m3!1m2!1s0x0%3A0x0!2z${encodedQuery}!5e0!3m2!1sen!2sus!4v${Date.now()}!5m2!1sen!2sus`;
}

/**
 * Generate overview map for entire Eastern Coastline
 */
export function generateEasternCoastlineMapEmbed(zoomLevel: number = 5): string {
  // Center on Mid-Atlantic coast to show entire eastern coastline
  const centerLat = 36.0;
  const centerLng = -78.0;
  const encodedQuery = encodeURIComponent("Eastern United States coastline");
  
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500000!2d${centerLng}!3d${centerLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${zoomLevel}.1!3m3!1m2!1s0x0%3A0x0!2z${encodedQuery}!5e0!3m2!1sen!2sus!4v${Date.now()}!5m2!1sen!2sus`;
}

/**
 * Generate simple Google Maps search URL for a location
 */
export function generateMapSearchUrl(stateSlug: string, beachSlug?: string): string {
  if (beachSlug) {
    const beachName = beachSlug.replace(/-/g, ' ');
    const stateName = stateSlug.replace(/-/g, ' ');
    return `https://www.google.com/maps/search/${encodeURIComponent(`${beachName}, ${stateName}`)}`;
  }
  
  const stateName = stateSlug.replace(/-/g, ' ');
  return `https://www.google.com/maps/search/${encodeURIComponent(`${stateName} coast beaches`)}`;
}

/**
 * Get driving directions URL to a beach location
 */
export function generateDirectionsUrl(stateSlug: string, beachSlug: string): string {
  const beachCoordinates = BEACH_COORDINATES[stateSlug]?.[beachSlug];
  if (!beachCoordinates) {
    return generateMapSearchUrl(stateSlug, beachSlug);
  }

  const { lat, lng } = beachCoordinates;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}