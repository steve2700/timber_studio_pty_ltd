import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded"></div>
              <span className="font-bold text-xl">Granite & Joinery Experts</span>
            </div>
            <p className="text-slate-300 mb-4">
              Professional carpentry and granite installation services across Gauteng. Trusted by homeowners for quality
              craftsmanship.
            </p>
            <div className="flex items-center text-amber-400 mb-2">
              <span className="text-2xl mr-2">⭐⭐⭐⭐⭐</span>
              <span className="text-sm">5-Star Rated</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/services/kitchen-renovations" className="hover:text-amber-400 transition-colors">
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link href="/services/built-in-cupboards" className="hover:text-amber-400 transition-colors">
                  Built-in Cupboards
                </Link>
              </li>
              <li>
                <Link href="/services/quartz-granite" className="hover:text-amber-400 transition-colors">
                  Quartz & Granite
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry-training" className="hover:text-amber-400 transition-colors">
                  Carpentry Training
                </Link>
              </li>
              <li>
                <Link href="/services/decking-flooring" className="hover:text-amber-400 transition-colors">
                  Decking & Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/drywall-ceilings" className="hover:text-amber-400 transition-colors">
                  Drywall & Ceilings
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-amber-400 transition-colors">
                  View Our Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Johannesburg South</li>
              <li>Randburg & Northcliff</li>
              <li>Kempton Park & Edenvale</li>
              <li>Roodepoort & Krugersdorp</li>
              <li>Sandton & Midrand</li>
              <li>Fourways & Centurion</li>
              <li>Boksburg & Benoni</li>
              <li>Germiston & Alberton</li>
              <li>Bedfordview & Rosebank</li>
              <li>Pretoria & Soweto</li>
              <li>All Gauteng Areas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-amber-400" />
                <a href="tel:+27676014490" className="hover:text-amber-400">
                  067 601 4490
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-amber-400" />
                <a href="mailto:info@granitejoinery.co.za" className="hover:text-amber-400">
                  info@granitejoinery.co.za
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-amber-400 mt-1" />
                <span>Serving Johannesburg & Gauteng</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-3 text-amber-400 mt-1" />
                <div>
                  <div>Mon-Fri: 8AM-5PM</div>
                  <div>Sat: 8AM-1PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Granite & Joinery Experts Johannesburg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
