interface GoogleBusinessSchemaProps {
  businessName: string
  description: string
  address: {
    street: string
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    description: description,
    url: website,
    telephone: phone,
    email: email,
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
    openingHoursSpecification: openingHours.map((hours) => {
      const [day, time] = hours.split(" ")
      const [opens, closes] = time.split("-")
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: opens,
        closes: closes,
      }
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviewCount,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carpentry Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: Object.values(socialMedia).filter(Boolean),
    logo: {
      "@type": "ImageObject",
      url: images.logo,
    },
    image: images.photos.map((photo) => ({
      "@type": "ImageObject",
      url: photo,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
