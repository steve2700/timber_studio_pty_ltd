import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Star } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Granite & Joinery Experts Johannesburg",
  description:
    "Get answers to frequently asked questions about our carpentry, kitchen renovation, granite installation, and built-in cupboard services in Johannesburg and Gauteng.",
  keywords:
    "carpentry FAQ Johannesburg, kitchen renovation questions, granite installation FAQ, built-in cupboards questions, carpenter pricing Johannesburg South",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "How much do kitchen renovations cost in Johannesburg?",
      answer:
        "Kitchen renovation costs vary depending on size, materials, and complexity. Basic renovations start from R50,000, while premium kitchens can range from R150,000-R300,000+. We provide free detailed quotes based on your specific requirements and budget.",
    },
    {
      question: "How long does a typical kitchen renovation take?",
      answer:
        "Most kitchen renovations take 2-4 weeks depending on the scope of work. Simple cabinet replacements may take 1-2 weeks, while complete renovations with plumbing and electrical work can take 3-6 weeks. We provide a detailed timeline with your quote.",
    },
    {
      question: "Do you provide free quotes for all services?",
      answer:
        "Yes! We provide completely free, no-obligation quotes for all our services including kitchen renovations, built-in cupboards, granite installations, decking, and drywall. Contact us at 063 397 7498 to schedule your free consultation.",
    },
    {
      question: "What areas in Gauteng do you service?",
      answer:
        "We service all areas across Gauteng including Johannesburg South (our primary area), Randburg, Sandton, Midrand, Kempton Park, Fourways, Boksburg, Benoni, Germiston, Alberton, Edenvale, Bedfordview, Centurion, Pretoria, Roodepoort, Krugersdorp, and surrounding areas.",
    },
    {
      question: "What types of granite and quartz do you install?",
      answer:
        "We install premium granite and engineered quartz from leading suppliers. Popular granite options include Nero Impala, Rustenburg, and imported stones. For quartz, we offer Caesarstone, Silestone, and other premium brands in various colors and finishes.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer:
        "Yes, we provide comprehensive warranties on all our work. Carpentry work comes with a 2-year warranty, granite/quartz installations have a 5-year warranty, and we guarantee all workmanship. We stand behind our quality with full warranty coverage.",
    },
    {
      question: "Can you help with kitchen design and planning?",
      answer:
        "Our experienced team provides complete design services including 3D renderings, space planning, material selection, and project management. We work with you from initial concept through to final installation.",
    },
    {
      question: "What makes you different from other carpenters in Johannesburg?",
      answer:
        "We're 5-star rated with 47+ satisfied customers, offer transparent pricing, use quality materials, provide comprehensive warranties, and specialize in both carpentry and stone installations. We're local Johannesburg experts who understand the market and deliver exceptional value.",
    },
    {
      question: "How do I get started with my project?",
      answer:
        "Simply call us at 063 397 7498 or fill out our contact form. We'll schedule a free consultation, discuss your requirements, provide a detailed quote, and if you're happy, we'll schedule your project. It's that simple!",
    },
    {
      question: "Do you handle permits and approvals?",
      answer:
        "For major renovations requiring municipal approvals, we can guide you through the process and recommend approved building plan drafters. For most kitchen and cupboard installations, no permits are required.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, EFT bank transfers, and can arrange payment plans for larger projects. We typically require a 30% deposit to start, with progress payments and final payment on completion.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-amber-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                ))}
              </div>
              <span className="text-slate-600 font-medium text-sm sm:text-base">5-Star Rated Experts</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Get answers to common questions about our carpentry, kitchen renovation, granite installation, and
              built-in cupboard services across Johannesburg and Gauteng.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
              <Button
                size="lg"
                asChild
                className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-transparent"
              >
                <a href="tel:+27633977498">
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Call: 063 397 7498
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8">
              Can't find the answer you're looking for? Our friendly team is here to help with any questions about your
              carpentry or renovation project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Call Us</h3>
                  <p className="text-slate-600 mb-3">Speak directly with our experts</p>
                  <a href="tel:+27633977498" className="text-amber-600 hover:text-amber-700 font-medium">
                    063 397 7498
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Google Reviews</h3>
                  <p className="text-slate-600 mb-3">See what our customers say</p>
                  <a
                    href="https://g.co/kgs/epZT5BY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Read Reviews
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <ArrowRight className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Free Quote</h3>
                  <p className="text-slate-600 mb-3">Get a detailed project quote</p>
                  <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-medium">
                    Request Quote
                  </Link>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
