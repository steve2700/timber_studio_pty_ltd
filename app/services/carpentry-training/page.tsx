import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, GraduationCap, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Carpentry Training Courses Johannesburg | Learn Professional Carpentry Skills",
  description:
    "Professional carpentry training courses in Johannesburg. Hands-on experience with guaranteed work placement after completion. Learn kitchen installation, built-in cupboards, and more. Affordable training with expert instructors.",
  keywords:
    "carpentry training Johannesburg, carpentry courses Gauteng, learn carpentry Sandton, carpentry school Randburg, hands-on carpentry training, carpentry apprenticeship Johannesburg, professional carpentry courses, kitchen installation training, built-in cupboard training",
}

export default function CarpentryTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">5-Star Training Program</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Professional <span className="text-amber-600">Carpentry Training</span> Courses
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Learn professional carpentry skills with hands-on experience and guaranteed work placement after
                completion. Expert training in kitchen installation, built-in cupboards, and advanced joinery
                techniques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Enroll Now - Get Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="text-lg px-8 border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                    <Star className="mr-2 w-5 h-5 fill-current" />
                    See Our Reviews
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Hands-on Training</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Work Guaranteed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Expert Instructors</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Professional carpentry training course with hands-on experience in Johannesburg"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-slate-800">100%</div>
                <div className="text-slate-600">Job Placement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Professional Training Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive carpentry training programs designed to give you real-world skills and guaranteed employment
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Basic Carpentry Course</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Foundation course covering essential carpentry skills, tool usage, and safety procedures.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Tool identification & usage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Wood types & materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Basic joinery techniques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Safety procedures
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">4 Weeks</div>
                  <div className="text-slate-600">Duration</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium text-center mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Kitchen Installation Specialist</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Advanced training in kitchen renovations, cabinet installation, and countertop fitting.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Kitchen design principles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cabinet installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Countertop templating
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Plumbing & electrical basics
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">8 Weeks</div>
                  <div className="text-slate-600">Duration</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Master Craftsman Program</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Comprehensive program covering all aspects of professional carpentry and business skills.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Advanced joinery techniques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Project management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Business development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality control
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">12 Weeks</div>
                  <div className="text-slate-600">Duration</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Why Choose Our Training Program?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Our carpentry training program is designed by professionals with years of industry experience, ensuring
                you learn practical skills that employers value.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Guaranteed Work Placement</h3>
                    <p className="text-slate-600">
                      100% job placement guarantee after successful completion of our training program.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Hands-on Experience</h3>
                    <p className="text-slate-600">
                      Real project work with actual clients, giving you genuine industry experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Expert Instructors</h3>
                    <p className="text-slate-600">
                      Learn from 5-star rated professionals with years of carpentry experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Flexible Scheduling</h3>
                    <p className="text-slate-600">
                      Weekend and evening classes available to fit your current schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Students learning carpentry skills in hands-on training environment"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Training Success Stories</h2>
            <p className="text-xl text-slate-600">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                150+
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Students Trained</h3>
              <p className="text-slate-600">Successfully completed our programs</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                100%
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Job Placement</h3>
              <p className="text-slate-600">Guaranteed work after completion</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5★
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Student Rating</h3>
              <p className="text-slate-600">Consistently rated 5 stars</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                R25k+
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Starting Salary</h3>
              <p className="text-slate-600">Average monthly earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Start Your Carpentry Career Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our professional carpentry training program and secure your future with guaranteed work placement.
            Contact us today for course details and pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <Link href="/contact">
                Enroll Now - Get Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call: 067 601 4490
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
