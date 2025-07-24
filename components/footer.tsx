import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Star, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-amber-600 text-white font-bold">
                G&C
              </div>
              <span className="font-bold text-lg">Granite & Carpentry</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Johannesburg's leading professional carpentry and granite installation specialists. Licensed, insured, and
              committed to excellence with 5-star rated service.
            </p>
            <div className="flex items-center space-x-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-slate-300 ml-2">5.0 • 47+ Projects</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
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

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Service Areas</h3>
            <ul className="space-y-2 text-sm">
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
                <Link href="/areas/kempton-park" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Kempton Park
                </Link>
              </li>
              <li>
                <Link href="/areas/midrand" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Midrand
                </Link>
              </li>
              <li>
                <Link href="/areas/fourways" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Fourways
                </Link>
              </li>
              <li className="text-slate-400 text-xs">+ 6 more areas</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:+27676014490" className="text-slate-300 hover:text-amber-400 transition-colors">
                  067 601 4490
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a
                  href="mailto:info@granitecarpentry.co.za"
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  info@granitecarpentry.co.za
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5" />
                <span className="text-slate-300">
                  Johannesburg South
                  <br />
                  Gauteng, South Africa
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300">
                  Mon-Fri: 8AM-5PM
                  <br />
                  Sat: 8AM-1PM
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-2">Get Project Updates</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
            <p>&copy; {currentYear} Granite & Carpentry Johannesburg. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-amber-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-400">Follow us:</span>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/granitecarpentry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-700">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-500">
            <span>Licensed Carpentry Contractor</span>
            <span>•</span>
            <span>Fully Insured</span>
            <span>•</span>
            <span>VAT Registered</span>
            <span>•</span>
            <span>NHBRC Registered</span>
            <span>•</span>
            <span>5-Year Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
