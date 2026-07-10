export function GoogleBusinessSchema() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.timberstudio.co.za/#business",
    name: "The Timber Studio",
    alternateName: "The Timber Studio Johannesburg",
    description:
      "Professional carpentry and joinery specialists in Johannesburg. Specializing in kitchen renovations, built-in cupboards, bathroom renovations, decking, flooring, drywall, ceilings, and door installation.",
    url: "https://www.timberstudio.co.za",
    logo: {
      "@type": "ImageObject",
      url: "https://www.timberstudio.co.za/timber-studio-logo.png",
      width: 400,
      height: 400,
    },
    image: [
      "https://www.timberstudio.co.za/timber-studio-logo.png",
      "https://www.timberstudio.co.za/Kitchen-renovations-sandton.webp",
      "https://www.timberstudio.co.za/beautiful-decking.jpg",
      "https://www.timberstudio.co.za/Built-Built-in-Cupboards-Midrand.jpg",
    ],
    telephone: "+27633977498",
    email: "info@timberstudio.co.za",
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
    areaServed: [
      {
        "@type": "City",
        name: "Johannesburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      {
        "@type": "City",
        name: "Sandton",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      {
        "@type": "City",
        name: "Randburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      {
        "@type": "City",
        name: "Pretoria",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      {
        "@type": "City",
        name: "Centurion",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carpentry and Joinery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Renovations",
            description: "Complete kitchen renovation services including custom cabinets and premium finishes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Built-in Cupboards",
            description: "Custom built-in cupboards and wardrobes for bedrooms, studies, and storage solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Door Installation",
            description: "Professional installation of pivot, barn, security, French, and solid wood doors",
          },
        },
      ],
    },
    priceRange: "R5000-R100000",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "ZAR",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
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
          "Excellent kitchen renovation service. The team was professional, punctual, and delivered exactly what was promised. Highly recommend The Timber Studio!",
        datePublished: "2026-04-15",
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
          "Outstanding built-in cupboard work. The finish looks amazing and the installation was flawless. Great value for money.",
        datePublished: "2026-05-20",
      },
    ],
    sameAs: [
      "https://www.facebook.com/timberstudio",
      "https://www.instagram.com/timberstudio",
      "https://www.linkedin.com/company/timberstudio",
    ],
    founder: {
      "@type": "Person",
      name: "The Timber Studio Team",
    },
    foundingDate: "2020",
    slogan: "Professional Carpentry & Joinery Excellence",
    knowsAbout: [
      "Kitchen Renovations",
      "Built-in Cupboards",
      "Door Installation",
      "Drywall & Ceilings",
      "Decking & Flooring",
      "Carpentry Services",
      "Home Renovations",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Free Consultation",
        description: "Free home consultation and quote for all carpentry and joinery services",
        price: "0",
        priceCurrency: "ZAR",
      },
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.timberstudio.co.za/#organization",
    name: "The Timber Studio",
    url: "https://www.timberstudio.co.za",
    logo: {
      "@type": "ImageObject",
      url: "https://www.timberstudio.co.za/timber-studio-logo.png",
      width: 400,
      height: 400,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27633977498",
      contactType: "customer service",
      areaServed: "ZA",
      availableLanguage: ["English", "Afrikaans"],
    },
    sameAs: [
      "https://www.facebook.com/timberstudio",
      "https://www.instagram.com/timberstudio",
      "https://www.linkedin.com/company/timberstudio",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  )
}
