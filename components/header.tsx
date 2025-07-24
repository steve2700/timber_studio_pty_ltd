"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { useTrackInteraction } from "./analytics-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAreasOpen, setIsAreasOpen] = useState(false)
  const { trackClick, trackPhoneCall } = useTrackInteraction()

  const handlePhoneClick = () => {
    trackPhoneCall("header_button")
  }

  const handleMenuClick = (item: string) => {
    trackClick(`menu_${item}`, "header")
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsAreasOpen(false)
  }

  const services = [
    { name: "Kitchen Renovations", href: "/services/kitchen-renovations" },
    { name: "Built-in Cupboards", href: "/services/built-in-cupboards" },
    { name: "Quartz & Granite", href: "/services/quartz-granite" },
    { name: "Decking & Flooring", href: "/services/decking-flooring" },
    { name: "Drywall & Ceilings", href: "/services/drywall-ceilings" },
    { name: "Carpentry Training", href: "/services/carpentry-training" },
  ]

  const areas = [
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Alberton", href: "/areas/alberton" },
    { name: "Edenvale", href: "/areas/edenvale" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => handleMenuClick("logo")}>
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">GC</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Granite & Carpentry</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => handleMenuClick("home")}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => handleMenuClick(`service_${service.name.toLowerCase().replace(/\s+/g, "_")}`)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
                Areas Served
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 grid grid-cols-2 gap-1">
                  {areas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => handleMenuClick(`area_${area.name.toLowerCase().replace(/\s+/g, "_")}`)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => handleMenuClick("portfolio")}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => handleMenuClick("about")}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => handleMenuClick("faq")}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => handleMenuClick("contact")}
            >
              Contact
            </Link>
          </nav>

          {/* Call Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+27676014490"
              onClick={handlePhoneClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors min-h-[40px]"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2"
                onClick={() => handleMenuClick("home")}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-amber-600 transition-colors py-2"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-gray-600 hover:text-amber-600 transition-colors py-1"
                        onClick={() => handleMenuClick(`service_${service.name.toLowerCase().replace(/\s+/g, "_")}`)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Areas */}
              <div>
                <button
                  onClick={() => setIsAreasOpen(!isAreasOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-amber-600 transition-colors py-2"
                >
                  Areas Served
                  <ChevronDown className={`h-4 w-4 transition-transform ${isAreasOpen ? "rotate-180" : ""}`} />
                </button>
                {isAreasOpen && (
                  <div className="pl-4 grid grid-cols-2 gap-2 mt-2">
                    {areas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block text-gray-600 hover:text-amber-600 transition-colors py-1 text-sm"
                        onClick={() => handleMenuClick(`area_${area.name.toLowerCase().replace(/\s+/g, "_")}`)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2"
                onClick={() => handleMenuClick("portfolio")}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2"
                onClick={() => handleMenuClick("about")}
              >
                About
              </Link>
              <Link
                href="/faq"
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2"
                onClick={() => handleMenuClick("faq")}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-amber-600 transition-colors py-2"
                onClick={() => handleMenuClick("contact")}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
