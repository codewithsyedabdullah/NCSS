import { useState } from "react";

const links = [
  { label: "Work", href: "#departments" },
  { label: "Profile", href: "#about" },
  { label: "Workshop", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "IG", href: "#" },
  { label: "X", href: "#" },
  { label: "LI", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={`bx-header bx-theme-diff ${open ? "bx-open" : ""}`}>
        <div className="bx-header-inner">
          <a href="#" className="bx-logo">
            <svg viewBox="0 0 120 24" width="12.3rem" height="100%">
              <text x="0" y="20" fontSize="20" fontWeight="600" fill="currentColor" letterSpacing="-0.05em">BUTTERMAX</text>
            </svg>
          </a>

          <div className="flex items-center gap-6">
            <div
              className={`bx-menu-btn${open ? " open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <div className="bx-menu-circle" />
              <div className="bx-menu-lines">
                <span className="bx-menu-line" />
                <span className="bx-menu-line" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`bx-overlay${open ? " open" : ""}`}>
        <div className="bx-overlay-inner">
          <div className="flex flex-col items-end gap-8">
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

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end" style={{ mixBlendMode: "difference" }}>
            <div className="bx-footer-copy">NCSS. All rights reserved.</div>
            <div className="bx-footer-links">
              {socialLinks.map((l) => (
                <a key={l.label} href={l.href} className="bx-footer-link">
                  {l.label}
                  <span className="bx-arrow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
