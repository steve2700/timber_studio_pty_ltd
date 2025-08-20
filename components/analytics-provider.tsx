"use client"
import type { AnalyticsProviderProps } from "./types" // Assuming types are defined in a separate file

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Google Analytics 4 setup
    const GA_MEASUREMENT_ID = "G-KHJ36N0NYE" // Replace with my actual GA4 measurement ID

    // Load Google Analytics script
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
        custom_map: {
          'custom_parameter_1': 'service_type',
          'custom_parameter_2': 'area_served'
        }
      });
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export function useTrackInteraction() {
  const trackClick = (elementName: string, location: string) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "click", {
        event_category: "engagement",
        event_label: `${location}_${elementName}`,
        custom_parameter_1: elementName,
        custom_parameter_2: location,
      })
    }
  }

  const trackPhoneCall = (location: string) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "phone_call", {
        event_category: "conversion",
        event_label: `phone_call_${location}`,
        value: 1,
      })
    }
  }

  const trackEmailClick = (location: string) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "email_click", {
        event_category: "conversion",
        event_label: `email_click_${location}`,
        value: 1,
      })
    }
  }

  const trackQuoteRequest = (service: string, area: string) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "quote_request", {
        event_category: "conversion",
        event_label: `quote_${service}_${area}`,
        custom_parameter_1: service,
        custom_parameter_2: area,
        value: 5,
      })
    }
  }

  return {
    trackClick,
    trackPhoneCall,
    trackEmailClick,
    trackQuoteRequest,
  }
}
