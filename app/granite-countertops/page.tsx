import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Clock,
  MapPin,
  Wrench,
  Gem,
  Home,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Granite Countertops Installation Johannesburg | Granite Carpentry",
  description:
    "Professional granite countertop installation in Johannesburg, Sandton & Pretoria. Custom granite kitchen & bathroom countertops. Free quotes. 20+ years experience. Call 067 601 4490.",
  keywords:
    "granite countertops johannesburg, granite installation johannesburg, kitchen granite countertops sandton, granite counters pretoria, natural stone countertops gauteng, black granite johannesburg, white granite countertops, granite vanity tops, granite suppliers johannesburg, granite fabrication johannesburg",
  openGraph: {
    title: "Premium Granite Countertops Installation Johannesburg | Granite Carpentry",
    description:
      "Professional granite countertop installation in Johannesburg, Sandton & Pretoria. Custom granite kitchen & bathroom countertops with 20+ years experience.",
    images: [{ url: "/granite-countertop.jpg", width: 1200, height: 630 }],
    url: "https://granitecarpentry.co.za/granite-countertops",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/granite-countertops",
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

export default function GraniteCountertopsPage() {
  const graniteColors = [
    {
      category: "Black Granite",
      options: ["Absolute Black", "Black Galaxy", "Steel Grey"],
      description: "Perfect for modern, contemporary kitchens with bold contrast",
      price: "From R2,800/m²",
    },
    {
      category: "White & Light Granite",
      options: ["Kashmir White", "Colonial White", "River White"],
      description: "Creates bright, spacious feel ideal for smaller kitchens",
      price: "From R2,500/m²",
    },
    {
      category: "Brown & Beige Granite",
      options: ["Tan Brown", "Tropical Brown", "Giallo Ornamental"],
      description: "Warm, traditional elegance that complements wood cabinetry",
      price: "From R3,200/m²",
    },
    {
      category: "Exotic & Premium Granite",
      options: ["Blue Pearl", "Emerald Pearl", "Ubatuba"],
      description: "Statement pieces for luxury spaces with unique patterns",
      price: "From R5,500/m²",
    },
  ]

  const graniteServices = [
    {
      title: "Kitchen Granite Countertops",
      features: [
        "Custom kitchen islands & peninsulas",
        "Breakfast bars with overhang support",
        "Full kitchen countertop installations",
        "Undermount & overmount sink cutouts",
        "Cooktop and appliance integration",
        "Matching granite backsplashes",
      ],
      price: "From R2,500/m²",
    },
    {
      title: "Bathroom Granite Vanities",
      features: [
        "Single & double vanity countertops",
        "Custom basin cutouts (round, square, rectangular)",
        "Matching granite backsplashes",
        "Medicine cabinet integration",
        "Custom edge profiles for safety",
        "Water-resistant sealed surfaces",
      ],
      price: "From R3,200",
    },
    {
      title: "Commercial Granite Installation",
      features: [
        "Restaurant & café countertops",
        "Office reception desks",
        "Retail display counters",
        "Hotel & hospitality projects",
        "High-traffic commercial spaces",
        "Industrial-grade installations",
      ],
      price: "Custom quotes",
    },
  ]

  const installationProcess = [
    {
      step: "1",
      title: "Free Consultation & Quote",
      description:
        "We visit your property to discuss your vision, take precise measurements, and provide a detailed, no-obligation quote. Our design team helps you select the perfect granite color and edge profile.",
      icon: MapPin,
    },
    {
      step: "2",
      title: "Slab Selection",
      description:
        "Visit our showroom to view full granite slabs, or we bring samples to you. Each granite slab is unique, so you'll select the exact piece that will become your countertop.",
      icon: Gem,
    },
    {
      step: "3",
      title: "Precision Templating",
      description:
        "Our technicians create exact templates of your countertop area using advanced measuring technology, ensuring perfect fit around sinks, cooktops, and edges.",
      icon: Wrench,
    },
    {
      step: "4",
      title: "Expert Fabrication",
      description:
        "Using state-of-the-art cutting and polishing equipment, we fabricate your granite countertops to exact specifications with your chosen edge profile and cutouts.",
      icon: Sparkles,
    },
    {
      step: "5",
      title: "Professional Installation",
      description:
        "Our certified installers ensure seamless installation with perfect seams, level surfaces, secure mounting, and proper support for overhangs and islands.",
      icon: CheckCircle,
    },
    {
      step: "6",
      title: "Sealing & Finishing",
      description:
        "We apply professional-grade sealant to protect your granite from stains and perform final quality checks to ensure your complete satisfaction.",
      icon: Shield,
    },
  ]

  const areas = [
    { name: "Johannesburg", slug: "johannesburg" },
    { name: "Johannesburg South", slug: "johannesburg-south" },
    { name: "Sandton", slug: "sandton" },
    { name: "Randburg", slug: "randburg" },
    { name: "Pretoria", slug: "pretoria" },
    { name: "Centurion", slug: "centurion" },
    { name: "Midrand", slug: "midrand" },
    { name: "Kempton Park", slug: "kempton-park" },
    { name: "Roodepoort", slug: "roodepoort" },
    { name: "Fourways", slug: "fourways" },
    { name: "Edenvale", slug: "edenvale" },
    { name: "Boksburg", slug: "boksburg" },
    { name: "Alberton", slug: "alberton" },
    { name: "Benoni", slug: "benoni" },
    { name: "Germiston", slug: "germiston" },
    { name: "Springs", slug: "springs" },
    { name: "Vanderbijlpark", slug: "vanderbijlpark" },
    { name: "Vereeniging", slug: "vereeniging" },
    { name: "Nigel", slug: "nigel" },
    { name: "Heidelberg", slug: "heidelberg" },
    { name: "Carletonville", slug: "carletonville" },
    { name: "Krugersdorp", slug: "krugersdorp" },
    { name: "Westonaria", slug: "westonaria" },
    { name: "Bedfordview", slug: "bedfordview" },
  ]

  const faqs = [
    {
      question: "How long does granite countertop installation take?",
      answer:
        "Typically 2-4 weeks from template to installation, depending on granite selection and project complexity. The process includes: initial consultation (1 day), slab selection (1-2 days), templating (1 day), fabrication (5-7 days), and installation (1-2 days). We provide accurate timelines during consultation and keep you updated throughout the process.",
    },
    {
      question: "Do granite countertops need to be sealed?",
      answer:
        "Yes, granite should be sealed upon installation and resealed every 1-2 years for optimal stain resistance. We apply professional-grade sealer during installation and provide detailed care instructions. Our maintenance service includes annual resealing to keep your granite protected. The sealing process takes 1-2 hours and the granite is ready to use after 24 hours.",
    },
    {
      question: "Can granite crack or chip?",
      answer:
        "While granite is extremely durable (one of the hardest natural stones), chips can occur from sharp impacts on edges or corners. We minimize this risk with proper edge profiles and support during installation. If damage occurs, we provide professional repair services including chip filling, crack repair, and repolishing to restore your granite's appearance.",
    },
    {
      question: "How thick should granite countertops be?",
      answer:
        "We recommend 30mm (3cm) thickness for durability, aesthetics, and structural integrity, especially for overhangs and islands. 20mm (2cm) thickness is available for budget-conscious projects but requires additional support. Thicker granite (40mm/50mm) is available for statement edges and luxury installations. We help you choose based on your design and functional requirements.",
    },
    {
      question: "Can I place hot pots on granite countertops?",
      answer:
        "Yes! Granite is naturally heat-resistant and can handle hot pots and pans directly from the stove or oven (up to 1200°F/650°C). However, we recommend using trivets or hot pads to prevent thermal shock on cold granite and to protect your cookware. Granite's heat resistance is one of its key advantages over laminate and some engineered surfaces.",
    },
    {
      question: "How do I clean granite countertops?",
      answer:
        "Daily cleaning is simple: use warm water and mild dish soap with a soft cloth or microfiber towel. Avoid acidic cleaners (vinegar, lemon juice) and abrasive scrubbers that can damage the sealant. For tough stains, we recommend pH-neutral stone cleaners. Clean up spills promptly, especially acidic liquids like wine or citrus juice. We provide detailed care instructions with every installation.",
    },
    {
      question: "What's the price range for granite countertops in Johannesburg?",
      answer:
        "Granite countertop pricing ranges from R2,500-R6,500 per square meter (installed). Standard granite typically costs R2,500-R3,500/m², premium varieties R3,500-R5,000/m², and exotic granite R5,000-R6,500/m². Price factors include granite type, slab thickness (20mm or 30mm), edge profiles, cutouts for sinks and appliances, and installation complexity. We provide detailed, transparent quotes with no hidden costs.",
    },
    {
      question: "How does granite compare to quartz countertops?",
      answer:
        "Granite is natural stone with unique patterns, requires periodic sealing, and offers superior heat resistance. Quartz is engineered stone with consistent patterns, is non-porous (no sealing needed), but can be damaged by extreme heat. Granite typically costs R2,500-R4,000/m² while quartz ranges R3,500-R5,500/m². Both are excellent choices - granite for traditional elegance and natural beauty, quartz for modern convenience and uniform appearance. View our <Link href='/quartz-granite' className='text-amber-600 hover:underline'>quartz vs granite comparison</Link> for detailed analysis.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://granitecarpentry.co.za/granite-countertops#service",
                name: "Granite Countertops Installation Johannesburg",
                description:
                  "Professional granite countertop installation in Johannesburg including kitchen countertops, bathroom vanities, and commercial granite work with 20+ years experience.",
                provider: {
                  "@type": "LocalBusiness",
                  "@id": "https://granitecarpentry.co.za/#organization",
                  name: "Granite Carpentry",
                  telephone: "+27676014490",
                  email: "info@granitecarpentry.co.za",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Johannesburg",
                    addressRegion: "Gauteng",
                    addressCountry: "ZA",
                  },
                },
                areaServed: areas.map((area) => ({
                  "@type": "Place",
                  name: area.name,
                  "@id": `https://granitecarpentry.co.za/areas/${area.slug}`,
                })),
                serviceType: "Granite Countertop Installation",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "ZAR",
                  priceRange: "R2500-R6500",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://granitecarpentry.co.za",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Granite Countertops",
                    item: "https://granitecarpentry.co.za/granite-countertops",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb Navigation */}
      <section className="bg-slate-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-slate-600 hover:text-amber-600 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-amber-600 font-medium">Granite Countertops</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Gem className="h-3 w-3 mr-1" />
                  20+ Years Experience
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Premium <span className="text-amber-400">Granite Countertops</span> Installation Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Transform your kitchen or bathroom with stunning granite countertops from Granite Carpentry. As
                  Johannesburg's trusted granite installation specialists, we combine timeless natural beauty with
                  exceptional durability and professional craftsmanship.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Link href="tel:+27676014490">
                    <Phone className="mr-2 h-5 w-5" />
                    067 601 4490
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <span>5.0 Rating • 200+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-blue-400" />
                  <span>5-Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/granite-countertop.jpg"
                  alt="Premium Granite Countertops Installation Johannesburg"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Premium Granite Countertops Installation in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Transform your kitchen or bathroom with stunning granite countertops from Granite Carpentry. As
                Johannesburg's trusted granite installation specialists with over 20 years of experience, we provide
                premium natural stone countertops that combine timeless beauty with exceptional durability. Whether
                you're renovating your kitchen in Sandton, upgrading your bathroom in Pretoria, or designing a custom
                space in Centurion, our expert craftsmen deliver flawless granite installations that elevate your home's
                value and aesthetic appeal.
              </p>

              <p>
                With over 200 successful installations across Gauteng, we guide you through every step—from selecting
                the perfect granite slab to precision templating, fabrication, and professional installation. Our
                extensive collection includes classic blacks, elegant whites, warm browns, and exotic patterns. We serve
                homeowners and businesses throughout Johannesburg, Sandton, Pretoria, Randburg, Midrand, Fourways, and
                surrounding areas.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Why Choose Granite Countertops?
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Unmatched Durability</h3>
              <p>
                Granite is one of the hardest natural stones available, ranking 6-7 on the Mohs hardness scale. This
                makes it incredibly resistant to scratches, chips, and daily wear and tear. Your granite countertops
                will withstand decades of use while maintaining their stunning appearance. Unlike laminate or tile that
                can wear, peel, or crack, granite remains beautiful and functional for 50+ years with proper care.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Timeless Natural Beauty</h3>
              <p>
                Each granite slab is unique, featuring natural patterns, veining, and colors formed over millions of
                years deep within the earth. No two granite countertops are exactly alike, giving your space a
                one-of-a-kind character that cannot be replicated. From the dramatic veining of Black Galaxy to the
                subtle elegance of Kashmir White, granite offers endless aesthetic possibilities that complement both
                traditional and contemporary designs.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Superior Heat Resistance</h3>
              <p>
                Place hot pots and pans directly on granite surfaces without worry. Granite's natural heat resistance
                (up to 1200°F/650°C) makes it perfect for busy Johannesburg kitchens where cooking and entertaining
                happen daily. Unlike quartz or laminate that can scorch or melt, granite handles extreme temperatures
                with ease, making it the preferred choice for serious home cooks and professional chefs.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Increases Property Value</h3>
              <p>
                Granite countertops are a premium feature that significantly boosts your home's resale value and market
                appeal. Real estate agents throughout Johannesburg and Sandton consistently report that granite
                countertops are among the top features buyers seek. Properties with granite kitchen and bathroom
                countertops typically command 10-15% higher prices and sell faster than comparable homes without premium
                stone surfaces.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Easy Maintenance & Hygiene</h3>
              <p>
                With proper sealing, granite countertops are highly resistant to stains and bacteria. The sealed surface
                prevents liquids from penetrating, making cleanup simple with just warm water and mild soap. Granite's
                natural density and proper sealing create a hygienic surface ideal for food preparation. We provide
                professional-grade sealing during installation and recommend annual resealing to maintain optimal
                protection.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Our Granite Countertop Services
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Kitchen Granite Countertops</h3>
              <p>
                Our kitchen granite services include custom kitchen islands with waterfall edges, breakfast bars and
                peninsulas with proper overhang support, full kitchen countertop installations with seamless joints,
                precise undermount and overmount sink cutouts, professional cooktop and appliance integration, and
                coordinating granite backsplashes. We work with your kitchen layout to maximize functionality while
                showcasing granite's natural beauty.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Bathroom Granite Vanities</h3>
              <p>
                Transform your bathroom with custom granite vanity countertops for single or double sink configurations.
                Our bathroom granite services include precision basin cutouts (round, square, rectangular, or custom
                shapes), matching granite backsplashes that protect walls from water damage, medicine cabinet and mirror
                integration, custom edge profiles designed for safety and aesthetics, and water-resistant sealed
                surfaces that withstand bathroom humidity and moisture.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Commercial Granite Installation</h3>
              <p>
                We provide professional granite installation for commercial applications including restaurant and café
                countertops that withstand heavy use, office reception desks that create impressive first impressions,
                retail display counters designed for durability and aesthetics, hotel and hospitality projects requiring
                premium finishes, high-traffic commercial spaces needing industrial-grade installations, and specialized
                commercial requirements with custom fabrication and design.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Popular Granite Colors & Styles in Johannesburg
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Black Granite Countertops</h3>
              <p>
                Black granite varieties like Absolute Black, Black Galaxy, and Steel Grey are perfect for modern,
                contemporary kitchens. Absolute Black offers a solid, deep black appearance that creates dramatic
                contrast with white cabinetry. Black Galaxy features golden and silver flecks that catch light
                beautifully. Steel Grey provides a softer black with subtle grey veining. Black granite is highly sought
                after in Sandton and Johannesburg for its sophisticated, timeless appeal.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">White & Light Granite</h3>
              <p>
                Light granite varieties including Kashmir White, Colonial White, and River White create bright, spacious
                feelings ideal for smaller kitchens. Kashmir White features soft grey and burgundy flecks on a creamy
                background. Colonial White offers white and grey patterns with occasional burgundy accents. River White
                provides light grey and white backgrounds with burgundy veining. These lighter granites are popular
                choices in Pretoria and Centurion for their ability to brighten spaces and complement various design
                styles.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Brown & Beige Granite</h3>
              <p>
                Warm granite colors like Tan Brown, Tropical Brown, and Giallo Ornamental offer traditional elegance
                that coordinates beautifully with wood cabinetry. Tan Brown features rich brown backgrounds with black,
                grey, and burgundy speckles. Tropical Brown displays deeper brown tones with black and gold accents.
                Giallo Ornamental showcases beige and gold backgrounds with burgundy and grey patterns. These warm
                granites complement traditional kitchen designs throughout Randburg and Midrand.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Exotic & Premium Granite</h3>
              <p>
                Exotic granite varieties including Blue Pearl, Emerald Pearl, and Ubatuba create statement pieces for
                luxury spaces. Blue Pearl features striking blue and silver crystals on dark backgrounds. Emerald Pearl
                showcases green and silver sparkle effects. Ubatuba offers deep green backgrounds with gold and white
                flecks. These premium granites command attention and are popular choices for high-end properties in
                Sandton and upscale Johannesburg suburbs.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Professional Installation Process
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Step 1: Free Consultation & Quote</h3>
              <p>
                We visit your property in Johannesburg, Sandton, Pretoria, or surrounding areas to discuss your vision,
                examine your space, and take precise measurements. Our design team reviews your kitchen or bathroom
                layout, discusses edge profile options (straight, bullnose, ogee, bevel, or custom), and helps you
                understand how different granite colors will look in your lighting conditions. We provide a detailed,
                no-obligation quote that includes all costs—no hidden fees or surprise charges.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Step 2: Slab Selection</h3>
              <p>
                Visit our Johannesburg showroom to view full granite slabs, or we bring samples to your property for
                convenience. Since each granite slab is unique, you'll select the exact piece that will become your
                countertop. Our team helps you understand natural stone variations, shows you where seams will occur (if
                necessary), and ensures you're completely satisfied with your selection before fabrication begins. We
                stock over 40 granite varieties with regular shipments of new exotic varieties.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Step 3: Precision Templating</h3>
              <p>
                Our technicians create exact templates of your countertop area using advanced digital templating
                technology that ensures accuracy within 1mm. We template for perfect fit around sinks, cooktops,
                appliances, walls, and corners. This precision eliminates installation issues and ensures your granite
                countertops fit perfectly on the first attempt. Templates are reviewed with you before fabrication to
                confirm all details.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Step 4: Expert Fabrication</h3>
              <p>
                Using state-of-the-art CNC cutting machines and diamond tooling, we fabricate your granite countertops
                to exact specifications in our Johannesburg workshop. This includes precision cutting to template
                dimensions, custom edge profiling with perfect consistency, sink and appliance cutouts with smooth,
                sealed edges, professional polishing to mirror finish, and quality control inspection before
                installation. Our fabrication process takes 5-7 days depending on complexity.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Step 5: Professional Installation</h3>
              <p>
                Our certified installers ensure seamless installation with perfect seams (color-matched and minimal),
                perfectly level surfaces checked with precision tools, secure mounting and proper support for overhangs,
                professional adhesive application that prevents future issues, and thorough cleanup of your space. Most
                kitchen installations complete in 1-2 days depending on size and complexity. We protect your floors and
                cabinetry throughout installation.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Step 6: Sealing & Finishing</h3>
              <p>
                We apply professional-grade penetrating sealer that protects your granite from staining while allowing
                it to breathe naturally. The sealing process includes cleaning the granite to remove all residues,
                applying sealer evenly across all surfaces and edges, allowing proper penetration time for maximum
                protection, and buffing to perfect shine. We perform final quality checks, demonstrate proper care
                techniques, and provide written care instructions. Your granite is ready to use after 24 hours.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Granite Countertop Pricing Guide
              </h2>

              <p>
                Granite countertop pricing in Johannesburg varies based on several factors. Understanding these factors
                helps you budget appropriately and make informed decisions about your granite selection and
                installation.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Pricing Factors</h3>
              <p>
                <strong>Granite Type:</strong> Standard granite (R2,500-R3,500/m²) includes popular varieties like Tan
                Brown, Kashmir White, and basic blacks. Premium granite (R3,500-R5,000/m²) features rarer colors and
                more dramatic patterns. Exotic granite (R5,000-R6,500/m²) includes unique varieties like Blue Pearl,
                Emerald Pearl, and imported exotic varieties.
              </p>
              <p>
                <strong>Slab Thickness:</strong> 20mm (2cm) granite costs R2,500-R4,500/m² but requires additional
                support for overhangs. 30mm (3cm) granite (recommended) costs R3,000-R5,500/m² and provides superior
                durability and aesthetics. 40mm+ extra-thick granite for statement edges ranges R5,000-R8,000/m².
              </p>
              <p>
                <strong>Square Meterage:</strong> Total countertop area affects pricing with larger projects typically
                receiving better per-meter rates. Minimum charge usually applies to small projects (under 3m²).
              </p>
              <p>
                <strong>Edge Profiles:</strong> Straight edges (included in base price), eased edges (add R80/linear
                meter), bullnose edges (add R120/linear meter), ogee or beveled edges (add R180/linear meter), and
                custom profiles available at quoted rates.
              </p>
              <p>
                <strong>Cutouts & Features:</strong> Standard sink cutouts R550-R850 each, cooktop cutouts R650-R950,
                appliance cutouts R450-R650, waterfall edges R2,200-R3,500 per side, and integrated drainboards or
                specialized features at custom rates.
              </p>
              <p>
                <strong>Installation Complexity:</strong> Ground floor access (standard), upper floor access may add
                R800-R1,500, complex layouts with multiple angles add 10-15%, and difficult site conditions assessed
                during consultation.
              </p>

              <p className="text-lg font-semibold text-slate-800 mt-6">
                Average Price Range: R2,500 - R6,500 per square meter (fully installed)
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Granite Maintenance & Care Tips
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Daily Care & Cleaning</h3>
              <p>
                Wipe granite surfaces daily with warm water and mild dish soap using microfiber cloths to prevent
                scratching. Clean up spills promptly, especially acidic liquids like wine, citrus juice, or vinegar that
                can etch sealed granite if left for extended periods. Use cutting boards for food prep to protect both
                your granite and your knives. While granite is scratch-resistant, diamond and ceramic can scratch the
                surface. Avoid harsh chemical cleaners, bleach, ammonia-based cleaners, or abrasive scrubbers that
                damage the sealant.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Periodic Maintenance</h3>
              <p>
                Reseal granite every 1-2 years to maintain optimal stain resistance. We offer professional resealing
                services throughout Johannesburg or provide DIY sealing kits with instructions. Test if resealing is
                needed by sprinkling water on the granite—if it beads up, sealing is still effective; if it absorbs,
                resealing is recommended. Use trivets or hot pads for extremely hot items (though granite handles heat
                well, thermal shock from extreme temperature changes can potentially cause issues over decades). Inspect
                caulking around sinks and backsplashes annually and recaulk if needed to prevent water damage to
                cabinets.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Professional Services Available</h3>
              <p>
                We provide annual inspection and resealing services, professional chip and crack repairs using color-
                matched epoxy, deep cleaning that removes built-up residues and restores shine, polish restoration for
                worn areas or etch marks, and seam repair if settling causes separation. Our maintenance packages keep
                your granite countertops looking perfect for decades.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Granite vs Other Countertop Materials
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Granite vs Quartz</h3>
              <p>
                <strong>Granite:</strong> Natural stone with unique patterns, requires sealing every 1-2 years, superior
                heat resistance (up to 1200°F), each slab is unique, typically R2,500-R4,500/m², and offers timeless
                natural beauty.
              </p>
              <p>
                <strong>Quartz:</strong> Engineered stone with consistent appearance, no sealing needed, heat-resistant
                to only 300°F (requires trivets), uniform patterns, typically R3,500-R5,500/m², and provides modern
                consistency.
              </p>
              <p>
                <Link href="/quartz-granite" className="text-amber-600 hover:underline font-semibold">
                  Learn more about quartz countertops
                </Link>{" "}
                and compare detailed specifications.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Granite vs Marble</h3>
              <p>
                <strong>Granite:</strong> Much harder and more durable, significantly less porous, highly resistant to
                scratching and etching, easier maintenance and care, better for kitchens with heavy use, wider range of
                colors and patterns.
              </p>
              <p>
                <strong>Marble:</strong> Softer and more prone to scratching, more porous requiring frequent sealing,
                etches easily from acids (lemon, wine, vinegar), requires more careful maintenance, better suited for
                bathrooms or low-use areas, classic elegant appearance with characteristic veining.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Granite vs Laminate</h3>
              <p>
                <strong>Granite:</strong> Premium durability lasting 50+ years, natural beauty with unique patterns,
                excellent long-term investment and resale value, heat and scratch resistant, repairs possible if
                damaged, and higher initial investment (R2,500-R6,500/m²).
              </p>
              <p>
                <strong>Laminate:</strong> Budget-friendly (R600-R1,200/m²), limited durability (10-15 years typical),
                can peel, chip, or delaminate, cannot handle heat directly, scratches easily, lower resale value impact,
                and difficult to repair when damaged.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Service Areas Throughout Gauteng
              </h2>

              <p>
                We provide professional granite countertop installation throughout the greater Johannesburg and Pretoria
                areas. Our service coverage includes all major suburbs and surrounding areas, ensuring you have access
                to premium granite services regardless of your location.
              </p>

              <p>
                <strong>Johannesburg Areas:</strong> Sandton (including Morningside, Bryanston, Hyde Park, Sandhurst,
                Atholl), Rosebank, Melrose, Illovo, Houghton, Parktown, Parkmore, Parkview, Forest Town, Saxonwold,
                Dunkeld, Craighall Park, Westcliff, and Johannesburg CBD.
              </p>

              <p>
                <strong>Northern Suburbs:</strong> Fourways, Midrand, Randburg, Northcliff, Northgate, Ferndale,
                Fairland, Cresta, Blackheath, Linden, Emmarentia, and Northwold.
              </p>

              <p>
                <strong>Pretoria & Centurion:</strong> Brooklyn, Waterkloof, Menlyn, Silver Lakes, Centurion, Irene,
                Moreleta Park, Garsfontein, Faerie Glen, and Lynnwood.
              </p>

              <p>
                <strong>East Rand:</strong> Bedfordview, Edenvale, Greenstone, Kempton Park, Boksburg, Benoni, Brakpan,
                Springs, Germiston, and surrounding areas.
              </p>

              <p>
                <strong>South & West:</strong> Johannesburg South, Alberton, Roodepoort, Florida, Krugersdorp, and
                surrounding suburbs.
              </p>

              <p>
                Don't see your area listed? Contact us—we frequently service additional areas and can accommodate
                special requests throughout Gauteng province.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                Why Choose Granite Carpentry?
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">20+ Years of Excellence</h3>
              <p>
                Two decades of perfecting our craft means you get exceptional quality, expertise, and reliability. We've
                completed over 200 granite installations throughout Johannesburg, learning from every project to refine
                our processes. Our experience allows us to anticipate potential issues, recommend optimal solutions, and
                deliver results that exceed expectations.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Comprehensive Quality Guarantee</h3>
              <p>
                We stand behind our work with comprehensive 5-year warranties on granite installations and 24-month
                warranties on workmanship. Our warranties cover installation defects, seam separation, and fabrication
                issues. If any problems occur due to our workmanship, we return promptly to make it right at no charge.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Licensed, Certified & Insured</h3>
              <p>
                Fully certified professionals with public liability insurance up to R5 million for your complete peace
                of mind. Our team includes certified stone fabricators and installers trained in the latest techniques
                and safety protocols. All work complies with South African building regulations and industry standards.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Complete Full-Service Experience</h3>
              <p>
                From selection to installation, we handle everything—no need to coordinate between multiple vendors. One
                consultation, one quote, one team delivering your complete granite countertop solution. We manage the
                entire process, keeping you informed at every stage without requiring you to chase multiple contractors
                or manage complex logistics.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Premium Materials Only</h3>
              <p>
                We source only Grade A granite from reputable suppliers and quarries worldwide. Every slab is inspected
                for quality, structural integrity, and aesthetic appeal before selection. We never use lower-grade
                materials or seconds. Our reputation is built on quality, and we refuse to compromise on materials.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-4">Fair, Transparent Pricing</h3>
              <p>
                Fair, transparent quotes with no hidden costs or surprise charges. What we quote is what you
                pay—guaranteed. Our quotes include all fabrication, delivery, installation, sealing, and cleanup costs.
                We explain pricing clearly so you understand exactly what you're paying for and can make informed
                decisions about your granite investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Granite Colors Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Popular Granite Colors & Varieties</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our extensive granite collection with over 40 varieties in stock. From classic blacks to exotic
              patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {graniteColors.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {category.options.map((option, optionIndex) => (
                      <li key={optionIndex} className="flex items-center text-slate-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {option}
                      </li>
                    ))}
                  </ul>
                  <p className="text-amber-600 font-semibold text-lg">{category.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Professional Installation Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From consultation to completion, we ensure a seamless experience with exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationProcess.map((step, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <CardHeader className="pt-8">
                  <div className="flex items-center space-x-3 mb-2">
                    <step.icon className="h-6 w-6 text-amber-600" />
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Comprehensive Granite Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional granite installation for kitchens, bathrooms, and commercial spaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graniteServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  <p className="text-2xl font-bold text-amber-600 mt-2">{service.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Granite Installation Throughout Gauteng
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional granite countertop services across all major Johannesburg and Pretoria areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 group"
              >
                <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 group-hover:text-amber-600 transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/areas" className="text-amber-600 hover:underline font-semibold">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for Beautiful Granite Countertops?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your space with premium granite countertops installed by Johannesburg's trusted experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-slate-100 text-lg px-8">
              <Link href="/contact">
                Get Your Free Quote Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="tel:+27676014490">
                <Phone className="mr-2 h-5 w-5" />
                067 601 4490
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Monday-Saturday, 8am-5pm</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Serving all of Gauteng</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>5-Year Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Kitchen Renovations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Complete kitchen renovations with custom cabinetry and granite countertops.
                </p>
                <Link href="/kitchen-renovations" className="text-amber-600 hover:underline font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Quartz Countertops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Engineered quartz countertops with consistent patterns and no sealing required.
                </p>
                <Link href="/quartz-granite" className="text-amber-600 hover:underline font-semibold">
                  Compare Quartz vs Granite →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Built-in Cupboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Custom built-in cupboards and storage solutions for every room.</p>
                <Link href="/built-in-cupboards" className="text-amber-600 hover:underline font-semibold">
                  View Cupboards →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
