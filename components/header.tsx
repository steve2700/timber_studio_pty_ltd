"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { RuleDivider } from "@/components/rule-divider"
import { mainNav, site } from "@/lib/site"
import { services } from "@/lib/data/services"

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .5 1 1v3.4c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.9c0-.5.4-1 1-1h3.5c.5 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const whatsappHref = `https://wa.me/${site.phoneTel.replace(/\D/g, "")}`

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar — trust signals at a glance */}
      <div className="hidden bg-charcoal text-cream/80 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs lg:px-8">
          <div className="flex items-center gap-1.5">
            <PinIcon />
            <span>Serving Gauteng only — Johannesburg, Pretoria &amp; surrounds</span>
          </div>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-1.5 transition-colors hover:text-gold-light"
          >
            <PhoneIcon />
            <span>{site.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b bg-paper/95 backdrop-blur transition-shadow duration-200 supports-[backdrop-filter]:bg-paper/85 ${
          scrolled ? "border-border shadow-sm" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              if (item.label === "Services") {
                const active = pathname.startsWith("/services") || services.some((s) => pathname === `/${s.slug}`)
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((o) => !o)}
                      aria-expanded={servicesOpen}
                      className="group flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-copper"
                    >
                      Services
                      <ChevronDown open={servicesOpen} />
                      <span
                        className={`absolute inset-x-3 -bottom-[1px] h-0.5 origin-center scale-x-0 rounded-full bg-copper transition-transform duration-200 motion-reduce:transition-none ${
                          active ? "scale-x-100" : "group-hover:scale-x-100"
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                          <ul className="grid grid-cols-2 gap-1 p-3">
                            {services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/${s.slug}`}
                                  className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-cream"
                                >
                                  <span className="block text-sm font-medium text-charcoal">
                                    {s.name}
                                  </span>
                                  {"description" in s && (s as { description?: string }).description && (
                                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                      {(s as { description?: string }).description}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <RuleDivider className="px-3" />
                          <Link
                            href="/services"
                            className="flex items-center justify-between px-6 py-3 text-sm font-semibold text-copper transition-colors hover:bg-cream"
                          >
                            View all services
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:text-copper"
                >
                  <span className={active ? "text-copper" : ""}>{item.label}</span>
                  <span
                    className={`absolute inset-x-3 -bottom-[1px] h-0.5 origin-center scale-x-0 rounded-full bg-copper transition-transform duration-200 motion-reduce:transition-none ${
                      active ? "scale-x-100" : "group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-md border border-copper px-4 py-2 text-sm font-semibold text-copper transition-colors hover:bg-copper hover:text-cream md:inline-block"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="hidden items-center gap-1.5 rounded-md bg-copper px-4 py-2 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-copper-dark sm:inline-flex"
            >
              <PhoneIcon />
              Call Now
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="rounded-md border border-border px-3 py-2 text-sm font-medium text-charcoal lg:hidden"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — full panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[var(--header-h,3.75rem)] z-40 h-[calc(100dvh-var(--header-h,3.75rem))] overflow-y-auto border-t border-border bg-paper lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-6xl flex-col px-4 py-4">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-charcoal transition-colors hover:bg-cream hover:text-copper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 border-t border-border pt-3">
              <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Our Services
              </p>
              <ul className="flex flex-col gap-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      className="block rounded-md px-3 py-2 text-sm text-charcoal transition-colors hover:bg-cream hover:text-copper"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs pinned to the bottom of the panel */}
            <div className="mt-auto grid grid-cols-2 gap-3 border-t border-border pt-4">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center justify-center gap-1.5 rounded-md bg-copper px-4 py-3 text-sm font-semibold text-cream"
              >
                <PhoneIcon />
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-md border border-copper px-4 py-3 text-sm font-semibold text-copper"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
