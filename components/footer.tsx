import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">GC</span>
              </div>
              <div>
                <div className="font-bold text-lg">Granite Carpentry</div>
                <div className="text-sm text-gray-400">& Joinery Experts</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional carpentry and joinery services with over 15 years of experience. Serving Greater Johannesburg
              and Pretoria with quality craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/kitchen-renovations" className="text-gray-400 hover:text-white transition-colors">
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link href="/services/built-in-cupboards" className="text-gray-400 hover:text-white transition-colors">
                  Built-in Cupboards
                </Link>
              </li>
              <li>
                <Link href="/services/quartz-granite" className="text-gray-400 hover:text-white transition-colors">
                  Quartz & Granite Installation
                </Link>
              </li>
              <li>
                <Link href="/services/decking-flooring" className="text-gray-400 hover:text-white transition-colors">
                  Decking & Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/drywall-ceilings" className="text-gray-400 hover:text-white transition-colors">
                  Drywall & Ceilings
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry-training" className="text-gray-400 hover:text-white transition-colors">
                  Carpentry Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Areas Served</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/areas/johannesburg-south" className="text-gray-400 hover:text-white transition-colors">
                  Johannesburg South
                </Link>
              </li>
              <li>
                <Link href="/areas/sandton" className="text-gray-400 hover:text-white transition-colors">
                  Sandton
                </Link>
              </li>
              <li>
                <Link href="/areas/pretoria" className="text-gray-400 hover:text-white transition-colors">
                  Pretoria
                </Link>
              </li>
              <li>
                <Link href="/areas/centurion" className="text-gray-400 hover:text-white transition-colors">
                  Centurion
                </Link>
              </li>
              <li>
                <Link href="/areas/midrand" className="text-gray-400 hover:text-white transition-colors">
                  Midrand
                </Link>
              </li>
              <li>
                <Link href="/areas/kempton-park" className="text-gray-400 hover:text-white transition-colors">
                  Kempton Park
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>011 568 9012</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@granitecarpentry.co.za</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Greater Johannesburg & Pretoria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon-Fri: 7AM-5PM, Sat: 8AM-2PM</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Granite Carpentry & Joinery Experts. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
