"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Users, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionWrapper, FadeIn, StaggerContainer, StaggerItem } from "@/components/section-wrapper"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every community with empathy and genuine care for their wellbeing.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We believe in equal opportunities for all, regardless of gender, age, or background.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in all our programs and initiatives.",
  },
  {
    icon: Target,
    title: "Sustainability",
    description: "We focus on long-term solutions that communities can maintain independently.",
  },
]

const milestones = [
  {
    year: "2026",
    title: "Foundation",
    description: "HBDI was established and began laying the groundwork for future programs and partnerships.",
  },
  {
    year: "2026",
    title: "Listening & Planning",
    description: "Our early focus is on understanding community priorities and shaping practical program plans.",
  },
  {
    year: "2026",
    title: "Operational Setup",
    description: "We are building the systems, relationships, and structures needed to start responsibly.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">Our Beginning</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Harvest Bridge Development Initiative is a new organization building the foundation
                for future community-based programs.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* History Section */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn direction="left">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src="/images/community-gathering.jpg"
                      alt="Community members at a gathering"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="right" delay={0.2}>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Our History
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                  <span className="text-balance">Building the Foundation Since 2026</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Harvest Bridge Development Initiative (HBDI) was established in 2026 in response to 
                    persistent challenges faced by communities, particularly smallholder farmers 
                    and vulnerable groups.
                  </p>
                  <p className="leading-relaxed">
                    These challenges include poverty, low agricultural productivity, limited access 
                    to modern farming knowledge, climate change impacts, weak market linkages, 
                    youth unemployment, and gender inequality.
                  </p>
                  <p className="leading-relaxed">
                    The organization was created to help bridge gaps in resources, knowledge, opportunities, 
                    and markets through thoughtful planning, partnership building, and future program development.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </SectionWrapper>

        {/* Vision & Mission */}
        <SectionWrapper className="bg-primary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <FadeIn>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Eye className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
                      Our Vision
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-primary-foreground/90">
                      A thriving society where empowered communities enjoy sustainable livelihoods, 
                      equitable opportunities, and long-term prosperity through inclusive and 
                      climate-smart development.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Target className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
                      Our Mission
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-primary-foreground/90">
                      To foster sustainable development by empowering communities through education, 
                      skills acquisition, economic empowerment, and innovative agricultural practices 
                      that improve livelihoods and promote self-reliance for all people.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </SectionWrapper>

        {/* Core Values */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                What Guides Us
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                These principles shape every decision we make and every program we implement.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Timeline */}
        <SectionWrapper className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Journey
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Key Milestones
              </h2>
            </FadeIn>

            <div className="mt-16">
              <StaggerContainer className="relative" staggerDelay={0.15}>
                <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
                
                {milestones.map((milestone, index) => (
                  <StaggerItem key={milestone.year}>
                    <div className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                      <div className={`hidden w-1/2 md:block ${
                        index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                      }`}>
                        <div className="inline-block rounded-xl bg-card p-6 shadow-sm">
                          <h3 className="font-serif text-xl font-semibold text-foreground">
                            {milestone.title}
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                        <Calendar className="h-4 w-4" />
                      </div>
                      
                      <div className={`flex-1 md:hidden md:w-1/2 ${
                        index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                      }`}>
                        <span className="text-sm font-bold text-primary">{milestone.year}</span>
                        <div className="mt-2 rounded-xl bg-card p-6 shadow-sm">
                          <h3 className="font-serif text-xl font-semibold text-foreground">
                            {milestone.title}
                          </h3>
                          <p className="mt-2 text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className={`hidden w-1/2 items-center md:flex ${
                        index % 2 === 0 ? "justify-start pl-12" : "justify-end pr-12"
                      }`}>
                        <span className="font-serif text-2xl font-bold text-primary">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                <span className="text-balance">Want to Learn More?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Discover how our programs are making a difference in communities and 
                how you can be part of the change.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/projects">
                    View Our Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="/team">Meet Our Team</Link>
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
