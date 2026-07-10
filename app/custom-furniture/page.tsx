import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Award, Phone, ArrowRight, Armchair, MapPin } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Bespoke Custom Furniture Johannesburg | Handcrafted Timber Furniture Makers",
  description:
    "Bespoke custom furniture handcrafted in Johannesburg. Solid timber dining tables, TV units, shelving, sideboards & statement pieces made to measure for Sandton, Hyde Park, Bryanston & Fourways homes. 5-star rated, 24-month warranty. Free design consultation. Call 063 397 7498.",
  keywords:
    "custom furniture johannesburg, bespoke furniture johannesburg, handcrafted furniture sandton, solid timber dining table johannesburg, custom made furniture gauteng, bespoke joinery furniture, wooden furniture makers johannesburg, made to measure furniture sandton, custom tv unit johannesburg, bespoke sideboard johannesburg, timber furniture designer johannesburg",
  openGraph: {
    title: "Bespoke Custom Furniture Johannesburg | Handcrafted Timber Furniture Makers",
    description:
      "Handcrafted bespoke furniture made to measure in Johannesburg. Solid timber dining tables, TV units, shelving and statement pieces. 5-star rated craftsmanship.",
    images: [{ url: "/bespoke-timber-furniture-johannesburg.png", width: 1200, height: 630 }],
    url: "https://www.timberstudio.co.za/custom-furniture",
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za/custom-furniture",
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

const furnitureFAQs = [
  {
    question: "How much does bespoke custom furniture cost in Johannesburg?",
    answer:
      "Bespoke furniture pricing in Johannesburg depends on the timber species, size, and complexity. A solid pine or oak-veneer coffee table typically starts from R4,500, custom TV and entertainment units range from R12,000 to R35,000, and solid hardwood dining tables (kiaat, oak or walnut) range from R18,000 to R60,000+. Because every piece is made to measure in our Johannesburg workshop, we provide an itemised quote after a free design consultation so there are no surprises.",
  },
  {
    question: "How long does it take to make a custom piece of furniture?",
    answer:
      "Most bespoke furniture projects take 3 to 6 weeks from approved design to delivery. Smaller pieces like side tables or floating shelves are usually ready in 2 to 3 weeks, while large dining suites, wall units and multi-piece commissions take 5 to 8 weeks. We confirm the exact timeline in writing before we begin and keep clients across Sandton, Bryanston and the wider Johannesburg area updated at each stage.",
  },
  {
    question: "What timber and materials do you use for custom furniture?",
    answer:
      "We work in solid South African and imported hardwoods including kiaat, oak, walnut, ash and blackwood, as well as engineered options such as veneered board and supawood for painted finishes. All timber is sourced from reputable, sustainably managed suppliers. We finish pieces with hard-wearing lacquers, natural oils or hand-waxes chosen to suit Johannesburg's dry Highveld climate and each client's maintenance preferences.",
  },
  {
    question: "Do you deliver and install custom furniture across Gauteng?",
    answer:
      "Yes. We deliver and install throughout Greater Johannesburg including Sandton, Rosebank, Hyde Park, Bryanston, Fourways, Randburg, Midrand and Pretoria. Built-in and wall-mounted pieces are professionally installed and levelled by our own team, and freestanding furniture is delivered assembled and placed exactly where you want it. Delivery within the Johannesburg metro is included on most commissions.",
  },
  {
    question: "Can you match custom furniture to my existing interior or a photo?",
    answer:
      "Absolutely. Bring us a Pinterest board, a magazine photo or a sample of an existing piece and our designers will develop a matching design with accurate timber, colour and finish selections. We provide detailed drawings and finish samples before production so you can see exactly how the piece will complement your Johannesburg home before we build it.",
  },
]

const serviceAreas = [
  "Sandton",
  "Hyde Park",
  "Bryanston",
  "Rosebank",
  "Fourways",
  "Randburg",
  "Morningside",
  "Sandhurst",
  "Midrand",
  "Pretoria",
]

export default function CustomFurniturePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.timberstudio.co.za/custom-furniture#service",
                name: "Bespoke Custom Furniture Johannesburg",
                description:
                  "Handcrafted bespoke furniture made to measure in Johannesburg, including solid timber dining tables, entertainment units, shelving, sideboards and statement pieces.",
                provider: {
                  "@type": "LocalBusiness",
                  "@id": "https://www.timberstudio.co.za/#organization",
                  name: "The Timber Studio",
                  telephone: "+27633977498",
                  email: "info@timberstudio.co.za",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Johannesburg",
                    addressRegion: "Gauteng",
                    addressCountry: "ZA",
                  },
                },
                areaServed: [
                  "Johannesburg",
                  "Sandton",
                  "Hyde Park",
                  "Bryanston",
                  "Rosebank",
                  "Fourways",
                  "Randburg",
                  "Midrand",
                  "Pretoria",
                  "Centurion",
                ],
                serviceType: "Bespoke Furniture Design & Manufacture",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "ZAR",
                  priceRange: "R4500-R80000",
                  availability: "https://schema.org/InStock",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Bespoke Furniture Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Solid Timber Dining Tables",
                        description: "Custom solid hardwood dining tables made to measure in kiaat, oak or walnut.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Entertainment & TV Units",
                        description: "Bespoke media units and floating consoles built for your space and equipment.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Shelving & Sideboards",
                        description: "Freestanding and wall-mounted shelving, sideboards and statement storage.",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: furnitureFAQs.map((faq) => ({
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Armchair className="h-3 w-3 mr-1" />
                  Bespoke Furniture Makers
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Bespoke <span className="text-amber-400">Custom Furniture</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Handcrafted, made-to-measure furniture designed and built in our Johannesburg workshop. Solid timber
                  dining tables, entertainment units, shelving and statement pieces created to fit your home and last a
                  lifetime.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Book a Design Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Link href="tel:+27633977498">
                    <Phone className="mr-2 h-5 w-5" />
                    063 397 7498
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <span>5.0 Rating • 1000+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-blue-400" />
                  <span>24-Month Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/bespoke-timber-furniture-johannesburg.png"
                  alt="Bespoke solid timber dining table and shelving handcrafted for a Johannesburg home by The Timber Studio"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">Latest Commission</p>
                        <p className="text-sm text-slate-600">Solid Walnut Dining Suite - Hyde Park</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Handcrafted Bespoke Furniture in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                At The Timber Studio, bespoke furniture is designed around you, your space and the way you live.
                Mass-produced furniture rarely fits the proportions of a Johannesburg home or the exact niche you want
                to fill. Every table, cabinet and shelf we build is drawn, measured and crafted by our own team in our
                Johannesburg workshop, then delivered and installed across Sandton, Bryanston, Fourways and the greater
                Gauteng area.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Solid Timber Dining Tables &amp; Statement Pieces
              </h3>
              <p>
                A dining table is often the heart of the home, and ours are built to be passed down. We hand-select
                solid hardwoods such as kiaat, oak and walnut, then join them using traditional techniques like
                breadboard ends and mortise-and-tenon joinery for tables that stay flat and stable through the
                Highveld's dry winters and humid summers. From live-edge slabs to refined tapered-leg designs, each
                piece is finished to your specification.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Entertainment Units, Sideboards &amp; Storage
              </h3>
              <p>
                Bespoke media units and sideboards are designed around your equipment, cable management and storage
                needs. We integrate soft-close drawers, adjustable shelving, ventilation for electronics and concealed
                cable routing so the finished piece is as practical as it is beautiful. Whether you want a floating
                console for a Sandton apartment or a full-wall entertainment unit for a Bryanston family home, we build
                to the millimetre.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Our Design-Led Process</h3>
              <p>
                Every commission begins with a free consultation where we measure your space, discuss timber and finish
                options and understand how the piece will be used. We then produce detailed drawings and finish samples
                so you can approve the design before we cut a single board. This design-led approach removes guesswork
                and guarantees the final piece fits its space and complements your interior perfectly.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Craftsmanship Backed by a 24-Month Warranty
              </h3>
              <p>
                All of our bespoke furniture is built by skilled cabinetmakers and backed by a 24-month workmanship
                warranty. We use hard-wearing lacquers, natural oils and hand-waxes selected for South African
                conditions, and we are happy to advise on long-term care so your investment continues to look its best
                for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Craft</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From a single statement table to a full home of coordinated pieces, every commission is designed and built
              to order in our Johannesburg workshop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dining & Coffee Tables",
                body: "Solid hardwood dining tables, coffee tables and console tables in kiaat, oak and walnut, built to your exact dimensions.",
              },
              {
                title: "Entertainment & TV Units",
                body: "Bespoke media units with cable management, ventilation and soft-close storage designed around your equipment.",
              },
              {
                title: "Shelving & Bookcases",
                body: "Freestanding and wall-mounted shelving, ladder shelves and library-style bookcases in timber to match your interior.",
              },
              {
                title: "Sideboards & Credenzas",
                body: "Statement storage for dining and living spaces with hand-fitted doors, drawers and premium hardware.",
              },
              {
                title: "Beds & Headboards",
                body: "Custom timber bed frames and upholstered-timber headboards sized for your room and mattress.",
              },
              {
                title: "Occasional & Statement Pieces",
                body: "Bar units, display cabinets, benches and one-off commissions crafted from your inspiration.",
              },
            ].map((item) => (
              <Card key={item.title} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas (GEO) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Bespoke Furniture Across Johannesburg &amp; Gauteng</h2>
            <p className="text-lg text-slate-600 mb-8">
              We design, deliver and install custom furniture throughout the northern suburbs and greater Johannesburg,
              with delivery within the metro included on most commissions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <MapPin className="h-3.5 w-3.5 text-amber-600" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Furniture Commissions</h2>
            <p className="text-lg text-slate-600">
              A selection of bespoke pieces handcrafted for homes across Johannesburg.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/bespoke-timber-furniture-johannesburg.png",
                alt: "Bespoke solid timber dining table with matching shelving in a Johannesburg home",
                caption: "Solid Walnut Dining Suite - Hyde Park",
              },
              {
                src: "/entertainment unit.jpg",
                alt: "Custom timber entertainment and TV unit built for a Sandton living room",
                caption: "Entertainment Unit - Sandton",
              },
              {
                src: "/granite-carpentry-different.webp",
                alt: "Handcrafted timber cabinetry and storage detail by The Timber Studio",
                caption: "Bespoke Storage - Bryanston",
              },
            ].map((img) => (
              <div key={img.caption} className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Complete Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">
                Everything you need to know about commissioning bespoke furniture in Johannesburg.
              </p>
            </div>
            <FAQAccordion faqs={furnitureFAQs} />
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-lg text-slate-600">Complete your home with our other bespoke joinery services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Built-in Cupboards</h3>
                <p className="text-slate-600 mb-6">
                  Custom built-in wardrobes and storage designed to maximise every room in your home.
                </p>
                <Button asChild variant="outline">
                  <Link href="/built-in-cupboards">View Storage</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Home Office &amp; Study Fit-Outs</h3>
                <p className="text-slate-600 mb-6">
                  Built-in desks, shelving and study rooms crafted for focused, productive work from home.
                </p>
                <Button asChild variant="outline">
                  <Link href="/home-office-fit-outs">View Home Offices</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Kitchen Renovations</h3>
                <p className="text-slate-600 mb-6">
                  Custom kitchens with premium cabinetry and countertops designed for the way you cook.
                </p>
                <Button asChild variant="outline">
                  <Link href="/kitchen-renovations">View Kitchens</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Commission Your Piece?</h2>
            <p className="text-xl text-amber-100">
              Book a free design consultation with The Timber Studio and let&apos;s create bespoke furniture that fits
              your Johannesburg home perfectly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
              >
                <Link href="tel:+27633977498">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 063 397 7498
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
