import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Phone, MapPin, Star, Award, Users, Wrench, CheckCircle, Hammer, Palette, Ruler } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/**
 * ────────────────────────────────────────────────────────────────────────────────
 *  SEO Metadata
 * ────────────────────────────────────────────────────────────────────────────────
 */
export const metadata: Metadata = {
  title: "Expert Carpenter Pretoria | Kitchen Renovations & Built-in Cupboards",
  description:
    "Licensed carpenter in Pretoria & Tshwane. We specialise in kitchen renovations, built-in cupboards, granite installation and fine joinery. Serving Pretoria CBD, Brooklyn, Hatfield, Menlyn, Centurion and surrounding areas with 5-star craftsmanship.",
  keywords:
    "carpenter pretoria, carpenter centurion, kitchen renovation pretoria, built in cupboards pretoria, granite installation pretoria, joinery pretoria, carpenter near me, kitchen contractor pretoria, custom wardrobes pretoria, cabinet maker pretoria",
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/pretoria",
  },
  openGraph: {
    title: "Expert Carpenter Pretoria | Granite & Carpentry",
    description:
      "Professional carpenter for Pretoria, Centurion & Tshwane. Kitchens, cupboards, granite, decking & more – 5-star rated workmanship.",
    url: "https://granitecarpentry.co.za/areas/pretoria",
    images: [
      {
        url: "https://granitecarpentry.co.za/og/pretoria.jpg",
        width: 1200,
        height: 630,
        alt: "Expert Carpenter in Pretoria – modern kitchen installation",
      },
    ],
  },
}

/**
 * ────────────────────────────────────────────────────────────────────────────────
 *  Page Component
 * ────────────────────────────────────────────────────────────────────────────────
 */
export default function PretoriaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              <Badge variant="secondary" className="border-amber-300 bg-amber-600/20 text-amber-100">
                Pretoria &amp; Tshwane
              </Badge>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Expert Carpenter{" "}
              <span className="block text-amber-400 underline decoration-amber-500/60 underline-offset-4">
                Pretoria
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg text-slate-200 md:text-xl">
              From bespoke kitchen renovations to precision built-in cupboards, our licensed craftsmen deliver 5-star
              carpentry solutions across Pretoria, Centurion and the wider Tshwane metro.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-4 text-lg">
                <Link href="/contact">Request a Free Quote</Link>
              </Button>

              <a href="tel:+27676014490" className="flex items-center gap-2 text-lg text-amber-50 hover:text-amber-300">
                <Phone className="h-5 w-5" />
                067&nbsp;601&nbsp;4490
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                5.0&nbsp;Customer&nbsp;Rating
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-400" />
                Licensed&nbsp;&amp;&nbsp;Insured
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-400" />
                45&#43;&nbsp;Projects&nbsp;Completed
              </div>
            </div>
          </div>
        </div>

        {/* Decorative image */}
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Modern Pretoria kitchen installed by Granite & Carpentry"
          width={1200}
          height={800}
          priority
          className="absolute bottom-0 right-0 hidden h-80 w-auto lg:block"
        />
      </section>

      {/* ── Services ─────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 py-20 lg:py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
            Professional Carpentry Services in Pretoria
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We service Pretoria CBD, Brooklyn, Hatfield, Menlyn, Centurion, Waterkloof, Silver Lakes and every suburb in
            between.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Kitchen Renovations */}
          <Card className="border-l-4 border-amber-600 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-amber-600" />
                Kitchen Renovations
              </CardTitle>
              <CardDescription>Complete design &amp; installation.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {[
                  "Custom cabinetry & islands",
                  "Granite & quartz countertops",
                  "Soft-close hinges & runners",
                  "Plumbing & electrical coordination",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Built-in Cupboards */}
          <Card className="border-l-4 border-amber-600 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hammer className="h-5 w-5 text-amber-600" />
                Built-in Cupboards
              </CardTitle>
              <CardDescription>Bedrooms, studies &amp; utilities.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {["Walk-in wardrobes", "Home office shelving", "Entertainment units", "Garage & utility storage"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Granite & Stone */}
          <Card className="border-l-4 border-amber-600 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-amber-600" />
                Granite &amp; Quartz
              </CardTitle>
              <CardDescription>Precision templating &amp; fitting.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {["Kitchen worktops", "Bathroom vanities", "Reception counters", "Fireplace surrounds"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Decking & Flooring */}
          <Card className="border-l-4 border-amber-600 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-amber-600" />
                Decking &amp; Flooring
              </CardTitle>
              <CardDescription>Interior &amp; exterior timber solutions.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {[
                  "Composite & hardwood decks",
                  "Laminate & vinyl floors",
                  "Skirting & trims",
                  "Staircases & balustrades",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Drywall & Ceilings */}
          <Card className="border-l-4 border-amber-600 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-amber-600" />
                Drywall &amp; Ceilings
              </CardTitle>
              <CardDescription>Partitioning, bulkheads &amp; repairs.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {[
                  "Office & home partitions",
                  "Skimmed ceilings",
                  "Bulkhead lighting features",
                  "Fire-rated assemblies",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Carpentry Training */}
          <Card className="border-l-4 border-amber-600 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hammer className="h-5 w-5 text-amber-600" />
                Carpentry Training
              </CardTitle>
              <CardDescription>Hands-on workshops for apprentices.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {[
                  "Weekend skill boosters",
                  "On-site mentorship",
                  "Tools & safety modules",
                  "Industry certification prep",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Pretoria Property?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Talk to our master carpenters today for a free, no-obligation quotation. Quality workmanship, transparent
            pricing, guaranteed.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-slate-100 px-8 py-4 text-lg">
              <Link href="/contact">Get My Free Quote</Link>
            </Button>

            <a href="tel:+27676014490" className="flex items-center gap-2 text-lg hover:text-amber-200">
              <Phone className="h-5 w-5" />
              067&nbsp;601&nbsp;4490
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
