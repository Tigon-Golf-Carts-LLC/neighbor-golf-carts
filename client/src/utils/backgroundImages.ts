// Delaware Golf Carts - Professional Dealership Background Images
// 7 new professional Delaware golf cart dealership images for dynamic backgrounds

import image1 from "@assets/Delaware Golf Carts -Delaware Golf Cart Dealership_1756222327804.jpeg";
import image2 from "@assets/Delaware Golf Carts -Delaware Golf Cart Dealership 2_1756222327804.jpeg";
import image3 from "@assets/Delaware Golf Carts -Delaware Golf Cart Dealership 3_1756222327805.jpeg";
import image4 from "@assets/Delaware Golf Carts -Delaware Golf Cart Dealership 4_1756222327805.jpeg";
import image5 from "@assets/Delaware Golf Carts -Delaware Golf Cart Dealership 5_1756222327805.jpeg";
import image6 from "@assets/Delaware Golf Carts -Delaware Golf Cart Dealership 6_1756222327806.jpeg";
import image7 from "@assets/Delaware Golf Carts -Delaware Golf Cart Dealership 7_1756222327806.jpeg";

export const backgroundImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

// Page-specific background image assignments for consistency
export const pageBackgrounds = {
  home: image1,           // Delaware Golf Carts main dealership for homepage
  inventory: image2,      // Delaware Golf Carts showroom display
  rentals: image3,        // Delaware Golf Carts service-focused view
  services: image4,       // Delaware Golf Carts professional service area
  about: image5,          // Delaware Golf Carts welcoming interior
  contact: image6,        // Delaware Golf Carts customer service area
  showroom: image7,       // Delaware Golf Carts premium showroom
  denago: image4,         // Delaware Golf Carts service area for Denago vehicles
  evolution: image5,      // Delaware Golf Carts interior for Evolution vehicles
  vehicle: image3,        // Delaware Golf Carts individual vehicle display
  vehicleDetail: image7,  // Delaware Golf Carts premium vehicle showcase
  counties: image2,       // Delaware Golf Carts for county pages
  locations: image6,      // Delaware Golf Carts for location pages
  default: image1,        // Delaware Golf Carts main dealership as fallback
};

// Function to get background image for a specific page
export const getPageBackground = (pageName: string): string => {
  return pageBackgrounds[pageName as keyof typeof pageBackgrounds] || pageBackgrounds.default;
};

// Function to get a random background image
export const getRandomBackground = (): string => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

// Function to get hero background style with overlay for readability
export const getHeroBackgroundStyle = (pageName: string) => {
  const backgroundImage = getPageBackground(pageName);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.75), rgba(14, 46, 85, 0.75)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};

// Function to get lighter background style for content sections
export const getLightBackgroundStyle = (pageName: string) => {
  const backgroundImage = getPageBackground(pageName);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
};