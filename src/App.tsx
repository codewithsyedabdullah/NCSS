import { useState } from "react";
import { ArrowUpRight, Award, Crown, X } from "lucide-react";

const navLinks = ["Projects", "Studio", "Offerings", "Inquire"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0b0e]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-30 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        <a href="#" className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
          VANGUARD
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-inter text-sm text-white/80 hover:text-white transition-colors tracking-widest uppercase"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase font-inter text-white/90 hover:bg-white/10 transition-all"
          >
            GET IN TOUCH
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="md:hidden flex flex-col items-end space-y-1.5"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-4 h-0.5 bg-white" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 lg:py-7">
          <span className="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider">
            VANGUARD
          </span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={24} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className="font-podium text-4xl sm:text-5xl text-white uppercase tracking-tight"
              style={{
                transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-xs tracking-widest uppercase font-inter text-white/90 mt-4"
            style={{
              transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            GET IN TOUCH
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-[calc(100vh-80px)] lg:h-[calc(100vh-96px)] flex items-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="w-full">
          {/* Tagline */}
          <div className="animate-fade-up mb-6 lg:mb-8">
            <div className="flex items-center gap-2">
              <Crown size={16} className="text-white/70" />
              <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase">
                World-Class Digital Collective
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-up-delay-1">
            <h1 className="font-podium text-white uppercase leading-[0.92] tracking-tight">
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Design.</span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">Conquer.</span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="animate-fade-up-delay-2 mt-6 lg:mt-8">
            <p className="text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md">
              We build fierce brand identities
              <br />
              that don't just turn heads --
              <br />
              <span className="text-white font-semibold">they lead.</span>
            </p>
          </div>

          {/* CTA Row */}
          <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 border border-white/10 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase font-inter text-white font-semibold transition-all"
            >
              SEE OUR WORK
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <div className="hidden sm:flex items-center gap-3">
              <Award size={32} className="text-white/50" />
              <div>
                <p className="text-white/60 text-xs tracking-wider uppercase font-inter font-medium">Top-Rated</p>
                <p className="text-white/60 text-xs tracking-wider uppercase font-inter">Brand Studio</p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
            {[
              { value: "250+", label: "Brands Transformed" },
              { value: "95%", label: "Client Retention" },
              { value: "10+", label: "Years in the Game" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase font-inter mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
