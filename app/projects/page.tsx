"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sprout, TrendingUp, GraduationCap, Users, Heart, Leaf, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionWrapper, FadeIn, StaggerContainer, StaggerItem } from "@/components/section-wrapper"

const projects = [
  {
    id: "agriculture",
    icon: Sprout,
    title: "Agricultural Development and Agribusiness Support",
    description: "We empower farmers with sustainable and climate-smart agricultural practices that improve productivity while protecting the environment.",
    image: "/images/hero-agriculture.jpg",
    features: [
      "Promotion of sustainable and climate-smart agricultural practices",
      "Training in modern farming techniques",
      "Agribusiness development and value addition",
      "Linking farmers to reliable markets",
    ],
    impact: "5,000+ farmers trained",
  },
  {
    id: "economic",
    icon: TrendingUp,
    title: "Economic Empowerment and Income Generation",
    description: "We support communities in building sustainable livelihoods through income-generating activities and entrepreneurship training.",
    image: "/images/women-empowerment.jpg",
    features: [
      "Support for income-generating activities",
      "Entrepreneurship and business skills training",
      "Household and community economic empowerment",
      "Access to microfinance and credit facilities",
    ],
    impact: "2,000+ businesses supported",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education, Skills and Capacity Building",
    description: "We provide comprehensive education and training programs that equip individuals with skills for sustainable employment.",
    image: "/images/youth-training.jpg",
    features: [
      "Vocational training and skills acquisition",
      "Leadership development programs",
      "Digital literacy and education access",
      "Community mentorship and training",
    ],
    impact: "3,000+ people trained",
  },
  {
    id: "youth",
    icon: Users,
    title: "Youth and Women Empowerment",
    description: "We run targeted programs that specifically address the unique challenges faced by youth and women in our communities.",
    image: "/images/women-empowerment.jpg",
    features: [
      "Targeted programs for women and youth",
      "Employment creation and entrepreneurship support",
      "Promotion of gender equality and inclusion",
      "Leadership and mentorship programs",
    ],
    impact: "1,500+ women empowered",
  },
  {
    id: "health",
    icon: Heart,
    title: "Health, Sanitation and Social Welfare",
    description: "We promote health awareness and implement sanitation initiatives that improve the overall wellbeing of communities.",
    image: "/images/community-gathering.jpg",
    features: [
      "Health awareness programs",
      "Sanitation initiatives",
      "Social welfare support services",
      "Community health education",
    ],
    impact: "20+ communities reached",
  },
  {
    id: "environment",
    icon: Leaf,
    title: "Environmental Conservation and Climate Action",
    description: "We advocate for environmental protection and implement climate-smart solutions for sustainable resource management.",
    image: "/images/hero-agriculture.jpg",
    features: [
      "Environmental protection advocacy",
      "Climate-smart agriculture promotion",
      "Responsible natural resource management",
      "Tree planting and reforestation",
    ],
    impact: "10,000+ trees planted",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Projects
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">Programs That Transform Lives</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Discover our comprehensive programs designed to create sustainable impact 
                across agriculture, education, economic empowerment, and environmental conservation.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Projects Grid */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  id={project.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                    <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                      <div className="relative">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg sm:-bottom-6 sm:-right-6 sm:h-24 sm:w-24">
                          <project.icon className="h-10 w-10 sm:h-12 sm:w-12" />
                        </div>
                      </div>
                    </FadeIn>
                    
                    <FadeIn direction={index % 2 === 0 ? "right" : "left"} delay={0.2}>
                      <div className={index % 2 === 1 ? "lg:order-first" : ""}>
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                          <span className="text-sm font-semibold text-primary">
                            {project.impact}
                          </span>
                        </div>
                        <h2 className="mt-6 font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                          <span className="text-balance">{project.title}</span>
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        
                        <ul className="mt-8 space-y-3">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="bg-primary py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
                <span className="text-balance">Partner With Us</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
                Together, we can expand our reach and create lasting change in more communities. 
                Join us as a partner, donor, or volunteer.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-primary-foreground/30 px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
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
