import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Our Team" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  programs: [
    { href: "/projects#agriculture", label: "Agricultural Development" },
    { href: "/projects#economic", label: "Economic Empowerment" },
    { href: "/projects#education", label: "Education & Skills" },
    { href: "/projects#youth", label: "Youth & Women" },
    { href: "/projects#health", label: "Health & Sanitation" },
    { href: "/projects#environment", label: "Environmental Conservation" },
  ],
}

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <span className="font-serif text-xl font-bold text-primary-foreground">H</span>
              </div>
              <div>
                <span className="block font-serif text-lg font-semibold">
                  Harvest Bridge
                </span>
                <span className="text-sm text-background/70">
                  Development Initiative
                </span>
              </div>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-background/70">
              Empowering communities through sustainable development, education, and innovative agricultural practices.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Navigation</h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Our Programs</h3>
            <ul className="mt-6 space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold">Contact Info</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-background/70">
                  123 Development Avenue,<br />
                  Community District, CD 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-background/70">
                  +1 (234) 567-8900
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-background/70">
                  info@hbdi.org
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Harvest Bridge Development Initiative. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-background/50 hover:text-background">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-background/50 hover:text-background">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
