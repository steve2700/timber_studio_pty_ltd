import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SmartRecommendations } from "@/components/smart-recommendations"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Hammer,
  Home,
  Wrench,
  Award,
  Users,
  ArrowRight,
  Shield,
  Zap,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
                  <Star className="w-4 h-4 mr-1" />
                  5-Star Rated • 47+ Projects Completed
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional{" "}
                  <span className="text-amber-600 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Carpentry
                  </span>{" "}
                  & Granite Specialists
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your home with expert kitchen renovations, built-in cupboards, and premium granite
                  installations across Johannesburg and Gauteng. Quality craftsmanship guaranteed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  <Link href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-amber-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">47+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5.0</div>
                  <div className="text-sm text-gray-600">Star Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">12+</div>
                  <div className="text-sm text-gray-600">Areas Served</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/granite-kitchen-island.webp"
                  alt="Professional kitchen renovation with granite countertops in Johannesburg"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-900">Latest Project: Luxury Kitchen Renovation</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Sandton • Custom granite island • Built-in storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Recommendations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SmartRecommendations />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Carpentry & Granite Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From kitchen renovations to custom built-ins, we deliver exceptional craftsmanship across Johannesburg and
              Gauteng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kitchen Renovations",
                description:
                  "Complete kitchen makeovers with custom cabinetry, granite countertops, and modern designs",
                icon: <Home className="w-8 h-8" />,
                image: "/modern-kitchen renovation.webp",
                link: "/services/kitchen-renovations",
                badge: "Most Popular",
              },
              {
                title: "Built-in Cupboards",
                description: "Custom storage solutions for bedrooms, studies, and living areas to maximize space",
                icon: <Hammer className="w-8 h-8" />,
                image: "/built-in-wardrobes-sliding (1) (1).webp",
                link: "/services/built-in-cupboards",
                badge: "Space Saving",
              },
              {
                title: "Granite & Quartz",
                description: "Premium stone countertops with professional templating, fabrication, and installation",
                icon: <Wrench className="w-8 h-8" />,
                image: "/granite-installation-sandton.jpg",
                link: "/services/quartz-granite",
                badge: "Premium",
              },
              {
                title: "Decking & Flooring",
                description: "Beautiful outdoor decking and indoor flooring solutions for any space",
                icon: <Home className="w-8 h-8" />,
                image: "/beautiful-decking.jpg",
                link: "/services/decking-flooring",
                badge: "Outdoor",
              },
              {
                title: "Drywall & Ceilings",
                description: "Professional drywall installation and ceiling solutions for modern interiors",
                icon: <Hammer className="w-8 h-8" />,
                image: "/drywall-contractor.jpg",
                link: "/services/drywall-ceilings",
                badge: "Interior",
              },
              {
                title: "Carpentry Training",
                description: "Professional carpentry courses with job placement guarantee and certification",
                icon: <Award className="w-8 h-8" />,
                image: "/quality_woodworking_education_in_south_africa-1.jpg",
                link: "/services/carpentry-training",
                badge: "Education",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} services in Johannesburg`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {service.badge}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-amber-600">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-amber-600 group-hover:text-white transition-colors bg-transparent"
                  >
                    <Link href={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Granite & Carpentry?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're Johannesburg's trusted carpentry and granite specialists with a proven track record of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Licensed & Insured",
                description: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind",
              },
              {
                icon: <Star className="w-8 h-8 text-amber-600" />,
                title: "5-Star Rated",
                description: "Consistently rated 5 stars by our customers across Johannesburg and Gauteng",
              },
              {
                icon: <Zap className="w-8 h-8 text-green-600" />,
                title: "Fast Response",
                description: "Free quotes within 24 hours and flexible scheduling to meet your timeline",
              },
              {
                icon: <Heart className="w-8 h-8 text-red-600" />,
                title: "Quality Guarantee",
                description: "We stand behind our work with comprehensive warranties on all projects",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Service Areas Across Gauteng</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional carpentry and granite services throughout Johannesburg and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Johannesburg South", link: "/areas/johannesburg-south", badge: "Home Base" },
              { name: "Sandton", link: "/areas/sandton", badge: "Premium" },
              { name: "Randburg", link: "/areas/randburg", badge: "Popular" },
              { name: "Kempton Park", link: "/areas/kempton-park", badge: null },
              { name: "Midrand", link: "/areas/midrand", badge: null },
              { name: "Fourways", link: "/areas/fourways", badge: "Luxury" },
              { name: "Boksburg", link: "/areas/boksburg", badge: null },
              { name: "Centurion", link: "/areas/centurion", badge: null },
              { name: "Pretoria", link: "/areas/pretoria", badge: null },
              { name: "Alberton", link: "/areas/alberton", badge: null },
              { name: "Edenvale", link: "/areas/edenvale", badge: null },
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{area.name}</h3>
                    {area.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {area.badge}
                      </Badge>
                    )}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={area.link}>
                      View Services
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Get your free, detailed quote today. Our expert team is ready to bring your vision to life with professional
            carpentry and granite installation services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
              <Link href="/contact">
                <Mail className="mr-2 w-5 h-5" />
                Get Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              <Link href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call: 067 601 4490
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-amber-200" />
              <div>
                <div className="font-semibold">Service Areas</div>
                <div className="text-amber-100">Johannesburg & Gauteng</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-amber-200" />
              <div>
                <div className="font-semibold">Business Hours</div>
                <div className="text-amber-100">Mon-Fri 8AM-5PM</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-amber-200" />
              <div>
                <div className="font-semibold">Response Time</div>
                <div className="text-amber-100">Within 24 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
