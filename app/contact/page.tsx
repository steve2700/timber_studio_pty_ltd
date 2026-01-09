import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Calendar,
  Shield,
  Award,
  Users,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Johannesburg's #1 Carpenter | Free Quotes Kitchen Renovations 2026",
  description:
    "Contact Granite Carpentry for free quotes on kitchen renovations, built-in cupboards & granite installation. Call 067 601 4490 or email info@granitecarpentry.co.za. 5-star rated carpenter serving Johannesburg, Sandton, Randburg.",
  keywords:
    "contact carpenter Johannesburg, free kitchen renovation quote, granite installation quote Johannesburg, built-in cupboards quote, carpenter contact details Johannesburg, kitchen renovation consultation, professional carpenter contact",
  robots: "index, follow",
  openGraph: {
    title: "Contact Johannesburg's #1 Carpenter | Free Quotes 2026",
    description:
      "Get free quotes for kitchen renovations, built-in cupboards & granite installation. 5-star rated carpenter serving Greater Johannesburg.",
    url: "https://granitecarpentry.co.za/contact",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/granitecarpentry.webp",
        width: 1200,
        height: 630,
        alt: "Contact Granite Carpentry - Professional Carpenter Johannesburg",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">#1 Rated Carpenter Johannesburg</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Get Your <span className="text-amber-600">Free Quote</span> Today
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Ready to transform your space? Contact Johannesburg's most trusted carpenter for kitchen renovations,
                built-in cupboards, and granite installations. Free consultations and competitive quotes guaranteed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Free Quotes & Consultations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">5-Star Rated Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">24-Month Warranty</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="text-lg px-8 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  <a href="https://wa.me/27676014490" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 w-5 h-5" />
                    WhatsApp Quote
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/granitecarpentry.webp"
                alt="Contact Granite Carpentry - Professional carpenter in Johannesburg for kitchen renovations"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-slate-800">47+</div>
                <div className="text-slate-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-slate-600">Choose the contact method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Call Us</h3>
                <p className="text-slate-600 mb-4">Speak directly with our team</p>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <a href="tel:+27676014490">067 601 4490</a>
                </Button>
                <p className="text-xs text-slate-500 mt-2">Available 7 days a week</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">WhatsApp</h3>
                <p className="text-slate-600 mb-4">Quick quotes & photos</p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/27676014490" target="_blank" rel="noopener noreferrer">
                    Message Us
                  </a>
                </Button>
                <p className="text-xs text-slate-500 mt-2">Send photos for instant quotes</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600 mb-4">Detailed project discussions</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <a href="mailto:info@granitecarpentry.co.za">Send Email</a>
                </Button>
                <p className="text-xs text-slate-500 mt-2">info@granitecarpentry.co.za</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Book Consultation</h3>
                <p className="text-slate-600 mb-4">Free on-site visits</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <a href="tel:+27676014490">Schedule Visit</a>
                </Button>
                <p className="text-xs text-slate-500 mt-2">Free consultations available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Get Your Free Quote</h2>
              <p className="text-xl text-slate-600">
                Tell us about your project and we'll provide a detailed quote within 24 hours
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Free Project Quote Form</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Full Name *
                      </Label>
                      <Input id="name" name="name" required className="mt-1" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Phone Number *
                      </Label>
                      <Input id="phone" name="phone" type="tel" required className="mt-1" placeholder="067 123 4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-slate-700 font-medium">
                        Location/Area *
                      </Label>
                      <Select name="location">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="johannesburg-south">Johannesburg South</SelectItem>
                          <SelectItem value="sandton">Sandton & Rosebank</SelectItem>
                          <SelectItem value="randburg">Randburg & Fourways</SelectItem>
                          <SelectItem value="kempton-park">Kempton Park & Boksburg</SelectItem>
                          <SelectItem value="pretoria">Pretoria & Centurion</SelectItem>
                          <SelectItem value="midrand">Midrand & Edenvale</SelectItem>
                          <SelectItem value="roodepoort">Roodepoort & Krugersdorp</SelectItem>
                          <SelectItem value="other">Other (specify in message)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-slate-700 font-medium">
                      Service Required *
                    </Label>
                    <Select name="service">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen-renovation">Kitchen Renovation</SelectItem>
                        <SelectItem value="built-in-cupboards">Built-in Cupboards</SelectItem>
                        <SelectItem value="granite-installation">Granite/Quartz Installation</SelectItem>
                        <SelectItem value="decking-flooring">Decking & Flooring</SelectItem>
                        <SelectItem value="drywall-ceilings">Drywall & Ceilings</SelectItem>
                        <SelectItem value="multiple-services">Multiple Services</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-slate-700 font-medium">
                      Estimated Budget Range
                    </Label>
                    <Select name="budget">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select budget range (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-20k">Under R20,000</SelectItem>
                        <SelectItem value="20k-50k">R20,000 - R50,000</SelectItem>
                        <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                        <SelectItem value="100k-200k">R100,000 - R200,000</SelectItem>
                        <SelectItem value="over-200k">Over R200,000</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-slate-700 font-medium">
                      Project Timeline
                    </Label>
                    <Select name="timeline">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="When do you want to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="planning">Just planning/getting quotes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Please describe your project in detail. Include dimensions, materials preferences, specific requirements, and any other relevant information..."
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="consultation" name="consultation" />
                      <Label htmlFor="consultation" className="text-sm text-slate-700">
                        I would like to schedule a free on-site consultation
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="updates" name="updates" />
                      <Label htmlFor="updates" className="text-sm text-slate-700">
                        Send me updates about new services and special offers
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy" name="privacy" required />
                      <Label htmlFor="privacy" className="text-sm text-slate-700">
                        I agree to the{" "}
                        <Link href="/privacy" className="text-amber-600 hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" className="text-amber-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        *
                      </Label>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button type="submit" size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-12 py-4">
                      Get My Free Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-sm text-slate-600 mt-3">
                      We'll respond within 24 hours with your detailed quote
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Why Choose Granite Carpentry?</h2>
            <p className="text-xl text-slate-600">Johannesburg's most trusted carpentry specialists</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">
                Fully licensed carpentry business with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Rated</h3>
              <p className="text-slate-600">
                Consistently rated 5 stars by customers across Johannesburg with 47+ completed projects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Expert Team</h3>
              <p className="text-slate-600">
                Qualified carpenters with years of experience in kitchen renovations and custom installations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Quality Guarantee</h3>
              <p className="text-slate-600">
                24-month warranty on all workmanship with quality materials and professional installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Clock className="w-6 h-6 text-amber-600 mr-3" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-medium text-slate-700">Monday - Friday</span>
                  <span className="text-slate-600">7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-medium text-slate-700">Saturday</span>
                  <span className="text-slate-600">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-medium text-slate-700">Sunday</span>
                  <span className="text-slate-600">Emergency calls only</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg mt-4">
                  <p className="text-amber-800 font-medium">24/7 Emergency Service Available</p>
                  <p className="text-amber-700 text-sm">
                    For urgent carpentry repairs and emergency situations, we're available around the clock.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  We proudly serve customers throughout the Greater Johannesburg area and surrounding regions:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Johannesburg South</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Sandton & Rosebank</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Randburg & Fourways</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Kempton Park</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Pretoria & Centurion</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Midrand & Edenvale</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Boksburg & Benoni</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Roodepoort</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 font-medium">Free On-Site Consultations</p>
                  <p className="text-blue-700 text-sm">
                    We provide free consultations and quotes throughout our service areas. Travel charges may apply for
                    areas outside our standard service zone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 47+ satisfied customers who chose Granite Carpentry for their kitchen renovations, built-in cupboards,
            and granite installations across Johannesburg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 067 601 4490
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 bg-transparent"
            >
              <Link href="/portfolio">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <p className="text-amber-100 text-sm mt-6">
            Free quotes • Licensed & insured • 24-month warranty • 5-star rated service
          </p>
        </div>
      </section>
    </>
  )
}
