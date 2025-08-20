import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Star, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Kitchen Renovations", href: "/services/kitchen-renovations" },
    { name: "Built-in Cupboards", href: "/services/built-in-cupboards" },
    { name: "Granite & Quartz", href: "/services/quartz-granite" },
    { name: "Decking & Flooring", href: "/services/decking-flooring" },
    { name: "Drywall & Ceilings", href: "/services/drywall-ceilings" },
    { name: "Carpentry Training", href: "/services/carpentry-training" },
  ]

  const areas = [
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Alberton", href: "/areas/alberton" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-600 text-white font-bold text-lg">
                G&C
              </div>
              <span className="font-bold text-xl">Granite & Carpentry</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Johannesburg's #1 rated carpenter and granite installation specialists. Professional kitchen renovations,
              built-in cupboards, and stone installations with 5-star service since 2020.
            </p>
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-slate-300 ml-2">5.0 • 47+ Projects</span>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/granitecarpentry"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/granitecarpentry"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/granite-carpentry"
                className="text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Areas Served</h3>
            <ul className="space-y-2">
              {areas.slice(0, 8).map((area) => (
                <li key={area.name}>
                  <Link href={area.href} className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/areas" className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium">
              View All Areas →
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">Call or WhatsApp</p>
                  <Link
                    href="tel:+27676014490"
                    className="text-white hover:text-amber-400 transition-colors font-medium"
                  >
                    067 601 4490
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">Email Us</p>
                  <Link
                    href="mailto:info@granitecarpentry.co.za"
                    className="text-white hover:text-amber-400 transition-colors font-medium"
                  >
                    info@granitecarpentry.co.za
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">Service Area</p>
                  <p className="text-white font-medium">Johannesburg & Gauteng</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">Business Hours</p>
                  <p className="text-white font-medium">Mon-Fri: 7AM-5PM</p>
                  <p className="text-white font-medium">Sat: 8AM-2PM</p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Company Links */}
        <div className="mb-8">
          <h4 className="font-semibold mb-4">Company</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {company.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">© {currentYear} Granite Carpentry. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>24-Month Warranty</span>
            <span>•</span>
            <span>Free Quotes</span>
            <span>•</span>
            <span>5-Star Service</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-amber-400">47+</div>
              <div className="text-slate-300 text-sm">Completed Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-amber-400">5.0★</div>
              <div className="text-slate-300 text-sm">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-amber-400">24</div>
              <div className="text-slate-300 text-sm">Month Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
