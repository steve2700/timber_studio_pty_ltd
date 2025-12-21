import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  Shield,
  Users,
  Wrench,
  Sparkles,
  Home,
  ChevronRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Kitchen Cupboards Johannesburg | Professional Cabinet Installation 2025",
  description:
    "Custom kitchen cupboards in Johannesburg, Sandton & Pretoria. Modern & traditional designs. Expert installation. Free quotes. Transform your kitchen today with quality cabinets from R35,000.",
  keywords:
    "kitchen cupboards johannesburg, kitchen cabinets sandton, custom kitchen cupboards pretoria, kitchen cabinets installation johannesburg, kitchen cupboard prices johannesburg, shaker kitchen cupboards, modern kitchen cabinets gauteng, kitchen cupboard manufacturers johannesburg, kitchen renovation cupboards, affordable kitchen cupboards",
  openGraph: {
    title: "Custom Kitchen Cupboards Johannesburg | Professional Cabinet Installation 2025",
    description:
      "Custom kitchen cupboards in Johannesburg. Modern & traditional designs. Expert installation. Transform your kitchen with quality cabinets from Granite Carpentry.",
    images: [{ url: "/carpenter-johannesburg-installing-kitchen-cupboards.jpg", width: 1200, height: 630 }],
    url: "https://granitecarpentry.co.za/kitchen-cupboards",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/kitchen-cupboards",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const kitchenCupboardServices = [
  {
    title: "Complete Kitchen Installations",
    description:
      "Full kitchen cupboard packages including base and wall units, custom kitchen islands with storage, pantry cupboards, breakfast bar cabinets, corner solution units, and appliance housing.",
    icon: Home,
  },
  {
    title: "Base Cabinets",
    description:
      "Sink base units with plumbing access, drawer units with soft-close mechanisms, pull-out storage solutions, waste bin compartments, under-counter storage, and corner base units.",
    icon: Wrench,
  },
  {
    title: "Wall Cabinets",
    description:
      "Standard wall units in various heights, glass-front display cabinets, open shelving combinations, microwave housing units, range hood surrounds, and height-adjustable cabinets.",
    icon: Sparkles,
  },
  {
    title: "Specialty Cupboards",
    description:
      "Floor-to-ceiling pantries, pull-out spice racks, wine rack cabinets, appliance garages, plate racks and dish storage, and custom storage solutions tailored to your needs.",
    icon: Award,
  },
  {
    title: "Kitchen Renovations & Refacing",
    description:
      "Complete kitchen makeovers, cupboard door replacement, cabinet refacing and repainting, hardware upgrades, layout redesigns, and countertop integration.",
    icon: Users,
  },
]

const kitchenStyles = [
  {
    title: "Modern & Contemporary",
    features: [
      "Handleless/push-to-open designs",
      "High-gloss or matte finishes",
      "Integrated appliances",
      "Popular in white, grey, black, navy",
    ],
  },
  {
    title: "Shaker Style",
    features: [
      "Timeless five-piece door design",
      "Versatile for traditional or transitional",
      "Painted or wood finishes",
      "Most requested style",
    ],
  },
  {
    title: "Transitional",
    features: [
      "Blend of modern and traditional",
      "Simple door profiles",
      "Neutral color palettes",
      "Most popular for 2025",
    ],
  },
]

const materialOptions = [
  {
    name: "Solid Wood Cupboards",
    options: "Oak, Maple, Cherry, Walnut",
    benefits: "Natural beauty, can be refinished, long-lasting, adds property value",
    bestFor: "Traditional kitchens, high-end renovations, statement pieces",
    priceRange: "Premium",
  },
  {
    name: "Engineered Wood (MDF/Particle Board)",
    options: "Laminate, Melamine, Paint-grade",
    benefits: "Cost-effective, stable (won't warp), smooth painted finishes, moisture-resistant options",
    bestFor: "Modern painted kitchens, budget-conscious projects, rental properties",
    priceRange: "Budget to Mid-Range",
  },
  {
    name: "Plywood Construction",
    options: "Marine-grade plywood",
    benefits: "Superior strength, excellent moisture resistance, holds screws better",
    bestFor: "Base cabinets, sink areas, high-traffic kitchens",
    priceRange: "Mid-Range",
  },
]

const priceGuide = [
  {
    range: "Budget Range",
    price: "R35,000 - R60,000",
    includes: [
      "Melamine or basic laminate finish",
      "Standard hardware and fittings",
      "Simple layouts",
      "Minimal customization",
    ],
    bestFor: "Rental properties, first homes, budget renovations",
  },
  {
    range: "Mid-Range",
    price: "R60,000 - R120,000",
    includes: [
      "Quality engineered wood with painted finish",
      "Soft-close drawers and hinges",
      "Some custom features",
      "Good hardware selection",
    ],
    bestFor: "Most family homes, complete renovations",
  },
  {
    range: "Premium Range",
    price: "R120,000 - R200,000+",
    includes: [
      "Solid wood or high-end materials",
      "Custom design features",
      "Premium hardware (Blum, Hettich)",
      "Extensive internal fittings",
    ],
    bestFor: "Luxury homes, designer kitchens, high-end properties",
  },
]

const areaPages = [
  { name: "Sandton", href: "/areas/sandton" },
  { name: "Johannesburg", href: "/areas/johannesburg" },
  { name: "Pretoria", href: "/areas/pretoria" },
  { name: "Centurion", href: "/areas/centurion" },
  { name: "Midrand", href: "/areas/midrand" },
  { name: "Randburg", href: "/areas/randburg" },
  { name: "Fourways", href: "/areas/fourways" },
  { name: "Bedfordview", href: "/areas/bedfordview" },
  { name: "Edenvale", href: "/areas/edenvale" },
  { name: "Kempton Park", href: "/areas/kempton-park" },
  { name: "Boksburg", href: "/areas/boksburg" },
  { name: "Benoni", href: "/areas/benoni" },
  { name: "Germiston", href: "/areas/germiston" },
  { name: "Alberton", href: "/areas/alberton" },
  { name: "Johannesburg South", href: "/areas/johannesburg-south" },
  { name: "Roodepoort", href: "/areas/roodepoort" },
  { name: "Krugersdorp", href: "/areas/krugersdorp" },
  { name: "Springs", href: "/areas/springs" },
  { name: "Nigel", href: "/areas/nigel" },
  { name: "Carletonville", href: "/areas/carletonville" },
  { name: "Heidelberg", href: "/areas/heidelberg" },
  { name: "Vanderbijlpark", href: "/areas/vanderbijlpark" },
  { name: "Vereeniging", href: "/areas/vereeniging" },
  { name: "Westonaria", href: "/areas/westonaria" },
]

const faqs = [
  {
    question: "How long does kitchen cupboard installation take?",
    answer:
      "Typically 4-6 weeks from design approval to installation completion, depending on project complexity. This includes design consultation (1 day), manufacturing (2-3 weeks), and professional installation (3-7 days based on kitchen size).",
  },
  {
    question: "Can you work with my existing kitchen layout?",
    answer:
      "We can replace cupboards in your current layout or redesign for better functionality and workflow. Our designers assess your space and provide recommendations to optimize storage and improve efficiency.",
  },
  {
    question: "Do you handle plumbing and electrical work?",
    answer:
      "Yes! We coordinate all trades for a seamless installation including plumbing for sinks and dishwashers, electrical work for lighting and appliances, and tiling for backsplashes. One company handles everything.",
  },
  {
    question: "What's the most popular kitchen style right now?",
    answer:
      "Shaker-style in grey or white remains most popular in Johannesburg, with navy and two-tone kitchens trending strongly for 2025. Handleless modern designs are also increasingly popular for contemporary homes.",
  },
  {
    question: "Do you install countertops too?",
    answer:
      "Yes! We specialize in granite and quartz countertop installations that perfectly complement your kitchen cupboards. We offer complete kitchen packages including cupboards, countertops, and installation.",
  },
  {
    question: "What's included in your quote?",
    answer:
      "Design consultation, 3D renderings, all materials, manufacturing, delivery, installation, hardware, soft-close mechanisms, and cleanup. Countertops and appliances are quoted separately but we can provide complete package pricing.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "We can discuss flexible payment options during consultation. Typically, we require a 50% deposit to begin manufacturing, with the balance due upon completion.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "We provide a 5-year workmanship warranty on all installations, plus manufacturer warranties on materials and hardware. Our quality craftsmanship ensures your kitchen cupboards last 15-25+ years with proper care.",
  },
  {
    question: "Can I see samples before deciding?",
    answer:
      "Of course! Visit our showroom to see various styles, materials, and finishes, or we'll bring samples to your home during the free consultation. We help you visualize options with 3D renderings.",
  },
  {
    question: "What makes your kitchen cupboards different?",
    answer:
      "We manufacture in-house for quality control, use premium materials and hardware (soft-close as standard), provide detailed 3D designs, offer complete trade coordination, and back everything with a 5-year warranty and 20+ years of experience.",
  },
]

export default function KitchenCupboardsPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Kitchen Cupboard Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              email: "info@granitecarpentry.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              areaServed: ["Johannesburg", "Sandton", "Pretoria", "Centurion", "Midrand", "Gauteng"],
            },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "35000",
              highPrice: "200000",
              priceCurrency: "ZAR",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/kitchen-pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/30 rounded-full px-4 py-2 text-sm">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-amber-400 font-semibold">5-Star Rated Kitchen Cupboard Specialists</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Custom Kitchen <span className="text-amber-400">Cupboards & Cabinets</span> in Johannesburg
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Transform your kitchen with beautiful, custom-designed kitchen cupboards. Expert installation throughout
              Johannesburg, Sandton, Pretoria & Gauteng. From R35,000. Free quotes & 3D design.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                <Link href="/contact">
                  Get Free Quote <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
              >
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto">
              {[
                { icon: Award, text: "20+ Years Experience" },
                { icon: Shield, text: "5-Year Warranty" },
                { icon: Users, text: "1000+ Happy Clients" },
                { icon: Star, text: "5-Star Rated" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <item.icon className="h-8 w-8 text-amber-400" />
                  <span className="text-sm text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed">
            <p className="text-lg">
              Transform your kitchen with beautiful, custom-designed kitchen cupboards from{" "}
              <strong>Granite Carpentry</strong>. As Johannesburg's premier kitchen cupboard specialists, we create
              functional and stunning storage solutions that maximize your space while reflecting your personal style.
              Whether you're planning a complete{" "}
              <Link href="/kitchen-renovations" className="text-amber-600 hover:underline font-semibold">
                kitchen renovation
              </Link>{" "}
              in Sandton, upgrading your cupboards in Pretoria, or designing your dream kitchen in Centurion, our expert
              craftsmen deliver quality cabinetry that combines timeless design with superior functionality.
            </p>

            <p className="text-lg">
              With over 20 years of experience in custom kitchen cupboard manufacturing and installation, we guide you
              through every step of your kitchen transformation—from initial design consultation to precise
              measurements, expert fabrication, and flawless installation. Our extensive range includes modern
              handleless kitchens, classic Shaker-style cupboards, contemporary high-gloss finishes, and traditional
              wood designs. We work with premium materials including solid wood, engineered boards, and durable
              laminates to create kitchen cupboards that stand the test of time.
            </p>

            <p className="text-lg">
              We serve homeowners and developers throughout Gauteng, including Johannesburg, Sandton, Pretoria,
              Randburg, Midrand, Fourways, and surrounding areas—delivering custom kitchen solutions with exceptional
              craftsmanship and outstanding customer service. From compact apartment kitchens to expansive family
              spaces, we create cupboards perfectly tailored to your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Kitchen Cupboard Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive kitchen cupboard solutions from design to installation, creating functional and beautiful
              kitchens throughout Gauteng.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {kitchenCupboardServices.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <service.icon className="h-6 w-6 text-amber-600 flex-shrink-0" />
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Styles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Kitchen Cupboard Styles & Designs
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {kitchenStyles.map((style, idx) => (
                <Card key={idx} className="border-2 border-slate-200 hover:border-amber-600 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-600">{style.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {style.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Popular Kitchen Cupboard Colors for 2025</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li>
                  <strong>White/Off-White:</strong> Timeless, bright, makes spaces feel larger
                </li>
                <li>
                  <strong>Grey/Charcoal:</strong> Modern, sophisticated, versatile
                </li>
                <li>
                  <strong>Navy Blue:</strong> Trending, bold, pairs well with gold/brass hardware
                </li>
                <li>
                  <strong>Sage Green:</strong> Natural, calming, on-trend
                </li>
                <li>
                  <strong>Black/Dark Charcoal:</strong> Dramatic, contemporary, luxury feel
                </li>
                <li>
                  <strong>Two-Tone:</strong> Island in different color from perimeter cabinets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Material Options for Kitchen Cupboards
            </h2>

            <div className="space-y-6">
              {materialOptions.map((material, idx) => (
                <Card key={idx} className="border-l-4 border-amber-600">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">{material.name}</h3>
                        <p className="text-sm text-slate-600">{material.options}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm font-semibold text-slate-700 mb-1">Benefits:</p>
                        <p className="text-sm text-slate-600">{material.benefits}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Best For:</p>
                        <p className="text-sm text-slate-600 mb-2">{material.bestFor}</p>
                        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {material.priceRange}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Kitchen Cupboard Installation Process
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Free Design Consultation",
                  description:
                    "We visit your home to discuss your needs, measure your space, understand your style preferences, and assess plumbing/electrical requirements.",
                },
                {
                  step: 2,
                  title: "3D Design & Quote",
                  description:
                    "Receive detailed 3D renderings of your new kitchen, complete itemized quote with material specifications, and timeline for your project.",
                },
                {
                  step: 3,
                  title: "Material Selection",
                  description:
                    "Choose your cupboard style, colors/finishes, hardware, and internal fittings. We also coordinate countertop materials for complete integration.",
                },
                {
                  step: 4,
                  title: "Custom Manufacturing",
                  description:
                    "Our workshop craftsmen build your cupboards to exact specifications using premium materials and precision equipment with quality control at every stage.",
                },
                {
                  step: 5,
                  title: "Professional Installation",
                  description:
                    "Our certified installers ensure level, secure cabinet mounting, precise door alignment, proper hardware installation, and plumbing/electrical coordination.",
                },
                {
                  step: 6,
                  title: "Finishing Touches",
                  description:
                    "We integrate countertops, install hardware and accessories, complete final adjustments, thorough cleaning, and full client walkthrough.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              Kitchen Cupboard Pricing Guide
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Average kitchen cupboard prices (installed) for Johannesburg homes. Final costs depend on kitchen size,
              material choice, style complexity, and custom features.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {priceGuide.map((tier, idx) => (
                <Card
                  key={idx}
                  className={`border-2 ${idx === 1 ? "border-amber-600 shadow-lg scale-105" : "border-slate-200"}`}
                >
                  <CardHeader className={idx === 1 ? "bg-amber-50" : ""}>
                    <CardTitle className="text-2xl">
                      <div className="text-lg text-slate-600 mb-1">{tier.range}</div>
                      <div className="text-amber-600">{tier.price}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900 mb-2">Includes:</p>
                      <ul className="space-y-2">
                        {tier.includes.map((item, iidx) => (
                          <li key={iidx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700 text-sm">Best For:</p>
                      <p className="text-sm text-slate-600">{tier.bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-amber-50 border-2 border-amber-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Add-ons to Consider:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <strong>Kitchen Island:</strong> R15,000 - R45,000
                  </div>
                  <div>
                    <strong>Pantry Cupboard:</strong> R8,000 - R20,000
                  </div>
                  <div>
                    <Link href="/granite-countertops" className="text-amber-600 hover:underline font-semibold">
                      <strong>Granite Countertops:</strong> R2,500 - R6,500/m²
                    </Link>
                  </div>
                  <div>
                    <Link href="/quartz-countertops" className="text-amber-600 hover:underline font-semibold">
                      <strong>Quartz Countertops:</strong> R3,500 - R7,500/m²
                    </Link>
                  </div>
                  <div>
                    <strong>Backsplash Tiling:</strong> R500 - R1,200/m²
                  </div>
                  <div>
                    <Link href="/plumbing" className="text-amber-600 hover:underline font-semibold">
                      <strong>Plumbing Services:</strong> Custom quote
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas with Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Kitchen Cupboard Installation Service Areas
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Expert kitchen cupboard design and installation throughout Gauteng. We serve all major areas including
                Johannesburg, Sandton, Pretoria, and surrounding suburbs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areaPages.map((area, idx) => (
                <Link
                  key={idx}
                  href={area.href}
                  className="group p-4 rounded-lg border-2 border-slate-200 hover:border-amber-600 hover:bg-amber-50 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
                    <span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {area.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600 mb-4">
                Professional kitchen cupboard installation available in all areas listed above and surrounding suburbs.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/areas">
                  View All Service Areas <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Kitchen Renovation Packages */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Kitchen Renovation Packages</h2>
            <p className="text-xl text-slate-300 mb-8">
              One company, complete kitchen transformation—no coordination hassles!
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { text: "Custom kitchen cupboards (all styles)", link: null },
                { text: "Granite countertops", link: "/granite-countertops" },
                { text: "Quartz countertops", link: "/quartz-countertops" },
                { text: "Plumbing services (sinks, taps, dishwashers)", link: "/plumbing" },
                { text: "Tiling and backsplash installation", link: null },
                { text: "Electrical work (lighting, outlets)", link: null },
                { text: "Complete kitchen renovations", link: "/kitchen-renovations" },
                { text: "Painting services", link: null },
              ].map((item, idx) =>
                item.link ? (
                  <Link key={idx} href={item.link} className="flex items-center gap-3 text-amber-400 hover:underline">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </Link>
                ) : (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ),
              )}
            </div>

            <div className="pt-6">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">
                  Get Complete Kitchen Quote <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="border-l-4 border-amber-600">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Why Choose Granite Carpentry?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "20+ Years Experience",
                  description: "Two decades of kitchen cupboard design and installation expertise in Johannesburg.",
                },
                {
                  title: "Complete In-House Service",
                  description: "Design, manufacture, and installation—all under one roof. No subcontractors.",
                },
                {
                  title: "Quality Materials Only",
                  description: "We use premium materials from trusted suppliers. No cheap imports.",
                },
                {
                  title: "Skilled Craftsmen",
                  description: "Our workshop team consists of experienced cabinetmakers and installers.",
                },
                {
                  title: "Detailed 3D Designs",
                  description: "See your new kitchen before we build it. Make changes during design phase.",
                },
                {
                  title: "Competitive Pricing",
                  description: "Exceptional quality at fair prices. Transparent quotes with no hidden costs.",
                },
                {
                  title: "Warranty Backed",
                  description: "5-year workmanship warranty plus manufacturer warranties on materials.",
                },
                {
                  title: "On-Time Completion",
                  description: "We respect your timeline and complete projects as scheduled.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready for Your Dream Kitchen?</h2>
            <p className="text-xl">
              Transform your kitchen with custom cupboards designed and installed by Johannesburg's trusted experts.
            </p>

            <div className="grid md:grid-cols-3 gap-8 py-8">
              <div className="flex flex-col items-center gap-3">
                <Phone className="h-12 w-12" />
                <div>
                  <p className="font-semibold mb-1">Call Us</p>
                  <a href="tel:0676014490" className="text-lg hover:underline">
                    067 601 4490
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Mail className="h-12 w-12" />
                <div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:underline">
                    info@granitecarpentry.co.za
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Clock className="h-12 w-12" />
                <div>
                  <p className="font-semibold mb-1">Working Hours</p>
                  <p>Monday-Saturday, 8am-5pm</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-slate-100 text-lg px-8">
                <Link href="/contact">
                  Get Free Quote & 3D Design <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
              >
                <a href="https://wa.me/27676014490" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <p className="text-sm opacity-90">
              Serving all of Gauteng including Johannesburg, Sandton, Pretoria, Centurion, Midrand, Randburg, and
              surrounding areas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
