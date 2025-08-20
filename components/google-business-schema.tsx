export function GoogleBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Granite Carpentry & Joinery Experts",
    image: "https://granitecarpentry.co.za/granite-carpentry.webp",
    description:
      "Professional carpentry and joinery services in Johannesburg, Sandton, Pretoria. Expert kitchen renovations, built-in cupboards, granite installations, decking, and custom woodwork with 15+ years experience.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.2041,
      longitude: 28.0473,
    },
    url: "https://granitecarpentry.co.za",
    telephone: "011 568 9012",
    email: "info@granitecarpentry.co.za",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -26.2041,
        longitude: 28.0473,
      },
      geoRadius: "50000",
    },
    areaServed: [
      "Johannesburg",
      "Sandton",
      "Pretoria",
      "Centurion",
      "Midrand",
      "Kempton Park",
      "Randburg",
      "Roodepoort",
      "Fourways",
      "Edenvale",
      "Boksburg",
      "Alberton",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carpentry Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Renovations",
            description:
              "Complete kitchen renovation services including custom cabinetry, countertops, and installation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Built-in Cupboards",
            description: "Custom built-in cupboards and wardrobes for bedrooms, studies, and storage solutions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Granite & Quartz Installation",
            description: "Professional granite and quartz countertop installation for kitchens and bathrooms.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Decking & Flooring",
            description: "Wooden decking installation and flooring services for indoor and outdoor spaces.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drywall & Ceilings",
            description: "Professional drywall installation and ceiling construction services.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Excellent workmanship on our kitchen renovation. The team was professional, punctual, and delivered exactly what was promised. Highly recommended!",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael Smith",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Outstanding service for our built-in cupboards. Quality craftsmanship and attention to detail. Will definitely use them again.",
      },
    ],
    sameAs: [
      "https://www.facebook.com/granitecarpentry",
      "https://www.instagram.com/granitecarpentry",
      "https://www.linkedin.com/company/granite-carpentry",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
