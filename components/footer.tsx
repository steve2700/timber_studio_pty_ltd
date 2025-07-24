"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { useTrackInteraction } from "./analytics-provider"

export function Footer() {
  const { trackClick, trackPhoneCall } = useTrackInteraction()

  const handlePhoneClick = () => {
    trackPhoneCall("footer")
  }

  const handleSocialClick = (platform: string) => {
    trackClick(`social_${platform}`, "footer")
  }

  const handleLinkClick = (link: string) => {
    trackClick(`footer_${link}`, "footer")
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">GC</span>
              </div>
              <span className="font-bold text-xl">Granite & Carpentry</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional carpentry and granite installation specialists serving Johannesburg and Gauteng. Licensed
              contractors with 5-star customer rating and 47+ completed projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick("facebook")}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick("instagram")}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/kitchen-renovations"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("kitchen_renovations")}
                >
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link
                  href="/services/built-in-cupboards"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("built_in_cupboards")}
                >
                  Built-in Cupboards
                </Link>
              </li>
              <li>
                <Link
                  href="/services/quartz-granite"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("quartz_granite")}
                >
                  Quartz & Granite
                </Link>
              </li>
              <li>
                <Link
                  href="/services/decking-flooring"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("decking_flooring")}
                >
                  Decking & Flooring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/drywall-ceilings"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("drywall_ceilings")}
                >
                  Drywall & Ceilings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/carpentry-training"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("carpentry_training")}
                >
                  Carpentry Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Areas Served</h3>
            <ul className="space-y-2 text-sm grid grid-cols-1 gap-1">
              <li>
                <Link
                  href="/areas/sandton"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("area_sandton")}
                >
                  Sandton
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/randburg"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("area_randburg")}
                >
                  Randburg
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/kempton-park"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("area_kempton_park")}
                >
                  Kempton Park
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/midrand"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("area_midrand")}
                >
                  Midrand
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/fourways"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("area_fourways")}
                >
                  Fourways
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/boksburg"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("area_boksburg")}
                >
                  Boksburg
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+27676014490"
                    onClick={handlePhoneClick}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +27 67 601 4490
                  </a>
                  <p className="text-gray-400 text-xs mt-1">Mon-Fri: 8AM-5PM, Sat: 8AM-1PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@granitecarpentry.co.za"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => handleLinkClick("email")}
                >
                  info@granitecarpentry.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Johannesburg, Gauteng, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 Granite & Carpentry Johannesburg. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => handleLinkClick("privacy")}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => handleLinkClick("terms")}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
