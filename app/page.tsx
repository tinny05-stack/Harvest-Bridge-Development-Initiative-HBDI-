"use client"

import Link from "next/link"
import {
  ArrowRight,
  Sprout,
  Users,
  BookOpen,
  TrendingUp,
  Heart,
  Target,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  SectionWrapper,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/section-wrapper"

const impactAreas = [
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Training farmers in climate-smart farming techniques that increase yields while protecting the environment.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "Building local capacity and leadership to drive long-term development from within communities.",
  },
  {
    icon: BookOpen,
    title: "Education & Training",
    description:
      "Providing access to knowledge, skills training, and resources for farmers and youth.",
  },
  {
    icon: TrendingUp,
    title: "Market Access",
    description:
      "Connecting farmers to markets, fair pricing, and sustainable supply chains.",
  },
]

const stats = [
  { value: "2026", label: "Founded" },
  { value: "5+", label: "Program Areas" },
  { value: "100%", label: "Community-Led" },
  { value: "∞", label: "Potential" },
]

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Harvest Bridge Development Initiative
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">
                  Building Bridges to Sustainable Communities
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Empowering farmers and communities through sustainable
                agriculture, education, and economic development across Africa.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/projects">
                    Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center">
                    <div className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Impact Areas */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                What We Do
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Our Focus Areas
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We work across multiple interconnected areas to create lasting
                change in communities.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {impactAreas.map((area) => (
                <StaggerItem key={area.title}>
                  <div className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <area.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Mission Preview */}
        <SectionWrapper className="bg-primary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <FadeIn direction="left">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                  Our Mission
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl">
                  Fostering Sustainable Development Through Community Empowerment
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                  To foster sustainable development by empowering communities
                  through education, skills acquisition, economic empowerment,
                  and innovative agricultural practices that improve livelihoods
                  and promote self-reliance.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary-foreground/80" />
                  <span className="text-primary-foreground/90">
                    Compassion at the core
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary-foreground/80" />
                  <span className="text-primary-foreground/90">
                    Targeted, practical programs
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <Leaf className="h-5 w-5 text-primary-foreground/80" />
                  <span className="text-primary-foreground/90">
                    Climate-smart solutions
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div className="rounded-2xl bg-primary-foreground/10 p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                    Get Involved
                  </h3>
                  <p className="mt-4 text-primary-foreground/90">
                    Whether you are a farmer, partner organization, volunteer,
                    or donor — there is a place for you in our mission to build
                    sustainable communities.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="mt-6 rounded-full px-8"
                  >
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  )
}
