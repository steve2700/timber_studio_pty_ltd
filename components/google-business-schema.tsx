"use client"

import { useEffect } from "react"

interface GoogleBusinessSchemaProps {
  businessName: string
  description: string
  address: {
    street?: string
    city: string
    region: string
    postalCode: string
    country: string
  }
  phone: string
  email: string
  website: string
  services: string[]
  areas: string[]
  rating: number
  reviewCount: number
  openingHours: string[]
  socialMedia: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
  images: {
    logo: string
    photos: string[]
  }
}

export function GoogleBusinessSchema({
  businessName,
  description,
  address,
  phone,
  email,
  website,
  services,
  areas,
  rating,
  reviewCount,
  openingHours,
  socialMedia,
  images,
}: GoogleBusinessSchemaProps) {
  useEffect(() => {
    // Enhanced Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${website}/#business`,
      name: businessName,
      alternateName: "Granite & Carpentry",
      description: description,
      url: website,
      telephone: phone,
      email: email,
      image: images.photos,
      logo: {
        "@type": "ImageObject",
        url: images.logo,
        width: 300,
        height: 300,
      },
      sameAs: Object.values(socialMedia).filter(Boolean),
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.region,
        postalCode: address.postalCode,
        addressCountry: address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -26.2041,
        longitude: 28.0473,
      },
      openingHours: openingHours,
      priceRange: "$$",
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "EFT"],
      currenciesAccepted: "ZAR",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.toString(),
        reviewCount: reviewCount.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: areas.map((area) => ({
        "@type": "City",
        name: area,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Professional Carpentry and Granite Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          "@id": `${website}/#offer-${index}`,
          itemOffered: {
            "@type": "Service",
            name: service,
            provider: {
              "@id": `${website}/#business`,
            },
          },
        })),
      },
      makesOffer: services.map((service, index) => ({
        "@type": "Offer",
        "@id": `${website}/#service-${index}`,
        name: service,
        description: `Professional ${service.toLowerCase()} services in Johannesburg and Gauteng`,
        seller: {
          "@id": `${website}/#business`,
        },
        areaServed: areas.map((area) => ({
          "@type": "City",
          name: area,
        })),
      })),
      knowsAbout: services,
      slogan: "Professional Carpentry & Granite Excellence in Johannesburg",
      award: "5-Star Customer Rating",
      numberOfEmployees: "5-10",
      foundingDate: "2020",
      legalName: "Granite & Carpentry (Pty) Ltd",
      vatID: "ZA123456789", // Add your actual VAT number
      taxID: "123456789", // Add your actual tax ID
      duns: "123456789", // Add DUNS number if available
      naics: "238350", // Finish Carpentry Contractors
      isicV4: "4330", // Joinery installation
      founder: {
        "@type": "Person",
        name: "Master Carpenter",
        jobTitle: "Founder & Lead Carpenter",
      },
      employee: [
        {
          "@type": "Person",
          name: "Professional Carpentry Team",
          jobTitle: "Certified Carpenters",
        },
      ],
    }

    // FAQ Schema for better search results
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What carpentry services do you offer in Johannesburg?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer comprehensive carpentry services including kitchen renovations, built-in cupboards, granite and quartz installations, decking, drywall, ceiling installation, and flooring across Johannesburg and Gauteng.",
          },
        },
        {
          "@type": "Question",
          name: "Which areas in Johannesburg do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve all major Gauteng areas including Johannesburg South, Sandton, Randburg, Kempton Park, Midrand, Fourways, Boksburg, Centurion, Pretoria, and surrounding areas.",
          },
        },
        {
          "@type": "Question",
          name: "How much do kitchen renovations cost in Johannesburg?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kitchen renovation costs vary based on size, materials, and complexity. We provide free, detailed quotes within 24 hours. Contact us at 067 601 4490 for a personalized estimate.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer free quotes for carpentry work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We provide free, detailed quotes for all carpentry and granite installation projects. We respond within 24 hours and offer on-site consultations.",
          },
        },
      ],
    }

    // Service Schema for each service
    const serviceSchemas = services.map((service, index) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${website}/#service-${service.toLowerCase().replace(/\s+/g, "-")}`,
      name: service,
      description: `Professional ${service.toLowerCase()} services in Johannesburg and Gauteng`,
      provider: {
        "@id": `${website}/#business`,
      },
      areaServed: areas.map((area) => ({
        "@type": "City",
        name: area,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service} Services`,
        itemListElement: [
          {
            "@type": "Offer",
            name: `Professional ${service}`,
            description: `Expert ${service.toLowerCase()} with quality guarantee`,
            price: "Contact for quote",
            priceCurrency: "ZAR",
          },
        ],
      },
    }))

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: website,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${website}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Areas",
          item: `${website}/areas`,
        },
      ],
    }

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${website}/#organization`,
      name: businessName,
      url: website,
      logo: images.logo,
      image: images.photos,
      description: description,
      telephone: phone,
      email: email,
      address: {
        "@type": "PostalAddress",
        addressLocality: address.city,
        addressRegion: address.region,
        addressCountry: address.country,
      },
      sameAs: Object.values(socialMedia).filter(Boolean),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.toString(),
        reviewCount: reviewCount.toString(),
      },
    }

    // Inject all schemas
    const schemas = [localBusinessSchema, faqSchema, ...serviceSchemas, breadcrumbSchema, organizationSchema]

    schemas.forEach((schema, index) => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.id = `schema-${index}`
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`)
        if (script) {
          document.head.removeChild(script)
        }
      })
    }
  }, [
    businessName,
    description,
    address,
    phone,
    email,
    website,
    services,
    areas,
    rating,
    reviewCount,
    openingHours,
    socialMedia,
    images,
  ])

  return null // This component doesn't render anything visible
}
