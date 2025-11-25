// Neighborhood Golf Carts - Professional Showroom Background Images
// 9 new professional NGC showroom images for dynamic backgrounds

import image1 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood_1764084707794.jpeg";
import image2 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood- 2_1764084707795.jpeg";
import image3 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood 1_1764084707795.jpeg";
import image4 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood 3_1764084707795.jpeg";
import image5 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood 4_1764084707795.jpeg";
import image6 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood 5_1764084707796.jpeg";
import image7 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood 6_1764084707796.jpeg";
import image8 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood 7_1764084707796.jpeg";
import image9 from "@assets/Neighborhood Golf Carts - NGC - Golf Carts For The Neighborhood 8_1764084707797.jpeg";

export const backgroundImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

// Page-specific background image assignments for consistency
export const pageBackgrounds = {
  home: image1,           // NGC professional showroom scene for homepage
  inventory: image2,      // NGC showroom display area
  rentals: image3,        // NGC customer service area
  services: image4,       // NGC professional service desk
  about: image5,          // NGC welcoming showroom scene
  contact: image6,        // NGC customer reception area
  showroom: image7,       // NGC premium showroom interior
  denago: image8,         // NGC showroom for Denago vehicles
  evolution: image9,      // NGC showroom for Evolution vehicles
  vehicle: image3,        // NGC individual vehicle display
  vehicleDetail: image7,  // NGC premium vehicle showcase
  counties: image2,       // NGC showroom for county/state pages
  locations: image6,      // NGC showroom for location pages
  financing: image4,      // NGC showroom for financing pages
  policies: image5,       // NGC showroom for policy pages
  default: image1,        // NGC main showroom scene as fallback
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

// Function to get a random background for vehicle pages
export const getRandomVehicleBackground = (): string => {
  // Use a subset of images that work well for vehicle displays
  const vehicleImages = [image3, image7, image8, image9];
  const randomIndex = Math.floor(Math.random() * vehicleImages.length);
  return vehicleImages[randomIndex];
};

// Function to get a random background for location pages
export const getRandomLocationBackground = (): string => {
  // Use showroom images for location pages
  const locationImages = [image1, image2, image5, image6];
  const randomIndex = Math.floor(Math.random() * locationImages.length);
  return locationImages[randomIndex];
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