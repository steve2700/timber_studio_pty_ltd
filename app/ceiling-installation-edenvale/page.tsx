import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Ceiling Installation Edenvale 2025 | Professional Ceiling Services",
  description:
    "Professional ceiling installation in Edenvale. Suspended ceilings, acoustic ceilings, false ceilings. Residential & commercial. 5-star rated. Free quotes. Call 067 601 4490.",
  keywords:
    "ceiling installation Edenvale, suspended ceilings Edenvale, acoustic ceilings Edenvale, false ceiling Edenvale, ceiling contractors Edenvale, ceiling tiles Edenvale, office ceilings Edenvale, residential ceilings Edenvale, ceiling cost Edenvale, ceiling installation cost Edenvale",
}

export default function CeilingInstallationEdenvalePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Ceiling Installation Edenvale",
            description:
              "Professional ceiling installation services in Edenvale including suspended ceilings and acoustic solutions.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Edenvale",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-amber-600 text-white">
              <Building className="h-3 w-3 mr-1" />
              Professional Ceiling Installation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Expert <span className="text-amber-400">Ceiling Installation</span> in Edenvale
            </h1>
            <p className="text-xl text-slate-300">
              Professional ceiling installation services for Edenvale homes and businesses. Suspended ceilings, acoustic
              solutions, and custom designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  067 601 4490
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Professional Ceiling Installation Services in Edenvale</h2>
            <p>
              Ceiling installation in Edenvale requires expertise in various ceiling systems, proper installation
              techniques, and knowledge of building codes. Our ceiling installation services cater to both residential
              and commercial clients throughout Edenvale including Edenvale Central, Dowerglen, Greenstone, and
              surrounding areas. We specialize in suspended ceilings for offices, acoustic ceilings for noise control,
              false ceilings for modern aesthetics, and traditional plasterboard ceilings for homes.
            </p>

            <h3>Suspended Ceiling Systems</h3>
            <p>
              Suspended ceilings are ideal for Edenvale commercial properties offering easy access to utilities,
              improved acoustics, and professional appearance. Our suspended ceiling installations include acoustic
              tiles for noise reduction, easy access panels for maintenance, fire-rated options meeting building codes,
              and modern grid systems in various finishes. These systems are perfect for offices, retail spaces, medical
              facilities, and educational institutions where functionality and aesthetics are equally important.
            </p>

            <h3>Acoustic Ceiling Solutions</h3>
            <p>
              Acoustic ceilings provide superior sound absorption and noise control for Edenvale properties requiring
              quiet environments. Our acoustic ceiling installations include specialized sound-absorbing tiles, proper
              installation for maximum effectiveness, various design options and finishes, and integration with lighting
              and HVAC systems. These solutions are ideal for conference rooms, recording studios, home theaters, and
              open-plan offices where noise control is essential.
            </p>

            <h3>Residential Ceiling Installation</h3>
            <p>
              Residential ceiling installation in Edenvale homes requires attention to detail and quality craftsmanship
              to create beautiful, long-lasting results. We provide complete ceiling installation services including
              plasterboard ceilings, cornices and decorative moldings, recessed lighting integration, and paint-ready
              finishing. Our team works efficiently to minimize disruption to your home while delivering professional
              results. All installations include our 24-month warranty covering materials and workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ceiling Installation Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Suspended Ceilings</h3>
                <p className="text-slate-600 mb-4">Professional suspended ceiling systems for commercial properties.</p>
                <p className="text-amber-600 font-bold">From R180/m²</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Acoustic Ceilings</h3>
                <p className="text-slate-600 mb-4">
                  Specialized acoustic solutions for noise control and sound management.
                </p>
                <p className="text-amber-600 font-bold">From R220/m²</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Plasterboard Ceilings</h3>
                <p className="text-slate-600 mb-4">
                  Traditional plasterboard ceiling installation for residential properties.
                </p>
                <p className="text-amber-600 font-bold">From R140/m²</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Ceiling & Drywall Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Drywall Edenvale</h3>
                <p className="text-slate-600 mb-6">Professional drywall installation services in Edenvale.</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-edenvale">View Services</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Drywall Boksburg</h3>
                <p className="text-slate-600 mb-6">Expert drywall solutions for Boksburg properties.</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-boksburg">View Services</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ceiling Installation Bryanston</h3>
                <p className="text-slate-600 mb-6">Professional ceiling installation in Bryanston.</p>
                <Button asChild variant="outline">
                  <Link href="/ceiling-installation-bryanston">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional Ceiling Installation in Edenvale?</h2>
          <p className="text-xl mb-8">
            Transform your space with expert ceiling installation. Get a free consultation today.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
