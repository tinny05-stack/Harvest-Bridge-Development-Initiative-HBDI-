"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionWrapper, FadeIn, StaggerContainer, StaggerItem } from "@/components/section-wrapper"

const featuredPost = {
  slug: "launching-hbdi-our-first-steps",
  title: "Launching HBDI: Our First Steps",
  excerpt: "A look at how we are building the foundation for future programs through planning, partnerships, and community listening.",
  image: "/images/blog/sustainable-farming.jpg",
  author: "David Okonkwo",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "Agriculture",
}

const blogPosts = [
  {
    slug: "shaping-womens-economic-programs",
    title: "Shaping Future Economic Programs for Women",
    excerpt: "Early ideas and priorities guiding the economic empowerment work we hope to launch.",
    image: "/images/blog/women-entrepreneurs.jpg",
    author: "Grace Mensah",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Empowerment",
  },
  {
    slug: "youth-digital-literacy-program",
    title: "Planning Youth Digital Literacy Support",
    excerpt: "How we are thinking about relevant digital skills for young people in the communities we hope to serve.",
    image: "/images/blog/youth-digital.jpg",
    author: "Amara Diallo",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Education",
  },
  {
    slug: "climate-smart-agriculture-guide",
    title: "Why Climate-Smart Agriculture Matters",
    excerpt: "An introduction to the practices influencing our future agriculture programming.",
    image: "/images/hero-agriculture.jpg",
    author: "Samuel Adeyemi",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Agriculture",
  },
  {
    slug: "community-health-initiatives",
    title: "Considering Community Health Priorities",
    excerpt: "A look at the health and sanitation themes informing our early planning.",
    image: "/images/community-gathering.jpg",
    author: "Fatima Abebe",
    date: "February 20, 2024",
    readTime: "5 min read",
    category: "Health",
  },
  {
    slug: "partnership-announcement-2024",
    title: "Building the Partnerships We Need",
    excerpt: "Why strong local relationships are essential as we prepare for future program work.",
    image: "/images/women-empowerment.jpg",
    author: "David Okonkwo",
    date: "February 15, 2024",
    readTime: "4 min read",
    category: "News",
  },
  {
    slug: "future-youth-skills-pathways",
    title: "Future Pathways for Youth Skills Development",
    excerpt: "The kinds of practical training pathways we want to explore as the organization grows.",
    image: "/images/youth-training.jpg",
    author: "Amara Diallo",
    date: "February 10, 2024",
    readTime: "6 min read",
    category: "Youth",
  },
]

const categories = ["All", "Agriculture", "Empowerment", "Education", "Health", "News", "Youth"]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Blog
              </span>
              <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">Updates, Ideas & Early Planning</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Insights, updates, and planning notes from a new organization preparing its first programs.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Categories */}
        <SectionWrapper className="border-b border-border py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Featured Post */}
        <SectionWrapper className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {featuredPost.category}
                    </span>
                    <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                      <span className="text-balance">{featuredPost.title}</span>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="mt-6 rounded-full" variant="outline">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </SectionWrapper>

        {/* Blog Posts Grid */}
        <SectionWrapper className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Latest Articles
              </h2>
            </FadeIn>

            <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {blogPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm transition-shadow hover:shadow-md">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-serif text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                          <span className="text-balance">{post.title}</span>
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4} className="mt-12 text-center">
              <Button variant="outline" className="rounded-full px-8">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </FadeIn>
          </div>
        </SectionWrapper>

        {/* Newsletter CTA */}
        <SectionWrapper className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                <span className="text-balance">Stay Updated</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Get the latest updates, stories, and insights from HBDI delivered to your inbox.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="/contact">
                    Subscribe to Updates
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
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
