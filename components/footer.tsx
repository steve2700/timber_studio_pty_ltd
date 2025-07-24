import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded"></div>
              <span className="font-bold text-xl sm:text-2xl">Granite & Carpentry</span>
            </div>
            <p className="text-slate-300 mb-6 text-base sm:text-lg leading-relaxed">
              Professional carpentry and granite installation services across Gauteng. Licensed, insured, and trusted by
              homeowners for quality craftsmanship and exceptional service.
            </p>
            <div className="flex items-center text-amber-400 mb-6">
              <span className="text-2xl sm:text-3xl mr-3">⭐⭐⭐⭐⭐</span>
              <span className="text-sm sm:text-base font-medium">5-Star Professional Rating</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors p-2 hover:bg-slate-700 rounded-lg"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors p-2 hover:bg-slate-700 rounded-lg"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://g.co/kgs/epZT5BY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium px-3 py-2 hover:bg-slate-700 rounded-lg"
                aria-label="View our Google Reviews"
              >
                Google Reviews
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-amber-400">Professional Services</h3>
            <ul className="space-y-3 sm:space-y-4 text-slate-300 text-base sm:text-lg">
              <li>
                <Link
                  href="/services/kitchen-renovations"
                  className="hover:text-amber-400 transition-colors block py-1"
                >
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link href="/services/built-in-cupboards" className="hover:text-amber-400 transition-colors block py-1">
                  Built-in Cupboards
                </Link>
              </li>
              <li>
                <Link href="/services/quartz-granite" className="hover:text-amber-400 transition-colors block py-1">
                  Granite & Quartz
                </Link>
              </li>
              <li>
                <Link href="/services/carpentry-training" className="hover:text-amber-400 transition-colors block py-1">
                  Carpentry Training
                </Link>
              </li>
              <li>
                <Link href="/services/decking-flooring" className="hover:text-amber-400 transition-colors block py-1">
                  Decking & Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/drywall-ceilings" className="hover:text-amber-400 transition-colors block py-1">
                  Drywall & Ceilings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-amber-400">Service Areas</h3>
            <ul className="space-y-2 sm:space-y-3 text-slate-300 text-base sm:text-lg">
              <li className="py-1">Johannesburg South</li>
              <li className="py-1">Sandton & Rosebank</li>
              <li className="py-1">Randburg & Northcliff</li>
              <li className="py-1">Kempton Park & Edenvale</li>
              <li className="py-1">Roodepoort & Krugersdorp</li>
              <li className="py-1">Midrand & Fourways</li>
              <li className="py-1">Boksburg & Benoni</li>
              <li className="py-1">Germiston & Alberton</li>
              <li className="py-1">Centurion & Pretoria</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-amber-400">Contact Information</h3>
            <div className="space-y-4 sm:space-y-5 text-slate-300 text-base sm:text-lg">
              <div className="flex items-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+27676014490" className="hover:text-amber-400 transition-colors font-medium">
                  067 601 4490
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@granitecarpentry.co.za"
                  className="hover:text-amber-400 transition-colors break-all font-medium"
                >
                  info@granitecarpentry.co.za
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-amber-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Serving Johannesburg & All Gauteng Areas</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-amber-400 mt-1 flex-shrink-0" />
                <div className="leading-relaxed">
                  <div className="mb-1">Monday-Friday: 8AM-5PM</div>
                  <div className="mb-1">Saturday: 8AM-1PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-slate-400 text-sm sm:text-base">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Granite & Carpentry Johannesburg. All rights reserved. Licensed
            Professional Contractors.
          </p>
        </div>
      </div>
    </footer>
  )
}
