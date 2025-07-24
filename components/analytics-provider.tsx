"use client"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { track } from "@vercel/analytics"

interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}

export function trackEvent(event: AnalyticsEvent) {
  track(event.name, event.properties)
}

// Custom hook for tracking page views
export function usePageView() {
  useEffect(() => {
    trackEvent({
      name: "page_view",
      properties: {
        page: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      },
    })
  }, [])
}

// Custom hook for tracking user interactions
export function useTrackInteraction() {
  const trackClick = (element: string, location?: string) => {
    trackEvent({
      name: "click",
      properties: {
        element,
        location: location || window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackFormSubmission = (formName: string, success = true) => {
    trackEvent({
      name: "form_submission",
      properties: {
        form_name: formName,
        success,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackPhoneCall = (source: string) => {
    trackEvent({
      name: "phone_call_initiated",
      properties: {
        source,
        phone_number: "+27676014490",
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackWhatsAppClick = (source: string) => {
    trackEvent({
      name: "whatsapp_click",
      properties: {
        source,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackServiceView = (serviceName: string) => {
    trackEvent({
      name: "service_viewed",
      properties: {
        service_name: serviceName,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackAreaView = (areaName: string) => {
    trackEvent({
      name: "area_viewed",
      properties: {
        area_name: areaName,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  return {
    trackClick,
    trackFormSubmission,
    trackPhoneCall,
    trackWhatsAppClick,
    trackServiceView,
    trackAreaView,
  }
}

// Analytics Provider Component
export function AnalyticsProvider() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      // Replace with your actual GA4 Measurement ID
      const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"

      // Load Google Analytics script
      const script1 = document.createElement("script")
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      document.head.appendChild(script1)

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }

      window.gtag("js", new Date())
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      })

      // Track business events
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        business_type: "carpentry_granite_services",
        service_area: "johannesburg_gauteng",
      })
    }

    // Initialize analytics
    initGA()

    // Track phone clicks
    const trackPhoneClick = () => {
      window.gtag?.("event", "phone_call", {
        event_category: "contact",
        event_label: "header_phone_click",
        value: 1,
      })
    }

    // Track email clicks
    const trackEmailClick = () => {
      window.gtag?.("event", "email_click", {
        event_category: "contact",
        event_label: "email_link_click",
        value: 1,
      })
    }

    // Track quote button clicks
    const trackQuoteClick = () => {
      window.gtag?.("event", "quote_request", {
        event_category: "lead_generation",
        event_label: "quote_button_click",
        value: 1,
      })
    }

    // Track WhatsApp clicks
    const trackWhatsAppClick = () => {
      window.gtag?.("event", "whatsapp_click", {
        event_category: "contact",
        event_label: "whatsapp_button_click",
        value: 1,
      })
    }

    // Add event listeners
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]')
    const quoteButtons = document.querySelectorAll('a[href="/contact"], button[data-quote]')
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]')

    phoneLinks.forEach((link) => link.addEventListener("click", trackPhoneClick))
    emailLinks.forEach((link) => link.addEventListener("click", trackEmailClick))
    quoteButtons.forEach((button) => button.addEventListener("click", trackQuoteClick))
    whatsappLinks.forEach((link) => link.addEventListener("click", trackWhatsAppClick))

    // Cleanup
    return () => {
      phoneLinks.forEach((link) => link.removeEventListener("click", trackPhoneClick))
      emailLinks.forEach((link) => link.removeEventListener("click", trackEmailClick))
      quoteButtons.forEach((button) => button.removeEventListener("click", trackQuoteClick))
      whatsappLinks.forEach((link) => link.removeEventListener("click", trackWhatsAppClick))
    }
  }, [])

  useEffect(() => {
    // Track page views on route changes
    if (window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname + searchParams.toString(),
        page_title: document.title,
      })

      // Track service page views
      if (pathname.includes("/services/")) {
        const service = pathname.split("/services/")[1]
        window.gtag("event", "service_page_view", {
          event_category: "engagement",
          event_label: service,
          service_type: service,
        })
      }

      // Track area page views
      if (pathname.includes("/areas/")) {
        const area = pathname.split("/areas/")[1]
        window.gtag("event", "area_page_view", {
          event_category: "engagement",
          event_label: area,
          service_area: area,
        })
      }
    }
  }, [pathname, searchParams])

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent
        window.gtag?.("event", "scroll_depth", {
          event_category: "engagement",
          event_label: `${scrollPercent}%`,
          value: scrollPercent,
        })
      }
    }

    window.addEventListener("scroll", trackScrollDepth)
    return () => window.removeEventListener("scroll", trackScrollDepth)
  }, [])

  return null
}
