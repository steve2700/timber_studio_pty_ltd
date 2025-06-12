"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Minus } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 sm:p-6 hover:bg-slate-50 transition-colors flex items-center justify-between"
            >
              <h3 className="font-semibold text-slate-800 text-base sm:text-lg pr-4">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-amber-600 flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-amber-600 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
