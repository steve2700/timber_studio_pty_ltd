"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded"></div>
            <span className="font-bold text-base sm:text-lg md:text-xl text-slate-800 leading-tight">
              Granite & Carpentry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base">
              Home
            </Link>
            <div className="relative group">
              <button className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/services/kitchen-renovations"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Kitchen Renovations & Joinery
                  </Link>
                  <Link
                    href="/services/built-in-cupboards"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Built-in Cupboards & Wardrobes
                  </Link>
                  <Link
                    href="/services/quartz-granite"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Quartz & Granite Installations
                  </Link>
                  <Link
                    href="/services/decking-flooring"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Decking & Flooring
                  </Link>
                  <Link
                    href="/services/drywall-ceilings"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Drywall & Ceilings
                  </Link>
                  <Link
                    href="/services/carpentry-training"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Carpentry Training
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base">
                Areas Served
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 grid grid-cols-1">
                  <Link
                    href="/areas/sandton"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Sandton
                  </Link>
                  <Link
                    href="/areas/randburg"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Randburg
                  </Link>
                  <Link
                    href="/areas/fourways"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Fourways
                  </Link>
                  <Link
                    href="/areas/midrand"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Midrand
                  </Link>
                  <Link
                    href="/areas/kempton-park"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Kempton Park
                  </Link>
                  <Link
                    href="/areas/boksburg"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Boksburg
                  </Link>
                  <Link
                    href="/areas/edenvale"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Edenvale
                  </Link>
                  <Link
                    href="/areas/alberton"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Alberton
                  </Link>
                  <Link
                    href="/areas/roodepoort"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Roodepoort
                  </Link>
                  <Link
                    href="/areas/centurion"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Centurion
                  </Link>
                  <Link
                    href="/areas/pretoria"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Pretoria
                  </Link>
                  <Link
                    href="/areas/johannesburg-south"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Johannesburg South
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              Portfolio
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base">
              About
            </Link>
            <Link href="/faq" className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base">
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a href="tel:+27676014490" className="flex items-center text-slate-700 hover:text-amber-600 text-sm">
              <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              <span className="hidden xl:inline">067 601 4490</span>
              <span className="xl:hidden">Call</span>
            </a>
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-sm px-3 py-2 xl:px-4 xl:py-2">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile CTA and Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="tel:+27676014490"
              className="flex items-center justify-center w-10 h-10 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              className="flex items-center justify-center w-10 h-10 text-slate-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white absolute left-0 right-0 top-full shadow-lg">
            <nav className="py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              <Link
                href="/"
                className="block py-3 px-4 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-1">
                <div className="py-2 px-4 text-slate-500 text-sm font-semibold uppercase tracking-wide">Services</div>
                <Link
                  href="/services/kitchen-renovations"
                  className="block py-3 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kitchen Renovations
                </Link>
                <Link
                  href="/services/built-in-cupboards"
                  className="block py-3 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Built-in Cupboards
                </Link>
                <Link
                  href="/services/quartz-granite"
                  className="block py-3 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quartz & Granite
                </Link>
                <Link
                  href="/services/decking-flooring"
                  className="block py-3 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Decking & Flooring
                </Link>
                <Link
                  href="/services/drywall-ceilings"
                  className="block py-3 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drywall & Ceilings
                </Link>
                <Link
                  href="/services/carpentry-training"
                  className="block py-3 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Carpentry Training
                </Link>
              </div>

              <div className="space-y-1">
                <div className="py-2 px-4 text-slate-500 text-sm font-semibold uppercase tracking-wide">
                  Areas Served
                </div>
                <div className="grid grid-cols-2 gap-1 px-2">
                  <Link
                    href="/areas/sandton"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sandton
                  </Link>
                  <Link
                    href="/areas/randburg"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Randburg
                  </Link>
                  <Link
                    href="/areas/fourways"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fourways
                  </Link>
                  <Link
                    href="/areas/midrand"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Midrand
                  </Link>
                  <Link
                    href="/areas/kempton-park"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kempton Park
                  </Link>
                  <Link
                    href="/areas/boksburg"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Boksburg
                  </Link>
                  <Link
                    href="/areas/edenvale"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Edenvale
                  </Link>
                  <Link
                    href="/areas/alberton"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Alberton
                  </Link>
                  <Link
                    href="/areas/roodepoort"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Roodepoort
                  </Link>
                  <Link
                    href="/areas/centurion"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Centurion
                  </Link>
                  <Link
                    href="/areas/pretoria"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pretoria
                  </Link>
                  <Link
                    href="/areas/johannesburg-south"
                    className="block py-2 px-3 text-sm text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Johannesburg South
                  </Link>
                </div>
              </div>

              <Link
                href="/portfolio"
                className="block py-3 px-4 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block py-3 px-4 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/faq"
                className="block py-3 px-4 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-4 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg mx-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 border-t mt-4 space-y-3 px-2">
                <div className="grid grid-cols-1 gap-3">
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 py-4 text-base font-medium">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Free Quote
                    </Link>
                  </Button>
                  <a
                    href="tel:+27676014490"
                    className="flex items-center justify-center py-4 px-4 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200 font-medium"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    067 601 4490
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
