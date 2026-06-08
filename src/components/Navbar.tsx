import { useState } from "react";
import { X } from "lucide-react";

const sections = ["Home", "About", "Departments", "Why", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-display text-white text-[clamp(0.9rem,1.5vw,1.2rem)] uppercase tracking-[0.15em] font-medium">
          NCSS
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {sections.map((s) => (
              <a
                key={s}
                href={s === "Home" ? "#" : `#${s.toLowerCase()}`}
                className="font-body text-[clamp(10px,0.75vw,12px)] text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                {s}
              </a>
            ))}
          </nav>
          <span className="w-px h-5 bg-white/10" />
          <a
            href="#contact"
            className="font-mono text-[clamp(9px,0.65vw,11px)] text-white/70 hover:text-white transition-colors uppercase tracking-[0.15em]"
          >
            Join_Us
          </a>
        </div>

        <button
          className="md:hidden flex flex-col items-end gap-1.5"
          onClick={() => setOpen(true)}
          aria-label="Menu"
        >
          <span className="block w-6 h-px bg-white/80" />
          <span className="block w-6 h-px bg-white/80" />
          <span className="block w-4 h-px bg-white/80" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 lg:py-7">
          <span className="font-display text-white text-lg uppercase tracking-[0.15em]">NCSS</span>
          <button onClick={() => setOpen(false)}>
            <X size={20} className="text-white" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8">
          {sections.map((s, i) => (
            <a
              key={s}
              href={s === "Home" ? "#" : `#${s.toLowerCase()}`}
              className="font-display text-[clamp(1.8rem,6vw,3rem)] text-white uppercase tracking-tight hover:text-white/60 transition-colors"
              style={{
                transition: `opacity 0.4s ease-out, transform 0.4s ease-out`,
                transitionDelay: `${i * 60 + 80}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
              }}
              onClick={() => setOpen(false)}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
