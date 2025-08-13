"use client"

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
    facebook: string
    instagram: string
    linkedin: string
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
    image: images.photos,
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
    url: website,
    servesCuisine: services,
    areaServed: areas,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: reviewCount,
    },
    openingHoursSpecification: openingHours.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day.split(" ")[0],
      opens: day.split(" ")[1]?.split("-")[0] || "08:00",
      closes: day.split(" ")[1]?.split("-")[1] || "17:00",
    })),
    sameAs: [socialMedia.facebook, socialMedia.instagram, socialMedia.linkedin, website],
    logo: images.logo,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
