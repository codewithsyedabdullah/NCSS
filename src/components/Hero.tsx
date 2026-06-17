import { useEffect, useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#work" },
  { label: "Departments", href: "#services" },
  { label: "Join", href: "#cta" },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920"
      >
        <source
          src="https://d1p3kzq8vvhllu.cloudfront.net/hero-bg.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-white font-bold tracking-widest text-sm uppercase">
            NCSS
          </span>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm tracking-wider uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white/90 transition-all"
            >
              Get Involved
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl tracking-widest uppercase hover:text-white/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-white text-black px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase"
          >
            Get Involved
          </a>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          NUST Computer Science Society
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white leading-none mb-6 animate-slide-up">
          Build.
          <br />
          Innovate.
          <span className="text-[#dc2626]"> Lead.</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl mb-10 animate-fade-in animation-delay-300">
          The official computing society of NUST — a community of builders,
          creators, and problem solvers shaping the future through technology.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in animation-delay-600">
          <a
            href="#cta"
            className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white/90 transition-all inline-flex items-center gap-2"
          >
            Join NCSS
            <ArrowRight size={16} />
          </a>
          <a
            href="#work"
            className="border border-white/30 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase hover:bg-white/10 transition-all"
          >
            Our Events
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-16 animate-fade-in animation-delay-1000">
          <div className="text-center">
            <p className="text-white text-2xl font-bold">500+</p>
            <p className="text-white/40 text-xs tracking-widest uppercase">Members</p>
          </div>
          <div className="text-center">
            <p className="text-white text-2xl font-bold">15+</p>
            <p className="text-white/40 text-xs tracking-widest uppercase">Years</p>
          </div>
          <div className="text-center">
            <p className="text-white text-2xl font-bold">50+</p>
            <p className="text-white/40 text-xs tracking-widest uppercase">Events</p>
          </div>
        </div>
      </div>
    </section>
  )
}
