import { useRef } from "react"
import { useInView } from "framer-motion"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#work" },
  { label: "Departments", href: "#services" },
  { label: "Join", href: "#cta" },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "YouTube", href: "#" },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="bg-black border-t border-white/5 py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid md:grid-cols-4 gap-10 mb-12"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="md:col-span-2">
            <p className="text-white font-bold tracking-widest text-sm uppercase mb-4">
              NCSS
            </p>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm">
              NUST Computer Science Society — empowering students to build,
              innovate, and lead through technology and community.
            </p>
          </div>

          <div>
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4">
              Navigation
            </p>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/30 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4">
              Social
            </p>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/30 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} NUST Computer Science Society. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="mailto:ncss@nust.edu.pk" className="text-white/20 text-xs hover:text-white/50 transition-colors">
              ncss@nust.edu.pk
            </a>
            <a href="#" className="text-white/20 text-xs hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
