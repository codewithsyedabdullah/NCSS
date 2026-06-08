import { useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Homepage", href: "#" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-6 lg:px-10 pt-4 sm:pt-5 lg:pt-6 max-w-[1831px] mx-auto w-full">
      <a
        href="#"
        className="font-grotesk text-[clamp(0.9rem,1.8vw,1.2rem)] uppercase text-cream tracking-[2px] hover:text-neon transition-colors"
      >
        NCSS
      </a>

      <nav className="hidden lg:block liquid-glass rounded-[4px] px-[clamp(1.5rem,3vw,3.25rem)] py-[clamp(0.75rem,1.2vw,1.5rem)]">
        <ul className="flex items-center gap-[clamp(1rem,2vw,2rem)]">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-inter text-[clamp(10px,0.8vw,13px)] font-bold uppercase text-cream/80 hover:text-neon transition-colors tracking-[1px]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="lg:hidden liquid-glass w-10 h-10 rounded-[4px] flex items-center justify-center z-50 border border-white/10"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={18} className="text-cream" /> : <Menu size={18} className="text-cream" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#010828]/98 backdrop-blur-sm flex items-center justify-center lg:hidden">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-grotesk text-[clamp(1.5rem,5vw,2rem)] uppercase text-cream hover:text-neon transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
