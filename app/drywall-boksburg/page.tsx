import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowRight, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Boksburg 2026 | Professional Drywalling Services",
  description:
    "Professional drywall installation in Boksburg. Residential & commercial drywalling, plasterboard walls, ceiling installation. 5-star rated. Free quotes. Call 067 601 4490.",
  keywords:
    "drywall installation Boksburg, drywalling Boksburg, plasterboard installation Boksburg, drywall contractors Boksburg, drywall repair Boksburg, ceiling installation Boksburg, drywall finishing Boksburg, commercial drywall Boksburg, residential drywall Boksburg, drywall cost Boksburg",
}

export default function DrywallBoksburgPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Drywall Installation Boksburg",
            description:
              "Professional drywall installation services in Boksburg for residential and commercial properties.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Boksburg",
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
              <Home className="h-3 w-3 mr-1" />
              Professional Drywall Installation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Expert <span className="text-amber-400">Drywall Installation</span> in Boksburg
            </h1>
            <p className="text-xl text-slate-300">
              Professional drywall and plasterboard installation for Boksburg homes and businesses. Quality
              craftsmanship with 24-month warranty.
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
            <h2>Professional Drywall Installation Services in Boksburg</h2>
            <p>
              Drywall installation in Boksburg requires expertise in material selection, proper installation techniques,
              and professional finishing to achieve smooth, paint-ready surfaces. Our drywall services cater to both
              residential and commercial clients throughout Boksburg including Boksburg North, Boksburg South, Reiger
              Park, and surrounding areas. We specialize in standard drywall for living areas, moisture-resistant boards
              for bathrooms and kitchens, and fire-rated drywall where required by building codes.
            </p>

            <h3>Residential Drywall Installation</h3>
            <p>
              Residential drywall installation in Boksburg homes requires precision and attention to detail to create
              smooth, flawless walls ready for painting or wallpaper. Our installation process includes proper framing
              preparation, correct board placement, professional taping and mudding with multiple coats, thorough
              sanding, and priming. We use quality materials from trusted suppliers like Gyproc and Lafarge that perform
              well in South African conditions. Each project includes comprehensive cleanup and our 24-month warranty.
            </p>

            <h3>Commercial Drywall Solutions</h3>
            <p>
              Commercial drywall projects in Boksburg require efficient installation, minimal disruption to business
              operations, and compliance with building codes. We provide complete commercial drywall services including
              office partitions, retail space build-outs, warehouse offices, and industrial applications. Our team works
              efficiently to meet project deadlines while maintaining quality standards. We coordinate with other trades
              and provide detailed project timelines and progress updates.
            </p>

            <h3>Drywall Finishing and Repairs</h3>
            <p>
              Professional drywall finishing creates smooth, paint-ready surfaces that enhance your interior spaces. Our
              finishing process includes multiple mud coats, thorough sanding, texture application if desired, and
              priming. We also provide drywall repair services for damaged walls, holes, cracks, and water damage. All
              repairs are seamlessly blended with existing surfaces for invisible results. Our experienced team ensures
              quality workmanship on every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Drywall Services in Boksburg</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Standard Drywall</h3>
                <p className="text-slate-600 mb-4">
                  Professional installation for living areas, bedrooms, and general spaces.
                </p>
                <p className="text-amber-600 font-bold">From R120/m²</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Moisture-Resistant Drywall</h3>
                <p className="text-slate-600 mb-4">Specialized boards for bathrooms, kitchens, and wet areas.</p>
                <p className="text-amber-600 font-bold">From R150/m²</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Drywall Repairs</h3>
                <p className="text-slate-600 mb-4">Expert repair services for damaged walls and ceilings.</p>
                <p className="text-amber-600 font-bold">From R350</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Drywall Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Drywall Edenvale</h3>
                <p className="text-slate-600 mb-6">Professional drywall installation in Edenvale.</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-edenvale">View Services</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Drywall Benoni</h3>
                <p className="text-slate-600 mb-6">Expert drywall solutions for Benoni properties.</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-benoni">View Services</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Ceiling Installation Edenvale</h3>
                <p className="text-slate-600 mb-6">Professional ceiling installation in Edenvale.</p>
                <Button asChild variant="outline">
                  <Link href="/ceiling-installation-edenvale">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional Drywall Installation in Boksburg?</h2>
          <p className="text-xl mb-8">Get a free consultation and detailed quote for your drywall project.</p>
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
