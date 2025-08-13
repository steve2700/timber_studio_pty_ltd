import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Star,
  Clock,
  Shield,
  Phone,
  Mail,
  ArrowRight,
  GraduationCap,
  Hammer,
  Users,
  Award,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Carpentry Training Johannesburg 2025 | Professional Woodworking Courses | Certified Programs",
  description:
    "Professional carpentry training Johannesburg. Woodworking courses, cabinet making, furniture construction. Certified programs, hands-on training. Enroll today. Call 067 601 4490.",
  keywords:
    "carpentry training Johannesburg 2025, woodworking courses Johannesburg, carpentry school Johannesburg, cabinet making courses Johannesburg, furniture making training Johannesburg, woodworking education Johannesburg, carpentry certification Johannesburg, trade skills training Johannesburg, woodworking classes Johannesburg, carpentry apprenticeship Johannesburg, professional carpentry training Johannesburg, woodworking workshop Johannesburg, carpentry skills development Johannesburg, furniture construction courses Johannesburg, woodworking certification Johannesburg",
  openGraph: {
    title: "Carpentry Training Johannesburg 2025 | Professional Woodworking Courses",
    description:
      "Professional carpentry training Johannesburg. Woodworking courses, cabinet making, furniture construction. Certified programs, hands-on training.",
    images: [{ url: "/quality_woodworking_education_in_south_africa-1.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/services/carpentry-training",
  },
}

export default function CarpentryTrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Granite Carpentry Training",
            description:
              "Professional carpentry training and woodworking courses in Johannesburg. Certified programs with hands-on training.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              email: "granitecarpentry5@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: ["Johannesburg", "Sandton", "Randburg", "Pretoria", "Centurion"],
            serviceType: "Carpentry Training & Education",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              priceRange: "R2500-R15000",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Certified Training Programs
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Carpentry Training
                  <span className="block text-orange-600">Johannesburg 2025</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Master the art of carpentry with our professional training programs. From basic woodworking to
                  advanced cabinet making, develop skills that last a lifetime.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 067 601 4490
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">150+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">5.0</div>
                  <div className="text-sm text-gray-600">Star Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/quality_woodworking_education_in_south_africa-1.jpg"
                  alt="Professional carpentry training and woodworking education in Johannesburg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certified Programs</div>
                    <div className="text-sm text-gray-600">Industry Recognition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive carpentry training programs designed to develop practical skills and industry knowledge for
              successful careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Basic Carpentry Course",
                duration: "6 Weeks",
                description: "Foundation course covering essential carpentry skills, tool usage, and safety practices.",
                features: ["Tool identification", "Safety practices", "Basic joints", "Measuring techniques"],
                price: "R2,500",
                image: "/quality_woodworking_education_in_south_africa-1.jpg",
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Cabinet Making Course",
                duration: "12 Weeks",
                description:
                  "Advanced course focusing on cabinet construction, joinery techniques, and finishing methods.",
                features: ["Cabinet construction", "Advanced joinery", "Finishing techniques", "Hardware installation"],
                price: "R6,500",
                image: "/quality_woodworking_education_in_south_africa-1.jpg",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Furniture Construction",
                duration: "16 Weeks",
                description:
                  "Comprehensive furniture making course covering design, construction, and upholstery basics.",
                features: ["Furniture design", "Construction methods", "Upholstery basics", "Project completion"],
                price: "R8,500",
                image: "/quality_woodworking_education_in_south_africa-1.jpg",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Professional Certification",
                duration: "24 Weeks",
                description:
                  "Complete certification program covering all aspects of professional carpentry and business skills.",
                features: [
                  "Complete curriculum",
                  "Business skills",
                  "Industry certification",
                  "Job placement assistance",
                ],
                price: "R15,000",
                image: "/quality_woodworking_education_in_south_africa-1.jpg",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Weekend Workshop",
                duration: "2 Days",
                description: "Intensive weekend workshop for hobbyists and DIY enthusiasts to learn basic skills.",
                features: ["Basic skills", "Tool usage", "Simple projects", "Take-home items"],
                price: "R850",
                image: "/quality_woodworking_education_in_south_africa-1.jpg",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Advanced Techniques",
                duration: "8 Weeks",
                description: "Specialized course for experienced carpenters looking to master advanced techniques.",
                features: ["Advanced joinery", "Complex projects", "Specialized tools", "Master techniques"],
                price: "R4,500",
                image: "/quality_woodworking_education_in_south_africa-1.jpg",
              },
            ].map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      {course.icon}
                    </div>
                    <Badge variant="outline" className="border-orange-600 text-orange-600">
                      {course.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                  <div className="text-2xl font-bold text-orange-600 mt-2">{course.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Training Programs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training approach combines theoretical knowledge with hands-on practice for optimal
              learning outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12" />,
                title: "Expert Instructors",
                description:
                  "Learn from experienced professionals with years of industry experience and teaching expertise.",
              },
              {
                icon: <Hammer className="w-12 h-12" />,
                title: "Hands-on Training",
                description: "Practical workshops with real projects to develop skills through actual carpentry work.",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Industry Certification",
                description:
                  "Receive recognized certifications that enhance your career prospects and professional credibility.",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Small Class Sizes",
                description:
                  "Personalized attention with small class sizes ensuring quality learning and individual support.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Facilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">State-of-the-Art Training Facilities</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our modern workshop facilities are equipped with professional-grade tools and equipment, providing
                  students with real-world training environments.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Professional Workshop",
                    description:
                      "Fully equipped workshop with industrial-grade tools and machinery for comprehensive hands-on training.",
                  },
                  {
                    title: "Safety Equipment",
                    description:
                      "Complete safety equipment and protocols ensuring a safe learning environment for all students.",
                  },
                  {
                    title: "Material Library",
                    description:
                      "Extensive selection of wood types and materials for students to work with during training.",
                  },
                  {
                    title: "Project Gallery",
                    description:
                      "Showcase area displaying student work and professional examples for inspiration and learning.",
                  },
                ].map((facility, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700">Schedule Visit</Button>
                <Button
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  View Gallery
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/quality_woodworking_education_in_south_africa-1.jpg"
                  alt="Professional carpentry training workshop facilities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">150+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates have gone on to successful careers in carpentry, furniture making, and construction
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Thabo Mthembu",
                course: "Professional Certification",
                success: "Started own carpentry business",
                quote:
                  "The training gave me the confidence and skills to start my own successful carpentry business in Soweto.",
                image: "/placeholder-user.jpg",
              },
              {
                name: "Sarah Johnson",
                course: "Cabinet Making Course",
                success: "Employed at premium furniture company",
                quote:
                  "The hands-on training prepared me perfectly for my role at a leading furniture manufacturing company.",
                image: "/placeholder-user.jpg",
              },
              {
                name: "Michael van der Merwe",
                course: "Furniture Construction",
                success: "Custom furniture designer",
                quote: "I now create bespoke furniture pieces for high-end clients throughout Johannesburg.",
                image: "/placeholder-user.jpg",
              },
            ].map((story, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{story.name}</CardTitle>
                  <Badge variant="outline" className="border-orange-600 text-orange-600">
                    {story.course}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-lg font-semibold text-orange-600">{story.success}</div>
                  <blockquote className="text-gray-600 italic">"{story.quote}"</blockquote>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Enrollment Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your carpentry journey? Here's everything you need to know about enrolling in our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">Course Schedule & Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Class Times:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-600 mr-2" />
                      Weekdays: 8:00 AM - 4:00 PM
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-600 mr-2" />
                      Saturdays: 8:00 AM - 2:00 PM
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-600 mr-2" />
                      Evening Classes: 6:00 PM - 9:00 PM
                    </li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Minimum age: 16 years
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Basic English literacy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Physical fitness for manual work
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Safety equipment provided
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">Payment Options & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Payment Plans:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Full payment discount: 10% off
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Monthly installments available
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      SETA funding assistance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Company training packages
                    </li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Student Support:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Job placement assistance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Career counseling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Alumni network access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      Ongoing mentorship
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Start Your Carpentry Career Today</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join our professional carpentry training programs and develop the skills for a rewarding career in
            woodworking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call 067 601 4490
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Enrollment
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <GraduationCap className="w-8 h-8 text-orange-200 mx-auto mb-3" />
              <div className="text-white font-semibold">Expert Training</div>
              <div className="text-orange-100 text-sm">Professional instructors</div>
            </div>
            <div>
              <Award className="w-8 h-8 text-orange-200 mx-auto mb-3" />
              <div className="text-white font-semibold">Industry Certification</div>
              <div className="text-orange-100 text-sm">Recognized qualifications</div>
            </div>
            <div>
              <Users className="w-8 h-8 text-orange-200 mx-auto mb-3" />
              <div className="text-white font-semibold">Job Placement</div>
              <div className="text-orange-100 text-sm">95% success rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
