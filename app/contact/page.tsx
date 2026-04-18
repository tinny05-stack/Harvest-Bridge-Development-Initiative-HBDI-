"use client"

import Link from "next/link"
import { MapPin, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionWrapper, FadeIn, StaggerContainer, StaggerItem } from "@/components/section-wrapper"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Songea, Tanzania",
      "P.O. Box 14",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+255 136 531 83",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed",
    ],
  },
]

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
]

const contactMethods = [
  {
    name: "Phone",
    value: "+255 136 531 83",
    href: "tel:+25513653183",
    description: "Use our main phone number for all current inquiries.",
  },
  {
    name: "Location",
    value: "Songea, Tanzania",
    description: "Our organization is based in Songea, Tanzania.",
  },
  {
    name: "Postal Address",
    value: "P.O. Box 14",
    description: "Use this postal address for official correspondence.",
  },
  {
    name: "Office Hours",
    value: "Monday - Friday: 8:00 AM - 5:00 PM",
    description: "We are generally available during weekday office hours.",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Contact Us
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">Get In Touch</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {`We'd love to hear from you. Whether you have questions about our programs, 
                want to partner with us, or are interested in volunteering, reach out to us.`}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Info Cards */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
              {contactInfo.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-md">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <div className="mt-4 space-y-1">
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Contact Methods */}
        <SectionWrapper className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Contact Details
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Ways to Reach Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Use the same official contact details below wherever you connect with HBDI.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {contactMethods.map((method) => (
                <StaggerItem key={method.name}>
                  <div className="h-full rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {method.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {method.description}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <Phone className="h-4 w-4" />
                        {method.value}
                      </a>
                    ) : (
                      <p className="mt-4 text-sm font-medium text-primary">
                        {method.value}
                      </p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Social Media */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Follow Us
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Connect on Social Media
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Stay updated with our latest announcements and organizational updates by following us on social media.
              </p>
              
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 transition-all hover:border-primary hover:bg-primary/5"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="font-medium text-foreground">{social.label}</span>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </SectionWrapper>

        {/* Map Section */}
        <SectionWrapper className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Our Location
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  <span className="text-balance">Visit Our Office</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our doors are always open for community members, partners, and anyone interested 
                  in learning more about our work. Stop by during office hours or schedule an appointment.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        Songea, Tanzania, P.O. Box 14
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Office Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <Button asChild className="mt-8 rounded-full px-6">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <div className="flex h-full w-full items-center justify-center bg-primary/5">
                    <div className="text-center">
                      <MapPin className="mx-auto h-12 w-12 text-primary/40" />
                      <p className="mt-4 font-medium text-muted-foreground">
                        Office Location
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        Songea, Tanzania
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="bg-primary py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
                <span className="text-balance">Ready to Make an Impact?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
                Whether you want to volunteer, donate, or partner with us, we welcome your support 
                in our mission to empower communities.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                  <Link href="/projects">
                    View Our Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary-foreground/30 px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  )
}
