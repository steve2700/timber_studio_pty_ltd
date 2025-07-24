"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Star } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Get Your <span className="text-amber-600">Free Quote</span> Today
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Ready to transform your space? Contact Johannesburg's trusted carpentry and granite experts for a free
              consultation and quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+27676014490"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-lg font-medium"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 067 601 4490
              </a>
              <a
                href="https://wa.me/27676014490"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </a>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 text-lg px-8 bg-transparent"
              >
                <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 w-5 h-5 fill-current" />
                  Read Our 5-Star Google Reviews
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">Request Your Free Quote</CardTitle>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="067 601 4490"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Service Required *</label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kitchen-renovation">Kitchen Renovation</SelectItem>
                          <SelectItem value="built-in-cupboards">Built-in Cupboards</SelectItem>
                          <SelectItem value="quartz-granite">Quartz & Granite</SelectItem>
                          <SelectItem value="general-carpentry">General Carpentry</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Location *</label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="johannesburg-south">Johannesburg South</SelectItem>
                          <SelectItem value="randburg">Randburg</SelectItem>
                          <SelectItem value="kempton-park">Kempton Park</SelectItem>
                          <SelectItem value="roodepoort">Roodepoort</SelectItem>
                          <SelectItem value="sandton">Sandton</SelectItem>
                          <SelectItem value="other">Other Gauteng Area</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-3">
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                        <a href="tel:+27676014490" className="text-slate-600 hover:text-amber-600">
                          067 601 4490
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                        <a href="mailto:info@granitejoinery.co.za" className="text-slate-600 hover:text-amber-600">
                          info@granitejoinery.co.za
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Service Areas</h4>
                        <p className="text-slate-600">
                          Johannesburg South, Randburg, Kempton Park, Roodepoort & surrounding Gauteng areas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
                        <div className="text-slate-600">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 8:00 AM - 1:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Us?</h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Free quotes within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">5-star rated service</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Affordable, transparent pricing</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Quality workmanship guaranteed</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Local Gauteng specialists</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Find Us on Google Maps</h2>
            <p className="text-xl text-slate-600">
              Visit our Google My Business profile for directions, reviews, and more information
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Maps Embed */}
            <div className="relative">
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.8234567890123!2d28.047300000000000!3d-26.204100000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzE0LjgiUyAyOMKwMDInNTAuMyJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Granite & Joinery Experts Johannesburg Location"
                ></iframe>
              </div>
            </div>

            {/* Google My Business Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Visit Our Google My Business</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-slate-800">Google Rating</h4>
                        <div className="flex items-center mt-1">
                          <div className="flex text-amber-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                          </div>
                          <span className="text-slate-600">5.0 (47+ reviews)</span>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-lg py-3">
                      <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                        <Star className="mr-2 w-5 h-5" />
                        View Our Google My Business Profile
                      </a>
                    </Button>

                    <div className="grid grid-cols-2 gap-4">
                      <Button asChild variant="outline" className="text-sm bg-transparent">
                        <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                          Read Reviews
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="text-sm bg-transparent">
                        <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-800 mb-4">Why Choose Us?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">5-star Google rating</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">47+ verified reviews</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Local Gauteng experts</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-slate-600">Quality guaranteed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Service Areas</h2>
            <p className="text-xl text-slate-600">Professional carpentry and granite installation across Gauteng</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-600">JS</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Johannesburg South</h3>
                <p className="text-sm text-slate-600">Primary service area - Best carpenter in the region</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-600">RB</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Randburg</h3>
                <p className="text-sm text-slate-600">Trusted carpenter for kitchen renovations</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-600">KP</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Kempton Park</h3>
                <p className="text-sm text-slate-600">Specialist joinery and built-in services</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-amber-600">RP</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Roodepoort</h3>
                <p className="text-sm text-slate-600">Quality granite and stone installations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
