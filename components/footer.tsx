import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400">Granite Carpentry</h3>
            <p className="text-slate-300 leading-relaxed">
              Johannesburg's #1 rated carpenter and granite installation specialists. Professional craftsmanship with
              5-star service since 2020.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/granitecarpentry"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/granitecarpentry"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/granite-carpentry"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/kitchen-renovations"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/built-in-cupboards"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Built-in Cupboards
                </Link>
              </li>
              <li>
                <Link href="/services/quartz-granite" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Granite & Quartz
                </Link>
              </li>
              <li>
                <Link
                  href="/services/decking-flooring"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Decking & Flooring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/drywall-ceilings"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Drywall & Ceilings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/carpentry-training"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Carpentry Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/areas/johannesburg-south"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Johannesburg South
                </Link>
              </li>
              <li>
                <Link href="/areas/sandton" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Sandton
                </Link>
              </li>
              <li>
                <Link href="/areas/randburg" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Randburg
                </Link>
              </li>
              <li>
                <Link href="/areas/midrand" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Midrand
                </Link>
              </li>
              <li>
                <Link href="/areas/pretoria" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Pretoria
                </Link>
              </li>
              <li>
                <Link href="/areas/centurion" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Centurion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <Link href="tel:+27676014490" className="text-slate-300 hover:text-amber-400 transition-colors">
                  067 601 4490
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <Link
                  href="mailto:info@granitecarpentry.co.za"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  info@granitecarpentry.co.za
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Greater Johannesburg Area, Gauteng, South Africa</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-300">
                  <p>Mon-Fri: 07:00 - 17:00</p>
                  <p>Saturday: 08:00 - 14:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Granite Carpentry. All rights reserved. Licensed & Insured Carpentry Business.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
