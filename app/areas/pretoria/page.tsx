import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Star, CheckCircle, Award, Users, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Expert Carpenter Pretoria | Professional Kitchen Renovations & Built-in Cupboards",
  description:
    "Professional carpentry services in Pretoria, Tshwane. Expert kitchen renovations, built-in cupboards, granite installations, and quality joinery. Serving Pretoria CBD, Hatfield, Brooklyn, Menlyn, and surrounding areas. Licensed professionals with 5-star rating.",
  keywords:
    "carpenter Pretoria, kitchen renovation Pretoria, built-in cupboards Pretoria, granite installation Pretoria, expert carpenter Tshwane, professional carpenter Hatfield, quality joinery Brooklyn, Pretoria carpenter near me, capital city carpentry services, Menlyn kitchen renovations, trusted carpenter Pretoria, licensed carpenter Tshwane",
  openGraph: {
    title: "Expert Carpenter Pretoria | Professional Kitchen Renovations",
    description:
      "Professional carpentry services in Pretoria, Tshwane. Expert kitchen renovations, built-in cupboards, granite installations. 5-star rated professionals serving the capital city.",
    url: "https://granitecarpentry.co.za/areas/pretoria",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/pretoria",
  },
}

export default function PretoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-amber-400" />
              <Badge variant="secondary" className="bg-amber-600/20 text-amber-200 border-amber-400/30">
                Serving Pretoria & Tshwane
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Carpenter
              <span className="block text-amber-400">Pretoria</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Professional carpentry services in South Africa's capital city. Delivering expert kitchen renovations,
              built-in cupboards, and premium joinery solutions throughout Pretoria and Tshwane.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get Expert Quote</Link>
              </Button>
              <a
                href="tel:+27676014490"
                className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                067 601 4490
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>47+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Professional Carpentry Services in Pretoria
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Serving Pretoria CBD, Hatfield, Brooklyn, Menlyn, and surrounding Tshwane areas with expert carpentry
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Expert Kitchen Renovations
                </CardTitle>
                <CardDescription>Complete kitchen transformations for capital city homes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Custom kitchen design & installation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Premium granite & quartz countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Modern kitchen islands & bars
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Professional cabinet installation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Built-in Cupboards
                </CardTitle>
                <CardDescription>Custom storage solutions for every space</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bedroom wardrobes & walk-in closets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Home office & study built-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Entertainment units & media centers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Linen & utility cupboards
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Granite & Stone Installation
                </CardTitle>
                <CardDescription>Professional stone work & installations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Natural granite countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Engineered quartz surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bathroom vanity installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Precision measuring & fitting
                  </li>
                </ul>
              </Car\
