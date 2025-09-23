import { Helmet } from "react-helmet-async";
import { getPageBackground } from "@/utils/backgroundImages";

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  heroImage?: string;
  pageName?: string;
  ogType?: string;
  customImage?: string;
}

export interface PageSEOConfig {
  h1Text: string;
  benefitSentence: string;
  keywords?: string;
  pageName?: string;
  canonicalUrl?: string;
  ogType?: string;
  customImage?: string;
}

// Utility to build SEO metadata from page config
export function buildSEOMetadata(config: PageSEOConfig): SEOMetadata {
  const title = config.h1Text;
  const description = `${config.benefitSentence} Call 1-844-844-6638.`;
  
  // Get hero image - priority: customImage > pageName background > fallback
  let heroImage = "/attached_assets/Shoreside Golf Carts (1)_1756300346412.png"; // fallback logo
  
  if (config.customImage) {
    heroImage = config.customImage;
  } else if (config.pageName) {
    const pageBackground = getPageBackground(config.pageName);
    if (pageBackground && typeof pageBackground === 'string') {
      heroImage = pageBackground;
    }
  }
  
  return {
    title,
    description,
    keywords: config.keywords || "golf carts, Eastern Coastline, beach golf carts, Denago, Evolution, electric golf carts, coastal transportation, Maine to Florida",
    canonicalUrl: config.canonicalUrl,
    heroImage,
    pageName: config.pageName,
    ogType: config.ogType || "website"
  };
}

interface EnhancedSEOHeadProps {
  config: PageSEOConfig;
}

export default function EnhancedSEOHead({ config }: EnhancedSEOHeadProps) {
  const metadata = buildSEOMetadata(config);
  const fullImageUrl = metadata.heroImage?.startsWith('http') 
    ? metadata.heroImage 
    : `https://shoresidegolfcarts.com${metadata.heroImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      {metadata.canonicalUrl && <link rel="canonical" href={metadata.canonicalUrl} />}
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/png" href="/attached_assets/Shoreside Golf Carts (1)_1756300346412.png" />
      <link rel="apple-touch-icon" href="/attached_assets/Shoreside Golf Carts (1)_1756300346412.png" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content={metadata.ogType} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Shoreside Golf Carts" />
      <meta property="og:locale" content="en_US" />
      {metadata.canonicalUrl && <meta property="og:url" content={metadata.canonicalUrl} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@shoresidegolfcarts" />
      <meta name="twitter:creator" content="@shoresidegolfcarts" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Shoreside Golf Carts" />
      <meta name="publisher" content="Shoreside Golf Carts" />
      <meta name="theme-color" content="#0e2e55" />
      <meta name="msapplication-navbutton-color" content="#0e2e55" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0e2e55" />
      
      {/* Business Information */}
      <meta name="contact" content="info@shoresidegolfcarts.com" />
      <meta name="phone" content="1-844-844-6638" />
      <meta name="geography" content="Eastern Coastline, Maine to Florida" />
      <meta name="region" content="US-East Coast" />
    </Helmet>
  );
}

// Helper function to create SEO config for different page types
export const createPageSEOConfig = {
  home: (): PageSEOConfig => ({
    h1Text: "Shoreside Golf Carts - Eastern Coastline Premier Dealership",
    benefitSentence: "Discover premium electric golf carts from DENAGO and Evolution serving the entire Eastern Coastline from Maine to Florida with expert sales, service, and rentals.",
    keywords: "golf carts Eastern Coastline, beach golf carts, coastal golf carts, DENAGO Evolution dealer, Maine New Hampshire Massachusetts Rhode Island Connecticut New York New Jersey Delaware Maryland Virginia North Carolina South Carolina Georgia Florida",
    pageName: "home",
    canonicalUrl: "https://shoresidegolfcarts.com/",
    ogType: "website"
  }),
  
  about: (): PageSEOConfig => ({
    h1Text: "About Shoreside Golf Carts - Eastern Coastline Golf Cart Experts Since 2008",
    benefitSentence: "Learn about the Eastern Coastline's premier golf cart dealership with expert team, authorized DENAGO and Evolution dealer serving every shore and beach from Maine to Florida.",
    keywords: "about Shoreside Golf Carts, Eastern Coastline golf cart dealership, beach golf carts, DENAGO Evolution dealer, coastal golf cart service",
    pageName: "about",
    canonicalUrl: "https://shoresidegolfcarts.com/about",
    ogType: "website"
  }),
  
  contact: (): PageSEOConfig => ({
    h1Text: "Contact Shoreside Golf Carts - Your Eastern Coastline Golf Cart Experts",
    benefitSentence: "Contact the Eastern Coastline's premier golf cart dealership for sales, service, and rentals throughout Maine to Florida beach communities.",
    keywords: "contact Shoreside Golf Carts, Eastern Coastline golf cart dealer, beach golf cart service, DENAGO Evolution sales",
    pageName: "contact",
    canonicalUrl: "https://shoresidegolfcarts.com/contact",
    ogType: "website"
  }),
  
  inventory: (): PageSEOConfig => ({
    h1Text: "Golf Cart Inventory - Premium DENAGO & Evolution Electric Carts",
    benefitSentence: "Browse our premium DENAGO and Evolution electric golf cart inventory serving the entire Eastern Coastline from Maine to Florida.",
    keywords: "golf cart inventory, DENAGO Evolution electric carts, Eastern Coastline golf carts, beach golf carts for sale",
    pageName: "inventory",
    canonicalUrl: "https://shoresidegolfcarts.com/inventory",
    ogType: "website"
  }),
  
  services: (): PageSEOConfig => ({
    h1Text: "Professional Golf Cart Services - Sales, Service & Rentals",
    benefitSentence: "Professional golf cart sales, service, and rental solutions throughout the Eastern Coastline from Maine to Florida beach communities.",
    keywords: "golf cart services, Eastern Coastline golf cart service, beach golf cart maintenance, DENAGO Evolution service",
    pageName: "services",
    canonicalUrl: "https://shoresidegolfcarts.com/services",
    ogType: "website"
  }),
  
  rentals: (): PageSEOConfig => ({
    h1Text: "Golf Cart Rentals - Eastern Coastline Beach Transportation",
    benefitSentence: "Premium golf cart rentals for Eastern Coastline beach communities from Maine to Florida with daily, weekly, and monthly options.",
    keywords: "golf cart rentals, Eastern Coastline beach rentals, vacation golf carts, beach transportation Maine to Florida",
    pageName: "rentals",
    canonicalUrl: "https://shoresidegolfcarts.com/rentals",
    ogType: "website"
  }),
  
  financing: (): PageSEOConfig => ({
    h1Text: "Golf Cart Financing - Easy Payment Plans & Options",
    benefitSentence: "Flexible golf cart financing options and payment plans for DENAGO and Evolution electric carts throughout the Eastern Coastline.",
    keywords: "golf cart financing, Eastern Coastline golf cart loans, beach golf cart payment plans, DENAGO Evolution financing",
    pageName: "financing",
    canonicalUrl: "https://shoresidegolfcarts.com/financing",
    ogType: "website"
  }),
  
  // Vehicle-specific configs
  denagoEvCity: (): PageSEOConfig => ({
    h1Text: "DENAGO EV City - Street Legal Electric Golf Cart $11,995",
    benefitSentence: "Discover the DENAGO EV City street-legal electric golf cart with 25 mph capability and 35-mile range, perfect for Eastern Coastline communities.",
    keywords: "DENAGO EV City, street legal golf cart, LSV low speed vehicle, 25 mph golf cart, Eastern Coastline electric vehicle",
    pageName: "vehicle",
    canonicalUrl: "https://shoresidegolfcarts.com/vehicles/denago-ev-city",
    ogType: "product"
  }),
  
  // Location-specific config generator
  location: (locationName: string, state: string): PageSEOConfig => ({
    h1Text: `${locationName} Golf Carts - Premium Beach Transportation Solutions`,
    benefitSentence: `Premium golf cart sales, service, and rentals in ${locationName}, ${state} with DENAGO and Evolution electric vehicles for beach communities.`,
    keywords: `${locationName} golf carts, ${state} beach golf carts, ${locationName} electric vehicles, Eastern Coastline golf cart dealer`,
    pageName: "locations",
    canonicalUrl: `https://shoresidegolfcarts.com/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: "website"
  })
};