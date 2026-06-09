import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Careers", href: "careers.html", external: true },
  { label: "Stories", href: "ncssstories.html", external: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0b0e]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 lg:py-5">
        <a
          href="#"
          className="font-anton text-white uppercase text-[clamp(1.1rem,1.8vw,1.4rem)] tracking-[0.08em] font-normal"
        >
          NCSS
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className="font-inter text-[clamp(10px,0.7vw,12px)] text-white/60 hover:text-accent transition-colors tracking-[0.12em] uppercase font-medium inline-flex items-center gap-1"
            >
              {label}
              {external && <ArrowUpRight size={10} className="opacity-60" />}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="btn-filled-2 inline-flex items-center gap-1.5 px-5 py-2.5 text-[clamp(9px,0.65vw,11px)] tracking-[0.12em] uppercase font-inter font-bold"
          >
            Join NCSS
            <ArrowUpRight size={12} />
          </a>
        </div>

        <button
          className="md:hidden flex flex-col items-end space-y-1"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-white/80" />
          <span className="block w-6 h-px bg-white/80" />
          <span className="block w-4 h-px bg-white/80" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-[#0a0b0e]/98 backdrop-blur-lg transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-4 lg:py-5">
          <span className="font-anton text-white uppercase text-xl tracking-[0.08em]">NCSS</span>
          <button onClick={() => setOpen(false)}>
            <X size={20} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-72px)] gap-7">
          {links.map(({ label, href, external }, i) => (
            <a
              key={label}
              href={href}
              className="font-anton text-[clamp(2.5rem,6vw,4rem)] text-white uppercase tracking-tight hover:text-accent transition-colors inline-flex items-center gap-3"
              style={{
                transition: `opacity 0.4s ease-out, transform 0.4s ease-out`,
                transitionDelay: `${i * 60 + 80}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
              }}
              onClick={() => setOpen(false)}
            >
              {label}
              {external && <ArrowUpRight size={20} className="opacity-50" />}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-filled-2 inline-flex items-center gap-2 px-7 py-3.5 text-xs tracking-[0.12em] uppercase font-inter font-bold mt-3"
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
