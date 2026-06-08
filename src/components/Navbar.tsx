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
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-6 lg:px-10 pt-6 max-w-[1831px] mx-auto w-full">
      <a href="#" className="font-grotesk text-[16px] uppercase text-cream tracking-wide">
        NCSS
      </a>

      <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
        <ul className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="lg:hidden liquid-glass w-10 h-10 rounded-[1rem] flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={18} className="text-cream" /> : <Menu size={18} className="text-cream" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#010828]/95 flex items-center justify-center lg:hidden">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-grotesk text-[24px] uppercase text-cream hover:text-neon transition-colors"
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
