import { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Clock, CheckCircle, Star, Shield, Hammer, Ruler, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "★★★★★ Best Barn Door Installation Johannesburg 2026 | Sliding Doors",
  description: "★★★★★ Professional barn door installation in Johannesburg. Custom sliding barn doors, rustic & modern designs. Space-saving solutions for homes & offices. FREE quotes & expert fitting.",
  keywords: "barn doors Johannesburg, sliding barn doors Johannesburg, barn door installation Johannesburg, rustic barn doors, modern barn doors, space saving doors Johannesburg, barn door hardware Johannesburg, custom barn doors",
  openGraph: {
    title: "Best Barn Door Installation Johannesburg 2026 | Granite Carpentry",
    description: "Professional barn door installation services in Johannesburg. Custom sliding barn doors, rustic & modern designs.",
    url: "https://granitecarpentry.co.za/barn-doors-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/barn-doors-johannesburg",
  },
}

export default function BarnDoorsJohannesburgPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">500+ Installations</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Barn Door Installation in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Transform your Johannesburg home with custom sliding barn doors. Expert installation of rustic & modern designs. Space-saving solutions that combine style with functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="text-lg h-14 px-8">
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8">
                <Link href="/contact">Get FREE Quote</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              <MapPin className="inline h-4 w-4 mr-1" />
              Serving All Johannesburg Areas | Same-Day Quotes | Professional Installation
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Barn Doors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Barn Doors for Your Johannesburg Home?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Barn doors have become one of the most popular interior design trends in Johannesburg homes and offices. These sliding doors offer the perfect combination of rustic charm and modern functionality, making them ideal for space-constrained areas where traditional swing doors simply don't work.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At Granite Carpentry, we specialize in professional barn door installation throughout Johannesburg, from Sandton to Soweto. Our expert team has completed over 500 barn door installations across the city, helping homeowners maximize their living space while adding a stunning design element to their interiors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <Card>
                <CardHeader>
                  <Hammer className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Space-Saving Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Perfect for tight spaces, barn doors slide along the wall instead of swinging open, saving valuable floor space in bedrooms, bathrooms, and closets.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Home className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Versatile Styling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From rustic farmhouse charm to sleek modern designs, barn doors complement any interior style. Choose from wood, glass, or metal finishes to match your décor.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Ruler className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Custom Fit Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every barn door we install is custom-measured and fitted to your specific doorway. We handle non-standard sizes and unique architectural features with ease.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Professional Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our certified installers ensure your barn door operates smoothly and safely. We use premium hardware and mounting systems for long-lasting performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Barn Door Services in Johannesburg</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Custom Barn Door Design & Manufacturing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We create custom barn doors tailored to your exact specifications and style preferences. Choose from a wide range of materials including solid wood, reclaimed timber, MDF with wood veneer, frosted glass panels, and metal-framed designs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rustic barn doors with authentic weathered finishes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Modern sliding doors with clean lines and contemporary hardware</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Transitional designs that blend traditional and modern elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Glass barn doors for bathrooms and offices requiring privacy with light</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Price Range: R3,500 - R15,000 (depending on size and materials)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Barn Door Installation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our expert installation team handles every aspect of your barn door project, from initial measurements to final adjustments. We ensure perfect alignment, smooth operation, and secure mounting that meets safety standards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Precise wall structure assessment and reinforcement if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Premium hardware installation including tracks, rollers, and handles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Floor guides and soft-close mechanisms for smooth operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Professional finishing and cleanup included</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Installation Cost: R1,500 - R3,500 (includes hardware and labour)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Barn Door Hardware & Track Systems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Quality hardware is essential for long-lasting barn door performance. We supply and install premium track systems, rollers, and accessories that ensure smooth, quiet operation for years to come.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Heavy-duty steel track systems rated for 100kg+ doors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ball bearing rollers for effortless sliding action</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Designer handles and pulls in multiple finishes (black, brushed nickel, bronze)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Soft-close dampers and privacy locks available</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Hardware Price Range: R1,200 - R4,500</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Barn Door Repairs & Maintenance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Keep your barn doors operating smoothly with our repair and maintenance services. We fix sticking doors, replace worn hardware, adjust tracks, and restore damaged wood finishes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Track realignment and leveling services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Roller and bearing replacements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Wood refinishing and damage repair</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hardware upgrades and improvements</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Repair Costs: From R650</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Johannesburg Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Barn Door Installation Across Johannesburg</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We provide professional barn door installation services throughout Johannesburg and surrounding areas. Our mobile team serves all suburbs with same-day quotes and fast installation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Sandton", "Rosebank", "Parktown", "Bryanston", "Randburg",
                "Melville", "Parkhurst", "Northcliff", "Greenside", "Craighall",
                "Houghton", "Saxonwold", "Westcliff", "Atholl", "Hyde Park",
                "Illovo", "Sandhurst", "Morningside", "Rivonia", "Sunninghill"
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 text-muted-foreground">
              Don't see your area? We serve all Johannesburg suburbs. <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> for service in your location.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How much does barn door installation cost in Johannesburg?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete barn door installation in Johannesburg typically costs between R5,000 and R18,500. This includes the custom door (R3,500-R15,000), hardware and track system (R1,200-R4,500), and professional installation (R1,500-R3,500). Prices vary based on door size, material choice, and hardware quality. We provide detailed quotes with no hidden fees.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's the difference between rustic and modern barn doors?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Rustic barn doors feature weathered wood finishes, visible grain patterns, traditional hardware with aged finishes, and often include decorative X or Z patterns. Modern barn doors have sleek, clean lines, smooth painted or stained finishes, minimalist hardware in contemporary finishes like matte black, and may incorporate glass panels or metal frames. Both styles slide on tracks but create completely different aesthetics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How long does barn door installation take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most barn door installations in Johannesburg homes take 3-5 hours for a single door, including track mounting, door hanging, and hardware adjustment. Custom door manufacturing takes 1-2 weeks depending on design complexity. We'll provide a detailed timeline during your consultation and work efficiently to minimize disruption to your home.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can barn doors be used for bathrooms?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, barn doors work well for bathrooms with proper privacy solutions. We recommend solid wood doors for complete privacy, frosted glass panels that allow light while blocking visibility, privacy locks that secure the door when closed, and proper sealing to minimize sound and light gaps. Many Johannesburg homeowners choose barn doors for guest bathrooms and powder rooms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What wall types can support barn doors?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Barn doors require solid wall mounting for safety. Brick walls (common in Johannesburg homes) are ideal and provide excellent support. Drywall installations require finding studs or installing blocking between studs. Concrete walls need specialized anchoring systems. Our installers assess your wall structure and reinforce if necessary to ensure safe, secure mounting that meets building standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you provide warranties on barn door installations?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide comprehensive warranties: 5-year warranty on custom barn doors covering manufacturing defects, 3-year warranty on hardware and track systems, 2-year warranty on installation workmanship, and lifetime support for adjustments and maintenance guidance. We stand behind our work and use only quality materials that last.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can you match existing doors or woodwork?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We specialize in custom matching. Bring us a wood sample or photo, and we'll match stain colors, wood species, and finish styles to blend seamlessly with your existing interior. This ensures your new barn door looks like it was always part of your Johannesburg home's original design.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What maintenance do barn doors require?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Barn doors are low-maintenance. Clean tracks monthly to remove dust and debris, wipe door surfaces with appropriate cleaner for the finish, check roller tightness every 6 months, apply lubricant to rollers annually for smooth operation, and inspect hardware for loose screws or wear. Most barn doors operate smoothly for years with minimal care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Other Door Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/barn-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Barn Door Installation</h3>
                <p className="text-sm text-muted-foreground">Complete guide to barn door styles and installation</p>
              </Link>
              <Link href="/barn-doors-sandton" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Barn Doors Sandton</h3>
                <p className="text-sm text-muted-foreground">Premium barn door installation in Sandton</p>
              </Link>
              <Link href="/pivot-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Pivot Door Installation</h3>
                <p className="text-sm text-muted-foreground">Modern pivot doors for grand entrances</p>
              </Link>
              <Link href="/security-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Security Door Installation</h3>
                <p className="text-sm text-muted-foreground">Secure your Johannesburg home with professional security doors</p>
              </Link>
              <Link href="/french-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">French Door Installation</h3>
                <p className="text-sm text-muted-foreground">Elegant French doors for patios and gardens</p>
              </Link>
              <Link href="/door-installation" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">All Door Services</h3>
                <p className="text-sm text-muted-foreground">Complete range of door installation services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Johannesburg Home with Barn Doors?</h2>
            <p className="text-xl mb-8 text-white/90">
              Get your FREE consultation and quote today. Our barn door experts are ready to help you create the perfect space-saving solution with stunning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg h-14 px-8">
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8 bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Request FREE Quote</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/80">
              <Clock className="inline h-4 w-4 mr-1" />
              Same-day quotes • Professional installation • 5-year warranty
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
