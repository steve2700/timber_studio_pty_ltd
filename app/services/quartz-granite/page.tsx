import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, CheckCircle, ArrowRight, Shield, Award, Clock, Users, MapPin, Wrench, Gem } from "lucide-react"

export const metadata: Metadata = {
  title: "Granite & Quartz Countertops Johannesburg 2025 | Professional Installation",
  description:
    "Premium granite & quartz countertops in Johannesburg. Kitchen countertops, bathroom vanities, custom stone work. 5-star service, 24-month warranty. Free quotes. Call 067 601 4490.",
  keywords:
    "granite countertops Johannesburg, quartz countertops Johannesburg, kitchen countertops Sandton, granite installation Johannesburg, quartz installation Randburg, bathroom vanities granite, granite suppliers Johannesburg, quartz suppliers Sandton, stone countertops Midrand, granite kitchen tops, quartz kitchen counters, granite bathroom vanities, stone fabrication Johannesburg, granite cutting Johannesburg, quartz cutting services",
  openGraph: {
    title: "Granite & Quartz Countertops Johannesburg 2025 | Professional Installation",
    description:
      "Premium granite & quartz countertops in Johannesburg. Professional installation, 5-star service, 24-month warranty.",
    images: [{ url: "/granite-countertop.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/services/quartz-granite",
  },
}

export default function QuartzGranitePage() {
  const stoneTypes = [
    {
      title: "Granite Countertops",
      description: "Natural granite stone with unique patterns and exceptional durability",
      features: [
        "Heat resistant up to 1200°F",
        "Scratch resistant surface",
        "Unique natural patterns",
        "Long-lasting investment",
      ],
      price: "From R1,200/m²",
      image: "/granite-countertop.jpg",
    },
    {
      title: "Quartz Countertops",
      description: "Engineered quartz with consistent patterns and non-porous surface",
      features: ["Non-porous surface", "Stain resistant", "Consistent patterns", "Low maintenance"],
      price: "From R1,500/m²",
      image: "/granite-installation-Johannesburg.jpg",
    },
    {
      title: "Bathroom Vanities",
      description: "Custom granite and quartz vanity tops for luxury bathroom renovations",
      features: ["Water resistant", "Custom edge profiles", "Integrated sinks", "Luxury finishes"],
      price: "From R2,500",
      image: "/bathroom-vanity (1).webp",
    },
    {
      title: "Kitchen Islands",
      description: "Statement granite and quartz surfaces for kitchen islands and bars",
      features: ["Waterfall edges", "Custom shapes", "Integrated features", "Premium finishes"],
      price: "From R8,000",
      image: "/granite-installation-sandton.jpg",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Site Measurement",
      description: "Precise templating and measurement of your countertop space for perfect fitting.",
    },
    {
      step: "2",
      title: "Stone Selection",
      description: "Choose from our extensive range of granite and quartz slabs at our showroom.",
    },
    {
      step: "3",
      title: "Fabrication",
      description: "Professional cutting, polishing, and edge profiling in our workshop.",
    },
    {
      step: "4",
      title: "Installation",
      description: "Expert installation with seamless joints and perfect alignment.",
    },
  ]

  const areas = [
    "Johannesburg South",
    "Sandton",
    "Randburg",
    "Kempton Park",
    "Midrand",
    "Fourways",
    "Boksburg",
    "Centurion",
    "Pretoria",
    "Alberton",
    "Edenvale",
    "Roodepoort",
  ]

  const faqs = [
    {
      question: "What's the difference between granite and quartz countertops in Johannesburg?",
      answer:
        "Granite is a natural stone with unique patterns and requires periodic sealing, while quartz is engineered stone that's non-porous and maintenance-free. Granite offers natural beauty and heat resistance, while quartz provides consistent patterns and stain resistance. Both are excellent choices for Johannesburg kitchens, with granite typically costing R1,200-R2,000/m² and quartz R1,500-R2,500/m². Our team helps you choose based on your lifestyle, budget, and design preferences.",
    },
    {
      question: "How long does granite countertop installation take in Sandton and Randburg?",
      answer:
        "Granite and quartz installation typically takes 1-2 days after templating. The complete process includes: initial consultation (1 day), templating (1 day), fabrication (3-5 days), and installation (1-2 days). Total timeline is usually 1-2 weeks from measurement to completion. We coordinate with your kitchen renovation schedule and provide accurate timelines. Emergency installations can be expedited for urgent projects in Sandton, Randburg, and surrounding areas.",
    },
    {
      question: "Do you provide granite countertop maintenance services in Johannesburg?",
      answer:
        "Yes, we provide comprehensive maintenance services including granite sealing, polishing, chip repairs, and cleaning guidance. Granite should be sealed annually to maintain stain resistance, while quartz requires minimal maintenance. We offer maintenance packages for residential and commercial clients throughout Johannesburg. Our team provides detailed care instructions and can schedule regular maintenance visits to keep your countertops looking perfect for years.",
    },
    {
      question: "What granite and quartz colors are popular in Johannesburg homes?",
      answer:
        "Popular granite colors in Johannesburg include Black Galaxy, Absolute Black, Kashmir White, and Tan Brown. For quartz, clients prefer Calacatta, Carrara, Pure White, and Grey options. We stock over 50 granite and quartz varieties at our showroom. Color selection depends on your kitchen design, lighting, and personal preference. Our design team provides samples and helps coordinate with your cabinetry and overall kitchen aesthetic for the perfect match.",
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
            "@type": "Service",
            name: "Granite & Quartz Countertops Johannesburg",
            description:
              "Professional granite and quartz countertop installation in Johannesburg including kitchen countertops, bathroom vanities, and custom stone work.",
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
            },
            areaServed: ["Johannesburg", "Sandton", "Randburg", "Midrand", "Centurion"],
            serviceType: "Granite & Quartz Countertops",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              priceRange: "R1200-R5000",
              availability: "https://schema.org/InStock",
            },
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
                  <Gem className="h-3 w-3 mr-1" />
                  Premium Stone Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Granite & <span className="text-amber-400">Quartz Countertops</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Transform your kitchen and bathroom with premium granite and quartz countertops. Professional
                  installation, extensive stone selection, and guaranteed quality from Johannesburg's most trusted stone
                  specialists.
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
                  <span>5.0 Rating • 47+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Licensed & Insured</span>
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
                  src="/granite-countertop.jpg"
                  alt="Premium Granite Countertops Johannesburg - Professional Installation"
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
                        <p className="font-semibold text-slate-900">Latest Project</p>
                        <p className="text-sm text-slate-600">Granite Kitchen - Sandton</p>
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

      {/* Expanded Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Premium Granite and Quartz Countertops in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Granite and quartz countertops have become the gold standard for luxury kitchens and bathrooms
                throughout Johannesburg, Sandton, and Randburg. Our professional stone installation services cater to
                homeowners who demand the perfect combination of beauty, durability, and functionality. With over 47
                successful installations across the Greater Johannesburg area, we understand the unique requirements of
                South African homes and the importance of quality craftsmanship that withstands our climate.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Granite Countertops: Natural Beauty for Johannesburg Kitchens
              </h3>
              <p>
                Granite countertops offer unmatched natural beauty with unique patterns that make each installation
                truly one-of-a-kind. Popular granite varieties in Johannesburg include Black Galaxy, Absolute Black,
                Kashmir White, and Tan Brown, each offering distinct characteristics that complement different kitchen
                designs. Our granite sourcing network ensures access to premium slabs from quarries worldwide, while our
                local fabrication facility in Johannesburg provides custom cutting, edge profiling, and polishing
                services.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Quartz Countertops: Engineered Perfection for Modern Homes
              </h3>
              <p>
                Engineered quartz countertops provide consistent patterns, non-porous surfaces, and exceptional
                durability that's perfect for busy Johannesburg households. Leading quartz brands like Caesarstone,
                Silestone, Compac, and Quantum Quartz offer extensive color selections that coordinate beautifully with
                contemporary kitchen designs. Quartz countertops require minimal maintenance while providing superior
                stain and scratch resistance, making them ideal for families in Sandton, Randburg, and Midrand.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Professional Installation Process and Quality Assurance
              </h3>
              <p>
                Our comprehensive installation process begins with precise templating using advanced measuring
                technology to ensure perfect fit and alignment. Professional fabrication includes custom edge profiles,
                sink cutouts, and specialized features like waterfall edges for kitchen islands. Installation is
                performed by certified technicians who ensure seamless joints, proper support, and thorough cleanup.
                Every project includes our 24-month warranty covering both materials and workmanship.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Maintenance and Care for Long-lasting Beauty
              </h3>
              <p>
                Proper maintenance ensures your granite or quartz countertops maintain their beauty for decades. Granite
                requires annual sealing to maintain stain resistance, while quartz surfaces need only regular cleaning
                with mild soap and water. We provide detailed care instructions and offer maintenance services
                throughout Johannesburg. Our team can perform granite resealing, polishing, and minor repairs to keep
                your investment looking perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Service Details */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Complete Granite and Quartz Services in Johannesburg
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Kitchen Countertop Specialists</h3>
                <div className="prose prose-lg text-slate-600 space-y-4">
                  <p>
                    Our kitchen countertop services encompass everything from initial design consultation to final
                    installation and aftercare. We understand that the kitchen is the heart of your Johannesburg home,
                    which is why we offer comprehensive solutions that combine functionality with stunning aesthetics.
                    Our team works with leading granite suppliers and quartz manufacturers to provide the widest
                    selection of premium materials.
                  </p>
                  <p>
                    Popular granite options for Johannesburg kitchens include Black Galaxy with its distinctive golden
                    speckles, Absolute Black for modern minimalist designs, Kashmir White for traditional elegance, and
                    Tan Brown for warm, inviting spaces. Each granite slab is unique, offering natural variations that
                    make your countertop truly one-of-a-kind. Our experienced team helps you select the perfect slab
                    that complements your kitchen design and lifestyle requirements.
                  </p>
                  <p>
                    For quartz countertops, we partner with premium brands like Caesarstone, Silestone, Compac, and
                    Quantum Quartz. These engineered surfaces offer consistent patterns, superior durability, and
                    non-porous properties that make them ideal for busy family kitchens. Popular quartz colors in
                    Johannesburg include Calacatta Gold, Pure White, Concrete, and various marble-look patterns that
                    provide the beauty of natural stone without the maintenance requirements.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Bathroom Vanity Excellence</h3>
                <div className="prose prose-lg text-slate-600 space-y-4">
                  <p>
                    Bathroom vanity installations require specialized expertise due to the unique challenges of
                    moisture, humidity, and daily use. Our bathroom granite and quartz solutions are designed to
                    withstand the demanding South African climate while providing luxury and functionality. We offer
                    custom edge profiles, integrated sink options, and specialized sealing treatments for bathroom
                    applications.
                  </p>
                  <p>
                    Granite bathroom vanities are particularly popular in Sandton and Randburg homes due to their
                    natural beauty and heat resistance. We recommend specific granite varieties that perform
                    exceptionally well in bathroom environments, including Absolute Black, Kashmir White, and Baltic
                    Brown. These stones are naturally resistant to moisture and can be sealed with premium products for
                    enhanced protection.
                  </p>
                  <p>
                    Quartz bathroom vanities offer superior performance in high-moisture environments due to their
                    non-porous nature. Unlike natural stone, quartz doesn't require sealing and is naturally resistant
                    to bacteria and mold growth. This makes it an excellent choice for family bathrooms in Midrand,
                    Fourways, and other Johannesburg suburbs where hygiene and low maintenance are priorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Advanced Fabrication and Installation Techniques
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Precision Templating Process</h4>
                  <p className="text-slate-600 mb-4">
                    Our templating process uses advanced laser measuring technology to create precise templates of your
                    countertop space. This ensures perfect fit and eliminates costly mistakes during fabrication. We
                    create detailed templates that account for appliance placement, plumbing fixtures, electrical
                    outlets, and any architectural features that affect the installation.
                  </p>
                  <p className="text-slate-600">
                    Digital templating allows us to provide accurate material calculations, reducing waste and ensuring
                    cost-effective solutions for our Johannesburg clients. The precision of our templates enables
                    seamless joints, perfect overhangs, and proper support placement for long-lasting installations.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">Custom Edge Profiles and Features</h4>
                  <p className="text-slate-600 mb-4">
                    We offer extensive edge profile options including bullnose, beveled, ogee, waterfall, and custom
                    profiles designed to complement your kitchen or bathroom design. Waterfall edges are particularly
                    popular in modern Sandton homes, creating dramatic visual impact and showcasing the beauty of the
                    stone material.
                  </p>
                  <p className="text-slate-600">
                    Additional custom features include integrated drainboards, decorative inlays, custom cutouts for
                    specialized appliances, and undermount sink preparations. Our fabrication facility is equipped with
                    CNC machinery that enables precise cutting and shaping for even the most complex designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Serving Greater Johannesburg and Surrounding Areas
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Johannesburg Central & South</h3>
                <p className="text-slate-600 mb-4">
                  Serving the heart of Johannesburg with premium granite and quartz installations. Our central location
                  enables quick response times and efficient service delivery throughout the CBD and southern suburbs.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Same-day consultations available</li>
                  <li>• Emergency repair services</li>
                  <li>• Commercial and residential projects</li>
                  <li>• Heritage home specialists</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Sandton & Northern Suburbs</h3>
                <p className="text-slate-600 mb-4">
                  Luxury granite and quartz solutions for Sandton's premium properties. We understand the high standards
                  expected in these areas and deliver accordingly with premium materials and flawless execution.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Luxury home specialists</li>
                  <li>• Premium material selection</li>
                  <li>• White-glove service</li>
                  <li>• Architect and designer partnerships</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">East Rand & Pretoria</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive coverage extending to Kempton Park, Boksburg, Centurion, and Pretoria. Our mobile
                  service ensures the same quality and professionalism regardless of location.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Extended service area coverage</li>
                  <li>• Mobile consultation services</li>
                  <li>• Flexible scheduling options</li>
                  <li>• Local supplier partnerships</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Granite and Quartz Services?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Local Expertise</h4>
                  <p className="text-slate-300 text-sm">
                    Deep understanding of Johannesburg's architectural styles, climate considerations, and local
                    preferences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quality Materials</h4>
                  <p className="text-slate-300 text-sm">
                    Direct relationships with premium suppliers ensure access to the finest granite and quartz
                    materials.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Skilled Craftsmen</h4>
                  <p className="text-slate-300 text-sm">
                    Experienced fabricators and installers with years of specialized training in stone work.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Complete Service</h4>
                  <p className="text-slate-300 text-sm">
                    From design consultation to final installation and ongoing maintenance support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stone Types Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Premium Stone Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From kitchen countertops to bathroom vanities, we provide comprehensive stone installation services with
              premium materials and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stoneTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white">{type.price}</Badge>
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-slate-600">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Professional Stone Installation Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial measurement to final installation, our streamlined process ensures perfect results and
              complete customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">
                Common questions about granite and quartz countertops in Johannesburg
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-200 pb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Service Areas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Granite & Quartz Installation Throughout Johannesburg
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional stone installation services throughout Greater Johannesburg and surrounding areas in Gauteng.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:border-amber-200"
              >
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span className="font-medium text-slate-900">{area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-xl text-slate-600">Complete your renovation with our additional services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Kitchen Renovations</h3>
                <p className="text-slate-600 mb-6">
                  Complete kitchen renovations with custom cabinets and granite countertops.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services/kitchen-renovations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Built-in Cupboards</h3>
                <p className="text-slate-600 mb-6">
                  Custom built-in cupboards and wardrobes to complement your stone surfaces.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services/built-in-cupboards">View Options</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Decking & Flooring</h3>
                <p className="text-slate-600 mb-6">
                  Professional flooring installation to complete your home renovation.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services/decking-flooring">Explore Flooring</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready for Premium Stone Countertops?</h2>
            <p className="text-xl text-amber-100">
              Transform your kitchen or bathroom with premium granite and quartz countertops. Get a free consultation
              and detailed quote from Johannesburg's most trusted stone specialists.
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
                <Link href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 067 601 4490
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-amber-100">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Expert Installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-4 w-4" />
                <span>Premium Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>24-Month Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
