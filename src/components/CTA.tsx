import { ArrowUpRight, Mail } from "lucide-react";
import useReveal from "../hooks/useReveal";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:info@ncss.edu.pk",
    label: "Email",
  },
  {
    svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    href: "https://x.com/ncss",
    label: "X",
  },
  {
    svg: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
    href: "https://github.com/ncss",
    label: "GitHub",
  },
];

export default function CTA() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="contact" style={{ position: "relative", padding: "8rem 3rem 10rem", background: "#101010" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          <div>
            <div className="bx-tag" style={{ color: "#ffd600", marginBottom: "1.5rem" }}>Get Involved</div>
            <h2 className="bx-hero-headline" style={{ fontSize: "clamp(2rem,5vw,4rem)", color: "#fff", letterSpacing: "-0.06em", lineHeight: "0.92" }}>
              Ready to
              <br />
              <span style={{ color: "#ffd600" }}>Join Us?</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem,1.1vw,1.1rem)", lineHeight: 1.6, color: "#868686", maxWidth: "32rem", margin: "1.5rem 0" }}>
              Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place for you at NCSS.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a href="mailto:info@ncss.edu.pk" className="btn-bx btn-bx-theme--brand">
                <span>Contact Us</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="careers.html" className="btn-bx btn-bx-theme--brand">
                <span>Open Positions</span>
              </a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="bx-tag" style={{ color: "#868686", marginBottom: "1rem" }}>Connect</div>
            <div style={{ border: "1px solid rgba(255,255,255,0.06)", padding: "2.5rem" }}>
              <p style={{ fontSize: "clamp(0.85rem,0.9vw,0.9rem)", color: "#868686", marginBottom: "1rem" }}>Follow us for updates on events, workshops, and more.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", fontSize: "clamp(0.625rem,0.65vw,0.75rem)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "border-color 0.3s, color 0.3s" }}
                    aria-label={link.label}
                  >
                    {link.icon ? <link.icon size={14} /> : <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">{link.svg}</svg>}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.06)", padding: "2.5rem" }}>
              <p style={{ fontSize: "clamp(1rem,1.3vw,1.25rem)", fontWeight: 600, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff", marginBottom: "0.375rem" }}>NUST Computer Science Society</p>
              <p style={{ fontSize: "clamp(0.625rem,0.65vw,0.75rem)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#868686" }}>&copy; {new Date().getFullYear()} NCSS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
