"use client"

import { useEffect } from "react"

interface Address {
  street: string
  city: string
  region: string
  postalCode: string
  country: string
}

interface SocialMedia {
  facebook?: string
  instagram?: string
  linkedin?: string
  twitter?: string
}

interface Images {
  logo: string
  photos: string[]
}

interface GoogleBusinessSchemaProps {
  businessName: string
  description: string
  address: Address
  phone: string
  email: string
  website: string
  services: string[]
  areas: string[]
  rating: number
  reviewCount: number
  openingHours: string[]
  socialMedia: SocialMedia
  images: Images
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
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: businessName,
      description: description,
      image: images.photos,
      logo: images.logo,
      telephone: phone,
      email: email,
      url: website,
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
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: areas.map((area) => ({
        "@type": "City",
        name: area,
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      })),
      serviceType: services,
      sameAs: Object.values(socialMedia).filter(Boolean),
      priceRange: "$$",
      currenciesAccepted: "ZAR",
      paymentAccepted: ["Cash", "Bank Transfer", "Card"],
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
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

  return null
}
