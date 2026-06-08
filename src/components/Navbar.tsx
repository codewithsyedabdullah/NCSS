import { useState } from "react";
import { X, Menu } from "lucide-react";

const links = [
  { label: "Homepage", href: "#" },
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6">
      <nav className="liquid-glass rounded-[28px] px-8 sm:px-[52px] py-3 sm:py-[18px] inline-flex items-center">
        <ul className="flex items-center gap-5 sm:gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-grotesk text-[11px] sm:text-[13px] uppercase text-cream/80 hover:text-neon transition-colors tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="lg:hidden liquid-glass w-10 h-10 rounded-[1rem] flex items-center justify-center ml-3"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={18} className="text-cream" /> : <Menu size={18} className="text-cream" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-30 bg-[#010828]/95 flex items-center justify-center lg:hidden">
          <ul className="flex flex-col items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-grotesk text-[22px] uppercase text-cream hover:text-neon transition-colors"
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
