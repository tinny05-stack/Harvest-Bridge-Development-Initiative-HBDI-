"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionWrapper, FadeIn, StaggerContainer, StaggerItem } from "@/components/section-wrapper"

const leadership = [
  {
    name: "David Okonkwo",
    role: "Executive Director",
    image: "/images/team/member-1.jpg",
    bio: "David provides strategic direction for HBDI as the organization builds its foundation and prepares for future community-based work.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Grace Mensah",
    role: "Program Director",
    image: "/images/team/member-2.jpg",
    bio: "Grace helps shape HBDI's program direction, planning systems and partnerships for the work ahead.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

const teamMembers = [
  {
    name: "Samuel Adeyemi",
    role: "Agricultural Programs Manager",
    image: "/images/team/member-3.jpg",
    bio: "Samuel contributes to the design of HBDI's future agricultural programming and farmer support approach.",
  },
  {
    name: "Amara Diallo",
    role: "Youth & Women Programs Coordinator",
    image: "/images/team/member-4.jpg",
    bio: "Amara helps develop inclusive ideas for future youth and women-focused programming.",
  },
  {
    name: "Emmanuel Nwachukwu",
    role: "Finance & Operations Manager",
    image: "/images/team/member-5.jpg",
    bio: "Emmanuel ensures our resources are managed efficiently and transparently.",
  },
  {
    name: "Fatima Abebe",
    role: "Community Outreach Manager",
    image: "/images/team/member-6.jpg",
    bio: "Fatima supports relationship-building with communities and prospective partners as the organization grows.",
  },
]

export default function TeamPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Team
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">The People Behind Our Mission</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Meet the people helping shape HBDI as it prepares for its first phase of work.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Leadership */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Leadership
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Our Leadership Team
              </h2>
            </FadeIn>

            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {leadership.map((leader, index) => (
                <FadeIn key={leader.name} delay={index * 0.2}>
                  <div className="group relative overflow-hidden rounded-2xl bg-card shadow-sm">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {leader.name}
                      </h3>
                      <p className="mt-1 font-medium text-primary">{leader.role}</p>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {leader.bio}
                      </p>
                      <div className="mt-6 flex gap-4">
                        <a
                          href={leader.social.linkedin}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label={`${leader.name} LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={leader.social.twitter}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                          aria-label={`${leader.name} Twitter`}
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Team Members */}
        <SectionWrapper className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Team
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Meet the Team
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Our dedicated team members bring diverse skills and experiences to drive our mission forward.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
              {teamMembers.map((member) => (
                <StaggerItem key={member.name}>
                  <div className="group text-center">
                    <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionWrapper>

        {/* Join Us CTA */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                <span className="text-balance">Join Our Team</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                {`We're always looking for passionate individuals who share our commitment to 
                community empowerment. Check out our current opportunities or reach out to learn more.`}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
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
