import { useEffect } from "react";

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType?: string;
  provider?: string;
  areaServed?: string;
  availableChannel?: string[];
  offers?: {
    price?: string;
    priceCurrency?: string;
    description?: string;
  }[];
}

export default function ServiceSchema({
  serviceName,
  description,
  serviceType = "Golf Cart Service",
  provider = "Neighborhood Golf Carts",
  areaServed = "all 50 states from nationwide",
  availableChannel = ["https://schema.org/OnlineChannel", "https://schema.org/InStoreChannel"],
  offers = []
}: ServiceSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "serviceType": serviceType,
      "provider": {
        "@type": "LocalBusiness",
        "name": provider,
        "telephone": "1-844-844-6638",
        "email": "info@neighborgolfcarts.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "642 NJ-35",
          "addressLocality": "Neptune City",
          "addressRegion": "NJ",
          "postalCode": "07753",
          "addressCountry": "US"
        },
        "logo": {
          "@type": "ImageObject",
          "url": "https://neighborgolfcarts.com/attached_assets/Shoreside Golf Carts (1)_1756300346412.png"
        }
      },
      "areaServed": {
        "@type": "State",
        "name": areaServed
      },
      "availableChannel": availableChannel.map(channel => ({
        "@type": "ServiceChannel",
        "serviceUrl": channel === "https://schema.org/OnlineChannel" ? "https://neighborgolfcarts.com" : undefined,
        "serviceSmsNumber": channel === "https://schema.org/InStoreChannel" ? "1-844-844-6638" : undefined
      })),
      ...(offers.length > 0 && {
        "offers": offers.map(offer => ({
          "@type": "Offer",
          "description": offer.description,
          "price": offer.price || "Contact for pricing",
          "priceCurrency": offer.priceCurrency || "USD",
          "seller": {
            "@type": "Organization",
            "name": provider
          }
        }))
      }),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-service]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-service", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-service]');
      if (script) {
        script.remove();
      }
    };
  }, [serviceName, description, serviceType, provider, areaServed]);

  return null;
}