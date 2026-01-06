import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Shield, AlertTriangle, Phone, Mail, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Granite Carpentry - Professional Carpentry Service Agreement 2026",
  description:
    "Granite Carpentry's comprehensive terms of service for kitchen renovations, built-in cupboards, and granite installations. Professional carpentry service agreements for Johannesburg customers.",
  keywords:
    "terms of service, carpentry service agreement, kitchen renovation terms, granite installation contract, built-in cupboards agreement, professional carpenter terms",
  robots: "index, follow",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Scale className="w-12 h-12 text-amber-400 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              Professional carpentry service agreements for kitchen renovations, built-in cupboards, and granite
              installations across Johannesburg and Gauteng.
            </p>
            <div className="flex items-center justify-center text-slate-400">
              <FileText className="w-5 h-5 mr-2" />
              <span>Effective from: January 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Service Overview */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  Service Agreement Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Professional Standards</h3>
                    <p className="text-slate-600 text-sm">
                      Licensed and insured carpentry services with quality guarantees
                    </p>
                  </div>
                  <div className="text-center">
                    <Scale className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Fair Terms</h3>
                    <p className="text-slate-600 text-sm">Transparent pricing and clear service agreements</p>
                  </div>
                  <div className="text-center">
                    <FileText className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Clear Contracts</h3>
                    <p className="text-slate-600 text-sm">Detailed project specifications and timelines</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Terms */}
            <div className="prose prose-slate max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>1. Service Agreement and Acceptance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    By engaging Granite Carpentry for carpentry services, kitchen renovations, built-in cupboards, or
                    granite installations, you agree to these terms of service. This agreement becomes effective when:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>You accept our written quote or proposal</li>
                    <li>You make a deposit payment for the agreed services</li>
                    <li>We commence work on your carpentry project</li>
                    <li>You sign a formal service agreement for larger projects</li>
                  </ul>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-800">Important Note</h4>
                        <p className="text-amber-700 text-sm">
                          All carpentry projects require a signed agreement and deposit before work commences. This
                          protects both parties and ensures clear project expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>2. Services Provided</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Granite Carpentry provides professional carpentry and installation services including:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Carpentry Services</h4>
                      <ul className="list-disc pl-6 space-y-1 text-slate-700">
                        <li>Kitchen renovations and remodeling</li>
                        <li>Custom built-in cupboards and wardrobes</li>
                        <li>Bathroom vanity installations</li>
                        <li>Entertainment units and shelving</li>
                        <li>Decking and outdoor structures</li>
                        <li>Drywall and ceiling installations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Stone Installation</h4>
                      <ul className="list-disc pl-6 space-y-1 text-slate-700">
                        <li>Granite countertop installation</li>
                        <li>Quartz surface installations</li>
                        <li>Kitchen island stone tops</li>
                        <li>Bathroom vanity stone surfaces</li>
                        <li>Commercial stone installations</li>
                        <li>Stone repair and maintenance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>3. Pricing and Payment Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">Quote Validity and Pricing</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>All quotes are valid for 30 days from the date of issue</li>
                    <li>Prices include materials, labor, and standard installation</li>
                    <li>Additional costs for structural modifications will be quoted separately</li>
                    <li>Prices may vary based on material selection and project complexity</li>
                  </ul>

                  <h4 className="font-semibold text-lg mb-3">Payment Schedule</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>
                      <strong>Deposit:</strong> 50% deposit required to secure booking and order materials
                    </li>
                    <li>
                      <strong>Progress Payment:</strong> 30% due at 50% project completion (for larger projects)
                    </li>
                    <li>
                      <strong>Final Payment:</strong> 20% due upon project completion and customer satisfaction
                    </li>
                    <li>
                      <strong>Small Projects:</strong> 50% deposit, 50% on completion
                    </li>
                  </ul>

                  <h4 className="font-semibold text-lg mb-3">Accepted Payment Methods</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Bank transfer (EFT) - preferred method</li>
                    <li>Cash payments for smaller projects</li>
                    <li>Cheque payments (subject to clearance)</li>
                    <li>Card payments for deposits (processing fees may apply)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>4. Project Timeline and Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">Project Scheduling</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>Project start dates are confirmed upon deposit payment</li>
                    <li>Timelines depend on material availability and project complexity</li>
                    <li>Weather conditions may affect outdoor projects and deliveries</li>
                    <li>We provide regular updates on project progress</li>
                  </ul>

                  <h4 className="font-semibold text-lg mb-3">Typical Project Timelines</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Built-in cupboards: 3-7 working days</li>
                    <li>Kitchen renovations: 7-14 working days</li>
                    <li>Granite installations: 2-5 working days</li>
                    <li>Decking projects: 5-10 working days</li>
                    <li>Complex renovations: 2-4 weeks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5. Materials and Workmanship</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">Material Standards</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>We use only high-quality, certified materials</li>
                    <li>All timber is treated and suitable for South African conditions</li>
                    <li>Stone materials are sourced from reputable suppliers</li>
                    <li>Hardware and fittings meet industry standards</li>
                    <li>Material specifications are detailed in project quotes</li>
                  </ul>

                  <h4 className="font-semibold text-lg mb-3">Workmanship Standards</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>All work performed by qualified, experienced carpenters</li>
                    <li>Compliance with South African building codes and standards</li>
                    <li>Quality control inspections at key project milestones</li>
                    <li>Professional finishing and attention to detail</li>
                    <li>Clean-up and site restoration upon completion</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. Warranties and Guarantees</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">Workmanship Warranty</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>
                      <strong>12-month warranty</strong> on all carpentry workmanship
                    </li>
                    <li>
                      <strong>24-month warranty</strong> on granite and stone installations
                    </li>
                    <li>Warranty covers defects in workmanship and installation</li>
                    <li>Prompt repair or replacement of defective work at no cost</li>
                  </ul>

                  <h4 className="font-semibold text-lg mb-3">Material Warranties</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>Manufacturer warranties apply to all materials used</li>
                    <li>Stone materials: 10-15 year manufacturer warranty</li>
                    <li>Hardware and fittings: 2-5 year manufacturer warranty</li>
                    <li>We facilitate warranty claims with manufacturers</li>
                  </ul>

                  <h4 className="font-semibold text-lg mb-3">Warranty Exclusions</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Normal wear and tear from regular use</li>
                    <li>Damage from misuse, abuse, or accidents</li>
                    <li>Damage from natural disasters or extreme weather</li>
                    <li>Modifications made by other contractors</li>
                    <li>Failure to follow recommended maintenance procedures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Customer Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">Site Preparation</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>Provide clear access to work areas</li>
                    <li>Remove personal items and furniture from work zones</li>
                    <li>Ensure utilities (electricity, water) are available</li>
                    <li>Obtain necessary building permits (where required)</li>
                    <li>Inform us of any structural or electrical issues</li>
                  </ul>

                  <h4 className="font-semibold text-lg mb-3">During the Project</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>Provide reasonable access during working hours</li>
                    <li>Communicate any concerns promptly</li>
                    <li>Make timely decisions on material selections</li>
                    <li>Ensure pets and children are kept safe from work areas</li>
                  </ul>

                  <h4 className="font-semibold text-lg mb-3">Payment Obligations</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Make payments according to agreed schedule</li>
                    <li>Notify us immediately of any payment issues</li>
                    <li>Provide feedback and approval at project milestones</li>
                    <li>Complete final inspection and sign-off upon completion</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>8. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Granite Carpentry's liability is limited to the value of the specific project or service provided.
                    We are not liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
                    <li>Indirect, consequential, or incidental damages</li>
                    <li>Loss of use, profits, or business opportunities</li>
                    <li>Damage to items not directly related to our work</li>
                    <li>Delays caused by factors beyond our control</li>
                    <li>Pre-existing structural or electrical issues</li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Insurance Coverage</h4>
                    <p className="text-blue-700 text-sm">
                      Granite Carpentry maintains comprehensive public liability insurance and professional indemnity
                      coverage. Insurance certificates available upon request.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>9. Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-3">Resolution Process</h4>
                  <ol className="list-decimal pl-6 space-y-2 text-slate-700 mb-6">
                    <li>
                      <strong>Direct Communication:</strong> Contact us immediately to discuss any concerns
                    </li>
                    <li>
                      <strong>Formal Complaint:</strong> Submit written complaint within 30 days of issue
                    </li>
                    <li>
                      <strong>Mediation:</strong> Attempt resolution through professional mediation
                    </li>
                    <li>
                      <strong>Legal Action:</strong> South African courts have jurisdiction for unresolved disputes
                    </li>
                  </ol>

                  <h4 className="font-semibold text-lg mb-3">Customer Satisfaction</h4>
                  <p className="text-slate-700">
                    We are committed to customer satisfaction and will work diligently to resolve any issues. Our goal
                    is to exceed your expectations on every carpentry project.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>10. Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    For questions about these terms of service or to discuss your carpentry project:
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-amber-600 mr-3" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-slate-600">info@granitecarpentry.co.za</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-amber-600 mr-3" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-slate-600">067 601 4490</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 mt-4">
                      <strong>Business Hours:</strong> Monday - Friday: 7:00 AM - 5:00 PM, Saturday: 8:00 AM - 2:00 PM
                      <br />
                      <strong>Emergency Contact:</strong> Available for urgent carpentry issues
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Terms Updates and Modifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Granite Carpentry reserves the right to update these terms of service. Changes will be communicated
                    through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Website updates with effective date notifications</li>
                    <li>Email notifications to existing customers</li>
                    <li>Written notice for active projects</li>
                  </ul>
                  <p className="text-slate-700 mt-4">
                    Continued use of our services constitutes acceptance of updated terms. For existing projects,
                    original terms remain in effect until project completion.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Start Your Carpentry Project?</h3>
                  <p className="text-slate-700 mb-6">
                    Contact Granite Carpentry today for professional kitchen renovations, built-in cupboards, and
                    granite installations across Johannesburg.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
                      <Link href="/contact">Get Your Free Quote</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/kitchen-renovations">View Our Services</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
