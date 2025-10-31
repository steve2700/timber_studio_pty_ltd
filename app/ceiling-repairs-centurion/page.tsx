import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Ceiling Repairs Centurion 2025 | Emergency Ceiling Repair Services",
  description:
    "Professional ceiling repair services in Centurion. Water damage, cracks, sagging ceilings. Emergency repairs available. 5-star rated. Free quotes. Call 067 601 4490.",
  keywords:
    "ceiling repairs Centurion, ceiling repair Centurion, water damage ceiling Centurion, ceiling crack repair Centurion, sagging ceiling repair Centurion, emergency ceiling repair Centurion, ceiling restoration Centurion, ceiling contractors Centurion, ceiling repair cost Centurion, ceiling water damage Centurion",
}

export default function CeilingRepairsCenturionPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Ceiling Repairs Centurion",
            description:
              "Professional ceiling repair services in Centurion including water damage, cracks, and structural repairs.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Centurion",
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
              <AlertCircle className="h-3 w-3 mr-1" />
              Emergency Ceiling Repairs Available
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Professional <span className="text-amber-400">Ceiling Repairs</span> in Centurion
            </h1>
            <p className="text-xl text-slate-300">
              Expert ceiling repair services for water damage, cracks, and structural issues in Centurion. Emergency
              repairs available 24/7.
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
            <h2>Expert Ceiling Repair Services in Centurion</h2>
            <p>
              Ceiling damage in Centurion homes requires immediate professional attention to prevent further
              deterioration and costly repairs. Our ceiling repair services address water damage from roof leaks,
              plumbing issues, cracks from structural settling, sagging ceilings, and texture damage. We serve all
              Centurion suburbs including Centurion Central, Irene, Eldoraigne, and surrounding areas with emergency
              repair services available 24/7.
            </p>

            <h3>Water Damage Ceiling Repairs</h3>
            <p>
              Water damage is the most common ceiling issue in Centurion properties, often caused by roof leaks, burst
              pipes, or geyser failures. Our water damage repair process includes moisture assessment, affected material
              removal, structural drying, mold prevention treatment, and complete restoration. We work with insurance
              companies and provide detailed documentation for claims. Emergency services ensure rapid response to
              minimize damage and prevent mold growth.
            </p>

            <h3>Crack Repair and Structural Issues</h3>
            <p>
              Ceiling cracks in Centurion homes can indicate structural settling, foundation movement, or improper
              installation. Our crack repair services include structural assessment, crack stabilization, professional
              patching, texture matching, and paint-ready finishing. We identify underlying causes and provide solutions
              that prevent future cracking. All repairs include our 24-month warranty covering both materials and
              workmanship.
            </p>

            <h3>Sagging Ceiling Restoration</h3>
            <p>
              Sagging ceilings pose safety risks and require immediate professional attention. Common causes include
              water damage, inadequate support, age-related deterioration, and improper installation. Our restoration
              process includes safety assessment, structural reinforcement, damaged material replacement, and complete
              refinishing. We ensure proper support and use quality materials that meet South African building
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ceiling Repair Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Water Damage Repairs</h3>
                <p className="text-slate-600 mb-4">
                  Complete water damage restoration including drying, mold prevention, and refinishing.
                </p>
                <p className="text-amber-600 font-bold">From R450</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Crack Repairs</h3>
                <p className="text-slate-600 mb-4">
                  Professional crack repair with texture matching and paint-ready finish.
                </p>
                <p className="text-amber-600 font-bold">From R350</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Sagging Ceiling Repairs</h3>
                <p className="text-slate-600 mb-4">
                  Structural reinforcement and complete ceiling restoration services.
                </p>
                <p className="text-amber-600 font-bold">From R800</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Drywall & Ceiling Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Drywall Centurion</h3>
                <p className="text-slate-600 mb-6">Professional drywall installation services in Centurion.</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-centurion">View Services</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Drywall Pretoria</h3>
                <p className="text-slate-600 mb-6">Expert drywall solutions for Pretoria properties.</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-pretoria">View Services</Link>
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
          <h2 className="text-3xl font-bold mb-6">Need Emergency Ceiling Repairs in Centurion?</h2>
          <p className="text-xl mb-8">24/7 emergency service available. Call now for immediate assistance.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="tel:+27676014490">
              <Phone className="mr-2 h-5 w-5" />
              Call 067 601 4490 Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
