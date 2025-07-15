import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded"></div>
              <span className="font-bold text-lg sm:text-xl">Granite & Carpentry</span>
            </div>
            <p className="text-slate-300 mb-4 text-sm sm:text-base">
              Professional carpentry and granite installation services across Gauteng. Licensed, insured, and trusted by
              homeowners for quality craftsmanship and exceptional service.
            </p>
            <div className="flex items-center text-amber-400 mb-4">
              <span className="text-xl sm:text-2xl mr-2">⭐⭐⭐⭐⭐</span>
              <span className="text-xs sm:text-sm">5-Star Professional Rating</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://g.co/kgs/epZT5BY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors text-sm"
                aria-label="View our Google Reviews"
              >
                Google Reviews
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Professional Services</h3>
            <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
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
                  Granite & Quartz
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
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Service Areas</h3>
            <ul className="space-y-1 sm:space-y-2 text-slate-300 text-sm sm:text-base">
              <li>Johannesburg South</li>
              <li>Sandton & Rosebank</li>
              <li>Randburg & Northcliff</li>
              <li>Kempton Park & Edenvale</li>
              <li>Roodepoort & Krugersdorp</li>
              <li>Midrand & Fourways</li>
              <li>Boksburg & Benoni</li>
              <li>Germiston & Alberton</li>
              <li>Centurion & Pretoria</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Information</h3>
            <div className="space-y-2 sm:space-y-3 text-slate-300 text-sm sm:text-base">
              <div className="flex items-center">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-amber-400 flex-shrink-0" />
                <a href="tel:+27676014490" className="hover:text-amber-400 transition-colors">
                  067 601 4490
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@granitecarpentry.co.za"
                  className="hover:text-amber-400 transition-colors break-all"
                >
                  info@granitecarpentry.co.za
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-amber-400 mt-1 flex-shrink-0" />
                <span>Serving Johannesburg & All Gauteng Areas</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <div>Monday-Friday: 8AM-5PM</div>
                  <div>Saturday: 8AM-1PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-slate-400 text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Granite & Carpentry Johannesburg. All rights reserved. Licensed
            Professional Contractors.
          </p>
        </div>
      </div>
    </footer>
  )
}
