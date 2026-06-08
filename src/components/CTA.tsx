import { ArrowUpRight, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:info@ncss.edu.pk",
    label: "Email",
  },
  {
    svg: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    href: "https://x.com/ncss",
    label: "X",
  },
  {
    svg: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
    href: "https://github.com/ncss",
    label: "GitHub",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.25em]">
                [05]
              </span>
              <span className="w-8 sm:w-12 h-px bg-white/10" />
              <span className="font-mono text-[clamp(9px,0.7vw,11px)] text-white/40 uppercase tracking-[0.2em]">
                Connect
              </span>
            </div>
            <h2 className="font-display text-white uppercase leading-[0.85] tracking-tighter text-[clamp(2rem,5vw,3.5rem)] mb-6">
              Ready to
              <br />
              <span className="text-white/60">Join Us?</span>
            </h2>
            <p className="font-body text-[clamp(0.85rem,1vw,1rem)] text-white/50 leading-relaxed max-w-md font-light mb-8">
              Whether you&apos;re a seasoned developer or just starting out, there&apos;s a place for you at NCSS.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@ncss.edu.pk"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-6 py-3.5 text-[clamp(10px,0.7vw,12px)] tracking-[0.2em] uppercase font-body font-medium transition-all"
              >
                Contact Us
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#departments"
                className="font-mono text-[clamp(9px,0.65vw,11px)] text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                View_Departments →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 space-y-4">
            <div className="glass p-6 sm:p-8">
              <p className="font-body text-[clamp(0.8rem,0.85vw,0.9rem)] text-white/50 font-light mb-5">
                Follow us on social media for updates on events, workshops, and more.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 px-4 py-3 text-[clamp(9px,0.6vw,11px)] tracking-[0.15em] uppercase font-mono text-white/50 hover:text-white transition-all"
                    aria-label={link.label}
                  >
                    {link.icon ? (
                      <link.icon size={13} />
                    ) : (
                      <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor">
                        {link.svg}
                      </svg>
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-6 sm:p-8">
              <p className="font-display text-white text-[clamp(0.9rem,1.2vw,1.2rem)] uppercase tracking-tight mb-1">
                NCSS
              </p>
              <p className="font-mono text-[clamp(9px,0.6vw,10px)] text-white/30 uppercase tracking-[0.15em]">
                &copy; {new Date().getFullYear()} NUST Computer Science Society. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
