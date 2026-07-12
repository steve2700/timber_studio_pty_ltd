import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Star, ShieldCheck, Hammer, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Bathroom Renovations", href: "/bathroom-renovations" },
    { name: "Built-in Cupboards", href: "/built-in-cupboards" },
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Decking & Flooring", href: "/decking-flooring" },
    { name: "Door Installation", href: "/door-installation" },
  ]

  const collections = [
    { name: "Bespoke Furniture", href: "/custom-furniture" },
    { name: "Home Office & Study Fit-Outs", href: "/home-office-fit-outs" },
    { name: "Pergolas & Outdoor Timber", href: "/outdoor-timber-structures" },
  ]

  const specialistPages = [
    { name: "Carpenter Sandhurst", href: "/carpenter-sandhurst" },
    { name: "Carpenter Near Me JHB", href: "/carpenter-near-me-johannesburg" },
    { name: "Drywall Sandton", href: "/drywall-sandton" },
    { name: "Drywalling Contractors JHB", href: "/drywalling-contractors-johannesburg" },
  ]

  // Note: "Johannesburg" now correctly points to /areas/johannesburg —
  // /areas/johannesburg-south is a separate page in the sitemap and was
  // being linked to by mistake here before.
  const areas = [
    { name: "Johannesburg", href: "/areas/johannesburg" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
    { name: "Benoni", href: "/areas/benoni" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  // Real, confirmed accounts.
  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61591863510143", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/timberstudioza_/", icon: Instagram },
    { name: "Pinterest", href: "https://za.pinterest.com/timberstudio/", icon: PinterestIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/timberstudio/", icon: Linkedin },
  ]

  return (
    <footer className="bg-charcoal text-cream">
      {/* CTA band — closes the loop instead of leaving the footer purely informational */}
      <div className="border-b border-cream/10">
        <div className="container mx-auto flex flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-xl font-semibold text-cream sm:text-2xl">
              Ready to start your next project?
            </p>
            <p className="mt-1 text-sm text-cream/70">
              Free, no-obligation quotes across Gauteng.
            </p>
          </div>
          <div className="flex w-full gap-3 sm:w-auto">
            <Button asChild className="flex-1 bg-copper hover:bg-copper-dark sm:flex-none">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 border-cream/25 bg-transparent text-cream hover:border-gold hover:text-gold sm:flex-none"
            >
              <a href="tel:+27633977498">063 397 7498</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust indicators — honest, defensible claims only.
          Swap these back to specific numbers (years in business, project count,
          warranty length, licensing status) once you can verify each one. */}
      <div className="border-b border-cream/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper">
                <Star className="h-6 w-6 text-cream" />
              </div>
              <div className="text-sm text-cream/70">Craftsmanship Clients Recommend</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper">
                <Users className="h-6 w-6 text-cream" />
              </div>
              <div className="text-sm text-cream/70">Trusted By Gauteng Homeowners</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper">
                <ShieldCheck className="h-6 w-6 text-cream" />
              </div>
              <div className="text-sm text-cream/70">Written Workmanship Guarantee</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper">
                <Hammer className="h-6 w-6 text-cream" />
              </div>
              <div className="text-sm text-cream/70">Skilled In-House Craftsmen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-walnut ring-1 ring-copper/50">
                  <span className="font-serif text-sm font-bold">
                    <span className="text-copper-light">T</span>
                    <span className="text-gold">S</span>
                  </span>
                </div>
                <div>
                  <div className="font-serif text-lg font-bold text-gold-light">The Timber Studio</div>
                  <div className="text-sm tracking-wide text-cream/60">Design · Craft · Build</div>
                </div>
              </div>
              <p className="leading-relaxed text-cream/70">
                Gauteng&apos;s bespoke joinery and carpentry studio. Custom kitchens, built-in cupboards, solid
                timber doors, decking, and full renovations — designed, crafted and installed by our own team.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gold-light" />
                <a href="tel:+27633977498" className="transition-colors hover:text-gold-light">
                  063 397 7498
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gold-light" />
                <a href="mailto:info@timberstudio.co.za" className="transition-colors hover:text-gold-light">
                  info@timberstudio.co.za
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-gold-light" />
                <span className="text-cream/70">Gauteng, South Africa</span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-gold-light" />
                <span className="text-cream/70">Mon–Sat, by appointment</span>
              </div>
            </div>

            {/* Social Media — real, confirmed accounts */}
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-light">Please follow us on our new socials!</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-copper"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-gold-light">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-cream/70 transition-colors hover:text-gold-light"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-copper transition-colors group-hover:bg-gold-light" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 mt-8 text-lg font-semibold text-gold-light">Studio Collections</h4>
            <ul className="space-y-3">
              {collections.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-cream/70 transition-colors hover:text-gold-light"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-copper transition-colors group-hover:bg-gold-light" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialist Pages & Service Areas */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-gold-light">Specialist Pages</h4>
            <ul className="space-y-3">
              {specialistPages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="group flex items-center text-cream/70 transition-colors hover:text-gold-light"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-copper transition-colors group-hover:bg-gold-light" />
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 mt-8 text-lg font-semibold text-gold-light">Service Areas</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="group flex items-center text-cream/70 transition-colors hover:text-gold-light"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-copper transition-colors group-hover:bg-gold-light" />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/areas"
              className="mt-3 inline-block text-sm font-semibold text-copper-light hover:text-gold-light"
            >
              View all areas we serve →
            </Link>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-gold-light">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-cream/70 transition-colors hover:text-gold-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-cream/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center text-sm text-cream/50 md:text-left">
            <p>© {currentYear} The Timber Studio (Pty) Ltd. All rights reserved.</p>
            <p className="mt-1">Bespoke carpentry &amp; custom joinery across Gauteng.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center space-x-6 text-sm md:justify-end">
            <Link href="/privacy" className="text-cream/50 transition-colors hover:text-gold-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-cream/50 transition-colors hover:text-gold-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// lucide-react doesn't ship a Pinterest icon, so this is a small inline SVG
// styled to match the other icons' 24x24 viewBox and stroke conventions.
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 20c.5-2 1.5-6.5 1.5-6.5" />
      <path d="M9.5 13.5C9 12.5 9 11 9 11c0-2 1.5-4 4-4 3 0 4.5 2 4.5 4.5 0 3-1.5 5.5-4 5.5-1 0-1.8-.5-2-1" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
