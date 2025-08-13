import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Granite Carpentry - POPIA Compliant Data Protection 2025",
  description:
    "Granite Carpentry's comprehensive privacy policy. POPIA compliant data protection for South African customers. Learn how we protect your personal information and carpentry project details.",
  keywords:
    "privacy policy, POPIA compliance, data protection South Africa, carpenter privacy policy, granite installation privacy, personal information protection",
  robots: "index, follow",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-amber-400 mr-4" />
              <h1 className="text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-slate-300 mb-8">
              Your privacy is our priority. Learn how Granite Carpentry protects your personal information in compliance
              with South African POPIA regulations.
            </p>
            <div className="flex items-center justify-center text-slate-400">
              <FileText className="w-5 h-5 mr-2" />
              <span>Last updated: January 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quick Overview */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="w-6 h-6 text-amber-600 mr-3" />
                  Privacy at a Glance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Secure Data</h3>
                    <p className="text-slate-600 text-sm">All personal information is encrypted and securely stored</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">POPIA Compliant</h3>
                    <p className="text-slate-600 text-sm">Fully compliant with South African data protection laws</p>
                  </div>
                  <div className="text-center">
                    <Eye className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Transparent</h3>
                    <p className="text-slate-600 text-sm">Clear information about how we use your data</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Privacy Policy */}
            <div className="prose prose-slate max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>1. Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold text-lg">Personal Information</h4>
                  <p className="text-slate-700">
                    When you contact Granite Carpentry for carpentry, kitchen renovation, or granite installation
                    services, we may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Full name and contact details (phone, email, address)</li>
                    <li>Project details and requirements for carpentry services</li>
                    <li>Property information for accurate quotes and installations</li>
                    <li>Communication preferences and service history</li>
                    <li>Payment information for completed projects</li>
                  </ul>

                  <h4 className="font-semibold text-lg mt-6">Automatically Collected Information</h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Website usage data and analytics</li>
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referral sources and search terms used</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>2. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Granite Carpentry uses your personal information for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Providing accurate quotes for kitchen renovations and carpentry services</li>
                    <li>Scheduling consultations and project installations</li>
                    <li>Communicating project updates and completion timelines</li>
                    <li>Processing payments for completed carpentry work</li>
                    <li>Improving our services based on customer feedback</li>
                    <li>Sending relevant updates about new services (with your consent)</li>
                    <li>Complying with legal and regulatory requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>3. Information Sharing and Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Granite Carpentry does not sell, trade, or rent your personal information. We may share information
                    only in these circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>With trusted suppliers for granite and materials sourcing (project-specific only)</li>
                    <li>With subcontractors when necessary for large carpentry projects</li>
                    <li>When required by South African law or legal proceedings</li>
                    <li>To protect our rights, property, or safety of our customers</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>4. Data Security and Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    We implement comprehensive security measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Limited access to personal information (authorized personnel only)</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Secure disposal of physical documents containing personal data</li>
                    <li>Staff training on data protection and privacy practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5. Your Rights Under POPIA</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    As a South African resident, you have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>
                      <strong>Right to Access:</strong> Request copies of your personal information we hold
                    </li>
                    <li>
                      <strong>Right to Correction:</strong> Request correction of inaccurate personal information
                    </li>
                    <li>
                      <strong>Right to Deletion:</strong> Request deletion of your personal information (subject to
                      legal requirements)
                    </li>
                    <li>
                      <strong>Right to Object:</strong> Object to processing of your personal information for marketing
                      purposes
                    </li>
                    <li>
                      <strong>Right to Portability:</strong> Request transfer of your data to another service provider
                    </li>
                    <li>
                      <strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. Cookies and Website Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Our website uses cookies to improve your browsing experience and provide better service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand website usage patterns</li>
                    <li>Marketing cookies for relevant advertising (with consent)</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                  <p className="text-slate-700 mt-4">
                    You can control cookie settings through your browser preferences or contact us for assistance.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Data Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">We retain your personal information for the following periods:</p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Customer project records: 7 years (for warranty and legal purposes)</li>
                    <li>Marketing communications: Until you unsubscribe or object</li>
                    <li>Website analytics: 26 months maximum</li>
                    <li>Financial records: As required by South African tax law</li>
                    <li>Communication records: 3 years for customer service purposes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>8. Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    For any privacy-related questions, concerns, or to exercise your rights under POPIA, contact us:
                  </p>
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-amber-600 mr-3" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-slate-600">granitecarpentry5@gmail.com</p>
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
                      <strong>Privacy Officer:</strong> Granite Carpentry Data Protection Team
                      <br />
                      <strong>Response Time:</strong> We will respond to privacy requests within 30 days as required by
                      POPIA.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Granite Carpentry may update this privacy policy to reflect changes in our practices or legal
                    requirements. We will notify you of significant changes by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to registered customers</li>
                    <li>Displaying prominent notices on our website</li>
                  </ul>
                  <p className="text-slate-700 mt-4">
                    Continued use of our services after policy changes constitutes acceptance of the updated terms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Questions About Our Privacy Policy?</h3>
                  <p className="text-slate-700 mb-6">
                    Our team is here to help you understand how we protect your privacy and handle your personal
                    information.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
                      <Link href="/contact">Contact Our Privacy Team</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/">Return to Homepage</Link>
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
