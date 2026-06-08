import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Why NCSS", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0b0e]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 lg:py-5">
        <a
          href="#"
          className="font-anton text-white uppercase text-xl sm:text-2xl tracking-wider"
        >
          NCSS
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-inter text-[11px] text-white/70 hover:text-accent transition-colors tracking-widest uppercase font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 border border-accent/50 text-accent px-5 py-2.5 text-[10px] tracking-widest uppercase font-inter font-bold hover:bg-accent/10 transition-all"
          >
            Join NCSS
            <ArrowUpRight size={12} />
          </a>
        </div>

        <button
          className="md:hidden flex flex-col items-end space-y-1.5"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-[2px] bg-white/80" />
          <span className="block w-6 h-[2px] bg-white/80" />
          <span className="block w-4 h-[2px] bg-white/80" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-[#0a0b0e]/98 backdrop-blur-lg transition-all duration-400 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-4 lg:py-5">
          <span className="font-anton text-white uppercase text-xl sm:text-2xl tracking-wider">
            NCSS
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={22} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-72px)] gap-7">
          {links.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className="font-anton text-4xl sm:text-5xl text-white uppercase tracking-tight hover:text-accent transition-colors"
              style={{
                transition: `opacity 0.4s ease-out, transform 0.4s ease-out`,
                transitionDelay: `${i * 60 + 80}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
              }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-accent/50 text-accent px-7 py-3.5 text-xs tracking-widest uppercase font-inter font-bold mt-3"
            style={{
              transition: `opacity 0.4s ease-out, transform 0.4s ease-out`,
              transitionDelay: `${links.length * 60 + 80}ms`,
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(16px)",
            }}
            onClick={() => setOpen(false)}
          >
            Join NCSS
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
