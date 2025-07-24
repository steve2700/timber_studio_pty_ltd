"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Star, MapPin } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Kitchen Renovations", href: "/services/kitchen-renovations" },
        { name: "Built-in Cupboards", href: "/services/built-in-cupboards" },
        { name: "Granite & Quartz", href: "/services/quartz-granite" },
        { name: "Decking & Flooring", href: "/services/decking-flooring" },
        { name: "Drywall & Ceilings", href: "/services/drywall-ceilings" },
        { name: "Carpentry Training", href: "/services/carpentry-training" },
      ],
    },
    {
      name: "Areas",
      href: "/areas",
      submenu: [
        { name: "Johannesburg South", href: "/areas/johannesburg-south" },
        { name: "Sandton", href: "/areas/sandton" },
        { name: "Randburg", href: "/areas/randburg" },
        { name: "Kempton Park", href: "/areas/kempton-park" },
        { name: "Midrand", href: "/areas/midrand" },
        { name: "Fourways", href: "/areas/fourways" },
        { name: "Boksburg", href: "/areas/boksburg" },
        { name: "Centurion", href: "/areas/centurion" },
        { name: "Pretoria", href: "/areas/pretoria" },
        { name: "Alberton", href: "/areas/alberton" },
        { name: "Edenvale", href: "/areas/edenvale" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-600 text-white font-bold">
              G&C
            </div>
            <span className="hidden font-bold sm:inline-block">Granite & Carpentry</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="transition-colors hover:text-amber-600 text-slate-600 hover:text-slate-900"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Phone className="h-4 w-4" />
              <span>067 601 4490</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-amber-400 fill-current" />
              <span className="text-sm font-medium">5.0</span>
            </div>
            <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-600 text-white font-bold">
                    G&C
                  </div>
                  <span className="font-bold">Granite & Carpentry</span>
                </Link>

                <div className="flex flex-col space-y-3 pt-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-lg font-medium text-slate-900 hover:text-amber-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block text-sm text-slate-600 hover:text-amber-600"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4" />
                    <span>067 601 4490</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4" />
                    <span>Johannesburg & Gauteng</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm font-medium">5.0 Rating • 47+ Projects</span>
                  </div>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
