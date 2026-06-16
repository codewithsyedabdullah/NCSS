import { useState } from "react";

const links = [
  { label: "Departments", href: "#departments" },
  { label: "About", href: "#about" },
  { label: "Why NCSS", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`bx-header bx-theme-diff ${open ? "bx-open" : ""}`}>
        <div className="bx-header-inner">
          <a href="#" className="bx-logo">
            <svg viewBox="0 0 200 24" width="12.3rem" height="100%">
              <text x="0" y="20" fontSize="20" fontWeight="600" fill="currentColor" letterSpacing="-0.05em">NCSS</text>
            </svg>
          </a>
          <div
            className={`bx-menu-btn${open ? " bx-open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <div className="bx-menu-circle" />
            <div className="bx-menu-lines">
              <span className="bx-menu-line" />
              <span className="bx-menu-line" />
            </div>
          </div>
        </div>
      </header>

      <div className={`bx-overlay${open ? " open" : ""}`}>
        <div className="bx-overlay-inner">
          <div className="bx-overlay-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="bx-overlay-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
