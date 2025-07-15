"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded"></div>
            <span className="font-bold text-sm sm:text-lg md:text-xl text-slate-800 leading-tight">
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
            <Link
              href="/portfolio"
              className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              Portfolio
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base">
              About
            </Link>
            <Link
              href="/areas/johannesburg-south"
              className="text-slate-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              Johannesburg South
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

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 -mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="py-4 space-y-1">
              <Link
                href="/"
                className="block py-3 px-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-1">
                <div className="py-2 px-3 text-slate-500 text-sm font-medium">Services</div>
                <Link
                  href="/services/kitchen-renovations"
                  className="block py-2 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kitchen Renovations
                </Link>
                <Link
                  href="/services/built-in-cupboards"
                  className="block py-2 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Built-in Cupboards
                </Link>
                <Link
                  href="/services/quartz-granite"
                  className="block py-2 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quartz & Granite
                </Link>
                <Link
                  href="/services/decking-flooring"
                  className="block py-2 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Decking & Flooring
                </Link>
                <Link
                  href="/services/drywall-ceilings"
                  className="block py-2 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Drywall & Ceilings
                </Link>
                <Link
                  href="/services/carpentry-training"
                  className="block py-2 px-6 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Carpentry Training
                </Link>
              </div>
              <Link
                href="/portfolio"
                className="block py-3 px-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="block py-3 px-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/areas/johannesburg-south"
                className="block py-3 px-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Johannesburg South
              </Link>
              <Link
                href="/faq"
                className="block py-3 px-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block py-3 px-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t mt-4 space-y-3">
                <a
                  href="tel:+27676014490"
                  className="flex items-center py-2 px-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded transition-colors"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  067 601 4490
                </a>
                <div className="px-3">
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 py-3">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
