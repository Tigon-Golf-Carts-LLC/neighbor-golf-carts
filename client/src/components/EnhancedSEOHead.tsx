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
    keywords: config.keywords || "neighborhood golf carts, street legal golf carts, Denago, Evolution, electric golf carts, golf carts for neighborhoods, all 50 states",
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
    : `https://neighborgolfcarts.com${metadata.heroImage}`;

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
      <meta property="og:site_name" content="Neighborhood Golf Carts" />
      <meta property="og:locale" content="en_US" />
      {metadata.canonicalUrl && <meta property="og:url" content={metadata.canonicalUrl} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@neighborgolfcarts" />
      <meta name="twitter:creator" content="@neighborgolfcarts" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Neighborhood Golf Carts" />
      <meta name="publisher" content="Neighborhood Golf Carts" />
      <meta name="theme-color" content="#0e2e55" />
      <meta name="msapplication-navbutton-color" content="#0e2e55" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0e2e55" />
      
      {/* Business Information */}
      <meta name="contact" content="info@neighborgolfcarts.com" />
      <meta name="phone" content="1-844-844-6638" />
      <meta name="geography" content="United States - All 50 States" />
      <meta name="region" content="US-National" />
    </Helmet>
  );
}

// Helper function to create SEO config for different page types
export const createPageSEOConfig = {
  home: (): PageSEOConfig => ({
    h1Text: "Neighborhood Golf Carts - America's Premier Street-Legal Golf Cart Dealership",
    benefitSentence: "Discover premium street-legal electric golf carts from DENAGO and Evolution serving all 50 states nationwide with expert sales, service, and rentals for neighborhoods.",
    keywords: "neighborhood golf carts, street legal golf carts, golf carts for neighborhoods, DENAGO Evolution dealer, electric golf carts all 50 states, LSV low speed vehicles, golf cart sales nationwide",
    pageName: "home",
    canonicalUrl: "https://neighborgolfcarts.com/",
    ogType: "website"
  }),
  
  about: (): PageSEOConfig => ({
    h1Text: "About Neighborhood Golf Carts - America's Street-Legal Golf Cart Experts Since 2008",
    benefitSentence: "Learn about America's premier neighborhood golf cart dealership with expert team, authorized DENAGO and Evolution dealer serving all 50 states nationwide.",
    keywords: "about Neighborhood Golf Carts, street legal golf cart dealership, neighborhood golf carts, DENAGO Evolution dealer, golf cart service nationwide",
    pageName: "about",
    canonicalUrl: "https://neighborgolfcarts.com/about",
    ogType: "website"
  }),
  
  contact: (): PageSEOConfig => ({
    h1Text: "Contact Neighborhood Golf Carts - Your Nationwide Golf Cart Experts",
    benefitSentence: "Contact America's premier neighborhood golf cart dealership for street-legal cart sales, service, and rentals throughout all 50 states.",
    keywords: "contact Neighborhood Golf Carts, street legal golf cart dealer, neighborhood golf cart service, DENAGO Evolution sales nationwide",
    pageName: "contact",
    canonicalUrl: "https://neighborgolfcarts.com/contact",
    ogType: "website"
  }),
  
  inventory: (): PageSEOConfig => ({
    h1Text: "Street-Legal Golf Cart Inventory - Premium DENAGO & Evolution Electric Carts",
    benefitSentence: "Browse our premium DENAGO and Evolution street-legal electric golf cart inventory serving all 50 states nationwide.",
    keywords: "street legal golf cart inventory, DENAGO Evolution electric carts, neighborhood golf carts for sale, LSV low speed vehicles all 50 states",
    pageName: "inventory",
    canonicalUrl: "https://neighborgolfcarts.com/inventory",
    ogType: "website"
  }),
  
  services: (): PageSEOConfig => ({
    h1Text: "Professional Street-Legal Golf Cart Services - Sales, Service & Rentals",
    benefitSentence: "Professional street-legal golf cart sales, service, and rental solutions for neighborhoods throughout all 50 states nationwide.",
    keywords: "street legal golf cart services, neighborhood golf cart service, LSV maintenance, DENAGO Evolution service nationwide",
    pageName: "services",
    canonicalUrl: "https://neighborgolfcarts.com/services",
    ogType: "website"
  }),
  
  rentals: (): PageSEOConfig => ({
    h1Text: "Street-Legal Golf Cart Rentals - Neighborhood Transportation Nationwide",
    benefitSentence: "Premium street-legal golf cart rentals for neighborhoods across all 50 states with daily, weekly, and monthly options.",
    keywords: "street legal golf cart rentals, neighborhood golf cart rentals, LSV rentals, golf cart transportation nationwide",
    pageName: "rentals",
    canonicalUrl: "https://neighborgolfcarts.com/rentals",
    ogType: "website"
  }),
  
  financing: (): PageSEOConfig => ({
    h1Text: "Street-Legal Golf Cart Financing - Easy Payment Plans & Options",
    benefitSentence: "Flexible street-legal golf cart financing options and payment plans for DENAGO and Evolution electric carts across all 50 states.",
    keywords: "street legal golf cart financing, neighborhood golf cart loans, LSV payment plans, DENAGO Evolution financing nationwide",
    pageName: "financing",
    canonicalUrl: "https://neighborgolfcarts.com/financing",
    ogType: "website"
  }),
  
  // Specialty pages
  showroom: (): PageSEOConfig => ({
    h1Text: "Neighborhood Golf Carts National Showroom",
    benefitSentence: "Visit our premier showroom featuring the complete lineup of DENAGO and Evolution street-legal electric vehicles serving neighborhoods across all 50 states.",
    keywords: "neighborhood golf carts showroom, street legal golf cart dealership, DENAGO Evolution nationwide, LSV sales all 50 states",
    pageName: "showroom",
    canonicalUrl: "https://neighborgolfcarts.com/showroom",
    ogType: "website"
  }),
  
  thankYou: (): PageSEOConfig => ({
    h1Text: "Thank You!",
    benefitSentence: "Thank you for contacting Neighborhood Golf Carts, we'll respond to your neighborhood golf cart inquiry within 24 hours.",
    keywords: "thank you, contact confirmation, Neighborhood Golf Carts, street legal golf carts",
    pageName: "thankyou",
    canonicalUrl: "https://neighborgolfcarts.com/thank-you",
    ogType: "website"
  }),
  
  // Policy pages
  privacyPolicy: (): PageSEOConfig => ({
    h1Text: "Privacy Policy",
    benefitSentence: "Review Neighborhood Golf Carts' privacy policy to understand how we protect your personal information across all nationwide locations.",
    keywords: "privacy policy, data protection, personal information, Neighborhood Golf Carts",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/privacy-policy",
    ogType: "website"
  }),
  
  termsOfService: (): PageSEOConfig => ({
    h1Text: "Terms of Service",
    benefitSentence: "Review Neighborhood Golf Carts' terms of service for purchasing golf carts, rental services, and website usage across nationwide locations.",
    keywords: "terms of service, terms and conditions, golf cart purchase, rental agreement, Neighborhood Golf Carts",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/terms-of-service",
    ogType: "website"
  }),
  
  correctionsPolicy: (): PageSEOConfig => ({
    h1Text: "Corrections Policy",
    benefitSentence: "Learn about Neighborhood Golf Carts' commitment to accuracy and transparent process for handling corrections to published content and information.",
    keywords: "corrections policy, content accuracy, Neighborhood Golf Carts, information corrections",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/policies/corrections",
    ogType: "website"
  }),
  
  deliveryPolicy: (): PageSEOConfig => ({
    h1Text: "Delivery Policy",
    benefitSentence: "Comprehensive golf cart delivery services throughout the nationwide from all 50 states with free delivery zones and professional transport.",
    keywords: "delivery policy, golf cart delivery, nationwide delivery, golf cart shipping",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/policies/delivery",
    ogType: "website"
  }),
  
  diversityPolicy: (): PageSEOConfig => ({
    h1Text: "Diversity & Inclusion Policy", 
    benefitSentence: "Learn about Neighborhood Golf Carts' commitment to diversity, equity, and inclusion in our nationwide workplace and customer service practices.",
    keywords: "diversity policy, equity inclusion, Neighborhood Golf Carts, workplace diversity nationwide",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/policies/diversity",
    ogType: "website"
  }),
  
  ethicsPolicy: (): PageSEOConfig => ({
    h1Text: "Ethics Policy",
    benefitSentence: "Learn about Neighborhood Golf Carts' code of ethics and business conduct standards serving customers throughout the nationwide from all 50 states.",
    keywords: "ethics policy, business ethics, Neighborhood Golf Carts, code of conduct nationwide",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/policies/ethics",
    ogType: "website"
  }),
  
  feedbackPolicy: (): PageSEOConfig => ({
    h1Text: "Feedback Policy",
    benefitSentence: "Learn how to provide feedback to Neighborhood Golf Carts and our commitment to customer feedback and continuous improvement across nationwide locations.",
    keywords: "feedback policy, customer feedback, Neighborhood Golf Carts, customer service policy",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/policies/feedback",
    ogType: "website"
  }),
  
  returnPolicy: (): PageSEOConfig => ({
    h1Text: "Return Policy",
    benefitSentence: "Learn about Neighborhood Golf Carts return policy for golf cart purchases, accessories, and parts across nationwide locations from all 50 states.",
    keywords: "return policy, golf cart returns, Neighborhood Golf Carts, refund policy nationwide",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/policies/return",
    ogType: "website"
  }),
  
  rentalPolicy: (): PageSEOConfig => ({
    h1Text: "Rental Policy",
    benefitSentence: "Complete golf cart rental policy for Neighborhood Golf Carts with rental requirements, responsibilities, and terms throughout nationwide locations.",
    keywords: "rental policy, golf cart rental, nationwide rentals, golf cart rental policy",
    pageName: "policy",
    canonicalUrl: "https://neighborgolfcarts.com/policies/rental",
    ogType: "website"
  }),
  
  // Vehicle-specific configs
  denagoEvNomad: (): PageSEOConfig => ({
    h1Text: "EV NOMAD",
    benefitSentence: "Discover the DENAGO EV NOMAD designed for outdoor adventures and off-road capability with 45-60 mile range, perfect for nationwide exploration.",
    keywords: "DENAGO EV NOMAD, adventure electric vehicle, off-road golf cart, outdoor recreation, DENAGO dealer nationwide",
    pageName: "vehicle",
    canonicalUrl: "https://neighborgolfcarts.com/vehicles/denago-ev-nomad",
    ogType: "product"
  }),
  
  denagoEvCityPage: (): PageSEOConfig => ({
    h1Text: "EV CITY",
    benefitSentence: "Discover the DENAGO EV CITY lineup with urban mobility features and street-legal NEV certification, perfect for nationwide neighborhood transportation.",
    keywords: "DENAGO EV CITY, street legal electric vehicle, NEV, urban mobility, DENAGO dealer nationwide",
    pageName: "vehicle",
    canonicalUrl: "https://neighborgolfcarts.com/vehicles/denago-ev-city",
    ogType: "product"
  }),
  
  evolutionClassic4Plus: (): PageSEOConfig => ({
    h1Text: "CLASSIC 4 PLUS",
    benefitSentence: "Experience the Evolution Classic 4 Plus with timeless design and modern electric performance combining classic styling with contemporary technology throughout the nationwide.",
    keywords: "Evolution Classic 4 Plus, classic golf cart, premium electric vehicle, traditional styling, Evolution dealer nationwide",
    pageName: "vehicle",
    canonicalUrl: "https://neighborgolfcarts.com/vehicles/evolution-classic-4-plus",
    ogType: "product"
  }),
  
  denagoEvCity: (): PageSEOConfig => ({
    h1Text: "DENAGO EV City - Street Legal Electric Golf Cart $11,995",
    benefitSentence: "Discover the DENAGO EV City street-legal electric golf cart with 25 mph capability and 35-mile range, perfect for nationwide communities.",
    keywords: "DENAGO EV City, street legal golf cart, LSV low speed vehicle, 25 mph golf cart, nationwide electric vehicle",
    pageName: "vehicle",
    canonicalUrl: "https://neighborgolfcarts.com/vehicles/denago-ev-city",
    ogType: "product"
  }),
  
  // Generic vehicle config generator
  vehicle: (vehicleName: string, brand: string, price?: string): PageSEOConfig => ({
    h1Text: price ? `${vehicleName} - ${brand} Electric Golf Cart ${price}` : vehicleName,
    benefitSentence: `Discover the ${brand} ${vehicleName} electric golf cart with premium features and reliability, available throughout the nationwide from all 50 states.`,
    keywords: `${brand} ${vehicleName}, ${brand} electric golf cart, nationwide electric vehicle, beach golf cart ${vehicleName}`,
    pageName: "vehicle",
    canonicalUrl: `https://neighborgolfcarts.com/vehicles/${vehicleName.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: "product"
  }),
  
  // Location-specific config generator
  location: (locationName: string, state: string): PageSEOConfig => ({
    h1Text: `${locationName} Golf Carts - Premium Beach Transportation Solutions`,
    benefitSentence: `Premium golf cart sales, service, and rentals in ${locationName}, ${state} with DENAGO and Evolution electric vehicles for beach communities.`,
    keywords: `${locationName} golf carts, ${state} neighborhood golf carts, ${locationName} electric vehicles, nationwide golf cart dealer`,
    pageName: "locations",
    canonicalUrl: `https://neighborgolfcarts.com/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: "website"
  }),
  
  // Generic policy config generator
  policy: (policyName: string): PageSEOConfig => ({
    h1Text: policyName,
    benefitSentence: `Learn about Neighborhood Golf Carts' ${policyName.toLowerCase()} serving customers throughout the nationwide from all 50 states.`,
    keywords: `${policyName.toLowerCase()}, Neighborhood Golf Carts policies, nationwide golf cart dealer`,
    pageName: "policy", 
    canonicalUrl: `https://neighborgolfcarts.com/policies/${policyName.toLowerCase().replace(/\s+/g, '-')}`,
    ogType: "website"
  })
};