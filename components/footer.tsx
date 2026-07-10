import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Star, Award, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Bathroom Renovations", href: "/bathroom-renovations" },
    { name: "Built-in Cupboards", href: "/built-in-cupboards" },
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Decking & Flooring", href: "/decking-flooring" },
    { name: "Door Installation", href: "/door-installation" },
  ]

  const collections = [
    { name: "Bespoke Furniture", href: "/custom-furniture" },
    { name: "Home Office & Study Fit-Outs", href: "/home-office-fit-outs" },
    { name: "Pergolas & Outdoor Timber", href: "/outdoor-timber-structures" },
  ]

  const specialistPages = [
    { name: "Carpenter Sandhurst", href: "/carpenter-sandhurst" },
    { name: "Carpenter Near Me JHB", href: "/carpenter-near-me-johannesburg" },
    { name: "Drywall Sandton", href: "/drywall-sandton" },
    { name: "Drywalling Contractors JHB", href: "/drywalling-contractors-johannesburg" },
  ]

  const areas = [
    { name: "Johannesburg", href: "/areas/johannesburg-south" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
    { name: "Benoni", href: "/areas/benoni" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <footer className="bg-charcoal text-cream">
      {/* Trust Indicators */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">★★★★★</div>
                <div className="text-sm text-slate-300">5-Star Rated</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">1000+</div>
                <div className="text-sm text-slate-300">Projects Completed</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">24</div>
                <div className="text-sm text-slate-300">Month Warranty</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">15+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded bg-charcoal flex items-center justify-center ring-1 ring-amber-600/50">
                  <span className="font-serif font-bold text-sm">
                    <span className="text-amber-500">T</span>
                    <span className="text-gold">S</span>
                  </span>
                </div>
                <div>
                  <div className="font-serif font-bold text-lg text-amber-400">The Timber Studio</div>
                  <div className="text-sm text-slate-400 tracking-wide">Design · Craft · Build</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Johannesburg&apos;s premier bespoke joinery and carpentry studio with over 1000+ completed projects.
                Custom kitchens, built-in cupboards, solid timber doors, decking, and full renovations &mdash; every
                piece designed, crafted, and installed by our own team and backed by a 24-month workmanship warranty.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <a href="tel:+27633977498" className="hover:text-amber-400 transition-colors">
                    063 397 7498
                  </a>
                  <div className="text-xs text-slate-400">Mon–Sat Studio Line</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <a href="mailto:info@timberstudio.co.za" className="hover:text-amber-400 transition-colors">
                    info@timberstudio.co.za
                  </a>
                  <div className="text-xs text-slate-400">Free Quotes Available</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <span>Johannesburg, Gauteng</span>
                  <div className="text-xs text-slate-400">Serving Greater Johannesburg</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <span>Mon-Sat: 7AM-5PM</span>
                  <div className="text-xs text-slate-400">Sunday: Emergency Only</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/timberstudio"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/timberstudio"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/timberstudio"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Collections & Specialist Pages */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Studio Collections</h4>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold text-amber-400 mb-4 mt-8">Specialist Pages</h4>
            <ul className="space-y-3">
              {specialistPages.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <h5 className="font-semibold text-amber-400 mb-2">Free Service Areas</h5>
              <p className="text-sm text-slate-300">
                We provide free quotes and design consultations throughout Johannesburg, Sandton, Randburg, Pretoria,
                Centurion, Midrand, Krugersdorp, and Benoni.
              </p>
            </div>
          </div>

          {/* Newsletter & Company */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Stay Updated</h4>
            <p className="text-slate-300 mb-4">
              Get expert carpentry tips, joinery inspiration, project ideas, and special offers delivered to your inbox.
            </p>

            <div className="space-y-3 mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Subscribe to Newsletter</Button>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-amber-400">Company</h5>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p>© {currentYear} The Timber Studio (Pty) Ltd. All rights reserved.</p>
            <p className="mt-1">
              Bespoke carpentry & custom joinery in Johannesburg | Licensed &amp; Insured | 24-Month Workmanship
              Warranty
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <div className="text-slate-400">
              <span className="text-amber-400">★★★★★</span> 5.0 Rating
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-amber-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="font-semibold">Free Design Consultations &amp; Quotes Across Greater Johannesburg</span>
            <span className="mx-2">|</span>
            <a href="tel:+27633977498" className="hover:underline font-semibold">
              Call 063 397 7498 Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
