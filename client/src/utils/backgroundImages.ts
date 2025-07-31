// Background image utility for Lackawanna County Golf Carts
// Uses the 8 professional showroom images featuring the modern Lackawanna County Golf Carts dealership

const BACKGROUND_IMAGES = [
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_4zG-0v0fRsSU5AxGt_cEfA_A0HlJrJtSJOlpyerLK2j5Q_1753965748393.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_2JQB2acORFWnp-bjmYY6KA_A0HlJrJtSJOlpyerLK2j5Q_1753965748394.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_cQsH1m3hS0-MskPK4BH5uA_dd9V3Dg-RV6rpmQtK0Rk9Q_1753965748394.png',
  '/attached_assets/a-photograph-of-a-bright-modern-golf-car_k6d1akbXTKGGRWNW8z_PMQ_AyrHJH6wRZCkACMihvwG_w_1753965748395.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_LEm17UaYQ7uOREk6gVlJJw_AyrHJH6wRZCkACMihvwG_w_1753965748395.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_3MYLyVtKRoeeHx8zidhSqA_AyrHJH6wRZCkACMihvwG_w_1753965748395.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_ilITEs4rRxizuRFcFZ3D6Q_Gx4bPyKKR9SOEEUw1DrCyg_1753965748396.png',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_KIRVRedJQByy93qCY4cIKg_Gx4bPyKKR9SOEEUw1DrCyg_1753965748396.png'
];

// Simple hash function to ensure consistent randomization based on seed
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Gets a consistent random background image based on a seed string
 * This ensures the same page always gets the same image, but different pages get different images
 */
export function getRandomBackgroundImage(seed: string): string {
  const index = simpleHash(seed) % BACKGROUND_IMAGES.length;
  return BACKGROUND_IMAGES[index];
}

/**
 * Gets the background style object for hero sections
 * Includes overlay for text readability
 */
export function getHeroBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.8), rgba(14, 46, 85, 0.6)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

/**
 * Gets a lighter background style for vehicle pages and other content sections
 */
export function getLightBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

/**
 * Gets background style for call-to-action sections
 */
export function getCTABackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.9), rgba(14, 46, 85, 0.8)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}