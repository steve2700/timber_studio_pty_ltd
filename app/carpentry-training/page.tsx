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
  Users,
  MapPin,
  Wrench,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Carpentry Training Johannesburg 2025 | Professional Skills Development",
  description:
    "Professional carpentry training courses in Johannesburg. Learn woodworking, cabinet making, furniture construction. Certified instructors, hands-on training. Enroll today. Call 067 601 4490.",
  keywords:
    "carpentry training Johannesburg, woodworking courses Johannesburg, carpentry school Sandton, cabinet making training Randburg, furniture making courses Johannesburg, carpentry apprenticeship Midrand, woodworking classes Johannesburg, carpentry certification Sandton, trade skills training Johannesburg, carpentry courses Randburg, woodworking education Johannesburg, carpentry skills development, professional carpentry training, carpentry workshop Johannesburg, woodworking apprenticeship Sandton",
  openGraph: {
    title: "Carpentry Training Johannesburg 2025 | Professional Skills Development",
    description:
      "Professional carpentry training courses in Johannesburg. Certified instructors, hands-on training, career development opportunities.",
    images: [{ url: "/quality_woodworking_education_in_south_africa-1.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/services/carpentry-training",
  },
}

export default function CarpentryTrainingPage() {
  const courses = [
    {
      title: "Basic Carpentry Skills",
      description: "Foundation course covering essential carpentry techniques and tool usage",
      features: ["Hand tool proficiency", "Basic joinery techniques", "Safety procedures", "Material knowledge"],
      duration: "6 weeks",
      price: "R3,500",
      image: "/quality_woodworking_education_in_south_africa-1.jpg",
    },
    {
      title: "Cabinet Making",
      description: "Advanced course focusing on custom cabinet construction and finishing",
      features: [
        "Cabinet design principles",
        "Precision cutting techniques",
        "Hardware installation",
        "Professional finishing",
      ],
      duration: "12 weeks",
      price: "R7,500",
      image: "/south_african_woodworking_certification-jpg",
    },
    {
      title: "Furniture Construction",
      description: "Comprehensive course in furniture design and construction techniques",
      features: ["Furniture design", "Advanced joinery", "Upholstery basics", "Project management"],
      duration: "16 weeks",
      price: "R9,500",
      image: "/quality_woodworking_education_in_south_africa-1.jpg",
    },
    {
      title: "Professional Certification",
      description: "Industry-recognized certification program for career advancement",
      features: [
        "Comprehensive assessment",
        "Industry certification",
        "Job placement assistance",
        "Continuing education",
      ],
      duration: "24 weeks",
      price: "R12,500",
      image: "/south_african_woodworking_certification-jpg",
    },
  ]

  const benefits = [
    {
      icon: GraduationCap,
      title: "Certified Instructors",
      description: "Learn from experienced professionals with industry certifications and real-world expertise.",
    },
    {
      icon: Wrench,
      title: "Hands-on Training",
      description: "Practical workshops with professional tools and equipment in our fully equipped facility.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Receive certificates recognized by employers and industry associations throughout South Africa.",
    },
    {
      icon: Users,
      title: "Career Support",
      description: "Job placement assistance and career guidance to help you succeed in the carpentry industry.",
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
      question: "What carpentry training courses are available in Johannesburg?",
      answer:
        "We offer comprehensive carpentry training programs in Johannesburg including Basic Carpentry Skills (6 weeks, R3,500), Cabinet Making (12 weeks, R7,500), Furniture Construction (16 weeks, R9,500), and Professional Certification (24 weeks, R12,500). Courses cover hand tool usage, power tool operation, joinery techniques, safety procedures, and business skills. All programs include hands-on workshops with professional equipment and materials. Evening and weekend classes are available for working professionals.",
    },
    {
      question: "Are your carpentry courses certified and recognized in South Africa?",
      answer:
        "Yes, our carpentry training programs are certified and recognized throughout South Africa. We provide industry-standard certifications that are accepted by employers, contractors, and trade associations. Our instructors hold professional qualifications and our curriculum meets national skills development standards. Graduates receive certificates that demonstrate competency in carpentry skills and can be used for employment applications, business licensing, and further education opportunities.",
    },
    {
      question: "Do you provide job placement assistance after carpentry training in Sandton?",
      answer:
        "Yes, we provide comprehensive job placement assistance for all carpentry training graduates throughout Johannesburg, Sandton, and Randburg. Our career services include resume preparation, interview coaching, job search assistance, and connections with local contractors and construction companies. We maintain relationships with employers who regularly hire our graduates. Many students find employment before completing their training through our industry network and apprenticeship programs.",
    },
    {
      question: "What tools and equipment are included in carpentry training courses?",
      answer:
        "Our carpentry training facility includes professional-grade tools and equipment for hands-on learning. Students have access to hand tools (chisels, planes, saws), power tools (circular saws, routers, sanders), workshop machinery (table saws, jointers, planers), and safety equipment. Basic tool kits are provided during training, and we offer guidance on purchasing professional tools for career use. Our workshop simulates real-world carpentry environments to prepare students for employment.",
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
            "@type": "EducationalOrganization",
            name: "Granite Carpentry Training Center",
            description:
              "Professional carpentry training courses in Johannesburg including woodworking, cabinet making, and furniture construction with certified instructors.",
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
            serviceType: "Carpentry Training & Education",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              priceRange: "R3500-R12500",
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
                  <GraduationCap className="h-3 w-3 mr-1" />
                  Professional Training Center
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional <span className="text-amber-400">Carpentry Training</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Launch your carpentry career with professional training from certified instructors. Learn essential
                  skills, gain industry certification, and access job placement assistance in Johannesburg's growing
                  construction industry.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Enroll Today
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
                  <span>5.0 Rating • 200+ Graduates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Certified Programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-blue-400" />
                  <span>Job Placement Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/quality_woodworking_education_in_south_africa-1.jpg"
                  alt="Professional Carpentry Training Johannesburg - Hands-on Learning"
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
                        <p className="font-semibold text-slate-900">Current Program</p>
                        <p className="text-sm text-slate-600">Cabinet Making Course</p>
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

      {/* Benefits Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Professional Carpentry Training in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Carpentry training in Johannesburg offers excellent career opportunities in South Africa's growing
                construction and renovation industry. Our professional training programs cater to individuals seeking to
                develop carpentry skills for employment, entrepreneurship, or personal enrichment. Located in the heart
                of Johannesburg with easy access from Sandton, Randburg, and surrounding areas, our training facility
                provides hands-on learning with industry-standard tools and equipment under the guidance of certified
                instructors.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Comprehensive Carpentry Skills Development
              </h3>
              <p>
                Our carpentry training curriculum covers essential skills needed for success in the modern construction
                industry. Students learn proper tool usage, safety procedures, measurement and layout techniques,
                joinery methods, and finishing processes. Advanced courses include cabinet making, furniture
                construction, and specialized techniques used in high-end residential and commercial projects throughout
                Johannesburg. Each program combines theoretical knowledge with extensive hands-on practice to ensure
                graduates are job-ready upon completion.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Industry-Certified Instructors and Modern Facilities
              </h3>
              <p>
                Our training programs are led by certified carpentry professionals with decades of experience in the
                Johannesburg construction industry. Instructors bring real-world expertise from residential renovations,
                commercial construction, and custom furniture making. Our modern training facility features
                professional-grade tools, workshop machinery, and safety equipment that students will encounter in their
                careers. Small class sizes ensure personalized attention and accelerated learning for each student.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Career Development and Job Placement Support
              </h3>
              <p>
                Career development is integral to our carpentry training programs. We provide job placement assistance,
                resume preparation, interview coaching, and connections with local contractors and construction
                companies throughout Johannesburg, Sandton, and Randburg. Many graduates find employment before
                completing their training through our industry partnerships and apprenticeship programs. We also support
                students interested in starting their own carpentry businesses with entrepreneurship guidance and
                business planning assistance.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Flexible Scheduling and Continuing Education
              </h3>
              <p>
                Understanding that many students have work and family commitments, we offer flexible scheduling options
                including evening and weekend classes. Part-time programs allow working professionals to develop
                carpentry skills without interrupting their current employment. Continuing education opportunities help
                graduates stay current with new techniques, tools, and industry standards. Advanced workshops and
                specialty courses provide ongoing skill development throughout your carpentry career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Training Programs</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Carpentry Training Courses</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From basic skills to professional certification, our comprehensive training programs prepare you for a
              successful career in carpentry and woodworking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white">{course.price}</Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{course.duration}</Badge>
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-slate-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">Common questions about carpentry training in Johannesburg</p>
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Service Areas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Carpentry Training Throughout Johannesburg
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Students from throughout Greater Johannesburg and surrounding areas attend our professional carpentry
              training programs.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-xl text-slate-600">Explore our professional carpentry services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Kitchen Renovations</h3>
                <p className="text-slate-600 mb-6">
                  Professional kitchen renovations showcasing the skills taught in our training programs.
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
                  Custom built-in cupboards demonstrating advanced carpentry techniques and craftsmanship.
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
                  Professional decking and flooring installation services using trained craftsmen.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services/decking-flooring">Explore Services</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Carpentry Career?</h2>
            <p className="text-xl text-amber-100">
              Join our professional carpentry training programs and launch your career in Johannesburg's growing
              construction industry. Get certified, gain practical skills, and access job placement support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">
                  Enroll Today
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
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-4 w-4" />
                <span>Hands-on Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>Job Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
