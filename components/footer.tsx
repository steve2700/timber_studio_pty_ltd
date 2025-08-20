import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Shield,
  Award,
  Users,
  CheckCircle,
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceAreas = [
    "Johannesburg South",
    "Sandton",
    "Randburg",
    "Roodepoort",
    "Midrand",
    "Centurion",
    "Pretoria",
    "Kempton Park",
    "Edenvale",
    "Boksburg",
    "Alberton",
    "Fourways",
  ]

  const services = [
    "Kitchen Renovations",
    "Built-in Cupboards",
    "Granite Installation",
    "Quartz Countertops",
    "Decking & Flooring",
    "Drywall & Ceilings",
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Indicators Bar */}
      <div className="bg-amber-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span className="font-semibold">24-Month Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-semibold">1000+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-semibold">5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">Granite Carpentry</h3>
              <p className="text-gray-300 mb-4">
                Johannesburg's #1 rated carpenter and granite installation specialists. Professional craftsmanship with
                5-star service since 2020.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">5.0 (47+ Reviews)</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <a href="tel:+27676014490" className="hover:text-amber-400 transition-colors font-semibold">
                    067 601 4490
                  </a>
                  <p className="text-xs text-gray-400">24/7 Emergency Service</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:text-amber-400 transition-colors">
                    info@granitecarpentry.co.za
                  </a>
                  <p className="text-xs text-gray-400">Free Quotes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Greater Johannesburg Area</p>
                  <p className="text-xs text-gray-400">Gauteng, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 7:00 AM - 5:00 PM</p>
                  <p className="text-gray-300">Saturday: 8:00 AM - 2:00 PM</p>
                  <p className="text-xs text-gray-400">Sunday: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, "-").replace("&", "")}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <CheckCircle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 bg-transparent"
                >
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Service Areas</h4>
            <div className="grid grid-cols-1 gap-2">
              {serviceAreas.map((area, index) => (
                <Link
                  key={index}
                  href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <MapPin className="h-3 w-3 text-amber-400 flex-shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform">{area}</span>
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Link href="/areas">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 bg-transparent"
                >
                  View All Areas
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links & CTA */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Quick Links</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Blog & Tips
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* CTA Card */}
            <Card className="bg-amber-600 border-amber-500">
              <CardContent className="p-4 text-center">
                <h5 className="font-bold text-gray-900 mb-2">Get FREE Quote Today!</h5>
                <p className="text-sm text-gray-800 mb-3">Professional carpentry services with 24-month warranty</p>
                <Link href="/contact">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Get Quote Now</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold text-amber-400 mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/granitecarpentry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/granitecarpentry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/granite-carpentry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Granite Carpentry. All rights reserved.</p>
            <Badge variant="outline" className="border-amber-400 text-amber-400">
              Licensed & Insured
            </Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-400">|</span>
            <p className="text-gray-400">
              Website by <span className="text-amber-400">Granite Carpentry</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
