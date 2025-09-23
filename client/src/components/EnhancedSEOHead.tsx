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
  
  // Specialty pages
  showroom: (): PageSEOConfig => ({
    h1Text: "Shoreside Golf Carts Eastern Coastline Showroom",
    benefitSentence: "Visit our premier Eastern Coastline showroom featuring the complete lineup of DENAGO and Evolution electric vehicles serving 400+ beach locations from Maine to Florida.",
    keywords: "Shoreside golf carts showroom, Eastern Coastline golf cart dealership, DENAGO Evolution beach locations, coastal golf cart sales",
    pageName: "showroom",
    canonicalUrl: "https://shoresidegolfcarts.com/showroom",
    ogType: "website"
  }),
  
  thankYou: (): PageSEOConfig => ({
    h1Text: "Thank You!",
    benefitSentence: "Thank you for contacting Shoreside Golf Carts, we'll respond to your Eastern Coastline golf cart inquiry within 24 hours.",
    keywords: "thank you, contact confirmation, Shoreside Golf Carts, Eastern Coastline golf carts",
    pageName: "thankyou",
    canonicalUrl: "https://shoresidegolfcarts.com/thank-you",
    ogType: "website"
  }),
  
  // Policy pages
  privacyPolicy: (): PageSEOConfig => ({
    h1Text: "Privacy Policy",
    benefitSentence: "Review Shoreside Golf Carts' privacy policy to understand how we protect your personal information across all Eastern Coastline locations.",
    keywords: "privacy policy, data protection, personal information, Shoreside Golf Carts",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/privacy-policy",
    ogType: "website"
  }),
  
  termsOfService: (): PageSEOConfig => ({
    h1Text: "Terms of Service",
    benefitSentence: "Review Shoreside Golf Carts' terms of service for purchasing golf carts, rental services, and website usage across Eastern Coastline locations.",
    keywords: "terms of service, terms and conditions, golf cart purchase, rental agreement, Shoreside Golf Carts",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/terms-of-service",
    ogType: "website"
  }),
  
  correctionsPolicy: (): PageSEOConfig => ({
    h1Text: "Corrections Policy",
    benefitSentence: "Learn about Shoreside Golf Carts' commitment to accuracy and transparent process for handling corrections to published content and information.",
    keywords: "corrections policy, content accuracy, Shoreside Golf Carts, information corrections",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/policies/corrections",
    ogType: "website"
  }),
  
  deliveryPolicy: (): PageSEOConfig => ({
    h1Text: "Delivery Policy",
    benefitSentence: "Comprehensive golf cart delivery services throughout the Eastern Coastline from Maine to Florida with free delivery zones and professional transport.",
    keywords: "delivery policy, golf cart delivery, Eastern Coastline delivery, golf cart shipping",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/policies/delivery",
    ogType: "website"
  }),
  
  diversityPolicy: (): PageSEOConfig => ({
    h1Text: "Diversity & Inclusion Policy", 
    benefitSentence: "Learn about Shoreside Golf Carts' commitment to diversity, equity, and inclusion in our Eastern Coastline workplace and customer service practices.",
    keywords: "diversity policy, equity inclusion, Shoreside Golf Carts, workplace diversity Eastern Coastline",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/policies/diversity",
    ogType: "website"
  }),
  
  ethicsPolicy: (): PageSEOConfig => ({
    h1Text: "Ethics Policy",
    benefitSentence: "Learn about Shoreside Golf Carts' code of ethics and business conduct standards serving customers throughout the Eastern Coastline from Maine to Florida.",
    keywords: "ethics policy, business ethics, Shoreside Golf Carts, code of conduct Eastern Coastline",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/policies/ethics",
    ogType: "website"
  }),
  
  feedbackPolicy: (): PageSEOConfig => ({
    h1Text: "Feedback Policy",
    benefitSentence: "Learn how to provide feedback to Shoreside Golf Carts and our commitment to customer feedback and continuous improvement across Eastern Coastline locations.",
    keywords: "feedback policy, customer feedback, Shoreside Golf Carts, customer service policy",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/policies/feedback",
    ogType: "website"
  }),
  
  returnPolicy: (): PageSEOConfig => ({
    h1Text: "Return Policy",
    benefitSentence: "Learn about Shoreside Golf Carts return policy for golf cart purchases, accessories, and parts across Eastern Coastline locations from Maine to Florida.",
    keywords: "return policy, golf cart returns, Shoreside Golf Carts, refund policy Eastern Coastline",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/policies/return",
    ogType: "website"
  }),
  
  rentalPolicy: (): PageSEOConfig => ({
    h1Text: "Rental Policy",
    benefitSentence: "Complete golf cart rental policy for Shoreside Golf Carts with rental requirements, responsibilities, and terms throughout Eastern Coastline locations.",
    keywords: "rental policy, golf cart rental, Eastern Coastline rentals, golf cart rental policy",
    pageName: "policy",
    canonicalUrl: "https://shoresidegolfcarts.com/policies/rental",
    ogType: "website"
  }),
  
  // Vehicle-specific configs
  denagoEvNomad: (): PageSEOConfig => ({
    h1Text: "EV NOMAD",
    benefitSentence: "Discover the DENAGO EV NOMAD designed for outdoor adventures and off-road capability with 45-60 mile range, perfect for Eastern Coastline exploration.",
    keywords: "DENAGO EV NOMAD, adventure electric vehicle, off-road golf cart, outdoor recreation, DENAGO dealer Eastern Coastline",
    pageName: "vehicle",
    canonicalUrl: "https://shoresidegolfcarts.com/vehicles/denago-ev-nomad",
    ogType: "product"
  }),
  
  denagoEvCityPage: (): PageSEOConfig => ({
    h1Text: "EV CITY",
    benefitSentence: "Discover the DENAGO EV CITY lineup with urban mobility features and street-legal NEV certification, perfect for Eastern Coastline neighborhood transportation.",
    keywords: "DENAGO EV CITY, street legal electric vehicle, NEV, urban mobility, DENAGO dealer Eastern Coastline",
    pageName: "vehicle",
    canonicalUrl: "https://shoresidegolfcarts.com/vehicles/denago-ev-city",
    ogType: "product"
  }),
  
  evolutionClassic4Plus: (): PageSEOConfig => ({
    h1Text: "CLASSIC 4 PLUS",
    benefitSentence: "Experience the Evolution Classic 4 Plus with timeless design and modern electric performance combining classic styling with contemporary technology throughout the Eastern Coastline.",
    keywords: "Evolution Classic 4 Plus, classic golf cart, premium electric vehicle, traditional styling, Evolution dealer Eastern Coastline",
    pageName: "vehicle",
    canonicalUrl: "https://shoresidegolfcarts.com/vehicles/evolution-classic-4-plus",
    ogType: "product"
  }),
  
  denagoEvCity: (): PageSEOConfig => ({
    h1Text: "DENAGO EV City - Street Legal Electric Golf Cart $11,995",
    benefitSentence: "Discover the DENAGO EV City street-legal electric golf cart with 25 mph capability and 35-mile range, perfect for Eastern Coastline communities.",
    keywords: "DENAGO EV City, street legal golf cart, LSV low speed vehicle, 25 mph golf cart, Eastern Coastline electric vehicle",
    pageName: "vehicle",
    canonicalUrl: "https://shoresidegolfcarts.com/vehicles/denago-ev-city",
    ogType: "product"
  }),
  
  // Generic vehicle config generator
  vehicle: (vehicleName: string, brand: string, price?: string): PageSEOConfig => ({
    h1Text: price ? `${vehicleName} - ${brand} Electric Golf Cart ${price}` : vehicleName,
    benefitSentence: `Discover the ${brand} ${vehicleName} electric golf cart with premium features and reliability, available throughout the Eastern Coastline from Maine to Florida.`,
    keywords: `${brand} ${vehicleName}, ${brand} electric golf cart, Eastern Coastline electric vehicle, beach golf cart ${vehicleName}`,
    pageName: "vehicle",
    canonicalUrl: `https://shoresidegolfcarts.com/vehicles/${vehicleName.toLowerCase().replace(/\s+/g, '-')}`,
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
  }),
  
  // Generic policy config generator
  policy: (policyName: string): PageSEOConfig => ({
    h1Text: policyName,
    benefitSentence: `Learn about Shoreside Golf Carts' ${policyName.toLowerCase()} serving customers throughout the Eastern Coastline from Maine to Florida.`,
    keywords: `${policyName.toLowerCase()}, Shoreside Golf Carts policies, Eastern Coastline golf cart dealer`,
    pageName: "policy", 
    canonicalUrl: `https://shoresidegolfcarts.com/policies/${policyName.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: "website"
  })
};