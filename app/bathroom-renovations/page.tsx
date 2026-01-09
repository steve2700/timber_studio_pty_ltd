import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle2,
  Home,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  Star,
  Droplets,
  Lightbulb,
  Wrench,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "★★★★★ Complete Bathroom Renovations Johannesburg 2026 | Professional Design & Installation",
  description:
    "★★★★★ Professional bathroom renovations in Johannesburg, Sandton & Pretoria. Complete bathroom makeovers. Quality workmanship. Free quotes. 20+ years experience. Call 067 601 4490.",
  keywords:
    "bathroom renovations Johannesburg, bathroom makeover Johannesburg, bathroom renovation Sandton, ensuite renovation Pretoria, bathroom design Johannesburg, bathroom installation, luxury bathroom renovation, small bathroom renovation, bathroom plumbing, bathroom tiles Johannesburg",
  openGraph: {
    title: "Complete Bathroom Renovations Johannesburg | Granite Carpentry",
    description:
      "Professional bathroom renovations in Johannesburg, Sandton & Pretoria. Complete bathroom makeovers with quality workmanship and 20+ years experience.",
    url: "https://granitecarpentry.co.za/bathroom-renovations",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/bathroom-renovations",
  },
}

export default function BathroomRenovationsPage() {
  const services = [
    {
      title: "Complete Bathroom Makeovers",
      description:
        "Full bathroom demolition and removal, layout redesign and space optimization, plumbing relocation and upgrades, electrical rewiring and new lighting, waterproofing and moisture barriers, tiling (floors, walls, shower areas), vanity and storage installation, fixture installation (toilet, shower, bath, taps), final finishes and painting.",
      icon: Home,
    },
    {
      title: "Ensuite Bathroom Renovations",
      description:
        "Master bedroom bathroom suites with walk-in showers and frameless glass, double vanity installations, freestanding bath installations, luxury fixtures and finishes, underfloor heating, smart bathroom technology, and spa-inspired designs.",
      icon: Sparkles,
    },
    {
      title: "Small Bathroom Renovations",
      description:
        "Space-saving layouts and designs, wall-hung toilets and vanities, corner showers and compact baths, clever storage solutions, light and mirror placement for spaciousness, visual tricks to maximize perceived space.",
      icon: Home,
    },
    {
      title: "Guest & Powder Room Renovations",
      description:
        "Stylish half-bathroom designs, feature walls and statement tiles, compact vanities, designer fixtures, and quick turnaround projects.",
      icon: Star,
    },
    {
      title: "Family Bathroom Updates",
      description:
        "Durable, easy-clean materials, bathtub and shower combinations, ample storage for family needs, safety features (non-slip tiles, grab bars), practical yet attractive designs.",
      icon: Shield,
    },
    {
      title: "Accessible & Universal Design",
      description:
        "Walk-in baths and roll-in showers, grab bar installation, raised toilet seats and comfort-height fixtures, non-slip flooring, wider doorways and clear floor space, adjustable showerheads.",
      icon: CheckCircle2,
    },
  ]

  const styles = [
    {
      title: "Modern & Contemporary",
      features: [
        "Clean lines and minimalist design",
        "Floating vanities and wall-hung fixtures",
        "Large-format tiles (minimal grout lines)",
        "Frameless glass shower enclosures",
        "Chrome or matte black finishes",
        "LED lighting and mirrors",
        "Neutral color palettes with bold accents",
      ],
    },
    {
      title: "Classic & Traditional",
      features: [
        "Freestanding baths with elegant feet",
        "Pedestal basins or traditional vanities",
        "Subway tiles and classic patterns",
        "Chrome or brushed nickel fixtures",
        "Wainscoting and decorative trim",
        "Timeless white or neutral colors",
        "Period-appropriate details",
      ],
    },
    {
      title: "Luxury & Spa-Inspired",
      features: [
        "High-end materials (marble, quartz)",
        "Rainfall showerheads and body jets",
        "Soaking tubs or whirlpool baths",
        "Heated towel rails and underfloor heating",
        "Premium lighting (dimmable, layered)",
        "Built-in sound systems",
        "Steam showers",
      ],
    },
    {
      title: "Industrial & Urban",
      features: [
        "Exposed brick or concrete-look tiles",
        "Matte black fixtures and frames",
        "Edison bulb lighting",
        "Metal accents and hardware",
        "Open shelving",
        "Grey and charcoal color schemes",
        "Raw, unfinished aesthetic",
      ],
    },
    {
      title: "Coastal & Hamptons",
      features: [
        "White or light color palettes",
        "Natural materials and textures",
        "Shiplap or beadboard walls",
        "Vintage-inspired fixtures",
        "Blue and aqua accents",
        "Light, airy, and relaxed feel",
      ],
    },
  ]

  const process = [
    {
      step: 1,
      title: "Free Consultation & Design",
      description:
        "We visit your property to discuss your vision, assess current condition, take measurements, discuss budget and timeline, and provide initial design concepts.",
    },
    {
      step: 2,
      title: "Detailed Design & Quote",
      description:
        "Receive 3D bathroom design renderings, complete itemized quote, fixture and finish selections, project timeline with milestones, and clear contract terms.",
    },
    {
      step: 3,
      title: "Planning & Preparation",
      description:
        "Finalize design details and material selections, order all fixtures and materials, schedule trades and deliveries, arrange alternative bathroom access.",
    },
    {
      step: 4,
      title: "Demolition & Preparation",
      description:
        "Protect your home with dust barriers, carefully remove existing fixtures, strip out old elements, address structural issues, prepare surfaces for waterproofing.",
    },
    {
      step: 5,
      title: "Core Construction Work",
      description:
        "Install new plumbing systems, complete electrical work, apply professional waterproofing, install shower bases or bath, prepare for tiling.",
    },
    {
      step: 6,
      title: "Tiling & Waterproofing",
      description:
        "Install floor and wall tiles, complete shower areas, install feature tiles, grout and seal all surfaces, quality control inspection.",
    },
    {
      step: 7,
      title: "Fixtures & Finishes",
      description:
        "Install custom vanity and countertops, fit toilet, basin, shower, and bath, install taps and showerheads, fit shower screens, install mirrors and lighting.",
    },
    {
      step: 8,
      title: "Final Inspection & Handover",
      description:
        "Complete quality check, test all plumbing and fixtures, clean thoroughly, client walkthrough and approval, provide maintenance guidelines and warranties.",
    },
  ]

  const faqs = [
    {
      q: "How much does a bathroom renovation cost?",
      a: "It varies widely based on size and finishes. Small bathrooms start around R30,000-R45,000, medium bathrooms R50,000-R120,000, while large ensuites can be R120,000-R200,000+. Luxury master suites start at R250,000+. We provide detailed quotes tailored to your specific requirements.",
    },
    {
      q: "How long will my bathroom renovation take?",
      a: "Typically 2-6 weeks depending on size and complexity. Small bathrooms take 2-3 weeks, medium bathrooms 3-4 weeks, large ensuites 4-6 weeks, and luxury master suites 6-8+ weeks. We provide a detailed timeline with your quote.",
    },
    {
      q: "Can I use my bathroom during renovation?",
      a: "Usually no—we recommend arranging alternative bathroom access. We work efficiently to minimize disruption to your daily routine.",
    },
    {
      q: "Do I need to provide materials or will you?",
      a: "We handle everything—materials, fixtures, fittings. You just choose the styles and colors you prefer from our extensive selection.",
    },
    {
      q: "What if you find problems during demolition?",
      a: "We assess and quote any additional work immediately. We're transparent about unexpected issues and costs, and won't proceed without your approval.",
    },
    {
      q: "Can you work with my existing layout?",
      a: "Yes, or we can redesign for better functionality. Sometimes simple layout tweaks make huge improvements in space utilization and flow.",
    },
    {
      q: "Do you do the plumbing and electrical work?",
      a: "Absolutely. Our team includes licensed plumbers and electricians. All trades are coordinated by us for seamless project management.",
    },
    {
      q: "What's included in your quote?",
      a: "Everything except surprises hidden behind walls! Demolition, waterproofing, plumbing, electrical, tiling, fixtures, painting, cleanup—all included with transparent pricing.",
    },
    {
      q: "Can you help with design if I'm not sure what I want?",
      a: "Yes! We offer design consultation and 3D renderings to help you visualize options before committing to your bathroom renovation.",
    },
    {
      q: "Do you provide warranties?",
      a: "Yes—5-year workmanship warranty plus manufacturer warranties on fixtures and fittings. Waterproofing certificates provided with all renovations.",
    },
  ]

  const areas = [
    { name: "Alberton", slug: "alberton" },
    { name: "Bedfordview", slug: "bedfordview" },
    { name: "Benoni", slug: "benoni" },
    { name: "Boksburg", slug: "boksburg" },
    { name: "Carletonville", slug: "carletonville" },
    { name: "Centurion", slug: "centurion" },
    { name: "Edenvale", slug: "edenvale" },
    { name: "Fourways", slug: "fourways" },
    { name: "Germiston", slug: "germiston" },
    { name: "Heidelberg", slug: "heidelberg" },
    { name: "Johannesburg", slug: "johannesburg" },
    { name: "Johannesburg South", slug: "johannesburg-south" },
    { name: "Kempton Park", slug: "kempton-park" },
    { name: "Krugersdorp", slug: "krugersdorp" },
    { name: "Midrand", slug: "midrand" },
    { name: "Nigel", slug: "nigel" },
    { name: "Pretoria", slug: "pretoria" },
    { name: "Randburg", slug: "randburg" },
    { name: "Roodepoort", slug: "roodepoort" },
    { name: "Sandton", slug: "sandton" },
    { name: "Springs", slug: "springs" },
    { name: "Vanderbijlpark", slug: "vanderbijlpark" },
    { name: "Vereeniging", slug: "vereeniging" },
    { name: "Westonaria", slug: "westonaria" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">20+ Years Experience • 5-Star Rated • Licensed & Insured</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Complete Bathroom Renovations in Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-balance max-w-3xl mx-auto">
              Transform your outdated bathroom into a stunning sanctuary with expert bathroom renovations from Granite
              Carpentry. Professional design, quality materials, and expert craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-white">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Transform your outdated bathroom into a stunning sanctuary with expert bathroom renovations from Granite
              Carpentry. As Johannesburg's trusted bathroom renovation specialists, we deliver complete bathroom
              makeovers that combine beautiful design, quality materials, and expert craftsmanship. Whether you're
              updating a small guest bathroom in Sandton, creating a luxury ensuite in Pretoria, or modernizing a family
              bathroom in Centurion, our experienced team handles every aspect of your renovation from design to
              completion.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              With over 20 years of experience in bathroom renovations, we understand that your bathroom is more than
              just functional—it's where you start and end each day. Our comprehensive renovation service includes
              everything: bathroom design and planning, plumbing and electrical work, tiling and waterproofing, custom
              vanities and storage,{" "}
              <Link href="/quartz-countertops" className="text-blue-600 hover:text-blue-700 font-medium underline">
                quartz
              </Link>{" "}
              or{" "}
              <Link href="/granite-countertops" className="text-blue-600 hover:text-blue-700 font-medium underline">
                granite countertops
              </Link>
              , quality fixtures and fittings, and complete project management. We coordinate all trades to ensure your
              bathroom renovation is completed on time, on budget, and to the highest standards.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We serve homeowners and property developers throughout Gauteng, including Johannesburg, Sandton, Pretoria,
              Randburg, Midrand, Fourways, and surrounding areas. From compact powder rooms to spacious master
              bathrooms, from budget-friendly updates to luxury spa-inspired retreats, we create bathrooms that
              perfectly match your lifestyle, taste, and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Our Bathroom Renovation Services
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Comprehensive bathroom renovation solutions for every space, style, and budget
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Styles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Bathroom Renovation Styles
            </h2>
            <p className="text-center text-slate-600 mb-12">
              From modern minimalist to classic elegance—create the bathroom of your dreams
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {styles.map((style, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900">{style.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {style.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Our Bathroom Renovation Process
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              From initial consultation to final handover—transparent, professional, and stress-free
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-amber-600">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Bathroom Renovation Costs
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Transparent pricing for every budget—from budget-friendly updates to luxury spa retreats
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Average Bathroom Renovation Costs</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-800">Small Bathroom/Powder Room (2-4m²)</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex justify-between">
                      <span>Budget</span>
                      <strong>R30,000 - R45,000</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Mid-Range</span>
                      <strong>R45,000 - R75,000</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Premium</span>
                      <strong>R75,000 - R120,000+</strong>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-800">Medium Bathroom (4-6m²)</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex justify-between">
                      <span>Budget</span>
                      <strong>R50,000 - R75,000</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Mid-Range</span>
                      <strong>R75,000 - R120,000</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Premium</span>
                      <strong>R120,000 - R180,000+</strong>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-800">Large Ensuite (6-10m²)</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex justify-between">
                      <span>Budget</span>
                      <strong>R80,000 - R120,000</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Mid-Range</span>
                      <strong>R120,000 - R200,000</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Premium</span>
                      <strong>R200,000 - R350,000+</strong>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-800">Luxury Master Suite (10m²+)</h4>
                  <p className="text-slate-600">
                    <strong>Starting at R250,000+</strong> including premium everything, custom features, and spa
                    elements.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-slate-800">Individual Elements (Approx costs):</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>• Tiling: R350 - R850/m²</li>
                  <li>• Vanity + quartz top: R8,000 - R25,000</li>
                  <li>• Shower enclosure: R3,500 - R15,000</li>
                  <li>• Toilet: R1,200 - R8,000</li>
                  <li>• Basin/Sink: R800 - R5,000</li>
                  <li>• Taps/Mixers: R1,500 - R8,000</li>
                  <li>• Bathtub: R3,000 - R25,000+</li>
                  <li>• Plumbing work: R8,000 - R25,000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Trends 2026 */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
              Bathroom Renovation Ideas & Trends 2026
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Stay ahead with the latest design trends and smart bathroom features
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                    Trending Design Elements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Large-format tiles:</strong> Less grout, modern look (600x600mm, 600x1200mm)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Textured tiles:</strong> 3D wall tiles, concrete-look, natural stone
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Matte black fixtures:</strong> Taps, showerheads, frames—hugely popular
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Floating vanities:</strong> Space-saving, contemporary appearance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Smart technology:</strong> Digital showers, heated mirrors, motion sensors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Natural materials:</strong> Wood-look tiles, stone, organic textures
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Bold colors:</strong> Navy, sage green, terracotta accents
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Brass & gold accents:</strong> Warm metallic finishes making comeback
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Smart Bathroom Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Thermostatic shower mixers:</strong> Constant temperature control
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>LED mirror lighting:</strong> Built-in, anti-fog technology
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Underfloor heating:</strong> Comfort and luxury year-round
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Water-efficient fixtures:</strong> Eco-friendly, lower bills
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Heated towel rails:</strong> Modern, practical luxury
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Motion sensor lighting:</strong> Convenience and energy saving
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Professional Waterproofing & Moisture Control
              </h2>
              <p className="text-slate-600">Protecting your investment with certified waterproofing systems</p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Why Waterproofing Matters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Prevents water damage to structure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Stops mold and mildew growth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Protects neighboring rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Maintains property value</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Required by building regulations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Waterproofing certificates provided</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Our Professional 3-Layer Waterproofing System</h3>
              <ol className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-lg">1.</span>
                  <span>Substrate preparation and priming for optimal adhesion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-lg">2.</span>
                  <span>Waterproof membrane application (multiple coats for complete protection)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-lg">3.</span>
                  <span>Protective layer before tiling installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-lg">4.</span>
                  <span>Testing and certification upon completion</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Plumbing Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Comprehensive Plumbing Services</h2>
            <p className="text-slate-600 mb-8">Licensed plumbers providing complete bathroom plumbing solutions</p>
            <Card>
              <CardContent className="pt-6">
                <p className="text-slate-700 mb-6">
                  We provide comprehensive{" "}
                  <Link href="/plumbing" className="text-blue-600 hover:text-blue-700 font-medium underline">
                    plumbing services
                  </Link>{" "}
                  for all bathroom renovations, including complete bathroom plumbing installations, hot water system
                  upgrades, pipe relocation and new connections, water pressure optimization, leak detection and
                  repairs, drain and waste pipe installation, geyser installation and repairs, and water-efficient
                  fixture installation.
                </p>
                <p className="text-slate-700 font-semibold">
                  All plumbing work by licensed, insured plumbers complying with SANS regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Why Choose Granite Carpentry for Bathroom Renovations?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Complete Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    One company handles everything—design, plumbing, electrical, tiling, carpentry. No coordination
                    hassles.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg">20+ Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Two decades of successful bathroom renovations. We've seen and solved every challenge.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Licensed & Insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    All trades fully licensed. Public liability insurance. Complete peace of mind for homeowners.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">5-Year Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    5-year workmanship warranty. Waterproofing certificates provided. We stand behind our work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Professional Bathroom Renovations Throughout Gauteng
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Expert bathroom renovation services across Johannesburg, Sandton, Pretoria, and surrounding areas
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <Link
                  key={index}
                  href={`/areas/${area.slug}`}
                  className="group flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 border border-slate-200"
                >
                  <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 group-hover:text-blue-600 font-medium text-sm">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Quartz Countertops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-4">Premium quartz vanity tops for modern bathrooms</p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="/quartz-countertops">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Granite Countertops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-4">Natural granite bathroom vanities with unique patterns</p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="/granite-countertops">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Plumbing Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-4">Licensed plumbers for complete bathroom installations</p>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="/plumbing">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Bathroom?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free, no-obligation bathroom renovation quote today. Professional design, quality workmanship,
              and transparent pricing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Request Free Quote
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              <Clock className="inline h-4 w-4 mr-1" />
              Serving Johannesburg, Sandton, Pretoria & Gauteng • 20+ Years Experience • Licensed & Insured
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
