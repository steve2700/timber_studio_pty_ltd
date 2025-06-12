"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded"></div>
            <span className="font-bold text-xl text-slate-800">Granite & Joinery Experts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-amber-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-slate-700 hover:text-amber-600 transition-colors">Services</button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/services/kitchen-renovations"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Kitchen Renovations & Joinery
                  </Link>
                  <Link
                    href="/services/built-in-cupboards"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Built-in Cupboards & Wardrobes
                  </Link>
                  <Link
                    href="/services/quartz-granite"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Quartz & Granite Installations
                  </Link>
                  <Link
                    href="/services/decking-flooring"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Decking & Flooring
                  </Link>
                  <Link
                    href="/services/drywall-ceilings"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Drywall & Ceilings
                  </Link>
                  <Link
                    href="/services/carpentry-training"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                  >
                    Carpentry Training
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/portfolio" className="text-slate-700 hover:text-amber-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+27676014490" className="flex items-center text-slate-700 hover:text-amber-600">
              <Phone className="w-4 h-4 mr-2" />
              067 601 4490
            </a>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-amber-600">
                Home
              </Link>
              <Link href="/services/kitchen-renovations" className="text-slate-700 hover:text-amber-600 pl-4">
                Kitchen Renovations
              </Link>
              <Link href="/services/built-in-cupboards" className="text-slate-700 hover:text-amber-600 pl-4">
                Built-in Cupboards
              </Link>
              <Link href="/services/quartz-granite" className="text-slate-700 hover:text-amber-600 pl-4">
                Quartz & Granite
              </Link>
              <Link href="/services/decking-flooring" className="text-slate-700 hover:text-amber-600 pl-4">
                Decking & Flooring
              </Link>
              <Link href="/services/drywall-ceilings" className="text-slate-700 hover:text-amber-600 pl-4">
                Drywall & Ceilings
              </Link>
              <Link href="/services/carpentry-training" className="text-slate-700 hover:text-amber-600 pl-4">
                Carpentry Training
              </Link>
              <Link href="/portfolio" className="text-slate-700 hover:text-amber-600">
                Portfolio
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-amber-600">
                About
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-amber-600">
                Contact
              </Link>
              <div className="pt-4 border-t">
                <a href="tel:+27676014490" className="flex items-center text-slate-700 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  067 601 4490
                </a>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
